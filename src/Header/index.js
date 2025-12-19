import { toMovies, toPeople } from "../routes";
import {
  HeaderWrapper,
  HeaderLeft,
  HeaderMainLink,
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
import { usePlaceholder } from "../features/usePlaceholder";
import { useHeaderSearch } from "./useHeaderSearch";

const Header = () => {
  const placeholderText = usePlaceholder();
  const { inputValue, setInputValue, resetSearch } = useHeaderSearch();

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <HeaderMainLink to={toMovies()} onClick={resetSearch}>
          <HeaderLogo />
          <HeaderTitle>Movies Browser</HeaderTitle>
        </HeaderMainLink>

        <HeaderNavigation>
          <HeaderList>
            <HeaderItem>
              <HeaderNavLink to={toMovies()} onClick={resetSearch}>
                Movies
              </HeaderNavLink>
            </HeaderItem>
            <HeaderItem>
              <HeaderNavLink to={toPeople()} onClick={resetSearch}>
                People
              </HeaderNavLink>
            </HeaderItem>
          </HeaderList>
        </HeaderNavigation>
      </HeaderLeft>

      <HeaderInputWrapper>
        <HeaderIcon />
        <HeaderInput
          placeholder={placeholderText}
          aria-label="Search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </HeaderInputWrapper>
    </HeaderWrapper>
  );
};

export default Header;
