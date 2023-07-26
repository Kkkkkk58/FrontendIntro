// Получаем элементы DOM
const searchBtn = document.getElementById('search-btn');
const searchModal = document.getElementById('search-modal');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

// Дефолтные значения для поиска
const defaultValues = [
  'Фильм 1',
  'Фильм 2',
  'Фильм 3',
  'Фильм 4',
  'Фильм 5',
];

// Отображаем модальное окно при клике на кнопку поиска
searchBtn.addEventListener('click', () => {
  searchModal.style.display = 'flex';
});

// Скрываем модальное окно при клике вне его области
window.addEventListener('click', (event) => {
  if (event.target === searchModal) {
    searchModal.style.display = 'none';
  }
});

// Обрабатываем ввод в поле поиска
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();

  // Фильтруем дефолтные значения по запросу
  const filteredValues = defaultValues.filter(value => value.toLowerCase().startsWith(query));

  // Очищаем список результатов
  searchResults.innerHTML = '';

  // Добавляем отфильтрованные значения в список
  for (let item of filteredValues) {
    const li = document.createElement('li');
    li.textContent = item;
    li.addEventListener('click', () => {
      // Добавляем выбранный элемент в блок выбранных элементов
      const selected = document.createElement('div');
      selected.classList.add('selected-item');
      selected.textContent = item;
      document.getElementById('selected-items').appendChild(selected);

      // Скрываем модальное окно
      searchModal.style.display = 'none';

      // Очищаем поле поиска
      searchInput.value = '';
    });
    searchResults.appendChild(li);
  }
});
