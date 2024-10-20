import React from "react";
import Navbar from "../pageSection/navbar.jsx";
import Footer from "../pageSection/footer.jsx";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useAuthContext } from "../hooks/useAuthContext";
import BlogCard from "../component/blogCard.jsx";

export default function articlePage() {
  const { user } = useAuthContext();
  const [isUser, setisUser] = useState({});
  const [article, setArticle] = useState({});
  const [articles, setArticles] = useState([]);

  // Mengambil data artikel dan informasi pengguna saat komponen dimuat
  useEffect(() => {
    axios
      .get(`http://localhost:5000/article/67144c3ef5cb4005b095748e`)
      .then((response) => {
        setArticle(response.data);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
      });

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
    <div>
      <Navbar />
      <div className="px-[7%] pt-[10%] md:pt-[14%] lg:pt-[11%] xl:pt-[10%] text-primary">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex items-center justify-center gap-3 md:w-4/6">
            <h1 className="text-xl font-bold text-center lg:text-2xl xl:text-3xl">
              Temukan Artikel Terbaru Seputar Air Bersih: Informasi dan Praktik
              Terbaik untuk Masyarakat
            </h1>
          </div>
          <div className="flex justify-center w-full mt-8">
            <marque className="w-full text-center border-y-2 border-[#0063A7] p-2">
              Bersama Menjadi Solusi yang Diandalkan dalam Upaya Memastikan Air
              Bersih untuk Semua
            </marque>
          </div>
        </div>
        <div className="pb-4 mt-16 border-b-2 border-[#0063A7]">
          <div className="w-full card md:card-side text-primary">
            <div className="w-full md:w-[35%]">
              <img
                src={`/image/${article.image}.svg`}
                alt="Article"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
            <div className="card-body md:w-[40%] px-0 md:px-4 lg:py-[7%]">
              <p className="flex-grow-0 font-semibold">
                {article.createdAt &&
                  new Date(article.createdAt).toLocaleDateString("id-ID", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <h1 className="text-xl font-bold md:text-left lg:text-2xl">
                {article.title}
              </h1>
              <div className="flex flex-col gap-2">
                <div>
                  <p className="">
                    {article.body
                      ? article.body.split(" ").slice(0, 60).join(" ")
                      : "Deskripsi tidak tersedia."}
                    {article.body &&
                      article.body.split(" ").length > 60 &&
                      "..."}
                    <span className="font-semibold">
                      <a href="">Baca Selengkapnya</a>
                    </span>
                  </p>
                </div>
                <div className="pb-4 lg:pb-0">
                  <a
                    href=""
                    className="w-full font-bold border btn rounded-xl border-primary text-primary"
                  >
                    Baca Artikel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-[7%] mb-20 mt-5">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5 lg:flex-row lg:justify-center lg:gap-4 xl:gap-5">
              {articles.map((item) => (
                <BlogCard key={item._id} article={item} />
              ))}
            </div>
            <div className="flex flex-col gap-5 lg:flex-row lg:justify-center lg:gap-4 xl:gap-5">
              {articles.map((item) => (
                <BlogCard key={item._id} article={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
