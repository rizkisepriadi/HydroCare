import React, { useEffect, useState } from "react";
import BlogCard from "../component/blogCard.jsx";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; // Jangan gunakan destructure { jwtDecode }

export default function Article() {
  const [isUser, setisUser] = useState({});
  const { user } = useAuthContext();
  const [articles, setArticles] = useState([]); // Pastikan ini array

  useEffect(() => {
    // Jika user terautentikasi, ambil informasi user
    axios
      .get(`http://localhost:5000/article`)
      .then((response) => {
        setArticles(response.data.data);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
      });

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
        })
        .catch((err) => {
          console.error("Error fetching user data:", err);
        });
    }
  }, [user]);

  return (
    <div className="flex flex-col px-[7%]">
      <h1 className="text-primary text-xl font-extrabold text-center xl:pt-20 lg:mb-5 lg:pt-10 lg:pb-0 py-10 md:text-2xl">
        Article
      </h1>
      <div className="flex flex-col">
        <a href="/articlePage" className="flex justify-end text-primary pb-2">
          Lihat Semua
        </a>
        <div className="flex flex-col lg:flex-row lg:justify-center gap-5 lg:gap-4 xl:gap-5">
          {articles.map((item) => (
            <BlogCard key={item._id} article={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
