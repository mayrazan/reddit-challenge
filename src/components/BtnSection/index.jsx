import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import history from '../../utils/history';

const StyledSection = styled.section`
  display: flex;
  gap: 16px;
  justify-content: center;
  padding: 20px 56px;
  background-color: ${({ theme }) => theme.background.main};
`;

const BtnSection = () => {
  const [isActive, setIsActive] = useState('/');

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
        onClick={() => goToPath('/news')}
        isActive={isActive === '/news'}
      >
        News
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
