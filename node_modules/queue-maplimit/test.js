const QueueMapLimit = require("./index.js");

const queue = new QueueMapLimit(5);

const random = (start, end) =>
  Math.round(Math.random() * (end - start)) + start;

let taskLength = 10;
let taskIndex = 0;
while (taskLength--) {
  const arr = Array.from({ length: random(0, 10) }, () => taskIndex++);
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
    .catch((err) => {
      console.error("task has error ", arr);
    });
}
