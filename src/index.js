/*
 * Q1. (*)
 * Hamming Distance
 * The Hamming distance between two strings of equal length is the number
 * of positions at which the corresponding symbols are different. In other
 * words, it measures the minimum number of substitutions required to change
 * one string into the other, or the minimum number of errors that could have
 * transformed one string into the other. In a more general context, the Hamming
 * distance is one of several string metrics for measuring the edit distance
 * between two sequences.
*/

function hammingDistance(a, b) {
  if (a.length !== b.length) {
    throw new Error();
  }

  const diff = [...a].reduce((result, char, index) => {
    if (char !== b[index]) {
      return result + 1;
    }
    return result;
  }, 0);

  return diff;
}

/*
 * Q2.
 * Knuth–Morris–Pratt Algorithm
 * The Knuth–Morris–Pratt string searching algorithm (or KMP algorithm) searches
 * for occurrences of a "word" W within a main "text string" T by employing the
 * observation that when a mismatch occurs, the word itself embodies sufficient
 * information to determine where the next match could begin, thus bypassing re-examination
 * of previously matched characters.
*/

function knuthMorrisPratt(a, b) {
  return a.indexOf(b);
}

/* Q3.Longest Common Substring Problem
 * The longest common substring problem is to find the longest string (or strings)
 * that is a substring (or are substrings) of two or more strings.
 *
 * Example
 * The longest common substring of the strings ABABC, BABCA and ABCBA is string
 * ABC of length 3. Other common substrings are A, AB, B, BA, BC and C.
*/

function longestCommonSubstring(s1, s2) {
  return s1 + s2;
}

/*
* Q4. Binary Search
* In computer science, binary search, also known as half-interval search, logarithmic
* search, or binary chop, is a search algorithm that finds the position of a target value
* within a sorted array. Binary search compares the target value to the middle element of
* the array; if they are unequal, the half in which the target cannot lie is eliminated and
* the search continues on the remaining half until it is successful. If the search ends with
* the remaining half being empty, the target is not in the array.
*
*/

function binarySearch(container, queryContainer, comparator) {
  if (typeof queryContainer !== 'object') {
    return container.indexOf(queryContainer);
  }

  let returnedNumber = -1;
  for (let index = 0; index < container.length; index += 1) {
    const obj = container[index];
    if (!comparator(obj, queryContainer)) {
      returnedNumber = index;
      break;
    }
  }
  return returnedNumber;
}

/*
* Q5.
* Primality Test
* A primality test is an algorithm for determining whether an input number is prime.
* Among other fields of mathematics, it is used for cryptography. Unlike integer factorization,
* primality tests do not generally give prime factors, only stating whether the input number
* is prime or not. Factorization is thought to be a computationally difficult problem, whereas
* primality testing is comparatively easy (its running time is polynomial in the size of the input).
*/

function trialDivision(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
}

module.exports = {
  hammingDistance,
  knuthMorrisPratt,
  longestCommonSubstring,
  binarySearch,
  trialDivision,
};
