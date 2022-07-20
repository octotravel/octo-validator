import * as R from 'ramda';
import {FC} from 'react';
import { Json } from '../../types';
import ResponseTreeString from './reponse-tree-string';
import ResponseTreeArray from './response-tree-array';
import ResponseTreeBoolean from './response-tree-boolean';
import ResponseTreeNil from './response-tree-nil';
import ResponseTreeNumber from './response-tree-number';
import ResponseTreeObject from './response-tree-object';


interface Props {
  attr?: boolean;
  last?: boolean;
  level?: number;
  onShowClick?: () => void;
  show?: boolean;
  value: Json;
}

const ReponseTreeJson:FC<Props> = ({
  attr = false,
  last = true,
  level = 0,
  onShowClick,
  show = true,
  value,
}) => {
  const props = {
    attr: attr,
    last: last,
    level: level,
    value: value,
  };

  switch (R.type(value)) {
    case 'Array':
      return <ResponseTreeArray {...props} onShowClick={onShowClick} show={show} />;
    case 'Boolean':
      return <ResponseTreeBoolean {...props} />;
    case 'Null':
      return <ResponseTreeNil {...props} />;
    case 'Number':
      return <ResponseTreeNumber {...props} />;
    case 'Object':
      return <ResponseTreeObject {...props} onShowClick={onShowClick} show={show} />;
    case 'String':
      return <ResponseTreeString {...props} />;
  }

  return <span />;
};

export default ReponseTreeJson;