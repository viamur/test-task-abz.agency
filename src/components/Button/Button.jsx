import s from './Button.module.scss';

const Button = ({ title, disabled = false, handleClick }) => {
  return (
    <button type="submit" className={s.btn} onClick={handleClick} disabled={disabled}>
      {title}
    </button>
  );
};

export default Button;
