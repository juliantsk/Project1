
var queryURL = "https://www.udacity.com/public-api/v0/courses";
var courseInfo;
var title;
var link;
var summary; 

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);

    var results = response.courses;
    console.log(results[0].title);
    console.log(results[1].title);
    console.log(results[2].title);

   for (var i = 0; i < results.length; i++) {

        var courseDiv = $("<div class='course'>");
        var courseInfo = $("<a target='_blank'><br>");
        var p = $("<p>");

        
        var link = results[i].homepage;
        var summary = results[i].summary;

        if (results[i].title.includes("Software") || results[i].title.includes("Programming") || results[i].title.includes("App")) {
            var title = results[i].title;
            console.log(title)

            courseInfo.attr({
                "href": link,
            });
    
            courseInfo
                .append(p.text("Title: " + title));
    
    
            courseDiv.append(courseInfo);
    
            $("#udacityCourses").prepend(courseDiv);
        }


    };//for loop close

});//ajax call end


   
