import React, { memo, useState } from 'react';
import { Button } from '../index';

function PhotosGallery (props) {
  const { photos } = props;

  const [gallery, setGallery] = useState(photos);

  const renderPhotos = (img, key) => {
    return(
      <div>
        <img src={img} alt='Random'/>
        <Button onClick={() => handleRemove(key)}>
          Remover {key}
        </Button>
      </div>      
    ) 
  }

  const handleRemove = (key) => {
    const newGallery = gallery.filter((img, index) => index !== key);
    setGallery(newGallery);
  }

  return(
    <div>
      {gallery.map(renderPhotos)}
    </div>
  )
}

export default memo(PhotosGallery);