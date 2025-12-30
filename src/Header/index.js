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
import { useHeader } from "./useHeader";

const Header = () => {
  const placeholderText = usePlaceholder();
  const { inputValue, setInputValue, resetSearch } = useHeader();

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

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
              <HeaderNavLink
                to={toMovies()}
                isActive={(match, location) =>
                  location.pathname.startsWith("/movies") ||
                  location.pathname.startsWith("/movie/")
                }
                onClick={resetSearch}
              >
                Movies
              </HeaderNavLink>
            </HeaderItem>
            <HeaderItem>
              <HeaderNavLink
                to={toPeople()}
                isActive={(match, location) =>
                  location.pathname.startsWith("/people") ||
                  location.pathname.startsWith("/person/")
                }
                onClick={resetSearch}
              >
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
          onChange={onInputChange}
        />
      </HeaderInputWrapper>
    </HeaderWrapper>
  );
};

export default Header;
