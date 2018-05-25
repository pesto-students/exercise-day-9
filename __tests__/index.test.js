const {
  fibonacci,
  leastCommonMultiple,
  integerPartition,
  longestCommonSubsequnce,
} = require('../src/index');

describe('fibonacci', () => {
  it('should calculate fibonacci correctly', () => {
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(6)).toBe(8);
    expect(fibonacci(7)).toBe(13);
    expect(fibonacci(8)).toBe(21);
    expect(fibonacci(20)).toBe(6765);
  });
});

describe('leastCommonMultiple', () => {
  it('should find least common multiple', () => {
    expect(leastCommonMultiple(0, 0)).toBe(0);
    expect(leastCommonMultiple(1, 0)).toBe(0);
    expect(leastCommonMultiple(0, 1)).toBe(0);
    expect(leastCommonMultiple(4, 6)).toBe(12);
    expect(leastCommonMultiple(6, 21)).toBe(42);
    expect(leastCommonMultiple(7, 2)).toBe(14);
    expect(leastCommonMultiple(3, 5)).toBe(15);
    expect(leastCommonMultiple(7, 3)).toBe(21);
    expect(leastCommonMultiple(1000000, 2)).toBe(1000000);
    expect(leastCommonMultiple(-9, -18)).toBe(18);
    expect(leastCommonMultiple(-7, -9)).toBe(63);
    expect(leastCommonMultiple(-7, 9)).toBe(63);
  });
});

describe('integerPartition', () => {
  it('should partition the number', () => {
    expect(integerPartition(1)).toBe(1);
    expect(integerPartition(2)).toBe(2);
    expect(integerPartition(3)).toBe(3);
    expect(integerPartition(4)).toBe(5);
    expect(integerPartition(8)).toBe(22);
  });
});

describe('longestCommonSubsequnce', () => {
  it('should find longest common subsequence for two strings', () => {
    expect(longestCommonSubsequnce([''], [''])).toEqual(['']);

    expect(longestCommonSubsequnce([''], ['A', 'B', 'C'])).toEqual(['']);

    expect(longestCommonSubsequnce(['A', 'B', 'C'], [''])).toEqual(['']);

    expect(longestCommonSubsequnce(
      ['A', 'B', 'C'],
      ['D', 'E', 'F', 'G'],
    )).toEqual(['']);

    expect(longestCommonSubsequnce(
      ['A', 'B', 'C', 'D', 'G', 'H'],
      ['A', 'E', 'D', 'F', 'H', 'R'],
    )).toEqual(['A', 'D', 'H']);

    expect(longestCommonSubsequnce(
      ['A', 'G', 'G', 'T', 'A', 'B'],
      ['G', 'X', 'T', 'X', 'A', 'Y', 'B'],
    )).toEqual(['G', 'T', 'A', 'B']);

    expect(longestCommonSubsequnce(
      ['A', 'B', 'C', 'D', 'A', 'F'],
      ['A', 'C', 'B', 'C', 'F'],
    )).toEqual(['A', 'B', 'C', 'F']);
  });
});
