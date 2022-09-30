import React from "react";
import styled from "@emotion/styled";

const Base = styled.section`
  padding: 11px 15px;
  border-bottom: 1px solid #ededed;
`;

const HeaderWrapper = styled.div``;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  color: #000;
  font-size: 19px;
  font-weight: 700;
  margin: 8px 0;
`;

const ContentsWrapper = styled.div`
  display: grid;
  grid-template-columes: repeat(5, 1fr);
  margin-top: 15px;
  row-gap: 24px;
`;

const Link = styled.a`
  text-decoration: none;
`;

const CardContainer = styled.div`
  max-width: 140px;
`;

const PosterWrapper = styled.div`
  width: 140px;
  height: 204px;
  border: 1px solid rgb(234, 233, 232);
`;

const Poster = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  vertical-align: top;
  object-fit: cover;
`;

const Info = styled.div`
  margin: 5px 10px 0px 0px;
`;

const CardTitle = styled.div`
  color: rgb(41, 42, 50);
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const VoteAverage = styled.div`
  marign-top: 2px;
  color: rgb(120, 120, 120);
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SimilarMovie = () => {
  return (
    <Link href="/movie/123">
      <CardContainer>
        <PosterWrapper>
          <Poster src="https://an2-img.amz.wtchn.net/image/v2/zfOomKaxhsduTHnbrvYNtg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk5qRTRNemt5TnpZNE9USXpOemszTVRZaWZRLnhwaW1uaUo3TmtudWw4Ym5McGNCVjRKSkpSdDUyTUZ1enItTlN5d0RtTHM" />
        </PosterWrapper>
        <Info>
          <CardTitle>제목</CardTitle>
          <VoteAverage>평점</VoteAverage>
        </Info>
      </CardContainer>
    </Link>
  );
};

export default function Similar() {
  return (
    <Base>
      <HeaderWrapper>
        <Header>
          <Title>비슷한 작품</Title>
        </Header>
      </HeaderWrapper>
      <ContentsWrapper>
        <SimilarMovie />
      </ContentsWrapper>
    </Base>
  );
}
