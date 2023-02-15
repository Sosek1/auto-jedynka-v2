import React, { useState } from "react";

export const PhotoContext = React.createContext();

export const PhotoContextProvider = (props) => {
  const [addPhoto, setAddPhoto] = useState(false);

  const addPhotoHandler = (status) => {
    setAddPhoto(status);
  };

  return (
    <PhotoContext.Provider value={{ onAddPhoto: addPhotoHandler }}>
      {props.children}
    </PhotoContext.Provider>
  );
};
