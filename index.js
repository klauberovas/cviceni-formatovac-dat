// Formátovač dat

// Vypište do stránky hezky zformátované datum.
// Vytvořte stránku, která se zeptá uživatele na den, měsíc a rok a vypíše do stránky datum v hezkém formátu.
// Jakmile uživatel zadá patřičné údaje, vypište do stránky datum v tomto formátu.
// 28. 4. 2021
const day = Number(prompt('Zadejte den. př. 2 (jako druhého.'));
const month = Number(prompt('Zadejte měsíc.př.4 (jako duben)'));
const year = Number(prompt('Zadejte rok.'));

// document.body.innerHTML +=
//   '<p>Dnes je: ' + day + '. ' + month + '. ' + year + '</p>';
// //
// Vypisujte datum do webové stránky jako následující HTML kód.
// <p class="date">
//   <span class="day">28</span>. <span class="month">4</span>.
//   <span class="year">2021</span>
// </p>

document.body.innerHTML +=
  '<div class="date"><span class="day"><h1 class="date__title">Dnes je</h1> ' +
  day +
  '</span>.<span class="month">' +
  month +
  '</span>.<span class="year">' +
  year +
  '</span><img class="date__icon" src="smajlik.png" alt=""/></div>';

// Bonus
// Zkuste tyto prvky lehce nastylovat pomocí CSS, aby vypadaly hezky.
