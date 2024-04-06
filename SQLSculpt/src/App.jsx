import "@innovaccer/design-system/css";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const App = () => {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <Body />
      </ErrorBoundary>
    </>
  );
};

export default App;
