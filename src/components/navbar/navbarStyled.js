import styled from "styled-components";

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
export const InputContainer = styled.div`
  position: relative;
  width: 49%;
  min-width: 150px;
  div {
    width: 100%;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    div {
      width: 100%;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      box-sizing: border-box;
      border: solid 1px #e5e7e9;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      height: 32px;
      border-radius: 8px;
      -webkit-transition: border 280ms ease;
      transition: border 280ms ease;
      margin-top: 4px;
      div {
        width: 100%;
        height: 100%;
        margin: 0;
        div {
          height: 100%;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-align-items: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          border: none;

          div {
            border-radius: 8px;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-flex: inherit;
            -webkit-flex-grow: inherit;
            -ms-flex-positive: inherit;
            flex-grow: inherit;
            -webkit-align-items: stretch;
            -webkit-box-align: stretch;
            -ms-flex-align: stretch;
            align-items: stretch;
            overflow: hidden;
            -webkit-transition: border-color 280ms ease;
            transition: border-color 280ms ease;
            width: 100%;
            height: auto;
            background-color: #ffffff;
            border: 1px solid #e5e7e9;
            -webkit-flex-direction: row;
            -ms-flex-direction: row;
            flex-direction: row;
            input {
              min-width: 0;
              min-height: 0;
              width: 100%;
              color: var(--color-text-high, rgba(49, 53, 59, 0.96));
              font-family: inherit;
              background-color: transparent;
              line-height: 20px;
              border: none;
              outline: none;
              height: auto;
              font-size: 14px;
              padding-top: 8px;
              padding-bottom: 8px;
              & :focus {
                width: 100%;
                display: flex;
                box-sizing: border-box;
                border: solid 1px #4fd15a;
                -webkit-box-align: center;
                align-items: center;
                height: 32px;
                border-radius: 8px;
                transition: border 280ms ease 0s;
                margin-top: 4px;
              }
            }
          }
        }
      }
    }
  }
`;
export const InputWrapper = () => {
  const [focus, setFocus] = React.useState(false);
  const handleFocus = (e) => {
    setFocus(e.target.value);
  };
  const InputContainer = styled.div`
    width: 50%;
    min-width: 150px;
    border-radius: 8px;

    /*for hovering #4fd15a  */
    border: 1.3px solid #e5e7e9;
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
  `;
  return (
    <InputContainer>
      <input type="text" />
    </InputContainer>
  );
};
