import React from "react";
import Paper from "@mui/material/Paper";
import { MovieCardProps } from "./movie-card-type";

const MovieCard: React.FC<MovieCardProps> = ({ capa }) => {
  return (
    <Paper elevation={0} component="a" href="/1" sx={{ minWidth: "10rem" }}>
      <img src={capa} alt="Movie capa" style={{ width: "100%" }} />
    </Paper>
  );
};

export default MovieCard;
