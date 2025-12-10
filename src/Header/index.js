import { toMovies, toPeople } from "../routes";
import {
  HeaderWrapper,
  HeaderLeft,
  HeaderTitle,
  HeaderList,
  HeaderItem,
  HeaderStyledNavLink,
  HeaderLogo,
  HeaderIcon,
  HeaderStyledInput,
  HeaderInputWrapper,
  HeaderNavigation,
} from "./styled";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLeft>
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
      </HeaderLeft>

      <HeaderInputWrapper>
        <HeaderIcon />
        <HeaderStyledInput placeholder="Search for movies..." />
      </HeaderInputWrapper>
    </HeaderWrapper>
  );
};

export default Header;
