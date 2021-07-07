import React from 'react';
import PropTypes from 'prop-types';
import Flickity from 'react-flickity-component';
import { Lottie } from '@crello/react-lottie';
import Button from '../../../commons/Button';
import Box from '../../../foundation/layout/Box';
import LoadingAnimation from '../../../../theme/animations/LoadingAnimation.json';
import ErrorAnimation from '../../../../theme/animations/ErrorAnimation.json';
import SuccessAnimation from '../../../../theme/animations/SuccessAnimation.json';
import postService from '../../../../infra/services/post/postService';
import Text from '../../../foundation/Text';
import { LoggedPageContext } from '../../../wrappers/LoggedPage/context';

export default function PostFilter({
  url, setFilter, filterType, reset,
}) {
  const loggedPage = React.useContext(LoggedPageContext);
  const filters = [
    'none',
    '1977',
    'ashby',
    'brannan',
    'clarendon',
    'crema',
    'gingham',
    'ginza',
    'inkwell',
    'kelvin',
    'lark',
    'lo-Fi',
    'ludwig',
    'maven',
    'mayfair',
    'moon',
    'nashville',
    'perpetua',
    'poprocket',
    'reyes',
    'rise',
    'sierra',
    'skyline',
    'slumber',
    'toaster',
    'valencia',
    'vesper',
    'walden',
    'willow',
    'xpro-ii',
  ];
  const [response, setResponse] = React.useState({
    DATA: null,
    LOADING: false,
    ERROR: false,
  });
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setResponse({
          DATA: null,
          LOADING: true,
          ERROR: false,
        });
        setTimeout(() => {
          const data = {
            photoUrl: url,
            description: 'Amazing photos!',
            filter: filterType,
          };
          const res = postService.post(data);
          if (!res) setResponse({ DATA: null, LOADING: false, ERROR: true });
          if (res) {
            setResponse({ DATA: res, LOADING: false, ERROR: false });
          }
        }, 2000);
      }}
      id="filters"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '40%',
        width: '100%',
      }}
    >
      {!response.DATA && !response.LOADING && !response.ERROR && (
        <>
          <Flickity>
            {filters.map((filter) => (
              <Button
                key={filter}
                style={{ padding: '0 3px' }}
                onClick={(event) => {
                  event.preventDefault();
                  setFilter({ submit: true, type: filter });
                }}
                variant="background.light"
                mode={loggedPage.mode}
              >
                <img
                  className={`filter-${filter}`}
                  style={{ width: '100px', height: '80px' }}
                  src={url}
                  alt="filters instalura"
                />
              </Button>
            ))}
          </Flickity>
          <Button
            className="submitPost"
            form="filters"
            style={{ width: '80%', marginTop: '2.5rem' }}
            variant="primary.main"
            fullWidth
            disabled={!filterType}
            mode={loggedPage.mode}
          >
            Postar
          </Button>
        </>
      )}
      {!response.DATA && response.LOADING && !response.ERROR && (
        <Lottie
          width="100px"
          height="100px"
          config={{
            animationData: LoadingAnimation,
            loop: true,
            autoplay: true,
          }}
        />
      )}
      {response.DATA && !response.LOADING && !response.ERROR && (
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Lottie
            className="animationSucess"
            width="100px"
            height="100px"
            config={{
              animationData: SuccessAnimation,
              loop: true,
              autoplay: true,
            }}
          />
          <Text
            variant="smallestException"
            color="success.main"
            mode={loggedPage.mode}
          >
            Post cadastrado com sucesso!
          </Text>
        </Box>
      )}
      {!response.DATA && !response.LOADING && response.ERROR && (
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Lottie
            className="animationError"
            width="100px"
            height="100px"
            config={{
              animationData: ErrorAnimation,
              loop: true,
              autoplay: true,
            }}
          />
          <Text
            variant="smallestException"
            color="error.main"
            mode={loggedPage.mode}
          >
            Parece que algo deu errado,tente novamente
          </Text>
          <Button
            onClick={() => {
              setResponse({
                DATA: response.DATA,
                LOADING: false,
                ERROR: false,
              });
              setFilter({ submit: false, type: '' });
              reset();
            }}
            variant="primary.main"
            disabled={!filterType}
            style={{ marginTop: '2rem' }}
            mode={loggedPage.mode}
          >
            Voltar
          </Button>
        </Box>
      )}
    </form>
  );
}

PostFilter.defaultProps = {
  filterType: '',
};
PostFilter.propTypes = {
  url: PropTypes.string.isRequired,
  filterType: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};
