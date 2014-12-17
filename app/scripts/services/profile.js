'use strict';

app.factory('Profile', function($firebase, FIREBASE_URL) {
	var ref = new Firebase(FIREBASE_URL);
	var sync = $firebase(ref.child('profiles'));

	var Profile = {
		create: function(uid, username) {
			console.log(sync);
			return sync.$set(uid, { username: username });
		}
	};

	return Profile;
});
