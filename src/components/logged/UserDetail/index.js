import React from 'react';
import PropTypes from 'prop-types';
import GithubIcon from '../../../theme/icons/GithubIcon';
import UserAvatar from '../../../theme/UserAvatar';
import Box from '../../foundation/layout/Box';
import Text from '../../foundation/Text';
import { LoggedPageContext } from '../../wrappers/LoggedPage';

export default function UserDetail({
  src, username, name, spacing, size,
}) {
  const webLogged = React.useContext(LoggedPageContext);
  const padding = () => {
    if (spacing === 'big') return '30px 0 20px 0';
    if (spacing === 'small') return '0 0 10px 0';
    return '0';
  };
  return (
    <Box padding={padding()} display="flex" justifyContent="space-around">
      <Box display="flex" justifyContent="center" alignItems="center">
        <UserAvatar size={size} src={src} />
        <Box marginLeft="20px" width="180px">
          <Text tag="h2" style={{ fontWeight: '500', marginBottom: '4px' }} variant="paragraph1" color="tertiary.main" mode={webLogged.mode}>{username}</Text>
          <Text tag="h3" style={{ fontWeight: '500', marginTop: '4px' }} variant="paragraph1" color="tertiary.light" mode={webLogged.mode}>{name}</Text>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-evenly" alignItems="center" width="100px">
        <GithubIcon mode={webLogged.mode} />
        <Text style={{ margin: '0', fontWeight: '500' }} tag="h3" color="secondary.main" mode={webLogged.mode}>Github</Text>
      </Box>
    </Box>
  );
}
UserDetail.defaultProps = {
  src: 'https://images.unsplash.com/photo-1618678900888-da259539f5ef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE4NzYzMTky&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600',
};
UserDetail.propTypes = {
  size: PropTypes.string.isRequired,
  spacing: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  src: PropTypes.string,
};
