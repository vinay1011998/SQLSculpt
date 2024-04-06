import React, { useState, Suspense } from "react";

const LazySqlEditor = React.lazy(() => import("../SqlEditor/SqlEditor"));
const LazyQueries = React.lazy(() => import("../Queries/Queries"));
const LazyQueryTable = React.lazy(() => import("../QueryTable/QueryTable"));
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const Body = () => {
  //state for managing the query selected on editor as well as button click (RUN) on editor
  const [selectedQuery, setSelectedQuery] = useState("-1");
  const [isQueryExecuted, setIsQueryExecuted] = useState(false);

  const renderBody = () => {
    return (
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <LazySqlEditor
            selectedQuery={selectedQuery}
            setIsQueryExecuted={setIsQueryExecuted}
            setSelectedQuery={setSelectedQuery}
          />
          <LazyQueries setSelectedQuery={setSelectedQuery} setIsQueryExecuted={setIsQueryExecuted} />
          {showTable()}
        </Suspense>
      </ErrorBoundary>
    );
  };
  const showTable = () => {
    //only show table if we have valid queries and user clicks on RUN button
    if (selectedQuery !== "-1" && isQueryExecuted) {
      return <LazyQueryTable selectedQuery={selectedQuery} />;
    }
  };

  return renderBody();
};

export default Body;
