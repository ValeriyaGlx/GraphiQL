import { useSelector } from 'react-redux';

import { selectResponseData } from '../../../store/slices/responseSlice';
import ControlledTextarea from '../ControlledTextarea/ControlledTextarea';

interface Editor0RViewerProps {
  readOnly: boolean;
}
const Editor0RViewer = ({ readOnly }: Editor0RViewerProps) => {
  const responseData = useSelector(selectResponseData);

  if (readOnly) {
    return <pre>{responseData}</pre>;
  } else {
    return <ControlledTextarea />;
  }
};

export default Editor0RViewer;
