import { Card } from 'antd';
import React from 'react';
const { Meta } = Card;
import styled from 'styled-components';


const Transition = styled.div`  
`
const CustomCard = (props) => (
    <Card
        headStyle={{
            textAlign: "center",
            fontFamily: "cursive"
        }}
        title={props.title}
        hoverable
        bordered
        style={{
            width: 300,
            // height: 500
        }}
        cover={
            <img
                height="350px"
                alt="example"
                src={props.src} />}
    >
        <Meta
            textAlign="center"
            justifyContent="center"
            title="Europe Street beat" description="www.instagram.com" />
    </Card >
);

export default CustomCard;