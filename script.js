// ✅ Only keep active link highlight and menu toggle

// Highlight active link on click
document.querySelectorAll('.navbar ul li a').forEach(link => {
  link.addEventListener("click", function () {
    // remove old active
    document.querySelectorAll('.navbar ul li a').forEach(l => l.classList.remove("active"));
    // set new active
    this.classList.add("active");

    // close mobile menu after clicking
    document.querySelector(".navbar ul").classList.remove("show");
  });
});

// Toggle mobile menu
function toggleMenu() {
  document.querySelector(".navbar ul").classList.toggle("show");
}

// Get the button
const backToTop = document.getElementById("backToTop");

// Show/hide button on scroll
window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};

// Scroll to top on click
backToTop.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Popup elements
const popup = document.getElementById("contactPopup");
const popupBtn = document.getElementById("contactPopupBtn");
const closeBtn = document.querySelector(".popup .close");

// Open popup
popupBtn.onclick = function() {
  popup.style.display = "flex";
}

// Close popup
closeBtn.onclick = function() {
  popup.style.display = "none";
}

// Close when clicking outside
window.onclick = function(e) {
  if (e.target === popup) {
    popup.style.display = "none";
  }
}
