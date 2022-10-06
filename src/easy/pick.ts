import type { Equal, Expect } from "@type-challenges/utils";

// type hoge = {
//   name: string;
// };

// type KeyOfHoge = keyof hoge;  -> nameになる

// type MyPick<T, K extends keyof T> = {
//   [key in K]: T[key];
// };

type MyPick<ObjectParam, KeysOfObject extends keyof ObjectParam> = {
  [key in KeysOfObject]: ObjectParam[key];
};

type AnswerPick = MyPick<Todo, "title">;

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}
