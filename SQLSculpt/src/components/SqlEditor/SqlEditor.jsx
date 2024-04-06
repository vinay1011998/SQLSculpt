import React, { useEffect, useState, Suspense } from "react";
import { Textarea, Heading, Button, Icon } from "@innovaccer/design-system";
import _get from "lodash/get";

import { editorName, runQueryButtonName, textareaPlaceholder, uuidQueryMap } from "../../constants";
import "./styles.css";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
const LazyKongAISideSheet = React.lazy(() => import("../KongAISideSheet/KongAiSideSheet"));

const SqlEditor = ({ selectedQuery, setIsQueryExecuted, setSelectedQuery }) => {
  const [editorValue, setEditorValue] = useState("");
  const [error, setError] = useState(false);

  const onClickRunQuery = () => {
    const editorState = editorValue;
    for (const [key, value] of Object.entries(uuidQueryMap)) {
      if (editorState.toLowerCase() === value.toLowerCase() && editorState !== "") {
        setError(false);
        return setIsQueryExecuted(true);
      }
    }
    //if that query is not present ;
    // we are not showing any data for this currently
    setError(true);
    setSelectedQuery("-1");
    return setIsQueryExecuted(false);
  };

  const renderSideSheetButton = () => {
    return (
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyKongAISideSheet selectedQuery={editorValue} />
        </Suspense>
      </ErrorBoundary>
    );
  };

  useEffect(() => {
    setEditorValue(_get(uuidQueryMap, selectedQuery, ""));
  }, [selectedQuery]);

  const renderBody = () => {
    return (
      <div className="wrapper">
        <Heading size="m" data-test="heading-for-query-editor">
          <Icon size={24} name="database" className="icon" /> {editorName}
        </Heading>
        <div className="container">
          <Textarea
            id="sql-query"
            error={error}
            name="sql-query"
            placeholder={textareaPlaceholder}
            rows={5}
            resize={false}
            data-test={"text-area"}
            className="mt-2"
            value={editorValue}
            onChange={(e) => setEditorValue(e.target.value)}
          />
          <div className="button-container mt-4 d-flex">
            {renderSideSheetButton()}

            <Button
              appearance="primary"
              size="regular"
              data-test="submit-query-btn"
              className="ml-2"
              icon="speed"
              iconAlign="left"
              disabled={editorValue === ""}
              onClick={onClickRunQuery}
            >
              {runQueryButtonName}
            </Button>
          </div>
        </div>
      </div>
    );
  };
  return renderBody();
};

export default SqlEditor;
