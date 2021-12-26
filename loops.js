/**
 * 
 * In this function, you will have to draw a vertical line with `n` length
 * for example `drawVLine(5) should print out 
  # 
  # 
  # 
  # 
  # 
 */
  function drawVLine(n) {
    for (let numberOfLoops = 0; numberOfLoops < n; numberOfLoops++){
    console.log("#")
    }
    }
    
    drawVLine(4)
/**
 *
 * In this function, you will have to draw a horizontal line with `n` length
 * for example `drawHLine(5) should print out # # # # # (there are spaces here!)
 */
 function drawHLine(n) {
  let codeline = ""
  let hashes ="#"
for (let i = 0; i < n; i++){
  codeline = codeline.concat(hashes + ` `)
}
console.log(codeline)
}

drawHLine(5)
// two other ways include creating a print function or process.stdout.write(Text)
/**
 * 
 * In this function, you will have to draw a square with a length of `n` 
 * for example `drawSquare(5) should print out 
 
  #  #  #  #  #
  #  #  #  #  #
  #  #  #  #  #
  #  #  #  #  #
  #  #  #  #  #

 */
  function drawSquare(n) {
    for (let i = 0; i < n; i++){
    drawHLine(n)}
  }
  drawSquare(5)
//   for (let i = 0; i < n; i++){
//   drawHLine()}
// }

/**
 * 
 * In this function, you will have to draw a triangle with a length of `n` 
 * for example `drawLeftTriangle(5) should print out 
 
  #  
  #  #  
  #  #  #  
  #  #  #  #  
  #  #  #  #  #

 */
function drawLeftTriangle(n) {
 for (let r = 0; r <n; r++) {
   for (let c = 0; c < n; c++){
   Processing.stdout.write ("# ");}
 }
 console.log()
}

/**
 * 
 * In this function, you will have to draw a tree with a length of `n` 
 * for example `drawTree(5) should print out 
 
     #   
    # #   
   # # # 
  # # # # 
     #

 */
function drawTree(n) {
for (let r=0; r<n; r++) {
  for(let c=0; c <= r; c++){
    for (let s=n-1; s>=0; s--){
      print(" ")
    } 
    print("# ");
  }
  console.log("# ")
}
}
/**
 *
 * In this example, you will create 4 arrays, `yellowCards`, `greenCards`, `redCards`, `blueCards`
 * (BONUS) Try to optimize the code with doing it with one gigantic loop
 */
function fillUnoDeck() {
  let greenCards = [];
  let yellowCards = [];
  let redCards = [];
  let blueCards = [];
  // Fill the cards here
  for (let i=0; i<10; i++){
    for (let j =i; j<i; j++){
  greenCards.push(i)
yellowCards.push(i)
redCards.push(i)
blueCards.push(i)}}
}
fillUnoDeck()