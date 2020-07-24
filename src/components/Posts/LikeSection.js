// Look at the number of likes on line 26. Right now it's hard coded to '100'.
// Use a piece of data coming in through props to display the correct number of likes.
// You will also add an onClick handler that utilizes `likePost` to increase the count of likes.
// (As a stretch goal, you might want to prevent your user from "liking" the same post more than once.)
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

const LikeSection = props => {
  // 🔥 Make sure the parent of LikeSection is passing the right props!
  const { likePost, numberOfLikes, newComment, postId } = props;
  const processInput = (e) => {
    e.preventDefault();
    const commentInput = document.querySelector(`#commentInput-${postId}`).value;
    newComment(postId,"bob",commentInput);    
  }
  return (
    <div>
      <div
        className='like-section'
        key='likes-icons-container'
      >
        <div className='like-section-wrapper like' onClick={()=>likePost(postId)}>
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className='like-section-wrapper comment'>
          <FontAwesomeIcon icon={faComment} />
        </div>
        <div>
          <form>
          <input id={`commentInput-${postId}`} className="commentInput" type="text"></input>
          <button type="submit" onClick={processInput}>&gt;</button>
          </form>
        </div>
      </div>
      <p className='like-number'>{numberOfLikes} likes</p>
    </div>
  );
};

export default LikeSection;
