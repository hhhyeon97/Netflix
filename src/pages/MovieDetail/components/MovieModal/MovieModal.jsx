import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import YouTube from 'react-youtube';
import './MovieModal.style.css';

const MovieModal = ({ video }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="watch-btn-wrap">
        <button className="watch-btn" onClick={handleShow}>
          Watch the trailer !
        </button>
      </div>
      <div style={{ display: 'block', position: 'initial' }}>
        <Modal
          show={show}
          onHide={handleClose}
          animation={false}
          dialogClassName="modal-50w"
          contentClassName="modal-style"
          centered
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <MovieWatch video={video} />
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export const MovieWatch = ({ video }) => {
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
    },
  };
  return (
    <div style={{ height: '100%' }}>
      <YouTube
        videoId={video && video[0]?.key}
        style={{ height: '100%' }}
        opts={opts}
        onReady={(event) => event.target.mute()}
      />
    </div>
  );
};

export default MovieModal;
