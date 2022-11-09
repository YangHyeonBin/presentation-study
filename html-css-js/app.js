// HTML 요소 선택
// const $listTitle1 = document.querySelector('.title-1');
// const $listTitle2 = document.querySelector('.title-2');
// const $listTitle3 = document.querySelector('.title-3');

// const $listItems1 = document.querySelector('#list-items-1');
// const $listItems2 = document.querySelector('#list-items-2');
// const $listItems3 = document.querySelector('#list-items-3');

// 함수 정의 (함수 = 코드 모음)
// const toggleListItems1 = () => {
//   $listItems1.classList.toggle('show');
// };

// const toggleListItems2 = () => {
//   $listItems2.classList.toggle('show');
// };

// const toggleListItems3 = () => {
//   $listItems3.classList.toggle('show');
// };

// 상호작용 코드
// $listTitle1.addEventListener('click', toggleListItems1);

// $listTitle2.addEventListener('click', toggleListItems2);

// $listTitle3.addEventListener('click', toggleListItems3);

// 배열과 forEach 메서드 이용
const $listTitles = document.querySelectorAll('.list-title');
const $listItems = document.querySelectorAll('.list-items');

const toggleListItems = (index) => {
  $listItems[index].classList.toggle('show');
};

$listTitles.forEach((title, index) => {
  title.addEventListener('click', () => toggleListItems(index));
});
