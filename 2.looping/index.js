for (let iteration = 0; iteration < 5; iteration++) {
  console.log("iteraiton", iteration);
}

let threshold = true;
let iteration = 0;
while (threshold) {
  if (iteration == 5) {
    threshold = false;
  }
  iteration++;
}

const listBilangan = [1, 2, 3, 4, 5];
listBilangan.forEach((iteration) => console.log(iteration));
console.log(listBilangan.filter((iteration) => iteration == 2));
