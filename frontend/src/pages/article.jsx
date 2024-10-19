import React, { useEffect, useState } from "react";
import BlogImage from "../assets/blog1.svg";
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
  const [article, setArticle] = useState({}); // Ubah default dari array ke object\

  useEffect(() => {
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
          return axios.get(`http://localhost:5000/article/${id}`, {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          });
        })
        .then((response) => {
          setArticle(response.data); // Pastikan article di-update
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [user, id]); // Tambahkan dependency array

  return (
    <div>
      <Navbar />
      <div className="px-[7%] pt-[10%] lg:pt-[11%] xl:pt-[10%] 2xl:pt-[7%]">
        <div className="flex flex-col lg:flex-row lg:gap-5 xl:gap-8 pt-3 text-primary">
          <div>
            <div className="flex justify-center items-start">
              <img
                src={BlogImage}
                alt="Blog"
                className="xl:w-full xl:mb-5 h-full bg-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-2 pt-5">
                <h1 className="font-bold xl:text-3xl">{article.title}</h1>
                <div className="flex justify-between font-normal text-sm">
                  <p>{article.author}</p>
                  {new Date(article.createdAt).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}{" "}
                </div>
                <p className="border border-b border-primary mb-5"></p>
              </div>

              <ReactMarkdown  className="whitespace-pre-line pb-5 xl:text-lg prose">
                {`${article.body}`}
              </ReactMarkdown>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 lg:items-start mb-5">
            <h1 className="text-primary font-semibold xl:text-xl">
              Baca article lainnya...
            </h1>
            {/* Penerusan properti article ke BlogCard */}
            <BlogCard article={article} />
            <BlogCard article={article} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
