
let numberOfFaces = 5;

let score = 0;
const theLeftSide = document.getElementById('leftSide');
const theRightSide = document.getElementById('rightSide');
    
function generateFaces() {


    for (let i = 0; i < numberOfFaces; i++){

        console.log(i);
        //Inserts the image for 
        var face = document.createElement('img');
        face.src = '/images/hamburger.png';

        //Creates random positions on right and left side.
        randomTop = Math.floor(Math.random() * 400) + 1;
        randomLeft = Math.floor(Math.random() * 400) + 1;

        face.style.top = randomTop + 'px';
        face.style.left = randomLeft + 'px';

        theLeftSide.appendChild(face);
    
    }

    var leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    
    theRightSide.appendChild(leftSideImages);
    theLeftSide.lastChild.addEventListener('click', nextLevel);
    document.body.addEventListener('click', gameOver);
}

    function nextLevel() {
        event.stopPropagation();
        score++;
        //While loops to remove faces from both sides for next level.
        while(theRightSide.firstChild) {
            theRightSide.removeChild(theRightSide.firstChild);
        }
        while(theLeftSide.firstChild) {
            theLeftSide.removeChild(theLeftSide.firstChild);
        }
        numberOfFaces += 5;
        generateFaces();
    }



    function gameOver() {
        alert('Game Over.\n\nThank you for playing.' + '\n\n Your score was ' + score + ' !.' );
        theLeftSide.lastChild.removeEventListener('click', nextLevel)
        document.body.removeEventListener('click', gameOver);
        window.location.reload();
}
    
function restart() {
        window.location.reload();
    } 


