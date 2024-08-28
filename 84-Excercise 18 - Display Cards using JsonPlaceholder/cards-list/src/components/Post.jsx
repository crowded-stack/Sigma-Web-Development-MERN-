import { useContext } from "react";
import { postContext } from "../context/context";

const Post = () => {
  const post = useContext(postContext);
  return (
    <div className=" px-2 py-4 flex flex-col gap-2 shadow-2xl rounded-md w-20%">
      <h3 className=" text-sm font-bold text-black">{post.title}</h3>
      <p className="text-sm text-gray-600">{post.body}</p>
    </div>
  );
};

export default Post;
