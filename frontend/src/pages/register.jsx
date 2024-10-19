import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import Input from "../component/inputBar.jsx";
import { useSnackbar } from "notistack";
import { useSignup } from "../hooks/useSignup";
import { useNavigate } from "react-router-dom";

export default function Register({ isOpen, setIsOpen }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async () => {
    try {
      await signup(name, email, password);
      enqueueSnackbar("Register successful", {
        variant: "success",
        autoHideDuration: 500,
      });
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (err) {
      enqueueSnackbar(err.message || "Registration failed", {
        variant: "error",
        autoHideDuration: 3000,
      });
      console.error(err);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (e) => {
    if (e.target.id === "overlay") {
      closeModal();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      id="overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-65"
      onClick={handleClickOutside}
    >
      <div
        className="flex flex-col bg-white text-primary p-6 rounded-[20px] shadow-lg w-96 py-9 px-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-center gap-1">
          <img src={Logo} alt="Logo" className="size-6" />
          <h1 className="font-bold text-xl">Welcome to Hydrocare </h1>
        </div>
        <p className="text-sm text-center font-medium pb-4">
          Daftarkan diri mu segera
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label>Name</label>
          <Input
            type="text"
            value={name}
            placeholder="Enter Your Email"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label>Email</label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            required
          />
          <label>Password</label>
          <Input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="submit"
            value="Masuk"
            className="btn btn-primary text-white"
          />
        </form>
        <div className="flex flex-col items-center pt-3 font-semibold">
          <div className="flex gap-2">
            <p>Tidak punya akun?</p>
            <a href="/register" className="font-bold">
              Daftar Sekarang
            </a>
          </div>
          <div className="flex gap-2">
            <p>Butuh bantuan?</p>
            <a href="/" className="font-bold">
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
