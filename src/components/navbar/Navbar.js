import React from "react";
import {
  CategoryDropdown,
  Container,
  InfobarWrapper,
  InputWrapper,
  Logo,
  MenuIconsContainer,
  NavbarContainer,
} from "./navbarStyled";

const Navbar = () => {
  return (
    <Container>
      <InfobarWrapper>
        {" "}
        This is not only tokopedia clone but 70% all tokopedia functionality is
        work fine and the rest is ongoing development :D
      </InfobarWrapper>
      <NavbarContainer>
        <Logo>
          {/* <span>{"</Fake>"}</span> */}
          <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg" />
        </Logo>
        <InputWrapper />
        <MenuIconsContainer />
      </NavbarContainer>
    </Container>
  );
};

export default Navbar;
