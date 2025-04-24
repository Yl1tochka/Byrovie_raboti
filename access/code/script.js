// Находим ссылку с номером телефона и элемент для сообщения
const phoneLinkElement = document.getElementById("phoneLink");
const copyMessageElement = document.getElementById("copyMessage");

// Добавляем обработчик события на клик
phoneLinkElement.addEventListener("click", function (event) {
  // Отменяем стандартное поведение ссылки (вызов номера)
  event.preventDefault();

  // Получаем текст номера телефона
  const phoneNumber = phoneLinkElement.textContent;

  // Копируем номер в буфер обмена
  navigator.clipboard
    .writeText(phoneNumber)
    .then(() => {
      // Показываем сообщение
      copyMessageElement.style.display = "block";

      // Скрываем сообщение через 2 секунды
      setTimeout(() => {
        copyMessageElement.style.display = "none";
      }, 2000);
    })
    .catch((err) => {
      console.error("Не удалось скопировать номер: ", err);
    });
});

// Бургер меню---------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger-menu");
  const navMenu = document.querySelector(".nav-menu");
  const body = document.body;

  burger.addEventListener("click", function () {
    this.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("no-scroll");
  });

  // Закрытие меню при клике на ссылку
  const navLinks = document.querySelectorAll(".nav-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      burger.classList.remove("active");
      navMenu.classList.remove("active");
      body.classList.remove("no-scroll");
    });
  });
});

//-----------------Кнопка_слайдер-----------------//
// Находим кнопку
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Показываем кнопку, когда пользователь прокрутил страницу вниз
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 300) {
    // Если прокрутка больше 300px
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Плавный скролл наверх при нажатии на кнопку
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Плавная прокрутка
  });
});

// Карты 3 секции-----------------------

// Находим кнопку 1
if (document.getElementById("card_btn")) {
  const button = document.getElementById("card_btn");

  // Обработчик события для нажатия на кнопку 1
  button.addEventListener("click", function (event) {
    event.stopPropagation(); // Останавливаем всплытие события

    // Переключаем класс "changed"
    if (button.classList.contains("changed")) {
      button.classList.remove("changed"); // Если класс есть, удаляем его
    } else {
      button.classList.add("changed"); // Если класса нет, добавляем его
    }
  });

  // Обработчик события для нажатия на любое место сайта
  document.addEventListener("click", function () {
    button.classList.remove("changed"); // Убираем класс для возврата к исходному стилю
  });
}

// Находим кнопку 2
if (document.getElementById("card2_btn")) {
const button2 = document.getElementById("card2_btn");

// Обработчик события для нажатия на кнопку 1
button2.addEventListener("click", function (event) {
  event.stopPropagation(); // Останавливаем всплытие события

  // Переключаем класс "changed2"
  if (button2.classList.contains("changed2")) {
    button2.classList.remove("changed2"); // Если класс есть, удаляем его
  } else {
    button2.classList.add("changed2"); // Если класса нет, добавляем его
  }
});

// Обработчик события для нажатия на любое место сайта
document.addEventListener("click", function () {
  button2.classList.remove("changed2"); // Убираем класс для возврата к исходному стилю
});
}

// Находим кнопку 3
if (document.getElementById("card3_btn")) {
const button3 = document.getElementById("card3_btn");

// Обработчик события для нажатия на кнопку 1
button3.addEventListener("click", function (event) {
  event.stopPropagation(); // Останавливаем всплытие события

  // Переключаем класс "changed3"
  if (button3.classList.contains("changed3")) {
    button3.classList.remove("changed3"); // Если класс есть, удаляем его
  } else {
    button3.classList.add("changed3"); // Если класса нет, добавляем его
  }
});

// Обработчик события для нажатия на любое место сайта
document.addEventListener("click", function () {
  button3.classList.remove("changed3"); // Убираем класс для возврата к исходному стилю
});
}

// Находим кнопку 4
if (document.getElementById("card_btn")) {
const button4 = document.getElementById("card4_btn");

// Обработчик события для нажатия на кнопку 1
button4.addEventListener("click", function (event) {
  event.stopPropagation(); // Останавливаем всплытие события

  // Переключаем класс "changed3"
  if (button4.classList.contains("changed4")) {
    button4.classList.remove("changed4"); // Если класс есть, удаляем его
  } else {
    button4.classList.add("changed4"); // Если класса нет, добавляем его
  }
});

// Обработчик события для нажатия на любое место сайта
document.addEventListener("click", function () {
  button4.classList.remove("changed4"); // Убираем класс для возврата к исходному стилю
});
}


// Привязываем шапку к верху сайта
document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("shared-header");
  const headerHeight = header.offsetHeight;

  // Создаем стиль для фиксированной шапки
  const fixedHeaderStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    backgroundColor: "#262626", // Замените на ваш цвет фона
    zIndex: "1000",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  };

  // Создаем элемент-плейсхолдер, чтобы контент не прыгал
  const placeholder = document.createElement("div");
  placeholder.style.height = headerHeight + "px";

  // Функция для обработки скролла
  function handleScroll() {
    if (window.pageYOffset > 50) {
      // Начинаем фиксировать после 50px скролла
      Object.assign(header.style, fixedHeaderStyle);
      header.parentNode.insertBefore(placeholder, header.nextSibling);
    } else {
      header.removeAttribute("style");
      if (header.nextSibling === placeholder) {
        header.parentNode.removeChild(placeholder);
      }
    }
  }

  // Добавляем обработчик события скролла
  window.addEventListener("scroll", handleScroll);

  // Инициализация при загрузке (на случай, если страница уже прокручена)
  handleScroll();
});

