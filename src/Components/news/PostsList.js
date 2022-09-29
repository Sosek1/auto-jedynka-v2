import { useEffect } from "react";
import useHttp from "../../custom-hooks/use-http";
import { getPosts } from "../../lib/api";

import Post from "./Post";

const PostsList = () => {
  const { sendRequest, data } = useHttp(getPosts);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  console.log(data);

  return (
    <ul>
      {data.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          text={post.text}
          date={post.date}
        />
      ))}
    </ul>
  );
};

export default PostsList;
