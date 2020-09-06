import React from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import Card from "components/Card";
import useMovieDbImageUrl from "hooks/useMovieDbImageUrl";

export function MoviePoster({
  id,
  title,
  imagePath,
  imageAlt,
  imageWidth,
  isLiked = false,
  onHeartClick,
}) {
  const imageSrc = useMovieDbImageUrl(imagePath, imageWidth);

  return (
    <Card title={title}>
      <img className="rounded-lg" src={imageSrc} alt={imageAlt} />
      <div className="absolute top-0 right-0 p-3">
        {isLiked ? (
          <BsHeartFill
            className={`text-red-600 text-4xl cursor-pointer`}
            style={{ filter: "drop-shadow(2px 2px 1px rgba(0,0,0,.25))" }}
            onClick={() => onHeartClick({ id, title, imagePath, isLiked })}
          />
        ) : (
          <BsHeart
            className={`text-white text-4xl cursor-pointer`}
            style={{ filter: "drop-shadow(2px 2px 1px rgba(0,0,0,.25))" }}
            onClick={() => onHeartClick({ id, title, imagePath, isLiked })}
          />
        )}
      </div>
    </Card>
  );
}

export default MoviePoster;
