import s from './HomeView.module.css';

const HomeView = () => (
  <div className={s.container}>
    <h1 className={s.text}>
      Welcome! Register to continue!
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>
    </h1>
  </div>
);

export default HomeView;
