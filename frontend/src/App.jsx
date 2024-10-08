import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Article from "./pages/article.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/article" element={<Article />}/>
    </Routes>
  );
}

export default App;
