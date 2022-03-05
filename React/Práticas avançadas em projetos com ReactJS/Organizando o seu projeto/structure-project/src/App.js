import React from 'react'
import { PhotoGallery } from './components';

function App() {

  const photos = [
    'http://placeimg.com/140/60/people',
    'http://placeimg.com/140/60/animal',
    'http://placeimg.com/140/60/natural',
    'http://placeimg.com/140/60/tech',
    'http://placeimg.com/140/60/any',
  ]

  return(
    <>
      <h1>Galeria de Fotos</h1>
      <PhotoGallery 
        photos = {photos}
      />
    </>
  )
}

export default App;
