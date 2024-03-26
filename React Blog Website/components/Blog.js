import React, { useContext } from 'react';
import BlogContext from './BlogContext';
import './Blog.css'

const Blog = ({ id, imageUrl, title, description }) => {
  const { deleteBlog, openEditModal } = useContext(BlogContext);

  return (
    <div className="blog-item">
      <img src={imageUrl} alt="Blog" />
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="blog-actions">
        <button onClick={() => openEditModal(id)}>Edit</button>
        <button onClick={() => deleteBlog(id)}>Delete</button>
      </div>
    </div>
  );
};

export default Blog;
