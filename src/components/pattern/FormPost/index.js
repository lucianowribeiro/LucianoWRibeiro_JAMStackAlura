/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Default from './images/Default';
/* import CloseModal from '../../../theme/CloseModal';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid'; */

function PostContent() {
  const [isImage, setImage] = React.useState(false);
  const [url, setUrl] = React.useState('');
  return (
    <FormPost>
      <form>
        {isImage ? (<img src={url} alt="post figure" />) : (<Default />)}
        ola mundo
      </form>
    </FormPost>
  );
}

export default function FormPost({ onClose, propsModal }) {
  return (

    <PostContent />
  );
}
FormPost.propTypes = {
  onClose: PropTypes.func.isRequired,
  propsModal: PropTypes.object.isRequired,
};
