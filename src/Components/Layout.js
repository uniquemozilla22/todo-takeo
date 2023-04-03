import { Snackbar } from "@mui/material";
import React from "react";

export class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App

    console.log(error);
    console.log(info.componentStack);
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <div>Something went wrong.</div>;
    }

    return <div>{this.props.children}</div>;
  }
}
