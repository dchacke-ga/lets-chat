'use strict';

app.factory('Room', function($firebase, Auth, FIREBASE_URL) {
	var ref = new Firebase(FIREBASE_URL);
	var rooms = $firebase(ref.child('rooms')).$asArray();

	var Room = {
		create: function(room) {
			room.userId = Auth.user.uid;

			return rooms.$add(room).then(function(roomRef) {
				return roomRef;
			});
		},
		get: function(id) {
			return $firebase(ref.child('rooms').child(id)).$asObject();
		},
		all: rooms
	};

	return Room;
});
