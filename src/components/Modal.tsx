import React from "react";

interface HighlightedWord {
  word: string; 
  color: "green" | "red"; 
}

interface Line {
  text: string; 
  highlightedWords?: HighlightedWord[]; 
}

interface ModalProps {
  isOpen: boolean;
  type: "success" | "error";
  icon: React.ReactNode; 
  lines: Line[]; 
  onClose: () => void; 
}

const Modal: React.FC<ModalProps> = ({ isOpen, type, icon, lines, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className="relative bg-white p-6  lg:w-[513.19px] lg:h-[481px]  w-[287px] h-[269.06px]
       border-[1.28px] border-[#FFC107] rounded-[52.53px] lg:rounded-[35.88px]  border-solid shadow-lg"
      >
       
        <button
          className="absolute top-4 right-5 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>

      
        <div className="flex justify-center items-center mt-10 mb-5 lg:mt-[70px] lg:mb-9">{icon}</div>

       
        <div className="text-center">
          {lines.map((line, index) => (
            <p key={index} className="leading-7 lg:leading-[53px] text-sm lg:text-[25px] font-semibold">
              {line.text.split(" ").map((word, wordIndex) => {
                const highlightedWord = line.highlightedWords?.find(
                  (highlight) => highlight.word === word
                );
                if (highlightedWord) {
                  return (
                    <span
                      key={wordIndex}
                      className={`text-${highlightedWord.color}-500 font-bold`}
                    >
                      {word}{" "}
                    </span>
                  );
                }
                return `${word} `;
              })}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
