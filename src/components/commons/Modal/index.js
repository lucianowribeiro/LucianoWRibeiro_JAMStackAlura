import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle, css } from 'styled-components';
import { motion } from 'framer-motion';

const ModalWrapper = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: rgba(0,0,0,0.4);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    overflow: scroll;
    transition: .3s;
    z-index: 100;
    backdrop-filter: blur(10px);
    ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
        overflow: hidden;
      `;
    }
    return css`
      opacity: 0;
      pointer-events: none;
      overflow: hidden;
    `;
  }}
`;
const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

function Modal({ isOpen, onClose, children }) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(event) => {
        const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');
        if (!isSafeArea) {
          onClose();
        }
      }}
    >
      {isOpen && <LockScroll />}
      <motion.div
        variants={{
          open: {
            y: 180,
          },
          close: {
            y: 0,
          },
        }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.2 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {children({
          'data-modal-safe-area': 'true',
        })}
      </motion.div>
    </ModalWrapper>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
