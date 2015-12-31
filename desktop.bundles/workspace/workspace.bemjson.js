module.exports = {
    block: 'page',
    title: 'workspace',
    head: [
        { elem: 'css', url: '_workspace.css' }
    ],
    scripts: [{ elem: 'js', url: '_workspace.js' }],
    content: [
       {
           block: 'content',
           content: [
               'block content'
           ]
       }
    ]
};
