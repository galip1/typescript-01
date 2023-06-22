import React from "react";

type IProps = {
  ///todo nun strıng olacagı bellı
  //fakat setTodo nun type ını app.js de settodo uzerıne hover yapıldıgında gelen deger alınır
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
};

//const Input: React.FC = ({ todo, setTodo }: IProps) => {
const Input: React.FC<IProps> = ({ todo, setTodo }) => {
  //prop olarak gelen todo,settdo degerlerın type larını belirtmek gerekıyor.
  //ister yanlarında  istrde üstte tanımlanabılır.
  return (
    <div>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="yazınız ..."
      />
      <button>Ekle</button>
    </div>
  );
};
export default Input;
