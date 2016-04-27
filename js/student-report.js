var message='';
var student;

function print(message){
  document.write("<section>" + message + "</section>");
}

for(var i=0; i<students.length; i++){
  student=students[i];
  console.log(student);
  message += '<h2>' + student.name + '</h2>';
  message += '<p>' + student.track + '<p>';
}


print(message);


//angular: most popular front end framework for javascript (don't have to load page to change content
//URL is one of main things in search engine optomization, how you write your URL is important for how google indexes sites (clean)
//But since with javascript you mainly stay on 1 page, not SEO friendly
//Angular works with directives on specific pages for google - currently more popular for app Development
//
