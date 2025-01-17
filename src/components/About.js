import React from "react";

function About({ image, about }) {
  // Set default image URL if no image prop is provided
  const imageUrl = image || "https://via.placeholder.com/215";

  return (
    <aside>
      <img src={imageUrl} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
