const consecutiveSubstrings = require('../consecutive_substrings');

test('returns an empty array when the input string is empty', () => {
  expect(consecutiveSubstrings('').length).toBe(0);
});

test('returns an array containing one string when the input is one character', () => {
  expect(consecutiveSubstrings('a')).toEqual(['a']);
});
    
test('can handle many letters', () => {
  expect(consecutiveSubstrings('ab')).toEqual(['a', 'ab', 'b']);
  expect(consecutiveSubstrings('abc')).toEqual(['a', 'ab', 'abc', 'b', 'bc', 'c']);
});

//my tests:
describe('consecutiveSubstrings', () => {
  test('returns all consecutive substrings for "abc"', () => {
    const result = consecutiveSubstrings('abc');
    expect(result).toEqual(['a', 'ab', 'abc', 'b', 'bc', 'c']);
  });

  test('returns single character for single-letter string', () => {
    const result = consecutiveSubstrings('a');
    expect(result).toEqual(['a']);
  });

  test('returns all substrings for two letters', () => {
    const result = consecutiveSubstrings('ab');
    expect(result).toEqual(['a', 'ab', 'b']);
  });

  test('returns empty array for empty string', () => {
    const result = consecutiveSubstrings('');
    expect(result).toEqual([]);
  });

  test('handles repeated characters correctly', () => {
    const result = consecutiveSubstrings('aa');
    expect(result).toEqual(['a', 'aa', 'a']);
  });

  test('works with longer strings', () => {
    const result = consecutiveSubstrings('abcd');
    expect(result).toEqual([
      'a', 'ab', 'abc', 'abcd',
      'b', 'bc', 'bcd',
      'c', 'cd',
      'd'
    ]);
  });
});
