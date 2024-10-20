import React, { useEffect, useState } from "react";
import Navbar from "../pageSection/navbar";
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
  const [article, setArticle] = useState({});
  const [articles, setArticles] = useState([]);
  const [currentArticleId, setCurrentArticleId] = useState("");

  // Mengambil data artikel dan informasi pengguna saat komponen dimuat
  useEffect(() => {
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
  }, [user, id]);

  // Fungsi untuk memperbarui ID artikel yang sedang dibaca
  const handleReadArticle = (articleId) => {
    setCurrentArticleId(articleId);
  };

  return (
    <div>
      <Navbar />
      <div className="px-[7%] pt-[10%] lg:pt-[11%] xl:pt-[10%] 2xl:pt-[7%]">
        <div className="flex flex-col pt-3 lg:flex-row lg:gap-5 xl:gap-8 text-primary">
          <div>
            <div className="flex items-start justify-center">
              <img
                src={`/image/${article.image}.svg`}
                alt="Blog"
                className="h-full bg-cover xl:w-full xl:mb-5"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-2 pt-5">
                <h1 className="font-bold xl:text-3xl">
                  {article.title || "Loading..."}
                </h1>
                <div className="flex justify-between text-sm font-normal">
                  <p>{article.author || "Author Loading..."}</p>
                  {article.createdAt &&
                    new Date(article.createdAt).toLocaleDateString("id-ID", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                </div>
                <p className="mb-5 border border-b border-primary"></p>
              </div>

              <ReactMarkdown className="pb-5 prose whitespace-pre-line xl:text-lg">
                {article.body || "Loading..."}
              </ReactMarkdown>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 mb-5 lg:items-start">
            <h1 className="font-semibold text-primary xl:text-xl">
              Baca artikel lainnya...
            </h1>
            {articles
              .filter((item) => item._id !== currentArticleId)
              .slice(0, 2)
              .map((item) => (
                <BlogCard
                  key={item._id}
                  article={item}
                  onRead={() => handleReadArticle(item._id)}
                />
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
