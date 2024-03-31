"use client"
import React from 'react';

function ProductCard1(props) {
  const projects = props.projects.props[0];
  return (
    <div>
          <button >Next Carousel can be done on client side</button>
      {projects.map((project,index) => (
        <div key={index}>
          <p>ID: {project.id}</p>
          <p>Title: {project.title}</p>
          <p>Price: {project.price}</p>
          <p>Category: {project.category}</p>
          <p>Description: {project.description}</p>
          <img src={project.image} alt={project.title} />
        </div>
      ))}
      <button >Next Carousel</button>
    </div>
  );
}

export default ProductCard1;
