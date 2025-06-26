import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import FlashcardForm from "../../components/FlashcardForm";

const Flashcard = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchingFlashcards = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("flashcards")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Gagal fetch flashcards: ", error.message);
    } else {
      setFlashcards(data);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchingFlashcards();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Yakin ingin menghapus flashcard ini?.");
    if (!confirm) return;

    const { error } = await supabase.from("flashcards").delete().eq("id", id);

    if (error) {
      alert("Gagal menghapus flashcard.");
      console.error(error.message);
    } else {
      fetchingFlashcards();
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Flashcards Saya</h1>

      {loading && <p className="text-gray-500">Memuat Flashcards...</p>}

      {!loading && flashcards.length === 0 && (
        <p className="text-gray-500 italic mb-2">Belum ada flashcards</p>
      )}

      <FlashcardForm onAdd={fetchingFlashcards} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {flashcards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
          >
            <button
              onClick={() => handleDelete(card.id)}
              className="text-red-500 hover:text-red-700 text-sm cursor-pointer"
            >
              Delete
            </button>
            <p className="text-sm text-gray-600">
              <strong>Q:</strong> {card.question}
            </p>
            <p className="text-sm text-gray-600 italic">
              <strong>A:</strong> {card.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flashcard;
