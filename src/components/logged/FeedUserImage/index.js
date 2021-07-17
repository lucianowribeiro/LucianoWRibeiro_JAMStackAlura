import styled, { css } from 'styled-components';
import React from 'react';
import { Lottie } from '@crello/react-lottie';
import PropTypes from 'prop-types';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import LikeAnimation from '../../../theme/animations/LikeAnimation.json';
import Box from '../../foundation/layout/Box';
import LikeIcon from '../../../theme/icons/LikeIcon';
import Text from '../../foundation/Text';
import likeService from '../../../infra/services/like/likeService';
import { LoggedPageContext } from '../../wrappers/LoggedPage/context';

const ImageStyle = styled.figure`
  position: relative;
  ${breakpointsMedia({
    xs: css`
      width: 32%;
      height: 110px;
      margin: 0.1rem;
    `,
    sm: css`
      width: 31%;
      height: 130px;
      margin: 0.2rem;
    `,
    md: css`
      width: 45%;
      height: 270px;
      margin: 1rem;
    `,
    lg: css`
      width: 28%;
      height: 250px;
      margin: 1rem;
    `,
    xl: css`
      width: 30%;
      height: 300px;
      margin: 1rem;
    `,
  })}
  & > img {
    width: 100%;
    height: 100%;
  }
  & > div:hover {
    backdrop-filter: blur(20px);
  }
  & > div {
    z-index: 20;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  & > div > svg {
    width: 20%;
    height: 20%;
    margin-bottom: 12px;
  }
  & > div > span {
    font-weight: bold;
  }
`;

export default function FeedUserImage({
  id, src, className, alt, likes,
}) {
  const webLogged = React.useContext(LoggedPageContext);
  const [like, setLike] = React.useState({
    have: false,
    ready: false,
    numberLikes: likes.length,
  });
  return (
    <ImageStyle
      onMouseLeave={() => setLike({ have: false, ready: false, numberLikes: like.numberLikes })}
      onMouseEnter={() => setLike({
        have: true,
        ready: like.ready,
        numberLikes: like.numberLikes,
      })}
    >
      <img src={src} className={className} alt={alt} loading="lazy" />
      {like.have && !like.ready && (
        <Box
          onClick={() => {
            if (like.numberLikes === 0) {
              const resp = likeService.like(id, like.numberLikes + 1);
              if (resp) {
                setLike({
                  have: like.have,
                  ready: true,
                  numberLikes: like.numberLikes + 1,
                });
              }
            }
            if (like.numberLikes === 1) {
              const resp = likeService.like(id, like.numberLikes - 1);
              if (resp) {
                setLike({
                  have: like.have,
                  ready: true,
                  numberLikes: like.numberLikes - 1,
                });
              }
            }
          }}
        >
          <LikeIcon color="primary.main" mode={webLogged.mode} />
          <Text color="primary.main" mode={webLogged.mode}>{like.numberLikes}</Text>
        </Box>
      )}
      {like.have && like.ready && (
        <Box
          onClick={async () => {
            if (like.numberLikes === 1) {
              const resp = likeService.like(id, like.numberLikes - 1);
              if (resp) {
                setLike({
                  have: like.have,
                  ready: true,
                  numberLikes: like.numberLikes - 1,
                });
              }
            }
            if (like.numberLikes === 0) {
              const resp = await likeService.like(id, like.numberLikes + 1);
              if (resp) {
                setLike({
                  have: like.have,
                  ready: true,
                  numberLikes: like.numberLikes + 1,
                });
              }
            }
          }}
        >
          <Lottie
            height="30%"
            width="30%"
            config={{
              animationData: LikeAnimation,
              loop: true,
              autoplay: true,
            }}
          />
          <Text color="primary.main" mode={webLogged.mode}>{like.numberLikes}</Text>
        </Box>
      )}
    </ImageStyle>
  );
}
FeedUserImage.defaultProps = {
  likes: [],
};
FeedUserImage.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  likes: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      likes: PropTypes.string,
    }),
  ),
};
