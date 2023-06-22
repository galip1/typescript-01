import React from "react";

type IProps = {
  ///todo nun strıng olacagı bellı
  //fakat setTodo nun type ını app.js de settodo uzerıne hover yapıldıgında gelen deger alınır
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  //addMessage type belirlenir
  //içine parametre gerekıyorsa yazılır, mesela sıldırmede gerekecek
  addMessage: () => void;
};

//const Input: React.FC = ({ todo, setTodo }: IProps) => {
const Text: React.FC<IProps> = ({ todo, setTodo, addMessage }) => {
  //prop olarak gelen todo,settdo degerlerın type larını belirtmek gerekıyor.
  //ister yanlarında  istrde üstte tanımlanabılır.
  return (
    <div className="flex items-center">
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="write something..."
        className="border border-gray-300 rounded px-4 py-2 w-64 mr-2"
      />
      <button
        onClick={addMessage}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
      >
        Add
      </button>
    </div>
  );
};
export default Text;
