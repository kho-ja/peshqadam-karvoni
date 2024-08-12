const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("nav .menu");
hamburger.onclick = () => {
  menu.classList.toggle("closed");
};

let light_icon = document.querySelector(".light_icon");
let dark_icon = document.querySelector(".dark_icon");

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  light_icon.style.display = "none";
  dark_icon.style.display = "block";
  document.documentElement.style.colorScheme = "dark";
  document.documentElement.dataset.theme = "dark";
} else {
  dark_icon.style.display = "none";
  light_icon.style.display = "block";
  document.documentElement.style.colorScheme = "light";
  document.documentElement.dataset.theme = "light";
}

light_icon.onclick = () => {
  document.documentElement.style.colorScheme = "dark";
  document.documentElement.dataset.theme = "dark";
  light_icon.style.display = "none";
  dark_icon.style.display = "block";
};

dark_icon.onclick = () => {
  document.documentElement.style.colorScheme = "light";
  document.documentElement.dataset.theme = "light";
  dark_icon.style.display = "none";
  light_icon.style.display = "block";
};

function showSection(sectionId, event) {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  const clickedTab = event.target;
  clickedTab.classList.add("active");

  const sections = document.querySelectorAll("#contents > section");
  sections.forEach((section) => {
    section.style.display = "none";
  });

  const selectedSection = document.getElementById(sectionId);
  selectedSection.style.display = "";
}

showSection("azolar", { target: document.querySelector(".tab") });

function scrollToContent() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
}

function animatedNumbers(duration) {
  const numberElements = document.querySelectorAll("#animatednumber");
  numberElements.forEach((numberElement) => {
    const targetNumber = parseInt(numberElement.textContent);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const startNumber = 0;
          const increment = Math.ceil(targetNumber / (duration / 10));

          let currentNumber = startNumber;

          const interval = setInterval(() => {
            currentNumber += increment;
            if (currentNumber >= targetNumber) {
              clearInterval(interval);
              currentNumber = targetNumber;
            }
            numberElement.textContent = currentNumber;
          }, duration / targetNumber);
        }
      });
    });

    observer.observe(numberElement);
  });
}

animatedNumbers(1000);
