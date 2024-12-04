import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import CreateBook from "./pages/CreateBook.jsx";
import EditBook from "./pages/EditBook.jsx";
import DeleteBook from "./pages/DeleteBook.jsx";
import ShowBook from "./pages/ShowBook.jsx";
import { RecoilRoot } from "recoil";

function App() {
  return (
  <RecoilRoot>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/books/details/:id" element={<ShowBook />} />
        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
      </Routes>
      </RecoilRoot>
    
  );
}

export default App;
