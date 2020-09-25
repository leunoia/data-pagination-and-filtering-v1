/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
// This accesses the unordered list from the document

const ul = document.querySelector('.student-list');

// This function is used to create a page which displays 9 students and the various information about each student

function showPage(list, page) {
	const startIndex = page * 9 - 9;
	const endIndex = page * 9;
	ul.innerHTML = '';
	for (let i = 0; i < list.length; i++) {
		if (i >= startIndex && i < endIndex) {
			const li = document.createElement('li');
			li.className = 'student-item cf';
			ul.appendChild(li);

			const divDetails = document.createElement('div');
			divDetails.className = 'student-details';
			li.appendChild(divDetails);

			const img = document.createElement('img');
			img.className = 'avatar';
			img.alt = 'Profile Picture';
			const linkSrc = Object.values(list[i])[3];
			img.src = Object.values(linkSrc)[0];
			divDetails.insertAdjacentElement('afterbegin', img);

			const spanDet = document.createElement('span');
			spanDet.className = 'email';
			const dataEmail = Object.values(list[i])[1];
			spanDet.textContent = dataEmail;
			divDetails.insertAdjacentElement('beforeend', spanDet);

			const h3 = document.createElement('h3');
			const name = Object.values(list[i])[0];
			h3.textContent = `${Object.values(name)[1]} ${
				Object.values(name)[2]
			}`;
			spanDet.insertAdjacentElement('beforebegin', h3);

			const divJoin = document.createElement('div');
			divJoin.className = 'joined-details';
			li.appendChild(divJoin);

			const spanJoin = document.createElement('span');
			spanJoin.className = 'date';
			const date = Object.values(list[i])[2];
			spanJoin.innerHTML = `Joined: ${Object.values(date)[0]}`;
			divJoin.appendChild(spanJoin);
		}
	}
}
// This function creates the pages buttons at the bottom of the page.
function paginationTemplate(list) {
	const listLeng = list.length / 9;
	const ul = document.querySelector('.link-list');
	ul.innerHTML = '';
	for (let i = 0; i < listLeng; i++) {
		const li = document.createElement('li');
		const pageButton = document.createElement('button');
		const pageNumber = i + 1;
		pageButton.textContent = pageNumber;
		pageButton.type = 'button';
		li.insertAdjacentElement('beforeend', pageButton);
		ul.appendChild(li);
	}
}

showPage(data, 1);
paginationTemplate(data);

// This is an event listener that listens for a click event and prints new page when click event is on page button
const firstButton = document.querySelector('button');
firstButton.className = 'active';
const ulLink = document.querySelector('.link-list');
ulLink.addEventListener('click', (e) => {
	if (e.target.tagName === 'BUTTON') {
		const buttons = document.getElementsByTagName('button');
		const clickButton = e.target;
		const pageNumber = e.target.textContent;
		for (let i = 0; i < buttons.length; i++) {
			buttons[i].className = '';
		}
		clickButton.className = 'active';
		showPage(data, pageNumber);
	}
});

// *Extra Credit*
const header = document.querySelector('header');
// This function creates a search bar which the use can search the list of names.
function searchBar() {
	const label = document.createElement('label');
	label.for = 'search';
	label.className = 'student-search';
	const input = document.createElement('input');
	input.id = 'search';
	input.placeholder = 'Search by name...';
	input.type = 'text';
	label.insertAdjacentElement('afterbegin', input);
	const button = document.createElement('button');
	button.type = 'button';
	const img = document.createElement('img');
	img.src = 'img/icn-search.svg';
	img.alt = 'Search Icon';
	label.insertAdjacentElement('beforeend', button);
	button.insertAdjacentElement('beforeend', img);
	header.insertAdjacentElement('beforeend', label);
}
searchBar();

// These access the search input and click button for the search function, along with the div where the "No Results Found..." message will go.
const searchInput = document.querySelector('#search');
const searchButton = document.querySelector('.student-search button');
const divPage = document.querySelector('.page');
const h3 = document.createElement('h3');
let fullNames = [];
let newData = [];
// This function emptys the array to reset it each time
function emptyArray(array) {
	array.length = 0;
}
// This is an event handler that deals with a search event.
// searchButton.addEventListener('click', (e) => {
// 	emptyArray(newData);
// 	h3.textContent = '';
// 	for (let i = 0; i < data.length; i++) {
// 		let namesObject = Object.values(data[i])[0];
// 		fullNames.push(
// 			`${Object.values(namesObject)[1]} ${Object.values(namesObject)[2]}`
// 		);
// 		if (
// 			fullNames[i].toLowerCase().includes(searchInput.value.toLowerCase())
// 		) {
// 			newData.push(data[i]);
// 			showPage(newData, 1);
// 		} else {

// 			console.log('hello');
// 			h3.textContent = 'No Seach Results...';
// 			divPage.appendChild(h3);
// 			return;
// 		}
// 	}

// 	paginationTemplate(newData);
// });
// This is an event listener that listen to keyup events in order to make the search function more reactive while the user searches.
searchInput.addEventListener('keyup', (e) => {
	emptyArray(newData);
	h3.textContent = '';
	for (let i = 0; i < data.length; i++) {
		let namesObject = Object.values(data[i])[0];
		fullNames.push(
			`${Object.values(namesObject)[1]} ${Object.values(namesObject)[2]}`
		);
		if (
			fullNames[i].toLowerCase().includes(searchInput.value.toLowerCase())
		) {
			newData.push(data[i]);
		}
	}
	if (newData.length === 0) {
		h3.textContent = 'No Seach Results...';
		divPage.appendChild(h3);
	}
	showPage(newData, 1);
	paginationTemplate(newData);
});
