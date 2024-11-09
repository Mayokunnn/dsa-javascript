describe('insertionSort', () => {
  it('should handle empty arrays', () => {
    expect(insertionSort([])).toEqual([]);
  });

  it('should handle arrays with one element', () => {
    expect(insertionSort([1])).toEqual([1]);
  });

  it('should sort arrays with multiple elements', () => {
    expect(insertionSort([5, 2, 8, 1, 9, 4])).toEqual([1, 2, 4, 5, 8, 9]);
  });

  it('should handle arrays with duplicate elements', () => {
    expect(insertionSort([5, 2, 8, 1, 9, 4, 2, 8])).toEqual([1, 2, 2, 4, 5, 8, 8, 9]);
  });

  it('should handle negative numbers', () => {
    expect(insertionSort([-5, -2, -8, -1, -9, -4])).toEqual([-9, -8, -5, -4, -2, -1]);
  });

  it('should handle arrays with mixed positive and negative numbers', () => {
    expect(insertionSort([-5, 2, -8, 1, 9, -4])).toEqual([-8, -5, -4, 1, 2, 9]);
  });

  it('should handle already sorted arrays', () => {
    expect(insertionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });


  it('should handle reverse sorted arrays', () => {
    expect(insertionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });
});