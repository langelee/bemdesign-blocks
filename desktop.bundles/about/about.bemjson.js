module.exports = {
    block: 'page',
    title: 'about',
    head: [
        { elem: 'css', url: '_about.css' }
    ],
    scripts: [{ elem: 'js', url: '_about.js' }],
    content: [
       {
           block: 'content',
           content: [
               'block content'
           ]
       }
    ]
};
