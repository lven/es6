/**
 * Created by lven on 2018/5/9.
 */
let a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6](); // 6