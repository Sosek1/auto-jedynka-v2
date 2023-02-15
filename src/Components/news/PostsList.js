import { useEffect } from "react";
import useHttp from "../../custom-hooks/use-http";
import { getPosts } from "../../lib/api";

import Post from "./Post";
import LoadingSpinner from "../../UI/LoadingSpinner";

const PostsList = () => {
  const { sendRequest, data, status, error } = useHttp(getPosts);

  useEffect(() => {
    sendRequest();
    console.log(data, status, error);
  }, [sendRequest]);

  return (
    <ul className="w-[80vw] md:w-[60vw] min-h-[30vh] lg:w-[50vw] customMargin mb-[50px] flex flex-col items-center gap-10">
      {status === (null || "pending") && <LoadingSpinner />}
      {status === "completed" &&
        data.map((post) => {
          return post.active ? (
            <Post
              key={post.id}
              date={post.date}
              title={post.title}
              text={post.text}
            />
          ) : (
            <div key={Math.floor(Math.random() * 10000)}></div>
          );
        })}
    </ul>
  );
};

export default PostsList;
