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



// Находим кнопку 2
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




// Находим кнопку 3
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




// Находим кнопку 4
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
