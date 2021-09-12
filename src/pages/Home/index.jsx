import React, { useEffect, useState } from 'react';
import CardPost from '../../components/CardPost';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import getPosts from '../../services/getPosts';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState('');

  useEffect(() => {
    getPosts().then((res) => {
      setPosts(res.data);
      setPage(res.next);
    });
  }, []);

  const seeMore = () => {
    getPosts('hot', 25, page).then((res) => {
      setPosts((prevState) => [...prevState, ...res.data]);
      setPage(res.next);
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    });
  };

  return (
    <>
      <CardPost posts={posts} />
      <Footer>
        <Button color="button" fullWidth onClick={seeMore}>
          + Ver mais
        </Button>
      </Footer>
    </>
  );
};
export default Home;
