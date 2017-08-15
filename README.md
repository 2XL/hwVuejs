
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
    
 - Runtime Sandbox
    Global Variables
        - that are whitelisted can't be used in expressions
        - the popular $ used in jQ can't be used in Vue expressions

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
v-once: Does not register watcher
<h2 v-once>{{ appName }}</h2>
```

 - Binding HTML
     Suggestion:
        never put html into your data! `they will be rendered as raw data`
     
     Usage:
     
```html
v-html: Updates the innerHTML property
 <h2 v-html="appName"></h2>
```
        
     Rules:
        Can't nest bindings
        Only bind to HTML you trust
  
 - Binding HTML Attr
     Suggestion:
        Designed to bind to HTML attrs
        
     Usage:
     
```html
v-bind: Bind data property values to HTML attrs
<img alt="Growler" v-bind:src="appLogo" style="height:36px;" />
or
<img alt="Growler" :src="appLogo" style="height:36px;" />
        
```

 - Binding to CSS Properties
     Suggestion:
        From a JS Object
            - Each property name must be the name of a CSS property
            - The value can be a property name or a static value
```html
<h2 v-bind:sytle="{ color:appColor }"> {{ appName }} </h2>
```

        From a JS Array
            - Binding to CSS property names with dashes (from `font-family` into `fontFamily`)
            
```html
<h2 v-bind:style="{
color: appColor,
fontFamily: appFontFamily,
margin: 0
}"></h2>

```   
            or
            
```html
<h2 v-bind:style="appStyle"></h2>
```
            or : the latest will override the previus setting
```html
<h2 v-bind:style="[appStyleA, appStyleB]"></h2> 

```

- Binding to CSS Classes 
     Suggestion: 
        define the css and lookup them with class tag
        
        
```html
<style>
    .classA {
        font-family: 'Verdana'
    }
    .classB {
        font-family: 'Arial'
    }
</style>
<h2 v-text="appName"
    v-bind:class="[classA, classB]"></h2>
```
        or
```html
<h2 v-text="appName"
            v-bind:class="{
            'classA': true,
            'classB': true}"></h2>
        
```
        
- Binding with JS expressions       
     An expression is a type of statement
     JS Statement: A line of code that produces a value
        
```js
var isLocal = location.host.includes('localhost');
```
        
```html
<h2 v-text="appName"
            v-bind:style="{
            color:isOnline? '#FF6A00' : '#000',
            'classB': true}"></h2>
            
```

  
     
== Acronyms

 - DOM: Document Object Model
 - CDN: Content Delivery Network
 - HTTP: 
 - POJO: Plain Old JavaScript Object
 
 
== Related Course:
  
 - https://github.com/ecofic/course-vue-getting-started