/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import Text from '../../foundation/Text';

const InputWrapper = styled.div`
  margin-bottom: 17px;
`;

const Input = styled(Text)`
  width: 100%;
  color: ${({ theme, mode }) => get(theme, `${mode}.tertiary.main.color`)};
  background-color: ${({ theme, mode, color }) => (color
    ? get(theme, `${mode}.${color}.color`)
    : get(theme, `${mode}.background.main.color`))};
  border: 1px solid
    ${({ theme, mode }) => get(theme, `${mode}.tertiary.light.color`)};
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ theme, isFieldInvalid, mode }) => isFieldInvalid
    && css`
      border-color: ${get(theme, `${mode}.error.main.color`)};
      & + span {
        color: ${get(theme, `${mode}.error.main.color`)};
        font-size: 11px;
      }
    `}
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph1',
};

export default function TextField({
  placeholder,
  name,
  onChange,
  value,
  error,
  isTouched,
  ...props
}) {
  const hasError = Boolean(error);
  const isFieldInvalid = hasError && isTouched;
  return (
    <InputWrapper>
      <Input
        type="text"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        isFieldInvalid={isFieldInvalid}
        {...props}
      />
      {isFieldInvalid && (
        <Text
          variant="smallestException"
          color="error.main"
          role="alert"
          {...props}
        >
          {error}
        </Text>
      )}
    </InputWrapper>
  );
}
TextField.defaultProps = {
  error: '',
  isTouched: false,
  value: undefined,
  onChange: undefined,
};

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  isTouched: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
};
