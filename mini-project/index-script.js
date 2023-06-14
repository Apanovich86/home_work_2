// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
fetch('https://jsonplaceholder.typicode.com/users')
.then(function (value) {
    return value.json();
})
.then(function (value) {
    console.log(value);
});

// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        let usersWrap = document.getElementsByClassName('users-wrap')[0];
        for (let user of value) {
            let userDiv = document.createElement('div');
            let hrefDiv = document.createElement('div');
            userDiv.classList.add('users');
            hrefDiv.classList.add('get-info-users');
            userDiv.innerText = user.id + ' ' + user.name;
            usersWrap.append(userDiv);
            let detailsLink = document.createElement('a');
            detailsLink.innerText = 'User details';
            detailsLink.href = `user-details.html?user=${JSON.stringify(user)}`;
            hrefDiv.appendChild(detailsLink);
            userDiv.appendChild(hrefDiv);
        }
    });


