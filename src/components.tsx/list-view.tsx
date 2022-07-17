import { FC } from "react";
import { Accordion} from "react-bootstrap";
import { Flow } from "../types";
import ReactJson from "react-json-view";

type IListView = {
  flow: Flow;
  id: string;
};

const ListView: FC<IListView> = ({ flow, id }) => {
  return (
    <Accordion.Item eventKey={id}>
      <Accordion.Header>
{/* 
        <div className=" text-capitalize"> */}
        <div className="w-10">
          <span
            className={`badge w-10  ${flow.success ? "bg-green-lt" : "bg-red-lt"}`}
          >{`${flow.success ? "SUCCESS" : "FAILED"}`}</span>
          </div>
          <label className=" px-3 text-muted">{flow.name}</label>
        {/* </div> */}
      </Accordion.Header>
      <Accordion.Body>
        <ReactJson
          name={false}
          displayObjectSize={false}
          displayDataTypes={false}
          enableClipboard={false}
          src={flow.scenarios}
        />
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default ListView;
