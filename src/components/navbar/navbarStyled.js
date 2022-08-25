import styled, { keyframes } from "styled-components";

import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import Badge from "@mui/material/Badge";
import { Divider } from "@mui/material";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export const Container = styled.div`
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  min-width: 1024px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #fff;
  z-index: 999;
  position: fixed;
  top: 0px;
  right: 0;
  left: 0;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 7%);
  -webkit-transition: -webkit-transform 280ms ease;
  -webkit-transition: transform 280ms ease;
  transition: transform 280ms ease;
  height: 110px;
`;
export const InfobarWrapper = styled.div`
  width: 100%;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 32px;
  z-index: 3;
  background-color: #f3f4f5;
  border-bottom: 1px solid #f3f3f3;
  padding: 0 32px;
  position: fixed;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: center;
  left: 0px;
  right: 0px;
`;
export const NavbarContainer = styled.div`
  width: 96%;
  left: 32px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 56px;
  top: 30px;
  position: fixed;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;
export const Logo = styled.a`
  width: 145px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 4px 0 0 4px;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  position: relative;
  img {
    width: 100%;
    height: 32px;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }
  span {
    position: absolute;
    margin-right: 5px;
    top: -5%;
    right: -40%;
    font-weight: 900;
  }
`;
export const CategoryDropdown = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["OpenSauceOneRegular", "sans-serif"].join(","),
      pallete: {
        primary: {
          main: "inherit",
        },
      },
    },
  });
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <ThemeProvider theme={theme}>
      <Stack direction="row" spacing={2}>
        <div>
          <Button
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            sx={{
              color: "inherit",
              lineHeight: "inherit",
              fontWeight: "inherit",
              marginLeft: "50px",
              display: "flex",
              alignItems: "center",
            }}
          >
            Category
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom-start" ? "left top" : "left bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose}>PC Builds</MenuItem>
                      <MenuItem onClick={handleClose}>Components</MenuItem>
                      <MenuItem onClick={handleClose}>Accesories</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </Stack>
    </ThemeProvider>
  );
};

export const InputWrapper = () => {
  const [focus, setFocus] = React.useState(false);
  const focused = React.useRef(false);
  const handleFocus = (e) => {
    setFocus(true);

    console.log(focused.current);
  };
  const handleBlur = (e) => {
    setFocus(false);

    console.log(focused.current);
  };
  const InputContainer = styled.div`
    width: 45%;
    min-width: 150px;
    border-radius: 8px;

    /*for hovering #4fd15a  */
    ${(props) =>
      props.isFocus
        ? "border: 1.3px solid #4fd15a;"
        : "border: 1.3px solid #e5e7e9;"}

    height: 30px;
    margin-left: 8%;
    padding: 0 0 0 1%;
    display: flex;
    flex-direction: row;

    input {
      width: 95%;
      height: 100%;
      background-color: #ffffff;
      border: none;
      outline: none;
    }
    div {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 5%;
      height: 100%;
    }
  `;

  return (
    <InputContainer isFocus={focus}>
      <input
        type="text"
        onFocus={() => handleFocus()}
        onBlur={() => handleBlur()}
      />
      {console.log("syaya")}
      <div>
        <SearchIcon
          sx={{
            display: "block",
            margin: "0px",
            width: "98%",
            height: "98%",
            backgroundColor: "#E6E6E7",
            borderTopRightRadius: "7px",
            borderBottomRightRadius: "7px",
            "&:hover": {
              cursor: "pointer",
            },
          }}
        />
      </div>
    </InputContainer>
  );
};

export const MenuIconsContainer = () => {
  const [toogleNotification, setToogleNotification] = React.useState(false);
  const styles = {
    width: "26px",
    height: "26px",
    "&:hover": {
      cursor: "pointer",
    },
  };

  const Div = styled.div`
    width: 2px;
    height: 100%;
    display: flex;
    margin-left: 11px;
    margin-right: 11px;
    align-items: center;
    div {
      width: 1.2px;
      min-width: 1.2px;
      height: 24px;
      background: #e0e0e0;
    }
  `;
  const MenuIcons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8%;
    margin-left: 5%;
    width: 40%;
    height: 30px;
  `;
  const NotificationDropdownMenu = () => {
    const notifDropdown = keyframes`
    0% {height: 0px; }
    100% {height: 110px;}
    `;
    const NotificationWrapper = styled.div`
      position: fixed;
      top: 88px;
      right: 25px;
      background-color: rgb(255, 255, 255);
      border-radius: 0px 0px 10px 10px;
      box-shadow: rgb(0 0 0 / 12%) 0px 2px 8px 0px;
      transform: translate3d(0px, 0px, 0px);
      width: 400px;
      z-index: 495;
      overflow: hidden;
      padding: 0px 16px;
      animation-name: ${notifDropdown};
      animation-duration: 0.4s;
      height: auto;
    `;
    const NotificationTitle = styled.div`
      display: flex;
      font-size: 14px;
      font-weight: 800;
      background-color: rgb(255, 255, 255);
      -webkit-box-align: center;
      align-items: center;
      border-bottom: 1px solid rgb(229, 231, 233);
      padding: 16px 0px 8px;
      margin: 0px 16px;
      p {
        color: rgba(0, 0, 0, 0.7);
        font-size: inherit;
        line-height: 20px;
        margin-right: auto;
      }
    `;
    const Linked = styled.div`
      color: rgb(3, 172, 14);
      font-size: 12px;
      line-height: 16px;
      margin-left: auto;
    `;
    const Content = styled.div`
      width: 100%;
      font-size: 14px;
      color: rgba(49, 53, 59, 0.96);
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      text-decoration: none;
      border-bottom: 1px solid rgb(229, 231, 233);
      padding: 8px 0px;
      margin: 0px 16px;
      transition: color 280ms ease 0s;
    `;
    const ImgWrapper = styled.div`
      width: 40px;
      height: 40px;
      border-radius: 4px;
      margin: 4px 12px 4px 4px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `;
    const ProductDetails = styled.div`
      font-weight: 700;
      line-height: 20px;
      white-space: nowrap;
      text-overflow: ellipsis;
      line-clamp: 1;
      overflow: hidden;
      div {
        color: rgba(49, 53, 59, 0.96);
        font-size: 10px;
        font-weight: 300;
        line-height: 16px;

        margin-top: 2px;
      }
    `;
    const Price = styled.div`
      color: rgb(250, 89, 29);
      font-weight: 700;
      line-height: 20px;

      margin-left: 100px;
    `;

    return (
      <NotificationWrapper>
        <NotificationTitle>
          <p>Cart (1)</p> <Linked>Show</Linked>
        </NotificationTitle>
        <Content>
          <ImgWrapper>
            <img src="https://ecs7.tokopedia.net/img/cache/700/VqbcmM/2021/9/24/a34e52e1-db44-4fb8-b3ae-abff96b47c7d.jpg" />
          </ImgWrapper>
          <ProductDetails>
            jaket hudie hjasjhgdjkhsadjhsdaghjasdghjsdajghsadjghsad
            <div>1 barang (600gr)</div>
          </ProductDetails>
          <Price>$200</Price>
        </Content>
      </NotificationWrapper>
    );
  };

  return (
    <MenuIcons>
      <Badge>
        <div onMouseOver={() => setToogleNotification(true)}>
          <ShoppingCartIcon sx={styles} />
          {toogleNotification && <NotificationDropdownMenu />}
        </div>
      </Badge>
      <Badge>
        <MailIcon sx={styles} />
      </Badge>
      <Badge>
        <NotificationsIcon sx={styles} />
      </Badge>
      <Div>
        <div />
      </Div>
      <AddBusinessIcon sx={styles} />
      <AccountCircleIcon sx={styles} />
    </MenuIcons>
  );
};
// #18181A
