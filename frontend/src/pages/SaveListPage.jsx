import Header from "../components/Header";
import SaveFolder from "../components/SaveFolder";
import "../styles/SaveListPage.css";

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
    folderName: "망원동 소품샵",
  },
  {
    id: 5,
    imageUrl: [],
    folderName: null,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
  {
    id: 10,
  },
];

function SaveListPage() {
  return (
    <div className="save-list-page">
      <Header />
      <div className="save-title">저장 목록</div>
      <div className="save-folders">
        <div className="save-folder-container">
          {/* TODO: 디스트럭처링 필요 */}
          {folders.map((folder) => (
            <SaveFolder
              key={folder.id}
              imageUrl1={folder.imageUrl1}
              imageUrl2={folder.imageUrl2}
              imageUrl3={folder.imageUrl3}
              imageUrl4={folder.imageUrl4}
              folderName={folder.folderName}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SaveListPage;
