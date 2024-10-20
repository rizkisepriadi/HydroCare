import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import Input from "../component/inputBar.jsx";
import { useSnackbar } from "notistack";
import { useLogin } from "../hooks/useLogin";

export default function Login({ isOpen, setIsOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const { login, isLoading, error } = useLogin();

  // Fungsi untuk menangani pengiriman form login
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      enqueueSnackbar("Login Berhasil", {
        variant: "success",
        autoHideDuration: 500,
      });
      window.location.reload() 
    } catch (err) {
      enqueueSnackbar(error || "Login Gagal", {
        variant: "error",
        autoHideDuration: 3000,
      });
    }
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // Menangani klik di luar modal untuk menutup modal
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
          <h1 className="text-xl font-bold">Welcome Back</h1>
        </div>
        <p className="pb-4 text-sm font-medium text-center">
          Masuk untuk tetap terhubung dengan kami.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col">
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
          <div className="flex items-center justify-between mb-3 text-sm">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="remember" id="remember" />
              <p>Ingat saya?</p>
            </div>
            <a href="/contact" className="font-bold">
              Lupa password?
            </a>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="text-white btn btn-primary"
          >
            Masuk
          </button>
        </form>
        <div className="flex flex-col items-center pt-3 font-semibold">
          <div className="flex gap-2">
            <p>Butuh bantuan?</p>
            <a href="/contact" className="font-bold">
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
