import React from 'react'
import { Carousel } from 'antd';
import Image from 'next/image'
import CustomCard from "../components/Cards/CustomCard"
import styled from 'styled-components'
import HomeCarousel from '../components/carousel/Carousel';

const CardContainer = styled.div`
    display:flex;
    justify-content:space-around;
    .ant-card-bordered {
        border: 2px solid #36d1dc;
        border-radius: 15px;
    }
    .ant-card-hoverable {
        cursor: pointer;
        transition: box-shadow 0.2s, border-color 0.3s;
        border-color: #43cea2;
    }
    .ant-card-meta {
        justify-content: center;
        font-family: cursive;
        margin: 7px 0;
    }
`

const home = () => {
    return (
        <>
            <HomeCarousel />
            <CardContainer>
                <CustomCard
                    src="/vmp.png"
                    title="Frontend"
                />
                <CustomCard
                    src="/igame.png"
                    title="Backend"
                />
                <CustomCard
                    src="/batzawaj.png"
                    title="Mobile Application"
                />
                <CustomCard
                    src="/igame.png"
                    title="Fullstack"
                />
            </CardContainer>
        </>
    )
}
export default home;