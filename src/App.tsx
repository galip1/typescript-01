import React, { useState } from "react";
import "./App.css";
import { PropTodos } from "./components/types/type";
import Messages from "./components/messages";
import Text from "./components/text";
////React.FC--functional component, type

const App: React.FC = () => {
  ///inputa girilen değeri tutan state
  const [todo, setTodo] = useState<string>("");

  ////butonların durumunu kontrol eden state
  const [editMode, setEditMode] = useState<number | null>(null);

  //mesajarı güncelleyen state
  const [editedMessage, setEditedMessage] = useState<string>("");

  //her yazılan ifadenin ekle ye basıldıgında tutmak için
  //ayrıca id numaralarına göre sildirme işlemide yapılacak
  //bize bu sekılde bır yapı gerekıyor
  //todos state ıne string yerine obje yazamayız
  //bu nedenle bu strıng yerıne bır tanımlama yapılıp o yazılmalı
  //bu ıslemı bu sayfa bazlı yapmak yerıne ayrı bır klasorde yapılması daha uygun
  // [
  //   {
  //     message:"hello",
  //     id:5y

  //   }
  // ]

  //string yerine tanımladığımı propTodos u yerlestırdık
  //const [todos, setTodos] = useState<string[]>([]);
  const [todos, setTodos] = useState<PropTodos[]>([]);

  //ekle dedıkten sonra bir fonk na ıhtıyacım var
  const addMessage = () => {
    //ekranda yazılı bir todo varsa
    //mevcut todos ları ac,
    //sonra bir tane obje olcak sekılde bır yapı eklenır
    if (todo) {
      setTodos([...todos, { message: todo, id: todos.length + 1 }]);
      // Todo değerini boş bir dizeye ayarla
      // input alanındaki todo değeri temizlenir.
      setTodo("");
    }
  };

  //silmek için id gerekli,ayrıca tek deger oldugu ıcın number ı buarya yazabılrız
  const deleteMessage = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateMessage = (id: number, message: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, message } : todo))
    );
    setEditMode(null);
    alert("updated");
  };

  // console.log(todo, "todo");
  // console.log(todos, "todos");
  // let name: string = "john";
  // let age: number = 52;
  // let done: boolean = true;
  // let trial: any = "uygulama";
  // let different: string | number = "hello"; //hello yerıne sayı da yazılsa hata vermez

  // ////1-type

  // type obj01 = {
  //   name: string;
  //   age: number;
  //   done: boolean;
  //   ///don?e: boolean;
  // };

  // type obj02 = {
  //   name: string;
  //   age: number;
  //   done: boolean;
  //   accept?: boolean;
  // };

  // //değerlerin tiplerini önce yukarıda tanımlamak daha uygun.
  // let obj: obj01 = {
  //   name: "john",
  //   age: 52,
  //   done: true,
  //   //++++eğer objType kısmında tanımlanan değer burada yazılmazsa hata verir
  //   //bu hatadan kurtulmak için yukrıda done sonuna ? konulur.
  //   //done:true
  // };

  // //2-interface
  // interface obj03 {
  //   name: string;
  //   age: number;
  //   done: boolean;
  //   ///don?e: boolean;
  // }

  // interface obj04 extends obj03 {
  //   // name: string;
  //   // age: number;
  //   // done: boolean;
  //   accept?: boolean;
  // }
  // let objtwo: obj04 = {
  //   name: "john",
  //   age: 52,
  //   done: true,
  //   //++++eğer objType kısmında tanımlanan değer burada yazılmazsa hata verir
  //   //bu hatadan kurtulmak için yukrıda done sonuna ? konulur.
  //   //done:true
  // };

  return (
    <div className="App bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <Text todo={todo} setTodo={setTodo} addMessage={addMessage} />
        <Messages
          todos={todos}
          deleteMessage={deleteMessage}
          updateMessage={updateMessage}
          editMode={editMode}
          setEditMode={setEditMode}
          editedMessage={editedMessage}
          setEditedMessage={setEditedMessage}
        />
      </div>
    </div>
  );
};

export default App;
