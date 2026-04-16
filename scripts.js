const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeBtn");

const likeBtn = document.getElementById("likeBtn");
const likeIcon = document.getElementById("likeIcon");

const commentPanel = document.getElementById("commentPanel");

const commentList = document.querySelector(".comment-list");
const captionBox = document.getElementById("modalCaption");

let liked = false;

function openModal(img) {
    modal.style.display = "flex";

    modalImg.src = img.src;

    const captionText = img.dataset.caption || "";
    const hashtags = img.dataset.hashtags || "";

    captionBox.innerHTML = `
        <p>${captionText}</p>
        <p class="hashtags">${hashtags}</p>
    `;

    const commentsRaw = img.dataset.comments || "";
    commentList.innerHTML = commentsRaw
        ? commentsRaw.split("|").map(c => `<p>${c}</p>`).join("")
        : "<p>No comments yet</p>";

    liked = false;
    likeIcon.classList.remove("fa-solid");
    likeIcon.classList.add("fa-regular");
    likeIcon.style.color = "white";

    if (commentPanel) {
        commentPanel.style.display = "flex";
    }
}

closeBtn.onclick = function () {
    modal.style.display = "none";
};

modal.onclick = function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};

likeBtn.addEventListener("click", () => {
    liked = !liked;

    if (liked) {
        likeIcon.classList.add("fa-solid");
        likeIcon.classList.remove("fa-regular");
        likeIcon.style.color = "red";
    } else {
        likeIcon.classList.remove("fa-solid");
        likeIcon.classList.add("fa-regular");
        likeIcon.style.color = "white";
    }
});