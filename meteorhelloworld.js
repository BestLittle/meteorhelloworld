if (Meteor.isClient) {
  // counter starts at 1701
  Session.setDefault('counter', 1701);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click #button1': function () {
      // Increasethe counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
      console.log('Plus button clicked.')
    },
    
    'click #button2': function () {
      // Decrease the counter when button is clicked
      Session.set('counter', Session.get('counter') - 1);
      console.log('Minus button clicked.')
    },

    'click .something': function() {
      Session.set('stuff', 'things');
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}