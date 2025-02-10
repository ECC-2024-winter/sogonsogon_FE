import { IoMdAdd } from 'react-icons/io';

function CreateFolder({ folderName, onChange, onCreate }) {
  return (
    <div>
      <input name="folderName" placeholder="카테고리 추가" value={folderName} onChange={onChange} />
      <button onClick={() => onCreate(crypto.randomUUID())}>
        <IoMdAdd />
      </button>
    </div>
  );
}

export default CreateFolder;
