import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = ({ name, avatar, time }) => (
  <div className="post-header--container">
    <img className="post-header--container--avatar" src={avatar} alt="avatar" />
    <div className="post-header--container--data-container">
      <strong>{name}</strong>
      <span>{time}</span>
    </div>
  </div>
);

PostHeader.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PostHeader;
