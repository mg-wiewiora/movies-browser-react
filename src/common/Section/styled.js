import styled from "styled-components";

export const SectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  margin: 10px 0;
  box-shadow: 0 0 5px ${({ theme }) => theme.color.grey};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 36px;
`;

export const Content = styled.div`
  padding: 20px;
`;
