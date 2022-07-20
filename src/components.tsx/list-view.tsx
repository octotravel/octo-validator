import { FC } from "react";
import { Accordion } from "react-bootstrap";
import { Flow } from "../types";
import * as R from 'ramda';
import ReponseTreeJson from "./response-tree/response-tree-json";

type IListView = {
  flow: Flow;
  id: string;
  className?:string;
};

const ListView: FC<IListView> = ({ flow, id, className='' }) => {
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
  
          <pre  className={`px-3 py-2 text-muted`}
      style={{
        background: 'transparent',
        border: 'none',
        margin: 0,
        height: "40vh" ,
        whiteSpace: 'pre',
       
      }}>
          <code >
          {!R.isNil(flow) && <ReponseTreeJson value={flow} />}
          </code>
          </pre>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default ListView;
