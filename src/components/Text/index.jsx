/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export const TextStyleVariants = (name) => {
  if (name) {
    return css`
      ${({ theme, bold }) => css`
        font-size: ${theme.typographyFonts[name].fontSize};
        font-weight: ${bold ? 'bold' : theme.typographyFonts[name].fontWeight};
        line-height: ${theme.typographyFonts[name].lineHeight};
      `}
    `;
  }
};

const TextBase = styled.span`
  color: ${({ theme, color }) => color && theme.text[color]};
  margin: 0;
  ${({ variant }) => {
    if (typeof variant === 'string') {
      return TextStyleVariants(variant);
    }
  }}
  ${({ as }) => as === 'a'
    && css`
      cursor: pointer;
      text-decoration: none;
      &:hover {
        color: ${({ theme }) => theme.text.secondary};
      }
    `}
`;

export default function Text({
  variant,
  children,
  tag,
  color,
  bold,
  ...props
}) {
  if (props.href) {
    return (
      <TextBase
        as="a"
        variant={variant}
        href={props.href}
        color={color}
        bold={bold}
        target="_blank"
        {...props}
      >
        {children}
      </TextBase>
    );
  }
  return (
    <TextBase as={tag} variant={variant} color={color} bold={bold} {...props}>
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  bold: PropTypes.bool,
  href: PropTypes.string,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'subtitle',
  color: '#000000',
  bold: false,
  href: null,
};
