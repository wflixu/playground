function greeter (person: string):string {
    return "Hello, " + person;
}

// tslint:disable-next-line:typedef
let user = "Jane User";

document.body.innerHTML = greeter(user);