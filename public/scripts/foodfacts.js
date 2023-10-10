const showBtn = document.getElementById('view-food');

showBtn.addEventListener('click', function() {
const foodHidden = document.getElementsByClassName('hide');
foodHidden.removeAttribute('hide');
foodHidden.style = "display: block";
});