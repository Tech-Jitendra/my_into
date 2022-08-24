import React from 'react'
import { Carousel } from 'antd';
import styled from 'styled-components'

const contentStyle = {
    margin: "50px",
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const carouselItem = {
    height: '400px',
    width: "100%",
    margin: "40px 0px"
}

const HomeCarousel = () => {
    return (
        <>
            <Carousel
                // width="100%"
                effect="fade"
                autoplay
            >
                <div>
                    <img
                        style={carouselItem}
                        src='/vmp_full.png'
                    />
                </div>
                <div>
                    <img
                        style={carouselItem}
                        src='/igame_full.png'
                    />
                </div>
                <div>
                    <img
                        style={carouselItem}
                        src='/myonetemplate2.png'
                    />
                </div>
                <div>
                    <img
                        style={carouselItem}
                        src='/igame_full2.png'
                    />
                </div>
                <div>
                    <img
                        style={carouselItem}
                        src='/myonetemplate.png'
                    />
                </div>
                <div>
                    <img
                        style={carouselItem}
                        src='/myonetemplate3.png'
                    />
                </div>
            </Carousel>
        </>
    )
}
export default HomeCarousel;