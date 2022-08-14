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

        }}
        cover={
            <img
                alt="example"
                src={props.src} />}
    >
        <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
);

export default CustomCard;