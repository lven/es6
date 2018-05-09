/**
 * Created by lven on 2018/5/9.
 */
/*jshint esversion: 6 */
import animal, { say, type } from './content'
let says = say()
console.log(`The ${type} says ${says} to ${animal}`);