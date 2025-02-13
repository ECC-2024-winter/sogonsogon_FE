import { useState, useEffect, useRef } from 'react';
import ButtonModal from '../../common/Button/ButtonModal';
import ButtonBasic from '../../common/Button/ButtonBasic';
import { IoMdClose, IoMdAdd } from 'react-icons/io';
import * as S from './ModalSave.style';

// 가상 데이터
const Categories = [
  { id: 1, name: '혼밥 맛집', checked: false },
  { id: 2, name: '북카페/ 작업하기 좋은 카페', checked: false },
  { id: 3, name: '2025년 1월 전시회', checked: false },
  { id: 4, name: '망원동 소품샵', checked: false },
  { id: 5, name: '디저트 맛집', checked: false },
];

export const ModalSave = ({ openModal, setOpenModal }) => {
  const [categories, setCategories] = useState(Categories);
  const [newCategory, setNewCategory] = useState('');
  const [addingCategory, setAddingCategory] = useState(false); // 입력창 표시

  const inputRef = useRef(null);
  useEffect(() => {
    if (addingCategory) {
      inputRef.current?.focus();
    }
  }, [addingCategory]);

  const handleCheck = id => {
    setCategories(prev =>
      prev.map(category => (category.id === id ? { ...category, checked: !category.checked } : category)),
    );
  };

  const handleAddCategory = e => {
    if (e.key === 'Enter' && newCategory.trim()) {
      const newCategoryObj = {
        id: categories.length + 1,
        name: newCategory,
        checked: true,
      };
      setCategories(prev => [...prev, newCategoryObj]);
      setNewCategory(''); // 입력창 초기화
      setAddingCategory(false);
    }
  };

  return (
    <S.Overlay>
      <S.SaveContainer>
        {/* 닫기 버튼 */}
        <S.CloseButton>
          <ButtonBasic
            type="button"
            onClick={() => {
              setOpenModal(false);
            }}>
            <IoMdClose />
          </ButtonBasic>
          {!openModal ? setOpenModal(true) : null}
        </S.CloseButton>

        <S.Title>카테고리에 저장하기</S.Title>
        {/* 체크리스트 */}
        <S.CheckList>
          {categories.map(({ id, name, checked }) => (
            <div key={id}>
              <S.HiddenCheckbox
                type="checkbox"
                id={`category-${id}`}
                checked={checked}
                onChange={() => handleCheck(id)}
              />
              <S.CheckBox htmlFor={`category-${id}`} $checked={checked}>
                {name}
              </S.CheckBox>
            </div>
          ))}

          {/* Add 버튼 */}
          {!addingCategory ? (
            <S.AddCategoryButton
              onClick={() => {
                setAddingCategory(true);
              }}>
              <IoMdAdd />
            </S.AddCategoryButton>
          ) : (
            <S.NewCategoryInputContainer>
              <IoMdAdd />
              <input
                type="text"
                value={newCategory}
                onChange={e => setNewCategory(e.target.value)}
                onKeyDown={handleAddCategory}
                placeholder="입력 후 Enter"
              />
            </S.NewCategoryInputContainer>
          )}
        </S.CheckList>

        {/* 저장 버튼 */}
        <S.SaveButton>
          <ButtonModal
            type="button"
            onClick={() => {
              setOpenModal(false);
            }}>
            저장하기
          </ButtonModal>
          {!openModal ? setOpenModal(true) : null}
        </S.SaveButton>
      </S.SaveContainer>
    </S.Overlay>
  );
};
