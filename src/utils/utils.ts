type RandomKey<T> = {
  [key: string]: T;
};

export const randomKey = (object: RandomKey<unknown>) => {
  var keys = Object.keys(object);
  return object[keys[(keys.length * Math.random()) << 0]];
};

export const randomArrayIdx = (arr: unknown[]) => {
  return arr[(arr.length * Math.random()) << 0];
};
