import React, { useEffect, useState } from "react";
import Navbar from "../pageSection/navBar";
import Footer from "../pageSection/footer";
import BlogCard from "../component/blogCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useAuthContext } from "../hooks/useAuthContext";
import ReactMarkdown from "react-markdown";

export default function Article() {
  const [isUser, setIsUser] = useState({});
  const { id } = useParams();
  const { user } = useAuthContext();
  const [article, setArticle] = useState({}); // Ubah default dari array ke object
  const [articles, setArticles] = useState([]); // Pastikan ini array
  const [currentArticleId, setCurrentArticleId] = useState("");

  useEffect(() => {
    // Fetch article based on ID
    axios
      .get(`http://localhost:5000/article/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setArticle(response.data);
          setCurrentArticleId(response.data._id);
          axios
            .get(`http://localhost:5000/article`)
            .then((response) => {
              setArticles(response.data.data);
            })
            .catch((err) => {
              console.error("Error fetching articles:", err);
            });
        } else {
          console.error(
            "Failed to fetch article, status code:",
            response.status
          );
        }
      })
      .catch((err) => {
        console.error("Error fetching article:", err);
      });

    // Fetch user data if user is authenticated
    if (user && user.token) {
      const decoded = jwtDecode(user.token);
      axios
        .get(`http://localhost:5000/user/${decoded._id}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((response) => {
          setIsUser(response.data);
        })
        .catch((err) => {
          console.error("Error fetching user data:", err);
        });
    }
  }, [user, id]); // Tambahkan dependency array

  const handleReadArticle = (articleId) => {
    setCurrentArticleId(articleId);
  };

  return (
    <div>
      <Navbar />
      <div className="px-[7%] pt-[10%] lg:pt-[11%] xl:pt-[10%] 2xl:pt-[7%]">
        <div className="flex flex-col lg:flex-row lg:gap-5 xl:gap-8 pt-3 text-primary">
          <div>
            <div className="flex justify-center items-start">
              <img
                src={`/image/${article.image}.svg`}
                alt="Blog"
                className="xl:w-full xl:mb-5 h-full bg-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-2 pt-5">
                <h1 className="font-bold xl:text-3xl">
                  {article.title || "Loading..."}
                </h1>
                <div className="flex justify-between font-normal text-sm">
                  <p>{article.author || "Author Loading..."}</p>
                  {article.createdAt &&
                    new Date(article.createdAt).toLocaleDateString("id-ID", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                </div>
                <p className="border border-b border-primary mb-5"></p>
              </div>

              <ReactMarkdown className="whitespace-pre-line pb-5 xl:text-lg prose">
                {article.body || "Loading..."}
              </ReactMarkdown>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 lg:items-start mb-5">
            <h1 className="text-primary font-semibold xl:text-xl">
              Baca artikel lainnya...
            </h1>
            {articles
              .filter((item) => item._id !== currentArticleId) // Saring artikel yang sedang dibaca
              .slice(0, 2) // Ambil 3 artikel pertama
              .map((item) => (
                <BlogCard
                  key={item._id}
                  article={item}
                  onRead={() => handleReadArticle(item._id)} // Atur fungsi saat artikel dibaca
                />
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
