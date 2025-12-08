import styled from "styled-components";

export const SectionWrapper = styled.section`
  margin: 10px 0;
  padding: 0 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Content = styled.div`
  padding: 20px 0;
`;
