import React from "react";

const GoogleMap = ({ apiKey, place }) => {
  return (
    <iframe
      title={place}
      height="150"
      frameBorder="0"
      style={{ border: 0 }}
      src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${place}`}
      allowFullScreen={true}
    />
  );
};

export default GoogleMap;
