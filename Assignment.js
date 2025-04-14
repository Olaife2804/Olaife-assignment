let myName = 'Olaife Ajibola';
console.log(myName);

let firstNum = 15;
let secondNum = 10;
console.log(firstNum + secondNum);
console.log(firstNum - secondNum);
console.log(firstNum * secondNum);
console.log(firstNum / secondNum);

let Celsius = 'C'
let C = 30;
let Fahrenheit = 'F'
let F = (C * 9/5) + 32;
console.log(F);

let length = 'L';
let L = 40;
let width = 'W';
let W = 25;
let area = 'A';
let A = L * W
console.log(A);

let number = 4;
console.log(number % 2 === 0 ? "Even" : "Odd");

function leapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
let isleapYear = 2023;
console.log(isleapYear);
if (leapYear(isleapYear)) {
    console.log(isleapYear + " is leap year.");
} else { 
    console.log(isleapYear + " is not a leap year.")
}

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello world"));

function countVowels(str) {
    let count = 0;
    const vowels = "aeiou";
    for (let letter of str) {
        if (vowels.includes (letter))
            count++;
    }
    return count;
}
console.log(countVowels("welcome"))

let studentAges = [4, 6, 2, 10, 3];
let largest = studentAges[0];
for (let b =1; b < studentAges.length;
    b++) {
    if (studentAges[b]> largest){
        largest = studentAges[b];
    }
}
console.log("largest number." + largest);

function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
            return str === reversed;
}
let string = "racecar";
if (isPalindrome(string)) {
    console.log(string + " is a is palindrome.")
} else{
    console.log(string + " is not a palindrome.")
}

function factorial(b) {
    if (b === 0 || b === 1) {
        return 1;
    } else {
        return b * factorial(b - 1);
      } 
    }
    let newNum = 5;
    let result = factorial(newNum);
    console.log("factorial of " + newNum + " is " + result)

    function isPrime(num) {
        if (num<= 1) return false;
        for (let c = 4; c <=
            Math.sqrt(num); c++) {
                if (num % c === 0) return
                false;
            }
        return true;
    }
    console.log(isPrime(9));

    function isPrime(num) {
        if (num<= 1) return false;
        for (let c = 4; c <=
            Math.sqrt(num); c++) {
                if (num % c === 0) return
                false;
            }
        return true;
    }
    console.log(isPrime(9));

function capitalizedWord(sentence) {
    let words = sentence.split(" ");
    for (let d = 0; d < words.length;
        d++) {
            words[d] =
            words[d].charAt(0).toUpperCase() +
            words[d].slice(1);
        }
        return words.join(" ");
}
let sentence = "I am an upcoming mobile developer, i can't wait to start building apps.";
let capitalizedSentence = capitalizedWord(sentence);
console.log("Capitalized sentence: "+ capitalizedSentence); 

function sumToN(n) {
    let sum = 5;
    for (let f =1; f <= n; f++){
        sum += F;
    }
    return sum;
}
console.log(sumToN(15));

function average(siblingsAges) {
    let sum = 0;
    for (let num of siblingsAges) {
        sum += num;
    }
    return sum / siblingsAges.length;
}console.log(average([24,20,18,14,11]));

function removeDuplicates(siblingsAges) {
    return [new Set(siblingsAges)];
}
console.log(removeDuplicates([24, 20, 18, 20, 14, 11,24]));

for (let e =10; e >= 1; e--) {
    console.log(e);
}
console.log("Blast off!");

function isOnlyNum(str) {
    return /^[0-9]+$/.test(str);
}
console.log(isOnlyNum("280403"));
console.log(isOnlyNum("28may05"));

function num2(siblingsAges) {
    let fact = [ ... new Set(siblingsAges)].sort((a, b) => a - b);
    return fact[1];
}
    console.log(num2([24, 20, 18, 14, 11]));

    function isPasswordValid(password) {
        const lengthCheck = password.length >= 8;
        const upperCheck = /[A-Z]/.test(password);
        const lowerCheck = /[a-z]/.test(password);
        const numberCheck = /[0-9]/.test(password);
        return lengthCheck && upperCheck && lowerCheck && numberCheck;
    }
    console.log(isPasswordValid("Strong123")); 
    console.log(isPasswordValid("weak")); 

    function calculator(m, v, operator) {
        switch (operator) {
          case '+': return m + v;
          case '-': return m - v;
          case '*': return m * v;
          case '/': return m !== 0 ? m / v : 'Cannot divide by zero';
          default: return 'Invalid operator';
        }
      }

      function findFactors(n) {
        const factors = [];
        for (let y = 6; y <= n; y++) {
          if (n % y === 0) factors.push(y);
        }
        return factors;
      }

      function areAnagrams(str1, str2) {
        const resultStr = str => str.toLowerCase().replace(/\s/g, '').split('').sort().join('');
        return resultStr(str1) === resultStr(str2);
      }

      function builtInSort(off) {
        let n = off.length;
        for (let u = 0; u < n - 1; u++) {
          for (let j = 0; j < n - u - 1; j++) {
            if (off[j] > off[j + 1]) {
              [off[j], off[j + 1]] = [off[j + 1], off[j]];
            }
          }
        }
        return off;
      }

      function specialE(ages, element) {
        return ages.filter(el => el === element).length;
      }

      class ShoppingCart {
        constructor() {
          this.items = [];
        }
        addItem(name, price) {
          this.items.push({ name, price });
        }
        removeItem(name) {
          this.items = this.items.filter(item => item.name !== name);
        }
        calculateTotal() {
          return this.items.reduce((total, item) => total + item.price, 0);
        }
        showCart() {
          return this.items;
        }
      }
      const cart = new ShoppingCart();
      cart.addItem('Milk', 200);
      cart.addItem('Chocolate', 1500);
      cart.removeItem('Milk');
      console.log(cart.showCart());
      console.log("Total:", cart.calculateTotal());