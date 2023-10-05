import styled from "styled-components";
import { MyAnimation } from "../styles/animations/Animations";

export const StyledBtn = styled.button`
  border: none;
  background-color: #fb3f78;
  padding: 10px 20px;
  color: snow;
  font-size: 2rem;
  font-weight: bold;

  &:hover {
    background-color: #e22a2a;
  }

  &:last-child {
    background-color: #26e5e5;
  }
`;

export const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: #4161f0;
  color: #292929;
  &:hover {
    animation: ${MyAnimation} 2s ease-in-out infinite;
  }
`;
