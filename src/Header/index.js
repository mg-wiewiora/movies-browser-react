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
import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const placeholderText = usePlaceholder();
  const { inputValue, setInputValue, resetSearch } = useHeaderSearch();
  const history = useHistory();
  const location = useLocation();

  const onInputChange = ({ target }) => {
  setInputValue(target.value);
};

useEffect(() => {
    
    if (inputValue.trim() === "") return;

    const timeoutId = setTimeout(() => {
      const searchParams = new URLSearchParams(location.search);
      searchParams.set("query", inputValue);

      history.push({
        pathname: "/movies",
        search: searchParams.toString(),
      });
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [inputValue, history, location.pathname, location.search]);

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
            onChange={onInputChange}
          />
        </HeaderInputWrapper>
      </HeaderWrapper>
    );
  };

  export default Header;
