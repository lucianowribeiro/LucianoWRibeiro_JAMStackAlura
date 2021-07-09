import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import LikeIcon from '../../../theme/icons/LikeIcon';
import UserAvatar from '../../../theme/UserAvatar';
import Button from '../../commons/Button';
import Text from '../../foundation/Text';
import { LoggedPageContext } from '../../wrappers/LoggedPage';
import MoreIcon from './icons/MoreIcon';
import MessageIcon from './icons/MessageIcon';
import DirectIcon from './icons/DirectIcon';
import BookmarkIcon from './icons/BookmarkIcon';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const PostComboStyle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, mode }) => get(theme, `${mode}.colors.background.light.color`)};
  width: 100%;
  margin-top: 32px;
  & > img {
    width: 100%;
  }
`;
const HeaderPost = styled.nav`
  padding: 50px 0;
  width: 85%;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > svg:hover,& > svg:visited {
    cursor: pointer;
    filter: blur(0.8px);
  }
  & > div {
    width: 35%;
    display: flex;
    justify-content: space-evenly;
  }
  & > div * {
    margin-left: 20px;
  }
  & > div > p {
    font-weight: 500;
  }
`;
const IconsPost = styled.nav`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: 80px;
  flex-direction: row;
  & > * {
    height: 100%;
  }
  & svg {
    height: 75%;
  }
  & svg:hover,& svg:visited {
    cursor: pointer;
    filter: blur(0.8px);
  }
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 220px;
  }
  & > div p {
    font-weight: 500;
  }
`;
const DescriptionPost = styled.div`
  padding-top: 20px;
  padding-bottom: 50px;
  width: 85%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  & > div {
    position: relative;
  }
  & > div img {
    height: 32px;
    width: 32px;
    border: 2px solid ${({ theme, mode }) => get(theme, `${mode}.background.main.color`)};
  }
  & > div img:first-child(1) {
    position: absolute;
    z-index: 4;
    top: 0;
    left: 0;
  }
  & > div img:nth-child(2) {
    z-index: 6;
    top: 0;
    left: -30px;
    position: absolute;
  }
  & > div img:nth-child(3) {
    z-index: 5;
    top: 0;
    left: -15px;
    position: absolute;
  }
  & > p {
    ${breakpointsMedia({
    xs: css`
        width: 50%;
      `,
    lg: css`
        width: initial;
      `,
  })}
  }
  & button:disabled {
    padding: 6px 12px;
  }
`;

export default function PostCombo({
  likes, description, filter, url,
}) {
  const webLogged = React.useContext(LoggedPageContext);
  return (
    <PostComboStyle mode={webLogged.mode}>
      <HeaderPost>
        <div>
          <UserAvatar size="medium" />
          <Text tag="p" variant="paragraph1" color="tertiary.main" mode={webLogged.mode}>
            {webLogged.profile.user.username}
          </Text>
        </div>
        <MoreIcon mode={webLogged.mode} />
      </HeaderPost>
      <img
        src={url}
        className={`filter-${filter}`}
        alt="post face"
        loading="lazy"
      />
      <IconsPost>
        <div>
          <LikeIcon mode={webLogged.mode} color="tertiary.main" />
          <Text tag="p" variant="paragraph1" color="tertiary.main" mode={webLogged.mode}>
            {console.log(likes)}
            {likes.length}
          </Text>
          <MessageIcon mode={webLogged.mode} />
          <Text tag="p" variant="paragraph1" color="tertiary.main" mode={webLogged.mode}>
            1.2k
          </Text>
          <DirectIcon mode={webLogged.mode} />
        </div>
        <BookmarkIcon mode={webLogged.mode} />
      </IconsPost>
      <DescriptionPost mode={webLogged.mode}>
        <div>
          <UserAvatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLKybvXmdnFY15zYfKKEHh1DxA0USfX8vw85Eu6f34E1rDIciMTjX5PQsOaa61HIXIzuY&usqp=CAU"
            size="small"
          />
          <UserAvatar
            src="https://ocdn.eu/images/pulscms/Mjc7MDA_/e2340fc4d1c27ba063115973a477ef87.jpeg"
            size="small"
          />
          <UserAvatar
            src="https://extra.globo.com/incoming/24287426-475-b4d/w976h550-PROP/ronaldinho-gaucho-2.jpg"
            size="small"
          />
        </div>
        <Text tag="p" variant="paragraph1" color="tertiary.main" mode={webLogged.mode}>
          {description}
        </Text>
        <Button variant="tertiary.light" disabled mode={webLogged.mode}>
          Mais
        </Button>
      </DescriptionPost>
    </PostComboStyle>
  );
}
PostCombo.defaultProps = {
  likes: [],
  filter: 'none',
};
PostCombo.propTypes = {
  url: PropTypes.string.isRequired,
  filter: PropTypes.string,
  likes: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      likes: PropTypes.string,
    }),
  ),
  description: PropTypes.string.isRequired,
};
