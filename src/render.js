class Counter {
  constructor(count) {
    this.count = count;
  }

  fizzbuzz() {
    if (this.count === 0) {
      document.getElementById("value").innerHTML = this.count;
    } else if (this.count % 15 === 0) {
      document.getElementById("value").innerHTML = "fizzbuzz";
    } else if (this.count % 5 === 0) {
      document.getElementById("value").innerHTML = "buzz";
    } else if (this.count % 3 === 0) {
      document.getElementById("value").innerHTML = "fizz";
    } else {
      document.getElementById("value").innerHTML = this.count;
    }
  }

  increaseCountByOne() {
    this.count++;
    this.fizzbuzz();
  }

  decreaseCountByOne() {
    this.count--;
    this.fizzbuzz();
  }

  resetCount() {
    document.getElementById("value").innerHTML = 0;
  }
}

const newCounter = new Counter(0);

// let count = 0;

// function increaseCount() {
//   count++;
//   document.getElementById("myText").innerHTML = count;
// }

// function decreaseCount() {
//   count--;
//   document.getElementById("myText").innerHTML = count;
// }
