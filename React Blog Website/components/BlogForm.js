import React, { useState } from 'react';

const BlogForm = ({ blog, onSave, onClose }) => {
  const [imageUrl, setImageUrl] = useState(blog ? blog.imageUrl : '');
  const [title, setTitle] = useState(blog ? blog.title : '');
  const [description, setDescription] = useState(blog ? blog.description : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ imageUrl, title, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Image url" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <div className="form-buttons">
        <button type="submit">Post Blog</button>
        <button onClick={onClose}>Close</button>
      </div>
    </form>
  );
};

export default BlogForm;
