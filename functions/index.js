const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.addWelcomeMessages = functions.auth.user().onCreate(event => {
  const user = event.data;
  const fullName = user.displayName || "Anonymous";

  return admin
    .database()
    .ref("messages")
    .push({
      name: "Firebase Bot",
      text: `${fullName} signed in for the first time! Welcome!`
    });
});
