import React from 'react';
import { Modal } from 'react-responsive-modal';
import { FiCheckCircle } from 'react-icons/fi';

type ModalToggle = {
  isOpen: boolean;
  setClose: any;
};
const ModalComponent = ({ isOpen, setClose }: ModalToggle) => {
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={() => setClose(false)}
        center
        styles={{
          modal: {
            animation: `${isOpen ? 'customEnterAnimation' : 'customLeaveAnimation'} 500ms`,
          },
        }}
      >
        <div className="modal-content">
          <FiCheckCircle className="circle-submit" />
          <h1 className="modal-text">Cadastro concluído!</h1>
        </div>
      </Modal>
    </div>
  );
};
export default ModalComponent;
