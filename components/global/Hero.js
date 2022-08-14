import React, { Component, useEffect } from "react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import BaseTitle from "../BaseTitle";
import { observer } from "mobx-react-lite";
import { useStores } from '../../models/'
import { useRouter } from "next/dist/client/router";
import { Col, Grid, Row } from "antd";
const SliderWrapper = styled.div`
  padding-top: 48px;
  .promotion{
    
  }
  @media (max-width: 767px) {
    padding-top: 0px;
  }
  .slick-list {
    margin: 0 30px;
    @media (max-width: 767px) {
      margin: 0 !important;
    }
  }
  .slick-arrow {
    background: #ecf1fe;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    @media (max-width: 767px) {
      display: none !important;
    }
  }

  .slick-prev:before,
  .slick-next:before {
    content: "";
    background-repeat: no-repeat;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: 0;
    right: 0;
    width: 8px;
    height: 12px;
  }
  .slick-prev:before {
    background-image: url("/icons/arrow-left.svg");
  }
  .slick-next:before {
    background-image: url("/icons/arrow-right.svg");
  }

  .slick-dots li.slick-active button:before {
    color: #3e71f3;
  }
  .slick-dots {
    bottom: -39px;
  }

  .learn-more-btn {
    color: #ffa230;
    width: 140px;
    height: 33px;
    background: fff;
    font-size: 15px;
    font-weight: 600;
    border: none;
    cursor:pointer;
    margin: 24px 0;
    border-radius: 44px;
  }
`;

const Slide = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 28px;
  background-color:#ffa230;
  padding-left:10%;
  padding-right:10%;
  .img-holder-mobile{
    img{
      border-radius:20px;
      box-shadow: 0px 0px 8px 2px rgba(255,255,255,0.75);
      margin-top:25px;
      margin-bottom:25px;
      max-width:75vw;
    }
    @media (min-width: 767px) {
      display:none ;
    }
  }
  .img-holder{    
    display:flex;
    align-items:center;
    justify-content:flex-end;
    height:350px;    
    @media (max-width: 767px) {
      display:none ;
    }
    img{
      border-radius:20px;
      box-shadow: 0px 0px 16px 5px rgba(255,255,255,0.75);
    }
  }
  @media (max-width: 767px) {
    padding-left:25px;
    padding-right:25px;
    height: auto;
    .res-title {
      font-size: 15px;
    }
  }
  .hold-hero-info {
    display:flex;
    align-items:center;
    justify-content:flex-start;
    height:350px;
    @media (max-width: 767px) {
      width: 100%;
      height:60vh;
      padding: 30px 16px 0 16px;
    }

    h2 {
      color: #fff;
      font-size: 35px;
      margin: 0;

      @media (max-width: 767px) {
        font-size: 14px;
      }
    }

    .sub-text {
      display: block;
      color: #fff;
      font-size: 15px;
      font-weight: 300;
      @media (max-width: 767px) {
        font-size: 13px;
      }
    }
  }
`;

const Hero = observer(() => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const { productStore } = useStores()
  const router = useRouter()
  useEffect(() => {
    productStore.fetchPromotions()
    return () => {

    }
  }, [])

  return (
    <SliderWrapper>
      <Slider {...settings}>
        {productStore.promotions.map(promotion => (
          <Slide key={promotion.id}>
            <Row className="promotion">
              <Col md={12}>
                <div className="hold-hero-info">
                  <div>
                    <BaseTitle
                      name={promotion.title}
                      level={2}
                    />
                    <span className="sub-text">
                      {promotion.description}
                    </span>
                    <div className="img-holder-mobile">
                      <img
                        width={"100%"}
                        src={promotion.image}
                      />
                    </div>
                    <a href={promotion.link} target="_blank">
                      <button className="learn-more-btn"
                      >Learn more</button>
                    </a>
                  </div>
                </div>
              </Col>
              <Col span={12} className="flex img-holder">
                <img
                  height={265}
                  width={400}
                  src={promotion.image}
                />
              </Col>
            </Row>
          </Slide>
        ))}
      </Slider>
    </SliderWrapper>
  );
})
export default Hero
