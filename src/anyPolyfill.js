const any = (arr) => {
  return new Promise((resolve, reject) => {
    let error = [];
    let count = 0;
    arr.forEach((item, index) => {
      item
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          count += 1;
          error[index] = err;
          if (count === arr.length) {
            reject(error);
          }
        });
    });
  });
};

const pm = (name, time, r) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (r) {
        resolve(name);
      } else {
        reject(name);
      }
    }, time);
  });
};
const p1 = pm("1st", 3000, 1);
const p2 = pm("2st", 3000, 1);
const p3 = pm("3st", 1000, 1);
const temp = [p2, p1, p3];

any(temp)
  .then((res) => console.log(res))
  .catch((err) => console.log("err=>", err));
