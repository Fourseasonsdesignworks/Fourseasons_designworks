console.log("JS動いてる");

// 下からふわっと画像が出てくる
const targets = document.querySelectorAll(".fadeUp");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.1,
  },
);

targets.forEach((el) => observer.observe(el));

// ハンバーガーメニュー
$(".openbtn").click(function () {
  $(this).toggleClass("active");
});

const slides = document.querySelector(".slides");
const items = document.querySelectorAll(".slides li");
const dotsContainer = document.querySelector(".dots");

let index = 0;

// ドット生成
items.forEach((_, i) => {
  const dot = document.createElement("button");

  if (i === 0) dot.classList.add("active");

  dot.addEventListener("click", () => {
    index = i;
    updateSlide();
  });

  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dots button");

// スライド更新
function updateSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;

  // ドット更新
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

prevBtn.addEventListener("click", () => {
  index = (index - 1 + items.length) % items.length;
  updateSlide();
});
