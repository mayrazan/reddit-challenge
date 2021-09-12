import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../Text';
import Box from '../Box';

const StyledSection = styled.section`
  display: flex;
  gap: 13px;
`;

const BorderLine = styled.hr`
  border: 1px solid ${({ theme }) => theme.background.border};
  width: 100%;
`;

const ImgStyled = styled.img`
  width: 77px;
  height: 77px;
  background: #a7b0be;
  border-radius: 8px;
`;

const ImgContainer = styled.div`
  width: 77px;
  height: 77px;
  background: #a7b0be;
  border-radius: 8px;
  min-width: 77px;
  min-height: 77px;
  overflow: hidden;
`;

function timeConverter(timeDate) {
  const a = new Date(timeDate * 1000).getTime();
  const timestamp = new Date().getTime();
  //   const months = [
  //     'Jan',
  //     'Fev',
  //     'Mar',
  //     'Abr',
  //     'Mai',
  //     'Jun',
  //     'Jul',
  //     'Ago',
  //     'Set',
  //     'Out',
  //     'Nov',
  //     'Dez',
  //   ];
  //   const year = a.getFullYear();
  //   const month = months[a.getMonth()];
  //   const date = a.getDate();
  //   const hour = a.getHours();
  //   const min = a.getMinutes();
  //   const sec = a.getSeconds();
  //   const time = `${date} ${month} ${year} - ${hour}:${min}:${sec}`;
  const total = (timestamp - a);
  return new Date(total).toLocaleTimeString('pt-br');
}

const CardPost = ({ posts }) => (
  <Box padding="0 56px">
    {posts.map((item, index) => (
      <div key={item.data.id.concat(index.toString())}>
        <BorderLine />
        <StyledSection>
          <ImgContainer>
            <ImgStyled
              src={item.data.all_awardings[0]?.icon_url}
              alt="sem imagem"
            />
          </ImgContainer>
          <Box display="flex" flexDirection="column">
            <Text color="primary">{item.data.title}</Text>
            <div>
              <Text color="secondary" variant="text">
                {`Enviado em ${timeConverter(item.data.created_utc)} por `}
              </Text>
              <Text color="purple" variant="text">
                {item.data.author}
              </Text>
            </div>

            <Text
              color="primary"
              variant="text"
              bold
              tag="a"
              href={item.data.url}
              target="_blank"
            >
              {item.data.url}
            </Text>
          </Box>
        </StyledSection>
      </div>
    ))}
  </Box>
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
