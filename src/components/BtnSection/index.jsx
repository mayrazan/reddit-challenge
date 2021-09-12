import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Button from '../Button';

const StyledSection = styled.section`
  display: flex;
  gap: 16px;
  justify-content: center;
  padding: 15px 20px;
  background-color: ${({ theme }) => theme.background.main};
  ${({ theme }) => theme.breakpoints.md} {
    padding: 20px 56px;
  }
`;

const BtnSection = () => {
  const history = useHistory();
  const [isActive, setIsActive] = useState(history.location.pathname);

  const goToPath = (path) => {
    setIsActive(path);
    history.push(path);
  };

  return (
    <StyledSection>
      <Button
        color="button"
        onClick={() => goToPath('/')}
        isActive={isActive === '/'}
      >
        Hot
      </Button>
      <Button
        color="button"
        onClick={() => goToPath('/new')}
        isActive={isActive === '/new'}
      >
        New
      </Button>
      <Button
        color="button"
        onClick={() => goToPath('/rising')}
        isActive={isActive === '/rising'}
      >
        Rising
      </Button>
    </StyledSection>
  );
};
export default BtnSection;
