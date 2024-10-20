import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Article from "./pages/article.jsx";
import About from "./pages/about.jsx";
import Campaign from "./pages/campaign.jsx";
import Dashboard from "./pages/dashboard.jsx";
import PrivacyPolicy from "./pages/privacyPolicy.jsx";
import TermsOfService from "./pages/termsOfService.jsx";
import CampaignPage from "./pages/campaignPage.jsx";
import ArticlePage from "./pages/articlePage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/article" element={<Article />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/article/:id" element={<Article />}/>
      <Route path="/campaign/:id" element={<Campaign />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/campaignPage" element={<CampaignPage />}/>
      <Route path="/privacyPolicy" element={<PrivacyPolicy />}/>
      <Route path="/termsOfService" element={<TermsOfService />}/>
      <Route path="/articlePage" element={<ArticlePage />}/>
    </Routes>
  );
}

export default App;
