import React, { useState } from "react";

export const PostsContext = React.createContext();

export const PostsContextProvider = (props) => {
  const [addPost, setAddPost] = useState(false);

  const addPostHandler = (status) => {
    setAddPost(status);
  };

  return (
    <PostsContext.Provider value={{ onAddPost: addPostHandler }}>
      {props.children}
    </PostsContext.Provider>
  );
};
