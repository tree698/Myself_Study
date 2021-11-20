{
  // type Check2 = string ? boolean : number;
  type Check<T> = T extends string ? boolean : number;
  type Type = Check<string>; // boolean
  const test: Type = true;

  type TypeName<T> = T extends string
    ? 'string'
    : T extends number
    ? 'number'
    : T extends boolean
    ? 'boolean'
    : T extends undefined
    ? 'undefined'
    : T extends Function
    ? 'function'
    : 'object';

  type T0 = TypeName<string>; //'string'
  const test2: T0 = 'string';

  type T1 = TypeName<'a'>; //'string'
  const test3: T1 = 'string';

  type T2 = TypeName<() => void>; //'function'
  const test4: T2 = 'function';
}
