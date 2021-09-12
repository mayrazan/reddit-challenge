export default function getPosts(url = 'hot', count = 1, next) {
  const result = fetch(
    `https://www.reddit.com/r/reactjs/${url}.json?count=${count}&raw_json=1&after=${next}`,
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Não foi possível carregar dados!');
    })
    .then((response) => response.data)
    .catch((error) => error);
  const allPosts = result.then((res) => ({
    data: res.children,
    next: res.after,
    previous: res.before,
    total: res.dist,
  }));
  return allPosts;
}
