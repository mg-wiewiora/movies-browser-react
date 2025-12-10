import { toMovies, toPeople } from "../routes";
import {
  HeaderWrapper,
  HeaderNavigation,
  HeaderTitle,
  HeaderList,
  HeaderItem,
  HeaderStyledNavLink,
  HeaderLogo,
} from "./styled";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLogo />
      <HeaderTitle>Movies Browser</HeaderTitle>
      <HeaderNavigation>
        <HeaderList>
          <HeaderItem>
            <HeaderStyledNavLink to={toMovies()}>Movies</HeaderStyledNavLink>
          </HeaderItem>
          <HeaderItem>
            <HeaderStyledNavLink to={toPeople()}>People</HeaderStyledNavLink>
          </HeaderItem>
        </HeaderList>
      </HeaderNavigation>
    </HeaderWrapper>
  );
};
export default Header;
