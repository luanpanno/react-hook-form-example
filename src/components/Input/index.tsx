import { useState } from 'react';

import ErrorText from '../ErrorText';
import { Container, InputWrapper } from './styles';

interface Props {
  label?: string;
  type?: string;
  name?: string;
  propend?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  value?: string | number;
  checked?: boolean;
  defaultChecked?: boolean;
  hasError?: boolean;
  errorText?: string;
  placeholder?: string;
  defaultValue?: string | number;
  min?: string;
  id?: string;
  onChange?(e: React.ChangeEvent<unknown>): void;
  onBlur?(e: React.FocusEvent<unknown>): void;
}

const Input: React.FC<Props> = ({
  label,
  type = 'text',
  name,
  propend,
  disabled,
  className,
  onChange,
  value,
  checked,
  defaultChecked,
  onBlur,
  hasError,
  errorText,
  placeholder,
  defaultValue,
  min,
  id,
  children,
}) => {
  const [hasFocus, setHasFocus] = useState(false);

  const handleBlur = (e: React.FocusEvent<unknown>) => {
    if (onBlur) onBlur(e);

    setHasFocus(false);
  };

  if (type === 'checkbox') {
    return (
      <Container
        hasError={hasError ?? false}
        hasFocus={hasFocus}
        type={type}
        disabled={disabled}
        className="input-component"
      >
        <input
          type="checkbox"
          className={className}
          onBlur={handleBlur}
          id={id ?? name}
          name={name}
          value={value}
          disabled={disabled}
          onChange={onChange}
          checked={checked}
          defaultChecked={defaultChecked}
          placeholder={placeholder}
        />
        <label htmlFor={name}>{label}</label>
      </Container>
    );
  }

  return (
    <Container
      hasError={hasError ?? false}
      hasFocus={hasFocus}
      type={type}
      disabled={disabled}
      className="input-component"
    >
      <label htmlFor={name}>{label}</label>
      <InputWrapper>
        {type === 'select' && (
          <select
            className={className}
            onFocus={() => setHasFocus(true)}
            onBlur={handleBlur}
            id={name}
            name={name}
            disabled={disabled}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            defaultValue={defaultValue}
          >
            {children}
          </select>
        )}
        {type === 'textarea' && (
          <textarea
            className={className}
            onFocus={() => setHasFocus(true)}
            onBlur={handleBlur}
            id={name}
            name={name}
            disabled={disabled}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            defaultValue={defaultValue}
          />
        )}
        {type !== 'checkbox' && type !== 'select' && type !== 'textarea' && (
          <input
            className={className}
            type={type}
            onFocus={() => setHasFocus(true)}
            onBlur={handleBlur}
            id={name}
            name={name}
            disabled={disabled}
            value={value}
            onChange={onChange}
            checked={checked}
            defaultChecked={defaultChecked}
            placeholder={placeholder}
            defaultValue={defaultValue}
            min={min}
          />
        )}
        {propend}
      </InputWrapper>
      {hasError && errorText && <ErrorText>{errorText}</ErrorText>}
    </Container>
  );
};

export default Input;
