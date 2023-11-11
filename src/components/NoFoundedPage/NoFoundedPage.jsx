import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h2>404 - Сторінку не знайдено</h2>
      <p>
        Зазначений маршрут не існує. Перейдіть на{' '}
        <Link to="/">домашню сторінку</Link>.
      </p>
    </div>
  );
};

export default NotFound;
