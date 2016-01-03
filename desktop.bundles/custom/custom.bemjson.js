module.exports = {
    block: 'page',
    title: 'custom',
    head: [
        { elem: 'css', url: '_custom.css' }
    ],
    scripts: [{ elem: 'js', url: '_custom.js' }],
    content: [
       {
           block: 'content',
           content: [
               'block content'
           ]
       }
    ]
};
