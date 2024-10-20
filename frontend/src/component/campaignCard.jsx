import Login from "../pages/login";
import { CampaignButton } from "./Button.module";
import { useEffect, useState } from "react";
import { Button } from "../component/Button.module";
import { useAuthContext } from "../hooks/useAuthContext";

export default function CampaignCard({
  title,
  start,
  end,
  type,
  location,
  id,
  image,
}) {
  const [isLogin, setisLogin] = useState(false);
  const [openlogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const { user } = useAuthContext();

  // Memeriksa status autentikasi pengguna
  useEffect(() => {
    if (user && user.token) {
      setisLogin(true);
    }
  });

  return (
    <div className="card lg:card-side md:w-full bg-base-200 w-[350px] shadow-xl text-primary">
      <figure className="lg:w-1/2">
        <img
          src={`/image/${image}.svg`}
          alt={title}
          className="w-full h-full"
        />
      </figure>
      <div className="card-body">
        <h1 className="text-xl font-bold text-center md:text-left lg:text-2xl">
          {title}
        </h1>
        <div className="flex flex-col gap-2">
          <div>
            <p className="text-sm lg:text-lg">Tanggal Acara</p>
            <p className="font-semibold lg:text-xl">
              {start} - {end}
            </p>
          </div>
          <div>
            <p className="text-sm lg:text-lg">Pelaksanaan</p>
            <p className="font-semibold lg:text-xl">{type}</p>
          </div>
          <div>
            <p className="text-sm lg:text-lg">Lokasi</p>
            <p className="font-semibold lg:text-xl">{location}</p>
          </div>
        </div>
        <div className="justify-end card-actions">
          {isLogin ? (
            <CampaignButton link={`/campaign/${id}`} />
          ) : (
            <Button
              text={"Login"}
              className="shadow-lg text-primary bg-neutral"
              onClick={() => {
                setOpenRegister(false);
                setOpenLogin(true);
              }}
            />
          )}
        </div>
      </div>
      {openlogin && <Login isOpen={openlogin} setIsOpen={setOpenLogin} />}
    </div>
  );
}
