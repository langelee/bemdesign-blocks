module.exports = {
    block: 'page',
    title: 'faq',
    head: [
        { elem: 'css', url: '_faq.css' }
    ],
    scripts: [{ elem: 'js', url: '_faq.js' }],
    content: [
       {
           block: 'content',
           content: [
               'block content'
           ]
       }
    ]
};
