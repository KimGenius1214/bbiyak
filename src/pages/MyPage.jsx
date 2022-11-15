import React, { useState } from "react";
import HeaderHtml from "../common/HeaderHtml";
import Footer from "../common/Footer";
import styled from "@emotion/styled";
import pattern from "../images/pattern.jpg";
import user from "../images/user.png";
import setttings from "../images/settings.png";
import SettingModal from "../common/SettingModal";
const Main = styled.main`
  margin: 10px auto;
  background-color: #f5f5f5;
`;

const Container = styled.div`
  padding: 24px 0;
`;

const PaperContainer = styled.div`
  width: 640px;
  height: 640px;
  background-color: #fff;
  border: 1px solid #b0b9c2;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
`;

const HeadContent = styled.img`
  object-fit: stretch;
  width: 640px;
  height: 200px;
  z-index: 1;
`;

const Profile = styled.img`
  width: 55px;
  heigth: 55px;
  position: relative;
  top: -20px;
  left: 20px;
`;

const NickName = styled.div`
  font-size: 24px;
  font-weight: 900;
  margin-left: 20px;
  line-height: 10px;
`;

const ProfileText = styled.div`
  font-size: 14px;
  margin-left: 20px;
  margin-top: 10px;
`;

const MiniIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-top: 10px;
`;

const SettingIcon = styled.img`
  width: 20px;
  height: 20px;
  top: -200px;
  left: 600px;
  position: relative;
  z-index: 9;
`;

const Analysis = styled.div`
  width: 94%;
  height: 50px;
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  margin-left: 20px;
  margin-top: 20px;
`;

const AnalysisText = styled.div`
  fontsize: 14px;
  margin-left: 40px;
  font-weight: 400;
  margin-top: -25px;
`;

const PaperWrap = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 8px;
`;
const ColorPaper = styled.div`
  width: 200px;
  height: 200px;
  margin-left: 10px;
  border-radius: 10px;
  border: none;
`;
const PaperTitle = styled.div`
  color: white;
  font-weight: 500;
  font-size: 16px;
  margin-top: 10px;
  margin-left: 10px;
`;
const PaperRate = styled.div`
  color: white;
  font-weight: 500;
  font-size: 16px;
  margin-left: 10px;
`;

const PaperBottom = styled.div`
  color: white;
  font-weight: 400;
  font-size: 12px;
  margin-top: 80px;
  margin-left: 10px;
`;

const Link = styled.a``;

export default function MyPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <HeaderHtml />
      <SettingModal open={modalOpen} close={closeModal} header="Modal heading">
        함수형 모달 팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요!
      </SettingModal>
      <Main>
        <Container>
          <PaperContainer>
            <HeadContent src={pattern} alt="wallpaper"></HeadContent>
            <Link href={"#"}>
              <SettingIcon src={setttings} onClick={openModal}></SettingIcon>
            </Link>
            <Profile src={user} />
            <NickName>지니어스</NickName>
            <ProfileText>프로필이 없습니다</ProfileText>
            <Analysis>
              <MiniIcon
                src={
                  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNFRjY5MkUiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTEuMTggMTEuOTZoMy43NHY4LjM2SDEuMTh6TTE1Ljc1IDE2LjgzaDMuNzR2My40OWgtMy43NHpNNi4wNCA5LjEyaDMuNzR2MTEuMkg2LjA0ek0xMC45IDEzLjg0aDMuNzR2Ni40OEgxMC45eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkNBMjIiIGQ9Ik0xNy40NCAxLjM3bDEuNjYgNCA0LjMxLjM0LTMuMjggMi44MSAxIDQuMjEtMy42OS0yLjI2LTMuNjkgMi4yNiAxLjAxLTQuMjEtMy4yOS0yLjgxIDQuMzItLjM0eiIvPgogICAgPC9nPgo8L3N2Zz4K"
                }
              ></MiniIcon>
              <AnalysisText>취향분석</AnalysisText>
            </Analysis>
            <PaperWrap>
              <ColorPaper
                style={{
                  background:
                    "linear-gradient(90deg, rgba(129,217,87,1) 35%, rgba(188,231,114,1) 100%)",
                }}
              >
                <PaperTitle>영화</PaperTitle>
                <PaperRate>★1</PaperRate>
                <PaperBottom>보고싶어요 1</PaperBottom>
              </ColorPaper>
              <ColorPaper
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,191,102,1) 35%, rgba(255,199,153,1) 100%)",
                }}
              >
                <PaperTitle>TV 프로그램</PaperTitle>
                <PaperRate>★0</PaperRate>
                <PaperBottom>보고싶어요 0</PaperBottom>
              </ColorPaper>
              <ColorPaper
                style={{
                  background:
                    "linear-gradient(90deg, rgba(96,209,240,1) 35%, rgba(111,223,214,1) 100%)",
                }}
              >
                <PaperTitle>책</PaperTitle>
                <PaperRate>★0</PaperRate>
                <PaperBottom>읽고싶어요 0</PaperBottom>
              </ColorPaper>
              {/* <ColorPaper
                style={{
                  background:
                    "linear-gradient(90deg, rgba(158,102,249,1) 35%, rgba(188,138,254,1) 100%)",
                }}
              >
                <PaperTitle>웹툰</PaperTitle>
                <PaperRate>★5</PaperRate>
                <PaperBottom>보고싶어요 0</PaperBottom>
              </ColorPaper> */}
            </PaperWrap>
          </PaperContainer>
        </Container>
      </Main>
      <Footer />
    </div>
  );
}
