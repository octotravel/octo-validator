import { FC, useState } from "react";
import { IconButton } from "@mui/material";
import { Flow } from "../types";
import { Box } from "@mui/system";
import { ArrowDown, ArrowUp } from "../common/icons";

type IListView = {
  flow: Flow;
};

const ListView: FC<IListView> = ({ flow }) => {
  const [arrow, setArrow] = useState(false);

  return (
    <Box>
      <div className=" mb-3 mr-3 py-2 text-capitalize">
        <span className={`badge  ${flow.success ? "bg-green" : "bg-red"}`}>{`${
          flow.success ? "SUCCESS" : "FAILED"
        }`}</span>
        <strong className="px-3">{flow.name}</strong>
      </div>
      <IconButton onClick={() => setArrow(!arrow)}>
        {arrow ? <ArrowDown /> : <ArrowUp />}
      </IconButton>
    </Box>
  );
};

export default ListView;
