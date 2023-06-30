# queueMapLimit

a queue concurrency limit base on Promise.

## install

```bash
npm i queue-maplimit --save
//or
yarn add queue-maplimit
```

## usage

```js
const QueueMapLimit = require("queue-maplimit");
const queue = new QueueMapLimit(limit);
queue.add(arr, iteratee); //  will return a Promise
```

### Parameters:
Name|	Type|	Description
---| ---| ----
arr |Array | A collection to iterate over.
limit	|number	| The maximum number of async operations at a time.
iteratee|	AsyncFunction| An async function to apply to each item in arr. The iteratee should complete with the transformed item. 
return|	Promise| Promise.then(result => {});
## example

```js
const QueueMapLimit = require("queue-maplimit");
const queue = new QueueMapLimit(5);
queue
  .add(
    arr,
    value =>
      new Promise((resolve, reject) => {
        console.log("begin", value);
        setTimeout(() => {
          console.log("end", value);
          random(0, 10) > 9 ? reject(undefined) : resolve(value);
        }, random(1, 50));
      })
  )
  .then(result => {
    console.log("task done ", result);
  })
  .catch(err => {
    console.error("task has error ", arr);
  });
```

## test

test.js
