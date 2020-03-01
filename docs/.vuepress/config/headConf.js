module.exports = [
    ['link', {
        rel: 'icon',
        href: '/favicon.jpeg'
    }],
    ['link', {
        rel: 'manifest',
        href: '/manifest.json'
    }],
    ['link', {
        rel: 'preconnect',
        href: "https://zz.bdstatic.com/"
    }],
    ['link', {
        rel: 'dns-prefetch',
        href: "https://zz.bdstatic.com/"
    }],
    ['meta', {
        name: 'theme-color',
        content: '#ffffff'
    }],
    ['script', {
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-159369211-1'
    }],
    ['script', {}, 'window.dataLayer = window.dataLayer || [];function gtag() {    dataLayer.push(arguments);}gtag(\'js\', new Date());gtag(\'config\', \'UA-159369211-1\');']
]