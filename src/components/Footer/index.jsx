import styled from 'styled-components';

const Footer = styled.footer`
  padding: 20px 56px 38px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background.main};
  position: sticky;
  bottom: 0;
  justify-content: flex-end;
`;

export default Footer;
