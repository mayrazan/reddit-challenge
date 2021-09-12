import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import {
  BorderLine,
  BoxInfo,
  ContainerBox,
  ContainerPost,
  ImgContainer,
  ImgStyled,
  StyledSection,
  TextStyled,
  TitlePostStyled,
} from './style';

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
              {item.data.all_awardings[0] ? (
                <ImgStyled
                  src={item.data.all_awardings[0]?.icon_url}
                  alt="sem imagem"
                />
              ) : (
                <ImgStyled src="/broken-image.jpg" variant="rounded" />
              )}
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
