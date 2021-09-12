import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../Text';

const ContainerBox = styled.div`
  flex-wrap: wrap;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
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

const ImgStyled = styled.img`
  width: 77px;
  height: 77px;
  background-color: ${({ theme }) => theme.background.gray};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const ImgContainer = styled.div`
  height: 77px;
  background-color: ${({ theme }) => theme.background.gray};
  border-radius: ${({ theme }) => theme.borderRadius};
  min-height: 77px;
  overflow: hidden;
  ${({ theme }) => theme.breakpoints.md} {
    width: 77px;
    min-width: 77px;
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

const timeConverter = (timeDate) => {
  const a = new Date(timeDate * 1000).getTime();
  const timestamp = new Date().getTime();
  const total = timestamp - a;
  return new Date(total).getHours();
};

const CardPost = ({ posts }) => (
  <ContainerBox>
    {posts.map((item, index) => {
      const verify = item.data.url.length > 27
        ? `${item.data.url.substring(0, 23)}...`
        : item.data.url;
      return (
        <ContainerPost key={item.data.id.concat(index.toString())}>
          <BorderLine />
          <StyledSection>
            <ImgContainer>
              <ImgStyled
                src={item.data.all_awardings[0]?.icon_url}
                alt="sem imagem"
              />
            </ImgContainer>
            <BoxInfo>
              <TitlePostStyled color="primary" variant="text">
                {item.data.title}
              </TitlePostStyled>
              <div style={{ width: 'inherit' }}>
                <Text color="secondary" variant="text">
                  {`Enviado há ${timeConverter(item.data.created_utc)}h por `}
                </Text>
                <TextStyled color="purple" variant="text">
                  {item.data.author}
                </TextStyled>
              </div>

              <TextStyled
                color="primary"
                variant="text"
                bold
                tag="a"
                href={item.data.url}
                target="_blank"
              >
                {verify}
              </TextStyled>
            </BoxInfo>
          </StyledSection>
        </ContainerPost>
      );
    })}
  </ContainerBox>
);
export default CardPost;

CardPost.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      created_utc: PropTypes.number,
      icon_url: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
    }),
  ).isRequired,
};
