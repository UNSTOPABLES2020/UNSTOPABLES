function gotoPage(event)
{
    event.preventDefault();
    window.history.pushState({}, '', event.target.href);
    constructPage();
}

const route=
{
    '/Home':' ./pages/Home.html',
    '/info':'./pages/info.html',
    '/e-web':'./pages/e-web.html',
    '/project':'./pages/project.html',
    '404':'./pages/empty.html'
}
let constructPage = () => {
    let path = window.location.pathname;
    let templateName = route[path] ? route[path] : route['404'];
    fetch(templateName)
    .then(function(htmlContent) {
        htmlContent.text()
        .then(function(content) {
            document.querySelector('.page-container').innerHTML = content;
        });
    });
}
console.log("haiiii");