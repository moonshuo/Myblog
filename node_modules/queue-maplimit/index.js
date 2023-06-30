class QueueMapLimit {
  constructor(concurrency) {
    this.running = 0;
    this.task = [];
    this.concurrency = concurrency;
  }
  add(arr, fn) {
    const self = this;
    const length = arr.length;
    const id = Symbol("#task");
    return new Promise((resolve, reject) => {
      var completed = 0;
      var started = 0;
      var results = new Array(length);

      if (length === 0) { return resolve(results); } // no task, resolve immediately

      self.task.push(id); // push to queue list

      (function refill() {
        if (completed >= length) { // when all completed, resolve.
          return resolve(results);
        }

        if (id === self.task[0]) { // if turn to this task, then begin
          while (self.running < self.concurrency && started < length) {
            self.running++;
            started++;

            (function (index) {
              var cur = arr[index];
              fn
                .call(cur, cur, index, arr)
                .then(function (result) {
                  self.running--;
                  completed++;
                  results[index] = result;

                  refill();
                })
                .catch(err => {
                  self.running--;
                  completed++; // must be increase even err.

                  reject(err);
                });
            })(started - 1);
          }
          if (self.running >= self.concurrency && started < length) { // if up to concurrency limit, hold on
            setTimeout(refill, 0);
          }
          if (started >= length) { // async task all processing, it is time to turn to next task.
            self.task.shift();
          }
        } else { // if doesnot turn to this task, then hold on
          setTimeout(refill, 0);
        }
      })();
    });
  }
}

module.exports = QueueMapLimit;
