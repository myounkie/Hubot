/*
Instructions
Have a message post to Slack based on user input
Do at least 3 different things.
  -.respond
  -.send
  -.reply
One of the commands must utilize the list of people in the class to send a direct message or reply.
  - it does
Leverage Hubot
  - it does
Use at least 1 conditional to change the outcome of a Slackbot.
  - it does
*/

//tell hubot "say hi to (.*). search class array, and hubot says "hi" to person (.*) and says hi
// team.info https://api.slack.com/methods/team.info Will this get me the team list?

module.exports = function(robot) {

//Creat class array containing each person's object.

/*
var class = [
var Michael = {Name: "Michael", userName:"@myounkie"}
var Tyler = {Name:"Tyler", userName:"@tylerism"}
var Sonyl = {Name:"Sonyl", userName:"@sonylnagale"}
];

*/

var classmates = ["@labianca", "@erica", "@jgennell", "@myounkie", "@oli-g", "@scobban", "@albrechs", "@tcooper"];

//identify desired person from class,
robot.respond(/go message (.*)/i, function(msg) {
  var personInputted;
  personInputted = msg.match[1]

//if person inputted is in the array then say hi to inputted person, if not say no to me
  if (classmates.indexOf(personInputted) >= -1  ){
    robot.send(personInputted, "Hi, this thing worked")
  }
  else {
    return msg.reply("That person is not in our class");
  }
}

//Find Name in class array. Identify the oject for that person (ex: Michael) then get the username of the object
//if object does not exist, return message to user
//https://www.infragistics.com/community/blogs/dhananjay_kumar/archive/2016/09/21/how-to-locate-a-particular-object-in-a-javascript-array.aspx

/*
function FindClassuserName(class) {        
        if (class.Name === this[0]) {
            return class;
        }

        else (){
		return msg.reply("That person is not in our class");
  }
    }
    var personObject = class.find(FindClassuserName, personInputted);
// now that the object is identified, id the username of that object. I don't think this works even though personobject=variable desired.
    var userName = personObject.userName
    robot.messageRoom(userName, "Hi, this thing worked")
}

}
});

