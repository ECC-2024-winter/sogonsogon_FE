import { useNavigate } from 'react-router-dom';
import { IoIosRestaurant } from 'react-icons/io';
import { LuCoffee } from 'react-icons/lu';
import { AiOutlinePicture } from 'react-icons/ai';
import { SlDrawer } from 'react-icons/sl';
import { BsPersonWorkspace } from 'react-icons/bs';
import * as S from './Category.style';

const categories = [
  { id: 1, name: '맛집', icon: <IoIosRestaurant />, hashtag: '#맛집' },
  { id: 2, name: '카페', icon: <LuCoffee />, hashtag: '#카페' },
  { id: 3, name: '전시회', icon: <AiOutlinePicture />, hashtag: '#전시회' },
  { id: 4, name: '소품샵', icon: <SlDrawer />, hashtag: '#소품샵' },
  {
    id: 5,
    name: '연극/공연',
    icon: <BsPersonWorkspace />,
    hashtag: '#연극/공연',
  },
];

const Category = () => {
  const navigate = useNavigate();

  const handleCategoryClick = hashtag => {
    // TODO: 왜 encodeURI 했는지 공부
    navigate(`/search?query=${encodeURIComponent(hashtag)}`);
  };

  return (
    <S.CategoryContainer>
      {/* TODO: 디스트럭쳐링 해보기 */}
      {categories.map(({ id, hashtag, icon, name }) => (
        <S.CategoryItem key={id} onClick={() => handleCategoryClick(hashtag)}>
          <S.CategoryIcon>{icon}</S.CategoryIcon>
          <S.CategoryName>{name}</S.CategoryName>
        </S.CategoryItem>
      ))}
    </S.CategoryContainer>
  );
};

export default Category;
