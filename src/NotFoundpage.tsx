import { Link } from 'react-router-dom';

const NotFoundpage = () => {
  return (
    <div>
      Ничего не найдено <Link to="/">вернуться на главную</Link>
    </div>
  );
};

export default NotFoundpage;
