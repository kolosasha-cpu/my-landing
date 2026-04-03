// ===== 1. ФОРМА — показываем сообщение при отправке =====

const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Отменяем стандартную отправку страницы

    // Показываем сообщение об успехе
    successMessage.style.display = 'block';

    // Очищаем все поля формы
    form.reset();

    // Скрываем сообщение через 4 секунды
    setTimeout(function() {
        successMessage.style.display = 'none';
    }, 4000);
});


// ===== 2. КНОПКА "НАВЕРХ" =====

const scrollTopBtn = document.getElementById('scrollTop');

// Следим за прокруткой страницы
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        // Если прокрутили больше 300px — показываем кнопку
        scrollTopBtn.style.display = 'block';
    } else {
        // Если вверху страницы — скрываем
        scrollTopBtn.style.display = 'none';
    }
});

// При клике — плавно прокручиваем наверх
scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// ===== 3. АНИМАЦИЯ ПОЯВЛЕНИЯ ПРИ ПРОКРУТКЕ =====

// Находим все элементы с классом fade-in
const fadeElements = document.querySelectorAll('.fade-in');

// Создаём наблюдатель — он следит когда элемент появляется в экране
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            // Элемент виден — добавляем класс visible
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

// Подключаем наблюдатель к каждому элементу
fadeElements.forEach(function(el) {
    observer.observe(el);
});