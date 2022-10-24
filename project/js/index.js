today=new Date();
//put month-1 of actual month
var event=new Date(today.getFullYear()+1, 02, 24);

var one_day=1000*60*60*24;
console.log(Math.ceil((event.getTime()-today.getTime())/(one_day))+
" days left");
