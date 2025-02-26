import * as S from './AccountEditPage.style';
import Title from '../../components/common/Title';
import { FaCommentAlt } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ModalPW } from '../../components/Modal/ModalPW/ModalPW';

export function AccountEditPage() {
  const [openModalPW, setOpenModalPW] = useState(false);

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
      <S.AccountContainer>
        <S.AccountBox>
          <S.Text>닉네임</S.Text>
          <S.Nickname>
            {/*TODO:실제 닉네임 데이터 삽입*/}
            <S.MockupInput>홍길동</S.MockupInput>
          </S.Nickname>
          <S.Text>이메일 주소</S.Text>
          <S.Email>
            {/*TODO:실제 이메일 데이터 삽입*/}
            <S.MockupInput>gildong@gmail.com</S.MockupInput>
          </S.Email>
          <S.Password>
            <S.Text>비밀번호</S.Text>
            <S.ButtonPW
              type="button"
              onClick={() => {
                setOpenModalPW(true);
              }}>
              수정
            </S.ButtonPW>
            {openModalPW && <ModalPW openModal={openModalPW} setOpenModal={setOpenModalPW} />}
          </S.Password>
          <S.ButtonINFO>회원 정보 수정</S.ButtonINFO>
        </S.AccountBox>
      </S.AccountContainer>
    </div>
  );
}
