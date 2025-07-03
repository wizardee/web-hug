export function replaceAt<T>(target: T, array: Array<T>, index: number) {
  array.splice(index, 1, target);
  return [...array]
}

export function removeElementAndReturnArray<T>(target: T, array: Array<T>) {
  const index = array.findIndex((e: T) => e === target);
  array.splice(index, 1);
  return array;
}