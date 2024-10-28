import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Add from "./components/Add/Add";
import View from "./components/View/View";
import Edit from "./components/Edit/Edit";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/view/:id" element={<View/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
