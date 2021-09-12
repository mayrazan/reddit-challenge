import styled, { css } from 'styled-components';
import { TextStyleVariants } from '../Text';

const Button = styled.button`
  color: ${({ theme, color }) => theme.text[color]};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: opacity ${({ theme }) => theme.transition};
  background-color: ${({ theme }) => theme.background.gray};
  ${TextStyleVariants('subtitle')}
  width: 202px;
  height: 48px;
  border: 0;
  cursor: pointer;
  opacity: 1;

  &:hover {
    opacity: 0.5;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }
  ${({ fullWidth }) => fullWidth
    && css`
      width: 100%;
      background-color: ${({ theme }) => theme.background.shadesPurple};
    `};

  ${({ isActive }) => isActive
    && css`
      background-color: ${({ theme }) => theme.background.shadesPurple};
    `};
`;

export default Button;
