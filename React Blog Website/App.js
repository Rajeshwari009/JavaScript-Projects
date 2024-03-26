import React, { useState } from 'react';
import './components/Blog.css'
import BlogContext from './components/BlogContext';
import Modal from './components/Modal';
import BlogForm from './components/BlogForm';
import Blog from './components/Blog';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);

  // Function to open modal
  const openAddModal = () => {
    setCurrentBlog(null);
    setIsModalOpen(true);
  };

  // Function to open edit modal
  const openEditModal = (id) => {
    const blogToEdit = blogs.find(blog => blog.id === id);
    setCurrentBlog(blogToEdit);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to add or edit blog
  const handleSaveBlog = (blogData) => {
    if (currentBlog) {
      // Edit existing blog
      const updatedBlogs = blogs.map(blog =>
        blog.id === currentBlog.id ? { ...blog, ...blogData } : blog
      );
      setBlogs(updatedBlogs);
    } else {
      // Add new blog
      const newBlog = { id: Date.now(), ...blogData };
      setBlogs([...blogs, newBlog]);
    }
    closeModal();
  };

  // Function to delete blog
  const deleteBlog = (id) => {
    const updatedBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(updatedBlogs);
  };

  return (
    <BlogContext.Provider value={{ deleteBlog, openEditModal }}>
      <div className="App">
        <header>
          <h1>BLOG WEBSITE</h1>
          <button onClick={openAddModal}>ADD BLOG</button>
        </header>
        <div className="blogs-container">
          {blogs.map(blog => (
            <Blog key={blog.id} {...blog} />
          ))}
        </div>
        {isModalOpen && (
          <Modal>
            <BlogForm blog={currentBlog} onSave={handleSaveBlog} onClose={closeModal} />
          </Modal>
        )}
      </div>
    </BlogContext.Provider>
  );
};

export default App;
