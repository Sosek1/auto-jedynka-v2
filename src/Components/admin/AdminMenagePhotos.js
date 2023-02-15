import { useState, useEffect, useContext } from "react";
import { storage } from "../../firebase";
import {
  ref,
  listAll,
  getDownloadURL,
  deleteObject,
  getMetadata,
} from "firebase/storage";
import LoadingSpinner from "../../UI/LoadingSpinner";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { PhotoContext } from "../../store/uploadPhoto-context";

const AdminMenagePhotos = (props) => {
  const [imagesList, setImagesList] = useState([]);
  const [clickedImagesName, setClickedImagesName] = useState("");

  const photoCtx = useContext(PhotoContext);

  const imagesListRef = ref(storage, "Gallery/");
  let desertRef = ref(storage, "");

  useEffect(() => {
    fetchImages();
  }, [photoCtx.onAddPhoto]);

  // const fetchImages = () => {
  //   setImagesList([]);
  //   const imageArr = [];

  //   listAll(imagesListRef).then((response) => {
  //     response.items.forEach((item, i) => {
  //       getMetadata(item).then((imageData) => {
  //         imageArr.push({ url: "", name: imageData.name });
  //       });
  //       getDownloadURL(item).then((url) => {
  //         imageArr[i].url = url;
  //       });
  //     });
  //     setImagesList(imageArr);
  //   });
  // };

  const fetchImages = () => {
    setImagesList([]);
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImagesList((prev) => [url, ...prev]);
        });
      });
    });
  };

  const getImagesName = (url) => {
    const namesStartingIndex = url.indexOf("%2F") + 3;
    const namesEndingIndex = url.indexOf("?alt");
    const imagesName = url.slice(namesStartingIndex, namesEndingIndex);
    desertRef = ref(storage, `Gallery/${imagesName}`);
  };

  const deletePhotoHandler = (url) => {
    getImagesName(url);
    deleteObject(desertRef)
      .then(() => {
        fetchImages();
        console.log("usunięto plik");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ul className="w-[90vw] xl:w-[80vw] 2xl:w-[70vw] md:min-h-[60vh] 2xl:w-[60vw] mb-[50px] p-[10px] flex flex-col gap-[10px] items-center md:grid md:grid-rows-2 md:grid-cols-2 customMargin rounded customBoxShadow">
      {imagesList.length !== 0 ? (
        imagesList.map((url) => (
          <li
            key={Math.floor(Math.random() * 10000)}
            className="w-[auto] h-[auto] relative bg-cover"
          >
            <div className="h-[100%]  absolute top-0 right-0 bottom-0 left-0 z-10 bg-black opacity-60"></div>
            <img src={url} alt={"car"} className="h-[100%]" />
            <DeleteForeverIcon
              style={{
                fontSize: "50px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                position: "absolute",
                color: "#F58445",
                zIndex: "20",
                cursor: "pointer",
              }}
              onClick={() => {
                deletePhotoHandler(url);
                props.noti();
                props.text();
              }}
            />
          </li>
        ))
      ) : (
        <div className="w-[100%] flex items-center justify-center">
          <LoadingSpinner />
        </div>
      )}
    </ul>
  );
};

export default AdminMenagePhotos;
