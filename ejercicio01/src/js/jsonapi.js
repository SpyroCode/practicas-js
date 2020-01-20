'use strict';

let usuarios=[];

fetch('https://jsonplaceholder.typicode.com/users')
.then(data->data.json())
.then(data ->{
    usuarios=data;
})
