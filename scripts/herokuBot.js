//tell hubot "say hi to (.*). search class array, and hubot says "hi" to person (.*) and says hi
// team.info https://api.slack.com/methods/team.info Will this get me the team list?

module.exports = function(robot) {

//Creat class array containing each person's object.
var class [
var Michael = {Name: "Michael", userName:"@myounkie"}
var Tyler = {Name:"Tyler", userName:"@tylerism"}
var Sonyl = {Name:"Sonyl", userName:"@sonylnagale"}
];

//identify desired person from class,
bot.respond(/Say hi to (.*)/i, function(msg) {
  var personInputted;
  personInputted = msg.match[1]

//Find Name in class array. Identify the oject for that person (ex: Michael) then get the username of the object
//if object does not exist, return message to user
//https://www.infragistics.com/community/blogs/dhananjay_kumar/archive/2016/09/21/how-to-locate-a-particular-object-in-a-javascript-array.aspx
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




//ask hubot (listen) if I have a meeting at (.*) time. If yes, tell me meeting. If no, say "you're free, party!"






// ask hubot "how long until the end of the world". Hubot chooses a random number between 1-15, then counts down to 0.
