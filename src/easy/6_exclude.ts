
// 間違った自分の回答
// type MyExclude<AllType extends string | number | symbol, ExcludeType extends AllType> =
// {[CurrentType in ExcludeType ] ? never : AllType[CurrentType]};

type MyExclude<AllType, RemoveType> = AllType extends RemoveType ? never : AllType


import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
