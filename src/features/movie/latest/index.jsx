import React from "react";
import styled from "@emotion/styled";
import useLatestMovie from "./useLatestMovie";
import Card from "../../../common/Card";

const Base = styled.div`
  margin-bottom: 42px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;

export default function LatestMovieSection() {
  const { data, isLoading } = useLatestMovie();

  const getYear = (date) => date.split("-")[0];

  return (
    <div>
      <Title>최근 개봉작</Title>
      <Base>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <Card
            key={data.data.id}
            linkUrl={`/movie/${data.data.id}`}
            title={data.data.title}
            posterPath={`https://image.tmdb.org/t/p/w300/${data.data.poster_path}`}
            voteAverage={data.data.vote_average}
            year={getYear(data.data.release_date)}
          />
        )}
      </Base>
    </div>
  );
}
