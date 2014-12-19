'use strict';

app.factory('Message', function($firebase, FIREBASE_URL) {
	var ref = new Firebase(FIREBASE_URL);
	var messages = function(roomId) {
		return $firebase(ref.child('messages').child(roomId)).$asArray();
	};

	var Message = {
		all: function(roomId) {
			return messages(roomId);
		},
		create: function(roomId, message) {
			return messages(roomId).$add(message).then(function(messageRef) {
				return messageRef;
			});
		}
	};

	return Message;
});
