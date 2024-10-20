import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import { useParams } from "react-router-dom";
import kutip from "../assets/kutip.svg";

const TextCarousel = () => {
  const { user } = useAuthContext();
  const [feedback, setFeedback] = useState([]);
  const { id } = useParams();

  // Menggunakan useEffect untuk mengambil data umpan balik dari server
  useEffect(() => {
    axios
      .get(`http://localhost:5000/feedback`)
      .then((response) => {
        if (response.status === 200) {
          setFeedback(response.data.data);
        } else {
          console.error(
            "Failed to fetch feedback, status code:",
            response.status
          );
        }
      })
      .catch((err) => {
        console.error("Error fetching feedback:", err);
      });
  }, [user]);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Menggunakan useEffect untuk mengatur interval rotasi umpan balik
  useEffect(() => {
    if (feedback.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === feedback.length - 1 ? 0 : prevIndex + 1
        );
      }, 8000);

      return () => clearInterval(intervalId);
    }
  }, [feedback.length]);

  if (feedback.length === 0) {
    return <div>Loading...</div>;
  }

  const currentFeedback = feedback[currentIndex];

  return (
    <div className="flex flex-col items-start max-w-[720px] flex-wrap">
      <div className="m-1 pt-2 md:pt-0 w-[20px] h-[20px] md:w-[26px] md:h-[22px]">
        <img
          src={kutip}
          alt="Quotation Image"
          className="object-cover w-auto h-auto"
        />
      </div>
      <div className="text-sm font-semibold text-center lg:text-base xl:text-lg 2xl:text-xl md:text-left md:pt-0 text-primary">
        {currentFeedback.desc}
      </div>
      <div className="flex justify-between w-full pt-1">
        <div className="flex gap-2">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={`/image/${currentFeedback.image}.svg`} alt="User" />
            </div>
          </div>
          <div className="flex items-center justify-center text-primary">
            <div className="flex flex-col">
              <h1 className="text-xs font-extrabold md:text-base">
                {currentFeedback.name}
              </h1>
              <p className="text-[10px] md:text-xs font-medium">
                {currentFeedback.position}
              </p>
            </div>
          </div>
        </div>
        <div className="flex mt-4">
          {feedback.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 mx-1 rounded-full transition duration-300 ${
                index === currentIndex ? "bg-primary" : "bg-blue-200"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextCarousel;
