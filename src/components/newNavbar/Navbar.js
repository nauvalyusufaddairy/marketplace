// import React from "react";
// import styled from "styled-components";

// function Navbar() {
//   const Container = styled.div`
//     flex-direction: column;
//     width: 100%;
//     min-width: 1024px;
//     display: flex;
//     -webkit-box-align: center;
//     align-items: center;
//     background-color: rgb(255, 255, 255);
//     z-index: 999;
//     position: fixed;
//     top: 0px;
//     right: 0px;
//     left: 0px;
//     box-shadow: rgb(0 0 0 / 7%) 0px 4px 6px -1px;
//     transition: transform 280ms ease 0s;
//     height: 110px;
//   `;

//   const TopNavbar = () => {
//     const Top = styled.div`
//       width: 100%;
//       display: flex;
//       height: 32px;
//       flex-direction: row;
//       align-items: center;
//       justify-content: center;
//       z-index: 3;
//       background-color: rgb(243, 244, 245);
//       border-bottom: 1px solid rgb(243, 243, 243);
//       padding: 0px 32px;
//       position: fixed;
//       -webkit-box-pack: justify;

//       left: 0px;
//       right: 0px;
//     `;
//     return <Top>Under The Top</Top>;
//   };
//   const CenterNavbar = () => {
//     const Center = styled.div`
//       width: 96%;
//       left: 32px;
//       display: flex;
//       height: 56px;
//       top: 30px;
//       position: fixed;
//       -webkit-box-align: center;
//       align-items: center;
//       img {
//         width: 145px;
//         height: 32px;
//         flex-shrink: 0;
//       }
//       div.inputLayer0 {
//         position: relative;
//         width: 49%;
//         min-width: 150px;

//         div.inputLayer1 {
//           width: 100%;
//           -webkit-box-align: center;
//           align-items: center;
//           display: flex;

