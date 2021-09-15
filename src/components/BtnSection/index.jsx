import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Button from '../Button';
import TextField from '../TextField';
import { useTheme } from '../../hooks/useTheme';

const StyledSection = styled.section`
  display: flex;
  gap: 16px;
  justify-content: center;
  padding: 20px 0;
`;

const WrapperSection = styled.section`
  background-color: ${({ theme }) => theme.background.main};
  padding: 15px 20px 0;
  ${({ theme }) => theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 56px 0;
  }
`;

const BtnSection = () => {
  const history = useHistory();
  const [isActive, setIsActive] = useState(history.location.pathname);
  const { handleChangeInput, valueSearch, setValueSearch } = useTheme();

  const goToPath = (path) => {
    setIsActive(path);
    history.push(path);
    setValueSearch('');
  };

  return (
    <WrapperSection>
      <TextField
        name="busca"
        placeholder="Buscar posts"
        value={valueSearch}
        onChange={handleChangeInput}
      />

      <StyledSection>
        <Button
          color="button"
          onClick={() => goToPath('/hot')}
          isActive={isActive === '/hot'}
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
    </WrapperSection>
  );
};
export default BtnSection;
