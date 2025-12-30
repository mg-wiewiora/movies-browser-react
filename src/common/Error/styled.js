import styled from "styled-components";
import { ReactComponent as ErrorIconSVG } from "../../assets/error.svg";
import { Link } from "react-router-dom";

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 48px 16px;
  gap: 24px;
  text-align: center;
`;

export const ErrorIcon = styled(ErrorIconSVG)`
  width: 200px;
  height: auto;
`;

export const ErrorTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const ErrorMessage = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;

export const ErrorButton = styled(Link)`
  padding: 12px 24px;
  background: rgba(0, 68, 204, 1);
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  display: inline-block;

  &:hover {
    background: rgba(0, 58, 184, 1);
  }
`;
