import { Avatar } from '@material-ui/core';
import styled from 'styled-components';
import Text from '../Text';

const ContainerBox = styled.div`
  flex-wrap: wrap;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  ${({ theme }) => theme.breakpoints.md} {
    padding: 0 56px;
  }
`;

const ContainerPost = styled.div`
  width: inherit;
  flex-wrap: wrap;
  display: flex;
  ${({ theme }) => theme.breakpoints.md} {
    display: block;
  }
`;

const StyledSection = styled.section`
  display: flex;
  gap: 5px;
  ${({ theme }) => theme.breakpoints.md} {
    gap: 13px;
  }
`;

const BorderLine = styled.hr`
  border: 1px solid ${({ theme }) => theme.background.border};
  width: 100%;
`;

const ImgStyled = styled(Avatar)`
  && {
    width: 50px;
    height: 50px;
    background-color: ${({ theme }) => theme.background.gray};
    border-radius: ${({ theme }) => theme.borderRadius};
    position: unset;
    ${({ theme }) => theme.breakpoints.md} {
      width: 77px;
      height: 77px;
    }
  }
`;

const ImgContainer = styled.div`
  height: 50px;
  background-color: ${({ theme }) => theme.background.gray};
  border-radius: ${({ theme }) => theme.borderRadius};
  min-height: 50px;
  overflow: hidden;
  ${({ theme }) => theme.breakpoints.md} {
    width: 77px;
    min-width: 77px;
    min-height: 77px;
  }
`;

const TextStyled = styled(Text)`
  overflow-wrap: break-word;
  width: inherit;
`;

const BoxInfo = styled.div`
  width: 80%;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.breakpoints.md} {
    width: 100%;
    max-width: 100%;
  }
`;

const TitlePostStyled = styled(Text)`
  font-weight: bold;
  width: inherit;
  ${({ theme }) => theme.breakpoints.md} {
    font-size: 20px;
  }
`;

export {
  BorderLine,
  BoxInfo,
  ContainerBox,
  ContainerPost,
  ImgContainer,
  ImgStyled,
  StyledSection,
  TextStyled,
  TitlePostStyled,
};
