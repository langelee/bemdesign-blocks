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
      attrs: {
        'data-icon': 'ei-spinner',
        'data-size': 'm'
      }
    },
    */

    /* kit
    {
      block : 'kit',
      content : [
        {
          elem : 'item',
          content : [

          ]
        },
        {
          elem : 'codepen',
          content : [

          ]
        },
      ]
    }
    */

    /* grid
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
          height : '200',
          url : '/i/bemdesign-logo.svg'
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
          mods : { size : 'm' },
          content : 'The main idea of BEM methodology is to speed development process up and ease the teamwork of developers.'
        },
        {
          elem : 'download',
          content : [
            {
              block : 'button',
              mods : { theme : 'islands', size : 'xl', view : 'action', type : 'link' },
              url : 'https://github.com/bemdesign/bemdesign-info',
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
                      block : 'button',
                      mods : { theme : 'islands', size : 'l', type : 'link' },
                      url : '#colors',
                      text : 'colors'
                    },
                    {
                      block : 'button',
                      mods : { theme : 'islands', size : 'l', type : 'link' },
                      url : '#spaces',
                      text : 'spaces'
                    },
                    {
                      block : 'button',
                      mods : { theme : 'islands', size : 'l', type : 'link' },
                      url : '#avatars',
                      text : 'avatars'
                    },
                    {
                      block : 'button',
                      mods : { theme : 'islands', size : 'l', type : 'link' },
                      url : '#icons',
                      text : 'icons'
                    },
                    {
                      block : 'button',
                      mods : { theme : 'islands', size : 'l', type : 'link' },
                      url : '#typography',
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
                      block : 'button',
                      mods : { theme : 'islands', size : 'l', type : 'link' },
                      url : '#forms',
                      text : 'forms'
                    },
                    {
                      block : 'button',
                      mods : { theme : 'islands', size : 'l', type : 'link' },
                      url : '#lists',
                      text : 'lists'
                    },
                    {
                      block : 'button',
                      mods : { theme : 'islands', size : 'l', type : 'link' },
                      url : '#tiles',
                      text : 'tiles'
                    },
                    {
                      block : 'button',
                      mods : { theme : 'islands', size : 'l', type : 'link' },
                      url : '#comments',
                      text : 'comments'
                    },
                    {
                      block : 'button',
                      mods : { theme : 'islands', size : 'l', type : 'link' },
                      url : '#plans',
                      text : 'plans'
                    },
                    {
                      block : 'button',
                      mods : { theme : 'islands', size : 'l', type : 'link' },
                      url : '#sections',
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
      attrs : {
        id : 'colors'
      },
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
                              content : 'project / base / normal / clean / alert / active'
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
      attrs : {
        id : 'spaces'
      },
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
                              content : 'xxl / xl / l / m / s / xs / xxs'
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
      attrs : {
        id : 'avatars'
      },
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
                              content : 'l / m / s'
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
      attrs : {
        id : 'icons'
      },
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
                              content : 'l / m / s'
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
                          attrs: {
                            'data-icon': 'ei-calendar',
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
                          attrs: {
                            'data-icon': 'ei-calendar',
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
                          attrs: {
                            'data-icon': 'ei-calendar',
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
      attrs : {
        id : 'typography'
      },
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
                              content : 'size / weight / transform / color'
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
      attrs : {
        id : 'forms'
      },
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
                              content : 'log in / reset / sing up'
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
                  ]
                },
                {
                  elem : 'codepen',
                  content : [
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
                                      placeholder : 'First name'
                                    }
                                  ]
                                },
                                {
                                  elem : 'item',
                                  content : [
                                    {
                                      block : 'input',
                                      mods : { theme : 'islands', size : 'l', width : 'available' },
                                      placeholder : 'Last name'
                                    }
                                  ]
                                },
                                {
                                  elem : 'item',
                                  content : [
                                    {
                                      block : 'input',
                                      mods : { type: 'email', theme : 'islands', size : 'l', width : 'available' },
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
                              block: 'form-description',
                              content : [
                                {
                                  block : 'text',
                                  mods : { size : 'xs',},
                                  content : 'By clicking Join now, you agree to BEMs Users Agreement, Privacy Policy, and Cookie Policy'
                                },
                              ]
                            },
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
                                      content : 'Sing in'
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
                            },
                          ]
                        }
                      ]
                    },
                  ]
                },
                {
                  elem : 'codepen',
                  content : [
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
                  ]
                },
                {
                  elem : 'codepen',
                  content : [
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
                      block : 'form',
                      content : [
                        {
                          mix : { block : 'form', elem : 'header'},
                          block : 'text',
                          mods : { size : 'l',},
                          content : 'Sing up!'
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
                              block: 'form-description',
                              content : [
                                {
                                  block : 'text',
                                  mods : { size : 'xs',},
                                  content : 'By clicking Join now, you agree to BEMs Users Agreement, Privacy Policy, and Cookie Policy'
                                },
                              ]
                            },
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
                                      block : 'button',
                                      mods : { theme : 'islands', size : 'l', view : 'action' },
                                      text : 'Sing up'
                                    }
                                  ]
                                },
                              ]
                            },
                          ]
                        }
                      ]
                    },
                  ]
                },
                {
                  elem : 'codepen',
                  content : [
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
      attrs : {
        id : 'lists'
      },
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
                              content : 'mail-list / accet-list / friend-list / document-list / top-news-list / user-list / news-list / position-list'
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
                          block : 'mail-list',
                          content: [
                            {
                              documentTitle : 'Inbox',
                              documentText : '200',
                              documentImage : [
                                {
                                  bem: false,
                                  attrs: {
                                    'data-icon': 'ei-envelope',
                                    'data-size': 's'
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
                                    'data-size': 's'
                                  }
                                }
                              ]
                            },

                          ].map(function(item) {
                            return [
                              {
                                block: 'mail',
                                mix : { block: 'mail-list', elem : 'item' },
                                content: [
                                  {
                                    mix : { block : 'mail', elem : 'image' },
                                    block: 'image',
                                    content: item.documentImage
                                  },
                                  {
                                    elem : 'content',
                                    content: [
                                      {
                                        mix : { block : 'mail-content', elem : 'title' },
                                        block : 'text',
                                        mods : { size : 's', weight : 'bold' },
                                        content : item.documentTitle
                                      },
                                      /*
                                      {
                                        mix : { block : 'mail-content', elem : 'text' },
                                        block : 'text',
                                        mods : { size : 's' },
                                        content : item.documentText
                                      }
                                      */
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
                      elem : 'codepen',
                      content : [
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
                          block : 'accet-list',
                          content: [
                            {
                              documentTitle : 'Photos',
                              documentText : '1022',
                              documentImage : [
                                {
                                  bem: false,
                                  attrs: {
                                    'data-icon': 'ei-camera',
                                    'data-size': 's'
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
                                    'data-size': 's'
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
                                    'data-size': 's'
                                  }
                                }
                              ]
                            },
                          ].map(function(item) {
                            return [
                              {
                                block: 'accet',
                                mix : { block: 'accet-list', elem : 'item' },
                                content: [
                                  {
                                    mix : { block : 'accet', elem : 'image' },
                                    block: 'image',
                                    content: item.documentImage
                                  },
                                  {
                                    elem : 'content',
                                    content: [
                                      {
                                        mix : { block : 'accet-content', elem : 'title' },
                                        block : 'text',
                                        mods : { size : 's', weight : 'bold' },
                                        content : item.documentTitle
                                      },
                                      /*
                                      {
                                        mix : { block : 'accet-content', elem : 'text' },
                                        block : 'text',
                                        mods : { size : 's' },
                                        content : item.documentText
                                      }
                                      */
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
                      elem : 'codepen',
                      content : [
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
                          block : 'friend-list',
                          content: [
                            {
                              documentTitle : 'Work',
                              documentText : '60',
                              documentImage : [
                                {
                                  bem: false,
                                  attrs: {
                                    'data-icon': 'ei-heart',
                                    'data-size': 's'
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
                                    'data-size': 's'
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
                                    'data-size': 's'
                                  }
                                }
                              ]
                            },
                          ].map(function(item) {
                            return [
                              {
                                block: 'friend',
                                mix : { block: 'friend-list', elem : 'item' },
                                content: [
                                  {
                                    mix : { block : 'friend', elem : 'image' },
                                    block: 'image',
                                    content: item.documentImage
                                  },
                                  {
                                    elem : 'content',
                                    content: [
                                      {
                                        mix : { block : 'friend-content', elem : 'title' },
                                        block : 'text',
                                        mods : { size : 's', weight : 'bold' },
                                        content : item.documentTitle
                                      },
                                      /*
                                      {
                                        mix : { block : 'friend-content', elem : 'text' },
                                        block : 'text',
                                        mods : { size : 's' },
                                        content : item.documentText
                                      }
                                      */
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
                      elem : 'codepen',
                      content : [
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
                    {
                      elem : 'codepen',
                      content : [
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
                    {
                      elem : 'codepen',
                      content : [
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
                {
                  elem : 'codepen',
                  content : [
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
                                content : {
                                  attrs: {
                                    'data-icon': 'ei-archive',
                                    'data-size': 'm'
                                  }
                                }
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
                  elem : 'codepen',
                  content : [
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
                {
                  elem : 'codepen',
                  content : [
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
          attrs : {
            id : 'tiles'
          },
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
                              content : 'user-tile / event-tile / partner-tile / social-group-tile / social-location-tile / social-suggested-people / social-user-tile / social-activity-list / social-text-tile'
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
      block : 'row',
      mix : { block : 'page-row'},
      content : [
        {
          elem : 'col',
          mods : { lw : 4, xl : 4, xxl : 4},
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
                              text : 'Follow'
                            }
                          ]
                        }
                      ]
                    },
                  ]
                },
                {
                  elem : 'codepen',
                  content : [
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
            /*
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
                {
                  elem : 'codepen',
                  content : [
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
            */
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
                        }
                      ]
                    },
                  ]
                },
                {
                  elem : 'codepen',
                  content : [
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
                                      mods : { theme : 'islands', size : 'l', type : 'link', view : 'action' },
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
                  ]
                },
                {
                  elem : 'codepen',
                  content : [
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
                      block: 'social-suggested-people',
                      content: [
                        {
                          elem: 'header',
                          content: [
                            {
                              block: 'social-suggested-people-header',
                              content: [
                                {
                                  elem: 'name',
                                  content: [
                                    {
                                      block: 'text',
                                      mods: { size: 'm', transform : 'uppercase', weight : 'bold'},
                                      content: 'Suggested People'
                                    }
                                  ]
                                },
                                {
                                  elem: 'image',
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
                          elem: 'content',
                          content : [
                            {
                              block : 'social-suggested-people-list',
                              content: [
                                {
                                  suggestedUserName : 'Tobias van Schneider',
                                  suggestedUserPosition : 'Lead Product Designer',
                                  suggestedUserIcon : '/i/tobias.jpg'
                                },
                                {
                                  suggestedUserName : 'Tobias van Schneider',
                                  suggestedUserPosition : 'Lead Product Designer',
                                  suggestedUserIcon : '/i/tobias.jpg'
                                },
                                {
                                  suggestedUserName : 'Tobias van Schneider',
                                  suggestedUserPosition : 'Lead Product Designer',
                                  suggestedUserIcon : '/i/tobias.jpg'
                                },
                              ].map(function(item) {
                                return [
                                  {
                                    block: 'social-suggested-people-item',
                                    content: [
                                      {
                                        block: 'social-suggested-people-profile',
                                        content: [
                                          {
                                            elem: 'picture',
                                            content: [
                                              {
                                                block: 'image',
                                                height: '60',
                                                url: item.suggestedUserIcon
                                              },
                                            ]
                                          },
                                          {
                                            elem : 'content',
                                            content: [
                                              {
                                                block: 'social-suggested-people-profile-content',
                                                content: [
                                                  {
                                                    mix : { block : 'social-suggested-people-profile-content', elem : 'name'},
                                                    block : 'text',
                                                    mods : { size : 'm'},
                                                    content : item.suggestedUserName
                                                  },
                                                  {
                                                    mix : { block : 'social-suggested-people-profile-content', elem : 'description'},
                                                    block : 'text',
                                                    mods : { size : 's'},
                                                    content : item.suggestedUserPosition
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            elem: 'action',
                                            content: [
                                              {
                                                block: 'link',
                                                mods : { theme : 'islands', size : 'm' , disabled : true },
                                                content: [
                                                  {
                                                    attrs: {
                                                      'data-icon': 'ei-plus',
                                                      'data-size': 's'
                                                    }
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
                              })
                            },
                            {
                              block : 'social-suggested-people-action',
                              content : [
                                {
                                  block : 'button',
                                  mods : { theme : 'islands', size : 'l', view : 'action' },
                                  text : 'Show all'
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
                  elem : 'codepen',
                  content : [
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
                              text : 'Follow'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem : 'codepen',
                      content : [
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
                /*
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
                    {
                      elem : 'codepen',
                      content : [
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
                */
              ]
            },
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
                              mix: {block: 'clearfix'},
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
                              mix: {block: 'clearfix'},
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
                              mix: {block: 'clearfix'},
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
                              mix: {block: 'clearfix'},
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
                              mods : { theme : 'islands', size : 'l', type : 'link', view : 'action' },
                              text: 'Show more'
                            }
                          ]
                        }
                      ]
                    },
                  ]
                },
                {
                  elem : 'codepen',
                  content : [
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
                              block: 'social-activity-content',
                              content: [
                                {
                                  elem: 'list',
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
                                              mix: {block: 'clearfix'},
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
                                              mix: {
                                                block: 'clearfix'},
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
                                              mix: {block: 'clearfix'},
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
                                }
                              ]
                            },
                            {
                              block: 'social-activity-action',
                              content: [
                                {
                                  elem: 'footer',
                                  content: [
                                    {
                                      block: 'button',
                                      mods: {theme: 'islands', size: 'l', view : 'action'},
                                      text: 'Show earlier activity'
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
                  elem : 'codepen',
                  content : [
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
                {
                  elem : 'codepen',
                  content : [
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
            },

            {
              block : 'kit',
              content : [
                {
                  elem : 'item',
                  content : [
                    {
                      block: 'social-text-tile',
                      mods: { view : 'active'},
                      content: [
                        {
                          elem: 'date',
                          content: [
                            {
                              block: 'text',
                              mods: {size : 'xs'},
                              content: '5 min ago'
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
                          elem: 'content',
                          content: [
                            {
                              block: 'text',
                              mods: {size : 's'},
                              content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus omnis aspernatur voluptate sit incidunt veritatis, accusamus quam laudantium! Quis aspernatur quibusdam ipsam id officiis laudantium aliquam ab, aperiam eum cumque!'
                            }
                          ]
                        },
                      ]
                    },
                  ]
                },
                {
                  elem : 'codepen',
                  content : [
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
                      block: 'social-text-tile',
                      mods: { view : 'alert'},
                      content: [
                        {
                          elem: 'date',
                          content: [
                            {
                              block: 'text',
                              mods: {size : 'xs'},
                              content: '5 min ago'
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
                          elem: 'content',
                          content: [
                            {
                              block: 'text',
                              mods: {size : 's'},
                              content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus omnis aspernatur voluptate sit incidunt veritatis, accusamus quam laudantium! Quis aspernatur quibusdam ipsam id officiis laudantium aliquam ab, aperiam eum cumque!'
                            }
                          ]
                        },
                      ]
                    },
                  ]
                },
                {
                  elem : 'codepen',
                  content : [
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
            /*
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
                              content: '5 min ago'
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
                          elem : 'action',
                          content: [
                            {
                              mix : { block : 'clearfix'},
                              block : 'social-text-tile-action',
                              content : [
                                {
                                  elem : 'left',
                                  content : [
                                    {
                                      block: 'button',
                                      mods: { theme : 'islands', size : 'l', type : 'link'},
                                      text: 'Keep reading'
                                    }
                                  ]
                                },
                                {
                                  elem : 'right',
                                  content : [
                                    {
                                      block : 'social-text-tile-share-list',
                                      content :[
                                        {
                                          elem : 'item',
                                          content : [
                                            {
                                              mix : { block : 'clearfix' },
                                              block : 'social-text-tile-share',
                                              content : [
                                                {
                                                  elem : 'icon',
                                                  content : [
                                                    {
                                                      attrs: {
                                                        'data-icon': 'ei-external-link',
                                                        'data-size': 's'
                                                      }
                                                    }
                                                  ]
                                                },
                                                {
                                                  elem : 'number',
                                                  content : '24'
                                                },
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          elem : 'item',
                                          content : [
                                            {
                                              mix : { block : 'clearfix' },
                                              block : 'social-text-tile-share',
                                              content : [
                                                {
                                                  elem : 'icon',
                                                  content : [
                                                    {
                                                      attrs: {
                                                        'data-icon': 'ei-heart',
                                                        'data-size': 's'
                                                      }
                                                    }
                                                  ]
                                                },
                                                {
                                                  elem : 'number',
                                                  content : '24'
                                                },
                                              ]
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
                  ]
                },
                {
                  elem : 'codepen',
                  content : [
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
            */
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
                              content: '5 min ago'
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
                          elem: 'action',
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
                  ]
                },
                {
                  elem : 'codepen',
                  content : [
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
            /*
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

            */

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
          attrs : {
            id : 'comments'
          },
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
                              content : 'Comments'
                            },
                          ]
                        },
                        {
                          elem : 'name',
                          content : [
                            {
                              block : 'text',
                              mods : { size : 's',},
                              content : 'social-comment-tile / social-comment'
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
          mods : { lw : 6, xl : 6, xxl : 6 },
          content : [
            {
              block : 'kit',
              content : [
                {
                  elem : 'item',
                  content : [
                    {
                      block: 'social-comment-tile',
                      content: [
                        {
                          elem: 'image'
                        },
                        {
                          elem: 'content',
                          content: [
                            {
                              block: 'social-comment-text',
                              content: [
                                {
                                  elem: 'name',
                                  content: [
                                    {
                                      block: 'text',
                                      mods: {size: 'm'},
                                      content: 'Today we&rsquo;re having our 50th hackathon at&nbsp;Facebook.'
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              block: 'social-comment-text',
                              content: [
                                {
                                  elem: 'content',
                                  content: [
                                    {
                                      block: 'text',
                                      mods : { size : 's' },
                                      content: 'Hackathons are an&nbsp;important part of&nbsp;how we&nbsp;come up&nbsp;with new ideas. Everyone takes a&nbsp;day to&nbsp;explore any idea they want, and then everyone presents what they&rsquo;ve come up&nbsp;with at&nbsp;the end.'
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          elem: 'link-box',
                          mix: {block: 'clearfix'},
                          content: [
                            {
                              block: 'social-comment-link',
                              content: [

                                {
                                  elem: 'name',
                                  content: [
                                    {
                                      block: 'link',
                                      mods: {theme: 'islands'},
                                      content: [
                                        {
                                          elem: 'icon',
                                          content: [
                                            {
                                              block: 'social-comment-icon',
                                              content: [
                                                {
                                                  attrs: {
                                                    'data-icon': 'ei-like',
                                                    'data-size': 's'
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          elem: 'name',
                                          content: [
                                            {
                                              block: 'text',
                                              mods : { size : 's' },
                                              content: 'Нравится'
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
                              block: 'social-comment-link',
                              content: [

                                {
                                  elem: 'name',
                                  content: [
                                    {
                                      block: 'link',
                                      mods: {theme: 'islands'},
                                      content: [
                                        {
                                          elem: 'icon',
                                          content: [
                                            {
                                              block: 'social-comment-icon',
                                              content: [
                                                {
                                                  attrs: {
                                                    'data-icon': 'ei-comment',
                                                    'data-size': 's'
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          elem: 'name',
                                          content: [
                                            {
                                              block: 'text',
                                              mods : { size : 's' },
                                              content: 'Комментарий'
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
                              block: 'social-comment-link',
                              content: [

                                {
                                  elem: 'name',
                                  content: [
                                    {
                                      block: 'link',
                                      mods: {theme: 'islands'},
                                      content: [
                                        {
                                          elem: 'icon',
                                          content: [
                                            {
                                              block: 'social-comment-icon',
                                              content: [
                                                {
                                                  attrs: {
                                                    'data-icon': 'ei-retweet',
                                                    'data-size': 's'
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          elem: 'name',
                                          content: [
                                            {
                                              block: 'text',
                                              mods : { size : 's' },
                                              content: 'Поделиться'
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
                    }
                  ]
                },
                {
                  elem : 'codepen',
                  content : [
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
                      block: 'social-comment',
                      content: [
                        {
                          elem: 'image'
                        },
                        {
                          elem: 'user-name',
                          content: [
                            {
                              block: 'link',
                              mods: {theme: 'islands'},
                              content: 'Mark Zuckerberg'
                            }                          ]
                        },
                        {
                          elem: 'date',
                          mix: {block: 'clearfix'},
                          content: [
                            {
                              block: 'text',
                              content: '06.02.2016'
                            }
                          ]
                        },
                        {
                          elem: 'comment',
                          content: [
                            {
                              block: 'text',
                              mods : { size : 's' },
                              content: 'We&rsquo;ve activated Safety Check in&nbsp;response to&nbsp;the earthquake that struck Taiwan. My&nbsp;thoughts are with everyone in&nbsp;Taiwan and across our global community affected by&nbsp;this disaster. If&nbsp;you&rsquo;re in&nbsp;the area affected you&rsquo;ll get a&nbsp;notification to&nbsp;mark yourself as&nbsp;safe. You can also check that your friends and loved ones are safe.'
                            }
                          ]
                        },
                        {
                          elem: 'link-box',
                          mix: {block: 'clearfix'},
                          content: [
                            {
                              block: 'social-comment-link',
                              content: [
                                {
                                  elem: 'name',
                                  content: [
                                    {
                                      block: 'link',
                                      mods: {theme: 'islands'},
                                      content: [
                                        {
                                          elem: 'icon',
                                          content: [
                                            {
                                              block: 'social-comment-icon',
                                              content: [
                                                {
                                                  attrs: {
                                                    'data-icon': 'ei-like',
                                                    'data-size': 's'
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          elem: 'name',
                                          content: [
                                            {
                                              block: 'text',
                                              content: 'Нравится'
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
                              block: 'social-comment-link',
                              content: [
                                {
                                  elem: 'name',
                                  content: [
                                    {
                                      block: 'link',
                                      mods: {theme: 'islands'},
                                      content: [
                                        {
                                          elem: 'icon',
                                          content: [
                                            {
                                              block: 'social-comment-icon',
                                              content: [
                                                {
                                                  attrs: {
                                                    'data-icon': 'ei-comment',
                                                    'data-size': 's'
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          elem: 'name',
                                          content: [
                                            {
                                              block: 'text',
                                              mods : { size : 's' },
                                              content: 'Ответить'
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
                          elem: 'answer-textarea',
                          content: [
                            {
                              block: 'social-comment-textarea',
                              content: [
                                {
                                  elem: 'image'
                                },
                                {
                                  elem: 'textarea',
                                  content: [
                                    {
                                      block : 'textarea',
                                      mods : { theme : 'islands', size : 's', width : 'available' },
                                      placeholder : 'Напишите ответ...'
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          elem: 'answer',
                          content: [
                            {
                              block: 'social-comment-answer',
                              content: [
                                {
                                  elem: 'image'
                                },
                                {
                                  elem: 'user-name',
                                  content: [
                                    {
                                      block: 'link',
                                      mods: {theme: 'islands'},
                                      content: 'Sheryl Sandberg'
                                    }                          ]
                                },
                                {
                                  elem: 'answer',
                                  content: [
                                    {
                                      block : 'text',
                                      mods : { size : 's' },
                                      content: 'Thinking of&nbsp;everyone affected by&nbsp;this earthquake&nbsp;&mdash; and hoping that no&nbsp;more lives are at&nbsp;risk.'
                                    }
                                  ]
                                },
                                {
                                  elem: 'link-box',
                                  mix: {block: 'clearfix'},
                                  content: [
                                    {
                                      block: 'social-comment-link',
                                      content: [
                                        {
                                          elem: 'name',
                                          content: [
                                            {
                                              block: 'link',
                                              mods: {theme: 'islands'},
                                              content: [
                                                {
                                                  elem: 'icon',
                                                  content: [
                                                    {
                                                      block: 'social-comment-icon',
                                                      content: [
                                                        {
                                                          attrs: {
                                                            'data-icon': 'ei-like',
                                                            'data-size': 's'
                                                          }
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                },
                                                {
                                                  elem: 'name',
                                                  content: [
                                                    {
                                                      block: 'text',
                                                      mods : { size : 's' },
                                                      content: 'Нравится'
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
                                      block: 'social-comment-link',
                                      content: [
                                        {
                                          elem: 'name',
                                          content: [
                                            {
                                              block: 'link',
                                              mods: {theme: 'islands'},
                                              content: [
                                                {
                                                  elem: 'icon',
                                                  content: [
                                                    {
                                                      block: 'social-comment-icon',
                                                      content: [
                                                        {
                                                          attrs: {
                                                            'data-icon': 'ei-comment',
                                                            'data-size': 's'
                                                          }
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                },
                                                {
                                                  elem: 'name',
                                                  content: [
                                                    {
                                                      block: 'text',
                                                      mods : { size : 's' },
                                                      content: 'Ответить'
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
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem : 'codepen',
                      content : [
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
          elem : 'col',
          mods : { lw : 6, xl : 6, xxl : 6 },
          content : [
            {
              block : 'kit',
              content : [
                {
                  elem : 'item',
                  content : [
                    {
                      block: 'social-comment',
                      content: [
                        {
                          elem: 'image'
                        },
                        {
                          elem: 'user-name',
                          content: [
                            {
                              block: 'link',
                              mods: {theme: 'islands'},
                              content: 'Mark Zuckerberg'
                            }                          ]
                        },
                        {
                          elem: 'date',
                          mix: {block: 'clearfix'},
                          content: [
                            {
                              block: 'text',
                              content: '06.02.2016'
                            }
                          ]
                        },
                        {
                          elem: 'comment',
                          content: [
                            {
                              block: 'text',
                              mods : { size : 's' },
                              content: 'One of&nbsp;my&nbsp;favorite Friends Day moments this year was meeting Raman and Priya Gulati, and their baby girl Sohana. Raman and Priya first met on&nbsp;Facebook in&nbsp;2011, got engaged the next year and married in&nbsp;2013. Last November, they welcomed baby Sohana. She is&nbsp;a&nbsp;beautiful and living example of&nbsp;the power of&nbsp;connection. Thank you Raman and Priya for sharing your story with&nbsp;us!'
                            }
                          ]
                        },
                        {
                          elem: 'link-box',
                          mix: {block: 'clearfix'},
                          content: [
                            {
                              block: 'social-comment-link',
                              content: [
                                {
                                  elem: 'name',
                                  content: [
                                    {
                                      block: 'link',
                                      mods: {theme: 'islands'},
                                      content: [
                                        {
                                          elem: 'icon',
                                          content: [
                                            {
                                              block: 'social-comment-icon',
                                              content: [
                                                {
                                                  attrs: {
                                                    'data-icon': 'ei-like',
                                                    'data-size': 's'
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          elem: 'name',
                                          content: [
                                            {
                                              block: 'text',
                                              mods : { size : 's' },
                                              content: 'Нравится'
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
                              block: 'social-comment-link',
                              content: [
                                {
                                  elem: 'name',
                                  content: [
                                    {
                                      block: 'link',
                                      mods: {theme: 'islands'},
                                      content: [
                                        {
                                          elem: 'icon',
                                          content: [
                                            {
                                              block: 'social-comment-icon',
                                              content: [
                                                {
                                                  attrs: {
                                                    'data-icon': 'ei-comment',
                                                    'data-size': 's'
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          elem: 'name',
                                          content: [
                                            {
                                              block: 'text',
                                              mods : { size : 's' },
                                              content: 'Ответить'
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
                          elem: 'answer-textarea',
                          content: [
                            {
                              block: 'social-comment-textarea',
                              mods: {lastChild: 'last'},
                              content: [
                                {
                                  elem: 'image'
                                },
                                {
                                  elem: 'textarea',
                                  content: [
                                    {
                                      block : 'textarea',
                                      mods : { theme : 'islands', size : 's', width : 'available' },
                                      placeholder : 'Напишите ответ...'
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
                  elem : 'codepen',
                  content : [
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
                      block: 'social-comment',
                      content: [
                        {
                          elem: 'image'
                        },
                        {
                          elem: 'user-name',
                          content: [
                            {
                              block: 'link',
                              mods: {theme: 'islands'},
                              content: 'Mark Zuckerberg'
                            }                          ]
                        },
                        {
                          elem: 'date',
                          mix: {block: 'clearfix'},
                          content: [
                            {
                              block: 'text',
                              content: '04.02.2016'
                            }
                          ]
                        },
                        {
                          elem: 'comment',
                          content: [
                            {
                              block: 'text',
                              mods : { size : 's' },
                              content: 'For Friends Day, you can celebrate the important people in&nbsp;your life with a&nbsp;personalized video we&rsquo;ve made for you and everyone in&nbsp;our community. Here&rsquo;s mine. These are just some of&nbsp;the amazing people who have made a&nbsp;big difference in&nbsp;my&nbsp;life. I&rsquo;m so&nbsp;grateful to&nbsp;have them in&nbsp;my&nbsp;life and have so&nbsp;many wonderful memories together.'
                            }
                          ]
                        },
                        {
                          elem: 'link-box',
                          mix: {block: 'clearfix'},
                          content: [
                            {
                              block: 'social-comment-link',
                              content: [
                                {
                                  elem: 'name',
                                  content: [
                                    {
                                      block: 'link',
                                      mods: {theme: 'islands'},
                                      content: [
                                        {
                                          elem: 'icon',
                                          content: [
                                            {
                                              block: 'social-comment-icon',
                                              content: [
                                                {
                                                  attrs: {
                                                    'data-icon': 'ei-like',
                                                    'data-size': 's'
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          elem: 'name',
                                          content: [
                                            {
                                              block: 'text',
                                              mods : { size : 's' },
                                              content: 'Нравится'
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
                              block: 'social-comment-link',
                              content: [
                                {
                                  elem: 'name',
                                  content: [
                                    {
                                      block: 'link',
                                      mods: {theme: 'islands'},
                                      content: [
                                        {
                                          elem: 'icon',
                                          content: [
                                            {
                                              block: 'social-comment-icon',
                                              content: [
                                                {
                                                  attrs: {
                                                    'data-icon': 'ei-comment',
                                                    'data-size': 's'
                                                  }
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        {
                                          elem: 'name',
                                          content: [
                                            {
                                              block: 'text',
                                              mods : { size : 's' },
                                              content: 'Ответить'
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
                          elem: 'answer-list',
                          content: [
                            {
                              block: 'social-comment-answer-list',
                              content: [
                                {
                                  elem: 'answer',
                                  content: [
                                    {
                                      block: 'social-comment-answer',
                                      content: [
                                        {
                                          elem: 'image3'
                                        },
                                        {
                                          elem: 'user-name',
                                          content: [
                                            {
                                              block: 'link',
                                              mods: {theme: 'islands'},
                                              content: 'David Clinch'
                                            }                          ]
                                        },
                                        {
                                          elem: 'answer',
                                          content: [
                                            {
                                              block : 'text',
                                              mods : { size : 's' },
                                              content: 'Very cool. I&nbsp;did mine, but because&nbsp;I use Facebook for work as&nbsp;well my&nbsp;video was sprinkled with people from China, Afghanistan and other places&nbsp;I have friended because they were witnesses to&nbsp;big news events over the years. I&nbsp;still consider them friends'
                                            }
                                          ]
                                        },
                                        {
                                          elem: 'link-box',
                                          mix: {block: 'clearfix'},
                                          content: [
                                            {
                                              block: 'social-comment-link',
                                              content: [
                                                {
                                                  elem: 'name',
                                                  content: [
                                                    {
                                                      block: 'link',
                                                      mods: {theme: 'islands'},
                                                      content: [
                                                        {
                                                          elem: 'icon',
                                                          content: [
                                                            {
                                                              block: 'social-comment-icon',
                                                              content: [
                                                                {
                                                                  attrs: {
                                                                    'data-icon': 'ei-like',
                                                                    'data-size': 's'
                                                                  }
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        },
                                                        {
                                                          elem: 'name',
                                                          content: [
                                                            {
                                                              block: 'text',
                                                              mods : { size : 's' },
                                                              content: 'Нравится'
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
                                              block: 'social-comment-link',
                                              content: [
                                                {
                                                  elem: 'name',
                                                  content: [
                                                    {
                                                      block: 'link',
                                                      mods: {theme: 'islands'},
                                                      content: [
                                                        {
                                                          elem: 'icon',
                                                          content: [
                                                            {
                                                              block: 'social-comment-icon',
                                                              content: [
                                                                {
                                                                  attrs: {
                                                                    'data-icon': 'ei-comment',
                                                                    'data-size': 's'
                                                                  }
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        },
                                                        {
                                                          elem: 'name',
                                                          content: [
                                                            {
                                                              block: 'text',
                                                              mods : { size : 's' },
                                                              content: 'Ответить'
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
                                    }
                                  ]
                                },
                                {
                                  elem: 'answer',
                                  content: [
                                    {
                                      block: 'social-comment-answer',
                                      content: [
                                        {
                                          elem: 'image4'
                                        },
                                        {
                                          elem: 'user-name',
                                          content: [
                                            {
                                              block: 'link',
                                              mods: {theme: 'islands'},
                                              content: 'Griselda Molina'
                                            }                          ]
                                        },
                                        {
                                          elem: 'answer',
                                          content: [
                                            {
                                              block : 'text',
                                              mods : { size : 's' },
                                              content: 'Thanks Mark!! I&rsquo;m really fascinated with Friends Day video!! It&rsquo;s beautiful and i&nbsp;have to&nbsp;confess that a&nbsp;only few videos&nbsp;I like how this!! I&nbsp;hope that your job continue surprising&nbsp;us through all the time that we&nbsp;can share together, and apology for my&nbsp;english if&nbsp;it&nbsp;have mistakes but, you know? I&acute;m still learnig it !! Blessings for you, always!!'
                                            }
                                          ]
                                        },
                                        {
                                          elem: 'link-box',
                                          mix: {block: 'clearfix'},
                                          content: [
                                            {
                                              block: 'social-comment-link',
                                              content: [
                                                {
                                                  elem: 'name',
                                                  content: [
                                                    {
                                                      block: 'link',
                                                      mods: {theme: 'islands'},
                                                      content: [
                                                        {
                                                          elem: 'icon',
                                                          content: [
                                                            {
                                                              block: 'social-comment-icon',
                                                              content: [
                                                                {
                                                                  attrs: {
                                                                    'data-icon': 'ei-like',
                                                                    'data-size': 's'
                                                                  }
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        },
                                                        {
                                                          elem: 'name',
                                                          content: [
                                                            {
                                                              block: 'text',
                                                              mods : { size : 's' },
                                                              content: 'Нравится'
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
                                              block: 'social-comment-link',
                                              content: [
                                                {
                                                  elem: 'name',
                                                  content: [
                                                    {
                                                      block: 'link',
                                                      mods: {theme: 'islands'},
                                                      content: [
                                                        {
                                                          elem: 'icon',
                                                          content: [
                                                            {
                                                              block: 'social-comment-icon',
                                                              content: [
                                                                {
                                                                  attrs: {
                                                                    'data-icon': 'ei-comment',
                                                                    'data-size': 's'
                                                                  }
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        },
                                                        {
                                                          elem: 'name',
                                                          content: [
                                                            {
                                                              block: 'text',
                                                              mods : { size : 's' },
                                                              content: 'Ответить'
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
                  elem : 'codepen',
                  content : [
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
      attrs : {
        id : 'plans'
      },
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
                                  content : 'Plans'
                                },
                              ]
                            },
                            {
                              elem : 'name',
                              content : [
                                {
                                  block : 'text',
                                  mods : { size : 's',},
                                  content : 'plan'
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
                      block : 'plan',
                      content : [
                        {
                          elem : 'header',
                          content: 'Free'
                        },
                        {
                          elem : 'price',
                          content : [
                            {
                              block : 'plan-price',
                              content : [
                                {
                                  block : 'text',
                                  mods : { size : 'xl' },
                                  content : '$0'
                                }
                              ]
                            },
                            {
                              block : 'text',
                              mods : { size : 's' },
                              content : '14 days'
                            }
                          ]
                        },
                        {
                          elem : 'content',
                          content : [
                            {
                              block : 'text',
                              mods : { transform : 'uppercase' },
                              content : 'Basic features'
                            }
                          ]
                        },
                        {
                          elem : 'action',
                          content : [
                            {
                                block : 'button',
                                mods : { theme : 'islands', size : 'l', view : 'action' },
                                text : 'Get started'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  elem : 'codepen',
                  content : [
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
                      block : 'plan',
                      content : [
                        {
                          elem : 'header',
                          mods : { align : 'center' },
                          content: 'Professional'
                        },
                        {
                          elem : 'price',
                          content : [
                            {
                              block : 'plan-price',
                              content : [
                                {
                                  block : 'text',
                                  mods : { size : 'xl' },
                                  content : '$49'
                                }
                              ]
                            },
                            {
                              block : 'text',
                              mods : { size : 's' },
                              content : 'per month'
                            }
                          ]
                        },
                        {
                          elem : 'content',
                          content : [
                            {
                              block : 'text',
                              mods : { transform : 'uppercase' },
                              content : 'advanced features'
                            }
                          ]
                        },
                        {
                          elem : 'action',
                          content : [
                            {
                                block : 'button',
                                mods : { theme : 'islands', size : 'l', view : 'action' },
                                text : 'Get started'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  elem : 'codepen',
                  content : [
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
                      block : 'plan',
                      mods : { type : 'ultimate' },
                      content : [
                        {
                          elem : 'header',
                          mods : { align : 'center' },
                          content: 'Ultimate'
                        },
                        {
                          elem : 'price',
                          content : [
                            {
                              block : 'plan-price',
                              content : [
                                {
                                  block : 'text',
                                  mods : { size : 'xl', align : 'center' },
                                  content : '$99'
                                }
                              ]
                            },
                            {
                              block : 'text',
                              mods : { size : 's', align : 'center' },
                              content : 'per month'
                            }
                          ]
                        },
                        {
                          elem : 'content',
                          content : [
                            {
                              block : 'text',
                              mods : { transform : 'uppercase', align : 'center' },
                              content : 'All included'
                            }
                          ]
                        },
                        {
                          elem : 'action',
                          content : [
                            {
                                block : 'button',
                                mods : { theme : 'islands', size : 'l', view : 'action' },
                                text : 'Get started'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  elem : 'codepen',
                  content : [
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
      ]
    },
    {
      block : 'row',
      mix : { block : 'page-row'},
      attrs : {
        id : 'sections'
      },
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
                                  content : 'header-section / footer-section'
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
                      block : 'header',
                      content : [
                        {
                          elem : 'content',
                          mix : { block : 'clearfix' },
                          content : [
                            {
                              elem : 'left',
                              content : [
                                {
                                  elem : 'logo',
                                  content : [
                                    'Logotype'
                                  ]
                                },

                              ]
                            },
                            {
                              elem : 'right',
                              content : [
                                {
                                  elem : 'user-avatar',
                                  attrs : { 'data-icon':'ei-user', 'data-size':'s' },
                                },
                                {
                                  block : 'link',
                                  mix : [{ block : 'header', elem : 'user-name' }],
                                  mods : { theme : 'islands', size: 'l', pseudo : true },
                                  content : 'User Profile'
                                },
                                {
                                  block : 'button',
                                  mix : [{ block : 'header', elem : 'action' }],
                                  mods : { theme : 'islands', size: 'm', type : 'button' },
                                  text : 'Log out'
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
                  elem : 'codepen',
                  content : [
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
          mods : { lw : 12, xl : 12, xxl : 12 },
          content : [
            {
              block : 'kit',
              content : [
                {
                  elem : 'item',
                  content : [
                    {
                      block : 'header-section',
                      mods : { align : 'center' },
                      content : [
                        {
                          elem : 'image',
                          content : [
                            {
                              block : 'image',
                              url : '/i/f8-logo-w.svg',
                              title : 'fbf8',
                              height : '90'
                            }
                          ]
                        },
                        {
                          elem : 'name',
                          content : [
                            {
                              block : 'text',
                              mods : { size : 'xl', weight : 'bold' },
                              content : 'F8 2016 April 12 + 13'
                            },
                          ]
                        },
                        {
                          elem : 'description',
                          content : [
                            {
                              block : 'text',
                              mods : { size : 's', transform : 'uppercase' },
                              content : 'Join us in San Francisco for our annual developer conference. Sign up now to get F8 updates plus streaming access to the live event in April.'
                            },
                          ],
                        },
                        {
                          elem : 'action',
                          content : [
                            {
                              block : 'button',
                              mods : { theme : 'islands', size : 'xl', view : 'action' },
                              text : 'Connect with facebook'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  elem : 'codepen',
                  content : [
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
          mods : { lw : 12, xl : 12, xxl : 12 },
          content : [
            {
              block : 'kit',
              content : [
                {
                  elem : 'item',
                  content : [
                    {
                      block : 'header-section',
                      mods : { align : 'left' },
                      content : [
                        {
                          elem : 'image',
                          content : [
                            {
                              block : 'image',
                              url : '/i/f8-logo-w.svg',
                              title : 'fbf8',
                              height : '90'
                            }
                          ]
                        },
                        {
                          elem : 'name',
                          content : [
                            {
                              block : 'text',
                              mods : { size : 'xl', weight : 'bold' },
                              content : 'F8 2016 April 12 + 13'
                            },
                          ]
                        },
                        {
                          elem : 'description',
                          content : [
                            {
                              block : 'text',
                              mods : { size : 's', transform : 'uppercase' },
                              content : 'Join us in San Francisco for our annual developer conference. Sign up now to get F8 updates plus streaming access to the live event in April.'
                            },
                          ],
                        },
                        {
                          elem : 'action',
                          content : [
                            {
                              block : 'button',
                              mods : { theme : 'islands', size : 'xl', view : 'action' },
                              text : 'Connect with facebook'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  elem : 'codepen',
                  content : [
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
          mods : { lw : 12, xl : 12, xxl : 12 },
          content : [
            {
              block : 'kit',
              content : [
                {
                  elem : 'item',
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
                                              content : 'Open Source'
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
                                                      mods : { theme : 'islands', size: 'l' },
                                                      url : 'https://bem.info/',
                                                      content : 'React'
                                                    }
                                                  ]
                                                },
                                                {
                                                  elem : 'item',
                                                  content : [
                                                    {
                                                      block : 'link',
                                                      mods : { theme : 'islands', size: 'l' },
                                                      url : 'https://bem.info/',
                                                      content : 'HHVM'
                                                    }
                                                  ]
                                                },
                                                {
                                                  elem : 'item',
                                                  content : [
                                                    {
                                                      block : 'link',
                                                      mods : { theme : 'islands', size: 'l' },
                                                      url : 'https://bem.info/',
                                                      content : 'Hack'
                                                    }
                                                  ]
                                                },
                                                {
                                                  elem : 'item',
                                                  content : [
                                                    {
                                                      block : 'link',
                                                      mods : { theme : 'islands', size: 'l' },
                                                      url : 'https://bem.info/',
                                                      content : 'Presto'
                                                    }
                                                  ]
                                                },
                                                {
                                                  elem : 'item',
                                                  content : [
                                                    {
                                                      block : 'link',
                                                      mods : { theme : 'islands', size: 'l' },
                                                      url : 'https://bem.info/',
                                                      content : 'Buck'
                                                    }
                                                  ]
                                                },
                                                {
                                                  elem : 'item',
                                                  content : [
                                                    {
                                                      block : 'link',
                                                      mods : { theme : 'islands', size: 'l' },
                                                      url : 'https://bem.info/',
                                                      content : 'More Projects'
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
                                              content : 'Community'
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
                                                      mods : { theme : 'islands', size: 'l' },
                                                      url : 'https://bem.info/',
                                                      content : '@fbOpenSource'
                                                    }
                                                  ]
                                                },
                                                {
                                                  elem : 'item',
                                                  content : [
                                                    {
                                                      block : 'link',
                                                      mods : { theme : 'islands', size: 'l' },
                                                      url : 'https://bem.info/',
                                                      content : 'Engineering Page'
                                                    }
                                                  ]
                                                },
                                                {
                                                  elem : 'item',
                                                  content : [
                                                    {
                                                      block : 'link',
                                                      mods : { theme : 'islands', size: 'l' },
                                                      url : 'https://bem.info/',
                                                      content : 'Facebook Research'
                                                    }
                                                  ]
                                                },
                                                {
                                                  elem : 'item',
                                                  content : [
                                                    {
                                                      block : 'link',
                                                      mods : { theme : 'islands', size: 'l' },
                                                      url : 'https://bem.info/',
                                                      content : 'Facebook Developers'
                                                    }
                                                  ]
                                                },
                                                {
                                                  elem : 'item',
                                                  content : [
                                                    {
                                                      block : 'link',
                                                      mods : { theme : 'islands', size: 'l' },
                                                      url : 'https://bem.info/',
                                                      content : 'Open Compute Project'
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
                                              content : 'On Github'
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
                                                      mods : { theme : 'islands', size: 'l' },
                                                      url : 'https://bem.info/',
                                                      content : 'Facebook'
                                                    }
                                                  ]
                                                },
                                                {
                                                  elem : 'item',
                                                  content : [
                                                    {
                                                      block : 'link',
                                                      mods : { theme : 'islands', size: 'l' },
                                                      url : 'https://bem.info/',
                                                      content : 'Instagram'
                                                    }
                                                  ]
                                                },
                                                {
                                                  elem : 'item',
                                                  content : [
                                                    {
                                                      block : 'link',
                                                      mods : { theme : 'islands', size: 'l' },
                                                      url : 'https://bem.info/',
                                                      content : 'Parse'
                                                    }
                                                  ]
                                                },
                                                {
                                                  elem : 'item',
                                                  content : [
                                                    {
                                                      block : 'link',
                                                      mods : { theme : 'islands', size: 'l' },
                                                      url : 'https://bem.info/',
                                                      content : 'OculusVR'
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
                                              content : 'News'
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
                                                      mods : { theme : 'islands', size: 'l' },
                                                      url : 'https://bem.info/',
                                                      content : 'Blog'
                                                    }
                                                  ]
                                                },
                                                {
                                                  elem : 'item',
                                                  content : [
                                                    {
                                                      block : 'link',
                                                      mods : { theme : 'islands', size: 'l' },
                                                      url : 'https://bem.info/',
                                                      content : 'Events'
                                                    }
                                                  ]
                                                },
                                                {
                                                  elem : 'item',
                                                  content : [
                                                    {
                                                      block : 'link',
                                                      mods : { theme : 'islands', size: 'l' },
                                                      url : 'https://bem.info/',
                                                      content : 'Video'
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
                },
                {
                  elem : 'codepen',
                  content : [
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
