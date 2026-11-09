import React from 'react';

/**
 * Keeps the card usable when an optional part can't load, for example when
 * WebGL is unavailable or a code chunk fails to download.
 */
class ErrorBoundary extends React.Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export default ErrorBoundary;
