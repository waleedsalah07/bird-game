//  const hole = document.getElementById("hole");
// const obstacle = document.getElementById("obstacle");
//  const bird = document.getElementById("bird");
//  let score = 0;
//  hole.addEventListener("animationiteration", () => {
//    let rand = Math.random() * (350);
//    hole.style.top = rand + "px";

//   score++;
// });

 //setInterval(function () {
 // let birdTop = parseInt(getComputedStyle(bird).getPropertyValue("top"));
 // if (isJumping==false) {
   //  bird.style.top = birdTop + 3 + "px";
 // }

  // let obstacleLeft = parseInt(
  //   getComputedStyle(obstacle).getPropertyValue("left")
  // );
  // let holeTop = parseInt(getComputedStyle(hole).getPropertyValue("top"));
  // if (
  //   birdTop > 480 ||
  //   (obstacleLeft < 20 && (birdTop > holeTop + 150 || birdTop < holeTop))
  //    ) {
 //alert(`Game Over. Your Score: ${score}`);

  //   bird.style.top = 100 + "px";
  //   obstacle.style.left = "100%";
  //   hole.style.left = "100%";

  //   score = 0;
  // }
//}, 10);

// let isJumping = false;
// let jumpTimer = 0;
// document.addEventListener("click", () => {
//   isJumping = true;
//   let jumpInterval = setInterval(function () {
//     jumpTimer++;
//     let birdTop = parseInt(getComputedStyle(bird).getPropertyValue("top"));
//     if (birdTop > 0 ) {
//       bird.style.top = birdTop -5 + "px";
//     }
//      if (jumpTimer >= 20) {
//       clearInterval(jumpInterval);
//       isJumping = false;
//       jumpTimer = 0;
//      }
//   }, 10);
// });




const game = document.getElementById('game')
const hole = document.getElementById("hole");
const obstacle = document.getElementById("obstacle");
 const bird = document.getElementById("bird");
 let score = 0;
 hole.addEventListener("animationiteration", () => {
   let random = Math.random() * (350);
   hole.style.top = random + "px";

  score+=2;
});
setInterval(() => {
  if (jumping == false) {  
  let birdTop = parseInt (getComputedStyle(bird).getPropertyValue("top"));
  bird.style.top = birdTop + 3 + "px"
  let obstacleLeft = parseInt(
       getComputedStyle(obstacle).getPropertyValue("left")
    );
    let holeTop = parseInt(getComputedStyle(hole).getPropertyValue("top"));
    if(
        (birdTop > 480 ) ||
      (obstacleLeft<20&&(birdTop>holeTop+150|| birdTop < holeTop))
    )
     {
      alert(`Game Over. Your Score: ${score}`);
        bird.style.top = 100 + "px";
         obstacle.style.left = "100%";
        hole.style.left = "100%";
         score = 0; 
    }
}
}, 10);
 jumping = false ;
 let jumpTime = 1 ;
 game.addEventListener("click", () => {
   jumping = true ;
   let jump =  setInterval(() => {
    jumpTime++
   let birdTop = parseInt (getComputedStyle(bird).getPropertyValue("top"));
   if (birdTop>=0){
    bird.style.top = birdTop - 3 + "px"
  }
    if (jumpTime>=15) {
     clearInterval(jump)
    jumping = false ;
   jumpTime =1
   }
  }, 10);
});