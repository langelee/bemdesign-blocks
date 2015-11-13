module.exports = {
  block : 'page',
  title : 'bem-kit',
  favicon : '/favicon.ico',
  head : [
    { elem : 'meta', attrs : { name : 'description', content : '' } },
    { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
    { elem : 'css', url : 'index.min.css' }
  ],
  scripts: [{ elem : 'js', url : 'index.min.js' }],
  mods : { theme : 'islands' },
  content : [
    {
      block : 'row',
      content : [
        {
          elem : 'col',
          mods : { sw : 12, mw : 6, lw : 6, xl : 6, xxl : 4 },
          content : [
            {
              block : 'kit',
              content : [
                {
                  elem : 'item',
                  block : 'position-list',
                  content : [
                    {
                      block: 'position',
                      content : [
                        {
                          elem : 'image'
                        },
                        {
                          elem : 'text',
                          content : 'Front-end developer'
                        }
                      ]
                    }
                  ]
                },
                {
                  elem : 'item',
                  block : 'document-list',
                  content : [
                    {
                      block: 'document',
                      content: [
                        {
                          elem : 'image',
                          content : ''
                        },
                        {
                          elem : 'content',
                          content: [
                            {
                              block: 'document-content',
                              content: [
                                {
                                  elem : 'title',
                                  content : 'Pellentesque habitant'
                                },
                                {
                                  elem : 'text',
                                  content : 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
                                },
                              ]
                            }
                          ]
                        },
                      ]
                    },
                  ]
                },
                {
                  elem : 'item',
                  block : 'user-list',
                  content : [
                    {
                      block: 'user',
                      content: [
                        {
                            elem : 'image',
                            content : ''
                        },
                        {
                            elem : 'content',
                            content: [
                              {
                                block: 'user-content',
                                content: [
                                  {
                                      elem : 'name',
                                      content : 'Mikhail Koloskov'
                                  },
                                  {
                                      elem : 'position',
                                      content : 'UI Engineer'
                                  },
                                ]
                              }
                            ]
                        },
                      ]
                    }
                  ]
                },
                {
                  elem : 'item',
                  block : 'top-news-list',
                  content : [
                    {
                      block: 'top-news',
                      content: [
                        {
                          elem : 'date',
                          content : '16.03.2015'
                        },
                        {
                          elem : 'text',
                          content : 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
                        },
                      ]
                    }
                  ]
                },
                {
                  elem : 'item',
                  block : 'news-list',
                  content : [
                    {
                      block: 'news',
                      content: [
                        {
                          elem : 'image'
                        },
                        {
                          elem : 'content',
                          content: [
                            {
                              block : 'news-content',
                              content: [
                                {
                                    elem : 'title',
                                    content : 'Название новости'
                                },
                                {
                                    elem : 'date',
                                    content : '16.03.2015'
                                },
                                {
                                    elem : 'text',
                                    content : 'текст новости'
                                },
                              ]
                            }
                          ]
                        },
                      ]
                    }
                  ]
                },
              ]
            }
          ]
        },
        {
          elem : 'col',
          mods : { sw : 10, mw : 8, lw : 0, xl : 0 },
          content : [
            'Вторая колонка'
          ]
        }
      ]
    }
  ]
};
