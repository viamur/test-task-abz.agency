import { useState } from 'react';
import s from './RadioButton.module.scss';

const RadioButton = ({ checked, setChecked, data }) => {
  return (
    <fieldset className={s.fieldset}>
      <label className={s.label} onClick={() => setChecked(data.id)}>
        <span className={s.span} style={checked === data.id ? { borderColor: '#00bdd3' } : null}>
          {checked === data.id && <span className={s.check}></span>}
        </span>
        <p className={s.text}>{data.name}</p>
      </label>
      <input
        type={'radio'}
        value={data.id}
        className={s.input}
        checked={checked === data.id}
        name="position"
      />
    </fieldset>
  );
};

export default RadioButton;
