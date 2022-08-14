import React, { Component } from "react";
import { Modal, Button } from "antd";
import styled from "styled-components";

import BaseText from "../BaseText";
import { useState } from "react";
import { useStores } from "../../models";
import { useRouter } from "next/router";

const SimpleModalContainer = styled(Modal)`
  .ant-modal-content {
    //width: 470px;
    
    margin: 0 auto;
    border-radius: 32px;
    @media (max-width: 767px) {
      width: 100%;
    }

    .ant-modal-title {
      font-size: 18px;
      color: #202420;
      font-weight: 600;
    }
  }
  .ant-modal-header {
    border-radius: 32px;
    border-bottom: none;
    padding: 30px 30px 10px 30px;
  }
  .ant-modal-footer {
    display: none;
  }

  .ant-modal-close-x {
    display: none;
  }

  .close-btn {
    position: absolute;
    top: 30px;
    right: 20px;
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }

  .hold-okay-icon {
    display: flex;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .add-width {
    width: 112px;
    height: 140px;
  }
  .message-box h4{
    white-space: pre-wrap;
  }
  .number-of-items,
  .price {
    font-size: 14px;
    color: #636663;
    font-weight: normal;
  }

  .color-btn {
    width: auto;
    padding: 0 11px;
    height: 22px;
    border: 0.904762px solid #e9eae9;
    border-radius: 40px;
    background: #ffffff;
    margin-right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .action-btn {
    height: 30px;
    padding-left:10px;
    padding-right:10px;
    font-size: 13px;
    color: #fff;
    border: none;
    margin-top: 16px;
    background: #3e71f3;
    border-radius: 44px;
    cursor: pointer;
  }
  .action-box{
    justify-content:center;
    text-align:center;
  }
  .price,.number-of-items{
    margin-right:5px;
    margin-left:5px;
  }
`;

const ModalBtn = styled.button`
  min-width: 149px;
  height: 40px;
  padding-left:10px;
  padding-right:10px;
  background-color: #3e71f3;
  border: 1px solid #e9eae9;
  border-radius: 44px;
  font-size: 16px;
  color: white;
  font-weight: 500;
  cursor: pointer;
  @media (max-width: 540px) {
    width: 170px;
    font-size: 11px;
    height: 30px;
  }

  @media (max-width: 767px) {
    margin: 0 20px;
  }
`;
export const SimpleModal = ({
  title = "",
  message = "",
  modalVisible = false,
  toggleButtonVisible = true,
  toggleButtonText = "Toggle Modal",
  actionButtonVisible = false,
  actionButtonText = "",
  customToggleButton = null,
  customToggleHandler = null,
  actionButtonOnClick,
  children
}) => {
  const { productStore } = useStores()
  const [modal2Visible, setModal2Visible] = useState(modalVisible)
  const router = useRouter()
  return (
    <>
      {customToggleButton ? customToggleButton :
        (toggleButtonVisible ?
          <ModalBtn onClick={() => setModal2Visible(true)}>{toggleButtonText}</ModalBtn> : null)}
      <SimpleModalContainer
        title={title}
        centered
        visible={modal2Visible || modalVisible}
      >
        <div className="flex items-center message-box">
          <h4>{message}</h4>
        </div>
        <div >{children}</div>
        {actionButtonVisible ?
          <div className="flex items-center action-box">
            <button
              className='action-btn'
              onClick={actionButtonOnClick}
            >{actionButtonText}</button>
          </div> : null}
        {/* Close Button */}
        <button
          className="close-btn"
          onClick={() => {
            customToggleHandler ? customToggleHandler(false) :
              setModal2Visible(false)
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.804 1.24345L12.8369 0.287855C12.5752 0.026173 12.1428 0.026173 11.8698 0.287855L7.04573 5.1118L2.13076 0.196835C1.86897 -0.0649607 1.43662 -0.0649607 1.16368 0.196835L0.196591 1.16392C-0.0652049 1.4256 -0.0652049 1.85795 0.196591 2.13101L5.10029 7.03471L0.287611 11.8701C0.0259288 12.1318 0.0259288 12.5642 0.287611 12.8372L1.2547 13.8043C1.51638 14.066 1.94872 14.066 2.22178 13.8043L7.04573 8.98026L11.8698 13.8043C12.1315 14.066 12.5638 14.066 12.8369 13.8043L13.804 12.8372C14.0656 12.5755 14.0656 12.1432 13.804 11.8701L8.96852 7.04608L13.7926 2.22214C14.0656 1.94886 14.0656 1.51651 13.804 1.24345Z"
              fill="black"
            />
          </svg>
        </button>
      </SimpleModalContainer>
    </>
  )
}
export default SimpleModal