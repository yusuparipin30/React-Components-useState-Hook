//2.MEMBUAT USE STATE (berfungsi untuk merubah variable) import di react library
import { useState } from "react"
 
function App() {
  //untuk merubah variable dengan USESTATE masukan variable title ke dalam usetate hook
//  //usetate ini akan mereturn array yang terdiri dari dua parameter
//  //parameter array 1.satate nya , 2. function yang berfungsi untuk merubah titlenya
  const [title, setTitle] = useState("Hello World");
 
  const changeTitle = () => {
    setTitle("Title Changed");
  }
   //"penting" membuat USE STATE di buttont yaitu changeTitle dan memanggil methot dengan ero function di variabel ChangeTitle
  return (
    <div>
      <h1>{ title }</h1>
      <button onClick={ changeTitle }>Change Title</button>
    </div>
  );
}
 
export default App;