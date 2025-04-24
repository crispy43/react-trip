import Footer from "./components/footer";
import Header from "./components/header"
import HeroSection from "./components/hero-section"
import Notice from "./components/notice"
import Recommendations from "./components/recommendations"

const places = [
  {
    name: "제주도",
    description: "제주도는 한국에서 가장 인기 있는 여행지 중 하나입니다. 아름다운 해변과 독특한 자연 경관이 매력적입니다.",
    price: "₩500,000 ~"
  },
  {
    name: "부산",
    description: "부산은 한국의 제2의 도시로, 해운대와 광안리 해변이 유명합니다. 맛있는 해산물도 즐길 수 있습니다.",
    price: "₩300,000 ~"
  },
  {
    name: "도쿄",
    description: "도쿄는 일본의 수도로, 현대적인 도시와 전통적인 문화가 조화를 이루고 있습니다. 쇼핑과 음식이 매력적입니다.",
    price: "₩700,000 ~"
  }
];

const notices = [
  "여행을 떠나요 앱이 새롭게 업데이트 되었습니다.",
  "여름 성수기 예약은 서두르세요!",
  "고객센터 운영시간: 평일 9시 ~ 18시"
];

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Recommendations
          places={places}
        />
        <Notice
          notices={notices}
        />
        <Footer />
      </main>
    </>
  )
}

export default App
