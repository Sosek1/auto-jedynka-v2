import { useState, useContext } from "react";
import { storage } from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { AdminContext } from "../../store/admin-context";

const AdminPhotoUpload = (props) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [showError, setShowError] = useState({
    error: false,
    message: "",
  });

  const adminCtx = useContext(AdminContext);

  const uploadImageHandler = (event) => {
    setUploadedImage(event.target.files[0]);
  };

  const submitImageHandler = () => {
    if (uploadedImage === null) {
      setShowError({ error: true, message: "Nie wybrano zdjęcia" });
    }
    const imageRef = ref(storage, `Gallery/${uploadedImage.name}`);
    uploadBytes(imageRef, uploadedImage)
      .then(() => {
        setUploadedImage([]);
      })
      .then(() => {
        adminCtx.onAddPhoto(true);
        props.noti();
        props.text("Dodano zdjęcie");
      });
  };

  return (
    <article className="w-[90vw] xl:w-[80vw] 2xl:w-[70vw] mb-[50px] customMargin flex flex-col items-start ">
      <div className="h-[100%] w-[100%] p-[10px] flex items-center customBoxShadow rounded">
        <input
          className="custom-file-input"
          type="file"
          onChange={uploadImageHandler}
        />
      </div>
      <button
        className="w-[150px] h-[40px] mt-[20px] text-[16px] md:text-[18px] text-white bg-orange rounded"
        onClick={submitImageHandler}
      >
        Dodaj zdjęcie
      </button>
      {showError.error && (
        <p className="text-[16px] mt-[20px] text-orange font-medium ">
          {showError.message}
        </p>
      )}
    </article>
  );
};

export default AdminPhotoUpload;
