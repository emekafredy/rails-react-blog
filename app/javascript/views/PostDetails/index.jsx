import React, { useEffect, useContext } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { PostContext } from '../../context/posts';
import { AuthContext } from '../../context/auth';

import { Loader } from '../../components/Loader';
import CommentInput from '../../components/CommentInput';

import './PostDetails.scss';

export const PostDetails = (props) => {
  const { getPost, post, loading, clearNewPostId } = useContext(PostContext);
  const { user } = useContext(AuthContext);

  const { id } =  props.match.params;

  const getPostDetails = () => {
    clearNewPostId();
    getPost(id);
  }

  useEffect(() => {
    getPostDetails();
  }, []);

  return (
    <div className="post-details">
      { loading ? <Loader /> :
        <div>
          <div className="post-details__header">
            <h2 className="post-details__header__title"> { post?.post.title } </h2>
            <span className="post-details__header__meta-data">
              Published { moment(post?.post.created_at).format('LL') } | By { post?.user } | { post?.category }
            </span>
          </div>

          <div className="post-details__body">
            <div className="post-details__body__post-actions">
              <div className="post-details__body__post-actions__right">
                {user?.username === post?.user ?
                  <Link to={`/posts/${post?.post.id}/edit`}>
                    <i className="fa fa-edit"></i>
                  </Link> : ''
                }
              </div>
            </div>
            <img
              className="post-details__body__image"
              src={ `https://res.cloudinary.com/dgbmeqmyf/image/upload/v1607511369/rails-react-blog/${post?.category.toLowerCase()}.jpg` }
              alt={ post?.category }
            />

            <div className="post-details__body__text">
              <p> { post?.post.body } </p>
            </div>

            <CommentInput />
          </div>
        </div>
      }
    </div>
  )
}
