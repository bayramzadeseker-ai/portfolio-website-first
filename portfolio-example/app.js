
// scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });}


// modal open
function openModal(title, desc) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalDesc").textContent = desc;
}

// modal close
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// click outside close
window.onclick = function(e) {
  if (e.target.id === "modal") {
    closeModal();
  }
}

