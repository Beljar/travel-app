import React from 'react';
import ReactPlayer from 'react-player';

export default function VideoPlayer({ url, width, style }) {
  return <ReactPlayer style={style} width={width} url={url} controls />;
}
