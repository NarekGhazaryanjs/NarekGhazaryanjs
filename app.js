let users_block = document.getElementById('users-block');
let search_input = document.getElementById('search-input');
let result_block = document.getElementById('result-block');
let form = document.forms[0];
let prev_button = document.getElementById('prev');
let next_button = document.getElementById('next');
let my_location = "users";
let page = 1;
let repos_block = document.getElementById('repos-block')

form.addEventListener('click',(event) => {
    if(event.target.innerHTML === 'users') {
        page = 1;
        my_location = "users";
        result_block.innerHTML = ''
        repos_block.innerHTML = ''
    } else if(event.target.innerHTML === 'repos') {
        my_location = "repos";
        page = 1;
        result_block.innerHTML = ''
        repos_block.innerHTML = ''
    }
})


function get_users() {
    fetch(`https://api.github.com/search/users?q=${search_input.value}&page=${page}&per_page=20`)
    .then(data => data.json())
    .then(data => data.items)
    .then(users => {
        for (let i = 0; i < users.length; i++) {
           let users_div = document.createElement('div');
           users_div.className = 'users-container'
           users_div.innerHTML = `
            <img src="${users[i].avatar_url}">
            <p> login:  ${users[i].login}</p>
            <p> login:  ${users[i].id}</p>
           `;
           result_block.appendChild(users_div)
        }
    })
}


function get_repos() {
    fetch(`https://api.github.com/search/repositories?q=${search_input.value}&page=${page}&per_page=20`)
    .then(data => data.json())
    .then(data => data.items)
    .then(items => {
        repos_block.innerHTML = '';
        for(let i = 0; i < items.length; i++) {
            console.log(items[i])
            let repo_text = document.createElement('p');
            repo_text.innerHTML = items[i].archive_url;
            repos_block.appendChild(repo_text)
        }
    })
}



next_button.addEventListener('click', function() {
    page++
    result_block.innerHTML = '';
    if(my_location === 'users') {
        get_users();
    } else if(my_location === 'repos') {
        get_repos()
    }
})

prev_button.addEventListener('click', function() {
    page--
    result_block.innerHTML = '';
    console.log(page);
    if(my_location === 'users') {
        get_users();
    } else if(my_location === 'repos') {
        get_repos()
    }
})


search_input.addEventListener('keyup',(event) => {
  if(event.code === 'Enter' && my_location === 'users') {
      result_block.innerHTML = '';
      get_users();
  }
  if(event.code === 'Enter' && my_location === 'repos') {
    result_block.innerHTML = '';
    get_repos()
}
})

