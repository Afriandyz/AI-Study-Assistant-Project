import React from "react";

const FlashcardPreview = ({ title, question, answer }) => {
  return (
    <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition">
      <h3 className="font-bold text-lg text-primary-text">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">
        <strong>Q:</strong> {question}
      </p>
      <p className="text-sm text-gray-600 mt-2">
        <strong>A:</strong> {answer}
      </p>
    </div>
  );
};

export default FlashcardPreview;
