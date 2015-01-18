// simple-todos.js
if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tasks: [
      { text: "Task 1" },
      { text: "Task 2" },
      { text: "Task 3" }
    ]
  });
}
