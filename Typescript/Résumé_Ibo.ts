//Basic types

let id: number = 33; //All ints and not ints types 
let company: string = "ibo"; //Strings
let isPublished: boolean = false; //Booleans
let x: any = "We don't know !"; // Any type ! With knowing that it could be redefind.


//Tuple
let person: [number, string, boolean] = [2,"ali",true]; //Array that contains multiple types

//Tuple Array
let employees: [number, string] []; //Array that contains arrays that contain multiple types
employees = [
    [2, "Briac"],
    [4, "Soumaya"],
    [24, "ibo"],
    [23, "Yas"],
]

//To print the employees array decomment the code below!
/*
employees.forEach( employee => {
    console.log(employee);
})
*/

//Union
let twoTypes: string | number; //To declare a variable that can accept multiple tyes!
twoTypes = "Simplon";
twoTypes = 333.254;

//Enum 
enum directions {
    Up = "up",
    Down = "Down",
    Left = "-->",
    Right = "<--"
}
//To print a direction decomment this code ! 
//console.log(directions.Left)

//Objects

//Creation of the object
type User = {
    id: number,
    name: string
}
//Instanciation of the object
const user1: User ={
    id: 23,
    name: "Amanda"
}
const user2: User ={
    id: 20,
    name: "Charly"
}

// To make a list of users 

let users : User [] = [
    user1,
    user2,
    {
        id: 33,
        name: "Guillaume"
    }
    ,
    {
        id: 22,
        name: "Imen"
    }
];

// To print the list of users created decomment this line
/*
users.forEach( user => {
    console.log(user);
}) */



//Type Assertion  //Can take any variable and assign it with a diffrent type ?.
let agneau: any = "Agneau 1";
let animal = agneau as string; //or let animal = <string>agneau
let animal2 = agneau as any;
let animal3 = agneau as number; //It dosen't show any errors after dowing this !


//Functions 

function multip(numb1: number, numb2: number) : number {
    return numb1 * numb2;
}

function printer(toBePrinted : string) : void{
    console.log(toBePrinted);
}

//When the function is retruning nothing, no need to write Void
function withDefaultRetrunType( aValue: number, aValue2: string){
    console.log(aValue+aValue2);
}

function agneauPrinter(nomDagneau : string ) : string {
    console.log("The name of the agneau is : " + nomDagneau);
    return "Otherwise it'll show us an error ! ";
}

//Inerfaces

interface Mathy {
   (
       x: number,
       y: number
   ) : number;
}

//Methode created using the interface

const add: Mathy = (x: number, y: number) : number  => x+y;

const multiplay : Mathy = (x: number, y: number) : number => x*y;

//Calling the function created , you must decomment the code
// console.log(add(2,2));


//Classes

class Person {

    name: string
    age : number



    constructor(name: string, age: number ) {
        this.name = name;
        this.age = age;
    }

    //creating methodes
    getName() {
        return this.name;
    }
    setName( name : string){
        this.name = name;
    }
    getAge() {
        return this.age;
    }
    setAge(age : number){
        this.age = age;
    }

}

//Manipulation of the object created

const p1 = new Person("kev",22);
const p2 = new Person("abiba",23);
const p3 = new Person("kev",22);

//console.log(p1.getAge());

//Creating an array of people
let people : Person [] = [
    p1,
    p2,
    p3,
    new Person("Ben",22)
]

//To print the list of people !
/*
people.forEach(person => {
    console.log(person);
})*/

//Iheritance and  subclasses
class Workerr extends Person{
    name: string;
    age: number;
    workType : string;

    constructor(name:string, workType:string, age:number){
        super(name,age);
        this.name = name;
        this.workType = workType;
        this.age = age;
    }
}

