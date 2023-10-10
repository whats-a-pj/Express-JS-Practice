const showBtn = document.getElementById('view-animal');

showBtn.addEventListener('click', function() {
const animalHidden = document.getElementsByClassName('hide');
animalHidden.removeAttribute('hide');
animalHidden.style = "display: block";
});