export const titles = [
  {
    title: 'HTML, CSS, JavaScript 실제 활용 방식',
    color: '#d7bee2',
    contents: [
      'HTML: 요소의 역할에 맞는 태그로 컨텐츠를 감싸 문서 작성',
      'CSS: HTML 문서 속 요소를 선택해 {} 안에 스타일 속성 작성',
      'JavaScript: 사용자와 상호작용할 수 있는 코드 작성',
    ],
  },
  {
    title: '리액트가 왜 필요한가?',
    color: '#a9c7d8',
    contents: [
      'UI: 비슷하게 생긴 요소 반복됨 → 계속 복붙 → 시간도 걸리고, 코드가 길어져 가독성 떨어짐 → 유지보수 어려울 듯',
      `UX(MPA, SPA):
매우 발달한 웹 서비스 → 한 페이지만 있는 서비스 X, 여러 페이지 존재 → 사용자가 여러 페이지 이동하며 서비스 이용
HTML, CSS, JavaScript만 사용 시: 새 페이지 이동할 때마다 새로운 HTML, CSS, JavaScript 파일 불러옴 → 문서와 데이터 불러오는 데 시간 걸림 → 나쁜 사용자 경험
→ 화면이 빠르게 전환되길 원함`,
    ],
  },
  {
    title: '리액트',
    color: '#c0df9f',
    contents: [
      '(구)페이스북 (현)메타가 만든 JavaScript 라이브러리',
      '반복되는 UI를 쉽게 만들어내기 위해 컴포넌트 개념 사용',
      '페이스북 등 SNS처럼 상호작용이 많은 UI를 만들 때 편리 (변해야 하는 부분만 다시 렌더링 → 빠름 → 좋은 사용자 경험)',
      'JavaScript를 사용하고, HTML 대신 JSX라는 방식으로 문서를 작성 → 하나의 파일에서 HTML과 JavaScript 코드 동시에 확인 가능 → 코드 파악 용이',
    ],
  },
];
