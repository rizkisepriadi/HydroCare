import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Article from "./pages/article.jsx";
import About from "./pages/about.jsx";
import Campaign from "./pages/campaign.jsx";
import PrivacyPolicy from "./pages/privacyPolicy.jsx";
import TermsOfService from "./pages/termsOfService.jsx";
import CampaignPage from "./pages/campaignPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/article" element={<Article />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/campaignPage" element={<CampaignPage />}/>
      <Route path="/campaign" element={<Campaign />}/>
      <Route path="/privacyPolicy" element={<PrivacyPolicy />}/>
      <Route path="/termsOfService" element={<TermsOfService />}/>
    </Routes>
  );
}

export default App;
