import React from 'react';
import PageTitle from '../utils/pageTitle';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import './BlogPost.css';

const BlogPost = () => {
  const { t } = useTranslation();
  const { postId } = useParams(); // Assuming the URL is /blog/:postId
  const post = t('blogPosts', { returnObjects: true });


  // Get title and content for the current post
  const title = t(`blogPosts.${postId}.title`, { fallback: 'Title Not Available' });
  const content = t(`blogPosts.${postId}.content`, { fallback: 'Content Not Available' });
  const imageUrl = t(`blogPosts.${postId}.image`, { fallback: '' });

  return (
    <main>
        <article className='blog-article'>
            <PageTitle title={t(`blogPosts.${postId}.title`)} />
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt={title}
                    className='blog-post-image'
                />
            )}
            <h1>{title}</h1>
            <p>{post.date}</p>
            <ReactMarkdown>{content}</ReactMarkdown>
        </article>
    </main>
  );
};

export default BlogPost;
