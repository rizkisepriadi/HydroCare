import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Article from "./pages/article.jsx";
import Campaign from "./pages/campaign.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/article" element={<Article />}/>
      <Route path="/campaign" element={<Campaign />}/>
    </Routes>
  );
}

export default App;
