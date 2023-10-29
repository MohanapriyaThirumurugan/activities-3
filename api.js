// 1)  how to compare two same properties without order
 var obj1={name :"person1",age:"5"}
var obj2={age:"5",name:"person1"}

var s1=JSON.stringify(obj1);
var s2=JSON.stringify(obj2);
  if(s1===s2){
     console.log("ture");
 }
 else{
    console.log("flase");
 }

 //2) fetch the flags from api
 var fetch= new XMLHttpRequest();
 fetch.open("GET","https://restcountries.com/v3.1/all","true");
 fetch.send();
 fetch.onload=function(){
    var data=fetch.response
   // console.log(data);
   // to convert the aapi data raw into parse
    var result=JSON.parse(data);
    console.log(result);
    //to fetch the flag
    for(var i=0;i<=result.length;i++){
        console.log(result[i].flags.png);
    }
 }

 var col=new XMLHttpRequest();
 col.open("GET","https://restcountries.com/v3.1/all","true");
 col.send();
 col.onload=function(){
    var data=col.response
    //console.log(data);
    // convert to raw to parse;
    var data1=JSON.parse(data);
    console.log(data1);
    for( var j=0;j<=data1.length;j++){
        console.log(data1[j].name.common,data1[j].population);//name and population
        console.log(data1[j].region,data1[j].subregion);// region and sub region
    }
 }


