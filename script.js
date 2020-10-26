function intro(){
var  name = window.prompt("May I know your name? : ");
   document.write("<br>Hii "+name+" <br>");
}
//user intro function ended


//greet function according to time started
function greeting(){
  var d= new Date()
  var h=d.getHours();
  if(h>=0 && h<12){
    document.write("<br>Good Morning");
  }
  else if(h>=12 && h<17){
    document.write("<br>Good Afternoon");
  }
  else if(h>=17 && h<22){
    document.write("<br>Good Evening");
  }
  else{
    document.write("<br>I think it's time to sleep");
  } 
}
//greet function ended

//show main menu
function selectmenu(){
  intro();
  greeting();
  document.write("<br><br>How can I help you?<br>  1.Suggest me some courses<br>  2.Calculate my age<br>    3.Crack a joke<br><br>")

}
selectmenu();

//function for age calculation
function age_calculation(){
  var birth_year = prompt("Enter your birth year: ")
  var birth_month = prompt("Enter your birth month: ")
  var birth_day = prompt("Enter your birth date: ")
  today_date = new Date();
  today_year = today_date.getFullYear();
  today_month = today_date.getMonth();
  today_day = today_date.getDate();
  age = today_year - birth_year;
  if ( today_month < (birth_month - 1))
    {
      age--;
    }
  if (((birth_month - 1) == today_month) && (today_day < birth_day))
    {
      age--;
    }
  return age;
  }
  
//function for printing a joke
function cracking_joke(){
  var jokes = ["I ate a clock yesterday, it was very time-consuming."," I failed math so many times at school, I can’t even count.","I want to die peacefully in my sleep, like my grandfather… Not screaming and yelling like the passengers in his car.","Most people are shocked when they find out how bad I am as an electrician.","Just burned 2,000 calories. That’s the last time I leave brownies in the oven while I nap.","I advise you, dont mess with me, I know karate, king fu, judo, and 28 other dangerous words","Never criticize someone until you've walked a mile in their shoes. That way, when you criticize them, they won't be able to hear you from that far away. Plus, you'll have their shoes."];
  return jokes[Math.floor(Math.random() * jokes.length)];
}

//function for menu
function myFunction() {
  var text;
  var fav = prompt("How can I help you?", "1");
  switch(fav) {
    case "2":
      var age = age_calculation();
      text = "Your age is "+ age +" remember age is just a number :-)";
      break;
    case "1":
      text = suggestions();
      break;
    case "3":
      var joke = cracking_joke();
      text = joke;
      break;
    default:
      text = "you have to choose between 1-3..";
  }
  document.getElementById("demo").innerHTML = text;
}

//function for suugesting courses
function suggestions(){
  var twelfth_choice = prompt("Have you completed your twelft or equivalent? (1.yes 2.No): ")
  switch(twelfth_choice) {
    case "1":
      var op=prompt("select 1-5 (1.MPC, 2.BiPC, 3.CEC, 4.HEC, 5.Persuing Diploma )","1");
      text = "1.MPC 2.BiPC 3.CEC 4.HEC 5.Persuing Diploma"
      switch(op){
        case "1":
          n= "For MPC, you an prefer courses like:<br>1. Basics of Programming<br>2. Basics of Electronics<br>3. Intro to Designing<br>4. Basics of Web development";
          return n;
          break;
        case "2":
          n="For BiPC, you can prefer courses like:<br>1. Know about Anatomy<br>2. Intro to Bio Chemistry<br>3. Agriculture Development<br>4. Intro to Botany";
          return n;
          break;
        case "3":
          n="For CEC, you can prefer courses like:<br>1. Public policy analysis<br>2. Society and media<br>3. Numerical analysis<br>4. Corporate law";
          return n;
          break;
        case "4":
          n="For HEC, you can prefer courses like:<br>1. Applied business analytics<br>2. Enterpreneur strategies<br>3. Business model innovations<br>4. Strategic management of innovations";
          return n;
          break;
        case "5":
          n="For Diploma, you can prefer courses like:<br>1. Programming basics<br>2. Foundations of data structures<br>3. Basic electronics<br>4. Analog circuits";
          return n;
          break;
        default :
          n="Please choose from 1-5 only...";
          return n;
      }
  
    case "2": //Courses for twelfth not completed students
      text = "We have some courses for tenth completed students too....<br> 1. Basic English skills<br> 2. Trignometry<br> 3. Indian history<br> 4. Harappan civilization<br>"
      return text;
    default :
        n="Please choose from 1-2 only...";
        return n;
  }
}
