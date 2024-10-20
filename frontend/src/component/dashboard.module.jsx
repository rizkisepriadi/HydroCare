import { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useAuthContext } from "../hooks/useAuthContext";
import { enqueueSnackbar } from "notistack";
import useLogout from "../hooks/useLogout";
import { useNavigate } from "react-router-dom";

export function ProfileSection() {
  const [isUser, setIsUser] = useState({});
  const [isName, setIsName] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const [isCity, setIsCity] = useState("");
  const [isBirthDate, setIsBirthDate] = useState("");
  const [isTelp, setIsTelp] = useState("");
  const { user } = useAuthContext();

  // Mengambil data pengguna saat komponen pertama kali dimuat
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
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [user]);

  // Mengupdate state berdasarkan data pengguna yang diambil
  useEffect(() => {
    if (isUser) {
      setIsName(isUser.name || "");
      setIsEmail(isUser.email || "");
      setIsCity(isUser.city || "");
      setIsTelp(isUser.telp || "");

      if (isUser.birth_date) {
        setIsBirthDate(convertBirthDate(isUser.birth_date));
      }
    }
  }, [isUser]);

  // Fungsi untuk mengonversi format tanggal lahir ke format DD-MM-YYYY
  function convertBirthDate(birthDate) {
    const dateObj = new Date(birthDate);
    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = dateObj.getFullYear();
    return `${day}-${month}-${year}`;
  }

  // Fungsi untuk mengonversi tanggal lahir ke format MM/DD/YYYY untuk API
  function formatBirthDateForApi(birthDate) {
    const [day, month, year] = birthDate.split("-");
    return `${month}/${day}/${year}`;
  }

  // Fungsi untuk menangani pengiriman formulir
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user || !user.token) {
      enqueueSnackbar("User not authenticated", { variant: "error" });
      return;
    }

    const formattedBirthDate = formatBirthDateForApi(isBirthDate);

    const data = {
      name: isName,
      city: isCity,
      birth_date: formattedBirthDate,
      telp: isTelp,
    };

    axios
      .put(`http://localhost:5000/user/${isUser._id}/formaccount`, data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then(() => {
        enqueueSnackbar("Profile updated", {
          variant: "success",
          autoHideDuration: 1000,
        });
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        enqueueSnackbar("Failed to update profile", {
          variant: "error",
          autoHideDuration: 1000,
        });
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="font-semibold xl:text-lg">Nama</label>
          <input
            type="text"
            value={isName}
            onChange={(e) => setIsName(e.target.value)}
            placeholder="Enter Your Name"
            className="w-full p-2 mb-4 bg-transparent border-b-2 border-[#8DB2C7] focus:outline-none"
          />
        </div>
        <div>
          <label className="font-semibold xl:text-lg">Email</label>
          <input
            type="text"
            value={isEmail}
            placeholder="Enter Your Email"
            className="w-full p-2 mb-4 bg-transparent border-b-2 border-[#8DB2C7] text-gray-500 focus:outline-none"
            disabled
          />
        </div>
        <div>
          <label className="font-semibold xl:text-lg">Kota</label>
          <input
            type="text"
            value={isCity}
            onChange={(e) => setIsCity(e.target.value)}
            placeholder="Enter Your City"
            className="w-full p-2 mb-4 bg-transparent border-b-2 border-[#8DB2C7] focus:outline-none"
          />
        </div>
        <div>
          <label className="font-semibold xl:text-lg">Tanggal Lahir</label>
          <input
            type="text"
            value={isBirthDate}
            onChange={(e) => setIsBirthDate(e.target.value)}
            placeholder="Enter Your Birth Date (dd-mm-yyyy)"
            className="w-full p-2 mb-4 bg-transparent border-b-2 border-[#8DB2C7] focus:outline-none"
          />
        </div>
        <div>
          <label className="font-semibold xl:text-lg">Nomor Telepon</label>
          <input
            type="text"
            value={isTelp}
            onChange={(e) => setIsTelp(e.target.value)}
            placeholder="Enter Your Phone Number"
            className="w-full p-2 mb-4 bg-transparent border-b-2 border-[#8DB2C7] focus:outline-none"
          />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="text-white btn btn-primary">
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
}

export function KampanyeSection() {
  const { user } = useAuthContext();
  const [isUser, setisUser] = useState({});
  const [campaign, setCampaign] = useState([]);

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
          setisUser(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [user]);

  useEffect(() => {
    if (isUser._id) {
      axios
        .get(`http://localhost:5000/user/${isUser._id}/campaigns`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((response) => {
          setCampaign(response.data.campaigns);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [isUser]);

  const ongoingCampaigns = campaign.filter((item) => !item.finished);
  const followedCampaigns = campaign.filter((item) => item.finished);

  return (
    <div>
      <div className="pb-5">
        <h3 className="mb-4 text-xl font-semibold">Sedang Berlangsung</h3>
        <ul className="pl-5 list-disc xl:text-lg">
          {ongoingCampaigns.length > 0 ? (
            ongoingCampaigns.map((item) => (
              <li key={item._id} className="mb-2 xl:text-lg">
                <p className="text-base font-bold xl:text-lg">{item.title}</p>
                <div className="flex gap-1 text-xs font-medium xl:text-base">
                  <p>Selesai:</p>
                  {item.end_date &&
                    new Date(item.end_date).toLocaleDateString("id-ID", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                </div>
              </li>
            ))
          ) : (
            <p>Tidak ada kampanye yang sedang diikuti.</p>
          )}
        </ul>
      </div>

      <div>
        <h3 className="mb-4 text-xl font-semibold">Telah Diikuti</h3>
        <ul className="pl-5 list-disc xl:text-lg">
          {followedCampaigns.length > 0 ? (
            followedCampaigns.map((item) => (
              <li key={item._id} className="mb-2 xl:text-lg">
                <p className="text-base font-bold xl:text-lg">{item.title}</p>
                <div className="flex gap-1 text-xs font-medium xl:text-base">
                  <p>Selesai:</p>
                  {item.end_date &&
                    new Date(item.end_date).toLocaleDateString("id-ID", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                </div>
              </li>
            ))
          ) : (
            <p>Tidak ada kampanye yang pernah diikuti.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export function AkunSection() {
  const { logout } = useLogout();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { user } = useAuthContext();
  const [isUser, setisUser] = useState({});

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
          setisUser(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user || !user.token) {
      enqueueSnackbar("User not authenticated", { variant: "error" });
      return;
    }
    const data = {
      id: isUser._id,
      oldPassword: password,
      newPassword: newPassword,
      retypePassword: retypePassword,
    };

    axios
      .put(`http://localhost:5000/user/${isUser._id}/formsecurity`, data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then(() => {
        enqueueSnackbar("Password has updated", {
          variant: "success",
          autoHideDuration: 1000,
        });
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error response:", error.response);
        enqueueSnackbar(
          error.response?.data?.message || "Failed to update password",
          {
            variant: "error",
            autoHideDuration: 1000,
          }
        );
      });
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="p-2 border rounded-xl border-[#0063A7]"
      >
        <h1 className="text-xl font-bold">Ganti Password</h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Masukkan password lama"
          className="w-full p-2 mb-4 bg-transparent border-b-2 border-[#8DB2C7] focus:outline-none"
        />
        <input
          type="password"
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Masukkan password baru"
          className="w-full p-2 mb-4 bg-transparent border-b-2 border-[#8DB2C7] focus:outline-none"
        />
        <input
          type="password"
          onChange={(e) => setRetypePassword(e.target.value)}
          placeholder="Masukkan password barunya sekali lagi"
          className="w-full p-2 mb-4 bg-transparent border-b-2 border-[#8DB2C7] focus:outline-none"
        />
        <div className="flex justify-end">
          <button type="submit" className="text-white btn btn-primary">
            Simpan
          </button>
        </div>
      </form>

      {/* Keluar Akun */}
      <div className="mt-4">
        <button
          onClick={handleLogout}
          className="px-4 py-2 font-semibold text-white transition bg-red-500 rounded-full shadow-md xl:text-lg hover:bg-red-400 hover:text-red-200 focus:outline-none"
        >
          Keluar Akun
        </button>
      </div>
    </div>
  );
}
