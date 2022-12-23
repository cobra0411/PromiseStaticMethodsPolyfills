const resolve = (value) => {
  return new Promise((resolve, reject) => {
    resolve(value);
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
const p1 = pm("1st", 3000, 0);
const p2 = pm("2st", 5000, 1);
const p3 = pm("3st", 1000, 1);
const temp = [p2, p1, p3];

resolve(p1)
  .then((res) => console.log(res))
  .catch((err) => console.log("err=>", err));

resolve(1)
  .then((res) => console.log(res))
  .catch((err) => console.log("err=>", err));
