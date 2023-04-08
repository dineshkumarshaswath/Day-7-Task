var request= new XMLHttpRequest();
 request.open("GET", "https://restcountries.com/v3.1/all");
 request.send();
 request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);

    var total=result.reduce((a,{population:b})=> a+=b,0);
    console.log(`This is the total popultion ${total}`);


 }
