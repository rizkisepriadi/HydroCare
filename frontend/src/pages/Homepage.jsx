import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; 
import Navbar from "../pageSection/navbar.jsx";
import Hero from "../pageSection/hero.jsx";
import Invitation from "../pageSection/invitation.jsx";
import FeedBack from "../pageSection/feedBack.jsx";
import SectionThird from "../pageSection/sectionThird.jsx";
import Campaign from "../pageSection/campaignSection.jsx";
import Article from "../pageSection/articleSection.jsx";
import FAQ from "../pageSection/faq.jsx";
import Footer from "../pageSection/footer.jsx";
import { useAuthContext } from "../hooks/useAuthContext";


export default function Homepage() {
  const [isUser, setisUser] = useState({});
  const { user } = useAuthContext();
  const [isLogin, setisLogin] = useState(false);

  useEffect(() => {
    // Memeriksa apakah pengguna terautentikasi dan mengambil data pengguna jika ada
    if (user && user.token) {
      const decoded = jwtDecode(user.token);
      axios
        .get(`http://localhost:5000/user/${decoded._id}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((response) => {
          setisUser(response.data);
          setisLogin(true);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [user]);

  return (
    <div>
      <Navbar isLogin={isLogin} isUser={isUser} />
      {/* Hero*/}
      <Hero />
      {/* Invitation */}
      <Invitation isLogin={isLogin} />
      {/* Feedback */}
      <FeedBack />
      {/* About  */}
      <SectionThird />
      {/* Campaign Card */}
      <Campaign />
      {/* Article */}
      <Article />
      {/* FAQ */}
      <FAQ />
      {/* Footer */}
      <Footer />
    </div>
  );
}
