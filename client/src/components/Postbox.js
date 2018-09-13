import React from 'react';

const Postbox = ({ newPost }) => {
  return (
    <div className="post-box">
      <h4>Post something!</h4>
      <form className="post-form" action="" onSubmit={newPost}>
        <label htmlFor="title">Post Title:</label>
        <input type="text" name="title" />
        <label htmlFor="body">Message (optional)</label>
        <textarea name="body" id="" cols="30" rows="10" />
        <button>Post</button>
      </form>
    </div>
  );
};

export default Postbox;
