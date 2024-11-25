import { Link } from 'react-router-dom';
import './NavigationBtn.css';

const NavigationBtn = ({ text, path }) => {
  return (
    <Link to={path} className="navigation-btn">
      {text}
    </Link>
  );
};

export default NavigationBtn;
