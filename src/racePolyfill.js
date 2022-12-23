const race = (arr) => {
  return new Promise((resolve, reject) => {
    arr.forEach((item) => {
      item
        .then((res) => {
          resolve(res);
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
const p2 = pm("2st", 2000, 1);
const p3 = pm("3st", 1000, 0);
const temp = [p1, p2, p3];

race(temp)
  .then((res) => console.log(res))
  .catch((err) => console.log("err=>", err));
