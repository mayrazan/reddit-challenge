import React, { useEffect, useState } from 'react';
import CardPost from '../../components/CardPost';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import getPosts from '../../services/getPosts';
import Loading from '../../components/Loading';

const News = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    getPosts('new', 1)
      .then((res) => {
        setPosts(res.data);
        setPage(res.next);
        setIsLoading(true);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      });
  }, []);

  const seeMore = () => {
    getPosts('new', 25, page)
      .then((res) => {
        setIsLoadingMore(true);
        setPosts((prevState) => [...prevState, ...res.data]);
        setPage(res.next);
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoadingMore(false);
        }, 300);
      });
  };

  return (
    <>
      {isLoading ? (
        <Loading size={80} />
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
export default News;
