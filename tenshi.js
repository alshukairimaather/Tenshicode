// ================= Navbar Hamburger Menu =================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("open");
});

document.querySelectorAll(".nav-link").forEach(link =>
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("open");
  })
);

// ================= Typing Animation =================
const typingText = document.getElementById("typing-text");
const phrases = [
  "منصة البرمجة السحابية ",
  "أنشئ مشاريعك بسرعة ",
  "تعلم، جرّب، وابدع مع Tenshicode "
];
let phraseIndex = 0;
let letterIndex = 0;
let currentPhrase = "";
let isDeleting = false;

function type() {
  if (phraseIndex >= phrases.length) phraseIndex = 0;
  currentPhrase = phrases[phraseIndex];
  typingText.textContent = currentPhrase.substring(0, letterIndex);

  if (!isDeleting && letterIndex < currentPhrase.length) {
    letterIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && letterIndex > 0) {
    letterIndex--;
    setTimeout(type, 50);
  } else if (!isDeleting && letterIndex === currentPhrase.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    phraseIndex++;
    setTimeout(type, 200);
  }
}

setTimeout(type, 500);

// ================= Scroll Animations =================
const elements = document.querySelectorAll(".animate-on-scroll");

function scrollAnimation() {
  const triggerBottom = window.innerHeight * 0.85;
  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) el.classList.add("visible");
  });
}

window.addEventListener("scroll", scrollAnimation);
scrollAnimation();

// ================= Random Orbit Rotation =================
const orbitIcons = document.querySelectorAll(".random-orbit");
orbitIcons.forEach(icon => {
  const delay = Math.random() * 5;
  const size = 100 + Math.random() * 50;
  icon.style.animationDelay = `${delay}s`;
  icon.style.transformOrigin = `${size}px center`;
});

// ================= Glow Button Ripple Effect =================
document.querySelectorAll(".glow-genz-button").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.setProperty("--x", `${x}px`);
    btn.style.setProperty("--y", `${y}px`);
  });
});

// Optional: smooth fade on page load
window.addEventListener("load", () => {
  document.body.style.opacity = 1;
  document.body.style.transition = "opacity 1s ease";
});

// بيانات الخدمات المستخدمة في التعديل
const serviceData = {
    hosting: {
        title: 'الاستضافة السحابية',
        description: 'نشر تلقائي، نطاقات مخصصة، CDN عالمي، شهادات SSL مجانية.',
        features: [
            'بيئة بناء تلقائية',
            'Logs مباشرة',
            'مقاييس الأداء',
            'نشر تلقائي عبر Git'
        ]
    },
    apis: {
        title: 'تطوير واجهات (APIs)',
        description: 'REST & GraphQL مع توثيق مباشر ومفاتيح API آمنة.',
        features: [
            'معدل طلبات (Rate Limit)',
            'مفاتيح وإدارة أذونات',
            'Sandbox للاختبار',
            'تكامل سلس مع قواعد البيانات'
        ]
    },
    database: {
        title: 'قواعد بيانات مُدارة',
        description: 'PostgreSQL / MySQL / Mongo مع نسخ احتياطي تلقائي وتوسّع فوري.',
        features: [
            'Snapshots يومية',
            'شبكة خاصة (Private Network)',
            'مراقبة الصحة والأداء',
            'توسيع أفقي وعمودي فوري'
        ]
    }
};

// عناصر DOM
const serviceOptions = document.querySelectorAll('.service-option');
const step1 = document.getElementById('service-step-1');
const step2 = document.getElementById('service-step-2');
const backBtn = document.getElementById('back-to-step-1');
const detailTitle = document.getElementById('service-detail-title');
const detailList = document.getElementById('service-detail-list');

// وظيفة لعرض الخطوة 2 (التفاصيل)
function showServiceDetails(serviceKey) {
    const data = serviceData[serviceKey];
    
    // تحديث المحتوى
    detailTitle.textContent = `تفاصيل الخدمة: ${data.title}`;
    detailList.innerHTML = ''; // تفريغ القائمة السابقة
    
    // ملء القائمة بالفوائد/الخصائص
    data.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        detailList.appendChild(li);
    });
    
    // التبديل بين الخطوات
    step1.style.display = 'none';
    step2.style.display = 'block';
}

// إضافة مُستمعي الأحداث لخيارات الخدمات
serviceOptions.forEach(option => {
    option.addEventListener('click', () => {
        const serviceKey = option.getAttribute('data-service');
        showServiceDetails(serviceKey);
    });
});

// إضافة مُستمع حدث لزر العودة
backBtn.addEventListener('click', () => {
    step2.style.display = 'none';
    step1.style.display = 'block';
});
