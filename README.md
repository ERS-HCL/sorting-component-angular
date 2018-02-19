# Sorting Table And List With Angular and BootStrap
Sorting component is a simple component used to sort tables and list which was designed in angular and bootstrap.
<p><img src="/image/normal.png"></p> 

## Sorting Table
If you want to sort your table ,you have to add this function "sortData(n,ID)" to your table column header based 
on which column you want to sort,where "n" is Event and "ID" is table id.

If you click for the first time on column header,it will sort in ascending order.
<p><img src="/image/ascending.png"></p>
If you click for the second time on column header,it will sort in descending order.
<p><img src="/image/descending.png"></p>

## Sorting List
If you want to sort your orderedLists or UnorderedLists,create a button and add function "sortData(n,ID)" to your button,
where "n" is Event and "ID" is list id.

If you click for the first time on button,it will sort in ascending order.
<p><img src="/image/listasc.png"></p> 
If you click for the second time on button,it will sort in descending order.
<p><img src="/image/listdesc.png"></p> 

## Using the complete angular project
Download the src folder and install the required packages and run the application.

### Installing

```
> npm install
```

### Run server

```
> ng serve
``` 

## Test link
https://stackblitz.com/edit/angular-gz7rym-rcdfh6?file=src%2Fapp%2Fsort%2Fsort.component.ts


