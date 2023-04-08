var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);

    var population=result.filter((a)=>a.population<200000).map((b)=>b.name);
    console.log(population);

}
    
    
     

