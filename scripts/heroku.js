
//is robot in line 4 supposed to be r2d2?
module.exports = function(robot) {
    robot.hear(/Hello!/, function(res) {
      return res.send("Hi there!");
    });

}

//was I supposed to replace Hubot with r2d2?
bot.respond(/Hi Hubot! My name is (.*)/i, function(msg) {
  var name;
  name = msg.match[1];
  if (name == "r2d2"){
    return msg.send("You're not r2d2--I'm r2d2!");
  } else {
    return msg.reply("Nice to meet you, " + name + "!");
  }

});

