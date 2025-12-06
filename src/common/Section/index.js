import { SectionWrapper, Title, Content } from "./styled";

const Section = ({ title, content }) => (
  <SectionWrapper>
    <Title>{title}</Title>
    <Content>{content}</Content>
  </SectionWrapper>
);

export default Section;
