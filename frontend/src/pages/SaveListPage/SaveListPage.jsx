import Header from "../../components/Header/Header";
import SaveFolder from "../../components/saveFolder/SaveFolder";
import * as S from "./SaveListPage.style";

/*가상 데이터*/
const folders = [
  {
    id: 1,
    folderName: "혼밥 맛집",
  },
  {
    id: 2,
    imageUrl: [
      "https://blog.kakaocdn.net/dn/dizeYM/btrN5vZONwk/0ShfJor6t6KANhKzI3Qr1k/img.jpg",
    ],
    folderName: "북카페/ 작업하기 좋은 카페",
  },
  {
    id: 3,
    imageUrl: [],
    folderName: "2025년 1월 전시회",
  },
  {
    id: 4,
    imageUrl: [],
    folderName: "망원동 소품샵",
  },
  {
    id: 5,
    imageUrl: [],
    folderName: null,
  },
  {
    id: 6,
    imageUrl: [],
    folderName: null,
  },
  {
    id: 7,
    imageUrl: [],
    folderName: null,
  },
  {
    id: 8,
    imageUrl: [],
    folderName: null,
  },
  {
    id: 9,
    imageUrl: [],
    folderName: null,
  },
  {
    id: 10,
    imageUrl: [],
    folderName: null,
  },
];

function SaveListPage() {
  return (
    <div>
      <Header />
      <S.SaveTitle>저장 목록</S.SaveTitle>
      <S.SaveFolders>
        <S.SaveFolderContainer>
          {/* TODO: 디스트럭처링 필요 */}
          {Array.from({ length: 4 }, (_, index) => (
            <S.PlaceImage key={index} src={imageUrls[index] || imageIcon} />
          ))}
        </S.SaveFolderContainer>
      </S.SaveFolders>
    </div>
  );
}

export default SaveListPage;
