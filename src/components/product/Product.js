import { style } from "@mui/system";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import styled from "styled-components";

/**
 *
 * @param {String} img contains url of the image
 *
 */
const Product = ({
  img,
  title,
  price,
  discount,
  badge,
  location,
  sellerName,
  ratings,
  selling,
}) => {
  const ContainerLayer0 = styled.div`
    display: flex;
    flex: 1 1 16.667%;
    width: 16.667%;
    padding: 0px 8px 25px;
    box-sizing: border-box;
    max-width: 16.667%;
  `;
  const ContainerLayer1 = styled.div`
    /* position: relative; */
    background-color: #ffffff;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-align-items: stretch;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    width: 100%;
    height: 100%;
    padding: 0;
    box-sizing: border-box;
  `;
  const ContainerLayer2 = styled.div`
    /* position: relative; */
    border-radius: 8px;
    min-width: 100%;
  `;
  const ContainerLayer3 = styled.div`
    /* position: relative; */
    flex: 0.5 1 0%;
    z-index: 1;
    height: 100%;
    min-width: 50%;
    cursor: pointer;
  `;
  const ContainerLayer4 = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 100%;
    box-shadow: rgb(0 0 0 / 12%) 0px 1px 6px 0px;
    border-radius: 9px;
    overflow: hidden;
    padding: 0px;
    margin: 0px;
  `;
  const ContainerLayer5 = styled.div`
    display: flex;
    /* position: static; */
    overflow: visible;
    background-color: #ffffff;
    flex-flow: column nowrap;
    height: 100%;
  `;
  const ImageContainer = styled.div`
    /* position: relative; */
    display: block;
    margin: 0px;
    height: 0px;
    padding-bottom: 100%;
    overflow: hidden;
  `;

  const Img = styled.div`
    /* position: relative; */
    opacity: 1;
    border: 0px;
    margin: 0px;
    padding: 0px;
    height: initial;
    background: none;
    overflow: hidden;
    box-sizing: border-box;
    display: block;
    width: 100%;
  `;

  const Imgs = styled.img`
    display: block;
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: 100%;
    margin: 0px auto;
  `;
  const DescContainer = styled.div`
    /* position: relative; */
    display: flex;
    flex: 1 1 0%;
    flex-direction: column;
    vertical-align: middle;
    height: auto;
    width: 100%;
    padding: 8px;
    overflow: hidden;
    background-color: #ffffff;
  `;
  const Desc = styled.div`
    display: flex;
    flex-flow: column;
    -webkit-box-flex: 1;
    flex-grow: 1;
    text-align: left;
  `;
  const Title = styled.div`
    color: #212121;
    font-size: 0.86rem;
    line-height: 1.5;
    max-width: 100%;
    max-height: 100%;
    white-space: pre-wrap;
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 4px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  `;
  const Price = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    color: #212121;
    opacity: 1;
    font-size: 1rem;
    font-weight: bold;
    align-items: flex-end;
    line-height: 1.43;
    margin-bottom: 4px;
  `;
  const Cashback = styled.div`
    display: inline-block;
    background-color: #c9fde0;
    border-radius: 3px;
    font-weight: bold;
    font-size: 0.714286rem;
    color: #00aa5b;
    line-height: 1.4;
    letter-spacing: normal;
    margin-bottom: 4px;
    height: 20px;
    padding: 3px 4px 2px;
    margin-right: auto;
  `;
  const Discount = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 4px;
    div.discount {
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      flex: 0 0 30px;
      height: 20px;
      color: #f94d63;
      background-color: #ffdbe2;
      font-size: 0.714286rem;
      font-weight: bold;
      border-radius: 3px;
      margin: 0px 4px 0px 0px;
    }
    div.price {
      font-size: 0.714286rem;
      color: #6d7588;
      text-decoration: line-through;
      max-width: 100px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  `;
  const SellerInfo = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgba(49, 53, 59, 0.54);
    font-size: 0.85rem;
    line-height: 18px;
    margin-bottom: 4px;
    i {
      /* position: relative; */
      display: flex;
      flex: 0 0 16px;
      height: 16px;
      margin-right: 2px;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  `;
  const SellerNameUndLocation = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    line-height: 18px;

    height: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
  `;
  const SellerLocation = styled.div`
    height: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 10.9px;

    justify-content: center;

    color: #6d7588;
    gap: 1px;
    :hover {
      transition: transform 0.3s ease 0s;
      transform: translateY(-19px);
    }
  `;
  const ProSeller = styled.i`
    background-image: url("https://images.tokopedia.net/img/goldmerchant/pm_activation/badge/Power%20Merchant%20Pro@2x.png");
  `;
  const Verified = styled.i`
    position: relative;
    display: flex;
    flex: 0 0 16px;
    height: 16px;
    margin-right: 2px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(https://images.tokopedia.net/img/official_store_badge.png);
  `;

  const RatingUndSellingWrapper = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: #6d7588;
    width: 100%;
    overflow: hidden;
  `;
  const RatingStar = styled.i`
    /* position: relative; */
    display: inline-block;
    vertical-align: middle;
    width: 16px;
    height: 16px;
    margin-right: 2px;
    background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/9527c778.svg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 16px;
  `;
  const Ratings = styled.span`
    color: #6d7588;
    display: flex;
    font-size: 0.85rem;
    -webkit-box-align: center;
    align-items: center;
    line-height: normal;
    height: 12px;
  `;
  const Divider = styled.span`
    margin: 1px 4px 0px;
    height: 10px;
    width: 1px;
    background: #6d7588;
  `;
  const Selling = styled.span`
    font-size: 0.85rem;
    font-weight: normal;
    line-height: normal;
    height: auto;
    margin-bottom: 0px;
    padding: 0px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  `;
  const Tirai = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 100;
    background-color: black;
    top: -100px;
  `;
  const Badge = (type) => {
    switch (type) {
      case "PRO":
        return <ProSeller />;
      case "VERIFIED":
        return <Verified />;
      default:
        return <ProSeller />;
    }
  };
  return (
    <>
      <ContainerLayer0>
        <ContainerLayer1>
          <ContainerLayer2>
            <ContainerLayer3>
              <ContainerLayer4>
                <ContainerLayer5>
                  <ImageContainer>
                    <Img>
                      <Imgs src={img} />
                    </Img>
                  </ImageContainer>
                  <DescContainer>
                    <Desc>
                      <Title>{title}</Title>
                      <Price>${price}</Price>

                      {discount ? (
                        <Discount>
                          <div className="discount">{discount}</div>
                          <div className="price">
                            ${price * (discount / 100)}
                          </div>
                        </Discount>
                      ) : (
                        <Cashback>Free Delivery</Cashback>
                      )}

                      <SellerInfo>
                        {Badge(badge)}
                        <SellerNameUndLocation>
                          <SellerLocation>
                            <div>{location}</div>
                            <div>{sellerName}</div>
                          </SellerLocation>
                        </SellerNameUndLocation>
                      </SellerInfo>
                    </Desc>
                    <RatingUndSellingWrapper>
                      <RatingStar />
                      <Ratings>{ratings}</Ratings>
                      <Divider />
                      <Selling>Selling {selling}</Selling>
                    </RatingUndSellingWrapper>
                  </DescContainer>
                </ContainerLayer5>
              </ContainerLayer4>
            </ContainerLayer3>
          </ContainerLayer2>
        </ContainerLayer1>
      </ContainerLayer0>
    </>
  );
};

export default Product;
