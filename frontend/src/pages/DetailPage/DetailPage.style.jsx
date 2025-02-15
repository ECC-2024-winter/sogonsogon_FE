import styled from 'styled-components';

// 전체 컨테이너
export const PlaceContainer = styled.div`
  width: 1300px;
  height: 530px;
  margin: 20px auto;
  background-color: #fff;
  border: 1px solid #d9d9d9;
`;

// 이미지 컨테이너
export const PlaceImg = styled.div`
  width: 1300px;
  height: 250px;
  background-color: #f0f0f0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlaceImage = styled.img`
  width: 1300px;
  height: 250px;
  object-fit: cover;
`;

export const NoImg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  font-size: 14px;
  color: #888;
  font-weight: bold;
`;

// 장소 정보
export const TextFrame = styled.div`
  display: flex;
  justify-content: space-between;
  align- items: center;
  margin: 20px 40px 10px 40px;
`;

export const PlaceName = styled.div`
  width: 1220px;
  text-align: center;
  font-family: Inter;
  font-size: 25px;
  font-weight: regular;
  color: #000000;
`;

export const HeartbuttonContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Rating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1220px;
  margin: 0px 40px 30px 40px;
  text-align: center;
  font-family: Inter;
  font-size: 13px;
  font-weight: 400;
`;

//별 아이콘
export const Star = styled.div`
  color: #ffbf87;
`;

// 장소 상세 정보
export const PlaceInfo = styled.p`
  font-size: 14px;
  color: #000000;
  font-weight: 500;
  font-family: Inter;
  margin-top: 5px;
  margin-left: 204px;
`;

// 메모 입력 영역
export const MemoContainer = styled.div`
  justify-content: center;
  width: 1300px;
  height: auto;
  margin: 20px auto;
  border: 1px solid #d9d9d9;
`;

//연필 아이콘 색상
export const Pencil = styled.div`
  color: #ffbf87;
  font-size: 22px;
  margin-right: 5px;
`;

//"쉬었다 간 흔적을 남겨주세요"
export const Text = styled.div`
  font-family: Inter;
  font-weight: 400;
  font-size: 14px;
  color: #b3b3b3;
  line-height: 21px;
  letter-spacing: 0%;
  margin-left: 18px;
`;

//"기록하기"
export const MemoTitle = styled.div`
  display: flex;
  align-items: center;
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  margin-top: 50px;
  margin-left: 50px;
`;

//입력창+등록버튼
export const Memo = styled.div`
  display: flex;
  align-items: center;
`;

//입력창
export const InputField = styled.textarea`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Pretendard';
  font-weight: 500px;
  font-size: 15px;
  width: 1100px;
  height: 70px;
  text-align: left;
  margin: 10px 0px 10px 50px;
  padding: 20px;
  border: 1px solid #ffbf87;
  border-radius: 15px;

  resize: none;
  overflow: hidden;
`;

//등록버튼
export const AddButton = styled.button`
  color: #000000;
  background-color: #ffe5cf;
  border-radius: 1rem;
  border: #ffe5cf;
  margin-left: 20px;
  width: 50px;
  height: 30px;

  &:hover {
    background: var(--button-hover-bg-color, #ffbf87);
  }
`;

//저장부분
export const Saved = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export const SavedMemo = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Pretendard';
  font-weight: 500px;
  font-size: 15px;
  width: 940px;
  height: auto;
  text-align: left;
  margin: 0px 0px 10px 50px;
  padding: 10px 20px 10px 20px;
  border: 1px solid #ffbf87;
  border-radius: 15px;

  overflow-y: auto;
  word-wrap: 'break-word';
`;

export const SavedRating = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #ffbf87;
  margin-left: 20px;
  margin-right: 15px;
`;

export const SavedDate = styled.div`
  font-size: 15px;
  margin-top: 5px;
`;

export const EditButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
  margin-left: 10px;

  &:hover {
    color: #ffbf87;
  }
`;
