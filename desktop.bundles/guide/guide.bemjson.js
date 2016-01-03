module.exports = {
    block: 'page',
    title: 'guide',
    head: [
        { elem: 'css', url: '_guide.css' }
    ],
    scripts: [{ elem: 'js', url: '_guide.js' }],
    content: [
       {
           block: 'content',
           content: [
               'block content'
           ]
       }
    ]
};
