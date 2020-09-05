import React from "react";

import Card from "components/Card";
import useMovieDbImageUrl from "hooks/useMovieDbImageUrl";

export function MoviePoster({ title, imagePath, imageAlt, imageWidth }) {
  const imageSrc = useMovieDbImageUrl(imagePath, imageWidth);

  return (
    <Card title={title}>
      <img className="rounded-lg" src={imageSrc} alt={imageAlt} />
    </Card>
  );
}

export default MoviePoster;
