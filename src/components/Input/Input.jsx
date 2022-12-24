import { useState } from 'react';
import s from './Input.module.scss';

const Input = ({ name, type, label, error, value, handleChange, onBlur, minLength, maxLength }) => {
  const classLabel = value ? `${s.label} ${s.labelTop}` : s.label;
  const classInput = error ? `${s.input} ${s.inputError}` : s.input;
  return (
    <label className={s.wrap}>
      <span className={classLabel} style={error && { color: '#CB3D40' }}>
        {label}
      </span>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        maxLength={maxLength}
        minLength={minLength}
        className={classInput}
      />
      {error && <p className={s.error}>error</p>}
    </label>
  );
};

export default Input;
