var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    var result = JSON.parse(request.response);
    console.log(result);


    result.forEach(a => {

        console.log(a.name);
        console.log(a.capital);
        console.log(a.flag);

    });

}





