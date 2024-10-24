(window.webpackJsonp = window.webpackJsonp || []).push([
    [24],
    {
        '1jwE': function (l, n, e) {
            'use strict';
            (function (l) {
                var t = e('rh/z');
                n.a = function (l, n) {
                    var e = this, u = t.a.getById(l), i = t.a.getBody();
                    if (u) {
                        var o = {
                                toggleSpeed: 400,
                                sticky: {
                                    releseOnReverse: !1,
                                    offset: 300,
                                    zIndex: 101
                                }
                            }, a = {
                                construct: function (l) {
                                    return t.a.data(u).has('card') ? e = t.a.data(u).get('card') : (a.init(l), a.build(), t.a.data(u).set('card', e)), e;
                                },
                                init: function (l) {
                                    e.element = u, e.events = [], e.options = t.a.deepExtend({}, o, l), e.header = t.a.child(u, '.card-header'), e.footer = t.a.child(u, '.card-footer'), t.a.child(u, '.card-body') ? e.body = t.a.child(u, '.card-body') : t.a.child(u, '.form') && (e.body = t.a.child(u, '.form'));
                                },
                                build: function () {
                                    var l = t.a.find(e.header, '[data-card-tool=remove]');
                                    l && t.a.addEvent(l, 'click', function (l) {
                                        l.preventDefault(), a.remove();
                                    });
                                    var n = t.a.find(e.header, '[data-card-tool=reload]');
                                    n && t.a.addEvent(n, 'click', function (l) {
                                        l.preventDefault(), a.reload();
                                    });
                                    var u = t.a.find(e.header, '[data-card-tool=toggle]');
                                    u && t.a.addEvent(u, 'click', function (l) {
                                        l.preventDefault(), a.toggle();
                                    });
                                },
                                initSticky: function () {
                                    e.header && window.addEventListener('scroll', a.onScrollSticky);
                                },
                                onScrollSticky: function (l) {
                                    var n = e.options.sticky.offset;
                                    if (!isNaN(n)) {
                                        var u = t.a.getScrollTop();
                                        u >= n && !1 === t.a.hasClass(i, 'card-sticky-on') ? (a.eventTrigger('stickyOn'), t.a.addClass(i, 'card-sticky-on'), a.updateSticky()) : 1.5 * u <= n && t.a.hasClass(i, 'card-sticky-on') && (a.eventTrigger('stickyOff'), t.a.removeClass(i, 'card-sticky-on'), a.resetSticky());
                                    }
                                },
                                updateSticky: function () {
                                    var l, n, u;
                                    e.header && t.a.hasClass(i, 'card-sticky-on') && (l = e.options.sticky.position.top instanceof Function ? parseInt(e.options.sticky.position.top.call(this, e)) : parseInt(e.options.sticky.position.top), n = e.options.sticky.position.left instanceof Function ? parseInt(e.options.sticky.position.left.call(this, e)) : parseInt(e.options.sticky.position.left), u = e.options.sticky.position.right instanceof Function ? parseInt(e.options.sticky.position.right.call(this, e)) : parseInt(e.options.sticky.position.right), t.a.css(e.header, 'z-index', e.options.sticky.zIndex), t.a.css(e.header, 'top', l + 'px'), t.a.css(e.header, 'left', n + 'px'), t.a.css(e.header, 'right', u + 'px'));
                                },
                                resetSticky: function () {
                                    e.header && !1 === t.a.hasClass(i, 'card-sticky-on') && (t.a.css(e.header, 'z-index', ''), t.a.css(e.header, 'top', ''), t.a.css(e.header, 'left', ''), t.a.css(e.header, 'right', ''));
                                },
                                remove: function () {
                                    !1 !== a.eventTrigger('beforeRemove') && (t.a.remove(u), a.eventTrigger('afterRemove'));
                                },
                                setContent: function (l) {
                                    l && (e.body.innerHTML = l);
                                },
                                getBody: function () {
                                    return e.body;
                                },
                                getSelf: function () {
                                    return u;
                                },
                                reload: function () {
                                    a.eventTrigger('reload');
                                },
                                toggle: function () {
                                    t.a.hasClass(u, 'card-collapse') || t.a.hasClass(u, 'card-collapsed') ? a.expand() : a.collapse();
                                },
                                collapse: function () {
                                    !1 !== a.eventTrigger('beforeCollapse') && (t.a.slideUp(e.body, e.options.toggleSpeed, function () {
                                        a.eventTrigger('afterCollapse');
                                    }), t.a.addClass(u, 'card-collapse'));
                                },
                                expand: function () {
                                    !1 !== a.eventTrigger('beforeExpand') && (t.a.slideDown(e.body, e.options.toggleSpeed, function () {
                                        a.eventTrigger('afterExpand');
                                    }), t.a.removeClass(u, 'card-collapse'), t.a.removeClass(u, 'card-collapsed'));
                                },
                                eventTrigger: function (l) {
                                    for (var n = 0; n < e.events.length; n++) {
                                        var t = e.events[n];
                                        if (t.name == l) {
                                            if (1 != t.one)
                                                return t.handler.call(this, e);
                                            if (0 == t.fired)
                                                return e.events[n].fired = !0, t.handler.call(this, e);
                                        }
                                    }
                                },
                                addEvent: function (l, n, t) {
                                    return e.events.push({
                                        name: l,
                                        handler: n,
                                        one: t,
                                        fired: !1
                                    }), e;
                                }
                            };
                        return e.setDefaults = function (l) {
                            o = l;
                        }, e.remove = function () {
                            return a.remove(html);
                        }, e.initSticky = function () {
                            return a.initSticky();
                        }, e.updateSticky = function () {
                            return a.updateSticky();
                        }, e.resetSticky = function () {
                            return a.resetSticky();
                        }, e.destroySticky = function () {
                            a.resetSticky(), window.removeEventListener('scroll', a.onScrollSticky);
                        }, e.reload = function () {
                            return a.reload();
                        }, e.setContent = function (l) {
                            return a.setContent(l);
                        }, e.toggle = function () {
                            return a.toggle();
                        }, e.collapse = function () {
                            return a.collapse();
                        }, e.expand = function () {
                            return a.expand();
                        }, e.getBody = function () {
                            return a.getBody();
                        }, e.getSelf = function () {
                            return a.getSelf();
                        }, e.on = function (l, n) {
                            return a.addEvent(l, n);
                        }, e.one = function (l, n) {
                            return a.addEvent(l, n, !0);
                        }, a.construct.apply(e, [n]), e;
                    }
                };
            }.call(this, e('3UD+')(l)));
        },
        ESrA: function (l, n, e) {
            'use strict';
            e.d(n, 'a', function () {
                return u;
            });
            var t = e('XNiG');
            class u {
                constructor() {
                    this._ngUnsubscribe = new t.a();
                }
                ngOnDestroy() {
                    this._ngUnsubscribe.next(), this._ngUnsubscribe.complete();
                }
            }
        },
        Gdcl: function (l, n, e) {
            'use strict';
            e.r(n), e.d(n, 'LayoutModuleNgFactory', function () {
                return qo;
            });
            var t = e('8Y7J');
            class u {
            }
            var i = e('pMnS'), o = e('jyex'), a = e('SVse'), s = e('W2UE'), r = e('IheW'), d = e('I2up'), c = e('aIpl'), f = e('iInd'), p = e('TSSN'), h = e('07VJ');
            class g {
                constructor(l, n, e) {
                    this.layout = l, this.loc = n, this.store = e, this.asideMenuHTMLAttributes = {}, this.asideMenuScroll = 1, this.asideSelfMinimizeToggle = !1;
                }
                ngOnInit() {
                    this.disableAsideSelfDisplay = !1 === this.layout.getProp('aside.self.display'), this.brandSkin = this.layout.getProp('brand.self.theme'), this.headerLogo = this.getLogo(), this.ulCSSClasses = this.layout.getProp('aside_menu_nav'), this.asideMenuCSSClasses = this.layout.getStringCSSClasses('aside_menu'), this.asideMenuHTMLAttributes = this.layout.getHTMLAttributes('aside_menu'), this.asideMenuDropdown = this.layout.getProp('aside.menu.dropdown') ? '1' : '0', this.brandClasses = this.layout.getProp('brand'), this.asideSelfMinimizeToggle = this.layout.getProp('aside.self.minimize.toggle'), this.asideMenuScroll = this.layout.getProp('aside.menu.scroll') ? 1 : 0, this.asideMenuCSSClasses = `${ this.asideMenuCSSClasses } ${ 1 === this.asideMenuScroll ? 'scroll my-4 ps ps--active-y' : '' }`, this.location = this.loc, this.seeDashChart$ = this.store.select(h.e), this.seeSeeller$ = this.store.select(h.g), this.seeDistribui$ = this.store.select(h.f);
                }
                getLogo() {
                    return './assets/media/logos/logo_h.png';
                }
            }
            var m = e('l0JT'), v = e('tqRt'), b = t['ɵcrt']({
                    encapsulation: 0,
                    styles: [['[_nghost-%COMP%]   .aside[_ngcontent-%COMP%]{height:100%}[_nghost-%COMP%]   .aside[_ngcontent-%COMP%]   .aside-menu[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .menu-text[_ngcontent-%COMP%]{white-space:nowrap}']],
                    data: {}
                });
            function y(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 4, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 3, 'button', [
                        [
                            'class',
                            'brand-toggle btn btn-sm px-0'
                        ],
                        [
                            'id',
                            'kt_aside_toggle'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 16777216, null, null, 2, 'span', [
                        [
                            'cacheSVG',
                            'true'
                        ],
                        [
                            'class',
                            'svg-icon svg-icon-xl'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵprd'](512, null, o.SVGCacheService, o.SVGCacheService, [
                        [
                            2,
                            a.APP_BASE_HREF
                        ],
                        [
                            2,
                            a.PlatformLocation
                        ],
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        r.HttpClient,
                        r.HttpBackend,
                        t.RendererFactory2
                    ]),
                    t['ɵdid'](4, 737280, null, 0, d.InlineSVGDirective, [
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        o.SVGCacheService,
                        t.Renderer2,
                        c.InlineSVGService,
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        t.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ],
                        cacheSVG: [
                            1,
                            'cacheSVG'
                        ]
                    }, null)
                ], function (l, n) {
                    l(n, 4, 0, './assets/media/svg/icons/Navigation/Angle-double-left.svg', 'true');
                }, null);
            }
            function w(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 2, 'a', [[
                            'routerLink',
                            '/'
                        ]], [
                        [
                            1,
                            'target',
                            0
                        ],
                        [
                            8,
                            'href',
                            4
                        ]
                    ], [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 2).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](2, 671744, null, 0, f.u, [
                        f.r,
                        f.a,
                        a.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](3, 0, null, null, 0, 'img', [[
                            'alt',
                            'Logo'
                        ]], [[
                            1,
                            'src',
                            4
                        ]], null, null, null, null))
                ], function (l, n) {
                    l(n, 2, 0, '/');
                }, function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, t['ɵnov'](n, 2).target, t['ɵnov'](n, 2).href), l(n, 3, 0, e.headerLogo);
                });
            }
            function S(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 30, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 14, 'li', [
                        [
                            'aria-haspopup',
                            'true'
                        ],
                        [
                            'class',
                            'menu-item'
                        ],
                        [
                            'routerLinkActive',
                            'menu-item-active'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵdid'](2, 1720320, null, 2, f.t, [
                        f.r,
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            2,
                            f.s
                        ],
                        [
                            2,
                            f.u
                        ]
                    ], {
                        routerLinkActive: [
                            0,
                            'routerLinkActive'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 5, { links: 1 }),
                    t['ɵqud'](603979776, 6, { linksWithHrefs: 1 }),
                    (l()(), t['ɵeld'](5, 0, null, null, 10, 'a', [
                        [
                            'class',
                            'menu-link'
                        ],
                        [
                            'routerLink',
                            '/sales'
                        ],
                        [
                            'routerLinkActive',
                            'active'
                        ]
                    ], [
                        [
                            1,
                            'target',
                            0
                        ],
                        [
                            8,
                            'href',
                            4
                        ]
                    ], [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 6).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](6, 671744, [
                        [
                            8,
                            4
                        ],
                        [
                            6,
                            4
                        ]
                    ], 0, f.u, [
                        f.r,
                        f.a,
                        a.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    t['ɵdid'](7, 1720320, null, 2, f.t, [
                        f.r,
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            2,
                            f.s
                        ],
                        [
                            2,
                            f.u
                        ]
                    ], {
                        routerLinkActive: [
                            0,
                            'routerLinkActive'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 7, { links: 1 }),
                    t['ɵqud'](603979776, 8, { linksWithHrefs: 1 }),
                    (l()(), t['ɵeld'](10, 16777216, null, null, 2, 'span', [
                        [
                            'cacheSVG',
                            'true'
                        ],
                        [
                            'class',
                            'svg-icon menu-icon'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵprd'](512, null, o.SVGCacheService, o.SVGCacheService, [
                        [
                            2,
                            a.APP_BASE_HREF
                        ],
                        [
                            2,
                            a.PlatformLocation
                        ],
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        r.HttpClient,
                        r.HttpBackend,
                        t.RendererFactory2
                    ]),
                    t['ɵdid'](12, 737280, null, 0, d.InlineSVGDirective, [
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        o.SVGCacheService,
                        t.Renderer2,
                        c.InlineSVGService,
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        t.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ],
                        cacheSVG: [
                            1,
                            'cacheSVG'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](13, 0, null, null, 2, 'span', [
                        [
                            'class',
                            'menu-text'
                        ],
                        [
                            'subheader',
                            'Ventas'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](14, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](16, 0, null, null, 14, 'li', [
                        [
                            'aria-haspopup',
                            'true'
                        ],
                        [
                            'class',
                            'menu-item'
                        ],
                        [
                            'routerLinkActive',
                            'menu-item-active'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵdid'](17, 1720320, null, 2, f.t, [
                        f.r,
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            2,
                            f.s
                        ],
                        [
                            2,
                            f.u
                        ]
                    ], {
                        routerLinkActive: [
                            0,
                            'routerLinkActive'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 9, { links: 1 }),
                    t['ɵqud'](603979776, 10, { linksWithHrefs: 1 }),
                    (l()(), t['ɵeld'](20, 0, null, null, 10, 'a', [
                        [
                            'class',
                            'menu-link'
                        ],
                        [
                            'routerLink',
                            '/customers'
                        ],
                        [
                            'routerLinkActive',
                            'active'
                        ]
                    ], [
                        [
                            1,
                            'target',
                            0
                        ],
                        [
                            8,
                            'href',
                            4
                        ]
                    ], [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 21).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](21, 671744, [
                        [
                            12,
                            4
                        ],
                        [
                            10,
                            4
                        ]
                    ], 0, f.u, [
                        f.r,
                        f.a,
                        a.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    t['ɵdid'](22, 1720320, null, 2, f.t, [
                        f.r,
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            2,
                            f.s
                        ],
                        [
                            2,
                            f.u
                        ]
                    ], {
                        routerLinkActive: [
                            0,
                            'routerLinkActive'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 11, { links: 1 }),
                    t['ɵqud'](603979776, 12, { linksWithHrefs: 1 }),
                    (l()(), t['ɵeld'](25, 16777216, null, null, 2, 'span', [
                        [
                            'cacheSVG',
                            'true'
                        ],
                        [
                            'class',
                            'svg-icon menu-icon'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵprd'](512, null, o.SVGCacheService, o.SVGCacheService, [
                        [
                            2,
                            a.APP_BASE_HREF
                        ],
                        [
                            2,
                            a.PlatformLocation
                        ],
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        r.HttpClient,
                        r.HttpBackend,
                        t.RendererFactory2
                    ]),
                    t['ɵdid'](27, 737280, null, 0, d.InlineSVGDirective, [
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        o.SVGCacheService,
                        t.Renderer2,
                        c.InlineSVGService,
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        t.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ],
                        cacheSVG: [
                            1,
                            'cacheSVG'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](28, 0, null, null, 2, 'span', [
                        [
                            'class',
                            'menu-text'
                        ],
                        [
                            'subheader',
                            'Clientes'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](29, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ])
                ], function (l, n) {
                    l(n, 2, 0, 'menu-item-active'), l(n, 6, 0, '/sales'), l(n, 7, 0, 'active'), l(n, 12, 0, './assets/media/svg/icons/Shopping/Sale2.svg', 'true'), l(n, 17, 0, 'menu-item-active'), l(n, 21, 0, '/customers'), l(n, 22, 0, 'active'), l(n, 27, 0, './assets/media/svg/icons/Communication/Shield-user.svg', 'true');
                }, function (l, n) {
                    l(n, 5, 0, t['ɵnov'](n, 6).target, t['ɵnov'](n, 6).href), l(n, 14, 0, t['ɵunv'](n, 14, 0, t['ɵnov'](n, 15).transform('GENERAL.SALES'))), l(n, 20, 0, t['ɵnov'](n, 21).target, t['ɵnov'](n, 21).href), l(n, 29, 0, t['ɵunv'](n, 29, 0, t['ɵnov'](n, 30).transform('GENERAL.COSTUMER')));
                });
            }
            function C(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 15, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 14, 'li', [
                        [
                            'aria-haspopup',
                            'true'
                        ],
                        [
                            'class',
                            'menu-item'
                        ],
                        [
                            'routerLinkActive',
                            'menu-item-active'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵdid'](2, 1720320, null, 2, f.t, [
                        f.r,
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            2,
                            f.s
                        ],
                        [
                            2,
                            f.u
                        ]
                    ], {
                        routerLinkActive: [
                            0,
                            'routerLinkActive'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 13, { links: 1 }),
                    t['ɵqud'](603979776, 14, { linksWithHrefs: 1 }),
                    (l()(), t['ɵeld'](5, 0, null, null, 10, 'a', [
                        [
                            'class',
                            'menu-link'
                        ],
                        [
                            'routerLink',
                            '/seller'
                        ],
                        [
                            'routerLinkActive',
                            'active'
                        ]
                    ], [
                        [
                            1,
                            'target',
                            0
                        ],
                        [
                            8,
                            'href',
                            4
                        ]
                    ], [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 6).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](6, 671744, [
                        [
                            16,
                            4
                        ],
                        [
                            14,
                            4
                        ]
                    ], 0, f.u, [
                        f.r,
                        f.a,
                        a.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    t['ɵdid'](7, 1720320, null, 2, f.t, [
                        f.r,
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            2,
                            f.s
                        ],
                        [
                            2,
                            f.u
                        ]
                    ], {
                        routerLinkActive: [
                            0,
                            'routerLinkActive'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 15, { links: 1 }),
                    t['ɵqud'](603979776, 16, { linksWithHrefs: 1 }),
                    (l()(), t['ɵeld'](10, 16777216, null, null, 2, 'span', [
                        [
                            'cacheSVG',
                            'true'
                        ],
                        [
                            'class',
                            'svg-icon menu-icon'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵprd'](512, null, o.SVGCacheService, o.SVGCacheService, [
                        [
                            2,
                            a.APP_BASE_HREF
                        ],
                        [
                            2,
                            a.PlatformLocation
                        ],
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        r.HttpClient,
                        r.HttpBackend,
                        t.RendererFactory2
                    ]),
                    t['ɵdid'](12, 737280, null, 0, d.InlineSVGDirective, [
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        o.SVGCacheService,
                        t.Renderer2,
                        c.InlineSVGService,
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        t.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ],
                        cacheSVG: [
                            1,
                            'cacheSVG'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](13, 0, null, null, 2, 'span', [
                        [
                            'class',
                            'menu-text'
                        ],
                        [
                            'subheader',
                            'Vendedores'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](14, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ])
                ], function (l, n) {
                    l(n, 2, 0, 'menu-item-active'), l(n, 6, 0, '/seller'), l(n, 7, 0, 'active'), l(n, 12, 0, './assets/media/svg/icons/Communication/Shield-user.svg', 'true');
                }, function (l, n) {
                    l(n, 5, 0, t['ɵnov'](n, 6).target, t['ɵnov'](n, 6).href), l(n, 14, 0, t['ɵunv'](n, 14, 0, t['ɵnov'](n, 15).transform('GENERAL.SELLER')));
                });
            }
            function k(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 6, 'div', [
                        [
                            'class',
                            'brand flex-column-auto'
                        ],
                        [
                            'id',
                            'kt_brand'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵdid'](1, 278528, null, 0, a.NgClass, [
                        t.IterableDiffers,
                        t.KeyValueDiffers,
                        t.ElementRef,
                        t.Renderer2
                    ], {
                        klass: [
                            0,
                            'klass'
                        ],
                        ngClass: [
                            1,
                            'ngClass'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](2, 0, null, null, 2, 'a', [
                        [
                            'class',
                            'brand-logo text-center'
                        ],
                        [
                            'routerLink',
                            '/'
                        ]
                    ], [
                        [
                            1,
                            'target',
                            0
                        ],
                        [
                            8,
                            'href',
                            4
                        ]
                    ], [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 3).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](3, 671744, null, 0, f.u, [
                        f.r,
                        f.a,
                        a.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](4, 0, null, null, 0, 'img', [
                        [
                            'alt',
                            'Logo'
                        ],
                        [
                            'style',
                            'margin-left: auto; margin-right: auto; width: 180px;'
                        ]
                    ], [[
                            1,
                            'src',
                            4
                        ]], null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, y)),
                    t['ɵdid'](6, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](7, 0, null, null, 127, 'div', [
                        [
                            'class',
                            'aside-menu-wrapper flex-column-fluid'
                        ],
                        [
                            'id',
                            'kt_aside_menu_wrapper'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, w)),
                    t['ɵdid'](9, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](10, 0, null, null, 124, 'div', [
                        [
                            'class',
                            'aside-menu'
                        ],
                        [
                            'data-menu-dropdown-timeout',
                            '500'
                        ],
                        [
                            'data-menu-vertical',
                            '1'
                        ],
                        [
                            'id',
                            'kt_aside_menu'
                        ]
                    ], [
                        [
                            1,
                            'data-menu-scroll',
                            0
                        ],
                        [
                            1,
                            'data-menu-dropdown',
                            0
                        ]
                    ], null, null, null, null)),
                    t['ɵdid'](11, 278528, null, 0, a.NgClass, [
                        t.IterableDiffers,
                        t.KeyValueDiffers,
                        t.ElementRef,
                        t.Renderer2
                    ], {
                        klass: [
                            0,
                            'klass'
                        ],
                        ngClass: [
                            1,
                            'ngClass'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](12, 0, null, null, 122, 'ul', [[
                            'class',
                            'menu-nav'
                        ]], null, null, null, null, null)),
                    t['ɵdid'](13, 278528, null, 0, a.NgClass, [
                        t.IterableDiffers,
                        t.KeyValueDiffers,
                        t.ElementRef,
                        t.Renderer2
                    ], {
                        klass: [
                            0,
                            'klass'
                        ],
                        ngClass: [
                            1,
                            'ngClass'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](14, 0, null, null, 13, 'li', [
                        [
                            'aria-haspopup',
                            'true'
                        ],
                        [
                            'class',
                            'menu-item'
                        ],
                        [
                            'routerLinkActive',
                            'menu-item-active'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵdid'](15, 1720320, null, 2, f.t, [
                        f.r,
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            2,
                            f.s
                        ],
                        [
                            2,
                            f.u
                        ]
                    ], {
                        routerLinkActive: [
                            0,
                            'routerLinkActive'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 1, { links: 1 }),
                    t['ɵqud'](603979776, 2, { linksWithHrefs: 1 }),
                    (l()(), t['ɵeld'](18, 0, null, null, 9, 'a', [
                        [
                            'class',
                            'menu-link'
                        ],
                        [
                            'routerLink',
                            '/dashboard'
                        ],
                        [
                            'routerLinkActive',
                            'active'
                        ]
                    ], [
                        [
                            1,
                            'target',
                            0
                        ],
                        [
                            8,
                            'href',
                            4
                        ]
                    ], [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 19).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](19, 671744, [
                        [
                            4,
                            4
                        ],
                        [
                            2,
                            4
                        ]
                    ], 0, f.u, [
                        f.r,
                        f.a,
                        a.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    t['ɵdid'](20, 1720320, null, 2, f.t, [
                        f.r,
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            2,
                            f.s
                        ],
                        [
                            2,
                            f.u
                        ]
                    ], {
                        routerLinkActive: [
                            0,
                            'routerLinkActive'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 3, { links: 1 }),
                    t['ɵqud'](603979776, 4, { linksWithHrefs: 1 }),
                    (l()(), t['ɵeld'](23, 16777216, null, null, 2, 'span', [
                        [
                            'cacheSVG',
                            'true'
                        ],
                        [
                            'class',
                            'svg-icon menu-icon'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵprd'](512, null, o.SVGCacheService, o.SVGCacheService, [
                        [
                            2,
                            a.APP_BASE_HREF
                        ],
                        [
                            2,
                            a.PlatformLocation
                        ],
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        r.HttpClient,
                        r.HttpBackend,
                        t.RendererFactory2
                    ]),
                    t['ɵdid'](25, 737280, null, 0, d.InlineSVGDirective, [
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        o.SVGCacheService,
                        t.Renderer2,
                        c.InlineSVGService,
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        t.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ],
                        cacheSVG: [
                            1,
                            'cacheSVG'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](26, 0, null, null, 1, 'span', [
                        [
                            'class',
                            'menu-text'
                        ],
                        [
                            'subheader',
                            'Dashboard'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Dashboard'])),
                    (l()(), t['ɵand'](16777216, null, null, 3, null, S)),
                    t['ɵdid'](29, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, C)),
                    t['ɵdid'](33, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵeld'](35, 0, null, null, 14, 'li', [
                        [
                            'aria-haspopup',
                            'true'
                        ],
                        [
                            'class',
                            'menu-item'
                        ],
                        [
                            'routerLinkActive',
                            'menu-item-active'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵdid'](36, 1720320, null, 2, f.t, [
                        f.r,
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            2,
                            f.s
                        ],
                        [
                            2,
                            f.u
                        ]
                    ], {
                        routerLinkActive: [
                            0,
                            'routerLinkActive'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 17, { links: 1 }),
                    t['ɵqud'](603979776, 18, { linksWithHrefs: 1 }),
                    (l()(), t['ɵeld'](39, 0, null, null, 10, 'a', [
                        [
                            'class',
                            'menu-link'
                        ],
                        [
                            'routerLink',
                            '/document'
                        ],
                        [
                            'routerLinkActive',
                            'active'
                        ]
                    ], [
                        [
                            1,
                            'target',
                            0
                        ],
                        [
                            8,
                            'href',
                            4
                        ]
                    ], [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 40).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](40, 671744, [
                        [
                            20,
                            4
                        ],
                        [
                            18,
                            4
                        ]
                    ], 0, f.u, [
                        f.r,
                        f.a,
                        a.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    t['ɵdid'](41, 1720320, null, 2, f.t, [
                        f.r,
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            2,
                            f.s
                        ],
                        [
                            2,
                            f.u
                        ]
                    ], {
                        routerLinkActive: [
                            0,
                            'routerLinkActive'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 19, { links: 1 }),
                    t['ɵqud'](603979776, 20, { linksWithHrefs: 1 }),
                    (l()(), t['ɵeld'](44, 16777216, null, null, 2, 'span', [
                        [
                            'cacheSVG',
                            'true'
                        ],
                        [
                            'class',
                            'svg-icon menu-icon'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵprd'](512, null, o.SVGCacheService, o.SVGCacheService, [
                        [
                            2,
                            a.APP_BASE_HREF
                        ],
                        [
                            2,
                            a.PlatformLocation
                        ],
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        r.HttpClient,
                        r.HttpBackend,
                        t.RendererFactory2
                    ]),
                    t['ɵdid'](46, 737280, null, 0, d.InlineSVGDirective, [
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        o.SVGCacheService,
                        t.Renderer2,
                        c.InlineSVGService,
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        t.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ],
                        cacheSVG: [
                            1,
                            'cacheSVG'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](47, 0, null, null, 2, 'span', [
                        [
                            'class',
                            'menu-text'
                        ],
                        [
                            'subheader',
                            'Lista de Documentos'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](48, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](50, 0, null, null, 44, 'li', [
                        [
                            'aria-haspopup',
                            'true'
                        ],
                        [
                            'class',
                            'menu-item menu-item-submenu'
                        ],
                        [
                            'data-menu-toggle',
                            'hover'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](51, 0, null, null, 7, 'a', [[
                            'class',
                            'menu-link menu-toggle'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](52, 16777216, null, null, 2, 'span', [
                        [
                            'cacheSVG',
                            'true'
                        ],
                        [
                            'class',
                            'svg-icon menu-icon'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵprd'](512, null, o.SVGCacheService, o.SVGCacheService, [
                        [
                            2,
                            a.APP_BASE_HREF
                        ],
                        [
                            2,
                            a.PlatformLocation
                        ],
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        r.HttpClient,
                        r.HttpBackend,
                        t.RendererFactory2
                    ]),
                    t['ɵdid'](54, 737280, null, 0, d.InlineSVGDirective, [
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        o.SVGCacheService,
                        t.Renderer2,
                        c.InlineSVGService,
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        t.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ],
                        cacheSVG: [
                            1,
                            'cacheSVG'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](55, 0, null, null, 2, 'span', [[
                            'class',
                            'menu-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](56, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](58, 0, null, null, 0, 'i', [[
                            'class',
                            'menu-arrow'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](59, 0, null, null, 35, 'div', [[
                            'class',
                            'menu-submenu'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](60, 0, null, null, 0, 'i', [[
                            'class',
                            'menu-arrow'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](61, 0, null, null, 33, 'ul', [[
                            'class',
                            'menu-subnav'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](62, 0, null, null, 4, 'li', [
                        [
                            'aria-haspopup',
                            'true'
                        ],
                        [
                            'class',
                            'menu-item menu-item-parent'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](63, 0, null, null, 3, 'span', [[
                            'class',
                            'menu-link'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](64, 0, null, null, 2, 'span', [
                        [
                            'class',
                            'menu-text'
                        ],
                        [
                            'subheader',
                            'Buzón legal'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](65, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](67, 0, null, null, 13, 'li', [
                        [
                            'aria-haspopup',
                            'true'
                        ],
                        [
                            'class',
                            'menu-item menu-item-submenu'
                        ],
                        [
                            'data-menu-toggle',
                            'hover'
                        ],
                        [
                            'routerLinkActive',
                            'menu-item-open'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵdid'](68, 1720320, null, 2, f.t, [
                        f.r,
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            2,
                            f.s
                        ],
                        [
                            2,
                            f.u
                        ]
                    ], {
                        routerLinkActive: [
                            0,
                            'routerLinkActive'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 21, { links: 1 }),
                    t['ɵqud'](603979776, 22, { linksWithHrefs: 1 }),
                    (l()(), t['ɵeld'](71, 0, null, null, 9, 'a', [
                        [
                            'class',
                            'menu-link menu-toggle'
                        ],
                        [
                            'routerLink',
                            '/contract'
                        ],
                        [
                            'routerLinkActive',
                            'active'
                        ]
                    ], [
                        [
                            1,
                            'target',
                            0
                        ],
                        [
                            8,
                            'href',
                            4
                        ]
                    ], [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 72).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](72, 671744, [
                        [
                            24,
                            4
                        ],
                        [
                            22,
                            4
                        ]
                    ], 0, f.u, [
                        f.r,
                        f.a,
                        a.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    t['ɵdid'](73, 1720320, null, 2, f.t, [
                        f.r,
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            2,
                            f.s
                        ],
                        [
                            2,
                            f.u
                        ]
                    ], {
                        routerLinkActive: [
                            0,
                            'routerLinkActive'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 23, { links: 1 }),
                    t['ɵqud'](603979776, 24, { linksWithHrefs: 1 }),
                    (l()(), t['ɵeld'](76, 0, null, null, 1, 'i', [[
                            'class',
                            'menu-bullet menu-bullet-dot'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](77, 0, null, null, 0, 'span', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](78, 0, null, null, 2, 'span', [
                        [
                            'class',
                            'menu-text'
                        ],
                        [
                            'subheader',
                            'Buzones'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](79, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](81, 0, null, null, 13, 'li', [
                        [
                            'aria-haspopup',
                            'true'
                        ],
                        [
                            'class',
                            'menu-item menu-item-submenu'
                        ],
                        [
                            'data-menu-toggle',
                            'hover'
                        ],
                        [
                            'routerLinkActive',
                            'menu-item-open'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵdid'](82, 1720320, null, 2, f.t, [
                        f.r,
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            2,
                            f.s
                        ],
                        [
                            2,
                            f.u
                        ]
                    ], {
                        routerLinkActive: [
                            0,
                            'routerLinkActive'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 25, { links: 1 }),
                    t['ɵqud'](603979776, 26, { linksWithHrefs: 1 }),
                    (l()(), t['ɵeld'](85, 0, null, null, 9, 'a', [
                        [
                            'class',
                            'menu-link menu-toggle'
                        ],
                        [
                            'routerLink',
                            '/notifications'
                        ],
                        [
                            'routerLinkActive',
                            'active'
                        ]
                    ], [
                        [
                            1,
                            'target',
                            0
                        ],
                        [
                            8,
                            'href',
                            4
                        ]
                    ], [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 86).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](86, 671744, [
                        [
                            28,
                            4
                        ],
                        [
                            26,
                            4
                        ]
                    ], 0, f.u, [
                        f.r,
                        f.a,
                        a.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    t['ɵdid'](87, 1720320, null, 2, f.t, [
                        f.r,
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            2,
                            f.s
                        ],
                        [
                            2,
                            f.u
                        ]
                    ], {
                        routerLinkActive: [
                            0,
                            'routerLinkActive'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 27, { links: 1 }),
                    t['ɵqud'](603979776, 28, { linksWithHrefs: 1 }),
                    (l()(), t['ɵeld'](90, 0, null, null, 1, 'i', [[
                            'class',
                            'menu-bullet menu-bullet-dot'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](91, 0, null, null, 0, 'span', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](92, 0, null, null, 2, 'span', [
                        [
                            'class',
                            'menu-text'
                        ],
                        [
                            'subheader',
                            'Notificaciones Pendientes'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](93, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](95, 0, null, null, 39, 'li', [
                        [
                            'aria-haspopup',
                            'true'
                        ],
                        [
                            'class',
                            'menu-item menu-item-submenu'
                        ],
                        [
                            'data-menu-toggle',
                            'hover'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](96, 0, null, null, 7, 'a', [[
                            'class',
                            'menu-link menu-toggle'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](97, 16777216, null, null, 2, 'span', [
                        [
                            'cacheSVG',
                            'true'
                        ],
                        [
                            'class',
                            'svg-icon menu-icon'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵprd'](512, null, o.SVGCacheService, o.SVGCacheService, [
                        [
                            2,
                            a.APP_BASE_HREF
                        ],
                        [
                            2,
                            a.PlatformLocation
                        ],
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        r.HttpClient,
                        r.HttpBackend,
                        t.RendererFactory2
                    ]),
                    t['ɵdid'](99, 737280, null, 0, d.InlineSVGDirective, [
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        o.SVGCacheService,
                        t.Renderer2,
                        c.InlineSVGService,
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        t.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ],
                        cacheSVG: [
                            1,
                            'cacheSVG'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](100, 0, null, null, 2, 'span', [[
                            'class',
                            'menu-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](101, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](103, 0, null, null, 0, 'i', [[
                            'class',
                            'menu-arrow'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](104, 0, null, null, 30, 'div', [[
                            'class',
                            'menu-submenu'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](105, 0, null, null, 0, 'i', [[
                            'class',
                            'menu-arrow'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](106, 0, null, null, 28, 'ul', [[
                            'class',
                            'menu-subnav'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](107, 0, null, null, 13, 'li', [
                        [
                            'aria-haspopup',
                            'true'
                        ],
                        [
                            'class',
                            'menu-item menu-item-submenu'
                        ],
                        [
                            'data-menu-toggle',
                            'hover'
                        ],
                        [
                            'routerLinkActive',
                            'menu-item-open'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵdid'](108, 1720320, null, 2, f.t, [
                        f.r,
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            2,
                            f.s
                        ],
                        [
                            2,
                            f.u
                        ]
                    ], {
                        routerLinkActive: [
                            0,
                            'routerLinkActive'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 29, { links: 1 }),
                    t['ɵqud'](603979776, 30, { linksWithHrefs: 1 }),
                    (l()(), t['ɵeld'](111, 0, null, null, 9, 'a', [
                        [
                            'class',
                            'menu-link menu-toggle'
                        ],
                        [
                            'routerLink',
                            '/packages'
                        ],
                        [
                            'routerLinkActive',
                            'active'
                        ]
                    ], [
                        [
                            1,
                            'target',
                            0
                        ],
                        [
                            8,
                            'href',
                            4
                        ]
                    ], [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 112).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](112, 671744, [
                        [
                            32,
                            4
                        ],
                        [
                            30,
                            4
                        ]
                    ], 0, f.u, [
                        f.r,
                        f.a,
                        a.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    t['ɵdid'](113, 1720320, null, 2, f.t, [
                        f.r,
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            2,
                            f.s
                        ],
                        [
                            2,
                            f.u
                        ]
                    ], {
                        routerLinkActive: [
                            0,
                            'routerLinkActive'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 31, { links: 1 }),
                    t['ɵqud'](603979776, 32, { linksWithHrefs: 1 }),
                    (l()(), t['ɵeld'](116, 0, null, null, 1, 'i', [[
                            'class',
                            'menu-bullet menu-bullet-dot'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](117, 0, null, null, 0, 'span', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](118, 0, null, null, 2, 'span', [[
                            'class',
                            'menu-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](119, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](121, 0, null, null, 13, 'li', [
                        [
                            'aria-haspopup',
                            'true'
                        ],
                        [
                            'class',
                            'menu-item menu-item-submenu'
                        ],
                        [
                            'data-menu-toggle',
                            'hover'
                        ],
                        [
                            'routerLinkActive',
                            'menu-item-open'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵdid'](122, 1720320, null, 2, f.t, [
                        f.r,
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            2,
                            f.s
                        ],
                        [
                            2,
                            f.u
                        ]
                    ], {
                        routerLinkActive: [
                            0,
                            'routerLinkActive'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 33, { links: 1 }),
                    t['ɵqud'](603979776, 34, { linksWithHrefs: 1 }),
                    (l()(), t['ɵeld'](125, 0, null, null, 9, 'a', [
                        [
                            'class',
                            'menu-link menu-toggle'
                        ],
                        [
                            'routerLink',
                            '/packages/notification'
                        ],
                        [
                            'routerLinkActive',
                            'active'
                        ]
                    ], [
                        [
                            1,
                            'target',
                            0
                        ],
                        [
                            8,
                            'href',
                            4
                        ]
                    ], [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 126).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](126, 671744, [
                        [
                            36,
                            4
                        ],
                        [
                            34,
                            4
                        ]
                    ], 0, f.u, [
                        f.r,
                        f.a,
                        a.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    t['ɵdid'](127, 1720320, null, 2, f.t, [
                        f.r,
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            2,
                            f.s
                        ],
                        [
                            2,
                            f.u
                        ]
                    ], {
                        routerLinkActive: [
                            0,
                            'routerLinkActive'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 35, { links: 1 }),
                    t['ɵqud'](603979776, 36, { linksWithHrefs: 1 }),
                    (l()(), t['ɵeld'](130, 0, null, null, 1, 'i', [[
                            'class',
                            'menu-bullet menu-bullet-dot'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](131, 0, null, null, 0, 'span', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](132, 0, null, null, 2, 'span', [[
                            'class',
                            'menu-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](133, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ])
                ], function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, 'brand flex-column-auto', e.brandClasses), 
                    l(n, 3, 0, '/'), l(n, 6, 0, e.asideSelfMinimizeToggle), l(n, 9, 0, e.disableAsideSelfDisplay), l(n, 11, 0, 'aside-menu', e.asideMenuCSSClasses), l(n, 13, 0, 'menu-nav', e.ulCSSClasses), 
                    l(n, 15, 0, 'menu-item-active'), l(n, 19, 0, '/dashboard'), l(n, 20, 0, 'active'), l(n, 25, 0, './assets/media/svg/icons/Design/Layers.svg', 'true'), l(n, 29, 0, t['ɵunv'](n, 29, 0, t['ɵnov'](n, 30).transform(e.seeDistribui$)) || t['ɵunv'](n, 29, 0, t['ɵnov'](n, 31).transform(e.seeSeeller$))), l(n, 33, 0, t['ɵunv'](n, 33, 0, t['ɵnov'](n, 34).transform(e.seeDistribui$))), 
                    l(n, 36, 0, 'menu-item-active'), l(n, 40, 0, '/document'), l(n, 41, 0, 'active'), l(n, 46, 0, './assets/media/svg/custom/1F-06.svg', 'true'), l(n, 54, 0, './assets/media/svg/custom/notificaciones.svg', 'true'), 
                    l(n, 68, 0, 'menu-item-open'), l(n, 72, 0, '/contract'), l(n, 73, 0, 'active'), 
                    l(n, 82, 0, 'menu-item-open'), l(n, 86, 0, '/notifications'), l(n, 87, 0, 'active'), l(n, 99, 0, './assets/media/svg/custom/1F-11.svg', 'true'), 
                    l(n, 108, 0, 'menu-item-open'), l(n, 112, 0, '/packages'), l(n, 113, 0, 'active'), 
                    l(n, 122, 0, 'menu-item-open'), l(n, 126, 0, '/packages/notification'), l(n, 127, 0, 'active');
                }, function (l, n) {
                    var e = n.component;
                    l(n, 2, 0, t['ɵnov'](n, 3).target, t['ɵnov'](n, 3).href), l(n, 4, 0, e.headerLogo), l(n, 10, 0, e.asideMenuScroll, e.asideMenuDropdown), l(n, 18, 0, t['ɵnov'](n, 19).target, t['ɵnov'](n, 19).href), l(n, 39, 0, t['ɵnov'](n, 40).target, t['ɵnov'](n, 40).href), l(n, 48, 0, t['ɵunv'](n, 48, 0, t['ɵnov'](n, 49).transform('GENERAL.SIGNATURE'))), l(n, 56, 0, t['ɵunv'](n, 56, 0, t['ɵnov'](n, 57).transform('GENERAL.NOTIFICACITION'))), l(n, 65, 0, t['ɵunv'](n, 65, 0, t['ɵnov'](n, 66).transform('GENERAL.NOTIFICACITION'))), l(n, 71, 0, t['ɵnov'](n, 72).target, t['ɵnov'](n, 72).href), l(n, 79, 0, t['ɵunv'](n, 79, 0, t['ɵnov'](n, 80).transform('GENERAL.GROUPNOT'))), l(n, 85, 0, t['ɵnov'](n, 86).target, t['ɵnov'](n, 86).href), l(n, 93, 0, t['ɵunv'](n, 93, 0, t['ɵnov'](n, 94).transform('GENERAL.PENDINGNOT'))), l(n, 101, 0, t['ɵunv'](n, 101, 0, t['ɵnov'](n, 102).transform('GENERAL.PACKAGES'))), l(n, 111, 0, t['ɵnov'](n, 112).target, t['ɵnov'](n, 112).href), l(n, 119, 0, t['ɵunv'](n, 119, 0, t['ɵnov'](n, 120).transform('GENERAL.DOCUMENT'))), l(n, 125, 0, t['ɵnov'](n, 126).target, t['ɵnov'](n, 126).href), l(n, 133, 0, t['ɵunv'](n, 133, 0, t['ɵnov'](n, 134).transform('GENERAL.NOTIFICACITION_PACKAGES')));
                });
            }
            var R = e('G0yt'), D = e('s7LF'), I = e('lMep');
            class x {
                constructor(l) {
                    this.request = l, this.type = I.a.SEARCH_DATA_CHARTS;
                }
            }
            class E extends R.n {
                constructor() {
                    super(...arguments), this.DELIMITER = '-';
                }
                fromModel(l) {
                    if (l) {
                        const n = l.split(this.DELIMITER);
                        return {
                            day: parseInt(n[0], 10),
                            month: parseInt(n[1], 10),
                            year: parseInt(n[2], 10)
                        };
                    }
                    return null;
                }
                toModel(l) {
                    return l ? l.day + this.DELIMITER + l.month + this.DELIMITER + l.year : null;
                }
            }
            class A extends R.o {
                constructor() {
                    super(...arguments), this.DELIMITER = '/';
                }
                parse(l) {
                    if (l) {
                        const n = l.split(this.DELIMITER);
                        return {
                            day: parseInt(n[0], 10),
                            month: parseInt(n[1], 10),
                            year: parseInt(n[2], 10)
                        };
                    }
                    return null;
                }
                format(l) {
                    return l ? l.day + this.DELIMITER + l.month + this.DELIMITER + l.year : '';
                }
            }
            class T {
                constructor(l, n, e) {
                    this.calendar = l, this.formatter = n, this.store = e, this.hoveredDate = null, this.filtersForm = new D.j({
                        from: new D.g({
                            value: null,
                            disabled: !0
                        }),
                        to: new D.g({
                            value: null,
                            disabled: !0
                        })
                    });
                }
                onDateSelection(l) {
                    this.fromDate || this.toDate ? this.fromDate && !this.toDate && l && l.after(this.fromDate) ? (this.toDate = l, this.filtersForm.patchValue({ to: l })) : (this.toDate = null, this.fromDate = l, this.filtersForm.patchValue({
                        from: l,
                        to: null
                    })) : (this.fromDate = l, this.filtersForm.patchValue({ from: l }));
                }
                isHovered(l) {
                    return this.fromDate && !this.toDate && this.hoveredDate && l.after(this.fromDate) && l.before(this.hoveredDate);
                }
                isInside(l) {
                    return this.toDate && l.after(this.fromDate) && l.before(this.toDate);
                }
                isRange(l) {
                    return l.equals(this.fromDate) || this.toDate && l.equals(this.toDate) || this.isInside(l) || this.isHovered(l);
                }
                validateInput(l, n) {
                    const e = this.formatter.parse(n);
                    return e && this.calendar.isValid(R.m.from(e)) ? R.m.from(e) : l;
                }
                onSubmit() {
                    this.store.dispatch(new x(this.filtersForm.value));
                }
            }
            var V = t['ɵcrt']({
                encapsulation: 0,
                styles: ['.dp-hidden[_ngcontent-%COMP%] {\n\t\t\t\twidth: 0;\n\t\t\t\tmargin: 0;\n\t\t\t\tborder: none;\n\t\t\t\tpadding: 0;\n\t\t\t}\n\t\t\t.custom-day[_ngcontent-%COMP%] {\n\t\t\t\ttext-align: center;\n\t\t\t\tpadding: 0.185rem 0.25rem;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\theight: 2rem;\n\t\t\t\twidth: 2rem;\n\t\t\t}\n\t\t\t.custom-day.focused[_ngcontent-%COMP%] {\n\t\t\t\tbackground-color: #e6e6e6;\n\t\t\t}\n\t\t\t.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\n\t\t\t\tbackground-color: rgb(2, 117, 216);\n\t\t\t\tcolor: white;\n\t\t\t}\n\t\t\t.custom-day.faded[_ngcontent-%COMP%] {\n\t\t\t\tbackground-color: rgba(2, 117, 216, 0.5);\n\t\t\t}'],
                data: {}
            });
            function _(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'span', [[
                            'class',
                            'custom-day'
                        ]], [
                        [
                            2,
                            'focused',
                            null
                        ],
                        [
                            2,
                            'range',
                            null
                        ],
                        [
                            2,
                            'faded',
                            null
                        ]
                    ], [
                        [
                            null,
                            'mouseenter'
                        ],
                        [
                            null,
                            'mouseleave'
                        ]
                    ], function (l, n, e) {
                        var t = !0, u = l.component;
                        return 'mouseenter' === n && (t = !1 !== (u.hoveredDate = l.context.$implicit) && t), 'mouseleave' === n && (t = !1 !== (u.hoveredDate = null) && t), t;
                    }, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        ' ',
                        ' '
                    ]))
                ], null, function (l, n) {
                    var e = n.component;
                    l(n, 0, 0, n.context.focused, e.isRange(n.context.$implicit), e.isHovered(n.context.$implicit) || e.isInside(n.context.$implicit)), l(n, 1, 0, n.context.$implicit.day);
                });
            }
            function L(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 34, 'form', [
                        [
                            'autocomplete',
                            'off'
                        ],
                        [
                            'class',
                            'row row-cols-sm-auto m-4'
                        ],
                        [
                            'novalidate',
                            ''
                        ]
                    ], [
                        [
                            2,
                            'ng-untouched',
                            null
                        ],
                        [
                            2,
                            'ng-touched',
                            null
                        ],
                        [
                            2,
                            'ng-pristine',
                            null
                        ],
                        [
                            2,
                            'ng-dirty',
                            null
                        ],
                        [
                            2,
                            'ng-valid',
                            null
                        ],
                        [
                            2,
                            'ng-invalid',
                            null
                        ],
                        [
                            2,
                            'ng-pending',
                            null
                        ]
                    ], [
                        [
                            null,
                            'submit'
                        ],
                        [
                            null,
                            'reset'
                        ]
                    ], function (l, n, e) {
                        var u = !0, i = l.component;
                        return 'submit' === n && (u = !1 !== t['ɵnov'](l, 2).onSubmit(e) && u), 'reset' === n && (u = !1 !== t['ɵnov'](l, 2).onReset() && u), 'submit' === n && (u = !1 !== i.onSubmit() && u), u;
                    }, null, null)),
                    t['ɵdid'](1, 16384, null, 0, D.C, [], null, null),
                    t['ɵdid'](2, 540672, null, 0, D.k, [
                        [
                            8,
                            null
                        ],
                        [
                            8,
                            null
                        ]
                    ], {
                        form: [
                            0,
                            'form'
                        ]
                    }, null),
                    t['ɵprd'](2048, null, D.d, null, [D.k]),
                    t['ɵdid'](4, 16384, null, 0, D.r, [[
                            6,
                            D.d
                        ]], null, null),
                    (l()(), t['ɵeld'](5, 0, null, null, 26, 'div', [[
                            'class',
                            'col-12'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](6, 0, null, null, 1, 'label', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Rango'])),
                    (l()(), t['ɵeld'](8, 0, null, null, 7, 'div', [[
                            'class',
                            'dp-hidden position-absolute'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](9, 0, null, null, 6, 'div', [[
                            'class',
                            'input-group'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](10, 16777216, null, null, 4, 'input', [
                        [
                            'class',
                            'form-control'
                        ],
                        [
                            'name',
                            'datepicker'
                        ],
                        [
                            'ngbDatepicker',
                            ''
                        ],
                        [
                            'outsideDays',
                            'hidden'
                        ],
                        [
                            'tabindex',
                            '-1'
                        ]
                    ], [[
                            8,
                            'disabled',
                            0
                        ]], [
                        [
                            null,
                            'dateSelect'
                        ],
                        [
                            null,
                            'input'
                        ],
                        [
                            null,
                            'change'
                        ],
                        [
                            null,
                            'focus'
                        ],
                        [
                            null,
                            'blur'
                        ]
                    ], function (l, n, e) {
                        var u = !0, i = l.component;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 14).manualDateChange(e.target.value) && u), 'change' === n && (u = !1 !== t['ɵnov'](l, 14).manualDateChange(e.target.value, !0) && u), 'focus' === n && (u = !1 !== t['ɵnov'](l, 14).onFocus() && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 14).onBlur() && u), 'dateSelect' === n && (u = !1 !== i.onDateSelection(e) && u), u;
                    }, null, null)),
                    t['ɵprd'](5120, null, D.o, function (l) {
                        return [l];
                    }, [R.C]),
                    t['ɵprd'](5120, null, D.n, function (l) {
                        return [l];
                    }, [R.C]),
                    t['ɵprd'](6144, null, R.q, null, [R.D]),
                    t['ɵdid'](14, 671744, [[
                            'datepicker',
                            4
                        ]], 0, R.C, [
                        R.o,
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.Renderer2,
                        t.ComponentFactoryResolver,
                        t.NgZone,
                        R.h,
                        R.n,
                        a.DOCUMENT,
                        t.ChangeDetectorRef,
                        R.D
                    ], {
                        autoClose: [
                            0,
                            'autoClose'
                        ],
                        dayTemplate: [
                            1,
                            'dayTemplate'
                        ],
                        displayMonths: [
                            2,
                            'displayMonths'
                        ],
                        outsideDays: [
                            3,
                            'outsideDays'
                        ],
                        startDate: [
                            4,
                            'startDate'
                        ]
                    }, { dateSelect: 'dateSelect' }),
                    (l()(), t['ɵand'](0, [[
                            't',
                            2
                        ]], null, 0, null, _)),
                    (l()(), t['ɵeld'](16, 0, null, null, 15, 'div', [[
                            'class',
                            'input-group w-75'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](17, 0, [[
                            'dpFromDate',
                            1
                        ]], null, 5, 'input', [
                        [
                            'class',
                            'form-control'
                        ],
                        [
                            'formControlName',
                            'from'
                        ],
                        [
                            'placeholder',
                            'Desde'
                        ]
                    ], [
                        [
                            8,
                            'value',
                            0
                        ],
                        [
                            2,
                            'ng-untouched',
                            null
                        ],
                        [
                            2,
                            'ng-touched',
                            null
                        ],
                        [
                            2,
                            'ng-pristine',
                            null
                        ],
                        [
                            2,
                            'ng-dirty',
                            null
                        ],
                        [
                            2,
                            'ng-valid',
                            null
                        ],
                        [
                            2,
                            'ng-invalid',
                            null
                        ],
                        [
                            2,
                            'ng-pending',
                            null
                        ]
                    ], [
                        [
                            null,
                            'input'
                        ],
                        [
                            null,
                            'blur'
                        ],
                        [
                            null,
                            'compositionstart'
                        ],
                        [
                            null,
                            'compositionend'
                        ]
                    ], function (l, n, e) {
                        var u = !0, i = l.component;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 18)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 18).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 18)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 18)._compositionEnd(e.target.value) && u), 'input' === n && (u = !1 !== (i.fromDate = i.validateInput(i.fromDate, t['ɵnov'](l, 17).value)) && u), u;
                    }, null, null)),
                    t['ɵdid'](18, 16384, null, 0, D.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            D.b
                        ]
                    ], null, null),
                    t['ɵprd'](1024, null, D.o, function (l) {
                        return [l];
                    }, [D.e]),
                    t['ɵdid'](20, 671744, null, 0, D.i, [
                        [
                            3,
                            D.d
                        ],
                        [
                            8,
                            null
                        ],
                        [
                            8,
                            null
                        ],
                        [
                            6,
                            D.o
                        ],
                        [
                            2,
                            D.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, null, D.p, null, [D.i]),
                    t['ɵdid'](22, 16384, null, 0, D.q, [[
                            4,
                            D.p
                        ]], null, null),
                    (l()(), t['ɵeld'](23, 0, [[
                            'dpToDate',
                            1
                        ]], null, 5, 'input', [
                        [
                            'class',
                            'form-control'
                        ],
                        [
                            'formControlName',
                            'to'
                        ],
                        [
                            'placeholder',
                            'Hasta'
                        ]
                    ], [
                        [
                            8,
                            'value',
                            0
                        ],
                        [
                            2,
                            'ng-untouched',
                            null
                        ],
                        [
                            2,
                            'ng-touched',
                            null
                        ],
                        [
                            2,
                            'ng-pristine',
                            null
                        ],
                        [
                            2,
                            'ng-dirty',
                            null
                        ],
                        [
                            2,
                            'ng-valid',
                            null
                        ],
                        [
                            2,
                            'ng-invalid',
                            null
                        ],
                        [
                            2,
                            'ng-pending',
                            null
                        ]
                    ], [
                        [
                            null,
                            'input'
                        ],
                        [
                            null,
                            'blur'
                        ],
                        [
                            null,
                            'compositionstart'
                        ],
                        [
                            null,
                            'compositionend'
                        ]
                    ], function (l, n, e) {
                        var u = !0, i = l.component;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 24)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 24).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 24)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 24)._compositionEnd(e.target.value) && u), 'input' === n && (u = !1 !== (i.toDate = i.validateInput(i.toDate, t['ɵnov'](l, 23).value)) && u), u;
                    }, null, null)),
                    t['ɵdid'](24, 16384, null, 0, D.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            D.b
                        ]
                    ], null, null),
                    t['ɵprd'](1024, null, D.o, function (l) {
                        return [l];
                    }, [D.e]),
                    t['ɵdid'](26, 671744, null, 0, D.i, [
                        [
                            3,
                            D.d
                        ],
                        [
                            8,
                            null
                        ],
                        [
                            8,
                            null
                        ],
                        [
                            6,
                            D.o
                        ],
                        [
                            2,
                            D.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, null, D.p, null, [D.i]),
                    t['ɵdid'](28, 16384, null, 0, D.q, [[
                            4,
                            D.p
                        ]], null, null),
                    (l()(), t['ɵeld'](29, 0, null, null, 2, 'div', [[
                            'class',
                            'input-group-prepend'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](30, 0, null, null, 1, 'button', [
                        [
                            'class',
                            'btn btn-outline-secondary bi bi-calendar3'
                        ],
                        [
                            'type',
                            'button'
                        ]
                    ], null, [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 14).toggle() && u), u;
                    }, null, null)),
                    (l()(), t['ɵeld'](31, 0, null, null, 0, 'i', [[
                            'class',
                            'ki ki-calendar '
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](32, 0, null, null, 2, 'div', [[
                            'class',
                            'col-12 mt-5'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](33, 0, null, null, 1, 'button', [
                        [
                            'class',
                            'btn btn-primary btn-block'
                        ],
                        [
                            'type',
                            'submit'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Filtrar']))
                ], function (l, n) {
                    var e = n.component;
                    l(n, 2, 0, e.filtersForm), l(n, 14, 0, 'outside', t['ɵnov'](n, 15), 2, 'hidden', e.fromDate), l(n, 20, 0, 'from'), l(n, 26, 0, 'to');
                }, function (l, n) {
                    var e = n.component;
                    l(n, 0, 0, t['ɵnov'](n, 4).ngClassUntouched, t['ɵnov'](n, 4).ngClassTouched, t['ɵnov'](n, 4).ngClassPristine, t['ɵnov'](n, 4).ngClassDirty, t['ɵnov'](n, 4).ngClassValid, t['ɵnov'](n, 4).ngClassInvalid, t['ɵnov'](n, 4).ngClassPending), l(n, 10, 0, t['ɵnov'](n, 14).disabled), l(n, 17, 0, e.formatter.format(e.fromDate), t['ɵnov'](n, 22).ngClassUntouched, t['ɵnov'](n, 22).ngClassTouched, t['ɵnov'](n, 22).ngClassPristine, t['ɵnov'](n, 22).ngClassDirty, t['ɵnov'](n, 22).ngClassValid, t['ɵnov'](n, 22).ngClassInvalid, t['ɵnov'](n, 22).ngClassPending), l(n, 23, 0, e.formatter.format(e.toDate), t['ɵnov'](n, 28).ngClassUntouched, t['ɵnov'](n, 28).ngClassTouched, t['ɵnov'](n, 28).ngClassPristine, t['ɵnov'](n, 28).ngClassDirty, t['ɵnov'](n, 28).ngClassValid, t['ɵnov'](n, 28).ngClassInvalid, t['ɵnov'](n, 28).ngClassPending);
                });
            }
            var O = e('pLZG');
            class P {
                constructor(l, n, e, t) {
                    this.layout = l, this.subheader = n, this.cdr = e, this.router = t, this.subheaderCSSClasses = '', this.subheaderContainerCSSClasses = '', this.subheaderMobileToggle = !1, this.subheaderDisplayDesc = !1, this.subheaderDisplayDaterangepicker = !1, this.breadcrumbs = [], this.isRouteCharts = !1, this.title$ = this.subheader.titleSubject.asObservable(), this.verifyLocation();
                }
                ngOnInit() {
                    this.date = new Date(), this.dateLetter = this.getNameMonth(this.date.getMonth()) + ' ' + this.date.getDate() + ' ', this.title$ = this.subheader.titleSubject.asObservable(), this.breadcrumbs$ = this.subheader.breadCrumbsSubject.asObservable(), this.description$ = this.subheader.descriptionSubject.asObservable(), this.subheaderCSSClasses = this.layout.getStringCSSClasses('subheader'), this.subheaderContainerCSSClasses = this.layout.getStringCSSClasses('subheader_container'), this.subheaderMobileToggle = this.layout.getProp('subheader.mobileToggle'), this.subheaderDisplayDesc = this.layout.getProp('subheader.displayDesc'), this.subheaderDisplayDaterangepicker = this.layout.getProp('subheader.displayDaterangepicker'), this.breadcrumbs$.subscribe(l => {
                        this.breadcrumbs = l, this.cdr.destroyed || this.cdr.detectChanges();
                    });
                }
                getNameMonth(l) {
                    var n = '';
                    return !isNaN(l) && l >= 0 && l <= 11 && (n = [
                        'Ene',
                        'Feb',
                        'Mar',
                        'Abri',
                        'May',
                        'Jun',
                        'Jul',
                        'Ago',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dic'
                    ][l]), n;
                }
                verifyLocation() {
                    this.router.events.pipe(Object(O.a)(l => l instanceof f.e)).subscribe(l => {
                        this.isRouteCharts = l.urlAfterRedirects.includes('dashboard-chart');
                    });
                }
            }
            var M = e('2Vo4');
            class H {
                constructor() {
                    this.breadcrumbs = [], this.title = '';
                }
            }
            let G = (() => {
                class l {
                    constructor(l) {
                        this.layout = l, this.titleSubject = new M.a('Dashboard'), this.descriptionSubject = new M.a(''), this.breadCrumbsSubject = new M.a([]), this.subheaderVersionSubject = new M.a('v1'), this.unsubscribe = [], this.setDefaultSubheader();
                    }
                    setDefaultSubheader() {
                        this.setSubheaderVersion(this.layout.getProp('subheader.layoutVersion'));
                    }
                    setBreadcrumbs(l = []) {
                        this.breadCrumbsSubject.next(l);
                    }
                    setTitle(l = '') {
                        this.titleSubject.next(l);
                    }
                    setDescription(l) {
                        this.descriptionSubject.next(l);
                    }
                    setSubheaderVersion(l = 'v1') {
                        this.subheaderVersionSubject.next(l);
                    }
                    updateAfterRouteChanges(l) {
                        const n = this.getBreadcrumbsAndTitle('kt_aside_menu', l), e = this.getBreadcrumbsAndTitle('kt_header_menu', l);
                        this.setBreadcrumbs(n && n.breadcrumbs.length > 0 ? n.breadcrumbs : e.breadcrumbs), this.setTitle(n && n.title && n.title.length > 0 ? n.title : e.title);
                    }
                    getLinksFromMenu(l) {
                        const n = Array.from(l.getElementsByClassName('menu-item-open') || []), e = Array.from(l.getElementsByClassName('menu-item-active') || []), t = [];
                        return n.forEach(l => {
                            const n = Array.from(l.getElementsByClassName('menu-link') || []);
                            if (n && n.length > 0) {
                                const l = n[0];
                                l.href && l.href.length && l.href.length > 0 && '/' !== l.innerHTML && t.push(l);
                            }
                        }), e.forEach(l => {
                            const n = Array.from(l.getElementsByClassName('menu-link') || []);
                            if (n && n.length > 0) {
                                const l = n[0];
                                l.href && l.href.length && l.href.length > 0 && '/' !== l.innerHTML && t.push(l);
                            }
                        }), t;
                    }
                    getBreadcrumbsAndTitle(l, n) {
                        const e = new H(), t = document.getElementById(l);
                        if (!t)
                            return e;
                        const u = this.getLinksFromMenu(t).filter(l => 'A' === l.tagName);
                        return u ? (u.forEach(l => {
                            var n, t;
                            const u = l.getElementsByClassName('menu-text');
                            if (u) {
                                const i = Array.from(u).find(l => l.innerHTML && l.innerHTML.trim().length > 0);
                                i && e.breadcrumbs.push({
                                    title: i.innerHTML,
                                    linkPath: l.pathname,
                                    linkText: null !== (t = null === (n = null == i ? void 0 : i.attributes.subheader) || void 0 === n ? void 0 : n.nodeValue) && void 0 !== t ? t : i.innerHTML
                                });
                            }
                        }), e.title = this.getTitle(e.breadcrumbs, n), e) : e;
                    }
                    parseUrlAndReturnPathname(l) {
                        const n = document.createElement('a');
                        return n.href = 'https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container', n.pathname;
                    }
                    getTitle(l, n) {
                        if (!l || !n)
                            return '';
                        const e = l.length;
                        return e ? l[e - 1].title : '';
                    }
                    ngOnDestroy() {
                        this.unsubscribe.forEach(l => l.unsubscribe());
                    }
                }
                return l.ɵprov = t['ɵɵdefineInjectable']({
                    factory: function () {
                        return new l(t['ɵɵinject'](m.a));
                    },
                    token: l,
                    providedIn: 'root'
                }), l;
            })();
            var B = t['ɵcrt']({
                encapsulation: 2,
                styles: [],
                data: {}
            });
            function N(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'button', [
                        [
                            'class',
                            'burger-icon burger-icon-left mr-4 d-inline-block d-lg-none'
                        ],
                        [
                            'id',
                            'kt_subheader_mobile_toggle'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 0, 'span', [], null, null, null, null, null))
                ], null, null);
            }
            function F(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'small', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](2, null, [
                        '',
                        ''
                    ]))
                ], null, function (l, n) {
                    l(n, 2, 0, n.context.ngIf);
                });
            }
            function j(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, null, null, null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, F)),
                    t['ɵdid'](2, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵand'](0, null, null, 0))
                ], function (l, n) {
                    var e = n.component;
                    l(n, 2, 0, t['ɵunv'](n, 2, 0, t['ɵnov'](n, 3).transform(e.description$)));
                }, null);
            }
            function K(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 4, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 3, 'h5', [[
                            'class',
                            'text-dark font-weight-bold my-1 mr-5'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](2, null, [
                        ' ',
                        ' '
                    ])),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, j)),
                    t['ɵdid'](4, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null)
                ], function (l, n) {
                    l(n, 4, 0, n.component.subheaderDisplayDesc);
                }, function (l, n) {
                    l(n, 2, 0, n.context.ngIf);
                });
            }
            function z(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 6, 'li', [
                        [
                            'class',
                            'breadcrumb-item'
                        ],
                        [
                            'routerLinkActive',
                            'active'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵdid'](1, 1720320, null, 2, f.t, [
                        f.r,
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            2,
                            f.s
                        ],
                        [
                            2,
                            f.u
                        ]
                    ], {
                        routerLinkActive: [
                            0,
                            'routerLinkActive'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 1, { links: 1 }),
                    t['ɵqud'](603979776, 2, { linksWithHrefs: 1 }),
                    (l()(), t['ɵeld'](4, 0, null, null, 2, 'a', [[
                            'class',
                            'text-muted'
                        ]], [
                        [
                            1,
                            'target',
                            0
                        ],
                        [
                            8,
                            'href',
                            4
                        ]
                    ], [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 5).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](5, 671744, [[
                            2,
                            4
                        ]], 0, f.u, [
                        f.r,
                        f.a,
                        a.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    (l()(), t['ɵted'](6, null, [
                        ' ',
                        ' '
                    ]))
                ], function (l, n) {
                    l(n, 1, 0, 'active'), l(n, 5, 0, n.context.$implicit.linkPath);
                }, function (l, n) {
                    l(n, 4, 0, t['ɵnov'](n, 5).target, t['ɵnov'](n, 5).href), l(n, 6, 0, n.context.$implicit.linkText);
                });
            }
            function U(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 25, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 24, 'div', [[
                            'class',
                            'row'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 23, 'div', [[
                            'class',
                            'col'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 22, 'div', [
                        [
                            'class',
                            'd-inline-block'
                        ],
                        [
                            'ngbDropdown',
                            ''
                        ]
                    ], [[
                            2,
                            'show',
                            null
                        ]], null, null, null, null)),
                    t['ɵdid'](4, 1720320, null, 2, R.v, [
                        t.ChangeDetectorRef,
                        R.x,
                        a.DOCUMENT,
                        t.NgZone,
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            R.K
                        ]
                    ], null, null),
                    t['ɵqud'](603979776, 3, { _menu: 0 }),
                    t['ɵqud'](603979776, 4, { _anchor: 0 }),
                    (l()(), t['ɵeld'](7, 0, null, null, 8, 'a', [
                        [
                            'class',
                            'btn btn-light-primary font-weight-bold mr-2 dropdown-toggle'
                        ],
                        [
                            'id',
                            'filters'
                        ],
                        [
                            'ngbDropdownToggle',
                            ''
                        ]
                    ], [[
                            1,
                            'aria-expanded',
                            0
                        ]], [
                        [
                            null,
                            'click'
                        ],
                        [
                            null,
                            'keydown.ArrowUp'
                        ],
                        [
                            null,
                            'keydown.ArrowDown'
                        ],
                        [
                            null,
                            'keydown.Home'
                        ],
                        [
                            null,
                            'keydown.End'
                        ],
                        [
                            null,
                            'keydown.Tab'
                        ],
                        [
                            null,
                            'keydown.Shift.Tab'
                        ]
                    ], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 8).dropdown.toggle() && u), 'keydown.ArrowUp' === n && (u = !1 !== t['ɵnov'](l, 8).dropdown.onKeyDown(e) && u), 'keydown.ArrowDown' === n && (u = !1 !== t['ɵnov'](l, 8).dropdown.onKeyDown(e) && u), 'keydown.Home' === n && (u = !1 !== t['ɵnov'](l, 8).dropdown.onKeyDown(e) && u), 'keydown.End' === n && (u = !1 !== t['ɵnov'](l, 8).dropdown.onKeyDown(e) && u), 'keydown.Tab' === n && (u = !1 !== t['ɵnov'](l, 8).dropdown.onKeyDown(e) && u), 'keydown.Shift.Tab' === n && (u = !1 !== t['ɵnov'](l, 8).dropdown.onKeyDown(e) && u), u;
                    }, null, null)),
                    t['ɵdid'](8, 16384, null, 0, R.A, [
                        R.v,
                        t.ElementRef
                    ], null, null),
                    t['ɵprd'](2048, [[
                            4,
                            4
                        ]], R.w, null, [R.A]),
                    (l()(), t['ɵeld'](10, 0, null, null, 4, 'span', [[
                            'class',
                            'svg-icon svg-icon-light'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](11, 0, null, null, 3, ':svg:svg', [
                        [
                            ':xmlns:xlink',
                            'http://www.w3.org/1999/xlink'
                        ],
                        [
                            'height',
                            '24px'
                        ],
                        [
                            'version',
                            '1.1'
                        ],
                        [
                            'viewBox',
                            '0 0 24 24'
                        ],
                        [
                            'width',
                            '24px'
                        ],
                        [
                            'xmlns',
                            'http://www.w3.org/2000/svg'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](12, 0, null, null, 2, ':svg:g', [
                        [
                            'fill',
                            'none'
                        ],
                        [
                            'fill-rule',
                            'evenodd'
                        ],
                        [
                            'stroke',
                            'none'
                        ],
                        [
                            'stroke-width',
                            '1'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](13, 0, null, null, 0, ':svg:rect', [
                        [
                            'height',
                            '18'
                        ],
                        [
                            'width',
                            '18'
                        ],
                        [
                            'x',
                            '0'
                        ],
                        [
                            'y',
                            '0'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](14, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M5,4 L19,4 C19.2761424,4 19.5,4.22385763 19.5,4.5 C19.5,4.60818511 19.4649111,4.71345191 19.4,4.8 L14,12 L14,20.190983 C14,20.4671254 13.7761424,20.690983 13.5,20.690983 C13.4223775,20.690983 13.3458209,20.6729105 13.2763932,20.6381966 L10,19 L10,12 L4.6,4.8 C4.43431458,4.5790861 4.4790861,4.26568542 4.7,4.1 C4.78654809,4.03508894 4.89181489,4 5,4 Z'
                        ],
                        [
                            'fill',
                            '#000000'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' Filtros '])),
                    (l()(), t['ɵeld'](16, 0, null, null, 9, 'div', [
                        [
                            'aria-labelledby',
                            'filters'
                        ],
                        [
                            'container',
                            'body'
                        ],
                        [
                            'ngbDropdownMenu',
                            ''
                        ],
                        [
                            'style',
                            'width: 500px;'
                        ]
                    ], [
                        [
                            2,
                            'dropdown-menu',
                            null
                        ],
                        [
                            2,
                            'show',
                            null
                        ],
                        [
                            1,
                            'x-placement',
                            0
                        ]
                    ], [
                        [
                            null,
                            'keydown.ArrowUp'
                        ],
                        [
                            null,
                            'keydown.ArrowDown'
                        ],
                        [
                            null,
                            'keydown.Home'
                        ],
                        [
                            null,
                            'keydown.End'
                        ],
                        [
                            null,
                            'keydown.Enter'
                        ],
                        [
                            null,
                            'keydown.Space'
                        ],
                        [
                            null,
                            'keydown.Tab'
                        ],
                        [
                            null,
                            'keydown.Shift.Tab'
                        ]
                    ], function (l, n, e) {
                        var u = !0;
                        return 'keydown.ArrowUp' === n && (u = !1 !== t['ɵnov'](l, 17).dropdown.onKeyDown(e) && u), 'keydown.ArrowDown' === n && (u = !1 !== t['ɵnov'](l, 17).dropdown.onKeyDown(e) && u), 'keydown.Home' === n && (u = !1 !== t['ɵnov'](l, 17).dropdown.onKeyDown(e) && u), 'keydown.End' === n && (u = !1 !== t['ɵnov'](l, 17).dropdown.onKeyDown(e) && u), 'keydown.Enter' === n && (u = !1 !== t['ɵnov'](l, 17).dropdown.onKeyDown(e) && u), 'keydown.Space' === n && (u = !1 !== t['ɵnov'](l, 17).dropdown.onKeyDown(e) && u), 'keydown.Tab' === n && (u = !1 !== t['ɵnov'](l, 17).dropdown.onKeyDown(e) && u), 'keydown.Shift.Tab' === n && (u = !1 !== t['ɵnov'](l, 17).dropdown.onKeyDown(e) && u), u;
                    }, null, null)),
                    t['ɵdid'](17, 16384, [[
                            3,
                            4
                        ]], 1, R.y, [
                        R.v,
                        t.ElementRef
                    ], null, null),
                    t['ɵqud'](603979776, 5, { menuItems: 1 }),
                    (l()(), t['ɵeld'](19, 0, null, null, 1, 'p', [[
                            'class',
                            'm-5'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Filtros de busqueda'])),
                    (l()(), t['ɵeld'](21, 0, null, null, 0, 'div', [[
                            'class',
                            'dropdown-divider'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](22, 0, null, null, 3, 'filters-chart', [], null, null, null, L, V)),
                    t['ɵprd'](4608, null, R.n, E, []),
                    t['ɵprd'](512, null, R.o, A, []),
                    t['ɵdid'](25, 49152, null, 0, T, [
                        R.h,
                        R.o,
                        v.o
                    ], null, null)
                ], null, function (l, n) {
                    l(n, 3, 0, t['ɵnov'](n, 4).isOpen()), l(n, 7, 0, t['ɵnov'](n, 8).dropdown.isOpen()), l(n, 16, 0, !0, t['ɵnov'](n, 17).dropdown.isOpen(), t['ɵnov'](n, 17).placement);
                });
            }
            function q(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 5, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 4, 'a', [
                        [
                            'class',
                            'btn btn-light-primary btn-sm font-weight-bold mr-2 cursor-pointer'
                        ],
                        [
                            'data-placement',
                            'left'
                        ],
                        [
                            'data-toggle',
                            'tooltip'
                        ],
                        [
                            'id',
                            'kt_dashboard_daterangepicker'
                        ],
                        [
                            'title',
                            'Select dashboard daterange'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 1, 'span', [
                        [
                            'class',
                            'opacity-60 font-weight-bold mr-2'
                        ],
                        [
                            'id',
                            'kt_dashboard_daterangepicker_title'
                        ],
                        [
                            'style',
                            'color: white;'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Hoy'])),
                    (l()(), t['ɵeld'](4, 0, null, null, 1, 'span', [
                        [
                            'class',
                            'font-weight-bold'
                        ],
                        [
                            'id',
                            'kt_dashboard_daterangepicker_date'
                        ],
                        [
                            'style',
                            'color: white;'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](5, null, [
                        '',
                        ''
                    ]))
                ], null, function (l, n) {
                    l(n, 5, 0, n.component.dateLetter);
                });
            }
            function W(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-light-primary font-weight-bolder btn-sm cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' Actions ']))
                ], null, null);
            }
            function Y(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 20, 'div', [
                        [
                            'class',
                            'subheader py-2 py-lg-6'
                        ],
                        [
                            'id',
                            'kt_subheader'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵdid'](1, 278528, null, 0, a.NgClass, [
                        t.IterableDiffers,
                        t.KeyValueDiffers,
                        t.ElementRef,
                        t.Renderer2
                    ], {
                        klass: [
                            0,
                            'klass'
                        ],
                        ngClass: [
                            1,
                            'ngClass'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](2, 0, null, null, 18, 'div', [[
                            'class',
                            'd-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap'
                        ]], null, null, null, null, null)),
                    t['ɵdid'](3, 278528, null, 0, a.NgClass, [
                        t.IterableDiffers,
                        t.KeyValueDiffers,
                        t.ElementRef,
                        t.Renderer2
                    ], {
                        klass: [
                            0,
                            'klass'
                        ],
                        ngClass: [
                            1,
                            'ngClass'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](4, 0, null, null, 9, 'div', [[
                            'class',
                            'd-flex align-items-center flex-wrap mr-1'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, N)),
                    t['ɵdid'](6, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](7, 0, null, null, 6, 'div', [[
                            'class',
                            'd-flex align-items-baseline flex-wrap mr-5'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, K)),
                    t['ɵdid'](9, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵeld'](11, 0, null, null, 2, 'ul', [[
                            'class',
                            'breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2 font-size-sm'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, z)),
                    t['ɵdid'](13, 278528, null, 0, a.NgForOf, [
                        t.ViewContainerRef,
                        t.TemplateRef,
                        t.IterableDiffers
                    ], {
                        ngForOf: [
                            0,
                            'ngForOf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](14, 0, null, null, 6, 'div', [[
                            'class',
                            'd-flex align-items-center'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, U)),
                    t['ɵdid'](16, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, q)),
                    t['ɵdid'](18, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, W)),
                    t['ɵdid'](20, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null)
                ], function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, 'subheader py-2 py-lg-6', e.subheaderCSSClasses), l(n, 3, 0, 'd-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap', e.subheaderContainerCSSClasses), l(n, 6, 0, e.subheaderMobileToggle), l(n, 9, 0, t['ɵunv'](n, 9, 0, t['ɵnov'](n, 10).transform(e.title$))), l(n, 13, 0, e.breadcrumbs), l(n, 16, 0, e.isRouteCharts), l(n, 18, 0, e.subheaderDisplayDaterangepicker), l(n, 20, 0, !e.subheaderDisplayDaterangepicker);
                }, null);
            }
            class X {
                constructor() {
                }
                ngOnInit() {
                }
            }
            var $ = t['ɵcrt']({
                encapsulation: 2,
                styles: [],
                data: {}
            });
            function Z(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 35, 'ul', [[
                            'class',
                            'navi navi-hover'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 3, 'li', [[
                            'class',
                            'navi-header font-weight-bold py-4'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 1, 'span', [[
                            'class',
                            'font-size-lg'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Choose Label:'])),
                    (l()(), t['ɵeld'](4, 0, null, null, 0, 'i', [
                        [
                            'class',
                            'flaticon2-information icon-md text-muted'
                        ],
                        [
                            'data-placement',
                            'right'
                        ],
                        [
                            'data-toggle',
                            'tooltip'
                        ],
                        [
                            'title',
                            'Click to learn more...'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](5, 0, null, null, 0, 'li', [[
                            'class',
                            'navi-separator mb-3 opacity-70'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](6, 0, null, null, 4, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](7, 0, null, null, 3, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](8, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](9, 0, null, null, 1, 'span', [[
                            'class',
                            'label label-xl label-inline label-light-success'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Customer'])),
                    (l()(), t['ɵeld'](11, 0, null, null, 4, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](12, 0, null, null, 3, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](13, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](14, 0, null, null, 1, 'span', [[
                            'class',
                            'label label-xl label-inline label-light-danger'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Partner'])),
                    (l()(), t['ɵeld'](16, 0, null, null, 4, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](17, 0, null, null, 3, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](18, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](19, 0, null, null, 1, 'span', [[
                            'class',
                            'label label-xl label-inline label-light-warning'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Suplier'])),
                    (l()(), t['ɵeld'](21, 0, null, null, 4, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](22, 0, null, null, 3, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](23, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](24, 0, null, null, 1, 'span', [[
                            'class',
                            'label label-xl label-inline label-light-primary'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Member'])),
                    (l()(), t['ɵeld'](26, 0, null, null, 4, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](27, 0, null, null, 3, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](28, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](29, 0, null, null, 1, 'span', [[
                            'class',
                            'label label-xl label-inline label-light-dark'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Staff'])),
                    (l()(), t['ɵeld'](31, 0, null, null, 0, 'li', [[
                            'class',
                            'navi-separator mt-3 opacity-70'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](32, 0, null, null, 3, 'li', [[
                            'class',
                            'navi-footer py-4'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](33, 0, null, null, 2, 'a', [[
                            'class',
                            'btn btn-clean font-weight-bold btn-sm cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](34, 0, null, null, 0, 'i', [[
                            'class',
                            'ki ki-plus icon-sm'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' Add new ']))
                ], null, null);
            }
            class J {
                constructor(l, n) {
                    this.layout = l, this.subheader = n, this.subheaderCSSClasses = '', this.subheaderContainerCSSClasses = '', this.subheaderMobileToggle = !1, this.subheaderDisplayDesc = !1, this.subheaderDisplayDaterangepicker = !1, this.title$ = this.subheader.titleSubject.asObservable(), this.breadcrumbs$ = this.subheader.breadCrumbsSubject.asObservable(), this.description$ = this.subheader.descriptionSubject.asObservable();
                }
                ngOnInit() {
                    this.subheaderCSSClasses = this.layout.getStringCSSClasses('subheader'), this.subheaderContainerCSSClasses = this.layout.getStringCSSClasses('subheader_container'), this.subheaderMobileToggle = this.layout.getProp('subheader.mobileToggle'), this.subheaderDisplayDesc = this.layout.getProp('subheader.displayDesc'), this.subheaderDisplayDaterangepicker = this.layout.getProp('subheader.displayDaterangepicker');
                }
            }
            var Q = t['ɵcrt']({
                encapsulation: 2,
                styles: [],
                data: {}
            });
            function ll(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'button', [
                        [
                            'class',
                            'burger-icon burger-icon-left mr-4 d-inline-block d-lg-none'
                        ],
                        [
                            'id',
                            'kt_subheader_mobile_toggle'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 0, 'span', [], null, null, null, null, null))
                ], null, null);
            }
            function nl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'small', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](2, null, [
                        '',
                        ''
                    ]))
                ], null, function (l, n) {
                    l(n, 2, 0, n.context.ngIf);
                });
            }
            function el(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, null, null, null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, nl)),
                    t['ɵdid'](2, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵand'](0, null, null, 0))
                ], function (l, n) {
                    var e = n.component;
                    l(n, 2, 0, t['ɵunv'](n, 2, 0, t['ɵnov'](n, 3).transform(e.description$)));
                }, null);
            }
            function tl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 4, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 3, 'h5', [[
                            'class',
                            'text-dark font-weight-bold mt-2 mb-2 mr-5'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](2, null, [
                        ' ',
                        ' '
                    ])),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, el)),
                    t['ɵdid'](4, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null)
                ], function (l, n) {
                    l(n, 4, 0, n.component.subheaderDisplayDesc);
                }, function (l, n) {
                    l(n, 2, 0, n.context.ngIf);
                });
            }
            function ul(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 5, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 4, 'a', [
                        [
                            'class',
                            'btn btn-bg-white font-weight-bold mr-3 my-2 my-lg-0 cursor-pointer'
                        ],
                        [
                            'data-placement',
                            'left'
                        ],
                        [
                            'data-toggle',
                            'tooltip'
                        ],
                        [
                            'id',
                            'kt_dashboard_daterangepicker'
                        ],
                        [
                            'title',
                            'Select dashboard daterange'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 1, 'span', [
                        [
                            'class',
                            'text-muted font-weight-bold mr-2'
                        ],
                        [
                            'id',
                            'kt_dashboard_daterangepicker_title'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Today'])),
                    (l()(), t['ɵeld'](4, 0, null, null, 1, 'span', [
                        [
                            'class',
                            'text-primary font-weight-bolder'
                        ],
                        [
                            'id',
                            'kt_dashboard_daterangepicker_date'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Aug 16']))
                ], null, null);
            }
            function il(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 40, 'div', [
                        [
                            'class',
                            'subheader py-2 py-lg-6'
                        ],
                        [
                            'id',
                            'kt_subheader'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵdid'](1, 278528, null, 0, a.NgClass, [
                        t.IterableDiffers,
                        t.KeyValueDiffers,
                        t.ElementRef,
                        t.Renderer2
                    ], {
                        klass: [
                            0,
                            'klass'
                        ],
                        ngClass: [
                            1,
                            'ngClass'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](2, 0, null, null, 38, 'div', [[
                            'class',
                            'd-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap'
                        ]], null, null, null, null, null)),
                    t['ɵdid'](3, 278528, null, 0, a.NgClass, [
                        t.IterableDiffers,
                        t.KeyValueDiffers,
                        t.ElementRef,
                        t.Renderer2
                    ], {
                        klass: [
                            0,
                            'klass'
                        ],
                        ngClass: [
                            1,
                            'ngClass'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](4, 0, null, null, 10, 'div', [[
                            'class',
                            'd-flex align-items-center flex-wrap mr-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, ll)),
                    t['ɵdid'](6, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, tl)),
                    t['ɵdid'](8, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵeld'](10, 0, null, null, 0, 'div', [[
                            'class',
                            'subheader-separator subheader-separator-ver mt-2 mb-2 mr-4 bg-gray-200'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](11, 0, null, null, 1, 'span', [[
                            'class',
                            'text-muted font-weight-bold mr-4'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['#XRS-45670'])),
                    (l()(), t['ɵeld'](13, 0, null, null, 1, 'a', [
                        [
                            'class',
                            'btn btn-light-primary font-weight-bolder btn-sm'
                        ],
                        [
                            'href',
                            '#'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' Add New '])),
                    (l()(), t['ɵeld'](15, 0, null, null, 10, 'div', [[
                            'class',
                            'd-flex align-items-center flex-wrap'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](16, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-bg-white btn-icon-info btn-hover-primary btn-icon mr-3 my-2 my-lg-0 cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](17, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-file icon-md'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](18, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-bg-white btn-icon-danger btn-hover-primary btn-icon mr-3 my-2 my-lg-0 cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](19, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon-download-1 icon-md'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](20, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-bg-white btn-icon-success btn-hover-primary btn-icon mr-3 my-2 my-lg-0 cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](21, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-fax icon-md'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](22, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-bg-white btn-icon-warning btn-hover-primary btn-icon mr-3 my-2 my-lg-0 cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](23, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-settings icon-md'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, ul)),
                    t['ɵdid'](25, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](26, 0, null, null, 14, 'div', [
                        [
                            'class',
                            'dropdown dropdown-inline my-2 my-lg-0'
                        ],
                        [
                            'data-placement',
                            'left'
                        ],
                        [
                            'data-toggle',
                            'tooltip'
                        ],
                        [
                            'ngbDropdown',
                            ''
                        ],
                        [
                            'placement',
                            'bottom-right'
                        ],
                        [
                            'title',
                            'Quick actions'
                        ]
                    ], [[
                            2,
                            'show',
                            null
                        ]], null, null, null, null)),
                    t['ɵdid'](27, 1720320, null, 2, R.v, [
                        t.ChangeDetectorRef,
                        R.x,
                        a.DOCUMENT,
                        t.NgZone,
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            R.K
                        ]
                    ], {
                        placement: [
                            0,
                            'placement'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 1, { _menu: 0 }),
                    t['ɵqud'](603979776, 2, { _anchor: 0 }),
                    (l()(), t['ɵeld'](30, 0, null, null, 5, 'a', [
                        [
                            'aria-expanded',
                            'false'
                        ],
                        [
                            'aria-haspopup',
                            'true'
                        ],
                        [
                            'class',
                            'btn btn-primary btn-icon cursor-pointer dropdown-toggle'
                        ],
                        [
                            'data-toggle',
                            'dropdown'
                        ],
                        [
                            'ngbDropdownToggle',
                            ''
                        ]
                    ], [[
                            1,
                            'aria-expanded',
                            0
                        ]], [
                        [
                            null,
                            'click'
                        ],
                        [
                            null,
                            'keydown.ArrowUp'
                        ],
                        [
                            null,
                            'keydown.ArrowDown'
                        ],
                        [
                            null,
                            'keydown.Home'
                        ],
                        [
                            null,
                            'keydown.End'
                        ],
                        [
                            null,
                            'keydown.Tab'
                        ],
                        [
                            null,
                            'keydown.Shift.Tab'
                        ]
                    ], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 31).dropdown.toggle() && u), 'keydown.ArrowUp' === n && (u = !1 !== t['ɵnov'](l, 31).dropdown.onKeyDown(e) && u), 'keydown.ArrowDown' === n && (u = !1 !== t['ɵnov'](l, 31).dropdown.onKeyDown(e) && u), 'keydown.Home' === n && (u = !1 !== t['ɵnov'](l, 31).dropdown.onKeyDown(e) && u), 'keydown.End' === n && (u = !1 !== t['ɵnov'](l, 31).dropdown.onKeyDown(e) && u), 'keydown.Tab' === n && (u = !1 !== t['ɵnov'](l, 31).dropdown.onKeyDown(e) && u), 'keydown.Shift.Tab' === n && (u = !1 !== t['ɵnov'](l, 31).dropdown.onKeyDown(e) && u), u;
                    }, null, null)),
                    t['ɵdid'](31, 16384, null, 0, R.A, [
                        R.v,
                        t.ElementRef
                    ], null, null),
                    t['ɵprd'](2048, [[
                            2,
                            4
                        ]], R.w, null, [R.A]),
                    (l()(), t['ɵeld'](33, 16777216, null, null, 2, 'span', [
                        [
                            'cacheSVG',
                            'true'
                        ],
                        [
                            'class',
                            'svg-icon svg-icon-md'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵprd'](512, null, o.SVGCacheService, o.SVGCacheService, [
                        [
                            2,
                            a.APP_BASE_HREF
                        ],
                        [
                            2,
                            a.PlatformLocation
                        ],
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        r.HttpClient,
                        r.HttpBackend,
                        t.RendererFactory2
                    ]),
                    t['ɵdid'](35, 737280, null, 0, d.InlineSVGDirective, [
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        o.SVGCacheService,
                        t.Renderer2,
                        c.InlineSVGService,
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        t.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ],
                        cacheSVG: [
                            1,
                            'cacheSVG'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](36, 0, null, null, 4, 'div', [
                        [
                            'class',
                            'dropdown-menu p-0 sm-0 dropdown-menu-md dropdown-menu-right'
                        ],
                        [
                            'ngbDropdownMenu',
                            ''
                        ]
                    ], [
                        [
                            2,
                            'dropdown-menu',
                            null
                        ],
                        [
                            2,
                            'show',
                            null
                        ],
                        [
                            1,
                            'x-placement',
                            0
                        ]
                    ], [
                        [
                            null,
                            'keydown.ArrowUp'
                        ],
                        [
                            null,
                            'keydown.ArrowDown'
                        ],
                        [
                            null,
                            'keydown.Home'
                        ],
                        [
                            null,
                            'keydown.End'
                        ],
                        [
                            null,
                            'keydown.Enter'
                        ],
                        [
                            null,
                            'keydown.Space'
                        ],
                        [
                            null,
                            'keydown.Tab'
                        ],
                        [
                            null,
                            'keydown.Shift.Tab'
                        ]
                    ], function (l, n, e) {
                        var u = !0;
                        return 'keydown.ArrowUp' === n && (u = !1 !== t['ɵnov'](l, 37).dropdown.onKeyDown(e) && u), 'keydown.ArrowDown' === n && (u = !1 !== t['ɵnov'](l, 37).dropdown.onKeyDown(e) && u), 'keydown.Home' === n && (u = !1 !== t['ɵnov'](l, 37).dropdown.onKeyDown(e) && u), 'keydown.End' === n && (u = !1 !== t['ɵnov'](l, 37).dropdown.onKeyDown(e) && u), 'keydown.Enter' === n && (u = !1 !== t['ɵnov'](l, 37).dropdown.onKeyDown(e) && u), 'keydown.Space' === n && (u = !1 !== t['ɵnov'](l, 37).dropdown.onKeyDown(e) && u), 'keydown.Tab' === n && (u = !1 !== t['ɵnov'](l, 37).dropdown.onKeyDown(e) && u), 'keydown.Shift.Tab' === n && (u = !1 !== t['ɵnov'](l, 37).dropdown.onKeyDown(e) && u), u;
                    }, null, null)),
                    t['ɵdid'](37, 16384, [[
                            1,
                            4
                        ]], 1, R.y, [
                        R.v,
                        t.ElementRef
                    ], null, null),
                    t['ɵqud'](603979776, 3, { menuItems: 1 }),
                    (l()(), t['ɵeld'](39, 0, null, null, 1, 'app-dropdown-menu1', [], null, null, null, Z, $)),
                    t['ɵdid'](40, 114688, null, 0, X, [], null, null)
                ], function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, 'subheader py-2 py-lg-6', e.subheaderCSSClasses), l(n, 3, 0, 'd-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap', e.subheaderContainerCSSClasses), l(n, 6, 0, e.subheaderMobileToggle), l(n, 8, 0, t['ɵunv'](n, 8, 0, t['ɵnov'](n, 9).transform(e.title$))), l(n, 25, 0, e.subheaderDisplayDaterangepicker), l(n, 27, 0, 'bottom-right'), l(n, 35, 0, './assets/media/svg/icons/General/Settings-2.svg', 'true'), l(n, 40, 0);
                }, function (l, n) {
                    l(n, 26, 0, t['ɵnov'](n, 27).isOpen()), l(n, 30, 0, t['ɵnov'](n, 31).dropdown.isOpen()), l(n, 36, 0, !0, t['ɵnov'](n, 37).dropdown.isOpen(), t['ɵnov'](n, 37).placement);
                });
            }
            class ol {
                constructor() {
                }
                ngOnInit() {
                }
            }
            var al = t['ɵcrt']({
                encapsulation: 2,
                styles: [],
                data: {}
            });
            function sl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 49, 'ul', [[
                            'class',
                            'navi navi-hover py-5'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 5, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 4, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](4, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-drop'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](5, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['New Group'])),
                    (l()(), t['ɵeld'](7, 0, null, null, 5, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](8, 0, null, null, 4, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](9, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](10, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-list-3'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](11, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Contacts'])),
                    (l()(), t['ɵeld'](13, 0, null, null, 8, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](14, 0, null, null, 7, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](15, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](16, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-rocket-1'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](17, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Groups'])),
                    (l()(), t['ɵeld'](19, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-link-badge'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](20, 0, null, null, 1, 'span', [[
                            'class',
                            'label label-light-primary label-inline font-weight-bold'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['new'])),
                    (l()(), t['ɵeld'](22, 0, null, null, 5, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](23, 0, null, null, 4, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](24, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](25, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-bell-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](26, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Calls'])),
                    (l()(), t['ɵeld'](28, 0, null, null, 5, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](29, 0, null, null, 4, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](30, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](31, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-gear'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](32, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Settings'])),
                    (l()(), t['ɵeld'](34, 0, null, null, 0, 'li', [[
                            'class',
                            'navi-separator my-3'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](35, 0, null, null, 5, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](36, 0, null, null, 4, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](37, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](38, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-magnifier-tool'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](39, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Help'])),
                    (l()(), t['ɵeld'](41, 0, null, null, 8, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](42, 0, null, null, 7, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](43, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](44, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-bell-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](45, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Privacy'])),
                    (l()(), t['ɵeld'](47, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-link-badge'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](48, 0, null, null, 1, 'span', [[
                            'class',
                            'label label-light-danger label-rounded font-weight-bold'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['5']))
                ], null, null);
            }
            class rl {
                constructor(l, n) {
                    this.layout = l, this.subheader = n, this.subheaderCSSClasses = '', this.subheaderContainerCSSClasses = '', this.subheaderMobileToggle = !1, this.subheaderDisplayDesc = !1, this.subheaderDisplayDaterangepicker = !1, this.title$ = this.subheader.titleSubject.asObservable(), this.breadcrumbs$ = this.subheader.breadCrumbsSubject.asObservable(), this.description$ = this.subheader.descriptionSubject.asObservable();
                }
                ngOnInit() {
                    this.subheaderCSSClasses = this.layout.getStringCSSClasses('subheader'), this.subheaderContainerCSSClasses = this.layout.getStringCSSClasses('subheader_container'), this.subheaderMobileToggle = this.layout.getProp('subheader.mobileToggle'), this.subheaderDisplayDesc = this.layout.getProp('subheader.displayDesc'), this.subheaderDisplayDaterangepicker = this.layout.getProp('subheader.displayDaterangepicker');
                }
            }
            var dl = t['ɵcrt']({
                encapsulation: 2,
                styles: [],
                data: {}
            });
            function cl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'button', [
                        [
                            'class',
                            'burger-icon burger-icon-left mr-4 d-inline-block d-lg-none'
                        ],
                        [
                            'id',
                            'kt_subheader_mobile_toggle'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 0, 'span', [], null, null, null, null, null))
                ], null, null);
            }
            function fl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'small', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](2, null, [
                        '',
                        ''
                    ]))
                ], null, function (l, n) {
                    l(n, 2, 0, n.context.ngIf);
                });
            }
            function pl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, null, null, null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, fl)),
                    t['ɵdid'](2, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵand'](0, null, null, 0))
                ], function (l, n) {
                    var e = n.component;
                    l(n, 2, 0, t['ɵunv'](n, 2, 0, t['ɵnov'](n, 3).transform(e.description$)));
                }, null);
            }
            function hl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 4, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 3, 'h5', [[
                            'class',
                            'text-dark font-weight-bold mt-2 mb-2 mr-5'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](2, null, [
                        ' ',
                        ' '
                    ])),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, pl)),
                    t['ɵdid'](4, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null)
                ], function (l, n) {
                    l(n, 4, 0, n.component.subheaderDisplayDesc);
                }, function (l, n) {
                    l(n, 2, 0, n.context.ngIf);
                });
            }
            function gl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 5, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 4, 'a', [
                        [
                            'class',
                            'btn btn-sm btn-light font-weight-bold mr-2 cursor-pointer'
                        ],
                        [
                            'data-placement',
                            'left'
                        ],
                        [
                            'data-toggle',
                            'tooltip'
                        ],
                        [
                            'id',
                            'kt_dashboard_daterangepicker'
                        ],
                        [
                            'title',
                            'Select dashboard daterange'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 1, 'span', [
                        [
                            'class',
                            'text-muted font-size-base font-weight-bold mr-2'
                        ],
                        [
                            'id',
                            'kt_dashboard_daterangepicker_title'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Hoy'])),
                    (l()(), t['ɵeld'](4, 0, null, null, 1, 'span', [
                        [
                            'class',
                            'text-primary font-size-base font-weight-bolder'
                        ],
                        [
                            'id',
                            'kt_dashboard_daterangepicker_date'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Aug 16']))
                ], null, null);
            }
            function ml(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 38, 'div', [
                        [
                            'class',
                            'subheader py-2 py-lg-4'
                        ],
                        [
                            'id',
                            'kt_subheader'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵdid'](1, 278528, null, 0, a.NgClass, [
                        t.IterableDiffers,
                        t.KeyValueDiffers,
                        t.ElementRef,
                        t.Renderer2
                    ], {
                        klass: [
                            0,
                            'klass'
                        ],
                        ngClass: [
                            1,
                            'ngClass'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](2, 0, null, null, 36, 'div', [[
                            'class',
                            'd-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap'
                        ]], null, null, null, null, null)),
                    t['ɵdid'](3, 278528, null, 0, a.NgClass, [
                        t.IterableDiffers,
                        t.KeyValueDiffers,
                        t.ElementRef,
                        t.Renderer2
                    ], {
                        klass: [
                            0,
                            'klass'
                        ],
                        ngClass: [
                            1,
                            'ngClass'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](4, 0, null, null, 10, 'div', [[
                            'class',
                            'd-flex align-items-center flex-wrap mr-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, cl)),
                    t['ɵdid'](6, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, hl)),
                    t['ɵdid'](8, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵeld'](10, 0, null, null, 0, 'div', [[
                            'class',
                            'subheader-separator subheader-separator-ver mt-2 mb-2 mr-4 bg-gray-200'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](11, 0, null, null, 1, 'span', [[
                            'class',
                            'text-muted font-weight-bold mr-4'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['#XRS-45670'])),
                    (l()(), t['ɵeld'](13, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-light-warning font-weight-bolder btn-sm cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' Add New '])),
                    (l()(), t['ɵeld'](15, 0, null, null, 23, 'div', [[
                            'class',
                            'd-flex align-items-center'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](16, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-clean btn-sm font-weight-bold font-size-base mr-1 cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' Today '])),
                    (l()(), t['ɵeld'](18, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-clean btn-sm font-weight-bold font-size-base mr-1 cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' Month '])),
                    (l()(), t['ɵeld'](20, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-clean btn-sm font-weight-bold font-size-base mr-1 cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' Year '])),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, gl)),
                    t['ɵdid'](23, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](24, 0, null, null, 14, 'div', [
                        [
                            'class',
                            'dropdown dropdown-inline'
                        ],
                        [
                            'data-placement',
                            'left'
                        ],
                        [
                            'data-toggle',
                            'tooltip'
                        ],
                        [
                            'ngbDropdown',
                            ''
                        ],
                        [
                            'placement',
                            'bottom-right'
                        ],
                        [
                            'title',
                            'Quick actions'
                        ]
                    ], [[
                            2,
                            'show',
                            null
                        ]], null, null, null, null)),
                    t['ɵdid'](25, 1720320, null, 2, R.v, [
                        t.ChangeDetectorRef,
                        R.x,
                        a.DOCUMENT,
                        t.NgZone,
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            R.K
                        ]
                    ], {
                        placement: [
                            0,
                            'placement'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 1, { _menu: 0 }),
                    t['ɵqud'](603979776, 2, { _anchor: 0 }),
                    (l()(), t['ɵeld'](28, 0, null, null, 5, 'a', [
                        [
                            'aria-expanded',
                            'false'
                        ],
                        [
                            'aria-haspopup',
                            'true'
                        ],
                        [
                            'class',
                            'btn btn-sm btn-clean btn-icon cursor-pointer dropdown-toggle'
                        ],
                        [
                            'data-toggle',
                            'dropdown'
                        ],
                        [
                            'ngbDropdownToggle',
                            ''
                        ]
                    ], [[
                            1,
                            'aria-expanded',
                            0
                        ]], [
                        [
                            null,
                            'click'
                        ],
                        [
                            null,
                            'keydown.ArrowUp'
                        ],
                        [
                            null,
                            'keydown.ArrowDown'
                        ],
                        [
                            null,
                            'keydown.Home'
                        ],
                        [
                            null,
                            'keydown.End'
                        ],
                        [
                            null,
                            'keydown.Tab'
                        ],
                        [
                            null,
                            'keydown.Shift.Tab'
                        ]
                    ], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 29).dropdown.toggle() && u), 'keydown.ArrowUp' === n && (u = !1 !== t['ɵnov'](l, 29).dropdown.onKeyDown(e) && u), 'keydown.ArrowDown' === n && (u = !1 !== t['ɵnov'](l, 29).dropdown.onKeyDown(e) && u), 'keydown.Home' === n && (u = !1 !== t['ɵnov'](l, 29).dropdown.onKeyDown(e) && u), 'keydown.End' === n && (u = !1 !== t['ɵnov'](l, 29).dropdown.onKeyDown(e) && u), 'keydown.Tab' === n && (u = !1 !== t['ɵnov'](l, 29).dropdown.onKeyDown(e) && u), 'keydown.Shift.Tab' === n && (u = !1 !== t['ɵnov'](l, 29).dropdown.onKeyDown(e) && u), u;
                    }, null, null)),
                    t['ɵdid'](29, 16384, null, 0, R.A, [
                        R.v,
                        t.ElementRef
                    ], null, null),
                    t['ɵprd'](2048, [[
                            2,
                            4
                        ]], R.w, null, [R.A]),
                    (l()(), t['ɵeld'](31, 16777216, null, null, 2, 'span', [
                        [
                            'cacheSVG',
                            'true'
                        ],
                        [
                            'class',
                            'svg-icon svg-icon-success svg-icon-lg'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵprd'](512, null, o.SVGCacheService, o.SVGCacheService, [
                        [
                            2,
                            a.APP_BASE_HREF
                        ],
                        [
                            2,
                            a.PlatformLocation
                        ],
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        r.HttpClient,
                        r.HttpBackend,
                        t.RendererFactory2
                    ]),
                    t['ɵdid'](33, 737280, null, 0, d.InlineSVGDirective, [
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        o.SVGCacheService,
                        t.Renderer2,
                        c.InlineSVGService,
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        t.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ],
                        cacheSVG: [
                            1,
                            'cacheSVG'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](34, 0, null, null, 4, 'div', [
                        [
                            'class',
                            'dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right py-3'
                        ],
                        [
                            'ngbDropdownMenu',
                            ''
                        ]
                    ], [
                        [
                            2,
                            'dropdown-menu',
                            null
                        ],
                        [
                            2,
                            'show',
                            null
                        ],
                        [
                            1,
                            'x-placement',
                            0
                        ]
                    ], [
                        [
                            null,
                            'keydown.ArrowUp'
                        ],
                        [
                            null,
                            'keydown.ArrowDown'
                        ],
                        [
                            null,
                            'keydown.Home'
                        ],
                        [
                            null,
                            'keydown.End'
                        ],
                        [
                            null,
                            'keydown.Enter'
                        ],
                        [
                            null,
                            'keydown.Space'
                        ],
                        [
                            null,
                            'keydown.Tab'
                        ],
                        [
                            null,
                            'keydown.Shift.Tab'
                        ]
                    ], function (l, n, e) {
                        var u = !0;
                        return 'keydown.ArrowUp' === n && (u = !1 !== t['ɵnov'](l, 35).dropdown.onKeyDown(e) && u), 'keydown.ArrowDown' === n && (u = !1 !== t['ɵnov'](l, 35).dropdown.onKeyDown(e) && u), 'keydown.Home' === n && (u = !1 !== t['ɵnov'](l, 35).dropdown.onKeyDown(e) && u), 'keydown.End' === n && (u = !1 !== t['ɵnov'](l, 35).dropdown.onKeyDown(e) && u), 'keydown.Enter' === n && (u = !1 !== t['ɵnov'](l, 35).dropdown.onKeyDown(e) && u), 'keydown.Space' === n && (u = !1 !== t['ɵnov'](l, 35).dropdown.onKeyDown(e) && u), 'keydown.Tab' === n && (u = !1 !== t['ɵnov'](l, 35).dropdown.onKeyDown(e) && u), 'keydown.Shift.Tab' === n && (u = !1 !== t['ɵnov'](l, 35).dropdown.onKeyDown(e) && u), u;
                    }, null, null)),
                    t['ɵdid'](35, 16384, [[
                            1,
                            4
                        ]], 1, R.y, [
                        R.v,
                        t.ElementRef
                    ], null, null),
                    t['ɵqud'](603979776, 3, { menuItems: 1 }),
                    (l()(), t['ɵeld'](37, 0, null, null, 1, 'app-dropdown-menu4', [], null, null, null, sl, al)),
                    t['ɵdid'](38, 114688, null, 0, ol, [], null, null)
                ], function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, 'subheader py-2 py-lg-4', e.subheaderCSSClasses), l(n, 3, 0, 'd-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap', e.subheaderContainerCSSClasses), l(n, 6, 0, e.subheaderMobileToggle), l(n, 8, 0, t['ɵunv'](n, 8, 0, t['ɵnov'](n, 9).transform(e.title$))), l(n, 23, 0, e.subheaderDisplayDaterangepicker), l(n, 25, 0, 'bottom-right'), l(n, 33, 0, './assets/media/svg/icons/Files/File-plus.svg', 'true'), l(n, 38, 0);
                }, function (l, n) {
                    l(n, 24, 0, t['ɵnov'](n, 25).isOpen()), l(n, 28, 0, t['ɵnov'](n, 29).dropdown.isOpen()), l(n, 34, 0, !0, t['ɵnov'](n, 35).dropdown.isOpen(), t['ɵnov'](n, 35).placement);
                });
            }
            var vl = e('1/8H'), bl = e('kJV1');
            class yl {
                constructor(l, n) {
                    this.layout = l, this.subheader = n, this.subheaderCSSClasses = '', this.subheaderContainerCSSClasses = '', this.subheaderMobileToggle = !1, this.subheaderDisplayDesc = !1, this.subheaderDisplayDaterangepicker = !1, this.title$ = this.subheader.titleSubject.asObservable(), this.breadcrumbs$ = this.subheader.breadCrumbsSubject.asObservable(), this.description$ = this.subheader.descriptionSubject.asObservable();
                }
                ngOnInit() {
                    this.subheaderCSSClasses = this.layout.getStringCSSClasses('subheader'), this.subheaderContainerCSSClasses = this.layout.getStringCSSClasses('subheader_container'), this.subheaderMobileToggle = this.layout.getProp('subheader.mobileToggle'), this.subheaderDisplayDesc = this.layout.getProp('subheader.displayDesc'), this.subheaderDisplayDaterangepicker = this.layout.getProp('subheader.displayDaterangepicker');
                }
            }
            var wl = t['ɵcrt']({
                encapsulation: 2,
                styles: [],
                data: {}
            });
            function Sl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'button', [
                        [
                            'class',
                            'burger-icon burger-icon-left mr-4 d-inline-block d-lg-none'
                        ],
                        [
                            'id',
                            'kt_subheader_mobile_toggle'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 0, 'span', [], null, null, null, null, null))
                ], null, null);
            }
            function Cl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 8, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 7, 'a', [
                        [
                            'class',
                            'btn btn-light btn-sm font-weight-bold mr-2 cursor-pointer'
                        ],
                        [
                            'data-placement',
                            'left'
                        ],
                        [
                            'data-toggle',
                            'tooltip'
                        ],
                        [
                            'id',
                            'kt_dashboard_daterangepicker'
                        ],
                        [
                            'title',
                            'Select dashboard daterange'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 1, 'span', [
                        [
                            'class',
                            'text-muted font-weight-bold mr-2'
                        ],
                        [
                            'id',
                            'kt_dashboard_daterangepicker_title'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Today'])),
                    (l()(), t['ɵeld'](4, 0, null, null, 1, 'span', [
                        [
                            'class',
                            'text-primary font-weight-bold'
                        ],
                        [
                            'id',
                            'kt_dashboard_daterangepicker_date'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Aug 16'])),
                    (l()(), t['ɵeld'](6, 16777216, null, null, 2, 'span', [
                        [
                            'cacheSVG',
                            'true'
                        ],
                        [
                            'class',
                            'svg-icon svg-icon-sm svg-icon-primary ml-1'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵprd'](512, null, o.SVGCacheService, o.SVGCacheService, [
                        [
                            2,
                            a.APP_BASE_HREF
                        ],
                        [
                            2,
                            a.PlatformLocation
                        ],
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        r.HttpClient,
                        r.HttpBackend,
                        t.RendererFactory2
                    ]),
                    t['ɵdid'](8, 737280, null, 0, d.InlineSVGDirective, [
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        o.SVGCacheService,
                        t.Renderer2,
                        c.InlineSVGService,
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        t.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ],
                        cacheSVG: [
                            1,
                            'cacheSVG'
                        ]
                    }, null)
                ], function (l, n) {
                    l(n, 8, 0, './assets/media/svg/icons/Communication/Chat-check.svg', 'true');
                }, null);
            }
            function kl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 41, 'div', [
                        [
                            'class',
                            'subheader py-2 py-lg-4'
                        ],
                        [
                            'id',
                            'kt_subheader'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵdid'](1, 278528, null, 0, a.NgClass, [
                        t.IterableDiffers,
                        t.KeyValueDiffers,
                        t.ElementRef,
                        t.Renderer2
                    ], {
                        klass: [
                            0,
                            'klass'
                        ],
                        ngClass: [
                            1,
                            'ngClass'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](2, 0, null, null, 39, 'div', [[
                            'class',
                            'd-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap'
                        ]], null, null, null, null, null)),
                    t['ɵdid'](3, 278528, null, 0, a.NgClass, [
                        t.IterableDiffers,
                        t.KeyValueDiffers,
                        t.ElementRef,
                        t.Renderer2
                    ], {
                        klass: [
                            0,
                            'klass'
                        ],
                        ngClass: [
                            1,
                            'ngClass'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](4, 0, null, null, 13, 'div', [[
                            'class',
                            'd-flex align-items-center flex-wrap mr-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Sl)),
                    t['ɵdid'](6, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](7, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-light-danger font-weight-bolder btn-sm mr-2 cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' Reports '])),
                    (l()(), t['ɵeld'](9, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-light-success font-weight-bolder btn-sm mr-2 cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' Import '])),
                    (l()(), t['ɵeld'](11, 0, null, null, 6, 'div', [[
                            'class',
                            'input-group input-group-sm input-group-solid max-w-175px'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](12, 0, null, null, 0, 'input', [
                        [
                            'class',
                            'form-control pl-4'
                        ],
                        [
                            'placeholder',
                            'Search...'
                        ],
                        [
                            'type',
                            'text'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](13, 0, null, null, 4, 'div', [[
                            'class',
                            'input-group-append'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](14, 0, null, null, 3, 'span', [[
                            'class',
                            'input-group-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](15, 16777216, null, null, 2, 'span', [
                        [
                            'cacheSVG',
                            'true'
                        ],
                        [
                            'class',
                            'svg-icon svg-icon-md'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵprd'](512, null, o.SVGCacheService, o.SVGCacheService, [
                        [
                            2,
                            a.APP_BASE_HREF
                        ],
                        [
                            2,
                            a.PlatformLocation
                        ],
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        r.HttpClient,
                        r.HttpBackend,
                        t.RendererFactory2
                    ]),
                    t['ɵdid'](17, 737280, null, 0, d.InlineSVGDirective, [
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        o.SVGCacheService,
                        t.Renderer2,
                        c.InlineSVGService,
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        t.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ],
                        cacheSVG: [
                            1,
                            'cacheSVG'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](18, 0, null, null, 23, 'div', [[
                            'class',
                            'd-flex align-items-center'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Cl)),
                    t['ɵdid'](20, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](21, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-light btn-hover-primary btn-sm btn-icon mr-2 cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](22, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-file text-muted'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](23, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-light btn-hover-primary btn-sm btn-icon mr-2 cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](24, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon-download-1 text-muted'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](25, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-light btn-hover-primary btn-sm btn-icon mr-2 cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](26, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-fax text-muted'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](27, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-light btn-hover-primary btn-sm btn-icon mr-2 cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](28, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-settings text-muted'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](29, 0, null, null, 12, 'div', [
                        [
                            'class',
                            'dropdown dropdown-inline'
                        ],
                        [
                            'data-placement',
                            'left'
                        ],
                        [
                            'data-toggle',
                            'tooltip'
                        ],
                        [
                            'ngbDropdown',
                            ''
                        ],
                        [
                            'placement',
                            'bottom-right'
                        ],
                        [
                            'title',
                            'Quick actions'
                        ]
                    ], [[
                            2,
                            'show',
                            null
                        ]], null, null, null, null)),
                    t['ɵdid'](30, 1720320, null, 2, R.v, [
                        t.ChangeDetectorRef,
                        R.x,
                        a.DOCUMENT,
                        t.NgZone,
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            R.K
                        ]
                    ], {
                        placement: [
                            0,
                            'placement'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 1, { _menu: 0 }),
                    t['ɵqud'](603979776, 2, { _anchor: 0 }),
                    (l()(), t['ɵeld'](33, 0, null, null, 3, 'a', [
                        [
                            'aria-expanded',
                            'false'
                        ],
                        [
                            'aria-haspopup',
                            'true'
                        ],
                        [
                            'class',
                            'btn btn-icon btn-light-primary btn-sm cursor-pointer dropdown-toggle'
                        ],
                        [
                            'data-toggle',
                            'dropdown'
                        ],
                        [
                            'ngbDropdownToggle',
                            ''
                        ]
                    ], [[
                            1,
                            'aria-expanded',
                            0
                        ]], [
                        [
                            null,
                            'click'
                        ],
                        [
                            null,
                            'keydown.ArrowUp'
                        ],
                        [
                            null,
                            'keydown.ArrowDown'
                        ],
                        [
                            null,
                            'keydown.Home'
                        ],
                        [
                            null,
                            'keydown.End'
                        ],
                        [
                            null,
                            'keydown.Tab'
                        ],
                        [
                            null,
                            'keydown.Shift.Tab'
                        ]
                    ], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 34).dropdown.toggle() && u), 'keydown.ArrowUp' === n && (u = !1 !== t['ɵnov'](l, 34).dropdown.onKeyDown(e) && u), 'keydown.ArrowDown' === n && (u = !1 !== t['ɵnov'](l, 34).dropdown.onKeyDown(e) && u), 'keydown.Home' === n && (u = !1 !== t['ɵnov'](l, 34).dropdown.onKeyDown(e) && u), 'keydown.End' === n && (u = !1 !== t['ɵnov'](l, 34).dropdown.onKeyDown(e) && u), 'keydown.Tab' === n && (u = !1 !== t['ɵnov'](l, 34).dropdown.onKeyDown(e) && u), 'keydown.Shift.Tab' === n && (u = !1 !== t['ɵnov'](l, 34).dropdown.onKeyDown(e) && u), u;
                    }, null, null)),
                    t['ɵdid'](34, 16384, null, 0, R.A, [
                        R.v,
                        t.ElementRef
                    ], null, null),
                    t['ɵprd'](2048, [[
                            2,
                            4
                        ]], R.w, null, [R.A]),
                    (l()(), t['ɵeld'](36, 0, null, null, 0, 'i', [[
                            'class',
                            'ki ki-plus icon-1x'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](37, 0, null, null, 4, 'div', [
                        [
                            'class',
                            'dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right'
                        ],
                        [
                            'ngbDropdownMenu',
                            ''
                        ]
                    ], [
                        [
                            2,
                            'dropdown-menu',
                            null
                        ],
                        [
                            2,
                            'show',
                            null
                        ],
                        [
                            1,
                            'x-placement',
                            0
                        ]
                    ], [
                        [
                            null,
                            'keydown.ArrowUp'
                        ],
                        [
                            null,
                            'keydown.ArrowDown'
                        ],
                        [
                            null,
                            'keydown.Home'
                        ],
                        [
                            null,
                            'keydown.End'
                        ],
                        [
                            null,
                            'keydown.Enter'
                        ],
                        [
                            null,
                            'keydown.Space'
                        ],
                        [
                            null,
                            'keydown.Tab'
                        ],
                        [
                            null,
                            'keydown.Shift.Tab'
                        ]
                    ], function (l, n, e) {
                        var u = !0;
                        return 'keydown.ArrowUp' === n && (u = !1 !== t['ɵnov'](l, 38).dropdown.onKeyDown(e) && u), 'keydown.ArrowDown' === n && (u = !1 !== t['ɵnov'](l, 38).dropdown.onKeyDown(e) && u), 'keydown.Home' === n && (u = !1 !== t['ɵnov'](l, 38).dropdown.onKeyDown(e) && u), 'keydown.End' === n && (u = !1 !== t['ɵnov'](l, 38).dropdown.onKeyDown(e) && u), 'keydown.Enter' === n && (u = !1 !== t['ɵnov'](l, 38).dropdown.onKeyDown(e) && u), 'keydown.Space' === n && (u = !1 !== t['ɵnov'](l, 38).dropdown.onKeyDown(e) && u), 'keydown.Tab' === n && (u = !1 !== t['ɵnov'](l, 38).dropdown.onKeyDown(e) && u), 'keydown.Shift.Tab' === n && (u = !1 !== t['ɵnov'](l, 38).dropdown.onKeyDown(e) && u), u;
                    }, null, null)),
                    t['ɵdid'](38, 16384, [[
                            1,
                            4
                        ]], 1, R.y, [
                        R.v,
                        t.ElementRef
                    ], null, null),
                    t['ɵqud'](603979776, 3, { menuItems: 1 }),
                    (l()(), t['ɵeld'](40, 0, null, null, 1, 'app-dropdown-menu2', [], null, null, null, vl.b, vl.a)),
                    t['ɵdid'](41, 638976, null, 0, bl.a, [], null, null)
                ], function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, 'subheader py-2 py-lg-4', e.subheaderCSSClasses), l(n, 3, 0, 'd-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap', e.subheaderContainerCSSClasses), l(n, 6, 0, e.subheaderMobileToggle), l(n, 17, 0, './assets/media/svg/icons/General/Search.svg', 'true'), l(n, 20, 0, e.subheaderDisplayDaterangepicker), l(n, 30, 0, 'bottom-right'), l(n, 41, 0);
                }, function (l, n) {
                    l(n, 29, 0, t['ɵnov'](n, 30).isOpen()), l(n, 33, 0, t['ɵnov'](n, 34).dropdown.isOpen()), l(n, 37, 0, !0, t['ɵnov'](n, 38).dropdown.isOpen(), t['ɵnov'](n, 38).placement);
                });
            }
            class Rl {
                constructor() {
                }
                ngOnInit() {
                }
            }
            var Dl = t['ɵcrt']({
                encapsulation: 2,
                styles: [],
                data: {}
            });
            function Il(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 41, 'ul', [[
                            'class',
                            'navi'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 3, 'li', [[
                            'class',
                            'navi-header font-weight-bold py-5'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 1, 'span', [[
                            'class',
                            'font-size-lg'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Add New:'])),
                    (l()(), t['ɵeld'](4, 0, null, null, 0, 'i', [
                        [
                            'class',
                            'flaticon2-information icon-md text-muted'
                        ],
                        [
                            'data-placement',
                            'right'
                        ],
                        [
                            'data-toggle',
                            'tooltip'
                        ],
                        [
                            'title',
                            'Click to learn more...'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](5, 0, null, null, 0, 'li', [[
                            'class',
                            'navi-separator mb-3 opacity-70'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](6, 0, null, null, 5, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](7, 0, null, null, 4, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](8, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](9, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-shopping-cart-1'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](10, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Order'])),
                    (l()(), t['ɵeld'](12, 0, null, null, 8, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](13, 0, null, null, 7, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](14, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](15, 0, null, null, 0, 'i', [[
                            'class',
                            'navi-icon flaticon2-calendar-8'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](16, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Members'])),
                    (l()(), t['ɵeld'](18, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-label'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](19, 0, null, null, 1, 'span', [[
                            'class',
                            'label label-light-danger label-rounded font-weight-bold'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['3'])),
                    (l()(), t['ɵeld'](21, 0, null, null, 5, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](22, 0, null, null, 4, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](23, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](24, 0, null, null, 0, 'i', [[
                            'class',
                            'navi-icon flaticon2-telegram-logo'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](25, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Project'])),
                    (l()(), t['ɵeld'](27, 0, null, null, 8, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](28, 0, null, null, 7, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](29, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](30, 0, null, null, 0, 'i', [[
                            'class',
                            'navi-icon flaticon2-new-email'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](31, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Record'])),
                    (l()(), t['ɵeld'](33, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-label'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](34, 0, null, null, 1, 'span', [[
                            'class',
                            'label label-light-success label-rounded font-weight-bold'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['5'])),
                    (l()(), t['ɵeld'](36, 0, null, null, 0, 'li', [[
                            'class',
                            'navi-separator mt-3 opacity-70'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](37, 0, null, null, 4, 'li', [[
                            'class',
                            'navi-footer pt-5 pb-4'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](38, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-light-primary font-weight-bolder btn-sm cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['More options'])),
                    (l()(), t['ɵeld'](40, 0, null, null, 1, 'a', [
                        [
                            'class',
                            'btn btn-clean font-weight-bold btn-sm d-none cursor-pointer'
                        ],
                        [
                            'data-placement',
                            'right'
                        ],
                        [
                            'data-toggle',
                            'tooltip'
                        ],
                        [
                            'title',
                            'Click to learn more...'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Learn more']))
                ], null, null);
            }
            class xl {
                constructor(l, n) {
                    this.layout = l, this.subheader = n, this.subheaderCSSClasses = '', this.subheaderContainerCSSClasses = '', this.subheaderMobileToggle = !1, this.subheaderDisplayDesc = !1, this.subheaderDisplayDaterangepicker = !1, this.title$ = this.subheader.titleSubject.asObservable(), this.breadcrumbs$ = this.subheader.breadCrumbsSubject.asObservable(), this.description$ = this.subheader.descriptionSubject.asObservable();
                }
                ngOnInit() {
                    this.subheaderCSSClasses = this.layout.getStringCSSClasses('subheader'), this.subheaderContainerCSSClasses = this.layout.getStringCSSClasses('subheader_container'), this.subheaderMobileToggle = this.layout.getProp('subheader.mobileToggle'), this.subheaderDisplayDesc = this.layout.getProp('subheader.displayDesc'), this.subheaderDisplayDaterangepicker = this.layout.getProp('subheader.displayDaterangepicker');
                }
            }
            var El = t['ɵcrt']({
                encapsulation: 2,
                styles: [],
                data: {}
            });
            function Al(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'button', [
                        [
                            'class',
                            'burger-icon burger-icon-left mr-4 d-inline-block d-lg-none'
                        ],
                        [
                            'id',
                            'kt_subheader_mobile_toggle'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 0, 'span', [], null, null, null, null, null))
                ], null, null);
            }
            function Tl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'h5', [[
                            'class',
                            'text-dark font-weight-bold mt-2 mb-2 mr-5'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](2, null, [
                        ' ',
                        ' '
                    ]))
                ], null, function (l, n) {
                    l(n, 2, 0, n.context.ngIf);
                });
            }
            function Vl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'span', [
                        [
                            'class',
                            'text-dark-50 font-weight-bold'
                        ],
                        [
                            'id',
                            'kt_subheader_total'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](2, null, [
                        ' ',
                        ''
                    ]))
                ], null, function (l, n) {
                    l(n, 2, 0, n.context.ngIf);
                });
            }
            function _l(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, null, null, null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, Vl)),
                    t['ɵdid'](2, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵand'](0, null, null, 0))
                ], function (l, n) {
                    var e = n.component;
                    l(n, 2, 0, t['ɵunv'](n, 2, 0, t['ɵnov'](n, 3).transform(e.description$)));
                }, null);
            }
            function Ll(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 41, 'div', [
                        [
                            'class',
                            'subheader py-2 py-lg-4'
                        ],
                        [
                            'id',
                            'kt_subheader'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵdid'](1, 278528, null, 0, a.NgClass, [
                        t.IterableDiffers,
                        t.KeyValueDiffers,
                        t.ElementRef,
                        t.Renderer2
                    ], {
                        klass: [
                            0,
                            'klass'
                        ],
                        ngClass: [
                            1,
                            'ngClass'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](2, 0, null, null, 39, 'div', [[
                            'class',
                            'd-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap'
                        ]], null, null, null, null, null)),
                    t['ɵdid'](3, 278528, null, 0, a.NgClass, [
                        t.IterableDiffers,
                        t.KeyValueDiffers,
                        t.ElementRef,
                        t.Renderer2
                    ], {
                        klass: [
                            0,
                            'klass'
                        ],
                        ngClass: [
                            1,
                            'ngClass'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](4, 0, null, null, 21, 'div', [[
                            'class',
                            'd-flex align-items-center flex-wrap mr-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Al)),
                    t['ɵdid'](6, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, Tl)),
                    t['ɵdid'](8, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵeld'](10, 0, null, null, 0, 'div', [[
                            'class',
                            'subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](11, 0, null, null, 14, 'div', [
                        [
                            'class',
                            'd-flex align-items-center'
                        ],
                        [
                            'id',
                            'kt_subheader_search'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, _l)),
                    t['ɵdid'](13, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](14, 0, null, null, 11, 'form', [
                        [
                            'class',
                            'ml-5'
                        ],
                        [
                            'novalidate',
                            ''
                        ]
                    ], [
                        [
                            2,
                            'ng-untouched',
                            null
                        ],
                        [
                            2,
                            'ng-touched',
                            null
                        ],
                        [
                            2,
                            'ng-pristine',
                            null
                        ],
                        [
                            2,
                            'ng-dirty',
                            null
                        ],
                        [
                            2,
                            'ng-valid',
                            null
                        ],
                        [
                            2,
                            'ng-invalid',
                            null
                        ],
                        [
                            2,
                            'ng-pending',
                            null
                        ]
                    ], [
                        [
                            null,
                            'submit'
                        ],
                        [
                            null,
                            'reset'
                        ]
                    ], function (l, n, e) {
                        var u = !0;
                        return 'submit' === n && (u = !1 !== t['ɵnov'](l, 16).onSubmit(e) && u), 'reset' === n && (u = !1 !== t['ɵnov'](l, 16).onReset() && u), u;
                    }, null, null)),
                    t['ɵdid'](15, 16384, null, 0, D.C, [], null, null),
                    t['ɵdid'](16, 4210688, null, 0, D.s, [
                        [
                            8,
                            null
                        ],
                        [
                            8,
                            null
                        ]
                    ], null, null),
                    t['ɵprd'](2048, null, D.d, null, [D.s]),
                    t['ɵdid'](18, 16384, null, 0, D.r, [[
                            6,
                            D.d
                        ]], null, null),
                    (l()(), t['ɵeld'](19, 0, null, null, 6, 'div', [
                        [
                            'class',
                            'input-group input-group-sm input-group-solid'
                        ],
                        [
                            'style',
                            'max-width: 175px;'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](20, 0, null, null, 0, 'input', [
                        [
                            'class',
                            'form-control'
                        ],
                        [
                            'id',
                            'kt_subheader_search_form'
                        ],
                        [
                            'placeholder',
                            'Search...'
                        ],
                        [
                            'type',
                            'text'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](21, 0, null, null, 4, 'div', [[
                            'class',
                            'input-group-append'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](22, 0, null, null, 3, 'span', [[
                            'class',
                            'input-group-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](23, 16777216, null, null, 2, 'span', [
                        [
                            'cacheSVG',
                            'true'
                        ],
                        [
                            'class',
                            'svg-icon'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵprd'](512, null, o.SVGCacheService, o.SVGCacheService, [
                        [
                            2,
                            a.APP_BASE_HREF
                        ],
                        [
                            2,
                            a.PlatformLocation
                        ],
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        r.HttpClient,
                        r.HttpBackend,
                        t.RendererFactory2
                    ]),
                    t['ɵdid'](25, 737280, null, 0, d.InlineSVGDirective, [
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        o.SVGCacheService,
                        t.Renderer2,
                        c.InlineSVGService,
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        t.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ],
                        cacheSVG: [
                            1,
                            'cacheSVG'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](26, 0, null, null, 15, 'div', [[
                            'class',
                            'd-flex align-items-center'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](27, 0, null, null, 14, 'div', [
                        [
                            'class',
                            'dropdown dropdown-inline'
                        ],
                        [
                            'data-toggle',
                            'tooltip'
                        ],
                        [
                            'ngbDropdown',
                            ''
                        ],
                        [
                            'placement',
                            'bottom-right'
                        ],
                        [
                            'title',
                            'Quick actions'
                        ]
                    ], [[
                            2,
                            'show',
                            null
                        ]], null, null, null, null)),
                    t['ɵdid'](28, 1720320, null, 2, R.v, [
                        t.ChangeDetectorRef,
                        R.x,
                        a.DOCUMENT,
                        t.NgZone,
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            R.K
                        ]
                    ], {
                        placement: [
                            0,
                            'placement'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 1, { _menu: 0 }),
                    t['ɵqud'](603979776, 2, { _anchor: 0 }),
                    (l()(), t['ɵeld'](31, 0, null, null, 5, 'a', [
                        [
                            'aria-expanded',
                            'false'
                        ],
                        [
                            'aria-haspopup',
                            'true'
                        ],
                        [
                            'class',
                            'btn btn-icon cursor-pointer dropdown-toggle'
                        ],
                        [
                            'data-toggle',
                            'dropdown'
                        ],
                        [
                            'ngbDropdownToggle',
                            ''
                        ]
                    ], [[
                            1,
                            'aria-expanded',
                            0
                        ]], [
                        [
                            null,
                            'click'
                        ],
                        [
                            null,
                            'keydown.ArrowUp'
                        ],
                        [
                            null,
                            'keydown.ArrowDown'
                        ],
                        [
                            null,
                            'keydown.Home'
                        ],
                        [
                            null,
                            'keydown.End'
                        ],
                        [
                            null,
                            'keydown.Tab'
                        ],
                        [
                            null,
                            'keydown.Shift.Tab'
                        ]
                    ], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 32).dropdown.toggle() && u), 'keydown.ArrowUp' === n && (u = !1 !== t['ɵnov'](l, 32).dropdown.onKeyDown(e) && u), 'keydown.ArrowDown' === n && (u = !1 !== t['ɵnov'](l, 32).dropdown.onKeyDown(e) && u), 'keydown.Home' === n && (u = !1 !== t['ɵnov'](l, 32).dropdown.onKeyDown(e) && u), 'keydown.End' === n && (u = !1 !== t['ɵnov'](l, 32).dropdown.onKeyDown(e) && u), 'keydown.Tab' === n && (u = !1 !== t['ɵnov'](l, 32).dropdown.onKeyDown(e) && u), 'keydown.Shift.Tab' === n && (u = !1 !== t['ɵnov'](l, 32).dropdown.onKeyDown(e) && u), u;
                    }, null, null)),
                    t['ɵdid'](32, 16384, null, 0, R.A, [
                        R.v,
                        t.ElementRef
                    ], null, null),
                    t['ɵprd'](2048, [[
                            2,
                            4
                        ]], R.w, null, [R.A]),
                    (l()(), t['ɵeld'](34, 16777216, null, null, 2, 'span', [
                        [
                            'cacheSVG',
                            'true'
                        ],
                        [
                            'class',
                            'svg-icon svg-icon-success svg-icon-2x'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵprd'](512, null, o.SVGCacheService, o.SVGCacheService, [
                        [
                            2,
                            a.APP_BASE_HREF
                        ],
                        [
                            2,
                            a.PlatformLocation
                        ],
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        r.HttpClient,
                        r.HttpBackend,
                        t.RendererFactory2
                    ]),
                    t['ɵdid'](36, 737280, null, 0, d.InlineSVGDirective, [
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        o.SVGCacheService,
                        t.Renderer2,
                        c.InlineSVGService,
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        t.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ],
                        cacheSVG: [
                            1,
                            'cacheSVG'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](37, 0, null, null, 4, 'div', [
                        [
                            'class',
                            'dropdown-menu dropdown-menu-md dropdown-menu-right p-0 m-0'
                        ],
                        [
                            'ngbDropdownMenu',
                            ''
                        ]
                    ], [
                        [
                            2,
                            'dropdown-menu',
                            null
                        ],
                        [
                            2,
                            'show',
                            null
                        ],
                        [
                            1,
                            'x-placement',
                            0
                        ]
                    ], [
                        [
                            null,
                            'keydown.ArrowUp'
                        ],
                        [
                            null,
                            'keydown.ArrowDown'
                        ],
                        [
                            null,
                            'keydown.Home'
                        ],
                        [
                            null,
                            'keydown.End'
                        ],
                        [
                            null,
                            'keydown.Enter'
                        ],
                        [
                            null,
                            'keydown.Space'
                        ],
                        [
                            null,
                            'keydown.Tab'
                        ],
                        [
                            null,
                            'keydown.Shift.Tab'
                        ]
                    ], function (l, n, e) {
                        var u = !0;
                        return 'keydown.ArrowUp' === n && (u = !1 !== t['ɵnov'](l, 38).dropdown.onKeyDown(e) && u), 'keydown.ArrowDown' === n && (u = !1 !== t['ɵnov'](l, 38).dropdown.onKeyDown(e) && u), 'keydown.Home' === n && (u = !1 !== t['ɵnov'](l, 38).dropdown.onKeyDown(e) && u), 'keydown.End' === n && (u = !1 !== t['ɵnov'](l, 38).dropdown.onKeyDown(e) && u), 'keydown.Enter' === n && (u = !1 !== t['ɵnov'](l, 38).dropdown.onKeyDown(e) && u), 'keydown.Space' === n && (u = !1 !== t['ɵnov'](l, 38).dropdown.onKeyDown(e) && u), 'keydown.Tab' === n && (u = !1 !== t['ɵnov'](l, 38).dropdown.onKeyDown(e) && u), 'keydown.Shift.Tab' === n && (u = !1 !== t['ɵnov'](l, 38).dropdown.onKeyDown(e) && u), u;
                    }, null, null)),
                    t['ɵdid'](38, 16384, [[
                            1,
                            4
                        ]], 1, R.y, [
                        R.v,
                        t.ElementRef
                    ], null, null),
                    t['ɵqud'](603979776, 3, { menuItems: 1 }),
                    (l()(), t['ɵeld'](40, 0, null, null, 1, 'app-dropdown-menu3', [], null, null, null, Il, Dl)),
                    t['ɵdid'](41, 114688, null, 0, Rl, [], null, null)
                ], function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, 'subheader py-2 py-lg-4', e.subheaderCSSClasses), l(n, 3, 0, 'd-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap', e.subheaderContainerCSSClasses), l(n, 6, 0, e.subheaderMobileToggle), l(n, 8, 0, t['ɵunv'](n, 8, 0, t['ɵnov'](n, 9).transform(e.title$))), l(n, 13, 0, e.subheaderDisplayDesc), l(n, 25, 0, './assets/media/svg/icons/General/Search.svg', 'true'), l(n, 28, 0, 'bottom-right'), l(n, 36, 0, './assets/media/svg/icons/Files/File-plus.svg', 'true'), l(n, 41, 0);
                }, function (l, n) {
                    l(n, 14, 0, t['ɵnov'](n, 18).ngClassUntouched, t['ɵnov'](n, 18).ngClassTouched, t['ɵnov'](n, 18).ngClassPristine, t['ɵnov'](n, 18).ngClassDirty, t['ɵnov'](n, 18).ngClassValid, t['ɵnov'](n, 18).ngClassInvalid, t['ɵnov'](n, 18).ngClassPending), l(n, 27, 0, t['ɵnov'](n, 28).isOpen()), l(n, 31, 0, t['ɵnov'](n, 32).dropdown.isOpen()), l(n, 37, 0, !0, t['ɵnov'](n, 38).dropdown.isOpen(), t['ɵnov'](n, 38).placement);
                });
            }
            class Ol {
                constructor(l, n) {
                    this.layout = l, this.subheader = n, this.subheaderCSSClasses = '', this.subheaderContainerCSSClasses = '', this.subheaderMobileToggle = !1, this.subheaderDisplayDesc = !1, this.subheaderDisplayDaterangepicker = !1, this.title$ = this.subheader.titleSubject.asObservable(), this.breadcrumbs$ = this.subheader.breadCrumbsSubject.asObservable(), this.description$ = this.subheader.descriptionSubject.asObservable();
                }
                ngOnInit() {
                    this.subheaderCSSClasses = this.layout.getStringCSSClasses('subheader'), this.subheaderContainerCSSClasses = this.layout.getStringCSSClasses('subheader_container'), this.subheaderMobileToggle = this.layout.getProp('subheader.mobileToggle'), this.subheaderDisplayDesc = this.layout.getProp('subheader.displayDesc'), this.subheaderDisplayDaterangepicker = this.layout.getProp('subheader.displayDaterangepicker');
                }
            }
            var Pl = t['ɵcrt']({
                encapsulation: 2,
                styles: [],
                data: {}
            });
            function Ml(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'button', [
                        [
                            'class',
                            'burger-icon burger-icon-left mr-4 d-inline-block d-lg-none'
                        ],
                        [
                            'id',
                            'kt_subheader_mobile_toggle'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 0, 'span', [], null, null, null, null, null))
                ], null, null);
            }
            function Hl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'small', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](2, null, [
                        '',
                        ''
                    ]))
                ], null, function (l, n) {
                    l(n, 2, 0, n.context.ngIf);
                });
            }
            function Gl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, null, null, null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, Hl)),
                    t['ɵdid'](2, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵand'](0, null, null, 0))
                ], function (l, n) {
                    var e = n.component;
                    l(n, 2, 0, t['ɵunv'](n, 2, 0, t['ɵnov'](n, 3).transform(e.description$)));
                }, null);
            }
            function Bl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 4, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 3, 'h2', [[
                            'class',
                            'subheader-title text-dark font-weight-bold my-1 mr-3'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](2, null, [
                        ' ',
                        ' '
                    ])),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Gl)),
                    t['ɵdid'](4, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null)
                ], function (l, n) {
                    l(n, 4, 0, n.component.subheaderDisplayDesc);
                }, function (l, n) {
                    l(n, 2, 0, n.context.ngIf);
                });
            }
            function Nl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 6, 'li', [
                        [
                            'class',
                            'breadcrumb-item'
                        ],
                        [
                            'routerLinkActive',
                            'active'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵdid'](1, 1720320, null, 2, f.t, [
                        f.r,
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            2,
                            f.s
                        ],
                        [
                            2,
                            f.u
                        ]
                    ], {
                        routerLinkActive: [
                            0,
                            'routerLinkActive'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 1, { links: 1 }),
                    t['ɵqud'](603979776, 2, { linksWithHrefs: 1 }),
                    (l()(), t['ɵeld'](4, 0, null, null, 2, 'a', [[
                            'class',
                            'text-muted'
                        ]], [
                        [
                            1,
                            'target',
                            0
                        ],
                        [
                            8,
                            'href',
                            4
                        ]
                    ], [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 5).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](5, 671744, [[
                            2,
                            4
                        ]], 0, f.u, [
                        f.r,
                        f.a,
                        a.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    (l()(), t['ɵted'](6, null, [
                        ' ',
                        ' '
                    ]))
                ], function (l, n) {
                    l(n, 1, 0, 'active'), l(n, 5, 0, n.context.$implicit.linkPath);
                }, function (l, n) {
                    l(n, 4, 0, t['ɵnov'](n, 5).target, t['ɵnov'](n, 5).href), l(n, 6, 0, n.context.$implicit.linkText);
                });
            }
            function Fl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 40, 'div', [
                        [
                            'class',
                            'subheader py-3 py-lg-8'
                        ],
                        [
                            'id',
                            'kt_subheader'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵdid'](1, 278528, null, 0, a.NgClass, [
                        t.IterableDiffers,
                        t.KeyValueDiffers,
                        t.ElementRef,
                        t.Renderer2
                    ], {
                        klass: [
                            0,
                            'klass'
                        ],
                        ngClass: [
                            1,
                            'ngClass'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](2, 0, null, null, 38, 'div', [[
                            'class',
                            'd-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap'
                        ]], null, null, null, null, null)),
                    t['ɵdid'](3, 278528, null, 0, a.NgClass, [
                        t.IterableDiffers,
                        t.KeyValueDiffers,
                        t.ElementRef,
                        t.Renderer2
                    ], {
                        klass: [
                            0,
                            'klass'
                        ],
                        ngClass: [
                            1,
                            'ngClass'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](4, 0, null, null, 10, 'div', [[
                            'class',
                            'd-flex align-items-center flex-wrap mr-1'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Ml)),
                    t['ɵdid'](6, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](7, 0, null, null, 7, 'div', [[
                            'class',
                            'd-flex align-items-baseline flex-wrap mr-5'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, Bl)),
                    t['ɵdid'](9, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵeld'](11, 0, null, null, 3, 'ul', [[
                            'class',
                            'breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold my-2 p-0'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, Nl)),
                    t['ɵdid'](13, 278528, null, 0, a.NgForOf, [
                        t.ViewContainerRef,
                        t.TemplateRef,
                        t.IterableDiffers
                    ], {
                        ngForOf: [
                            0,
                            'ngForOf'
                        ]
                    }, null),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵeld'](15, 0, null, null, 25, 'div', [[
                            'class',
                            'd-flex align-items-center'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](16, 0, null, null, 4, 'a', [[
                            'class',
                            'btn btn-fixed-height btn-default btn-hover-primary font-weight-bold px-2 px-lg-5 mr-2 cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](17, 16777216, null, null, 2, 'span', [
                        [
                            'cacheSVG',
                            'true'
                        ],
                        [
                            'class',
                            'svg-icon svg-icon-success svg-icon-lg'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵprd'](512, null, o.SVGCacheService, o.SVGCacheService, [
                        [
                            2,
                            a.APP_BASE_HREF
                        ],
                        [
                            2,
                            a.PlatformLocation
                        ],
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        r.HttpClient,
                        r.HttpBackend,
                        t.RendererFactory2
                    ]),
                    t['ɵdid'](19, 737280, null, 0, d.InlineSVGDirective, [
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        o.SVGCacheService,
                        t.Renderer2,
                        c.InlineSVGService,
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        t.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ],
                        cacheSVG: [
                            1,
                            'cacheSVG'
                        ]
                    }, null),
                    (l()(), t['ɵted'](-1, null, [' New Member '])),
                    (l()(), t['ɵeld'](21, 0, null, null, 15, 'div', [
                        [
                            'class',
                            'dropdown dropdown-inline'
                        ],
                        [
                            'data-placement',
                            'left'
                        ],
                        [
                            'data-toggle',
                            'tooltip'
                        ],
                        [
                            'ngbDropdown',
                            ''
                        ],
                        [
                            'placement',
                            'bottom-right'
                        ],
                        [
                            'title',
                            'Quick actions'
                        ]
                    ], [[
                            2,
                            'show',
                            null
                        ]], null, null, null, null)),
                    t['ɵdid'](22, 1720320, null, 2, R.v, [
                        t.ChangeDetectorRef,
                        R.x,
                        a.DOCUMENT,
                        t.NgZone,
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            R.K
                        ]
                    ], {
                        placement: [
                            0,
                            'placement'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 3, { _menu: 0 }),
                    t['ɵqud'](603979776, 4, { _anchor: 0 }),
                    (l()(), t['ɵeld'](25, 0, null, null, 6, 'a', [
                        [
                            'aria-expanded',
                            'false'
                        ],
                        [
                            'aria-haspopup',
                            'true'
                        ],
                        [
                            'class',
                            'btn btn-fixed-height btn-default btn-hover-primary font-weight-bold px-2 px-lg-5 mr-2 cursor-pointer dropdown-toggle'
                        ],
                        [
                            'data-toggle',
                            'dropdown'
                        ],
                        [
                            'ngbDropdownToggle',
                            ''
                        ]
                    ], [[
                            1,
                            'aria-expanded',
                            0
                        ]], [
                        [
                            null,
                            'click'
                        ],
                        [
                            null,
                            'keydown.ArrowUp'
                        ],
                        [
                            null,
                            'keydown.ArrowDown'
                        ],
                        [
                            null,
                            'keydown.Home'
                        ],
                        [
                            null,
                            'keydown.End'
                        ],
                        [
                            null,
                            'keydown.Tab'
                        ],
                        [
                            null,
                            'keydown.Shift.Tab'
                        ]
                    ], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 26).dropdown.toggle() && u), 'keydown.ArrowUp' === n && (u = !1 !== t['ɵnov'](l, 26).dropdown.onKeyDown(e) && u), 'keydown.ArrowDown' === n && (u = !1 !== t['ɵnov'](l, 26).dropdown.onKeyDown(e) && u), 'keydown.Home' === n && (u = !1 !== t['ɵnov'](l, 26).dropdown.onKeyDown(e) && u), 'keydown.End' === n && (u = !1 !== t['ɵnov'](l, 26).dropdown.onKeyDown(e) && u), 'keydown.Tab' === n && (u = !1 !== t['ɵnov'](l, 26).dropdown.onKeyDown(e) && u), 'keydown.Shift.Tab' === n && (u = !1 !== t['ɵnov'](l, 26).dropdown.onKeyDown(e) && u), u;
                    }, null, null)),
                    t['ɵdid'](26, 16384, null, 0, R.A, [
                        R.v,
                        t.ElementRef
                    ], null, null),
                    t['ɵprd'](2048, [[
                            4,
                            4
                        ]], R.w, null, [R.A]),
                    (l()(), t['ɵeld'](28, 16777216, null, null, 2, 'span', [
                        [
                            'cacheSVG',
                            'true'
                        ],
                        [
                            'class',
                            'svg-icon svg-icon-success svg-icon-lg'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵprd'](512, null, o.SVGCacheService, o.SVGCacheService, [
                        [
                            2,
                            a.APP_BASE_HREF
                        ],
                        [
                            2,
                            a.PlatformLocation
                        ],
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        r.HttpClient,
                        r.HttpBackend,
                        t.RendererFactory2
                    ]),
                    t['ɵdid'](30, 737280, null, 0, d.InlineSVGDirective, [
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        o.SVGCacheService,
                        t.Renderer2,
                        c.InlineSVGService,
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        t.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ],
                        cacheSVG: [
                            1,
                            'cacheSVG'
                        ]
                    }, null),
                    (l()(), t['ɵted'](-1, null, [' New Report '])),
                    (l()(), t['ɵeld'](32, 0, null, null, 4, 'div', [
                        [
                            'class',
                            'dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right'
                        ],
                        [
                            'ngbDropdownMenu',
                            ''
                        ]
                    ], [
                        [
                            2,
                            'dropdown-menu',
                            null
                        ],
                        [
                            2,
                            'show',
                            null
                        ],
                        [
                            1,
                            'x-placement',
                            0
                        ]
                    ], [
                        [
                            null,
                            'keydown.ArrowUp'
                        ],
                        [
                            null,
                            'keydown.ArrowDown'
                        ],
                        [
                            null,
                            'keydown.Home'
                        ],
                        [
                            null,
                            'keydown.End'
                        ],
                        [
                            null,
                            'keydown.Enter'
                        ],
                        [
                            null,
                            'keydown.Space'
                        ],
                        [
                            null,
                            'keydown.Tab'
                        ],
                        [
                            null,
                            'keydown.Shift.Tab'
                        ]
                    ], function (l, n, e) {
                        var u = !0;
                        return 'keydown.ArrowUp' === n && (u = !1 !== t['ɵnov'](l, 33).dropdown.onKeyDown(e) && u), 'keydown.ArrowDown' === n && (u = !1 !== t['ɵnov'](l, 33).dropdown.onKeyDown(e) && u), 'keydown.Home' === n && (u = !1 !== t['ɵnov'](l, 33).dropdown.onKeyDown(e) && u), 'keydown.End' === n && (u = !1 !== t['ɵnov'](l, 33).dropdown.onKeyDown(e) && u), 'keydown.Enter' === n && (u = !1 !== t['ɵnov'](l, 33).dropdown.onKeyDown(e) && u), 'keydown.Space' === n && (u = !1 !== t['ɵnov'](l, 33).dropdown.onKeyDown(e) && u), 'keydown.Tab' === n && (u = !1 !== t['ɵnov'](l, 33).dropdown.onKeyDown(e) && u), 'keydown.Shift.Tab' === n && (u = !1 !== t['ɵnov'](l, 33).dropdown.onKeyDown(e) && u), u;
                    }, null, null)),
                    t['ɵdid'](33, 16384, [[
                            3,
                            4
                        ]], 1, R.y, [
                        R.v,
                        t.ElementRef
                    ], null, null),
                    t['ɵqud'](603979776, 5, { menuItems: 1 }),
                    (l()(), t['ɵeld'](35, 0, null, null, 1, 'app-dropdown-menu1', [], null, null, null, Z, $)),
                    t['ɵdid'](36, 114688, null, 0, X, [], null, null),
                    (l()(), t['ɵeld'](37, 0, null, null, 3, 'a', [
                        [
                            'class',
                            'btn btn-success btn-icon font-weight-bold cursor-pointer'
                        ],
                        [
                            'data-target',
                            '#kt_chat_modal'
                        ],
                        [
                            'data-toggle',
                            'modal'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](38, 16777216, null, null, 2, 'span', [
                        [
                            'cacheSVG',
                            'true'
                        ],
                        [
                            'class',
                            'svg-icon svg-icon-lg'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵprd'](512, null, o.SVGCacheService, o.SVGCacheService, [
                        [
                            2,
                            a.APP_BASE_HREF
                        ],
                        [
                            2,
                            a.PlatformLocation
                        ],
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        r.HttpClient,
                        r.HttpBackend,
                        t.RendererFactory2
                    ]),
                    t['ɵdid'](40, 737280, null, 0, d.InlineSVGDirective, [
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        o.SVGCacheService,
                        t.Renderer2,
                        c.InlineSVGService,
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        t.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ],
                        cacheSVG: [
                            1,
                            'cacheSVG'
                        ]
                    }, null)
                ], function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, 'subheader py-3 py-lg-8', e.subheaderCSSClasses), l(n, 3, 0, 'd-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap', e.subheaderContainerCSSClasses), l(n, 6, 0, e.subheaderMobileToggle), l(n, 9, 0, t['ɵunv'](n, 9, 0, t['ɵnov'](n, 10).transform(e.title$))), l(n, 13, 0, t['ɵunv'](n, 13, 0, t['ɵnov'](n, 14).transform(e.breadcrumbs$))), l(n, 19, 0, './assets/media/svg/icons/Communication/Add-user.svg', 'true'), l(n, 22, 0, 'bottom-right'), l(n, 30, 0, './assets/media/svg/icons/Files/File.svg', 'true'), l(n, 36, 0), l(n, 40, 0, './assets/media/svg/icons/Communication/Group-chat.svg', 'true');
                }, function (l, n) {
                    l(n, 21, 0, t['ɵnov'](n, 22).isOpen()), l(n, 25, 0, t['ɵnov'](n, 26).dropdown.isOpen()), l(n, 32, 0, !0, t['ɵnov'](n, 33).dropdown.isOpen(), t['ɵnov'](n, 33).placement);
                });
            }
            var jl, Kl = e('rh/z'), zl = {
                    init: function (l) {
                        jl = Kl.a.getById(l);
                    },
                    isFixed: function () {
                        return Kl.a.hasClass(Kl.a.getBody(), 'subheader-fixed');
                    },
                    getElement: function () {
                        return jl;
                    },
                    getHeight: function () {
                        return l = 0, jl && (l = Kl.a.actualHeight(jl)), l;
                        var l;
                    }
                };
            class Ul {
                constructor(l, n) {
                    this.subheader = l, this.router = n, this.subheader.setDefaultSubheader(), this.subheaderVersion$ = this.subheader.subheaderVersionSubject.asObservable();
                    const e = () => {
                        setTimeout(() => {
                            this.subheader.updateAfterRouteChanges(this.router.url);
                        }, 0);
                    };
                    e(), this.router.events.pipe(Object(O.a)(l => l instanceof f.n)).subscribe(e);
                }
                ngOnInit() {
                }
                ngAfterViewInit() {
                    Kl.a.ready(() => {
                        zl.init('kt_subheader');
                    });
                }
            }
            var ql = t['ɵcrt']({
                encapsulation: 2,
                styles: [],
                data: {}
            });
            function Wl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'app-subheader1', [], null, null, null, Y, B)),
                    t['ɵdid'](2, 114688, null, 0, P, [
                        m.a,
                        G,
                        t.ChangeDetectorRef,
                        f.r
                    ], null, null)
                ], function (l, n) {
                    l(n, 2, 0);
                }, null);
            }
            function Yl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'app-subheader2', [], null, null, null, il, Q)),
                    t['ɵdid'](2, 114688, null, 0, J, [
                        m.a,
                        G
                    ], null, null)
                ], function (l, n) {
                    l(n, 2, 0);
                }, null);
            }
            function Xl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'app-subheader3', [], null, null, null, ml, dl)),
                    t['ɵdid'](2, 114688, null, 0, rl, [
                        m.a,
                        G
                    ], null, null)
                ], function (l, n) {
                    l(n, 2, 0);
                }, null);
            }
            function $l(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'app-subheader4', [], null, null, null, kl, wl)),
                    t['ɵdid'](2, 114688, null, 0, yl, [
                        m.a,
                        G
                    ], null, null)
                ], function (l, n) {
                    l(n, 2, 0);
                }, null);
            }
            function Zl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'app-subheader5', [], null, null, null, Ll, El)),
                    t['ɵdid'](2, 114688, null, 0, xl, [
                        m.a,
                        G
                    ], null, null)
                ], function (l, n) {
                    l(n, 2, 0);
                }, null);
            }
            function Jl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'app-subheader6', [], null, null, null, Fl, Pl)),
                    t['ɵdid'](2, 114688, null, 0, Ol, [
                        m.a,
                        G
                    ], null, null)
                ], function (l, n) {
                    l(n, 2, 0);
                }, null);
            }
            function Ql(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 12, null, null, null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Wl)),
                    t['ɵdid'](2, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Yl)),
                    t['ɵdid'](4, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Xl)),
                    t['ɵdid'](6, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, $l)),
                    t['ɵdid'](8, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Zl)),
                    t['ɵdid'](10, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Jl)),
                    t['ɵdid'](12, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](0, null, null, 0))
                ], function (l, n) {
                    l(n, 2, 0, 'v1' === n.context.ngIf), l(n, 4, 0, 'v2' === n.context.ngIf), l(n, 6, 0, 'v3' === n.context.ngIf), l(n, 8, 0, 'v4' === n.context.ngIf), l(n, 10, 0, 'v5' === n.context.ngIf), l(n, 12, 0, 'v6' === n.context.ngIf);
                }, null);
            }
            function ln(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵand'](16777216, null, null, 2, null, Ql)),
                    t['ɵdid'](1, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef])
                ], function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform(e.subheaderVersion$)));
                }, null);
            }
            var nn = function () {
                var l;
                return {
                    init: function (n) {
                        l = Kl.a.getById(n);
                    },
                    getHeight: function () {
                        return n = 0, l && (n = Kl.a.actualHeight(l)), n;
                        var n;
                    },
                    getElement: function () {
                        return l;
                    }
                };
            }();
            class en {
                constructor(l) {
                    this.layout = l;
                    const n = new Date();
                    this.currentYear = n.getFullYear().toString();
                }
                ngOnInit() {
                    this.footerContainerCSSClasses = this.layout.getStringCSSClasses('footer_container');
                }
                ngAfterViewInit() {
                    nn.init('kt_footer');
                }
            }
            var tn = t['ɵcrt']({
                encapsulation: 0,
                styles: [['']],
                data: {}
            });
            function un(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 6, 'div', [[
                            'class',
                            'd-flex flex-column flex-md-row align-items-center justify-content-between'
                        ]], null, null, null, null, null)),
                    t['ɵdid'](1, 278528, null, 0, a.NgClass, [
                        t.IterableDiffers,
                        t.KeyValueDiffers,
                        t.ElementRef,
                        t.Renderer2
                    ], {
                        klass: [
                            0,
                            'klass'
                        ],
                        ngClass: [
                            1,
                            'ngClass'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](2, 0, null, null, 4, 'div', [[
                            'class',
                            'text-dark order-2 order-md-1'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 1, 'span', [[
                            'class',
                            'text-muted font-weight-bold mr-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](4, null, [
                        '',
                        ' \xA9'
                    ])),
                    (l()(), t['ɵeld'](5, 0, null, null, 1, 'a', [
                        [
                            'class',
                            'text-dark-75 text-hover-primary'
                        ],
                        [
                            'href',
                            'http://keenthemes.com/metronic'
                        ],
                        [
                            'target',
                            '_blank'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Centinela']))
                ], function (l, n) {
                    l(n, 1, 0, 'd-flex flex-column flex-md-row align-items-center justify-content-between', n.component.footerContainerCSSClasses);
                }, function (l, n) {
                    l(n, 4, 0, n.component.currentYear);
                });
            }
            class on {
                constructor(l) {
                    this.layout = l;
                }
                ngOnInit() {
                    this.extrasSearchOffcanvasDirectionCSSClass = 'offcanvas-' + this.layout.getProp('extras.search.offcanvas.direction');
                }
            }
            var an = t['ɵcrt']({
                encapsulation: 0,
                styles: [['']],
                data: {}
            });
            function sn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 134, 'div', [
                        [
                            'class',
                            'offcanvas p-10'
                        ],
                        [
                            'id',
                            'kt_quick_search'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵdid'](1, 278528, null, 0, a.NgClass, [
                        t.IterableDiffers,
                        t.KeyValueDiffers,
                        t.ElementRef,
                        t.Renderer2
                    ], {
                        klass: [
                            0,
                            'klass'
                        ],
                        ngClass: [
                            1,
                            'ngClass'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](2, 0, null, null, 6, 'div', [[
                            'class',
                            'offcanvas-header d-flex align-items-center justify-content-between mb-5'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 3, 'h3', [[
                            'class',
                            'font-weight-bold m-0'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' Search '])),
                    (l()(), t['ɵeld'](5, 0, null, null, 1, 'small', [[
                            'class',
                            'text-muted font-size-sm ml-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['files, reports, members'])),
                    (l()(), t['ɵeld'](7, 0, null, null, 1, 'a', [
                        [
                            'class',
                            'btn btn-xs btn-icon btn-light btn-hover-primary'
                        ],
                        [
                            'href',
                            '#'
                        ],
                        [
                            'id',
                            'kt_quick_search_close'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](8, 0, null, null, 0, 'i', [[
                            'class',
                            'ki ki-close icon-xs text-muted'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](9, 0, null, null, 125, 'div', [[
                            'class',
                            'offcanvas-content'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](10, 0, null, null, 124, 'div', [
                        [
                            'class',
                            'quick-search quick-search-offcanvas quick-search-has-result'
                        ],
                        [
                            'id',
                            'kt_quick_search_offcanvas'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](11, 0, null, null, 10, 'form', [
                        [
                            'class',
                            'quick-search-form border-bottom pt-5 pb-1'
                        ],
                        [
                            'method',
                            'get'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](12, 0, null, null, 9, 'div', [[
                            'class',
                            'input-group'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](13, 0, null, null, 4, 'div', [[
                            'class',
                            'input-group-prepend'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](14, 0, null, null, 3, 'span', [[
                            'class',
                            'input-group-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](15, 16777216, null, null, 2, 'span', [
                        [
                            'cacheSVG',
                            'true'
                        ],
                        [
                            'class',
                            'svg-icon svg-icon-lg'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵprd'](512, null, o.SVGCacheService, o.SVGCacheService, [
                        [
                            2,
                            a.APP_BASE_HREF
                        ],
                        [
                            2,
                            a.PlatformLocation
                        ],
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        r.HttpClient,
                        r.HttpBackend,
                        t.RendererFactory2
                    ]),
                    t['ɵdid'](17, 737280, null, 0, d.InlineSVGDirective, [
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        o.SVGCacheService,
                        t.Renderer2,
                        c.InlineSVGService,
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        t.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ],
                        cacheSVG: [
                            1,
                            'cacheSVG'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](18, 0, null, null, 0, 'input', [
                        [
                            'class',
                            'form-control '
                        ],
                        [
                            'placeholder',
                            'Search...'
                        ],
                        [
                            'type',
                            'text'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](19, 0, null, null, 2, 'div', [[
                            'class',
                            'input-group-append'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](20, 0, null, null, 1, 'span', [[
                            'class',
                            'input-group-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](21, 0, null, null, 0, 'i', [[
                            'class',
                            'quick-search-close ki ki-close icon-sm text-muted'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](22, 0, null, null, 112, 'div', [[
                            'class',
                            'quick-search-wrapper pt-5'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](23, 0, null, null, 111, 'div', [[
                            'class',
                            'quick-search-result'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](24, 0, null, null, 1, 'div', [[
                            'class',
                            'text-muted d-none'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' No record found '])),
                    (l()(), t['ɵeld'](26, 0, null, null, 1, 'div', [[
                            'class',
                            'font-size-sm text-primary font-weight-bolder text-uppercase mb-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' Documents '])),
                    (l()(), t['ɵeld'](28, 0, null, null, 32, 'div', [[
                            'class',
                            'mb-10'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](29, 0, null, null, 7, 'div', [[
                            'class',
                            'd-flex align-items-center flex-grow-1 mb-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](30, 0, null, null, 1, 'div', [[
                            'class',
                            'symbol symbol-30 bg-transparent flex-shrink-0'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](31, 0, null, null, 0, 'img', [
                        [
                            'alt',
                            ''
                        ],
                        [
                            'src',
                            './assets/media/svg/files/doc.svg'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](32, 0, null, null, 4, 'div', [[
                            'class',
                            'd-flex flex-column ml-3 mt-2 mb-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](33, 0, null, null, 1, 'a', [
                        [
                            'class',
                            'font-weight-bold text-dark text-hover-primary'
                        ],
                        [
                            'href',
                            '#'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' AirPlus Requirements '])),
                    (l()(), t['ɵeld'](35, 0, null, null, 1, 'span', [[
                            'class',
                            'font-size-sm font-weight-bold text-muted'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' by Grog John '])),
                    (l()(), t['ɵeld'](37, 0, null, null, 7, 'div', [[
                            'class',
                            'd-flex align-items-center flex-grow-1 mb-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](38, 0, null, null, 1, 'div', [[
                            'class',
                            'symbol symbol-30 bg-transparent flex-shrink-0'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](39, 0, null, null, 0, 'img', [
                        [
                            'alt',
                            ''
                        ],
                        [
                            'src',
                            './assets/media/svg/files/pdf.svg'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](40, 0, null, null, 4, 'div', [[
                            'class',
                            'd-flex flex-column ml-3 mt-2 mb-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](41, 0, null, null, 1, 'a', [
                        [
                            'class',
                            'font-weight-bold text-dark text-hover-primary'
                        ],
                        [
                            'href',
                            '#'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' TechNav Documentation '])),
                    (l()(), t['ɵeld'](43, 0, null, null, 1, 'span', [[
                            'class',
                            'font-size-sm font-weight-bold text-muted'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' by Mary Broun '])),
                    (l()(), t['ɵeld'](45, 0, null, null, 7, 'div', [[
                            'class',
                            'd-flex align-items-center flex-grow-1 mb-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](46, 0, null, null, 1, 'div', [[
                            'class',
                            'symbol symbol-30 bg-transparent flex-shrink-0'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](47, 0, null, null, 0, 'img', [
                        [
                            'alt',
                            ''
                        ],
                        [
                            'src',
                            './assets/media/svg/files/xml.svg'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](48, 0, null, null, 4, 'div', [[
                            'class',
                            'd-flex flex-column ml-3 mt-2 mb-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](49, 0, null, null, 1, 'a', [
                        [
                            'class',
                            'font-weight-bold text-dark text-hover-primary'
                        ],
                        [
                            'href',
                            '#'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' All Framework Docs '])),
                    (l()(), t['ɵeld'](51, 0, null, null, 1, 'span', [[
                            'class',
                            'font-size-sm font-weight-bold text-muted'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' by Nick Stone '])),
                    (l()(), t['ɵeld'](53, 0, null, null, 7, 'div', [[
                            'class',
                            'd-flex align-items-center flex-grow-1 mb-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](54, 0, null, null, 1, 'div', [[
                            'class',
                            'symbol symbol-30 bg-transparent flex-shrink-0'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](55, 0, null, null, 0, 'img', [
                        [
                            'alt',
                            ''
                        ],
                        [
                            'src',
                            './assets/media/svg/files/csv.svg'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](56, 0, null, null, 4, 'div', [[
                            'class',
                            'd-flex flex-column ml-3 mt-2 mb-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](57, 0, null, null, 1, 'a', [
                        [
                            'class',
                            'font-weight-bold text-dark text-hover-primary'
                        ],
                        [
                            'href',
                            '#'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' Finance & Accounting Reports '])),
                    (l()(), t['ɵeld'](59, 0, null, null, 1, 'span', [[
                            'class',
                            'font-size-sm font-weight-bold text-muted'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' by Jhon Larson '])),
                    (l()(), t['ɵeld'](61, 0, null, null, 1, 'div', [[
                            'class',
                            'font-size-sm text-primary font-weight-bolder text-uppercase mb-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' Members '])),
                    (l()(), t['ɵeld'](63, 0, null, null, 32, 'div', [[
                            'class',
                            'mb-10'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](64, 0, null, null, 7, 'div', [[
                            'class',
                            'd-flex align-items-center flex-grow-1 mb-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](65, 0, null, null, 1, 'div', [[
                            'class',
                            'symbol symbol-30 flex-shrink-0'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](66, 0, null, null, 0, 'div', [
                        [
                            'class',
                            'symbol-label'
                        ],
                        [
                            'style',
                            'background-image:url(\'./assets/media/users/300_20.jpg\')'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](67, 0, null, null, 4, 'div', [[
                            'class',
                            'd-flex flex-column ml-3 mt-2 mb-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](68, 0, null, null, 1, 'a', [
                        [
                            'class',
                            'font-weight-bold text-dark text-hover-primary'
                        ],
                        [
                            'href',
                            '#'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' Milena Gibson '])),
                    (l()(), t['ɵeld'](70, 0, null, null, 1, 'span', [[
                            'class',
                            'font-size-sm font-weight-bold text-muted'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' UI Designer '])),
                    (l()(), t['ɵeld'](72, 0, null, null, 7, 'div', [[
                            'class',
                            'd-flex align-items-center flex-grow-1 mb-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](73, 0, null, null, 1, 'div', [[
                            'class',
                            'symbol symbol-30 flex-shrink-0'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](74, 0, null, null, 0, 'div', [
                        [
                            'class',
                            'symbol-label'
                        ],
                        [
                            'style',
                            'background-image:url(\'./assets/media/users/300_15.jpg\')'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](75, 0, null, null, 4, 'div', [[
                            'class',
                            'd-flex flex-column ml-3 mt-2 mb-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](76, 0, null, null, 1, 'a', [
                        [
                            'class',
                            'font-weight-bold text-dark text-hover-primary'
                        ],
                        [
                            'href',
                            '#'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' Stefan JohnStefan '])),
                    (l()(), t['ɵeld'](78, 0, null, null, 1, 'span', [[
                            'class',
                            'font-size-sm font-weight-bold text-muted'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' Marketing Manager '])),
                    (l()(), t['ɵeld'](80, 0, null, null, 7, 'div', [[
                            'class',
                            'd-flex align-items-center flex-grow-1 mb-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](81, 0, null, null, 1, 'div', [[
                            'class',
                            'symbol symbol-30 flex-shrink-0'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](82, 0, null, null, 0, 'div', [
                        [
                            'class',
                            'symbol-label'
                        ],
                        [
                            'style',
                            'background-image:url(\'./assets/media/users/300_12.jpg\')'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](83, 0, null, null, 4, 'div', [[
                            'class',
                            'd-flex flex-column ml-3 mt-2 mb-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](84, 0, null, null, 1, 'a', [
                        [
                            'class',
                            'font-weight-bold text-dark text-hover-primary'
                        ],
                        [
                            'href',
                            '#'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' Anna Strong '])),
                    (l()(), t['ɵeld'](86, 0, null, null, 1, 'span', [[
                            'class',
                            'font-size-sm font-weight-bold text-muted'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' Software Developer '])),
                    (l()(), t['ɵeld'](88, 0, null, null, 7, 'div', [[
                            'class',
                            'd-flex align-items-center flex-grow-1 mb-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](89, 0, null, null, 1, 'div', [[
                            'class',
                            'symbol symbol-30 flex-shrink-0'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](90, 0, null, null, 0, 'div', [
                        [
                            'class',
                            'symbol-label'
                        ],
                        [
                            'style',
                            'background-image:url(\'./assets/media/users/300_16.jpg\')'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](91, 0, null, null, 4, 'div', [[
                            'class',
                            'd-flex flex-column ml-3 mt-2 mb-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](92, 0, null, null, 1, 'a', [
                        [
                            'class',
                            'font-weight-bold text-dark text-hover-primary'
                        ],
                        [
                            'href',
                            '#'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' Nick Bold '])),
                    (l()(), t['ɵeld'](94, 0, null, null, 1, 'span', [[
                            'class',
                            'font-size-sm font-weight-bold text-muted'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' Project Coordinator '])),
                    (l()(), t['ɵeld'](96, 0, null, null, 1, 'div', [[
                            'class',
                            'font-size-sm text-primary font-weight-bolder text-uppercase mb-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' Files '])),
                    (l()(), t['ɵeld'](98, 0, null, null, 36, 'div', [[
                            'class',
                            'mb-10'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](99, 0, null, null, 8, 'div', [[
                            'class',
                            'd-flex align-items-center flex-grow-1 mb-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](100, 0, null, null, 2, 'div', [[
                            'class',
                            'symbol symbol-30 flex-shrink-0'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](101, 0, null, null, 1, 'div', [[
                            'class',
                            'symbol-label'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](102, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon-psd text-primary'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](103, 0, null, null, 4, 'div', [[
                            'class',
                            'd-flex flex-column ml-3 mt-2 mb-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](104, 0, null, null, 1, 'a', [
                        [
                            'class',
                            'font-weight-bold text-dark text-hover-primary'
                        ],
                        [
                            'href',
                            '#'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' 79 PSD files generated '])),
                    (l()(), t['ɵeld'](106, 0, null, null, 1, 'span', [[
                            'class',
                            'font-size-sm font-weight-bold text-muted'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' by Grog John '])),
                    (l()(), t['ɵeld'](108, 0, null, null, 8, 'div', [[
                            'class',
                            'd-flex align-items-center flex-grow-1 mb-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](109, 0, null, null, 2, 'div', [[
                            'class',
                            'symbol symbol-30 flex-shrink-0'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](110, 0, null, null, 1, 'div', [[
                            'class',
                            'symbol-label'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](111, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-supermarket text-warning'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](112, 0, null, null, 4, 'div', [[
                            'class',
                            'd-flex flex-column ml-3 mt-2 mb-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](113, 0, null, null, 1, 'a', [
                        [
                            'class',
                            'font-weight-bold text-dark text-hover-primary'
                        ],
                        [
                            'href',
                            '#'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' $2900 worth products sold '])),
                    (l()(), t['ɵeld'](115, 0, null, null, 1, 'span', [[
                            'class',
                            'font-size-sm font-weight-bold text-muted'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' Total 234 items '])),
                    (l()(), t['ɵeld'](117, 0, null, null, 8, 'div', [[
                            'class',
                            'd-flex align-items-center flex-grow-1 mb-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](118, 0, null, null, 2, 'div', [[
                            'class',
                            'symbol symbol-30 flex-shrink-0'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](119, 0, null, null, 1, 'div', [[
                            'class',
                            'symbol-label'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](120, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon-safe-shield-protection text-info'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](121, 0, null, null, 4, 'div', [[
                            'class',
                            'd-flex flex-column ml-3 mt-2 mb-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](122, 0, null, null, 1, 'a', [
                        [
                            'class',
                            'font-weight-bold text-dark text-hover-primary'
                        ],
                        [
                            'href',
                            '#'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' 4 New items submitted '])),
                    (l()(), t['ɵeld'](124, 0, null, null, 1, 'span', [[
                            'class',
                            'font-size-sm font-weight-bold text-muted'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' Marketing Manager '])),
                    (l()(), t['ɵeld'](126, 0, null, null, 8, 'div', [[
                            'class',
                            'd-flex align-items-center flex-grow-1 mb-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](127, 0, null, null, 2, 'div', [[
                            'class',
                            'symbol symbol-30 flex-shrink-0'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](128, 0, null, null, 1, 'div', [[
                            'class',
                            'symbol-label'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](129, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon-safe-shield-protection text-warning'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](130, 0, null, null, 4, 'div', [[
                            'class',
                            'd-flex flex-column ml-3 mt-2 mb-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](131, 0, null, null, 1, 'a', [
                        [
                            'class',
                            'font-weight-bold text-dark text-hover-primary'
                        ],
                        [
                            'href',
                            '#'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' 4 New items submitted '])),
                    (l()(), t['ɵeld'](133, 0, null, null, 1, 'span', [[
                            'class',
                            'font-size-sm font-weight-bold text-muted'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' Marketing Manager ']))
                ], function (l, n) {
                    l(n, 1, 0, 'offcanvas p-10', n.component.extrasSearchOffcanvasDirectionCSSClass), l(n, 17, 0, './assets/media/svg/icons/General/Search.svg', 'true');
                }, null);
            }
            var rn = e('zG16'), dn = e('WueC'), cn = t['ɵcrt']({
                    encapsulation: 0,
                    styles: [['']],
                    data: {}
                });
            function fn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 2, 'div', [[
                            'class',
                            'text-muted mt-1'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](2, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 2, 0, t['ɵunv'](n, 2, 0, t['ɵnov'](n, 3).transform('USER.PHISICAL')));
                });
            }
            function pn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 2, 'div', [[
                            'class',
                            'text-muted mt-1'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](2, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 2, 0, t['ɵunv'](n, 2, 0, t['ɵnov'](n, 3).transform('USER.MORAL')));
                });
            }
            function hn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 16, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 15, 'a', [
                        [
                            'class',
                            'navi-item cursor-pointer'
                        ],
                        [
                            'id',
                            'kt_quick_user_sincronization_toggle'
                        ]
                    ], [
                        [
                            1,
                            'target',
                            0
                        ],
                        [
                            8,
                            'href',
                            4
                        ]
                    ], [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 2).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](2, 671744, null, 0, f.u, [
                        f.r,
                        f.a,
                        a.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    t['ɵpad'](3, 1),
                    (l()(), t['ɵeld'](4, 0, null, null, 12, 'div', [[
                            'class',
                            'navi-link'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](5, 0, null, null, 4, 'div', [[
                            'class',
                            'symbol symbol-40 bg-light mr-3'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](6, 0, null, null, 3, 'div', [[
                            'class',
                            'symbol-label'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](7, 16777216, null, null, 2, 'span', [
                        [
                            'cacheSVG',
                            'true'
                        ],
                        [
                            'class',
                            'svg-icon svg-icon-md svg-icon-warning'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵprd'](512, null, o.SVGCacheService, o.SVGCacheService, [
                        [
                            2,
                            a.APP_BASE_HREF
                        ],
                        [
                            2,
                            a.PlatformLocation
                        ],
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        r.HttpClient,
                        r.HttpBackend,
                        t.RendererFactory2
                    ]),
                    t['ɵdid'](9, 737280, null, 0, d.InlineSVGDirective, [
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        o.SVGCacheService,
                        t.Renderer2,
                        c.InlineSVGService,
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        t.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ],
                        cacheSVG: [
                            1,
                            'cacheSVG'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](10, 0, null, null, 6, 'div', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](11, 0, null, null, 2, 'div', [[
                            'class',
                            'font-weight-bold'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](12, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](14, 0, null, null, 2, 'div', [[
                            'class',
                            'text-muted'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](15, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ])
                ], function (l, n) {
                    var e = l(n, 3, 0, '/sincronization');
                    l(n, 2, 0, e), l(n, 9, 0, './assets/media/svg/icons/Navigation/Route.svg', 'true');
                }, function (l, n) {
                    l(n, 1, 0, t['ɵnov'](n, 2).target, t['ɵnov'](n, 2).href), l(n, 12, 0, t['ɵunv'](n, 12, 0, t['ɵnov'](n, 13).transform('USER.LINKSIGNATURE'))), l(n, 15, 0, t['ɵunv'](n, 15, 0, t['ɵnov'](n, 16).transform('USER.LINKSIGNATUREHELP')));
                });
            }
            function gn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 14, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 13, 'a', [[
                            'class',
                            'navi-item cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 12, 'div', [[
                            'class',
                            'navi-link'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 4, 'div', [[
                            'class',
                            'symbol symbol-40 bg-light mr-3'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](4, 0, null, null, 3, 'div', [[
                            'class',
                            'symbol-label'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](5, 16777216, null, null, 2, 'span', [
                        [
                            'cacheSVG',
                            'true'
                        ],
                        [
                            'class',
                            'svg-icon svg-icon-md svg-icon-danger'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵprd'](512, null, o.SVGCacheService, o.SVGCacheService, [
                        [
                            2,
                            a.APP_BASE_HREF
                        ],
                        [
                            2,
                            a.PlatformLocation
                        ],
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        r.HttpClient,
                        r.HttpBackend,
                        t.RendererFactory2
                    ]),
                    t['ɵdid'](7, 737280, null, 0, d.InlineSVGDirective, [
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        o.SVGCacheService,
                        t.Renderer2,
                        c.InlineSVGService,
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        t.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ],
                        cacheSVG: [
                            1,
                            'cacheSVG'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](8, 0, null, null, 6, 'div', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](9, 0, null, null, 2, 'div', [[
                            'class',
                            'font-weight-bold'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](10, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](12, 0, null, null, 2, 'div', [[
                            'class',
                            'text-muted'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](13, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ])
                ], function (l, n) {
                    l(n, 7, 0, './assets/media/svg/icons/Navigation/Close.svg', 'true');
                }, function (l, n) {
                    l(n, 10, 0, t['ɵunv'](n, 10, 0, t['ɵnov'](n, 11).transform('USER.UPAIR'))), l(n, 13, 0, t['ɵunv'](n, 13, 0, t['ɵnov'](n, 14).transform('USER.UPAIRHELP')));
                });
            }
            function mn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 105, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 5, 'div', [[
                            'class',
                            'offcanvas-header d-flex align-items-center justify-content-between pb-5'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 2, 'h3', [[
                            'class',
                            'font-weight-bold m-0'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](3, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](5, 0, null, null, 1, 'a', [
                        [
                            'class',
                            'btn btn-xs btn-icon btn-light btn-hover-primary'
                        ],
                        [
                            'href',
                            '#'
                        ],
                        [
                            'id',
                            'kt_quick_user_close'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](6, 0, null, null, 0, 'i', [[
                            'class',
                            'ki ki-close icon-xs text-muted'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](7, 0, null, null, 98, 'div', [[
                            'class',
                            'offcanvas-content pr-5 mr-n5'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](8, 0, null, null, 27, 'div', [[
                            'class',
                            'd-flex align-items-center mt-5'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](9, 0, null, null, 3, 'div', [[
                            'class',
                            'symbol symbol-100 mr-5'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](10, 0, null, null, 1, 'div', [[
                            'class',
                            'symbol-label'
                        ]], [[
                            8,
                            'style',
                            2
                        ]], null, null, null, null)),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵeld'](12, 0, null, null, 0, 'i', [[
                            'class',
                            'symbol-badge bg-success'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](13, 0, null, null, 22, 'div', [[
                            'class',
                            'd-flex flex-column'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](14, 0, null, null, 2, 'span', [[
                            'class',
                            'font-weight-bold font-size-h5 text-dark-75 text-hover-primary'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](15, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, fn)),
                    t['ɵdid'](18, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, pn)),
                    t['ɵdid'](21, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵeld'](23, 0, null, null, 12, 'div', [[
                            'class',
                            'navi mt-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](24, 0, null, null, 8, 'span', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](25, 0, null, null, 7, 'span', [[
                            'class',
                            'navi-link p-0 pb-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](26, 0, null, null, 3, 'span', [[
                            'class',
                            'navi-icon mr-1'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](27, 16777216, null, null, 2, 'span', [
                        [
                            'cacheSVG',
                            'true'
                        ],
                        [
                            'class',
                            'svg-icon svg-icon-lg svg-icon-primary'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵprd'](512, null, o.SVGCacheService, o.SVGCacheService, [
                        [
                            2,
                            a.APP_BASE_HREF
                        ],
                        [
                            2,
                            a.PlatformLocation
                        ],
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        r.HttpClient,
                        r.HttpBackend,
                        t.RendererFactory2
                    ]),
                    t['ɵdid'](29, 737280, null, 0, d.InlineSVGDirective, [
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        o.SVGCacheService,
                        t.Renderer2,
                        c.InlineSVGService,
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        t.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ],
                        cacheSVG: [
                            1,
                            'cacheSVG'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](30, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-text text-muted text-hover-primary'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](31, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵeld'](33, 0, null, null, 2, 'button', [[
                            'class',
                            'btn btn-sm btn-light-primary font-weight-bolder py-2 px-5 cursor-pointer text-light'
                        ]], null, [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.logout() && t), t;
                    }, null, null)),
                    (l()(), t['ɵted'](34, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](36, 0, null, null, 0, 'div', [[
                            'class',
                            'separator separator-dashed mt-8 mb-5'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](37, 0, null, null, 22, 'div', [[
                            'class',
                            'navi navi-spacer-x-0 p-0'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](38, 0, null, null, 15, 'a', [
                        [
                            'class',
                            'navi-item cursor-pointer'
                        ],
                        [
                            'id',
                            'kt_quick_user_perfil_toggle'
                        ]
                    ], [
                        [
                            1,
                            'target',
                            0
                        ],
                        [
                            8,
                            'href',
                            4
                        ]
                    ], [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 39).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](39, 671744, null, 0, f.u, [
                        f.r,
                        f.a,
                        a.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    t['ɵpad'](40, 1),
                    (l()(), t['ɵeld'](41, 0, null, null, 12, 'div', [[
                            'class',
                            'navi-link'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](42, 0, null, null, 4, 'div', [[
                            'class',
                            'symbol symbol-40 bg-light mr-3'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](43, 0, null, null, 3, 'div', [[
                            'class',
                            'symbol-label'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](44, 16777216, null, null, 2, 'span', [
                        [
                            'cacheSVG',
                            'true'
                        ],
                        [
                            'class',
                            'svg-icon svg-icon-md svg-icon-success'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵprd'](512, null, o.SVGCacheService, o.SVGCacheService, [
                        [
                            2,
                            a.APP_BASE_HREF
                        ],
                        [
                            2,
                            a.PlatformLocation
                        ],
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        r.HttpClient,
                        r.HttpBackend,
                        t.RendererFactory2
                    ]),
                    t['ɵdid'](46, 737280, null, 0, d.InlineSVGDirective, [
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        o.SVGCacheService,
                        t.Renderer2,
                        c.InlineSVGService,
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        t.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ],
                        cacheSVG: [
                            1,
                            'cacheSVG'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](47, 0, null, null, 6, 'div', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](48, 0, null, null, 2, 'div', [[
                            'class',
                            'font-weight-bold'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](49, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](51, 0, null, null, 2, 'div', [[
                            'class',
                            'text-muted'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](52, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, hn)),
                    t['ɵdid'](55, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, gn)),
                    t['ɵdid'](58, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵeld'](60, 0, null, null, 0, 'div', [[
                            'class',
                            'separator separator-dashed my-7'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](61, 0, null, null, 44, 'div', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](62, 0, null, null, 2, 'h5', [[
                            'class',
                            'mb-5'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](63, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](65, 0, null, null, 11, 'div', [[
                            'class',
                            'd-flex align-items-center bg-light-warning rounded p-5 gutter-b'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](66, 0, null, null, 3, 'span', [[
                            'class',
                            'svg-icon svg-icon-warning mr-5'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](67, 16777216, null, null, 2, 'span', [
                        [
                            'cacheSVG',
                            'true'
                        ],
                        [
                            'class',
                            'svg-icon svg-icon-lg'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵprd'](512, null, o.SVGCacheService, o.SVGCacheService, [
                        [
                            2,
                            a.APP_BASE_HREF
                        ],
                        [
                            2,
                            a.PlatformLocation
                        ],
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        r.HttpClient,
                        r.HttpBackend,
                        t.RendererFactory2
                    ]),
                    t['ɵdid'](69, 737280, null, 0, d.InlineSVGDirective, [
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        o.SVGCacheService,
                        t.Renderer2,
                        c.InlineSVGService,
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        t.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ],
                        cacheSVG: [
                            1,
                            'cacheSVG'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](70, 0, null, null, 3, 'div', [[
                            'class',
                            'd-flex flex-column flex-grow-1 mr-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](71, 0, null, null, 2, 'span', [[
                            'class',
                            'font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](72, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](74, 0, null, null, 2, 'span', [[
                            'class',
                            'font-weight-bolder text-warning py-1 font-size-lg'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](75, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵeld'](77, 0, null, null, 11, 'div', [[
                            'class',
                            'd-flex align-items-center bg-light-success rounded p-5 gutter-b'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](78, 0, null, null, 3, 'span', [[
                            'class',
                            'svg-icon svg-icon-light mr-5'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](79, 16777216, null, null, 2, 'span', [
                        [
                            'cacheSVG',
                            'true'
                        ],
                        [
                            'class',
                            'svg-icon svg-icon-lg'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵprd'](512, null, o.SVGCacheService, o.SVGCacheService, [
                        [
                            2,
                            a.APP_BASE_HREF
                        ],
                        [
                            2,
                            a.PlatformLocation
                        ],
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        r.HttpClient,
                        r.HttpBackend,
                        t.RendererFactory2
                    ]),
                    t['ɵdid'](81, 737280, null, 0, d.InlineSVGDirective, [
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        o.SVGCacheService,
                        t.Renderer2,
                        c.InlineSVGService,
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        t.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ],
                        cacheSVG: [
                            1,
                            'cacheSVG'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](82, 0, null, null, 3, 'div', [[
                            'class',
                            'd-flex flex-column flex-grow-1 mr-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](83, 0, null, null, 2, 'span', [[
                            'class',
                            'font-weight-normal text-light text-hover-primary font-size-lg mb-1'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](84, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](86, 0, null, null, 2, 'span', [[
                            'class',
                            'font-weight-bolder text-light py-1 font-size-lg'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](87, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵeld'](89, 0, null, null, 11, 'div', [[
                            'class',
                            'd-flex align-items-center bg-light-danger rounded p-5 gutter-b'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](90, 0, null, null, 3, 'span', [[
                            'class',
                            'svg-icon svg-icon-primary mr-5'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](91, 16777216, null, null, 2, 'span', [
                        [
                            'cacheSVG',
                            'true'
                        ],
                        [
                            'class',
                            'svg-icon svg-icon-lg'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵprd'](512, null, o.SVGCacheService, o.SVGCacheService, [
                        [
                            2,
                            a.APP_BASE_HREF
                        ],
                        [
                            2,
                            a.PlatformLocation
                        ],
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        r.HttpClient,
                        r.HttpBackend,
                        t.RendererFactory2
                    ]),
                    t['ɵdid'](93, 737280, null, 0, d.InlineSVGDirective, [
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        o.SVGCacheService,
                        t.Renderer2,
                        c.InlineSVGService,
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        t.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ],
                        cacheSVG: [
                            1,
                            'cacheSVG'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](94, 0, null, null, 3, 'div', [[
                            'class',
                            'd-flex flex-column flex-grow-1 mr-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](95, 0, null, null, 2, 'span', [[
                            'class',
                            'font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](96, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](98, 0, null, null, 2, 'span', [[
                            'class',
                            'font-weight-bolder text-dark-75 py-1 font-size-lg'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](99, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵeld'](101, 0, null, null, 4, 'a', [
                        [
                            'class',
                            'btn btn-sm btn-light-primary font-weight-bolder py-2 px-5 cursor-pointer'
                        ],
                        [
                            'id',
                            'kt_quick_user_packages_toggle'
                        ]
                    ], [
                        [
                            1,
                            'target',
                            0
                        ],
                        [
                            8,
                            'href',
                            4
                        ]
                    ], [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 102).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](102, 671744, null, 0, f.u, [
                        f.r,
                        f.a,
                        a.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    t['ɵpad'](103, 1),
                    (l()(), t['ɵted'](104, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ])
                ], function (l, n) {
                    var e = n.component;
                    l(n, 18, 0, 1 == t['ɵunv'](n, 18, 0, t['ɵnov'](n, 19).transform(e.user$)).people_type), l(n, 21, 0, 0 == t['ɵunv'](n, 21, 0, t['ɵnov'](n, 22).transform(e.user$)).people_type), l(n, 29, 0, './assets/media/svg/icons/Communication/Mail-notification.svg', 'true');
                    var u = l(n, 40, 0, '/settings/profile');
                    l(n, 39, 0, u), l(n, 46, 0, './assets/media/svg/icons/General/Notification2.svg', 'true'), l(n, 55, 0, null == t['ɵunv'](n, 55, 0, t['ɵnov'](n, 56).transform(e.user$)).mobil_device), l(n, 58, 0, null != t['ɵunv'](n, 58, 0, t['ɵnov'](n, 59).transform(e.user$)).mobil_device), l(n, 69, 0, './assets/media/svg/icons/Communication/Write.svg', 'true'), l(n, 81, 0, './assets/media/svg/icons/Media/Shuffle.svg', 'true'), l(n, 93, 0, './assets/media/svg/icons/General/Notifications1.svg', 'true');
                    var i = l(n, 103, 0, '/packages');
                    l(n, 102, 0, i);
                }, function (l, n) {
                    var e = n.component;
                    l(n, 3, 0, t['ɵunv'](n, 3, 0, t['ɵnov'](n, 4).transform('USER.PROFILE'))), l(n, 10, 0, t['ɵinlineInterpolate'](1, 'background-image: url(\'', t['ɵunv'](n, 10, 0, t['ɵnov'](n, 11).transform(e.user$)).avatar, '\');')), l(n, 15, 0, t['ɵunv'](n, 15, 0, t['ɵnov'](n, 16).transform(e.user$)).name), l(n, 31, 0, t['ɵunv'](n, 31, 0, t['ɵnov'](n, 32).transform(e.user$)).email), l(n, 34, 0, t['ɵunv'](n, 34, 0, t['ɵnov'](n, 35).transform('USER.LOGOUT'))), l(n, 38, 0, t['ɵnov'](n, 39).target, t['ɵnov'](n, 39).href), l(n, 49, 0, t['ɵunv'](n, 49, 0, t['ɵnov'](n, 50).transform('USER.MYPROFILE'))), l(n, 52, 0, t['ɵunv'](n, 52, 0, t['ɵnov'](n, 53).transform('USER.SETTINGS'))), l(n, 63, 0, t['ɵunv'](n, 63, 0, t['ɵnov'](n, 64).transform('USER.AVAILABLEPRODUCTS'))), l(n, 72, 0, t['ɵunv'](n, 72, 0, t['ɵnov'](n, 73).transform('USER.DOCUMENTSTOSIGN'))), l(n, 75, 0, t['ɵunv'](n, 75, 0, t['ɵnov'](n, 76).transform(e.user$)).document), l(n, 84, 0, t['ɵunv'](n, 84, 0, t['ɵnov'](n, 85).transform('USER.DOCUMENTSTOSIGNCONST'))), l(n, 87, 0, t['ɵunv'](n, 87, 0, t['ɵnov'](n, 88).transform(e.user$)).document_n51), l(n, 96, 0, t['ɵunv'](n, 96, 0, t['ɵnov'](n, 97).transform('USER.NOTIFICAIONMAKE'))), l(n, 99, 0, t['ɵunv'](n, 99, 0, t['ɵnov'](n, 100).transform(e.user$)).notification), l(n, 101, 0, t['ɵnov'](n, 102).target, t['ɵnov'](n, 102).href), l(n, 104, 0, t['ɵunv'](n, 104, 0, t['ɵnov'](n, 105).transform('USER.BUYPACKAGE')));
                });
            }
            function vn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 4, 'div', [
                        [
                            'class',
                            'offcanvas p-10'
                        ],
                        [
                            'id',
                            'kt_quick_user'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵdid'](1, 278528, null, 0, a.NgClass, [
                        t.IterableDiffers,
                        t.KeyValueDiffers,
                        t.ElementRef,
                        t.Renderer2
                    ], {
                        klass: [
                            0,
                            'klass'
                        ],
                        ngClass: [
                            1,
                            'ngClass'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, mn)),
                    t['ɵdid'](3, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef])
                ], function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, 'offcanvas p-10', e.extrasUserOffcanvasDirection), l(n, 3, 0, t['ɵunv'](n, 3, 0, t['ɵnov'](n, 4).transform(e.user$)));
                }, null);
            }
            var bn = e('vMR4'), yn = function () {
                    var l;
                    return {
                        init: function (n) {
                            (l = Kl.a.getById(n)) && new bn.a(l, {
                                offset: 300,
                                speed: 600
                            });
                        },
                        getElement: function () {
                            return l;
                        }
                    };
                }();
            class wn {
                constructor() {
                }
                ngOnInit() {
                }
                ngAfterViewInit() {
                    Kl.a.ready(() => {
                        yn.init('kt_scrolltop');
                    });
                }
            }
            var Sn = t['ɵcrt']({
                encapsulation: 0,
                styles: [['']],
                data: {}
            });
            function Cn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, 'div', [
                        [
                            'class',
                            'scrolltop'
                        ],
                        [
                            'id',
                            'kt_scrolltop'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 16777216, null, null, 2, 'span', [
                        [
                            'cacheSVG',
                            'true'
                        ],
                        [
                            'class',
                            'svg-icon'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵprd'](512, null, o.SVGCacheService, o.SVGCacheService, [
                        [
                            2,
                            a.APP_BASE_HREF
                        ],
                        [
                            2,
                            a.PlatformLocation
                        ],
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        r.HttpClient,
                        r.HttpBackend,
                        t.RendererFactory2
                    ]),
                    t['ɵdid'](3, 737280, null, 0, d.InlineSVGDirective, [
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        o.SVGCacheService,
                        t.Renderer2,
                        c.InlineSVGService,
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        t.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ],
                        cacheSVG: [
                            1,
                            'cacheSVG'
                        ]
                    }, null)
                ], function (l, n) {
                    l(n, 3, 0, './assets/media/svg/icons/Navigation/Up-2.svg', 'true');
                }, null);
            }
            class kn {
                constructor(l) {
                    this.layout = l, this.headerLogo = '', this.asideSelfDisplay = !0, this.headerMenuSelfDisplay = !0, this.headerMobileClasses = '', this.headerMobileAttributes = {};
                }
                ngOnInit() {
                    this.headerMobileClasses = this.layout.getStringCSSClasses('header_mobile'), this.headerMobileAttributes = this.layout.getHTMLAttributes('header_mobile'), this.headerLogo = this.getLogoUrl(), this.asideSelfDisplay = this.layout.getProp('aside.self.display'), this.headerMenuSelfDisplay = this.layout.getProp('header.menu.self.display');
                }
                ngAfterViewInit() {
                }
                getLogoUrl() {
                    const l = this.layout.getProp('header.self.theme') || '', n = this.layout.getProp('brand.self.theme') || '';
                    let e = 'logo-light.png';
                    return this.asideSelfDisplay ? 'light' === n && (e = 'logo-dark.png') : 'light' === l && (e = 'logo-dark.png'), './assets/media/logos/' + e;
                }
            }
            var Rn = t['ɵcrt']({
                encapsulation: 0,
                styles: [['']],
                data: {}
            });
            function Dn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'button', [
                        [
                            'class',
                            'btn p-0 burger-icon burger-icon-left'
                        ],
                        [
                            'id',
                            'kt_aside_mobile_toggle'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 0, 'span', [], null, null, null, null, null))
                ], null, null);
            }
            function In(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'button', [
                        [
                            'class',
                            'btn p-0 burger-icon ml-4'
                        ],
                        [
                            'id',
                            'kt_header_mobile_toggle'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 0, 'span', [], null, null, null, null, null))
                ], null, null);
            }
            function xn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, 'a', [[
                            'routerLink',
                            '/'
                        ]], [
                        [
                            1,
                            'target',
                            0
                        ],
                        [
                            8,
                            'href',
                            4
                        ]
                    ], [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 1).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](1, 671744, null, 0, f.u, [
                        f.r,
                        f.a,
                        a.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](2, 0, null, null, 0, 'img', [[
                            'alt',
                            'Logo'
                        ]], [[
                            1,
                            'src',
                            4
                        ]], null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 8, 'div', [[
                            'class',
                            'd-flex align-items-center'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Dn)),
                    t['ɵdid'](5, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, In)),
                    t['ɵdid'](7, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](8, 0, null, null, 3, 'button', [
                        [
                            'class',
                            'btn btn-hover-text-primary p-0 ml-2'
                        ],
                        [
                            'id',
                            'kt_header_mobile_topbar_toggle'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](9, 16777216, null, null, 2, 'span', [
                        [
                            'cacheSVG',
                            'true'
                        ],
                        [
                            'class',
                            'svg-icon svg-icon-xl'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵprd'](512, null, o.SVGCacheService, o.SVGCacheService, [
                        [
                            2,
                            a.APP_BASE_HREF
                        ],
                        [
                            2,
                            a.PlatformLocation
                        ],
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        r.HttpClient,
                        r.HttpBackend,
                        t.RendererFactory2
                    ]),
                    t['ɵdid'](11, 737280, null, 0, d.InlineSVGDirective, [
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        o.SVGCacheService,
                        t.Renderer2,
                        c.InlineSVGService,
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        t.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ],
                        cacheSVG: [
                            1,
                            'cacheSVG'
                        ]
                    }, null)
                ], function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, '/'), l(n, 5, 0, e.asideSelfDisplay), l(n, 7, 0, e.headerMenuSelfDisplay), l(n, 11, 0, './assets/media/svg/icons/General/User.svg', 'true');
                }, function (l, n) {
                    var e = n.component;
                    l(n, 0, 0, t['ɵnov'](n, 1).target, t['ɵnov'](n, 1).href), l(n, 2, 0, e.headerLogo);
                });
            }
            var En = e('9AJC'), An = e('mrSG'), Tn = e('XNiG'), Vn = e('xgIS'), _n = (e('VRyK'), e('3UWI')), Ln = e('1G5W');
            function On(l) {
                return getComputedStyle(l);
            }
            function Pn(l, n) {
                for (var e in n) {
                    var t = n[e];
                    'number' == typeof t && (t += 'px'), l.style[e] = t;
                }
                return l;
            }
            function Mn(l) {
                var n = document.createElement('div');
                return n.className = l, n;
            }
            e('/uUt'), e('CqXF');
            var Hn = 'undefined' != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);
            function Gn(l, n) {
                if (!Hn)
                    throw new Error('No element matching method supported');
                return Hn.call(l, n);
            }
            function Bn(l) {
                l.remove ? l.remove() : l.parentNode && l.parentNode.removeChild(l);
            }
            function Nn(l, n) {
                return Array.prototype.filter.call(l.children, function (l) {
                    return Gn(l, n);
                });
            }
            var Fn = function (l) {
                    return 'ps__thumb-' + l;
                }, jn = function (l) {
                    return 'ps__rail-' + l;
                }, Kn = function (l) {
                    return 'ps--active-' + l;
                }, zn = function (l) {
                    return 'ps--scrolling-' + l;
                }, Un = {
                    x: null,
                    y: null
                };
            function qn(l, n) {
                var e = l.element.classList, t = zn(n);
                e.contains(t) ? clearTimeout(Un[n]) : e.add(t);
            }
            function Wn(l, n) {
                Un[n] = setTimeout(function () {
                    return l.isAlive && l.element.classList.remove(zn(n));
                }, l.settings.scrollingThreshold);
            }
            var Yn = function (l) {
                    this.element = l, this.handlers = {};
                }, Xn = { isEmpty: { configurable: !0 } };
            Yn.prototype.bind = function (l, n) {
                void 0 === this.handlers[l] && (this.handlers[l] = []), this.handlers[l].push(n), this.element.addEventListener(l, n, !1);
            }, Yn.prototype.unbind = function (l, n) {
                var e = this;
                this.handlers[l] = this.handlers[l].filter(function (t) {
                    return !(!n || t === n) || (e.element.removeEventListener(l, t, !1), !1);
                });
            }, Yn.prototype.unbindAll = function () {
                for (var l in this.handlers)
                    this.unbind(l);
            }, Xn.isEmpty.get = function () {
                var l = this;
                return Object.keys(this.handlers).every(function (n) {
                    return 0 === l.handlers[n].length;
                });
            }, Object.defineProperties(Yn.prototype, Xn);
            var $n = function () {
                this.eventElements = [];
            };
            function Zn(l) {
                if ('function' == typeof window.CustomEvent)
                    return new CustomEvent(l);
                var n = document.createEvent('CustomEvent');
                return n.initCustomEvent(l, !1, !1, void 0), n;
            }
            function Jn(l, n, e, t, u) {
                var i;
                if (void 0 === t && (t = !0), void 0 === u && (u = !1), 'top' === n)
                    i = [
                        'contentHeight',
                        'containerHeight',
                        'scrollTop',
                        'y',
                        'up',
                        'down'
                    ];
                else {
                    if ('left' !== n)
                        throw new Error('A proper axis should be provided');
                    i = [
                        'contentWidth',
                        'containerWidth',
                        'scrollLeft',
                        'x',
                        'left',
                        'right'
                    ];
                }
                !function (l, n, e, t, u) {
                    var i = e[0], o = e[1], a = e[2], s = e[3], r = e[4], d = e[5];
                    void 0 === t && (t = !0), void 0 === u && (u = !1);
                    var c = l.element;
                    l.reach[s] = null, c[a] < 1 && (l.reach[s] = 'start'), c[a] > l[i] - l[o] - 1 && (l.reach[s] = 'end'), n && (c.dispatchEvent(Zn('ps-scroll-' + s)), n < 0 ? c.dispatchEvent(Zn('ps-scroll-' + r)) : n > 0 && c.dispatchEvent(Zn('ps-scroll-' + d)), t && function (l, n) {
                        qn(l, n), Wn(l, n);
                    }(l, s)), l.reach[s] && (n || u) && c.dispatchEvent(Zn('ps-' + s + '-reach-' + l.reach[s]));
                }(l, e, i, t, u);
            }
            function Qn(l) {
                return parseInt(l, 10) || 0;
            }
            $n.prototype.eventElement = function (l) {
                var n = this.eventElements.filter(function (n) {
                    return n.element === l;
                })[0];
                return n || (n = new Yn(l), this.eventElements.push(n)), n;
            }, $n.prototype.bind = function (l, n, e) {
                this.eventElement(l).bind(n, e);
            }, $n.prototype.unbind = function (l, n, e) {
                var t = this.eventElement(l);
                t.unbind(n, e), t.isEmpty && this.eventElements.splice(this.eventElements.indexOf(t), 1);
            }, $n.prototype.unbindAll = function () {
                this.eventElements.forEach(function (l) {
                    return l.unbindAll();
                }), this.eventElements = [];
            }, $n.prototype.once = function (l, n, e) {
                var t = this.eventElement(l), u = function (l) {
                        t.unbind(n, u), e(l);
                    };
                t.bind(n, u);
            };
            var le = {
                isWebKit: 'undefined' != typeof document && 'WebkitAppearance' in document.documentElement.style,
                supportsTouch: 'undefined' != typeof window && ('ontouchstart' in window || 'maxTouchPoints' in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch),
                supportsIePointer: 'undefined' != typeof navigator && navigator.msMaxTouchPoints,
                isChrome: 'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
            };
            function ne(l) {
                var n = l.element, e = Math.floor(n.scrollTop), t = n.getBoundingClientRect();
                l.containerWidth = Math.ceil(t.width), l.containerHeight = Math.ceil(t.height), l.contentWidth = n.scrollWidth, l.contentHeight = n.scrollHeight, n.contains(l.scrollbarXRail) || (Nn(n, jn('x')).forEach(function (l) {
                    return Bn(l);
                }), n.appendChild(l.scrollbarXRail)), n.contains(l.scrollbarYRail) || (Nn(n, jn('y')).forEach(function (l) {
                    return Bn(l);
                }), n.appendChild(l.scrollbarYRail)), !l.settings.suppressScrollX && l.containerWidth + l.settings.scrollXMarginOffset < l.contentWidth ? (l.scrollbarXActive = !0, l.railXWidth = l.containerWidth - l.railXMarginWidth, l.railXRatio = l.containerWidth / l.railXWidth, l.scrollbarXWidth = ee(l, Qn(l.railXWidth * l.containerWidth / l.contentWidth)), l.scrollbarXLeft = Qn((l.negativeScrollAdjustment + n.scrollLeft) * (l.railXWidth - l.scrollbarXWidth) / (l.contentWidth - l.containerWidth))) : l.scrollbarXActive = !1, !l.settings.suppressScrollY && l.containerHeight + l.settings.scrollYMarginOffset < l.contentHeight ? (l.scrollbarYActive = !0, l.railYHeight = l.containerHeight - l.railYMarginHeight, l.railYRatio = l.containerHeight / l.railYHeight, l.scrollbarYHeight = ee(l, Qn(l.railYHeight * l.containerHeight / l.contentHeight)), l.scrollbarYTop = Qn(e * (l.railYHeight - l.scrollbarYHeight) / (l.contentHeight - l.containerHeight))) : l.scrollbarYActive = !1, l.scrollbarXLeft >= l.railXWidth - l.scrollbarXWidth && (l.scrollbarXLeft = l.railXWidth - l.scrollbarXWidth), l.scrollbarYTop >= l.railYHeight - l.scrollbarYHeight && (l.scrollbarYTop = l.railYHeight - l.scrollbarYHeight), function (l, n) {
                    var e = { width: n.railXWidth }, t = Math.floor(l.scrollTop);
                    e.left = n.isRtl ? n.negativeScrollAdjustment + l.scrollLeft + n.containerWidth - n.contentWidth : l.scrollLeft, n.isScrollbarXUsingBottom ? e.bottom = n.scrollbarXBottom - t : e.top = n.scrollbarXTop + t, Pn(n.scrollbarXRail, e);
                    var u = {
                        top: t,
                        height: n.railYHeight
                    };
                    n.isScrollbarYUsingRight ? u.right = n.isRtl ? n.contentWidth - (n.negativeScrollAdjustment + l.scrollLeft) - n.scrollbarYRight - n.scrollbarYOuterWidth - 9 : n.scrollbarYRight - l.scrollLeft : u.left = n.isRtl ? n.negativeScrollAdjustment + l.scrollLeft + 2 * n.containerWidth - n.contentWidth - n.scrollbarYLeft - n.scrollbarYOuterWidth : n.scrollbarYLeft + l.scrollLeft, Pn(n.scrollbarYRail, u), Pn(n.scrollbarX, {
                        left: n.scrollbarXLeft,
                        width: n.scrollbarXWidth - n.railBorderXWidth
                    }), Pn(n.scrollbarY, {
                        top: n.scrollbarYTop,
                        height: n.scrollbarYHeight - n.railBorderYWidth
                    });
                }(n, l), l.scrollbarXActive ? n.classList.add(Kn('x')) : (n.classList.remove(Kn('x')), l.scrollbarXWidth = 0, l.scrollbarXLeft = 0, n.scrollLeft = !0 === l.isRtl ? l.contentWidth : 0), l.scrollbarYActive ? n.classList.add(Kn('y')) : (n.classList.remove(Kn('y')), l.scrollbarYHeight = 0, l.scrollbarYTop = 0, n.scrollTop = 0);
            }
            function ee(l, n) {
                return l.settings.minScrollbarLength && (n = Math.max(n, l.settings.minScrollbarLength)), l.settings.maxScrollbarLength && (n = Math.min(n, l.settings.maxScrollbarLength)), n;
            }
            function te(l, n) {
                var e = n[0], t = n[1], u = n[2], i = n[3], o = n[4], a = n[5], s = n[6], r = n[7], d = n[8], c = l.element, f = null, p = null, h = null;
                function g(n) {
                    n.touches && n.touches[0] && (n[u] = n.touches[0].pageY), c[s] = f + h * (n[u] - p), qn(l, r), ne(l), n.stopPropagation(), n.preventDefault();
                }
                function m() {
                    Wn(l, r), l[d].classList.remove('ps--clicking'), l.event.unbind(l.ownerDocument, 'mousemove', g);
                }
                function v(n, o) {
                    f = c[s], o && n.touches && (n[u] = n.touches[0].pageY), p = n[u], h = (l[t] - l[e]) / (l[i] - l[a]), o ? l.event.bind(l.ownerDocument, 'touchmove', g) : (l.event.bind(l.ownerDocument, 'mousemove', g), l.event.once(l.ownerDocument, 'mouseup', m), n.preventDefault()), l[d].classList.add('ps--clicking'), n.stopPropagation();
                }
                l.event.bind(l[o], 'mousedown', function (l) {
                    v(l);
                }), l.event.bind(l[o], 'touchstart', function (l) {
                    v(l, !0);
                });
            }
            var ue = {
                    'click-rail': function (l) {
                        l.event.bind(l.scrollbarY, 'mousedown', function (l) {
                            return l.stopPropagation();
                        }), l.event.bind(l.scrollbarYRail, 'mousedown', function (n) {
                            var e = n.pageY - window.pageYOffset - l.scrollbarYRail.getBoundingClientRect().top;
                            l.element.scrollTop += (e > l.scrollbarYTop ? 1 : -1) * l.containerHeight, ne(l), n.stopPropagation();
                        }), l.event.bind(l.scrollbarX, 'mousedown', function (l) {
                            return l.stopPropagation();
                        }), l.event.bind(l.scrollbarXRail, 'mousedown', function (n) {
                            var e = n.pageX - window.pageXOffset - l.scrollbarXRail.getBoundingClientRect().left;
                            l.element.scrollLeft += (e > l.scrollbarXLeft ? 1 : -1) * l.containerWidth, ne(l), n.stopPropagation();
                        });
                    },
                    'drag-thumb': function (l) {
                        te(l, [
                            'containerWidth',
                            'contentWidth',
                            'pageX',
                            'railXWidth',
                            'scrollbarX',
                            'scrollbarXWidth',
                            'scrollLeft',
                            'x',
                            'scrollbarXRail'
                        ]), te(l, [
                            'containerHeight',
                            'contentHeight',
                            'pageY',
                            'railYHeight',
                            'scrollbarY',
                            'scrollbarYHeight',
                            'scrollTop',
                            'y',
                            'scrollbarYRail'
                        ]);
                    },
                    keyboard: function (l) {
                        var n = l.element;
                        l.event.bind(l.ownerDocument, 'keydown', function (e) {
                            if (!(e.isDefaultPrevented && e.isDefaultPrevented() || e.defaultPrevented) && (Gn(n, ':hover') || Gn(l.scrollbarX, ':focus') || Gn(l.scrollbarY, ':focus'))) {
                                var t, u = document.activeElement ? document.activeElement : l.ownerDocument.activeElement;
                                if (u) {
                                    if ('IFRAME' === u.tagName)
                                        u = u.contentDocument.activeElement;
                                    else
                                        for (; u.shadowRoot;)
                                            u = u.shadowRoot.activeElement;
                                    if (Gn(t = u, 'input,[contenteditable]') || Gn(t, 'select,[contenteditable]') || Gn(t, 'textarea,[contenteditable]') || Gn(t, 'button,[contenteditable]'))
                                        return;
                                }
                                var i = 0, o = 0;
                                switch (e.which) {
                                case 37:
                                    i = e.metaKey ? -l.contentWidth : e.altKey ? -l.containerWidth : -30;
                                    break;
                                case 38:
                                    o = e.metaKey ? l.contentHeight : e.altKey ? l.containerHeight : 30;
                                    break;
                                case 39:
                                    i = e.metaKey ? l.contentWidth : e.altKey ? l.containerWidth : 30;
                                    break;
                                case 40:
                                    o = e.metaKey ? -l.contentHeight : e.altKey ? -l.containerHeight : -30;
                                    break;
                                case 32:
                                    o = e.shiftKey ? l.containerHeight : -l.containerHeight;
                                    break;
                                case 33:
                                    o = l.containerHeight;
                                    break;
                                case 34:
                                    o = -l.containerHeight;
                                    break;
                                case 36:
                                    o = l.contentHeight;
                                    break;
                                case 35:
                                    o = -l.contentHeight;
                                    break;
                                default:
                                    return;
                                }
                                l.settings.suppressScrollX && 0 !== i || l.settings.suppressScrollY && 0 !== o || (n.scrollTop -= o, n.scrollLeft += i, ne(l), function (e, t) {
                                    var u = Math.floor(n.scrollTop);
                                    if (0 === e) {
                                        if (!l.scrollbarYActive)
                                            return !1;
                                        if (0 === u && t > 0 || u >= l.contentHeight - l.containerHeight && t < 0)
                                            return !l.settings.wheelPropagation;
                                    }
                                    var i = n.scrollLeft;
                                    if (0 === t) {
                                        if (!l.scrollbarXActive)
                                            return !1;
                                        if (0 === i && e < 0 || i >= l.contentWidth - l.containerWidth && e > 0)
                                            return !l.settings.wheelPropagation;
                                    }
                                    return !0;
                                }(i, o) && e.preventDefault());
                            }
                        });
                    },
                    wheel: function (l) {
                        var n = l.element;
                        function e(e) {
                            var t = function (l) {
                                    var n = l.deltaX, e = -1 * l.deltaY;
                                    return void 0 !== n && void 0 !== e || (n = -1 * l.wheelDeltaX / 6, e = l.wheelDeltaY / 6), l.deltaMode && 1 === l.deltaMode && (n *= 10, e *= 10), n != n && e != e && (n = 0, e = l.wheelDelta), l.shiftKey ? [
                                        -e,
                                        -n
                                    ] : [
                                        n,
                                        e
                                    ];
                                }(e), u = t[0], i = t[1];
                            if (!function (l, e, t) {
                                    if (!le.isWebKit && n.querySelector('select:focus'))
                                        return !0;
                                    if (!n.contains(l))
                                        return !1;
                                    for (var u = l; u && u !== n;) {
                                        if (u.classList.contains('ps__child--consume'))
                                            return !0;
                                        var i = On(u);
                                        if (t && i.overflowY.match(/(scroll|auto)/)) {
                                            var o = u.scrollHeight - u.clientHeight;
                                            if (o > 0 && (u.scrollTop > 0 && t < 0 || u.scrollTop < o && t > 0))
                                                return !0;
                                        }
                                        if (e && i.overflowX.match(/(scroll|auto)/)) {
                                            var a = u.scrollWidth - u.clientWidth;
                                            if (a > 0 && (u.scrollLeft > 0 && e < 0 || u.scrollLeft < a && e > 0))
                                                return !0;
                                        }
                                        u = u.parentNode;
                                    }
                                    return !1;
                                }(e.target, u, i)) {
                                var o = !1;
                                l.settings.useBothWheelAxes ? l.scrollbarYActive && !l.scrollbarXActive ? (i ? n.scrollTop -= i * l.settings.wheelSpeed : n.scrollTop += u * l.settings.wheelSpeed, o = !0) : l.scrollbarXActive && !l.scrollbarYActive && (u ? n.scrollLeft += u * l.settings.wheelSpeed : n.scrollLeft -= i * l.settings.wheelSpeed, o = !0) : (n.scrollTop -= i * l.settings.wheelSpeed, n.scrollLeft += u * l.settings.wheelSpeed), ne(l), (o = o || function (e, t) {
                                    var u = Math.floor(n.scrollTop), i = 0 === n.scrollTop, o = u + n.offsetHeight === n.scrollHeight, a = 0 === n.scrollLeft, s = n.scrollLeft + n.offsetWidth === n.scrollWidth;
                                    return !(Math.abs(t) > Math.abs(e) ? i || o : a || s) || !l.settings.wheelPropagation;
                                }(u, i)) && !e.ctrlKey && (e.stopPropagation(), e.preventDefault());
                            }
                        }
                        void 0 !== window.onwheel ? l.event.bind(n, 'wheel', e) : void 0 !== window.onmousewheel && l.event.bind(n, 'mousewheel', e);
                    },
                    touch: function (l) {
                        if (le.supportsTouch || le.supportsIePointer) {
                            var n = l.element, e = {}, t = 0, u = {}, i = null;
                            le.supportsTouch ? (l.event.bind(n, 'touchstart', r), l.event.bind(n, 'touchmove', d), l.event.bind(n, 'touchend', c)) : le.supportsIePointer && (window.PointerEvent ? (l.event.bind(n, 'pointerdown', r), l.event.bind(n, 'pointermove', d), l.event.bind(n, 'pointerup', c)) : window.MSPointerEvent && (l.event.bind(n, 'MSPointerDown', r), l.event.bind(n, 'MSPointerMove', d), l.event.bind(n, 'MSPointerUp', c)));
                        }
                        function o(e, t) {
                            n.scrollTop -= t, n.scrollLeft -= e, ne(l);
                        }
                        function a(l) {
                            return l.targetTouches ? l.targetTouches[0] : l;
                        }
                        function s(l) {
                            return !(l.pointerType && 'pen' === l.pointerType && 0 === l.buttons || (!l.targetTouches || 1 !== l.targetTouches.length) && (!l.pointerType || 'mouse' === l.pointerType || l.pointerType === l.MSPOINTER_TYPE_MOUSE));
                        }
                        function r(l) {
                            if (s(l)) {
                                var n = a(l);
                                e.pageX = n.pageX, e.pageY = n.pageY, t = new Date().getTime(), null !== i && clearInterval(i);
                            }
                        }
                        function d(i) {
                            if (s(i)) {
                                var r = a(i), d = {
                                        pageX: r.pageX,
                                        pageY: r.pageY
                                    }, c = d.pageX - e.pageX, f = d.pageY - e.pageY;
                                if (function (l, e, t) {
                                        if (!n.contains(l))
                                            return !1;
                                        for (var u = l; u && u !== n;) {
                                            if (u.classList.contains('ps__child--consume'))
                                                return !0;
                                            var i = On(u);
                                            if (t && i.overflowY.match(/(scroll|auto)/)) {
                                                var o = u.scrollHeight - u.clientHeight;
                                                if (o > 0 && (u.scrollTop > 0 && t < 0 || u.scrollTop < o && t > 0))
                                                    return !0;
                                            }
                                            if (e && i.overflowX.match(/(scroll|auto)/)) {
                                                var a = u.scrollWidth - u.clientWidth;
                                                if (a > 0 && (u.scrollLeft > 0 && e < 0 || u.scrollLeft < a && e > 0))
                                                    return !0;
                                            }
                                            u = u.parentNode;
                                        }
                                        return !1;
                                    }(i.target, c, f))
                                    return;
                                o(c, f), e = d;
                                var p = new Date().getTime(), h = p - t;
                                h > 0 && (u.x = c / h, u.y = f / h, t = p), function (e, t) {
                                    var u = Math.floor(n.scrollTop), i = n.scrollLeft, o = Math.abs(e), a = Math.abs(t);
                                    if (a > o) {
                                        if (t < 0 && u === l.contentHeight - l.containerHeight || t > 0 && 0 === u)
                                            return 0 === window.scrollY && t > 0 && le.isChrome;
                                    } else if (o > a && (e < 0 && i === l.contentWidth - l.containerWidth || e > 0 && 0 === i))
                                        return !0;
                                    return !0;
                                }(c, f) && i.preventDefault();
                            }
                        }
                        function c() {
                            l.settings.swipeEasing && (clearInterval(i), i = setInterval(function () {
                                l.isInitialized ? clearInterval(i) : u.x || u.y ? Math.abs(u.x) < 0.01 && Math.abs(u.y) < 0.01 ? clearInterval(i) : (o(30 * u.x, 30 * u.y), u.x *= 0.8, u.y *= 0.8) : clearInterval(i);
                            }, 10));
                        }
                    }
                }, ie = function (l, n) {
                    var e = this;
                    if (void 0 === n && (n = {}), 'string' == typeof l && (l = document.querySelector(l)), !l || !l.nodeName)
                        throw new Error('no element is specified to initialize PerfectScrollbar');
                    for (var t in this.element = l, l.classList.add('ps'), this.settings = {
                            handlers: [
                                'click-rail',
                                'drag-thumb',
                                'keyboard',
                                'wheel',
                                'touch'
                            ],
                            maxScrollbarLength: null,
                            minScrollbarLength: null,
                            scrollingThreshold: 1000,
                            scrollXMarginOffset: 0,
                            scrollYMarginOffset: 0,
                            suppressScrollX: !1,
                            suppressScrollY: !1,
                            swipeEasing: !0,
                            useBothWheelAxes: !1,
                            wheelPropagation: !0,
                            wheelSpeed: 1
                        }, n)
                        this.settings[t] = n[t];
                    this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;
                    var u, i, o = function () {
                            return l.classList.add('ps--focus');
                        }, a = function () {
                            return l.classList.remove('ps--focus');
                        };
                    this.isRtl = 'rtl' === On(l).direction, !0 === this.isRtl && l.classList.add('ps__rtl'), this.isNegativeScroll = (i = l.scrollLeft, l.scrollLeft = -1, u = l.scrollLeft < 0, l.scrollLeft = i, u), this.negativeScrollAdjustment = this.isNegativeScroll ? l.scrollWidth - l.clientWidth : 0, this.event = new $n(), this.ownerDocument = l.ownerDocument || document, this.scrollbarXRail = Mn(jn('x')), l.appendChild(this.scrollbarXRail), this.scrollbarX = Mn(Fn('x')), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute('tabindex', 0), this.event.bind(this.scrollbarX, 'focus', o), this.event.bind(this.scrollbarX, 'blur', a), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
                    var s = On(this.scrollbarXRail);
                    this.scrollbarXBottom = parseInt(s.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = Qn(s.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = Qn(s.borderLeftWidth) + Qn(s.borderRightWidth), Pn(this.scrollbarXRail, { display: 'block' }), this.railXMarginWidth = Qn(s.marginLeft) + Qn(s.marginRight), Pn(this.scrollbarXRail, { display: '' }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = Mn(jn('y')), l.appendChild(this.scrollbarYRail), this.scrollbarY = Mn(Fn('y')), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute('tabindex', 0), this.event.bind(this.scrollbarY, 'focus', o), this.event.bind(this.scrollbarY, 'blur', a), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
                    var r = On(this.scrollbarYRail);
                    this.scrollbarYRight = parseInt(r.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = Qn(r.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? function (l) {
                        var n = On(l);
                        return Qn(n.width) + Qn(n.paddingLeft) + Qn(n.paddingRight) + Qn(n.borderLeftWidth) + Qn(n.borderRightWidth);
                    }(this.scrollbarY) : null, this.railBorderYWidth = Qn(r.borderTopWidth) + Qn(r.borderBottomWidth), Pn(this.scrollbarYRail, { display: 'block' }), this.railYMarginHeight = Qn(r.marginTop) + Qn(r.marginBottom), Pn(this.scrollbarYRail, { display: '' }), this.railYHeight = null, this.railYRatio = null, this.reach = {
                        x: l.scrollLeft <= 0 ? 'start' : l.scrollLeft >= this.contentWidth - this.containerWidth ? 'end' : null,
                        y: l.scrollTop <= 0 ? 'start' : l.scrollTop >= this.contentHeight - this.containerHeight ? 'end' : null
                    }, this.isAlive = !0, this.settings.handlers.forEach(function (l) {
                        return ue[l](e);
                    }), this.lastScrollTop = Math.floor(l.scrollTop), this.lastScrollLeft = l.scrollLeft, this.event.bind(this.element, 'scroll', function (l) {
                        return e.onScroll(l);
                    }), ne(this);
                };
            ie.prototype.update = function () {
                this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, Pn(this.scrollbarXRail, { display: 'block' }), Pn(this.scrollbarYRail, { display: 'block' }), this.railXMarginWidth = Qn(On(this.scrollbarXRail).marginLeft) + Qn(On(this.scrollbarXRail).marginRight), this.railYMarginHeight = Qn(On(this.scrollbarYRail).marginTop) + Qn(On(this.scrollbarYRail).marginBottom), Pn(this.scrollbarXRail, { display: 'none' }), Pn(this.scrollbarYRail, { display: 'none' }), ne(this), Jn(this, 'top', 0, !1, !0), Jn(this, 'left', 0, !1, !0), Pn(this.scrollbarXRail, { display: '' }), Pn(this.scrollbarYRail, { display: '' }));
            }, ie.prototype.onScroll = function (l) {
                this.isAlive && (ne(this), Jn(this, 'top', this.element.scrollTop - this.lastScrollTop), Jn(this, 'left', this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft);
            }, ie.prototype.destroy = function () {
                this.isAlive && (this.event.unbindAll(), Bn(this.scrollbarX), Bn(this.scrollbarY), Bn(this.scrollbarXRail), Bn(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1);
            }, ie.prototype.removePsClasses = function () {
                this.element.className = this.element.className.split(' ').filter(function (l) {
                    return !l.match(/^ps([-_].+|)$/);
                }).join(' ');
            };
            var oe = ie, ae = e('bdgK');
            const se = new t.InjectionToken('PERFECT_SCROLLBAR_CONFIG');
            class re {
                constructor(l, n, e, t) {
                    this.x = l, this.y = n, this.w = e, this.h = t;
                }
            }
            class de {
                constructor(l, n) {
                    this.x = l, this.y = n;
                }
            }
            const ce = [
                'psScrollY',
                'psScrollX',
                'psScrollUp',
                'psScrollDown',
                'psScrollLeft',
                'psScrollRight',
                'psYReachEnd',
                'psYReachStart',
                'psXReachEnd',
                'psXReachStart'
            ];
            class fe {
                constructor(l = {}) {
                    this.assign(l);
                }
                assign(l = {}) {
                    for (const n in l)
                        this[n] = l[n];
                }
            }
            let pe = (() => {
                    let l = class {
                        constructor(l, n, e, u, i) {
                            this.zone = l, this.differs = n, this.elementRef = e, this.platformId = u, this.defaults = i, this.instance = null, this.ro = null, this.timeout = null, this.animation = null, this.configDiff = null, this.ngDestroy = new Tn.a(), this.disabled = !1, this.psScrollY = new t.EventEmitter(), this.psScrollX = new t.EventEmitter(), this.psScrollUp = new t.EventEmitter(), this.psScrollDown = new t.EventEmitter(), this.psScrollLeft = new t.EventEmitter(), this.psScrollRight = new t.EventEmitter(), this.psYReachEnd = new t.EventEmitter(), this.psYReachStart = new t.EventEmitter(), this.psXReachEnd = new t.EventEmitter(), this.psXReachStart = new t.EventEmitter();
                        }
                        ngOnInit() {
                            if (!this.disabled && Object(a.isPlatformBrowser)(this.platformId)) {
                                const l = new fe(this.defaults);
                                l.assign(this.config), this.zone.runOutsideAngular(() => {
                                    this.instance = new oe(this.elementRef.nativeElement, l);
                                }), this.configDiff || (this.configDiff = this.differs.find(this.config || {}).create(), this.configDiff.diff(this.config || {})), this.zone.runOutsideAngular(() => {
                                    this.ro = new ae.a(() => {
                                        this.update();
                                    }), this.elementRef.nativeElement.children[0] && this.ro.observe(this.elementRef.nativeElement.children[0]), this.ro.observe(this.elementRef.nativeElement);
                                }), this.zone.runOutsideAngular(() => {
                                    ce.forEach(l => {
                                        const n = l.replace(/([A-Z])/g, l => '-' + l.toLowerCase());
                                        Object(Vn.a)(this.elementRef.nativeElement, n).pipe(Object(_n.a)(20), Object(Ln.a)(this.ngDestroy)).subscribe(n => {
                                            this[l].emit(n);
                                        });
                                    });
                                });
                            }
                        }
                        ngOnDestroy() {
                            Object(a.isPlatformBrowser)(this.platformId) && (this.ngDestroy.next(), this.ngDestroy.complete(), this.ro && this.ro.disconnect(), this.timeout && 'undefined' != typeof window && window.clearTimeout(this.timeout), this.zone.runOutsideAngular(() => {
                                this.instance && this.instance.destroy();
                            }), this.instance = null);
                        }
                        ngDoCheck() {
                            !this.disabled && this.configDiff && Object(a.isPlatformBrowser)(this.platformId) && this.configDiff.diff(this.config || {}) && (this.ngOnDestroy(), this.ngOnInit());
                        }
                        ngOnChanges(l) {
                            l.disabled && !l.disabled.isFirstChange() && Object(a.isPlatformBrowser)(this.platformId) && l.disabled.currentValue !== l.disabled.previousValue && (!0 === l.disabled.currentValue ? this.ngOnDestroy() : !1 === l.disabled.currentValue && this.ngOnInit());
                        }
                        ps() {
                            return this.instance;
                        }
                        update() {
                            'undefined' != typeof window && (this.timeout && window.clearTimeout(this.timeout), this.timeout = window.setTimeout(() => {
                                if (!this.disabled && this.configDiff)
                                    try {
                                        this.zone.runOutsideAngular(() => {
                                            this.instance && this.instance.update();
                                        });
                                    } catch (l) {
                                    }
                            }, 0));
                        }
                        geometry(l = 'scroll') {
                            return new re(this.elementRef.nativeElement[l + 'Left'], this.elementRef.nativeElement[l + 'Top'], this.elementRef.nativeElement[l + 'Width'], this.elementRef.nativeElement[l + 'Height']);
                        }
                        position(l = !1) {
                            return !l && this.instance ? new de(this.instance.reach.x || 0, this.instance.reach.y || 0) : new de(this.elementRef.nativeElement.scrollLeft, this.elementRef.nativeElement.scrollTop);
                        }
                        scrollable(l = 'any') {
                            const n = this.elementRef.nativeElement;
                            return 'any' === l ? n.classList.contains('ps--active-x') || n.classList.contains('ps--active-y') : 'both' === l ? n.classList.contains('ps--active-x') && n.classList.contains('ps--active-y') : n.classList.contains('ps--active-' + l);
                        }
                        scrollTo(l, n, e) {
                            this.disabled || (null == n && null == e ? this.animateScrolling('scrollTop', l, e) : (null != l && this.animateScrolling('scrollLeft', l, e), null != n && this.animateScrolling('scrollTop', n, e)));
                        }
                        scrollToX(l, n) {
                            this.animateScrolling('scrollLeft', l, n);
                        }
                        scrollToY(l, n) {
                            this.animateScrolling('scrollTop', l, n);
                        }
                        scrollToTop(l, n) {
                            this.animateScrolling('scrollTop', l || 0, n);
                        }
                        scrollToLeft(l, n) {
                            this.animateScrolling('scrollLeft', l || 0, n);
                        }
                        scrollToRight(l, n) {
                            this.animateScrolling('scrollLeft', this.elementRef.nativeElement.scrollWidth - this.elementRef.nativeElement.clientWidth - (l || 0), n);
                        }
                        scrollToBottom(l, n) {
                            this.animateScrolling('scrollTop', this.elementRef.nativeElement.scrollHeight - this.elementRef.nativeElement.clientHeight - (l || 0), n);
                        }
                        scrollToElement(l, n, e) {
                            const t = this.elementRef.nativeElement.querySelector(l);
                            if (t) {
                                const l = t.getBoundingClientRect(), u = this.elementRef.nativeElement.getBoundingClientRect();
                                this.elementRef.nativeElement.classList.contains('ps--active-x') && this.animateScrolling('scrollLeft', l.left - u.left + this.elementRef.nativeElement.scrollLeft + (n || 0), e), this.elementRef.nativeElement.classList.contains('ps--active-y') && this.animateScrolling('scrollTop', l.top - u.top + this.elementRef.nativeElement.scrollTop + (n || 0), e);
                            }
                        }
                        animateScrolling(l, n, e) {
                            if (this.animation && (window.cancelAnimationFrame(this.animation), this.animation = null), e && 'undefined' != typeof window) {
                                if (n !== this.elementRef.nativeElement[l]) {
                                    let t = 0, u = 0, i = performance.now(), o = this.elementRef.nativeElement[l];
                                    const a = (o - n) / 2, s = r => {
                                            u += Math.PI / (e / (r - i)), t = Math.round(n + a + a * Math.cos(u)), this.elementRef.nativeElement[l] === o && (u >= Math.PI ? this.animateScrolling(l, n, 0) : (this.elementRef.nativeElement[l] = t, o = this.elementRef.nativeElement[l], i = r, this.animation = window.requestAnimationFrame(s)));
                                        };
                                    window.requestAnimationFrame(s);
                                }
                            } else
                                this.elementRef.nativeElement[l] = n;
                        }
                    };
                    return l.ɵfac = function (n) {
                        return new (n || l)(t['ɵɵdirectiveInject'](t.NgZone), t['ɵɵdirectiveInject'](t.KeyValueDiffers), t['ɵɵdirectiveInject'](t.ElementRef), t['ɵɵdirectiveInject'](t.PLATFORM_ID), t['ɵɵdirectiveInject'](se, 8));
                    }, l.ɵdir = t['ɵɵdefineDirective']({
                        type: l,
                        selectors: [[
                                '',
                                'perfectScrollbar',
                                ''
                            ]],
                        inputs: {
                            disabled: 'disabled',
                            config: [
                                'perfectScrollbar',
                                'config'
                            ]
                        },
                        outputs: {
                            psScrollY: 'psScrollY',
                            psScrollX: 'psScrollX',
                            psScrollUp: 'psScrollUp',
                            psScrollDown: 'psScrollDown',
                            psScrollLeft: 'psScrollLeft',
                            psScrollRight: 'psScrollRight',
                            psYReachEnd: 'psYReachEnd',
                            psYReachStart: 'psYReachStart',
                            psXReachEnd: 'psXReachEnd',
                            psXReachStart: 'psXReachStart'
                        },
                        exportAs: ['ngxPerfectScrollbar'],
                        features: [t['ɵɵNgOnChangesFeature']]
                    }), l = Object(An.b)([
                        Object(An.d)(3, Object(t.Inject)(t.PLATFORM_ID)),
                        Object(An.d)(4, Object(t.Optional)()),
                        Object(An.d)(4, Object(t.Inject)(se))
                    ], l), l;
                })(), he = (() => {
                    let l = class {
                    };
                    return l.ɵmod = t['ɵɵdefineNgModule']({ type: l }), l.ɵinj = t['ɵɵdefineInjector']({
                        factory: function (n) {
                            return new (n || l)();
                        },
                        imports: [
                            [a.CommonModule],
                            a.CommonModule
                        ]
                    }), l;
                })();
            var ge = e('XXMa'), me = e('nBqb');
            class ve {
                constructor(l, n, e) {
                    this.layout = l, this.store = n, this.router = e, this.extrasCartDropdownStyle = 'light';
                }
                ngOnInit() {
                    this.extrasCartDropdownStyle = this.layout.getProp('extras.cart.dropdown.style'), this.packages$ = this.store.select(ge.c), this.cart$ = this.store.select(ge.a);
                }
                increase(l) {
                    this.store.dispatch(Object(me.h)({ packId: l }));
                }
                decrease(l, n) {
                    this.store.dispatch(1 == n ? Object(me.e)({ packId: l }) : Object(me.d)({ packId: l }));
                }
                goToCheckout() {
                    this.router.navigateByUrl('/check-out');
                }
            }
            var be = t['ɵcrt']({
                encapsulation: 0,
                styles: [['']],
                data: {}
            });
            function ye(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 8, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 7, 'div', [[
                            'class',
                            'd-flex align-items-center p-10 rounded-top bg-light'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 1, 'span', [[
                            'class',
                            'btn btn-md btn-icon bg-light-success mr-4'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-shopping-cart-1 text-success'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](4, 0, null, null, 1, 'h4', [[
                            'class',
                            'flex-grow-1 m-0 mr-3'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Mi carrito'])),
                    (l()(), t['ɵeld'](6, 0, null, null, 2, 'button', [
                        [
                            'class',
                            'btn btn-success btn-sm'
                        ],
                        [
                            'type',
                            'button'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](7, null, [
                        '',
                        ' Objetos'
                    ])),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef])
                ], null, function (l, n) {
                    var e = n.component;
                    l(n, 7, 0, t['ɵunv'](n, 7, 0, t['ɵnov'](n, 8).transform(e.packages$)).length);
                });
            }
            function we(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 10, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 9, 'div', [
                        [
                            'class',
                            'd-flex align-items-center py-10 px-8 bgi-size-cover bgi-no-repeat rounded-top'
                        ],
                        [
                            'style',
                            'background-image: url(\'./assets/media/misc/bg-1.jpg\');'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 1, 'span', [[
                            'class',
                            'btn btn-md btn-icon bg-white-o-15 mr-4'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-shopping-cart-1 text-success'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](4, 0, null, null, 2, 'h4', [[
                            'class',
                            'text-white m-0 flex-grow-1 mr-3'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](5, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](7, 0, null, null, 3, 'button', [
                        [
                            'class',
                            'btn btn-success btn-sm'
                        ],
                        [
                            'type',
                            'button'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](8, null, [
                        '',
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    var e = n.component;
                    l(n, 5, 0, t['ɵunv'](n, 5, 0, t['ɵnov'](n, 6).transform('ECOMMERCE.SHOP.MYSHOPCART'))), l(n, 8, 0, t['ɵunv'](n, 8, 0, t['ɵnov'](n, 9).transform(e.packages$)).length, t['ɵunv'](n, 8, 1, t['ɵnov'](n, 10).transform('ECOMMERCE.SHOP.PRODUCT')));
                });
            }
            function Se(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 23, 'div', [[
                            'class',
                            'row'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 21, 'div', [[
                            'class',
                            'col-12'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 20, 'div', [[
                            'class',
                            'd-flex align-items-center justify-content-between p-8'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 16, 'div', [[
                            'class',
                            'd-flex flex-column mr-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](4, 0, null, null, 1, 'a', [
                        [
                            'class',
                            'font-weight-bold text-dark-75 font-size-lg text-hover-primary'
                        ],
                        [
                            'href',
                            '#'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](5, null, [
                        ' ',
                        ' '
                    ])),
                    (l()(), t['ɵeld'](6, 0, null, null, 1, 'span', [[
                            'class',
                            'text-muted'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](7, null, [
                        ' ',
                        ' '
                    ])),
                    (l()(), t['ɵeld'](8, 0, null, null, 11, 'div', [[
                            'class',
                            'd-flex align-items-center mt-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](9, 0, null, null, 2, 'span', [[
                            'class',
                            'font-weight-bold mr-1 text-dark-75 font-size-lg'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](10, null, [
                        '',
                        ''
                    ])),
                    t['ɵppd'](11, 1),
                    (l()(), t['ɵeld'](12, 0, null, null, 1, 'span', [[
                            'class',
                            'text-muted mr-1'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['for'])),
                    (l()(), t['ɵeld'](14, 0, null, null, 1, 'span', [[
                            'class',
                            'font-weight-bold mr-2 text-dark-75 font-size-lg'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](15, null, [
                        '',
                        ''
                    ])),
                    (l()(), t['ɵeld'](16, 0, null, null, 1, 'div', [[
                            'class',
                            'btn btn-xs btn-light-success btn-icon mr-2'
                        ]], null, [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.decrease(l.context.$implicit.id, l.context.$implicit.amount) && t), t;
                    }, null, null)),
                    (l()(), t['ɵeld'](17, 0, null, null, 0, 'i', [[
                            'class',
                            'ki ki-minus icon-xs'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](18, 0, null, null, 1, 'div', [[
                            'class',
                            'btn btn-xs btn-light-success btn-icon'
                        ]], null, [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.increase(l.context.$implicit.id) && t), t;
                    }, null, null)),
                    (l()(), t['ɵeld'](19, 0, null, null, 0, 'i', [[
                            'class',
                            'ki ki-plus icon-xs'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](20, 0, null, null, 2, 'span', [[
                            'class',
                            'symbol symbol-70 flex-shrink-0'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](21, 0, null, null, 1, 'div', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](22, 0, null, null, 0, 'img', [[
                            'width',
                            '30px'
                        ]], [[
                            8,
                            'src',
                            4
                        ]], null, null, null, null)),
                    (l()(), t['ɵeld'](23, 0, null, null, 0, 'div', [[
                            'class',
                            'separator separator-solid'
                        ]], null, null, null, null, null))
                ], null, function (l, n) {
                    l(n, 5, 0, n.context.$implicit.name), l(n, 7, 0, n.context.$implicit.description);
                    var e = t['ɵunv'](n, 10, 0, l(n, 11, 0, t['ɵnov'](n.parent, 0), n.context.$implicit.price_iva));
                    l(n, 10, 0, e), l(n, 15, 0, n.context.$implicit.amount), l(n, 22, 0, t['ɵinlineInterpolate'](1, '', n.context.$implicit.image, ''));
                });
            }
            function Ce(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 73, 'div', [[
                            'class',
                            'row'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 72, 'div', [[
                            'class',
                            'col-12 d-flex alig-items-center justify-content-center p-5 flex flex-column'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 2, 'span', [[
                            'class',
                            'font-weight-bold mb-5 text-dark-75 font-size-lg text-center'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](3, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](5, 0, null, null, 68, ':svg:svg', [
                        [
                            'data-name',
                            'Layer 1'
                        ],
                        [
                            'height',
                            '150'
                        ],
                        [
                            'id',
                            'ffc6eb9a-0ec0-429c-85a8-ff38b44048bf'
                        ],
                        [
                            'viewBox',
                            '0 0 896 747.97143'
                        ],
                        [
                            'widt',
                            '150'
                        ],
                        [
                            'xmlns',
                            'http://www.w3.org/2000/svg'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](6, 0, null, null, 1, ':svg:title', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['empty_cart'])),
                    (l()(), t['ɵeld'](8, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M193.634,788.75225c12.42842,23.049,38.806,32.9435,38.806,32.9435s6.22712-27.47543-6.2013-50.52448-38.806-32.9435-38.806-32.9435S181.20559,765.7032,193.634,788.75225Z'
                        ],
                        [
                            'fill',
                            '#2f2e41'
                        ],
                        [
                            'transform',
                            'translate(-152 -76.01429)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](9, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M202.17653,781.16927c22.43841,13.49969,31.08016,40.3138,31.08016,40.3138s-27.73812,4.92679-50.17653-8.57291S152,772.59636,152,772.59636,179.73811,767.66958,202.17653,781.16927Z'
                        ],
                        [
                            'fill',
                            '#6c63ff'
                        ],
                        [
                            'transform',
                            'translate(-152 -76.01429)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](10, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '2'
                        ],
                        [
                            'width',
                            '140'
                        ],
                        [
                            'x',
                            '413.2485'
                        ],
                        [
                            'y',
                            '35.90779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](11, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '18.5'
                        ],
                        [
                            'width',
                            '2'
                        ],
                        [
                            'x',
                            '513.2485'
                        ],
                        [
                            'y',
                            '37.40779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](12, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '18.5'
                        ],
                        [
                            'width',
                            '2'
                        ],
                        [
                            'x',
                            '452.2485'
                        ],
                        [
                            'y',
                            '37.40779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](13, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '2'
                        ],
                        [
                            'width',
                            '140'
                        ],
                        [
                            'x',
                            '484.2485'
                        ],
                        [
                            'y',
                            '131.90779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](14, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '18.5'
                        ],
                        [
                            'width',
                            '2'
                        ],
                        [
                            'x',
                            '522.2485'
                        ],
                        [
                            'y',
                            '113.90779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](15, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '18.5'
                        ],
                        [
                            'width',
                            '2'
                        ],
                        [
                            'x',
                            '583.2485'
                        ],
                        [
                            'y',
                            '113.90779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](16, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '2'
                        ],
                        [
                            'width',
                            '140'
                        ],
                        [
                            'x',
                            '670.2485'
                        ],
                        [
                            'y',
                            '176.90779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](17, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '18.5'
                        ],
                        [
                            'width',
                            '2'
                        ],
                        [
                            'x',
                            '708.2485'
                        ],
                        [
                            'y',
                            '158.90779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](18, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '18.5'
                        ],
                        [
                            'width',
                            '2'
                        ],
                        [
                            'x',
                            '769.2485'
                        ],
                        [
                            'y',
                            '158.90779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](19, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '2'
                        ],
                        [
                            'width',
                            '140'
                        ],
                        [
                            'x',
                            '656.2485'
                        ],
                        [
                            'y',
                            '640.90779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](20, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '18.5'
                        ],
                        [
                            'width',
                            '2'
                        ],
                        [
                            'x',
                            '694.2485'
                        ],
                        [
                            'y',
                            '622.90779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](21, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '18.5'
                        ],
                        [
                            'width',
                            '2'
                        ],
                        [
                            'x',
                            '755.2485'
                        ],
                        [
                            'y',
                            '622.90779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](22, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '2'
                        ],
                        [
                            'width',
                            '140'
                        ],
                        [
                            'x',
                            '417.2485'
                        ],
                        [
                            'y',
                            '319.90779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](23, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '18.5'
                        ],
                        [
                            'width',
                            '2'
                        ],
                        [
                            'x',
                            '455.2485'
                        ],
                        [
                            'y',
                            '301.90779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](24, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '18.5'
                        ],
                        [
                            'width',
                            '2'
                        ],
                        [
                            'x',
                            '516.2485'
                        ],
                        [
                            'y',
                            '301.90779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](25, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '2'
                        ],
                        [
                            'width',
                            '140'
                        ],
                        [
                            'x',
                            '461.2485'
                        ],
                        [
                            'y',
                            '560.90779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](26, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '18.5'
                        ],
                        [
                            'width',
                            '2'
                        ],
                        [
                            'x',
                            '499.2485'
                        ],
                        [
                            'y',
                            '542.90779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](27, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '18.5'
                        ],
                        [
                            'width',
                            '2'
                        ],
                        [
                            'x',
                            '560.2485'
                        ],
                        [
                            'y',
                            '542.90779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](28, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '2'
                        ],
                        [
                            'width',
                            '140'
                        ],
                        [
                            'x',
                            '685.2485'
                        ],
                        [
                            'y',
                            '487.90779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](29, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '18.5'
                        ],
                        [
                            'width',
                            '2'
                        ],
                        [
                            'x',
                            '723.2485'
                        ],
                        [
                            'y',
                            '469.90779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](30, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '18.5'
                        ],
                        [
                            'width',
                            '2'
                        ],
                        [
                            'x',
                            '784.2485'
                        ],
                        [
                            'y',
                            '469.90779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](31, 0, null, null, 0, ':svg:polygon', [
                        [
                            'fill',
                            '#2f2e41'
                        ],
                        [
                            'points',
                            '362.06 702.184 125.274 702.184 125.274 700.481 360.356 700.481 360.356 617.861 145.18 617.861 134.727 596.084 136.263 595.347 146.252 616.157 362.06 616.157 362.06 702.184'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](32, 0, null, null, 0, ':svg:circle', [
                        [
                            'cx',
                            '156.78851'
                        ],
                        [
                            'cy',
                            '726.03301'
                        ],
                        [
                            'fill',
                            '#3f3d56'
                        ],
                        [
                            'r',
                            '17.88673'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](33, 0, null, null, 0, ':svg:circle', [
                        [
                            'cx',
                            '333.10053'
                        ],
                        [
                            'cy',
                            '726.03301'
                        ],
                        [
                            'fill',
                            '#3f3d56'
                        ],
                        [
                            'r',
                            '17.88673'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](34, 0, null, null, 0, ':svg:circle', [
                        [
                            'cx',
                            '540.92726'
                        ],
                        [
                            'cy',
                            '346.153'
                        ],
                        [
                            'fill',
                            '#3f3d56'
                        ],
                        [
                            'r',
                            '11.07274'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](35, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M539.38538,665.76747H273.23673L215.64844,477.531H598.69256l-.34852,1.10753Zm-264.8885-1.7035H538.136l58.23417-184.82951H217.95082Z'
                        ],
                        [
                            'fill',
                            '#2f2e41'
                        ],
                        [
                            'transform',
                            'translate(-152 -76.01429)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](36, 0, null, null, 0, ':svg:polygon', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'points',
                            '366.61 579.958 132.842 579.958 82.26 413.015 418.701 413.015 418.395 413.998 366.61 579.958'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](37, 0, null, null, 0, ':svg:polygon', [
                        [
                            'fill',
                            '#2f2e41'
                        ],
                        [
                            'points',
                            '451.465 384.7 449.818 384.263 461.059 341.894 526.448 341.894 526.448 343.598 462.37 343.598 451.465 384.7'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](38, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#2f2e41'
                        ],
                        [
                            'height',
                            '1.7035'
                        ],
                        [
                            'width',
                            '345.2931'
                        ],
                        [
                            'x',
                            '82.2584'
                        ],
                        [
                            'y',
                            '458.58385'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](39, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#2f2e41'
                        ],
                        [
                            'height',
                            '1.7035'
                        ],
                        [
                            'width',
                            '306.31852'
                        ],
                        [
                            'x',
                            '101.45894'
                        ],
                        [
                            'y',
                            '521.34377'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](40, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#2f2e41'
                        ],
                        [
                            'height',
                            '186.53301'
                        ],
                        [
                            'width',
                            '1.7035'
                        ],
                        [
                            'x',
                            '254.31376'
                        ],
                        [
                            'y',
                            '402.36843'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](41, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#2f2e41'
                        ],
                        [
                            'height',
                            '1.70379'
                        ],
                        [
                            'transform',
                            'translate(-274.73922 936.23495) rotate(-86.24919)'
                        ],
                        [
                            'width',
                            '186.92877'
                        ],
                        [
                            'x',
                            '385.55745'
                        ],
                        [
                            'y',
                            '570.79732'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](42, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#2f2e41'
                        ],
                        [
                            'height',
                            '186.92877'
                        ],
                        [
                            'transform',
                            'translate(-188.46866 -52.99638) rotate(-3.729)'
                        ],
                        [
                            'width',
                            '1.70379'
                        ],
                        [
                            'x',
                            '334.45728'
                        ],
                        [
                            'y',
                            '478.18483'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](43, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#2f2e41'
                        ],
                        [
                            'height',
                            '2'
                        ],
                        [
                            'width',
                            '896'
                        ],
                        [
                            'y',
                            '745'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](44, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M747.41068,137.89028s14.61842,41.60627,5.62246,48.00724S783.39448,244.573,783.39448,244.573l47.22874-12.80193-25.86336-43.73993s-3.37348-43.73992-3.37348-50.14089S747.41068,137.89028,747.41068,137.89028Z'
                        ],
                        [
                            'fill',
                            '#a0616a'
                        ],
                        [
                            'transform',
                            'translate(-152 -76.01429)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](45, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M747.41068,137.89028s14.61842,41.60627,5.62246,48.00724S783.39448,244.573,783.39448,244.573l47.22874-12.80193-25.86336-43.73993s-3.37348-43.73992-3.37348-50.14089S747.41068,137.89028,747.41068,137.89028Z'
                        ],
                        [
                            'opacity',
                            '0.1'
                        ],
                        [
                            'transform',
                            'translate(-152 -76.01429)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](46, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M722.87364,434.46832s-4.26731,53.34138,0,81.07889,10.66828,104.5491,10.66828,104.5491,0,145.08854,23.4702,147.22219,40.53945,4.26731,42.6731-4.26731-10.66827-12.80193-4.26731-17.06924,8.53462-19.20289,0-36.27213,0-189.8953,0-189.8953l40.53945,108.81641s4.26731,89.61351,8.53462,102.41544-4.26731,36.27213,10.66827,38.40579,32.00483-10.66828,40.53945-14.93559-12.80193-4.26731-8.53462-6.401,17.06924-8.53462,12.80193-10.66828-8.53462-104.54909-8.53462-104.54909S879.69728,414.1986,864.7617,405.664s-24.537,6.16576-24.537,6.16576Z'
                        ],
                        [
                            'fill',
                            '#2f2e41'
                        ],
                        [
                            'transform',
                            'translate(-152 -76.01429)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](47, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M761.27943,758.78388v17.06924s-19.20289,46.39942,0,46.39942,34.13848,4.8083,34.13848-1.59266V763.05119Z'
                        ],
                        [
                            'fill',
                            '#2f2e41'
                        ],
                        [
                            'transform',
                            'translate(-152 -76.01429)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](48, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M887.16508,758.75358v17.06924s19.20289,46.39941,0,46.39941-34.13848,4.80831-34.13848-1.59266V763.02089Z'
                        ],
                        [
                            'fill',
                            '#2f2e41'
                        ],
                        [
                            'transform',
                            'translate(-152 -76.01429)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](49, 0, null, null, 0, ':svg:circle', [
                        [
                            'cx',
                            '625.28185'
                        ],
                        [
                            'cy',
                            '54.4082'
                        ],
                        [
                            'fill',
                            '#a0616a'
                        ],
                        [
                            'r',
                            '38.40579'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](50, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M765.54674,201.89993s10.66828,32.00482,27.73752,25.60386l17.06924-6.401L840.22467,425.9337s-23.47021,34.13848-57.60869,12.80193S765.54674,201.89993,765.54674,201.89993Z'
                        ],
                        [
                            'fill',
                            '#6c63ff'
                        ],
                        [
                            'transform',
                            'translate(-152 -76.01429)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](51, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M795.41791,195.499l9.60145-20.26972s56.54186,26.67069,65.07648,35.20531,8.53462,21.33655,8.53462,21.33655l-14.93559,53.34137s4.26731,117.351,4.26731,121.61834,14.93559,27.73751,4.26731,19.20289-12.80193-17.06924-21.33655-4.26731-27.73751,27.73752-27.73751,27.73752Z'
                        ],
                        [
                            'fill',
                            '#3f3d56'
                        ],
                        [
                            'transform',
                            'translate(-152 -76.01429)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](52, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M870.09584,349.12212l-6.401,59.74234s-38.40579,34.13848-29.87117,36.27214,12.80193-6.401,12.80193-6.401,14.93559,14.93559,23.47021,6.401S899.967,355.52309,899.967,355.52309Z'
                        ],
                        [
                            'fill',
                            '#a0616a'
                        ],
                        [
                            'transform',
                            'translate(-152 -76.01429)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](53, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M778.1,76.14416c-8.51412-.30437-17.62549-.45493-24.80406,4.13321a36.31263,36.31263,0,0,0-8.5723,8.39153c-6.99153,8.83846-13.03253,19.95926-10.43553,30.92537l3.01633-1.1764a19.75086,19.75086,0,0,1-1.90515,8.46261c.42475-1.2351,1.84722.76151,1.4664,2.01085L733.543,139.792c5.46207-2.00239,12.25661,2.05189,13.08819,7.80969.37974-12.66123,1.6932-27.17965,11.964-34.59331,5.17951-3.73868,11.73465-4.88,18.04162-5.8935,5.81832-.935,11.91781-1.82659,17.49077.08886s10.31871,7.615,9.0553,13.37093c2.56964-.88518,5.44356.90566,6.71347,3.30856s1.33662,5.2375,1.37484,7.95506c2.73911,1.93583,5.85632-1.9082,6.97263-5.07112,2.62033-7.42434,4.94941-15.32739,3.53783-23.073s-7.72325-15.14773-15.59638-15.174a5.46676,5.46676,0,0,0,1.42176-3.84874l-6.48928-.5483a7.1723,7.1723,0,0,0,4.28575-2.25954C802.7981,84.73052,782.31323,76.29477,778.1,76.14416Z'
                        ],
                        [
                            'fill',
                            '#2f2e41'
                        ],
                        [
                            'transform',
                            'translate(-152 -76.01429)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](54, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M776.215,189.098s-17.36929-17.02085-23.62023-15.97822S737.80923,189.098,737.80923,189.098s-51.20772,17.06924-49.07407,34.13848S714.339,323.51826,714.339,323.51826s19.2029,100.28179,2.13366,110.95006,81.07889,38.40579,83.21254,25.60386,6.401-140.82123,0-160.02412S776.215,189.098,776.215,189.098Z'
                        ],
                        [
                            'fill',
                            '#3f3d56'
                        ],
                        [
                            'transform',
                            'translate(-152 -76.01429)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](55, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M850.89294,223.23648h26.38265S895.6997,304.31537,897.83335,312.85s6.401,49.07406,4.26731,49.07406-44.80675-8.53462-44.80675-2.13365Z'
                        ],
                        [
                            'fill',
                            '#3f3d56'
                        ],
                        [
                            'transform',
                            'translate(-152 -76.01429)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](56, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M850,424.01429H749c-9.85608-45.34-10.67957-89.14649,0-131H850C833.70081,334.115,832.68225,377.62137,850,424.01429Z'
                        ],
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'transform',
                            'translate(-152 -76.01429)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](57, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M707.93806,368.325,737.80923,381.127s57.60868,8.53462,57.60868-14.93559-57.60868-10.66827-57.60868-10.66827L718.60505,349.383Z'
                        ],
                        [
                            'fill',
                            '#a0616a'
                        ],
                        [
                            'transform',
                            'translate(-152 -76.01429)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](58, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M714.339,210.43455l-25.60386,6.401L669.53227,329.91923s-6.401,29.87117,4.26731,32.00482S714.339,381.127,714.339,381.127s4.26731-32.00483,12.80193-32.00483L705.8044,332.05288,718.60633,257.375Z'
                        ],
                        [
                            'fill',
                            '#3f3d56'
                        ],
                        [
                            'transform',
                            'translate(-152 -76.01429)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](59, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '2'
                        ],
                        [
                            'width',
                            '140'
                        ],
                        [
                            'x',
                            '60.2485'
                        ],
                        [
                            'y',
                            '352.90779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](60, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '18.5'
                        ],
                        [
                            'width',
                            '2'
                        ],
                        [
                            'x',
                            '98.2485'
                        ],
                        [
                            'y',
                            '334.90779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](61, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '18.5'
                        ],
                        [
                            'width',
                            '2'
                        ],
                        [
                            'x',
                            '159.2485'
                        ],
                        [
                            'y',
                            '334.90779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](62, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '2'
                        ],
                        [
                            'width',
                            '140'
                        ],
                        [
                            'x',
                            '109.2485'
                        ],
                        [
                            'y',
                            '56.90779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](63, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '18.5'
                        ],
                        [
                            'width',
                            '2'
                        ],
                        [
                            'x',
                            '209.2485'
                        ],
                        [
                            'y',
                            '58.40779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](64, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '18.5'
                        ],
                        [
                            'width',
                            '2'
                        ],
                        [
                            'x',
                            '148.2485'
                        ],
                        [
                            'y',
                            '58.40779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](65, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '2'
                        ],
                        [
                            'width',
                            '140'
                        ],
                        [
                            'x',
                            '250.2485'
                        ],
                        [
                            'y',
                            '253.90779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](66, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '18.5'
                        ],
                        [
                            'width',
                            '2'
                        ],
                        [
                            'x',
                            '350.2485'
                        ],
                        [
                            'y',
                            '255.40779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](67, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '18.5'
                        ],
                        [
                            'width',
                            '2'
                        ],
                        [
                            'x',
                            '289.2485'
                        ],
                        [
                            'y',
                            '255.40779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](68, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '2'
                        ],
                        [
                            'width',
                            '140'
                        ],
                        [
                            'x',
                            '12.2485'
                        ],
                        [
                            'y',
                            '252.90779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](69, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '18.5'
                        ],
                        [
                            'width',
                            '2'
                        ],
                        [
                            'x',
                            '112.2485'
                        ],
                        [
                            'y',
                            '254.40779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](70, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '18.5'
                        ],
                        [
                            'width',
                            '2'
                        ],
                        [
                            'x',
                            '51.2485'
                        ],
                        [
                            'y',
                            '254.40779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](71, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '2'
                        ],
                        [
                            'width',
                            '140'
                        ],
                        [
                            'x',
                            '180.2485'
                        ],
                        [
                            'y',
                            '152.90779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](72, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'height',
                            '18.5'
                        ],
                        [
                            'width',
                            '2'
                        ],
                        [
                            'x',
                            '218.2485'
                        ],
                        [
                            'y',
                            '134.90779'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](73, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'x',
                            '279.2485'
                        ],
                        [
                            'y',
                            '134.90779'
                        ]
                    ], null, null, null, null, null))
                ], null, function (l, n) {
                    l(n, 3, 0, t['ɵunv'](n, 3, 0, t['ɵnov'](n, 4).transform('ECOMMERCE.SHOP.EMPTY')));
                });
            }
            function ke(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 4, 'a', [[
                            'class',
                            'btn btn-primary text-weight-bold'
                        ]], [
                        [
                            1,
                            'target',
                            0
                        ],
                        [
                            8,
                            'href',
                            4
                        ]
                    ], [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 1).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](1, 671744, null, 0, f.u, [
                        f.r,
                        f.a,
                        a.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    t['ɵpad'](2, 1),
                    (l()(), t['ɵted'](3, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ])
                ], function (l, n) {
                    var e = l(n, 2, 0, 'check-out');
                    l(n, 1, 0, e);
                }, function (l, n) {
                    l(n, 0, 0, t['ɵnov'](n, 1).target, t['ɵnov'](n, 1).href), l(n, 3, 0, t['ɵunv'](n, 3, 0, t['ɵnov'](n, 4).transform('ECOMMERCE.SHOP.PAYMENT')));
                });
            }
            function Re(l) {
                return t['ɵvid'](0, [
                    t['ɵpid'](0, a.CurrencyPipe, [
                        t.LOCALE_ID,
                        t.DEFAULT_CURRENCY_CODE
                    ]),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, ye)),
                    t['ɵdid'](2, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, we)),
                    t['ɵdid'](4, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](5, 0, null, null, 7, 'div', [
                        [
                            'class',
                            'scroll scroll-push'
                        ],
                        [
                            'data-scroll',
                            'true'
                        ],
                        [
                            'perfectScrollbar',
                            ''
                        ],
                        [
                            'style',
                            'position: relative; max-height: 250px;'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵdid'](6, 999424, null, 0, pe, [
                        t.NgZone,
                        t.KeyValueDiffers,
                        t.ElementRef,
                        t.PLATFORM_ID,
                        [
                            2,
                            se
                        ]
                    ], {
                        config: [
                            0,
                            'config'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, Se)),
                    t['ɵdid'](8, 278528, null, 0, a.NgForOf, [
                        t.ViewContainerRef,
                        t.TemplateRef,
                        t.IterableDiffers
                    ], {
                        ngForOf: [
                            0,
                            'ngForOf'
                        ]
                    }, null),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, Ce)),
                    t['ɵdid'](11, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵeld'](13, 0, null, null, 20, 'div', [[
                            'class',
                            'p-8'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](14, 0, null, null, 7, 'div', [[
                            'class',
                            'd-flex align-items-center justify-content-between mb-7'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](15, 0, null, null, 2, 'span', [[
                            'class',
                            'font-weight-bold text-muted font-size-sm mr-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](16, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](18, 0, null, null, 3, 'span', [[
                            'class',
                            'font-weight-bolder text-primary text-right'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](19, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    t['ɵppd'](21, 1),
                    (l()(), t['ɵeld'](22, 0, null, null, 7, 'div', [[
                            'class',
                            'd-flex align-items-center justify-content-between mb-4'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](23, 0, null, null, 2, 'span', [[
                            'class',
                            'font-weight-bold text-muted font-size-sm mr-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](24, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](26, 0, null, null, 3, 'span', [[
                            'class',
                            'font-weight-bolder text-dark-50 text-right'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](27, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    t['ɵppd'](29, 1),
                    (l()(), t['ɵeld'](30, 0, null, null, 3, 'div', [[
                            'class',
                            'text-right'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, ke)),
                    t['ɵdid'](32, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef])
                ], function (l, n) {
                    var e = n.component;
                    l(n, 2, 0, 'light' === e.extrasCartDropdownStyle), l(n, 4, 0, 'dark' === e.extrasCartDropdownStyle), l(n, 6, 0, ''), l(n, 8, 0, t['ɵunv'](n, 8, 0, t['ɵnov'](n, 9).transform(e.packages$))), l(n, 11, 0, 0 == t['ɵunv'](n, 11, 0, t['ɵnov'](n, 12).transform(e.packages$)).length), l(n, 32, 0, t['ɵunv'](n, 32, 0, t['ɵnov'](n, 33).transform(e.packages$)).length > 0);
                }, function (l, n) {
                    var e = n.component;
                    l(n, 16, 0, t['ɵunv'](n, 16, 0, t['ɵnov'](n, 17).transform('ECOMMERCE.SHOP.SUBTOTAL')));
                    var u = t['ɵunv'](n, 19, 0, l(n, 21, 0, t['ɵnov'](n, 0), t['ɵunv'](n, 19, 0, t['ɵnov'](n, 20).transform(e.cart$)).subtotal));
                    l(n, 19, 0, u), l(n, 24, 0, t['ɵunv'](n, 24, 0, t['ɵnov'](n, 25).transform('ECOMMERCE.SHOP.TOTAL')));
                    var i = t['ɵunv'](n, 27, 0, l(n, 29, 0, t['ɵnov'](n, 0), t['ɵunv'](n, 27, 0, t['ɵnov'](n, 28).transform(e.cart$)).total));
                    l(n, 27, 0, i);
                });
            }
            class De {
                constructor(l, n) {
                    this.translationService = l, this.router = n, this.languages = [
                        {
                            lang: 'en',
                            name: 'English',
                            flag: './assets/media/svg/flags/226-united-states.svg'
                        },
                        {
                            lang: 'es',
                            name: 'Spanish',
                            flag: './assets/media/svg/flags/252-mexico.svg'
                        }
                    ];
                }
                ngOnInit() {
                    this.setSelectedLanguage(), this.router.events.pipe(Object(O.a)(l => l instanceof f.g)).subscribe(l => {
                        this.setSelectedLanguage();
                    });
                }
                setLanguageWithRefresh(l) {
                    this.setLanguage(l);
                }
                setLanguage(l) {
                    this.languages.forEach(n => {
                        n.lang === l ? (n.active = !0, this.language = n) : n.active = !1;
                    }), this.translationService.setLanguage(l);
                }
                setSelectedLanguage() {
                    this.setLanguage(this.translationService.getSelectedLanguage());
                }
            }
            var Ie = e('e4g8'), xe = t['ɵcrt']({
                    encapsulation: 0,
                    styles: [['']],
                    data: {}
                });
            function Ee(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 10, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 9, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                    t['ɵdid'](2, 278528, null, 0, a.NgClass, [
                        t.IterableDiffers,
                        t.KeyValueDiffers,
                        t.ElementRef,
                        t.Renderer2
                    ], {
                        klass: [
                            0,
                            'klass'
                        ],
                        ngClass: [
                            1,
                            'ngClass'
                        ]
                    }, null),
                    t['ɵpod'](3, { active: 0 }),
                    (l()(), t['ɵeld'](4, 0, null, null, 6, 'a', [
                        [
                            'class',
                            'navi-link'
                        ],
                        [
                            'href',
                            'javascript:;'
                        ]
                    ], null, [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.setLanguageWithRefresh(l.context.$implicit.lang) && t), t;
                    }, null, null)),
                    t['ɵdid'](5, 278528, null, 0, a.NgClass, [
                        t.IterableDiffers,
                        t.KeyValueDiffers,
                        t.ElementRef,
                        t.Renderer2
                    ], {
                        klass: [
                            0,
                            'klass'
                        ],
                        ngClass: [
                            1,
                            'ngClass'
                        ]
                    }, null),
                    t['ɵpod'](6, { active: 0 }),
                    (l()(), t['ɵeld'](7, 0, null, null, 1, 'span', [[
                            'class',
                            'symbol symbol-20 mr-3'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](8, 0, null, null, 0, 'img', [], [[
                            8,
                            'src',
                            4
                        ]], null, null, null, null)),
                    (l()(), t['ɵeld'](9, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](10, null, [
                        '',
                        ''
                    ]))
                ], function (l, n) {
                    var e = l(n, 3, 0, n.context.$implicit.active);
                    l(n, 2, 0, 'navi-item', e);
                    var t = l(n, 6, 0, n.context.$implicit.active);
                    l(n, 5, 0, 'navi-link', t);
                }, function (l, n) {
                    l(n, 8, 0, t['ɵinlineInterpolate'](1, '', n.context.$implicit.flag, '')), l(n, 10, 0, n.context.$implicit.name);
                });
            }
            function Ae(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 14, 'div', [
                        [
                            'class',
                            'dropdown'
                        ],
                        [
                            'ngbDropdown',
                            ''
                        ],
                        [
                            'placement',
                            'bottom-right'
                        ]
                    ], [[
                            2,
                            'show',
                            null
                        ]], null, null, null, null)),
                    t['ɵdid'](1, 1720320, null, 2, R.v, [
                        t.ChangeDetectorRef,
                        R.x,
                        a.DOCUMENT,
                        t.NgZone,
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            R.K
                        ]
                    ], {
                        autoClose: [
                            0,
                            'autoClose'
                        ],
                        placement: [
                            1,
                            'placement'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 1, { _menu: 0 }),
                    t['ɵqud'](603979776, 2, { _anchor: 0 }),
                    (l()(), t['ɵeld'](4, 0, null, null, 4, 'div', [
                        [
                            'class',
                            'topbar-item dropdown-toggle'
                        ],
                        [
                            'data-offset',
                            '10px,0px'
                        ],
                        [
                            'data-toggle',
                            'dropdown'
                        ],
                        [
                            'ngbDropdownToggle',
                            ''
                        ]
                    ], [[
                            1,
                            'aria-expanded',
                            0
                        ]], [
                        [
                            null,
                            'click'
                        ],
                        [
                            null,
                            'keydown.ArrowUp'
                        ],
                        [
                            null,
                            'keydown.ArrowDown'
                        ],
                        [
                            null,
                            'keydown.Home'
                        ],
                        [
                            null,
                            'keydown.End'
                        ],
                        [
                            null,
                            'keydown.Tab'
                        ],
                        [
                            null,
                            'keydown.Shift.Tab'
                        ]
                    ], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 5).dropdown.toggle() && u), 'keydown.ArrowUp' === n && (u = !1 !== t['ɵnov'](l, 5).dropdown.onKeyDown(e) && u), 'keydown.ArrowDown' === n && (u = !1 !== t['ɵnov'](l, 5).dropdown.onKeyDown(e) && u), 'keydown.Home' === n && (u = !1 !== t['ɵnov'](l, 5).dropdown.onKeyDown(e) && u), 'keydown.End' === n && (u = !1 !== t['ɵnov'](l, 5).dropdown.onKeyDown(e) && u), 'keydown.Tab' === n && (u = !1 !== t['ɵnov'](l, 5).dropdown.onKeyDown(e) && u), 'keydown.Shift.Tab' === n && (u = !1 !== t['ɵnov'](l, 5).dropdown.onKeyDown(e) && u), u;
                    }, null, null)),
                    t['ɵdid'](5, 16384, null, 0, R.A, [
                        R.v,
                        t.ElementRef
                    ], null, null),
                    t['ɵprd'](2048, [[
                            2,
                            4
                        ]], R.w, null, [R.A]),
                    (l()(), t['ɵeld'](7, 0, null, null, 1, 'div', [[
                            'class',
                            'btn btn-icon btn-clean btn-dropdown btn-lg mr-1'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](8, 0, null, null, 0, 'img', [
                        [
                            'alt',
                            'language'
                        ],
                        [
                            'class',
                            'h-25px w-25px rounded'
                        ]
                    ], [[
                            8,
                            'src',
                            4
                        ]], null, null, null, null)),
                    (l()(), t['ɵeld'](9, 0, null, null, 5, 'div', [
                        [
                            'class',
                            'dropdown-menu p-0 m-0 dropdown-menu-anim-up dropdown-menu-sm dropdown-menu-right'
                        ],
                        [
                            'ngbDropdownMenu',
                            ''
                        ]
                    ], [
                        [
                            2,
                            'dropdown-menu',
                            null
                        ],
                        [
                            2,
                            'show',
                            null
                        ],
                        [
                            1,
                            'x-placement',
                            0
                        ]
                    ], [
                        [
                            null,
                            'keydown.ArrowUp'
                        ],
                        [
                            null,
                            'keydown.ArrowDown'
                        ],
                        [
                            null,
                            'keydown.Home'
                        ],
                        [
                            null,
                            'keydown.End'
                        ],
                        [
                            null,
                            'keydown.Enter'
                        ],
                        [
                            null,
                            'keydown.Space'
                        ],
                        [
                            null,
                            'keydown.Tab'
                        ],
                        [
                            null,
                            'keydown.Shift.Tab'
                        ]
                    ], function (l, n, e) {
                        var u = !0;
                        return 'keydown.ArrowUp' === n && (u = !1 !== t['ɵnov'](l, 10).dropdown.onKeyDown(e) && u), 'keydown.ArrowDown' === n && (u = !1 !== t['ɵnov'](l, 10).dropdown.onKeyDown(e) && u), 'keydown.Home' === n && (u = !1 !== t['ɵnov'](l, 10).dropdown.onKeyDown(e) && u), 'keydown.End' === n && (u = !1 !== t['ɵnov'](l, 10).dropdown.onKeyDown(e) && u), 'keydown.Enter' === n && (u = !1 !== t['ɵnov'](l, 10).dropdown.onKeyDown(e) && u), 'keydown.Space' === n && (u = !1 !== t['ɵnov'](l, 10).dropdown.onKeyDown(e) && u), 'keydown.Tab' === n && (u = !1 !== t['ɵnov'](l, 10).dropdown.onKeyDown(e) && u), 'keydown.Shift.Tab' === n && (u = !1 !== t['ɵnov'](l, 10).dropdown.onKeyDown(e) && u), u;
                    }, null, null)),
                    t['ɵdid'](10, 16384, [[
                            1,
                            4
                        ]], 1, R.y, [
                        R.v,
                        t.ElementRef
                    ], null, null),
                    t['ɵqud'](603979776, 3, { menuItems: 1 }),
                    (l()(), t['ɵeld'](12, 0, null, null, 2, 'ul', [[
                            'class',
                            'navi navi-hover py-4'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Ee)),
                    t['ɵdid'](14, 278528, null, 0, a.NgForOf, [
                        t.ViewContainerRef,
                        t.TemplateRef,
                        t.IterableDiffers
                    ], {
                        ngForOf: [
                            0,
                            'ngForOf'
                        ]
                    }, null)
                ], function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, !0, 'bottom-right'), l(n, 14, 0, e.languages);
                }, function (l, n) {
                    var e = n.component;
                    l(n, 0, 0, t['ɵnov'](n, 1).isOpen()), l(n, 4, 0, t['ɵnov'](n, 5).dropdown.isOpen()), l(n, 8, 0, t['ɵinlineInterpolate'](1, '', null == e.language ? null : e.language.flag, '')), l(n, 9, 0, !0, t['ɵnov'](n, 10).dropdown.isOpen(), t['ɵnov'](n, 10).placement);
                });
            }
            class Te {
                transform(l, n) {
                    return l.split(' ').map(l => l[0]).join('');
                }
            }
            class Ve {
                constructor(l) {
                    this.layout = l, this.extrasUserDropdownStyle = 'light';
                }
                ngOnInit() {
                    this.extrasUserDropdownStyle = this.layout.getProp('extras.user.dropdown.style'), this.user$ = JSON.parse(localStorage.getItem('token'));
                }
                logout() {
                    document.location.reload();
                }
            }
            var _e = t['ɵcrt']({
                encapsulation: 0,
                styles: [['']],
                data: {}
            });
            function Le(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 8, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 6, 'div', [[
                            'class',
                            'd-flex align-items-center p-8 rounded-top'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 1, 'div', [[
                            'class',
                            'symbol symbol-md bg-light-primary mr-3 flex-shrink-0'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 0, 'img', [
                        [
                            'alt',
                            ''
                        ],
                        [
                            'src',
                            './assets/media/users/300_21.jpg'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](4, 0, null, null, 1, 'div', [[
                            'class',
                            'text-dark m-0 flex-grow-1 mr-3 font-size-h5'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](5, null, [
                        ' ',
                        ' '
                    ])),
                    (l()(), t['ɵeld'](6, 0, null, null, 1, 'span', [[
                            'class',
                            'label label-light-success label-lg font-weight-bold label-inline'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['3 messages'])),
                    (l()(), t['ɵeld'](8, 0, null, null, 0, 'div', [[
                            'class',
                            'separator separator-solid'
                        ]], null, null, null, null, null))
                ], null, function (l, n) {
                    l(n, 5, 0, n.parent.context.ngIf.fullname);
                });
            }
            function Oe(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 10, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 9, 'div', [
                        [
                            'class',
                            'd-flex align-items-center justify-content-between flex-wrap p-8 bgi-size-cover bgi-no-repeat rounded-top'
                        ],
                        [
                            'style',
                            'background-image: url(\'./assets/media/misc/bg-1.jpg\');'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 6, 'div', [[
                            'class',
                            'd-flex align-items-center mr-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 3, 'div', [[
                            'class',
                            'symbol bg-white-o-15 mr-3'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](4, 0, null, null, 2, 'span', [[
                            'class',
                            'symbol-label text-success font-weight-bold font-size-h4'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](5, null, [
                        '',
                        ''
                    ])),
                    t['ɵppd'](6, 1),
                    (l()(), t['ɵeld'](7, 0, null, null, 1, 'div', [[
                            'class',
                            'text-white m-0 flex-grow-1 mr-3 font-size-h5'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](8, null, [
                        ' ',
                        ' '
                    ])),
                    (l()(), t['ɵeld'](9, 0, null, null, 1, 'span', [[
                            'class',
                            'label label-success label-lg font-weight-bold label-inline'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['3 messages']))
                ], null, function (l, n) {
                    var e = t['ɵunv'](n, 5, 0, l(n, 6, 0, t['ɵnov'](n.parent.parent, 0), n.parent.context.ngIf.fullname));
                    l(n, 5, 0, e), l(n, 8, 0, n.parent.context.ngIf.fullname);
                });
            }
            function Pe(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 49, null, null, null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Le)),
                    t['ɵdid'](2, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Oe)),
                    t['ɵdid'](4, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](5, 0, null, null, 44, 'div', [[
                            'class',
                            'navi navi-spacer-x-0 pt-5'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](6, 0, null, null, 10, 'a', [[
                            'class',
                            'navi-item px-8 cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](7, 0, null, null, 9, 'div', [[
                            'class',
                            'navi-link'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](8, 0, null, null, 1, 'div', [[
                            'class',
                            'navi-icon mr-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](9, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-calendar-3 text-success'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](10, 0, null, null, 6, 'div', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](11, 0, null, null, 1, 'div', [[
                            'class',
                            'font-weight-bold'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' My Profile '])),
                    (l()(), t['ɵeld'](13, 0, null, null, 3, 'div', [[
                            'class',
                            'text-muted'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' Account settings and more '])),
                    (l()(), t['ɵeld'](15, 0, null, null, 1, 'span', [[
                            'class',
                            'label label-light-danger label-inline font-weight-bold'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['update'])),
                    (l()(), t['ɵeld'](17, 0, null, null, 8, 'a', [[
                            'class',
                            'navi-item px-8 cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](18, 0, null, null, 7, 'div', [[
                            'class',
                            'navi-link'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](19, 0, null, null, 1, 'div', [[
                            'class',
                            'navi-icon mr-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](20, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-mail text-warning'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](21, 0, null, null, 4, 'div', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](22, 0, null, null, 1, 'div', [[
                            'class',
                            'font-weight-bold'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' My Messages '])),
                    (l()(), t['ɵeld'](24, 0, null, null, 1, 'div', [[
                            'class',
                            'text-muted'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' Inbox and tasks '])),
                    (l()(), t['ɵeld'](26, 0, null, null, 8, 'a', [[
                            'class',
                            'navi-item px-8 cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](27, 0, null, null, 7, 'div', [[
                            'class',
                            'navi-link'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](28, 0, null, null, 1, 'div', [[
                            'class',
                            'navi-icon mr-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](29, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-rocket-1 text-danger'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](30, 0, null, null, 4, 'div', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](31, 0, null, null, 1, 'div', [[
                            'class',
                            'font-weight-bold'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' My Activities '])),
                    (l()(), t['ɵeld'](33, 0, null, null, 1, 'div', [[
                            'class',
                            'text-muted'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' Logs and notifications '])),
                    (l()(), t['ɵeld'](35, 0, null, null, 8, 'a', [[
                            'class',
                            'navi-item px-8 cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](36, 0, null, null, 7, 'div', [[
                            'class',
                            'navi-link'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](37, 0, null, null, 1, 'div', [[
                            'class',
                            'navi-icon mr-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](38, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-hourglass text-primary'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](39, 0, null, null, 4, 'div', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](40, 0, null, null, 1, 'div', [[
                            'class',
                            'font-weight-bold'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' My Tasks '])),
                    (l()(), t['ɵeld'](42, 0, null, null, 1, 'div', [[
                            'class',
                            'text-muted'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' latest tasks and projects '])),
                    (l()(), t['ɵeld'](44, 0, null, null, 0, 'div', [[
                            'class',
                            'navi-separator mt-3'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](45, 0, null, null, 4, 'div', [[
                            'class',
                            'navi-footer px-8 py-5'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](46, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-light-primary font-weight-bold cursor-pointer'
                        ]], null, [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.logout() && t), t;
                    }, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Sign Out'])),
                    (l()(), t['ɵeld'](48, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-clean font-weight-bold cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Upgrade Plan']))
                ], function (l, n) {
                    var e = n.component;
                    l(n, 2, 0, 'light' === e.extrasUserDropdownStyle), l(n, 4, 0, 'dark' === e.extrasUserDropdownStyle);
                }, null);
            }
            function Me(l) {
                return t['ɵvid'](0, [
                    t['ɵpid'](0, Te, []),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, Pe)),
                    t['ɵdid'](2, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef])
                ], function (l, n) {
                    var e = n.component;
                    l(n, 2, 0, t['ɵunv'](n, 2, 0, t['ɵnov'](n, 3).transform(e.user$)));
                }, null);
            }
            var He, Ge = e('svdS'), Be = function () {
                    var l;
                    return {
                        init: function (n) {
                            var e, t, u, i;
                            (l = Kl.a.getById(n)) && (e = Kl.a.find(l, '.offcanvas-header'), t = Kl.a.find(l, '.offcanvas-content'), u = Kl.a.find(l, '.quick-search-form'), i = Kl.a.find(l, '.quick-search-wrapper'), new Ge.a(l, {
                                overlay: !0,
                                baseClass: 'offcanvas',
                                placement: 'right',
                                closeBy: 'kt_quick_search_close',
                                toggleBy: 'kt_quick_search_toggle'
                            }), Kl.a.scrollInit(i, {
                                disableForMobile: !0,
                                resetHeightOnDestroy: !0,
                                handleWindowResize: !0,
                                height: function () {
                                    var n = parseInt(Kl.a.getViewPort().height);
                                    return e && (n -= parseInt(Kl.a.actualHeight(e)), n -= parseInt(Kl.a.css(e, 'marginTop')), n -= parseInt(Kl.a.css(e, 'marginBottom'))), t && (n -= parseInt(Kl.a.css(t, 'marginTop')), n -= parseInt(Kl.a.css(t, 'marginBottom'))), i && (n -= parseInt(Kl.a.actualHeight(u)), n -= parseInt(Kl.a.css(u, 'marginTop')), n -= parseInt(Kl.a.css(u, 'marginBottom')), n -= parseInt(Kl.a.css(i, 'marginTop')), n -= parseInt(Kl.a.css(i, 'marginBottom'))), n -= parseInt(Kl.a.css(l, 'paddingTop')), (n -= parseInt(Kl.a.css(l, 'paddingBottom'))) - 2;
                                }
                            }));
                        },
                        getElement: function () {
                            return l;
                        }
                    };
                }(), Ne = function () {
                    var l;
                    return {
                        init: function (n) {
                            var e, t;
                            (l = Kl.a.getById(n)) && (e = Kl.a.find(l, '.offcanvas-header'), t = Kl.a.find(l, '.offcanvas-content'), new Ge.a(l, {
                                overlay: !0,
                                baseClass: 'offcanvas',
                                placement: 'right',
                                closeBy: 'kt_quick_notifications_close',
                                toggleBy: 'kt_quick_notifications_toggle'
                            }), Kl.a.scrollInit(t, {
                                disableForMobile: !0,
                                resetHeightOnDestroy: !0,
                                handleWindowResize: !0,
                                height: function () {
                                    var n = parseInt(Kl.a.getViewPort().height);
                                    return e && (n -= parseInt(Kl.a.actualHeight(e)), n -= parseInt(Kl.a.css(e, 'marginTop')), n -= parseInt(Kl.a.css(e, 'marginBottom'))), t && (n -= parseInt(Kl.a.css(t, 'marginTop')), n -= parseInt(Kl.a.css(t, 'marginBottom'))), n -= parseInt(Kl.a.css(l, 'paddingTop')), (n -= parseInt(Kl.a.css(l, 'paddingBottom'))) - 2;
                                }
                            }));
                        },
                        getElement: function () {
                            return l;
                        }
                    };
                }(), Fe = function () {
                    var l;
                    return {
                        init: function (n) {
                            var e, t;
                            (l = Kl.a.getById(n)) && (e = Kl.a.find(l, '.offcanvas-header'), t = Kl.a.find(l, '.offcanvas-content'), new Ge.a(l, {
                                overlay: !0,
                                baseClass: 'offcanvas',
                                placement: 'right',
                                closeBy: 'kt_quick_actions_close',
                                toggleBy: 'kt_quick_actions_toggle'
                            }), Kl.a.scrollInit(t, {
                                disableForMobile: !0,
                                resetHeightOnDestroy: !0,
                                handleWindowResize: !0,
                                height: function () {
                                    var n = parseInt(Kl.a.getViewPort().height);
                                    return e && (n -= parseInt(Kl.a.actualHeight(e)), n -= parseInt(Kl.a.css(e, 'marginTop')), n -= parseInt(Kl.a.css(e, 'marginBottom'))), t && (n -= parseInt(Kl.a.css(t, 'marginTop')), n -= parseInt(Kl.a.css(t, 'marginBottom'))), n -= parseInt(Kl.a.css(l, 'paddingTop')), (n -= parseInt(Kl.a.css(l, 'paddingBottom'))) - 2;
                                }
                            }));
                        },
                        getElement: function () {
                            return l;
                        }
                    };
                }(), je = function () {
                    var l;
                    return {
                        init: function (n) {
                            (l = Kl.a.getById(n)) && function () {
                                new Ge.a(l, {
                                    overlay: !0,
                                    baseClass: 'offcanvas',
                                    placement: 'right',
                                    closeBy: 'kt_quick_cart_close',
                                    toggleBy: 'kt_quick_cart_toggle'
                                });
                                var n = Kl.a.find(l, '.offcanvas-header'), e = Kl.a.find(l, '.offcanvas-content'), t = Kl.a.find(l, '.offcanvas-wrapper'), u = Kl.a.find(l, '.offcanvas-footer');
                                Kl.a.scrollInit(t, {
                                    disableForMobile: !0,
                                    resetHeightOnDestroy: !0,
                                    handleWindowResize: !0,
                                    height: function () {
                                        var i = parseInt(Kl.a.getViewPort().height);
                                        return n && (i -= parseInt(Kl.a.actualHeight(n)), i -= parseInt(Kl.a.css(n, 'marginTop')), i -= parseInt(Kl.a.css(n, 'marginBottom'))), e && (i -= parseInt(Kl.a.css(e, 'marginTop')), i -= parseInt(Kl.a.css(e, 'marginBottom'))), t && (i -= parseInt(Kl.a.css(t, 'marginTop')), i -= parseInt(Kl.a.css(t, 'marginBottom'))), u && (i -= parseInt(Kl.a.actualHeight(u)), i -= parseInt(Kl.a.css(u, 'marginTop')), i -= parseInt(Kl.a.css(u, 'marginBottom'))), i -= parseInt(Kl.a.css(l, 'paddingTop')), (i -= parseInt(Kl.a.css(l, 'paddingBottom'))) - 2;
                                    }
                                });
                            }();
                        }
                    };
                }(), Ke = function () {
                    var l, n, e, t, u = function () {
                            var n = Kl.a.find(l, '.offcanvas-header'), e = Kl.a.find(l, '.offcanvas-content'), t = parseInt(Kl.a.getViewPort().height);
                            return n && (t -= parseInt(Kl.a.actualHeight(n)), t -= parseInt(Kl.a.css(n, 'marginTop')), t -= parseInt(Kl.a.css(n, 'marginBottom'))), e && (t -= parseInt(Kl.a.css(e, 'marginTop')), t -= parseInt(Kl.a.css(e, 'marginBottom'))), t -= parseInt(Kl.a.css(l, 'paddingTop')), (t -= parseInt(Kl.a.css(l, 'paddingBottom'))) - 2;
                        };
                    return {
                        init: function (i) {
                            l = Kl.a.getById(i), n = Kl.a.getById('kt_quick_panel_notifications'), e = Kl.a.getById('kt_quick_panel_logs'), t = Kl.a.getById('kt_quick_panel_settings'), new Ge.a(l, {
                                overlay: !0,
                                baseClass: 'offcanvas',
                                placement: 'right',
                                closeBy: 'kt_quick_panel_close',
                                toggleBy: 'kt_quick_panel_toggle'
                            }), Kl.a.scrollInit(n, {
                                mobileNativeScroll: !0,
                                resetHeightOnDestroy: !0,
                                handleWindowResize: !0,
                                height: function () {
                                    return u();
                                }
                            }), Kl.a.scrollInit(e, {
                                mobileNativeScroll: !0,
                                resetHeightOnDestroy: !0,
                                handleWindowResize: !0,
                                height: function () {
                                    return u();
                                }
                            }), Kl.a.scrollInit(t, {
                                mobileNativeScroll: !0,
                                resetHeightOnDestroy: !0,
                                handleWindowResize: !0,
                                height: function () {
                                    return u();
                                }
                            });
                        }
                    };
                }(), ze = function () {
                    var l;
                    return {
                        init: function (n) {
                            var e, t;
                            (l = Kl.a.getById(n)) && (e = Kl.a.find(l, '.offcanvas-header'), t = Kl.a.find(l, '.offcanvas-content'), new Ge.a(l, {
                                overlay: !0,
                                baseClass: 'offcanvas',
                                placement: 'right',
                                closeBy: 'kt_quick_user_close',
                                toggleBy: [
                                    'kt_quick_user_toggle',
                                    'kt_quick_user_perfil_toggle',
                                    'kt_quick_user_sincronization_toggle',
                                    'kt_quick_user_packages_toggle'
                                ]
                            }), Kl.a.scrollInit(t, {
                                disableForMobile: !0,
                                resetHeightOnDestroy: !0,
                                handleWindowResize: !0,
                                height: function () {
                                    var n = parseInt(Kl.a.getViewPort().height);
                                    return e && (n -= parseInt(Kl.a.actualHeight(e)), n -= parseInt(Kl.a.css(e, 'marginTop')), n -= parseInt(Kl.a.css(e, 'marginBottom'))), t && (n -= parseInt(Kl.a.css(t, 'marginTop')), n -= parseInt(Kl.a.css(t, 'marginBottom'))), n -= parseInt(Kl.a.css(l, 'paddingTop')), (n -= parseInt(Kl.a.css(l, 'paddingBottom'))) - 2;
                                }
                            }));
                        },
                        getElement: function () {
                            return l;
                        }
                    };
                }(), Ue = e('zZCj');
            class qe {
                constructor(l, n, e) {
                    this.layout = l, this.authservice = n, this.store = e, this.user$ = this.store.select(h.b);
                }
                ngOnInit() {
                    this.extraSearchDisplay = this.layout.getProp('extras.search.display'), this.extrasSearchLayout = this.layout.getProp('extras.search.layout'), this.extrasNotificationsDisplay = this.layout.getProp('extras.notifications.display'), this.extrasNotificationsLayout = this.layout.getProp('extras.notifications.layout'), this.extrasQuickActionsDisplay = this.layout.getProp('extras.quickActions.display'), this.extrasQuickActionsLayout = this.layout.getProp('extras.quickActions.layout'), this.extrasCartDisplay = this.layout.getProp('extras.cart.display'), this.extrasCartLayout = this.layout.getProp('extras.cart.layout'), this.extrasLanguagesDisplay = this.layout.getProp('extras.languages.display'), this.extrasUserDisplay = !0, this.extrasUserLayout = 'offcanvas', this.extrasQuickPanelDisplay = this.layout.getProp('extras.quickPanel.display'), this.packages$ = this.store.select(ge.c);
                }
                ngAfterViewInit() {
                    Kl.a.ready(() => {
                        this.extraSearchDisplay && 'offcanvas' === this.extrasSearchLayout && Be.init('kt_quick_search'), this.extrasNotificationsDisplay && 'offcanvas' === this.extrasNotificationsLayout && Ne.init('kt_quick_notifications'), this.extrasQuickActionsDisplay && 'offcanvas' === this.extrasQuickActionsLayout && Fe.init('kt_quick_actions'), this.extrasCartDisplay && 'offcanvas' === this.extrasCartLayout && je.init('kt_quick_cart'), this.extrasQuickPanelDisplay && Ke.init('kt_quick_panel'), this.extrasUserDisplay && 'offcanvas' === this.extrasUserLayout && ze.init('kt_quick_user'), (He = Kl.a.getById('kt_header_mobile_topbar_toggle')) && new Ue.a(He, Kl.a.getBody(), {
                            targetState: 'topbar-mobile-on',
                            toggleState: 'active'
                        });
                    });
                }
            }
            var We = e('Zker'), Ye = t['ɵcrt']({
                    encapsulation: 0,
                    styles: [['']],
                    data: {}
                });
            function Xe(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 5, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 4, 'div', [[
                            'class',
                            'topbar-item'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 3, 'div', [
                        [
                            'class',
                            'btn btn-icon btn-clean btn-dropdown btn-lg mr-1'
                        ],
                        [
                            'id',
                            'kt_quick_cart_toggle'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](3, 16777216, null, null, 2, 'span', [
                        [
                            'cacheSVG',
                            'true'
                        ],
                        [
                            'class',
                            'svg-icon svg-icon-xl svg-icon-primary'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵprd'](512, null, o.SVGCacheService, o.SVGCacheService, [
                        [
                            2,
                            a.APP_BASE_HREF
                        ],
                        [
                            2,
                            a.PlatformLocation
                        ],
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        r.HttpClient,
                        r.HttpBackend,
                        t.RendererFactory2
                    ]),
                    t['ɵdid'](5, 737280, null, 0, d.InlineSVGDirective, [
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        o.SVGCacheService,
                        t.Renderer2,
                        c.InlineSVGService,
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        t.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ],
                        cacheSVG: [
                            1,
                            'cacheSVG'
                        ]
                    }, null)
                ], function (l, n) {
                    l(n, 5, 0, './assets/media/svg/icons/Shopping/Cart3.svg', 'true');
                }, null);
            }
            function $e(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, 'span', [[
                            'class',
                            'badge badge-pill badge-danger'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef])
                ], null, function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform(e.packages$)).length);
                });
            }
            function Ze(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 24, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 23, 'div', [
                        [
                            'class',
                            'dropdown'
                        ],
                        [
                            'ngbDropdown',
                            ''
                        ],
                        [
                            'placement',
                            'bottom'
                        ]
                    ], [[
                            2,
                            'show',
                            null
                        ]], null, null, null, null)),
                    t['ɵdid'](2, 1720320, null, 2, R.v, [
                        t.ChangeDetectorRef,
                        R.x,
                        a.DOCUMENT,
                        t.NgZone,
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            R.K
                        ]
                    ], {
                        placement: [
                            0,
                            'placement'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 1, { _menu: 0 }),
                    t['ɵqud'](603979776, 2, { _anchor: 0 }),
                    (l()(), t['ɵeld'](5, 0, null, null, 9, 'div', [
                        [
                            'class',
                            'topbar-item dropdown-toggle d-none' //ESTILOS DEL BOTON DE CARRITO
                        ],
                        [
                            'data-offset',
                            '10px,0px'
                        ],
                        [
                            'data-toggle',
                            'dropdown'
                        ],
                        [
                            'ngbDropdownToggle',
                            ''
                        ]
                    ], [[
                            1,
                            'aria-expanded',
                            0
                        ]], [
                        [
                            null,
                            'click'
                        ],
                        [
                            null,
                            'keydown.ArrowUp'
                        ],
                        [
                            null,
                            'keydown.ArrowDown'
                        ],
                        [
                            null,
                            'keydown.Home'
                        ],
                        [
                            null,
                            'keydown.End'
                        ],
                        [
                            null,
                            'keydown.Tab'
                        ],
                        [
                            null,
                            'keydown.Shift.Tab'
                        ]
                    ], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 6).dropdown.toggle() && u), 'keydown.ArrowUp' === n && (u = !1 !== t['ɵnov'](l, 6).dropdown.onKeyDown(e) && u), 'keydown.ArrowDown' === n && (u = !1 !== t['ɵnov'](l, 6).dropdown.onKeyDown(e) && u), 'keydown.Home' === n && (u = !1 !== t['ɵnov'](l, 6).dropdown.onKeyDown(e) && u), 'keydown.End' === n && (u = !1 !== t['ɵnov'](l, 6).dropdown.onKeyDown(e) && u), 'keydown.Tab' === n && (u = !1 !== t['ɵnov'](l, 6).dropdown.onKeyDown(e) && u), 'keydown.Shift.Tab' === n && (u = !1 !== t['ɵnov'](l, 6).dropdown.onKeyDown(e) && u), u;
                    }, null, null)),
                    t['ɵdid'](6, 16384, null, 0, R.A, [
                        R.v,
                        t.ElementRef
                    ], null, null),
                    t['ɵprd'](2048, [[
                            2,
                            4
                        ]], R.w, null, [R.A]),
                    (l()(), t['ɵeld'](8, 0, null, null, 6, 'div', [[
                            'class',
                            'btn btn-icon btn-clean btn-dropdown btn-lg mr-1'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](9, 16777216, null, null, 2, 'span', [
                        [
                            'cacheSVG',
                            'true'
                        ],
                        [
                            'class',
                            'svg-icon svg-icon-xl svg-icon-primary'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵprd'](512, null, o.SVGCacheService, o.SVGCacheService, [
                        [
                            2,
                            a.APP_BASE_HREF
                        ],
                        [
                            2,
                            a.PlatformLocation
                        ],
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        r.HttpClient,
                        r.HttpBackend,
                        t.RendererFactory2
                    ]),
                    t['ɵdid'](11, 737280, null, 0, d.InlineSVGDirective, [
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        o.SVGCacheService,
                        t.Renderer2,
                        c.InlineSVGService,
                        [
                            2,
                            s.InlineSVGConfig
                        ],
                        t.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ],
                        cacheSVG: [
                            1,
                            'cacheSVG'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, $e)),
                    t['ɵdid'](13, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵeld'](15, 0, null, null, 9, 'div', [
                        [
                            'class',
                            'dropdown-menu p-0 m-0 dropdown-menu-xl dropdown-menu-anim-up'
                        ],
                        [
                            'ngbDropdownMenu',
                            ''
                        ]
                    ], [
                        [
                            2,
                            'dropdown-menu',
                            null
                        ],
                        [
                            2,
                            'show',
                            null
                        ],
                        [
                            1,
                            'x-placement',
                            0
                        ]
                    ], [
                        [
                            null,
                            'keydown.ArrowUp'
                        ],
                        [
                            null,
                            'keydown.ArrowDown'
                        ],
                        [
                            null,
                            'keydown.Home'
                        ],
                        [
                            null,
                            'keydown.End'
                        ],
                        [
                            null,
                            'keydown.Enter'
                        ],
                        [
                            null,
                            'keydown.Space'
                        ],
                        [
                            null,
                            'keydown.Tab'
                        ],
                        [
                            null,
                            'keydown.Shift.Tab'
                        ]
                    ], function (l, n, e) {
                        var u = !0;
                        return 'keydown.ArrowUp' === n && (u = !1 !== t['ɵnov'](l, 16).dropdown.onKeyDown(e) && u), 'keydown.ArrowDown' === n && (u = !1 !== t['ɵnov'](l, 16).dropdown.onKeyDown(e) && u), 'keydown.Home' === n && (u = !1 !== t['ɵnov'](l, 16).dropdown.onKeyDown(e) && u), 'keydown.End' === n && (u = !1 !== t['ɵnov'](l, 16).dropdown.onKeyDown(e) && u), 'keydown.Enter' === n && (u = !1 !== t['ɵnov'](l, 16).dropdown.onKeyDown(e) && u), 'keydown.Space' === n && (u = !1 !== t['ɵnov'](l, 16).dropdown.onKeyDown(e) && u), 'keydown.Tab' === n && (u = !1 !== t['ɵnov'](l, 16).dropdown.onKeyDown(e) && u), 'keydown.Shift.Tab' === n && (u = !1 !== t['ɵnov'](l, 16).dropdown.onKeyDown(e) && u), u;
                    }, null, null)),
                    t['ɵdid'](16, 16384, [[
                            1,
                            4
                        ]], 1, R.y, [
                        R.v,
                        t.ElementRef
                    ], null, null),
                    t['ɵqud'](603979776, 3, { menuItems: 1 }),
                    (l()(), t['ɵeld'](18, 0, null, null, 6, 'form', [[
                            'novalidate',
                            ''
                        ]], [
                        [
                            2,
                            'ng-untouched',
                            null
                        ],
                        [
                            2,
                            'ng-touched',
                            null
                        ],
                        [
                            2,
                            'ng-pristine',
                            null
                        ],
                        [
                            2,
                            'ng-dirty',
                            null
                        ],
                        [
                            2,
                            'ng-valid',
                            null
                        ],
                        [
                            2,
                            'ng-invalid',
                            null
                        ],
                        [
                            2,
                            'ng-pending',
                            null
                        ]
                    ], [
                        [
                            null,
                            'submit'
                        ],
                        [
                            null,
                            'reset'
                        ]
                    ], function (l, n, e) {
                        var u = !0;
                        return 'submit' === n && (u = !1 !== t['ɵnov'](l, 20).onSubmit(e) && u), 'reset' === n && (u = !1 !== t['ɵnov'](l, 20).onReset() && u), u;
                    }, null, null)),
                    t['ɵdid'](19, 16384, null, 0, D.C, [], null, null),
                    t['ɵdid'](20, 4210688, null, 0, D.s, [
                        [
                            8,
                            null
                        ],
                        [
                            8,
                            null
                        ]
                    ], null, null),
                    t['ɵprd'](2048, null, D.d, null, [D.s]),
                    t['ɵdid'](22, 16384, null, 0, D.r, [[
                            6,
                            D.d
                        ]], null, null),
                    (l()(), t['ɵeld'](23, 0, null, null, 1, 'app-cart-dropdown-inner', [], null, null, null, Re, be)),
                    t['ɵdid'](24, 114688, null, 0, ve, [
                        m.a,
                        v.o,
                        f.r
                    ], null, null)
                ], function (l, n) {
                    var e = n.component;
                    l(n, 2, 0, 'bottom'), l(n, 11, 0, './assets/media/svg/icons/Shopping/Cart3.svg', 'true'), l(n, 13, 0, t['ɵunv'](n, 13, 0, t['ɵnov'](n, 14).transform(e.packages$)).length > 0), l(n, 24, 0);
                }, function (l, n) {
                    l(n, 1, 0, t['ɵnov'](n, 2).isOpen()), l(n, 5, 0, t['ɵnov'](n, 6).dropdown.isOpen()), l(n, 15, 0, !0, t['ɵnov'](n, 16).dropdown.isOpen(), t['ɵnov'](n, 16).placement), l(n, 18, 0, t['ɵnov'](n, 22).ngClassUntouched, t['ɵnov'](n, 22).ngClassTouched, t['ɵnov'](n, 22).ngClassPristine, t['ɵnov'](n, 22).ngClassDirty, t['ɵnov'](n, 22).ngClassValid, t['ɵnov'](n, 22).ngClassInvalid, t['ɵnov'](n, 22).ngClassPending);
                });
            }
            function Je(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 4, null, null, null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Xe)),
                    t['ɵdid'](2, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Ze)),
                    t['ɵdid'](4, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](0, null, null, 0))
                ], function (l, n) {
                    var e = n.component;
                    l(n, 2, 0, 'offcanvas' === e.extrasCartLayout), l(n, 4, 0, 'dropdown' === e.extrasCartLayout);
                }, null);
            }
            function Qe(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'app-language-selector', [[
                            'style',
                            'margin-top: 10px;'
                        ]], null, null, null, Ae, xe)),
                    t['ɵdid'](2, 114688, null, 0, De, [
                        Ie.a,
                        f.r
                    ], null, null)
                ], function (l, n) {
                    l(n, 2, 0);
                }, null);
            }
            function lt(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 13, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 12, 'div', [[
                            'class',
                            'topbar-item'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 11, 'div', [
                        [
                            'class',
                            'btn btn-icon btn-icon-mobile w-auto btn-clean d-flex align-items-center btn-lg px-2'
                        ],
                        [
                            'id',
                            'kt_quick_user_toggle'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 2, 'span', [[
                            'class',
                            'text-muted font-weight-bold font-size-base d-none d-md-inline mr-1'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](4, null, [
                        ' ',
                        ','
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](6, 0, null, null, 2, 'span', [[
                            'class',
                            'text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](7, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵeld'](9, 0, null, null, 4, 'span', [[
                            'class',
                            'symbol symbol-lg-35 symbol-25 symbol-light-success'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](10, 0, null, null, 3, 'span', [
                        [
                            'class',
                            'symbol-label font-size-h5 font-weight-bold'
                        ],
                        [
                            'style',
                            'color: white;'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](11, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    t['ɵppd'](13, 1)
                ], null, function (l, n) {
                    var e = n.component;
                    l(n, 4, 0, t['ɵunv'](n, 4, 0, t['ɵnov'](n, 5).transform('GENERAL.HELLO'))), l(n, 7, 0, t['ɵunv'](n, 7, 0, t['ɵnov'](n, 8).transform(e.user$)).name.split(' ')[0]);
                    var u = t['ɵunv'](n, 11, 0, l(n, 13, 0, t['ɵnov'](n.parent.parent.parent, 0), t['ɵunv'](n, 11, 0, t['ɵnov'](n, 12).transform(e.user$)).name.split(' ')[0]));
                    l(n, 11, 0, u);
                });
            }
            function nt(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, null, null, null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, lt)),
                    t['ɵdid'](2, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵand'](0, null, null, 0))
                ], function (l, n) {
                    var e = n.component;
                    l(n, 2, 0, t['ɵunv'](n, 2, 0, t['ɵnov'](n, 3).transform(e.user$)));
                }, null);
            }
            function et(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 24, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 23, 'div', [
                        [
                            'class',
                            'dropdown'
                        ],
                        [
                            'ngbDropdown',
                            ''
                        ],
                        [
                            'placement',
                            'bottom-right'
                        ]
                    ], [[
                            2,
                            'show',
                            null
                        ]], null, null, null, null)),
                    t['ɵdid'](2, 1720320, null, 2, R.v, [
                        t.ChangeDetectorRef,
                        R.x,
                        a.DOCUMENT,
                        t.NgZone,
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            R.K
                        ]
                    ], {
                        placement: [
                            0,
                            'placement'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 4, { _menu: 0 }),
                    t['ɵqud'](603979776, 5, { _anchor: 0 }),
                    (l()(), t['ɵeld'](5, 0, null, null, 14, 'div', [
                        [
                            'class',
                            'topbar-item dropdown-toggle'
                        ],
                        [
                            'data-offset',
                            '0px,0px'
                        ],
                        [
                            'data-toggle',
                            'dropdown'
                        ],
                        [
                            'ngbDropdownToggle',
                            ''
                        ]
                    ], [[
                            1,
                            'aria-expanded',
                            0
                        ]], [
                        [
                            null,
                            'click'
                        ],
                        [
                            null,
                            'keydown.ArrowUp'
                        ],
                        [
                            null,
                            'keydown.ArrowDown'
                        ],
                        [
                            null,
                            'keydown.Home'
                        ],
                        [
                            null,
                            'keydown.End'
                        ],
                        [
                            null,
                            'keydown.Tab'
                        ],
                        [
                            null,
                            'keydown.Shift.Tab'
                        ]
                    ], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 6).dropdown.toggle() && u), 'keydown.ArrowUp' === n && (u = !1 !== t['ɵnov'](l, 6).dropdown.onKeyDown(e) && u), 'keydown.ArrowDown' === n && (u = !1 !== t['ɵnov'](l, 6).dropdown.onKeyDown(e) && u), 'keydown.Home' === n && (u = !1 !== t['ɵnov'](l, 6).dropdown.onKeyDown(e) && u), 'keydown.End' === n && (u = !1 !== t['ɵnov'](l, 6).dropdown.onKeyDown(e) && u), 'keydown.Tab' === n && (u = !1 !== t['ɵnov'](l, 6).dropdown.onKeyDown(e) && u), 'keydown.Shift.Tab' === n && (u = !1 !== t['ɵnov'](l, 6).dropdown.onKeyDown(e) && u), u;
                    }, null, null)),
                    t['ɵdid'](6, 16384, null, 0, R.A, [
                        R.v,
                        t.ElementRef
                    ], null, null),
                    t['ɵprd'](2048, [[
                            5,
                            4
                        ]], R.w, null, [R.A]),
                    (l()(), t['ɵeld'](8, 0, null, null, 11, 'div', [[
                            'class',
                            'btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](9, 0, null, null, 2, 'span', [[
                            'class',
                            'text-muted font-weight-bold font-size-base d-none d-md-inline mr-1'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](10, null, [
                        ' ',
                        ','
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](12, 0, null, null, 2, 'span', [[
                            'class',
                            'text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](13, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵeld'](15, 0, null, null, 4, 'span', [[
                            'class',
                            'symbol symbol-35 symbol-light-success'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](16, 0, null, null, 3, 'span', [[
                            'class',
                            'symbol-label font-size-h5 font-weight-bold'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](17, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    t['ɵppd'](19, 1),
                    (l()(), t['ɵeld'](20, 0, null, null, 4, 'div', [
                        [
                            'class',
                            'dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg p-0'
                        ],
                        [
                            'ngbDropdownMenu',
                            ''
                        ]
                    ], [
                        [
                            2,
                            'dropdown-menu',
                            null
                        ],
                        [
                            2,
                            'show',
                            null
                        ],
                        [
                            1,
                            'x-placement',
                            0
                        ]
                    ], [
                        [
                            null,
                            'keydown.ArrowUp'
                        ],
                        [
                            null,
                            'keydown.ArrowDown'
                        ],
                        [
                            null,
                            'keydown.Home'
                        ],
                        [
                            null,
                            'keydown.End'
                        ],
                        [
                            null,
                            'keydown.Enter'
                        ],
                        [
                            null,
                            'keydown.Space'
                        ],
                        [
                            null,
                            'keydown.Tab'
                        ],
                        [
                            null,
                            'keydown.Shift.Tab'
                        ]
                    ], function (l, n, e) {
                        var u = !0;
                        return 'keydown.ArrowUp' === n && (u = !1 !== t['ɵnov'](l, 21).dropdown.onKeyDown(e) && u), 'keydown.ArrowDown' === n && (u = !1 !== t['ɵnov'](l, 21).dropdown.onKeyDown(e) && u), 'keydown.Home' === n && (u = !1 !== t['ɵnov'](l, 21).dropdown.onKeyDown(e) && u), 'keydown.End' === n && (u = !1 !== t['ɵnov'](l, 21).dropdown.onKeyDown(e) && u), 'keydown.Enter' === n && (u = !1 !== t['ɵnov'](l, 21).dropdown.onKeyDown(e) && u), 'keydown.Space' === n && (u = !1 !== t['ɵnov'](l, 21).dropdown.onKeyDown(e) && u), 'keydown.Tab' === n && (u = !1 !== t['ɵnov'](l, 21).dropdown.onKeyDown(e) && u), 'keydown.Shift.Tab' === n && (u = !1 !== t['ɵnov'](l, 21).dropdown.onKeyDown(e) && u), u;
                    }, null, null)),
                    t['ɵdid'](21, 16384, [[
                            4,
                            4
                        ]], 1, R.y, [
                        R.v,
                        t.ElementRef
                    ], null, null),
                    t['ɵqud'](603979776, 6, { menuItems: 1 }),
                    (l()(), t['ɵeld'](23, 0, null, null, 1, 'app-user-dropdown-inner', [], null, null, null, Me, _e)),
                    t['ɵdid'](24, 114688, null, 0, Ve, [m.a], null, null)
                ], function (l, n) {
                    l(n, 2, 0, 'bottom-right'), l(n, 24, 0);
                }, function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, t['ɵnov'](n, 2).isOpen()), l(n, 5, 0, t['ɵnov'](n, 6).dropdown.isOpen()), l(n, 10, 0, t['ɵunv'](n, 10, 0, t['ɵnov'](n, 11).transform('GENERAL.HELLO'))), l(n, 13, 0, t['ɵunv'](n, 13, 0, t['ɵnov'](n, 14).transform(e.user$)).name.split(' ')[0]);
                    var u = t['ɵunv'](n, 17, 0, l(n, 19, 0, t['ɵnov'](n.parent.parent.parent, 0), t['ɵunv'](n, 17, 0, t['ɵnov'](n, 18).transform(e.user$)).name.split(' ')[0]));
                    l(n, 17, 0, u), l(n, 20, 0, !0, t['ɵnov'](n, 21).dropdown.isOpen(), t['ɵnov'](n, 21).placement);
                });
            }
            function tt(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, et)),
                    t['ɵdid'](2, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](0, null, null, 0))
                ], function (l, n) {
                    l(n, 2, 0, n.component.user$);
                }, null);
            }
            function ut(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 4, null, null, null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, nt)),
                    t['ɵdid'](2, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, tt)),
                    t['ɵdid'](4, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](0, null, null, 0))
                ], function (l, n) {
                    var e = n.component;
                    l(n, 2, 0, 'offcanvas' === e.extrasUserLayout), l(n, 4, 0, 'dropdown' === e.extrasUserLayout);
                }, null);
            }
            function it(l) {
                return t['ɵvid'](0, [
                    t['ɵpid'](0, Te, []),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Je)),
                    t['ɵdid'](2, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Qe)),
                    t['ɵdid'](4, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, ut)),
                    t['ɵdid'](6, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null)
                ], function (l, n) {
                    var e = n.component;
                    l(n, 2, 0, e.extrasCartDisplay), l(n, 4, 0, e.extrasLanguagesDisplay), l(n, 6, 0, e.extrasUserDisplay);
                }, null);
            }
            var ot, at, st, rt, dt = function () {
                    var l, n;
                    return {
                        init: function (e, t) {
                            l = Kl.a.getById(e), n = Kl.a.getById(t);
                        },
                        isFixed: function () {
                            return Kl.a.hasClass(Kl.a.getBody(), 'header-fixed');
                        },
                        isFixedForMobile: function () {
                            return Kl.a.hasClass(Kl.a.getBody(), 'header-mobile-fixed');
                        },
                        getElement: function () {
                            return l;
                        },
                        getElementForMobile: function () {
                            return n;
                        },
                        getHeader: function () {
                        },
                        getHeight: function () {
                            return n = 0, l && (n = Kl.a.actualHeight(l) + 1), n;
                            var n;
                        },
                        getHeightForMobile: function () {
                            return Kl.a.actualHeight(n);
                        }
                    };
                }(), ct = e('bxSH'), ft = {
                    init: function (l, n) {
                        ot = Kl.a.getById(l), st = Kl.a.getById(n), ot && (rt = new Ge.a(st, {
                            overlay: !0,
                            baseClass: 'header-menu-wrapper',
                            closeBy: 'kt_header_menu_mobile_close_btn',
                            toggleBy: {
                                target: 'kt_header_mobile_toggle',
                                state: 'mobile-toggle-active'
                            }
                        }), (at = new ct.a(ot, {
                            submenu: {
                                desktop: 'dropdown',
                                tablet: 'accordion',
                                mobile: 'accordion'
                            },
                            accordion: {
                                slideSpeed: 200,
                                expandAll: !1
                            }
                        })).on('linkClick', function (l) {
                            Kl.a.isBreakpointDown('lg') && rt.hide();
                        }));
                    },
                    getMenuElement: function () {
                        return ot;
                    },
                    getOffcanvasElement: function () {
                        return st;
                    },
                    getMenu: function () {
                        return at;
                    },
                    pauseDropdownHover: function (l) {
                        at && at.pauseDropdownHover(l);
                    },
                    getOffcanvas: function () {
                        return rt;
                    },
                    closeMobileOffcanvas: function () {
                        at && Kl.a.isMobileDevice() && rt.hide();
                    }
                };
            class pt {
                constructor(l, n) {
                    this.layout = l, this.router = n, this.headerMenuHTMLAttributes = {}, this.loaderSubject = new M.a(0), this.unsubscribe = [], this.loader$ = this.loaderSubject;
                    const e = this.router.events.subscribe(l => {
                        l instanceof f.g && this.loaderSubject.next(10), l instanceof f.p && this.loaderSubject.next(65), l instanceof f.o && this.loaderSubject.next(90), (l instanceof f.e || l instanceof f.d) && (this.loaderSubject.next(100), this.routerLoaderTimout && clearTimeout(this.routerLoaderTimout), this.routerLoaderTimout = setTimeout(() => {
                            this.loaderSubject.next(0);
                        }, 300));
                    });
                    this.unsubscribe.push(e);
                }
                ngOnInit() {
                    this.headerContainerCSSClasses = this.layout.getStringCSSClasses('header_container'), this.headerMenuSelfDisplay = this.layout.getProp('header.menu.self.display'), this.asideSelfDisplay = this.layout.getProp('aside.self.display'), this.headerSelfTheme = this.layout.getProp('header.self.theme') || '', this.headerLogo = this.getLogoURL(), this.headerMenuCSSClasses = this.layout.getStringCSSClasses('header_menu'), this.headerMenuHTMLAttributes = this.layout.getHTMLAttributes('header_menu');
                }
                getLogoURL() {
                    let l = 'logo-light.png';
                    return this.headerSelfTheme && 'light' === this.headerSelfTheme && (l = 'logo-dark.png'), this.headerSelfTheme && 'dark' === this.headerSelfTheme && (l = 'logo-dark.png'), './assets/media/logos/' + l;
                }
                ngAfterViewInit() {
                    if (this.ktHeaderMenu)
                        for (const l in this.headerMenuHTMLAttributes)
                            this.headerMenuHTMLAttributes.hasOwnProperty(l) && (this.ktHeaderMenu.nativeElement.attributes[l] = this.headerMenuHTMLAttributes[l]);
                    Kl.a.ready(() => {
                        dt.init('kt_header', 'kt_header_mobile'), ft.init('kt_header_menu', 'kt_header_menu_wrapper');
                    });
                }
                ngOnDestroy() {
                    this.unsubscribe.forEach(l => l.unsubscribe()), this.routerLoaderTimout && clearTimeout(this.routerLoaderTimout);
                }
            }
            var ht = t['ɵcrt']({
                encapsulation: 0,
                styles: [['[_nghost-%COMP%]     .loading-bar{position:absolute;top:0;left:0;right:0;width:100%}[_nghost-%COMP%]     .loading-bar .progress-bar{background-color:#5d78ff}[_nghost-%COMP%]     .topbar-item{height:100%}@media (min-width:1025px){[_nghost-%COMP%]     .topbar, [_nghost-%COMP%]     .topbar-item-wrapper{height:100%}}']],
                data: {}
            });
            function gt(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'ngb-progressbar', [
                        [
                            'class',
                            'loading-bar'
                        ],
                        [
                            'height',
                            '3px'
                        ]
                    ], null, null, null, En.d, En.c)),
                    t['ɵdid'](2, 49152, null, 0, R.T, [R.U], {
                        value: [
                            0,
                            'value'
                        ],
                        height: [
                            1,
                            'height'
                        ]
                    }, null)
                ], function (l, n) {
                    l(n, 2, 0, n.context.ngIf, '3px');
                }, null);
            }
            function mt(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 4, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 3, 'div', [[
                            'class',
                            'header-logo'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 2, 'a', [[
                            'routerLink',
                            '/'
                        ]], [
                        [
                            1,
                            'target',
                            0
                        ],
                        [
                            8,
                            'href',
                            4
                        ]
                    ], [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 3).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](3, 671744, null, 0, f.u, [
                        f.r,
                        f.a,
                        a.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](4, 0, null, null, 0, 'img', [[
                            'alt',
                            'Logo'
                        ]], [[
                            1,
                            'src',
                            4
                        ]], null, null, null, null))
                ], function (l, n) {
                    l(n, 3, 0, '/');
                }, function (l, n) {
                    var e = n.component;
                    l(n, 2, 0, t['ɵnov'](n, 3).target, t['ɵnov'](n, 3).href), l(n, 4, 0, e.headerLogo);
                });
            }
            function vt(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 2, 'div', [
                        [
                            'class',
                            'header-menu-wrapper header-menu-wrapper-left'
                        ],
                        [
                            'id',
                            'kt_header_menu_wrapper'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, mt)),
                    t['ɵdid'](3, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null)
                ], function (l, n) {
                    l(n, 3, 0, !n.component.asideSelfDisplay);
                }, null);
            }
            function bt(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 0, 'div', [], null, null, null, null, null))
                ], null, null);
            }
            function yt(l) {
                return t['ɵvid'](0, [
                    t['ɵqud'](402653184, 1, { ktHeaderMenu: 0 }),
                    (l()(), t['ɵeld'](1, 0, null, null, 10, 'div', [[
                            'class',
                            'd-flex align-items-stretch justify-content-between'
                        ]], null, null, null, null, null)),
                    t['ɵdid'](2, 278528, null, 0, a.NgClass, [
                        t.IterableDiffers,
                        t.KeyValueDiffers,
                        t.ElementRef,
                        t.Renderer2
                    ], {
                        klass: [
                            0,
                            'klass'
                        ],
                        ngClass: [
                            1,
                            'ngClass'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, gt)),
                    t['ɵdid'](4, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, vt)),
                    t['ɵdid'](7, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, bt)),
                    t['ɵdid'](9, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](10, 0, null, null, 1, 'app-topbar', [[
                            'class',
                            'topbar'
                        ]], null, null, null, it, Ye)),
                    t['ɵdid'](11, 4308992, null, 0, qe, [
                        m.a,
                        We.a,
                        v.o
                    ], null, null)
                ], function (l, n) {
                    var e = n.component;
                    l(n, 2, 0, 'd-flex align-items-stretch justify-content-between', e.headerContainerCSSClasses), l(n, 4, 0, t['ɵunv'](n, 4, 0, t['ɵnov'](n, 5).transform(e.loader$))), l(n, 7, 0, e.headerMenuSelfDisplay), l(n, 9, 0, !e.headerMenuSelfDisplay), l(n, 11, 0);
                }, null);
            }
            class wt {
                constructor(l) {
                    this.router = l;
                }
                ngOnInit() {
                }
                navigateToBuilder() {
                    this.router.navigate(['/builder']);
                }
            }
            var St = t['ɵcrt']({
                encapsulation: 0,
                styles: [['']],
                data: {}
            });
            function Ct(l) {
                return t['ɵvid'](0, [], null, null);
            }
            var kt = e('N8BJ'), Rt = t['ɵcrt']({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });
            function Dt(l) {
                return t['ɵvid'](0, [
                    t['ɵncd'](null, 0),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'block-ui-content', [], null, null, null, Lt, Et)),
                    t['ɵdid'](2, 12828672, null, 0, kt.c, [
                        kt.h,
                        t.ComponentFactoryResolver,
                        t.ChangeDetectorRef
                    ], {
                        name: [
                            0,
                            'name'
                        ],
                        delayStart: [
                            1,
                            'delayStart'
                        ],
                        delayStop: [
                            2,
                            'delayStop'
                        ],
                        defaultMessage: [
                            3,
                            'defaultMessage'
                        ],
                        templateCmp: [
                            4,
                            'templateCmp'
                        ]
                    }, null)
                ], function (l, n) {
                    var e = n.component;
                    l(n, 2, 0, e.name, e.delayStart, e.delayStop, e.message, e.template);
                }, null);
            }
            function It(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'block-ui', [], null, null, null, Dt, Rt)),
                    t['ɵdid'](1, 114688, null, 0, kt.b, [kt.h], null, null)
                ], function (l, n) {
                    l(n, 1, 0);
                }, null);
            }
            var xt = t['ɵccf']('block-ui', kt.b, It, {
                    name: 'name',
                    message: 'message',
                    delayStart: 'delayStart',
                    delayStop: 'delayStop',
                    template: 'template'
                }, {}, ['*']), Et = t['ɵcrt']({
                    encapsulation: 2,
                    styles: ['\n.block-ui-wrapper {\n  display: none;\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.70);\n  z-index: 30000;\n  cursor: wait;\n}\n\n.block-ui-wrapper.block-ui-wrapper--element {\n  position: absolute;\n}\n\n.block-ui-wrapper.active {\n  display: block;\n}\n\n.block-ui-wrapper.block-ui-main {\n  position: fixed;\n}\n\n.block-ui-spinner,\n.block-ui-template {\n  position: absolute;\n  top: 40%;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n}\n\n.block-ui-spinner > .message {\n  font-size: 1.3em;\n  text-align: center;\n  color: #fff;\n}\n\n.block-ui__element {\n  position: relative;\n}\n\n.loader,\n.loader:after {\n  border-radius: 50%;\n  width: 10em;\n  height: 10em;\n}\n.loader {\n  margin: 7px auto;\n  font-size: 5px;\n  position: relative;\n  text-indent: -9999em;\n  border-top: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-right: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-left: 1.1em solid #ffffff;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: load8 1.1s infinite linear;\n  animation: load8 1.1s infinite linear;\n}\n\n@-webkit-keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n'],
                    data: {}
                });
            function At(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'div', [[
                            'class',
                            'message'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        ' ',
                        ' '
                    ]))
                ], null, function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.message || e.defaultMessage);
                });
            }
            function Tt(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, 'div', [[
                            'class',
                            'block-ui-spinner'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 0, 'div', [[
                            'class',
                            'loader'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, At)),
                    t['ɵdid'](3, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null)
                ], function (l, n) {
                    var e = n.component;
                    l(n, 3, 0, e.message || e.defaultMessage);
                }, null);
            }
            function Vt(l) {
                return t['ɵvid'](0, [(l()(), t['ɵand'](0, null, null, 0))], null, null);
            }
            function _t(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵand'](16777216, [
                        [
                            1,
                            3
                        ],
                        [
                            'templateOutlet',
                            2
                        ]
                    ], null, 0, null, Vt)),
                    (l()(), t['ɵand'](0, null, null, 0))
                ], null, null);
            }
            function Lt(l) {
                return t['ɵvid'](0, [
                    t['ɵqud'](671088640, 1, { templateOutlet: 0 }),
                    (l()(), t['ɵeld'](1, 0, null, null, 6, 'div', [], null, null, null, null, null)),
                    t['ɵdid'](2, 278528, null, 0, a.NgClass, [
                        t.IterableDiffers,
                        t.KeyValueDiffers,
                        t.ElementRef,
                        t.Renderer2
                    ], {
                        klass: [
                            0,
                            'klass'
                        ],
                        ngClass: [
                            1,
                            'ngClass'
                        ]
                    }, null),
                    t['ɵpod'](3, { active: 0 }),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Tt)),
                    t['ɵdid'](5, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, _t)),
                    t['ɵdid'](7, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null)
                ], function (l, n) {
                    var e = n.component, u = t['ɵinlineInterpolate'](2, 'block-ui-wrapper ', e.name, ' ', e.className, ''), i = l(n, 3, 0, e.state.blockCount > 0);
                    l(n, 2, 0, u, i), l(n, 5, 0, !e.templateCmp), l(n, 7, 0, e.templateCmp);
                }, null);
            }
            function Ot(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'block-ui-content', [], null, null, null, Lt, Et)),
                    t['ɵdid'](1, 12828672, null, 0, kt.c, [
                        kt.h,
                        t.ComponentFactoryResolver,
                        t.ChangeDetectorRef
                    ], null, null)
                ], function (l, n) {
                    l(n, 1, 0);
                }, null);
            }
            var Pt = t['ɵccf']('block-ui-content', kt.c, Ot, {
                    name: 'name',
                    delayStart: 'delayStart',
                    delayStop: 'delayStop',
                    defaultMessage: 'message',
                    templateCmp: 'template'
                }, {}, []), Mt = e('66zS'), Ht = e('W4B1'), Gt = e('WJhm'), Bt = e('tYkK'), Nt = e('HeVh'), Ft = e('SCoL'), jt = e('vZwM'), Kt = e('EvHu'), zt = e('iB+a'), Ut = e('rIfD'), qt = e('ESrA'), Wt = e('AytR'), Yt = e('2PzG');
            class Xt extends qt.a {
                constructor(l) {
                    super(), this.store = l, this.isLoading = !1, this.canConfirm = !0, this.changeStep = !1, this.showVerifyButton = !0;
                }
                getValuesStore() {
                    this.store.select(l => l.auth.user.mobil_device).pipe(Object(Ln.a)(this._ngUnsubscribe)).subscribe(l => {
                        this.verifyIfChangeStep(l);
                    });
                }
                ngOnInit() {
                    this.getValuesStore();
                }
                verifyDownloadAppConfig() {
                    this.canConfirm = !1, this.startCounterActiveButton(), this.store.dispatch(new Ut.e());
                }
                startCounterActiveButton() {
                    setTimeout(() => {
                        this.canConfirm = !0;
                    }, Wt.a.timeVerifyDownloadApp);
                }
                verifyIfChangeStep(l) {
                    '' != l && null != l && this.store.dispatch(new Ut.a(Yt.a.digitalSignature));
                }
            }
            var $t = t['ɵcrt']({
                encapsulation: 0,
                styles: [['.aaa[_ngcontent-%COMP%]{width:100px;height:200px;background-image:url(background_step1.a3430ad9cd91386f7d5d.svg);border:2px solid #777171}']],
                data: {}
            });
            function Zt(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 16777216, null, null, 4, 'i', [
                        [
                            'class',
                            'm-2'
                        ],
                        [
                            'nz-icon',
                            ''
                        ],
                        [
                            'nz-tooltip',
                            ''
                        ],
                        [
                            'nzType',
                            'info-circle'
                        ],
                        [
                            'style',
                            'font-size: 2rem;'
                        ]
                    ], [
                        [
                            2,
                            'anticon',
                            null
                        ],
                        [
                            2,
                            'ant-tooltip-open',
                            null
                        ]
                    ], null, null, null, null)),
                    t['ɵdid'](1, 2703360, null, 0, Mt.a, [
                        t.ElementRef,
                        Mt.d,
                        t.Renderer2,
                        [
                            2,
                            Mt.c
                        ]
                    ], {
                        nzType: [
                            0,
                            'nzType'
                        ]
                    }, null),
                    t['ɵdid'](2, 4866048, null, 0, Ht.c, [
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        t.Renderer2,
                        [
                            8,
                            null
                        ]
                    ], {
                        title: [
                            0,
                            'title'
                        ],
                        directiveTitle: [
                            1,
                            'directiveTitle'
                        ]
                    }, null),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    t['ɵdid'](4, 4734976, null, 0, Gt.a, [
                        t.ElementRef,
                        t.Renderer2
                    ], null, null),
                    (l()(), t['ɵand'](0, null, null, 0))
                ], function (l, n) {
                    l(n, 1, 0, 'info-circle'), l(n, 2, 0, t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 2, 0, t['ɵnov'](n, 3).transform('FORM.DESCRIPTIONS.DOWNLOAD_APP.AWAIT_VERIFY')), ''), '');
                }, function (l, n) {
                    l(n, 0, 0, !0, t['ɵnov'](n, 2).visible);
                });
            }
            function Jt(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 8, 'div', [[
                            'nz-row',
                            ''
                        ]], [
                        [
                            2,
                            'ant-row-top',
                            null
                        ],
                        [
                            2,
                            'ant-row-middle',
                            null
                        ],
                        [
                            2,
                            'ant-row-bottom',
                            null
                        ],
                        [
                            2,
                            'ant-row-start',
                            null
                        ],
                        [
                            2,
                            'ant-row-end',
                            null
                        ],
                        [
                            2,
                            'ant-row-center',
                            null
                        ],
                        [
                            2,
                            'ant-row-space-around',
                            null
                        ],
                        [
                            2,
                            'ant-row-space-between',
                            null
                        ]
                    ], null, null, null, null)),
                    t['ɵdid'](1, 4931584, null, 0, Bt.c, [
                        t.ElementRef,
                        t.Renderer2,
                        Nt.b,
                        t.NgZone,
                        Ft.a,
                        jt.b
                    ], null, null),
                    (l()(), t['ɵeld'](2, 0, null, null, 6, 'div', [
                        [
                            'div',
                            ''
                        ],
                        [
                            'nz-col',
                            ''
                        ],
                        [
                            'nzSpan',
                            '24'
                        ]
                    ], [[
                            4,
                            'flex',
                            null
                        ]], null, null, null, null)),
                    t['ɵdid'](3, 4931584, null, 0, Bt.a, [
                        t.ElementRef,
                        [
                            2,
                            Bt.c
                        ],
                        t.Renderer2
                    ], {
                        nzSpan: [
                            0,
                            'nzSpan'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](4, 0, null, null, 2, 'button', [[
                            'class',
                            'btn btn-primary m-5'
                        ]], [[
                            8,
                            'disabled',
                            0
                        ]], [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.verifyDownloadAppConfig() && t), t;
                    }, null, null)),
                    (l()(), t['ɵted'](5, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Zt)),
                    t['ɵdid'](8, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null)
                ], function (l, n) {
                    var e = n.component;
                    l(n, 1, 0), l(n, 3, 0, '24'), l(n, 8, 0, !e.canConfirm);
                }, function (l, n) {
                    var e = n.component;
                    l(n, 0, 0, 'top' === t['ɵnov'](n, 1).nzAlign, 'middle' === t['ɵnov'](n, 1).nzAlign, 'bottom' === t['ɵnov'](n, 1).nzAlign, 'start' === t['ɵnov'](n, 1).nzJustify, 'end' === t['ɵnov'](n, 1).nzJustify, 'center' === t['ɵnov'](n, 1).nzJustify, 'space-around' === t['ɵnov'](n, 1).nzJustify, 'space-between' === t['ɵnov'](n, 1).nzJustify), l(n, 2, 0, t['ɵnov'](n, 3).hostFlexStyle), l(n, 4, 0, !e.canConfirm), l(n, 5, 0, t['ɵunv'](n, 5, 0, t['ɵnov'](n, 6).transform('FORM.BUTTOMS.DOWNLOAD_CONFIRM')));
                });
            }
            function Qt(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 15, 'ce-layout-dashboard', [], null, null, null, Kt.b, Kt.a)),
                    t['ɵdid'](1, 638976, null, 0, zt.a, [t.ChangeDetectorRef], null, null),
                    (l()(), t['ɵeld'](2, 0, null, 0, 13, 'div', [
                        [
                            'class',
                            'p-4 m-1'
                        ],
                        [
                            'content',
                            ''
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 5, 'h2', [[
                            'class',
                            'display-4'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](4, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](6, 0, null, null, 2, 'small', [[
                            'class',
                            'text-muted'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](7, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](9, 0, null, null, 1, 'img', [
                        [
                            'class',
                            'wizard-icon'
                        ],
                        [
                            'src',
                            '../../../../../../assets\\media\\svg\\custom\\basic-info\\steps\\background_step1.svg'
                        ]
                    ], [[
                            8,
                            'alt',
                            0
                        ]], null, null, null, null)),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](11, 0, null, null, 2, 'p', [[
                            'class',
                            'p-3 m-1'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](12, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Jt)),
                    t['ɵdid'](15, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null)
                ], function (l, n) {
                    var e = n.component;
                    l(n, 1, 0), l(n, 15, 0, e.showVerifyButton);
                }, function (l, n) {
                    l(n, 4, 0, t['ɵunv'](n, 4, 0, t['ɵnov'](n, 5).transform('FORM.DESCRIPTIONS.DOWNLOAD_APP.NORMAL'))), l(n, 7, 0, t['ɵunv'](n, 7, 0, t['ɵnov'](n, 8).transform('FORM.DESCRIPTIONS.DOWNLOAD_APP.MUTED'))), l(n, 9, 0, t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 9, 0, t['ɵnov'](n, 10).transform('BASIC_INFO.STEP1.TITLE')), '')), l(n, 12, 0, t['ɵunv'](n, 12, 0, t['ɵnov'](n, 13).transform('FORM.DESCRIPTIONS.DOWNLOAD_APP.SEARCH_APP')));
                });
            }
            var lu = e('1jwE'), nu = function () {
                    var l, n;
                    return {
                        init: function (e) {
                            var t;
                            (l = Kl.a.getById(e)) && (t = 300, void 0 !== dt && (t = dt.getHeight()), (n = new lu.a(l, {
                                sticky: {
                                    offset: t,
                                    zIndex: 90,
                                    position: {
                                        top: function () {
                                            var l = 0;
                                            return Kl.a.getBody(), Kl.a.isBreakpointUp('lg') ? (void 0 !== dt && dt.isFixed() && (l += dt.getHeight()), void 0 !== zl && zl.isFixed() && (l += zl.getHeight())) : void 0 !== dt && dt.isFixedForMobile() && (l += dt.getHeightForMobile()), l - 1;
                                        },
                                        left: function (n) {
                                            return Kl.a.offset(l).left;
                                        },
                                        right: function (n) {
                                            var e = Kl.a.getBody(), t = parseInt(Kl.a.css(l, 'width'));
                                            return parseInt(Kl.a.css(e, 'width')) - t - Kl.a.offset(l).left;
                                        }
                                    }
                                }
                            })).initSticky(), Kl.a.addResizeHandler(function () {
                                n.updateSticky();
                            }));
                        },
                        update: function () {
                            n && n.updateSticky();
                        }
                    };
                }(), eu = function () {
                    var l;
                    return {
                        init: function (n) {
                            l = Kl.a.getById(n);
                        },
                        getElement: function () {
                            return l;
                        },
                        getHeight: function () {
                            return n = 0, l && (n = Kl.a.actualHeight(l)), n;
                            var n;
                        }
                    };
                }(), tu = function () {
                    var l, n, e;
                    return {
                        init: function (t) {
                            var u;
                            n = Kl.a.getById(t), l = Kl.a.getBody(), n && (u = Kl.a.hasClass(n, 'aside-offcanvas-default') ? 'aside-offcanvas-default' : 'aside', e = new Ge.a(n, {
                                baseClass: u,
                                overlay: !0,
                                closeBy: 'kt_aside_close_btn',
                                toggleBy: {
                                    target: 'kt_aside_mobile_toggle',
                                    state: 'mobile-toggle-active'
                                }
                            }));
                        },
                        getElement: function () {
                            return n;
                        },
                        getOffcanvas: function () {
                            return e;
                        },
                        isFixed: function () {
                            return Kl.a.hasClass(l, 'aside-fixed');
                        },
                        isMinimized: function () {
                            return Kl.a.hasClass(l, 'aside-fixed') && Kl.a.hasClass(l, 'aside-minimize');
                        },
                        isHoverable: function () {
                            return Kl.a.hasClass(l, 'aside-fixed') && Kl.a.hasClass(l, 'aside-minimize-hoverable');
                        }
                    };
                }(), uu = function () {
                    var l, n, e;
                    return {
                        init: function (t) {
                            var u, i, o, a;
                            l = Kl.a.getBody(), (n = Kl.a.getById(t)) && (i = '1' === Kl.a.attr(n, 'data-menu-dropdown') ? 'dropdown' : 'accordion', '1' === Kl.a.attr(n, 'data-menu-scroll') && (u = {
                                rememberPosition: !0,
                                height: function () {
                                    var l = parseInt(Kl.a.getViewPort().height);
                                    return Kl.a.isBreakpointUp('lg') && (l -= eu.getHeight()), l - (parseInt(Kl.a.css(n, 'marginBottom')) + parseInt(Kl.a.css(n, 'marginTop')));
                                }
                            }), e = new ct.a(n, {
                                scroll: u,
                                submenu: {
                                    desktop: i,
                                    tablet: 'accordion',
                                    mobile: 'accordion'
                                },
                                accordion: { expandAll: !1 }
                            }), Kl.a.hasClass(l, 'aside-fixed') && Kl.a.hasClass(l, 'aside-minimize-hoverable') && (Kl.a.addEvent(n, 'mouseenter', function (n) {
                                n.preventDefault(), !1 !== Kl.a.isBreakpointUp('lg') && (a && (clearTimeout(a), a = null), o && (clearTimeout(o), o = null), o = setTimeout(function () {
                                    Kl.a.hasClass(l, 'aside-minimize') && Kl.a.isBreakpointUp('lg') && (Kl.a.addClass(l, 'aside-minimize-hover'), uu.getMenu().scrollUpdate(), uu.getMenu().scrollTop());
                                }, 50));
                            }), Kl.a.addEvent(tu.getElement(), 'mouseleave', function (n) {
                                n.preventDefault(), !1 !== Kl.a.isBreakpointUp('lg') && (o && (clearTimeout(o), o = null), a && (clearTimeout(a), a = null), a = setTimeout(function () {
                                    Kl.a.hasClass(l, 'aside-minimize-hover') && Kl.a.isBreakpointUp('lg') && (Kl.a.removeClass(l, 'aside-minimize-hover'), uu.getMenu().scrollUpdate(), uu.getMenu().scrollTop());
                                }, 100));
                            })));
                        },
                        getElement: function () {
                            return n;
                        },
                        getMenu: function () {
                            return e;
                        },
                        pauseDropdownHover: function (l) {
                            e && e.pauseDropdownHover(l);
                        },
                        closeMobileOffcanvas: function () {
                            e && Kl.a.isMobileDevice() && e.hide();
                        }
                    };
                }(), iu = uu, ou = e('68Zv'), au = function () {
                    var l, n, e;
                    return {
                        init: function (t) {
                            n = Kl.a.getById(t), l = Kl.a.getBody(), n && ((e = new Ue.a(n, l, {
                                targetState: 'aside-minimize',
                                toggleState: 'active'
                            })).on('toggle', function (l) {
                                void 0 !== nu && nu.update(), void 0 !== ft && ft.pauseDropdownHover(800), void 0 !== iu && iu.pauseDropdownHover(800), ou.a.setCookie('kt_aside_toggle_state', l.getState());
                            }), e.on('beforeToggle', function (n) {
                                !1 === Kl.a.hasClass(l, 'aside-minimize') && Kl.a.hasClass(l, 'aside-minimize-hover') && Kl.a.removeClass(l, 'aside-minimize-hover');
                            }));
                        },
                        getElement: function () {
                            return n;
                        },
                        getToggle: function () {
                            return e;
                        },
                        onToggle: function (l) {
                            void 0 !== e.element && e.on('toggle', l);
                        }
                    };
                }(), su = function () {
                    var l;
                    return {
                        init: function (n) {
                            l = Kl.a.getById(n);
                        },
                        getHeight: function () {
                            return n = Kl.a.getViewPort().height, l && (n = n - parseInt(Kl.a.css(l, 'paddingTop')) - parseInt(Kl.a.css(l, 'paddingBottom'))), n -= dt.getHeight(), (n -= zl.getHeight()) - nn.getHeight();
                            var n;
                        },
                        getElement: function () {
                            return l;
                        }
                    };
                }(), ru = function () {
                    var l, n = function () {
                            var n = Kl.a.find(l, '.card-scroll'), e = Kl.a.find(l, '.card-body'), t = Kl.a.find(l, '.card-header'), u = su.getHeight();
                            u = (u = (u = (u = (u -= parseInt(Kl.a.actualHeight(t))) - parseInt(Kl.a.css(l, 'marginTop')) - parseInt(Kl.a.css(l, 'marginBottom'))) - parseInt(Kl.a.css(l, 'paddingTop')) - parseInt(Kl.a.css(l, 'paddingBottom'))) - parseInt(Kl.a.css(e, 'paddingTop')) - parseInt(Kl.a.css(e, 'paddingBottom'))) - parseInt(Kl.a.css(e, 'marginTop')) - parseInt(Kl.a.css(e, 'marginBottom')), Kl.a.css(n, 'height', (u -= 3) + 'px');
                        };
                    return {
                        init: function (e) {
                            (l = Kl.a.getById(e)) && (n(), Kl.a.addResizeHandler(function () {
                                n();
                            }));
                        },
                        update: function () {
                            n();
                        }
                    };
                }();
            class du {
                constructor(l, n) {
                    this.layout = l, this.ref = n, this.asideSelfMinimizeToggle = !1;
                }
                ngOnInit() {
                    this.asideSelfMinimizeToggle = this.layout.getProp('aside.self.minimize.toggle');
                }
                ngAfterViewInit() {
                    Kl.a.ready(() => {
                        eu.init('kt_brand'), tu.init('kt_aside'), iu.init('kt_aside_menu'), this.asideSelfMinimizeToggle && au.init('kt_aside_toggle'), nu.init('kt_page_sticky_card'), ru.init('kt_page_stretched_card');
                    });
                }
            }
            var cu = t['ɵcrt']({
                encapsulation: 2,
                styles: [],
                data: {}
            });
            function fu(l) {
                return t['ɵvid'](0, [], null, null);
            }
            var pu = e('Ed4d'), hu = e('NFMk'), gu = e('cxbk'), mu = e('kcZq');
            class vu {
                constructor(l, n, e, t, u, i, o) {
                    this.initService = l, this.layout = n, this._notification = e, this.store = t, this.ref = u, this.modal = i, this.viewContainerRef = o, this.userInactive = new Tn.a(), this.awaitMessageClose = !1, this.selfLayout = 'default', this.contentClasses = '', this.contentContainerClasses = '', this.subheaderDisplay = !0, this.asideHTMLAttributes = {}, this.headerMobileClasses = '', this.headerMobileAttributes = {}, this.headerHTMLAttributes = {}, this.extrasSearchOffcanvasDisplay = !1, this.extrasNotificationsOffcanvasDisplay = !1, this.extrasQuickActionsOffcanvasDisplay = !1, this.extrasCartOffcanvasDisplay = !1, this.extrasUserOffcanvasDisplay = !1, this.extrasQuickPanelDisplay = !1, this.extrasScrollTopDisplay = !1, this.labelButtonContinue = 'Siguiente', this.isVisibleModal = !1, this.unsubscribe = new Tn.a(), t.select(l => l.auth.awaitMessageClose).pipe(Object(Ln.a)(this.unsubscribe)).subscribe(l => {
                        this.awaitMessageClose = l;
                    }), this.initService.init(), this.setTimeout(), this.userInactive.subscribe(() => this.timeExpiredSession()), t.select(l => l.layoutModule.basicInfo.modal.isVisible).pipe(Object(Ln.a)(this.unsubscribe)).subscribe(l => {
                        this.isVisibleModal = l;
                    });
                }
                ngOnDestroy() {
                    this.userInactive.unsubscribe(), this.unsubscribe.next();
                }
                ngOnInit() {
                    this.selfLayout = this.layout.getProp('self.layout'), this.asideSelfDisplay = this.layout.getProp('aside.self.display'), this.subheaderDisplay = this.layout.getProp('subheader.display'), this.contentClasses = this.layout.getStringCSSClasses('content'), this.contentContainerClasses = this.layout.getStringCSSClasses('content_container'), this.contentExtended = this.layout.getProp('content.extended'), this.asideHTMLAttributes = this.layout.getHTMLAttributes('aside'), this.asideCSSClasses = this.layout.getStringCSSClasses('aside'), this.headerMobileClasses = this.layout.getStringCSSClasses('header_mobile'), this.headerMobileAttributes = this.layout.getHTMLAttributes('header_mobile'), this.footerDisplay = this.layout.getProp('footer.display'), this.footerCSSClasses = this.layout.getStringCSSClasses('footer'), this.headerCSSClasses = this.layout.getStringCSSClasses('header'), this.headerHTMLAttributes = this.layout.getHTMLAttributes('header'), this.layout.getProp('extras.search.display') && (this.extrasSearchOffcanvasDisplay = 'offcanvas' === this.layout.getProp('extras.search.layout')), this.layout.getProp('extras.notifications.display') && (this.extrasNotificationsOffcanvasDisplay = 'offcanvas' === this.layout.getProp('extras.notifications.layout')), this.layout.getProp('extras.quickActions.display') && (this.extrasQuickActionsOffcanvasDisplay = 'offcanvas' === this.layout.getProp('extras.quickActions.layout')), this.layout.getProp('extras.cart.display') && (this.extrasCartOffcanvasDisplay = 'offcanvas' === this.layout.getProp('extras.cart.layout')), this.layout.getProp('extras.user.display') && (this.extrasUserOffcanvasDisplay = 'offcanvas' === this.layout.getProp('extras.user.layout')), this.extrasQuickPanelDisplay = this.layout.getProp('extras.quickPanel.display'), this.extrasScrollTopDisplay = this.layout.getProp('extras.scrolltop.display');
                }
                ngAfterViewInit() {
                    if (this.ktAside)
                        for (const l in this.asideHTMLAttributes)
                            this.asideHTMLAttributes.hasOwnProperty(l) && (this.ktAside.nativeElement.attributes[l] = this.asideHTMLAttributes[l]);
                    if (this.ktHeaderMobile)
                        for (const l in this.headerMobileAttributes)
                            this.headerMobileAttributes.hasOwnProperty(l) && (this.ktHeaderMobile.nativeElement.attributes[l] = this.headerMobileAttributes[l]);
                    if (this.ktHeader)
                        for (const l in this.headerHTMLAttributes)
                            this.headerHTMLAttributes.hasOwnProperty(l) && (this.ktHeader.nativeElement.attributes[l] = this.headerHTMLAttributes[l]);
                    su.init('kt_content');
                }
                refreshUserState() {
                    clearTimeout(this.userActivity), this.awaitMessageClose || this.setTimeout();
                }
                setTimeout() {
                    this.userActivity = setTimeout(() => this.userInactive.next(void 0), gu.a.timeSessionActive);
                }
                timeExpiredSession() {
                    this.store.dispatch(new mu.g());
                }
                handleCancel() {
                    this.store.dispatch(new Ut.d(!1));
                }
            }
            let bu = (() => {
                class l {
                    constructor(l) {
                        this.layout = l;
                    }
                    init() {
                        this.layout.initConfig(), this.preInitLayout(), this.initLayout(), this.initLoader(), this.initHeader(), this.initSubheader(), this.initContent(), this.initAside(), this.initFooter(), this.initSkins();
                    }
                    preInitLayout() {
                        const l = this.layout.getConfig(), n = Object.assign({}, l), e = this.layout.getProp('subheader.fixed'), t = this.layout.getProp('header.self.fixed.desktop');
                        e && t ? n.subheader.style = 'solid' : n.subheader.fixed = !1, this.layout.setConfigWithoutLocalStorageChanges(n);
                    }
                    initLayout() {
                        const l = this.layout.getProp('self.body.background-image');
                        l && (document.body.style.backgroundImage = `url("${ l }")`);
                        const n = (this.layout.getProp('self.body.class') || '').toString();
                        n && n.split(' ').forEach(l => document.body.classList.add(l));
                    }
                    initLoader() {
                    }
                    initHeader() {
                        this.layout.getProp('header.self.fixed.desktop') ? (document.body.classList.add('header-fixed'), this.layout.setCSSClass('header', 'header-fixed')) : document.body.classList.add('header-static'), this.layout.getProp('header.self.fixed.mobile') && (document.body.classList.add('header-mobile-fixed'), this.layout.setCSSClass('header_mobile', 'header-mobile-fixed'));
                        const l = this.layout.getProp('header.menu.self.display'), n = this.layout.getProp('header.menu.self.layout');
                        l && (this.layout.setCSSClass('header_menu', 'header-menu-layout-' + n), this.layout.getProp('header.menu.self.rootArrow') && this.layout.setCSSClass('header_menu', 'header-menu-root-arrow')), 'fluid' === this.layout.getProp('header.self.width') ? this.layout.setCSSClass('header_container', 'container-fluid') : this.layout.setCSSClass('header_container', 'container');
                    }
                    initSubheader() {
                        if (!this.layout.getProp('subheader.display'))
                            return;
                        document.body.classList.add('subheader-enabled');
                        const l = this.layout.getProp('subheader.fixed'), n = this.layout.getProp('header.self.fixed.desktop');
                        l && n && document.body.classList.add('subheader-fixed');
                        const e = this.layout.getProp('subheader.style');
                        e && this.layout.setCSSClass('subheader', 'subheader-' + e), 'fluid' === this.layout.getProp('subheader.width') ? this.layout.setCSSClass('subheader_container', 'container-fluid') : this.layout.setCSSClass('subheader_container', 'container'), this.layout.getProp('subheader.clear') && this.layout.setCSSClass('subheader', 'mb-0');
                    }
                    initContent() {
                        this.layout.getProp('content.fit-top') && this.layout.setCSSClass('content', 'pt-0'), this.layout.getProp('content.fit-bottom') && this.layout.setCSSClass('content', 'pb-0'), 'fluid' === this.layout.getProp('content.width') ? this.layout.setCSSClass('content_container', 'container-fluid') : this.layout.setCSSClass('content_container', 'container');
                    }
                    initAside() {
                        if (!0 !== this.layout.getProp('aside.self.display'))
                            return;
                        if (document.body.classList.add('aside-enabled'), this.layout.getProp('aside.self.fixed') ? (document.body.classList.add('aside-fixed'), this.layout.setCSSClass('aside', 'aside-fixed')) : document.body.classList.add('aside-static'), !0 !== this.layout.getProp('aside.self.display'))
                            return;
                        this.layout.getProp('aside.self.minimize.default') && document.body.classList.add('aside-minimize'), this.layout.getProp('aside.self.minimize.hoverable') && document.body.classList.add('aside-minimize-hoverable');
                        const l = this.layout.getProp('aside.menu.dropdown');
                        l && (this.layout.setCSSClass('aside_menu', 'aside-menu-dropdown'), this.layout.setHTMLAttribute('aside_menu', 'data-menu-dropdown', '1')), this.layout.setHTMLAttribute('aside_menu', 'data-menu-scroll', !0 !== l ? '1' : '0');
                        const n = this.layout.getProp('aside.menu.submenu.dropdown.hoverTimeout');
                        n && this.layout.setHTMLAttribute('aside_menu', 'data-menu-dropdown-timeout', n);
                    }
                    initFooter() {
                        !0 === this.layout.getProp('footer.fixed') && document.body.classList.add('footer-fixed'), 'fluid' === this.layout.getProp('footer.width') ? this.layout.setCSSClass('footer_container', 'container-fluid') : this.layout.setCSSClass('footer_container', 'container');
                    }
                    initSkins() {
                        const l = this.layout.getProp('header.self.theme') || '', n = this.layout.getProp('brand.self.theme') || '';
                        !1 === this.layout.getProp('aside.self.display') ? document.body.classList.add('brand-' + l) : document.body.classList.add('brand-' + n);
                    }
                }
                return l.ɵprov = t['ɵɵdefineInjectable']({
                    factory: function () {
                        return new l(t['ɵɵinject'](m.a));
                    },
                    token: l,
                    providedIn: 'root'
                }), l;
            })();
            var yu = t['ɵcrt']({
                encapsulation: 0,
                styles: [['app-layout[_ngcontent-%COMP%]{opacity:0}app-layout[_ngcontent-%COMP%], app-layout[_ngcontent-%COMP%]   .grid-root[_ngcontent-%COMP%]{height:100%}.page-loaded[_ngcontent-%COMP%]   app-layout[_ngcontent-%COMP%]{opacity:1;transition:opacity 1s ease-in-out}']],
                data: {}
            });
            function wu(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 2, 'app-aside', [
                        [
                            'class',
                            'aside aside-left d-flex flex-column flex-row-auto'
                        ],
                        [
                            'id',
                            'kt_aside'
                        ]
                    ], null, null, null, k, b)),
                    t['ɵdid'](2, 278528, null, 0, a.NgClass, [
                        t.IterableDiffers,
                        t.KeyValueDiffers,
                        t.ElementRef,
                        t.Renderer2
                    ], {
                        klass: [
                            0,
                            'klass'
                        ],
                        ngClass: [
                            1,
                            'ngClass'
                        ]
                    }, null),
                    t['ɵdid'](3, 114688, [
                        [
                            1,
                            4
                        ],
                        [
                            'ktAside',
                            4
                        ]
                    ], 0, g, [
                        m.a,
                        a.Location,
                        v.o
                    ], null, null)
                ], function (l, n) {
                    l(n, 2, 0, 'aside aside-left d-flex flex-column flex-row-auto', n.component.asideCSSClasses), l(n, 3, 0);
                }, null);
            }
            function Su(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'app-subheader-wrapper', [], null, null, null, ln, ql)),
                    t['ɵdid'](2, 4308992, null, 0, Ul, [
                        G,
                        f.r
                    ], null, null)
                ], function (l, n) {
                    l(n, 2, 0);
                }, null);
            }
            function Cu(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
                    t['ɵdid'](2, 212992, null, 0, f.w, [
                        f.b,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        [
                            8,
                            null
                        ],
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵand'](0, null, null, 0))
                ], function (l, n) {
                    l(n, 2, 0);
                }, null);
            }
            function ku(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 5, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 4, 'div', [[
                            'class',
                            'd-flex flex-column-fluid'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 3, 'div', [], null, null, null, null, null)),
                    t['ɵdid'](3, 278528, null, 0, a.NgClass, [
                        t.IterableDiffers,
                        t.KeyValueDiffers,
                        t.ElementRef,
                        t.Renderer2
                    ], {
                        ngClass: [
                            0,
                            'ngClass'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](4, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
                    t['ɵdid'](5, 212992, null, 0, f.w, [
                        f.b,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        [
                            8,
                            null
                        ],
                        t.ChangeDetectorRef
                    ], null, null)
                ], function (l, n) {
                    l(n, 3, 0, n.component.contentContainerClasses), l(n, 5, 0);
                }, null);
            }
            function Ru(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 2, 'app-footer', [
                        [
                            'class',
                            'footer bg-white py-4 d-flex flex-lg-column w-100'
                        ],
                        [
                            'id',
                            'kt_footer'
                        ]
                    ], null, null, null, un, tn)),
                    t['ɵdid'](2, 278528, null, 0, a.NgClass, [
                        t.IterableDiffers,
                        t.KeyValueDiffers,
                        t.ElementRef,
                        t.Renderer2
                    ], {
                        klass: [
                            0,
                            'klass'
                        ],
                        ngClass: [
                            1,
                            'ngClass'
                        ]
                    }, null),
                    t['ɵdid'](3, 4308992, null, 0, en, [m.a], null, null)
                ], function (l, n) {
                    l(n, 2, 0, 'footer bg-white py-4 d-flex flex-lg-column w-100', n.component.footerCSSClasses), l(n, 3, 0);
                }, null);
            }
            function Du(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'app-search-offcanvas', [], null, null, null, sn, an)),
                    t['ɵdid'](2, 114688, null, 0, on, [m.a], null, null)
                ], function (l, n) {
                    l(n, 2, 0);
                }, null);
            }
            function Iu(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'app-user-offcanvas', [], null, null, null, vn, cn)),
                    t['ɵdid'](2, 245760, null, 0, rn.b, [
                        m.a,
                        v.o,
                        t.ChangeDetectorRef,
                        dn.a
                    ], null, null)
                ], function (l, n) {
                    l(n, 2, 0);
                }, null);
            }
            function xu(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'app-scroll-top', [], null, null, null, Cn, Sn)),
                    t['ɵdid'](2, 4308992, null, 0, wn, [], null, null)
                ], function (l, n) {
                    l(n, 2, 0);
                }, null);
            }
            function Eu(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'div', [[
                            'class',
                            'block-ui-template'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 0, 'img', [[
                            'src',
                            '../assets/media/svg/icons/Code/Loading.svg'
                        ]], null, null, null, null, null))
                ], null, null);
            }
            function Au(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 32, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 2, 'app-header-mobile', [
                        [
                            'class',
                            'header-mobile align-items-center'
                        ],
                        [
                            'id',
                            'kt_header_mobile'
                        ]
                    ], null, null, null, xn, Rn)),
                    t['ɵdid'](2, 278528, null, 0, a.NgClass, [
                        t.IterableDiffers,
                        t.KeyValueDiffers,
                        t.ElementRef,
                        t.Renderer2
                    ], {
                        klass: [
                            0,
                            'klass'
                        ],
                        ngClass: [
                            1,
                            'ngClass'
                        ]
                    }, null),
                    t['ɵdid'](3, 4308992, [
                        [
                            2,
                            4
                        ],
                        [
                            'ktHeaderMobile',
                            4
                        ]
                    ], 0, kn, [m.a], null, null),
                    (l()(), t['ɵeld'](4, 0, null, null, 25, 'div', [[
                            'class',
                            'd-flex flex-column flex-root'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](5, 0, null, null, 16, 'div', [[
                            'class',
                            'd-flex flex-row flex-column-fluid page'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, wu)),
                    t['ɵdid'](7, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](8, 0, null, null, 13, 'div', [
                        [
                            'class',
                            'd-flex flex-column flex-row-fluid wrapper'
                        ],
                        [
                            'id',
                            'kt_wrapper'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](9, 0, null, null, 2, 'app-header', [
                        [
                            'class',
                            'header'
                        ],
                        [
                            'id',
                            'kt_header'
                        ]
                    ], null, null, null, yt, ht)),
                    t['ɵdid'](10, 278528, null, 0, a.NgClass, [
                        t.IterableDiffers,
                        t.KeyValueDiffers,
                        t.ElementRef,
                        t.Renderer2
                    ], {
                        klass: [
                            0,
                            'klass'
                        ],
                        ngClass: [
                            1,
                            'ngClass'
                        ]
                    }, null),
                    t['ɵdid'](11, 4440064, [
                        [
                            3,
                            4
                        ],
                        [
                            'ktHeader',
                            4
                        ]
                    ], 0, pt, [
                        m.a,
                        f.r
                    ], null, null),
                    (l()(), t['ɵeld'](12, 0, null, null, 7, 'div', [
                        [
                            'class',
                            'content d-flex flex-column flex-column-fluid'
                        ],
                        [
                            'id',
                            'kt_content'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵdid'](13, 278528, null, 0, a.NgClass, [
                        t.IterableDiffers,
                        t.KeyValueDiffers,
                        t.ElementRef,
                        t.Renderer2
                    ], {
                        klass: [
                            0,
                            'klass'
                        ],
                        ngClass: [
                            1,
                            'ngClass'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Su)),
                    t['ɵdid'](15, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Cu)),
                    t['ɵdid'](17, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, ku)),
                    t['ɵdid'](19, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Ru)),
                    t['ɵdid'](21, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Du)),
                    t['ɵdid'](23, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Iu)),
                    t['ɵdid'](25, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](26, 0, null, null, 1, 'app-toolbar', [], null, null, null, Ct, St)),
                    t['ɵdid'](27, 114688, null, 0, wt, [f.r], null, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, xu)),
                    t['ɵdid'](29, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](30, 0, null, null, 2, 'block-ui', [], null, null, null, Dt, Rt)),
                    t['ɵdid'](31, 114688, null, 0, kt.b, [kt.h], {
                        template: [
                            0,
                            'template'
                        ]
                    }, null),
                    (l()(), t['ɵand'](0, [[
                            'blockTemplate',
                            2
                        ]], 0, 0, null, Eu))
                ], function (l, n) {
                    var e = n.component;
                    l(n, 2, 0, 'header-mobile align-items-center', e.headerMobileClasses), l(n, 3, 0), l(n, 7, 0, e.asideSelfDisplay), l(n, 10, 0, 'header', e.headerCSSClasses), l(n, 11, 0), l(n, 13, 0, 'content d-flex flex-column flex-column-fluid', e.contentClasses), l(n, 15, 0, e.subheaderDisplay), l(n, 17, 0, e.contentExtended), l(n, 19, 0, !e.contentExtended), l(n, 21, 0, e.footerDisplay), l(n, 23, 0, e.extrasSearchOffcanvasDisplay), l(n, 25, 0, e.extrasUserOffcanvasDisplay), l(n, 27, 0), l(n, 29, 0, e.extrasScrollTopDisplay), l(n, 31, 0, t['ɵnov'](n, 32));
                }, null);
            }
            function Tu(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, 'div', [[
                            'class',
                            'd-flex flex-column flex-root'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
                    t['ɵdid'](2, 212992, null, 0, f.w, [
                        f.b,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        [
                            8,
                            null
                        ],
                        t.ChangeDetectorRef
                    ], null, null)
                ], function (l, n) {
                    l(n, 2, 0);
                }, null);
            }
            function Vu(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'ce-view-download-app', [], null, null, null, Qt, $t)),
                    t['ɵdid'](2, 245760, null, 0, Xt, [v.o], {
                        showVerifyButton: [
                            0,
                            'showVerifyButton'
                        ]
                    }, null)
                ], function (l, n) {
                    l(n, 2, 0, !1);
                }, null);
            }
            function _u(l) {
                return t['ɵvid'](0, [
                    t['ɵqud'](402653184, 1, { ktAside: 0 }),
                    t['ɵqud'](402653184, 2, { ktHeaderMobile: 0 }),
                    t['ɵqud'](402653184, 3, { ktHeader: 0 }),
                    t['ɵqud'](671088640, 4, { deleteSwal: 0 }),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Au)),
                    t['ɵdid'](5, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ],
                        ngIfElse: [
                            1,
                            'ngIfElse'
                        ]
                    }, null),
                    (l()(), t['ɵand'](0, [[
                            'blankLayout',
                            2
                        ]], null, 0, null, Tu)),
                    (l()(), t['ɵeld'](7, 0, null, null, 1, 'app-scripts-init', [], null, null, null, fu, cu)),
                    t['ɵdid'](8, 4308992, null, 0, du, [
                        m.a,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](9, 16777216, null, null, 6, 'nz-modal', [
                        [
                            'nzMaskClosable',
                            'false'
                        ],
                        [
                            'nzWidth',
                            '50%'
                        ],
                        [
                            'nzWrapClassName',
                            'text-center'
                        ]
                    ], null, [
                        [
                            null,
                            'nzVisibleChange'
                        ],
                        [
                            null,
                            'nzOnCancel'
                        ]
                    ], function (l, n, e) {
                        var t = !0, u = l.component;
                        return 'nzVisibleChange' === n && (t = !1 !== (u.isVisibleModal = e) && t), 'nzOnCancel' === n && (t = !1 !== u.handleCancel() && t), t;
                    }, pu.d, pu.c)),
                    t['ɵdid'](10, 704512, null, 2, hu.c, [
                        t.ChangeDetectorRef,
                        hu.k,
                        t.ViewContainerRef
                    ], {
                        nzMaskClosable: [
                            0,
                            'nzMaskClosable'
                        ],
                        nzVisible: [
                            1,
                            'nzVisible'
                        ],
                        nzFooter: [
                            2,
                            'nzFooter'
                        ],
                        nzWidth: [
                            3,
                            'nzWidth'
                        ],
                        nzWrapClassName: [
                            4,
                            'nzWrapClassName'
                        ],
                        nzBodyStyle: [
                            5,
                            'nzBodyStyle'
                        ]
                    }, {
                        nzOnCancel: 'nzOnCancel',
                        nzVisibleChange: 'nzVisibleChange'
                    }),
                    t['ɵqud'](335544320, 5, { contentFromContentChild: 0 }),
                    t['ɵqud'](335544320, 6, { modalFooter: 0 }),
                    t['ɵpod'](13, { background: 0 }),
                    (l()(), t['ɵand'](0, [[
                            5,
                            2
                        ]], 0, 1, null, Vu)),
                    t['ɵdid'](15, 16384, null, 0, hu.f, [t.TemplateRef], null, null)
                ], function (l, n) {
                    var e = n.component;
                    l(n, 5, 0, 'blank' !== e.selfLayout, t['ɵnov'](n, 6)), l(n, 8, 0);
                    var u = e.isVisibleModal, i = l(n, 13, 0, 'fixed center url(\'../../../assets/media/svg/custom/basic-info/FONDO-27.svg\') no-repeat');
                    l(n, 10, 0, 'false', u, null, '50%', 'text-center', i);
                }, null);
            }
            function Lu(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 16777216, null, null, 1, 'app-layout', [], null, [[
                            'window',
                            'mousemove'
                        ]], function (l, n, e) {
                        var u = !0;
                        return 'window:mousemove' === n && (u = !1 !== t['ɵnov'](l, 1).refreshUserState() && u), u;
                    }, _u, yu)),
                    t['ɵdid'](1, 4440064, null, 0, vu, [
                        bu,
                        m.a,
                        dn.a,
                        v.o,
                        t.ChangeDetectorRef,
                        hu.k,
                        t.ViewContainerRef
                    ], null, null)
                ], function (l, n) {
                    l(n, 1, 0);
                }, null);
            }
            var Ou = t['ɵccf']('app-layout', vu, Lu, {}, {}, []), Pu = e('ypAQ'), Mu = e('QfCi'), Hu = e('8WaK'), Gu = e('JRKe'), Bu = e('w464'), Nu = e('Yjna'), Fu = e('jg2L'), ju = e('MqLK'), Ku = e('JYFw'), zu = e('Y+i1'), Uu = e('Zaee');
            function qu(l, n) {
                1 & l && t['ɵɵelementContainer'](0);
            }
            const Wu = new t.InjectionToken('@sweetalert2/ngx-sweetalert2#swalProvider'), Yu = new t.InjectionToken('@sweetalert2/ngx-sweetalert2#fireOnInit'), Xu = new t.InjectionToken('@sweetalert2/ngx-sweetalert2#dismissOnDestroy');
            let $u = (() => {
                    class l {
                        constructor(l) {
                            this.swalProvider = l;
                        }
                        get swal() {
                            return this.swalPromiseCache || this.preloadSweetAlertLibrary(), this.swalPromiseCache;
                        }
                        preloadSweetAlertLibrary() {
                            if (this.swalPromiseCache)
                                return;
                            const l = 'function' == typeof (n = this.swalProvider) && void 0 === n.version ? this.swalProvider() : Promise.resolve(this.swalProvider);
                            var n;
                            this.swalPromiseCache = l.then(l => function (l) {
                                return 'function' == typeof l;
                            }(l) ? l : l.default);
                        }
                    }
                    return l.ɵfac = function (n) {
                        return new (n || l)(t['ɵɵinject'](Wu));
                    }, l.ɵprov = t['ɵɵdefineInjectable']({
                        token: l,
                        factory: l.ɵfac
                    }), l;
                })(), Zu = (() => {
                    class l {
                        constructor(l, n, e) {
                            this.sweetAlert2Loader = l, this.moduleLevelFireOnInit = n, this.moduleLevelDismissOnDestroy = e, this.willOpen = new t.EventEmitter(), this.didOpen = new t.EventEmitter(), this.didRender = new t.EventEmitter(), this.willClose = new t.EventEmitter(), this.didClose = new t.EventEmitter(), this.didDestroy = new t.EventEmitter(), this.confirm = new t.EventEmitter(), this.deny = new t.EventEmitter(), this.dismiss = new t.EventEmitter(), this.touchedProps = new Set(), this.markTouched = this.touchedProps.add.bind(this.touchedProps), this.isCurrentlyShown = !1;
                        }
                        set swalOptions(l) {
                            Object.assign(this, l), Object.keys(l).forEach(this.markTouched);
                        }
                        get swalOptions() {
                            return [...this.touchedProps].reduce((l, n) => Object.assign(Object.assign({}, l), { [n]: this[n] }), {});
                        }
                        set swalVisible(l) {
                            l ? this.fire() : this.close();
                        }
                        get swalVisible() {
                            return this.isCurrentlyShown;
                        }
                        ngOnInit() {
                            this.sweetAlert2Loader.preloadSweetAlertLibrary();
                        }
                        ngAfterViewInit() {
                            (void 0 === this.swalFireOnInit ? this.moduleLevelFireOnInit : this.swalFireOnInit) && this.fire();
                        }
                        ngOnChanges(l) {
                            Object.keys(l).filter(l => !l.startsWith('swal')).forEach(this.markTouched), this.update();
                        }
                        ngOnDestroy() {
                            (void 0 === this.swalDismissOnDestroy ? this.moduleLevelDismissOnDestroy : this.swalDismissOnDestroy) && this.close();
                        }
                        fire() {
                            return Object(An.a)(this, void 0, void 0, function* () {
                                const l = yield this.sweetAlert2Loader.swal, n = this.swalOptions, e = Object.assign(Object.assign({}, n), {
                                        willOpen: u(n.willOpen, l => {
                                            this.willOpen.emit({ modalElement: l });
                                        }),
                                        didOpen: u(n.didOpen, l => {
                                            this.isCurrentlyShown = !0, this.didOpen.emit({ modalElement: l });
                                        }),
                                        didRender: u(n.didRender, l => {
                                            this.didRender.emit({ modalElement: l });
                                        }),
                                        willClose: u(n.willClose, l => {
                                            this.isCurrentlyShown = !1, this.willClose.emit({ modalElement: l });
                                        }),
                                        didClose: u(n.didClose, () => {
                                            this.didClose.emit();
                                        }),
                                        didDestroy: u(n.didDestroy, () => {
                                            this.didDestroy.emit();
                                        })
                                    }), t = yield l.fire(e);
                                switch (!0) {
                                case t.isConfirmed:
                                    this.confirm.emit(t.value);
                                    break;
                                case t.isDenied:
                                    this.deny.emit();
                                    break;
                                case t.isDismissed:
                                    this.dismiss.emit(t.dismiss);
                                }
                                return t;
                                function u(l, n) {
                                    return (...e) => (n(...e), null == l ? void 0 : l(...e));
                                }
                            });
                        }
                        close(l) {
                            return Object(An.a)(this, void 0, void 0, function* () {
                                this.isCurrentlyShown && (yield this.sweetAlert2Loader.swal).close(l);
                            });
                        }
                        update(l) {
                            return Object(An.a)(this, void 0, void 0, function* () {
                                if (l && (this.swalOptions = l), !this.isCurrentlyShown)
                                    return;
                                const n = yield this.sweetAlert2Loader.swal, e = this.swalOptions, t = Object.keys(e).filter(n.isUpdatableParameter).reduce((l, n) => Object.assign(Object.assign({}, l), { [n]: e[n] }), {});
                                n.update(t);
                            });
                        }
                    }
                    return l.ɵfac = function (n) {
                        return new (n || l)(t['ɵɵdirectiveInject']($u), t['ɵɵdirectiveInject'](Yu), t['ɵɵdirectiveInject'](Xu));
                    }, l.ɵcmp = t['ɵɵdefineComponent']({
                        type: l,
                        selectors: [['swal']],
                        inputs: {
                            swalOptions: 'swalOptions',
                            swalVisible: 'swalVisible',
                            title: 'title',
                            titleText: 'titleText',
                            text: 'text',
                            html: 'html',
                            footer: 'footer',
                            icon: 'icon',
                            iconColor: 'iconColor',
                            iconHtml: 'iconHtml',
                            backdrop: 'backdrop',
                            toast: 'toast',
                            target: 'target',
                            input: 'input',
                            width: 'width',
                            padding: 'padding',
                            background: 'background',
                            position: 'position',
                            grow: 'grow',
                            showClass: 'showClass',
                            hideClass: 'hideClass',
                            customClass: 'customClass',
                            timer: 'timer',
                            timerProgressBar: 'timerProgressBar',
                            heightAuto: 'heightAuto',
                            allowOutsideClick: 'allowOutsideClick',
                            allowEscapeKey: 'allowEscapeKey',
                            allowEnterKey: 'allowEnterKey',
                            stopKeydownPropagation: 'stopKeydownPropagation',
                            keydownListenerCapture: 'keydownListenerCapture',
                            showConfirmButton: 'showConfirmButton',
                            showDenyButton: 'showDenyButton',
                            showCancelButton: 'showCancelButton',
                            confirmButtonText: 'confirmButtonText',
                            denyButtonText: 'denyButtonText',
                            cancelButtonText: 'cancelButtonText',
                            confirmButtonColor: 'confirmButtonColor',
                            denyButtonColor: 'denyButtonColor',
                            cancelButtonColor: 'cancelButtonColor',
                            confirmButtonAriaLabel: 'confirmButtonAriaLabel',
                            denyButtonAriaLabel: 'denyButtonAriaLabel',
                            cancelButtonAriaLabel: 'cancelButtonAriaLabel',
                            buttonsStyling: 'buttonsStyling',
                            reverseButtons: 'reverseButtons',
                            focusConfirm: 'focusConfirm',
                            focusDeny: 'focusDeny',
                            focusCancel: 'focusCancel',
                            showCloseButton: 'showCloseButton',
                            closeButtonHtml: 'closeButtonHtml',
                            closeButtonAriaLabel: 'closeButtonAriaLabel',
                            loaderHtml: 'loaderHtml',
                            showLoaderOnConfirm: 'showLoaderOnConfirm',
                            preConfirm: 'preConfirm',
                            preDeny: 'preDeny',
                            imageUrl: 'imageUrl',
                            imageWidth: 'imageWidth',
                            imageHeight: 'imageHeight',
                            imageAlt: 'imageAlt',
                            inputLabel: 'inputLabel',
                            inputPlaceholder: 'inputPlaceholder',
                            inputValue: 'inputValue',
                            inputOptions: 'inputOptions',
                            inputAutoTrim: 'inputAutoTrim',
                            inputAttributes: 'inputAttributes',
                            inputValidator: 'inputValidator',
                            returnInputValueOnDeny: 'returnInputValueOnDeny',
                            validationMessage: 'validationMessage',
                            progressSteps: 'progressSteps',
                            currentProgressStep: 'currentProgressStep',
                            progressStepsDistance: 'progressStepsDistance',
                            scrollbarPadding: 'scrollbarPadding',
                            swalFireOnInit: 'swalFireOnInit',
                            swalDismissOnDestroy: 'swalDismissOnDestroy'
                        },
                        outputs: {
                            willOpen: 'willOpen',
                            didOpen: 'didOpen',
                            didRender: 'didRender',
                            willClose: 'willClose',
                            didClose: 'didClose',
                            didDestroy: 'didDestroy',
                            confirm: 'confirm',
                            deny: 'deny',
                            dismiss: 'dismiss'
                        },
                        features: [t['ɵɵNgOnChangesFeature']],
                        decls: 0,
                        vars: 0,
                        template: function (l, n) {
                        },
                        encapsulation: 2,
                        changeDetection: 0
                    }), l;
                })(), Ju = (() => {
                    class l {
                        constructor() {
                            this.template = null;
                        }
                    }
                    return l.ɵfac = function (n) {
                        return new (n || l)();
                    }, l.ɵcmp = t['ɵɵdefineComponent']({
                        type: l,
                        selectors: [['swal-portal']],
                        inputs: { template: 'template' },
                        decls: 1,
                        vars: 1,
                        consts: [[
                                4,
                                'ngTemplateOutlet'
                            ]],
                        template: function (l, n) {
                            1 & l && t['ɵɵtemplate'](0, qu, 1, 0, 'ng-container', 0), 2 & l && t['ɵɵproperty']('ngTemplateOutlet', n.template);
                        },
                        directives: [a.NgTemplateOutlet],
                        encapsulation: 2,
                        changeDetection: 0
                    }), l;
                })();
            function Qu() {
                return Promise.resolve().then(e.t.bind(null, 'PSD3', 7));
            }
            let li = (() => {
                class l {
                    static forRoot(n = {}) {
                        return {
                            ngModule: l,
                            providers: [
                                $u,
                                {
                                    provide: Wu,
                                    useValue: n.provideSwal || Qu
                                },
                                {
                                    provide: Yu,
                                    useValue: n.fireOnInit || !1
                                },
                                {
                                    provide: Xu,
                                    useValue: n.dismissOnDestroy || !0
                                }
                            ]
                        };
                    }
                    static forChild(n = {}) {
                        return {
                            ngModule: l,
                            providers: [
                                ...n.provideSwal ? [
                                    $u,
                                    {
                                        provide: Wu,
                                        useValue: n.provideSwal
                                    }
                                ] : [],
                                ...void 0 !== n.fireOnInit ? [{
                                        provide: Yu,
                                        useValue: n.fireOnInit
                                    }] : [],
                                ...void 0 !== n.dismissOnDestroy ? [{
                                        provide: Xu,
                                        useValue: n.dismissOnDestroy
                                    }] : []
                            ]
                        };
                    }
                }
                return l.ɵmod = t['ɵɵdefineNgModule']({ type: l }), l.ɵinj = t['ɵɵdefineInjector']({
                    factory: function (n) {
                        return new (n || l)();
                    },
                    imports: [[a.CommonModule]]
                }), l;
            })();
            var ni = t['ɵcrt']({
                encapsulation: 2,
                styles: [],
                data: {}
            });
            function ei(l) {
                return t['ɵvid'](2, [], null, null);
            }
            function ti(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'swal', [], null, null, null, ei, ni)),
                    t['ɵdid'](1, 4964352, null, 0, Zu, [
                        $u,
                        Yu,
                        Xu
                    ], null, null)
                ], function (l, n) {
                    l(n, 1, 0);
                }, null);
            }
            var ui = t['ɵccf']('swal', Zu, ti, {
                    title: 'title',
                    titleText: 'titleText',
                    text: 'text',
                    html: 'html',
                    footer: 'footer',
                    icon: 'icon',
                    iconColor: 'iconColor',
                    iconHtml: 'iconHtml',
                    backdrop: 'backdrop',
                    toast: 'toast',
                    target: 'target',
                    input: 'input',
                    width: 'width',
                    padding: 'padding',
                    background: 'background',
                    position: 'position',
                    grow: 'grow',
                    showClass: 'showClass',
                    hideClass: 'hideClass',
                    customClass: 'customClass',
                    timer: 'timer',
                    timerProgressBar: 'timerProgressBar',
                    heightAuto: 'heightAuto',
                    allowOutsideClick: 'allowOutsideClick',
                    allowEscapeKey: 'allowEscapeKey',
                    allowEnterKey: 'allowEnterKey',
                    stopKeydownPropagation: 'stopKeydownPropagation',
                    keydownListenerCapture: 'keydownListenerCapture',
                    showConfirmButton: 'showConfirmButton',
                    showDenyButton: 'showDenyButton',
                    showCancelButton: 'showCancelButton',
                    confirmButtonText: 'confirmButtonText',
                    denyButtonText: 'denyButtonText',
                    cancelButtonText: 'cancelButtonText',
                    confirmButtonColor: 'confirmButtonColor',
                    denyButtonColor: 'denyButtonColor',
                    cancelButtonColor: 'cancelButtonColor',
                    confirmButtonAriaLabel: 'confirmButtonAriaLabel',
                    denyButtonAriaLabel: 'denyButtonAriaLabel',
                    cancelButtonAriaLabel: 'cancelButtonAriaLabel',
                    buttonsStyling: 'buttonsStyling',
                    reverseButtons: 'reverseButtons',
                    focusConfirm: 'focusConfirm',
                    focusDeny: 'focusDeny',
                    focusCancel: 'focusCancel',
                    showCloseButton: 'showCloseButton',
                    closeButtonHtml: 'closeButtonHtml',
                    closeButtonAriaLabel: 'closeButtonAriaLabel',
                    loaderHtml: 'loaderHtml',
                    showLoaderOnConfirm: 'showLoaderOnConfirm',
                    preConfirm: 'preConfirm',
                    preDeny: 'preDeny',
                    imageUrl: 'imageUrl',
                    imageWidth: 'imageWidth',
                    imageHeight: 'imageHeight',
                    imageAlt: 'imageAlt',
                    inputLabel: 'inputLabel',
                    inputPlaceholder: 'inputPlaceholder',
                    inputValue: 'inputValue',
                    inputOptions: 'inputOptions',
                    inputAutoTrim: 'inputAutoTrim',
                    inputAttributes: 'inputAttributes',
                    inputValidator: 'inputValidator',
                    returnInputValueOnDeny: 'returnInputValueOnDeny',
                    validationMessage: 'validationMessage',
                    progressSteps: 'progressSteps',
                    currentProgressStep: 'currentProgressStep',
                    progressStepsDistance: 'progressStepsDistance',
                    scrollbarPadding: 'scrollbarPadding',
                    swalOptions: 'swalOptions',
                    swalFireOnInit: 'swalFireOnInit',
                    swalDismissOnDestroy: 'swalDismissOnDestroy',
                    swalVisible: 'swalVisible'
                }, {
                    willOpen: 'willOpen',
                    didOpen: 'didOpen',
                    didRender: 'didRender',
                    willClose: 'willClose',
                    didClose: 'didClose',
                    didDestroy: 'didDestroy',
                    confirm: 'confirm',
                    deny: 'deny',
                    dismiss: 'dismiss'
                }, []), ii = t['ɵcrt']({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });
            function oi(l) {
                return t['ɵvid'](0, [(l()(), t['ɵeld'](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
            }
            function ai(l) {
                return t['ɵvid'](2, [
                    (l()(), t['ɵand'](16777216, null, null, 1, null, oi)),
                    t['ɵdid'](1, 540672, null, 0, a.NgTemplateOutlet, [t.ViewContainerRef], {
                        ngTemplateOutlet: [
                            0,
                            'ngTemplateOutlet'
                        ]
                    }, null)
                ], function (l, n) {
                    l(n, 1, 0, n.component.template);
                }, null);
            }
            function si(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'swal-portal', [], null, null, null, ai, ii)),
                    t['ɵdid'](1, 49152, null, 0, Ju, [], null, null)
                ], null, null);
            }
            var ri = t['ɵccf']('swal-portal', Ju, si, { template: 'template' }, {}, []), di = e('1O3W'), ci = e('9gLZ'), fi = e('9b/N'), pi = e('0YeR'), hi = e('ul+3'), gi = e('CbJs'), mi = e('hzfI'), vi = e('UhP/'), bi = e('34+v'), yi = e('HKzv');
            class wi {
            }
            class Si {
                constructor(l) {
                    this.urlBase = Wt.a.urlBase, this._httpClient = l;
                }
                verifySignatureConfig() {
                    return this._httpClient.get(this.urlBase + 'users/wizard/validateDS');
                }
                confirmPhoneNumber(l) {
                    return this._httpClient.get(this.urlBase + 'user/mobil/confirm?code=' + l);
                }
                sendConfirmEmail() {
                    return this._httpClient.get(this.urlBase + 'users/wizard/emailConfirm');
                }
                saveAvatarFile(l) {
                    let n = this.urlBase + 'user/avatar';
                    const e = new FormData();
                    return e.append('avatar', l.file), this._httpClient.post(n, e);
                }
                verifyAppDowload() {
                    return this._httpClient.get(this.urlBase + 'users/wizard/Dowloadapp');
                }
            }
            var Ci = e('7bNT'), ki = e('YcMP'), Ri = e('tZxj'), Di = e('eIep'), Ii = e('JIr8'), xi = e('zp1y');
            let Ei = (() => {
                class l extends ki.a {
                    constructor(l, n, e, t, u) {
                        super(u), this.actions$ = l, this._authService = n, this._layoutService = e, this.store = t, this._notificationSrv = u, this.SendCode$ = this.actions$.pipe(Object(Ci.j)(Ri.a.SEND_CODE_MOBILE), Object(Di.a)(l => this._authService.getCode(l.request).pipe(Object(Di.a)(() => []), Object(Ii.a)(l => (this.notifyError(l.message), [])))), Object(Ii.a)(l => (this.notifyError(l.message), []))), this.VerifyAppDonwload$ = this.actions$.pipe(Object(Ci.j)(Ri.a.VERIFY_APP_DONWLOAD), Object(xi.a)(this.store.select(l => l.auth.user)), Object(Di.a)(([l, n]) => this._layoutService.verifyAppDowload().pipe(Object(Di.a)(l => null != l && '' != l ? [
                            new Ut.a(Yt.a.digitalSignature),
                            new Ut.c(Object.assign(Object.assign({}, n), { mobil_device: l }))
                        ] : [])))), this.VerifydigitalSignature$ = this.actions$.pipe(Object(Ci.j)(Ri.a.VERIFY_DIGITAL_SIGNATURE), Object(xi.a)(this.store.select(l => l.auth.user)), Object(Di.a)(([l, n]) => this._layoutService.verifySignatureConfig().pipe(Object(Di.a)(() => [
                            new Ut.a(Yt.a.avatar),
                            new Ut.c(Object.assign(Object.assign({}, n), { digital_signature_save: new Date() }))
                        ]), Object(Ii.a)(l => (this.notifyError(l.error[0]), [])))), Object(Ii.a)(l => (this.notifyError(l.message), []))), this.verifyConfirmEmail$ = this.actions$.pipe(Object(Ci.j)(Ri.a.VERIFY_CONFIRM_EMAIL), Object(xi.a)(this.store.select(l => l.auth.user)), Object(Di.a)(([l, n]) => this._layoutService.sendConfirmEmail().pipe(Object(Di.a)(l => l ? [
                            new Ut.a(Yt.a.phone),
                            new Ut.c(Object.assign(Object.assign({}, n), { email_verified_at: l }))
                        ] : [])))), this.SaveAvatarFile$ = this.actions$.pipe(Object(Ci.j)(Ri.a.SAVE_AVATAR_FILE), Object(xi.a)(this.store.select(l => l.auth.user)), Object(Di.a)(([l, n]) => this._layoutService.saveAvatarFile(l.avatar).pipe(Object(Di.a)(() => [
                            new Ut.a(Yt.a.email),
                            new Ut.b(!1),
                            new Ut.c(Object.assign(Object.assign({}, n), { avatar: l.urlBase64 }))
                        ]), Object(Ii.a)(l => (this.notifyError(l.message), [new Ut.b(!1)])))), Object(Ii.a)(l => (this.notifyError(l.message), [new Ut.b(!1)]))), this.ConfirmPhone$ = this.actions$.pipe(Object(Ci.j)(Ri.a.CONFIRM_FORM_NUMBER), Object(xi.a)(this.store.select(l => l.auth.user)), Object(Di.a)(([l, n]) => this._layoutService.confirmPhoneNumber(l.code).pipe(Object(Di.a)(() => [
                            new Ut.a(Yt.a.eFirma),
                            new Ut.c(Object.assign(Object.assign({}, n), { mobile_verified_at: new Date() }))
                        ]), Object(Ii.a)(l => (this.notifyError(l.error[0]), [])))), Object(Ii.a)(l => (this.notifyError(l.message), [])));
                    }
                }
                return Object(An.b)([Object(Ci.c)()], l.prototype, 'SendCode$', void 0), Object(An.b)([Object(Ci.c)()], l.prototype, 'VerifyAppDonwload$', void 0), Object(An.b)([Object(Ci.c)()], l.prototype, 'VerifydigitalSignature$', void 0), Object(An.b)([Object(Ci.c)()], l.prototype, 'verifyConfirmEmail$', void 0), Object(An.b)([Object(Ci.c)()], l.prototype, 'SaveAvatarFile$', void 0), Object(An.b)([Object(Ci.c)()], l.prototype, 'ConfirmPhone$', void 0), l;
            })();
            var Ai = e('lJxs');
            let Ti = (() => {
                class l {
                    constructor(l, n) {
                        this.store = l, this.router = n;
                    }
                    canActivate(l, n) {
                        return this.store.pipe(Object(v.C)(ge.c), Object(Ai.a)(l => 0 != l.length || (this.router.navigateByUrl('/packages'), !1)));
                    }
                }
                return l.ɵprov = t['ɵɵdefineInjectable']({
                    factory: function () {
                        return new l(t['ɵɵinject'](v.o), t['ɵɵinject'](f.r));
                    },
                    token: l,
                    providedIn: 'root'
                }), l;
            })();
            var Vi = e('PVIp');
            let _i = (() => {
                    class l {
                        constructor(l, n) {
                            this.store = l, this.router = n;
                        }
                        canActivate(l, n) {
                            return this.store.pipe(Object(v.C)(h.e), Object(Ai.a)(l => !!l || (this.router.navigateByUrl('/packages'), !1)));
                        }
                    }
                    return l.ɵprov = t['ɵɵdefineInjectable']({
                        factory: function () {
                            return new l(t['ɵɵinject'](v.o), t['ɵɵinject'](f.r));
                        },
                        token: l,
                        providedIn: 'root'
                    }), l;
                })(), Li = (() => {
                    class l {
                        constructor(l, n) {
                            this.store = l, this.router = n;
                        }
                        canActivate(l, n) {
                            return this.store.pipe(Object(v.C)(h.h), Object(Ai.a)(l => !!l || (this.router.navigateByUrl('/packages'), !1)));
                        }
                    }
                    return l.ɵprov = t['ɵɵdefineInjectable']({
                        factory: function () {
                            return new l(t['ɵɵinject'](v.o), t['ɵɵinject'](f.r));
                        },
                        token: l,
                        providedIn: 'root'
                    }), l;
                })(), Oi = (() => {
                    class l {
                        constructor(l, n) {
                            this.store = l, this.router = n;
                        }
                        canActivate(l, n) {
                            return this.store.pipe(Object(v.C)(h.f), Object(Ai.a)(l => !!l || (this.router.navigateByUrl('/packages'), !1)));
                        }
                    }
                    return l.ɵprov = t['ɵɵdefineInjectable']({
                        factory: function () {
                            return new l(t['ɵɵinject'](v.o), t['ɵɵinject'](f.r));
                        },
                        token: l,
                        providedIn: 'root'
                    }), l;
                })();
            const Pi = () => Promise.all([
                    e.e(0),
                    e.e(1),
                    e.e(39)
                ]).then(e.bind(null, 'BrWb')).then(l => l.ChartDashboardModuleNgFactory), Mi = () => Promise.all([
                    e.e(0),
                    e.e(1),
                    e.e(40)
                ]).then(e.bind(null, 'mhqm')).then(l => l.DashboardModuleNgFactory), Hi = () => Promise.all([
                    e.e(0),
                    e.e(2),
                    e.e(3),
                    e.e(6),
                    e.e(19),
                    e.e(1),
                    e.e(31)
                ]).then(e.bind(null, 've5D')).then(l => l.SalesModuleNgFactory), Gi = () => Promise.all([
                    e.e(0),
                    e.e(2),
                    e.e(3),
                    e.e(6),
                    e.e(19),
                    e.e(1),
                    e.e(35)
                ]).then(e.bind(null, 'Y52y')).then(l => l.CustomersModuleNgFactory), Bi = () => Promise.all([
                    e.e(3),
                    e.e(1),
                    e.e(26)
                ]).then(e.bind(null, 'E/Jp')).then(l => l.SellerModuleNgFactory), Ni = () => Promise.all([
                    e.e(0),
                    e.e(2),
                    e.e(3),
                    e.e(4),
                    e.e(6),
                    e.e(5),
                    e.e(9),
                    e.e(16)
                ]).then(e.bind(null, 'K6+c')).then(l => l.SignModuleNgFactory), Fi = () => Promise.all([
                    e.e(0),
                    e.e(3),
                    e.e(6),
                    e.e(9),
                    e.e(17)
                ]).then(e.bind(null, 'F1zo')).then(l => l.ContractModuleNgFactory), ji = () => Promise.all([
                    e.e(1),
                    e.e(36)
                ]).then(e.bind(null, 'YyCp')).then(l => l.PackagesModuleNgFactory), Ki = () => Promise.all([
                    e.e(0),
                    e.e(2),
                    e.e(3),
                    e.e(4),
                    e.e(5),
                    e.e(14)
                ]).then(e.bind(null, 'seWe')).then(l => l.NotificationsModuleNgFactory), zi = () => Promise.all([
                    e.e(0),
                    e.e(2),
                    e.e(4),
                    e.e(5),
                    e.e(11),
                    e.e(15),
                    e.e(37)
                ]).then(e.bind(null, 'v3SN')).then(l => l.SignContractModuleNgFactory), Ui = () => Promise.all([
                    e.e(0),
                    e.e(2),
                    e.e(4),
                    e.e(11),
                    e.e(38)
                ]).then(e.bind(null, '0eoa')).then(l => l.SincronizationModuleNgFactory), qi = () => Promise.all([
                    e.e(0),
                    e.e(34)
                ]).then(e.bind(null, '9U7I')).then(l => l.CheckoutModuleNgFactory), Wi = () => Promise.all([
                    e.e(0),
                    e.e(2),
                    e.e(3),
                    e.e(4),
                    e.e(1),
                    e.e(29)
                ]).then(e.bind(null, 'cfIE')).then(l => l.SettingsModuleNgFactory), Yi = () => e.e(18).then(e.bind(null, 'sJtH')).then(l => l.HelpModuleNgFactory);
            class Xi {
            }
            var $i = e('tM0M'), Zi = e('F3IN'), Ji = e('zfYk'), Qi = e('1z/I'), lo = e('7KAL'), no = e('PgQK'), eo = e('jQCg'), to = e('W0Pu'), uo = e('wf2+'), io = e('0CZq'), oo = e('Rgb0'), ao = e('Jp/u'), so = e('GaVp'), ro = e('YRt3'), co = e('lAiz'), fo = e('YEUz'), po = e('CYS+'), ho = e('px0D'), go = e('YdS3'), mo = e('mW00'), vo = e('jTf7'), bo = e('S/WK'), yo = e('oBm0'), wo = e('RVNi'), So = e('gaRz'), Co = e('vZsH'), ko = e('fb/r'), Ro = e('z+yo'), Do = e('JXeA'), Io = e('51fn'), xo = e('pKmL');
            const Eo = { suppressScrollX: !0 };
            class Ao {
            }
            class To {
            }
            var Vo = e('xGJD');
            const _o = {
                modal: { isVisible: !1 },
                forms: { avatar: { isLoading: !1 } },
                wizard: { currentStep: Yt.a.donwloadApp }
            };
            function Lo(l = _o, n) {
                switch (n.type) {
                case Ri.a.SET_VISIBILITY_MODAL:
                    return Object.assign(Object.assign({}, l), { modal: Object.assign(Object.assign({}, l.modal), { isVisible: n.value }) });
                case Ri.a.SET_CURRENT_STEP:
                    return Object.assign(Object.assign({}, l), { wizard: Object.assign(Object.assign({}, l.wizard), { currentStep: n.currentStep }) });
                case Ri.a.SAVE_AVATAR_FILE:
                    return Object.assign(Object.assign({}, l), { forms: Object.assign(Object.assign({}, l.forms), { avatar: Object.assign(Object.assign({}, l.forms.avatar), { isLoading: !0 }) }) });
                case Ri.a.SET_LOADING_FORM_AVATAR:
                    return Object.assign(Object.assign({}, l), { forms: Object.assign(Object.assign({}, l.forms), { avatar: Object.assign(Object.assign({}, l.forms.avatar), { isLoading: n.value }) }) });
                default:
                    return l;
                }
            }
            var Oo = e('cMCp'), Po = e('Dxy4'), Mo = e('q59W'), Ho = e('Tj54'), Go = e('305l'), Bo = e('NRzN'), No = e('g297'), Fo = e('I6wT'), jo = e('X+QX'), Ko = e('vElD'), zo = e('b3X1'), Uo = e('6h/S'), qo = t['ɵcmf'](u, [], function (l) {
                    return t['ɵmod']([
                        t['ɵmpd'](512, t.ComponentFactoryResolver, t['ɵCodegenComponentFactoryResolver'], [
                            [
                                8,
                                [
                                    i.a,
                                    Ou,
                                    Pu.a,
                                    En.h,
                                    En.i,
                                    Mu.a,
                                    Hu.a,
                                    pu.b,
                                    pu.a,
                                    Gu.a,
                                    En.b,
                                    xt,
                                    Pt,
                                    Bu.a,
                                    Nu.a,
                                    Fu.a,
                                    ju.a,
                                    Ku.a,
                                    zu.a,
                                    Uu.a,
                                    ui,
                                    ri
                                ]
                            ],
                            [
                                3,
                                t.ComponentFactoryResolver
                            ],
                            t.NgModuleRef
                        ]),
                        t['ɵmpd'](4608, a.NgLocalization, a.NgLocaleLocalization, [t.LOCALE_ID]),
                        t['ɵmpd'](4608, R.E, R.E, [
                            t.ComponentFactoryResolver,
                            t.Injector,
                            R.vb,
                            R.F
                        ]),
                        t['ɵmpd'](4608, di.d, di.d, [
                            di.l,
                            di.f,
                            t.ComponentFactoryResolver,
                            di.j,
                            di.g,
                            t.Injector,
                            t.NgZone,
                            a.DOCUMENT,
                            ci.b,
                            a.Location,
                            di.i
                        ]),
                        t['ɵmpd'](5120, di.m, di.n, [di.d]),
                        t['ɵmpd'](4608, D.z, D.z, []),
                        t['ɵmpd'](4608, fi.c, fi.c, []),
                        t['ɵmpd'](135680, hu.k, hu.k, [
                            di.d,
                            t.Injector,
                            pi.a,
                            [
                                3,
                                hu.k
                            ]
                        ]),
                        t['ɵmpd'](4608, D.f, D.f, []),
                        t['ɵmpd'](4608, r.HttpXsrfTokenExtractor, r['ɵangular_packages_common_http_http_g'], [
                            a.DOCUMENT,
                            t.PLATFORM_ID,
                            r['ɵangular_packages_common_http_http_e']
                        ]),
                        t['ɵmpd'](4608, r['ɵangular_packages_common_http_http_h'], r['ɵangular_packages_common_http_http_h'], [
                            r.HttpXsrfTokenExtractor,
                            r['ɵangular_packages_common_http_http_f']
                        ]),
                        t['ɵmpd'](4608, r['ɵangular_packages_common_http_http_d'], r['ɵangular_packages_common_http_http_d'], []),
                        t['ɵmpd'](6144, r.XhrFactory, null, [r['ɵangular_packages_common_http_http_d']]),
                        t['ɵmpd'](4608, r.HttpXhrBackend, r.HttpXhrBackend, [r.XhrFactory]),
                        t['ɵmpd'](6144, r.HttpBackend, null, [r.HttpXhrBackend]),
                        t['ɵmpd'](4608, r.HttpHandler, r['ɵHttpInterceptingHandler'], [
                            r.HttpBackend,
                            t.Injector
                        ]),
                        t['ɵmpd'](4608, r.HttpClient, r.HttpClient, [r.HttpHandler]),
                        t['ɵmpd'](4608, We.a, hi.a, [r.HttpClient]),
                        t['ɵmpd'](5120, r.HTTP_INTERCEPTORS, function (l, n, e) {
                            return [
                                l,
                                new gi.a(n, e)
                            ];
                        }, [
                            r['ɵangular_packages_common_http_http_h'],
                            We.a,
                            v.o
                        ]),
                        t['ɵmpd'](5120, mi.b, mi.a, [[
                                3,
                                mi.b
                            ]]),
                        t['ɵmpd'](4608, vi.b, vi.b, []),
                        t['ɵmpd'](4608, bi.a, yi.a, [r.HttpClient]),
                        t['ɵmpd'](5120, kt.h, kt.g, [kt.f]),
                        t['ɵmpd'](4608, kt.e, kt.e, [kt.h]),
                        t['ɵmpd'](4608, wi, Si, [r.HttpClient]),
                        t['ɵmpd'](4608, Ei, Ei, [
                            Ci.a,
                            We.a,
                            wi,
                            v.o,
                            dn.a
                        ]),
                        t['ɵmpd'](4608, $u, $u, [Wu]),
                        t['ɵmpd'](1073742336, a.CommonModule, a.CommonModule, []),
                        t['ɵmpd'](1073742336, f.v, f.v, [
                            [
                                2,
                                f.B
                            ],
                            [
                                2,
                                f.r
                            ]
                        ]),
                        t['ɵmpd'](1073742336, Xi, Xi, []),
                        t['ɵmpd'](1073742336, p.i, p.i, []),
                        t['ɵmpd'](1073742336, $i.a, $i.a, []),
                        t['ɵmpd'](1073742336, Zi.InlineSVGModule, Zi.InlineSVGModule, []),
                        t['ɵmpd'](1073742336, he, he, []),
                        t['ɵmpd'](1073742336, Ji.a, Ji.a, []),
                        t['ɵmpd'](1073742336, R.G, R.G, []),
                        t['ɵmpd'](1073742336, Nt.a, Nt.a, []),
                        t['ɵmpd'](1073742336, Ft.b, Ft.b, []),
                        t['ɵmpd'](1073742336, Bt.b, Bt.b, []),
                        t['ɵmpd'](1073742336, Mt.b, Mt.b, []),
                        t['ɵmpd'](1073742336, ci.a, ci.a, []),
                        t['ɵmpd'](1073742336, Qi.e, Qi.e, []),
                        t['ɵmpd'](1073742336, lo.c, lo.c, []),
                        t['ɵmpd'](1073742336, lo.g, lo.g, []),
                        t['ɵmpd'](1073742336, di.h, di.h, []),
                        t['ɵmpd'](1073742336, no.a, no.a, []),
                        t['ɵmpd'](1073742336, eo.c, eo.c, []),
                        t['ɵmpd'](1073742336, to.b, to.b, []),
                        t['ɵmpd'](1073742336, Ht.b, Ht.b, []),
                        t['ɵmpd'](1073742336, uo.e, uo.e, []),
                        t['ɵmpd'](1073742336, io.d, io.d, []),
                        t['ɵmpd'](1073742336, io.c, io.c, []),
                        t['ɵmpd'](1073742336, D.y, D.y, []),
                        t['ɵmpd'](1073742336, D.l, D.l, []),
                        t['ɵmpd'](1073742336, oo.c, oo.c, []),
                        t['ɵmpd'](1073742336, ao.c, ao.c, []),
                        t['ɵmpd'](1073742336, Gt.b, Gt.b, []),
                        t['ɵmpd'](1073742336, so.c, so.c, []),
                        t['ɵmpd'](1073742336, ro.a, ro.a, []),
                        t['ɵmpd'](1073742336, co.a, co.a, []),
                        t['ɵmpd'](1073742336, co.b, co.b, []),
                        t['ɵmpd'](1073742336, fi.d, fi.d, []),
                        t['ɵmpd'](1073742336, fo.a, fo.a, [fo.f]),
                        t['ɵmpd'](1073742336, po.c, po.c, []),
                        t['ɵmpd'](1073742336, ho.d, ho.d, []),
                        t['ɵmpd'](1073742336, go.a, go.a, []),
                        t['ɵmpd'](1073742336, mo.d, mo.d, []),
                        t['ɵmpd'](1073742336, vo.j, vo.j, []),
                        t['ɵmpd'](1073742336, bo.a, bo.a, []),
                        t['ɵmpd'](1073742336, hu.i, hu.i, []),
                        t['ɵmpd'](1073742336, yo.a, yo.a, []),
                        t['ɵmpd'](1073742336, wo.b, wo.b, []),
                        t['ɵmpd'](1073742336, So.d, So.d, []),
                        t['ɵmpd'](1073742336, Co.d, Co.d, []),
                        t['ɵmpd'](1073742336, ko.b, ko.b, []),
                        t['ɵmpd'](1073742336, D.v, D.v, []),
                        t['ɵmpd'](1073742336, Ro.a, Ro.a, []),
                        t['ɵmpd'](1073742336, Do.h, Do.h, []),
                        t['ɵmpd'](1073742336, Do.f, Do.f, []),
                        t['ɵmpd'](1073742336, Io.a, Io.a, []),
                        t['ɵmpd'](1073742336, xo.a, xo.a, []),
                        t['ɵmpd'](1073742336, Ao, Ao, []),
                        t['ɵmpd'](1073742336, R.z, R.z, []),
                        t['ɵmpd'](1073742336, R.V, R.V, []),
                        t['ɵmpd'](1073742336, R.t, R.t, []),
                        t['ɵmpd'](1073742336, To, To, []),
                        t['ɵmpd'](1073742336, kt.d, kt.d, []),
                        t['ɵmpd'](1024, v.P, function () {
                            return [
                                {},
                                {}
                            ];
                        }, []),
                        t['ɵmpd'](1024, v.k, function () {
                            return [
                                {
                                    key: 'auth',
                                    reducerFactory: v.u,
                                    metaReducers: [],
                                    initialState: void 0
                                },
                                {
                                    key: 'layoutModule',
                                    reducerFactory: v.u,
                                    metaReducers: [],
                                    initialState: void 0
                                }
                            ];
                        }, []),
                        t['ɵmpd'](1024, v.Q, v.X, [
                            t.Injector,
                            v.P,
                            v.k
                        ]),
                        t['ɵmpd'](1024, v.O, function () {
                            return [
                                Vo.a,
                                { basicInfo: Lo }
                            ];
                        }, []),
                        t['ɵmpd'](1024, v.R, function (l, n) {
                            return [
                                l,
                                n
                            ];
                        }, [
                            v.O,
                            v.O
                        ]),
                        t['ɵmpd'](1024, v.b, function (l, n, e, t, u, i) {
                            return [
                                v.Y(l, n, e),
                                v.Y(t, u, i)
                            ];
                        }, [
                            t.Injector,
                            v.O,
                            v.R,
                            t.Injector,
                            v.O,
                            v.R
                        ]),
                        t['ɵmpd'](1024, v.V, function (l, n) {
                            return [
                                v.I(l),
                                v.I(n)
                            ];
                        }, [
                            v.U,
                            v.U
                        ]),
                        t['ɵmpd'](1073873408, v.p, v.p, [
                            v.Q,
                            v.b,
                            v.h,
                            v.q,
                            [
                                2,
                                v.V
                            ]
                        ]),
                        t['ɵmpd'](1024, Ci.p, function () {
                            return [
                                [],
                                [Ei]
                            ];
                        }, []),
                        t['ɵmpd'](1024, Ci.h, function () {
                            return [
                                [],
                                []
                            ];
                        }, []),
                        t['ɵmpd'](1024, Ci.q, function (l, n, e, t, u, i) {
                            return [
                                Ci.k(l, n, e),
                                Ci.k(t, u, i)
                            ];
                        }, [
                            t.Injector,
                            Ci.p,
                            Ci.h,
                            t.Injector,
                            Ci.p,
                            Ci.h
                        ]),
                        t['ɵmpd'](1073742336, Ci.e, Ci.e, [
                            Ci.f,
                            Ci.q,
                            [
                                2,
                                v.q
                            ],
                            [
                                2,
                                v.p
                            ]
                        ]),
                        t['ɵmpd'](1073742336, Oo.a, Oo.a, []),
                        t['ɵmpd'](1073742336, r.HttpClientXsrfModule, r.HttpClientXsrfModule, []),
                        t['ɵmpd'](1073742336, r.HttpClientModule, r.HttpClientModule, []),
                        t['ɵmpd'](1073742336, vi.k, vi.k, [
                            fo.f,
                            [
                                2,
                                vi.c
                            ],
                            [
                                2,
                                a.DOCUMENT
                            ]
                        ]),
                        t['ɵmpd'](1073742336, vi.u, vi.u, []),
                        t['ɵmpd'](1073742336, Po.a, Po.a, []),
                        t['ɵmpd'](1073742336, Mo.e, Mo.e, []),
                        t['ɵmpd'](1073742336, Ho.b, Ho.b, []),
                        t['ɵmpd'](1073742336, mi.c, mi.c, []),
                        t['ɵmpd'](1073742336, Go.a, Go.a, []),
                        t['ɵmpd'](1073742336, li, li, []),
                        t['ɵmpd'](1073742336, u, u, []),
                        t['ɵmpd'](1024, f.m, function () {
                            return [
                                [{
                                        path: '',
                                        component: vu,
                                        children: [
                                            {
                                                path: 'dashboard-chart',
                                                loadChildren: Pi,
                                                canActivate: [_i]
                                            },
                                            {
                                                path: 'dashboard',
                                                loadChildren: Mi
                                            },
                                            {
                                                path: 'sales',
                                                loadChildren: Hi,
                                                canActivate: [Li]
                                            },
                                            {
                                                path: 'customers',
                                                loadChildren: Gi,
                                                canActivate: [Li]
                                            },
                                            {
                                                path: 'seller',
                                                loadChildren: Bi,
                                                canActivate: [Oi]
                                            },
                                            {
                                                path: 'document',
                                                loadChildren: Ni
                                            },
                                            {
                                                path: 'contract',
                                                loadChildren: Fi,
                                                canActivate: [Vi.a]
                                            },
                                            {
                                                path: 'packages',
                                                loadChildren: ji
                                            },
                                            {
                                                path: 'notifications',
                                                loadChildren: Ki
                                            },
                                            {
                                                path: 'sign-contract',
                                                loadChildren: zi
                                            },
                                            {
                                                path: 'sincronization',
                                                loadChildren: Ui
                                            },
                                            {
                                                path: 'check-out',
                                                loadChildren: qi,
                                                canActivate: [Ti]
                                            },
                                            {
                                                path: 'settings',
                                                loadChildren: Wi
                                            },
                                            {
                                                path: 'support-center',
                                                loadChildren: Yi
                                            },
                                            {
                                                path: '',
                                                redirectTo: 'dashboard',
                                                pathMatch: 'full'
                                            },
                                            {
                                                path: '**',
                                                redirectTo: 'errors/404',
                                                pathMatch: 'full'
                                            }
                                        ]
                                    }],
                                [{
                                        path: '',
                                        component: Bo.a,
                                        children: [
                                            {
                                                path: '',
                                                redirectTo: 'login',
                                                pathMatch: 'full'
                                            },
                                            {
                                                path: 'login',
                                                component: No.a,
                                                data: Oo.b
                                            },
                                            {
                                                path: 'registration',
                                                component: Fo.a
                                            },
                                            {
                                                path: 'forgot-password',
                                                component: jo.a
                                            },
                                            {
                                                path: 'logout',
                                                component: Ko.a
                                            },
                                            {
                                                path: 'change-password/:code',
                                                component: zo.a
                                            },
                                            {
                                                path: 'confirmation/:code',
                                                component: Uo.a
                                            },
                                            {
                                                path: '',
                                                redirectTo: 'login',
                                                pathMatch: 'full'
                                            },
                                            {
                                                path: '**',
                                                redirectTo: 'login',
                                                pathMatch: 'full'
                                            }
                                        ]
                                    }]
                            ];
                        }, []),
                        t['ɵmpd'](256, se, Eo, []),
                        t['ɵmpd'](256, r['ɵangular_packages_common_http_http_e'], 'XSRF-TOKEN', []),
                        t['ɵmpd'](256, r['ɵangular_packages_common_http_http_f'], 'X-XSRF-TOKEN', []),
                        t['ɵmpd'](256, kt.f, {}, []),
                        t['ɵmpd'](256, Wu, Qu, []),
                        t['ɵmpd'](256, Yu, !1, []),
                        t['ɵmpd'](256, Xu, !0, [])
                    ]);
                });
        },
        XXMa: function (l, n, e) {
            'use strict';
            e.d(n, 'a', function () {
                return u;
            }), e.d(n, 'b', function () {
                return i;
            }), e.d(n, 'c', function () {
                return o;
            });
            var t = e('tqRt');
            const u = l => l.checkout.cart, i = l => l.checkout.cartUI, o = Object(t.z)(u, l => l.packages);
        },
        YcMP: function (l, n, e) {
            'use strict';
            e.d(n, 'a', function () {
                return t;
            });
            class t {
                constructor(l) {
                    this._notification = l;
                }
                notifyError(l) {
                    this._notification.error([l]);
                }
            }
        },
        boci: function (l, n, e) {
            var t, u, i;
            !function (e, o) {
                'use strict';
                'object' == typeof l.exports ? l.exports = o() : (u = [], void 0 === (i = 'function' == typeof (t = o) ? t.apply(n, u) : t) || (l.exports = i));
            }(0, function () {
                'use strict';
                var l = Object.prototype.toString;
                function n(l, n) {
                    return null != l && Object.prototype.hasOwnProperty.call(l, n);
                }
                function e(l) {
                    if (!l)
                        return !0;
                    if (u(l) && 0 === l.length)
                        return !0;
                    if ('string' != typeof l) {
                        for (var e in l)
                            if (n(l, e))
                                return !1;
                        return !0;
                    }
                    return !1;
                }
                function t(n) {
                    return l.call(n);
                }
                var u = Array.isArray || function (n) {
                    return '[object Array]' === l.call(n);
                };
                function i(l) {
                    var n = parseInt(l);
                    return n.toString() === l ? n : l;
                }
                function o(l) {
                    var o, a = function (l) {
                            return Object.keys(a).reduce(function (n, e) {
                                return 'create' === e || 'function' == typeof a[e] && (n[e] = a[e].bind(a, l)), n;
                            }, {});
                        };
                    function s(l, n) {
                        if (o(l, n))
                            return l[n];
                    }
                    function r(n, e, t, u) {
                        if ('number' == typeof e && (e = [e]), !e || 0 === e.length)
                            return n;
                        if ('string' == typeof e)
                            return r(n, e.split('.').map(i), t, u);
                        var o = e[0], a = s(n, o);
                        if (l.includeInheritedProps && ('__proto__' === o || 'constructor' === o && 'function' == typeof a))
                            throw new Error('For security reasons, object\'s magic properties cannot be set');
                        return 1 === e.length ? (void 0 !== a && u || (n[o] = t), a) : (void 0 === a && (n[o] = 'number' == typeof e[1] ? [] : {}), r(n[o], e.slice(1), t, u));
                    }
                    return o = (l = l || {}).includeInheritedProps ? function () {
                        return !0;
                    } : function (l, e) {
                        return 'number' == typeof e && Array.isArray(l) || n(l, e);
                    }, a.has = function (e, t) {
                        if ('number' == typeof t ? t = [t] : 'string' == typeof t && (t = t.split('.')), !t || 0 === t.length)
                            return !!e;
                        for (var o = 0; o < t.length; o++) {
                            var a = i(t[o]);
                            if (!('number' == typeof a && u(e) && a < e.length || (l.includeInheritedProps ? a in Object(e) : n(e, a))))
                                return !1;
                            e = e[a];
                        }
                        return !0;
                    }, a.ensureExists = function (l, n, e) {
                        return r(l, n, e, !0);
                    }, a.set = function (l, n, e, t) {
                        return r(l, n, e, t);
                    }, a.insert = function (l, n, e, t) {
                        var i = a.get(l, n);
                        t = ~~t, u(i) || a.set(l, n, i = []), i.splice(t, 0, e);
                    }, a.empty = function (l, n) {
                        var i, s;
                        if (!e(n) && null != l && (i = a.get(l, n))) {
                            if ('string' == typeof i)
                                return a.set(l, n, '');
                            if (function (l) {
                                    return 'boolean' == typeof l || '[object Boolean]' === t(l);
                                }(i))
                                return a.set(l, n, !1);
                            if ('number' == typeof i)
                                return a.set(l, n, 0);
                            if (u(i))
                                i.length = 0;
                            else {
                                if (!function (l) {
                                        return 'object' == typeof l && '[object Object]' === t(l);
                                    }(i))
                                    return a.set(l, n, null);
                                for (s in i)
                                    o(i, s) && delete i[s];
                            }
                        }
                    }, a.push = function (l, n) {
                        var e = a.get(l, n);
                        u(e) || a.set(l, n, e = []), e.push.apply(e, Array.prototype.slice.call(arguments, 2));
                    }, a.coalesce = function (l, n, e) {
                        for (var t, u = 0, i = n.length; u < i; u++)
                            if (void 0 !== (t = a.get(l, n[u])))
                                return t;
                        return e;
                    }, a.get = function (l, n, e) {
                        if ('number' == typeof n && (n = [n]), !n || 0 === n.length)
                            return l;
                        if (null == l)
                            return e;
                        if ('string' == typeof n)
                            return a.get(l, n.split('.'), e);
                        var t = i(n[0]), u = s(l, t);
                        return void 0 === u ? e : 1 === n.length ? u : a.get(l[t], n.slice(1), e);
                    }, a.del = function (l, n) {
                        if ('number' == typeof n && (n = [n]), null == l)
                            return l;
                        if (e(n))
                            return l;
                        if ('string' == typeof n)
                            return a.del(l, n.split('.'));
                        var t = i(n[0]);
                        return o(l, t) ? 1 !== n.length ? a.del(l[t], n.slice(1)) : (u(l) ? l.splice(t, 1) : delete l[t], l) : l;
                    }, a;
                }
                var a = o();
                return a.create = o, a.withInheritedProps = o({ includeInheritedProps: !0 }), a;
            });
        },
        bxSH: function (l, n, e) {
            'use strict';
            (function (l) {
                var t = e('rh/z');
                document.addEventListener('click', function (l) {
                    var n;
                    if (n = t.a.getByTagName('body')[0].querySelectorAll('.menu-nav .menu-item.menu-item-submenu.menu-item-hover:not(.menu-item-tabs)[data-menu-toggle="click"]'))
                        for (var e = 0, u = n.length; e < u; e++) {
                            var i = n[e].closest('.menu-nav').parentNode;
                            if (i) {
                                var o = t.a.data(i).get('menu');
                                if (!o)
                                    break;
                                if (!o || 'dropdown' !== o.getSubmenuMode())
                                    break;
                                l.target !== i && !1 === i.contains(l.target) && o.hideDropdowns();
                            }
                        }
                }), n.a = function (l, n) {
                    var e = this, u = !1, i = t.a.getById(l), o = t.a.getBody();
                    if (i) {
                        var a = {
                                scroll: { rememberPosition: !1 },
                                accordion: {
                                    slideSpeed: 200,
                                    autoScroll: !1,
                                    autoScrollSpeed: 1200,
                                    expandAll: !0
                                },
                                dropdown: { timeout: 500 }
                            }, s = {
                                construct: function (l) {
                                    return t.a.data(i).has('menu') ? e = t.a.data(i).get('menu') : (s.init(l), s.reset(), s.build(), t.a.data(i).set('menu', e)), e;
                                },
                                init: function (l) {
                                    e.events = [], e.eventHandlers = {}, e.options = t.a.deepExtend({}, a, l), e.pauseDropdownHoverTime = 0, e.uid = t.a.getUniqueID();
                                },
                                update: function (l) {
                                    e.options = t.a.deepExtend({}, a, l), e.pauseDropdownHoverTime = 0, s.reset(), e.eventHandlers = {}, s.build(), t.a.data(i).set('menu', e);
                                },
                                reload: function () {
                                    s.reset(), s.build(), s.resetSubmenuProps();
                                },
                                build: function () {
                                    e.eventHandlers.event_1 = t.a.on(i, '.menu-toggle', 'click', s.handleSubmenuAccordion), ('dropdown' === s.getSubmenuMode() || s.isConditionalSubmenuDropdown()) && (e.eventHandlers.event_2 = t.a.on(i, '[data-menu-toggle="hover"]', 'mouseover', s.handleSubmenuDrodownHoverEnter), e.eventHandlers.event_3 = t.a.on(i, '[data-menu-toggle="hover"]', 'mouseout', s.handleSubmenuDrodownHoverExit), e.eventHandlers.event_4 = t.a.on(i, '[data-menu-toggle="click"] > .menu-toggle, [data-menu-toggle="click"] > .menu-link .menu-toggle', 'click', s.handleSubmenuDropdownClick), e.eventHandlers.event_5 = t.a.on(i, '[data-menu-toggle="tab"] > .menu-toggle, [data-menu-toggle="tab"] > .menu-link .menu-toggle', 'click', s.handleSubmenuDropdownTabClick)), e.eventHandlers.event_6 = t.a.on(i, '.menu-item > .menu-link:not(.menu-toggle):not(.menu-link-toggle-skip)', 'click', s.handleLinkClick), e.options.scroll && e.options.scroll.height && s.scrollInit();
                                },
                                reset: function () {
                                    t.a.off(i, 'click', e.eventHandlers.event_1), t.a.off(i, 'mouseover', e.eventHandlers.event_2), t.a.off(i, 'mouseout', e.eventHandlers.event_3), t.a.off(i, 'click', e.eventHandlers.event_4), t.a.off(i, 'click', e.eventHandlers.event_5), t.a.off(i, 'click', e.eventHandlers.event_6);
                                },
                                scrollInit: function () {
                                    e.options.scroll && e.options.scroll.height ? (t.a.scrollDestroy(i, !0), t.a.scrollInit(i, {
                                        mobileNativeScroll: !0,
                                        windowScroll: !1,
                                        resetHeightOnDestroy: !0,
                                        handleWindowResize: !0,
                                        height: e.options.scroll.height,
                                        rememberPosition: e.options.scroll.rememberPosition
                                    })) : t.a.scrollDestroy(i, !0);
                                },
                                scrollUpdate: function () {
                                    e.options.scroll && e.options.scroll.height && t.a.scrollUpdate(i);
                                },
                                scrollTop: function () {
                                    e.options.scroll && e.options.scroll.height && t.a.scrollTop(i);
                                },
                                getSubmenuMode: function (l) {
                                    return t.a.isBreakpointUp('lg') ? l && t.a.hasAttr(l, 'data-menu-toggle') && 'hover' == t.a.attr(l, 'data-menu-toggle') ? 'dropdown' : t.a.isset(e.options.submenu, 'desktop.state.body') ? t.a.hasClasses(o, e.options.submenu.desktop.state.body) ? e.options.submenu.desktop.state.mode : e.options.submenu.desktop.default : t.a.isset(e.options.submenu, 'desktop') ? e.options.submenu.desktop : void 0 : t.a.isBreakpointUp('md') && t.a.isBreakpointDown('lg') && t.a.isset(e.options.submenu, 'tablet') ? e.options.submenu.tablet : !(!t.a.isBreakpointDown('md') || !t.a.isset(e.options.submenu, 'mobile')) && e.options.submenu.mobile;
                                },
                                isConditionalSubmenuDropdown: function () {
                                    return !(!t.a.isBreakpointUp('lg') || !t.a.isset(e.options.submenu, 'desktop.state.body'));
                                },
                                resetSubmenuProps: function (l) {
                                    var n = t.a.findAll(i, '.menu-submenu');
                                    if (n)
                                        for (var e = 0, u = n.length; e < u; e++) {
                                            var o = n[0];
                                            t.a.css(o, 'display', ''), t.a.css(o, 'overflow', ''), o.hasAttribute('data-hor-direction') && (t.a.removeClass(o, 'menu-submenu-left'), t.a.removeClass(o, 'menu-submenu-right'), t.a.addClass(o, o.getAttribute('data-hor-direction')));
                                        }
                                },
                                handleSubmenuDrodownHoverEnter: function (l) {
                                    'accordion' !== s.getSubmenuMode(this) && !1 !== e.resumeDropdownHover() && ('1' == this.getAttribute('data-hover') && (this.removeAttribute('data-hover'), clearTimeout(this.getAttribute('data-timeout')), this.removeAttribute('data-timeout')), s.showSubmenuDropdown(this));
                                },
                                handleSubmenuDrodownHoverExit: function (l) {
                                    if (!1 !== e.resumeDropdownHover() && 'accordion' !== s.getSubmenuMode(this)) {
                                        var n = this, t = setTimeout(function () {
                                                '1' == n.getAttribute('data-hover') && s.hideSubmenuDropdown(n, !0);
                                            }, e.options.dropdown.timeout);
                                        n.setAttribute('data-hover', '1'), n.setAttribute('data-timeout', t);
                                    }
                                },
                                handleSubmenuDropdownClick: function (l) {
                                    if ('accordion' !== s.getSubmenuMode(this)) {
                                        var n = this.closest('.menu-item');
                                        !1 !== s.eventTrigger('submenuToggle', this, l) && 'accordion' != n.getAttribute('data-menu-submenu-mode') && (!1 === t.a.hasClass(n, 'menu-item-hover') ? (t.a.addClass(n, 'menu-item-open-dropdown'), s.showSubmenuDropdown(n)) : (t.a.removeClass(n, 'menu-item-open-dropdown'), s.hideSubmenuDropdown(n, !0)), l.preventDefault());
                                    }
                                },
                                handleSubmenuDropdownTabClick: function (l) {
                                    if ('accordion' !== s.getSubmenuMode(this)) {
                                        var n = this.closest('.menu-item');
                                        !1 !== s.eventTrigger('submenuToggle', this, l) && 'accordion' != n.getAttribute('data-menu-submenu-mode') && (0 == t.a.hasClass(n, 'menu-item-hover') && (t.a.addClass(n, 'menu-item-open-dropdown'), s.showSubmenuDropdown(n)), l.preventDefault());
                                    }
                                },
                                handleLinkClick: function (l) {
                                    var n = this.closest('.menu-item.menu-item-submenu');
                                    !1 !== s.eventTrigger('linkClick', this, l) && n && 'dropdown' === s.getSubmenuMode(n) && s.hideSubmenuDropdowns();
                                },
                                handleSubmenuDropdownClose: function (l, n) {
                                    if ('accordion' !== s.getSubmenuMode(n)) {
                                        var e = i.querySelectorAll('.menu-item.menu-item-submenu.menu-item-hover:not(.menu-item-tabs)');
                                        if (e.length > 0 && !1 === t.a.hasClass(n, 'menu-toggle') && 0 === n.querySelectorAll('.menu-toggle').length)
                                            for (var u = 0, o = e.length; u < o; u++)
                                                s.hideSubmenuDropdown(e[0], !0);
                                    }
                                },
                                handleSubmenuAccordion: function (l, n) {
                                    var u, i = n || this;
                                    if (!1 !== s.eventTrigger('submenuToggle', this, l))
                                        if ('dropdown' === s.getSubmenuMode(n) && (u = i.closest('.menu-item')) && 'accordion' != u.getAttribute('data-menu-submenu-mode'))
                                            l.preventDefault();
                                        else {
                                            var o = i.closest('.menu-item'), a = t.a.child(o, '.menu-submenu, .menu-inner');
                                            if (!t.a.hasClass(i.closest('.menu-item'), 'menu-item-open-always') && o && a) {
                                                l.preventDefault();
                                                var r = e.options.accordion.slideSpeed;
                                                if (!1 === t.a.hasClass(o, 'menu-item-open')) {
                                                    if (!1 === e.options.accordion.expandAll) {
                                                        var d = i.closest('.menu-nav, .menu-subnav'), c = t.a.children(d, '.menu-item.menu-item-open.menu-item-submenu:not(.menu-item-here):not(.menu-item-open-always)');
                                                        if (d && c)
                                                            for (var f = 0, p = c.length; f < p; f++) {
                                                                var h = c[0], g = t.a.child(h, '.menu-submenu');
                                                                g && t.a.slideUp(g, r, function () {
                                                                    s.scrollUpdate(), t.a.removeClass(h, 'menu-item-open');
                                                                });
                                                            }
                                                    }
                                                    t.a.slideDown(a, r, function () {
                                                        s.scrollToItem(i), s.scrollUpdate(), s.eventTrigger('submenuToggle', a, l);
                                                    }), t.a.addClass(o, 'menu-item-open');
                                                } else
                                                    t.a.slideUp(a, r, function () {
                                                        s.scrollToItem(i), s.eventTrigger('submenuToggle', a, l);
                                                    }), t.a.removeClass(o, 'menu-item-open');
                                            }
                                        }
                                },
                                scrollToItem: function (l) {
                                    t.a.isBreakpointUp('lg') && e.options.accordion.autoScroll && '1' !== i.getAttribute('data-menu-scroll') && t.a.scrollTo(l, e.options.accordion.autoScrollSpeed);
                                },
                                hideSubmenuDropdown: function (l, n) {
                                    n && (t.a.removeClass(l, 'menu-item-hover'), t.a.removeClass(l, 'menu-item-active-tab')), l.removeAttribute('data-hover'), l.getAttribute('data-menu-toggle-class') && t.a.removeClass(o, l.getAttribute('data-menu-toggle-class'));
                                    var e = l.getAttribute('data-timeout');
                                    l.removeAttribute('data-timeout'), clearTimeout(e);
                                },
                                hideSubmenuDropdowns: function () {
                                    var l;
                                    if (l = i.querySelectorAll('.menu-item-submenu.menu-item-hover:not(.menu-item-tabs):not([data-menu-toggle="tab"])'))
                                        for (var n = 0, e = l.length; n < e; n++)
                                            s.hideSubmenuDropdown(l[n], !0);
                                },
                                showSubmenuDropdown: function (l) {
                                    var n = i.querySelectorAll('.menu-item-submenu.menu-item-hover, .menu-item-submenu.menu-item-active-tab');
                                    if (n)
                                        for (var e = 0, u = n.length; e < u; e++) {
                                            var a = n[e];
                                            l !== a && !1 === a.contains(l) && !1 === l.contains(a) && s.hideSubmenuDropdown(a, !0);
                                        }
                                    t.a.addClass(l, 'menu-item-hover');
                                    var r = t.a.find(l, '.menu-submenu');
                                    r && !1 === r.hasAttribute('data-hor-direction') && (t.a.hasClass(r, 'menu-submenu-left') ? r.setAttribute('data-hor-direction', 'menu-submenu-left') : t.a.hasClass(r, 'menu-submenu-right') && r.setAttribute('data-hor-direction', 'menu-submenu-right')), r && !0 === t.a.isOffscreen(r, 'left', 15) ? (t.a.removeClass(r, 'menu-submenu-left'), t.a.addClass(r, 'menu-submenu-right')) : r && !0 === t.a.isOffscreen(r, 'right', 15) && (t.a.removeClass(r, 'menu-submenu-right'), t.a.addClass(r, 'menu-submenu-left')), l.getAttribute('data-menu-toggle-class') && t.a.addClass(o, l.getAttribute('data-menu-toggle-class'));
                                },
                                createSubmenuDropdownClickDropoff: function (l) {
                                    var n, e = (n = t.a.child(l, '.menu-submenu') ? t.a.css(n, 'z-index') : 0) - 1, u = document.createElement('<div class="menu-dropoff" style="background: transparent; position: fixed; top: 0; bottom: 0; left: 0; right: 0; z-index: ' + e + '"></div>');
                                    o.appendChild(u), t.a.addEvent(u, 'click', function (n) {
                                        n.stopPropagation(), n.preventDefault(), t.a.remove(this), s.hideSubmenuDropdown(l, !0);
                                    });
                                },
                                pauseDropdownHover: function (l) {
                                    var n = new Date();
                                    e.pauseDropdownHoverTime = n.getTime() + l;
                                },
                                resumeDropdownHover: function () {
                                    return new Date().getTime() > e.pauseDropdownHoverTime;
                                },
                                resetActiveItem: function (l) {
                                    for (var n, u, o = 0, a = (n = i.querySelectorAll('.menu-item-active')).length; o < a; o++) {
                                        var s = n[0];
                                        t.a.removeClass(s, 'menu-item-active'), t.a.hide(t.a.child(s, '.menu-submenu'));
                                        for (var r = 0, d = (u = t.a.parents(s, '.menu-item-submenu') || []).length; r < d; r++) {
                                            var c = u[o];
                                            t.a.removeClass(c, 'menu-item-open'), t.a.hide(t.a.child(c, '.menu-submenu'));
                                        }
                                    }
                                    if (!1 === e.options.accordion.expandAll && (n = i.querySelectorAll('.menu-item-open')))
                                        for (o = 0, a = n.length; o < a; o++)
                                            t.a.removeClass(u[0], 'menu-item-open');
                                },
                                setActiveItem: function (l) {
                                    s.resetActiveItem();
                                    for (var n = t.a.parents(l, '.menu-item-submenu') || [], e = 0, u = n.length; e < u; e++)
                                        t.a.addClass(n[e], 'menu-item-open');
                                    t.a.addClass(l, 'menu-item-active');
                                },
                                getBreadcrumbs: function (l) {
                                    var n, e = [], u = t.a.child(l, '.menu-link');
                                    e.push({
                                        text: n = t.a.child(u, '.menu-text') ? n.innerHTML : '',
                                        title: u.getAttribute('title'),
                                        href: u.getAttribute('href')
                                    });
                                    for (var i = t.a.parents(l, '.menu-item-submenu'), o = 0, a = i.length; o < a; o++) {
                                        var s = t.a.child(i[o], '.menu-link');
                                        e.push({
                                            text: n = t.a.child(s, '.menu-text') ? n.innerHTML : '',
                                            title: s.getAttribute('title'),
                                            href: s.getAttribute('href')
                                        });
                                    }
                                    return e.reverse();
                                },
                                getPageTitle: function (l) {
                                    return t.a.child(l, '.menu-text') ? (void 0).innerHTML : '';
                                },
                                eventTrigger: function (l, n, t) {
                                    for (var u = 0; u < e.events.length; u++) {
                                        var i = e.events[u];
                                        if (i.name == l) {
                                            if (1 != i.one)
                                                return i.handler.call(this, n, t);
                                            if (0 == i.fired)
                                                return e.events[u].fired = !0, i.handler.call(this, n, t);
                                        }
                                    }
                                },
                                addEvent: function (l, n, t) {
                                    e.events.push({
                                        name: l,
                                        handler: n,
                                        one: t,
                                        fired: !1
                                    });
                                },
                                removeEvent: function (l) {
                                    e.events[l] && delete e.events[l];
                                }
                            };
                        return e.setDefaults = function (l) {
                            a = l;
                        }, e.scrollUpdate = function () {
                            return s.scrollUpdate();
                        }, e.scrollReInit = function () {
                            return s.scrollInit();
                        }, e.scrollTop = function () {
                            return s.scrollTop();
                        }, e.setActiveItem = function (l) {
                            return s.setActiveItem(l);
                        }, e.reload = function () {
                            return s.reload();
                        }, e.update = function (l) {
                            return s.update(l);
                        }, e.getBreadcrumbs = function (l) {
                            return s.getBreadcrumbs(l);
                        }, e.getPageTitle = function (l) {
                            return s.getPageTitle(l);
                        }, e.getSubmenuMode = function (l) {
                            return s.getSubmenuMode(l);
                        }, e.hideDropdown = function (l) {
                            s.hideSubmenuDropdown(l, !0);
                        }, e.hideDropdowns = function () {
                            s.hideSubmenuDropdowns();
                        }, e.pauseDropdownHover = function (l) {
                            s.pauseDropdownHover(l);
                        }, e.resumeDropdownHover = function () {
                            return s.resumeDropdownHover();
                        }, e.on = function (l, n) {
                            return s.addEvent(l, n);
                        }, e.off = function (l) {
                            return s.removeEvent(l);
                        }, e.one = function (l, n) {
                            return s.addEvent(l, n, !0);
                        }, s.construct.apply(e, [n]), t.a.addResizeHandler(function () {
                            u && e.reload();
                        }), u = !0, e;
                    }
                };
            }.call(this, e('3UD+')(l)));
        },
        cxbk: function (l, n, e) {
            'use strict';
            e.d(n, 'a', function () {
                return t;
            });
            const t = {
                production: !0,
                appVersion: 'v2.2.0Centinela',
                USERDATA_KEY: 'authf649fc9a5f55',
                isMockEnabled: !0,
                apiUrl: 'api',
                urlBase: 'https://api.clegal.com.mx/api/',
                stripe_key: 'pk_live_51JRdQnDOJMlzsFFEfhXgOG5Tr1Hrbv1T717wOnXIQjpRHUsxy5lqE660N0WBChqUCW2XXgmq3I1fANL9S9dYTuTq00oX0MQB5N',
                timeSessionActive: 900000,
                timeMessageAwait: 60,
                default_page_size: 10,
                timeResendConfirmationEmail: 60000,
                timeVerifyDigitalAsignature: 60000,
                timeVerifyDownloadApp: 60000
            };
        },
        l0JT: function (l, n, e) {
            'use strict';
            e.d(n, 'a', function () {
                return a;
            });
            var t = e('2Vo4');
            const u = {
                demo: 'demo1',
                js: {
                    breakpoints: {
                        sm: 576,
                        md: 768,
                        lg: 992,
                        xl: 1200,
                        xxl: 1400
                    },
                    colors: {
                        theme: {
                            base: {
                                white: '#ffffff',
                                primary: '#3699FF',
                                secondary: '#E5EAEE',
                                success: '#1BC5BD',
                                info: '#8950FC',
                                warning: '#FFA800',
                                danger: '#F64E60',
                                light: '#E4E6EF',
                                dark: '#181C32'
                            },
                            light: {
                                white: '#ffffff',
                                primary: '#E1F0FF',
                                secondary: '#EBEDF3',
                                success: '#C9F7F5',
                                info: '#EEE5FF',
                                warning: '#FFF4DE',
                                danger: '#FFE2E5',
                                light: '#F3F6F9',
                                dark: '#D6D6E0'
                            },
                            inverse: {
                                white: '#ffffff',
                                primary: '#ffffff',
                                secondary: '#3F4254',
                                success: '#ffffff',
                                info: '#ffffff',
                                warning: '#ffffff',
                                danger: '#ffffff',
                                light: '#464E5F',
                                dark: '#ffffff'
                            }
                        },
                        gray: {
                            'gray-100': '#F3F6F9',
                            'gray-200': '#EBEDF3',
                            'gray-300': '#E4E6EF',
                            'gray-400': '#D1D3E0',
                            'gray-500': '#B5B5C3',
                            'gray-600': '#7E8299',
                            'gray-700': '#5E6278',
                            'gray-800': '#3F4254',
                            'gray-900': '#181C32'
                        }
                    },
                    fontFamily: 'Poppins'
                },
                self: { layout: 'default' },
                pageLoader: { type: '' },
                header: {
                    self: {
                        display: !0,
                        width: 'fluid',
                        theme: 'light',
                        fixed: {
                            desktop: !0,
                            mobile: !0
                        }
                    },
                    menu: {
                        self: {
                            display: !0,
                            layout: 'default',
                            rootArrow: !1,
                            iconStyle: 'duotone'
                        },
                        desktop: {
                            arrow: !0,
                            toggle: 'click',
                            submenu: {
                                theme: 'light',
                                arrow: !0
                            }
                        },
                        mobile: {
                            submenu: {
                                theme: 'dark',
                                accordion: !0
                            }
                        }
                    }
                },
                subheader: {
                    display: !0,
                    displayDesc: !0,
                    displayDaterangepicker: !0,
                    layoutVersion: 'v1',
                    fixed: !0,
                    width: 'fluid',
                    clear: !1,
                    style: 'solid'
                },
                content: { width: 'fixed' },
                brand: { self: { theme: 'dark' } },
                aside: {
                    self: {
                        theme: 'dark',
                        display: !0,
                        fixed: !0,
                        minimize: {
                            toggle: !0,
                            default: !1,
                            hoverable: !0
                        }
                    },
                    footer: { self: { display: !1 } },
                    menu: {
                        dropdown: !1,
                        scroll: !0,
                        iconStyle: 'duotone',
                        submenu: {
                            accordion: !0,
                            dropdown: {
                                arrow: !0,
                                hoverTimeout: 500
                            }
                        }
                    }
                },
                footer: {
                    display: !0,
                    width: 'fluid',
                    fixed: !0
                },
                extras: {
                    search: {
                        display: !0,
                        layout: 'dropdown',
                        offcanvas: { direction: 'right' }
                    },
                    notifications: {
                        display: !0,
                        layout: 'dropdown',
                        dropdown: { style: 'dark' },
                        offcanvas: { direction: 'right' }
                    },
                    quickActions: {
                        display: !0,
                        layout: 'dropdown',
                        dropdown: { style: 'dark' },
                        offcanvas: { direction: 'right' }
                    },
                    user: {
                        display: !0,
                        layout: 'offcanvas',
                        dropdown: { style: 'dark' },
                        offcanvas: { direction: 'right' }
                    },
                    languages: { display: !0 },
                    cart: {
                        display: !0,
                        layout: 'dropdown',
                        offcanvas: { direction: 'right' },
                        dropdown: { style: 'dark' }
                    },
                    chat: { display: !0 },
                    quickPanel: {
                        display: !0,
                        offcanvas: { direction: 'right' }
                    },
                    toolbar: { display: !0 },
                    scrolltop: { display: !0 }
                }
            };
            var i = e('boci'), o = e('8Y7J');
            let a = (() => {
                class l {
                    constructor() {
                        this.layoutConfigSubject = new t.a(void 0), this.classes = {
                            header: [],
                            header_container: [],
                            header_mobile: [],
                            header_menu: [],
                            aside_menu: [],
                            subheader: [],
                            subheader_container: [],
                            content: [],
                            content_container: [],
                            footer_container: []
                        }, this.attrs = { aside_menu: {} };
                    }
                    initConfig() {
                        const l = localStorage.getItem('1-layoutConfig');
                        if (l)
                            try {
                                return void this.layoutConfigSubject.next(JSON.parse(l));
                            } catch (n) {
                                this.removeConfig(), console.error('config parse from local storage', n);
                            }
                        this.layoutConfigSubject.next(u);
                    }
                    removeConfig() {
                        localStorage.removeItem('1-layoutConfig');
                    }
                    refreshConfigToDefault() {
                        this.setConfigWithPageRefresh(void 0);
                    }
                    getConfig() {
                        return this.layoutConfigSubject.value || u;
                    }
                    setConfig(l) {
                        l ? localStorage.setItem('1-layoutConfig', JSON.stringify(l)) : this.removeConfig(), this.layoutConfigSubject.next(l);
                    }
                    setConfigWithoutLocalStorageChanges(l) {
                        this.layoutConfigSubject.next(l);
                    }
                    setConfigWithPageRefresh(l) {
                        this.setConfig(l), document.location.reload();
                    }
                    getProp(l) {
                        return i.get(this.layoutConfigSubject.value, l);
                    }
                    setCSSClass(l, n) {
                        this.classes[l] || (this.classes[l] = []), n.split(' ').forEach(n => this.classes[l].push(n));
                    }
                    getCSSClasses(l) {
                        return this.classes[l] || [];
                    }
                    getStringCSSClasses(l) {
                        return this.getCSSClasses(l).join(' ');
                    }
                    getHTMLAttributes(l) {
                        return this.attrs[l] || {};
                    }
                    setHTMLAttribute(l, n, e) {
                        this.attrs[l] || (this.attrs[l] = {}), this.attrs[l][n] = e;
                    }
                }
                return l.ɵprov = o['ɵɵdefineInjectable']({
                    factory: function () {
                        return new l();
                    },
                    token: l,
                    providedIn: 'root'
                }), l;
            })();
        },
        lMep: function (l, n, e) {
            'use strict';
            e.d(n, 'a', function () {
                return t;
            });
            var t = function (l) {
                return l.SET_USER_CHART_DATA = '[Chart Dashboard] Set data user chart', l.SET_SALES_CHART_DATA = '[Chart Dashboard] Set data sales chart', l.SET_DOCUMENTS_CHART_DATA = '[Chart Dashboard] Set data document chart', l.SEARCH_DATA_CHARTS = '[Chart Dashboard] Search data charts', l;
            }({});
        },
        svdS: function (l, n, e) {
            'use strict';
            (function (l) {
                var t = e('rh/z');
                n.a = function (l, n) {
                    var e = this, u = t.a.getById(l), i = t.a.getBody();
                    if (u) {
                        var o = { attrCustom: '' }, a = {
                                construct: function (l) {
                                    return t.a.data(u).has('offcanvas') ? e = t.a.data(u).get('offcanvas') : (a.init(l), a.build(), t.a.data(u).set('offcanvas', e)), e;
                                },
                                init: function (l) {
                                    e.events = [], e.options = t.a.deepExtend({}, o, l), e.classBase = e.options.baseClass, e.attrCustom = e.options.attrCustom, e.classShown = e.classBase + '-on', e.classOverlay = e.classBase + '-overlay', e.state = t.a.hasClass(u, e.classShown) ? 'shown' : 'hidden';
                                },
                                build: function () {
                                    if (e.options.toggleBy)
                                        if ('string' == typeof e.options.toggleBy)
                                            t.a.addEvent(t.a.getById(e.options.toggleBy), 'click', function (l) {
                                                l.preventDefault(), e.target = this, a.toggle();
                                            });
                                        else if (e.options.toggleBy && e.options.toggleBy[0])
                                            if (e.options.toggleBy[0].target)
                                                for (var l in e.options.toggleBy)
                                                    t.a.addEvent(t.a.getById(e.options.toggleBy[l].target), 'click', function (l) {
                                                        l.preventDefault(), e.target = this, a.toggle();
                                                    });
                                            else
                                                for (var l in e.options.toggleBy)
                                                    t.a.addEvent(t.a.getById(e.options.toggleBy[l]), 'click', function (l) {
                                                        l.preventDefault(), e.target = this, a.toggle();
                                                    });
                                        else
                                            e.options.toggleBy && e.options.toggleBy.target && t.a.addEvent(t.a.getById(e.options.toggleBy.target), 'click', function (l) {
                                                l.preventDefault(), e.target = this, a.toggle();
                                            });
                                    var n = t.a.getById(e.options.closeBy);
                                    n && t.a.addEvent(n, 'click', function (l) {
                                        l.preventDefault(), e.target = this, a.hide();
                                    });
                                },
                                isShown: function () {
                                    return 'shown' == e.state;
                                },
                                toggle: function () {
                                    a.eventTrigger('toggle'), 'shown' == e.state ? a.hide() : a.show();
                                },
                                show: function () {
                                    'shown' != e.state && (a.eventTrigger('beforeShow'), a.toggleClass('show'), t.a.attr(i, 'data-offcanvas-' + e.classBase, 'on'), t.a.addClass(u, e.classShown), e.attrCustom.length > 0 && t.a.attr(i, 'data-offcanvas-' + e.classCustom, 'on'), e.state = 'shown', e.options.overlay && (e.overlay = t.a.insertAfter(document.createElement('DIV'), u), t.a.addClass(e.overlay, e.classOverlay), t.a.addEvent(e.overlay, 'click', function (l) {
                                        l.preventDefault(), a.hide(e.target);
                                    })), a.eventTrigger('afterShow'));
                                },
                                hide: function () {
                                    'hidden' != e.state && (a.eventTrigger('beforeHide'), a.toggleClass('hide'), t.a.removeAttr(i, 'data-offcanvas-' + e.classBase), t.a.removeClass(u, e.classShown), e.attrCustom.length > 0 && t.a.removeAttr(i, 'data-offcanvas-' + e.attrCustom), e.state = 'hidden', e.options.overlay && e.overlay && t.a.remove(e.overlay), a.eventTrigger('afterHide'));
                                },
                                toggleClass: function (l) {
                                    var n, u = t.a.attr(e.target, 'id');
                                    if (e.options.toggleBy && e.options.toggleBy[0] && e.options.toggleBy[0].target)
                                        for (var i in e.options.toggleBy)
                                            e.options.toggleBy[i].target === u && (n = e.options.toggleBy[i]);
                                    else
                                        e.options.toggleBy && e.options.toggleBy.target && (n = e.options.toggleBy);
                                    if (n) {
                                        var o = t.a.getById(n.target);
                                        'show' === l && t.a.addClass(o, n.state), 'hide' === l && t.a.removeClass(o, n.state);
                                    }
                                },
                                eventTrigger: function (l, n) {
                                    for (var t = 0; t < e.events.length; t++) {
                                        var u = e.events[t];
                                        if (u.name == l) {
                                            if (1 != u.one)
                                                return u.handler.call(this, e, n);
                                            if (0 == u.fired)
                                                return e.events[t].fired = !0, u.handler.call(this, e, n);
                                        }
                                    }
                                },
                                addEvent: function (l, n, t) {
                                    e.events.push({
                                        name: l,
                                        handler: n,
                                        one: t,
                                        fired: !1
                                    });
                                }
                            };
                        return e.setDefaults = function (l) {
                            o = l;
                        }, e.isShown = function () {
                            return a.isShown();
                        }, e.hide = function () {
                            return a.hide();
                        }, e.show = function () {
                            return a.show();
                        }, e.on = function (l, n) {
                            return a.addEvent(l, n);
                        }, e.one = function (l, n) {
                            return a.addEvent(l, n, !0);
                        }, a.construct.apply(e, [n]), e;
                    }
                };
            }.call(this, e('3UD+')(l)));
        },
        vMR4: function (l, n, e) {
            'use strict';
            (function (l) {
                var t = e('rh/z');
                n.a = function (l, n) {
                    var e = this, u = t.a.getById(l), i = t.a.getBody();
                    if (u) {
                        var o = {
                                offset: 300,
                                speed: 6000
                            }, a = {
                                construct: function (l) {
                                    return t.a.data(u).has('scrolltop') ? e = t.a.data(u).get('scrolltop') : (a.init(l), a.build(), t.a.data(u).set('scrolltop', e)), e;
                                },
                                init: function (l) {
                                    e.events = [], e.options = t.a.deepExtend({}, o, l);
                                },
                                build: function () {
                                    window.addEventListener('scroll', function () {
                                        t.a.throttle(void 0, function () {
                                            a.handle();
                                        }, 200);
                                    }), t.a.addEvent(u, 'click', a.scroll);
                                },
                                handle: function () {
                                    t.a.getScrollTop() > e.options.offset ? !1 === i.hasAttribute('data-scrolltop') && i.setAttribute('data-scrolltop', 'on') : !0 === i.hasAttribute('data-scrolltop') && i.removeAttribute('data-scrolltop');
                                },
                                scroll: function (l) {
                                    l.preventDefault(), t.a.scrollTop(0, e.options.speed);
                                },
                                eventTrigger: function (l, n) {
                                    for (var t = 0; t < e.events.length; t++) {
                                        var u = e.events[t];
                                        if (u.name == l) {
                                            if (1 != u.one)
                                                return u.handler.call(this, e, n);
                                            if (0 == u.fired)
                                                return e.events[t].fired = !0, u.handler.call(this, e, n);
                                        }
                                    }
                                },
                                addEvent: function (l, n, t) {
                                    e.events.push({
                                        name: l,
                                        handler: n,
                                        one: t,
                                        fired: !1
                                    });
                                }
                            };
                        return e.setDefaults = function (l) {
                            o = l;
                        }, e.on = function (l, n) {
                            return a.addEvent(l, n);
                        }, e.one = function (l, n) {
                            return a.addEvent(l, n, !0);
                        }, a.construct.apply(e, [n]), e;
                    }
                };
            }.call(this, e('3UD+')(l)));
        },
        zZCj: function (l, n, e) {
            'use strict';
            (function (l) {
                var t = e('rh/z');
                n.a = function (l, n, e) {
                    var u = this, i = l, o = n;
                    if (i) {
                        var a = { targetToggleMode: 'class' }, s = {
                                construct: function (l) {
                                    return t.a.data(i).has('toggle') ? u = t.a.data(i).get('toggle') : (s.init(l), s.build(), t.a.data(i).set('toggle', u)), u;
                                },
                                init: function (l) {
                                    u.element = i, u.events = [], u.options = t.a.deepExtend({}, a, l), u.target = o, u.targetState = u.options.targetState, u.toggleState = u.options.toggleState, u.state = 'class' == u.options.targetToggleMode ? t.a.hasClasses(u.target, u.targetState) ? 'on' : 'off' : t.a.hasAttr(u.target, 'data-' + u.targetState) ? t.a.attr(u.target, 'data-' + u.targetState) : 'off';
                                },
                                build: function () {
                                    t.a.addEvent(i, 'mouseup', s.toggle);
                                },
                                toggle: function (l) {
                                    return s.eventTrigger('beforeToggle'), 'off' == u.state ? s.toggleOn() : s.toggleOff(), s.eventTrigger('afterToggle'), l.preventDefault(), u;
                                },
                                toggleOn: function () {
                                    return s.eventTrigger('beforeOn'), 'class' == u.options.targetToggleMode ? t.a.addClass(u.target, u.targetState) : t.a.attr(u.target, 'data-' + u.targetState, 'on'), u.toggleState && t.a.addClass(i, u.toggleState), u.state = 'on', s.eventTrigger('afterOn'), s.eventTrigger('toggle'), u;
                                },
                                toggleOff: function () {
                                    return s.eventTrigger('beforeOff'), 'class' == u.options.targetToggleMode ? t.a.removeClass(u.target, u.targetState) : t.a.removeAttr(u.target, 'data-' + u.targetState), u.toggleState && t.a.removeClass(i, u.toggleState), u.state = 'off', s.eventTrigger('afterOff'), s.eventTrigger('toggle'), u;
                                },
                                eventTrigger: function (l) {
                                    for (var n = 0; n < u.events.length; n++) {
                                        var e = u.events[n];
                                        if (e.name == l) {
                                            if (1 != e.one)
                                                return e.handler.call(this, u);
                                            if (0 == e.fired)
                                                return u.events[n].fired = !0, e.handler.call(this, u);
                                        }
                                    }
                                },
                                addEvent: function (l, n, e) {
                                    return u.events.push({
                                        name: l,
                                        handler: n,
                                        one: e,
                                        fired: !1
                                    }), u;
                                }
                            };
                        return u.setDefaults = function (l) {
                            a = l;
                        }, u.getState = function () {
                            return u.state;
                        }, u.toggle = function () {
                            return s.toggle();
                        }, u.toggleOn = function () {
                            return s.toggleOn();
                        }, u.toggleOff = function () {
                            return s.toggleOff();
                        }, u.on = function (l, n) {
                            return s.addEvent(l, n);
                        }, u.one = function (l, n) {
                            return s.addEvent(l, n, !0);
                        }, s.construct.apply(u, [e]), u;
                    }
                };
            }.call(this, e('3UD+')(l)));
        }
    }
]);