// Fibonacci Number
// In mathematics, the Fibonacci numbers are the numbers in the following integer
// sequence, called the Fibonacci sequence, and characterized by the fact that every
// number after the first two is the sum of the two preceding ones:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

// Q1. Calculate fibonacci number at specific position using Dynamic Programming approach.
function multiplyMatrix(mat, constMat) {
  const y = (mat[0][0] * constMat[0][1]) + (mat[0][1] * constMat[1][1]);
  const x = (mat[0][0] * constMat[0][0]) + (mat[0][1] * constMat[1][0]);
  const z = (mat[1][0] * constMat[0][0]) + (mat[1][1] * constMat[1][0]);
  const w = (mat[1][0] * constMat[0][1]) + (mat[1][1] * constMat[1][1]);
  const test = [[], []];
  test[0][0] = x;
  test[0][1] = y;
  test[1][0] = z;
  test[1][1] = w;
  return test;
}
function powerMatrix(mat, n) {
  let matConst = [[1, 1], [1, 0]];
  for (let i = 2; i <= n; i += 1) {
    matConst = multiplyMatrix(mat, matConst);
  }
  return matConst;
}
function fibonacci(position) {
  if (position === 0) {
    return 0;
  } else if (position === 1) {
    return 1;
  }
  const test = powerMatrix([[1, 1], [1, 0]], position - 1);
  return test[0][0];
}

// Q2. Compute the least common multiple

function leastCommonMultiple() {

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
