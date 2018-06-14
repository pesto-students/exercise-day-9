// Fibonacci Number
// In mathematics, the Fibonacci numbers are the numbers in the following integer
// sequence, called the Fibonacci sequence, and characterized by the fact that every
// number after the first two is the sum of the two preceding ones:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

// Q1. Calculate fibonacci number at specific position using Dynamic Programming approach.
function fibonacci(position) {
  let a = 1;
  let b = 1;
  let c = a + b;
  let temp = position;
  if (position === 1) return a;
  else if (position === 2) return b;

  while (temp >= 4) {
    a = b;
    b = c;
    c = a + b;
    temp -= 1;
  }

  return c;
}

// Q2. Compute the least common multiple
function gcd(a, b) {
  let x = a;
  let y = b;
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
}

function leastCommonMultiple(a, b) {
  if (!a || !b) return 0;
  return Math.abs((a * b) / gcd(a, b));
}

// Q3. Integer Partition
// In number theory and combinatorics, a partition of a positive integer n, also called an
// integer partition, is a way of writing n as a sum of positive integers.

// Two sums that differ only in the order of their summands are considered the same partition.
// For example, 4 can be partitioned in five distinct ways:

// 4
// 3 + 1
// 2 + 2
// 2 + 1 + 1
// 1 + 1 + 1 + 1
// The order-dependent composition 1 + 3 is the same partition as 3 + 1, while the two distinct
// compositions 1 + 2 + 1 and 1 + 1 + 2 represent the same partition 2 + 1 + 1.

// Young diagrams associated to the partitions of the positive integers 1 through 8. They are
// arranged so that images under the reflection about the main diagonal of the square are conjugate
// partitions.
// Find the number of partitions possible

function integerPartition() {

}

// Longest common subsequence problem
// The longest common subsequence (LCS) problem is the problem of finding the longest
// subsequence common to all sequences in a set of sequences (often just two sequences).
// It differs from the longest common substring problem: unlike substrings, subsequences
// are not required to occupy consecutive positions within the original sequences.

// Example
// LCS for input Sequences ABCDGH and AEDFHR is ADH of length 3.
// LCS for input Sequences AGGTAB and GXTXAYB is GTAB of length 4.

function longestCommonSubsequnce(set1, set2) {
  return set1 + set2;
}

module.exports = {
  fibonacci,
  leastCommonMultiple,
  integerPartition,
  longestCommonSubsequnce,
};
