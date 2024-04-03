import { Heading, LinkButton, Message, Text, Icon } from "@innovaccer/design-system";

import { predefinedQueryList, querySectionLabel, useQueryButton, noLabelFound } from "../../constants";
import "../SqlEditor/styles.css";
import _get from "lodash/get";

const Queries = () => {
  const renderQuery = () => {
    return predefinedQueryList.map((queryItem, idx) => {
      return (
        <Message
          className="message-container mt-4 mb-4"
          key={_get(queryItem, "id", idx)}
          actions={<LinkButton>{useQueryButton}</LinkButton>}
        >
          <Text weight="strong">{_get(queryItem, "label", noLabelFound)}</Text>
        </Message>
      );
    });
  };
  return (
    <div className="wrapper">
      <Heading size="m" data-test="heading-for-predefined-queries">
        <Icon size={24} name="query_stats" className="icon" /> {querySectionLabel}
      </Heading>
      {renderQuery()}
    </div>
  );
};

export default Queries;
