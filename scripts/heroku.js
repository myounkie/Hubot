
//send message, recieve response. don't need to @hubot
//is robot in line 4 supposed to be r2d2?
module.exports = function(robot) {
    robot.hear(/Hello!/, function(res) {
      return res.send("Hi there!");
    });

//send message, recieve response with name in (.*) space.
//was I supposed to replace Hubot with r2d2?
robot.respond(/Hi Hubot! My name is (.*)/i, function(msg) {
  var name;
  name = msg.match[1];
  if (name == "r2d2"){
    return msg.send("You're not r2d2--I'm r2d2!");
  } else {
    return msg.reply("Nice to meet you, " + name + "!");
  }

});


robot.respond(/add (.*) and (.*)/i, function(msg) {
  var a;
  var b;
  a = parseInt(msg.match[1]);
  b = parseInt(msg.match[2]);
  c = a + b

  return msg.reply(a + " plus " + b + " = " + c);
});
}
