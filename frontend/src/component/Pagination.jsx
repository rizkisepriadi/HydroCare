import React, { useState, useEffect } from "react";
import axios from "axios"; // Ensure axios is imported
import { useAuthContext } from "../hooks/useAuthContext";
import { useParams } from "react-router-dom"; // Ensure this import is correct
import kutip from "../assets/kutip.svg";

const TextCarousel = () => {
  const { user } = useAuthContext();
  const [feedback, setFeedback] = useState([]); // Initialize as an empty array
  const { id } = useParams(); // If you need `id`, make sure it's used correctly

  useEffect(() => {
    // Fetch feedback data
    axios
      .get(`http://localhost:5000/feedback`) // Ensure this endpoint returns the expected structure
      .then((response) => {
        if (response.status === 200) {
          setFeedback(response.data.data); // Adjust this if your API structure is different
        } else {
          console.error("Failed to fetch feedback, status code:", response.status);
        }
      })
      .catch((err) => {
        console.error("Error fetching feedback:", err);
      });
  }, [user]); // Remove `id` if it's not being used

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (feedback.length > 0) { // Only set interval if there's feedback
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === feedback.length - 1 ? 0 : prevIndex + 1
        );
      }, 8000);

      return () => clearInterval(intervalId);
    }
  }, [feedback.length]);

  // Check if there are any feedback items
  if (feedback.length === 0) {
    return <div>Loading...</div>; // Show loading until feedback is fetched
  }

  const currentFeedback = feedback[currentIndex]; // Get the current feedback based on index

  return (
    <div className="flex flex-col items-start max-w-[720px] flex-wrap">
      <div className="m-1 pt-2 md:pt-0 w-[20px] h-[20px] md:w-[26px] md:h-[22px]">
        <img
          src={kutip}
          alt="Quotation Image"
          className="object-cover w-auto h-auto"
        />
      </div>
      <div className="text-sm lg:text-base xl:text-lg 2xl:text-xl font-semibold text-center md:text-left md:pt-0 text-primary">
        {currentFeedback.desc} {/* Access text property from the current feedback */}
      </div>

      {/* User Info */}
      <div className="flex pt-1 w-full justify-between">
        <div className="flex gap-2">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={`/image/${currentFeedback.image}.svg`} alt="User" />
            </div>
          </div>
          <div className="flex justify-center items-center text-primary">
            <div className="flex flex-col">
              <h1 className="text-xs md:text-base font-extrabold">
                {currentFeedback.name} {/* Access name from the current feedback */}
              </h1>
              <p className="text-[10px] md:text-xs font-medium">
                {currentFeedback.position} {/* Access position from the current feedback */}
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
