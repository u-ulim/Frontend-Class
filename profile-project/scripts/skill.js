/* SKILLS */
let skillIndex = 0;
let SkillJsonData = []; // JSON DATA_SLIDE

const skillDescriptHeading = document.querySelector(
  ".skill__footer__descript__heading"
);
const skillDescriptContent = document.querySelector(
  ".skill__footer__descript__contents"
);

const skillFooterImg = document.querySelector(".skill__footer__img");

// SKILL DATA 받아오기
fetch("./scripts/data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    SkillJsonData = jsonData.skill;
    skillFooterImg.style.backgroundImage = `url(./assets/skill/${SkillJsonData[0].img})`;
    skillDescriptHeading.innerText = SkillJsonData[0].title;
    SkillJsonData[0].textDesc.forEach((desc) => {
      const li = document.createElement("li");
      li.textContent = desc;
      skillDescriptContent.appendChild(li);
    });
  });

// SKILL ICONS
const skillIcons = document.querySelectorAll(".skill__icons > li");
skillIcons[0].classList.add("active");

// ICON 클릭 시, 안의 값 변경
const updateSkill = (skillIndex) => {
  skillIcons.forEach((item) => {
    item.classList.remove("active");
  });
  skillIcons[skillIndex].classList.add("active");
  skillDescriptHeading.innerText = SkillJsonData[skillIndex].title;
  skillDescriptContent.innerText = SkillJsonData[skillIndex].textDesc;
  skillFooterImg.style.backgroundImage = `url(./assets/skill/${SkillJsonData[skillIndex].img})`;

  // 각 SKILL에 맞는 타이틀 색상변경
  if (SkillJsonData[skillIndex].id === 1) {
    skillDescriptHeading.style.color = "#E44D26";
  } else if (SkillJsonData[skillIndex].id === 2) {
    skillDescriptHeading.style.color = "#264DE4";
  } else if (SkillJsonData[skillIndex].id === 3) {
    skillDescriptHeading.style.color = "#F5DE19";
  } else if (SkillJsonData[skillIndex].id === 4) {
    skillDescriptHeading.style.color = "#61DAFB";
  } else if (SkillJsonData[skillIndex].id === 5) {
    skillDescriptHeading.style.color = "#83CD29";
  } else if (SkillJsonData[skillIndex].id === 6) {
    skillDescriptHeading.style.color = "#FF0844";
  }
};

/* SKILL TYPING EFFECT */
let typingTimeouts = [];

const typeWriterEffect = (element, text, delay = 7, callback) => {
  let i = 0;

  const type = () => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      const timeout = setTimeout(type, delay);
      typingTimeouts.push(timeout);
    } else if (callback) {
      callback();
    }
  };
  type();
};

const typeWriterEffectForList = (texts, delay = 7) => {
  if (!texts.length) return;

  const text = texts[0];
  const remainingTexts = texts.slice(1);

  const li = document.createElement("li");
  skillDescriptContent.appendChild(li);

  typeWriterEffect(li, text, delay, () => {
    typeWriterEffectForList(remainingTexts, delay);
  });
};

skillIcons.forEach((icon, index) => {
  icon.addEventListener("click", () => {
    // 타이핑 효과 초기화
    typingTimeouts.forEach((timeout) => clearTimeout(timeout));
    typingTimeouts = [];

    skillIndex = index;
    updateSkill(skillIndex);
    skillDescriptHeading.innerText = SkillJsonData[skillIndex].title;
    skillDescriptContent.innerHTML = "";

    typeWriterEffectForList(SkillJsonData[skillIndex].textDesc);
  });
});

updateSkill(skillIndex);
skillDescriptHeading.innerText = SkillJsonData[skillIndex].title;
SkillJsonData[skillIndex].textDesc.forEach((desc) => {
  const li = document.createElement("li");
  skillDescriptContent.appendChild(li);
  typeWriterEffect(li, desc);
});

// 초기 설정
updateSkill(skillIndex);
skillDescriptHeading.innerText = SkillJsonData[skillIndex].title;
skillDescriptContent.innerHTML = "";

typeWriterEffectForList(SkillJsonData[skillIndex].textDesc);
