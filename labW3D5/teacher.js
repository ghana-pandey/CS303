const Person = function() {};

Person.prototype.initialize = function(name, age){
    this.name = name;
    this.age = age;
};

Person.prototype.describe = function(){
    return this.name + ", " + this.age + " years old.";
};

const Student = function() {};
Student.prototype = new Person();

Student.prototype.learn = function(subject){
    return (this.name + " just learned " + subject);
};

const john = new Student();

john.initialize("John", 25);
console.log(john.learn("Inheritance"));

const Teacher = function() {};
Teacher.prototype = new Person();

Teacher.prototype.teach = function(subject){
    return (this.name + " is now teaching " + subject);
};

let him = new Teacher();

him.initialize("Bob", 45);
console.log(him.teach("Physics"));