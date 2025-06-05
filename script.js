document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('license-form');
  const tableBody = document.querySelector('#license-table tbody');

  function loadLicenses() {
    const data = JSON.parse(localStorage.getItem('licenses') || '[]');
    tableBody.innerHTML = '';
    data.forEach((lic, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${lic.name}</td>
        <td>${lic.expires}</td>
        <td>${lic.details || ''}</td>
        <td><button class="delete-btn" data-index="${index}">&#10005;</button></td>
      `;
      tableBody.appendChild(row);
    });
  }

  function saveLicenses(data) {
    localStorage.setItem('licenses', JSON.stringify(data));
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const expires = document.getElementById('expires').value;
    const details = document.getElementById('details').value.trim();
    const licenses = JSON.parse(localStorage.getItem('licenses') || '[]');
    licenses.push({ name, expires, details });
    saveLicenses(licenses);
    form.reset();
    loadLicenses();
  });

  tableBody.addEventListener('click', e => {
    if (e.target.classList.contains('delete-btn')) {
      const idx = parseInt(e.target.getAttribute('data-index'), 10);
      const licenses = JSON.parse(localStorage.getItem('licenses') || '[]');
      licenses.splice(idx, 1);
      saveLicenses(licenses);
      loadLicenses();
    }
  });

  loadLicenses();
});
