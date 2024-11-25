import SyncLoader from 'react-spinners/SyncLoader';
import { useContactContext } from '../../context/ContactContext';

import './Loader.css';

const Loader = () => {
  const { isLoading } = useContactContext();

  if (!isLoading) return null;

  return (
    <div className="loader">
      <SyncLoader
        color="#0441ab"
        size={20}
        cssOverride={{ marginTop: '140vh', marginLeft: '48vw' }}
      />
    </div>
  );
};

export default Loader;
