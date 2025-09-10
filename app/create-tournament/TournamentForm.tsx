"use client";

import React, { useState } from "react";

export default function TournamentForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("gratis");
  const [fee, setFee] = useState("");
  const [prizes, setPrizes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = { name, date, type, fee, prizes };
    console.log("Torneo creado:", data);
    alert("¡Torneo creado correctamente!");
    // Aquí iría la lógica para enviar los datos al backend
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <label>
        Nombre del torneo:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Nombre del torneo"
          style={{ width: "100%", padding: "0.5rem" }}
        />
      </label>

      <label>
        Fecha:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          style={{ width: "100%", padding: "0.5rem" }}
        />
      </label>

      <label>
        Tipo de torneo:
        <select value={type} onChange={(e) => setType(e.target.value)} style={{ width: "100%", padding: "0.5rem" }}>
          <option value="gratis">Gratis</option>
          <option value="pago">Pago</option>
        </select>
      </label>

      {type === "pago" && (
        <label>
          Cuota de inscripción:
          <input
            type="number"
            value={fee}
            onChange={(e) => setFee(e.target.value)}
            placeholder="Monto a pagar"
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </label>
      )}

      <label>
        Premios (por ejemplo: 1°: $100, 2°: $50):
        <input
          type="text"
          value={prizes}
          onChange={(e) => setPrizes(e.target.value)}
          placeholder="Premios"
          style={{ width: "100%", padding: "0.5rem" }}
        />
      </label>

      <button
        type="submit"
        style={{
          padding: "0.75rem",
          backgroundColor: "#4CAF50",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
          border: "none",
          borderRadius: "5px",
          transition: "all 0.2s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#45a049")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4CAF50")}
      >
        Crear Torneo
      </button>
    </form>
  );
}
