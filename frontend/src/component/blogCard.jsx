import React from "react";

export default function BlogCard({ article }) {
  return (
    <a
      href={`/article/${article._id}`}
      className="card card-side lg:card bg-base-200 shadow-xl lg:w-[250px] xl:w-[300px] xl:h-[400px] text-primary"
    >
      <figure className="px-3 py-3 w-1/2 lg:w-full">
        <img
          src={`/image/${article.image}.svg`}
          alt="Article"
          className="rounded-xl w-full h-full"
        />
      </figure>
      <div className="card-compact pt-3 lg:pt-1 px-3 items-center text-left w-1/2 lg:w-full">
        <p className="text-[10px] md:text-sm self-start">
          {new Date(article.createdAt).toLocaleDateString("id-ID", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}{" "}
          {/* Format tanggal dinamis */}
        </p>
        <p className="text-xs md:text-lg lg:text-base xl:text-lg font-extrabold text-wrap">
          {article.title} {/* Menampilkan judul artikel */}
        </p>
        <p className="pb-3 lg:pb-3 text-[10px] md:text-[15px] lg:text-sm xl:text-base text-wrap">
          {article.summary} {/* Menampilkan ringkasan artikel */}
        </p>
      </div>
    </a>
  );
}
