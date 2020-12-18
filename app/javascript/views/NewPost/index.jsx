import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { PostContext } from '../../context/posts';

import { ErrorsList } from '../../components/ErrorsList/index';

import './NewPost.scss';

export const NewPost = () => {
  const [category_id, setCategoryId] = useState();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const history = useHistory();

  const { getCategories, categories, errors, createPost, newPost } = useContext(PostContext);

  useEffect(() => {
    getCategories(); 
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    await createPost({ title, body, category_id });
  }

  if (newPost.data?.post_id) {
    history.push(`/posts/${newPost.data?.post_id}`);
  }

  const handleOnCategoryIdChange = (event) => {
    setCategoryId(event.target.value)
  }

  return (
    <div className="post-details">
      <div className="post-details__header">
        <h2 className="post-details__header__title"> New Post </h2>
      </div>


      <div className="post-details__body">
        { errors?.length > 0 ? <ErrorsList errors={errors}/> : '' }

        <div className="post-details__body__text">
          <form action="" onSubmit={(e) => handleFormSubmit(e)}>
            <strong> Title </strong>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Add title"
                  value={ title }
                  onChange={(e) => setTitle(e.target.value)}
                  style={{ marginBottom: '1rem' }}
                  required
                />
              </div>
            </div>

            <div className="field" style={{ marginBottom: '1rem' }}>
              <div className="select">
                <select onChange={(e) => handleOnCategoryIdChange(e)}>
                  <option>Select category</option>
                  {categories?.categories?.map((category) => {
                    return (
                      <option
                        key={ category.id }
                        value={ category.id }
                      >
                        { category.name }
                      </option>
                    )
                  })}
                </select>
              </div>
            </div>

            <strong> Body </strong>
            <textarea
              className="textarea"
              placeholder="Create new post"
              value={ body }
              onChange={(e) => setBody(e.target.value)}
              style={{ marginBottom: '1rem' }}
              rows="15"
              required
            >
            </textarea>
            <div className="control">
              <button
                className="button is-light"
                style={{ marginRight: '1rem' }}
              > 
                Cancel
              </button>

              <button
                className="button is-dark"
              > 
                Save as Draft
              </button>

              <button
                className="button is-link is-pulled-right"
                type="submit"
                disabled={ false }
              > 
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
