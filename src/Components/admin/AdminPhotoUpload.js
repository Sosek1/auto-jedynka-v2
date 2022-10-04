import { useState } from "react";
import { storage } from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";

const AdminPhotoUpload = (props) => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const uploadImageHandler = (event) => {
    setUploadedImage(event.target.files[0]);
  };

  const submitImageHandler = () => {
    if (uploadedImage === null) return;
    const imageRef = ref(storage, `Gallery/${uploadedImage.name}`);
    uploadBytes(imageRef, uploadedImage).then(() => {
      setUploadedImage([]);
    });
  };

  return (
    <article className="w-[90vw] xl:w-[80vw] 2xl:w-[60vw] mb-[50px] customMargin flex flex-col  items-start ">
      <div className="h-[100%] w-[100%] p-[20px] flex items-center customBoxShadow rounded">
        <input
          className="custom-file-input"
          type="file"
          onChange={uploadImageHandler}
        />
      </div>
      <button
        className="w-[150px] h-[40px] mt-[20px] text-[16px] md:text-[18px] text-white bg-orange rounded"
        onClick={() => {
          submitImageHandler();
          props.noti();
          props.text();
        }}
      >
        Dodaj zdjęcie
      </button>
    </article>
  );
};

export default AdminPhotoUpload;
