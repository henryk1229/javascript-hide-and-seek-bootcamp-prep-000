function getFirstSelector(selector) { 
  return document.querySelector(selector);
}
function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}
function increaseRankBy(n) {
  var lis = document.getElementById('app').querySelector('ranked-list') 
}