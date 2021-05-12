const url = `https://api.github.com/users/`;
const search_input = document.getElementById('search_input');

class Data {
    constructor() {

    }
}

function get_users() {
    let fetching = null;
    fetch(`https://api.github.com/search/users?q=marat`)
        .then(data => data.json())
        .then(array => array.items)
        .then(res => {
                const pagesCount = Math.floor(res.length / 20);
                for (let i = 0; i < res.length; i++) {
                    // const obj = {};
                    // for(let i = 0; i < pagesCount; i++) {
                    //     if(res.length >= 20) {
                    //         obj[i] = res.splice(0, 20);
                    //     } else {
                    //         obj['remainder'] = res.slice()
                    //     }
                    // }

            }    })
        }

    get_users();

    function get_repos() {
        fetch(`https://api.github.com/search/repositories?q=${search_input.value}`)
    }

    function showUsers(parent) {

    }

    // search_input.addEventListener('keypress',function(event) {
    //     if(event.code === 'Enter') {
    //         if()
    //     }
    // })