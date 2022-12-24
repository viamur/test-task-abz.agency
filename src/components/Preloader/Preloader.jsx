import svg from '../../images/icon/svg/preloader.svg';
import s from './Preloader.module.scss';

const Preloader = () => {
  return (
    <div className={s.wrap}>
      <img src={svg} className={s.preloader} width={48} height={48} alt="preloader" />
    </div>
  );
};

export default Preloader;
