export default function Footer() {
  return (
    <footer className="bg-gray-50 py-2">
      <div className="max-w-screen-xl w-full mx-auto p-4 md:flex md:items-center md:justify-between border-b-gray-200 border-bottom">
        {' '}
        © 2024 <span className="hover:underline">Mucco Inc.,</span> All rights
        reserved.
      </div>
      <div className="text-[10px] text-gray-400 mx-auto p-4 max-w-screen-xl">
        회사명: Mucco Inc. 설립 연도: 2024년 위치: 서울특별시 강남구 테헤란로
        123, 5층 사업자 등록 번호: 123-45-67890 법적 정보: Mucco Inc.는 대한민국
        법률에 따라 등록된 법인입니다. © 2024 Mucco Inc., All rights reserved.
        고객 지원 전화번호: 080-123-4567 이메일:
        [support@mucco.com](mailto:support@mucco.com)
      </div>
    </footer>
  )
}
