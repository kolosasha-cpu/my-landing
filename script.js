// ===== 1. ФОРМА — показываем сообщение при отправке =====

const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

const SERVER_URL = 'https://landing-backend-q4cf.onrender.com/submit';
form.addEventListener('submit', async function(e) {
    e.preventDefault(); // Отменяем стандартную отправку

    // Собираем данные из полей формы
    const formData = {
        name:    form.querySelector('input[type="text"]').value,
        phone:   form.querySelector('input[type="tel"]').value,
        email:   form.querySelector('input[type="email"]').value,
        message: form.querySelector('textarea').value
    };

    try {
        // Отправляем данные на Flask сервер
        const response = await fetch(SERVER_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData) // Конвертируем в JSON
        });

        if (response.ok) {
            // Успех — показываем сообщение и очищаем форму
            successMessage.style.display = 'block';
            form.reset();

            setTimeout(function() {
                successMessage.style.display = 'none';
            }, 4000);
        }

    } catch (error) {
        console.error('Ошибка отправки:', error);
    }
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
