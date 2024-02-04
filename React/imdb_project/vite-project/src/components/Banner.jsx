import React from "react";
// import BannerImg from "../assets/BannerImg.jpg";

import { useState, useEffect } from "react";

let bannerUrls = [
  {
    backdrop_path: "/f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg",
  },
  {
    backdrop_path: "/rVJfabCz1ViynQCEz54MRqdZig1.jpg",
  },
  {
    backdrop_path: "/vdpE5pjJVql5aD6pnzRqlFmgxXf.jpg",
  },
  {
    backdrop_path: "/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg",
  },
  {
    backdrop_path: "/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
  },
  {
    backdrop_path: "/uKP0B8HUJ08fas7NF77Xwu0bolJ.jpg",
  },
  {
    backdrop_path: "/nHf61UzkfFno5X1ofIhugCPus2R.jpg",
  },
  {
    backdrop_path: "/47SVqaO02doJ06tOmrjiWDkwU3T.jpg",
  },
  {
    backdrop_path: "/m3s0jyPGtluJ48kD0fUiPjXrRhr.jpg",
  },
  {
    backdrop_path: "/rrfBenawPGhkt5yvb124NSZwnAC.jpg",
  },
  {
    backdrop_path: "/jXJxMcVoEuXzym3vFnjqDW4ifo6.jpg",
  },
  {
    backdrop_path: "/5a4JdoFwll5DRtKMe7JLuGQ9yJm.jpg",
  },
  {
    backdrop_path: "/gsVC7HMf4VR2XFOyqjTSklY2Tms.jpg",
  },
  {
    backdrop_path: "/9ZlGiEKmcYrrxmiQEJDhjeT2kEW.jpg",
  },
  {
    backdrop_path: "/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg",
  },
  {
    backdrop_path: "/vAsxVpXP53cMSsD9u4EekQKz4ur.jpg",
  },
  {
    backdrop_path: "/kqSxCsGIT4rqrZTTMpYP8RIzojv.jpg",
  },
  {
    backdrop_path: "/sQLMaESdeELB7Dl8HdxfGlZYRzu.jpg",
  },
  {
    backdrop_path: "/k1KrbaCMACQiq7EA0Yhw3bdzMv7.jpg",
  },
  {
    backdrop_path: "/sRLC052ieEzkQs9dEtPMfFxYkej.jpg",
  },
];

// let num = Math.random() * 10;

const Banner = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    let idx = Math.floor(Math.random() * 10);
    setIndex(idx);
  }, []);
  return (
    <div>
      <div
        className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${bannerUrls[index].backdrop_path})`,
        }}
      >
        <div className="text-center text-white w-full"> Avengers Endgame</div>
      </div>
    </div>
  );
};
export default Banner;
