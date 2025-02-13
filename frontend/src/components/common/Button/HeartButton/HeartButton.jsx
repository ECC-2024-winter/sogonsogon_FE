import { useState, useEffect } from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import * as S from './HeartButton.style';
import { ModalSave } from '../../../Modal/ModalSave/ModalSave';

const HeartButton = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const onClick = () => {
    setIsChecked(prev => !prev);
  };

  useEffect(() => {
    if (isChecked) {
      setOpenModal(true);
    }
  }, [isChecked]);

  return (
    <div>
      <S.Button onClick={onClick}>
        {isChecked ? (
          <S.Orange>
            <HeartFilled />
          </S.Orange>
        ) : (
          <HeartOutlined />
        )}
      </S.Button>
      {openModal ? <ModalSave openModal={openModal} setOpenModal={setOpenModal} /> : null}
    </div>
  );
};

export default HeartButton;
