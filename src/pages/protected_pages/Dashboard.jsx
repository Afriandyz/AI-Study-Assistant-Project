import FlashcardPreview from "../../components/FlashcardPreview";

const mockFlashcards = [
  {
    title: "Biologi Dasar",
    question: "Apa itu sel?",
    answer:
      "Sel adalah unit struktural dan fungsional terkecil dari makhluk hidup.",
  },
  {
    title: "Sejarah Indonesia",
    question: "Kapan Proklamasi Kemerdekaan Indonesia?",
    answer: "17 Agustus 1945.",
  },
  {
    title: "Matematika",
    question: "Apa itu bilangan prima?",
    answer:
      "Bilangan yang hanya memiliki dua faktor, yaitu 1 dan dirinya sendiri.",
  },
];

const quotes = [
  "Belajar hari ini adalah investasi untuk masa depan.",
  "Kegagalan adalah bukti bahwa kamu sedang mencoba.",
  "Setiap langkah kecil hari ini, adalah lompatan besar esok hari.",
  "Waktu terbaik untuk mulai belajar adalah sekarang.",
  "Ilmu tidak akan habis walau kamu pakai setiap hari.",
];

const today = new Date().getDay();
const todayQuote = quotes[today % quotes.length];

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-primary-text">
        Selamat Datang Kembali User!
      </h1>
      <p className="text-primary-text">
        Lanjutkan belajar dan lihat perkembanganmmu di bawah ini.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white shadow p-4 rounded-xl">
          <h2 className="text-sm text-primary-text">Flashcard Dibuat</h2>
          <p className="text-2xl font-semibold text-primary-text">12</p>
        </div>

        <div className="bg-white shadow p-4 rounded-xl">
          <h2 className="text-sm text-primary-text">Kuis Diselesaikan</h2>
          <p className="text-2xl font-semibold text-primary-text">5</p>
        </div>

        <div className="bg-white shadow p-4 rounded-xl">
          <h2 className="text-sm text-primary-text">Akurasi Jawaban</h2>
          <p className="text-2xl font-semibold text-primary-text">78%</p>
        </div>

        <div className="bg-white shadow p-4 rounded-xl">
          <h2 className="text-sm text-primary-text">Aktivitas Terakhir</h2>
          <p className="text-2xl font-semibold text-primary-text">
            2 hari lalu
          </p>
        </div>
      </div>

      <div className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">
          Rekomendasi Flashcards
        </h2>
        <p className="text-gray-500 text-sm">
          Lanjutkan belajar dari flashcards terbaru milikmu.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockFlashcards.map((card, index) => (
            <FlashcardPreview key={index} {...card} />
          ))}
        </div>
      </div>

      <div className="mt-8">
        <button className="px-4 py-2 bg-primary-text text-white rounded-lg shadow hover:opacity-90 transition cursor-pointer">
          Mulai Belajar Hari Ini
        </button>
      </div>

      <div className="flex justify-center mt-16">
        <div className="bg-blue-50 max-w-fit border-l-4 border-blue-400 p-4 rounded-lg mb-6">
          <p className="text-blue-800 italic">{todayQuote}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
