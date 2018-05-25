const {
  hammingDistance,
  knuthMorrisPratt,
  longestCommonSubstring,
  binarySearch,
  trialDivision,
} = require('../src/index');

describe('hammingDistance', () => {
  it('should throw an error when trying to compare the strings of different lengths', () => {
    const compareStringsOfDifferentLength = () => {
      hammingDistance('a', 'aa');
    };

    expect(compareStringsOfDifferentLength).toThrowError();
  });

  it('should calculate difference between two strings', () => {
    expect(hammingDistance('a', 'a')).toBe(0);
    expect(hammingDistance('a', 'b')).toBe(1);
    expect(hammingDistance('abc', 'add')).toBe(2);
    expect(hammingDistance('karolin', 'kathrin')).toBe(3);
    expect(hammingDistance('karolin', 'kerstin')).toBe(3);
    expect(hammingDistance('1011101', '1001001')).toBe(2);
    expect(hammingDistance('2173896', '2233796')).toBe(3);
  });
});

describe('knuthMorrisPratt', () => {
  it('should find word position in given text', () => {
    expect(knuthMorrisPratt('abcbcglx', 'abca')).toBe(-1);
    expect(knuthMorrisPratt('abcbcglx', 'bcgl')).toBe(3);
    expect(knuthMorrisPratt('abcxabcdabxabcdabcdabcy', 'abcdabcy')).toBe(15);
    expect(knuthMorrisPratt('abcxabcdabxabcdabcdabcy', 'abcdabca')).toBe(-1);
    expect(knuthMorrisPratt('abcxabcdabxaabcdabcabcdabcdabcy', 'abcdabca')).toBe(12);
    expect(knuthMorrisPratt('abcxabcdabxaabaabaaaabcdabcdabcy', 'aabaabaaa')).toBe(11);
  });
});

describe('longestCommonSubstring', () => {
  it('should find longest common substring between two strings', () => {
    expect(longestCommonSubstring('', '')).toBe('');
    expect(longestCommonSubstring('ABC', '')).toBe('');
    expect(longestCommonSubstring('', 'ABC')).toBe('');
    expect(longestCommonSubstring('ABABC', 'BABCA')).toBe('BABC');
    expect(longestCommonSubstring('BABCA', 'ABCBA')).toBe('ABC');
  });
});

describe('binarySearch', () => {
  it('should search number in sorted array', () => {
    expect(binarySearch([], 1)).toBe(-1);
    expect(binarySearch([1], 1)).toBe(0);
    expect(binarySearch([1, 2], 1)).toBe(0);
    expect(binarySearch([1, 2], 2)).toBe(1);
    expect(binarySearch([1, 5, 10, 12], 1)).toBe(0);
    expect(binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 17)).toBe(5);
    expect(binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 1)).toBe(0);
    expect(binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 100)).toBe(7);
    expect(binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 0)).toBe(-1);
  });

  it('should search object in sorted array', () => {
    const sortedArrayOfObjects = [
      { key: 1, value: 'value1' },
      { key: 2, value: 'value2' },
      { key: 3, value: 'value3' },
    ];

    const comparator = (a, b) => {
      if (a.key === b.key) return 0;
      return a.key < b.key ? -1 : 1;
    };

    expect(binarySearch([], { key: 1 }, comparator)).toBe(-1);
    expect(binarySearch(sortedArrayOfObjects, { key: 4 }, comparator)).toBe(-1);
    expect(binarySearch(sortedArrayOfObjects, { key: 1 }, comparator)).toBe(0);
    expect(binarySearch(sortedArrayOfObjects, { key: 2 }, comparator)).toBe(1);
    expect(binarySearch(sortedArrayOfObjects, { key: 3 }, comparator)).toBe(2);
  });
});

function primalityTest(testFunction) {
  expect(testFunction(1)).toBeFalsy();
  expect(testFunction(2)).toBeTruthy();
  expect(testFunction(3)).toBeTruthy();
  expect(testFunction(5)).toBeTruthy();
  expect(testFunction(11)).toBeTruthy();
  expect(testFunction(191)).toBeTruthy();
  expect(testFunction(191)).toBeTruthy();
  expect(testFunction(199)).toBeTruthy();

  expect(testFunction(-1)).toBeFalsy();
  expect(testFunction(0)).toBeFalsy();
  expect(testFunction(4)).toBeFalsy();
  expect(testFunction(6)).toBeFalsy();
  expect(testFunction(12)).toBeFalsy();
  expect(testFunction(14)).toBeFalsy();
  expect(testFunction(25)).toBeFalsy();
  expect(testFunction(192)).toBeFalsy();
  expect(testFunction(200)).toBeFalsy();
  expect(testFunction(400)).toBeFalsy();
}

describe('trialDivision', () => {
  it('should detect prime numbers', () => {
    primalityTest(trialDivision);
  });
});
