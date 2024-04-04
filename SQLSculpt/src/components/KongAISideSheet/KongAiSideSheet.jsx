import { Button, Label, Text, Sidesheet, Message, Chip } from "@innovaccer/design-system";
import { useState } from "react";
import _get from "lodash/get";

import {
  sideSheetSubHeading,
  sideSheetHeading,
  noLabelFound,
  selectedQueryLabel,
  sideSheetTriggerButton,
  chipGroupRenderer
} from "../../constants";

const KongAISideSheet = () => {
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

  const onClickChip = (value) => {
    console.log(value);
  };

  const renderChips = () => {
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
              disabled={true}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)} icon="rocket_launch" iconAlign="left">
        {sideSheetTriggerButton}
      </Button>
      <Sidesheet {...options}>
        <SidesheetDescription {...sidesheetDescriptionOptions} />
        <Message className="mt-2 mb-4">
          <Text weight="strong">{noLabelFound}</Text>
        </Message>
        {renderChips()}
      </Sidesheet>
    </div>
  );
};

export default KongAISideSheet;
