//setup document
document.addEventListener('DOMContentLoaded', function () {
    //create button
    let button = document.createElement('button');
    //create button div 
    let btnDiv = document.createElement('div')
   //add button text
    let btnText = document.createTextNode('Add Square');
   //add container for squares
    let container = document.createElement('div');
    container.className = 'container';
  //add above to body
    document.body.appendChild(btnDiv);
    btnDiv.appendChild(button);
    button.appendChild(btnText);
    document.body.appendChild(container);
  
  //set first div to 1 and on when adding new square
    let divID = 0;
  
  //button clicked add new div(blacksquare)
    button.addEventListener('click', function () {
      divID++;
      let squareDiv = document.createElement('div');
      squareDiv.className = 'squares';
      squareDiv.id = divID;
      let divText = document.createTextNode(divID);
      let divTextSpan = document.createElement('span');
      //add above to body
      divTextSpan.className = 'squareText'
      divTextSpan.appendChild(divText);
      squareDiv.appendChild(divTextSpan)
      container.appendChild(squareDiv);
    //make squares change color w/click using random colors between 0-250
      squareDiv.addEventListener('click', function () {
        let r= Math.floor(Math.random() * 250);          
        let g = Math.floor(Math.random() * 250);          
        let b= Math.floor(Math.random() * 250);          
        let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
        this.style.backgroundColor = rgb
      }),
    //doible clicked remove square after clicked square if even
        squareDiv.addEventListener('dblclick',
          function () {
              //if no square alert
            if (this.id % 2 == 0 & this.nextSibling === null) {
              alert('No square to delete.')
            } else if (this.id % 2 == 0) {
              this.nextSibling.remove();
            }
          }),
    //double clicked remove squatre before clicked square if odd
        squareDiv.addEventListener('dblclick',
          function () {
              //if no sqaure alert
            if (this.id % 2 !== 0 & this.previousSibling === null) {
              alert('No sqaure to delete.')
            } else if (this.id % 2 !== 0) {
              this.previousSibling.remove();
            }
          })
    });
  });

