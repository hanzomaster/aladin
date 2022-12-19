import { useRef, useState } from "react";

const CardProfile = (props) => {
  const fileUploader = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState(null);
  const profileTrigger = (event) => {
    event.preventDefault();
    fileUploader.current?.click();
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = function (e) {
      setImage(e.target?.result);
    };
  };
  // const sendProfile = async (event) => {
  //   console.log(fileUploader.current.files[0]);
  //   const formData = new FormData();
  //   formData.append("image", fileUploader.current.files[0]);
  //   fetch("/api/changeUserProfile", {
  //     method: "POST",
  //     body: formData,
  //   }).then(async (response) => {
  //     await response.json().then((data) => {
  //       setDataBaseResponse({
  //         message: data.message,
  //         data,
  //       });
  //       console.log(dataBaseResponse);
  //     });
  //   });
  //   console.log(dataBaseResponse);
  // };

  return (
    <div>
      <input
        id="js-file-uploader"
        ref={fileUploader}
        name="profile-picture"
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleImage}
      />

      <img src={image ? image : ""} alt="Hahahahaha" className="h-full w-full" />
    </div>
  );
};

export default CardProfile;
