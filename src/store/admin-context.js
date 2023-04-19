import React, { useState } from "react";

export const AdminContext = React.createContext();

export const AdminContextProvider = (props) => {
  const [addPost, setAddPost] = useState(false);
  const [addPhoto, setAddPhoto] = useState(false);

  const addPostHandler = (status) => {
    setAddPost(status);
  };

  const addPhotoHandler = (status) => {
    setAddPhoto(status);
  };

  return (
    <AdminContext.Provider
      value={{
        addPost,
        addPhoto,
        onAddPost: addPostHandler,
        onAddPhoto: addPhotoHandler,
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};
