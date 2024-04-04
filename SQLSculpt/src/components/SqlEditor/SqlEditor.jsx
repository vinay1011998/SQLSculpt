import { Textarea, Heading, Button, Icon } from "@innovaccer/design-system";

import { editorName, runQueryButtonName, textareaPlaceholder } from "../../constants";
import "./styles.css";
import KongAISideSheet from "../KongAISideSheet/KongAiSideSheet";

const SqlEditor = () => {
  return (
    <div className="wrapper">
      <Heading size="m" data-test="heading-for-query-editor">
        <Icon size={24} name="database" className="icon" /> {editorName}
      </Heading>
      <div className="container">
        <Textarea
          id="sql-query"
          name="sql-query"
          placeholder={textareaPlaceholder}
          rows={5}
          resize={false}
          data-test={"text-area"}
          className="mt-2"
        />
        <div className="button-container mt-4 d-flex">
          <KongAISideSheet />
          <Button
            appearance="primary"
            size="regular"
            data-test="submit-query-btn"
            className="ml-2"
            icon="speed"
            iconAlign="left"
          >
            {runQueryButtonName}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SqlEditor;
