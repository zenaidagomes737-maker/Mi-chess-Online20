"use client";

import { useState, useRef, useEffect } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

interface Props {
  botElo: number; // de 500 a 2900
}

export default function ChessBoardAI({ botElo }: Props) {
  const [game, setGame] = useState(new Chess());
  const [fen, setFen] = useState("start");
  const stockfishRef = useRef<any>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/stockfish.js/10.0.2/stockfish.js";
    script.async = true;

    script.onload = () => {
      // Stockfish estará en window.Stockfish
      const StockfishGlobal = (window as any).Stockfish;
      if (!StockfishGlobal) {
        console.error("Stockfish no se cargó correctamente");
        return;
      }

      stockfishRef.current = StockfishGlobal(); // ⚠️ No usar 'new'
      stockfishRef.current.postMessage("uci");

      stockfishRef.current.onmessage = (event: any) => {
        const line = event.data || event;
        if (line.startsWith("bestmove")) {
          const move = line.split(" ")[1];
          game.move({ from: move.slice(0, 2), to: move.slice(2, 4), promotion: "q" });
          setFen(game.fen());
        }
      };
    };

    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const onPieceDrop = (source: string, target: string) => {
    const move = game.move({ from: source, to: target, promotion: "q" });
    if (!move) return false;
    setFen(game.fen());
    setTimeout(botMove, 500);
    return true;
  };

  const botMove = () => {
    if (!stockfishRef.current || game.moves().length === 0) return;
    stockfishRef.current.postMessage(`position fen ${game.fen()}`);
    const skill = Math.round(((botElo - 500) / (2900 - 500)) * 20);
    stockfishRef.current.postMessage(`setoption name Skill Level value ${skill}`);
    stockfishRef.current.postMessage("go movetime 500");
  };

  return <Chessboard position={fen} onPieceDrop={onPieceDrop} boardWidth={480} />;
}
