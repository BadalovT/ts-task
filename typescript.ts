type User = {
  name: string,
  age: number,
  banned: boolean,
  status: "online" | "invisible" | "away" | "offline" | "dnd"
}

type Example = {
  creation_date: string; //datestring
  id: `${string}-${string}-${string}-${string}` //uuid
  like_count: number,
  author: User
}



/**
 * The following function has been implemented naively, with the widest types
 * The input params don't have any intellisense/autocomplete, and the function allows invalid imputs
 * Improve the function's type signature. Points are awarded for:
 * - autocompletion
 * - narrowness of types
 * - correctness of types and hence how good the build-time guarantees are
 * - readability
 * - extendability of relevant types
 */

type SetValueKey = "nonexistent" | "like_count"; // Define the valid keys for setValue

type SetValue<T extends SetValueKey> = T extends "nonexistent" ? any :
  T extends "like_count" ? number : never; // Define the value type based on the key

function setValue<T extends SetValueKey>(key: T, value: SetValue<T>): void {
  console.log(`Set ${key} to ${value}`);
}

// Test cases
setValue("nonexistent", 1231); // Allowed
setValue("like_count", 123); // Allowed
setValue("nonexistent", "morbillion");








/**
 * The following function should receive a list of allowed states and the initial state
 * Yet the current implementation doesn't check if the initial state is one of the allowed states
 * 
 * This is a bonus question, and you don't need to successfully complete it, but points will be made
 * for your approach to solving this problem, even if you don't succeed. While it is possible, solving it is not trivial
 * in current versions of Typescript, but TS has added a utility type that trivially solves it on the day of making this excercize 
 */

function bonus<T extends string>(allowed_states: Array<T>, initial: T): void {
  if (!allowed_states.includes(initial)) {
    console.error(`Invalid initial state: ${initial}`);
  }
}


bonus(["foo","bar"],"invalid")