import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Blog.css'; // Assume we have some CSS for styling the Blog page

const Blog = () => {
  const { t } = useTranslation();

  // Get all the blog posts from the translation JSON
  const posts = t('blogPosts', { returnObjects: true });

  return (
    <main>
      <h1>{t('recent blog posts', 'Recent Blog Posts')}</h1>
      <div className="blog-list">
        {Object.keys(posts).map((postId) => {
          const post = posts[postId];
          return (
            <Link to={`/blog/${postId}`}>
            <div key={postId} className="blog-card">
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="blog-card-image"
                />
              )}
              <div className="blog-card-content">
                <h2>{post.title}</h2>
                <p className="blog-date">{post.date}</p>
                <p className="blog-description">{post.description}</p>
              </div>
            </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Blog;

