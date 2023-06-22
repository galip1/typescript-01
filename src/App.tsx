import React, { useState } from "react";
import "./App.css";
import Input from "./components/text";

////React.FC--functional component, type

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  console.log(todo, "todo");
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
    <div className="App">
      {/* {name + " " + { age }} */}
      <Input todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
