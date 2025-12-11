import { toMovies, toPeople } from "../routes";
import {
  HeaderWrapper,
  HeaderLeft,
  HeaderTitle,
  HeaderList,
  HeaderItem,
  HeaderNavLink,
  HeaderLogo,
  HeaderIcon,
  HeaderInput,
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
              <HeaderNavLink to={toMovies()}>Movies</HeaderNavLink>
            </HeaderItem>
            <HeaderItem>
              <HeaderNavLink to={toPeople()}>People</HeaderNavLink>
            </HeaderItem>
          </HeaderList>
        </HeaderNavigation>
      </HeaderLeft>

      <HeaderInputWrapper>
        <HeaderIcon />
        <HeaderInput placeholder="Search for movies..." />
      </HeaderInputWrapper>
    </HeaderWrapper>
  );
};

export default Header;
