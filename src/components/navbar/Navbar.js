import React from "react";
import {
  CategoryDropdown,
  Container,
  InfobarWrapper,
  InputWrapper,
  Logo,
  NavbarContainer,
} from "./navbarStyled";

const Navbar = () => {
  return (
    <Container>
      <InfobarWrapper>
        {" "}
        Mobile App Version is Under Development Cheerio ;D
      </InfobarWrapper>
      <NavbarContainer>
        <Logo>
          <span>{"</Fake>"}</span>
          <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg" />
        </Logo>
        <InputWrapper></InputWrapper>
      </NavbarContainer>
    </Container>
  );
};

export default Navbar;
