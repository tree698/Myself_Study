{
  type Video = {
    title: string;
    year: number;
  };

  // optional
  // [P in keyof T] === for..in
  type Optional<T> = {
    [P in keyof T]?: T[P];
  };

  type VideoOptional = Optional<Video>;
  const videoOptional: VideoOptional = {
    title: 'downing sizing',
  };

  // readonly
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoReadOnly = ReadOnly<Video>;
  const videoReadOnly: VideoReadOnly = {
    title: 'family business',
    year: 2022,
  };

  // unable to modify
  videoReadOnly.title = 'King';

  // example
  type Nullable<T> = { [P in keyof T]: T[P] | null }; // T[P] | null
  const obj: Nullable<Video> = {
    title: null,
    year: 2022,
  };

  // example => until understand the below~
  type Proxy<T> = {
    get(): T;
    set(valeu: T): void;
  };

  type Proxify<T> = {
    [K in keyof T]: Proxy<T[K]>;
  };

  function proxify<T extends object>(o: T): Proxify<T> {
    const result = {} as Proxify<T>;
    for (let key in o) {
      let rawValue = o[key];
      result[key] = {
        get: () => rawValue,
        set: (value) => {
          rawValue = value;
        },
      };
    }
    return result;
  }

  let props = { rooms: 4 };
  let proxifiedProps = proxify(props);
  proxifiedProps.rooms.set(5);
  console.log(proxifiedProps.rooms.get()); // output 5
}
