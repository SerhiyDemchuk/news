export function areObjectsEqual<T extends Record<string, unknown>>(
  ...objects: T[]
): boolean {
  // Get the keys of the first object
  const keys = Object.keys(objects[0]);

  // Iterate over the keys
  for (const key of keys) {
    // Get the value of the first object for this key
    const value = objects[0][key];

    // Iterate over the remaining objects
    for (let i = 1; i < objects.length; i++) {
      // If this object doesn't have a matching key or value, the objects are not equal
      if (!objects[i].hasOwnProperty(key) || objects[i][key] !== value) {
        return false;
      }
    }
  }
  // If we got here, all objects are equal
  return true;
}
