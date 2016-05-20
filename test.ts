var test: number = 10;

var cars_brands: string[] = ['Ferrari', 'Aston Martin', 'Acura'];

var yes: boolean = true;

function total(x:number, y:number) {
    return x + y;
}


var firstname: string;
var lastname: string;
var fullname: string;

firstname = 'joe';
lastname = 'smith';

fullname = firstname + " " + lastname;

var x: string;
var y: number;
var a: string;

x = '1';
y = 2;
a = x + y

document.body.innerHTML += " " + a;

var pets: string[] = ["fido", "spot", "seeker"];
var myPets: string;

pets.forEach(function(concat){
	myPets = myPets + concat + ", ";
});

document.body.innerHTML = "My pets are " + " " + pets;

var e: void;