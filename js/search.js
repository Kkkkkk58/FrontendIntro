const searchBtn = document.getElementById('search-btn');
const searchModal = document.getElementById('search-modal');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

const defaultValues = [
  'Фильм 1',
  'Фильм 2',
  'Фильм 3',
  'Фильм 4',
  'Фильм 5',
];

searchBtn.addEventListener('click', () => {
  searchModal.style.display = 'flex';
});

window.addEventListener('click', (event) => {
  if (event.target === searchModal) {
    searchModal.style.display = 'none';
  }
});

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filteredValues = defaultValues.filter(value => value.toLowerCase().startsWith(query));

  searchResults.innerHTML = '';
  for (let item of filteredValues) {
    const li = document.createElement('li');
    li.textContent = item;
    li.addEventListener('click', () => {
      const selected = document.createElement('div');
      selected.classList.add('selected-item');
      selected.textContent = item;
      document.getElementById('selected-items').appendChild(selected);
      searchModal.style.display = 'none';
      searchInput.value = '';
    });
    searchResults.appendChild(li);
  }
});
