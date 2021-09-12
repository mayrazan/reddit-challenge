import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputWrapper = styled.div`
  width: 100%;
  align-self: center;
  ${({ theme }) => theme.breakpoints.md} {
    width: 50%;
  }
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.background.border};
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 10px 15px 0 rgba(111, 30, 81, 0.05);
`;

export default function TextField({
  placeholder,
  name,
  onChange,
  value,
  ...props
}) {
  return (
    <InputWrapper>
      <Input
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        type="search"
        {...props}
      />
    </InputWrapper>
  );
}

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
