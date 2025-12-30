import styled from "styled-components";
import { ReactComponent as ErrorIconSVG } from "../../assets/error.svg";
import { Link } from "react-router-dom";

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 180px;
  gap: 24px;
  text-align: center;
`;

export const ErrorIcon = styled(ErrorIconSVG)`
  width: 120px;
`;

export const ErrorTitle = styled.h2`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
`;

export const ErrorMessage = styled.p`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
`;

export const ErrorButton = styled(Link)`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  flex-direction: row;
  padding: 16px 24px;
  gap: 10px;

  &:hover {
    background: hsla(220, 100%, 45%, 1);
  }

  &:active {
    background: hsla(220, 100%, 50%, 1);
  }
`;
