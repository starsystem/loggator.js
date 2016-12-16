var loggator = function (selector) {

	var	targetSelector = selector || 'body > header > nav',
		targetElement = document.querySelector(targetSelector),
		formParent = targetElement.parentNode,
		fnp = JSON.parse(atob(localStorage.getItem('fnp'))) || {},
		form = document.querySelector('#template_login_form').content.cloneNode(true),
		buttonTemplate = document.querySelector('#template_login_button').content.cloneNode(true),
		button = document.getElementById('login_button') || targetElement.appendChild(buttonTemplate);

	// First loginButton click
	button.addEventListener('click', injectForm, false);

	function injectForm (event) {
		event.preventDefault();
		// Subsequent loginButton clicks
		event.target.removeEventListener('click', injectForm, false);
		event.target.addEventListener('click', toggleForm, false);
		// Append form in header
		formParent.appendChild(form);
		// Add submit listener
		formParent.querySelector('form').addEventListener('submit', serveForm);
	}

	function toggleForm (event) {
		event.preventDefault();
		// Toggle header form
		var headerForm = formParent.querySelector('form');
		headerForm.style.display = (window.getComputedStyle(headerForm).getPropertyValue('display') === 'none') ? 'block' : 'none';
	}

	function serveForm (event) {
		event.preventDefault();
		event.target.style.display = 'none';
		flash('loading');
		var tokenField = event.target.querySelector('form > input[type="password"]');
		if (tokenField.value.length === 40) {
			getAuth(tokenField.value);
		} else if (tokenField.value.length > 0) {
			flash('Invalid token', 1);
		}
		tokenField.value = '';
	}

	function getAuth (token) {
		fnp.token = btoa(token);
		localStorage.setItem('fnp', btoa(JSON.stringify(fnp)));
		return fetch('https://api.github.com/user', {
			headers: { Authorization: 'token ' + token}
		}).then(function (response) {
			var headerForm = formParent.querySelector('form');
			if (response.status !== 200) {
				// Unauthorized or bad credential
				flash('Invalid token', 1);
				localStorage.removeItem('fnp');
				return false;
			} else {
				// Logged: set logout button
				if (headerForm) flash('You are logged in: <a href=".">Reload</a>', 1);
				button.innerHTML = 'logout';
				button.removeEventListener('click', injectForm, false);
				button.addEventListener('click', logout, false);
				return true;
			}
		}).catch(console.log);
	}

	function logout (event) {
		event.preventDefault();
		localStorage.removeItem('fnp');
		event.target.removeEventListener('click', logout, false);
		flash('You are logged out: <a href=".">Reload</a>');
	}

	return (fnp.token && getAuth(atob(fnp.token))) ? atob(fnp.token) : (button.innerHTML = 'login') ? false : false;
};
var logged = loggator();
