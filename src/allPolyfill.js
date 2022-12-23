const all = (arr) => {
  return new Promise((resolve, reject) => {
    let result = [];
    let count = 0;
    arr.forEach((item, index) => {
      item
        .then((res) => {
          count += 1;
          result[index] = res;
          if (count === arr.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
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
const p2 = pm("2st", 5000, 1);
const p3 = pm("3st", 1000, 1);
const temp = [p2, p1, p3];

all(temp)
  .then((res) => console.log(res))
  .catch((err) => console.log("err=>", err));
