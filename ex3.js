var users = [{
        name: 'user a'
    }, {
        name: 'user b'
    }
]
var userCounter = 2;

/**
 * The function gets names of up to 3 users, adds them to an array of users and returns the amount of users added in total
 * @param {*} name1 
 * @param {*} name2 
 * @param {*} name3 
 */
function addUsers(name1, name2, name3) {
    userCounter = 0;
    if (name1) {
        users.push({
            name: name1
        });
        userCounter++;
    }
    if (name2) {
        users.push({
            name: name2
        });
        userCounter++;

    }
    if (name3) {
        users.push({
            name: name3
        });
        userCounter++;

    }
    return userCounter;
}

const totalUsersAdded = addUsers('user c', 'user d');

userCounter += totalUsersAdded;

console.log(userCounter); // 4
