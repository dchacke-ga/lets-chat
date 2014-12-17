'use strict';

app.factory('Auth', function($firebase, $firebaseAuth, FIREBASE_URL) {
	var ref = new Firebase(FIREBASE_URL);
	var auth = $firebaseAuth(ref);

	var Auth = {
		register: function(user) {
			return auth.$createUser(user.email, user.password);
		},
		login: function(user) {
			return auth.$authWithPassword({
				email: user.email,
				password: user.password
			});
		},
		logout: function() {
			auth.$unauth();
		},
		resolveUser: function() {
			return auth.$getAuth();
		},
		signedIn: function() {
			return !!Auth.user.provider;
		},
		user: {}
	};

	auth.$onAuth(function(authData) {
		if (authData) {
			console.log('Logged in');
			angular.copy(authData, Auth.user);
		} else {
			console.log('Logged out');
			angular.copy({}, Auth.user);
		}
	});

	return Auth;
});
