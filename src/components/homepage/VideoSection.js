// VideoSection.js
import React from 'react';

function VideoSection() {
  return (
    <div
      className="video-section"
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <iframe
        style={{ maxWidth: '64rem' }}
        width="1070"
        height="602"
        src="https://www.youtube.com/embed/M7XlIe8hhPk"
        title="Introducing LAMM"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default VideoSection;
