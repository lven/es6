/**
 * Created by lven on 2018/5/9.
 */
/*jshint esversion: 6 */
import animal, * as content from './content'
let says = content.say()
console.log(`The ${content.type} says ${says} to ${animal}`);