//           div.inputLayer2 {
//             width: 100%;
//             display: flex;
//             box-sizing: border-box;
//             border: solid 1px #e5e7e9;
//             -webkit-box-align: center;
//             align-items: center;
//             height: 32px;
//             border-radius: 8px;
//             transition: border 280ms ease 0s;
//             margin-top: 4px;
//             div.inputLayer3 {
//               width: 100%;
//               margin: 0px;
//               div.inputLayer4 {
//                 height: 100%;
//                 display: flex;
//                 -webkit-box-pack: center;
//                 justify-content: center;
//                 -webkit-box-align: center;
//                 align-items: center;
//                 border: none;
//                 div.inputLayer5 {
//                   border-radius: 8px;
//                   display: flex;
//                   -webkit-box-flex: inherit;
//                   flex-grow: inherit;
//                   -webkit-box-align: stretch;
//                   align-items: stretch;
//                   overflow: hidden;
//                   transition: border-color 280ms ease 0s;
//                   width: 100%;
//                   height: auto;
//                   background-color: #ffffff;
//                   border: 1px solid #e5e7e9;
//                   flex-direction: row;
//                   input {
//                     min-width: 0px;
//                     min-height: 0px;
//                     width: 100%;
//                     color: rgba(49, 53, 59, 0.96);
//                     font-family: inherit;
//                     background-color: transparent;
//                     line-height: 20px;
//                     border: none;
//                     outline: none;
//                     height: auto;
//                     font-size: 14px;
//                     padding-top: 8px;
//                     padding-bottom: 8px;
//                   }
//                   button {
//                     border: none;
//                     outline: none;
//                     position: relative;
//                     cursor: pointer;
//                     padding: 0px;
//                     transition: background-color 280ms ease 0s;
//                     width: 40px;
//                     background-color: #f3f4f5;
//                     flex: 0 0 auto;
//                     ::after {
//                       content: "";
//                       background-size: 24px;
//                       background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/af2f34c3.svg);
//                       background-repeat: no-repeat;
//                       background-position: center center;
//                       position: absolute;
//                       inset: 0px;
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     `;
//     return (
//       <Center>
//         <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg" />
//         <div className="inputLayer0">
//           <div className="inputLayer1">
//             <div className="inputLayer2">
//               <div className="inputLayer3">
//                 <div className="inputLayer4">
//                   <div className="inputLayer5">
//                     <input type="text" />
//                     <button />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Center>
//     );
//   };
//   return (
//     <Container>
//       <TopNavbar />
//       <CenterNavbar />
//     </Container>
//   );
// }

// export default Navbar;
import React, { useState } from "react";
import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import CartDropdown from "./CartDropdown";
const Container = styled.div`
  height: 90px;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  width: 1024px;
  box-shadow: rgb(0 0 0 / 7%) 0px 4px 6px -1px;
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  flex-direction: row;
`;
const Top = ({ content }) => {
  const TopContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 32px;

    z-index: 3;
    background-color: rgb(243, 244, 245);
    border-bottom: 1px solid rgb(243, 243, 243);
    padding: 0px 32px;
    position: fixed;
  `;
  return <TopContainer>{content}</TopContainer>;
};
const Bottom = () => {
  const [latch, setLatch] = useState(false);
  const [cartHover, setCartHover] = useState(false);

  const MiddleContainer = styled.div`
    display: flex;
    position: fixed;
    height: 52px;
    width: 96%;
    left: 32px;
    top: 30px;
    align-items: center;
    -webkit-box-align: center;
    div.img {
      width: 145px;
      height: 32px;
      flex-shrink: 0;
    }
  `;
  const InputContainer = styled.div`
    width: 49%;
    display: flex;
    padding-left: 4px;

    ${(props) =>
      props.latch ? `border: solid 1px #4FD15A;` : `border: solid 1px #e5e7e9;`}
    height: 32px;

    border-radius: 8px;
    margin-left: 20px;
    min-width: 150px;
    input {
      width: 95%;
      height: 100%;
      outline: none;
      border: none;
    }

    button {
      border: none;
      outline: none;
      position: relative;
      height: 100%;
      cursor: pointer;
      padding: 0px;
      transition: background-color 280ms ease 0s;
      width: 40px;
      background-color: #f3f4f5;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      flex: 0 0 auto;
      ::before {
        content: "";
        background-size: 24px;
        background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/af2f34c3.svg);
        background-repeat: no-repeat;
        background-position: center center;
        position: absolute;
        inset: 0px;
      }
    }
  `;
  const IconContainer = styled.div`
    width: 30%;
    height: 52px;
    margin-left: 30px;
    top: 30px;
    display: flex;

    align-items: center;
    gap: 30px;
    div.divider {
      width: 1.2px;
      min-width: 1.2px;
      height: 24px;
      background: rgb(224, 224, 224);
      margin: 0px 0px 0px 5px;
    }
  `;
  const DropdownDisabler = styled.div`
    /* background-color: rgba(0, 0, 0, 0.7); */
    background-color: black;
    /* opacity: 0.6; */
    position: fixed;
    inset: 110px 0px 0px;
    top: 110px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: 900;
    will-change: opacity;
    transform: translate3d(0px, 0px, 0px);
    transition: opacity 200ms ease 0ms;
  `;
  return (
    <MiddleContainer latch={latch}>
      <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg" />
      <InputContainer latch={latch}>
        <input
          type="text"
          onFocus={() => setLatch(true)}
          onBlur={() => setLatch(false)}
        />
        <button />
      </InputContainer>
      <IconContainer>
        <Badge badgeContent={1} color="primary">
          <div
            style={{ cursor: "pointer" }}
            onMouseOver={() => setCartHover(true)}
          >
            <ShoppingCart sx={{ height: "20px", width: "20px" }} />
            {cartHover ? (
              <div>
                <CartDropdown />
                <DropdownDisabler onClick={() => setCartHover(false)} />
              </div>
            ) : (
              ""
            )}
          </div>
        </Badge>
        <Badge>
          <NotificationsIcon sx={{ height: "20px", width: "20px" }} />
        </Badge>
        <Badge>
          <MailIcon sx={{ height: "20px", width: "20px" }} />
        </Badge>
        <div className="divider" />
        <AddBusinessIcon sx={{ height: "20px", width: "20px" }} />
      </IconContainer>
    </MiddleContainer>
  );
};

const Navbar = () => {
  return (
    <Container>
      <Top content="Tokopedia Clone" />
      <Bottom />
    </Container>
  );
};

export default Navbar;
