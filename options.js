// Saves options to chrome.storage
function save_options() {
  var username = btoa(document.getElementById('username').value);
  var password = btoa(document.getElementById('password').value);
  chrome.storage.sync.set({
    username: username,
    password: password
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Credentials saved.';
    setTimeout(function() {
      status.style.display = 'none';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    username : "",
    password: ""
  }, function(items) {
    document.getElementById('username').value = items.username;
    document.getElementById('password').value = items.password;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',save_options);