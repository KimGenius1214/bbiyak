import React from "react";
import styled from "@emotion/styled";

const Base = styled.footer`
  display: block;
  box-sizing: border-box;
  width: 100%;
`;

const Section = styled.section`
  background-color: #1c1d1f;
`;

const Statistics = styled.section`
  background: #101113;
  width: 100%;
  height: 62px;
  line-height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Summary = styled.span`
  color: #d1d1d2;
  font-size: 19px;
  font-weight: 500;
  line-height: 22px;
  text-align: center;
`;

const Emphasis = styled.em`
  color: #ff0558;
  font-size: 19px;
  font-weight: 500;
  line-height: 22px;
`;

const Container = styled.section`
  background: #1c1d1f;
  padding: 20px 0 38px;
`;

const ContentWrapper = styled.div`
  display: flex;
  margin: 0 60px;
`;

const Left = styled.div``;

const TermsAndPolicy = styled.ul``;

const TermsAndPolicyItem = styled.li`
  display: inline-block;
  color: #a5a5a7;
  font-size: 13px;
  font-weight: 400;
  line-height: 22px;
  vertical-align: top;
  cursor: pointer;
  &:not(:last-of-type) {
    &:after {
      content: "";
      display: inline-block;
      background: #848485;
      vertical-align: top;
      width: 1px;
      height: 12px;
      margin: 5px 8px 0;
    }
  }
`;

const Right = styled.div``;

const Footer = () => {
  return (
    <Base>
      <Section>
        <Statistics>
          <Summary>
            지금까지&nbsp;
            <Emphasis>★ 673,734,144 개의 평가가</Emphasis>
            &nbsp;쌓였어요.
          </Summary>
        </Statistics>
        <Container>
          <ContentWrapper>
            <Left>
              <TermsAndPolicy>
                <TermsAndPolicyItem>서비스 이용약관</TermsAndPolicyItem>
                <TermsAndPolicyItem>개인정보 처리방침</TermsAndPolicyItem>
                <TermsAndPolicyItem>회사 안내</TermsAndPolicyItem>
              </TermsAndPolicy>
              <TermsAndPolicy>
                <TermsAndPolicyItem>
                  고객센터 | cs@watchapedia.co.kr, 02-515-9985
                </TermsAndPolicyItem>
              </TermsAndPolicy>
              <TermsAndPolicy>
                <TermsAndPolicyItem>
                  광고 | 문의ad@watcha.com
                </TermsAndPolicyItem>
              </TermsAndPolicy>
              <TermsAndPolicy>
                <TermsAndPolicyItem>
                  제휴 및 대외 협력 | https://watcha.team/contact
                </TermsAndPolicyItem>
              </TermsAndPolicy>
              <TermsAndPolicy>
                <TermsAndPolicyItem>
                  주식회사 왓챠 | 대표 박태훈 | 서울특별시 서초구 강남대로 343
                  신덕빌딩 3층
                </TermsAndPolicyItem>
              </TermsAndPolicy>
              <TermsAndPolicy>
                <TermsAndPolicyItem>
                  사업자 등록 번호 211-88-66013
                </TermsAndPolicyItem>
              </TermsAndPolicy>
              <TermsAndPolicy>
                <TermsAndPolicyItem>
                  © 2022 by WATCHA, Inc. All rights reserved.
                </TermsAndPolicyItem>
              </TermsAndPolicy>
            </Left>
            <Right />
          </ContentWrapper>
        </Container>
      </Section>
    </Base>
  );
};

export default Footer;
