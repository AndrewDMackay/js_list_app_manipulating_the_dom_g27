
// EventListeners..

// addEventListener, main 'DOMContentLoaded', and individual variables tied to querySelector, their own addEventListener, and functions..

document.addEventListener('DOMContentLoaded', () => {
    const newItemform = document.querySelector('#new-item-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
  })
 

  // Add variables, and functions to handle the result of each individual event..
  
  const handleNewItemFormSubmit = function (event) {
    event.preventDefault();
  
    const wineListItem = createwineListItem(event.target);
    const wineList = document.querySelector('#wine-list');
    wineList.appendChild(wineListItem);
  
    event.target.reset();
  }
  
  
  const createwineListItem = function (form) {
    const wineListItem = document.createElement('li');
    wineListItem.classList.add('wine-list-item');
  
    const wine = document.createElement('h2');
    wine.textContent = form.wine.value;
    wineListItem.appendChild('wine');
  
    const producer = document.createElement('h3');
    producer.textContent = form.producer.value;
    wineListItem.appendChild('producer');

    const vintage = document.createElement('h4');
    vintage.textContent = form.vintage.value;
    wineListItem.appendChild('vintage');
  
    const type = document.createElement('p');
    type.textContent = form.type.value;
    wineListItem.appendChild('type');

    const certification = document.createElement('p');
    certification.textContent = form.certification.value;
    wineListItem.appendChild('certification');
  
    return wineListItem;
  }
  
  
  const handleDeleteAllClick = function (event) {
    const wineList = document.querySelector('#wine-list');
    wineList.innerHTML = '';
  }  



