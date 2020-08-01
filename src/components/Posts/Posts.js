import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts, newComment } = props;

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
      {(posts.length > 0) ? posts.map((e,i)=>{
        return <Post post={e} likePost={likePost} newComment={newComment} key={`post${i}`} />;
      }) : <div></div>}
    </div>
  );
};

export default Posts;
