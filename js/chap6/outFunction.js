function outFunction() {
    
    function sayHello() {
        console.log("Hello World");
    }

    sayHello();

    function getGreeting() {
        return "Hello World!";
    }

    const message = getGreeting();
    console.log(message);
    
    console.log(getGreeting());
    console.log(getGreeting);
}