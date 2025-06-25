import { useState } from "react";
import { supabase } from "../lib/supabase";

const FlashcardForm = ({ onAdd }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const user = await supabase.auth.getUser();
    const userId = user?.data?.user?.id;

    if (!userId) {
      alert("User tidak ditemukan");
      return;
    }

    const { error } = await supabase.from("flashcards").insert([
      {
        user_id: userId,
        question,
        answer,
      },
    ]);

    if (error) {
      alert("gagal menyimpan flashcards.");
      console.error(error);
    } else {
      setQuestion("");
      setAnswer("");
      onAdd();
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-lg shadow space-y-3"
    >
      <h2 className="text-lg font-semibold">Tambah Flashcards</h2>
      <div>
        <label className="text-sm">Pertanyaan</label>
        <textarea
          className="w-full border border-gray-300 p-2 rounded-lg outline-none"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          rows={2}
          required
        />
      </div>
      <div>
        <label className="text-sm">Jawaban</label>
        <textarea
          className="w-full border border-gray-300 p-2 rounded-lg outline-none"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          rows={2}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-primary-text text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
        disabled={loading}
      >
        {loading ? "Menyimpan..." : "Simpan Flashcard"}
      </button>
    </form>
  );
};

export default FlashcardForm;
