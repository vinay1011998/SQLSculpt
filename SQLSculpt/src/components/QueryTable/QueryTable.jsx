import { Card, Table, Heading, Icon } from "@innovaccer/design-system";
import _get from "lodash/get";

import { queryTableData, queryTableLabel } from "../../constants";
import "./styles.css";

const QueryTable = ({ selectedQuery }) => {
  return (
    <>
      <div className="table-container" data-test="query-table">
        <Heading size="m" data-test="heading-for-query-editor">
          <Icon size={24} name="output" className="icon" /> {queryTableLabel}
        </Heading>
        <Card className="mt-4">
          <Table
            showMenu={false}
            separator={true}
            data={_get(queryTableData, `${selectedQuery}.data`, [])}
            schema={_get(queryTableData, `${selectedQuery}.schema`, [])}
            withHeader={true}
            headerOptions={{
              withSearch: false
            }}
            withPagination={true}
            pageSize={5}
            onPageChange={(newPage) => console.log(`on-page-change:- ${newPage}`)}
          />
        </Card>
      </div>
    </>
  );
};

export default QueryTable;
