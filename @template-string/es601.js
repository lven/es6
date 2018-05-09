/**
 * Created by lven on 2018/5/9.
 */
$("#result").append(`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`);
//用反引号（\）来标识起始，用${}`来引用变量，而且所有的空格和缩进都会被保留在输出之中，是不是非常爽？！