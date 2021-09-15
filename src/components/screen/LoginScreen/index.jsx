import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import { useAuth } from '../../../hooks/useAuth';
import loginAnimation from '../../animations/login.json';
import AnimationDefault from '../../animations/AnimationDefault';
import Text from '../../Text';

const HeaderWrapper = styled.header`
  min-height: 65px;
  height: auto;
  background-color: ${({ theme }) => theme.background.shadesPurple};
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.breakpoints.md} {
    min-height: 91px;
  }
`;

const GridWrapper = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  padding: 0 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  text-align: center;
  ${({ theme }) => theme.breakpoints.md} {
    gap: 20px;
  }
`;

const GridStyled = styled(Grid)`
  flex-direction: column;
  ${({ theme }) => theme.breakpoints.md} {
    flex-direction: row;
  }
`;

const clientId = process.env.REACT_APP_GOOGLE_LOGIN;

const LoginScreen = () => {
  const { isSigned, login } = useAuth();

  const onSuccess = (res) => {
    login(res);
  };

  const onFailure = (res) => res;

  return (
    <>
      <HeaderWrapper>
        <Text variant="title" color="header">
          Desafio Winnin
        </Text>
      </HeaderWrapper>
      <GridWrapper>
        <GridStyled
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs>
            <AnimationDefault animation={loginAnimation} />
          </Grid>
          <Grid item xs>
            <ContentWrapper>
              <Text color="secondary" variant="titleSM">
                Faça login com o google
              </Text>
              <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy="single_host_origin"
                isSignedIn={isSigned}
              />
            </ContentWrapper>
          </Grid>
        </GridStyled>
      </GridWrapper>
    </>
  );
};

export default LoginScreen;
