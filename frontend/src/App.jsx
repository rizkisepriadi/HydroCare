import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Article from "./pages/article.jsx";
import About from "./pages/about.jsx";
import Campaign from "./pages/campaign.jsx";
import Dashboard from "./pages/dashboard.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/article" element={<Article />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/campaignPage" element={<CampaignPage />}/>
      <Route path="/campaign" element={<Campaign />}/>
      <Route path="/article/:id" element={<Article />}/>
      <Route path="/campaign/:id" element={<Campaign />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
    </Routes>
  );
}

export default App;
