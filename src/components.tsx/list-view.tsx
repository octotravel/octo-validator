import { FC } from "react";
import { Accordion } from "react-bootstrap";
import { Flow } from "../types";
import ResponeTree from "./response-tree";

type IListView = {
  flow: Flow;
  id: string;
};

const ListView: FC<IListView> = ({ flow, id }) => {
  return (
    <Accordion.Item eventKey={id}>
      <Accordion.Header as="div" className="shadow-sm">
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
        <Accordion as="div" className=" h-50 bg-light">
          {flow?.scenarios.map((scenerio, index) => {
            return (
              <ResponeTree
                key={index}
                id={index.toString()}
                flow={scenerio}
              />
            );
          })}
        </Accordion>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default ListView;
