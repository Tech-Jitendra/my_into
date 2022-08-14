import React from 'react'
import Image from 'next/image'
import CustomCard from "../components/Cards/CustomCard"
import styled from 'styled-components'
// import images from '../components/Images/Images'

const CardContainer = styled.div`
    display:flex;
    justify-content:space-around;
    .ant-card-bordered {
        border: 8px solid #36d1dc;
        border-radius: 42px;
    }
    .ant-card-hoverable {
        cursor: pointer;
        transition: box-shadow 0.2s, border-color 0.3s;
        border-color: #43cea2;
    }
`
const home = () => {
    return (
        <>
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