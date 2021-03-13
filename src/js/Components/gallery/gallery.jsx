import React from 'react';
import 'react-image-gallery/styles/scss/image-gallery.scss';
import ImageGallery from 'react-image-gallery';

export default function Gallery({ items, style }) {
  return (
    <div style={style}>
      <ImageGallery items={items} />
    </div>
  );
}
