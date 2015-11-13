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
          mods : { sw : 12, mw : 12, lw : 12, xl : 12, xxl : 12 },
          content : [
            {
              block : 'header',
              content : [

              ]
            }
          ]
        }
      ]
    },
    {
      block : 'row',
      content : [
        {
          elem : 'col',
          mods : { sw : 12, mw : 12, lw : 12, xl : 12, xxl : 12 },
          content : [
            {
              block : 'promo',
              content : [

              ]
            }
          ]
        }
      ]
    },
    {
      block : 'row',
      content : [
        {
          elem : 'col',
          mods : { sw : 12, mw : 12, lw : 12, xl : 12, xxl : 12 },
          content : [
            {
              block : 'component-nav',
              content : [
                {
                  block : 'control-group',
                  content : [
                    {
                      block : 'checkbox',
                      mods : { theme : 'islands', size : 'm', type : 'button' },
                      name: 'tv',
                      val: '1',
                      text : 'Телевизоры'
                    },
                    {
                      block : 'checkbox',
                      mods : { theme : 'islands', size : 'm', type : 'button' },
                      name: 'photo',
                      val: '1',
                      text : 'Фотокамеры'
                    },
                    {
                      block : 'checkbox',
                      mods : { theme : 'islands', size : 'm', type : 'button' },
                      name: 'book',
                      val: '1',
                      text : 'Электронные книги'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },










    {
      block : 'row',
      content : [
        {
          elem : 'col',
          mods : { sw : 12, mw : 12, lw : 4, xl : 4, xxl : 4 },
          content : [
            {
              block : 'form',
              mix : { block : 'kit', elem : 'item'},
              content : [
                  {
                    elem : 'header',
                    content : 'Войти'
                  },
                  {
                    elem : 'content',
                    content : [
                        {
                          block : 'form-ctrl',
                          content : [
                            {
                              elem : 'item',
                              content : [
                                {
                                  block : 'input',
                                  mods : { theme : 'islands', size : 'l', width : 'available' },
                                  placeholder : 'Введите e-mail'
                                }
                              ]
                            },
                            {
                              elem : 'item',
                              content: [
                                {
                                  block : 'input',
                                  mods : { type: 'password', theme : 'islands', size : 'l', width : 'available' },
                                  placeholder : 'Введите пароль'
                                }
                              ]
                            },
                          ]
                        },
                        {
                          block : 'form-action',
                          content : [
                            {
                              elem : 'item',
                              mods : { align : 'left' },
                              content : [
                                {
                                  block : 'checkbox',
                                  mods : { theme : 'islands', size : 'm' },
                                  name: 'islands',
                                  val: 'val_3',
                                  text : 'Чужой компьютер'
                                }
                              ]
                            },
                            {
                              elem : 'item',
                              mods : { align : 'right' },
                              content : [
                                {
                                  block : 'button',
                                  mods : { theme : 'islands', size : 'l', view : 'action' },
                                  text : 'Войти'
                                }
                              ]
                            },
                          ]
                        }
                    ]
                  },
                  {
                      elem : 'footer',
                      content : [
                          {
                              block : 'form-link',
                              content : [
                                  {
                                    elem : 'item',
                                    mods : { align : 'left' },
                                    content : [
                                      {
                                        block : 'link',
                                        mods : { theme : 'islands', size : 'm', pseudo : true },
                                        content : 'Забыли пароль?'
                                      }
                                    ]
                                  },
                                  {
                                    elem : 'item',
                                    mods : { align : 'right' },
                                    content : [
                                      {
                                        block : 'link',
                                        mods : { theme : 'islands', size : 'm', pseudo : true },
                                        content : 'Зерегистрироваться'
                                      }
                                    ]
                                  },
                              ]
                          },
                      ]
                  }
              ]
          }

          ]
        },
        {
          elem : 'col',
          mods : { sw : 12, mw : 12, lw : 4, xl : 4, xxl : 4 },
          content : [
            {
                block : 'form',
                mix : { block : 'kit', elem : 'item'},
                content : [
                    {
                        elem : 'header',
                        content: 'Восстановить пароль'
                    },
                    {
                        elem : 'content',
                        content : [
                            {
                                block : 'form-ctrl',
                                content : [
                                    {
                                      elem : 'item',
                                      content : [
                                        {
                                          block : 'input',
                                          mods : { theme : 'islands', size : 'l', width : 'available' },
                                          placeholder : 'Введите e-mail'
                                        }
                                      ]
                                    }
                                ]
                            },
                            {
                                block : 'form-action',
                                content : [
                                    {
                                      elem : 'item',
                                      mods : { align : 'left' },
                                      content : [
                                        {
                                          block : 'link',
                                          mods : { theme : 'islands', size : 'm', pseudo : true },
                                          content : 'Забыли e-mail?'
                                        }
                                      ]
                                    },
                                    {
                                      elem : 'item',
                                      mods : { align : 'right' },
                                      content : [
                                        {
                                          block : 'button',
                                          mods : { theme : 'islands', size : 'l', view : 'action' },
                                          text : 'Отправить'
                                        }
                                      ]
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        elem : 'footer',
                        content : [
                            {
                                block : 'form-link',
                                content : [
                                    {
                                      elem : 'item',
                                      mods : { align : 'left' },
                                      content : [
                                        {
                                          block : 'link',
                                          mods : { theme : 'islands', size : 'm', pseudo : true },
                                          content : 'Уже зарегистрированы?'
                                        }
                                      ]
                                    },
                                    {
                                      elem : 'item',
                                      mods : { align : 'right' },
                                      content : [
                                        {
                                          block : 'link',
                                          mods : { theme : 'islands', size : 'm', pseudo : true },
                                          content : 'Зерегистрироваться'
                                        }
                                      ]
                                    },
                                ]
                            },
                        ]
                    }
                ]
            }
          
          ]
        },
        {
          elem : 'col',
          mods : { sw : 12, mw : 12, lw : 4, xl : 4, xxl : 4 },
          content : [
            {
              block : 'form',
              mix : { block : 'kit', elem : 'item'},
              content : [
                  {
                      elem : 'header',
                      content: 'Регистрация'
                  },
                  {
                      elem : 'content',
                      content : [
                          {
                              block : 'form-ctrl',
                              content : [
                                  {
                                    elem : 'item',
                                    content : [
                                      {
                                        block : 'input',
                                        mods : { theme : 'islands', size : 'l', width : 'available' },
                                        placeholder : 'Введите e-mail'
                                      }
                                    ]
                                  }
                              ]
                          },
                          {
                              block : 'form-action',
                              content : [
                                  {
                                    elem : 'item',
                                    mods : { align : 'left' },
                                    content : [
                                      {
                                        block : 'link',
                                        mods : { theme : 'islands', size : 'm', pseudo : true },
                                        content : 'Уже зарегистрованы?'
                                      }
                                    ]
                                  },
                                  {
                                    elem : 'item',
                                    mods : { align : 'right' },
                                    content : [
                                      {
                                        block : 'button',
                                        mods : { theme : 'islands', size : 'l', view : 'action' },
                                        text : 'Зерегистрироваться'
                                      }
                                    ]
                                  },
                              ]
                          }
                      ]
                  }
              ]
          }
          
          ]
        }
      ]
    },

    {
      block : 'row',
      content : [
        {
          elem : 'col',
          mods : { sw : 12, mw : 12, lw : 4, xl : 4, xxl : 4 },
          content : [
            {
              block : 'kit',
              content : [

                {
                  block : 'document-list',
                  mix : { block : 'kit', elem : 'item'},
                  content: [
                    {
                      documentTitle : 'Doc1',
                      documentText : 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
                    },  
                    {
                      documentTitle : 'Doc1',
                      documentText : 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
                    },  
                    {
                      documentTitle : 'Doc1',
                      documentText : 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
                    },
                    {
                      documentTitle : 'Doc1',
                      documentText : 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
                    } 
  
                  ].map(function(item) {
                    return [
                      {
                        block: 'document',
                        mix : { block: 'document-list', elem : 'item'},
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
                                    content : item.documentTitle
                                  },
                                  {
                                    elem : 'text',
                                    content : item.documentText
                                  },
                                ]
                              }
                            ]
                          },
                        ]
                      }
                    ]
                  })
                },
                {
                  block : 'top-news-list',
                  mix : { block : 'kit', elem : 'item'},
                  content: [
                    {
                      topNewsDate : '24.24.24',
                      topNewsText : 'News'
                    },  
                    {
                      topNewsDate : '24.24.24',
                      topNewsText : 'News'
                    }, 
                    {
                      topNewsDate : '24.24.24',
                      topNewsText : 'News2'
                    },
                    {
                      topNewsDate : '24.24.24',
                      topNewsText : 'News2'
                    } 
                  ].map(function(item) {
                    return [
                      {
                        block: 'top-news',
                        mix : { block: 'top-news-list', elem : 'item'},
                        content: [
                          {
                            elem : 'date',
                            content : item.topNewsDate
                          },
                          {
                            elem : 'text',
                            content : item.topNewsText
                          },
                        ]
                      }
                    ]
                  })
                },
              ]
            }
          ]
        },
        {
          elem : 'col',
          mods : { sw : 12, mw : 12, lw : 4, xl : 4 },
          content : [  
            {
              block : 'user-list',
              mix : { block : 'kit', elem : 'item'},
              content: [
                {
                  userName : 'Mikhail Koloskov',
                  userPosition : 'UI Engineer'
                },  
                {
                  userName : 'Tobias',
                  userPosition : 'Product Designer'
                },
                {
                  userName : 'Mikhail Koloskov',
                  userPosition : 'UI Engineer'
                },  
                {
                  userName : 'Tobias',
                  userPosition : 'Product Designer'
                }  
              ].map(function(item) {
                return [
                  {
                    block: 'user',
                    mix : { block: 'user-list', elem : 'item'},
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
                                content : item.userName
                              },
                              {
                                elem : 'position',
                                content : item.userPosition
                              },
                            ]
                          }
                        ]
                      },
                    ]
                  }
                ]
              })
            },          
            {
              block : 'news-list',
              mix : { block : 'kit', elem : 'item'},
              content: [
                {
                  newsContentTitle : 'Name',
                  newsContentDate : '24.24.24',
                  newsContentText : 'Text'
                },
                {
                  newsContentTitle : 'Name',
                  newsContentDate : '24.24.24',
                  newsContentText : 'Text'
                },
                {
                  newsContentTitle : 'Name',
                  newsContentDate : '24.24.24',
                  newsContentText : 'Text'
                },
                {
                  newsContentTitle : 'Name',
                  newsContentDate : '24.24.24',
                  newsContentText : 'Text'
                }
              ].map(function(item) {
                return [
                  {
                    block: 'news',
                    mix : { block: 'news-list', elem : 'item'},
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
                                  content : item.newsContentTitle
                              },
                              {
                                  elem : 'date',
                                  content : item.newsContentDate
                              },
                              {
                                  elem : 'text',
                                  content : item.newsContentText
                              },
                            ]
                          }
                        ]
                      },
                    ]
                  }
                ]
              })
            },

          ]
        },
        {
          elem : 'col',
          mods : { sw : 12, mw : 12, lw : 4, xl : 4 },
          content : [
            {
              block : 'position-list',
              mix : { block : 'kit', elem : 'item'},
              content: [
                {
                  position : 'Front-end developer'
                },  
                {
                  position : 'UI designer'
                },
                {
                  position : 'Front-end developer'
                },  
                {
                  position : 'UI designer'
                }
              ].map(function(item) {
                return [
                  {
                    block: 'position',
                    mix : { block: 'position-list', elem : 'item'},
                    content : [
                      {
                        elem : 'image'
                      },
                      {
                        elem : 'text',
                        content : item.position
                      }
                    ]
                  }
                ]
              })
            },
          ]
        }
      ]
    },
    {
      block : 'row',
      content : [
        {
          elem : 'col',
          mods : { sw : 12, mw : 12, lw : 12, xl : 12, xxl : 12 },
          content : [
            {
              block: 'footer',
              content : 'bem-kit'
            }
          ]
        }
      ]
    }
  ]
};
