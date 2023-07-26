const searchBtn = document.getElementById('search-btn');
const searchModal = document.getElementById('search-modal');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

const defaultValues = [
  'Интерстеллар',
  'Начало',
  'Навальный',
  'Индиана Джонс и Колесо судьбы',
  'Интерны',
  'Индиана Джонс: В поисках утраченного ковчега',
  'Индиана Джонс и храм судьбы',
  'Индиана Джонс и последний крестовый поход',
  'Индиана Джонс и Королевство хрустального черепа'
];

function getValues() {
  return defaultValues;
}

function showFilteredSearchItems(query = '') {
  function getFilteredValues(query) {
    if (query === '') {
      return getValues();
    }
    return getValues().filter(value => value.toLowerCase().startsWith(query));
  }

  const filteredValues = getFilteredValues(query);

  searchResults.innerHTML = '';
  for (let item of filteredValues) {
    const li = document.createElement('li');
    li.textContent = item;
    searchResults.appendChild(li);
  }
}

searchBtn.addEventListener('click', () => {
  showFilteredSearchItems();
  searchModal.style.display = 'flex';
});

window.addEventListener('click', (event) => {
  if (event.target === searchModal) {
    searchModal.style.display = 'none';
  }
});

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  showFilteredSearchItems(query);
});

