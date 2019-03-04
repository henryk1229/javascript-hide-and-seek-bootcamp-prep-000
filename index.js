function getFirstSelector(selector) { 
  return document.querySelector(selector);
}
function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}
function increaseRankBy(n) {
  var lists = document.getElementById('app').querySelectorAll('ul.ranked-list li') 
  for (let i = 0; i < lists.length; i++) {
    lists[i].innerHTML = parseInt(lists[i].innerHTML) + n;
  }
}
function deepestChild() {
  var lists = document.getElement
}