'use client';
import { useState } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';

export default function Play1v1() {
  const [game, setGame] = useState(new Chess());
  const [fen, setFen] = useState('start');
  const [moves, setMoves] = useState<string[]>([]);

  const onPieceDrop = (source: string, target: string) => {
    const move = game.move({ from: source, to: target, promotion: 'q' });
    if (!move) return false;
    setFen(game.fen());
    setMoves([...moves, `${move.color === 'w' ? 'Blancas' : 'Negras'}: ${move.san}`]);
    return true;
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Partida 1v1</h2>
      <Chessboard position={fen} onPieceDrop={onPieceDrop} boardWidth={480} />
      <div className="card max-w-md overflow-auto">
        <h3 className="font-bold">Historial de jugadas</h3>
        <ul className="list-disc list-inside">
          {moves.map((m, i) => <li key={i}>{m}</li>)}
        </ul>
      </div>
    </div>
  );
}
