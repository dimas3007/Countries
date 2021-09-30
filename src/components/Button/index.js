import React from 'react';
import styled from 'styled-components';
import { arrowIcon } from '../../assets/img';

const Button = ({ text, ...rest }) => {
  return (
    <div>
      <ButtonIcon {...rest}>
        <img src={arrowIcon} alt="" />
        {text}
      </ButtonIcon>
    </div>
  );
};

export default Button;

const ButtonIcon = styled.button`
  padding: 15px;
  background-color: #8362f2;
  border-radius: 10px;
  border: none;
  color: #fff;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    cursor: pointer;
    background-color: #8273b7;
  }

  img {
    width: 16px;
  }
`;
