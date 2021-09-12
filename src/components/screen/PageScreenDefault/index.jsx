import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CardPost from '../../CardPost';
import Button from '../../Button';
import Footer from '../../Footer';
import getPosts from '../../../services/getPosts';
import Loading from '../../Loading';
import Header from '../../Header';
import BtnSection from '../../BtnSection';
import Text from '../../Text';

const PageScreenDefault = ({ url }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getPosts(url, 1)
      .then((res) => {
        setPosts(res.data);
        setPage(res.next);
        setIsLoading(true);
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage(error);
        setIsLoading(false);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      });
  }, [url]);

  const seeMore = () => {
    getPosts(url, 25, page)
      .then((res) => {
        setIsLoadingMore(true);
        setPosts((prevState) => [...prevState, ...res.data]);
        setPage(res.next);
        setErrorMessage('');
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch((error) => {
        setErrorMessage(error);
        setIsLoadingMore(false);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoadingMore(false);
        }, 300);
      });
  };

  return (
    <>
      <div style={{ position: 'sticky', top: '0' }}>
        <Header />
        <BtnSection />
      </div>
      {errorMessage || isLoading ? (
        <div style={{ alignSelf: 'center', margin: 'auto' }}>
          {errorMessage && (
            <Text tag="h2" variant="title" color="primary">
              Erro ao carregar dados
            </Text>
          )}
          {isLoading && <Loading size={80} />}
        </div>
      ) : (
        <>
          <CardPost posts={posts} />
          <Footer>
            <Button
              color="button"
              fullWidth
              onClick={seeMore}
              disabled={isLoadingMore || !page}
            >
              {!isLoadingMore ? '+ Ver mais' : <Loading size={30} />}
            </Button>
          </Footer>
        </>
      )}
    </>
  );
};
export default PageScreenDefault;

PageScreenDefault.propTypes = {
  url: PropTypes.string,
};

PageScreenDefault.defaultProps = {
  url: 'hot',
};
