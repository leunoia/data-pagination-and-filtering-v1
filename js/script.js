/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
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

// This function creates a search bar which the use can search the list of names.

const header = document.querySelector('header');
function searchBar() {
	const form = document.createElement('form');
	form.id = 'search-form';
	form.action = 'GET';
	const label = document.createElement('label');
	label.for = 'search';
	label.className = 'student-search';
	const input = document.createElement('input');
	input.id = 'search';
	input.placeholder = 'Search by name...';
	label.insertAdjacentElement('afterbegin', input);
	const button = document.createElement('button');
	const img = document.createElement('img');
	img.src = 'img/icn-search.svg';
	img.alt = 'Search Icon';
	label.insertAdjacentElement('beforeend', button);
	button.insertAdjacentElement('beforeend', img);
	form.insertAdjacentElement('afterbegin', label);
	header.insertAdjacentElement('beforeend', form);
}
searchBar();

// This function adds functionality to the search bar.

const searchForm = document.querySelector('#search-form');
const searchButton = document.querySelector('.student-search button');

// function searchFunc (input, list) {

//    for (let i = 0; i < data.length;i++){
//       const names = list[i].textContent;
//       if(names.toLowerCase().includes(input.value.toLowerCase())){
//          console.log('hello');
//       }

//    }
// }

searchForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const input = event.target.querySelector('#search');
	const names = filterFullNamesBySearch(data, input.value);
	showPage(names, 1);
	paginationTemplate(names);
});

function filterFullNamesBySearch(people, queryString) {
	return people.filter(filter, queryString);

	function filter(person) {
		const name = getFullName(person).toLowerCase();
		return name.includes(this);
	}
}

function getFullName(person) {
	return `${person.name.first} ${person.name.last}`;
}

// searchInput.addEventListener('keyup',(e)=> { n
//    for (let i = 0; i < data.length;i++){
//    const studentInfo = Object.values(data[i])[0];
//    const name = Object.values(studentInfo)[1]
//    const input = searchButton.value;

//    }

// if (name.includes(input)) {

// });
