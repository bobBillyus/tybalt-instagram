const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeBtn");

function openModal(src) {
    modal.style.display = "flex";
    modalImg.src = src;
}

closeBtn.onclick = function () {
    modal.style.display = "none";
};

modal.onclick = function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};
