/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
function pageMaker (list, page) {
   const startIndex = (page  * 9) - 9;
   const endIndex = page * 9;
   const ul = document.querySelector('.student-list');
   ul.innerHTML = '';
   for (let i = 0; i < list.length; i++){
      if ( i >= startIndex  && i < endIndex){
         const li = document.createElement('li');
         li.className = 'student-item cf';
         ul.appendChild(li);

         const divDetails = document.createElement ('div');
         divDetails.className = 'student-details';
         li.appendChild(divDetails);
         
         const img = document.createElement('img');
         img.className = 'avatar';
         img.alt = 'Profile Picture';
         const linkSrc = Object.values(data[i])[3];
         img.src = Object.values(linkSrc)[0];
         divDetails.insertAdjacentElement ("afterbegin", img);
         
         const spanDet = document.createElement('span');
         spanDet.className = 'email';
         const dataEmail = Object.values(data[i])[1];
         spanDet.textContent = dataEmail;
         divDetails.insertAdjacentElement("beforeend", spanDet)

         const h3 = document.createElement('h3');
         const name = Object.values(data[i])[0];
         h3.textContent = `${Object.values(name)[1]} ${Object.values(name)[2]}`;
         spanDet.insertAdjacentElement("beforebegin",h3);

         const divJoin = document.createElement('div');
         divJoin.className = 'joined-details';
         li.appendChild(divJoin);

         const spanJoin = document.createElement('span');
         spanJoin.className = 'date';
         const date = Object.values(data[i])[2];
         spanJoin.innerHTML = `Joined: ${Object.values(date)[0]}`
         divJoin.appendChild(spanJoin);
      }
   }

}

function pagButtons (list){
   const listLeng = list.length/9;
   const ul = document.querySelector('.link-list');
   ul.innerHTML = '';
   for (let i = 0; i < listLeng; i++){
      const li = document.createElement('li');
      const pageButton = document.createElement ('button');
      const pageNumber = i + 1;
      pageButton.textContent = pageNumber;
      pageButton.type = "button";
      li.insertAdjacentElement("beforeend",pageButton);
      ul.appendChild(li);
   }
}
pageMaker (data, 4)
pagButtons(data)

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
