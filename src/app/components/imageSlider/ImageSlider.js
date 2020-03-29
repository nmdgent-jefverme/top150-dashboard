import { default as React } from 'react'
import ImageGallery from 'react-image-gallery';
import '../../../../node_modules/react-image-gallery/styles/css/image-gallery.css';

const images = [
    {
      original: 'https://jefvermeire.stackstorage.com/s/JX0lbZGS2EsT3LT',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
    },
  ];

const ImageSlider = () => {
    return(
        <div>
            <ImageGallery items={images} autoPlay={true} showThumbnails={false} showFullscreenButton={false}/>
        </div>
    )
}

export default ImageSlider;