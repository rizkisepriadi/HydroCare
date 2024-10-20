import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Perbaiki nilai awal
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const login = async (email, password) => {
    console.log("Sending request to login...");
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      console.log("Response received:", response);
      const json = await response.json();

      if (!response.ok) {
        console.log("Error:", json.error);
        setIsLoading(false);
        setError(json.error);
        throw new Error(json.error); // Lempar error untuk ditangkap oleh komponen
      } else {
        console.log("Login successful:", json);
        localStorage.setItem("user", JSON.stringify(json));
        dispatch({ type: "LOGIN", payload: json });
        setIsLoading(false);
        navigate("/");
      }
    } catch (err) {
      console.log("Error:", err);
      setIsLoading(false);
      setError(err.message);
      throw err; // Lempar error untuk ditangkap oleh komponen
    }
  };

  return { login, isLoading, error };
};
