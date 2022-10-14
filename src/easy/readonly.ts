interface Todo {
  title: string;
  description: string;
}

// 下みたいになればいい
// const readonlyTodo: Readonly<Todo> = {
//   title: "Hey",
//   description: "foobar",
// };
// readonlyTodo.title = "hoge";
// readonlyTodo.description = "hoge";

type MyReadonly<ObjectsParam> = {
  readonly [key in keyof ObjectsParam]: ObjectsParam[key];
};

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo";
