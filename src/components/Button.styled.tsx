import styled, { css } from "styled-components";
import { MyAnimation } from "../styles/animations/Animations";

type StyledBtnProptType = {
  color?: string;
  fontSize?: string;
  btnType: "primary" | "outlined";
  active?: boolean;
};

export const StyledBtn = styled.button<StyledBtnProptType>`
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: ${(props) => props.fontSize || "2rem"};
  font-weight: bold;

  ${(props) =>
    props.btnType === "outlined" &&
    css<StyledBtnProptType>`
      border: 2px solid ${(props) => props.color || "#fb3f78"};
      color: ${(props) => props.color || "#fb3f78"};
      background-color: transparent;

      &:hover {
        border-color: #2a13a9;
        color: #2a13a9;
        background-color: transparent;
      }
    `}

  ${(props) =>
    props.btnType === "primary" &&
    css<StyledBtnProptType>`
      background-color: ${(props) => props.color || "#fb3f78"};
      color: snow;

      &:hover {
        background-color: #e22a2a;
      }
    `}

    ${(props) =>
    props.active &&
    css<StyledBtnProptType>`
      box-shadow: 5px 5px 5px 5px #00000054;
    `}
`;
