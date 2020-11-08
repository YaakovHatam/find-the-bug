
function createUser(name) {
    if (name == 'admin' || name == 'administrator') {
        return 'Username not allowed!'
    }

    else if (name.indexOf('0') === 0) { // If username starts with 0
        return name + ' (Starts with 0)';
    } else { 
        name
    }
}

var user1 = createUser('admin');
var user2 = createUser('0gag');
var user3 = createUser('bullish');
console.log(user1, user2, user3);
// 'Username not allowed!', '0gag (Starts with 0)', 'bullish'

