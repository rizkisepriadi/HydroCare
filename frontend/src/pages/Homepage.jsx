import React from "react";
import Navbar from "../pageSection/navBar.jsx";
import CampaignCard from "../component/campaignCard.jsx";
import Footer from "../pageSection/footer.jsx";
import FAQ from "../pageSection/faq.jsx";
import Hero from "../pageSection/hero.jsx";
import Invitation from "../pageSection/invitation.jsx";
import About from "../pageSection/about.jsx";
import Article from "../pageSection/articleSection.jsx";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      {/* Hero*/}
      <Hero />
      {/* Invitation */}
      <Invitation />
      {/* About  */}
      <About />
      {/* Campaign Card */}
      <CampaignCard />
      {/* Article */}
      <Article />
      {/* FAQ */}
      <FAQ />
      {/* Footer */}
      <Footer />
    </div>
  );
}
