'use client';

import classes from './image-picker.module.css';
import {useRef, useState} from "react";
import Image from "next/image";

export default function ImagePicker({label, name}) {
  const [pickImage, setPickImage] = useState()
  const imageInput = useRef();
  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickImage(null);
      return;
    }


    let fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      setPickImage(fileReader.result);
    };
  }

  return <div className={classes.picker}>
    <label htmlFor={name}>{label}</label>
    <div className={classes.controls}>
      <div className={classes.preview}>
        {!pickImage && <p>No Image picked yet.</p>}
        {pickImage && <Image src={pickImage} alt='The image selected by th user.' fill/>}
      </div>
      <input
        onChange={handleImageChange}
        className={classes.input}
        name={name} type="file" id={name} accept='image/png, image/jpeg'
        ref={imageInput}
        required />
      <button className={classes.button} type='button' onClick={handlePickClick}>
        Pick on Image
      </button>
    </div>
  </div>
}