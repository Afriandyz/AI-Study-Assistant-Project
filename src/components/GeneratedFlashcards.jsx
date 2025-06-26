/* eslint-disable */

import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const GeneratedFlashcards = ({ onGenerate }) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setLoading(true);

    try {
      const res = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "mistralai/mistral-7b-instruct",
          messages: [
            {
              role: "system",
              content:
                'kamu adalah generator flashcard. kembalikan hanya array JSON. Contoh Format: [{"question": "apa itu sel", "answer": "Unit review terkecil makhluk hidup"}]. Jangan tambahkan teks lain.',
            },
            {
              role: "user",
              content: input,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "http://localhost:5173",
            "X-Title": "Flashcard AI Generator",
          },
        }
      );

      const choice = res.data.choices?.[0];
      const rawText =
        choice?.message?.content || choice?.content || choice?.text;

      if (!rawText) {
        alert("Ai tidak memberikan jawaban yang bisa di proses");
        console.log("Pilihan AI: ", choice);
      }

      const jsonStart = rawText.indexOf("[");
      const jsonEnd = rawText.lastIndexOf("]");
      const flashcards = JSON.parse(rawText.slice(jsonStart, jsonEnd + 1));
      console.log("Parsed Flashcards: ", flashcards);

      onGenerate(flashcards);
    } catch (error) {
      console.error("Gagal Request: ", error.message);
      if (error.response) console.log("Detail: ", error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 bg-white rounded-xl shadow space-y-3"
    >
      <textarea
        rows={6}
        className="w-full p-3 border rounded-lg outline-none"
        placeholder="Tulis materi pelajaran di sini..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        disabled={loading}
        onClick={handleGenerate}
        className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700"
      >
        {loading ? "Menghasilkan..." : "Generate Flashcards"}
      </button>
    </motion.div>
  );
};

export default GeneratedFlashcards;
