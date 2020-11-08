
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

createUser('admin');
createUser('0gag');
createUser('bullish');
// 'Username not allowed!', '0gag (Starts with 0)', 'bullish'

