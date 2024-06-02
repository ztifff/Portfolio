function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}
function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}

const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

var sectionIndex = 0;

leftArrow.addEventListener("click", function () {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 2;
    slider.style.transform = 'translate(' + (sectionIndex) * -33.33 + '%)';
});
rightArrow.addEventListener('click', function () {
    sectionIndex = (sectionIndex < 2) ? sectionIndex + 1 : 0;
    slider.style.transform = 'translate(' + (sectionIndex) * -33.33 + '%)';
});