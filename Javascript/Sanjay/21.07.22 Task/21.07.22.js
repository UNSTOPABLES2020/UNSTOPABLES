function gotoPage(event) {
    event.preventdefault();
    window.histroy.pushState({}, '', event.target.href);
    constructPage();
}
const routes = {
    '/home': './source pages/18.05.2022sanjayt.html',
    '/shop': './source pages/25-05tasksanjay.html',
    '/page2': './source pages/sanjay.html',
    './tech': './source pages/sanjay1 a2z gadgets'
}

function constructPage() {
    let path = window.location.pathname;
    let templateName = routes[path] ? routes[path] : routes['404']
    fetch(templateName)
        .then(function(htmlContent) {
            htmlContent.text()
                .then(function(content) {
                    document.querySelector('.page-container').innerHTML = content
                });
        });
}