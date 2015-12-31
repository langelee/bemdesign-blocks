module.exports = {
    block: 'page',
    title: 'components',
    head: [
        { elem: 'css', url: '_components.css' }
    ],
    scripts: [{ elem: 'js', url: '_components.js' }],
    content: [
       {
           block: 'content',
           content: [
               'block content'
           ]
       }
    ]
};
