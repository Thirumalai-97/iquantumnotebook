"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const subscribe = async () => {
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });

      setEmail("");
      setStatus("Subscribed!");
    } catch (e) {
      setStatus("Error");
    }
  };

  return (
    <div className="border border-gray-700 bg-[#111216] p-6 rounded-xl mt-20">
      <h2 className="text-2xl font-semibold text-white">Join the Newsletter</h2>
      <p className="text-gray-400 mt-2">
        Get updates on Quantum, AI, Research & Life.
      </p>

      <div className="flex mt-4 gap-3">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-black border border-gray-700 px-3 py-2 rounded-lg w-full"
          placeholder="Enter your email"
        />

        <button
          onClick={subscribe}
          className="px-5 py-2 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400"
        >
          Join
        </button>
      </div>

      {status && <p className="text-cyan-400 mt-3">{status}</p>}
    </div>
  );
}
