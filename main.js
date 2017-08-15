

// dataProperty:
// At design time, represents the schema
// At run time, serves as the model




// Accessing data Property

console.log(growler.data.appName);
console.log(growler.appName);


// Loading a property

/*
// During creating Stage

0.
data: {
    appName: 'Growler'
}

1.
Object.defineProperty

2.
Getters/Setters
Change Notifications
Dependency Tracking

Rules:
#1
    you can only modify properties
    you can't add properties at runtime
    you can't remove properties at runtime
#2
    js objects are formatted differently
    workaround with vue-devtools

*/