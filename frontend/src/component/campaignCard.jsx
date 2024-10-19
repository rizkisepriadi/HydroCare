import Temp from "../assets/Temp.svg";
import { CampaignButton } from "./Button.module";

export default function CampaignCard({ title, start, end, type, location, id }) {
  return (
    <div className="card md:card-side md:w-full bg-base-200 w-[350px] shadow-xl text-primary">
      <figure className="md:w-1/2">
        <img src={Temp} alt="Campaign" className="w-full h-full" />
      </figure>
      <div className="card-body">
        <h1 className="text-center text-xl font-bold md:text-left lg:text-2xl">{title}</h1>
        <div className="flex flex-col gap-2">
          <div>
            <p className="text-sm lg:text-lg">Tanggal Acara</p>
            <p className="lg:text-xl font-semibold">{start} - {end}</p>
          </div>
          <div>
            <p className="text-sm lg:text-lg">Pelaksanaan</p>
            <p className="lg:text-xl font-semibold">{type}</p>
          </div>
          <div>
            <p className="text-sm lg:text-lg">Lokasi</p>
            <p className="lg:text-xl font-semibold">{location}</p>
          </div>
        </div>{" "}
        <div className="card-actions justify-end">
          <CampaignButton link={`/campaign/${id}`} />
        </div>
      </div>
    </div>
  );
}
