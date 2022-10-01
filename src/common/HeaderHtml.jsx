import React, {
  useState,
  useRef,
  memo,
  useCallback,
  useDeferredValue,
  useMemo,
} from "react";
import styled from "@emotion/styled";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "./와챠.png";
import Modal from "@mui/material/Modal";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Twitter from "./free-icon-twitter-145812.png";
import Kakao from "./kakao-talk.png";
import Line from "./free-icon-line-4494526.png";
import FaceBook from "./free-icon-facebook-145802.png";
import Google from "./google.png";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { useEffect } from "react";

function HeaderHtml() {
  const Base = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    background: rgb(255, 255, 255);
    text-algin: center;
    box-shadow: rgb(0 0 0 / 0%) 0px 1px 0px 0px;
    width: 100%;
    height: 62px;
    z-index: 10;
  `;

  const Navigation = styled.nav`
    margin: 0 auto;
    max-width: 1200px;
  `;

  const MenuListWrapper = styled.div``;

  const MenuList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    verfloew: hidden;
  `;

  const Menu = styled.li`
    display: flex;
    align-items: center;
    height: 62px;
    flex-shrink: 0;
    &:not(:first-of-type) {
      margin-left: 24px;
    }
  `;

  const MenuButton = styled.button`
    font-size: 15px;
    color: ${({ active }) =>
      active ? `rgb(53, 53, 53)` : "rgb(126, 126, 126)"};
    cursor: pointer;
    border: none;
    background: none;
    vertical-align: top;
  `;

  const SearchMenu = styled.li`
    width: 300px;
    display: flex;
    align-items: cneter;
    height: 62px;
    flex-shrink: 1;
    margin: 0 0 0 auto;
    position: relative;
  `;

  const Link = styled.a`
    text-decoration: none;
  `;

  const TextLogo = styled.h1`
    font-size: 24px;
    font-weight: 700;
    > span[class="primary"] {
      color: rgb(255, 47, 110);
    }
    > span:not(.primary) {
      color: #222;
    }
  `;

  const SearchCotainer = styled.div`
    position: relative;
    width: 100%;
  `;

  const SearchformWrapper = styled.div``;

  const SearchForm = styled.form``;

  const SearchLabel = styled.label`
    background: rgb(245, 245, 247);
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 38px;
    border-radius: 2px;
    padding: 7px 8px;
    margin-top: 15px;
  `;

  const SearchInput = styled.input`
  font-size: 15px;
  font-weight: 400;
  background: transparent;
  width: 100%
  padding: 0 0 0 0px;
  border: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  caret-color: rgb(53, 53, 53);
  line-height: 23px;
  &:focus {
    outline: none;
  }
  `;

  const SignIn = styled.button`
    background: transparent;
    color: rgb(116, 116, 123);
    font-size: 14px;
    padding: 0;
    border: 0;
    cursor: pointer;
    margin: 15px 0;
  `;

  const SignUp = styled.button`
    border-radius: 6px;
    font-weight: 500;
    box-sizing: border-box;
    min-width: 72px;
    height: 32px;
    background: transparent;
    color: rgb(53, 53, 53);
    font-size: 14px;
    border: 1px solid rgba(116, 116, 123, 0.5);
    cursor: pointer;
    maring: 15px 0;
  `;

  const SearchResultWrapper = styled.div`
    position: absolute;
    top: 60px;
    left: 0;
    z-index: 999;
    background: #fff;
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
    max-height: 480px;
    overflow-y: scroll;
  `;

  const SerachResultListItem = styled.li`
    padding: 4px 6px;
    box-sizing: border-box;
    color: #222;
    font-size: 16px;
    width: 100%;
    height: 25px;
    display: flex;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &:hover {
      background: #eee;
    }
  `;

  const SearchResultList = styled.ul`
    list-style: none;
    marign: 0;
    padding: 0;
  `;

  const SignUpPaper = styled.div`
    width: 380px;
    height: 640px;
    background-color: white;
    margin: 160px auto;
    left: 50%;
    border-radius: 6px;
    text-align: center;
  `;

  const SignUpImg = styled.img`
    margin: 30px auto 0 auto;
    width: 220px;
  `;

  const SignUpText = styled.h4`
    clear: both;
  `;

  const PasswordText = styled.h3`
    clear: both;
    float: left;
    margin: 20px;
  `;

  const LoginLabel = styled.label`
    background: rgb(245, 245, 247);
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 90%;
    height: 50px;
    border-radius: 2px;
    padding: 7px 8px;
    margin: 10px auto 0 auto;
    border-radius: 6px;
  `;

  const LoginInput = styled.input`
  font-size: 15px;
  font-weight: bold;
  background: transparent;
  width: 100%
  padding: 0 0 0 0px;
  border: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  caret-color: rgb(53, 53, 53);
  line-height: 23px;
  &:focus {
    outline: none;
  }
  `;

  const LoginButton = styled.button`
    background: #ff2f6e;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 90%;
    height: 50px;
    border-radius: 2px;
    padding: 7px 8px;
    margin: 10px auto 0 auto;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  `;

  const LoginText = styled.span`
    color: white;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    margin: 0 auto;
  `;

  const TextContainer = styled.div`
    text-align: center;
    margin: 20px auto;
  `;

  const ColorText = styled.span`
    color: #ff2f6e;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  `;

  const GrayText = styled.span`
    color: gray;
    font-size: 14px;
    font-weight: bold;
  `;

  const GrayLine = styled.div`
    display: flex;
    flex-basis: 100%;
    align-items: center;
    color: lightgray;
    font-size: 12px;
    margin: 8px 0px;
    &::before,
    &::after {
      content: "";
      flex-grow: 1;
      background: lightgray;
      height: 1px;
      font-size: 0px;
      line-height: 0px;
      margin: 25px 16px;
    }
  `;

  const TextBackGround = styled.div`
    background: rgb(245, 245, 247);
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 90%;
    height: 70px;
    border-radius: 2px;
    padding: 7px 8px;
    margin: 15px auto 0 auto;
    border-radius: 6px;
  `;
  const LanguageContainer = styled.div`
    text-align: left;
    margin: 8px 20px;
    justify-content: top;
    vertical-align: top;
  `;

  const LanguageText = styled.span`
    text-decoration: underline;
    font-size: 15px;
    font-weight: bold;
    padding-bottom: 5px;
  `;

  const PasswordPaper = styled.div`
    width: 380px;
    height: 500px;
    background-color: white;
    margin: 200px auto;
    left: 50%;
    border-radius: 6px;
    text-align: left;
  `;

  const GrayFullLine = styled.hr`
    display: flex;
    flex-basis: 100%;
    align-items: center;
    color: lightgray;
    font-size: 12px;
    margin: 8px 0px;
    background-color: lightgray;
  `;

  const handleKeyword = () => {};
  const [signIn, setSignIn] = useState(false);
  const handleSignInOpen = () => {
    setSignIn(true);
    setSignUp(false);
  };
  const handleSignInClose = () => setSignIn(false);

  const [signUp, setSignUp] = useState(false);
  const handleSignUpOpen = () => {
    setSignUp(true);
    setSignIn(false);
  };
  const handleSignUpClose = () => setSignUp(false);

  const [password, setPassword] = useState(false);
  const handlePasswordOpen = () => {
    setPassword(true);
  };
  const handlePasswordClose = () => setPassword(false);

  // const [inputUsername, setInputUsername] = useState(null);
  // const [inputPassword, setInputPassword] = useState(null);
  // const [inputEmail, setInputEmail] = useState(null);

  // const onChangeUsername = memo((e) => {
  //   setInputUsername(e.target.value);
  // });

  // const onChangePassword = (e) => {
  //   setInputPassword(e.target.value);
  // };

  // const onChangeEmail = (e) => {
  //   setInputEmail(e.target.value);
  // };
  const inputUsername = useRef("");
  const inputPassword = useRef("");
  const inputEmail = useRef("");

  const onChange = (e, input) => {
    const value = e.target.value;
    input.current = value;
  };

  const saveHandler = async (e) => {
    e.preventDefault();
    const value = {
      username: inputUsername.current,
      password: inputPassword.current,
      email: inputEmail.current,
    };
    await axios.post("/api/users", value).then((res) => {
      console.log(res);
    });
  };

  return (
    <Base>
      <Navigation>
        <MenuListWrapper>
          <MenuList>
            <Menu>
              <Link href="/">
                <TextLogo>
                  {/* <span className="primary">WATCHOUT</span>
                  <span>PEDIA</span> */}
                  <img src={logo} alt="로고" />
                </TextLogo>
              </Link>
            </Menu>
            <Menu>
              <Link href="/">
                <MenuButton>영화</MenuButton>
              </Link>
              <Link href="/tv">
                <MenuButton>TV</MenuButton>
              </Link>
              <Link href="/book">
                <MenuButton>책</MenuButton>
              </Link>
              <Link href="/webToon">
                <MenuButton>웹툰</MenuButton>
              </Link>
            </Menu>
            <SearchMenu>
              <SearchCotainer>
                <SearchformWrapper>
                  <SearchForm>
                    <SearchLabel>
                      <AiOutlineSearch></AiOutlineSearch>
                      <SearchInput
                        placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요."
                        onChange={handleKeyword}
                      />
                    </SearchLabel>
                  </SearchForm>
                </SearchformWrapper>
              </SearchCotainer>
              <SearchResultWrapper>
                <SearchResultList>{}</SearchResultList>
              </SearchResultWrapper>
            </SearchMenu>
            <Menu>
              <SignIn onClick={handleSignInOpen}>로그인</SignIn>
              <Modal
                open={signIn}
                onClose={handleSignInClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <SignUpPaper>
                  <SignUpImg src={logo}></SignUpImg>
                  <SignUpText>로그인</SignUpText>
                  <LoginLabel>
                    <LoginInput placeholder="이메일"></LoginInput>
                  </LoginLabel>
                  <LoginLabel>
                    <LoginInput placeholder="비밀번호"></LoginInput>
                  </LoginLabel>
                  <LoginButton>
                    <LoginText>로그인</LoginText>
                  </LoginButton>
                  <TextContainer>
                    <ColorText onClick={handlePasswordOpen}>
                      비밀번호를 잊어버리셨나요?
                    </ColorText>
                    <Modal
                      open={password}
                      onClose={handlePasswordClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <PasswordPaper>
                        <CloseIcon
                          style={{
                            color: "#ff2f6e",
                            margin: "10px",
                            float: "left",
                            cursor: "pointer",
                          }}
                          onClick={handlePasswordClose}
                        ></CloseIcon>
                        <PasswordText>비밀번호 재설정</PasswordText>
                        <GrayFullLine style={{ clear: "both" }} />

                        <TextContainer>
                          <SignUpText style={{ float: "left", margin: "20px" }}>
                            비밀번호를 잊으셨나요?
                          </SignUpText>
                          <br />
                          <br />
                          <GrayText
                            style={{
                              clear: "both",
                              textAlign: "left",
                              float: "left",
                              margin: "20px 10px 20px 20px",
                            }}
                          >
                            가입했던 이메일을 적어주세요.
                            <br />
                            입력하신 이메일 주소로 비밀번호 변경 메일을 보낼게요
                          </GrayText>
                        </TextContainer>
                        <LoginLabel>
                          <LoginInput placeholder="이메일"></LoginInput>
                        </LoginLabel>
                        <LoginButton>
                          <LoginText>비밀번호 변경 이메일 보내기</LoginText>
                        </LoginButton>
                      </PasswordPaper>
                    </Modal>
                  </TextContainer>
                  <TextContainer>
                    <GrayText>계정이 없으신가요? </GrayText>
                    <ColorText onClick={handleSignUpOpen}>회원가입</ColorText>
                  </TextContainer>
                  <GrayLine> OR </GrayLine>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                  >
                    <Avatar
                      sx={{ width: 50, height: 50 }}
                      src={Kakao}
                      style={{ cursor: "pointer" }}
                    ></Avatar>
                    <Avatar
                      sx={{ width: 50, height: 50 }}
                      src={Google}
                      style={{ cursor: "pointer" }}
                    ></Avatar>
                    <Avatar
                      sx={{ width: 50, height: 50 }}
                      src={Twitter}
                      style={{ cursor: "pointer" }}
                    ></Avatar>
                    <Avatar
                      sx={{ width: 50, height: 50 }}
                      src={Line}
                      style={{ cursor: "pointer" }}
                    ></Avatar>
                    <Avatar
                      sx={{ width: 50, height: 50 }}
                      src={FaceBook}
                      style={{ cursor: "pointer" }}
                    ></Avatar>
                  </Stack>
                  <TextBackGround>
                    <GrayText>
                      TIP.왓챠 계정이 있으신가요? 왓챠와 왓챠피디아는 같은
                      계정을 사용해요.
                    </GrayText>
                  </TextBackGround>
                </SignUpPaper>
              </Modal>
            </Menu>
            <Menu>
              <SignUp onClick={handleSignUpOpen}>회원가입</SignUp>
              <Modal
                open={signUp}
                onClose={handleSignUpClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <SignUpPaper>
                  <SignUpImg src={logo}></SignUpImg>
                  <SignUpText>회원가입</SignUpText>
                  <SearchForm onSubmit={saveHandler}>
                    <LoginLabel>
                      <LoginInput
                        placeholder="이름"
                        // value={inputUsername}
                        // onChange={onChangeUsername}
                        onChange={(e) => onChange(e, inputUsername)}
                      ></LoginInput>
                    </LoginLabel>
                    <LoginLabel>
                      <LoginInput
                        placeholder="이메일"
                        // value={inputEmail}
                        // onChange={onChangeEmail}
                        onChange={(e) => onChange(e, inputEmail)}
                      ></LoginInput>
                    </LoginLabel>
                    <LoginLabel>
                      <LoginInput
                        placeholder="비밀번호"
                        // value={inputPassword}
                        // onChange={onChangePassword}
                        onChange={(e) => onChange(e, inputPassword)}
                      ></LoginInput>
                    </LoginLabel>
                    <LanguageContainer>
                      <LanguageIcon />
                      <LanguageText> 한국어 (대한민국) </LanguageText>
                      <ArrowDropDownIcon />
                    </LanguageContainer>
                    <LoginButton type="submit">
                      <LoginText>회원가입</LoginText>
                    </LoginButton>
                  </SearchForm>
                  <TextContainer>
                    <GrayText>이미 가입하셨나요? </GrayText>
                    <ColorText onClick={handleSignInOpen}>로그인</ColorText>
                  </TextContainer>
                  <GrayLine> OR </GrayLine>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                  >
                    <Avatar
                      sx={{ width: 50, height: 50 }}
                      src={Kakao}
                      style={{ cursor: "pointer" }}
                    ></Avatar>
                    <Avatar
                      sx={{ width: 50, height: 50 }}
                      src={Google}
                      style={{ cursor: "pointer" }}
                    ></Avatar>
                    <Avatar
                      sx={{ width: 50, height: 50 }}
                      src={Twitter}
                      style={{ cursor: "pointer" }}
                    ></Avatar>
                    <Avatar
                      sx={{ width: 50, height: 50 }}
                      src={Line}
                      style={{ cursor: "pointer" }}
                    ></Avatar>
                    <Avatar
                      sx={{ width: 50, height: 50 }}
                      src={FaceBook}
                      style={{ cursor: "pointer" }}
                    ></Avatar>
                  </Stack>
                </SignUpPaper>
              </Modal>
            </Menu>
          </MenuList>
        </MenuListWrapper>
      </Navigation>
    </Base>
  );
}

export default memo(HeaderHtml);
