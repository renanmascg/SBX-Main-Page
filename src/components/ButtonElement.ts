import styled from 'styled-components';
import { Link } from 'react-scroll';

interface ButtonStyle {
  primary?: Boolean;
  big?: Boolean;
  dark?: Boolean;
  fontBig?: Boolean;
}

export const Button = styled(Link)<ButtonStyle>`
  border-radius: 5px;
  background: ${({primary}) => ( primary ? "#00FF99": "#010606" )};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "18px 35px ")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff ")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  font-weight: bold;
  outline: none;
  border: none;
  cursor:pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => ( primary ? "#fff": "#00FF99" )};  
  }
`;

export const ButtonBorder = styled(Link)<ButtonStyle>`
  border-radius: 5px;
  background: ${({primary}) => ( primary ? "#00FF99": "transparent" )};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "18px 35px ")};
  color: ${({ dark }) => (dark ? "#010606" : "#04142C ")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  font-weight: bold;
  outline: none;
  border:  ${({primary}) => ( primary ? "none": "1px solid #04142C" )} ;
  cursor:pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

`;