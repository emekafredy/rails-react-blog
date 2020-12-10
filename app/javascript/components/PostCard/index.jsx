import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import './PostCard.scss';

export const PostCard = ({
  postImage,
  firstName,
  lastName,
  username,
  title,
  postId,
  date
}) => {
  return (
    <div className="column is-full-mobile is-one-third-tablet is-one-quarter-widescreen">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={ postImage } alt="blog image" />
          </figure>
        </div>

        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src="https://www.scanditron.com/wp-content/uploads/2019/01/male-member-placeholder.jpg" alt="Placeholder image" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title post-card__name"> { firstName } { lastName }</p>
              <p className="subtitle post-card__username">@{ username }</p>
            </div>
          </div>

          <div className="content">
            <strong> 
              <Link to={`/posts/${postId}`} className="post-card__title"> { title }  </Link>
            </strong>
            <br />
            <small className="post-card__date">
              { moment(date).format('LL') }
            </small>
          </div>
        </div>
      </div>

    </div>
  )
}
