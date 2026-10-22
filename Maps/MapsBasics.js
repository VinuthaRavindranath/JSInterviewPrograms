
// Example 1: map() is used to create a new array by transforming every element of an existing array.
const numbers = [1, 2, 3, 4];

const doubled = numbers.map((num) => {
    return num * 2;
});

console.log("Example 1 - doubled numbers:", doubled);

console.log("----------------------------------------------------------")

// Example 2: map() with index — building a labeled array from the original values.
const fruits = ["Apple", "Banana", "Mango"];

const result = fruits.map((fruit, index) => {
    return `${index}: ${fruit}`;
});

console.log("Example 2 - fruits with index:", result);

console.log("----------------------------------------------------------")

// Example 3: map() on an array of objects — pulling out one field from each object.
const users = [
    { name: "John", age: 25 },
    { name: "Sara", age: 30 },
    { name: "Mike", age: 28 }
];

const names = users.map(user => user.name);

console.log("Example 3 - extracted names:", names);

console.log("----------------------------------------------------------")

// Example 4: JavaScript Map — a key/value store where you fetch a value using its key.
const users1 = new Map();

users1.set("name", "John");
users1.set("age", 25);

console.log("Example 4 - get 'name' from Map:", users1.get("name")); // John
console.log("Example 4 - get 'age' from Map:", users1.get("age"));   // 25

console.log("----------------------------------------------------------")

// Example 5: Searching a Map by value — loop through entries and check the value.
const users2 = new Map([
    ["u1", "John"],
    ["u2", "Sara"],
    ["u3", "Mike"]
]);

for (const [key, value] of users2) {
    if (value === "Sara") {
        console.log("Example 5 - key found for value 'Sara':", key); // u2
    }
}

console.log("----------------------------------------------------------")

// Example 6: size, has(), delete() — Map's basic housekeeping methods.
const scores = new Map([
    ["math", 90],
    ["science", 85]
]);

console.log("Example 6 - Map size:", scores.size);                    // 2
console.log("Example 6 - has 'math':", scores.has("math"));           // true
console.log("Example 6 - has 'english':", scores.has("english"));     // false

scores.delete("science");
console.log("Example 6 - Map after deleting 'science':", scores);     // Map(1) { 'math' => 90 }

console.log("----------------------------------------------------------")

// Example 7: keys(), values(), entries() — Map gives you iterators for each part.
const capitals = new Map([
    ["India", "Delhi"],
    ["Japan", "Tokyo"],
    ["France", "Paris"]
]);

console.log("Example 7 - all keys:", [...capitals.keys()]);       // ['India', 'Japan', 'France']
console.log("Example 7 - all values:", [...capitals.values()]);   // ['Delhi', 'Tokyo', 'Paris']
console.log("Example 7 - all entries:", [...capitals.entries()]); // [['India','Delhi'], ['Japan','Tokyo'], ['France','Paris']]

console.log("----------------------------------------------------------")

// Example 8: forEach on a Map — iterate over every key/value pair.
capitals.forEach((value, key) => {
    console.log(`Example 8 - ${key} -> ${value}`);
});

console.log("----------------------------------------------------------")

// Example 9: Any type can be a key in a Map — not just strings (unlike plain objects).
const objKey = { id: 1 };
const funcKey = () => {};

const mixedMap = new Map();
mixedMap.set(objKey, "this key is an object");
mixedMap.set(funcKey, "this key is a function");
mixedMap.set(NaN, "even NaN works as a key");

console.log("Example 9 - value for object key:", mixedMap.get(objKey));   // this key is an object
console.log("Example 9 - value for function key:", mixedMap.get(funcKey)); // this key is a function
console.log("Example 9 - value for NaN key:", mixedMap.get(NaN));          // even NaN works as a key

console.log("----------------------------------------------------------")

// Example 10: Converting between Map <-> Array <-> Object.
const langMap = new Map([
    ["js", "JavaScript"],
    ["py", "Python"]
]);

// Map -> Array of entries
const langArray = [...langMap];
console.log("Example 10 - Map converted to array:", langArray); // [['js','JavaScript'], ['py','Python']]

// Map -> Object (only works cleanly if keys are strings/symbols)
const langObject = Object.fromEntries(langMap);
console.log("Example 10 - Map converted to object:", langObject); // { js: 'JavaScript', py: 'Python' }

// Object -> Map
const objToMap = new Map(Object.entries(langObject));
console.log("Example 10 - Object converted back to Map, get 'py':", objToMap.get("py")); // Python

console.log("----------------------------------------------------------")

// Example 11: Map vs Object — Map keeps insertion order and size is instant (no Object.keys().length).
const insertionOrderMap = new Map();
insertionOrderMap.set("z", 1);
insertionOrderMap.set("a", 2);
insertionOrderMap.set("m", 3);

console.log("Example 11 - keys in insertion order:", [...insertionOrderMap.keys()]); // ['z', 'a', 'm']
