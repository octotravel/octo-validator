import { FC } from "react";
import { Accordion } from "react-bootstrap";
import { Flow } from "../types";
import ReactJson from "react-json-view";

type IListView = {
  flow: Flow;
  id: string;
};

const ListView: FC<IListView> = ({ flow, id }) => {
  return (
    <Accordion.Item eventKey={id}>
      <Accordion.Header as='div' className="shadow-sm">
        <div>
          <span
            className={`badge   ${
              flow.success ? "bg-green-lt px-2" : "bg-red-lt px-3"
            }`}
          >{`${flow.success ? "SUCCESS" : "FAILED"}`}</span>
        </div>
        <label className=" px-3 text-muted">{flow.name}</label>
      </Accordion.Header>
      <Accordion.Body as="div" className="h-25 .bg-gradient overflow-auto">
        <div style={{ height: "40vh" }}>
          <ReactJson
            name={false}
            displayObjectSize={false}
            displayDataTypes={false}
            enableClipboard={false}
            src={flow.scenarios}
          />
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default ListView;
