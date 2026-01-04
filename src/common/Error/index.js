import {
  ErrorWrapper,
  ErrorIcon,
  ErrorTitle,
  ErrorMessage,
  ErrorButton,
} from "./styled";
import {toMovies} from "../../routes";

const Error = () => (
  <ErrorWrapper>
    <ErrorIcon />
    <ErrorTitle>Ooops! Something went wrong...</ErrorTitle>
    <ErrorMessage>
      Please check your network connection
      <br />
      and try again
    </ErrorMessage>
    <ErrorButton to={toMovies}>
      Back to home page
    </ErrorButton>
  </ErrorWrapper>
);

export default Error;
