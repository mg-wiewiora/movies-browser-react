import { toMovies, toPeople } from "../routes";
import { Wrapper, Navigation, Title, List, Item, StyledNavLink } from "./styled";

const Header = () => {
  return (
    <Wrapper>
      <Title>Movies Browser</Title>
    <Navigation>
      <List>
        <Item>
          <StyledNavLink to={toMovies()}>Movies</StyledNavLink>
        </Item>
        <Item>
          <StyledNavLink to={toPeople()}>People</StyledNavLink>
        </Item>
      </List>
    </Navigation>
    <Input />
    </Wrapper>
  );
};
export default Header;
