const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type TupleToObject<TypeOfArray extends readonly string[]> = {
  [index in TypeOfArray[number]]: index;
};

type result = TupleToObject<typeof tuple>;
// expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
