const $siteList = $('.siteList')
const $lastLi = $siteList.find('li.last')
const x = localStorage.getItem('x')
const xObject = JSON.parse(x)
const hashMap = xObject || [
    { logo: 'A', url: 'https://www.acfun.cn' },
    { logo: 'B', url: 'https://www.bilibili.com' }
]

const simplifyUrl = (url) => {
    return url.replace('https://', '')
        .replace('http://', '')
        .replace('www.', '')
        .replace(/\/.*/, '') // 删除 / 开头的内容
}

const render = () => {
    $siteList.find('li:not(.last)').remove()
    hashMap.forEach((node, index) => {
        const $li = $(`<li>
      <div class="site">
        <div class="logo">${node.logo}</div>
        <div class="link">${simplifyUrl(node.url)}</div>
        <div class="close">
          <svg class="icon">
            <use xlink:href="#icon-close"></use>
          </svg>
        </div>
      </div>
    </li>`).insertBefore($lastLi)
        $li.on('click', () => {
            window.open(node.url)
        })
        $li.on('click', '.close', (e) => {
            e.stopPropagation() // 阻止冒泡
            hashMap.splice(index, 1)
            render()
        })
    })
}

render()

$('.addButton').on('click', () => {
    let url = window.prompt('请问你要添加的网址是啥？')
    if (url.indexOf('http') !== 0) {
        url = 'https://' + url
    }
    console.log(url)
    hashMap.push({
        logo: simplifyUrl(url)[0].toUpperCase(),
        url: url
    })
    render()
})

window.onbeforeunload = () => {
    const string = JSON.stringify(hashMap)
    localStorage.setItem('x', string)
}

$(document).on('keypress', (e) => {
    const { key } = e
    for (let i = 0; i < hashMap.length; i++) {
        if (hashMap[i].logo.toLowerCase() === key) {
            window.open(hashMap[i].url)
        }
    }
})



const choose_search = document.getElementsByClassName("search_en")[0];
const search_list = document.getElementsByClassName("search-engine")[0];

choose_search.onmouseover = function () {

    search_list.style.display = 'block';
}

choose_search.onmouseout = function () {

    search_list.style.display = "none";
}


search_list.onmouseover = function () {

    search_list.style.display = 'block';
}

search_list.onmouseout = function () {

    search_list.style.display = "none";
}




const google_search = document.getElementsByClassName("google_eng")[0];

google_search.addEventListener('click', (e) => {
    $(".searchForm")
        .attr('action', 'https://www.google.com/search')
        .find('input').attr('name', 'q')
        .end()
        .find('svg')
        .filter('svg')
        .find('use')
        .attr('xlink:href', '#icon-guge');





}, false);





const bing_search = document.getElementsByClassName("bing_eng")[0];

bing_search.addEventListener('click', (e) => {
    $(".searchForm")
        .attr('action', 'https://www.bing.com/search')
        .find('input').attr('name', 'q')
        .end()
        .find('svg')
        .filter('svg')
        .find('use')
        .attr('xlink:href', '#icon-bing');


}, false);



const baidu_search = document.getElementsByClassName("baidu_eng")[0];

baidu_search.addEventListener('click', (e) => {
    $(".searchForm")
        .attr('action', 'https://www.baidu.com/s')
        .find('input').attr('name', 'wd')
        .end()
        .find('svg')
        .filter('svg')
        .find('use')
        .attr('xlink:href', '#icon-baidu');

}, false);

const duckduckgo_search = document.getElementsByClassName("duckduckgo_eng")[0];

duckduckgo_search.addEventListener('click', (e) => {
    $(".searchForm")
        .attr('action', 'https://www.duckduckgo.com/')
        .find('input').attr('name', 'q')
        .end()
        .find('svg')
        .filter('svg')
        .find('use')
        .attr('xlink:href', '#icon-duckduckgo');

}, false);


const so_search = document.getElementsByClassName("so_eng")[0];

so_search.addEventListener('click', (e) => {
    $(".searchForm")
        .attr('action', 'https://www.so.com/s')
        .find('input').attr('name', 'q')
        .end()
        .find('svg')
        .filter('svg')
        .find('use')
        .attr('xlink:href', '#icon--o');

}, false);

const sogou_search = document.getElementsByClassName("sogou_eng")[0];

sogou_search.addEventListener('click', (e) => {
    $(".searchForm")
        .attr('action', 'https://www.sogou.com/web')
        .find('input').attr('name', 'query')
        .end()
        .find('svg')
        .filter('svg')
        .find('use')
        .attr('xlink:href', '#icon-sogou');

}, false);


// const close_button = document.getElementsByClassName("close");

// for (let i = 0; i < close_button.length; i++) {
//     close_button[i].style.display = "none";
//     close_button[i].onmouseover = function () {

//         close_button[i].style.display = 'block';
//     }

//     close_button[i].onmouseout = function () {

//         close_button[i].style.display = "none";
//     }



// }


