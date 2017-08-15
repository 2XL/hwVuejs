
# hwVuejs
 
== Overview
 
 Advantage:
    Licensing MIT
    Browser Support
    Run-time Performance
     
== Components
 
 - Templates: User Interface + Data && Business Logic
    Minimize the amount of code you have to write
 
 - Declarative Bindings: 
    Simplify development
    Remove the burden of managing the DOM
 
 - Virtual DOM
    

== Introduction    

 - Installing Vue.js
 - CDN: 
    * [unpkg@latest](https://unpkg.com/vue) 
    * [unpkg@2.2.5](https://unpkg.com/vue@2.2.5)
    * [unpkg@2.2.5/min](https://unpkg.com/vue@2.2.5/dist/vue.min.js)
    
```bash

Core library
Available via CDN 



```
 - HTTP client library:
   * [Axios](https://unpkg.com/axios/dist/axios.min.js)
   
 - Lifecycle of a View:
    
    1. new Vue()
    2. creation:
        a. beforeCreate
        b. Initialize State: Load properties, data and watchers
        c. created(signal)
    3. mounting: Compile Template: inserting into the DOM
        a. beforeMount
        b. Create VirtualDOM
        c. mounted(signal)
    4. updating: Listen for Data Changes: 
        a. beforeUpdate
        b. Re-Render Virtual DOM
        c. updated(signal)
    5. destroy:
        a. beforeDestroy
        b. TearDown VirtualDOM
        c. destroy(signal)
           
    each of them comes with two hooks, just like the concept of resty/nginx
     `before`/stage/`after`
  
 - Templates:
    Created with HTML
    HTML spec compliant
    Defining template DATA
    Binding content to a template
    Using JS expressions
     
 - Naming Conventions:
    
    1. Letter, Digits, Dollar Signs and Underscores
    2. Start with a letter
    3. Case-sensitive
    4. Reserved words cannot be used
 
 - Property Values
    
    Native Raw Allowed:
        str, int, date, list
    Not Native Objects
        Number
        String
        Date
        Array
 
 - Binding Text
    Semantic syntax
        Use double curly braces {{ ... }} Often reffered as mustaches
        ```html
        
        <h2>Welcome to {{ appName } - {{ appVersion }}</h2> 
        
        ```
    Declarative syntax
        All baked-in directives begin with "v-"
        ```html
        v-text: Interpolation of property value as an HTML element's text
        <h2 v-text="appName"></h2>
        ```
     
    One-time bindings
        Improve performance on-time load, skip binding updating watcher
        ```html
        <h2 v-once>{{ appName }}</h2>
        ```
     
     
     
== Acronyms

 - DOM: Document Object Model
 - CDN: Content Delivery Network
 - HTTP: 
 - POJO: Plain Old JavaScript Object
 
 
== Related Course:
  
 - https://github.com/ecofic/course-vue-getting-started