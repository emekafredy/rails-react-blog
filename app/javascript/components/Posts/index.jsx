import React, { useContext, useEffect } from 'react';

import { PostCard } from '../PostCard';
import { Loader } from '../Loader';

import { PostContext } from '../../context/posts';

import './Posts.scss';

export const Posts = () => {
  const { getPosts, posts, loading } = useContext(PostContext);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {
        loading ? <Loader /> :
        <div className="posts__container">
          <div className="columns is-multiline is-mobile">
            {
              posts?.posts.map((post, index) => {
                return (
                  <PostCard
                    key={index}
                    postImage={ `https://res.cloudinary.com/dgbmeqmyf/image/upload/v1607511369/rails-react-blog/${post.category.toLowerCase()}.jpg` }
                    title={ post.title }
                    date={ post.created_at }
                    firstName={ post.first_name }
                    lastName={ post.last_name }
                    username={ post.username }
                  />
                );
              })
            }
          </div>
        </div>
      }
    </div>
  )
}
