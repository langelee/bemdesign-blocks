module.exports = {
  block : 'page',
  title : 'Stay BEMed',
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
                url: '../../img/logo.svg'
              }
            },
            {
              elem: 'nameplate',
              url: '//music.yandex.ru',
              content: 'Интерфейс'
            },
          ]
        },
        {
          block : 'nav',
          mix : { block : 'clearfix'},
          content : [
            {
              elem : 'item',
              content : 'Компоненты',
              mods : {'active' : true}
            },
            {
              elem : 'item',
              content : 'Гайды'
            },
            {
              elem : 'item',
              content : 'Контрибьютерам'
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
              block : 'promo',
              content : [
                {
                  elem : 'heading',
                  content : 'Stay BEMed'
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
                  userName : 'Vadim Sherbakov',
                  userPosition : 'Interactive Art Director'
                },
                {
                  userName : 'Tobias van Schneider',
                  userPosition : 'Product designer'
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
                  position : 'Дизайнер интерфейсов'
                },  
                {
                  position : 'Разработчик интерфейсов'
                },
                {
                  position : 'Информационный архитектор'
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
                      elem : 'icon',
                      content : ''
                    },
                    {
                      elem : 'name',
                      content : 'User'
                    },
                    {
                      elem : 'description',
                      content : 'description'
                    },
                    {
                      elem : 'action',
                      content : [
                        {
                          block : 'button',
                          mods : { theme : 'islands', size : 'm', view : 'action' },
                          text : 'Купить сейчас!'
                        }
                      ]
                    }
                  ]
                }
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
                      elem : 'icon',
                      content : ''
                    },
                    {
                      elem : 'name',
                      content : 'Product'
                    },
                    {
                      elem : 'description',
                      content : 'description'
                    },
                    {
                      elem : 'action',
                      content : [
                        {
                          block : 'button',
                          mods : { theme : 'islands', size : 'm', view : 'action' },
                          text : 'Купить сейчас!'
                        }
                      ]
                    }
                  ]
                }
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
                      elem : 'icon',
                      content : ''
                    },
                    {
                      elem : 'name',
                      content : 'Вебинар по БЭМ: декларативные шаблоны '
                    },
                    {
                      elem : 'description',
                      content : 'Онлайн'
                    },
                    {
                      elem : 'action',
                      content : [
                        {
                          block : 'button',
                          mods : { theme : 'islands', size : 'm', view : 'action' },
                          text : 'Купить сейчас!'
                        }
                      ]
                    }
                  ]
                }
              ]
            },
          ]
        }
      ]
    },
    {
      block : 'test',
      content : [
        {
          elem : 'inner', 
          content : 'text',
          mods : { active : true }
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
              content : 'Stay BEMed'
            }
          ]
        }
      ]
    }
  ]
};
