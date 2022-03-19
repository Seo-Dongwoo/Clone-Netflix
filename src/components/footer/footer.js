import React from "react";
import Footer from "./index";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>질문이 있으신가요? 문의 전화: 080-001-9587</Footer.Title>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Link href="#">자주 묻는 질문</Footer.Link>
            <Footer.Link href="#">투자 정보(IR)</Footer.Link>
            <Footer.Link href="#">개인정보</Footer.Link>
            <Footer.Link href="#">속도</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Link href="#">고객 센터</Footer.Link>
            <Footer.Link href="#">입사 정보</Footer.Link>
            <Footer.Link href="#">쿠키 설정</Footer.Link>
            <Footer.Link href="#">법적 고지</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Link href="#">계정</Footer.Link>
            <Footer.Link href="#">지원 디바이스</Footer.Link>
            <Footer.Link href="#">회사 정보</Footer.Link>
            <Footer.Link href="#">오직 넷플릭스에서</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Link href="#">미디어 센터</Footer.Link>
            <Footer.Link href="#">이용 약관</Footer.Link>
            <Footer.Link href="#">문의하기</Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
