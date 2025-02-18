import * as S from './AccountEditPage.style';
import Title from '../../components/common/Title';
import { FaCommentAlt } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export function AccountEditPage() {
  return (
    <div>
      <Title>내 계정</Title>
      <S.TabContainer>
        <Link to="/account" style={{ textDecoration: 'none', color: 'inherit' }}>
          <S.TabUnselected>
            <S.Icon>
              <FaCommentAlt />
            </S.Icon>
            기록 모아 보기
          </S.TabUnselected>
        </Link>
        <S.TabSelected>
          <S.Icon>
            <IoPersonSharp />
          </S.Icon>
          회원정보 수정
        </S.TabSelected>
      </S.TabContainer>
    </div>
  );
}
