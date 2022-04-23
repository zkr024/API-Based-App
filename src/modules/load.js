import img from './logo.js';
import logoRefresh from './logoRefresh.js';
import popup from './popupEvent.js';
import commentEvent from './commentEvent.js';

const load = () => {
  img();
  popup();
  commentEvent();
  logoRefresh();
};

export default load;