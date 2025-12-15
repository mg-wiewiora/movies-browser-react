import styled from "styled-components";

export const SectionWrapper = styled.section`
  margin: 10px 0;
  max-width: 1368px;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  display: flex;
  align-items: center;
  margin: 36px 0 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 18px;
    margin: 4px 0 12px 0;
  }
`;

export const Content = styled.div`
  padding: 0;
`;
