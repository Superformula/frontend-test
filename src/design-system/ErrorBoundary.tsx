import Button from 'design-system/Button';
import BrokenHeartIcon from 'design-system/icons/BrokenHeart';
import * as React from 'react';
import styled from 'styled-components';

const ErrorPage = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BrokenHeart = styled(BrokenHeartIcon)`
  color: ${({ theme: { colors } }) => colors.primary};
`;

const Message = styled.p`
  font-size: 34px;
  line-height: 40px;
  letter-spacing: 1px;
`;

const ReloadButton = styled(Button)`
  margin-top: 32px;
  height: 48px;
  width: 416px;
`;

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  public state: ErrorBoundaryState;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, errorMessage: 'Unknown error' };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    const errorMessage = [
      error.message,
      error.stack,
      errorInfo.componentStack,
    ].join('\n');
    this.setState({ errorMessage });
  }

  render() {
    return this.state.hasError ? (
      <ErrorPage>
        <BrokenHeart />
        <Message>There was an error in the application.</Message>
        <Message>Please try again in a few minutes.</Message>
        <ReloadButton variant="filled" onClick={() => window.location.reload()}>
          Reload
        </ReloadButton>
      </ErrorPage>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
