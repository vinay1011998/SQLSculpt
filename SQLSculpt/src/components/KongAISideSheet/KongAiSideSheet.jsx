import { useState } from "react";
import { Button, Label, Text, Sidesheet, Message, Chip } from "@innovaccer/design-system";
import _get from "lodash/get";

//import { getChatResponse } from "../../../api/KongGptApi";
import {
  sideSheetSubHeading,
  sideSheetHeading,
  selectedQueryLabel,
  sideSheetTriggerButton,
  chipGroupRenderer
} from "../../constants";

const KongAISideSheet = ({ selectedQuery }) => {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };
  const headerOptions = {
    heading: sideSheetHeading,
    subHeading: sideSheetSubHeading
  };

  const options = {
    onClose,
    open,
    headerOptions
  };

  const SidesheetDescription = (params) => {
    const { label } = params;
    return <div className="py-4">{label && <Label>{label}</Label>}</div>;
  };

  const sidesheetDescriptionOptions = {
    label: selectedQueryLabel
  };

  async function onClickChip(value) {
    //Currently we have disabled use of GPT
    // const chatResponse = await getChatResponse(`${value} this query ${selectedQuery} in less than 50 words`);
    console.log(`${value} this query ${selectedQuery} in less than 50 words.`);
  }

  const renderChips = () => {
    //render clickable Chips for input to GPT
    return (
      <div className="d-flex mt-4 justify-content-end">
        {chipGroupRenderer.map((item, idx) => {
          return (
            <Chip
              key={_get(item, "value", "explain")}
              icon={_get(item, "icon", "")}
              label={_get(item, "label", "")}
              onClick={() => onClickChip(_get(item, "value", "explain"))}
              className="mr-2"
              disabled={false}
              data-test={`chip-btn-${_get(item, "value", "explain")}`}
            />
          );
        })}
      </div>
    );
  };

  const renderBody = () => {
    return (
      <div data-test="sidesheet-main">
        <Button
          appearance="primary"
          onClick={() => setOpen(true)}
          icon="rocket_launch"
          iconAlign="left"
          disabled={selectedQuery === ""}
          data-test="sidesheet-trigger-btn"
        >
          {sideSheetTriggerButton}
        </Button>
        <Sidesheet {...options} data-test="kong-sidesheet">
          <SidesheetDescription {...sidesheetDescriptionOptions} />
          <Message className="mt-2 mb-4" data-test="selected-query-sidesheet">
            <Text weight="strong" data-test={`${selectedQuery}-text`}>
              {selectedQuery}
            </Text>
          </Message>
          {renderChips()}
        </Sidesheet>
      </div>
    );
  };

  return renderBody();
};

export default KongAISideSheet;
