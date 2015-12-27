module.exports = {
  block : 'page',
  title : 'STAY BEMed',
  favicon : '/favicon.ico',
  head : [
    { elem : 'meta', attrs : { name : 'description', content : '' } },
    { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
    { elem : 'css', url : 'index.min.css' }
  ],
  scripts: [{ elem : 'js', url : 'index.min.js' }],
  mods : { theme : 'islands' },
  content : [
    /*
    {
      block : 'header',
      mix : { block : 'clearfix'},
      content : [
        {
          elem: 'logo',
          mix : { block : 'clearfix'},
          mods: { align: 'left' },
          content: [
            {
              block: 'logo',
              mix : { block : 'clearfix'},
              content: {
                block: 'image',
                alt: 'Яндекс',
                url: '/i/logo.svg'
              }
            },
            {
              elem: 'nameplate',
              url: 'http://koloskov.kz',
              content: 'БЭМНУТЫЕ'
            },
          ]
        },
        {
          block : 'nav',
          mix : { block : 'clearfix'},
          content : [
            {
              block : 'link',
              mix : { block : 'nav', elem : 'item'},
              mods : { theme : 'islands', size : 'l' , focused : true },
              url : 'https://bem.info/',
              content : 'Компоненты'
            },
            {
              block : 'link',
              mix : { block : 'nav', elem : 'item'},
              mods : { theme : 'islands', size : 'l'},
              url : 'https://gist.github.com/koloskof/1123be38177d7b2dad68',
              content : 'Гайды'
            },
            {
              block : 'link',
              mix : { block : 'nav', elem : 'item'},
              mods : { theme : 'islands', size : 'l'},
              url : 'https://gist.github.com/koloskof/444cf7be8136a041bb10/',
              content : 'Контрибьюторам'
            },
          ]
        }
      ]
    },
    */

    {
      block : 'promo',
      content : [
        {
          elem : 'heading',
          content : 'STAY BEMed'
        },
        {
          elem : 'description',
          content : 'Основная идея БЭМ-методологии — сделать разработку простой и быстрой, а работу в команде — понятной и слаженной.'
        },
        {
          elem : 'download',
          content : [
            {
              block : 'button',
              mods : { theme : 'islands', size : 'l', view : 'action' },
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
                    {
                      block : 'checkbox',
                      mods : { theme : 'islands', size : 'l', type : 'button' },
                      name: 'tile',
                      val: '1',
                      text : 'Навигация'
                    },
                    {
                      block : 'checkbox',
                      mods : { theme : 'islands', size : 'l', type : 'button' },
                      name: 'tile',
                      val: '1',
                      text : 'Нотификации'
                    },
                    {
                      block : 'checkbox',
                      mods : { theme : 'islands', size : 'l', type : 'button' },
                      name: 'tile',
                      val: '1',
                      text : 'Модалки'
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
          mods : { sw : 12, mw : 12, lw : 4, xl : 4, xxl : 4 },
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
          mods : { sw : 12, mw : 12, lw : 4, xl : 4, xxl : 4 },
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
          mods : { sw : 12, mw : 12, lw : 4, xl : 4, xxl : 4 },
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
                      documentTitle : 'Методология',
                      documentText : 'Основная идея БЭМ-методологии'
                    },
                    {
                      documentTitle : 'Краткий обзор библиотек',
                      documentText : 'Краткий обзор библиотек'
                    },
                    {
                      documentTitle : 'Инструменты',
                      documentText : 'Краткий обзор инструментов'
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
                      topNewsDate : '18:05',
                      topNewsText : '«Яндекс» попросил Еврокомиссию расследовать возможную монополию Google в Android'
                    },
                    {
                      topNewsDate : '12:45',
                      topNewsText : '«Яндекс.Деньги» откроет бесплатную школу для мобильных разработчиков'
                    },
                    {
                      topNewsDate : '13:16',
                      topNewsText : '«Яндекс.Почта» представила обновленный веб-интерфейс сервиса'
                    }
                  ].map(function(item) {
                    return [
                      {
                        block: 'top-news',
                        mix : { block: 'top-news-list', elem : 'item' },
                        content: [
                          {
                            elem : 'date',
                            content : [
                              {
                                mix : { block: 'top-news', elem : 'date' },
                                block : 'text',
                                mods : { size : 'm' },
                                content : item.topNewsDate
                              },
                              {
                                mix : { block: 'top-news', elem : 'text' },
                                block : 'text',
                                mods : { size : 's' },
                                content : item.topNewsText
                              }
                            ]
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
                  newsContentTitle : 'Релиз документации: i-bem',
                  newsContentDate : '3 ноября 2015',
                  newsContentText : 'Мы подготовили большое обновление документации к технологии i-bem и с радостью делимся новостями с вами!'
                },
                {
                  newsContentTitle : 'Релиз: bem-core v2.8.0',
                  newsContentDate : '30 сентября 2015',
                  newsContentText : 'Мы рады сообщить вам о выпуске очередного минорного релиза bem-core 2.8.0'
                },
                {
                  newsContentTitle : 'Релиз: enb-stylus v2.0.0',
                  newsContentDate : '26 августа 2015',
                  newsContentText : 'Мы полностью переписали технологии для сборки стилей'
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
          mods : { sw : 12, mw : 12, lw : 4, xl : 4 },
          content : [
            {
              block : 'position-list',
              mix : { block : 'kit', elem : 'item'},
              content: [
                {
                  position : 'Дизайнер интерфейсов',
                  icon : '/i/yandex.png',
                  alt : 'yandex'
                },
                {
                  position : 'Разработчик интерфейсов',
                  icon : '/i/tinder.png',
                  alt : 'tinder'
                },
                {
                  position : 'Информационный архитектор',
                  icon : '/i/medium.png',
                  alt : 'medium'
                },
                {
                  position : 'Дизайн-менеджер',
                  icon : '/i/uber.png',
                  alt : 'uber'
                },
                {
                  position : 'Иллюстратор',
                  icon : '/i/mailru.png',
                  alt : 'mailru'
                },
                {
                  position : 'Арт директор',
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
          mods : { sw : 12, mw : 12, lw : 4, xl : 4, xxl : 4 },
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
                      url: '/i/elizabeth.jpg'
                    },
                    {
                      mix : { block : 'user-tile', elem : 'name'},
                      block : 'text',
                      mods : { size : 'm'},
                      content : 'Elizabeth Lin'
                    },
                    {
                      mix : { block : 'user-tile', elem : 'twitter'},
                      block : 'link',
                      mods : { theme : 'islands' },
                      url : '@lalizlabeth',
                      content : '@lalizlabeth'
                    },
                    {
                      elem : 'description',
                      content : [
                        {
                          block : 'text',
                          mods : { size : 's'},
                          content : 'Designer + Aspiring Princess. Product Designer'
                        },
                        {
                          block : 'link',
                          mods : { theme : 'islands' },
                          url : '@KhanAcademy',
                          content : [
                            {
                              block : 'text',
                              mods : { size : 's'},
                              content : '@KhanAcademy'
                            }
                          ]
                        },
                        {
                          block : 'text',
                          mods : { size : 's'},
                          content : '. '
                        },
                        {
                          block : 'link',
                          mods : { theme : 'islands' },
                          url : '@Cal 2014',
                          content : [
                            {
                              block : 'text',
                              mods : { size : 's'},
                              content : '@Cal 2014'
                            }
                          ]
                        },
                        {
                          block : 'text',
                          mods : { size : 's'},
                          content : '. Previously'
                        },
                        {
                          block : 'link',
                          mods : { theme : 'islands' },
                          url : '@Sprig',
                          content : '@Sprig'
                        },
                        {
                          block : 'text',
                          mods : { size : 's'},
                          content : ' '
                        },
                        {
                          block : 'link',
                          mods : { theme : 'islands' },
                          url : '@SpotifyCares',
                          content : '@SpotifyCares'
                        },
                        {
                          block : 'text',
                          mods : { size : 's'},
                          content : 'and'
                        },
                        {
                          block : 'link',
                          mods : { theme : 'islands' },
                          url : '@LinkedIn',
                          content : '@LinkedIn'
                        },
                        {
                          block : 'text',
                          mods : { size : 's'},
                          content : '.'
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
                          elem : 'image'
                        },
                        {
                          mix : { block : 'expert-info', elem : 'name'},
                          block : 'text',
                          mods : { size : 'm'},
                          content : 'Name'
                        }
                      ]
                    },
                    {
                      mix : { block : 'expert-tile', elem : 'description'},
                      block : 'text',
                      mods : { size : 's'},
                      content : 'description'
                    }
                  ]
                },
              ]
            },
          ]
        },
        {
          elem : 'col',
          mods : { sw : 12, mw : 12, lw : 4, xl : 4, xxl : 4 },
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
                      elem : 'icon'
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block : 'text',
                          mods : { size : 'm'},
                          content : 'Name'
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
          mods : { sw : 12, mw : 12, lw : 4, xl : 4, xxl : 4 },
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
                      content : 'Ключевые документ'
                    },
                    {
                      mix : { block : 'document-tile', elem : 'text'},
                      block : 'text',
                      mods : { size : 's'},
                      content : 'Раздел содержи наиболее востребованные и нужные документы'
                    }
                  ]
                },
              ]
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
              mix : { block : 'footer'},
              block : 'link',
              mods : { theme : 'islands' },
              url : 'https://twitter.com/hashtag/staybemed',
              content : '#staybemed'
            },
          ]
        }
      ]
    }
  ]
};
