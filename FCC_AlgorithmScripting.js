//Free Code Camp Basic Algorithm Scripting Challenge.

//1. Reverse a String.
//Task:
//Reverse the provided string.
//You may need to turn the string into an array before you can reverse it.

function reverseString(str) {
    var newStr = str.split('').reverse().join('');
    return newStr;
}

reverseString("hello");

//2. Factorialize a Numbe.
//Task:
//Return the factorial of the provided integer.
//If the integer is represented with the letter n, a factorial is the product of all 
//positive integers less than or equal to n.

function factorialize(num) {
    var sum = 1;
    for (var i = num; i > 0; i--) {
        sum = sum * i;
    }
    return sum;
}

factorialize(5);

//3. Check for Palindromes.
//Task:
//Return true if the given string is a palindrome. Otherwise, return false.
//A palindrome is a word or sentence that's spelled the same way both forward 
//and backward, ignoring punctuation, case, and spacing.

function palindrome(str) {
    var firStr = str.toLowerCase().replace(/[\W_]/g, '');
    var secStr = firStr.split('').reverse().join('');
    if (secStr === firStr) {
        return true;
    } else return false;
}

palindrome("eye");

//4. Find the Longest Word in a String.
//Task:
//Return the length of the longest word in the provided sentence.
//Your response should be a number.

function findLongestWord(str) {
    var maxLength = 0;
    var wordArray = str.split(" ");
    for (var i = 0; i < wordArray.length; i++) {
        if (maxLength < wordArray[i].length) {
            maxLength = wordArray[i].length;
        }
    }
    return maxLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

//5. Title Case a Sentence.
//Task:
//Return the provided string with the first letter of each word capitalized. 
//Make sure the rest of the word is in lower case.
//For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
    var test, test2, test3;
    test = str.split(' ');
    test2 = test.map(function(iteam) {
        return iteam.toLowerCase().split('');
    });
    for (var i = 0; i < test2.length; i++) {
        test2[i][0] = test2[i][0].toUpperCase();
    }
    test3 = test2.map(function(iteam) {
        return iteam.join('');
    });
    return test3.join(' ');
}

titleCase("I'm a little tea pot");

//6. Return Largest Numbers in Arrays.
//Task:
//Return an array consisting of the largest number from each provided sub-array. 
//For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
    var newArray = [];

    function getMaxOfArray(numArray) {
        return Math.max.apply(null, numArray);
    }
    for (var i = 0; i < arr.length; i++) {
        var maxNum = getMaxOfArray(arr[i]);
        newArray.push(maxNum);
    }
    return newArray;
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);

//7. Confirm the Ending.
//Task:
//Check if a string (first argument, str) ends with the given target string (second argument, target).
//This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
//But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
    var FIndex = str.indexOf(target);
    var LIndex = str.lastIndexOf(target);
    var lastChars = str.substr(FIndex, LIndex);
    return lastChars === target ? true : false;
}

confirmEnding("Bastian", "n");

//8. Repeat a string repeat a string.
//Task:
//Repeat a given string (first argument) num times (second argument). 
//Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
    if (num < 0) {
        return "";
    } else return str.repeat(num);
}

repeatStringNumTimes("abc", 3);

//9. Truncate a string.
//Task:
//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
//Return the truncated string with a ... ending.

function truncateString(str, num) {
    if (num <= 3) {
        return str.slice(0, num) + "...";
    } else if (num > 3 && str.length != num && str.length > num) {
        return str.slice(0, num - 3) + "...";
    }
    if (str.length == num || str.length < num) {
        return str.slice(0, num);
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

//10. Chunky Monkey.
//Task:
//Write a function that splits an array (first argument) into groups the length of size (second argument) and 
//returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    var newArr = [];
    var numOfSubArr = Math.ceil(arr.length / size);
    var start = 0;
    var end = 0;
    for (var i = 0; i < numOfSubArr; i++) {
        end = end + size;
        newArr.push(arr.slice(start, end));
        start = start + size;
    }
    return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

//11. Slasher Flick.
//Task:
//Return the remaining elements of an array after chopping off n elements from the head.

function slasher(arr, howMany) {
    var newArr = [];
    newArr = arr.slice(howMany);
    return newArr;
}

slasher([1, 2, 3], 2);

//12. Mutations.
//Task:
//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
//For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
//The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
//Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {
    var temp;
    for (var j = 0; j < arr[1].length; j++) {
        var res = arr[0].toLowerCase().indexOf(arr[1][j].toLowerCase());
        if (res < 0) {
            return false;
        }
    }
    return true;
}

mutation(["hello", "hey"]);

//13. Falsy Bouncer .
//Task:
//Remove all falsy values from an array.
//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
    var filtered = arr.filter(Boolean);
    return filtered;
}

bouncer([7, "ate", "", false, 9]);

//14. Seek and Destroy.
//Task:
//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
//Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
    var filtered;
    var args = Array.prototype.slice.call(arguments);

    function destroy(value) {
        var filt;
        for (var i = 1; i < args.length; i++) {
            filt = value != args[i];
            if (filt === false) {
                return filt;
            }
        }
        return filt;
    }
    filtered = arr.filter(destroy);
    return filtered;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//15. Where do I belong.
//Task:
//Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
//The returned value should be a number.

function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort(function(a, b) {
        return a - b;
    });
    return arr.indexOf(num);
}

getIndexToIns([40, 60], 50);

//16. Caesars Cipher.
//Task:
//One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
//In a shift cipher the meanings of the letters are shifted by some set amount.

function rot13(str) { // LBH QVQ VG!

    function getcharCodeArr(val) {
        var charCodeArr = [];
        var temp = [];
        for (var i = 0; i < val.length; i++) {
            temp.push(val[i].charCodeAt());
        }
        for (var j = 0; j < temp.length; j++) {
            if (temp[j] <= 64) {
                var t0 = temp[j];
                charCodeArr.push(t0);
            } else if (temp[j] >= 78) {
                var t1 = temp[j] - 13;
                charCodeArr.push(t1);
            } else {
                var t2 = temp[j] + 13;
                charCodeArr.push(t2);
            }
        }
        return charCodeArr;
    }

    function getCharCodeToStr(val) {
        var strTemp = [];
        for (var i = 0; i < val.length; i++) {
            strTemp.push(String.fromCharCode(val[i]));
        }
        return strTemp;
    }
    var strArray = str.split(" ");
    var charCodeArr = strArray.map(getcharCodeArr);
    var charCodeToStr = charCodeArr.map(getCharCodeToStr);
    var firstJoin = charCodeToStr.map(function(val) {
        return val.join('');
    });
    Array(firstJoin);
    var result = firstJoin.join(' ');
    return result;
}

rot13("SERR PBQR PNZC");

//End Basic Algorithm Scripting Challenge.