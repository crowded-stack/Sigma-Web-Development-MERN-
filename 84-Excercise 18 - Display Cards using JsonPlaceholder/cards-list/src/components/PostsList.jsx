import { useContext } from "react";
import Post from "./Post";
import { postsContext, postContext } from "../context/context";

const PostsList = () => {
  const postsContextValue = useContext(postsContext);
  return (
    <div className=" p-4 flex flex-wrap gap-6 justify-between">
      {postsContextValue.postsList.map((post) => {
        return (
          <>
            <postContext.Provider value={post}>
              <Post key={post.id} />
            </postContext.Provider>
          </>
        );
      })}
    </div>
  );
};

export default PostsList;
