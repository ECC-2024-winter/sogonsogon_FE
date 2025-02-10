import { IoMdAdd } from 'react-icons/io';
import ButtonBasic from '../../common/Button/ButtonBasic';
import * as S from './Edit.style';

function CreateFolder({ folderName, onChange, onCreate }) {
  return (
    <S.CreateFolder>
      <S.InputField type="text" name="folderName" placeholder="카테고리 추가" value={folderName} onChange={onChange} />
      <ButtonBasic onClick={() => onCreate(crypto.randomUUID())}>
        <IoMdAdd />
      </ButtonBasic>
    </S.CreateFolder>
  );
}

export default CreateFolder;
