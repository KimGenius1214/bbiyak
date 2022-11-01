import React from "react";
import styled from "@emotion/styled";
import Card from "../../../common/Card";
import Slider from "../../../pages/Slider";
import useUpcomingMovie from "./useUpcomingMovie";

const Base = styled.div`
  margin-bottom: 42px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;

export default function UpcomingMovieSection() {
  const { data, isLoading } = useUpcomingMovie();

  const getYear = (date) => date.split("-")[0];

  return (
    <div>
      <Title>개봉 예정작</Title>
      <Base>
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
                  linkUrl={`/movie/${movie.id}`}
                />
              ))}
          </Slider>
        )}
      </Base>
    </div>
  );
}
