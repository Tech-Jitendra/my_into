import React from 'react'
import CustomCard from "../components/Cards/CustomCard"
import styled from 'styled-components'
import images from '../components/Images/Images'
import { vmp } from "../public/images/vmp.png"

const CardContainer = styled.div`
    display:flex;
    justify-content:space-around;
`
const home = () => {
    return (
        <>
            <CardContainer>
                <CustomCard
                    src="/public/images/vmp.png"
                    title="Frontend"
                />
                <CustomCard
                    src={images.igame}
                    title="Backend"
                />
                <CustomCard
                    src={images.igame}
                    title="Fullstack"
                />
                <CustomCard
                    src={images.batzawaj}
                    title="Mobile Application"
                />
            </CardContainer>
        </>
    )
}
export default home;