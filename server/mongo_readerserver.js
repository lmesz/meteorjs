Slng = new Meteor.Collection("syslogng");

Meteor.publish('slng', function () {
  return Slng.find({}, {sort: {DATE: -1}, limit: 50});
});