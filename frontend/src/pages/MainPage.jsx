import Header from "../components/Header";
import SearchOutlined from "../components/SearchBar";
import PlaceCard from "../components/PlaceCard";
import Category from "../components/Category";
import "../styles/MainPage.css";

// 임시 데이터
const recommendations = [
  {
    title: "이번 주 가장 많이 뜨고 있는 Top 3",
    places: [
      {
        id: 1,
        imageUrl:
          "https://blog.kakaocdn.net/dn/dizeYM/btrN5vZONwk/0ShfJor6t6KANhKzI3Qr1k/img.jpg",
        placeName: "텅",
        location: "서울 종로구 북촌로 701호",
      },
      {
        id: 2,
        placeName: "프로토콜 연희점",
        location: "서울 서대문구 연희로 10길 2층",
      },
      { id: 3, placeName: "장소", location: "위치" },
    ],
  },
  {
    title: "이 달의 맛집 Best 3",
    places: [
      { id: 4, placeName: "장소", location: "위치" },
      { id: 5, placeName: "장소", location: "위치" },
      { id: 6, placeName: "장소", location: "위치" },
    ],
  },
  {
    title: "이런 장소는 어때요?",
    places: [
      { id: 7, placeName: "장소", location: "위치" },
      { id: 8, placeName: "장소", location: "위치" },
      { id: 9, placeName: "장소", location: "위치" },
    ],
  },
];

function MainPage() {
  const handleSave = () => {
    alert("장소가 저장되었습니다!");
  };

  return (
    <div className="MainPage">
      <Header></Header>
      <SearchOutlined></SearchOutlined>
      <Category></Category>
      <div className="recommendation-container">
        {recommendations.map((section, index) => (
          <div key={index} className="recommendation-section">
            {/* Title */}
            <h2 className="recommendation-title">{section.title}</h2>
            {/* PlaceCard 가로 정렬 */}
            <div className="place-card-container">
              {section.places.map((place) => (
                <PlaceCard
                key={place.id}
                imageUrl={place.imageUrl}
                placeName={place.placeName}
                location={place.location}
                onSave={handleSave}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
