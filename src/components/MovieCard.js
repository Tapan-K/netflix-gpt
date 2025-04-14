import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-2 hover:scale-110  hover:shadow-lg transition duration-200 ease-in-out">
      <img alt="Venom:The Last Dance" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
