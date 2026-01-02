import styled from "styled-components";
import { ReactComponent as ErrorIconSVG } from "../../assets/error.svg";
import { Link } from "react-router-dom";

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 160px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-top: 24px;
  }
`;

export const ErrorIcon = styled(ErrorIconSVG)`
  width: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-top: 24px;
    width: 84px;
  }
`;

export const ErrorTitle = styled.h2`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 12px;
  }
`;

export const ErrorMessage = styled.p`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 12px;
  }
`;

export const ErrorButton = styled(Link)`
  padding: 16px 24px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background: hsla(220, 100%, 45%, 1);
  }

  &:active {
    background: hsla(220, 100%, 50%, 1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 10px;
    padding: 8px 12px;
  }
`;
