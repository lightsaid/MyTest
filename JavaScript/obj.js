
// defineProerty
var obj = {
    bookName:'JavaScript高级程序设计3',
    price:88.00
}

Object.defineProperty(obj, 'bookName', {
    get:function(){
        console.log('getter');
    },
    set:function(){
        console.log('setter');
    }
})
obj.bookName = 'JavaScript';



// 工厂模式
var person = function(name){
    var o = new Object();
    o.name = name;
    o.sayName = function(){
        console.log(this.name);
    }
    return o;
}
var p = person('Ly柒');
p.sayName();


// 构造函数模式
function Cat(name,color){
    this.name = name;
    this.color = color;
    this.sayColor = function(){
        console.log(this.color);
    }
}
var c = new Cat('小花猫','yellow');
c.sayColor();


// 原型模式 prototype
var Pig = function(name){
    this.name = name;
}
Pig.prototype.color = 'white';
Pig.prototype.sayName = function(){
    console.log(this.name);
}
var pig1 = new Pig('pink1');
var pig2 = new Pig('pink2');
pig1.sayName(); 
pig2.sayName(); 

// hasOwnProperty 检查是否是私有属性
console.log(pig1.hasOwnProperty('color'));  // false  
console.log(pig1.hasOwnProperty('name'));  // true

// 模拟hasOwnPublicPerty 检查是否是共有属性
Object.prototype.hasOwnPublicProperty = function(name){
    return !this.hasOwnProperty(name) && (name in this);
}
console.log(pig1.hasOwnPublicProperty('color'));  // true  
console.log(pig1.hasOwnPublicProperty('name'));  // false