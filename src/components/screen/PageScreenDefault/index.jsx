/* eslint-disable implicit-arrow-linebreak */
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
import { useTheme } from '../../../hooks/useTheme';

const PageScreenDefault = ({ url }) => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [page, setPage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { valueSearch } = useTheme();

  useEffect(() => {
    getPosts(url, 1)
      .then((res) => {
        setPosts(res.data);
        setFilter(res.data);
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

  const searchPost = () => {
    if (!valueSearch) {
      setFilter(posts);
    }
    const search = posts.filter((i) =>
      i.data.title.toLowerCase().includes(valueSearch.toLowerCase()));
    setFilter(search);
  };

  useEffect(() => {
    searchPost();
  }, [valueSearch]);

  const seeMore = () => {
    getPosts(url, 25, page)
      .then((res) => {
        setIsLoadingMore(true);
        setPosts((prevState) => [...prevState, ...res.data]);
        setFilter((prevState) => [...prevState, ...res.data]);
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
          {filter.length === 0 && valueSearch ? (
            <div style={{ alignSelf: 'center', margin: 'auto' }}>
              <Text tag="h2" variant="title" color="primary">
                Nenhum resultado encontrado!
              </Text>
            </div>
          ) : (
            <CardPost posts={filter} />
          )}
          {!valueSearch && (
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
          )}
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
