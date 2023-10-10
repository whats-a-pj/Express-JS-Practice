const showBtn = document.getElementById('view-eco');

showBtn.addEventListener('click', function() {
const ecoHidden = document.getElementsByClassName('hide');
ecoHidden.removeAttribute('hide');
ecoHidden.style = "display: block";
});