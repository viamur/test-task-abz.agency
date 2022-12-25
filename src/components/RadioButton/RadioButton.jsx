import s from './RadioButton.module.scss';

const RadioButton = ({ checked, handleChecked, data }) => {
  return (
    <fieldset className={s.fieldset}>
      <label className={s.label} onClick={e => handleChecked(data.id)}>
        <span className={s.span} style={checked === data.id ? { borderColor: '#00bdd3' } : null}>
          {checked === data.id && <span className={s.check}></span>}
        </span>
        <p className={s.text}>{data.name}</p>
      </label>
      <input type={'radio'} className={s.input} name="position" />
    </fieldset>
  );
};

export default RadioButton;
