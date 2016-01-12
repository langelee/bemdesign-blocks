module.exports = {
  block : 'page',
  title : 'BEM Custom',
  favicon : '/favicon.ico',
  head : [
    { elem : 'meta', attrs : { name : 'description', content : '' } },
    { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
    { elem : 'css', url : 'index.min.css' },
    { elem : 'css', url : 'https://cdn.jsdelivr.net/evil-icons/1.7.8/evil-icons.min.css' },
    { elem : 'js', url : 'https://cdn.jsdelivr.net/evil-icons/1.7.8/evil-icons.min.js' }
  ],
  scripts: [{ elem : 'js', url : 'index.min.js' }],
  mods : { theme : 'islands' },
  content : [
    {
      block : 'promo',
      content : [
        {
          block : 'image',
          url : 'https://img-fotki.yandex.ru/get/5405/259818507.0/0_130be5_948d59aa_S'
        } ,
        {
          mix : { block : 'promo', elem : 'heading'},
          block : 'text',
          mods : { size : 'xl'},
          content : 'BEM Custom'
        },
        {
          mix : { block : 'promo', elem : 'description'},
          block : 'text',
          mods : { size : 's' },
          content : 'Основная идея БЭМ-методологии — сделать разработку простой и быстрой, а работу в команде — понятной и слаженной.'
        },
        {
          elem : 'download',
          content : [
            {
              block : 'button',
              mods : { theme : 'islands', size : 'xl', view : 'action' },
              text : 'Скачать с Github'
            }
          ]
        }
      ]
    },
    /*
    {
      block : 'row',
      content : [
        {
          elem : 'col',
          mods : { sw : 12, mw : 12, lw : 12, xl : 12, xxl : 12 },
          content : [

          ]
        }
      ]
    },
    */
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
                      mods : { theme : 'islands', size : 'l', type : 'button' },
                      name: 'form',
                      val: '1',
                      text : 'Формы'
                    },
                    {
                      block : 'checkbox',
                      mods : { theme : 'islands', size : 'l', type : 'button' },
                      name: 'list',
                      val: '1',
                      text : ' Списки'
                    },
                    {
                      block : 'checkbox',
                      mods : { theme : 'islands', size : 'l', type : 'button' },
                      name: 'tile',
                      val: '1',
                      text : 'Плитки'
                    },
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
      mix : { block : 'page-row'},
      content : [
        {
          elem : 'col',
          mods : { lw : 4, xl : 4, xxl : 4 },
          content : [
            {
              block : 'form',
              mix : { block : 'kit', elem : 'item'},
              content : [
                {
                  mix : { block : 'form', elem : 'header'},
                  block : 'text',
                  mods : { size : 'l',},
                  content : 'Войти'
                },
                {
                  elem : 'content',
                  content : [
                    {
                      block : 'form-control',
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
          mods : { lw : 4, xl : 4, xxl : 4 },
          content : [
            {
              block : 'form',
              mix : { block : 'kit', elem : 'item'},
              content : [
                {
                  mix : { block : 'form', elem : 'header'},
                  block : 'text',
                  mods : { size : 'l',},
                  content : 'Восстановить пароль'
                },
                {
                  elem : 'content',
                  content : [
                    {
                      block : 'form-control',
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
          mods : { lw : 4, xl : 4, xxl : 4 },
          content : [
            {
              block : 'form',
              mix : { block : 'kit', elem : 'item'},
              content : [
                {
                  mix : { block : 'form', elem : 'header'},
                  block : 'text',
                  mods : { size : 'l',},
                  content : 'Регистрация'
                },
                {
                  elem : 'content',
                  content : [
                    {
                      block : 'form-control',
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
                              text : 'Регистрация'
                            }
                          ]
                        },
                      ]
                    }
                  ]
                },
                {
                  elem : 'footer',
                  content: [
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
                              content : 'Войти'
                            }
                          ]
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
      block : 'row',
      mix : { block : 'page-row'},
      content : [
        {
          elem : 'col',
          mods : { lw : 4, xl : 4, xxl : 4 },
          content : [
            {
              block : 'kit',
              content : [
                {
                  block : 'document-list',
                  mix : { block : 'kit', elem : 'item'},
                  content: [
                    {
                      documentTitle : 'React',
                      documentText : 'React is a JavaScript library for creating user interfaces'
                    },
                    {
                      documentTitle : 'Pop',
                      documentText : 'Pop is an extensible animation engine for iOS, tvOS, and OS X'
                    },
                    {
                      documentTitle : 'Origami',
                      documentText : 'Design prototyping'
                    }
                  ].map(function(item) {
                    return [
                      {
                        block: 'document',
                        mix : { block: 'document-list', elem : 'item' },
                        content: [
                          {
                            mix : { block : 'document', elem : 'image' },
                            block: 'image',
                            url: '/i/document.png'
                          },
                          {
                            elem : 'content',
                            content: [
                              {
                                mix : { block : 'document-content', elem : 'title' },
                                block : 'text',
                                mods : { size : 'm' },
                                content : item.documentTitle
                              },
                              {
                                mix : { block : 'document-content', elem : 'text' },
                                block : 'text',
                                mods : { size : 's' },
                                content : item.documentText
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
                  mix : { block : 'kit', elem : 'item' },
                  content: [
                    {
                      topNewsDate : 'Dec 15, 2015',
                      topNewsText : 'Designing Facebook Collage'
                    },
                    {
                      topNewsDate : 'Nov 14, 2015',
                      topNewsText : 'What I’ve Learned Designing Small Things at Facebook'
                    },
                    {
                      topNewsDate : 'Oct 8, 2015',
                      topNewsText : 'Photographing Diverse Hands at Facebook'
                    }
                  ].map(function(item) {
                    return [
                      {
                        block: 'top-news',
                        mix : { block: 'top-news-list', elem : 'item' },
                        content : [
                          {
                            mix : { block: 'top-news', elem : 'date' },
                            block : 'text',
                            mods : { size : 's' },
                            content : item.topNewsDate
                          },
                          {
                            mix : { block: 'top-news', elem : 'text' },
                            block : 'text',
                            mods : { size : 'm' },
                            content : item.topNewsText
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
          elem : 'col',
          mods : { lw : 4, xl : 4, xxl : 4 },
          content : [
            {
              block : 'user-list',
              mix : { block : 'kit', elem : 'item'},
              content: [
                {
                  userName : 'Dustin Senos',
                  userPosition : 'Former head of design Medium',
                  userIcon : '/i/dastin.jpg'
                },
                {
                  userName : 'Vivek Venkatraman',
                  userPosition : 'Designer for Airbnb',
                  userIcon : '/i/vivek.jpg'
                },
                {
                  userName : 'Tobias van Schneider',
                  userPosition : 'Product designer of Spotify',
                  userIcon : '/i/tobias.jpg'
                }
              ].map(function(item) {
                return [
                  {
                    block: 'user',
                    mix : { block: 'user-list', elem : 'item'},
                    content: [
                      {
                        mix : { block : 'user', elem : 'image'},
                        block: 'image',
                        url: item.userIcon
                      },
                      {
                        elem : 'content',
                        content: [
                          {
                            block: 'user-content',
                            content: [
                              {
                                mix : { block : 'user-content', elem : 'name'},
                                block : 'text',
                                mods : { size : 'm'},
                                content : item.userName
                              },
                              {
                                mix : { block : 'user-content', elem : 'position'},
                                block : 'text',
                                mods : { size : 's'},
                                content : item.userPosition
                              }
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
                  newsContentTitle : 'Here’s to 2016 with Messenger',
                  newsContentDate : 'January 7, 2016',
                  newsContentText : 'The first week of the New Year is always a good moment to look back at the year behind and think about the one ahead.'
                },
                {
                  newsContentTitle : 'Messenger Adds New Features For Sharing During the Holidays',
                  newsContentDate : 'December 17, 2015',
                  newsContentText : 'In preparation for the coming weeks as many of us spend lots of time with friends.'
                },
                {
                  newsContentTitle : 'Introducing Transportation on Messenger',
                  newsContentDate : 'December 16, 2015',
                  newsContentText : 'Messenger is your place to communicate seamlessly with everyone – from making plans with friends.'
                }
              ].map(function(item) {
                return [
                  {
                    block: 'news',
                    mix : { block: 'news-list', elem : 'item'},
                    content: [
                      {
                        mix : { block : 'news', elem : 'image'},
                        block: 'image',
                        url: '/i/document.png'
                      },
                      {
                        elem : 'content',
                        content: [
                          {
                            block : 'news-content',
                            content: [
                              {
                                mix : { block: 'news-content', elem : 'title'},
                                block : 'text',
                                mods : { size : 'm'},
                                content : item.newsContentTitle
                              },
                              {
                                mix : { block: 'news-content', elem : 'date'},
                                block : 'text',
                                mods : { size : 's'},
                                content : item.newsContentDate
                              },
                              {
                                mix : { block: 'news-content', elem : 'text'},
                                block : 'text',
                                mods : { size : 's'},
                                content : item.newsContentText
                              }
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
          mods : { lw : 4, xl : 4, xxl : 4 },
          content : [
            {
              block : 'position-list',
              mix : { block : 'kit', elem : 'item'},
              content: [
                {
                  position : 'UI Engineer',
                  icon : '/i/yandex.png',
                  alt : 'yandex'
                },
                {
                  position : 'UX Designer',
                  icon : '/i/tinder.png',
                  alt : 'tinder'
                },
                {
                  position : 'Chief design officer',
                  icon : '/i/medium.png',
                  alt : 'medium'
                },
                {
                  position : 'UI Designer',
                  icon : '/i/uber.png',
                  alt : 'uber'
                },
                {
                  position : 'Illustrator',
                  icon : '/i/mailru.png',
                  alt : 'mailru'
                },
                {
                  position : 'Iteraction designer',
                  icon : '/i/dribbble.png',
                  alt : 'dribbble'
                }
              ].map(function(item) {
                return [
                  {
                    block: 'position',
                    mix : { block: 'position-list', elem : 'item'},
                    content : [
                      {
                        mix : { block : 'position', elem : 'image'},
                        block: 'image',
                        alt: item.alt,
                        url: item.icon
                      },
                      {
                        mix : { block : 'position', elem : 'text'},
                        block : 'text',
                        mods : { size : 'm'},
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
      mix : { block : 'page-row'},
      content : [
        {
          elem : 'col',
          mods : { lw : 4, xl : 4, xxl : 4 },
          content : [
            {
              block : 'kit',
              content : [
                {
                  block : 'user-tile',
                  mix : { block : 'kit', elem : 'item'},
                  content: [
                    {
                      mix : { block : 'user-tile', elem : 'icon'},
                      block: 'image',
                      alt: 'elizabeth',
                      url: '/i/juliezhuo.jpg'
                    },
                    {
                      mix : { block : 'user-tile', elem : 'name'},
                      block : 'text',
                      mods : { size : 'm'},
                      content : 'Julie Zhuo'
                    },
                    {
                      mix : { block : 'user-tile', elem : 'twitter'},
                      block : 'link',
                      mods : { theme : 'islands' },
                      url : 'http://twitter.com/joulee',
                      content : '@joulee'
                    },
                    {
                      elem : 'description',
                      content : [
                        {
                          block : 'text',
                          mods : { size : 's', display : 'inline' },
                          content : 'Design director at Facebook'
                        }
                      ]
                    },
                    {
                      elem : 'action',
                      content : [
                        {
                          block : 'button',
                          mods : { theme : 'islands', size : 'l', view : 'action' },
                          text : 'Читать'
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'expert-tile',
                  mix : { block : 'kit', elem : 'item'},
                  content : [
                    {
                      block : 'expert-info',
                      mix : { block : 'expert-tile', elem : 'info'},
                      content : [
                        {
                          mix : { block : 'expert-info', elem : 'image'},
                          block: 'image',
                          alt: 'ahwng',
                          url: '/i/ahwng.jpg'
                        },
                        {
                          mix : { block : 'expert-info', elem : 'name'},
                          block : 'text',
                          mods : { size : 'm'},
                          content : 'Andrew Hwang'
                        }
                      ]
                    },
                    {
                      mix : { block : 'expert-tile', elem : 'description'},
                      block : 'text',
                      mods : { size : 's'},
                      content : 'Product designer at Facebook. Encourager of empathy.'
                    }
                  ]
                },
              ]
            },
          ]
        },
        {
          elem : 'col',
          mods : { lw : 4, xl : 4, xxl : 4 },
          content : [
            {
              block : 'kit',
              content : [
                {
                  block : 'product-tile',
                  mix : { block : 'kit', elem : 'item'},
                  content: [
                    {
                      mix : { block : 'product-tile', elem : 'icon'},
                      block: 'image',
                      alt: 'spotify',
                      url: '/i/spotify.png'
                    },
                    {
                      mix : { block : 'product-tile', elem : 'name'},
                      block : 'text',
                      mods : { size : 'm'},
                      content : 'Spotify'
                    },
                    {
                      mix : { block : 'product-tile', elem : 'web'},
                      block : 'link',
                      mods : { theme : 'islands' },
                      url : 'spotify.com',
                      content : 'spotify.com'
                    },
                    {
                      elem : 'description',
                      content : [
                        {
                          block : 'link',
                          mods : { theme : 'islands' },
                          url : '@SpotifyCares',
                          content : '@SpotifyCares'
                        },
                        {
                          block : 'text',
                          mods : { size : 's'},
                          content : 'Music for every moment. Play, discover, and share for free. Need support? We re happy to help at'
                        },
                      ]
                    },
                    {
                      elem : 'action',
                      content : [
                        {
                          block : 'button',
                          mods : { theme : 'islands', size : 'l', view : 'action' },
                          text : 'Перейти'
                        }
                      ]
                    }
                  ]
                },
                {
                  block : 'partner-tile',
                  mix : { block : 'kit', elem : 'item'},
                  content : [
                    {
                      mix : { block : 'partner-tile', elem : 'icon'},
                      block: 'image',
                      alt: 'frankiegaw',
                      url: '/i/frankiegaw.jpg'
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block : 'text',
                          mods : { size : 'm'},
                          content : 'Facebook Design'
                        },
                        {
                          block : 'text',
                          mods : { size : 's'},
                          content : 'Stories from the design team at Facebook offices across the world'
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
          elem : 'col',
          mods : { lw : 4, xl : 4, xxl : 4 },
          content : [
            {
              block : 'kit',
              content : [
                {
                  block : 'event-tile',
                  mix : { block : 'kit', elem : 'item'},
                  content: [
                    {
                      mix : { block : 'event-tile', elem : 'icon'},
                      block: 'image',
                      alt: 'behance',
                      url: '/i/behance.jpg'
                    },
                    {
                      mix : { block : 'event-tile', elem : 'name'},
                      block : 'text',
                      mods : { size : 'm'},
                      content : 'Behance Portfolio Review'
                    },
                    {
                      mix : { block : 'event-tile', elem : 'date'},
                      block : 'text',
                      mods : { size : 's'},
                      content : '24.01.2016'
                    },
                    {
                      mix : { block : 'event-tile', elem : 'description'},
                      block : 'text',
                      mods : { size : 's'},
                      content : 'Подключитесь и получите отзывы о ваших творческих проектах'
                    },
                    {
                      elem : 'action',
                      content : [
                        {
                          block : 'button',
                          mods : { theme : 'islands', size : 'l', view : 'action' },
                          text : 'Собираюсь пойти'
                        }
                      ]
                    }
                  ]
                },
                /*
                {
                  block : 'document-tile',
                  mix : { block : 'kit', elem : 'item'},
                  content : [
                    {
                      elem : 'icon'
                    },
                    {
                      mix : { block : 'document-tile', elem : 'name'},
                      block : 'text',
                      mods : { size : 'm'},
                      content : 'Document'
                    },
                    {
                      mix : { block : 'document-tile', elem : 'text'},
                      block : 'text',
                      mods : { size : 's'},
                      content : 'Document description'
                    }
                  ]
                },
                */
              ]
            },
          ]
        }
      ]
    },
    /*
    {
      block : 'row',
      mix : { block : 'page-row'},
      content : [
        {
          elem : 'col',
          mods : { sw : 12, mw : 12, lw : 4, xl : 4, xxl : 4 },
          content : [
            {
              block : 'menu-list',
              mix : { block : 'kit', elem : 'item'},
              content : [
                {
                  mix : { block : 'menu-list', elem : 'item'},
                  block : 'menu-item',
                  content : 'item'
                },
                {
                  mix : { block : 'menu-list', elem : 'item'},
                  block : 'menu-item',
                  content : 'item'
                },
              ]
            }
          ]
        },
        {
          elem : 'col',
          mods : { sw : 12, mw : 12, lw : 4, xl : 4, xxl : 4 },
          content : [
            {
              block : 'breadcrumbs',
              mix : { block : 'kit', elem : 'item'},
              content : [
                {
                  elem : 'link',
                  content : 'link'
                },
                {
                  elem : 'dash',
                  content : '/'
                },
                {
                  elem : 'link',
                  content : 'link'
                },
                {
                  elem : 'dash',
                  content : '/'
                },
                {
                  elem : 'link',
                  content : 'link'
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
              block : 'tag-list',
              mix : { block : 'kit', elem : 'item'},
              content : [
                {
                  mix : { block : 'tag-list', elem : 'item'},
                  block : 'tag',
                  content : 'tag'
                },
                {
                  mix : { block : 'tag-list', elem : 'item'},
                  block : 'tag',
                  content : 'tag'
                },
                {
                  mix : { block : 'tag-list', elem : 'item'},
                  block : 'tag',
                  content : 'tag'
                },
              ]
            }
          ]
        }
      ]
    },
    */
    /*
    {
      block : 'row',
      mix : { block : 'page-row'},
      content : [
        {
          elem : 'col',
          mods : { sw : 12, mw : 12, lw : 4, xl : 4, xxl : 4 },
          mix : { block : 'kit', elem : 'item'},
          content : [
            {
              block : 'alert',
              content : [
                {
                  elem : 'icon',
                  content : [

                  ]
                },
                {
                  elem : 'text',
                  content : 'alert text'
                }
              ]
            }
          ]
        },
        {
          elem : 'col',
          mods : { sw : 12, mw : 12, lw : 4, xl : 4, xxl : 4 },
          mix : { block : 'kit', elem : 'item'},
          content : [
            {
              block : 'tip',
              content : [
                {
                  elem : 'icon',
                  content : [

                  ]
                },
                {
                  elem : 'text',
                  content : 'tip text'
                }
              ]
            }
          ]
        },
        {
          elem : 'col',
          mods : { sw : 12, mw : 12, lw : 4, xl : 4, xxl : 4 },
          mix : { block : 'kit', elem : 'item'},
          content : [
            {
              block : 'success',
              content : [
                {
                  elem : 'icon',
                  content : [

                  ]
                },
                {
                  elem : 'text',
                  content : 'success text'
                }
              ]
            }
          ]
        }
      ]
    },
    */
    {
      block : 'row',
      mix : { block : 'page-row'},
      content : [
        {
          elem : 'col',
          mods : { lw : 12, xl : 12, xxl : 12 },
          content : [
            {
              block : 'footer',
              content : [

                {
                  block : 'link',
                  mods : { theme : 'islands' },
                  url : 'http://bem.info',
                  content : 'Stay BEMed!',
                  target : '_blank'
                }
              ]
            },
          ]
        }
      ]
    },
  ]
};
