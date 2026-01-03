import {
  ErrorWrapper,
  ErrorIcon,
  ErrorTitle,
  ErrorMessage,
  ErrorButton,
} from "./styled";

const Error = () => (
  <ErrorWrapper>
    <ErrorIcon />
    <ErrorTitle>Ooops! Something went wrong...</ErrorTitle>
    <ErrorMessage>
      Please check your network connection
      <br />
      and try again
    </ErrorMessage>
    <ErrorButton to="/">
      Back to home page
    </ErrorButton>
  </ErrorWrapper>
);

export default Error;
