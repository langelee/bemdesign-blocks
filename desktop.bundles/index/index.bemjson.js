module.exports = {
  block : 'page',
  title : 'BEM Design',
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

    /* eliv-icons
    {
      bem: false,
      tag: 'div',
      attrs: {
        'data-icon': 'ei-spinner',
        'data-size': 'm'
      }
    },
    {
      block : 'row',
      content : [
        {
          elem : 'col',
          mods : { lw : 12, xl : 12, xxl : 12 },
          content : [
            {
              block : 'kit',
              content : [
                {
                  block : 'footer',
                  mix : { block : 'kit', elem : 'item'},
                  content : [


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
      block : 'promo',
      content : [
        {
          block : 'image',
          height : '160',
          url : 'data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 101.5 83.9%22 enable-background%3D%22new 0 0 101.5 83.9%22%3E%3Cg fill%3D%22%23010101%22%3E%3Crect x%3D%2259.9%22 y%3D%2271.8%22 width%3D%2241.5%22 height%3D%2212%22%2F%3E%3Cpath d%3D%22M46 23.8h-22.2v-23.8h-23.8v71.9h46c7.7 0 13.9-6.2 13.9-13.9v-20.3c0-7.7-6.2-13.9-13.9-13.9z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E'
        } ,
        {
          mix : { block : 'promo', elem : 'heading'},
          block : 'text',
          mods : { size : 'xl'},
          content : 'BEM Design'
        },
        {
          mix : { block : 'promo', elem : 'description'},
          block : 'text',
          mods : { size : 's' },
          content : 'The main idea of BEM methodology is to speed development process up and ease the teamwork of developers.'
        },
        {
          elem : 'download',
          content : [
            {
              block : 'button',
              mods : { theme : 'islands', size : 'xl', view : 'action', type : 'link' },
              url : 'https://github.com/bemdesign',
              text : 'Quick start'
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
          mods : { lw : 6, xl : 6, xxl : 6 },
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
                      name: 'colors',
                      val: '1',
                      text : 'colors'
                    },
                    {
                      block : 'checkbox',
                      mods : { theme : 'islands', size : 'l', type : 'button' },
                      name: 'spaces',
                      val: '1',
                      text : 'spaces'
                    },
                    {
                      block : 'checkbox',
                      mods : { theme : 'islands', size : 'l', type : 'button' },
                      name: 'avatars',
                      val: '1',
                      text : 'avatars'
                    },
                    {
                      block : 'checkbox',
                      mods : { theme : 'islands', size : 'l', type : 'button' },
                      name: 'icons',
                      val: '1',
                      text : 'icons'
                    },
                    {
                      block : 'checkbox',
                      mods : { theme : 'islands', size : 'l', type : 'button' },
                      name: 'typography',
                      val: '1',
                      text : 'typography'
                    },
                  ]
                }
              ]
            }
          ]
        },
        {
          elem : 'col',
          mods : { lw : 6, xl : 6, xxl : 6   },
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
                      text : 'forms'
                    },
                    {
                      block : 'checkbox',
                      mods : { theme : 'islands', size : 'l', type : 'button' },
                      name: 'list',
                      val: '1',
                      text : ' lists'
                    },
                    {
                      block : 'checkbox',
                      mods : { theme : 'islands', size : 'l', type : 'button' },
                      name: 'tile',
                      val: '1',
                      text : 'tiles'
                    },
                    {
                      block : 'checkbox',
                      mods : { theme : 'islands', size : 'l', type : 'button' },
                      name: 'sections',
                      val: '1',
                      text : 'sections'
                    },
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    /* Colors */
    {
      block : 'row',
      mix : { block : 'page-row'},
      content : [
        {
          elem : 'col',
          mods : { lw : 12, xl : 12, xxl : 12 },
          content : [
            {
              block : 'kit',
              content : [
                {
                  elem : 'item',
                  content : [
                    {
                      block : 'kit-item-header',
                      content : [
                        {
                          elem : 'name',
                          content : [
                            {
                              block : 'text',
                              mods : { size : 'l' },
                              content : 'Colors'
                            },
                          ]
                        },
                        {
                          elem : 'name',
                          content : [
                            {
                              block : 'text',
                              mods : { size : 's',},
                              content : 'Description description description'
                            },
                          ]
                        }
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
          mods : { lw : 3, xl : 3, xxl : 3 },
          content : [
            {
              block : 'color',
              content : [
                {
                  elem : 'image',
                  mods : { color: 'project'}
                },
                {
                  elem : 'text',
                  content : [
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : '$project'
                    },
                    /*
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : 'hsl(48, 100%, 50%)'
                    },
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : '#fc0'
                    },
                    */
                  ]
                }
              ]
            },
            {
              block : 'color',
              content : [
                {
                  elem : 'image',
                  mods : { color: 'base'}
                },
                {
                  elem : 'text',
                  content : [
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : '$base'
                    },
                    /*
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : 'hsl(0, 0%, 0%)'
                    },
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : '#000'
                    }
                    */
                  ]
                }
              ]
            },
            {
              block : 'color',
              content : [
                {
                  elem : 'image',
                  mods : { color: 'normal'}
                },
                {
                  elem : 'text',
                  content : [
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : '$normal'
                    },
                    /*
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : 'hsl(40, 14%, 96%) '
                    },
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : '#f6f5f3'
                    }
                    */
                  ]
                }
              ]
            },
            {
              block : 'color',
              content : [
                {
                  elem : 'image',
                  mods : { color: 'clean'}
                },
                {
                  elem : 'text',
                  content : [
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : '$clean'
                    },
                    /*
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : 'hsl(0, 0%, 100%)'
                    },
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : '#fff'
                    }
                    */
                  ]
                }
              ]
            },
            {
              block : 'color',
              content : [
                {
                  elem : 'image',
                  mods : { color: 'alert'}
                },
                {
                  elem : 'text',
                  content : [
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : '$alert'
                    },
                    /*
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : 'hsl(0, 100%, 47%)'
                    },
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : '#e00'
                    }
                    */
                  ]
                }
              ]
            },
            {
              block : 'color',
              content : [
                {
                  elem : 'image',
                  mods : { color: 'active'}
                },
                {
                  elem : 'text',
                  content : [
                    {
                      block : 'text',
                      mods : { color: 'base'},
                      content : '$active'
                    },
                    /*
                    {
                      block : 'text',
                      mods : { color: 'base'},
                      content : 'hsl(120, 100%, 23%)'
                    },
                    {
                      block : 'text',
                      mods : { color: 'base'},
                      content : '#070'
                    }
                    */
                  ]
                }
              ]
            },
            {
              block : 'color',
              content : [
                {
                  elem : 'image',
                  mods : { color: 'link'}
                },
                {
                  elem : 'text',
                  content : [
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : '$link'
                    },
                    /*
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : 'hsl(240, 47%, 50%)'
                    },
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : '#44b'
                    }
                    */
                  ]
                }
              ]
            },
          ]
        },
        {
          elem : 'col',
          mods : { lw : 3, xl : 3, xxl : 3 },
          content : [
            {
              block : 'color',
              content : [
                {
                  elem : 'image',
                  mods : { color: 'l-project-63'}
                },
                {
                  elem : 'text',
                  content : [
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : 'lighten($project, 63%)'
                    },
                    /*
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : 'hsl(48, 100%, 63%)'
                    },
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : '#ffdb4d'
                    }
                    */
                  ]
                }
              ]
            },
            {
              block : 'color',
              content : [
                {
                  elem : 'image',
                  mods : { color: 'l-base-18'}
                },
                {
                  elem : 'text',
                  content : [
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : 'lighten($base, 18%)'
                    },
                    /*
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : 'hsl(0, 0%, 18%)'
                    },
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : '#2e2e2e'
                    }
                    */
                  ]
                }
              ]
            },
            {
              block : 'color',
              content : [
                {
                  elem : 'image',
                  mods : { color: 'l-normal-86'}
                },
                {
                  elem : 'text',
                  content : [
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : 'lighten($normal, 86%)'
                    },
                    /*
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : 'hsl(40, 14%, 86%)'
                    },
                    */
                  ]
                }
              ]
            },
          ]
        },
        {
          elem : 'col',
          mods : { lw : 3, xl : 3, xxl : 3 },
          content : [
            {
              block : 'color',
              content : [
                {
                  elem : 'image',
                  mods : { color: 'l-project-81'}
                },
                {
                  elem : 'text',
                  content : [
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : 'lighten($project, 81%)'
                    },
                    /*
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : 'hsl(47, 100%, 81%)'
                    },
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : '#ffeba0'
                    }
                    */
                  ]
                }
              ]
            },
            {
              block : 'color',
              content : [
                {
                  elem : 'image',
                  mods : { color: 'l-base-60'}
                },
                {
                  elem : 'text',
                  content : [
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : 'lighten($base, 60%)'
                    },
                    /*
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : 'hsl(0, 0%, 60%)'
                    },
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : '#999'
                    }
                    */
                  ]
                }
              ]
            }
          ]
        },
        {
          elem : 'col',
          mods : { lw : 3, xl : 3, xxl : 3 },
          content : [
            {
              block : 'color',
              content : [

              ]
            },
            {
              block : 'color',
              content : [
                {
                  elem : 'image',
                  mods : { color: 'l-base-80  '}
                },
                {
                  elem : 'text',
                  content : [
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : 'lighten($base, 80%)'
                    },
                    /*
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : 'hsl(0, 0%, 80%)'
                    },
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : '#ccc'
                    }
                    */
                  ]
                }
              ]
            }
          ]
        },
      ]
    },



    /* Spaces */
    {
      block : 'row',
      mix : { block : 'page-row'},
      content : [
        {
          elem : 'col',
          mods : { lw : 12, xl : 12, xxl : 12 },
          content : [
            {
              block : 'kit',
              content : [
                {
                  elem : 'item',
                  content : [
                    {
                      block : 'kit-item-header',
                      content : [
                        {
                          elem : 'name',
                          content : [
                            {
                              block : 'text',
                              mods : { size : 'l' },
                              content : 'Spaces'
                            },
                          ]
                        },
                        {
                          elem : 'name',
                          content : [
                            {
                              block : 'text',
                              mods : { size : 's',},
                              content : 'Description description description'
                            },
                          ]
                        }
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
              block : 'space',
              content : [
                {
                  elem : 'image',
                  content : [
                    {
                      block : 'space-image',
                      mods : { size : 'xxl'},
                    }
                  ]
                },
                {
                  elem : 'text',
                  content : [
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : '$xxl'
                    }
                  ]
                }
              ]
            },
            {
              block : 'space',
              content : [
                {
                  elem : 'image',
                  content : [
                    {
                      block : 'space-image',
                      mods : { size : 'xl'},
                    }
                  ]
                },
                {
                  elem : 'text',
                  content : [
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : '$xl'
                    }
                  ]
                }
              ]
            },
            {
              block : 'space',
              content : [
                {
                  elem : 'image',
                  content : [
                    {
                      block : 'space-image',
                      mods : { size : 'l'},
                    }
                  ]
                },
                {
                  elem : 'text',
                  content : [
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : '$l'
                    }
                  ]
                }
              ]
            },
          ]
        },
        {
          elem : 'col',
          mods : { lw : 4, xl : 4, xxl : 4 },
          content : [
            {
              block : 'space',
              content : [
                {
                  elem : 'image',
                  content : [
                    {
                      block : 'space-image',
                      mods : { size : 'm'},
                    }
                  ]
                },
                {
                  elem : 'text',
                  content : [
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : '$m'
                    }
                  ]
                }
              ]
            },
            {
              block : 'space',
              content : [
                {
                  elem : 'image',
                  content : [
                    {
                      block : 'space-image',
                      mods : { size : 's'},
                    }
                  ]
                },
                {
                  elem : 'text',
                  content : [
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : '$s'
                    }
                  ]
                }
              ]
            },
            {
              block : 'space',
              content : [
                {
                  elem : 'image',
                  content : [
                    {
                      block : 'space-image',
                      mods : { size : 'xs'},
                    }
                  ]
                },
                {
                  elem : 'text',
                  content : [
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : '$xs'
                    }
                  ]
                }
              ]
            },
          ]
        },
        {
          elem : 'col',
          mods : { lw : 4, xl : 4, xxl : 4 },
          content : [
            {
              block : 'space',
              content : [
                {
                  elem : 'image',
                  content : [
                    {
                      block : 'space-image',
                      mods : { size : 'xxs'},
                    }
                  ]
                },
                {
                  elem : 'text',
                  content : [
                    {
                      block : 'text',
                      mods : { size : 's'},
                      content : '$xxs'
                    }
                  ]
                }
              ]
            },
          ]
        },
      ]
    },

    /* Avatars */
    {
      block : 'row',
      mix : { block : 'page-row'},
      content : [
        {
          elem : 'col',
          mods : { lw : 12, xl : 12, xxl : 12 },
          content : [
            {
              block : 'kit',
              content : [
                {
                  elem : 'item',
                  content : [
                    {
                      block : 'kit-item-header',
                      content : [
                        {
                          elem : 'name',
                          content : [
                            {
                              block : 'text',
                              mods : { size : 'l' },
                              content : 'Avatars'
                            },
                          ]
                        },
                        {
                          elem : 'name',
                          content : [
                            {
                              block : 'text',
                              mods : { size : 's',},
                              content : 'Description description description'
                            },
                          ]
                        }
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
              block : 'avatar',
              content : [
                {
                  elem : 'image',
                  content : [
                    {
                      block : 'avatar-image',
                      mods : { size : 'l' }
                    }
                  ]
                },
                {
                  mix : { block : 'avatar', elem : 'text'},
                  block : 'text',
                  mods : { size : 's' },
                  content : '$l'
                }
              ]
            },
          ]
        },
        {
          elem : 'col',
          mods : { lw : 4, xl : 4, xxl : 4 },
          content : [
            {
              block : 'avatar',
              content : [
                {
                  elem : 'image',
                  content : [
                    {
                      block : 'avatar-image',
                      mods : { size : 'm' }
                    }
                  ]
                },
                {
                  mix : { block : 'avatar', elem : 'text'},
                  block : 'text',
                  mods : { size : 's' },
                  content : '$m'
                }
              ]
            },
          ]
        },
        {
          elem : 'col',
          mods : { lw : 4, xl : 4, xxl : 4 },
          content : [
            {
              block : 'avatar',
              content : [
                {
                  elem : 'image',
                  content : [
                    {
                      block : 'avatar-image',
                      mods : { size : 's' }
                    }
                  ]
                },
                {
                  mix : { block : 'avatar', elem : 'text'},
                  block : 'text',
                  mods : { size : 's' },
                  content : '$l'
                }
              ]
            }
          ]
        },
      ]
    },

    /* Icons */
    {
      block : 'row',
      mix : { block : 'page-row'},
      content : [
        {
          elem : 'col',
          mods : { lw : 12, xl : 12, xxl : 12 },
          content : [
            {
              block : 'kit',
              content : [
                {
                  elem : 'item',
                  content : [
                    {
                      block : 'kit-item-header',
                      content : [
                        {
                          elem : 'name',
                          content : [
                            {
                              block : 'text',
                              mods : { size : 'l' },
                              content : 'Icons'
                            },
                          ]
                        },
                        {
                          elem : 'name',
                          content : [
                            {
                              block : 'text',
                              mods : { size : 's',},
                              content : 'Description description description'
                            },
                          ]
                        }
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
              block : 'evil-icon',
              content : [
                {
                  elem : 'image',
                  content : [
                    {
                      block : 'evil-icon-image',
                      mods : { size : 'l' },
                      content : [
                        {
                          bem: false,
                          tag: 'div',
                          attrs: {
                            'data-icon': 'ei-spinner',
                            'data-size': 'l'
                          }
                        },
                      ]
                    }
                  ]
                },
                {
                  elem : 'text',
                  content : [
                    {
                      block : 'text',
                      mods : { size : 's' },
                      content : '$l'
                    }
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
              block : 'evil-icon',
              content : [
                {
                  elem : 'image',
                  content : [
                    {
                      block : 'evil-icon-image',
                      mods : { size : 'm' },
                      content : [
                        {
                          bem: false,
                          tag: 'div',
                          attrs: {
                            'data-icon': 'ei-spinner',
                            'data-size': 'm'
                          }
                        },
                      ]
                    }
                  ]
                },
                {
                  elem : 'text',
                  content : [
                    {
                      block : 'text',
                      mods : { size : 's' },
                      content : '$m'
                    }
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
              block : 'evil-icon',
              content : [
                {
                  elem : 'image',
                  content : [
                    {
                      block : 'evil-icon-image',
                      mods : { size : 's' },
                      content : [
                        {
                          bem: false,
                          tag: 'div',
                          attrs: {
                            'data-icon': 'ei-spinner',
                            'data-size': 's'
                          }
                        },
                      ]
                    }
                  ]
                },
                {
                  elem : 'text',
                  content : [
                    {
                      block : 'text',
                      mods : { size : 's' },
                      content : '$s'
                    }
                  ]
                }
              ]
            }
          ]
        },
      ]
    },

    /* Typography */
    {
      block : 'row',
      mix : { block : 'page-row'},
      content : [
        {
          elem : 'col',
          mods : { lw : 12, xl : 12, xxl : 12 },
          content : [
            {
              block : 'kit',
              content : [
                {
                  elem : 'item',
                  content : [
                    {
                      block : 'kit-item-header',
                      content : [
                        {
                          elem : 'name',
                          content : [
                            {
                              block : 'text',
                              mods : { size : 'l' },
                              content : 'Typography'
                            },
                          ]
                        },
                        {
                          elem : 'name',
                          content : [
                            {
                              block : 'text',
                              mods : { size : 's',},
                              content : 'Description description description'
                            },
                          ]
                        }
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
              block : 'typography',
              content : [
                {
                  mix : { block : 'typography', elem : 'item'},
                  block : 'text',
                  mods : { size : 'xl'},
                  content : 'Typography'
                },
                {
                  mix : { block : 'typography', elem : 'item'},
                  block : 'text',
                  mods : { size : 'l'},
                  content : 'Typography'
                },
                {
                  mix : { block : 'typography', elem : 'item'},
                  block : 'text',
                  mods : { size : 'm'},
                  content : 'Typography'
                },
                {
                  mix : { block : 'typography', elem : 'item'},
                  block : 'text',
                  mods : { size : 's'},
                  content : 'Typography'
                },
                {
                  mix : { block : 'typography', elem : 'item'},
                  block : 'text',
                  mods : { size : 'xs', transform : 'uppercase'},
                  content : 'Typography'
                }
              ]
            },
            {
              block : 'typography',
              content : [
                {
                  mix : { block : 'typography', elem : 'item' },
                  block : 'text',
                  mods : { size : 'l', view : 'base'},
                  content : 'Typography'
                },
                {
                  mix : { block : 'typography', elem : 'item'},
                  block : 'text',
                  mods : { size : 'l', view : 'project'},
                  content : 'Typography'
                },
                {
                  mix : { block : 'typography', elem : 'item'},
                  block : 'text',
                  mods : { size : 'l', view : 'alert'},
                  content : 'Typography'
                },
                {
                  mix : { block : 'typography', elem : 'item'},
                  block : 'text',
                  mods : { size : 'l', view : 'active'},
                  content : 'Typography'
                },
                {
                  mix : { block : 'typography', elem : 'item'},
                  block : 'text',
                  mods : { size : 'l', view : 'link'},
                  content : 'Typography'
                }
              ]
            },
          ]
        },
        {
          elem : 'col',
          mods : { lw : 4, xl : 4, xxl : 4 },
          content : [
            {
              block : 'typography',
              content : [
                {
                  mix : { block : 'typography', elem : 'item' },
                  block : 'text',
                  mods : { size : 'xl', weight : 'bold' },
                  content : 'Typography'
                },
                {
                  mix : { block : 'typography', elem : 'item'},
                  block : 'text',
                  mods : { size : 'l', weight : 'bold'},
                  content : 'Typography'
                },
                {
                  mix : { block : 'typography', elem : 'item'},
                  block : 'text',
                  mods : { size : 'm', weight : 'bold'},
                  content : 'Typography'
                },
                {
                  mix : { block : 'typography', elem : 'item'},
                  block : 'text',
                  mods : { size : 's', weight : 'bold'},
                  content : 'Typography'
                },
                {
                  mix : { block : 'typography', elem : 'item'},
                  block : 'text',
                  mods : { size : 'xs', weight : 'bold'},
                  content : 'Typography'
                }
              ]
            },
          ]
        },
        {
          elem : 'col',
          mods : { lw : 4, xl : 4, xxl : 4 },
          content : [
            {
              block : 'typography',
              content : [
                {
                  mix : { block : 'typography', elem : 'item'},
                  block : 'text',
                  mods : { size : 'xl', transform : 'uppercase'},
                  content : 'Typography'
                },
                {
                  mix : { block : 'typography', elem : 'item'},
                  block : 'text',
                  mods : { size : 'l', transform : 'uppercase'},
                  content : 'Typography'
                },
                {
                  mix : { block : 'typography', elem : 'item'},
                  block : 'text',
                  mods : { size : 'm', transform : 'uppercase'},
                  content : 'Typography'
                },
                {
                  mix : { block : 'typography', elem : 'item'},
                  block : 'text',
                  mods : { size : 's', transform : 'uppercase'},
                  content : 'Typography'
                },
                {
                  mix : { block : 'typography', elem : 'item'},
                  block : 'text',
                  mods : { size : 'xs', transform : 'uppercase'},
                  content : 'Typography'
                }
              ]
            },
          ]
        },
      ]
    },
    {
      block : 'row',
      mix : { block : 'page-row'},
      content : [
        {
          elem : 'col',
          mods : { lw : 12, xl : 12, xxl : 12 },
          content : [
            {
              block : 'kit',
              content : [
                {
                  elem : 'item',
                  content : [
                    {
                      block : 'kit-item-header',
                      content : [
                        {
                          elem : 'name',
                          content : [
                            {
                              block : 'text',
                              mods : { size : 'l' },
                              content : 'Forms'
                            },
                          ]
                        },
                        {
                          elem : 'name',
                          content : [
                            {
                              block : 'text',
                              mods : { size : 's',},
                              content : 'Description description description'
                            },
                          ]
                        }
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
          mods : { lw : 12, xl : 12, xxl : 12 },
          content : [
            {
              block : 'kit',
              content : [
                {
                  elem : 'item',
                  content : [
                    {
                      block : 'kit-item-info',
                      content : [
                        {
                          block : 'row',
                          content : [
                            {
                              elem : 'col',
                              mods : { lw : 4, xl : 4, xxl : 4 },
                              content : [

                              ]
                            },
                            {
                              elem : 'col',
                              mods : { lw : 4, xl : 4, xxl : 4 },
                              content : ''
                            },
                            {
                              elem : 'col',
                              mods : { lw : 4, xl : 4, xxl : 4 },
                              content : ''
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
        },
        {
          elem : 'col',
          mods : { lw : 4, xl : 4, xxl : 4 },
          content : [
            {
              block : 'kit',
              content : [
                {
                  elem : 'item',
                  content : [
                    {
                      block : 'form',
                      content : [
                        {
                          mix : { block : 'form', elem : 'header'},
                          block : 'text',
                          mods : { size : 'l',},
                          content : 'Log in'
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
                                      placeholder : 'E-mail'
                                    }
                                  ]
                                },
                                {
                                  elem : 'item',
                                  content: [
                                    {
                                      block : 'input',
                                      mods : { type: 'password', theme : 'islands', size : 'l', width : 'available' },
                                      placeholder : 'Password'
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
                                      text : 'Remember me'
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
                                      text : 'Log in'
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
                                      content : 'Forgot password?'
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
                                      content : 'Sing up now!'
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
                      block : 'codepen',
                      content : [
                        {
                          block : 'link',
                          mix : { block : 'codepen', elem : 'link'},
                          url : 'http://codepen.io',
                          content : [
                            {
                              block : 'image',
                              height : '20',
                              url : '/i/codepen.png',
                              title : 'Все подробности на bem.info'
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
          elem : 'col',
          mods : { lw : 4, xl : 4, xxl : 4 },
          content : [
            {
              block : 'kit',
              content : [
                {
                  elem : 'item',
                  content : [
                    {
                      block : 'form',
                      content : [
                        {
                          mix : { block : 'form', elem : 'header'},
                          block : 'text',
                          mods : { size : 'l',},
                          content : 'Reset your password '
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
                                      placeholder : 'E-mail'
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
                                      content : 'Forgot e-mail?'
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
                                      text : 'Reset'
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
                                      content : 'Log in'
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
                                      content : 'Sing up now!'
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
                      block : 'codepen',
                      content : [
                        {
                          block : 'link',
                          mix : { block : 'codepen', elem : 'link'},
                          url : 'http://codepen.io',
                          content : [
                            {
                              block : 'image',
                              height : '20',
                              url : '/i/codepen.png',
                              title : 'Все подробности на bem.info'
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
          elem : 'col',
          mods : { lw : 4, xl : 4, xxl : 4 },
          content : [
            {
              block : 'kit',
              content : [
                {
                  elem : 'item',
                  content : [
                    {
                      block : 'form',
                      content : [
                        {
                          mix : { block : 'form', elem : 'header'},
                          block : 'text',
                          mods : { size : 'l',},
                          content : 'Sing up'
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
                                      placeholder : 'E-mail'
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
                                      content : 'Log in'
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
                                      text : 'Sing up'
                                    }
                                  ]
                                },
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      block : 'codepen',
                      content : [
                        {
                          block : 'link',
                          mix : { block : 'codepen', elem : 'link'},
                          url : 'http://codepen.io',
                          content : [
                            {
                              block : 'image',
                              height : '20',
                              url : '/i/codepen.png',
                              title : 'Все подробности на bem.info'
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
        }
      ]
    },

    {
      block : 'row',
      mix : { block : 'page-row'},
      content : [
        {
          elem : 'col',
          mods : { lw : 12, xl : 12, xxl : 12 },
          content : [
            {
              block : 'kit',
              content : [
                {
                  elem : 'item',
                  content : [
                    {
                      block : 'kit-item-header',
                      content : [
                        {
                          elem : 'name',
                          content : [
                            {
                              block : 'text',
                              mods : { size : 'l' },
                              content : 'Lists'
                            },
                          ]
                        },
                        {
                          elem : 'name',
                          content : [
                            {
                              block : 'text',
                              mods : { size : 's',},
                              content : 'Description description description'
                            },
                          ]
                        }
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
          mods : { lw : 12, xl : 12, xxl : 12 },
          content : [
            {
              block : 'kit',
              content : [
                {
                  elem : 'item',
                  content : [
                    {
                      block : 'kit-item-info',
                      content : [
                        {
                          block : 'row',
                          content : [
                            {
                              elem : 'col',
                              mods : { lw : 4, xl : 4, xxl : 4 },
                              content : [

                              ]
                            },
                            {
                              elem : 'col',
                              mods : { lw : 4, xl : 4, xxl : 4 },
                              content : ''
                            },
                            {
                              elem : 'col',
                              mods : { lw : 4, xl : 4, xxl : 4 },
                              content : ''
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
        },
        {
          elem : 'col',
          mods : { lw : 4, xl : 4, xxl : 4 },
          content : [
            {
              block : 'kit',
              content : [
                {
                  block : 'kit',
                  content : [
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'document-list',
                          content: [
                            {
                              documentTitle : 'Inbox',
                              documentText : '200',
                              documentImage : [
                                {
                                  bem: false,
                                  attrs: {
                                    'data-icon': 'ei-envelope',
                                    'data-size': 'm'
                                  }
                                }
                              ]
                            },
                            {
                              documentTitle : 'Trash',
                              documentText : '6',
                              documentImage : [
                                {
                                  bem: false,
                                  attrs: {
                                    'data-icon': 'ei-trash',
                                    'data-size': 'm'
                                  }
                                }
                              ]
                            },

                          ].map(function(item) {
                            return [
                              {
                                block: 'document',
                                mix : { block: 'document-list', elem : 'item' },
                                content: [
                                  {
                                    mix : { block : 'document', elem : 'image' },
                                    block: 'image',
                                    content: item.documentImage
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
                      ]
                    },
                  ]
                },
                {
                  block : 'kit',
                  content : [
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'document-list',
                          content: [
                            {
                              documentTitle : 'Photos',
                              documentText : '1022',
                              documentImage : [
                                {
                                  bem: false,
                                  attrs: {
                                    'data-icon': 'ei-camera',
                                    'data-size': 'm'
                                  }
                                }
                              ]
                            },
                            {
                              documentTitle : 'Posts',
                              documentText : '102',
                              documentImage : [
                                {
                                  bem: false,
                                  attrs: {
                                    'data-icon': 'ei-pencil',
                                    'data-size': 'm'
                                  }
                                }
                              ]
                            },
                            {
                              documentTitle : 'Events',
                              documentText : '22',
                              documentImage : [
                                {
                                  bem: false,
                                  attrs: {
                                    'data-icon': 'ei-calendar',
                                    'data-size': 'm'
                                  }
                                }
                              ]
                            },
                          ].map(function(item) {
                            return [
                              {
                                block: 'document',
                                mix : { block: 'document-list', elem : 'item' },
                                content: [
                                  {
                                    mix : { block : 'document', elem : 'image' },
                                    block: 'image',
                                    content: item.documentImage
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
                      ]
                    },
                  ]
                },
                {
                  block : 'kit',
                  content : [
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'document-list',
                          content: [
                            {
                              documentTitle : 'Work',
                              documentText : '60',
                              documentImage : [
                                {
                                  bem: false,
                                  attrs: {
                                    'data-icon': 'ei-heart',
                                    'data-size': 'm'
                                  }
                                }
                              ]
                            },
                            {
                              documentTitle : 'Family',
                              documentText : '12',
                              documentImage : [
                                {
                                  bem: false,
                                  attrs: {
                                    'data-icon': 'ei-heart',
                                    'data-size': 'm'
                                  }
                                }
                              ]
                            },
                            {
                              documentTitle : 'Friends',
                              documentText : '104',
                              documentImage : [
                                {
                                  bem: false,
                                  attrs: {
                                    'data-icon': 'ei-heart',
                                    'data-size': 'm'
                                  }
                                }
                              ]
                            },
                          ].map(function(item) {
                            return [
                              {
                                block: 'document',
                                mix : { block: 'document-list', elem : 'item' },
                                content: [
                                  {
                                    mix : { block : 'document', elem : 'image' },
                                    block: 'image',
                                    content: item.documentImage
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
                      ]
                    },
                  ]
                },
                {
                  block : 'kit',
                  content : [
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'kit',
                          content : [
                            {
                              elem : 'item',
                              content : [
                                {
                                  block : 'document-list',
                                  content: [
                                    {
                                      documentTitle : 'React',
                                      documentText : 'React is a JavaScript library for creating user interfaces',
                                      documentImage : '/i/react.png'
                                    },
                                    {
                                      documentTitle : 'Pop',
                                      documentText : 'Pop is an extensible animation engine for iOS, tvOS, and OS X',
                                      documentImage : '/i/pop.png'
                                    },
                                    {
                                      documentTitle : 'Origami',
                                      documentText : 'Design prototyping',
                                      documentImage : '/i/origami.png'
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
                                            url: item.documentImage
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
                              ]
                            },
                          ]
                        },
                      ]
                    },
                  ]
                },
                {
                  block : 'kit',
                  content : [
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'kit',
                          content : [
                            {
                              elem : 'item',
                              content : [
                                {
                                  block : 'top-news-list',
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
                            },
                          ]
                        },
                      ]
                    },
                  ]
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
              block : 'kit',
              content : [
                {
                  elem : 'item',
                  content : [
                    {
                      block : 'user-list',
                      content: [
                        {
                          userName : 'Julie Zhuo',
                          userPosition : 'Design director at Facebook',
                          userIcon : '/i/juliezhuo.jpg'
                        },
                        {
                          userName : 'Andrew Hwang',
                          userPosition : 'Product designer at Facebook',
                          userIcon : '/i/ahwng.jpg'
                        },
                        {
                          userName : 'Frankie Gaw',
                          userPosition : 'Stories from the design team at Facebook',
                          userIcon : '/i/frankiegaw.jpg'
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
                  ]
                },
              ]
            },
            {
              block : 'kit',
              content : [
                {
                  elem : 'item',
                  content : [
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
                  elem : 'item',
                  content : [
                    {
                      block : 'position-list',
                      content: [
                        {
                          position : 'UI Engineer',
                          icon : '/i/messenger.png',
                          alt : 'messenger'
                        },
                        {
                          position : 'UX Designer',
                          icon : '/i/messenger.png',
                          alt : 'messenger'
                        },
                        {
                          position : 'Chief design officer',
                          icon : '/i/facebook.png',
                          alt : 'facebook'
                        },
                        {
                          position : 'UI Designer',
                          icon : '/i/messenger.png',
                          alt : 'messenger'
                        },
                        {
                          position : 'Illustrator',
                          icon : '/i/facebook.png',
                          alt : 'facebook'
                        },
                        {
                          position : 'Iteraction designer',
                          icon : '/i/facebook.png',
                          alt : 'facebook'
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
          mods : { lw : 12, xl : 12, xxl : 12 },
          content : [
            {
              block : 'kit',
              content : [
                {
                  elem : 'item',
                  content : [
                    {
                      block : 'kit-item-header',
                      content : [
                        {
                          elem : 'name',
                          content : [
                            {
                              block : 'text',
                              mods : { size : 'l' },
                              content : 'Tiles'
                            },
                          ]
                        },
                        {
                          elem : 'name',
                          content : [
                            {
                              block : 'text',
                              mods : { size : 's',},
                              content : 'Description description description'
                            },
                          ]
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
    },
    {
      elem : 'col',
      mods : { lw : 12, xl : 12, xxl : 12 },
      content : [
        {
          block : 'kit',
          content : [
            {
              elem : 'item',
              content : [
                {
                  block : 'kit-item-info',
                  content : [
                    {
                      block : 'row',
                      content : [
                        {
                          elem : 'col',
                          mods : { lw : 4, xl : 4, xxl : 4 },
                          content : [

                          ]
                        },
                        {
                          elem : 'col',
                          mods : { lw : 4, xl : 4, xxl : 4 },
                          content : ''
                        },
                        {
                          elem : 'col',
                          mods : { lw : 4, xl : 4, xxl : 4 },
                          content : ''
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
                  block : 'kit',
                  content : [
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'user-tile',
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
                      ]
                    },
                  ]
                },
                {
                  block : 'kit',
                  content : [
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'expert-tile',
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
                  elem : 'item',
                  content : [
                    {
                      block : 'product-tile',
                      content: [
                        {
                          mix : { block : 'product-tile', elem : 'icon'},
                          block: 'image',
                          alt: 'facebookdesign',
                          url: '/i/facebookdesign.jpg'
                        },
                        {
                          mix : { block : 'product-tile', elem : 'name'},
                          block : 'text',
                          mods : { size : 'm'},
                          content : 'Facebook Design'
                        },
                        {
                          mix : { block : 'product-tile', elem : 'web'},
                          block : 'link',
                          mods : { theme : 'islands' },
                          url : 'http://medium.com/@facebookdesign',
                          content : '@facebookdesign'
                        },
                        {
                          elem : 'description',
                          content : [
                            {
                              block : 'text',
                              mods : { size : 's'},
                              content : 'Stories from the design team at Facebook offices across the world'
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
                  ]
                },
                {
                  block : 'kit',
                  content : [
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'partner-tile',
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
                                  content : 'Frankie Gaw'
                                },
                              ]
                            },
                            {
                              block : 'text',
                              mods : { size : 's'},
                              content : 'Stories from the design team at Facebook offices across the world'
                            }
                          ]
                        },

                      ]
                    },
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
                  elem : 'item',
                  content : [
                    {
                      block : 'event-tile',
                      content: [
                        {
                          mix : { block : 'event-tile', elem : 'icon'},
                          block: 'image',
                          alt: 'FBF8',
                          url: '/i/fbf8.svg'
                        },
                        {
                          mix : { block : 'event-tile', elem : 'name'},
                          block : 'text',
                          mods : { size : 'm'},
                          content : 'Facebook Developer Conference'
                        },
                        {
                          mix : { block : 'event-tile', elem : 'date'},
                          block : 'text',
                          mods : { size : 's'},
                          content : 'April 12, 2016'
                        },
                        {
                          mix : { block : 'event-tile', elem : 'description'},
                          block : 'text',
                          mods : { size : 's'},
                          content : 'Join us in San Francisco for our annual developer conference'
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
      content : [
        {
          elem : 'col',
          mods : { lw : 12, xl : 12, xxl : 12 },
          content : [
            {
              block : 'kit',
              content : [
                {
                  elem : 'item',
                  content : [
                    {
                      block : 'kit-item-header',
                      content : [
                        {
                          elem : 'name',
                          content : [
                            {
                              block : 'text',
                              mods : { size : 'l' },
                              content : 'Social tiles'
                            },
                          ]
                        },
                        {
                          elem : 'name',
                          content : [
                            {
                              block : 'text',
                              mods : { size : 's',},
                              content : 'Description description description'
                            },
                          ]
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
    },
    {
      block : 'row',
      mix : { block : 'page-row'},
      content : [
        {
          elem : 'col',
          mods : { lw : 4, xl : 4, xxl : 4},
          content : [
            {
              block: 'kit',
              content: [
                {
                  elem : 'item',
                  content : [
                    {
                      block : 'social-group-tile',
                      content : [
                        {
                          elem: 'header'
                        },
                        {
                          elem: 'avatar'
                        },
                        {
                          elem: 'content',
                          content: [
                            {
                              block: 'social-group-content',
                              content: [
                                {
                                  elem: 'name',
                                  content: [
                                    {
                                      block: 'text',
                                      mods: {size : 'm', view: 'project'},
                                      content: 'Facebook Design'
                                    }
                                  ]
                                },
                                {
                                  elem: 'description',
                                  content: [
                                    {
                                      block: 'text',
                                      mods: { size : 's' },
                                      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugiat vitae, accusantium reprehenderit in neque recusandae repellat quasi.'
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
                      block : 'codepen',
                      content : [
                        {
                          block : 'link',
                          mix : { block : 'codepen', elem : 'link'},
                          url : 'http://codepen.io',
                          content : [
                            {
                              block : 'image',
                              height : '20',
                              url : '/i/codepen.png',
                              title : 'Все подробности на bem.info'
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
              block: 'kit',
              content: [
                {
                  elem: 'item',
                  content: [
                    {
                      block: 'social-location-tile',
                      content: [
                        {
                          elem: 'header',
                          content: [
                            {
                              block: 'social-location-header',
                              content: [
                                {
                                  elem: 'name',
                                  content: [
                                    {
                                      block: 'text',
                                      mods: {transform : 'uppercase', weight : 'bold'},
                                      content: 'Информация'
                                    }
                                  ]
                                },
                                {
                                  elem: 'icon',
                                  content: [
                                    {
                                      tag: 'div',
                                      attrs: {'data-icon':'ei-chevron-right', 'data-size':'s'}
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          elem: 'map',
                          content: [
                            {
                              block: 'social-location-map',
                            }
                          ]
                        },
                        {
                          elem: 'adress',
                          content: [
                            {
                              block: 'social-location-adress',
                              content: [
                                {
                                  elem: 'string',
                                  content: [
                                    {
                                      block: 'social-location-string',
                                      content: [
                                        {
                                          elem: 'image',
                                          content: [
                                            {
                                              tag: 'div',
                                              attrs: {'data-icon':'ei-location', 'data-size':'s'}
                                            }
                                          ]
                                        },
                                        {
                                          elem: 'text',
                                          content: [
                                            {
                                              block: 'text',
                                              mods: {size: 's'},
                                              content: '6, Leninskiy Avenue, Fifth Floor'
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      block: 'social-location-string',
                                      content: [
                                        {
                                          elem: 'image',
                                          content: [
                                            {
                                              tag: 'div',
                                              attrs: {'data-icon':'ei-paperclip', 'data-size':'s'}
                                            }
                                          ]
                                        },
                                        {
                                          elem: 'text',
                                          content: [
                                            {
                                              block: 'text',
                                              mods: {size: 's'},
                                              content: '8 (915) 432-25-04'
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      block: 'social-location-string',
                                      content: [
                                        {
                                          elem: 'image',
                                          content: [
                                            {
                                              tag: 'div',
                                              attrs: {'data-icon':'ei-link', 'data-size':'s'}
                                            }
                                          ]
                                        },
                                        {
                                          elem: 'text',
                                          content: [
                                            {
                                              block: 'text',
                                              mods: {size: 's'},
                                              content: 'http://www.hungryboys.ru'
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
                              block: 'social-location-button',
                              content: [
                                {
                                  elem: 'button',
                                  content: [
                                    {
                                      block: 'button',
                                      mods : { theme : 'islands', size : 'l', type : 'link' },
                                      text: 'Сохранить'
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
                      block : 'codepen',
                      content : [
                        {
                          block : 'link',
                          mix : { block : 'codepen', elem : 'link'},
                          url : 'http://codepen.io',
                          content : [
                            {
                              block : 'image',
                              height : '20',
                              url : '/i/codepen.png',
                              title : 'Все подробности на bem.info'
                            }
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
          elem : 'col',
          mix : { block : 'kit', elem : 'item'},
          mods : { lw : 4, xl : 4, xxl : 4},
          content : [
            {
              block: 'kit',
              content: [
                {
                  elem: 'item',
                  content: [
                    {
                      block : 'social-user-tile',
                      content : [
                        {
                          elem: 'profile',
                          content: [
                            {
                              block: 'social-user-avatar'
                            },
                            {
                              block: 'social-user-name',
                              content: [
                                {
                                  elem: 'name',
                                  content: [
                                    {
                                      block: 'text',
                                      mods: {size : 'm'},
                                      content: 'Jonathan Ive'
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              block: 'social-user-date',
                              content: [
                                {
                                  elem: 'date',
                                  content: [
                                    {
                                      block: 'text',
                                      mods: { size: 's'},
                                      content: 'last seen today at 3:56 pm'
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          elem: 'button-group',
                          content: [
                            {
                              block: 'social-user-button',
                              content: [
                                {
                                  elem: 'top',
                                  content: [
                                    {
                                      block: 'button',
                                      mods : { theme : 'islands', size : 'l', type : 'link' },
                                      text: 'Send message'
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              block: 'social-user-button',
                              content: [
                                {
                                  elem: 'bottom',
                                  content: [
                                    {
                                      block: 'button',
                                      mods : { theme : 'islands', size : 'l', type : 'link' },
                                      text: 'Unfriend'
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          elem: 'user-info',
                          content: [
                            {
                              block: 'social-user-row',
                              content: [
                                {
                                  elem: 'left',
                                  content: [
                                    {
                                      block: 'text',
                                      mods: { size: 's', weight : 'bold' },
                                      content: 'Relationship:'
                                    }
                                  ]
                                },
                                {
                                  elem: 'right',
                                  content: [
                                    {
                                      block: 'text',
                                      mods: { size: 's' },
                                      content: 'In Love'
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              block: 'social-user-row',
                              content: [
                                {
                                  elem: 'left',
                                  content: [
                                    {
                                      block: 'text',
                                      mods: { size: 's', weight : 'bold' },
                                      content: 'Company:'
                                    }
                                  ]
                                },
                                {
                                  elem: 'right',
                                  content: [
                                    {
                                      block: 'text',
                                      mods: { size: 's'},
                                      content: 'apple.com'
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              block: 'social-user-row',
                              content: [
                                {
                                  elem: 'left',
                                  content: [
                                    {
                                      block: 'text',
                                      mods: { size: 's', weight : 'bold'},
                                      content: 'Sister:'
                                    }
                                  ]
                                },
                                {
                                  elem: 'right',
                                  content: [
                                    {
                                      block: 'text',
                                      mods: { size: 's'},
                                      content: 'Saniel San'
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              block: 'social-user-row',
                              content: [
                                {
                                  elem: 'left',
                                  content: [
                                    {
                                      block: 'text',
                                      mods: { size: 's', weight : 'bold'},
                                      content: 'Mobile:'
                                    }
                                  ]
                                },
                                {
                                  elem: 'right',
                                  content: [
                                    {
                                      block: 'text',
                                      mods: { size: 's'},
                                      content: '+ 38 (095) 061 08 33'
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          elem: 'button-show',
                          content: [
                            {
                              block: 'button',
                              mods : { theme : 'islands', size : 'l', type : 'link' },
                              text: 'Show more'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      block : 'codepen',
                      content : [
                        {
                          block : 'link',
                          mix : { block : 'codepen', elem : 'link'},
                          url : 'http://codepen.io',
                          content : [
                            {
                              block : 'image',
                              height : '20',
                              url : '/i/codepen.png',
                              title : 'Все подробности на bem.info'
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
              block: 'kit',
              content: [
                {
                  elem: 'item',
                  content: [
                    {
                      block: 'social-activity-list',
                      content: [
                        {
                          elem: 'header',
                          content: [
                            {
                              block: 'social-activity-header',
                              content: [
                                {
                                  elem: 'name',
                                  content: [
                                    {
                                      block: 'text',
                                      mods: { size: 'm', transform : 'uppercase', weight : 'bold'},
                                      content: 'Activity list'
                                    }
                                  ]
                                },
                                {
                                  elem: 'image',
                                  content: [
                                    {
                                      tag: 'div',
                                      attrs: {'data-icon':'ei-gear', 'data-size':'s'}
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          elem: 'content',
                          content: [
                            {
                              block: 'social-activity-row',
                              content: [
                                {
                                  elem: 'image',
                                  content:[
                                    {
                                      tag: 'div',
                                      attrs: {'data-icon':'ei-image', 'data-size':'s'}
                                    }
                                  ]
                                },
                                {
                                  elem: 'name',
                                  content: [
                                    {
                                      block: 'text',
                                      mods: {size: 's'},
                                      content: [
                                        {
                                          block: 'link',
                                          mods : { theme : 'islands', pseudo : true },
                                          content: 'Kevin Ertan'
                                        },
                                        ' Added 4 photos to album ',
                                        {
                                          block: 'link',
                                          mods : { theme : 'islands', pseudo : true },
                                          content: 'Summer'
                                        }
                                      ]
                                    },
                                    {
                                      block: 'social-image-box',
                                      content: [
                                        {
                                          elem: 'icons',
                                          content: [
                                            {
                                              block: 'link',
                                              url: '#',
                                              content: [
                                                {
                                                  block: 'image',
                                                  height: '50',
                                                  url: '/i/tobias.jpg'
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          elem: 'icons',
                                          content: [
                                            {
                                              block: 'link',
                                              url: '#',
                                              content: [
                                                {
                                                  block: 'image',
                                                  height: '50',
                                                  url: '/i/behance.jpg'
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          elem: 'icons',
                                          content: [
                                            {
                                              block: 'link',
                                              url: '#',
                                              content: [
                                                {
                                                  block: 'image',
                                                  height: '50',
                                                  url: '/i/dribbble.png'
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          elem: 'icons',
                                          content: [
                                            {
                                              block: 'link',
                                              url: '#',
                                              content: [
                                                {
                                                  block: 'image',
                                                  height: '50',
                                                  url: '/i/facebook.png'
                                                }
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
                              block: 'social-activity-row',
                              content: [
                                {
                                  elem: 'image',
                                  content:[
                                    {
                                      tag: 'div',
                                      attrs: {'data-icon':'ei-like', 'data-size':'s'}
                                    }
                                  ]
                                },
                                {
                                  elem: 'name',
                                  content: [
                                    {
                                      block: 'text',
                                      mods: {size: 's'},
                                      content: [
                                        {
                                          block: 'link',
                                          mods : { theme : 'islands', pseudo : true },
                                          content: 'john Doe'
                                        },
                                        ' liked 2 photos of ',
                                        {
                                          block: 'link',
                                          mods : { theme : 'islands', pseudo : true },
                                          content: 'Alex Wayne'
                                        }
                                      ]
                                    },
                                    {
                                      block: 'social-image-box',
                                      content: [
                                        {
                                          elem: 'icons',
                                          content: [
                                            {
                                              block: 'link',
                                              url: '#',
                                              content: [
                                                {
                                                  block: 'image',
                                                  height: '50',
                                                  url: '/i/medium.png'
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          elem: 'icons',
                                          content: [
                                            {
                                              block: 'link',
                                              url: '#',
                                              content: [
                                                {
                                                  block: 'image',
                                                  height: '50',
                                                  url: '/i/koloskov.png'
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              block: 'social-activity-row',
                              content: [
                                {
                                  elem: 'image',
                                  content:[
                                    {
                                      tag: 'div',
                                      attrs: {'data-icon':'ei-user', 'data-size':'s'}
                                    }
                                  ]
                                },
                                {
                                  elem: 'name',
                                  content: [
                                    {
                                      block: 'text',
                                      mods: {size: 's'},
                                      content: [
                                        {
                                          block: 'link',
                                          mods : { theme : 'islands', pseudo : true },
                                          content: 'John Doe'
                                        },
                                        ' added ',
                                        {
                                          block: 'link',
                                          mods : { theme : 'islands', pseudo : true },
                                          content: 'Alex Wayne'
                                        },
                                        ' to friends'
                                      ]
                                    },
                                  ]
                                }
                              ]
                            },
                            {
                              block: 'social-activity-row',
                              content: [
                                {
                                  elem: 'image',
                                  content:[
                                    {
                                      tag: 'div',
                                      attrs: {'data-icon':'ei-calendar', 'data-size':'s'}
                                    }
                                  ]
                                },
                                {
                                  elem: 'name',
                                  content: [
                                    {
                                      block: 'text',
                                      mods: {size: 's'},
                                      content: [
                                        {
                                          block: 'link',
                                          mods : { theme : 'islands', pseudo : true },
                                          content: 'Alex Gilev'
                                        },
                                        ' crested the ',
                                        {
                                          block: 'link',
                                          mods : { theme : 'islands', pseudo : true },
                                          content: 'Bowling'
                                        },
                                        ' event'
                                      ]
                                    },
                                  ]
                                }
                              ]
                            },
                            {
                              block: 'social-activity-row',
                              content: [
                                {
                                  elem: 'image',
                                  content:[
                                    {
                                      tag: 'div',
                                      attrs: {'data-icon':'ei-bell', 'data-size':'s'}
                                    }
                                  ]
                                },
                                {
                                  elem: 'name',
                                  content: [
                                    {
                                      block: 'text',
                                      mods: {size: 's'},
                                      content: [
                                        {
                                          block: 'link',
                                          mods : { theme : 'islands', pseudo : true },
                                          content: 'David Vane'
                                        },
                                        ' shared a link:'
                                      ]
                                    },
                                    {
                                      block: 'social-activity-info',
                                      content: [
                                        {
                                          elem: 'icons',
                                          content: [
                                            {
                                              block: 'link',
                                              url: '#',
                                              content: [
                                                {
                                                  block: 'image',
                                                  height: '50',
                                                  url: '/i/spotify.png'
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          elem: 'content',
                                          content: [
                                            {
                                              block: 'link',
                                              mods : { theme : 'islands', pseudo : true, size: 's' },
                                              content: 'Lorem ipsum dolor'
                                            },
                                            {
                                              block: 'text',
                                              mods: {size: 'xs'},
                                              content: 'Lorem ipsu dolor sit amet, consectetur adipisicing ips...'
                                            }
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
                            elem: 'footer',
                            content: [
                              {
                                block: 'button',
                                mods: {theme: 'islands', size: 'l'},
                                text: 'Show earlier activity'
                              }
                            ]
                        }
                      ]
                    },
                    {
                      block : 'codepen',
                      content : [
                        {
                          block : 'link',
                          mix : { block : 'codepen', elem : 'link'},
                          url : 'http://codepen.io',
                          content : [
                            {
                              block : 'image',
                              height : '20',
                              url : '/i/codepen.png',
                              title : 'Все подробности на bem.info'
                            }
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
          elem : 'col',
          mods : { lw : 4, xl : 4, xxl : 4 },
          content : [
            {
              block : 'kit',
              content : [
                {
                  elem : 'item',
                  content : [
                    {
                      block: 'social-text-tile',
                      content: [
                        {
                          elem: 'date',
                          content: [
                            {
                              block: 'text',
                              mods: {size : 'xs'},
                              content: '1 year ago'
                            }
                          ]
                        },
                        {
                          elem: 'name',
                          content: [
                            {
                              block: 'text',
                              mods: {size : 'l'},
                              content: 'Sample text post'
                            }
                          ]
                        },
                        {
                          elem: 'description',
                          content: [
                            {
                              block: 'text',
                              mods: {size : 's', weight: 'bold'},
                              content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum consequuntur eveniet enim dolores dignissimos odio. Deserunt est magni minus nam?'
                            }
                          ]
                        },
                        {
                          elem: 'content',
                          content: [
                            {
                              block: 'text',
                              mods: {size : 's'},
                              content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus omnis aspernatur voluptate sit incidunt veritatis, accusamus quam laudantium! Quis aspernatur quibusdam ipsam id officiis laudantium aliquam ab, aperiam eum cumque!'
                            }
                          ]
                        },
                        {
                          elem: 'content',
                          content: [
                            {
                              block: 'text',
                              mods: {size : 's'},
                              content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus omnis aspernatur voluptate sit incidunt veritatis, accusamus quam laudantium! Quis aspernatur quibusdam ipsam id officiis laudantium aliquam ab, aperiam eum cumque!'
                            }
                          ]
                        },
                        {
                          elem: 'button',
                          content: [
                            {
                              block: 'button',
                              mods: { theme : 'islands', size : 'l', type : 'link'},
                              text: 'Keep reading'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      block : 'codepen',
                      content : [
                        {
                          block : 'link',
                          mix : { block : 'codepen', elem : 'link'},
                          url : 'http://codepen.io',
                          content : [
                            {
                              block : 'image',
                              height : '20',
                              url : '/i/codepen.png',
                              title : 'Все подробности на bem.info'
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
              block : 'kit',
              content : [
                {
                  elem : 'item',
                  content : [
                    {
                      block: 'social-filter-list',
                      content: [
                        {
                          elem: 'header',
                          content: [
                            {
                              block: 'text',
                              mods: {size: 'm', transform: 'uppercase', weight: 'bold'},
                              content: 'Filters'
                            }
                          ]
                        },
                        {
                          elem: 'content',
                          content: [
                            {
                              block: 'social-filter-name',
                              content: [
                                {
                                  elem: 'text',
                                  content: 'Categories'
                                },
                                {
                                  elem: 'icon',
                                  content: [
                                    {
                                      attrs: {
                                        'data-icon':'ei-image',
                                        'data-size':'s'
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              block: 'social-filter-checkbox-list',
                              content: [
                                {
                                  elem: 'row',
                                  content: [
                                    {
                                      block : 'checkbox',
                                      mods : { theme : 'islands', size : 'l', checked : true },
                                      name: 'name1',
                                      val : 'val_1',
                                      text : 'Category 1'
                                    },
                                    {
                                      block: 'social-filter-result',
                                      content: [
                                        {
                                          elem: 'text',
                                          content: [
                                            {
                                              block: 'text',
                                              mods: {size: 'xs'},
                                              content: '18'
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  elem: 'row',
                                  content: [
                                    {
                                      block : 'checkbox',
                                      mods : { theme : 'islands', size : 'l'},
                                      name: 'name1',
                                      val : 'val_1',
                                      text : 'Category 2'
                                    },
                                    {
                                      block: 'social-filter-result',
                                      content: [
                                        {
                                          elem: 'text',
                                          content: [
                                            {
                                              block: 'text',
                                              mods: {size: 'xs'},
                                              content: '18'
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  elem: 'row',
                                  content: [
                                    {
                                      block : 'checkbox',
                                      mods : { theme : 'islands', size : 'l'},
                                      name: 'name1',
                                      val : 'val_1',
                                      text : 'Category 3'
                                    },
                                    {
                                      block: 'social-filter-result',
                                      content: [
                                        {
                                          elem: 'text',
                                          content: [
                                            {
                                              block: 'text',
                                              mods: {size: 'xs'},
                                              content: '18'
                                            }
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
                          elem: 'content',
                          content: [
                            {
                              block: 'social-filter-name',
                              content: [
                                {
                                  elem: 'text',
                                  content: 'Groups'
                                },
                                {
                                  elem: 'icon',
                                  content: [
                                    {
                                      attrs: {
                                        'data-icon':'ei-image',
                                        'data-size':'s'
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              block: 'social-filter-checkbox-list',
                              content: [
                                {
                                  elem: 'row',
                                  content: [
                                    {
                                      block : 'checkbox',
                                      mods : { theme : 'islands', size : 'l' },
                                      name: 'name1',
                                      val : 'val_1',
                                      text : 'Group 1'
                                    },
                                    {
                                      block: 'social-filter-result',
                                      content: [
                                        {
                                          elem: 'text',
                                          content: [
                                            {
                                              block: 'text',
                                              mods: {size: 'xs'},
                                              content: '18'
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  elem: 'row',
                                  content: [
                                    {
                                      block : 'checkbox',
                                      mods : { theme : 'islands', size : 'l', checked : true},
                                      name: 'name1',
                                      val : 'val_1',
                                      text : 'Group 2'
                                    },
                                    {
                                      block: 'social-filter-result',
                                      content: [
                                        {
                                          elem: 'text',
                                          content: [
                                            {
                                              block: 'text',
                                              mods: {size: 'xs'},
                                              content: '18'
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  elem: 'row',
                                  content: [
                                    {
                                      block : 'checkbox',
                                      mods : { theme : 'islands', size : 'l', checked : true},
                                      name: 'name1',
                                      val : 'val_1',
                                      text : 'Group 3'
                                    },
                                    {
                                      block: 'social-filter-result',
                                      content: [
                                        {
                                          elem: 'text',
                                          content: [
                                            {
                                              block: 'text',
                                              mods: {size: 'xs'},
                                              content: '18'
                                            }
                                          ]
                                        }
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
                      block : 'codepen',
                      content : [
                        {
                          block : 'link',
                          mix : { block : 'codepen', elem : 'link'},
                          url : 'http://codepen.io',
                          content : [
                            {
                              block : 'image',
                              height : '20',
                              url : '/i/codepen.png',
                              title : 'Все подробности на bem.info'
                            }
                          ]
                        }
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
          mods : { lw : 12, xl : 12, xxl : 12 },
          content : [
            {
              elem : 'item',
              content : [
                {
                  block : 'kit',
                  content : [
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'kit-item-header',
                          content : [
                            {
                              elem : 'name',
                              content : [
                                {
                                  block : 'text',
                                  mods : { size : 'l' },
                                  content : 'Sections'
                                },
                              ]
                            },
                            {
                              elem : 'name',
                              content : [
                                {
                                  block : 'text',
                                  mods : { size : 's',},
                                  content : 'Description description description'
                                },
                              ]
                            }
                          ]
                        }
                      ]
                    },
                  ]
                },
              ]
            },
          ]
        },
        {
          elem : 'col',
          mods : { lw : 12, xl : 12, xxl : 12 },
          mix : { block : 'kit', elem : 'item'},
          content : [
            {
              elem : 'item',
              content : [
                {
                  block : 'header-section',
                  content : [
                    {
                      elem : 'name',
                      content : [
                        {
                          block : 'text',
                          mods : { size : 'xl', weight : 'bold' },
                          content : 'name'
                        },
                      ]
                    },
                    {
                      elem : 'description',
                      content : [
                        {
                          block : 'text',
                          mods : { size : 's', transform : 'uppercase' },
                          content : 'description'
                        },
                      ],
                    },
                    {
                      elem : 'action',
                      content : [
                        {
                          block : 'button',
                          mods : { theme : 'islands', size : 'xl', view : 'action' },
                          text : 'Action'
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
          mods : { lw : 12, xl : 12, xxl : 12 },
          content : [
            {
              block : 'footer-section',
              content : [
                {
                  elem : 'item',
                  content : [
                    {
                      block : 'row',
                      content : [
                        {
                          elem : 'col',
                          mods : { lw : 3, xl : 3, xxl : 3 },
                          content : [
                            {
                              block : 'footer-section-item',
                              content : [
                                {
                                  elem : 'name',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 's', transform : 'uppercase', weight : 'bold' },
                                      content : 'heading'
                                    },
                                  ]
                                },
                                {
                                  elem : 'content',
                                  content : [
                                    {
                                      block : 'footer-list',
                                      content : [
                                        {
                                          elem : 'item',
                                          content : [
                                            {
                                              block : 'link',
                                              mods : { theme : 'islands', size: 'm' },
                                              url : 'https://bem.info/',
                                              content : 'bem.info'
                                            }
                                          ]
                                        },
                                        {
                                          elem : 'item',
                                          content : [
                                            {
                                              block : 'link',
                                              mods : { theme : 'islands', size: 'm' },
                                              url : 'https://bem.info/',
                                              content : 'bem.info'
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
                          elem : 'col',
                          mods : { lw : 3, xl : 3, xxl : 3 },
                          content : [
                            {
                              block : 'footer-section-item',
                              content : [
                                {
                                  elem : 'name',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 's', transform : 'uppercase', weight : 'bold' },
                                      content : 'heading'
                                    },
                                  ]
                                },
                                {
                                  elem : 'content',
                                  content : [
                                    {
                                      block : 'footer-list',
                                      content : [
                                        {
                                          elem : 'item',
                                          content : [
                                            {
                                              block : 'link',
                                              mods : { theme : 'islands', size: 'm' },
                                              url : 'https://bem.info/',
                                              content : 'bem.info'
                                            }
                                          ]
                                        },
                                        {
                                          elem : 'item',
                                          content : [
                                            {
                                              block : 'link',
                                              mods : { theme : 'islands', size: 'm' },
                                              url : 'https://bem.info/',
                                              content : 'bem.info'
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
      content : [
        {
          elem : 'col',
          mods : { lw : 12, xl : 12, xxl : 12 },
          content : [
            {
              block : 'kit',
              content : [
                {
                  block : 'footer',
                  mix : { block : 'kit', elem : 'item'},
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
        }
      ]
    },
  ]
};
