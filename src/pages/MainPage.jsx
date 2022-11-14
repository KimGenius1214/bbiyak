import React from "react";
import HeaderHtml from "../common/HeaderHtml";
import Footer from "../common/Footer";
import LatestMovieSection from "../features/movie/latest";
import NowPlayingSection from "../features/movie/nowPlaying";
import PopularMovieSection from "../features/movie/popular";
import styled from "@emotion/styled";
import TopRateMovieSection from "../features/movie/topRate";
import UpcomingMovieSection from "../features/movie/upcoming";

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;
`;

export default function MainPage() {
  return (
    <div>
      <HeaderHtml />
      <Main>
        <Container>
          {/* <LatestMovieSection /> */}
          <NowPlayingSection />
          <PopularMovieSection />
          <TopRateMovieSection />
          <UpcomingMovieSection />
        </Container>
      </Main>
      <Footer />
    </div>
  );
}
