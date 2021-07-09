import React from 'react';
import PropTypes from 'prop-types';
import TextField from '../../../forms/TextField';
import Button from '../../../commons/Button';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import Text from '../../../foundation/Text';
import { LoggedPageContext } from '../../../wrappers/LoggedPage/context';

export default function PostContent({ image, setImage, setFilter }) {
  const loggedPage = React.useContext(LoggedPageContext);
  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '40%',
        width: '85%',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
        }}
      >
        <TextField
          placeholder="URL da imagem"
          name="image_url"
          onChange={(event) => {
            setImage({
              have: false,
              loading: false,
              url: event.currentTarget.value,
              ready: false,
            });
          }}
          color="background.light"
          mode={loggedPage.mode}
        />
        <Button
          className="changeUrl"
          onClick={(event) => {
            event.preventDefault();
            setImage({
              have: false,
              loading: true,
              url: image.url,
              ready: false,
            });
            setTimeout(() => {
              setImage({
                have: true,
                loading: false,
                url: image.url,
                ready: false,
              });
            }, 500);
          }}
          style={{
            padding: '0.6rem 1rem',
            position: 'absolute',
            top: '0',
            right: '0',
          }}
          variant="secondary.main"
          mode={loggedPage.mode}
        >
          <ArrowRightIcon />
        </Button>
      </div>
      <Text color="tertiary.light" mode={loggedPage.mode}>
        Formatos suportados: jpg, png, svg e xpto.
      </Text>
      <Button
        className="submitUrl"
        onClick={(event) => {
          event.preventDefault();
          setFilter({ submit: true, type: '' });
        }}
        style={{ marginTop: '2.5rem', marginBottom: '0.5rem' }}
        variant="primary.main"
        fullWidth
        disabled={!image.ready}
        mode={loggedPage.mode}
      >
        Avançar
      </Button>
      {!image.have && (
      <Text variant="smallestException" color="error.main" mode={loggedPage.mode}>
        Por favor insere uma url valida!
      </Text>
      )}
    </form>
  );
}
PostContent.propTypes = {
  image: PropTypes.shape({
    have: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired,
    ready: PropTypes.bool.isRequired,
  }).isRequired,
  setImage: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
};
