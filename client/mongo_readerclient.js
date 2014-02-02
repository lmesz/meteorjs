Meteor.subscribe("slng");

Slng = new Meteor.Collection("syslogng");

Template.search.items = function () {
  return Slng.find();
};