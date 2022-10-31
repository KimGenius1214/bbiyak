import React from "react";
import styled from "@emotion/styled";
import Card from "../../../common/Card";
import Slider from "../../../pages/Slider";
import usePopularMovie from "./usePopularMovie";

const Base = styled.div`
  margin-bottom: 42px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;

export default function PopularMovieSection() {
  const { data, isLoading } = usePopularMovie();

  const getYear = (date) => date.split("-")[0];

  return (
    <Base>
      <Title>인기 상영작</Title>
      {isLoading || !data ? (
        <div>Loading...</div>
      ) : (
        <Slider>
          {data &&
            data.data.results.map((movie) => (
              <Card
                src={`/movie/${movie.id}`}
                title={movie.title}
                posterPath={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                voteAverage={movie.vote_average}
                year={getYear(movie.release_date)}
              />
            ))}
        </Slider>
      )}
    </Base>
  );
}
