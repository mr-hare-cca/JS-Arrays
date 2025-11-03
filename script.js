// 1) Traffic light color -> print action five times or 'Invalid color'
const color = (prompt("Enter a traffic light color (red, yellow, green):") || "")
  .trim()
  .toLowerCase();

let action = "";

if (color === "red") {
  action = "Action: Stop";
} else if (color === "yellow") {
  action = "Action: Slow";
} else if (color === "green") {
  action = "Action: Go";
} else {
  console.log("Invalid color");
}

// if (action) {
//   for (let i = 0; i < 5; i++) {
//     console.log(action);
//   }
// }

// 2) Ask for five numbers, store in an array, print average and even count
const nums = [];
for (let i = 1; i <= 5; i++) {
  const value = parseFloat(prompt("Enter number " + i + ":"));
  nums.push(value);
}

let sum = 0;
let evenCount = 0;

for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  sum += n;
  if (!Number.isNaN(n) && n % 2 === 0) {
    evenCount++;
  }
}

const average = sum / nums.length;
// console.log("Average: " + average);
// console.log("Even count: " + evenCount);
