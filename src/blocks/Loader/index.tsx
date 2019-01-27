import React from 'react'
import styled from '../../styled-components'

const StyledLoader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;

  .loader {
    display: block;
    position: relative;
    width: 64px;
    height: 64px;

    div {
      position: absolute;
      width: 5px;
      height: 5px;
      background: ${props => props.theme.redDark};
      border-radius: 50%;
      animation: loader 1.2s linear infinite;

      &:nth-child(1) {
        animation-delay: 0s;
        top: 29px;
        left: 53px;
      }

      &:nth-child(2) {
        animation-delay: -0.1s;
        top: 18px;
        left: 50px;
      }

      &:nth-child(3) {
        animation-delay: -0.2s;
        top: 9px;
        left: 41px;
      }

      &:nth-child(4) {
        animation-delay: -0.3s;
        top: 6px;
        left: 29px;
      }

      &:nth-child(5) {
        animation-delay: -0.4s;
        top: 9px;
        left: 18px;
      }

      &:nth-child(6) {
        animation-delay: -0.5s;
        top: 18px;
        left: 9px;
      }

      &:nth-child(7) {
        animation-delay: -0.6s;
        top: 29px;
        left: 6px;
      }

      &:nth-child(8) {
        animation-delay: -0.7s;
        top: 41px;
        left: 9px;
      }

      &:nth-child(9) {
        animation-delay: -0.8s;
        top: 50px;
        left: 18px;
      }

      &:nth-child(10) {
        animation-delay: -0.9s;
        top: 53px;
        left: 29px;
      }

      &:nth-child(11) {
        animation-delay: -1s;
        top: 50px;
        left: 41px;
      }

      &:nth-child(12) {
        animation-delay: -1.1s;
        top: 41px;
        left: 50px;
      }
    }
  }
`

export default () => (
  <StyledLoader>
    <div className="loader">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </StyledLoader>
)
