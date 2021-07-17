import { Lottie } from '@crello/react-lottie';
import React from 'react';
import styled from 'styled-components';
import { get } from 'lodash';
import LoadingAnimation from '../../../../theme/animations/LoadingAnimation.json';
import DefaultIcon from '../icons/DefaultIcon';
import { LoggedPageContext } from '../../../wrappers/LoggedPage/context';

const PostStyle = styled.figure`
  width: 100%;
  height: 50%;
  text-align: center;
  margin: 0;
  & > img {
    height: 100%;
    width: 100%;
  }
`;
const DefaultStyle = styled.figure`
  background-color: ${({ theme, mode }) => (mode === 'light'
    ? get(theme, `${mode}.background.main.color`)
    : get(theme, `${mode}.tertiary.light.color`))};
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;
export default function PostImage({ filter, image, setImage }) {
  const loggedPage = React.useContext(LoggedPageContext);
  if (image.have) {
    return (
      <PostStyle>
        {filter.submit ? (
          <img
            className={`filter-${filter.type}`}
            src={image.url}
            alt="post figure"
          />
        ) : (
          <img
            onLoad={() => {
              setImage({
                have: true,
                loading: false,
                ready: true,
                url: image.url,
              });
            }}
            onError={() => {
              setImage({
                have: false,
                loading: false,
                ready: false,
                url: image.url,
              });
            }}
            src={image.url}
            alt="post figure"
          />
        )}
      </PostStyle>
    );
  }
  if (!image.have && image.loading) {
    return (
      <DefaultStyle mode={loggedPage.mode}>
        <Lottie
          width="400px"
          height="400px"
          config={{
            animationData: LoadingAnimation,
            loop: true,
            autoplay: true,
          }}
        />
      </DefaultStyle>
    );
  }
  if (!image.have && !image.loading) {
    return (
      <DefaultStyle mode={loggedPage.mode}>
        <DefaultIcon mode={loggedPage.mode} />
      </DefaultStyle>
    );
  }
}
