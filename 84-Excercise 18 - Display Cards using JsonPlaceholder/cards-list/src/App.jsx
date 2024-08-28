import { useEffect, useState } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import { postsContext } from "./context/context";

function App() {
  const [posts, updatePosts] = useState([]);

  useEffect(() => {
    (async () => {
      let postsRes = await fetch("https://jsonplaceholder.typicode.com/posts");
      let postsList = await postsRes.json();
      updatePosts(postsList);
    })();
  });

  return (
    <>
      <postsContext.Provider value={{ postsList: posts, updatePosts }}>
        <Header />
        <Container posts={posts} />
      </postsContext.Provider>
    </>
  );
}

export default App;
