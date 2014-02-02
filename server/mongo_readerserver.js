Slng = new Meteor.Collection("syslogng");

Meteor.publish('slng', function () {
  return Slng.find();
});