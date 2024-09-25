'use strict';

const createTable = () => {
  const tableContainer = document.getElementById('table-number');

  const table = document.createElement('table');
  const cells = [];
  let counter = 1;

  for (let i = 0; i < 10; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement('td');
      cell.style.width = '35px';
      cell.style.height = '35px';
      cell.style.border = '1px solid grey';
      cell.style.background = 'yellow';
      cell.style.textAlign = 'center';
      cell.style.fontWeight = 'bold';
      row.appendChild(cell);
      cells.push(cell);
    }
    table.appendChild(row);
  }

  tableContainer.appendChild(table);

  let index = 0;
  const counterTimer = setInterval(() => {
    if (index < cells.length) {
      cells[index].textContent = counter;
      counter++;
      index++;
    } else {
      clearInterval(counterTimer);
    }
  }, 70);
};

createTable();
