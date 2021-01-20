import Actions from "@/app/electron-browser/redux/editorActions";
import { actionChannel } from "redux-saga/effects";

//currying
const f=a=>b=>c=>a+b+c;

console.log(f(1));
console.log(f(1)(2));
console.log(f(1)(2)(3));

//用途
// 延迟计算
// 参数复用
// 动态生成函数
// export function faction(a){
// 	import{dispitch} from store;
// 	import{faction} from Actions;
// 	return ()=>dispitch(faction(a));
// }jg3011

// call()、apply()、bind() 都是用来重定义 this 这个对象的！