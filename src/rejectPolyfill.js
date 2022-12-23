const reject = (value) => {
  return new Promise((resolve, reject) => {
    reject(value);
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

reject(p1)
  .then((res) => console.log(res))
  .catch((err) => console.log("err=>", err));

reject(1)
  .then((res) => console.log(res))
  .catch((err) => console.log("err=>", err));
