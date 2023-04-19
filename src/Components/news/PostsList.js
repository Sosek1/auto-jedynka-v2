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

  console.log(data);

  return (
    <ul className="w-[80vw] md:w-[60vw] min-h-[30vh] lg:w-[50vw] customMargin mb-[50px] flex gap-10 flex-col">
      {status === (null || "pending") && <LoadingSpinner />}
      {status === "completed" &&
        data.map((post) => {
          return (
            post.active && (
              <Post
                key={post.id}
                date={post.date}
                title={post.title}
                text={post.text}
              />
            )
          );
        })}
    </ul>
  );
};

export default PostsList;
