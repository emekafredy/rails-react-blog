import React from 'react';

export default function CommentInput() {
  return (
    <div style={{ width: '90%' }}>
      <strong> Add Comment </strong>
      <form action="">
        <textarea class="textarea" placeholder="Add your comment here" style={{ marginBottom: '1rem' }}></textarea>
        <div className="control">
          <button
            className="button is-link"
            type="submit"
            disabled={ false }
          > 
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
