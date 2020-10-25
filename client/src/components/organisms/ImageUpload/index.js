import React, {useState} from 'react';
import './style.css';
import API from '../../../utils/API'
import Button from '../../../components/atoms/Button/Button'

// import axios from 'axios'

function ImageUpload(props) {
  
    let image = {
      file: ""
    }

    const [imageResponse, setImageResponse] = useState({
      url: ""
    })

    

    let widget = window.cloudinary.createUploadWidget({
      cloudName: "winehub",
      uploadPreset: "a1jh2xom"},
      (error, result) => {props.imageUpload(result)})

    const showWidget = () => {
      widget.open()
    }

  return (
    <div>
      <Button onClick={showWidget}>Upload Image</Button>
    </div>
  );
}

export default ImageUpload;