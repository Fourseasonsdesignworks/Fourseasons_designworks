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
