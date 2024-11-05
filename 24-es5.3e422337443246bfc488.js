!function () {
    function l(l, n) {
        return function (l) {
            if (Array.isArray(l))
                return l;
        }(l) || function (l, n) {
            var e = null == l ? null : 'undefined' != typeof Symbol && l[Symbol.iterator] || l['@@iterator'];
            if (null == e)
                return;
            var t, u, i = [], o = !0, a = !1;
            try {
                for (e = e.call(l); !(o = (t = e.next()).done) && (i.push(t.value), !n || i.length !== n); o = !0);
            } catch (r) {
                a = !0, u = r;
            } finally {
                try {
                    o || null == e.return || e.return();
                } finally {
                    if (a)
                        throw u;
                }
            }
            return i;
        }(l, n) || t(l, n) || function () {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }
    function n(l, n, e) {
        return n in l ? Object.defineProperty(l, n, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : l[n] = e, l;
    }
    function e(l) {
        return function (l) {
            if (Array.isArray(l))
                return u(l);
        }(l) || function (l) {
            if ('undefined' != typeof Symbol && null != l[Symbol.iterator] || null != l['@@iterator'])
                return Array.from(l);
        }(l) || t(l) || function () {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        }();
    }
    function t(l, n) {
        if (l) {
            if ('string' == typeof l)
                return u(l, n);
            var e = Object.prototype.toString.call(l).slice(8, -1);
            return 'Object' === e && l.constructor && (e = l.constructor.name), 'Map' === e || 'Set' === e ? Array.from(l) : 'Arguments' === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? u(l, n) : void 0;
        }
    }
    function u(l, n) {
        (null == n || n > l.length) && (n = l.length);
        for (var e = 0, t = new Array(n); e < n; e++)
            t[e] = l[e];
        return t;
    }
    function i(l, n) {
        if ('function' != typeof n && null !== n)
            throw new TypeError('Super expression must either be null or a function');
        l.prototype = Object.create(n && n.prototype, {
            constructor: {
                value: l,
                writable: !0,
                configurable: !0
            }
        }), n && o(l, n);
    }
    function o(l, n) {
        return (o = Object.setPrototypeOf || function (l, n) {
            return l.__proto__ = n, l;
        })(l, n);
    }
    function a(l) {
        var n = function () {
            if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
                })), !0;
            } catch (l) {
                return !1;
            }
        }();
        return function () {
            var e, t = s(l);
            if (n) {
                var u = s(this).constructor;
                e = Reflect.construct(t, arguments, u);
            } else
                e = t.apply(this, arguments);
            return r(this, e);
        };
    }
    function r(l, n) {
        return !n || 'object' != typeof n && 'function' != typeof n ? function (l) {
            if (void 0 === l)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return l;
        }(l) : n;
    }
    function s(l) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function (l) {
            return l.__proto__ || Object.getPrototypeOf(l);
        })(l);
    }
    function d(l, n) {
        if (!(l instanceof n))
            throw new TypeError('Cannot call a class as a function');
    }
    function c(l, n) {
        for (var e = 0; e < n.length; e++) {
            var t = n[e];
            t.enumerable = t.enumerable || !1, t.configurable = !0, 'value' in t && (t.writable = !0), Object.defineProperty(l, t.key, t);
        }
    }
    function f(l, n, e) {
        return n && c(l.prototype, n), e && c(l, e), l;
    }
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
                var t = e('XNiG'), u = function () {
                    function l() {
                        d(this, l), this._ngUnsubscribe = new t.a();
                    }
                    return f(l, [{
                        key: 'ngOnDestroy',
                        value: function () {
                            this._ngUnsubscribe.next(), this._ngUnsubscribe.complete();
                        }
                    }]), l;
                }();
            },
            Gdcl: function (t, u, o) {
                'use strict';
                o.r(u), o.d(u, 'LayoutModuleNgFactory', function () {
                    return aa;
                });
                var r = o('8Y7J'), s = function l() {
                    d(this, l);
                }, c = o('pMnS'), p = o('jyex'), h = o('SVse'), g = o('W2UE'), m = o('IheW'), v = o('I2up'), b = o('aIpl'), y = o('iInd'), w = o('TSSN'), k = o('07VJ'), S = function () {
                    function l(n, e, t) {
                        d(this, l), this.layout = n, this.loc = e, this.store = t, this.asideMenuHTMLAttributes = {}, this.asideMenuScroll = 1, this.asideSelfMinimizeToggle = !1;
                    }
                    return f(l, [
                        {
                            key: 'ngOnInit',
                            value: function () {
                                this.disableAsideSelfDisplay = !1 === this.layout.getProp('aside.self.display'), this.brandSkin = this.layout.getProp('brand.self.theme'), this.headerLogo = this.getLogo(), this.ulCSSClasses = this.layout.getProp('aside_menu_nav'), this.asideMenuCSSClasses = this.layout.getStringCSSClasses('aside_menu'), this.asideMenuHTMLAttributes = this.layout.getHTMLAttributes('aside_menu'), this.asideMenuDropdown = this.layout.getProp('aside.menu.dropdown') ? '1' : '0', this.brandClasses = this.layout.getProp('brand'), this.asideSelfMinimizeToggle = this.layout.getProp('aside.self.minimize.toggle'), this.asideMenuScroll = this.layout.getProp('aside.menu.scroll') ? 1 : 0, this.asideMenuCSSClasses = ''.concat(this.asideMenuCSSClasses, ' ').concat(1 === this.asideMenuScroll ? 'scroll my-4 ps ps--active-y' : ''), this.location = this.loc, this.seeDashChart$ = this.store.select(k.e), this.seeSeeller$ = this.store.select(k.g), this.seeDistribui$ = this.store.select(k.f);
                            }
                        },
                        {
                            key: 'getLogo',
                            value: function () {
                                return './assets/media/logos/logo_h.png';
                            }
                        }
                    ]), l;
                }(), C = o('l0JT'), R = o('tqRt'), D = r['ɵcrt']({
                    encapsulation: 0,
                    styles: [['[_nghost-%COMP%]   .aside[_ngcontent-%COMP%]{height:100%}[_nghost-%COMP%]   .aside[_ngcontent-%COMP%]   .aside-menu[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .menu-text[_ngcontent-%COMP%]{white-space:nowrap}']],
                    data: {}
                });
                function I(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 4, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 3, 'button', [
                            [
                                'class',
                                'brand-toggle btn btn-sm px-0'
                            ],
                            [
                                'id',
                                'kt_aside_toggle'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵeld'](2, 16777216, null, null, 2, 'span', [
                            [
                                'cacheSVG',
                                'true'
                            ],
                            [
                                'class',
                                'svg-icon svg-icon-xl'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵprd'](512, null, p.SVGCacheService, p.SVGCacheService, [
                            [
                                2,
                                h.APP_BASE_HREF
                            ],
                            [
                                2,
                                h.PlatformLocation
                            ],
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            m.HttpClient,
                            m.HttpBackend,
                            r.RendererFactory2
                        ]),
                        r['ɵdid'](4, 737280, null, 0, v.InlineSVGDirective, [
                            r.ElementRef,
                            r.ViewContainerRef,
                            r.ComponentFactoryResolver,
                            p.SVGCacheService,
                            r.Renderer2,
                            b.InlineSVGService,
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            r.PLATFORM_ID
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
                function x(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 3, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 2, 'a', [[
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
                            var t = !0;
                            return 'click' === n && (t = !1 !== r['ɵnov'](l, 2).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && t), t;
                        }, null, null)),
                        r['ɵdid'](2, 671744, null, 0, y.u, [
                            y.r,
                            y.a,
                            h.LocationStrategy
                        ], {
                            routerLink: [
                                0,
                                'routerLink'
                            ]
                        }, null),
                        (l()(), r['ɵeld'](3, 0, null, null, 0, 'img', [[
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
                        l(n, 1, 0, r['ɵnov'](n, 2).target, r['ɵnov'](n, 2).href), l(n, 3, 0, e.headerLogo);
                    });
                }
                function E(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 30, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 14, 'li', [
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
                        r['ɵdid'](2, 1720320, null, 2, y.t, [
                            y.r,
                            r.ElementRef,
                            r.Renderer2,
                            r.ChangeDetectorRef,
                            [
                                2,
                                y.s
                            ],
                            [
                                2,
                                y.u
                            ]
                        ], {
                            routerLinkActive: [
                                0,
                                'routerLinkActive'
                            ]
                        }, null),
                        r['ɵqud'](603979776, 5, { links: 1 }),
                        r['ɵqud'](603979776, 6, { linksWithHrefs: 1 }),
                        (l()(), r['ɵeld'](5, 0, null, null, 10, 'a', [
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
                            var t = !0;
                            return 'click' === n && (t = !1 !== r['ɵnov'](l, 6).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && t), t;
                        }, null, null)),
                        r['ɵdid'](6, 671744, [
                            [
                                8,
                                4
                            ],
                            [
                                6,
                                4
                            ]
                        ], 0, y.u, [
                            y.r,
                            y.a,
                            h.LocationStrategy
                        ], {
                            routerLink: [
                                0,
                                'routerLink'
                            ]
                        }, null),
                        r['ɵdid'](7, 1720320, null, 2, y.t, [
                            y.r,
                            r.ElementRef,
                            r.Renderer2,
                            r.ChangeDetectorRef,
                            [
                                2,
                                y.s
                            ],
                            [
                                2,
                                y.u
                            ]
                        ], {
                            routerLinkActive: [
                                0,
                                'routerLinkActive'
                            ]
                        }, null),
                        r['ɵqud'](603979776, 7, { links: 1 }),
                        r['ɵqud'](603979776, 8, { linksWithHrefs: 1 }),
                        (l()(), r['ɵeld'](10, 16777216, null, null, 2, 'span', [
                            [
                                'cacheSVG',
                                'true'
                            ],
                            [
                                'class',
                                'svg-icon menu-icon'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵprd'](512, null, p.SVGCacheService, p.SVGCacheService, [
                            [
                                2,
                                h.APP_BASE_HREF
                            ],
                            [
                                2,
                                h.PlatformLocation
                            ],
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            m.HttpClient,
                            m.HttpBackend,
                            r.RendererFactory2
                        ]),
                        r['ɵdid'](12, 737280, null, 0, v.InlineSVGDirective, [
                            r.ElementRef,
                            r.ViewContainerRef,
                            r.ComponentFactoryResolver,
                            p.SVGCacheService,
                            r.Renderer2,
                            b.InlineSVGService,
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            r.PLATFORM_ID
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
                        (l()(), r['ɵeld'](13, 0, null, null, 2, 'span', [
                            [
                                'class',
                                'menu-text'
                            ],
                            [
                                'subheader',
                                'Ventas'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵted'](14, null, [
                            '',
                            ''
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ]),
                        (l()(), r['ɵeld'](16, 0, null, null, 14, 'li', [
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
                        r['ɵdid'](17, 1720320, null, 2, y.t, [
                            y.r,
                            r.ElementRef,
                            r.Renderer2,
                            r.ChangeDetectorRef,
                            [
                                2,
                                y.s
                            ],
                            [
                                2,
                                y.u
                            ]
                        ], {
                            routerLinkActive: [
                                0,
                                'routerLinkActive'
                            ]
                        }, null),
                        r['ɵqud'](603979776, 9, { links: 1 }),
                        r['ɵqud'](603979776, 10, { linksWithHrefs: 1 }),
                        (l()(), r['ɵeld'](20, 0, null, null, 10, 'a', [
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
                            var t = !0;
                            return 'click' === n && (t = !1 !== r['ɵnov'](l, 21).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && t), t;
                        }, null, null)),
                        r['ɵdid'](21, 671744, [
                            [
                                12,
                                4
                            ],
                            [
                                10,
                                4
                            ]
                        ], 0, y.u, [
                            y.r,
                            y.a,
                            h.LocationStrategy
                        ], {
                            routerLink: [
                                0,
                                'routerLink'
                            ]
                        }, null),
                        r['ɵdid'](22, 1720320, null, 2, y.t, [
                            y.r,
                            r.ElementRef,
                            r.Renderer2,
                            r.ChangeDetectorRef,
                            [
                                2,
                                y.s
                            ],
                            [
                                2,
                                y.u
                            ]
                        ], {
                            routerLinkActive: [
                                0,
                                'routerLinkActive'
                            ]
                        }, null),
                        r['ɵqud'](603979776, 11, { links: 1 }),
                        r['ɵqud'](603979776, 12, { linksWithHrefs: 1 }),
                        (l()(), r['ɵeld'](25, 16777216, null, null, 2, 'span', [
                            [
                                'cacheSVG',
                                'true'
                            ],
                            [
                                'class',
                                'svg-icon menu-icon'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵprd'](512, null, p.SVGCacheService, p.SVGCacheService, [
                            [
                                2,
                                h.APP_BASE_HREF
                            ],
                            [
                                2,
                                h.PlatformLocation
                            ],
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            m.HttpClient,
                            m.HttpBackend,
                            r.RendererFactory2
                        ]),
                        r['ɵdid'](27, 737280, null, 0, v.InlineSVGDirective, [
                            r.ElementRef,
                            r.ViewContainerRef,
                            r.ComponentFactoryResolver,
                            p.SVGCacheService,
                            r.Renderer2,
                            b.InlineSVGService,
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            r.PLATFORM_ID
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
                        (l()(), r['ɵeld'](28, 0, null, null, 2, 'span', [
                            [
                                'class',
                                'menu-text'
                            ],
                            [
                                'subheader',
                                'Clientes'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵted'](29, null, [
                            '',
                            ''
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ])
                    ], function (l, n) {
                        l(n, 2, 0, 'menu-item-active'), l(n, 6, 0, '/sales'), l(n, 7, 0, 'active'), l(n, 12, 0, './assets/media/svg/icons/Shopping/Sale2.svg', 'true'), l(n, 17, 0, 'menu-item-active'), l(n, 21, 0, '/customers'), l(n, 22, 0, 'active'), l(n, 27, 0, './assets/media/svg/icons/Communication/Shield-user.svg', 'true');
                    }, function (l, n) {
                        l(n, 5, 0, r['ɵnov'](n, 6).target, r['ɵnov'](n, 6).href), l(n, 14, 0, r['ɵunv'](n, 14, 0, r['ɵnov'](n, 15).transform('GENERAL.SALES'))), l(n, 20, 0, r['ɵnov'](n, 21).target, r['ɵnov'](n, 21).href), l(n, 29, 0, r['ɵunv'](n, 29, 0, r['ɵnov'](n, 30).transform('GENERAL.COSTUMER')));
                    });
                }
                function A(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 15, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 14, 'li', [
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
                        r['ɵdid'](2, 1720320, null, 2, y.t, [
                            y.r,
                            r.ElementRef,
                            r.Renderer2,
                            r.ChangeDetectorRef,
                            [
                                2,
                                y.s
                            ],
                            [
                                2,
                                y.u
                            ]
                        ], {
                            routerLinkActive: [
                                0,
                                'routerLinkActive'
                            ]
                        }, null),
                        r['ɵqud'](603979776, 13, { links: 1 }),
                        r['ɵqud'](603979776, 14, { linksWithHrefs: 1 }),
                        (l()(), r['ɵeld'](5, 0, null, null, 10, 'a', [
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
                            var t = !0;
                            return 'click' === n && (t = !1 !== r['ɵnov'](l, 6).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && t), t;
                        }, null, null)),
                        r['ɵdid'](6, 671744, [
                            [
                                16,
                                4
                            ],
                            [
                                14,
                                4
                            ]
                        ], 0, y.u, [
                            y.r,
                            y.a,
                            h.LocationStrategy
                        ], {
                            routerLink: [
                                0,
                                'routerLink'
                            ]
                        }, null),
                        r['ɵdid'](7, 1720320, null, 2, y.t, [
                            y.r,
                            r.ElementRef,
                            r.Renderer2,
                            r.ChangeDetectorRef,
                            [
                                2,
                                y.s
                            ],
                            [
                                2,
                                y.u
                            ]
                        ], {
                            routerLinkActive: [
                                0,
                                'routerLinkActive'
                            ]
                        }, null),
                        r['ɵqud'](603979776, 15, { links: 1 }),
                        r['ɵqud'](603979776, 16, { linksWithHrefs: 1 }),
                        (l()(), r['ɵeld'](10, 16777216, null, null, 2, 'span', [
                            [
                                'cacheSVG',
                                'true'
                            ],
                            [
                                'class',
                                'svg-icon menu-icon'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵprd'](512, null, p.SVGCacheService, p.SVGCacheService, [
                            [
                                2,
                                h.APP_BASE_HREF
                            ],
                            [
                                2,
                                h.PlatformLocation
                            ],
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            m.HttpClient,
                            m.HttpBackend,
                            r.RendererFactory2
                        ]),
                        r['ɵdid'](12, 737280, null, 0, v.InlineSVGDirective, [
                            r.ElementRef,
                            r.ViewContainerRef,
                            r.ComponentFactoryResolver,
                            p.SVGCacheService,
                            r.Renderer2,
                            b.InlineSVGService,
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            r.PLATFORM_ID
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
                        (l()(), r['ɵeld'](13, 0, null, null, 2, 'span', [
                            [
                                'class',
                                'menu-text'
                            ],
                            [
                                'subheader',
                                'Vendedores'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵted'](14, null, [
                            '',
                            ''
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ])
                    ], function (l, n) {
                        l(n, 2, 0, 'menu-item-active'), l(n, 6, 0, '/seller'), l(n, 7, 0, 'active'), l(n, 12, 0, './assets/media/svg/icons/Communication/Shield-user.svg', 'true');
                    }, function (l, n) {
                        l(n, 5, 0, r['ɵnov'](n, 6).target, r['ɵnov'](n, 6).href), l(n, 14, 0, r['ɵunv'](n, 14, 0, r['ɵnov'](n, 15).transform('GENERAL.SELLER')));
                    });
                }
                function T(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 6, 'div', [
                            [
                                'class',
                                'brand flex-column-auto'
                            ],
                            [
                                'id',
                                'kt_brand'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵdid'](1, 278528, null, 0, h.NgClass, [
                            r.IterableDiffers,
                            r.KeyValueDiffers,
                            r.ElementRef,
                            r.Renderer2
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
                        (l()(), r['ɵeld'](2, 0, null, null, 2, 'a', [
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
                            var t = !0;
                            return 'click' === n && (t = !1 !== r['ɵnov'](l, 3).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && t), t;
                        }, null, null)),
                        r['ɵdid'](3, 671744, null, 0, y.u, [
                            y.r,
                            y.a,
                            h.LocationStrategy
                        ], {
                            routerLink: [
                                0,
                                'routerLink'
                            ]
                        }, null),
                        (l()(), r['ɵeld'](4, 0, null, null, 0, 'img', [
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
                        (l()(), r['ɵand'](16777216, null, null, 1, null, I)),
                        r['ɵdid'](6, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵeld'](7, 0, null, null, 127, 'div', [
                            [
                                'class',
                                'aside-menu-wrapper flex-column-fluid'
                            ],
                            [
                                'id',
                                'kt_aside_menu_wrapper'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, x)),
                        r['ɵdid'](9, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵeld'](10, 0, null, null, 124, 'div', [
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
                        r['ɵdid'](11, 278528, null, 0, h.NgClass, [
                            r.IterableDiffers,
                            r.KeyValueDiffers,
                            r.ElementRef,
                            r.Renderer2
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
                        (l()(), r['ɵeld'](12, 0, null, null, 122, 'ul', [[
                            'class',
                            'menu-nav'
                        ]], null, null, null, null, null)),
                        r['ɵdid'](13, 278528, null, 0, h.NgClass, [
                            r.IterableDiffers,
                            r.KeyValueDiffers,
                            r.ElementRef,
                            r.Renderer2
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
                        (l()(), r['ɵeld'](14, 0, null, null, 13, 'li', [
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
                        r['ɵdid'](15, 1720320, null, 2, y.t, [
                            y.r,
                            r.ElementRef,
                            r.Renderer2,
                            r.ChangeDetectorRef,
                            [
                                2,
                                y.s
                            ],
                            [
                                2,
                                y.u
                            ]
                        ], {
                            routerLinkActive: [
                                0,
                                'routerLinkActive'
                            ]
                        }, null),
                        r['ɵqud'](603979776, 1, { links: 1 }),
                        r['ɵqud'](603979776, 2, { linksWithHrefs: 1 }),
                        (l()(), r['ɵeld'](18, 0, null, null, 9, 'a', [
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
                            var t = !0;
                            return 'click' === n && (t = !1 !== r['ɵnov'](l, 19).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && t), t;
                        }, null, null)),
                        r['ɵdid'](19, 671744, [
                            [
                                4,
                                4
                            ],
                            [
                                2,
                                4
                            ]
                        ], 0, y.u, [
                            y.r,
                            y.a,
                            h.LocationStrategy
                        ], {
                            routerLink: [
                                0,
                                'routerLink'
                            ]
                        }, null),
                        r['ɵdid'](20, 1720320, null, 2, y.t, [
                            y.r,
                            r.ElementRef,
                            r.Renderer2,
                            r.ChangeDetectorRef,
                            [
                                2,
                                y.s
                            ],
                            [
                                2,
                                y.u
                            ]
                        ], {
                            routerLinkActive: [
                                0,
                                'routerLinkActive'
                            ]
                        }, null),
                        r['ɵqud'](603979776, 3, { links: 1 }),
                        r['ɵqud'](603979776, 4, { linksWithHrefs: 1 }),
                        (l()(), r['ɵeld'](23, 16777216, null, null, 2, 'span', [
                            [
                                'cacheSVG',
                                'true'
                            ],
                            [
                                'class',
                                'svg-icon menu-icon'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵprd'](512, null, p.SVGCacheService, p.SVGCacheService, [
                            [
                                2,
                                h.APP_BASE_HREF
                            ],
                            [
                                2,
                                h.PlatformLocation
                            ],
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            m.HttpClient,
                            m.HttpBackend,
                            r.RendererFactory2
                        ]),
                        r['ɵdid'](25, 737280, null, 0, v.InlineSVGDirective, [
                            r.ElementRef,
                            r.ViewContainerRef,
                            r.ComponentFactoryResolver,
                            p.SVGCacheService,
                            r.Renderer2,
                            b.InlineSVGService,
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            r.PLATFORM_ID
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
                        (l()(), r['ɵeld'](26, 0, null, null, 1, 'span', [
                            [
                                'class',
                                'menu-text'
                            ],
                            [
                                'subheader',
                                'Dashboard'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['Dashboard'])),
                        (l()(), r['ɵand'](16777216, null, null, 3, null, E)),
                        r['ɵdid'](29, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        (l()(), r['ɵand'](16777216, null, null, 2, null, A)),
                        r['ɵdid'](33, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        (l()(), r['ɵeld'](35, 0, null, null, 14, 'li', [
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
                        r['ɵdid'](36, 1720320, null, 2, y.t, [
                            y.r,
                            r.ElementRef,
                            r.Renderer2,
                            r.ChangeDetectorRef,
                            [
                                2,
                                y.s
                            ],
                            [
                                2,
                                y.u
                            ]
                        ], {
                            routerLinkActive: [
                                0,
                                'routerLinkActive'
                            ]
                        }, null),
                        r['ɵqud'](603979776, 17, { links: 1 }),
                        r['ɵqud'](603979776, 18, { linksWithHrefs: 1 }),
                        (l()(), r['ɵeld'](39, 0, null, null, 10, 'a', [
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
                            var t = !0;
                            return 'click' === n && (t = !1 !== r['ɵnov'](l, 40).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && t), t;
                        }, null, null)),
                        r['ɵdid'](40, 671744, [
                            [
                                20,
                                4
                            ],
                            [
                                18,
                                4
                            ]
                        ], 0, y.u, [
                            y.r,
                            y.a,
                            h.LocationStrategy
                        ], {
                            routerLink: [
                                0,
                                'routerLink'
                            ]
                        }, null),
                        r['ɵdid'](41, 1720320, null, 2, y.t, [
                            y.r,
                            r.ElementRef,
                            r.Renderer2,
                            r.ChangeDetectorRef,
                            [
                                2,
                                y.s
                            ],
                            [
                                2,
                                y.u
                            ]
                        ], {
                            routerLinkActive: [
                                0,
                                'routerLinkActive'
                            ]
                        }, null),
                        r['ɵqud'](603979776, 19, { links: 1 }),
                        r['ɵqud'](603979776, 20, { linksWithHrefs: 1 }),
                        (l()(), r['ɵeld'](44, 16777216, null, null, 2, 'span', [
                            [
                                'cacheSVG',
                                'true'
                            ],
                            [
                                'class',
                                'svg-icon menu-icon'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵprd'](512, null, p.SVGCacheService, p.SVGCacheService, [
                            [
                                2,
                                h.APP_BASE_HREF
                            ],
                            [
                                2,
                                h.PlatformLocation
                            ],
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            m.HttpClient,
                            m.HttpBackend,
                            r.RendererFactory2
                        ]),
                        r['ɵdid'](46, 737280, null, 0, v.InlineSVGDirective, [
                            r.ElementRef,
                            r.ViewContainerRef,
                            r.ComponentFactoryResolver,
                            p.SVGCacheService,
                            r.Renderer2,
                            b.InlineSVGService,
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            r.PLATFORM_ID
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
                        (l()(), r['ɵeld'](47, 0, null, null, 2, 'span', [
                            [
                                'class',
                                'menu-text'
                            ],
                            [
                                'subheader',
                                'Lista de Documentos'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵted'](48, null, [
                            '',
                            ''
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ]),
                        (l()(), r['ɵeld'](50, 0, null, null, 44, 'li', [
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
                        (l()(), r['ɵeld'](51, 0, null, null, 7, 'a', [[
                            'class',
                            'menu-link menu-toggle'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](52, 16777216, null, null, 2, 'span', [
                            [
                                'cacheSVG',
                                'true'
                            ],
                            [
                                'class',
                                'svg-icon menu-icon'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵprd'](512, null, p.SVGCacheService, p.SVGCacheService, [
                            [
                                2,
                                h.APP_BASE_HREF
                            ],
                            [
                                2,
                                h.PlatformLocation
                            ],
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            m.HttpClient,
                            m.HttpBackend,
                            r.RendererFactory2
                        ]),
                        r['ɵdid'](54, 737280, null, 0, v.InlineSVGDirective, [
                            r.ElementRef,
                            r.ViewContainerRef,
                            r.ComponentFactoryResolver,
                            p.SVGCacheService,
                            r.Renderer2,
                            b.InlineSVGService,
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            r.PLATFORM_ID
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
                        (l()(), r['ɵeld'](55, 0, null, null, 2, 'span', [[
                            'class',
                            'menu-text'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](56, null, [
                            ' ',
                            ''
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ]),
                        (l()(), r['ɵeld'](58, 0, null, null, 0, 'i', [[
                            'class',
                            'menu-arrow'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](59, 0, null, null, 35, 'div', [[
                            'class',
                            'menu-submenu'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](60, 0, null, null, 0, 'i', [[
                            'class',
                            'menu-arrow'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](61, 0, null, null, 33, 'ul', [[
                            'class',
                            'menu-subnav'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](62, 0, null, null, 4, 'li', [
                            [
                                'aria-haspopup',
                                'true'
                            ],
                            [
                                'class',
                                'menu-item menu-item-parent'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵeld'](63, 0, null, null, 3, 'span', [[
                            'class',
                            'menu-link'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](64, 0, null, null, 2, 'span', [
                            [
                                'class',
                                'menu-text'
                            ],
                            [
                                'subheader',
                                'Buzón legal'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵted'](65, null, [
                            '',
                            ''
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ]),
                        (l()(), r['ɵeld'](67, 0, null, null, 13, 'li', [
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
                        r['ɵdid'](68, 1720320, null, 2, y.t, [
                            y.r,
                            r.ElementRef,
                            r.Renderer2,
                            r.ChangeDetectorRef,
                            [
                                2,
                                y.s
                            ],
                            [
                                2,
                                y.u
                            ]
                        ], {
                            routerLinkActive: [
                                0,
                                'routerLinkActive'
                            ]
                        }, null),
                        r['ɵqud'](603979776, 21, { links: 1 }),
                        r['ɵqud'](603979776, 22, { linksWithHrefs: 1 }),
                        (l()(), r['ɵeld'](71, 0, null, null, 9, 'a', [
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
                            var t = !0;
                            return 'click' === n && (t = !1 !== r['ɵnov'](l, 72).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && t), t;
                        }, null, null)),
                        r['ɵdid'](72, 671744, [
                            [
                                24,
                                4
                            ],
                            [
                                22,
                                4
                            ]
                        ], 0, y.u, [
                            y.r,
                            y.a,
                            h.LocationStrategy
                        ], {
                            routerLink: [
                                0,
                                'routerLink'
                            ]
                        }, null),
                        r['ɵdid'](73, 1720320, null, 2, y.t, [
                            y.r,
                            r.ElementRef,
                            r.Renderer2,
                            r.ChangeDetectorRef,
                            [
                                2,
                                y.s
                            ],
                            [
                                2,
                                y.u
                            ]
                        ], {
                            routerLinkActive: [
                                0,
                                'routerLinkActive'
                            ]
                        }, null),
                        r['ɵqud'](603979776, 23, { links: 1 }),
                        r['ɵqud'](603979776, 24, { linksWithHrefs: 1 }),
                        (l()(), r['ɵeld'](76, 0, null, null, 1, 'i', [[
                            'class',
                            'menu-bullet menu-bullet-dot'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](77, 0, null, null, 0, 'span', [], null, null, null, null, null)),
                        (l()(), r['ɵeld'](78, 0, null, null, 2, 'span', [
                            [
                                'class',
                                'menu-text'
                            ],
                            [
                                'subheader',
                                'Buzones'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵted'](79, null, [
                            '',
                            ''
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ]),
                        (l()(), r['ɵeld'](81, 0, null, null, 13, 'li', [
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
                        r['ɵdid'](82, 1720320, null, 2, y.t, [
                            y.r,
                            r.ElementRef,
                            r.Renderer2,
                            r.ChangeDetectorRef,
                            [
                                2,
                                y.s
                            ],
                            [
                                2,
                                y.u
                            ]
                        ], {
                            routerLinkActive: [
                                0,
                                'routerLinkActive'
                            ]
                        }, null),
                        r['ɵqud'](603979776, 25, { links: 1 }),
                        r['ɵqud'](603979776, 26, { linksWithHrefs: 1 }),
                        (l()(), r['ɵeld'](85, 0, null, null, 9, 'a', [
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
                            var t = !0;
                            return 'click' === n && (t = !1 !== r['ɵnov'](l, 86).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && t), t;
                        }, null, null)),
                        r['ɵdid'](86, 671744, [
                            [
                                28,
                                4
                            ],
                            [
                                26,
                                4
                            ]
                        ], 0, y.u, [
                            y.r,
                            y.a,
                            h.LocationStrategy
                        ], {
                            routerLink: [
                                0,
                                'routerLink'
                            ]
                        }, null),
                        r['ɵdid'](87, 1720320, null, 2, y.t, [
                            y.r,
                            r.ElementRef,
                            r.Renderer2,
                            r.ChangeDetectorRef,
                            [
                                2,
                                y.s
                            ],
                            [
                                2,
                                y.u
                            ]
                        ], {
                            routerLinkActive: [
                                0,
                                'routerLinkActive'
                            ]
                        }, null),
                        r['ɵqud'](603979776, 27, { links: 1 }),
                        r['ɵqud'](603979776, 28, { linksWithHrefs: 1 }),
                        (l()(), r['ɵeld'](90, 0, null, null, 1, 'i', [[
                            'class',
                            'menu-bullet menu-bullet-dot'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](91, 0, null, null, 0, 'span', [], null, null, null, null, null)),
                        (l()(), r['ɵeld'](92, 0, null, null, 2, 'span', [
                            [
                                'class',
                                'menu-text'
                            ],
                            [
                                'subheader',
                                'Notificaciones Pendientes'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵted'](93, null, [
                            '',
                            ''
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ]),
                        (l()(), r['ɵeld'](95, 0, null, null, 39, 'li', [
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
                        (l()(), r['ɵeld'](96, 0, null, null, 7, 'a', [[
                            'class',
                            'menu-link menu-toggle'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](97, 16777216, null, null, 2, 'span', [
                            [
                                'cacheSVG',
                                'true'
                            ],
                            [
                                'class',
                                'svg-icon menu-icon'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵprd'](512, null, p.SVGCacheService, p.SVGCacheService, [
                            [
                                2,
                                h.APP_BASE_HREF
                            ],
                            [
                                2,
                                h.PlatformLocation
                            ],
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            m.HttpClient,
                            m.HttpBackend,
                            r.RendererFactory2
                        ]),
                        r['ɵdid'](99, 737280, null, 0, v.InlineSVGDirective, [
                            r.ElementRef,
                            r.ViewContainerRef,
                            r.ComponentFactoryResolver,
                            p.SVGCacheService,
                            r.Renderer2,
                            b.InlineSVGService,
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            r.PLATFORM_ID
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
                        (l()(), r['ɵeld'](100, 0, null, null, 2, 'span', [[
                            'class',
                            'menu-text'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](101, null, [
                            ' ',
                            ''
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ]),
                        (l()(), r['ɵeld'](103, 0, null, null, 0, 'i', [[
                            'class',
                            'menu-arrow'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](104, 0, null, null, 30, 'div', [[
                            'class',
                            'menu-submenu'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](105, 0, null, null, 0, 'i', [[
                            'class',
                            'menu-arrow'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](106, 0, null, null, 28, 'ul', [[
                            'class',
                            'menu-subnav'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](107, 0, null, null, 13, 'li', [
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
                        r['ɵdid'](108, 1720320, null, 2, y.t, [
                            y.r,
                            r.ElementRef,
                            r.Renderer2,
                            r.ChangeDetectorRef,
                            [
                                2,
                                y.s
                            ],
                            [
                                2,
                                y.u
                            ]
                        ], {
                            routerLinkActive: [
                                0,
                                'routerLinkActive'
                            ]
                        }, null),
                        r['ɵqud'](603979776, 29, { links: 1 }),
                        r['ɵqud'](603979776, 30, { linksWithHrefs: 1 }),
                        (l()(), r['ɵeld'](111, 0, null, null, 9, 'a', [
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
                            var t = !0;
                            return 'click' === n && (t = !1 !== r['ɵnov'](l, 112).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && t), t;
                        }, null, null)),
                        r['ɵdid'](112, 671744, [
                            [
                                32,
                                4
                            ],
                            [
                                30,
                                4
                            ]
                        ], 0, y.u, [
                            y.r,
                            y.a,
                            h.LocationStrategy
                        ], {
                            routerLink: [
                                0,
                                'routerLink'
                            ]
                        }, null),
                        r['ɵdid'](113, 1720320, null, 2, y.t, [
                            y.r,
                            r.ElementRef,
                            r.Renderer2,
                            r.ChangeDetectorRef,
                            [
                                2,
                                y.s
                            ],
                            [
                                2,
                                y.u
                            ]
                        ], {
                            routerLinkActive: [
                                0,
                                'routerLinkActive'
                            ]
                        }, null),
                        r['ɵqud'](603979776, 31, { links: 1 }),
                        r['ɵqud'](603979776, 32, { linksWithHrefs: 1 }),
                        (l()(), r['ɵeld'](116, 0, null, null, 1, 'i', [[
                            'class',
                            'menu-bullet menu-bullet-dot'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](117, 0, null, null, 0, 'span', [], null, null, null, null, null)),
                        (l()(), r['ɵeld'](118, 0, null, null, 2, 'span', [[
                            'class',
                            'menu-text'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](119, null, [
                            '',
                            ''
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ]),
                        (l()(), r['ɵeld'](121, 0, null, null, 13, 'li', [
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
                        r['ɵdid'](122, 1720320, null, 2, y.t, [
                            y.r,
                            r.ElementRef,
                            r.Renderer2,
                            r.ChangeDetectorRef,
                            [
                                2,
                                y.s
                            ],
                            [
                                2,
                                y.u
                            ]
                        ], {
                            routerLinkActive: [
                                0,
                                'routerLinkActive'
                            ]
                        }, null),
                        r['ɵqud'](603979776, 33, { links: 1 }),
                        r['ɵqud'](603979776, 34, { linksWithHrefs: 1 }),
                        (l()(), r['ɵeld'](125, 0, null, null, 9, 'a', [
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
                            var t = !0;
                            return 'click' === n && (t = !1 !== r['ɵnov'](l, 126).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && t), t;
                        }, null, null)),
                        r['ɵdid'](126, 671744, [
                            [
                                36,
                                4
                            ],
                            [
                                34,
                                4
                            ]
                        ], 0, y.u, [
                            y.r,
                            y.a,
                            h.LocationStrategy
                        ], {
                            routerLink: [
                                0,
                                'routerLink'
                            ]
                        }, null),
                        r['ɵdid'](127, 1720320, null, 2, y.t, [
                            y.r,
                            r.ElementRef,
                            r.Renderer2,
                            r.ChangeDetectorRef,
                            [
                                2,
                                y.s
                            ],
                            [
                                2,
                                y.u
                            ]
                        ], {
                            routerLinkActive: [
                                0,
                                'routerLinkActive'
                            ]
                        }, null),
                        r['ɵqud'](603979776, 35, { links: 1 }),
                        r['ɵqud'](603979776, 36, { linksWithHrefs: 1 }),
                        (l()(), r['ɵeld'](130, 0, null, null, 1, 'i', [[
                            'class',
                            'menu-bullet menu-bullet-dot'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](131, 0, null, null, 0, 'span', [], null, null, null, null, null)),
                        (l()(), r['ɵeld'](132, 0, null, null, 2, 'span', [[
                            'class',
                            'menu-text'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](133, null, [
                            '',
                            ''
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ])
                    ], function (l, n) {
                        var e = n.component;
                        l(n, 1, 0, 'brand flex-column-auto', e.brandClasses), l(n, 3, 0, '/'), l(n, 6, 0, e.asideSelfMinimizeToggle), l(n, 9, 0, e.disableAsideSelfDisplay), l(n, 11, 0, 'aside-menu', e.asideMenuCSSClasses), l(n, 13, 0, 'menu-nav', e.ulCSSClasses), l(n, 15, 0, 'menu-item-active'), l(n, 19, 0, '/dashboard'), l(n, 20, 0, 'active'), l(n, 25, 0, './assets/media/svg/icons/Design/Layers.svg', 'true'), l(n, 29, 0, r['ɵunv'](n, 29, 0, r['ɵnov'](n, 30).transform(e.seeDistribui$)) || r['ɵunv'](n, 29, 0, r['ɵnov'](n, 31).transform(e.seeSeeller$))), l(n, 33, 0, r['ɵunv'](n, 33, 0, r['ɵnov'](n, 34).transform(e.seeDistribui$))), l(n, 36, 0, 'menu-item-active'), l(n, 40, 0, '/document'), l(n, 41, 0, 'active'), l(n, 46, 0, './assets/media/svg/custom/1F-06.svg', 'true'), l(n, 54, 0, './assets/media/svg/custom/notificaciones.svg', 'true'), l(n, 68, 0, 'menu-item-open'), l(n, 72, 0, '/contract'), l(n, 73, 0, 'active'), l(n, 82, 0, 'menu-item-open'), l(n, 86, 0, '/notifications'), l(n, 87, 0, 'active'), l(n, 99, 0, './assets/media/svg/custom/1F-11.svg', 'true'), l(n, 108, 0, 'menu-item-open'), l(n, 112, 0, '/packages'), l(n, 113, 0, 'active'), l(n, 122, 0, 'menu-item-open'), l(n, 126, 0, '/packages/notification'), l(n, 127, 0, 'active');
                    }, function (l, n) {
                        var e = n.component;
                        l(n, 2, 0, r['ɵnov'](n, 3).target, r['ɵnov'](n, 3).href), l(n, 4, 0, e.headerLogo), l(n, 10, 0, e.asideMenuScroll, e.asideMenuDropdown), l(n, 18, 0, r['ɵnov'](n, 19).target, r['ɵnov'](n, 19).href), l(n, 39, 0, r['ɵnov'](n, 40).target, r['ɵnov'](n, 40).href), l(n, 48, 0, r['ɵunv'](n, 48, 0, r['ɵnov'](n, 49).transform('GENERAL.SIGNATURE'))), l(n, 56, 0, r['ɵunv'](n, 56, 0, r['ɵnov'](n, 57).transform('GENERAL.NOTIFICACITION'))), l(n, 65, 0, r['ɵunv'](n, 65, 0, r['ɵnov'](n, 66).transform('GENERAL.NOTIFICACITION'))), l(n, 71, 0, r['ɵnov'](n, 72).target, r['ɵnov'](n, 72).href), l(n, 79, 0, r['ɵunv'](n, 79, 0, r['ɵnov'](n, 80).transform('GENERAL.GROUPNOT'))), l(n, 85, 0, r['ɵnov'](n, 86).target, r['ɵnov'](n, 86).href), l(n, 93, 0, r['ɵunv'](n, 93, 0, r['ɵnov'](n, 94).transform('GENERAL.PENDINGNOT'))), l(n, 101, 0, r['ɵunv'](n, 101, 0, r['ɵnov'](n, 102).transform('GENERAL.PACKAGES'))), l(n, 111, 0, r['ɵnov'](n, 112).target, r['ɵnov'](n, 112).href), l(n, 119, 0, r['ɵunv'](n, 119, 0, r['ɵnov'](n, 120).transform('GENERAL.DOCUMENT'))), l(n, 125, 0, r['ɵnov'](n, 126).target, r['ɵnov'](n, 126).href), l(n, 133, 0, r['ɵunv'](n, 133, 0, r['ɵnov'](n, 134).transform('GENERAL.NOTIFICACITION_PACKAGES')));
                    });
                }
                var V = o('G0yt'), _ = o('s7LF'), L = o('lMep'), O = function l(n) {
                    d(this, l), this.request = n, this.type = L.a.SEARCH_DATA_CHARTS;
                }, P = function (l) {
                    i(e, l);
                    var n = a(e);
                    function e() {
                        var l;
                        return d(this, e), (l = n.apply(this, arguments)).DELIMITER = '-', l;
                    }
                    return f(e, [
                        {
                            key: 'fromModel',
                            value: function (l) {
                                if (l) {
                                    var n = l.split(this.DELIMITER);
                                    return {
                                        day: parseInt(n[0], 10),
                                        month: parseInt(n[1], 10),
                                        year: parseInt(n[2], 10)
                                    };
                                }
                                return null;
                            }
                        },
                        {
                            key: 'toModel',
                            value: function (l) {
                                return l ? l.day + this.DELIMITER + l.month + this.DELIMITER + l.year : null;
                            }
                        }
                    ]), e;
                }(V.n), M = function (l) {
                    i(e, l);
                    var n = a(e);
                    function e() {
                        var l;
                        return d(this, e), (l = n.apply(this, arguments)).DELIMITER = '/', l;
                    }
                    return f(e, [
                        {
                            key: 'parse',
                            value: function (l) {
                                if (l) {
                                    var n = l.split(this.DELIMITER);
                                    return {
                                        day: parseInt(n[0], 10),
                                        month: parseInt(n[1], 10),
                                        year: parseInt(n[2], 10)
                                    };
                                }
                                return null;
                            }
                        },
                        {
                            key: 'format',
                            value: function (l) {
                                return l ? l.day + this.DELIMITER + l.month + this.DELIMITER + l.year : '';
                            }
                        }
                    ]), e;
                }(V.o), H = function () {
                    function l(n, e, t) {
                        d(this, l), this.calendar = n, this.formatter = e, this.store = t, this.hoveredDate = null, this.filtersForm = new _.j({
                            from: new _.g({
                                value: null,
                                disabled: !0
                            }),
                            to: new _.g({
                                value: null,
                                disabled: !0
                            })
                        });
                    }
                    return f(l, [
                        {
                            key: 'onDateSelection',
                            value: function (l) {
                                this.fromDate || this.toDate ? this.fromDate && !this.toDate && l && l.after(this.fromDate) ? (this.toDate = l, this.filtersForm.patchValue({ to: l })) : (this.toDate = null, this.fromDate = l, this.filtersForm.patchValue({
                                    from: l,
                                    to: null
                                })) : (this.fromDate = l, this.filtersForm.patchValue({ from: l }));
                            }
                        },
                        {
                            key: 'isHovered',
                            value: function (l) {
                                return this.fromDate && !this.toDate && this.hoveredDate && l.after(this.fromDate) && l.before(this.hoveredDate);
                            }
                        },
                        {
                            key: 'isInside',
                            value: function (l) {
                                return this.toDate && l.after(this.fromDate) && l.before(this.toDate);
                            }
                        },
                        {
                            key: 'isRange',
                            value: function (l) {
                                return l.equals(this.fromDate) || this.toDate && l.equals(this.toDate) || this.isInside(l) || this.isHovered(l);
                            }
                        },
                        {
                            key: 'validateInput',
                            value: function (l, n) {
                                var e = this.formatter.parse(n);
                                return e && this.calendar.isValid(V.m.from(e)) ? V.m.from(e) : l;
                            }
                        },
                        {
                            key: 'onSubmit',
                            value: function () {
                                this.store.dispatch(new O(this.filtersForm.value));
                            }
                        }
                    ]), l;
                }(), G = r['ɵcrt']({
                    encapsulation: 0,
                    styles: ['.dp-hidden[_ngcontent-%COMP%] {\n\t\t\t\twidth: 0;\n\t\t\t\tmargin: 0;\n\t\t\t\tborder: none;\n\t\t\t\tpadding: 0;\n\t\t\t}\n\t\t\t.custom-day[_ngcontent-%COMP%] {\n\t\t\t\ttext-align: center;\n\t\t\t\tpadding: 0.185rem 0.25rem;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\theight: 2rem;\n\t\t\t\twidth: 2rem;\n\t\t\t}\n\t\t\t.custom-day.focused[_ngcontent-%COMP%] {\n\t\t\t\tbackground-color: #e6e6e6;\n\t\t\t}\n\t\t\t.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\n\t\t\t\tbackground-color: rgb(2, 117, 216);\n\t\t\t\tcolor: white;\n\t\t\t}\n\t\t\t.custom-day.faded[_ngcontent-%COMP%] {\n\t\t\t\tbackground-color: rgba(2, 117, 216, 0.5);\n\t\t\t}'],
                    data: {}
                });
                function B(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 1, 'span', [[
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
                        (l()(), r['ɵted'](1, null, [
                            ' ',
                            ' '
                        ]))
                    ], null, function (l, n) {
                        var e = n.component;
                        l(n, 0, 0, n.context.focused, e.isRange(n.context.$implicit), e.isHovered(n.context.$implicit) || e.isInside(n.context.$implicit)), l(n, 1, 0, n.context.$implicit.day);
                    });
                }
                function N(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 34, 'form', [
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
                            var t = !0, u = l.component;
                            return 'submit' === n && (t = !1 !== r['ɵnov'](l, 2).onSubmit(e) && t), 'reset' === n && (t = !1 !== r['ɵnov'](l, 2).onReset() && t), 'submit' === n && (t = !1 !== u.onSubmit() && t), t;
                        }, null, null)),
                        r['ɵdid'](1, 16384, null, 0, _.C, [], null, null),
                        r['ɵdid'](2, 540672, null, 0, _.k, [
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
                        r['ɵprd'](2048, null, _.d, null, [_.k]),
                        r['ɵdid'](4, 16384, null, 0, _.r, [[
                            6,
                            _.d
                        ]], null, null),
                        (l()(), r['ɵeld'](5, 0, null, null, 26, 'div', [[
                            'class',
                            'col-12'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](6, 0, null, null, 1, 'label', [], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['Rango'])),
                        (l()(), r['ɵeld'](8, 0, null, null, 7, 'div', [[
                            'class',
                            'dp-hidden position-absolute'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](9, 0, null, null, 6, 'div', [[
                            'class',
                            'input-group'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](10, 16777216, null, null, 4, 'input', [
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
                            var t = !0, u = l.component;
                            return 'input' === n && (t = !1 !== r['ɵnov'](l, 14).manualDateChange(e.target.value) && t), 'change' === n && (t = !1 !== r['ɵnov'](l, 14).manualDateChange(e.target.value, !0) && t), 'focus' === n && (t = !1 !== r['ɵnov'](l, 14).onFocus() && t), 'blur' === n && (t = !1 !== r['ɵnov'](l, 14).onBlur() && t), 'dateSelect' === n && (t = !1 !== u.onDateSelection(e) && t), t;
                        }, null, null)),
                        r['ɵprd'](5120, null, _.o, function (l) {
                            return [l];
                        }, [V.C]),
                        r['ɵprd'](5120, null, _.n, function (l) {
                            return [l];
                        }, [V.C]),
                        r['ɵprd'](6144, null, V.q, null, [V.D]),
                        r['ɵdid'](14, 671744, [[
                            'datepicker',
                            4
                        ]], 0, V.C, [
                            V.o,
                            r.ElementRef,
                            r.ViewContainerRef,
                            r.Renderer2,
                            r.ComponentFactoryResolver,
                            r.NgZone,
                            V.h,
                            V.n,
                            h.DOCUMENT,
                            r.ChangeDetectorRef,
                            V.D
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
                        (l()(), r['ɵand'](0, [[
                            't',
                            2
                        ]], null, 0, null, B)),
                        (l()(), r['ɵeld'](16, 0, null, null, 15, 'div', [[
                            'class',
                            'input-group w-75'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](17, 0, [[
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
                            var t = !0, u = l.component;
                            return 'input' === n && (t = !1 !== r['ɵnov'](l, 18)._handleInput(e.target.value) && t), 'blur' === n && (t = !1 !== r['ɵnov'](l, 18).onTouched() && t), 'compositionstart' === n && (t = !1 !== r['ɵnov'](l, 18)._compositionStart() && t), 'compositionend' === n && (t = !1 !== r['ɵnov'](l, 18)._compositionEnd(e.target.value) && t), 'input' === n && (t = !1 !== (u.fromDate = u.validateInput(u.fromDate, r['ɵnov'](l, 17).value)) && t), t;
                        }, null, null)),
                        r['ɵdid'](18, 16384, null, 0, _.e, [
                            r.Renderer2,
                            r.ElementRef,
                            [
                                2,
                                _.b
                            ]
                        ], null, null),
                        r['ɵprd'](1024, null, _.o, function (l) {
                            return [l];
                        }, [_.e]),
                        r['ɵdid'](20, 671744, null, 0, _.i, [
                            [
                                3,
                                _.d
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
                                _.o
                            ],
                            [
                                2,
                                _.A
                            ]
                        ], {
                            name: [
                                0,
                                'name'
                            ]
                        }, null),
                        r['ɵprd'](2048, null, _.p, null, [_.i]),
                        r['ɵdid'](22, 16384, null, 0, _.q, [[
                            4,
                            _.p
                        ]], null, null),
                        (l()(), r['ɵeld'](23, 0, [[
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
                            var t = !0, u = l.component;
                            return 'input' === n && (t = !1 !== r['ɵnov'](l, 24)._handleInput(e.target.value) && t), 'blur' === n && (t = !1 !== r['ɵnov'](l, 24).onTouched() && t), 'compositionstart' === n && (t = !1 !== r['ɵnov'](l, 24)._compositionStart() && t), 'compositionend' === n && (t = !1 !== r['ɵnov'](l, 24)._compositionEnd(e.target.value) && t), 'input' === n && (t = !1 !== (u.toDate = u.validateInput(u.toDate, r['ɵnov'](l, 23).value)) && t), t;
                        }, null, null)),
                        r['ɵdid'](24, 16384, null, 0, _.e, [
                            r.Renderer2,
                            r.ElementRef,
                            [
                                2,
                                _.b
                            ]
                        ], null, null),
                        r['ɵprd'](1024, null, _.o, function (l) {
                            return [l];
                        }, [_.e]),
                        r['ɵdid'](26, 671744, null, 0, _.i, [
                            [
                                3,
                                _.d
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
                                _.o
                            ],
                            [
                                2,
                                _.A
                            ]
                        ], {
                            name: [
                                0,
                                'name'
                            ]
                        }, null),
                        r['ɵprd'](2048, null, _.p, null, [_.i]),
                        r['ɵdid'](28, 16384, null, 0, _.q, [[
                            4,
                            _.p
                        ]], null, null),
                        (l()(), r['ɵeld'](29, 0, null, null, 2, 'div', [[
                            'class',
                            'input-group-prepend'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](30, 0, null, null, 1, 'button', [
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
                            var t = !0;
                            return 'click' === n && (t = !1 !== r['ɵnov'](l, 14).toggle() && t), t;
                        }, null, null)),
                        (l()(), r['ɵeld'](31, 0, null, null, 0, 'i', [[
                            'class',
                            'ki ki-calendar '
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](32, 0, null, null, 2, 'div', [[
                            'class',
                            'col-12 mt-5'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](33, 0, null, null, 1, 'button', [
                            [
                                'class',
                                'btn btn-primary btn-block'
                            ],
                            [
                                'type',
                                'submit'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['Filtrar']))
                    ], function (l, n) {
                        var e = n.component;
                        l(n, 2, 0, e.filtersForm), l(n, 14, 0, 'outside', r['ɵnov'](n, 15), 2, 'hidden', e.fromDate), l(n, 20, 0, 'from'), l(n, 26, 0, 'to');
                    }, function (l, n) {
                        var e = n.component;
                        l(n, 0, 0, r['ɵnov'](n, 4).ngClassUntouched, r['ɵnov'](n, 4).ngClassTouched, r['ɵnov'](n, 4).ngClassPristine, r['ɵnov'](n, 4).ngClassDirty, r['ɵnov'](n, 4).ngClassValid, r['ɵnov'](n, 4).ngClassInvalid, r['ɵnov'](n, 4).ngClassPending), l(n, 10, 0, r['ɵnov'](n, 14).disabled), l(n, 17, 0, e.formatter.format(e.fromDate), r['ɵnov'](n, 22).ngClassUntouched, r['ɵnov'](n, 22).ngClassTouched, r['ɵnov'](n, 22).ngClassPristine, r['ɵnov'](n, 22).ngClassDirty, r['ɵnov'](n, 22).ngClassValid, r['ɵnov'](n, 22).ngClassInvalid, r['ɵnov'](n, 22).ngClassPending), l(n, 23, 0, e.formatter.format(e.toDate), r['ɵnov'](n, 28).ngClassUntouched, r['ɵnov'](n, 28).ngClassTouched, r['ɵnov'](n, 28).ngClassPristine, r['ɵnov'](n, 28).ngClassDirty, r['ɵnov'](n, 28).ngClassValid, r['ɵnov'](n, 28).ngClassInvalid, r['ɵnov'](n, 28).ngClassPending);
                    });
                }
                var F, j = o('pLZG'), K = function () {
                    function l(n, e, t, u) {
                        d(this, l), this.layout = n, this.subheader = e, this.cdr = t, this.router = u, this.subheaderCSSClasses = '', this.subheaderContainerCSSClasses = '', this.subheaderMobileToggle = !1, this.subheaderDisplayDesc = !1, this.subheaderDisplayDaterangepicker = !1, this.breadcrumbs = [], this.isRouteCharts = !1, this.title$ = this.subheader.titleSubject.asObservable(), this.verifyLocation();
                    }
                    return f(l, [
                        {
                            key: 'ngOnInit',
                            value: function () {
                                var l = this;
                                this.date = new Date(), this.dateLetter = this.getNameMonth(this.date.getMonth()) + ' ' + this.date.getDate() + ' ', this.title$ = this.subheader.titleSubject.asObservable(), this.breadcrumbs$ = this.subheader.breadCrumbsSubject.asObservable(), this.description$ = this.subheader.descriptionSubject.asObservable(), this.subheaderCSSClasses = this.layout.getStringCSSClasses('subheader'), this.subheaderContainerCSSClasses = this.layout.getStringCSSClasses('subheader_container'), this.subheaderMobileToggle = this.layout.getProp('subheader.mobileToggle'), this.subheaderDisplayDesc = this.layout.getProp('subheader.displayDesc'), this.subheaderDisplayDaterangepicker = this.layout.getProp('subheader.displayDaterangepicker'), this.breadcrumbs$.subscribe(function (n) {
                                    l.breadcrumbs = n, l.cdr.destroyed || l.cdr.detectChanges();
                                });
                            }
                        },
                        {
                            key: 'getNameMonth',
                            value: function (l) {
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
                        },
                        {
                            key: 'verifyLocation',
                            value: function () {
                                var l = this;
                                this.router.events.pipe(Object(j.a)(function (l) {
                                    return l instanceof y.e;
                                })).subscribe(function (n) {
                                    l.isRouteCharts = n.urlAfterRedirects.includes('dashboard-chart');
                                });
                            }
                        }
                    ]), l;
                }(), z = o('2Vo4'), U = function l() {
                    d(this, l), this.breadcrumbs = [], this.title = '';
                }, q = ((F = function () {
                    function l(n) {
                        d(this, l), this.layout = n, this.titleSubject = new z.a('Dashboard'), this.descriptionSubject = new z.a(''), this.breadCrumbsSubject = new z.a([]), this.subheaderVersionSubject = new z.a('v1'), this.unsubscribe = [], this.setDefaultSubheader();
                    }
                    return f(l, [
                        {
                            key: 'setDefaultSubheader',
                            value: function () {
                                this.setSubheaderVersion(this.layout.getProp('subheader.layoutVersion'));
                            }
                        },
                        {
                            key: 'setBreadcrumbs',
                            value: function () {
                                var l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                                this.breadCrumbsSubject.next(l);
                            }
                        },
                        {
                            key: 'setTitle',
                            value: function () {
                                var l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                                this.titleSubject.next(l);
                            }
                        },
                        {
                            key: 'setDescription',
                            value: function (l) {
                                this.descriptionSubject.next(l);
                            }
                        },
                        {
                            key: 'setSubheaderVersion',
                            value: function () {
                                var l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'v1';
                                this.subheaderVersionSubject.next(l);
                            }
                        },
                        {
                            key: 'updateAfterRouteChanges',
                            value: function (l) {
                                var n = this.getBreadcrumbsAndTitle('kt_aside_menu', l), e = this.getBreadcrumbsAndTitle('kt_header_menu', l);
                                this.setBreadcrumbs(n && n.breadcrumbs.length > 0 ? n.breadcrumbs : e.breadcrumbs), this.setTitle(n && n.title && n.title.length > 0 ? n.title : e.title);
                            }
                        },
                        {
                            key: 'getLinksFromMenu',
                            value: function (l) {
                                var n = Array.from(l.getElementsByClassName('menu-item-open') || []), e = Array.from(l.getElementsByClassName('menu-item-active') || []), t = [];
                                return n.forEach(function (l) {
                                    var n = Array.from(l.getElementsByClassName('menu-link') || []);
                                    if (n && n.length > 0) {
                                        var e = n[0];
                                        e.href && e.href.length && e.href.length > 0 && '/' !== e.innerHTML && t.push(e);
                                    }
                                }), e.forEach(function (l) {
                                    var n = Array.from(l.getElementsByClassName('menu-link') || []);
                                    if (n && n.length > 0) {
                                        var e = n[0];
                                        e.href && e.href.length && e.href.length > 0 && '/' !== e.innerHTML && t.push(e);
                                    }
                                }), t;
                            }
                        },
                        {
                            key: 'getBreadcrumbsAndTitle',
                            value: function (l, n) {
                                var e = new U(), t = document.getElementById(l);
                                if (!t)
                                    return e;
                                var u = this.getLinksFromMenu(t).filter(function (l) {
                                    return 'A' === l.tagName;
                                });
                                return u ? (u.forEach(function (l) {
                                    var n, t, u = l.getElementsByClassName('menu-text');
                                    if (u) {
                                        var i = Array.from(u).find(function (l) {
                                            return l.innerHTML && l.innerHTML.trim().length > 0;
                                        });
                                        i && e.breadcrumbs.push({
                                            title: i.innerHTML,
                                            linkPath: l.pathname,
                                            linkText: null !== (t = null === (n = null == i ? void 0 : i.attributes.subheader) || void 0 === n ? void 0 : n.nodeValue) && void 0 !== t ? t : i.innerHTML
                                        });
                                    }
                                }), e.title = this.getTitle(e.breadcrumbs, n), e) : e;
                            }
                        },
                        {
                            key: 'parseUrlAndReturnPathname',
                            value: function (l) {
                                var n = document.createElement('a');
                                return n.href = 'https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container', n.pathname;
                            }
                        },
                        {
                            key: 'getTitle',
                            value: function (l, n) {
                                if (!l || !n)
                                    return '';
                                var e = l.length;
                                return e ? l[e - 1].title : '';
                            }
                        },
                        {
                            key: 'ngOnDestroy',
                            value: function () {
                                this.unsubscribe.forEach(function (l) {
                                    return l.unsubscribe();
                                });
                            }
                        }
                    ]), l;
                }()).ɵprov = r['ɵɵdefineInjectable']({
                    factory: function () {
                        return new F(r['ɵɵinject'](C.a));
                    },
                    token: F,
                    providedIn: 'root'
                }), F), W = r['ɵcrt']({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });
                function Y(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 1, 'button', [
                            [
                                'class',
                                'burger-icon burger-icon-left mr-4 d-inline-block d-lg-none'
                            ],
                            [
                                'id',
                                'kt_subheader_mobile_toggle'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵeld'](2, 0, null, null, 0, 'span', [], null, null, null, null, null))
                    ], null, null);
                }
                function X(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 1, 'small', [], null, null, null, null, null)),
                        (l()(), r['ɵted'](2, null, [
                            '',
                            ''
                        ]))
                    ], null, function (l, n) {
                        l(n, 2, 0, n.context.ngIf);
                    });
                }
                function $(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 3, null, null, null, null, null, null, null)),
                        (l()(), r['ɵand'](16777216, null, null, 2, null, X)),
                        r['ɵdid'](2, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        (l()(), r['ɵand'](0, null, null, 0))
                    ], function (l, n) {
                        var e = n.component;
                        l(n, 2, 0, r['ɵunv'](n, 2, 0, r['ɵnov'](n, 3).transform(e.description$)));
                    }, null);
                }
                function Z(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 4, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 3, 'h5', [[
                            'class',
                            'text-dark font-weight-bold my-1 mr-5'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](2, null, [
                            ' ',
                            ' '
                        ])),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, $)),
                        r['ɵdid'](4, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
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
                function J(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 6, 'li', [
                            [
                                'class',
                                'breadcrumb-item'
                            ],
                            [
                                'routerLinkActive',
                                'active'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵdid'](1, 1720320, null, 2, y.t, [
                            y.r,
                            r.ElementRef,
                            r.Renderer2,
                            r.ChangeDetectorRef,
                            [
                                2,
                                y.s
                            ],
                            [
                                2,
                                y.u
                            ]
                        ], {
                            routerLinkActive: [
                                0,
                                'routerLinkActive'
                            ]
                        }, null),
                        r['ɵqud'](603979776, 1, { links: 1 }),
                        r['ɵqud'](603979776, 2, { linksWithHrefs: 1 }),
                        (l()(), r['ɵeld'](4, 0, null, null, 2, 'a', [[
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
                            var t = !0;
                            return 'click' === n && (t = !1 !== r['ɵnov'](l, 5).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && t), t;
                        }, null, null)),
                        r['ɵdid'](5, 671744, [[
                            2,
                            4
                        ]], 0, y.u, [
                            y.r,
                            y.a,
                            h.LocationStrategy
                        ], {
                            routerLink: [
                                0,
                                'routerLink'
                            ]
                        }, null),
                        (l()(), r['ɵted'](6, null, [
                            ' ',
                            ' '
                        ]))
                    ], function (l, n) {
                        l(n, 1, 0, 'active'), l(n, 5, 0, n.context.$implicit.linkPath);
                    }, function (l, n) {
                        l(n, 4, 0, r['ɵnov'](n, 5).target, r['ɵnov'](n, 5).href), l(n, 6, 0, n.context.$implicit.linkText);
                    });
                }
                function Q(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 25, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 24, 'div', [[
                            'class',
                            'row'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](2, 0, null, null, 23, 'div', [[
                            'class',
                            'col'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](3, 0, null, null, 22, 'div', [
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
                        r['ɵdid'](4, 1720320, null, 2, V.v, [
                            r.ChangeDetectorRef,
                            V.x,
                            h.DOCUMENT,
                            r.NgZone,
                            r.ElementRef,
                            r.Renderer2,
                            [
                                2,
                                V.K
                            ]
                        ], null, null),
                        r['ɵqud'](603979776, 3, { _menu: 0 }),
                        r['ɵqud'](603979776, 4, { _anchor: 0 }),
                        (l()(), r['ɵeld'](7, 0, null, null, 8, 'a', [
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
                            var t = !0;
                            return 'click' === n && (t = !1 !== r['ɵnov'](l, 8).dropdown.toggle() && t), 'keydown.ArrowUp' === n && (t = !1 !== r['ɵnov'](l, 8).dropdown.onKeyDown(e) && t), 'keydown.ArrowDown' === n && (t = !1 !== r['ɵnov'](l, 8).dropdown.onKeyDown(e) && t), 'keydown.Home' === n && (t = !1 !== r['ɵnov'](l, 8).dropdown.onKeyDown(e) && t), 'keydown.End' === n && (t = !1 !== r['ɵnov'](l, 8).dropdown.onKeyDown(e) && t), 'keydown.Tab' === n && (t = !1 !== r['ɵnov'](l, 8).dropdown.onKeyDown(e) && t), 'keydown.Shift.Tab' === n && (t = !1 !== r['ɵnov'](l, 8).dropdown.onKeyDown(e) && t), t;
                        }, null, null)),
                        r['ɵdid'](8, 16384, null, 0, V.A, [
                            V.v,
                            r.ElementRef
                        ], null, null),
                        r['ɵprd'](2048, [[
                            4,
                            4
                        ]], V.w, null, [V.A]),
                        (l()(), r['ɵeld'](10, 0, null, null, 4, 'span', [[
                            'class',
                            'svg-icon svg-icon-light'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](11, 0, null, null, 3, ':svg:svg', [
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
                        (l()(), r['ɵeld'](12, 0, null, null, 2, ':svg:g', [
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
                        (l()(), r['ɵeld'](13, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](14, 0, null, null, 0, ':svg:path', [
                            [
                                'd',
                                'M5,4 L19,4 C19.2761424,4 19.5,4.22385763 19.5,4.5 C19.5,4.60818511 19.4649111,4.71345191 19.4,4.8 L14,12 L14,20.190983 C14,20.4671254 13.7761424,20.690983 13.5,20.690983 C13.4223775,20.690983 13.3458209,20.6729105 13.2763932,20.6381966 L10,19 L10,12 L4.6,4.8 C4.43431458,4.5790861 4.4790861,4.26568542 4.7,4.1 C4.78654809,4.03508894 4.89181489,4 5,4 Z'
                            ],
                            [
                                'fill',
                                '#000000'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' Filtros '])),
                        (l()(), r['ɵeld'](16, 0, null, null, 9, 'div', [
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
                            var t = !0;
                            return 'keydown.ArrowUp' === n && (t = !1 !== r['ɵnov'](l, 17).dropdown.onKeyDown(e) && t), 'keydown.ArrowDown' === n && (t = !1 !== r['ɵnov'](l, 17).dropdown.onKeyDown(e) && t), 'keydown.Home' === n && (t = !1 !== r['ɵnov'](l, 17).dropdown.onKeyDown(e) && t), 'keydown.End' === n && (t = !1 !== r['ɵnov'](l, 17).dropdown.onKeyDown(e) && t), 'keydown.Enter' === n && (t = !1 !== r['ɵnov'](l, 17).dropdown.onKeyDown(e) && t), 'keydown.Space' === n && (t = !1 !== r['ɵnov'](l, 17).dropdown.onKeyDown(e) && t), 'keydown.Tab' === n && (t = !1 !== r['ɵnov'](l, 17).dropdown.onKeyDown(e) && t), 'keydown.Shift.Tab' === n && (t = !1 !== r['ɵnov'](l, 17).dropdown.onKeyDown(e) && t), t;
                        }, null, null)),
                        r['ɵdid'](17, 16384, [[
                            3,
                            4
                        ]], 1, V.y, [
                            V.v,
                            r.ElementRef
                        ], null, null),
                        r['ɵqud'](603979776, 5, { menuItems: 1 }),
                        (l()(), r['ɵeld'](19, 0, null, null, 1, 'p', [[
                            'class',
                            'm-5'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['Filtros de busqueda'])),
                        (l()(), r['ɵeld'](21, 0, null, null, 0, 'div', [[
                            'class',
                            'dropdown-divider'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](22, 0, null, null, 3, 'filters-chart', [], null, null, null, N, G)),
                        r['ɵprd'](4608, null, V.n, P, []),
                        r['ɵprd'](512, null, V.o, M, []),
                        r['ɵdid'](25, 49152, null, 0, H, [
                            V.h,
                            V.o,
                            R.o
                        ], null, null)
                    ], null, function (l, n) {
                        l(n, 3, 0, r['ɵnov'](n, 4).isOpen()), l(n, 7, 0, r['ɵnov'](n, 8).dropdown.isOpen()), l(n, 16, 0, !0, r['ɵnov'](n, 17).dropdown.isOpen(), r['ɵnov'](n, 17).placement);
                    });
                }
                function ll(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 5, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 4, 'a', [
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
                        (l()(), r['ɵeld'](2, 0, null, null, 1, 'span', [
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
                        (l()(), r['ɵted'](-1, null, ['Hoy'])),
                        (l()(), r['ɵeld'](4, 0, null, null, 1, 'span', [
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
                        (l()(), r['ɵted'](5, null, [
                            '',
                            ''
                        ]))
                    ], null, function (l, n) {
                        l(n, 5, 0, n.component.dateLetter);
                    });
                }
                function nl(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-light-primary font-weight-bolder btn-sm cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' Actions ']))
                    ], null, null);
                }
                function el(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 20, 'div', [
                            [
                                'class',
                                'subheader py-2 py-lg-6'
                            ],
                            [
                                'id',
                                'kt_subheader'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵdid'](1, 278528, null, 0, h.NgClass, [
                            r.IterableDiffers,
                            r.KeyValueDiffers,
                            r.ElementRef,
                            r.Renderer2
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
                        (l()(), r['ɵeld'](2, 0, null, null, 18, 'div', [[
                            'class',
                            'd-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap'
                        ]], null, null, null, null, null)),
                        r['ɵdid'](3, 278528, null, 0, h.NgClass, [
                            r.IterableDiffers,
                            r.KeyValueDiffers,
                            r.ElementRef,
                            r.Renderer2
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
                        (l()(), r['ɵeld'](4, 0, null, null, 9, 'div', [[
                            'class',
                            'd-flex align-items-center flex-wrap mr-1'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, Y)),
                        r['ɵdid'](6, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵeld'](7, 0, null, null, 6, 'div', [[
                            'class',
                            'd-flex align-items-baseline flex-wrap mr-5'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵand'](16777216, null, null, 2, null, Z)),
                        r['ɵdid'](9, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        (l()(), r['ɵeld'](11, 0, null, null, 2, 'ul', [[
                            'class',
                            'breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2 font-size-sm'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, J)),
                        r['ɵdid'](13, 278528, null, 0, h.NgForOf, [
                            r.ViewContainerRef,
                            r.TemplateRef,
                            r.IterableDiffers
                        ], {
                            ngForOf: [
                                0,
                                'ngForOf'
                            ]
                        }, null),
                        (l()(), r['ɵeld'](14, 0, null, null, 6, 'div', [[
                            'class',
                            'd-flex align-items-center'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, Q)),
                        r['ɵdid'](16, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, ll)),
                        r['ɵdid'](18, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, nl)),
                        r['ɵdid'](20, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null)
                    ], function (l, n) {
                        var e = n.component;
                        l(n, 1, 0, 'subheader py-2 py-lg-6', e.subheaderCSSClasses), l(n, 3, 0, 'd-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap', e.subheaderContainerCSSClasses), l(n, 6, 0, e.subheaderMobileToggle), l(n, 9, 0, r['ɵunv'](n, 9, 0, r['ɵnov'](n, 10).transform(e.title$))), l(n, 13, 0, e.breadcrumbs), l(n, 16, 0, e.isRouteCharts), l(n, 18, 0, e.subheaderDisplayDaterangepicker), l(n, 20, 0, !e.subheaderDisplayDaterangepicker);
                    }, null);
                }
                var tl = function () {
                    function l() {
                        d(this, l);
                    }
                    return f(l, [{
                        key: 'ngOnInit',
                        value: function () {
                        }
                    }]), l;
                }(), ul = r['ɵcrt']({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });
                function il(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 35, 'ul', [[
                            'class',
                            'navi navi-hover'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 3, 'li', [[
                            'class',
                            'navi-header font-weight-bold py-4'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](2, 0, null, null, 1, 'span', [[
                            'class',
                            'font-size-lg'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['Choose Label:'])),
                        (l()(), r['ɵeld'](4, 0, null, null, 0, 'i', [
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
                        (l()(), r['ɵeld'](5, 0, null, null, 0, 'li', [[
                            'class',
                            'navi-separator mb-3 opacity-70'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](6, 0, null, null, 4, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](7, 0, null, null, 3, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](8, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](9, 0, null, null, 1, 'span', [[
                            'class',
                            'label label-xl label-inline label-light-success'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['Customer'])),
                        (l()(), r['ɵeld'](11, 0, null, null, 4, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](12, 0, null, null, 3, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](13, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](14, 0, null, null, 1, 'span', [[
                            'class',
                            'label label-xl label-inline label-light-danger'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['Partner'])),
                        (l()(), r['ɵeld'](16, 0, null, null, 4, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](17, 0, null, null, 3, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](18, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](19, 0, null, null, 1, 'span', [[
                            'class',
                            'label label-xl label-inline label-light-warning'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['Suplier'])),
                        (l()(), r['ɵeld'](21, 0, null, null, 4, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](22, 0, null, null, 3, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](23, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](24, 0, null, null, 1, 'span', [[
                            'class',
                            'label label-xl label-inline label-light-primary'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['Member'])),
                        (l()(), r['ɵeld'](26, 0, null, null, 4, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](27, 0, null, null, 3, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](28, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](29, 0, null, null, 1, 'span', [[
                            'class',
                            'label label-xl label-inline label-light-dark'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['Staff'])),
                        (l()(), r['ɵeld'](31, 0, null, null, 0, 'li', [[
                            'class',
                            'navi-separator mt-3 opacity-70'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](32, 0, null, null, 3, 'li', [[
                            'class',
                            'navi-footer py-4'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](33, 0, null, null, 2, 'a', [[
                            'class',
                            'btn btn-clean font-weight-bold btn-sm cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](34, 0, null, null, 0, 'i', [[
                            'class',
                            'ki ki-plus icon-sm'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' Add new ']))
                    ], null, null);
                }
                var ol = function () {
                    function l(n, e) {
                        d(this, l), this.layout = n, this.subheader = e, this.subheaderCSSClasses = '', this.subheaderContainerCSSClasses = '', this.subheaderMobileToggle = !1, this.subheaderDisplayDesc = !1, this.subheaderDisplayDaterangepicker = !1, this.title$ = this.subheader.titleSubject.asObservable(), this.breadcrumbs$ = this.subheader.breadCrumbsSubject.asObservable(), this.description$ = this.subheader.descriptionSubject.asObservable();
                    }
                    return f(l, [{
                        key: 'ngOnInit',
                        value: function () {
                            this.subheaderCSSClasses = this.layout.getStringCSSClasses('subheader'), this.subheaderContainerCSSClasses = this.layout.getStringCSSClasses('subheader_container'), this.subheaderMobileToggle = this.layout.getProp('subheader.mobileToggle'), this.subheaderDisplayDesc = this.layout.getProp('subheader.displayDesc'), this.subheaderDisplayDaterangepicker = this.layout.getProp('subheader.displayDaterangepicker');
                        }
                    }]), l;
                }(), al = r['ɵcrt']({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });
                function rl(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 1, 'button', [
                            [
                                'class',
                                'burger-icon burger-icon-left mr-4 d-inline-block d-lg-none'
                            ],
                            [
                                'id',
                                'kt_subheader_mobile_toggle'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵeld'](2, 0, null, null, 0, 'span', [], null, null, null, null, null))
                    ], null, null);
                }
                function sl(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 1, 'small', [], null, null, null, null, null)),
                        (l()(), r['ɵted'](2, null, [
                            '',
                            ''
                        ]))
                    ], null, function (l, n) {
                        l(n, 2, 0, n.context.ngIf);
                    });
                }
                function dl(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 3, null, null, null, null, null, null, null)),
                        (l()(), r['ɵand'](16777216, null, null, 2, null, sl)),
                        r['ɵdid'](2, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        (l()(), r['ɵand'](0, null, null, 0))
                    ], function (l, n) {
                        var e = n.component;
                        l(n, 2, 0, r['ɵunv'](n, 2, 0, r['ɵnov'](n, 3).transform(e.description$)));
                    }, null);
                }
                function cl(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 4, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 3, 'h5', [[
                            'class',
                            'text-dark font-weight-bold mt-2 mb-2 mr-5'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](2, null, [
                            ' ',
                            ' '
                        ])),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, dl)),
                        r['ɵdid'](4, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
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
                function fl(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 5, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 4, 'a', [
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
                        (l()(), r['ɵeld'](2, 0, null, null, 1, 'span', [
                            [
                                'class',
                                'text-muted font-weight-bold mr-2'
                            ],
                            [
                                'id',
                                'kt_dashboard_daterangepicker_title'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['Today'])),
                        (l()(), r['ɵeld'](4, 0, null, null, 1, 'span', [
                            [
                                'class',
                                'text-primary font-weight-bolder'
                            ],
                            [
                                'id',
                                'kt_dashboard_daterangepicker_date'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['Aug 16']))
                    ], null, null);
                }
                function pl(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 40, 'div', [
                            [
                                'class',
                                'subheader py-2 py-lg-6'
                            ],
                            [
                                'id',
                                'kt_subheader'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵdid'](1, 278528, null, 0, h.NgClass, [
                            r.IterableDiffers,
                            r.KeyValueDiffers,
                            r.ElementRef,
                            r.Renderer2
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
                        (l()(), r['ɵeld'](2, 0, null, null, 38, 'div', [[
                            'class',
                            'd-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap'
                        ]], null, null, null, null, null)),
                        r['ɵdid'](3, 278528, null, 0, h.NgClass, [
                            r.IterableDiffers,
                            r.KeyValueDiffers,
                            r.ElementRef,
                            r.Renderer2
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
                        (l()(), r['ɵeld'](4, 0, null, null, 10, 'div', [[
                            'class',
                            'd-flex align-items-center flex-wrap mr-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, rl)),
                        r['ɵdid'](6, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵand'](16777216, null, null, 2, null, cl)),
                        r['ɵdid'](8, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        (l()(), r['ɵeld'](10, 0, null, null, 0, 'div', [[
                            'class',
                            'subheader-separator subheader-separator-ver mt-2 mb-2 mr-4 bg-gray-200'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](11, 0, null, null, 1, 'span', [[
                            'class',
                            'text-muted font-weight-bold mr-4'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['#XRS-45670'])),
                        (l()(), r['ɵeld'](13, 0, null, null, 1, 'a', [
                            [
                                'class',
                                'btn btn-light-primary font-weight-bolder btn-sm'
                            ],
                            [
                                'href',
                                '#'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' Add New '])),
                        (l()(), r['ɵeld'](15, 0, null, null, 10, 'div', [[
                            'class',
                            'd-flex align-items-center flex-wrap'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](16, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-bg-white btn-icon-info btn-hover-primary btn-icon mr-3 my-2 my-lg-0 cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](17, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-file icon-md'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](18, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-bg-white btn-icon-danger btn-hover-primary btn-icon mr-3 my-2 my-lg-0 cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](19, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon-download-1 icon-md'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](20, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-bg-white btn-icon-success btn-hover-primary btn-icon mr-3 my-2 my-lg-0 cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](21, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-fax icon-md'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](22, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-bg-white btn-icon-warning btn-hover-primary btn-icon mr-3 my-2 my-lg-0 cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](23, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-settings icon-md'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, fl)),
                        r['ɵdid'](25, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵeld'](26, 0, null, null, 14, 'div', [
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
                        r['ɵdid'](27, 1720320, null, 2, V.v, [
                            r.ChangeDetectorRef,
                            V.x,
                            h.DOCUMENT,
                            r.NgZone,
                            r.ElementRef,
                            r.Renderer2,
                            [
                                2,
                                V.K
                            ]
                        ], {
                            placement: [
                                0,
                                'placement'
                            ]
                        }, null),
                        r['ɵqud'](603979776, 1, { _menu: 0 }),
                        r['ɵqud'](603979776, 2, { _anchor: 0 }),
                        (l()(), r['ɵeld'](30, 0, null, null, 5, 'a', [
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
                            var t = !0;
                            return 'click' === n && (t = !1 !== r['ɵnov'](l, 31).dropdown.toggle() && t), 'keydown.ArrowUp' === n && (t = !1 !== r['ɵnov'](l, 31).dropdown.onKeyDown(e) && t), 'keydown.ArrowDown' === n && (t = !1 !== r['ɵnov'](l, 31).dropdown.onKeyDown(e) && t), 'keydown.Home' === n && (t = !1 !== r['ɵnov'](l, 31).dropdown.onKeyDown(e) && t), 'keydown.End' === n && (t = !1 !== r['ɵnov'](l, 31).dropdown.onKeyDown(e) && t), 'keydown.Tab' === n && (t = !1 !== r['ɵnov'](l, 31).dropdown.onKeyDown(e) && t), 'keydown.Shift.Tab' === n && (t = !1 !== r['ɵnov'](l, 31).dropdown.onKeyDown(e) && t), t;
                        }, null, null)),
                        r['ɵdid'](31, 16384, null, 0, V.A, [
                            V.v,
                            r.ElementRef
                        ], null, null),
                        r['ɵprd'](2048, [[
                            2,
                            4
                        ]], V.w, null, [V.A]),
                        (l()(), r['ɵeld'](33, 16777216, null, null, 2, 'span', [
                            [
                                'cacheSVG',
                                'true'
                            ],
                            [
                                'class',
                                'svg-icon svg-icon-md'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵprd'](512, null, p.SVGCacheService, p.SVGCacheService, [
                            [
                                2,
                                h.APP_BASE_HREF
                            ],
                            [
                                2,
                                h.PlatformLocation
                            ],
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            m.HttpClient,
                            m.HttpBackend,
                            r.RendererFactory2
                        ]),
                        r['ɵdid'](35, 737280, null, 0, v.InlineSVGDirective, [
                            r.ElementRef,
                            r.ViewContainerRef,
                            r.ComponentFactoryResolver,
                            p.SVGCacheService,
                            r.Renderer2,
                            b.InlineSVGService,
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            r.PLATFORM_ID
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
                        (l()(), r['ɵeld'](36, 0, null, null, 4, 'div', [
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
                            var t = !0;
                            return 'keydown.ArrowUp' === n && (t = !1 !== r['ɵnov'](l, 37).dropdown.onKeyDown(e) && t), 'keydown.ArrowDown' === n && (t = !1 !== r['ɵnov'](l, 37).dropdown.onKeyDown(e) && t), 'keydown.Home' === n && (t = !1 !== r['ɵnov'](l, 37).dropdown.onKeyDown(e) && t), 'keydown.End' === n && (t = !1 !== r['ɵnov'](l, 37).dropdown.onKeyDown(e) && t), 'keydown.Enter' === n && (t = !1 !== r['ɵnov'](l, 37).dropdown.onKeyDown(e) && t), 'keydown.Space' === n && (t = !1 !== r['ɵnov'](l, 37).dropdown.onKeyDown(e) && t), 'keydown.Tab' === n && (t = !1 !== r['ɵnov'](l, 37).dropdown.onKeyDown(e) && t), 'keydown.Shift.Tab' === n && (t = !1 !== r['ɵnov'](l, 37).dropdown.onKeyDown(e) && t), t;
                        }, null, null)),
                        r['ɵdid'](37, 16384, [[
                            1,
                            4
                        ]], 1, V.y, [
                            V.v,
                            r.ElementRef
                        ], null, null),
                        r['ɵqud'](603979776, 3, { menuItems: 1 }),
                        (l()(), r['ɵeld'](39, 0, null, null, 1, 'app-dropdown-menu1', [], null, null, null, il, ul)),
                        r['ɵdid'](40, 114688, null, 0, tl, [], null, null)
                    ], function (l, n) {
                        var e = n.component;
                        l(n, 1, 0, 'subheader py-2 py-lg-6', e.subheaderCSSClasses), l(n, 3, 0, 'd-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap', e.subheaderContainerCSSClasses), l(n, 6, 0, e.subheaderMobileToggle), l(n, 8, 0, r['ɵunv'](n, 8, 0, r['ɵnov'](n, 9).transform(e.title$))), l(n, 25, 0, e.subheaderDisplayDaterangepicker), l(n, 27, 0, 'bottom-right'), l(n, 35, 0, './assets/media/svg/icons/General/Settings-2.svg', 'true'), l(n, 40, 0);
                    }, function (l, n) {
                        l(n, 26, 0, r['ɵnov'](n, 27).isOpen()), l(n, 30, 0, r['ɵnov'](n, 31).dropdown.isOpen()), l(n, 36, 0, !0, r['ɵnov'](n, 37).dropdown.isOpen(), r['ɵnov'](n, 37).placement);
                    });
                }
                var hl = function () {
                    function l() {
                        d(this, l);
                    }
                    return f(l, [{
                        key: 'ngOnInit',
                        value: function () {
                        }
                    }]), l;
                }(), gl = r['ɵcrt']({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });
                function ml(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 49, 'ul', [[
                            'class',
                            'navi navi-hover py-5'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 5, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](2, 0, null, null, 4, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](3, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](4, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-drop'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](5, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['New Group'])),
                        (l()(), r['ɵeld'](7, 0, null, null, 5, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](8, 0, null, null, 4, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](9, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](10, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-list-3'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](11, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['Contacts'])),
                        (l()(), r['ɵeld'](13, 0, null, null, 8, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](14, 0, null, null, 7, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](15, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](16, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-rocket-1'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](17, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['Groups'])),
                        (l()(), r['ɵeld'](19, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-link-badge'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](20, 0, null, null, 1, 'span', [[
                            'class',
                            'label label-light-primary label-inline font-weight-bold'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['new'])),
                        (l()(), r['ɵeld'](22, 0, null, null, 5, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](23, 0, null, null, 4, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](24, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](25, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-bell-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](26, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['Calls'])),
                        (l()(), r['ɵeld'](28, 0, null, null, 5, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](29, 0, null, null, 4, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](30, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](31, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-gear'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](32, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['Settings'])),
                        (l()(), r['ɵeld'](34, 0, null, null, 0, 'li', [[
                            'class',
                            'navi-separator my-3'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](35, 0, null, null, 5, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](36, 0, null, null, 4, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](37, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](38, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-magnifier-tool'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](39, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['Help'])),
                        (l()(), r['ɵeld'](41, 0, null, null, 8, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](42, 0, null, null, 7, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](43, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](44, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-bell-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](45, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['Privacy'])),
                        (l()(), r['ɵeld'](47, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-link-badge'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](48, 0, null, null, 1, 'span', [[
                            'class',
                            'label label-light-danger label-rounded font-weight-bold'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['5']))
                    ], null, null);
                }
                var vl = function () {
                    function l(n, e) {
                        d(this, l), this.layout = n, this.subheader = e, this.subheaderCSSClasses = '', this.subheaderContainerCSSClasses = '', this.subheaderMobileToggle = !1, this.subheaderDisplayDesc = !1, this.subheaderDisplayDaterangepicker = !1, this.title$ = this.subheader.titleSubject.asObservable(), this.breadcrumbs$ = this.subheader.breadCrumbsSubject.asObservable(), this.description$ = this.subheader.descriptionSubject.asObservable();
                    }
                    return f(l, [{
                        key: 'ngOnInit',
                        value: function () {
                            this.subheaderCSSClasses = this.layout.getStringCSSClasses('subheader'), this.subheaderContainerCSSClasses = this.layout.getStringCSSClasses('subheader_container'), this.subheaderMobileToggle = this.layout.getProp('subheader.mobileToggle'), this.subheaderDisplayDesc = this.layout.getProp('subheader.displayDesc'), this.subheaderDisplayDaterangepicker = this.layout.getProp('subheader.displayDaterangepicker');
                        }
                    }]), l;
                }(), bl = r['ɵcrt']({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });
                function yl(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 1, 'button', [
                            [
                                'class',
                                'burger-icon burger-icon-left mr-4 d-inline-block d-lg-none'
                            ],
                            [
                                'id',
                                'kt_subheader_mobile_toggle'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵeld'](2, 0, null, null, 0, 'span', [], null, null, null, null, null))
                    ], null, null);
                }
                function wl(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 1, 'small', [], null, null, null, null, null)),
                        (l()(), r['ɵted'](2, null, [
                            '',
                            ''
                        ]))
                    ], null, function (l, n) {
                        l(n, 2, 0, n.context.ngIf);
                    });
                }
                function kl(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 3, null, null, null, null, null, null, null)),
                        (l()(), r['ɵand'](16777216, null, null, 2, null, wl)),
                        r['ɵdid'](2, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        (l()(), r['ɵand'](0, null, null, 0))
                    ], function (l, n) {
                        var e = n.component;
                        l(n, 2, 0, r['ɵunv'](n, 2, 0, r['ɵnov'](n, 3).transform(e.description$)));
                    }, null);
                }
                function Sl(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 4, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 3, 'h5', [[
                            'class',
                            'text-dark font-weight-bold mt-2 mb-2 mr-5'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](2, null, [
                            ' ',
                            ' '
                        ])),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, kl)),
                        r['ɵdid'](4, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
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
                function Cl(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 5, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 4, 'a', [
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
                        (l()(), r['ɵeld'](2, 0, null, null, 1, 'span', [
                            [
                                'class',
                                'text-muted font-size-base font-weight-bold mr-2'
                            ],
                            [
                                'id',
                                'kt_dashboard_daterangepicker_title'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['Hoy'])),
                        (l()(), r['ɵeld'](4, 0, null, null, 1, 'span', [
                            [
                                'class',
                                'text-primary font-size-base font-weight-bolder'
                            ],
                            [
                                'id',
                                'kt_dashboard_daterangepicker_date'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['Aug 16']))
                    ], null, null);
                }
                function Rl(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 38, 'div', [
                            [
                                'class',
                                'subheader py-2 py-lg-4'
                            ],
                            [
                                'id',
                                'kt_subheader'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵdid'](1, 278528, null, 0, h.NgClass, [
                            r.IterableDiffers,
                            r.KeyValueDiffers,
                            r.ElementRef,
                            r.Renderer2
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
                        (l()(), r['ɵeld'](2, 0, null, null, 36, 'div', [[
                            'class',
                            'd-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap'
                        ]], null, null, null, null, null)),
                        r['ɵdid'](3, 278528, null, 0, h.NgClass, [
                            r.IterableDiffers,
                            r.KeyValueDiffers,
                            r.ElementRef,
                            r.Renderer2
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
                        (l()(), r['ɵeld'](4, 0, null, null, 10, 'div', [[
                            'class',
                            'd-flex align-items-center flex-wrap mr-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, yl)),
                        r['ɵdid'](6, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵand'](16777216, null, null, 2, null, Sl)),
                        r['ɵdid'](8, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        (l()(), r['ɵeld'](10, 0, null, null, 0, 'div', [[
                            'class',
                            'subheader-separator subheader-separator-ver mt-2 mb-2 mr-4 bg-gray-200'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](11, 0, null, null, 1, 'span', [[
                            'class',
                            'text-muted font-weight-bold mr-4'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['#XRS-45670'])),
                        (l()(), r['ɵeld'](13, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-light-warning font-weight-bolder btn-sm cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' Add New '])),
                        (l()(), r['ɵeld'](15, 0, null, null, 23, 'div', [[
                            'class',
                            'd-flex align-items-center'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](16, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-clean btn-sm font-weight-bold font-size-base mr-1 cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' Today '])),
                        (l()(), r['ɵeld'](18, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-clean btn-sm font-weight-bold font-size-base mr-1 cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' Month '])),
                        (l()(), r['ɵeld'](20, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-clean btn-sm font-weight-bold font-size-base mr-1 cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' Year '])),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, Cl)),
                        r['ɵdid'](23, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵeld'](24, 0, null, null, 14, 'div', [
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
                        r['ɵdid'](25, 1720320, null, 2, V.v, [
                            r.ChangeDetectorRef,
                            V.x,
                            h.DOCUMENT,
                            r.NgZone,
                            r.ElementRef,
                            r.Renderer2,
                            [
                                2,
                                V.K
                            ]
                        ], {
                            placement: [
                                0,
                                'placement'
                            ]
                        }, null),
                        r['ɵqud'](603979776, 1, { _menu: 0 }),
                        r['ɵqud'](603979776, 2, { _anchor: 0 }),
                        (l()(), r['ɵeld'](28, 0, null, null, 5, 'a', [
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
                            var t = !0;
                            return 'click' === n && (t = !1 !== r['ɵnov'](l, 29).dropdown.toggle() && t), 'keydown.ArrowUp' === n && (t = !1 !== r['ɵnov'](l, 29).dropdown.onKeyDown(e) && t), 'keydown.ArrowDown' === n && (t = !1 !== r['ɵnov'](l, 29).dropdown.onKeyDown(e) && t), 'keydown.Home' === n && (t = !1 !== r['ɵnov'](l, 29).dropdown.onKeyDown(e) && t), 'keydown.End' === n && (t = !1 !== r['ɵnov'](l, 29).dropdown.onKeyDown(e) && t), 'keydown.Tab' === n && (t = !1 !== r['ɵnov'](l, 29).dropdown.onKeyDown(e) && t), 'keydown.Shift.Tab' === n && (t = !1 !== r['ɵnov'](l, 29).dropdown.onKeyDown(e) && t), t;
                        }, null, null)),
                        r['ɵdid'](29, 16384, null, 0, V.A, [
                            V.v,
                            r.ElementRef
                        ], null, null),
                        r['ɵprd'](2048, [[
                            2,
                            4
                        ]], V.w, null, [V.A]),
                        (l()(), r['ɵeld'](31, 16777216, null, null, 2, 'span', [
                            [
                                'cacheSVG',
                                'true'
                            ],
                            [
                                'class',
                                'svg-icon svg-icon-success svg-icon-lg'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵprd'](512, null, p.SVGCacheService, p.SVGCacheService, [
                            [
                                2,
                                h.APP_BASE_HREF
                            ],
                            [
                                2,
                                h.PlatformLocation
                            ],
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            m.HttpClient,
                            m.HttpBackend,
                            r.RendererFactory2
                        ]),
                        r['ɵdid'](33, 737280, null, 0, v.InlineSVGDirective, [
                            r.ElementRef,
                            r.ViewContainerRef,
                            r.ComponentFactoryResolver,
                            p.SVGCacheService,
                            r.Renderer2,
                            b.InlineSVGService,
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            r.PLATFORM_ID
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
                        (l()(), r['ɵeld'](34, 0, null, null, 4, 'div', [
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
                            var t = !0;
                            return 'keydown.ArrowUp' === n && (t = !1 !== r['ɵnov'](l, 35).dropdown.onKeyDown(e) && t), 'keydown.ArrowDown' === n && (t = !1 !== r['ɵnov'](l, 35).dropdown.onKeyDown(e) && t), 'keydown.Home' === n && (t = !1 !== r['ɵnov'](l, 35).dropdown.onKeyDown(e) && t), 'keydown.End' === n && (t = !1 !== r['ɵnov'](l, 35).dropdown.onKeyDown(e) && t), 'keydown.Enter' === n && (t = !1 !== r['ɵnov'](l, 35).dropdown.onKeyDown(e) && t), 'keydown.Space' === n && (t = !1 !== r['ɵnov'](l, 35).dropdown.onKeyDown(e) && t), 'keydown.Tab' === n && (t = !1 !== r['ɵnov'](l, 35).dropdown.onKeyDown(e) && t), 'keydown.Shift.Tab' === n && (t = !1 !== r['ɵnov'](l, 35).dropdown.onKeyDown(e) && t), t;
                        }, null, null)),
                        r['ɵdid'](35, 16384, [[
                            1,
                            4
                        ]], 1, V.y, [
                            V.v,
                            r.ElementRef
                        ], null, null),
                        r['ɵqud'](603979776, 3, { menuItems: 1 }),
                        (l()(), r['ɵeld'](37, 0, null, null, 1, 'app-dropdown-menu4', [], null, null, null, ml, gl)),
                        r['ɵdid'](38, 114688, null, 0, hl, [], null, null)
                    ], function (l, n) {
                        var e = n.component;
                        l(n, 1, 0, 'subheader py-2 py-lg-4', e.subheaderCSSClasses), l(n, 3, 0, 'd-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap', e.subheaderContainerCSSClasses), l(n, 6, 0, e.subheaderMobileToggle), l(n, 8, 0, r['ɵunv'](n, 8, 0, r['ɵnov'](n, 9).transform(e.title$))), l(n, 23, 0, e.subheaderDisplayDaterangepicker), l(n, 25, 0, 'bottom-right'), l(n, 33, 0, './assets/media/svg/icons/Files/File-plus.svg', 'true'), l(n, 38, 0);
                    }, function (l, n) {
                        l(n, 24, 0, r['ɵnov'](n, 25).isOpen()), l(n, 28, 0, r['ɵnov'](n, 29).dropdown.isOpen()), l(n, 34, 0, !0, r['ɵnov'](n, 35).dropdown.isOpen(), r['ɵnov'](n, 35).placement);
                    });
                }
                var Dl = o('1/8H'), Il = o('kJV1'), xl = function () {
                    function l(n, e) {
                        d(this, l), this.layout = n, this.subheader = e, this.subheaderCSSClasses = '', this.subheaderContainerCSSClasses = '', this.subheaderMobileToggle = !1, this.subheaderDisplayDesc = !1, this.subheaderDisplayDaterangepicker = !1, this.title$ = this.subheader.titleSubject.asObservable(), this.breadcrumbs$ = this.subheader.breadCrumbsSubject.asObservable(), this.description$ = this.subheader.descriptionSubject.asObservable();
                    }
                    return f(l, [{
                        key: 'ngOnInit',
                        value: function () {
                            this.subheaderCSSClasses = this.layout.getStringCSSClasses('subheader'), this.subheaderContainerCSSClasses = this.layout.getStringCSSClasses('subheader_container'), this.subheaderMobileToggle = this.layout.getProp('subheader.mobileToggle'), this.subheaderDisplayDesc = this.layout.getProp('subheader.displayDesc'), this.subheaderDisplayDaterangepicker = this.layout.getProp('subheader.displayDaterangepicker');
                        }
                    }]), l;
                }(), El = r['ɵcrt']({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });
                function Al(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 1, 'button', [
                            [
                                'class',
                                'burger-icon burger-icon-left mr-4 d-inline-block d-lg-none'
                            ],
                            [
                                'id',
                                'kt_subheader_mobile_toggle'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵeld'](2, 0, null, null, 0, 'span', [], null, null, null, null, null))
                    ], null, null);
                }
                function Tl(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 8, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 7, 'a', [
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
                        (l()(), r['ɵeld'](2, 0, null, null, 1, 'span', [
                            [
                                'class',
                                'text-muted font-weight-bold mr-2'
                            ],
                            [
                                'id',
                                'kt_dashboard_daterangepicker_title'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['Today'])),
                        (l()(), r['ɵeld'](4, 0, null, null, 1, 'span', [
                            [
                                'class',
                                'text-primary font-weight-bold'
                            ],
                            [
                                'id',
                                'kt_dashboard_daterangepicker_date'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['Aug 16'])),
                        (l()(), r['ɵeld'](6, 16777216, null, null, 2, 'span', [
                            [
                                'cacheSVG',
                                'true'
                            ],
                            [
                                'class',
                                'svg-icon svg-icon-sm svg-icon-primary ml-1'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵprd'](512, null, p.SVGCacheService, p.SVGCacheService, [
                            [
                                2,
                                h.APP_BASE_HREF
                            ],
                            [
                                2,
                                h.PlatformLocation
                            ],
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            m.HttpClient,
                            m.HttpBackend,
                            r.RendererFactory2
                        ]),
                        r['ɵdid'](8, 737280, null, 0, v.InlineSVGDirective, [
                            r.ElementRef,
                            r.ViewContainerRef,
                            r.ComponentFactoryResolver,
                            p.SVGCacheService,
                            r.Renderer2,
                            b.InlineSVGService,
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            r.PLATFORM_ID
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
                function Vl(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 41, 'div', [
                            [
                                'class',
                                'subheader py-2 py-lg-4'
                            ],
                            [
                                'id',
                                'kt_subheader'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵdid'](1, 278528, null, 0, h.NgClass, [
                            r.IterableDiffers,
                            r.KeyValueDiffers,
                            r.ElementRef,
                            r.Renderer2
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
                        (l()(), r['ɵeld'](2, 0, null, null, 39, 'div', [[
                            'class',
                            'd-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap'
                        ]], null, null, null, null, null)),
                        r['ɵdid'](3, 278528, null, 0, h.NgClass, [
                            r.IterableDiffers,
                            r.KeyValueDiffers,
                            r.ElementRef,
                            r.Renderer2
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
                        (l()(), r['ɵeld'](4, 0, null, null, 13, 'div', [[
                            'class',
                            'd-flex align-items-center flex-wrap mr-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, Al)),
                        r['ɵdid'](6, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵeld'](7, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-light-danger font-weight-bolder btn-sm mr-2 cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' Reports '])),
                        (l()(), r['ɵeld'](9, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-light-success font-weight-bolder btn-sm mr-2 cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' Import '])),
                        (l()(), r['ɵeld'](11, 0, null, null, 6, 'div', [[
                            'class',
                            'input-group input-group-sm input-group-solid max-w-175px'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](12, 0, null, null, 0, 'input', [
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
                        (l()(), r['ɵeld'](13, 0, null, null, 4, 'div', [[
                            'class',
                            'input-group-append'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](14, 0, null, null, 3, 'span', [[
                            'class',
                            'input-group-text'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](15, 16777216, null, null, 2, 'span', [
                            [
                                'cacheSVG',
                                'true'
                            ],
                            [
                                'class',
                                'svg-icon svg-icon-md'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵprd'](512, null, p.SVGCacheService, p.SVGCacheService, [
                            [
                                2,
                                h.APP_BASE_HREF
                            ],
                            [
                                2,
                                h.PlatformLocation
                            ],
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            m.HttpClient,
                            m.HttpBackend,
                            r.RendererFactory2
                        ]),
                        r['ɵdid'](17, 737280, null, 0, v.InlineSVGDirective, [
                            r.ElementRef,
                            r.ViewContainerRef,
                            r.ComponentFactoryResolver,
                            p.SVGCacheService,
                            r.Renderer2,
                            b.InlineSVGService,
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            r.PLATFORM_ID
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
                        (l()(), r['ɵeld'](18, 0, null, null, 23, 'div', [[
                            'class',
                            'd-flex align-items-center'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, Tl)),
                        r['ɵdid'](20, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵeld'](21, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-light btn-hover-primary btn-sm btn-icon mr-2 cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](22, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-file text-muted'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](23, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-light btn-hover-primary btn-sm btn-icon mr-2 cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](24, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon-download-1 text-muted'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](25, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-light btn-hover-primary btn-sm btn-icon mr-2 cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](26, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-fax text-muted'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](27, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-light btn-hover-primary btn-sm btn-icon mr-2 cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](28, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-settings text-muted'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](29, 0, null, null, 12, 'div', [
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
                        r['ɵdid'](30, 1720320, null, 2, V.v, [
                            r.ChangeDetectorRef,
                            V.x,
                            h.DOCUMENT,
                            r.NgZone,
                            r.ElementRef,
                            r.Renderer2,
                            [
                                2,
                                V.K
                            ]
                        ], {
                            placement: [
                                0,
                                'placement'
                            ]
                        }, null),
                        r['ɵqud'](603979776, 1, { _menu: 0 }),
                        r['ɵqud'](603979776, 2, { _anchor: 0 }),
                        (l()(), r['ɵeld'](33, 0, null, null, 3, 'a', [
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
                            var t = !0;
                            return 'click' === n && (t = !1 !== r['ɵnov'](l, 34).dropdown.toggle() && t), 'keydown.ArrowUp' === n && (t = !1 !== r['ɵnov'](l, 34).dropdown.onKeyDown(e) && t), 'keydown.ArrowDown' === n && (t = !1 !== r['ɵnov'](l, 34).dropdown.onKeyDown(e) && t), 'keydown.Home' === n && (t = !1 !== r['ɵnov'](l, 34).dropdown.onKeyDown(e) && t), 'keydown.End' === n && (t = !1 !== r['ɵnov'](l, 34).dropdown.onKeyDown(e) && t), 'keydown.Tab' === n && (t = !1 !== r['ɵnov'](l, 34).dropdown.onKeyDown(e) && t), 'keydown.Shift.Tab' === n && (t = !1 !== r['ɵnov'](l, 34).dropdown.onKeyDown(e) && t), t;
                        }, null, null)),
                        r['ɵdid'](34, 16384, null, 0, V.A, [
                            V.v,
                            r.ElementRef
                        ], null, null),
                        r['ɵprd'](2048, [[
                            2,
                            4
                        ]], V.w, null, [V.A]),
                        (l()(), r['ɵeld'](36, 0, null, null, 0, 'i', [[
                            'class',
                            'ki ki-plus icon-1x'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](37, 0, null, null, 4, 'div', [
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
                            var t = !0;
                            return 'keydown.ArrowUp' === n && (t = !1 !== r['ɵnov'](l, 38).dropdown.onKeyDown(e) && t), 'keydown.ArrowDown' === n && (t = !1 !== r['ɵnov'](l, 38).dropdown.onKeyDown(e) && t), 'keydown.Home' === n && (t = !1 !== r['ɵnov'](l, 38).dropdown.onKeyDown(e) && t), 'keydown.End' === n && (t = !1 !== r['ɵnov'](l, 38).dropdown.onKeyDown(e) && t), 'keydown.Enter' === n && (t = !1 !== r['ɵnov'](l, 38).dropdown.onKeyDown(e) && t), 'keydown.Space' === n && (t = !1 !== r['ɵnov'](l, 38).dropdown.onKeyDown(e) && t), 'keydown.Tab' === n && (t = !1 !== r['ɵnov'](l, 38).dropdown.onKeyDown(e) && t), 'keydown.Shift.Tab' === n && (t = !1 !== r['ɵnov'](l, 38).dropdown.onKeyDown(e) && t), t;
                        }, null, null)),
                        r['ɵdid'](38, 16384, [[
                            1,
                            4
                        ]], 1, V.y, [
                            V.v,
                            r.ElementRef
                        ], null, null),
                        r['ɵqud'](603979776, 3, { menuItems: 1 }),
                        (l()(), r['ɵeld'](40, 0, null, null, 1, 'app-dropdown-menu2', [], null, null, null, Dl.b, Dl.a)),
                        r['ɵdid'](41, 638976, null, 0, Il.a, [], null, null)
                    ], function (l, n) {
                        var e = n.component;
                        l(n, 1, 0, 'subheader py-2 py-lg-4', e.subheaderCSSClasses), l(n, 3, 0, 'd-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap', e.subheaderContainerCSSClasses), l(n, 6, 0, e.subheaderMobileToggle), l(n, 17, 0, './assets/media/svg/icons/General/Search.svg', 'true'), l(n, 20, 0, e.subheaderDisplayDaterangepicker), l(n, 30, 0, 'bottom-right'), l(n, 41, 0);
                    }, function (l, n) {
                        l(n, 29, 0, r['ɵnov'](n, 30).isOpen()), l(n, 33, 0, r['ɵnov'](n, 34).dropdown.isOpen()), l(n, 37, 0, !0, r['ɵnov'](n, 38).dropdown.isOpen(), r['ɵnov'](n, 38).placement);
                    });
                }
                var _l = function () {
                    function l() {
                        d(this, l);
                    }
                    return f(l, [{
                        key: 'ngOnInit',
                        value: function () {
                        }
                    }]), l;
                }(), Ll = r['ɵcrt']({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });
                function Ol(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 41, 'ul', [[
                            'class',
                            'navi'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 3, 'li', [[
                            'class',
                            'navi-header font-weight-bold py-5'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](2, 0, null, null, 1, 'span', [[
                            'class',
                            'font-size-lg'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['Add New:'])),
                        (l()(), r['ɵeld'](4, 0, null, null, 0, 'i', [
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
                        (l()(), r['ɵeld'](5, 0, null, null, 0, 'li', [[
                            'class',
                            'navi-separator mb-3 opacity-70'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](6, 0, null, null, 5, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](7, 0, null, null, 4, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](8, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](9, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-shopping-cart-1'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](10, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['Order'])),
                        (l()(), r['ɵeld'](12, 0, null, null, 8, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](13, 0, null, null, 7, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](14, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](15, 0, null, null, 0, 'i', [[
                            'class',
                            'navi-icon flaticon2-calendar-8'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](16, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['Members'])),
                        (l()(), r['ɵeld'](18, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-label'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](19, 0, null, null, 1, 'span', [[
                            'class',
                            'label label-light-danger label-rounded font-weight-bold'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['3'])),
                        (l()(), r['ɵeld'](21, 0, null, null, 5, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](22, 0, null, null, 4, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](23, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](24, 0, null, null, 0, 'i', [[
                            'class',
                            'navi-icon flaticon2-telegram-logo'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](25, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['Project'])),
                        (l()(), r['ɵeld'](27, 0, null, null, 8, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](28, 0, null, null, 7, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](29, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](30, 0, null, null, 0, 'i', [[
                            'class',
                            'navi-icon flaticon2-new-email'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](31, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['Record'])),
                        (l()(), r['ɵeld'](33, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-label'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](34, 0, null, null, 1, 'span', [[
                            'class',
                            'label label-light-success label-rounded font-weight-bold'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['5'])),
                        (l()(), r['ɵeld'](36, 0, null, null, 0, 'li', [[
                            'class',
                            'navi-separator mt-3 opacity-70'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](37, 0, null, null, 4, 'li', [[
                            'class',
                            'navi-footer pt-5 pb-4'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](38, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-light-primary font-weight-bolder btn-sm cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['More options'])),
                        (l()(), r['ɵeld'](40, 0, null, null, 1, 'a', [
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
                        (l()(), r['ɵted'](-1, null, ['Learn more']))
                    ], null, null);
                }
                var Pl = function () {
                    function l(n, e) {
                        d(this, l), this.layout = n, this.subheader = e, this.subheaderCSSClasses = '', this.subheaderContainerCSSClasses = '', this.subheaderMobileToggle = !1, this.subheaderDisplayDesc = !1, this.subheaderDisplayDaterangepicker = !1, this.title$ = this.subheader.titleSubject.asObservable(), this.breadcrumbs$ = this.subheader.breadCrumbsSubject.asObservable(), this.description$ = this.subheader.descriptionSubject.asObservable();
                    }
                    return f(l, [{
                        key: 'ngOnInit',
                        value: function () {
                            this.subheaderCSSClasses = this.layout.getStringCSSClasses('subheader'), this.subheaderContainerCSSClasses = this.layout.getStringCSSClasses('subheader_container'), this.subheaderMobileToggle = this.layout.getProp('subheader.mobileToggle'), this.subheaderDisplayDesc = this.layout.getProp('subheader.displayDesc'), this.subheaderDisplayDaterangepicker = this.layout.getProp('subheader.displayDaterangepicker');
                        }
                    }]), l;
                }(), Ml = r['ɵcrt']({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });
                function Hl(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 1, 'button', [
                            [
                                'class',
                                'burger-icon burger-icon-left mr-4 d-inline-block d-lg-none'
                            ],
                            [
                                'id',
                                'kt_subheader_mobile_toggle'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵeld'](2, 0, null, null, 0, 'span', [], null, null, null, null, null))
                    ], null, null);
                }
                function Gl(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 1, 'h5', [[
                            'class',
                            'text-dark font-weight-bold mt-2 mb-2 mr-5'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](2, null, [
                            ' ',
                            ' '
                        ]))
                    ], null, function (l, n) {
                        l(n, 2, 0, n.context.ngIf);
                    });
                }
                function Bl(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 1, 'span', [
                            [
                                'class',
                                'text-dark-50 font-weight-bold'
                            ],
                            [
                                'id',
                                'kt_subheader_total'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵted'](2, null, [
                            ' ',
                            ''
                        ]))
                    ], null, function (l, n) {
                        l(n, 2, 0, n.context.ngIf);
                    });
                }
                function Nl(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 3, null, null, null, null, null, null, null)),
                        (l()(), r['ɵand'](16777216, null, null, 2, null, Bl)),
                        r['ɵdid'](2, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        (l()(), r['ɵand'](0, null, null, 0))
                    ], function (l, n) {
                        var e = n.component;
                        l(n, 2, 0, r['ɵunv'](n, 2, 0, r['ɵnov'](n, 3).transform(e.description$)));
                    }, null);
                }
                function Fl(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 41, 'div', [
                            [
                                'class',
                                'subheader py-2 py-lg-4'
                            ],
                            [
                                'id',
                                'kt_subheader'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵdid'](1, 278528, null, 0, h.NgClass, [
                            r.IterableDiffers,
                            r.KeyValueDiffers,
                            r.ElementRef,
                            r.Renderer2
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
                        (l()(), r['ɵeld'](2, 0, null, null, 39, 'div', [[
                            'class',
                            'd-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap'
                        ]], null, null, null, null, null)),
                        r['ɵdid'](3, 278528, null, 0, h.NgClass, [
                            r.IterableDiffers,
                            r.KeyValueDiffers,
                            r.ElementRef,
                            r.Renderer2
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
                        (l()(), r['ɵeld'](4, 0, null, null, 21, 'div', [[
                            'class',
                            'd-flex align-items-center flex-wrap mr-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, Hl)),
                        r['ɵdid'](6, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵand'](16777216, null, null, 2, null, Gl)),
                        r['ɵdid'](8, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        (l()(), r['ɵeld'](10, 0, null, null, 0, 'div', [[
                            'class',
                            'subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](11, 0, null, null, 14, 'div', [
                            [
                                'class',
                                'd-flex align-items-center'
                            ],
                            [
                                'id',
                                'kt_subheader_search'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, Nl)),
                        r['ɵdid'](13, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵeld'](14, 0, null, null, 11, 'form', [
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
                            var t = !0;
                            return 'submit' === n && (t = !1 !== r['ɵnov'](l, 16).onSubmit(e) && t), 'reset' === n && (t = !1 !== r['ɵnov'](l, 16).onReset() && t), t;
                        }, null, null)),
                        r['ɵdid'](15, 16384, null, 0, _.C, [], null, null),
                        r['ɵdid'](16, 4210688, null, 0, _.s, [
                            [
                                8,
                                null
                            ],
                            [
                                8,
                                null
                            ]
                        ], null, null),
                        r['ɵprd'](2048, null, _.d, null, [_.s]),
                        r['ɵdid'](18, 16384, null, 0, _.r, [[
                            6,
                            _.d
                        ]], null, null),
                        (l()(), r['ɵeld'](19, 0, null, null, 6, 'div', [
                            [
                                'class',
                                'input-group input-group-sm input-group-solid'
                            ],
                            [
                                'style',
                                'max-width: 175px;'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵeld'](20, 0, null, null, 0, 'input', [
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
                        (l()(), r['ɵeld'](21, 0, null, null, 4, 'div', [[
                            'class',
                            'input-group-append'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](22, 0, null, null, 3, 'span', [[
                            'class',
                            'input-group-text'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](23, 16777216, null, null, 2, 'span', [
                            [
                                'cacheSVG',
                                'true'
                            ],
                            [
                                'class',
                                'svg-icon'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵprd'](512, null, p.SVGCacheService, p.SVGCacheService, [
                            [
                                2,
                                h.APP_BASE_HREF
                            ],
                            [
                                2,
                                h.PlatformLocation
                            ],
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            m.HttpClient,
                            m.HttpBackend,
                            r.RendererFactory2
                        ]),
                        r['ɵdid'](25, 737280, null, 0, v.InlineSVGDirective, [
                            r.ElementRef,
                            r.ViewContainerRef,
                            r.ComponentFactoryResolver,
                            p.SVGCacheService,
                            r.Renderer2,
                            b.InlineSVGService,
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            r.PLATFORM_ID
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
                        (l()(), r['ɵeld'](26, 0, null, null, 15, 'div', [[
                            'class',
                            'd-flex align-items-center'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](27, 0, null, null, 14, 'div', [
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
                        r['ɵdid'](28, 1720320, null, 2, V.v, [
                            r.ChangeDetectorRef,
                            V.x,
                            h.DOCUMENT,
                            r.NgZone,
                            r.ElementRef,
                            r.Renderer2,
                            [
                                2,
                                V.K
                            ]
                        ], {
                            placement: [
                                0,
                                'placement'
                            ]
                        }, null),
                        r['ɵqud'](603979776, 1, { _menu: 0 }),
                        r['ɵqud'](603979776, 2, { _anchor: 0 }),
                        (l()(), r['ɵeld'](31, 0, null, null, 5, 'a', [
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
                            var t = !0;
                            return 'click' === n && (t = !1 !== r['ɵnov'](l, 32).dropdown.toggle() && t), 'keydown.ArrowUp' === n && (t = !1 !== r['ɵnov'](l, 32).dropdown.onKeyDown(e) && t), 'keydown.ArrowDown' === n && (t = !1 !== r['ɵnov'](l, 32).dropdown.onKeyDown(e) && t), 'keydown.Home' === n && (t = !1 !== r['ɵnov'](l, 32).dropdown.onKeyDown(e) && t), 'keydown.End' === n && (t = !1 !== r['ɵnov'](l, 32).dropdown.onKeyDown(e) && t), 'keydown.Tab' === n && (t = !1 !== r['ɵnov'](l, 32).dropdown.onKeyDown(e) && t), 'keydown.Shift.Tab' === n && (t = !1 !== r['ɵnov'](l, 32).dropdown.onKeyDown(e) && t), t;
                        }, null, null)),
                        r['ɵdid'](32, 16384, null, 0, V.A, [
                            V.v,
                            r.ElementRef
                        ], null, null),
                        r['ɵprd'](2048, [[
                            2,
                            4
                        ]], V.w, null, [V.A]),
                        (l()(), r['ɵeld'](34, 16777216, null, null, 2, 'span', [
                            [
                                'cacheSVG',
                                'true'
                            ],
                            [
                                'class',
                                'svg-icon svg-icon-success svg-icon-2x'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵprd'](512, null, p.SVGCacheService, p.SVGCacheService, [
                            [
                                2,
                                h.APP_BASE_HREF
                            ],
                            [
                                2,
                                h.PlatformLocation
                            ],
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            m.HttpClient,
                            m.HttpBackend,
                            r.RendererFactory2
                        ]),
                        r['ɵdid'](36, 737280, null, 0, v.InlineSVGDirective, [
                            r.ElementRef,
                            r.ViewContainerRef,
                            r.ComponentFactoryResolver,
                            p.SVGCacheService,
                            r.Renderer2,
                            b.InlineSVGService,
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            r.PLATFORM_ID
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
                        (l()(), r['ɵeld'](37, 0, null, null, 4, 'div', [
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
                            var t = !0;
                            return 'keydown.ArrowUp' === n && (t = !1 !== r['ɵnov'](l, 38).dropdown.onKeyDown(e) && t), 'keydown.ArrowDown' === n && (t = !1 !== r['ɵnov'](l, 38).dropdown.onKeyDown(e) && t), 'keydown.Home' === n && (t = !1 !== r['ɵnov'](l, 38).dropdown.onKeyDown(e) && t), 'keydown.End' === n && (t = !1 !== r['ɵnov'](l, 38).dropdown.onKeyDown(e) && t), 'keydown.Enter' === n && (t = !1 !== r['ɵnov'](l, 38).dropdown.onKeyDown(e) && t), 'keydown.Space' === n && (t = !1 !== r['ɵnov'](l, 38).dropdown.onKeyDown(e) && t), 'keydown.Tab' === n && (t = !1 !== r['ɵnov'](l, 38).dropdown.onKeyDown(e) && t), 'keydown.Shift.Tab' === n && (t = !1 !== r['ɵnov'](l, 38).dropdown.onKeyDown(e) && t), t;
                        }, null, null)),
                        r['ɵdid'](38, 16384, [[
                            1,
                            4
                        ]], 1, V.y, [
                            V.v,
                            r.ElementRef
                        ], null, null),
                        r['ɵqud'](603979776, 3, { menuItems: 1 }),
                        (l()(), r['ɵeld'](40, 0, null, null, 1, 'app-dropdown-menu3', [], null, null, null, Ol, Ll)),
                        r['ɵdid'](41, 114688, null, 0, _l, [], null, null)
                    ], function (l, n) {
                        var e = n.component;
                        l(n, 1, 0, 'subheader py-2 py-lg-4', e.subheaderCSSClasses), l(n, 3, 0, 'd-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap', e.subheaderContainerCSSClasses), l(n, 6, 0, e.subheaderMobileToggle), l(n, 8, 0, r['ɵunv'](n, 8, 0, r['ɵnov'](n, 9).transform(e.title$))), l(n, 13, 0, e.subheaderDisplayDesc), l(n, 25, 0, './assets/media/svg/icons/General/Search.svg', 'true'), l(n, 28, 0, 'bottom-right'), l(n, 36, 0, './assets/media/svg/icons/Files/File-plus.svg', 'true'), l(n, 41, 0);
                    }, function (l, n) {
                        l(n, 14, 0, r['ɵnov'](n, 18).ngClassUntouched, r['ɵnov'](n, 18).ngClassTouched, r['ɵnov'](n, 18).ngClassPristine, r['ɵnov'](n, 18).ngClassDirty, r['ɵnov'](n, 18).ngClassValid, r['ɵnov'](n, 18).ngClassInvalid, r['ɵnov'](n, 18).ngClassPending), l(n, 27, 0, r['ɵnov'](n, 28).isOpen()), l(n, 31, 0, r['ɵnov'](n, 32).dropdown.isOpen()), l(n, 37, 0, !0, r['ɵnov'](n, 38).dropdown.isOpen(), r['ɵnov'](n, 38).placement);
                    });
                }
                var jl = function () {
                    function l(n, e) {
                        d(this, l), this.layout = n, this.subheader = e, this.subheaderCSSClasses = '', this.subheaderContainerCSSClasses = '', this.subheaderMobileToggle = !1, this.subheaderDisplayDesc = !1, this.subheaderDisplayDaterangepicker = !1, this.title$ = this.subheader.titleSubject.asObservable(), this.breadcrumbs$ = this.subheader.breadCrumbsSubject.asObservable(), this.description$ = this.subheader.descriptionSubject.asObservable();
                    }
                    return f(l, [{
                        key: 'ngOnInit',
                        value: function () {
                            this.subheaderCSSClasses = this.layout.getStringCSSClasses('subheader'), this.subheaderContainerCSSClasses = this.layout.getStringCSSClasses('subheader_container'), this.subheaderMobileToggle = this.layout.getProp('subheader.mobileToggle'), this.subheaderDisplayDesc = this.layout.getProp('subheader.displayDesc'), this.subheaderDisplayDaterangepicker = this.layout.getProp('subheader.displayDaterangepicker');
                        }
                    }]), l;
                }(), Kl = r['ɵcrt']({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });
                function zl(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 1, 'button', [
                            [
                                'class',
                                'burger-icon burger-icon-left mr-4 d-inline-block d-lg-none'
                            ],
                            [
                                'id',
                                'kt_subheader_mobile_toggle'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵeld'](2, 0, null, null, 0, 'span', [], null, null, null, null, null))
                    ], null, null);
                }
                function Ul(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 1, 'small', [], null, null, null, null, null)),
                        (l()(), r['ɵted'](2, null, [
                            '',
                            ''
                        ]))
                    ], null, function (l, n) {
                        l(n, 2, 0, n.context.ngIf);
                    });
                }
                function ql(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 3, null, null, null, null, null, null, null)),
                        (l()(), r['ɵand'](16777216, null, null, 2, null, Ul)),
                        r['ɵdid'](2, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        (l()(), r['ɵand'](0, null, null, 0))
                    ], function (l, n) {
                        var e = n.component;
                        l(n, 2, 0, r['ɵunv'](n, 2, 0, r['ɵnov'](n, 3).transform(e.description$)));
                    }, null);
                }
                function Wl(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 4, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 3, 'h2', [[
                            'class',
                            'subheader-title text-dark font-weight-bold my-1 mr-3'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](2, null, [
                            ' ',
                            ' '
                        ])),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, ql)),
                        r['ɵdid'](4, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
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
                function Yl(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 6, 'li', [
                            [
                                'class',
                                'breadcrumb-item'
                            ],
                            [
                                'routerLinkActive',
                                'active'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵdid'](1, 1720320, null, 2, y.t, [
                            y.r,
                            r.ElementRef,
                            r.Renderer2,
                            r.ChangeDetectorRef,
                            [
                                2,
                                y.s
                            ],
                            [
                                2,
                                y.u
                            ]
                        ], {
                            routerLinkActive: [
                                0,
                                'routerLinkActive'
                            ]
                        }, null),
                        r['ɵqud'](603979776, 1, { links: 1 }),
                        r['ɵqud'](603979776, 2, { linksWithHrefs: 1 }),
                        (l()(), r['ɵeld'](4, 0, null, null, 2, 'a', [[
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
                            var t = !0;
                            return 'click' === n && (t = !1 !== r['ɵnov'](l, 5).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && t), t;
                        }, null, null)),
                        r['ɵdid'](5, 671744, [[
                            2,
                            4
                        ]], 0, y.u, [
                            y.r,
                            y.a,
                            h.LocationStrategy
                        ], {
                            routerLink: [
                                0,
                                'routerLink'
                            ]
                        }, null),
                        (l()(), r['ɵted'](6, null, [
                            ' ',
                            ' '
                        ]))
                    ], function (l, n) {
                        l(n, 1, 0, 'active'), l(n, 5, 0, n.context.$implicit.linkPath);
                    }, function (l, n) {
                        l(n, 4, 0, r['ɵnov'](n, 5).target, r['ɵnov'](n, 5).href), l(n, 6, 0, n.context.$implicit.linkText);
                    });
                }
                function Xl(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 40, 'div', [
                            [
                                'class',
                                'subheader py-3 py-lg-8'
                            ],
                            [
                                'id',
                                'kt_subheader'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵdid'](1, 278528, null, 0, h.NgClass, [
                            r.IterableDiffers,
                            r.KeyValueDiffers,
                            r.ElementRef,
                            r.Renderer2
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
                        (l()(), r['ɵeld'](2, 0, null, null, 38, 'div', [[
                            'class',
                            'd-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap'
                        ]], null, null, null, null, null)),
                        r['ɵdid'](3, 278528, null, 0, h.NgClass, [
                            r.IterableDiffers,
                            r.KeyValueDiffers,
                            r.ElementRef,
                            r.Renderer2
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
                        (l()(), r['ɵeld'](4, 0, null, null, 10, 'div', [[
                            'class',
                            'd-flex align-items-center flex-wrap mr-1'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, zl)),
                        r['ɵdid'](6, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵeld'](7, 0, null, null, 7, 'div', [[
                            'class',
                            'd-flex align-items-baseline flex-wrap mr-5'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵand'](16777216, null, null, 2, null, Wl)),
                        r['ɵdid'](9, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        (l()(), r['ɵeld'](11, 0, null, null, 3, 'ul', [[
                            'class',
                            'breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold my-2 p-0'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵand'](16777216, null, null, 2, null, Yl)),
                        r['ɵdid'](13, 278528, null, 0, h.NgForOf, [
                            r.ViewContainerRef,
                            r.TemplateRef,
                            r.IterableDiffers
                        ], {
                            ngForOf: [
                                0,
                                'ngForOf'
                            ]
                        }, null),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        (l()(), r['ɵeld'](15, 0, null, null, 25, 'div', [[
                            'class',
                            'd-flex align-items-center'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](16, 0, null, null, 4, 'a', [[
                            'class',
                            'btn btn-fixed-height btn-default btn-hover-primary font-weight-bold px-2 px-lg-5 mr-2 cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](17, 16777216, null, null, 2, 'span', [
                            [
                                'cacheSVG',
                                'true'
                            ],
                            [
                                'class',
                                'svg-icon svg-icon-success svg-icon-lg'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵprd'](512, null, p.SVGCacheService, p.SVGCacheService, [
                            [
                                2,
                                h.APP_BASE_HREF
                            ],
                            [
                                2,
                                h.PlatformLocation
                            ],
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            m.HttpClient,
                            m.HttpBackend,
                            r.RendererFactory2
                        ]),
                        r['ɵdid'](19, 737280, null, 0, v.InlineSVGDirective, [
                            r.ElementRef,
                            r.ViewContainerRef,
                            r.ComponentFactoryResolver,
                            p.SVGCacheService,
                            r.Renderer2,
                            b.InlineSVGService,
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            r.PLATFORM_ID
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
                        (l()(), r['ɵted'](-1, null, [' New Member '])),
                        (l()(), r['ɵeld'](21, 0, null, null, 15, 'div', [
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
                        r['ɵdid'](22, 1720320, null, 2, V.v, [
                            r.ChangeDetectorRef,
                            V.x,
                            h.DOCUMENT,
                            r.NgZone,
                            r.ElementRef,
                            r.Renderer2,
                            [
                                2,
                                V.K
                            ]
                        ], {
                            placement: [
                                0,
                                'placement'
                            ]
                        }, null),
                        r['ɵqud'](603979776, 3, { _menu: 0 }),
                        r['ɵqud'](603979776, 4, { _anchor: 0 }),
                        (l()(), r['ɵeld'](25, 0, null, null, 6, 'a', [
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
                            var t = !0;
                            return 'click' === n && (t = !1 !== r['ɵnov'](l, 26).dropdown.toggle() && t), 'keydown.ArrowUp' === n && (t = !1 !== r['ɵnov'](l, 26).dropdown.onKeyDown(e) && t), 'keydown.ArrowDown' === n && (t = !1 !== r['ɵnov'](l, 26).dropdown.onKeyDown(e) && t), 'keydown.Home' === n && (t = !1 !== r['ɵnov'](l, 26).dropdown.onKeyDown(e) && t), 'keydown.End' === n && (t = !1 !== r['ɵnov'](l, 26).dropdown.onKeyDown(e) && t), 'keydown.Tab' === n && (t = !1 !== r['ɵnov'](l, 26).dropdown.onKeyDown(e) && t), 'keydown.Shift.Tab' === n && (t = !1 !== r['ɵnov'](l, 26).dropdown.onKeyDown(e) && t), t;
                        }, null, null)),
                        r['ɵdid'](26, 16384, null, 0, V.A, [
                            V.v,
                            r.ElementRef
                        ], null, null),
                        r['ɵprd'](2048, [[
                            4,
                            4
                        ]], V.w, null, [V.A]),
                        (l()(), r['ɵeld'](28, 16777216, null, null, 2, 'span', [
                            [
                                'cacheSVG',
                                'true'
                            ],
                            [
                                'class',
                                'svg-icon svg-icon-success svg-icon-lg'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵprd'](512, null, p.SVGCacheService, p.SVGCacheService, [
                            [
                                2,
                                h.APP_BASE_HREF
                            ],
                            [
                                2,
                                h.PlatformLocation
                            ],
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            m.HttpClient,
                            m.HttpBackend,
                            r.RendererFactory2
                        ]),
                        r['ɵdid'](30, 737280, null, 0, v.InlineSVGDirective, [
                            r.ElementRef,
                            r.ViewContainerRef,
                            r.ComponentFactoryResolver,
                            p.SVGCacheService,
                            r.Renderer2,
                            b.InlineSVGService,
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            r.PLATFORM_ID
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
                        (l()(), r['ɵted'](-1, null, [' New Report '])),
                        (l()(), r['ɵeld'](32, 0, null, null, 4, 'div', [
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
                            var t = !0;
                            return 'keydown.ArrowUp' === n && (t = !1 !== r['ɵnov'](l, 33).dropdown.onKeyDown(e) && t), 'keydown.ArrowDown' === n && (t = !1 !== r['ɵnov'](l, 33).dropdown.onKeyDown(e) && t), 'keydown.Home' === n && (t = !1 !== r['ɵnov'](l, 33).dropdown.onKeyDown(e) && t), 'keydown.End' === n && (t = !1 !== r['ɵnov'](l, 33).dropdown.onKeyDown(e) && t), 'keydown.Enter' === n && (t = !1 !== r['ɵnov'](l, 33).dropdown.onKeyDown(e) && t), 'keydown.Space' === n && (t = !1 !== r['ɵnov'](l, 33).dropdown.onKeyDown(e) && t), 'keydown.Tab' === n && (t = !1 !== r['ɵnov'](l, 33).dropdown.onKeyDown(e) && t), 'keydown.Shift.Tab' === n && (t = !1 !== r['ɵnov'](l, 33).dropdown.onKeyDown(e) && t), t;
                        }, null, null)),
                        r['ɵdid'](33, 16384, [[
                            3,
                            4
                        ]], 1, V.y, [
                            V.v,
                            r.ElementRef
                        ], null, null),
                        r['ɵqud'](603979776, 5, { menuItems: 1 }),
                        (l()(), r['ɵeld'](35, 0, null, null, 1, 'app-dropdown-menu1', [], null, null, null, il, ul)),
                        r['ɵdid'](36, 114688, null, 0, tl, [], null, null),
                        (l()(), r['ɵeld'](37, 0, null, null, 3, 'a', [
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
                        (l()(), r['ɵeld'](38, 16777216, null, null, 2, 'span', [
                            [
                                'cacheSVG',
                                'true'
                            ],
                            [
                                'class',
                                'svg-icon svg-icon-lg'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵprd'](512, null, p.SVGCacheService, p.SVGCacheService, [
                            [
                                2,
                                h.APP_BASE_HREF
                            ],
                            [
                                2,
                                h.PlatformLocation
                            ],
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            m.HttpClient,
                            m.HttpBackend,
                            r.RendererFactory2
                        ]),
                        r['ɵdid'](40, 737280, null, 0, v.InlineSVGDirective, [
                            r.ElementRef,
                            r.ViewContainerRef,
                            r.ComponentFactoryResolver,
                            p.SVGCacheService,
                            r.Renderer2,
                            b.InlineSVGService,
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            r.PLATFORM_ID
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
                        l(n, 1, 0, 'subheader py-3 py-lg-8', e.subheaderCSSClasses), l(n, 3, 0, 'd-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap', e.subheaderContainerCSSClasses), l(n, 6, 0, e.subheaderMobileToggle), l(n, 9, 0, r['ɵunv'](n, 9, 0, r['ɵnov'](n, 10).transform(e.title$))), l(n, 13, 0, r['ɵunv'](n, 13, 0, r['ɵnov'](n, 14).transform(e.breadcrumbs$))), l(n, 19, 0, './assets/media/svg/icons/Communication/Add-user.svg', 'true'), l(n, 22, 0, 'bottom-right'), l(n, 30, 0, './assets/media/svg/icons/Files/File.svg', 'true'), l(n, 36, 0), l(n, 40, 0, './assets/media/svg/icons/Communication/Group-chat.svg', 'true');
                    }, function (l, n) {
                        l(n, 21, 0, r['ɵnov'](n, 22).isOpen()), l(n, 25, 0, r['ɵnov'](n, 26).dropdown.isOpen()), l(n, 32, 0, !0, r['ɵnov'](n, 33).dropdown.isOpen(), r['ɵnov'](n, 33).placement);
                    });
                }
                var $l, Zl = o('rh/z'), Jl = {
                    init: function (l) {
                        $l = Zl.a.getById(l);
                    },
                    isFixed: function () {
                        return Zl.a.hasClass(Zl.a.getBody(), 'subheader-fixed');
                    },
                    getElement: function () {
                        return $l;
                    },
                    getHeight: function () {
                        return l = 0, $l && (l = Zl.a.actualHeight($l)), l;
                        var l;
                    }
                }, Ql = function () {
                    function l(n, e) {
                        var t = this;
                        d(this, l), this.subheader = n, this.router = e, this.subheader.setDefaultSubheader(), this.subheaderVersion$ = this.subheader.subheaderVersionSubject.asObservable();
                        var u = function () {
                            setTimeout(function () {
                                t.subheader.updateAfterRouteChanges(t.router.url);
                            }, 0);
                        };
                        u(), this.router.events.pipe(Object(j.a)(function (l) {
                            return l instanceof y.n;
                        })).subscribe(u);
                    }
                    return f(l, [
                        {
                            key: 'ngOnInit',
                            value: function () {
                            }
                        },
                        {
                            key: 'ngAfterViewInit',
                            value: function () {
                                Zl.a.ready(function () {
                                    Jl.init('kt_subheader');
                                });
                            }
                        }
                    ]), l;
                }(), ln = r['ɵcrt']({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });
                function nn(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 1, 'app-subheader1', [], null, null, null, el, W)),
                        r['ɵdid'](2, 114688, null, 0, K, [
                            C.a,
                            q,
                            r.ChangeDetectorRef,
                            y.r
                        ], null, null)
                    ], function (l, n) {
                        l(n, 2, 0);
                    }, null);
                }
                function en(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 1, 'app-subheader2', [], null, null, null, pl, al)),
                        r['ɵdid'](2, 114688, null, 0, ol, [
                            C.a,
                            q
                        ], null, null)
                    ], function (l, n) {
                        l(n, 2, 0);
                    }, null);
                }
                function tn(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 1, 'app-subheader3', [], null, null, null, Rl, bl)),
                        r['ɵdid'](2, 114688, null, 0, vl, [
                            C.a,
                            q
                        ], null, null)
                    ], function (l, n) {
                        l(n, 2, 0);
                    }, null);
                }
                function un(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 1, 'app-subheader4', [], null, null, null, Vl, El)),
                        r['ɵdid'](2, 114688, null, 0, xl, [
                            C.a,
                            q
                        ], null, null)
                    ], function (l, n) {
                        l(n, 2, 0);
                    }, null);
                }
                function on(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 1, 'app-subheader5', [], null, null, null, Fl, Ml)),
                        r['ɵdid'](2, 114688, null, 0, Pl, [
                            C.a,
                            q
                        ], null, null)
                    ], function (l, n) {
                        l(n, 2, 0);
                    }, null);
                }
                function an(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 1, 'app-subheader6', [], null, null, null, Xl, Kl)),
                        r['ɵdid'](2, 114688, null, 0, jl, [
                            C.a,
                            q
                        ], null, null)
                    ], function (l, n) {
                        l(n, 2, 0);
                    }, null);
                }
                function rn(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 12, null, null, null, null, null, null, null)),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, nn)),
                        r['ɵdid'](2, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, en)),
                        r['ɵdid'](4, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, tn)),
                        r['ɵdid'](6, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, un)),
                        r['ɵdid'](8, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, on)),
                        r['ɵdid'](10, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, an)),
                        r['ɵdid'](12, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵand'](0, null, null, 0))
                    ], function (l, n) {
                        l(n, 2, 0, 'v1' === n.context.ngIf), l(n, 4, 0, 'v2' === n.context.ngIf), l(n, 6, 0, 'v3' === n.context.ngIf), l(n, 8, 0, 'v4' === n.context.ngIf), l(n, 10, 0, 'v5' === n.context.ngIf), l(n, 12, 0, 'v6' === n.context.ngIf);
                    }, null);
                }
                function sn(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵand'](16777216, null, null, 2, null, rn)),
                        r['ɵdid'](1, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef])
                    ], function (l, n) {
                        var e = n.component;
                        l(n, 1, 0, r['ɵunv'](n, 1, 0, r['ɵnov'](n, 2).transform(e.subheaderVersion$)));
                    }, null);
                }
                var dn = function () {
                    var l;
                    return {
                        init: function (n) {
                            l = Zl.a.getById(n);
                        },
                        getHeight: function () {
                            return n = 0, l && (n = Zl.a.actualHeight(l)), n;
                            var n;
                        },
                        getElement: function () {
                            return l;
                        }
                    };
                }(), cn = function () {
                    function l(n) {
                        d(this, l), this.layout = n;
                        var e = new Date();
                        this.currentYear = e.getFullYear().toString();
                    }
                    return f(l, [
                        {
                            key: 'ngOnInit',
                            value: function () {
                                this.footerContainerCSSClasses = this.layout.getStringCSSClasses('footer_container');
                            }
                        },
                        {
                            key: 'ngAfterViewInit',
                            value: function () {
                                dn.init('kt_footer');
                            }
                        }
                    ]), l;
                }(), fn = r['ɵcrt']({
                    encapsulation: 0,
                    styles: [['']],
                    data: {}
                });
                function pn(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 6, 'div', [[
                            'class',
                            'd-flex flex-column flex-md-row align-items-center justify-content-between'
                        ]], null, null, null, null, null)),
                        r['ɵdid'](1, 278528, null, 0, h.NgClass, [
                            r.IterableDiffers,
                            r.KeyValueDiffers,
                            r.ElementRef,
                            r.Renderer2
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
                        (l()(), r['ɵeld'](2, 0, null, null, 4, 'div', [[
                            'class',
                            'text-dark order-2 order-md-1'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](3, 0, null, null, 1, 'span', [[
                            'class',
                            'text-muted font-weight-bold mr-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](4, null, [
                            '',
                            ' \xA9'
                        ])),
                        (l()(), r['ɵeld'](5, 0, null, null, 1, 'a', [
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
                        (l()(), r['ɵted'](-1, null, ['Centinela']))
                    ], function (l, n) {
                        l(n, 1, 0, 'd-flex flex-column flex-md-row align-items-center justify-content-between', n.component.footerContainerCSSClasses);
                    }, function (l, n) {
                        l(n, 4, 0, n.component.currentYear);
                    });
                }
                var hn = function () {
                    function l(n) {
                        d(this, l), this.layout = n;
                    }
                    return f(l, [{
                        key: 'ngOnInit',
                        value: function () {
                            this.extrasSearchOffcanvasDirectionCSSClass = 'offcanvas-' + this.layout.getProp('extras.search.offcanvas.direction');
                        }
                    }]), l;
                }(), gn = r['ɵcrt']({
                    encapsulation: 0,
                    styles: [['']],
                    data: {}
                });
                function mn(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 134, 'div', [
                            [
                                'class',
                                'offcanvas p-10'
                            ],
                            [
                                'id',
                                'kt_quick_search'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵdid'](1, 278528, null, 0, h.NgClass, [
                            r.IterableDiffers,
                            r.KeyValueDiffers,
                            r.ElementRef,
                            r.Renderer2
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
                        (l()(), r['ɵeld'](2, 0, null, null, 6, 'div', [[
                            'class',
                            'offcanvas-header d-flex align-items-center justify-content-between mb-5'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](3, 0, null, null, 3, 'h3', [[
                            'class',
                            'font-weight-bold m-0'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' Search '])),
                        (l()(), r['ɵeld'](5, 0, null, null, 1, 'small', [[
                            'class',
                            'text-muted font-size-sm ml-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['files, reports, members'])),
                        (l()(), r['ɵeld'](7, 0, null, null, 1, 'a', [
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
                        (l()(), r['ɵeld'](8, 0, null, null, 0, 'i', [[
                            'class',
                            'ki ki-close icon-xs text-muted'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](9, 0, null, null, 125, 'div', [[
                            'class',
                            'offcanvas-content'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](10, 0, null, null, 124, 'div', [
                            [
                                'class',
                                'quick-search quick-search-offcanvas quick-search-has-result'
                            ],
                            [
                                'id',
                                'kt_quick_search_offcanvas'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵeld'](11, 0, null, null, 10, 'form', [
                            [
                                'class',
                                'quick-search-form border-bottom pt-5 pb-1'
                            ],
                            [
                                'method',
                                'get'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵeld'](12, 0, null, null, 9, 'div', [[
                            'class',
                            'input-group'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](13, 0, null, null, 4, 'div', [[
                            'class',
                            'input-group-prepend'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](14, 0, null, null, 3, 'span', [[
                            'class',
                            'input-group-text'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](15, 16777216, null, null, 2, 'span', [
                            [
                                'cacheSVG',
                                'true'
                            ],
                            [
                                'class',
                                'svg-icon svg-icon-lg'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵprd'](512, null, p.SVGCacheService, p.SVGCacheService, [
                            [
                                2,
                                h.APP_BASE_HREF
                            ],
                            [
                                2,
                                h.PlatformLocation
                            ],
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            m.HttpClient,
                            m.HttpBackend,
                            r.RendererFactory2
                        ]),
                        r['ɵdid'](17, 737280, null, 0, v.InlineSVGDirective, [
                            r.ElementRef,
                            r.ViewContainerRef,
                            r.ComponentFactoryResolver,
                            p.SVGCacheService,
                            r.Renderer2,
                            b.InlineSVGService,
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            r.PLATFORM_ID
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
                        (l()(), r['ɵeld'](18, 0, null, null, 0, 'input', [
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
                        (l()(), r['ɵeld'](19, 0, null, null, 2, 'div', [[
                            'class',
                            'input-group-append'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](20, 0, null, null, 1, 'span', [[
                            'class',
                            'input-group-text'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](21, 0, null, null, 0, 'i', [[
                            'class',
                            'quick-search-close ki ki-close icon-sm text-muted'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](22, 0, null, null, 112, 'div', [[
                            'class',
                            'quick-search-wrapper pt-5'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](23, 0, null, null, 111, 'div', [[
                            'class',
                            'quick-search-result'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](24, 0, null, null, 1, 'div', [[
                            'class',
                            'text-muted d-none'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' No record found '])),
                        (l()(), r['ɵeld'](26, 0, null, null, 1, 'div', [[
                            'class',
                            'font-size-sm text-primary font-weight-bolder text-uppercase mb-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' Documents '])),
                        (l()(), r['ɵeld'](28, 0, null, null, 32, 'div', [[
                            'class',
                            'mb-10'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](29, 0, null, null, 7, 'div', [[
                            'class',
                            'd-flex align-items-center flex-grow-1 mb-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](30, 0, null, null, 1, 'div', [[
                            'class',
                            'symbol symbol-30 bg-transparent flex-shrink-0'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](31, 0, null, null, 0, 'img', [
                            [
                                'alt',
                                ''
                            ],
                            [
                                'src',
                                './assets/media/svg/files/doc.svg'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵeld'](32, 0, null, null, 4, 'div', [[
                            'class',
                            'd-flex flex-column ml-3 mt-2 mb-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](33, 0, null, null, 1, 'a', [
                            [
                                'class',
                                'font-weight-bold text-dark text-hover-primary'
                            ],
                            [
                                'href',
                                '#'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' AirPlus Requirements '])),
                        (l()(), r['ɵeld'](35, 0, null, null, 1, 'span', [[
                            'class',
                            'font-size-sm font-weight-bold text-muted'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' by Grog John '])),
                        (l()(), r['ɵeld'](37, 0, null, null, 7, 'div', [[
                            'class',
                            'd-flex align-items-center flex-grow-1 mb-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](38, 0, null, null, 1, 'div', [[
                            'class',
                            'symbol symbol-30 bg-transparent flex-shrink-0'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](39, 0, null, null, 0, 'img', [
                            [
                                'alt',
                                ''
                            ],
                            [
                                'src',
                                './assets/media/svg/files/pdf.svg'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵeld'](40, 0, null, null, 4, 'div', [[
                            'class',
                            'd-flex flex-column ml-3 mt-2 mb-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](41, 0, null, null, 1, 'a', [
                            [
                                'class',
                                'font-weight-bold text-dark text-hover-primary'
                            ],
                            [
                                'href',
                                '#'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' TechNav Documentation '])),
                        (l()(), r['ɵeld'](43, 0, null, null, 1, 'span', [[
                            'class',
                            'font-size-sm font-weight-bold text-muted'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' by Mary Broun '])),
                        (l()(), r['ɵeld'](45, 0, null, null, 7, 'div', [[
                            'class',
                            'd-flex align-items-center flex-grow-1 mb-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](46, 0, null, null, 1, 'div', [[
                            'class',
                            'symbol symbol-30 bg-transparent flex-shrink-0'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](47, 0, null, null, 0, 'img', [
                            [
                                'alt',
                                ''
                            ],
                            [
                                'src',
                                './assets/media/svg/files/xml.svg'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵeld'](48, 0, null, null, 4, 'div', [[
                            'class',
                            'd-flex flex-column ml-3 mt-2 mb-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](49, 0, null, null, 1, 'a', [
                            [
                                'class',
                                'font-weight-bold text-dark text-hover-primary'
                            ],
                            [
                                'href',
                                '#'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' All Framework Docs '])),
                        (l()(), r['ɵeld'](51, 0, null, null, 1, 'span', [[
                            'class',
                            'font-size-sm font-weight-bold text-muted'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' by Nick Stone '])),
                        (l()(), r['ɵeld'](53, 0, null, null, 7, 'div', [[
                            'class',
                            'd-flex align-items-center flex-grow-1 mb-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](54, 0, null, null, 1, 'div', [[
                            'class',
                            'symbol symbol-30 bg-transparent flex-shrink-0'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](55, 0, null, null, 0, 'img', [
                            [
                                'alt',
                                ''
                            ],
                            [
                                'src',
                                './assets/media/svg/files/csv.svg'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵeld'](56, 0, null, null, 4, 'div', [[
                            'class',
                            'd-flex flex-column ml-3 mt-2 mb-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](57, 0, null, null, 1, 'a', [
                            [
                                'class',
                                'font-weight-bold text-dark text-hover-primary'
                            ],
                            [
                                'href',
                                '#'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' Finance & Accounting Reports '])),
                        (l()(), r['ɵeld'](59, 0, null, null, 1, 'span', [[
                            'class',
                            'font-size-sm font-weight-bold text-muted'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' by Jhon Larson '])),
                        (l()(), r['ɵeld'](61, 0, null, null, 1, 'div', [[
                            'class',
                            'font-size-sm text-primary font-weight-bolder text-uppercase mb-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' Members '])),
                        (l()(), r['ɵeld'](63, 0, null, null, 32, 'div', [[
                            'class',
                            'mb-10'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](64, 0, null, null, 7, 'div', [[
                            'class',
                            'd-flex align-items-center flex-grow-1 mb-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](65, 0, null, null, 1, 'div', [[
                            'class',
                            'symbol symbol-30 flex-shrink-0'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](66, 0, null, null, 0, 'div', [
                            [
                                'class',
                                'symbol-label'
                            ],
                            [
                                'style',
                                'background-image:url(\'./assets/media/users/300_20.jpg\')'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵeld'](67, 0, null, null, 4, 'div', [[
                            'class',
                            'd-flex flex-column ml-3 mt-2 mb-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](68, 0, null, null, 1, 'a', [
                            [
                                'class',
                                'font-weight-bold text-dark text-hover-primary'
                            ],
                            [
                                'href',
                                '#'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' Milena Gibson '])),
                        (l()(), r['ɵeld'](70, 0, null, null, 1, 'span', [[
                            'class',
                            'font-size-sm font-weight-bold text-muted'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' UI Designer '])),
                        (l()(), r['ɵeld'](72, 0, null, null, 7, 'div', [[
                            'class',
                            'd-flex align-items-center flex-grow-1 mb-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](73, 0, null, null, 1, 'div', [[
                            'class',
                            'symbol symbol-30 flex-shrink-0'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](74, 0, null, null, 0, 'div', [
                            [
                                'class',
                                'symbol-label'
                            ],
                            [
                                'style',
                                'background-image:url(\'./assets/media/users/300_15.jpg\')'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵeld'](75, 0, null, null, 4, 'div', [[
                            'class',
                            'd-flex flex-column ml-3 mt-2 mb-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](76, 0, null, null, 1, 'a', [
                            [
                                'class',
                                'font-weight-bold text-dark text-hover-primary'
                            ],
                            [
                                'href',
                                '#'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' Stefan JohnStefan '])),
                        (l()(), r['ɵeld'](78, 0, null, null, 1, 'span', [[
                            'class',
                            'font-size-sm font-weight-bold text-muted'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' Marketing Manager '])),
                        (l()(), r['ɵeld'](80, 0, null, null, 7, 'div', [[
                            'class',
                            'd-flex align-items-center flex-grow-1 mb-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](81, 0, null, null, 1, 'div', [[
                            'class',
                            'symbol symbol-30 flex-shrink-0'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](82, 0, null, null, 0, 'div', [
                            [
                                'class',
                                'symbol-label'
                            ],
                            [
                                'style',
                                'background-image:url(\'./assets/media/users/300_12.jpg\')'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵeld'](83, 0, null, null, 4, 'div', [[
                            'class',
                            'd-flex flex-column ml-3 mt-2 mb-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](84, 0, null, null, 1, 'a', [
                            [
                                'class',
                                'font-weight-bold text-dark text-hover-primary'
                            ],
                            [
                                'href',
                                '#'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' Anna Strong '])),
                        (l()(), r['ɵeld'](86, 0, null, null, 1, 'span', [[
                            'class',
                            'font-size-sm font-weight-bold text-muted'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' Software Developer '])),
                        (l()(), r['ɵeld'](88, 0, null, null, 7, 'div', [[
                            'class',
                            'd-flex align-items-center flex-grow-1 mb-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](89, 0, null, null, 1, 'div', [[
                            'class',
                            'symbol symbol-30 flex-shrink-0'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](90, 0, null, null, 0, 'div', [
                            [
                                'class',
                                'symbol-label'
                            ],
                            [
                                'style',
                                'background-image:url(\'./assets/media/users/300_16.jpg\')'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵeld'](91, 0, null, null, 4, 'div', [[
                            'class',
                            'd-flex flex-column ml-3 mt-2 mb-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](92, 0, null, null, 1, 'a', [
                            [
                                'class',
                                'font-weight-bold text-dark text-hover-primary'
                            ],
                            [
                                'href',
                                '#'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' Nick Bold '])),
                        (l()(), r['ɵeld'](94, 0, null, null, 1, 'span', [[
                            'class',
                            'font-size-sm font-weight-bold text-muted'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' Project Coordinator '])),
                        (l()(), r['ɵeld'](96, 0, null, null, 1, 'div', [[
                            'class',
                            'font-size-sm text-primary font-weight-bolder text-uppercase mb-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' Files '])),
                        (l()(), r['ɵeld'](98, 0, null, null, 36, 'div', [[
                            'class',
                            'mb-10'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](99, 0, null, null, 8, 'div', [[
                            'class',
                            'd-flex align-items-center flex-grow-1 mb-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](100, 0, null, null, 2, 'div', [[
                            'class',
                            'symbol symbol-30 flex-shrink-0'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](101, 0, null, null, 1, 'div', [[
                            'class',
                            'symbol-label'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](102, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon-psd text-primary'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](103, 0, null, null, 4, 'div', [[
                            'class',
                            'd-flex flex-column ml-3 mt-2 mb-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](104, 0, null, null, 1, 'a', [
                            [
                                'class',
                                'font-weight-bold text-dark text-hover-primary'
                            ],
                            [
                                'href',
                                '#'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' 79 PSD files generated '])),
                        (l()(), r['ɵeld'](106, 0, null, null, 1, 'span', [[
                            'class',
                            'font-size-sm font-weight-bold text-muted'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' by Grog John '])),
                        (l()(), r['ɵeld'](108, 0, null, null, 8, 'div', [[
                            'class',
                            'd-flex align-items-center flex-grow-1 mb-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](109, 0, null, null, 2, 'div', [[
                            'class',
                            'symbol symbol-30 flex-shrink-0'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](110, 0, null, null, 1, 'div', [[
                            'class',
                            'symbol-label'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](111, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-supermarket text-warning'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](112, 0, null, null, 4, 'div', [[
                            'class',
                            'd-flex flex-column ml-3 mt-2 mb-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](113, 0, null, null, 1, 'a', [
                            [
                                'class',
                                'font-weight-bold text-dark text-hover-primary'
                            ],
                            [
                                'href',
                                '#'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' $2900 worth products sold '])),
                        (l()(), r['ɵeld'](115, 0, null, null, 1, 'span', [[
                            'class',
                            'font-size-sm font-weight-bold text-muted'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' Total 234 items '])),
                        (l()(), r['ɵeld'](117, 0, null, null, 8, 'div', [[
                            'class',
                            'd-flex align-items-center flex-grow-1 mb-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](118, 0, null, null, 2, 'div', [[
                            'class',
                            'symbol symbol-30 flex-shrink-0'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](119, 0, null, null, 1, 'div', [[
                            'class',
                            'symbol-label'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](120, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon-safe-shield-protection text-info'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](121, 0, null, null, 4, 'div', [[
                            'class',
                            'd-flex flex-column ml-3 mt-2 mb-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](122, 0, null, null, 1, 'a', [
                            [
                                'class',
                                'font-weight-bold text-dark text-hover-primary'
                            ],
                            [
                                'href',
                                '#'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' 4 New items submitted '])),
                        (l()(), r['ɵeld'](124, 0, null, null, 1, 'span', [[
                            'class',
                            'font-size-sm font-weight-bold text-muted'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' Marketing Manager '])),
                        (l()(), r['ɵeld'](126, 0, null, null, 8, 'div', [[
                            'class',
                            'd-flex align-items-center flex-grow-1 mb-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](127, 0, null, null, 2, 'div', [[
                            'class',
                            'symbol symbol-30 flex-shrink-0'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](128, 0, null, null, 1, 'div', [[
                            'class',
                            'symbol-label'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](129, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon-safe-shield-protection text-warning'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](130, 0, null, null, 4, 'div', [[
                            'class',
                            'd-flex flex-column ml-3 mt-2 mb-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](131, 0, null, null, 1, 'a', [
                            [
                                'class',
                                'font-weight-bold text-dark text-hover-primary'
                            ],
                            [
                                'href',
                                '#'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' 4 New items submitted '])),
                        (l()(), r['ɵeld'](133, 0, null, null, 1, 'span', [[
                            'class',
                            'font-size-sm font-weight-bold text-muted'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' Marketing Manager ']))
                    ], function (l, n) {
                        l(n, 1, 0, 'offcanvas p-10', n.component.extrasSearchOffcanvasDirectionCSSClass), l(n, 17, 0, './assets/media/svg/icons/General/Search.svg', 'true');
                    }, null);
                }
                var vn = o('zG16'), bn = o('WueC'), yn = r['ɵcrt']({
                    encapsulation: 0,
                    styles: [['']],
                    data: {}
                });
                function wn(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 3, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 2, 'div', [[
                            'class',
                            'text-muted mt-1'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](2, null, [
                            ' ',
                            ' '
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ])
                    ], null, function (l, n) {
                        l(n, 2, 0, r['ɵunv'](n, 2, 0, r['ɵnov'](n, 3).transform('USER.PHISICAL')));
                    });
                }
                function kn(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 3, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 2, 'div', [[
                            'class',
                            'text-muted mt-1'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](2, null, [
                            ' ',
                            ' '
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ])
                    ], null, function (l, n) {
                        l(n, 2, 0, r['ɵunv'](n, 2, 0, r['ɵnov'](n, 3).transform('USER.MORAL')));
                    });
                }
                function Sn(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 16, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 15, 'a', [
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
                            var t = !0;
                            return 'click' === n && (t = !1 !== r['ɵnov'](l, 2).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && t), t;
                        }, null, null)),
                        r['ɵdid'](2, 671744, null, 0, y.u, [
                            y.r,
                            y.a,
                            h.LocationStrategy
                        ], {
                            routerLink: [
                                0,
                                'routerLink'
                            ]
                        }, null),
                        r['ɵpad'](3, 1),
                        (l()(), r['ɵeld'](4, 0, null, null, 12, 'div', [[
                            'class',
                            'navi-link'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](5, 0, null, null, 4, 'div', [[
                            'class',
                            'symbol symbol-40 bg-light mr-3'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](6, 0, null, null, 3, 'div', [[
                            'class',
                            'symbol-label'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](7, 16777216, null, null, 2, 'span', [
                            [
                                'cacheSVG',
                                'true'
                            ],
                            [
                                'class',
                                'svg-icon svg-icon-md svg-icon-warning'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵprd'](512, null, p.SVGCacheService, p.SVGCacheService, [
                            [
                                2,
                                h.APP_BASE_HREF
                            ],
                            [
                                2,
                                h.PlatformLocation
                            ],
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            m.HttpClient,
                            m.HttpBackend,
                            r.RendererFactory2
                        ]),
                        r['ɵdid'](9, 737280, null, 0, v.InlineSVGDirective, [
                            r.ElementRef,
                            r.ViewContainerRef,
                            r.ComponentFactoryResolver,
                            p.SVGCacheService,
                            r.Renderer2,
                            b.InlineSVGService,
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            r.PLATFORM_ID
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
                        (l()(), r['ɵeld'](10, 0, null, null, 6, 'div', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](11, 0, null, null, 2, 'div', [[
                            'class',
                            'font-weight-bold'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](12, null, [
                            ' ',
                            ' '
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ]),
                        (l()(), r['ɵeld'](14, 0, null, null, 2, 'div', [[
                            'class',
                            'text-muted'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](15, null, [
                            ' ',
                            ' '
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ])
                    ], function (l, n) {
                        var e = l(n, 3, 0, '/sincronization');
                        l(n, 2, 0, e), l(n, 9, 0, './assets/media/svg/icons/Navigation/Route.svg', 'true');
                    }, function (l, n) {
                        l(n, 1, 0, r['ɵnov'](n, 2).target, r['ɵnov'](n, 2).href), l(n, 12, 0, r['ɵunv'](n, 12, 0, r['ɵnov'](n, 13).transform('USER.LINKSIGNATURE'))), l(n, 15, 0, r['ɵunv'](n, 15, 0, r['ɵnov'](n, 16).transform('USER.LINKSIGNATUREHELP')));
                    });
                }
                function Cn(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 14, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 13, 'a', [[
                            'class',
                            'navi-item cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](2, 0, null, null, 12, 'div', [[
                            'class',
                            'navi-link'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](3, 0, null, null, 4, 'div', [[
                            'class',
                            'symbol symbol-40 bg-light mr-3'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](4, 0, null, null, 3, 'div', [[
                            'class',
                            'symbol-label'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](5, 16777216, null, null, 2, 'span', [
                            [
                                'cacheSVG',
                                'true'
                            ],
                            [
                                'class',
                                'svg-icon svg-icon-md svg-icon-danger'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵprd'](512, null, p.SVGCacheService, p.SVGCacheService, [
                            [
                                2,
                                h.APP_BASE_HREF
                            ],
                            [
                                2,
                                h.PlatformLocation
                            ],
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            m.HttpClient,
                            m.HttpBackend,
                            r.RendererFactory2
                        ]),
                        r['ɵdid'](7, 737280, null, 0, v.InlineSVGDirective, [
                            r.ElementRef,
                            r.ViewContainerRef,
                            r.ComponentFactoryResolver,
                            p.SVGCacheService,
                            r.Renderer2,
                            b.InlineSVGService,
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            r.PLATFORM_ID
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
                        (l()(), r['ɵeld'](8, 0, null, null, 6, 'div', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](9, 0, null, null, 2, 'div', [[
                            'class',
                            'font-weight-bold'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](10, null, [
                            ' ',
                            ' '
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ]),
                        (l()(), r['ɵeld'](12, 0, null, null, 2, 'div', [[
                            'class',
                            'text-muted'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](13, null, [
                            ' ',
                            ' '
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ])
                    ], function (l, n) {
                        l(n, 7, 0, './assets/media/svg/icons/Navigation/Close.svg', 'true');
                    }, function (l, n) {
                        l(n, 10, 0, r['ɵunv'](n, 10, 0, r['ɵnov'](n, 11).transform('USER.UPAIR'))), l(n, 13, 0, r['ɵunv'](n, 13, 0, r['ɵnov'](n, 14).transform('USER.UPAIRHELP')));
                    });
                }
                function Rn(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 105, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 5, 'div', [[
                            'class',
                            'offcanvas-header d-flex align-items-center justify-content-between pb-5'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](2, 0, null, null, 2, 'h3', [[
                            'class',
                            'font-weight-bold m-0'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](3, null, [
                            ' ',
                            ' '
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ]),
                        (l()(), r['ɵeld'](5, 0, null, null, 1, 'a', [
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
                        (l()(), r['ɵeld'](6, 0, null, null, 0, 'i', [[
                            'class',
                            'ki ki-close icon-xs text-muted'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](7, 0, null, null, 98, 'div', [[
                            'class',
                            'offcanvas-content pr-5 mr-n5'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](8, 0, null, null, 27, 'div', [[
                            'class',
                            'd-flex align-items-center mt-5'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](9, 0, null, null, 3, 'div', [[
                            'class',
                            'symbol symbol-100 mr-5'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](10, 0, null, null, 1, 'div', [[
                            'class',
                            'symbol-label'
                        ]], [[
                            8,
                            'style',
                            2
                        ]], null, null, null, null)),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        (l()(), r['ɵeld'](12, 0, null, null, 0, 'i', [[
                            'class',
                            'symbol-badge bg-success'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](13, 0, null, null, 22, 'div', [[
                            'class',
                            'd-flex flex-column'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](14, 0, null, null, 2, 'span', [[
                            'class',
                            'font-weight-bold font-size-h5 text-dark-75 text-hover-primary'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](15, null, [
                            ' ',
                            ' '
                        ])),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        (l()(), r['ɵand'](16777216, null, null, 2, null, wn)),
                        r['ɵdid'](18, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        (l()(), r['ɵand'](16777216, null, null, 2, null, kn)),
                        r['ɵdid'](21, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        (l()(), r['ɵeld'](23, 0, null, null, 12, 'div', [[
                            'class',
                            'navi mt-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](24, 0, null, null, 8, 'span', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](25, 0, null, null, 7, 'span', [[
                            'class',
                            'navi-link p-0 pb-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](26, 0, null, null, 3, 'span', [[
                            'class',
                            'navi-icon mr-1'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](27, 16777216, null, null, 2, 'span', [
                            [
                                'cacheSVG',
                                'true'
                            ],
                            [
                                'class',
                                'svg-icon svg-icon-lg svg-icon-primary'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵprd'](512, null, p.SVGCacheService, p.SVGCacheService, [
                            [
                                2,
                                h.APP_BASE_HREF
                            ],
                            [
                                2,
                                h.PlatformLocation
                            ],
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            m.HttpClient,
                            m.HttpBackend,
                            r.RendererFactory2
                        ]),
                        r['ɵdid'](29, 737280, null, 0, v.InlineSVGDirective, [
                            r.ElementRef,
                            r.ViewContainerRef,
                            r.ComponentFactoryResolver,
                            p.SVGCacheService,
                            r.Renderer2,
                            b.InlineSVGService,
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            r.PLATFORM_ID
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
                        (l()(), r['ɵeld'](30, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-text text-muted text-hover-primary'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](31, null, [
                            '',
                            ''
                        ])),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        (l()(), r['ɵeld'](33, 0, null, null, 2, 'button', [[
                            'class',
                            'btn btn-sm btn-light-primary font-weight-bolder py-2 px-5 cursor-pointer text-light'
                        ]], null, [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                            var t = !0;
                            return 'click' === n && (t = !1 !== l.component.logout() && t), t;
                        }, null, null)),
                        (l()(), r['ɵted'](34, null, [
                            ' ',
                            ''
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ]),
                        (l()(), r['ɵeld'](36, 0, null, null, 0, 'div', [[
                            'class',
                            'separator separator-dashed mt-8 mb-5'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](37, 0, null, null, 22, 'div', [[
                            'class',
                            'navi navi-spacer-x-0 p-0'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](38, 0, null, null, 15, 'a', [
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
                            var t = !0;
                            return 'click' === n && (t = !1 !== r['ɵnov'](l, 39).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && t), t;
                        }, null, null)),
                        r['ɵdid'](39, 671744, null, 0, y.u, [
                            y.r,
                            y.a,
                            h.LocationStrategy
                        ], {
                            routerLink: [
                                0,
                                'routerLink'
                            ]
                        }, null),
                        r['ɵpad'](40, 1),
                        (l()(), r['ɵeld'](41, 0, null, null, 12, 'div', [[
                            'class',
                            'navi-link'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](42, 0, null, null, 4, 'div', [[
                            'class',
                            'symbol symbol-40 bg-light mr-3'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](43, 0, null, null, 3, 'div', [[
                            'class',
                            'symbol-label'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](44, 16777216, null, null, 2, 'span', [
                            [
                                'cacheSVG',
                                'true'
                            ],
                            [
                                'class',
                                'svg-icon svg-icon-md svg-icon-success'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵprd'](512, null, p.SVGCacheService, p.SVGCacheService, [
                            [
                                2,
                                h.APP_BASE_HREF
                            ],
                            [
                                2,
                                h.PlatformLocation
                            ],
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            m.HttpClient,
                            m.HttpBackend,
                            r.RendererFactory2
                        ]),
                        r['ɵdid'](46, 737280, null, 0, v.InlineSVGDirective, [
                            r.ElementRef,
                            r.ViewContainerRef,
                            r.ComponentFactoryResolver,
                            p.SVGCacheService,
                            r.Renderer2,
                            b.InlineSVGService,
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            r.PLATFORM_ID
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
                        (l()(), r['ɵeld'](47, 0, null, null, 6, 'div', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](48, 0, null, null, 2, 'div', [[
                            'class',
                            'font-weight-bold'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](49, null, [
                            ' ',
                            ' '
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ]),
                        (l()(), r['ɵeld'](51, 0, null, null, 2, 'div', [[
                            'class',
                            'text-muted'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](52, null, [
                            ' ',
                            ' '
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ]),
                        (l()(), r['ɵand'](16777216, null, null, 2, null, Sn)),
                        r['ɵdid'](55, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        (l()(), r['ɵand'](16777216, null, null, 2, null, Cn)),
                        r['ɵdid'](58, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        (l()(), r['ɵeld'](60, 0, null, null, 0, 'div', [[
                            'class',
                            'separator separator-dashed my-7'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](61, 0, null, null, 44, 'div', [], null, null, null, null, null)),
                        (l()(), r['ɵeld'](62, 0, null, null, 2, 'h5', [[
                            'class',
                            'mb-5'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](63, null, [
                            ' ',
                            ' '
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ]),
                        (l()(), r['ɵeld'](65, 0, null, null, 11, 'div', [[
                            'class',
                            'd-flex align-items-center bg-light-warning rounded p-5 gutter-b'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](66, 0, null, null, 3, 'span', [[
                            'class',
                            'svg-icon svg-icon-warning mr-5'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](67, 16777216, null, null, 2, 'span', [
                            [
                                'cacheSVG',
                                'true'
                            ],
                            [
                                'class',
                                'svg-icon svg-icon-lg'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵprd'](512, null, p.SVGCacheService, p.SVGCacheService, [
                            [
                                2,
                                h.APP_BASE_HREF
                            ],
                            [
                                2,
                                h.PlatformLocation
                            ],
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            m.HttpClient,
                            m.HttpBackend,
                            r.RendererFactory2
                        ]),
                        r['ɵdid'](69, 737280, null, 0, v.InlineSVGDirective, [
                            r.ElementRef,
                            r.ViewContainerRef,
                            r.ComponentFactoryResolver,
                            p.SVGCacheService,
                            r.Renderer2,
                            b.InlineSVGService,
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            r.PLATFORM_ID
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
                        (l()(), r['ɵeld'](70, 0, null, null, 3, 'div', [[
                            'class',
                            'd-flex flex-column flex-grow-1 mr-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](71, 0, null, null, 2, 'span', [[
                            'class',
                            'font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](72, null, [
                            ' ',
                            ''
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ]),
                        (l()(), r['ɵeld'](74, 0, null, null, 2, 'span', [[
                            'class',
                            'font-weight-bolder text-warning py-1 font-size-lg'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](75, null, [
                            '',
                            ''
                        ])),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        (l()(), r['ɵeld'](77, 0, null, null, 11, 'div', [[
                            'class',
                            'd-flex align-items-center bg-light-success rounded p-5 gutter-b'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](78, 0, null, null, 3, 'span', [[
                            'class',
                            'svg-icon svg-icon-light mr-5'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](79, 16777216, null, null, 2, 'span', [
                            [
                                'cacheSVG',
                                'true'
                            ],
                            [
                                'class',
                                'svg-icon svg-icon-lg'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵprd'](512, null, p.SVGCacheService, p.SVGCacheService, [
                            [
                                2,
                                h.APP_BASE_HREF
                            ],
                            [
                                2,
                                h.PlatformLocation
                            ],
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            m.HttpClient,
                            m.HttpBackend,
                            r.RendererFactory2
                        ]),
                        r['ɵdid'](81, 737280, null, 0, v.InlineSVGDirective, [
                            r.ElementRef,
                            r.ViewContainerRef,
                            r.ComponentFactoryResolver,
                            p.SVGCacheService,
                            r.Renderer2,
                            b.InlineSVGService,
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            r.PLATFORM_ID
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
                        (l()(), r['ɵeld'](82, 0, null, null, 3, 'div', [[
                            'class',
                            'd-flex flex-column flex-grow-1 mr-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](83, 0, null, null, 2, 'span', [[
                            'class',
                            'font-weight-normal text-light text-hover-primary font-size-lg mb-1'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](84, null, [
                            '',
                            ''
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ]),
                        (l()(), r['ɵeld'](86, 0, null, null, 2, 'span', [[
                            'class',
                            'font-weight-bolder text-light py-1 font-size-lg'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](87, null, [
                            '',
                            ''
                        ])),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        (l()(), r['ɵeld'](89, 0, null, null, 11, 'div', [[
                            'class',
                            'd-flex align-items-center bg-light-danger rounded p-5 gutter-b'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](90, 0, null, null, 3, 'span', [[
                            'class',
                            'svg-icon svg-icon-primary mr-5'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](91, 16777216, null, null, 2, 'span', [
                            [
                                'cacheSVG',
                                'true'
                            ],
                            [
                                'class',
                                'svg-icon svg-icon-lg'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵprd'](512, null, p.SVGCacheService, p.SVGCacheService, [
                            [
                                2,
                                h.APP_BASE_HREF
                            ],
                            [
                                2,
                                h.PlatformLocation
                            ],
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            m.HttpClient,
                            m.HttpBackend,
                            r.RendererFactory2
                        ]),
                        r['ɵdid'](93, 737280, null, 0, v.InlineSVGDirective, [
                            r.ElementRef,
                            r.ViewContainerRef,
                            r.ComponentFactoryResolver,
                            p.SVGCacheService,
                            r.Renderer2,
                            b.InlineSVGService,
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            r.PLATFORM_ID
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
                        (l()(), r['ɵeld'](94, 0, null, null, 3, 'div', [[
                            'class',
                            'd-flex flex-column flex-grow-1 mr-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](95, 0, null, null, 2, 'span', [[
                            'class',
                            'font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](96, null, [
                            '',
                            ''
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ]),
                        (l()(), r['ɵeld'](98, 0, null, null, 2, 'span', [[
                            'class',
                            'font-weight-bolder text-dark-75 py-1 font-size-lg'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](99, null, [
                            '',
                            ''
                        ])),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        (l()(), r['ɵeld'](101, 0, null, null, 4, 'a', [
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
                            var t = !0;
                            return 'click' === n && (t = !1 !== r['ɵnov'](l, 102).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && t), t;
                        }, null, null)),
                        r['ɵdid'](102, 671744, null, 0, y.u, [
                            y.r,
                            y.a,
                            h.LocationStrategy
                        ], {
                            routerLink: [
                                0,
                                'routerLink'
                            ]
                        }, null),
                        r['ɵpad'](103, 1),
                        (l()(), r['ɵted'](104, null, [
                            ' ',
                            ''
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ])
                    ], function (l, n) {
                        var e = n.component;
                        l(n, 18, 0, 1 == r['ɵunv'](n, 18, 0, r['ɵnov'](n, 19).transform(e.user$)).people_type), l(n, 21, 0, 0 == r['ɵunv'](n, 21, 0, r['ɵnov'](n, 22).transform(e.user$)).people_type), l(n, 29, 0, './assets/media/svg/icons/Communication/Mail-notification.svg', 'true');
                        var t = l(n, 40, 0, '/settings/profile');
                        l(n, 39, 0, t), l(n, 46, 0, './assets/media/svg/icons/General/Notification2.svg', 'true'), l(n, 55, 0, null == r['ɵunv'](n, 55, 0, r['ɵnov'](n, 56).transform(e.user$)).mobil_device), l(n, 58, 0, null != r['ɵunv'](n, 58, 0, r['ɵnov'](n, 59).transform(e.user$)).mobil_device), l(n, 69, 0, './assets/media/svg/icons/Communication/Write.svg', 'true'), l(n, 81, 0, './assets/media/svg/icons/Media/Shuffle.svg', 'true'), l(n, 93, 0, './assets/media/svg/icons/General/Notifications1.svg', 'true');
                        var u = l(n, 103, 0, '/packages');
                        l(n, 102, 0, u);
                    }, function (l, n) {
                        var e = n.component;
                        l(n, 3, 0, r['ɵunv'](n, 3, 0, r['ɵnov'](n, 4).transform('USER.PROFILE'))), l(n, 10, 0, r['ɵinlineInterpolate'](1, 'background-image: url(\'', r['ɵunv'](n, 10, 0, r['ɵnov'](n, 11).transform(e.user$)).avatar, '\');')), l(n, 15, 0, r['ɵunv'](n, 15, 0, r['ɵnov'](n, 16).transform(e.user$)).name), l(n, 31, 0, r['ɵunv'](n, 31, 0, r['ɵnov'](n, 32).transform(e.user$)).email), l(n, 34, 0, r['ɵunv'](n, 34, 0, r['ɵnov'](n, 35).transform('USER.LOGOUT'))), l(n, 38, 0, r['ɵnov'](n, 39).target, r['ɵnov'](n, 39).href), l(n, 49, 0, r['ɵunv'](n, 49, 0, r['ɵnov'](n, 50).transform('USER.MYPROFILE'))), l(n, 52, 0, r['ɵunv'](n, 52, 0, r['ɵnov'](n, 53).transform('USER.SETTINGS'))), l(n, 63, 0, r['ɵunv'](n, 63, 0, r['ɵnov'](n, 64).transform('USER.AVAILABLEPRODUCTS'))), l(n, 72, 0, r['ɵunv'](n, 72, 0, r['ɵnov'](n, 73).transform('USER.DOCUMENTSTOSIGN'))), l(n, 75, 0, r['ɵunv'](n, 75, 0, r['ɵnov'](n, 76).transform(e.user$)).document), l(n, 84, 0, r['ɵunv'](n, 84, 0, r['ɵnov'](n, 85).transform('USER.DOCUMENTSTOSIGNCONST'))), l(n, 87, 0, r['ɵunv'](n, 87, 0, r['ɵnov'](n, 88).transform(e.user$)).document_n51), l(n, 96, 0, r['ɵunv'](n, 96, 0, r['ɵnov'](n, 97).transform('USER.NOTIFICAIONMAKE'))), l(n, 99, 0, r['ɵunv'](n, 99, 0, r['ɵnov'](n, 100).transform(e.user$)).notification), l(n, 101, 0, r['ɵnov'](n, 102).target, r['ɵnov'](n, 102).href), l(n, 104, 0, r['ɵunv'](n, 104, 0, r['ɵnov'](n, 105).transform('USER.BUYPACKAGE')));
                    });
                }
                function Dn(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 4, 'div', [
                            [
                                'class',
                                'offcanvas p-10'
                            ],
                            [
                                'id',
                                'kt_quick_user'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵdid'](1, 278528, null, 0, h.NgClass, [
                            r.IterableDiffers,
                            r.KeyValueDiffers,
                            r.ElementRef,
                            r.Renderer2
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
                        (l()(), r['ɵand'](16777216, null, null, 2, null, Rn)),
                        r['ɵdid'](3, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef])
                    ], function (l, n) {
                        var e = n.component;
                        l(n, 1, 0, 'offcanvas p-10', e.extrasUserOffcanvasDirection), l(n, 3, 0, r['ɵunv'](n, 3, 0, r['ɵnov'](n, 4).transform(e.user$)));
                    }, null);
                }
                var In = o('vMR4'), xn = function () {
                    var l;
                    return {
                        init: function (n) {
                            (l = Zl.a.getById(n)) && new In.a(l, {
                                offset: 300,
                                speed: 600
                            });
                        },
                        getElement: function () {
                            return l;
                        }
                    };
                }(), En = function () {
                    function l() {
                        d(this, l);
                    }
                    return f(l, [
                        {
                            key: 'ngOnInit',
                            value: function () {
                            }
                        },
                        {
                            key: 'ngAfterViewInit',
                            value: function () {
                                Zl.a.ready(function () {
                                    xn.init('kt_scrolltop');
                                });
                            }
                        }
                    ]), l;
                }(), An = r['ɵcrt']({
                    encapsulation: 0,
                    styles: [['']],
                    data: {}
                });
                function Tn(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 3, 'div', [
                            [
                                'class',
                                'scrolltop'
                            ],
                            [
                                'id',
                                'kt_scrolltop'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 16777216, null, null, 2, 'span', [
                            [
                                'cacheSVG',
                                'true'
                            ],
                            [
                                'class',
                                'svg-icon'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵprd'](512, null, p.SVGCacheService, p.SVGCacheService, [
                            [
                                2,
                                h.APP_BASE_HREF
                            ],
                            [
                                2,
                                h.PlatformLocation
                            ],
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            m.HttpClient,
                            m.HttpBackend,
                            r.RendererFactory2
                        ]),
                        r['ɵdid'](3, 737280, null, 0, v.InlineSVGDirective, [
                            r.ElementRef,
                            r.ViewContainerRef,
                            r.ComponentFactoryResolver,
                            p.SVGCacheService,
                            r.Renderer2,
                            b.InlineSVGService,
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            r.PLATFORM_ID
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
                var Vn = function () {
                    function l(n) {
                        d(this, l), this.layout = n, this.headerLogo = '', this.asideSelfDisplay = !0, this.headerMenuSelfDisplay = !0, this.headerMobileClasses = '', this.headerMobileAttributes = {};
                    }
                    return f(l, [
                        {
                            key: 'ngOnInit',
                            value: function () {
                                this.headerMobileClasses = this.layout.getStringCSSClasses('header_mobile'), this.headerMobileAttributes = this.layout.getHTMLAttributes('header_mobile'), this.headerLogo = this.getLogoUrl(), this.asideSelfDisplay = this.layout.getProp('aside.self.display'), this.headerMenuSelfDisplay = this.layout.getProp('header.menu.self.display');
                            }
                        },
                        {
                            key: 'ngAfterViewInit',
                            value: function () {
                            }
                        },
                        {
                            key: 'getLogoUrl',
                            value: function () {
                                var l = this.layout.getProp('header.self.theme') || '', n = this.layout.getProp('brand.self.theme') || '', e = 'logo-light.png';
                                return this.asideSelfDisplay ? 'light' === n && (e = 'logo-dark.png') : 'light' === l && (e = 'logo-dark.png'), './assets/media/logos/' + e;
                            }
                        }
                    ]), l;
                }(), _n = r['ɵcrt']({
                    encapsulation: 0,
                    styles: [['']],
                    data: {}
                });
                function Ln(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 1, 'button', [
                            [
                                'class',
                                'btn p-0 burger-icon burger-icon-left'
                            ],
                            [
                                'id',
                                'kt_aside_mobile_toggle'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵeld'](2, 0, null, null, 0, 'span', [], null, null, null, null, null))
                    ], null, null);
                }
                function On(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 1, 'button', [
                            [
                                'class',
                                'btn p-0 burger-icon ml-4'
                            ],
                            [
                                'id',
                                'kt_header_mobile_toggle'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵeld'](2, 0, null, null, 0, 'span', [], null, null, null, null, null))
                    ], null, null);
                }
                function Pn(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 2, 'a', [[
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
                            var t = !0;
                            return 'click' === n && (t = !1 !== r['ɵnov'](l, 1).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && t), t;
                        }, null, null)),
                        r['ɵdid'](1, 671744, null, 0, y.u, [
                            y.r,
                            y.a,
                            h.LocationStrategy
                        ], {
                            routerLink: [
                                0,
                                'routerLink'
                            ]
                        }, null),
                        (l()(), r['ɵeld'](2, 0, null, null, 0, 'img', [[
                            'alt',
                            'Logo'
                        ]], [[
                            1,
                            'src',
                            4
                        ]], null, null, null, null)),
                        (l()(), r['ɵeld'](3, 0, null, null, 8, 'div', [[
                            'class',
                            'd-flex align-items-center'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, Ln)),
                        r['ɵdid'](5, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, On)),
                        r['ɵdid'](7, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵeld'](8, 0, null, null, 3, 'button', [
                            [
                                'class',
                                'btn btn-hover-text-primary p-0 ml-2'
                            ],
                            [
                                'id',
                                'kt_header_mobile_topbar_toggle'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵeld'](9, 16777216, null, null, 2, 'span', [
                            [
                                'cacheSVG',
                                'true'
                            ],
                            [
                                'class',
                                'svg-icon svg-icon-xl'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵprd'](512, null, p.SVGCacheService, p.SVGCacheService, [
                            [
                                2,
                                h.APP_BASE_HREF
                            ],
                            [
                                2,
                                h.PlatformLocation
                            ],
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            m.HttpClient,
                            m.HttpBackend,
                            r.RendererFactory2
                        ]),
                        r['ɵdid'](11, 737280, null, 0, v.InlineSVGDirective, [
                            r.ElementRef,
                            r.ViewContainerRef,
                            r.ComponentFactoryResolver,
                            p.SVGCacheService,
                            r.Renderer2,
                            b.InlineSVGService,
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            r.PLATFORM_ID
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
                        l(n, 0, 0, r['ɵnov'](n, 1).target, r['ɵnov'](n, 1).href), l(n, 2, 0, e.headerLogo);
                    });
                }
                var Mn = o('9AJC'), Hn = o('mrSG'), Gn = o('XNiG'), Bn = o('xgIS'), Nn = (o('VRyK'), o('3UWI')), Fn = o('1G5W');
                function jn(l) {
                    return getComputedStyle(l);
                }
                function Kn(l, n) {
                    for (var e in n) {
                        var t = n[e];
                        'number' == typeof t && (t += 'px'), l.style[e] = t;
                    }
                    return l;
                }
                function zn(l) {
                    var n = document.createElement('div');
                    return n.className = l, n;
                }
                o('/uUt'), o('CqXF');
                var Un = 'undefined' != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);
                function qn(l, n) {
                    if (!Un)
                        throw new Error('No element matching method supported');
                    return Un.call(l, n);
                }
                function Wn(l) {
                    l.remove ? l.remove() : l.parentNode && l.parentNode.removeChild(l);
                }
                function Yn(l, n) {
                    return Array.prototype.filter.call(l.children, function (l) {
                        return qn(l, n);
                    });
                }
                var Xn = function (l) {
                    return 'ps__thumb-' + l;
                }, $n = function (l) {
                    return 'ps__rail-' + l;
                }, Zn = function (l) {
                    return 'ps--active-' + l;
                }, Jn = function (l) {
                    return 'ps--scrolling-' + l;
                }, Qn = {
                    x: null,
                    y: null
                };
                function le(l, n) {
                    var e = l.element.classList, t = Jn(n);
                    e.contains(t) ? clearTimeout(Qn[n]) : e.add(t);
                }
                function ne(l, n) {
                    Qn[n] = setTimeout(function () {
                        return l.isAlive && l.element.classList.remove(Jn(n));
                    }, l.settings.scrollingThreshold);
                }
                var ee = function (l) {
                    this.element = l, this.handlers = {};
                }, te = { isEmpty: { configurable: !0 } };
                ee.prototype.bind = function (l, n) {
                    void 0 === this.handlers[l] && (this.handlers[l] = []), this.handlers[l].push(n), this.element.addEventListener(l, n, !1);
                }, ee.prototype.unbind = function (l, n) {
                    var e = this;
                    this.handlers[l] = this.handlers[l].filter(function (t) {
                        return !(!n || t === n) || (e.element.removeEventListener(l, t, !1), !1);
                    });
                }, ee.prototype.unbindAll = function () {
                    for (var l in this.handlers)
                        this.unbind(l);
                }, te.isEmpty.get = function () {
                    var l = this;
                    return Object.keys(this.handlers).every(function (n) {
                        return 0 === l.handlers[n].length;
                    });
                }, Object.defineProperties(ee.prototype, te);
                var ue = function () {
                    this.eventElements = [];
                };
                function ie(l) {
                    if ('function' == typeof window.CustomEvent)
                        return new CustomEvent(l);
                    var n = document.createEvent('CustomEvent');
                    return n.initCustomEvent(l, !1, !1, void 0), n;
                }
                function oe(l, n, e, t, u) {
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
                        var i = e[0], o = e[1], a = e[2], r = e[3], s = e[4], d = e[5];
                        void 0 === t && (t = !0), void 0 === u && (u = !1);
                        var c = l.element;
                        l.reach[r] = null, c[a] < 1 && (l.reach[r] = 'start'), c[a] > l[i] - l[o] - 1 && (l.reach[r] = 'end'), n && (c.dispatchEvent(ie('ps-scroll-' + r)), n < 0 ? c.dispatchEvent(ie('ps-scroll-' + s)) : n > 0 && c.dispatchEvent(ie('ps-scroll-' + d)), t && function (l, n) {
                            le(l, n), ne(l, n);
                        }(l, r)), l.reach[r] && (n || u) && c.dispatchEvent(ie('ps-' + r + '-reach-' + l.reach[r]));
                    }(l, e, i, t, u);
                }
                function ae(l) {
                    return parseInt(l, 10) || 0;
                }
                ue.prototype.eventElement = function (l) {
                    var n = this.eventElements.filter(function (n) {
                        return n.element === l;
                    })[0];
                    return n || (n = new ee(l), this.eventElements.push(n)), n;
                }, ue.prototype.bind = function (l, n, e) {
                    this.eventElement(l).bind(n, e);
                }, ue.prototype.unbind = function (l, n, e) {
                    var t = this.eventElement(l);
                    t.unbind(n, e), t.isEmpty && this.eventElements.splice(this.eventElements.indexOf(t), 1);
                }, ue.prototype.unbindAll = function () {
                    this.eventElements.forEach(function (l) {
                        return l.unbindAll();
                    }), this.eventElements = [];
                }, ue.prototype.once = function (l, n, e) {
                    var t = this.eventElement(l);
                    t.bind(n, function l(u) {
                        t.unbind(n, l), e(u);
                    });
                };
                var re = {
                    isWebKit: 'undefined' != typeof document && 'WebkitAppearance' in document.documentElement.style,
                    supportsTouch: 'undefined' != typeof window && ('ontouchstart' in window || 'maxTouchPoints' in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch),
                    supportsIePointer: 'undefined' != typeof navigator && navigator.msMaxTouchPoints,
                    isChrome: 'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
                };
                function se(l) {
                    var n = l.element, e = Math.floor(n.scrollTop), t = n.getBoundingClientRect();
                    l.containerWidth = Math.ceil(t.width), l.containerHeight = Math.ceil(t.height), l.contentWidth = n.scrollWidth, l.contentHeight = n.scrollHeight, n.contains(l.scrollbarXRail) || (Yn(n, $n('x')).forEach(function (l) {
                        return Wn(l);
                    }), n.appendChild(l.scrollbarXRail)), n.contains(l.scrollbarYRail) || (Yn(n, $n('y')).forEach(function (l) {
                        return Wn(l);
                    }), n.appendChild(l.scrollbarYRail)), !l.settings.suppressScrollX && l.containerWidth + l.settings.scrollXMarginOffset < l.contentWidth ? (l.scrollbarXActive = !0, l.railXWidth = l.containerWidth - l.railXMarginWidth, l.railXRatio = l.containerWidth / l.railXWidth, l.scrollbarXWidth = de(l, ae(l.railXWidth * l.containerWidth / l.contentWidth)), l.scrollbarXLeft = ae((l.negativeScrollAdjustment + n.scrollLeft) * (l.railXWidth - l.scrollbarXWidth) / (l.contentWidth - l.containerWidth))) : l.scrollbarXActive = !1, !l.settings.suppressScrollY && l.containerHeight + l.settings.scrollYMarginOffset < l.contentHeight ? (l.scrollbarYActive = !0, l.railYHeight = l.containerHeight - l.railYMarginHeight, l.railYRatio = l.containerHeight / l.railYHeight, l.scrollbarYHeight = de(l, ae(l.railYHeight * l.containerHeight / l.contentHeight)), l.scrollbarYTop = ae(e * (l.railYHeight - l.scrollbarYHeight) / (l.contentHeight - l.containerHeight))) : l.scrollbarYActive = !1, l.scrollbarXLeft >= l.railXWidth - l.scrollbarXWidth && (l.scrollbarXLeft = l.railXWidth - l.scrollbarXWidth), l.scrollbarYTop >= l.railYHeight - l.scrollbarYHeight && (l.scrollbarYTop = l.railYHeight - l.scrollbarYHeight), function (l, n) {
                        var e = { width: n.railXWidth }, t = Math.floor(l.scrollTop);
                        e.left = n.isRtl ? n.negativeScrollAdjustment + l.scrollLeft + n.containerWidth - n.contentWidth : l.scrollLeft, n.isScrollbarXUsingBottom ? e.bottom = n.scrollbarXBottom - t : e.top = n.scrollbarXTop + t, Kn(n.scrollbarXRail, e);
                        var u = {
                            top: t,
                            height: n.railYHeight
                        };
                        n.isScrollbarYUsingRight ? u.right = n.isRtl ? n.contentWidth - (n.negativeScrollAdjustment + l.scrollLeft) - n.scrollbarYRight - n.scrollbarYOuterWidth - 9 : n.scrollbarYRight - l.scrollLeft : u.left = n.isRtl ? n.negativeScrollAdjustment + l.scrollLeft + 2 * n.containerWidth - n.contentWidth - n.scrollbarYLeft - n.scrollbarYOuterWidth : n.scrollbarYLeft + l.scrollLeft, Kn(n.scrollbarYRail, u), Kn(n.scrollbarX, {
                            left: n.scrollbarXLeft,
                            width: n.scrollbarXWidth - n.railBorderXWidth
                        }), Kn(n.scrollbarY, {
                            top: n.scrollbarYTop,
                            height: n.scrollbarYHeight - n.railBorderYWidth
                        });
                    }(n, l), l.scrollbarXActive ? n.classList.add(Zn('x')) : (n.classList.remove(Zn('x')), l.scrollbarXWidth = 0, l.scrollbarXLeft = 0, n.scrollLeft = !0 === l.isRtl ? l.contentWidth : 0), l.scrollbarYActive ? n.classList.add(Zn('y')) : (n.classList.remove(Zn('y')), l.scrollbarYHeight = 0, l.scrollbarYTop = 0, n.scrollTop = 0);
                }
                function de(l, n) {
                    return l.settings.minScrollbarLength && (n = Math.max(n, l.settings.minScrollbarLength)), l.settings.maxScrollbarLength && (n = Math.min(n, l.settings.maxScrollbarLength)), n;
                }
                function ce(l, n) {
                    var e = n[0], t = n[1], u = n[2], i = n[3], o = n[4], a = n[5], r = n[6], s = n[7], d = n[8], c = l.element, f = null, p = null, h = null;
                    function g(n) {
                        n.touches && n.touches[0] && (n[u] = n.touches[0].pageY), c[r] = f + h * (n[u] - p), le(l, s), se(l), n.stopPropagation(), n.preventDefault();
                    }
                    function m() {
                        ne(l, s), l[d].classList.remove('ps--clicking'), l.event.unbind(l.ownerDocument, 'mousemove', g);
                    }
                    function v(n, o) {
                        f = c[r], o && n.touches && (n[u] = n.touches[0].pageY), p = n[u], h = (l[t] - l[e]) / (l[i] - l[a]), o ? l.event.bind(l.ownerDocument, 'touchmove', g) : (l.event.bind(l.ownerDocument, 'mousemove', g), l.event.once(l.ownerDocument, 'mouseup', m), n.preventDefault()), l[d].classList.add('ps--clicking'), n.stopPropagation();
                    }
                    l.event.bind(l[o], 'mousedown', function (l) {
                        v(l);
                    }), l.event.bind(l[o], 'touchstart', function (l) {
                        v(l, !0);
                    });
                }
                var fe = {
                    'click-rail': function (l) {
                        l.event.bind(l.scrollbarY, 'mousedown', function (l) {
                            return l.stopPropagation();
                        }), l.event.bind(l.scrollbarYRail, 'mousedown', function (n) {
                            var e = n.pageY - window.pageYOffset - l.scrollbarYRail.getBoundingClientRect().top;
                            l.element.scrollTop += (e > l.scrollbarYTop ? 1 : -1) * l.containerHeight, se(l), n.stopPropagation();
                        }), l.event.bind(l.scrollbarX, 'mousedown', function (l) {
                            return l.stopPropagation();
                        }), l.event.bind(l.scrollbarXRail, 'mousedown', function (n) {
                            var e = n.pageX - window.pageXOffset - l.scrollbarXRail.getBoundingClientRect().left;
                            l.element.scrollLeft += (e > l.scrollbarXLeft ? 1 : -1) * l.containerWidth, se(l), n.stopPropagation();
                        });
                    },
                    'drag-thumb': function (l) {
                        ce(l, [
                            'containerWidth',
                            'contentWidth',
                            'pageX',
                            'railXWidth',
                            'scrollbarX',
                            'scrollbarXWidth',
                            'scrollLeft',
                            'x',
                            'scrollbarXRail'
                        ]), ce(l, [
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
                            if (!(e.isDefaultPrevented && e.isDefaultPrevented() || e.defaultPrevented) && (qn(n, ':hover') || qn(l.scrollbarX, ':focus') || qn(l.scrollbarY, ':focus'))) {
                                var t, u = document.activeElement ? document.activeElement : l.ownerDocument.activeElement;
                                if (u) {
                                    if ('IFRAME' === u.tagName)
                                        u = u.contentDocument.activeElement;
                                    else
                                        for (; u.shadowRoot;)
                                            u = u.shadowRoot.activeElement;
                                    if (qn(t = u, 'input,[contenteditable]') || qn(t, 'select,[contenteditable]') || qn(t, 'textarea,[contenteditable]') || qn(t, 'button,[contenteditable]'))
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
                                l.settings.suppressScrollX && 0 !== i || l.settings.suppressScrollY && 0 !== o || (n.scrollTop -= o, n.scrollLeft += i, se(l), function (e, t) {
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
                                if (!re.isWebKit && n.querySelector('select:focus'))
                                    return !0;
                                if (!n.contains(l))
                                    return !1;
                                for (var u = l; u && u !== n;) {
                                    if (u.classList.contains('ps__child--consume'))
                                        return !0;
                                    var i = jn(u);
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
                                l.settings.useBothWheelAxes ? l.scrollbarYActive && !l.scrollbarXActive ? (i ? n.scrollTop -= i * l.settings.wheelSpeed : n.scrollTop += u * l.settings.wheelSpeed, o = !0) : l.scrollbarXActive && !l.scrollbarYActive && (u ? n.scrollLeft += u * l.settings.wheelSpeed : n.scrollLeft -= i * l.settings.wheelSpeed, o = !0) : (n.scrollTop -= i * l.settings.wheelSpeed, n.scrollLeft += u * l.settings.wheelSpeed), se(l), (o = o || function (e, t) {
                                    var u = Math.floor(n.scrollTop), i = 0 === n.scrollTop, o = u + n.offsetHeight === n.scrollHeight, a = 0 === n.scrollLeft, r = n.scrollLeft + n.offsetWidth === n.scrollWidth;
                                    return !(Math.abs(t) > Math.abs(e) ? i || o : a || r) || !l.settings.wheelPropagation;
                                }(u, i)) && !e.ctrlKey && (e.stopPropagation(), e.preventDefault());
                            }
                        }
                        void 0 !== window.onwheel ? l.event.bind(n, 'wheel', e) : void 0 !== window.onmousewheel && l.event.bind(n, 'mousewheel', e);
                    },
                    touch: function (l) {
                        if (re.supportsTouch || re.supportsIePointer) {
                            var n = l.element, e = {}, t = 0, u = {}, i = null;
                            re.supportsTouch ? (l.event.bind(n, 'touchstart', s), l.event.bind(n, 'touchmove', d), l.event.bind(n, 'touchend', c)) : re.supportsIePointer && (window.PointerEvent ? (l.event.bind(n, 'pointerdown', s), l.event.bind(n, 'pointermove', d), l.event.bind(n, 'pointerup', c)) : window.MSPointerEvent && (l.event.bind(n, 'MSPointerDown', s), l.event.bind(n, 'MSPointerMove', d), l.event.bind(n, 'MSPointerUp', c)));
                        }
                        function o(e, t) {
                            n.scrollTop -= t, n.scrollLeft -= e, se(l);
                        }
                        function a(l) {
                            return l.targetTouches ? l.targetTouches[0] : l;
                        }
                        function r(l) {
                            return !(l.pointerType && 'pen' === l.pointerType && 0 === l.buttons || (!l.targetTouches || 1 !== l.targetTouches.length) && (!l.pointerType || 'mouse' === l.pointerType || l.pointerType === l.MSPOINTER_TYPE_MOUSE));
                        }
                        function s(l) {
                            if (r(l)) {
                                var n = a(l);
                                e.pageX = n.pageX, e.pageY = n.pageY, t = new Date().getTime(), null !== i && clearInterval(i);
                            }
                        }
                        function d(i) {
                            if (r(i)) {
                                var s = a(i), d = {
                                    pageX: s.pageX,
                                    pageY: s.pageY
                                }, c = d.pageX - e.pageX, f = d.pageY - e.pageY;
                                if (function (l, e, t) {
                                    if (!n.contains(l))
                                        return !1;
                                    for (var u = l; u && u !== n;) {
                                        if (u.classList.contains('ps__child--consume'))
                                            return !0;
                                        var i = jn(u);
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
                                            return 0 === window.scrollY && t > 0 && re.isChrome;
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
                }, pe = function (l, n) {
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
                    this.isRtl = 'rtl' === jn(l).direction, !0 === this.isRtl && l.classList.add('ps__rtl'), this.isNegativeScroll = (i = l.scrollLeft, l.scrollLeft = -1, u = l.scrollLeft < 0, l.scrollLeft = i, u), this.negativeScrollAdjustment = this.isNegativeScroll ? l.scrollWidth - l.clientWidth : 0, this.event = new ue(), this.ownerDocument = l.ownerDocument || document, this.scrollbarXRail = zn($n('x')), l.appendChild(this.scrollbarXRail), this.scrollbarX = zn(Xn('x')), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute('tabindex', 0), this.event.bind(this.scrollbarX, 'focus', o), this.event.bind(this.scrollbarX, 'blur', a), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
                    var r = jn(this.scrollbarXRail);
                    this.scrollbarXBottom = parseInt(r.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = ae(r.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = ae(r.borderLeftWidth) + ae(r.borderRightWidth), Kn(this.scrollbarXRail, { display: 'block' }), this.railXMarginWidth = ae(r.marginLeft) + ae(r.marginRight), Kn(this.scrollbarXRail, { display: '' }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = zn($n('y')), l.appendChild(this.scrollbarYRail), this.scrollbarY = zn(Xn('y')), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute('tabindex', 0), this.event.bind(this.scrollbarY, 'focus', o), this.event.bind(this.scrollbarY, 'blur', a), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
                    var s = jn(this.scrollbarYRail);
                    this.scrollbarYRight = parseInt(s.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = ae(s.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? function (l) {
                        var n = jn(l);
                        return ae(n.width) + ae(n.paddingLeft) + ae(n.paddingRight) + ae(n.borderLeftWidth) + ae(n.borderRightWidth);
                    }(this.scrollbarY) : null, this.railBorderYWidth = ae(s.borderTopWidth) + ae(s.borderBottomWidth), Kn(this.scrollbarYRail, { display: 'block' }), this.railYMarginHeight = ae(s.marginTop) + ae(s.marginBottom), Kn(this.scrollbarYRail, { display: '' }), this.railYHeight = null, this.railYRatio = null, this.reach = {
                        x: l.scrollLeft <= 0 ? 'start' : l.scrollLeft >= this.contentWidth - this.containerWidth ? 'end' : null,
                        y: l.scrollTop <= 0 ? 'start' : l.scrollTop >= this.contentHeight - this.containerHeight ? 'end' : null
                    }, this.isAlive = !0, this.settings.handlers.forEach(function (l) {
                        return fe[l](e);
                    }), this.lastScrollTop = Math.floor(l.scrollTop), this.lastScrollLeft = l.scrollLeft, this.event.bind(this.element, 'scroll', function (l) {
                        return e.onScroll(l);
                    }), se(this);
                };
                pe.prototype.update = function () {
                    this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, Kn(this.scrollbarXRail, { display: 'block' }), Kn(this.scrollbarYRail, { display: 'block' }), this.railXMarginWidth = ae(jn(this.scrollbarXRail).marginLeft) + ae(jn(this.scrollbarXRail).marginRight), this.railYMarginHeight = ae(jn(this.scrollbarYRail).marginTop) + ae(jn(this.scrollbarYRail).marginBottom), Kn(this.scrollbarXRail, { display: 'none' }), Kn(this.scrollbarYRail, { display: 'none' }), se(this), oe(this, 'top', 0, !1, !0), oe(this, 'left', 0, !1, !0), Kn(this.scrollbarXRail, { display: '' }), Kn(this.scrollbarYRail, { display: '' }));
                }, pe.prototype.onScroll = function (l) {
                    this.isAlive && (se(this), oe(this, 'top', this.element.scrollTop - this.lastScrollTop), oe(this, 'left', this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft);
                }, pe.prototype.destroy = function () {
                    this.isAlive && (this.event.unbindAll(), Wn(this.scrollbarX), Wn(this.scrollbarY), Wn(this.scrollbarXRail), Wn(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1);
                }, pe.prototype.removePsClasses = function () {
                    this.element.className = this.element.className.split(' ').filter(function (l) {
                        return !l.match(/^ps([-_].+|)$/);
                    }).join(' ');
                };
                var he, ge, me = pe, ve = o('bdgK'), be = new r.InjectionToken('PERFECT_SCROLLBAR_CONFIG'), ye = function l(n, e, t, u) {
                    d(this, l), this.x = n, this.y = e, this.w = t, this.h = u;
                }, we = function l(n, e) {
                    d(this, l), this.x = n, this.y = e;
                }, ke = [
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
                ], Se = function () {
                    function l() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        d(this, l), this.assign(n);
                    }
                    return f(l, [{
                        key: 'assign',
                        value: function () {
                            var l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            for (var n in l)
                                this[n] = l[n];
                        }
                    }]), l;
                }(), Ce = ((ge = function () {
                    function l(n, e, t, u, i) {
                        d(this, l), this.zone = n, this.differs = e, this.elementRef = t, this.platformId = u, this.defaults = i, this.instance = null, this.ro = null, this.timeout = null, this.animation = null, this.configDiff = null, this.ngDestroy = new Gn.a(), this.disabled = !1, this.psScrollY = new r.EventEmitter(), this.psScrollX = new r.EventEmitter(), this.psScrollUp = new r.EventEmitter(), this.psScrollDown = new r.EventEmitter(), this.psScrollLeft = new r.EventEmitter(), this.psScrollRight = new r.EventEmitter(), this.psYReachEnd = new r.EventEmitter(), this.psYReachStart = new r.EventEmitter(), this.psXReachEnd = new r.EventEmitter(), this.psXReachStart = new r.EventEmitter();
                    }
                    return f(l, [
                        {
                            key: 'ngOnInit',
                            value: function () {
                                var l = this;
                                if (!this.disabled && Object(h.isPlatformBrowser)(this.platformId)) {
                                    var n = new Se(this.defaults);
                                    n.assign(this.config), this.zone.runOutsideAngular(function () {
                                        l.instance = new me(l.elementRef.nativeElement, n);
                                    }), this.configDiff || (this.configDiff = this.differs.find(this.config || {}).create(), this.configDiff.diff(this.config || {})), this.zone.runOutsideAngular(function () {
                                        l.ro = new ve.a(function () {
                                            l.update();
                                        }), l.elementRef.nativeElement.children[0] && l.ro.observe(l.elementRef.nativeElement.children[0]), l.ro.observe(l.elementRef.nativeElement);
                                    }), this.zone.runOutsideAngular(function () {
                                        ke.forEach(function (n) {
                                            var e = n.replace(/([A-Z])/g, function (l) {
                                                return '-' + l.toLowerCase();
                                            });
                                            Object(Bn.a)(l.elementRef.nativeElement, e).pipe(Object(Nn.a)(20), Object(Fn.a)(l.ngDestroy)).subscribe(function (e) {
                                                l[n].emit(e);
                                            });
                                        });
                                    });
                                }
                            }
                        },
                        {
                            key: 'ngOnDestroy',
                            value: function () {
                                var l = this;
                                Object(h.isPlatformBrowser)(this.platformId) && (this.ngDestroy.next(), this.ngDestroy.complete(), this.ro && this.ro.disconnect(), this.timeout && 'undefined' != typeof window && window.clearTimeout(this.timeout), this.zone.runOutsideAngular(function () {
                                    l.instance && l.instance.destroy();
                                }), this.instance = null);
                            }
                        },
                        {
                            key: 'ngDoCheck',
                            value: function () {
                                !this.disabled && this.configDiff && Object(h.isPlatformBrowser)(this.platformId) && this.configDiff.diff(this.config || {}) && (this.ngOnDestroy(), this.ngOnInit());
                            }
                        },
                        {
                            key: 'ngOnChanges',
                            value: function (l) {
                                l.disabled && !l.disabled.isFirstChange() && Object(h.isPlatformBrowser)(this.platformId) && l.disabled.currentValue !== l.disabled.previousValue && (!0 === l.disabled.currentValue ? this.ngOnDestroy() : !1 === l.disabled.currentValue && this.ngOnInit());
                            }
                        },
                        {
                            key: 'ps',
                            value: function () {
                                return this.instance;
                            }
                        },
                        {
                            key: 'update',
                            value: function () {
                                var l = this;
                                'undefined' != typeof window && (this.timeout && window.clearTimeout(this.timeout), this.timeout = window.setTimeout(function () {
                                    if (!l.disabled && l.configDiff)
                                        try {
                                            l.zone.runOutsideAngular(function () {
                                                l.instance && l.instance.update();
                                            });
                                        } catch (n) {
                                        }
                                }, 0));
                            }
                        },
                        {
                            key: 'geometry',
                            value: function () {
                                var l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'scroll';
                                return new ye(this.elementRef.nativeElement[l + 'Left'], this.elementRef.nativeElement[l + 'Top'], this.elementRef.nativeElement[l + 'Width'], this.elementRef.nativeElement[l + 'Height']);
                            }
                        },
                        {
                            key: 'position',
                            value: function () {
                                var l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                return !l && this.instance ? new we(this.instance.reach.x || 0, this.instance.reach.y || 0) : new we(this.elementRef.nativeElement.scrollLeft, this.elementRef.nativeElement.scrollTop);
                            }
                        },
                        {
                            key: 'scrollable',
                            value: function () {
                                var l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'any', n = this.elementRef.nativeElement;
                                return 'any' === l ? n.classList.contains('ps--active-x') || n.classList.contains('ps--active-y') : 'both' === l ? n.classList.contains('ps--active-x') && n.classList.contains('ps--active-y') : n.classList.contains('ps--active-' + l);
                            }
                        },
                        {
                            key: 'scrollTo',
                            value: function (l, n, e) {
                                this.disabled || (null == n && null == e ? this.animateScrolling('scrollTop', l, e) : (null != l && this.animateScrolling('scrollLeft', l, e), null != n && this.animateScrolling('scrollTop', n, e)));
                            }
                        },
                        {
                            key: 'scrollToX',
                            value: function (l, n) {
                                this.animateScrolling('scrollLeft', l, n);
                            }
                        },
                        {
                            key: 'scrollToY',
                            value: function (l, n) {
                                this.animateScrolling('scrollTop', l, n);
                            }
                        },
                        {
                            key: 'scrollToTop',
                            value: function (l, n) {
                                this.animateScrolling('scrollTop', l || 0, n);
                            }
                        },
                        {
                            key: 'scrollToLeft',
                            value: function (l, n) {
                                this.animateScrolling('scrollLeft', l || 0, n);
                            }
                        },
                        {
                            key: 'scrollToRight',
                            value: function (l, n) {
                                this.animateScrolling('scrollLeft', this.elementRef.nativeElement.scrollWidth - this.elementRef.nativeElement.clientWidth - (l || 0), n);
                            }
                        },
                        {
                            key: 'scrollToBottom',
                            value: function (l, n) {
                                this.animateScrolling('scrollTop', this.elementRef.nativeElement.scrollHeight - this.elementRef.nativeElement.clientHeight - (l || 0), n);
                            }
                        },
                        {
                            key: 'scrollToElement',
                            value: function (l, n, e) {
                                var t = this.elementRef.nativeElement.querySelector(l);
                                if (t) {
                                    var u = t.getBoundingClientRect(), i = this.elementRef.nativeElement.getBoundingClientRect();
                                    this.elementRef.nativeElement.classList.contains('ps--active-x') && this.animateScrolling('scrollLeft', u.left - i.left + this.elementRef.nativeElement.scrollLeft + (n || 0), e), this.elementRef.nativeElement.classList.contains('ps--active-y') && this.animateScrolling('scrollTop', u.top - i.top + this.elementRef.nativeElement.scrollTop + (n || 0), e);
                                }
                            }
                        },
                        {
                            key: 'animateScrolling',
                            value: function (l, n, e) {
                                var t = this;
                                if (this.animation && (window.cancelAnimationFrame(this.animation), this.animation = null), e && 'undefined' != typeof window) {
                                    if (n !== this.elementRef.nativeElement[l]) {
                                        var u = 0, i = 0, o = performance.now(), a = this.elementRef.nativeElement[l], r = (a - n) / 2;
                                        window.requestAnimationFrame(function s(d) {
                                            i += Math.PI / (e / (d - o)), u = Math.round(n + r + r * Math.cos(i)), t.elementRef.nativeElement[l] === a && (i >= Math.PI ? t.animateScrolling(l, n, 0) : (t.elementRef.nativeElement[l] = u, a = t.elementRef.nativeElement[l], o = d, t.animation = window.requestAnimationFrame(s)));
                                        });
                                    }
                                } else
                                    this.elementRef.nativeElement[l] = n;
                            }
                        }
                    ]), l;
                }()).ɵfac = function (l) {
                    return new (l || ge)(r['ɵɵdirectiveInject'](r.NgZone), r['ɵɵdirectiveInject'](r.KeyValueDiffers), r['ɵɵdirectiveInject'](r.ElementRef), r['ɵɵdirectiveInject'](r.PLATFORM_ID), r['ɵɵdirectiveInject'](be, 8));
                }, ge.ɵdir = r['ɵɵdefineDirective']({
                    type: ge,
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
                    features: [r['ɵɵNgOnChangesFeature']]
                }), ge = Object(Hn.b)([
                    Object(Hn.d)(3, Object(r.Inject)(r.PLATFORM_ID)),
                    Object(Hn.d)(4, Object(r.Optional)()),
                    Object(Hn.d)(4, Object(r.Inject)(be))
                ], ge)), Re = ((he = function l() {
                    d(this, l);
                }).ɵmod = r['ɵɵdefineNgModule']({ type: he }), he.ɵinj = r['ɵɵdefineInjector']({
                    factory: function (l) {
                        return new (l || he)();
                    },
                    imports: [
                        [h.CommonModule],
                        h.CommonModule
                    ]
                }), he), De = o('XXMa'), Ie = o('nBqb'), xe = function () {
                    function l(n, e, t) {
                        d(this, l), this.layout = n, this.store = e, this.router = t, this.extrasCartDropdownStyle = 'light';
                    }
                    return f(l, [
                        {
                            key: 'ngOnInit',
                            value: function () {
                                this.extrasCartDropdownStyle = this.layout.getProp('extras.cart.dropdown.style'), this.packages$ = this.store.select(De.c), this.cart$ = this.store.select(De.a);
                            }
                        },
                        {
                            key: 'increase',
                            value: function (l) {
                                this.store.dispatch(Object(Ie.h)({ packId: l }));
                            }
                        },
                        {
                            key: 'decrease',
                            value: function (l, n) {
                                this.store.dispatch(1 == n ? Object(Ie.e)({ packId: l }) : Object(Ie.d)({ packId: l }));
                            }
                        },
                        {
                            key: 'goToCheckout',
                            value: function () {
                                this.router.navigateByUrl('/check-out');
                            }
                        }
                    ]), l;
                }(), Ee = r['ɵcrt']({
                    encapsulation: 0,
                    styles: [['']],
                    data: {}
                });
                function Ae(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 8, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 7, 'div', [[
                            'class',
                            'd-flex align-items-center p-10 rounded-top bg-light'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](2, 0, null, null, 1, 'span', [[
                            'class',
                            'btn btn-md btn-icon bg-light-success mr-4'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](3, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-shopping-cart-1 text-success'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](4, 0, null, null, 1, 'h4', [[
                            'class',
                            'flex-grow-1 m-0 mr-3'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['Mi carrito'])),
                        (l()(), r['ɵeld'](6, 0, null, null, 2, 'button', [
                            [
                                'class',
                                'btn btn-success btn-sm'
                            ],
                            [
                                'type',
                                'button'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵted'](7, null, [
                            '',
                            ' Objetos'
                        ])),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef])
                    ], null, function (l, n) {
                        var e = n.component;
                        l(n, 7, 0, r['ɵunv'](n, 7, 0, r['ɵnov'](n, 8).transform(e.packages$)).length);
                    });
                }
                function Te(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 10, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 9, 'div', [
                            [
                                'class',
                                'd-flex align-items-center py-10 px-8 bgi-size-cover bgi-no-repeat rounded-top'
                            ],
                            [
                                'style',
                                'background-image: url(\'./assets/media/misc/bg-1.jpg\');'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵeld'](2, 0, null, null, 1, 'span', [[
                            'class',
                            'btn btn-md btn-icon bg-white-o-15 mr-4'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](3, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-shopping-cart-1 text-success'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](4, 0, null, null, 2, 'h4', [[
                            'class',
                            'text-white m-0 flex-grow-1 mr-3'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](5, null, [
                            '',
                            ''
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ]),
                        (l()(), r['ɵeld'](7, 0, null, null, 3, 'button', [
                            [
                                'class',
                                'btn btn-success btn-sm'
                            ],
                            [
                                'type',
                                'button'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵted'](8, null, [
                            '',
                            ' ',
                            ''
                        ])),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ])
                    ], null, function (l, n) {
                        var e = n.component;
                        l(n, 5, 0, r['ɵunv'](n, 5, 0, r['ɵnov'](n, 6).transform('ECOMMERCE.SHOP.MYSHOPCART'))), l(n, 8, 0, r['ɵunv'](n, 8, 0, r['ɵnov'](n, 9).transform(e.packages$)).length, r['ɵunv'](n, 8, 1, r['ɵnov'](n, 10).transform('ECOMMERCE.SHOP.PRODUCT')));
                    });
                }
                function Ve(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 23, 'div', [[
                            'class',
                            'row'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 21, 'div', [[
                            'class',
                            'col-12'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](2, 0, null, null, 20, 'div', [[
                            'class',
                            'd-flex align-items-center justify-content-between p-8'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](3, 0, null, null, 16, 'div', [[
                            'class',
                            'd-flex flex-column mr-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](4, 0, null, null, 1, 'a', [
                            [
                                'class',
                                'font-weight-bold text-dark-75 font-size-lg text-hover-primary'
                            ],
                            [
                                'href',
                                '#'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵted'](5, null, [
                            ' ',
                            ' '
                        ])),
                        (l()(), r['ɵeld'](6, 0, null, null, 1, 'span', [[
                            'class',
                            'text-muted'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](7, null, [
                            ' ',
                            ' '
                        ])),
                        (l()(), r['ɵeld'](8, 0, null, null, 11, 'div', [[
                            'class',
                            'd-flex align-items-center mt-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](9, 0, null, null, 2, 'span', [[
                            'class',
                            'font-weight-bold mr-1 text-dark-75 font-size-lg'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](10, null, [
                            '',
                            ''
                        ])),
                        r['ɵppd'](11, 1),
                        (l()(), r['ɵeld'](12, 0, null, null, 1, 'span', [[
                            'class',
                            'text-muted mr-1'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['for'])),
                        (l()(), r['ɵeld'](14, 0, null, null, 1, 'span', [[
                            'class',
                            'font-weight-bold mr-2 text-dark-75 font-size-lg'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](15, null, [
                            '',
                            ''
                        ])),
                        (l()(), r['ɵeld'](16, 0, null, null, 1, 'div', [[
                            'class',
                            'btn btn-xs btn-light-success btn-icon mr-2'
                        ]], null, [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                            var t = !0;
                            return 'click' === n && (t = !1 !== l.component.decrease(l.context.$implicit.id, l.context.$implicit.amount) && t), t;
                        }, null, null)),
                        (l()(), r['ɵeld'](17, 0, null, null, 0, 'i', [[
                            'class',
                            'ki ki-minus icon-xs'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](18, 0, null, null, 1, 'div', [[
                            'class',
                            'btn btn-xs btn-light-success btn-icon'
                        ]], null, [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                            var t = !0;
                            return 'click' === n && (t = !1 !== l.component.increase(l.context.$implicit.id) && t), t;
                        }, null, null)),
                        (l()(), r['ɵeld'](19, 0, null, null, 0, 'i', [[
                            'class',
                            'ki ki-plus icon-xs'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](20, 0, null, null, 2, 'span', [[
                            'class',
                            'symbol symbol-70 flex-shrink-0'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](21, 0, null, null, 1, 'div', [], null, null, null, null, null)),
                        (l()(), r['ɵeld'](22, 0, null, null, 0, 'img', [[
                            'width',
                            '30px'
                        ]], [[
                            8,
                            'src',
                            4
                        ]], null, null, null, null)),
                        (l()(), r['ɵeld'](23, 0, null, null, 0, 'div', [[
                            'class',
                            'separator separator-solid'
                        ]], null, null, null, null, null))
                    ], null, function (l, n) {
                        l(n, 5, 0, n.context.$implicit.name), l(n, 7, 0, n.context.$implicit.description);
                        var e = r['ɵunv'](n, 10, 0, l(n, 11, 0, r['ɵnov'](n.parent, 0), n.context.$implicit.price_iva));
                        l(n, 10, 0, e), l(n, 15, 0, n.context.$implicit.amount), l(n, 22, 0, r['ɵinlineInterpolate'](1, '', n.context.$implicit.image, ''));
                    });
                }
                function _e(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 73, 'div', [[
                            'class',
                            'row'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 72, 'div', [[
                            'class',
                            'col-12 d-flex alig-items-center justify-content-center p-5 flex flex-column'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](2, 0, null, null, 2, 'span', [[
                            'class',
                            'font-weight-bold mb-5 text-dark-75 font-size-lg text-center'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](3, null, [
                            ' ',
                            ''
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ]),
                        (l()(), r['ɵeld'](5, 0, null, null, 68, ':svg:svg', [
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
                        (l()(), r['ɵeld'](6, 0, null, null, 1, ':svg:title', [], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['empty_cart'])),
                        (l()(), r['ɵeld'](8, 0, null, null, 0, ':svg:path', [
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
                        (l()(), r['ɵeld'](9, 0, null, null, 0, ':svg:path', [
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
                        (l()(), r['ɵeld'](10, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](11, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](12, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](13, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](14, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](15, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](16, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](17, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](18, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](19, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](20, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](21, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](22, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](23, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](24, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](25, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](26, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](27, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](28, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](29, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](30, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](31, 0, null, null, 0, ':svg:polygon', [
                            [
                                'fill',
                                '#2f2e41'
                            ],
                            [
                                'points',
                                '362.06 702.184 125.274 702.184 125.274 700.481 360.356 700.481 360.356 617.861 145.18 617.861 134.727 596.084 136.263 595.347 146.252 616.157 362.06 616.157 362.06 702.184'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵeld'](32, 0, null, null, 0, ':svg:circle', [
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
                        (l()(), r['ɵeld'](33, 0, null, null, 0, ':svg:circle', [
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
                        (l()(), r['ɵeld'](34, 0, null, null, 0, ':svg:circle', [
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
                        (l()(), r['ɵeld'](35, 0, null, null, 0, ':svg:path', [
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
                        (l()(), r['ɵeld'](36, 0, null, null, 0, ':svg:polygon', [
                            [
                                'fill',
                                '#f2f2f2'
                            ],
                            [
                                'points',
                                '366.61 579.958 132.842 579.958 82.26 413.015 418.701 413.015 418.395 413.998 366.61 579.958'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵeld'](37, 0, null, null, 0, ':svg:polygon', [
                            [
                                'fill',
                                '#2f2e41'
                            ],
                            [
                                'points',
                                '451.465 384.7 449.818 384.263 461.059 341.894 526.448 341.894 526.448 343.598 462.37 343.598 451.465 384.7'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵeld'](38, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](39, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](40, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](41, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](42, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](43, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](44, 0, null, null, 0, ':svg:path', [
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
                        (l()(), r['ɵeld'](45, 0, null, null, 0, ':svg:path', [
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
                        (l()(), r['ɵeld'](46, 0, null, null, 0, ':svg:path', [
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
                        (l()(), r['ɵeld'](47, 0, null, null, 0, ':svg:path', [
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
                        (l()(), r['ɵeld'](48, 0, null, null, 0, ':svg:path', [
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
                        (l()(), r['ɵeld'](49, 0, null, null, 0, ':svg:circle', [
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
                        (l()(), r['ɵeld'](50, 0, null, null, 0, ':svg:path', [
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
                        (l()(), r['ɵeld'](51, 0, null, null, 0, ':svg:path', [
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
                        (l()(), r['ɵeld'](52, 0, null, null, 0, ':svg:path', [
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
                        (l()(), r['ɵeld'](53, 0, null, null, 0, ':svg:path', [
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
                        (l()(), r['ɵeld'](54, 0, null, null, 0, ':svg:path', [
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
                        (l()(), r['ɵeld'](55, 0, null, null, 0, ':svg:path', [
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
                        (l()(), r['ɵeld'](56, 0, null, null, 0, ':svg:path', [
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
                        (l()(), r['ɵeld'](57, 0, null, null, 0, ':svg:path', [
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
                        (l()(), r['ɵeld'](58, 0, null, null, 0, ':svg:path', [
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
                        (l()(), r['ɵeld'](59, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](60, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](61, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](62, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](63, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](64, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](65, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](66, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](67, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](68, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](69, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](70, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](71, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](72, 0, null, null, 0, ':svg:rect', [
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
                        (l()(), r['ɵeld'](73, 0, null, null, 0, ':svg:rect', [
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
                        l(n, 3, 0, r['ɵunv'](n, 3, 0, r['ɵnov'](n, 4).transform('ECOMMERCE.SHOP.EMPTY')));
                    });
                }
                function Le(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 4, 'a', [[
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
                            var t = !0;
                            return 'click' === n && (t = !1 !== r['ɵnov'](l, 1).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && t), t;
                        }, null, null)),
                        r['ɵdid'](1, 671744, null, 0, y.u, [
                            y.r,
                            y.a,
                            h.LocationStrategy
                        ], {
                            routerLink: [
                                0,
                                'routerLink'
                            ]
                        }, null),
                        r['ɵpad'](2, 1),
                        (l()(), r['ɵted'](3, null, [
                            ' ',
                            ' '
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ])
                    ], function (l, n) {
                        var e = l(n, 2, 0, 'check-out');
                        l(n, 1, 0, e);
                    }, function (l, n) {
                        l(n, 0, 0, r['ɵnov'](n, 1).target, r['ɵnov'](n, 1).href), l(n, 3, 0, r['ɵunv'](n, 3, 0, r['ɵnov'](n, 4).transform('ECOMMERCE.SHOP.PAYMENT')));
                    });
                }
                function Oe(l) {
                    return r['ɵvid'](0, [
                        r['ɵpid'](0, h.CurrencyPipe, [
                            r.LOCALE_ID,
                            r.DEFAULT_CURRENCY_CODE
                        ]),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, Ae)),
                        r['ɵdid'](2, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, Te)),
                        r['ɵdid'](4, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵeld'](5, 0, null, null, 7, 'div', [
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
                        r['ɵdid'](6, 999424, null, 0, Ce, [
                            r.NgZone,
                            r.KeyValueDiffers,
                            r.ElementRef,
                            r.PLATFORM_ID,
                            [
                                2,
                                be
                            ]
                        ], {
                            config: [
                                0,
                                'config'
                            ]
                        }, null),
                        (l()(), r['ɵand'](16777216, null, null, 2, null, Ve)),
                        r['ɵdid'](8, 278528, null, 0, h.NgForOf, [
                            r.ViewContainerRef,
                            r.TemplateRef,
                            r.IterableDiffers
                        ], {
                            ngForOf: [
                                0,
                                'ngForOf'
                            ]
                        }, null),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        (l()(), r['ɵand'](16777216, null, null, 2, null, _e)),
                        r['ɵdid'](11, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        (l()(), r['ɵeld'](13, 0, null, null, 20, 'div', [[
                            'class',
                            'p-8'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](14, 0, null, null, 7, 'div', [[
                            'class',
                            'd-flex align-items-center justify-content-between mb-7'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](15, 0, null, null, 2, 'span', [[
                            'class',
                            'font-weight-bold text-muted font-size-sm mr-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](16, null, [
                            '',
                            ''
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ]),
                        (l()(), r['ɵeld'](18, 0, null, null, 3, 'span', [[
                            'class',
                            'font-weight-bolder text-primary text-right'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](19, null, [
                            '',
                            ''
                        ])),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        r['ɵppd'](21, 1),
                        (l()(), r['ɵeld'](22, 0, null, null, 7, 'div', [[
                            'class',
                            'd-flex align-items-center justify-content-between mb-4'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](23, 0, null, null, 2, 'span', [[
                            'class',
                            'font-weight-bold text-muted font-size-sm mr-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](24, null, [
                            '',
                            ''
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ]),
                        (l()(), r['ɵeld'](26, 0, null, null, 3, 'span', [[
                            'class',
                            'font-weight-bolder text-dark-50 text-right'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](27, null, [
                            '',
                            ''
                        ])),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        r['ɵppd'](29, 1),
                        (l()(), r['ɵeld'](30, 0, null, null, 3, 'div', [[
                            'class',
                            'text-right'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵand'](16777216, null, null, 2, null, Le)),
                        r['ɵdid'](32, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef])
                    ], function (l, n) {
                        var e = n.component;
                        l(n, 2, 0, 'light' === e.extrasCartDropdownStyle), l(n, 4, 0, 'dark' === e.extrasCartDropdownStyle), l(n, 6, 0, ''), l(n, 8, 0, r['ɵunv'](n, 8, 0, r['ɵnov'](n, 9).transform(e.packages$))), l(n, 11, 0, 0 == r['ɵunv'](n, 11, 0, r['ɵnov'](n, 12).transform(e.packages$)).length), l(n, 32, 0, r['ɵunv'](n, 32, 0, r['ɵnov'](n, 33).transform(e.packages$)).length > 0);
                    }, function (l, n) {
                        var e = n.component;
                        l(n, 16, 0, r['ɵunv'](n, 16, 0, r['ɵnov'](n, 17).transform('ECOMMERCE.SHOP.SUBTOTAL')));
                        var t = r['ɵunv'](n, 19, 0, l(n, 21, 0, r['ɵnov'](n, 0), r['ɵunv'](n, 19, 0, r['ɵnov'](n, 20).transform(e.cart$)).subtotal));
                        l(n, 19, 0, t), l(n, 24, 0, r['ɵunv'](n, 24, 0, r['ɵnov'](n, 25).transform('ECOMMERCE.SHOP.TOTAL')));
                        var u = r['ɵunv'](n, 27, 0, l(n, 29, 0, r['ɵnov'](n, 0), r['ɵunv'](n, 27, 0, r['ɵnov'](n, 28).transform(e.cart$)).total));
                        l(n, 27, 0, u);
                    });
                }
                var Pe = function () {
                    function l(n, e) {
                        d(this, l), this.translationService = n, this.router = e, this.languages = [
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
                    return f(l, [
                        {
                            key: 'ngOnInit',
                            value: function () {
                                var l = this;
                                this.setSelectedLanguage(), this.router.events.pipe(Object(j.a)(function (l) {
                                    return l instanceof y.g;
                                })).subscribe(function (n) {
                                    l.setSelectedLanguage();
                                });
                            }
                        },
                        {
                            key: 'setLanguageWithRefresh',
                            value: function (l) {
                                this.setLanguage(l);
                            }
                        },
                        {
                            key: 'setLanguage',
                            value: function (l) {
                                var n = this;
                                this.languages.forEach(function (e) {
                                    e.lang === l ? (e.active = !0, n.language = e) : e.active = !1;
                                }), this.translationService.setLanguage(l);
                            }
                        },
                        {
                            key: 'setSelectedLanguage',
                            value: function () {
                                this.setLanguage(this.translationService.getSelectedLanguage());
                            }
                        }
                    ]), l;
                }(), Me = o('e4g8'), He = r['ɵcrt']({
                    encapsulation: 0,
                    styles: [['']],
                    data: {}
                });
                function Ge(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 10, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 9, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                        r['ɵdid'](2, 278528, null, 0, h.NgClass, [
                            r.IterableDiffers,
                            r.KeyValueDiffers,
                            r.ElementRef,
                            r.Renderer2
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
                        r['ɵpod'](3, { active: 0 }),
                        (l()(), r['ɵeld'](4, 0, null, null, 6, 'a', [
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
                        r['ɵdid'](5, 278528, null, 0, h.NgClass, [
                            r.IterableDiffers,
                            r.KeyValueDiffers,
                            r.ElementRef,
                            r.Renderer2
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
                        r['ɵpod'](6, { active: 0 }),
                        (l()(), r['ɵeld'](7, 0, null, null, 1, 'span', [[
                            'class',
                            'symbol symbol-20 mr-3'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](8, 0, null, null, 0, 'img', [], [[
                            8,
                            'src',
                            4
                        ]], null, null, null, null)),
                        (l()(), r['ɵeld'](9, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](10, null, [
                            '',
                            ''
                        ]))
                    ], function (l, n) {
                        var e = l(n, 3, 0, n.context.$implicit.active);
                        l(n, 2, 0, 'navi-item', e);
                        var t = l(n, 6, 0, n.context.$implicit.active);
                        l(n, 5, 0, 'navi-link', t);
                    }, function (l, n) {
                        l(n, 8, 0, r['ɵinlineInterpolate'](1, '', n.context.$implicit.flag, '')), l(n, 10, 0, n.context.$implicit.name);
                    });
                }
                function Be(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 14, 'div', [
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
                        r['ɵdid'](1, 1720320, null, 2, V.v, [
                            r.ChangeDetectorRef,
                            V.x,
                            h.DOCUMENT,
                            r.NgZone,
                            r.ElementRef,
                            r.Renderer2,
                            [
                                2,
                                V.K
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
                        r['ɵqud'](603979776, 1, { _menu: 0 }),
                        r['ɵqud'](603979776, 2, { _anchor: 0 }),
                        (l()(), r['ɵeld'](4, 0, null, null, 4, 'div', [
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
                            var t = !0;
                            return 'click' === n && (t = !1 !== r['ɵnov'](l, 5).dropdown.toggle() && t), 'keydown.ArrowUp' === n && (t = !1 !== r['ɵnov'](l, 5).dropdown.onKeyDown(e) && t), 'keydown.ArrowDown' === n && (t = !1 !== r['ɵnov'](l, 5).dropdown.onKeyDown(e) && t), 'keydown.Home' === n && (t = !1 !== r['ɵnov'](l, 5).dropdown.onKeyDown(e) && t), 'keydown.End' === n && (t = !1 !== r['ɵnov'](l, 5).dropdown.onKeyDown(e) && t), 'keydown.Tab' === n && (t = !1 !== r['ɵnov'](l, 5).dropdown.onKeyDown(e) && t), 'keydown.Shift.Tab' === n && (t = !1 !== r['ɵnov'](l, 5).dropdown.onKeyDown(e) && t), t;
                        }, null, null)),
                        r['ɵdid'](5, 16384, null, 0, V.A, [
                            V.v,
                            r.ElementRef
                        ], null, null),
                        r['ɵprd'](2048, [[
                            2,
                            4
                        ]], V.w, null, [V.A]),
                        (l()(), r['ɵeld'](7, 0, null, null, 1, 'div', [[
                            'class',
                            'btn btn-icon btn-clean btn-dropdown btn-lg mr-1'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](8, 0, null, null, 0, 'img', [
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
                        (l()(), r['ɵeld'](9, 0, null, null, 5, 'div', [
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
                            var t = !0;
                            return 'keydown.ArrowUp' === n && (t = !1 !== r['ɵnov'](l, 10).dropdown.onKeyDown(e) && t), 'keydown.ArrowDown' === n && (t = !1 !== r['ɵnov'](l, 10).dropdown.onKeyDown(e) && t), 'keydown.Home' === n && (t = !1 !== r['ɵnov'](l, 10).dropdown.onKeyDown(e) && t), 'keydown.End' === n && (t = !1 !== r['ɵnov'](l, 10).dropdown.onKeyDown(e) && t), 'keydown.Enter' === n && (t = !1 !== r['ɵnov'](l, 10).dropdown.onKeyDown(e) && t), 'keydown.Space' === n && (t = !1 !== r['ɵnov'](l, 10).dropdown.onKeyDown(e) && t), 'keydown.Tab' === n && (t = !1 !== r['ɵnov'](l, 10).dropdown.onKeyDown(e) && t), 'keydown.Shift.Tab' === n && (t = !1 !== r['ɵnov'](l, 10).dropdown.onKeyDown(e) && t), t;
                        }, null, null)),
                        r['ɵdid'](10, 16384, [[
                            1,
                            4
                        ]], 1, V.y, [
                            V.v,
                            r.ElementRef
                        ], null, null),
                        r['ɵqud'](603979776, 3, { menuItems: 1 }),
                        (l()(), r['ɵeld'](12, 0, null, null, 2, 'ul', [[
                            'class',
                            'navi navi-hover py-4'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, Ge)),
                        r['ɵdid'](14, 278528, null, 0, h.NgForOf, [
                            r.ViewContainerRef,
                            r.TemplateRef,
                            r.IterableDiffers
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
                        l(n, 0, 0, r['ɵnov'](n, 1).isOpen()), l(n, 4, 0, r['ɵnov'](n, 5).dropdown.isOpen()), l(n, 8, 0, r['ɵinlineInterpolate'](1, '', null == e.language ? null : e.language.flag, '')), l(n, 9, 0, !0, r['ɵnov'](n, 10).dropdown.isOpen(), r['ɵnov'](n, 10).placement);
                    });
                }
                var Ne = function () {
                    function l() {
                        d(this, l);
                    }
                    return f(l, [{
                        key: 'transform',
                        value: function (l, n) {
                            return l.split(' ').map(function (l) {
                                return l[0];
                            }).join('');
                        }
                    }]), l;
                }(), Fe = function () {
                    function l(n) {
                        d(this, l), this.layout = n, this.extrasUserDropdownStyle = 'light';
                    }
                    return f(l, [
                        {
                            key: 'ngOnInit',
                            value: function () {
                                this.extrasUserDropdownStyle = this.layout.getProp('extras.user.dropdown.style'), this.user$ = JSON.parse(localStorage.getItem('token'));
                            }
                        },
                        {
                            key: 'logout',
                            value: function () {
                                document.location.reload();
                            }
                        }
                    ]), l;
                }(), je = r['ɵcrt']({
                    encapsulation: 0,
                    styles: [['']],
                    data: {}
                });
                function Ke(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 8, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 6, 'div', [[
                            'class',
                            'd-flex align-items-center p-8 rounded-top'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](2, 0, null, null, 1, 'div', [[
                            'class',
                            'symbol symbol-md bg-light-primary mr-3 flex-shrink-0'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](3, 0, null, null, 0, 'img', [
                            [
                                'alt',
                                ''
                            ],
                            [
                                'src',
                                './assets/media/users/300_21.jpg'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵeld'](4, 0, null, null, 1, 'div', [[
                            'class',
                            'text-dark m-0 flex-grow-1 mr-3 font-size-h5'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](5, null, [
                            ' ',
                            ' '
                        ])),
                        (l()(), r['ɵeld'](6, 0, null, null, 1, 'span', [[
                            'class',
                            'label label-light-success label-lg font-weight-bold label-inline'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['3 messages'])),
                        (l()(), r['ɵeld'](8, 0, null, null, 0, 'div', [[
                            'class',
                            'separator separator-solid'
                        ]], null, null, null, null, null))
                    ], null, function (l, n) {
                        l(n, 5, 0, n.parent.context.ngIf.fullname);
                    });
                }
                function ze(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 10, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 9, 'div', [
                            [
                                'class',
                                'd-flex align-items-center justify-content-between flex-wrap p-8 bgi-size-cover bgi-no-repeat rounded-top'
                            ],
                            [
                                'style',
                                'background-image: url(\'./assets/media/misc/bg-1.jpg\');'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵeld'](2, 0, null, null, 6, 'div', [[
                            'class',
                            'd-flex align-items-center mr-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](3, 0, null, null, 3, 'div', [[
                            'class',
                            'symbol bg-white-o-15 mr-3'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](4, 0, null, null, 2, 'span', [[
                            'class',
                            'symbol-label text-success font-weight-bold font-size-h4'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](5, null, [
                            '',
                            ''
                        ])),
                        r['ɵppd'](6, 1),
                        (l()(), r['ɵeld'](7, 0, null, null, 1, 'div', [[
                            'class',
                            'text-white m-0 flex-grow-1 mr-3 font-size-h5'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](8, null, [
                            ' ',
                            ' '
                        ])),
                        (l()(), r['ɵeld'](9, 0, null, null, 1, 'span', [[
                            'class',
                            'label label-success label-lg font-weight-bold label-inline'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['3 messages']))
                    ], null, function (l, n) {
                        var e = r['ɵunv'](n, 5, 0, l(n, 6, 0, r['ɵnov'](n.parent.parent, 0), n.parent.context.ngIf.fullname));
                        l(n, 5, 0, e), l(n, 8, 0, n.parent.context.ngIf.fullname);
                    });
                }
                function Ue(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 49, null, null, null, null, null, null, null)),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, Ke)),
                        r['ɵdid'](2, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, ze)),
                        r['ɵdid'](4, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵeld'](5, 0, null, null, 44, 'div', [[
                            'class',
                            'navi navi-spacer-x-0 pt-5'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](6, 0, null, null, 10, 'a', [[
                            'class',
                            'navi-item px-8 cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](7, 0, null, null, 9, 'div', [[
                            'class',
                            'navi-link'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](8, 0, null, null, 1, 'div', [[
                            'class',
                            'navi-icon mr-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](9, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-calendar-3 text-success'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](10, 0, null, null, 6, 'div', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](11, 0, null, null, 1, 'div', [[
                            'class',
                            'font-weight-bold'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' My Profile '])),
                        (l()(), r['ɵeld'](13, 0, null, null, 3, 'div', [[
                            'class',
                            'text-muted'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' Account settings and more '])),
                        (l()(), r['ɵeld'](15, 0, null, null, 1, 'span', [[
                            'class',
                            'label label-light-danger label-inline font-weight-bold'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['update'])),
                        (l()(), r['ɵeld'](17, 0, null, null, 8, 'a', [[
                            'class',
                            'navi-item px-8 cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](18, 0, null, null, 7, 'div', [[
                            'class',
                            'navi-link'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](19, 0, null, null, 1, 'div', [[
                            'class',
                            'navi-icon mr-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](20, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-mail text-warning'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](21, 0, null, null, 4, 'div', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](22, 0, null, null, 1, 'div', [[
                            'class',
                            'font-weight-bold'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' My Messages '])),
                        (l()(), r['ɵeld'](24, 0, null, null, 1, 'div', [[
                            'class',
                            'text-muted'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' Inbox and tasks '])),
                        (l()(), r['ɵeld'](26, 0, null, null, 8, 'a', [[
                            'class',
                            'navi-item px-8 cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](27, 0, null, null, 7, 'div', [[
                            'class',
                            'navi-link'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](28, 0, null, null, 1, 'div', [[
                            'class',
                            'navi-icon mr-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](29, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-rocket-1 text-danger'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](30, 0, null, null, 4, 'div', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](31, 0, null, null, 1, 'div', [[
                            'class',
                            'font-weight-bold'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' My Activities '])),
                        (l()(), r['ɵeld'](33, 0, null, null, 1, 'div', [[
                            'class',
                            'text-muted'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' Logs and notifications '])),
                        (l()(), r['ɵeld'](35, 0, null, null, 8, 'a', [[
                            'class',
                            'navi-item px-8 cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](36, 0, null, null, 7, 'div', [[
                            'class',
                            'navi-link'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](37, 0, null, null, 1, 'div', [[
                            'class',
                            'navi-icon mr-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](38, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon2-hourglass text-primary'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](39, 0, null, null, 4, 'div', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](40, 0, null, null, 1, 'div', [[
                            'class',
                            'font-weight-bold'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' My Tasks '])),
                        (l()(), r['ɵeld'](42, 0, null, null, 1, 'div', [[
                            'class',
                            'text-muted'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, [' latest tasks and projects '])),
                        (l()(), r['ɵeld'](44, 0, null, null, 0, 'div', [[
                            'class',
                            'navi-separator mt-3'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](45, 0, null, null, 4, 'div', [[
                            'class',
                            'navi-footer px-8 py-5'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](46, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-light-primary font-weight-bold cursor-pointer'
                        ]], null, [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                            var t = !0;
                            return 'click' === n && (t = !1 !== l.component.logout() && t), t;
                        }, null, null)),
                        (l()(), r['ɵted'](-1, null, ['Sign Out'])),
                        (l()(), r['ɵeld'](48, 0, null, null, 1, 'a', [[
                            'class',
                            'btn btn-clean font-weight-bold cursor-pointer'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](-1, null, ['Upgrade Plan']))
                    ], function (l, n) {
                        var e = n.component;
                        l(n, 2, 0, 'light' === e.extrasUserDropdownStyle), l(n, 4, 0, 'dark' === e.extrasUserDropdownStyle);
                    }, null);
                }
                function qe(l) {
                    return r['ɵvid'](0, [
                        r['ɵpid'](0, Ne, []),
                        (l()(), r['ɵand'](16777216, null, null, 2, null, Ue)),
                        r['ɵdid'](2, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef])
                    ], function (l, n) {
                        var e = n.component;
                        l(n, 2, 0, r['ɵunv'](n, 2, 0, r['ɵnov'](n, 3).transform(e.user$)));
                    }, null);
                }
                var We, Ye = o('svdS'), Xe = function () {
                    var l;
                    return {
                        init: function (n) {
                            var e, t, u, i;
                            (l = Zl.a.getById(n)) && (e = Zl.a.find(l, '.offcanvas-header'), t = Zl.a.find(l, '.offcanvas-content'), u = Zl.a.find(l, '.quick-search-form'), i = Zl.a.find(l, '.quick-search-wrapper'), new Ye.a(l, {
                                overlay: !0,
                                baseClass: 'offcanvas',
                                placement: 'right',
                                closeBy: 'kt_quick_search_close',
                                toggleBy: 'kt_quick_search_toggle'
                            }), Zl.a.scrollInit(i, {
                                disableForMobile: !0,
                                resetHeightOnDestroy: !0,
                                handleWindowResize: !0,
                                height: function () {
                                    var n = parseInt(Zl.a.getViewPort().height);
                                    return e && (n -= parseInt(Zl.a.actualHeight(e)), n -= parseInt(Zl.a.css(e, 'marginTop')), n -= parseInt(Zl.a.css(e, 'marginBottom'))), t && (n -= parseInt(Zl.a.css(t, 'marginTop')), n -= parseInt(Zl.a.css(t, 'marginBottom'))), i && (n -= parseInt(Zl.a.actualHeight(u)), n -= parseInt(Zl.a.css(u, 'marginTop')), n -= parseInt(Zl.a.css(u, 'marginBottom')), n -= parseInt(Zl.a.css(i, 'marginTop')), n -= parseInt(Zl.a.css(i, 'marginBottom'))), n -= parseInt(Zl.a.css(l, 'paddingTop')), (n -= parseInt(Zl.a.css(l, 'paddingBottom'))) - 2;
                                }
                            }));
                        },
                        getElement: function () {
                            return l;
                        }
                    };
                }(), $e = function () {
                    var l;
                    return {
                        init: function (n) {
                            var e, t;
                            (l = Zl.a.getById(n)) && (e = Zl.a.find(l, '.offcanvas-header'), t = Zl.a.find(l, '.offcanvas-content'), new Ye.a(l, {
                                overlay: !0,
                                baseClass: 'offcanvas',
                                placement: 'right',
                                closeBy: 'kt_quick_notifications_close',
                                toggleBy: 'kt_quick_notifications_toggle'
                            }), Zl.a.scrollInit(t, {
                                disableForMobile: !0,
                                resetHeightOnDestroy: !0,
                                handleWindowResize: !0,
                                height: function () {
                                    var n = parseInt(Zl.a.getViewPort().height);
                                    return e && (n -= parseInt(Zl.a.actualHeight(e)), n -= parseInt(Zl.a.css(e, 'marginTop')), n -= parseInt(Zl.a.css(e, 'marginBottom'))), t && (n -= parseInt(Zl.a.css(t, 'marginTop')), n -= parseInt(Zl.a.css(t, 'marginBottom'))), n -= parseInt(Zl.a.css(l, 'paddingTop')), (n -= parseInt(Zl.a.css(l, 'paddingBottom'))) - 2;
                                }
                            }));
                        },
                        getElement: function () {
                            return l;
                        }
                    };
                }(), Ze = function () {
                    var l;
                    return {
                        init: function (n) {
                            var e, t;
                            (l = Zl.a.getById(n)) && (e = Zl.a.find(l, '.offcanvas-header'), t = Zl.a.find(l, '.offcanvas-content'), new Ye.a(l, {
                                overlay: !0,
                                baseClass: 'offcanvas',
                                placement: 'right',
                                closeBy: 'kt_quick_actions_close',
                                toggleBy: 'kt_quick_actions_toggle'
                            }), Zl.a.scrollInit(t, {
                                disableForMobile: !0,
                                resetHeightOnDestroy: !0,
                                handleWindowResize: !0,
                                height: function () {
                                    var n = parseInt(Zl.a.getViewPort().height);
                                    return e && (n -= parseInt(Zl.a.actualHeight(e)), n -= parseInt(Zl.a.css(e, 'marginTop')), n -= parseInt(Zl.a.css(e, 'marginBottom'))), t && (n -= parseInt(Zl.a.css(t, 'marginTop')), n -= parseInt(Zl.a.css(t, 'marginBottom'))), n -= parseInt(Zl.a.css(l, 'paddingTop')), (n -= parseInt(Zl.a.css(l, 'paddingBottom'))) - 2;
                                }
                            }));
                        },
                        getElement: function () {
                            return l;
                        }
                    };
                }(), Je = function () {
                    var l;
                    return {
                        init: function (n) {
                            (l = Zl.a.getById(n)) && function () {
                                new Ye.a(l, {
                                    overlay: !0,
                                    baseClass: 'offcanvas',
                                    placement: 'right',
                                    closeBy: 'kt_quick_cart_close',
                                    toggleBy: 'kt_quick_cart_toggle'
                                });
                                var n = Zl.a.find(l, '.offcanvas-header'), e = Zl.a.find(l, '.offcanvas-content'), t = Zl.a.find(l, '.offcanvas-wrapper'), u = Zl.a.find(l, '.offcanvas-footer');
                                Zl.a.scrollInit(t, {
                                    disableForMobile: !0,
                                    resetHeightOnDestroy: !0,
                                    handleWindowResize: !0,
                                    height: function () {
                                        var i = parseInt(Zl.a.getViewPort().height);
                                        return n && (i -= parseInt(Zl.a.actualHeight(n)), i -= parseInt(Zl.a.css(n, 'marginTop')), i -= parseInt(Zl.a.css(n, 'marginBottom'))), e && (i -= parseInt(Zl.a.css(e, 'marginTop')), i -= parseInt(Zl.a.css(e, 'marginBottom'))), t && (i -= parseInt(Zl.a.css(t, 'marginTop')), i -= parseInt(Zl.a.css(t, 'marginBottom'))), u && (i -= parseInt(Zl.a.actualHeight(u)), i -= parseInt(Zl.a.css(u, 'marginTop')), i -= parseInt(Zl.a.css(u, 'marginBottom'))), i -= parseInt(Zl.a.css(l, 'paddingTop')), (i -= parseInt(Zl.a.css(l, 'paddingBottom'))) - 2;
                                    }
                                });
                            }();
                        }
                    };
                }(), Qe = function () {
                    var l, n, e, t, u = function () {
                        var n = Zl.a.find(l, '.offcanvas-header'), e = Zl.a.find(l, '.offcanvas-content'), t = parseInt(Zl.a.getViewPort().height);
                        return n && (t -= parseInt(Zl.a.actualHeight(n)), t -= parseInt(Zl.a.css(n, 'marginTop')), t -= parseInt(Zl.a.css(n, 'marginBottom'))), e && (t -= parseInt(Zl.a.css(e, 'marginTop')), t -= parseInt(Zl.a.css(e, 'marginBottom'))), t -= parseInt(Zl.a.css(l, 'paddingTop')), (t -= parseInt(Zl.a.css(l, 'paddingBottom'))) - 2;
                    };
                    return {
                        init: function (i) {
                            l = Zl.a.getById(i), n = Zl.a.getById('kt_quick_panel_notifications'), e = Zl.a.getById('kt_quick_panel_logs'), t = Zl.a.getById('kt_quick_panel_settings'), new Ye.a(l, {
                                overlay: !0,
                                baseClass: 'offcanvas',
                                placement: 'right',
                                closeBy: 'kt_quick_panel_close',
                                toggleBy: 'kt_quick_panel_toggle'
                            }), Zl.a.scrollInit(n, {
                                mobileNativeScroll: !0,
                                resetHeightOnDestroy: !0,
                                handleWindowResize: !0,
                                height: function () {
                                    return u();
                                }
                            }), Zl.a.scrollInit(e, {
                                mobileNativeScroll: !0,
                                resetHeightOnDestroy: !0,
                                handleWindowResize: !0,
                                height: function () {
                                    return u();
                                }
                            }), Zl.a.scrollInit(t, {
                                mobileNativeScroll: !0,
                                resetHeightOnDestroy: !0,
                                handleWindowResize: !0,
                                height: function () {
                                    return u();
                                }
                            });
                        }
                    };
                }(), lt = function () {
                    var l;
                    return {
                        init: function (n) {
                            var e, t;
                            (l = Zl.a.getById(n)) && (e = Zl.a.find(l, '.offcanvas-header'), t = Zl.a.find(l, '.offcanvas-content'), new Ye.a(l, {
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
                            }), Zl.a.scrollInit(t, {
                                disableForMobile: !0,
                                resetHeightOnDestroy: !0,
                                handleWindowResize: !0,
                                height: function () {
                                    var n = parseInt(Zl.a.getViewPort().height);
                                    return e && (n -= parseInt(Zl.a.actualHeight(e)), n -= parseInt(Zl.a.css(e, 'marginTop')), n -= parseInt(Zl.a.css(e, 'marginBottom'))), t && (n -= parseInt(Zl.a.css(t, 'marginTop')), n -= parseInt(Zl.a.css(t, 'marginBottom'))), n -= parseInt(Zl.a.css(l, 'paddingTop')), (n -= parseInt(Zl.a.css(l, 'paddingBottom'))) - 2;
                                }
                            }));
                        },
                        getElement: function () {
                            return l;
                        }
                    };
                }(), nt = o('zZCj'), et = function () {
                    function l(n, e, t) {
                        d(this, l), this.layout = n, this.authservice = e, this.store = t, this.user$ = this.store.select(k.b);
                    }
                    return f(l, [
                        {
                            key: 'ngOnInit',
                            value: function () {
                                this.extraSearchDisplay = this.layout.getProp('extras.search.display'), this.extrasSearchLayout = this.layout.getProp('extras.search.layout'), this.extrasNotificationsDisplay = this.layout.getProp('extras.notifications.display'), this.extrasNotificationsLayout = this.layout.getProp('extras.notifications.layout'), this.extrasQuickActionsDisplay = this.layout.getProp('extras.quickActions.display'), this.extrasQuickActionsLayout = this.layout.getProp('extras.quickActions.layout'), this.extrasCartDisplay = this.layout.getProp('extras.cart.display'), this.extrasCartLayout = this.layout.getProp('extras.cart.layout'), this.extrasLanguagesDisplay = this.layout.getProp('extras.languages.display'), this.extrasUserDisplay = !0, this.extrasUserLayout = 'offcanvas', this.extrasQuickPanelDisplay = this.layout.getProp('extras.quickPanel.display'), this.packages$ = this.store.select(De.c);
                            }
                        },
                        {
                            key: 'ngAfterViewInit',
                            value: function () {
                                var l = this;
                                Zl.a.ready(function () {
                                    l.extraSearchDisplay && 'offcanvas' === l.extrasSearchLayout && Xe.init('kt_quick_search'), l.extrasNotificationsDisplay && 'offcanvas' === l.extrasNotificationsLayout && $e.init('kt_quick_notifications'), l.extrasQuickActionsDisplay && 'offcanvas' === l.extrasQuickActionsLayout && Ze.init('kt_quick_actions'), l.extrasCartDisplay && 'offcanvas' === l.extrasCartLayout && Je.init('kt_quick_cart'), l.extrasQuickPanelDisplay && Qe.init('kt_quick_panel'), l.extrasUserDisplay && 'offcanvas' === l.extrasUserLayout && lt.init('kt_quick_user'), (We = Zl.a.getById('kt_header_mobile_topbar_toggle')) && new nt.a(We, Zl.a.getBody(), {
                                        targetState: 'topbar-mobile-on',
                                        toggleState: 'active'
                                    });
                                });
                            }
                        }
                    ]), l;
                }(), tt = o('Zker'), ut = r['ɵcrt']({
                    encapsulation: 0,
                    styles: [['']],
                    data: {}
                });
                function it(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 5, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 4, 'div', [[
                            'class',
                            'topbar-item'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](2, 0, null, null, 3, 'div', [
                            [
                                'class',
                                'btn btn-icon btn-clean btn-dropdown btn-lg mr-1'
                            ],
                            [
                                'id',
                                'kt_quick_cart_toggle'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵeld'](3, 16777216, null, null, 2, 'span', [
                            [
                                'cacheSVG',
                                'true'
                            ],
                            [
                                'class',
                                'svg-icon svg-icon-xl svg-icon-primary'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵprd'](512, null, p.SVGCacheService, p.SVGCacheService, [
                            [
                                2,
                                h.APP_BASE_HREF
                            ],
                            [
                                2,
                                h.PlatformLocation
                            ],
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            m.HttpClient,
                            m.HttpBackend,
                            r.RendererFactory2
                        ]),
                        r['ɵdid'](5, 737280, null, 0, v.InlineSVGDirective, [
                            r.ElementRef,
                            r.ViewContainerRef,
                            r.ComponentFactoryResolver,
                            p.SVGCacheService,
                            r.Renderer2,
                            b.InlineSVGService,
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            r.PLATFORM_ID
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
                function ot(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 2, 'span', [[
                            'class',
                            'badge badge-pill badge-danger'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](1, null, [
                            ' ',
                            ' '
                        ])),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef])
                    ], null, function (l, n) {
                        var e = n.component;
                        l(n, 1, 0, r['ɵunv'](n, 1, 0, r['ɵnov'](n, 2).transform(e.packages$)).length);
                    });
                }
                function at(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 24, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 23, 'div', [
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
                        r['ɵdid'](2, 1720320, null, 2, V.v, [
                            r.ChangeDetectorRef,
                            V.x,
                            h.DOCUMENT,
                            r.NgZone,
                            r.ElementRef,
                            r.Renderer2,
                            [
                                2,
                                V.K
                            ]
                        ], {
                            placement: [
                                0,
                                'placement'
                            ]
                        }, null),
                        r['ɵqud'](603979776, 1, { _menu: 0 }),
                        r['ɵqud'](603979776, 2, { _anchor: 0 }),
                        (l()(), r['ɵeld'](5, 0, null, null, 9, 'div', [
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
                            var t = !0;
                            return 'click' === n && (t = !1 !== r['ɵnov'](l, 6).dropdown.toggle() && t), 'keydown.ArrowUp' === n && (t = !1 !== r['ɵnov'](l, 6).dropdown.onKeyDown(e) && t), 'keydown.ArrowDown' === n && (t = !1 !== r['ɵnov'](l, 6).dropdown.onKeyDown(e) && t), 'keydown.Home' === n && (t = !1 !== r['ɵnov'](l, 6).dropdown.onKeyDown(e) && t), 'keydown.End' === n && (t = !1 !== r['ɵnov'](l, 6).dropdown.onKeyDown(e) && t), 'keydown.Tab' === n && (t = !1 !== r['ɵnov'](l, 6).dropdown.onKeyDown(e) && t), 'keydown.Shift.Tab' === n && (t = !1 !== r['ɵnov'](l, 6).dropdown.onKeyDown(e) && t), t;
                        }, null, null)),
                        r['ɵdid'](6, 16384, null, 0, V.A, [
                            V.v,
                            r.ElementRef
                        ], null, null),
                        r['ɵprd'](2048, [[
                            2,
                            4
                        ]], V.w, null, [V.A]),
                        (l()(), r['ɵeld'](8, 0, null, null, 6, 'div', [[
                            'class',
                            'btn btn-icon btn-clean btn-dropdown btn-lg mr-1'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](9, 16777216, null, null, 2, 'span', [
                            [
                                'cacheSVG',
                                'true'
                            ],
                            [
                                'class',
                                'svg-icon svg-icon-xl svg-icon-primary'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵprd'](512, null, p.SVGCacheService, p.SVGCacheService, [
                            [
                                2,
                                h.APP_BASE_HREF
                            ],
                            [
                                2,
                                h.PlatformLocation
                            ],
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            m.HttpClient,
                            m.HttpBackend,
                            r.RendererFactory2
                        ]),
                        r['ɵdid'](11, 737280, null, 0, v.InlineSVGDirective, [
                            r.ElementRef,
                            r.ViewContainerRef,
                            r.ComponentFactoryResolver,
                            p.SVGCacheService,
                            r.Renderer2,
                            b.InlineSVGService,
                            [
                                2,
                                g.InlineSVGConfig
                            ],
                            r.PLATFORM_ID
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
                        (l()(), r['ɵand'](16777216, null, null, 2, null, ot)),
                        r['ɵdid'](13, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        (l()(), r['ɵeld'](15, 0, null, null, 9, 'div', [
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
                            var t = !0;
                            return 'keydown.ArrowUp' === n && (t = !1 !== r['ɵnov'](l, 16).dropdown.onKeyDown(e) && t), 'keydown.ArrowDown' === n && (t = !1 !== r['ɵnov'](l, 16).dropdown.onKeyDown(e) && t), 'keydown.Home' === n && (t = !1 !== r['ɵnov'](l, 16).dropdown.onKeyDown(e) && t), 'keydown.End' === n && (t = !1 !== r['ɵnov'](l, 16).dropdown.onKeyDown(e) && t), 'keydown.Enter' === n && (t = !1 !== r['ɵnov'](l, 16).dropdown.onKeyDown(e) && t), 'keydown.Space' === n && (t = !1 !== r['ɵnov'](l, 16).dropdown.onKeyDown(e) && t), 'keydown.Tab' === n && (t = !1 !== r['ɵnov'](l, 16).dropdown.onKeyDown(e) && t), 'keydown.Shift.Tab' === n && (t = !1 !== r['ɵnov'](l, 16).dropdown.onKeyDown(e) && t), t;
                        }, null, null)),
                        r['ɵdid'](16, 16384, [[
                            1,
                            4
                        ]], 1, V.y, [
                            V.v,
                            r.ElementRef
                        ], null, null),
                        r['ɵqud'](603979776, 3, { menuItems: 1 }),
                        (l()(), r['ɵeld'](18, 0, null, null, 6, 'form', [[
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
                            var t = !0;
                            return 'submit' === n && (t = !1 !== r['ɵnov'](l, 20).onSubmit(e) && t), 'reset' === n && (t = !1 !== r['ɵnov'](l, 20).onReset() && t), t;
                        }, null, null)),
                        r['ɵdid'](19, 16384, null, 0, _.C, [], null, null),
                        r['ɵdid'](20, 4210688, null, 0, _.s, [
                            [
                                8,
                                null
                            ],
                            [
                                8,
                                null
                            ]
                        ], null, null),
                        r['ɵprd'](2048, null, _.d, null, [_.s]),
                        r['ɵdid'](22, 16384, null, 0, _.r, [[
                            6,
                            _.d
                        ]], null, null),
                        (l()(), r['ɵeld'](23, 0, null, null, 1, 'app-cart-dropdown-inner', [], null, null, null, Oe, Ee)),
                        r['ɵdid'](24, 114688, null, 0, xe, [
                            C.a,
                            R.o,
                            y.r
                        ], null, null)
                    ], function (l, n) {
                        var e = n.component;
                        l(n, 2, 0, 'bottom'), l(n, 11, 0, './assets/media/svg/icons/Shopping/Cart3.svg', 'true'), l(n, 13, 0, r['ɵunv'](n, 13, 0, r['ɵnov'](n, 14).transform(e.packages$)).length > 0), l(n, 24, 0);
                    }, function (l, n) {
                        l(n, 1, 0, r['ɵnov'](n, 2).isOpen()), l(n, 5, 0, r['ɵnov'](n, 6).dropdown.isOpen()), l(n, 15, 0, !0, r['ɵnov'](n, 16).dropdown.isOpen(), r['ɵnov'](n, 16).placement), l(n, 18, 0, r['ɵnov'](n, 22).ngClassUntouched, r['ɵnov'](n, 22).ngClassTouched, r['ɵnov'](n, 22).ngClassPristine, r['ɵnov'](n, 22).ngClassDirty, r['ɵnov'](n, 22).ngClassValid, r['ɵnov'](n, 22).ngClassInvalid, r['ɵnov'](n, 22).ngClassPending);
                    });
                }
                function rt(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 4, null, null, null, null, null, null, null)),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, it)),
                        r['ɵdid'](2, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, at)),
                        r['ɵdid'](4, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵand'](0, null, null, 0))
                    ], function (l, n) {
                        var e = n.component;
                        l(n, 2, 0, 'offcanvas' === e.extrasCartLayout), l(n, 4, 0, 'dropdown' === e.extrasCartLayout);
                    }, null);
                }
                function st(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 1, 'app-language-selector', [[
                            'style',
                            'margin-top: 10px;'
                        ]], null, null, null, Be, He)),
                        r['ɵdid'](2, 114688, null, 0, Pe, [
                            Me.a,
                            y.r
                        ], null, null)
                    ], function (l, n) {
                        l(n, 2, 0);
                    }, null);
                }
                function dt(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 13, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 12, 'div', [[
                            'class',
                            'topbar-item'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](2, 0, null, null, 11, 'div', [
                            [
                                'class',
                                'btn btn-icon btn-icon-mobile w-auto btn-clean d-flex align-items-center btn-lg px-2'
                            ],
                            [
                                'id',
                                'kt_quick_user_toggle'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵeld'](3, 0, null, null, 2, 'span', [[
                            'class',
                            'text-muted font-weight-bold font-size-base d-none d-md-inline mr-1'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](4, null, [
                            ' ',
                            ','
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ]),
                        (l()(), r['ɵeld'](6, 0, null, null, 2, 'span', [[
                            'class',
                            'text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](7, null, [
                            '',
                            ''
                        ])),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        (l()(), r['ɵeld'](9, 0, null, null, 4, 'span', [[
                            'class',
                            'symbol symbol-lg-35 symbol-25 symbol-light-success'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](10, 0, null, null, 3, 'span', [
                            [
                                'class',
                                'symbol-label font-size-h5 font-weight-bold'
                            ],
                            [
                                'style',
                                'color: white;'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵted'](11, null, [
                            '',
                            ''
                        ])),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        r['ɵppd'](13, 1)
                    ], null, function (l, n) {
                        var e = n.component;
                        l(n, 4, 0, r['ɵunv'](n, 4, 0, r['ɵnov'](n, 5).transform('GENERAL.HELLO'))), l(n, 7, 0, r['ɵunv'](n, 7, 0, r['ɵnov'](n, 8).transform(e.user$)).name.split(' ')[0]);
                        var t = r['ɵunv'](n, 11, 0, l(n, 13, 0, r['ɵnov'](n.parent.parent.parent, 0), r['ɵunv'](n, 11, 0, r['ɵnov'](n, 12).transform(e.user$)).name.split(' ')[0]));
                        l(n, 11, 0, t);
                    });
                }
                function ct(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 3, null, null, null, null, null, null, null)),
                        (l()(), r['ɵand'](16777216, null, null, 2, null, dt)),
                        r['ɵdid'](2, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        (l()(), r['ɵand'](0, null, null, 0))
                    ], function (l, n) {
                        var e = n.component;
                        l(n, 2, 0, r['ɵunv'](n, 2, 0, r['ɵnov'](n, 3).transform(e.user$)));
                    }, null);
                }
                function ft(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 24, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 23, 'div', [
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
                        r['ɵdid'](2, 1720320, null, 2, V.v, [
                            r.ChangeDetectorRef,
                            V.x,
                            h.DOCUMENT,
                            r.NgZone,
                            r.ElementRef,
                            r.Renderer2,
                            [
                                2,
                                V.K
                            ]
                        ], {
                            placement: [
                                0,
                                'placement'
                            ]
                        }, null),
                        r['ɵqud'](603979776, 4, { _menu: 0 }),
                        r['ɵqud'](603979776, 5, { _anchor: 0 }),
                        (l()(), r['ɵeld'](5, 0, null, null, 14, 'div', [
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
                            var t = !0;
                            return 'click' === n && (t = !1 !== r['ɵnov'](l, 6).dropdown.toggle() && t), 'keydown.ArrowUp' === n && (t = !1 !== r['ɵnov'](l, 6).dropdown.onKeyDown(e) && t), 'keydown.ArrowDown' === n && (t = !1 !== r['ɵnov'](l, 6).dropdown.onKeyDown(e) && t), 'keydown.Home' === n && (t = !1 !== r['ɵnov'](l, 6).dropdown.onKeyDown(e) && t), 'keydown.End' === n && (t = !1 !== r['ɵnov'](l, 6).dropdown.onKeyDown(e) && t), 'keydown.Tab' === n && (t = !1 !== r['ɵnov'](l, 6).dropdown.onKeyDown(e) && t), 'keydown.Shift.Tab' === n && (t = !1 !== r['ɵnov'](l, 6).dropdown.onKeyDown(e) && t), t;
                        }, null, null)),
                        r['ɵdid'](6, 16384, null, 0, V.A, [
                            V.v,
                            r.ElementRef
                        ], null, null),
                        r['ɵprd'](2048, [[
                            5,
                            4
                        ]], V.w, null, [V.A]),
                        (l()(), r['ɵeld'](8, 0, null, null, 11, 'div', [[
                            'class',
                            'btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](9, 0, null, null, 2, 'span', [[
                            'class',
                            'text-muted font-weight-bold font-size-base d-none d-md-inline mr-1'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](10, null, [
                            ' ',
                            ','
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ]),
                        (l()(), r['ɵeld'](12, 0, null, null, 2, 'span', [[
                            'class',
                            'text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](13, null, [
                            '',
                            ''
                        ])),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        (l()(), r['ɵeld'](15, 0, null, null, 4, 'span', [[
                            'class',
                            'symbol symbol-35 symbol-light-success'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](16, 0, null, null, 3, 'span', [[
                            'class',
                            'symbol-label font-size-h5 font-weight-bold'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](17, null, [
                            '',
                            ''
                        ])),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        r['ɵppd'](19, 1),
                        (l()(), r['ɵeld'](20, 0, null, null, 4, 'div', [
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
                            var t = !0;
                            return 'keydown.ArrowUp' === n && (t = !1 !== r['ɵnov'](l, 21).dropdown.onKeyDown(e) && t), 'keydown.ArrowDown' === n && (t = !1 !== r['ɵnov'](l, 21).dropdown.onKeyDown(e) && t), 'keydown.Home' === n && (t = !1 !== r['ɵnov'](l, 21).dropdown.onKeyDown(e) && t), 'keydown.End' === n && (t = !1 !== r['ɵnov'](l, 21).dropdown.onKeyDown(e) && t), 'keydown.Enter' === n && (t = !1 !== r['ɵnov'](l, 21).dropdown.onKeyDown(e) && t), 'keydown.Space' === n && (t = !1 !== r['ɵnov'](l, 21).dropdown.onKeyDown(e) && t), 'keydown.Tab' === n && (t = !1 !== r['ɵnov'](l, 21).dropdown.onKeyDown(e) && t), 'keydown.Shift.Tab' === n && (t = !1 !== r['ɵnov'](l, 21).dropdown.onKeyDown(e) && t), t;
                        }, null, null)),
                        r['ɵdid'](21, 16384, [[
                            4,
                            4
                        ]], 1, V.y, [
                            V.v,
                            r.ElementRef
                        ], null, null),
                        r['ɵqud'](603979776, 6, { menuItems: 1 }),
                        (l()(), r['ɵeld'](23, 0, null, null, 1, 'app-user-dropdown-inner', [], null, null, null, qe, je)),
                        r['ɵdid'](24, 114688, null, 0, Fe, [C.a], null, null)
                    ], function (l, n) {
                        l(n, 2, 0, 'bottom-right'), l(n, 24, 0);
                    }, function (l, n) {
                        var e = n.component;
                        l(n, 1, 0, r['ɵnov'](n, 2).isOpen()), l(n, 5, 0, r['ɵnov'](n, 6).dropdown.isOpen()), l(n, 10, 0, r['ɵunv'](n, 10, 0, r['ɵnov'](n, 11).transform('GENERAL.HELLO'))), l(n, 13, 0, r['ɵunv'](n, 13, 0, r['ɵnov'](n, 14).transform(e.user$)).name.split(' ')[0]);
                        var t = r['ɵunv'](n, 17, 0, l(n, 19, 0, r['ɵnov'](n.parent.parent.parent, 0), r['ɵunv'](n, 17, 0, r['ɵnov'](n, 18).transform(e.user$)).name.split(' ')[0]));
                        l(n, 17, 0, t), l(n, 20, 0, !0, r['ɵnov'](n, 21).dropdown.isOpen(), r['ɵnov'](n, 21).placement);
                    });
                }
                function pt(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, ft)),
                        r['ɵdid'](2, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵand'](0, null, null, 0))
                    ], function (l, n) {
                        l(n, 2, 0, n.component.user$);
                    }, null);
                }
                function ht(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 4, null, null, null, null, null, null, null)),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, ct)),
                        r['ɵdid'](2, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, pt)),
                        r['ɵdid'](4, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵand'](0, null, null, 0))
                    ], function (l, n) {
                        var e = n.component;
                        l(n, 2, 0, 'offcanvas' === e.extrasUserLayout), l(n, 4, 0, 'dropdown' === e.extrasUserLayout);
                    }, null);
                }
                function gt(l) {
                    return r['ɵvid'](0, [
                        r['ɵpid'](0, Ne, []),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, rt)),
                        r['ɵdid'](2, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, st)),
                        r['ɵdid'](4, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, ht)),
                        r['ɵdid'](6, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
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
                var mt, vt, bt, yt, wt = function () {
                    var l, n;
                    return {
                        init: function (e, t) {
                            l = Zl.a.getById(e), n = Zl.a.getById(t);
                        },
                        isFixed: function () {
                            return Zl.a.hasClass(Zl.a.getBody(), 'header-fixed');
                        },
                        isFixedForMobile: function () {
                            return Zl.a.hasClass(Zl.a.getBody(), 'header-mobile-fixed');
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
                            return n = 0, l && (n = Zl.a.actualHeight(l) + 1), n;
                            var n;
                        },
                        getHeightForMobile: function () {
                            return Zl.a.actualHeight(n);
                        }
                    };
                }(), kt = o('bxSH'), St = {
                    init: function (l, n) {
                        mt = Zl.a.getById(l), bt = Zl.a.getById(n), mt && (yt = new Ye.a(bt, {
                            overlay: !0,
                            baseClass: 'header-menu-wrapper',
                            closeBy: 'kt_header_menu_mobile_close_btn',
                            toggleBy: {
                                target: 'kt_header_mobile_toggle',
                                state: 'mobile-toggle-active'
                            }
                        }), (vt = new kt.a(mt, {
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
                            Zl.a.isBreakpointDown('lg') && yt.hide();
                        }));
                    },
                    getMenuElement: function () {
                        return mt;
                    },
                    getOffcanvasElement: function () {
                        return bt;
                    },
                    getMenu: function () {
                        return vt;
                    },
                    pauseDropdownHover: function (l) {
                        vt && vt.pauseDropdownHover(l);
                    },
                    getOffcanvas: function () {
                        return yt;
                    },
                    closeMobileOffcanvas: function () {
                        vt && Zl.a.isMobileDevice() && yt.hide();
                    }
                }, Ct = function () {
                    function l(n, e) {
                        var t = this;
                        d(this, l), this.layout = n, this.router = e, this.headerMenuHTMLAttributes = {}, this.loaderSubject = new z.a(0), this.unsubscribe = [], this.loader$ = this.loaderSubject;
                        var u = this.router.events.subscribe(function (l) {
                            l instanceof y.g && t.loaderSubject.next(10), l instanceof y.p && t.loaderSubject.next(65), l instanceof y.o && t.loaderSubject.next(90), (l instanceof y.e || l instanceof y.d) && (t.loaderSubject.next(100), t.routerLoaderTimout && clearTimeout(t.routerLoaderTimout), t.routerLoaderTimout = setTimeout(function () {
                                t.loaderSubject.next(0);
                            }, 300));
                        });
                        this.unsubscribe.push(u);
                    }
                    return f(l, [
                        {
                            key: 'ngOnInit',
                            value: function () {
                                this.headerContainerCSSClasses = this.layout.getStringCSSClasses('header_container'), this.headerMenuSelfDisplay = this.layout.getProp('header.menu.self.display'), this.asideSelfDisplay = this.layout.getProp('aside.self.display'), this.headerSelfTheme = this.layout.getProp('header.self.theme') || '', this.headerLogo = this.getLogoURL(), this.headerMenuCSSClasses = this.layout.getStringCSSClasses('header_menu'), this.headerMenuHTMLAttributes = this.layout.getHTMLAttributes('header_menu');
                            }
                        },
                        {
                            key: 'getLogoURL',
                            value: function () {
                                var l = 'logo-light.png';
                                return this.headerSelfTheme && 'light' === this.headerSelfTheme && (l = 'logo-dark.png'), this.headerSelfTheme && 'dark' === this.headerSelfTheme && (l = 'logo-dark.png'), './assets/media/logos/' + l;
                            }
                        },
                        {
                            key: 'ngAfterViewInit',
                            value: function () {
                                if (this.ktHeaderMenu)
                                    for (var l in this.headerMenuHTMLAttributes)
                                        this.headerMenuHTMLAttributes.hasOwnProperty(l) && (this.ktHeaderMenu.nativeElement.attributes[l] = this.headerMenuHTMLAttributes[l]);
                                Zl.a.ready(function () {
                                    wt.init('kt_header', 'kt_header_mobile'), St.init('kt_header_menu', 'kt_header_menu_wrapper');
                                });
                            }
                        },
                        {
                            key: 'ngOnDestroy',
                            value: function () {
                                this.unsubscribe.forEach(function (l) {
                                    return l.unsubscribe();
                                }), this.routerLoaderTimout && clearTimeout(this.routerLoaderTimout);
                            }
                        }
                    ]), l;
                }(), Rt = r['ɵcrt']({
                    encapsulation: 0,
                    styles: [['[_nghost-%COMP%]     .loading-bar{position:absolute;top:0;left:0;right:0;width:100%}[_nghost-%COMP%]     .loading-bar .progress-bar{background-color:#5d78ff}[_nghost-%COMP%]     .topbar-item{height:100%}@media (min-width:1025px){[_nghost-%COMP%]     .topbar, [_nghost-%COMP%]     .topbar-item-wrapper{height:100%}}']],
                    data: {}
                });
                function Dt(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 1, 'ngb-progressbar', [
                            [
                                'class',
                                'loading-bar'
                            ],
                            [
                                'height',
                                '3px'
                            ]
                        ], null, null, null, Mn.d, Mn.c)),
                        r['ɵdid'](2, 49152, null, 0, V.T, [V.U], {
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
                function It(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 4, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 3, 'div', [[
                            'class',
                            'header-logo'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](2, 0, null, null, 2, 'a', [[
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
                            var t = !0;
                            return 'click' === n && (t = !1 !== r['ɵnov'](l, 3).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && t), t;
                        }, null, null)),
                        r['ɵdid'](3, 671744, null, 0, y.u, [
                            y.r,
                            y.a,
                            h.LocationStrategy
                        ], {
                            routerLink: [
                                0,
                                'routerLink'
                            ]
                        }, null),
                        (l()(), r['ɵeld'](4, 0, null, null, 0, 'img', [[
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
                        l(n, 2, 0, r['ɵnov'](n, 3).target, r['ɵnov'](n, 3).href), l(n, 4, 0, e.headerLogo);
                    });
                }
                function xt(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 3, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 2, 'div', [
                            [
                                'class',
                                'header-menu-wrapper header-menu-wrapper-left'
                            ],
                            [
                                'id',
                                'kt_header_menu_wrapper'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, It)),
                        r['ɵdid'](3, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
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
                function Et(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 1, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 0, 'div', [], null, null, null, null, null))
                    ], null, null);
                }
                function At(l) {
                    return r['ɵvid'](0, [
                        r['ɵqud'](402653184, 1, { ktHeaderMenu: 0 }),
                        (l()(), r['ɵeld'](1, 0, null, null, 10, 'div', [[
                            'class',
                            'd-flex align-items-stretch justify-content-between'
                        ]], null, null, null, null, null)),
                        r['ɵdid'](2, 278528, null, 0, h.NgClass, [
                            r.IterableDiffers,
                            r.KeyValueDiffers,
                            r.ElementRef,
                            r.Renderer2
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
                        (l()(), r['ɵand'](16777216, null, null, 2, null, Dt)),
                        r['ɵdid'](4, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        r['ɵpid'](131072, h.AsyncPipe, [r.ChangeDetectorRef]),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, xt)),
                        r['ɵdid'](7, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, Et)),
                        r['ɵdid'](9, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵeld'](10, 0, null, null, 1, 'app-topbar', [[
                            'class',
                            'topbar'
                        ]], null, null, null, gt, ut)),
                        r['ɵdid'](11, 4308992, null, 0, et, [
                            C.a,
                            tt.a,
                            R.o
                        ], null, null)
                    ], function (l, n) {
                        var e = n.component;
                        l(n, 2, 0, 'd-flex align-items-stretch justify-content-between', e.headerContainerCSSClasses), l(n, 4, 0, r['ɵunv'](n, 4, 0, r['ɵnov'](n, 5).transform(e.loader$))), l(n, 7, 0, e.headerMenuSelfDisplay), l(n, 9, 0, !e.headerMenuSelfDisplay), l(n, 11, 0);
                    }, null);
                }
                var Tt = function () {
                    function l(n) {
                        d(this, l), this.router = n;
                    }
                    return f(l, [
                        {
                            key: 'ngOnInit',
                            value: function () {
                            }
                        },
                        {
                            key: 'navigateToBuilder',
                            value: function () {
                                this.router.navigate(['/builder']);
                            }
                        }
                    ]), l;
                }(), Vt = r['ɵcrt']({
                    encapsulation: 0,
                    styles: [['']],
                    data: {}
                });
                function _t(l) {
                    return r['ɵvid'](0, [], null, null);
                }
                var Lt = o('N8BJ'), Ot = r['ɵcrt']({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });
                function Pt(l) {
                    return r['ɵvid'](0, [
                        r['ɵncd'](null, 0),
                        (l()(), r['ɵeld'](1, 0, null, null, 1, 'block-ui-content', [], null, null, null, jt, Ht)),
                        r['ɵdid'](2, 12828672, null, 0, Lt.c, [
                            Lt.h,
                            r.ComponentFactoryResolver,
                            r.ChangeDetectorRef
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
                var Mt = r['ɵccf']('block-ui', Lt.b, function (l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 1, 'block-ui', [], null, null, null, Pt, Ot)),
                        r['ɵdid'](1, 114688, null, 0, Lt.b, [Lt.h], null, null)
                    ], function (l, n) {
                        l(n, 1, 0);
                    }, null);
                }, {
                    name: 'name',
                    message: 'message',
                    delayStart: 'delayStart',
                    delayStop: 'delayStop',
                    template: 'template'
                }, {}, ['*']), Ht = r['ɵcrt']({
                    encapsulation: 2,
                    styles: ['\n.block-ui-wrapper {\n  display: none;\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.70);\n  z-index: 30000;\n  cursor: wait;\n}\n\n.block-ui-wrapper.block-ui-wrapper--element {\n  position: absolute;\n}\n\n.block-ui-wrapper.active {\n  display: block;\n}\n\n.block-ui-wrapper.block-ui-main {\n  position: fixed;\n}\n\n.block-ui-spinner,\n.block-ui-template {\n  position: absolute;\n  top: 40%;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n}\n\n.block-ui-spinner > .message {\n  font-size: 1.3em;\n  text-align: center;\n  color: #fff;\n}\n\n.block-ui__element {\n  position: relative;\n}\n\n.loader,\n.loader:after {\n  border-radius: 50%;\n  width: 10em;\n  height: 10em;\n}\n.loader {\n  margin: 7px auto;\n  font-size: 5px;\n  position: relative;\n  text-indent: -9999em;\n  border-top: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-right: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-left: 1.1em solid #ffffff;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: load8 1.1s infinite linear;\n  animation: load8 1.1s infinite linear;\n}\n\n@-webkit-keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n'],
                    data: {}
                });
                function Gt(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 1, 'div', [[
                            'class',
                            'message'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](1, null, [
                            ' ',
                            ' '
                        ]))
                    ], null, function (l, n) {
                        var e = n.component;
                        l(n, 1, 0, e.message || e.defaultMessage);
                    });
                }
                function Bt(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 3, 'div', [[
                            'class',
                            'block-ui-spinner'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 0, 'div', [[
                            'class',
                            'loader'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, Gt)),
                        r['ɵdid'](3, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
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
                function Nt(l) {
                    return r['ɵvid'](0, [(l()(), r['ɵand'](0, null, null, 0))], null, null);
                }
                function Ft(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵand'](16777216, [
                            [
                                1,
                                3
                            ],
                            [
                                'templateOutlet',
                                2
                            ]
                        ], null, 0, null, Nt)),
                        (l()(), r['ɵand'](0, null, null, 0))
                    ], null, null);
                }
                function jt(l) {
                    return r['ɵvid'](0, [
                        r['ɵqud'](671088640, 1, { templateOutlet: 0 }),
                        (l()(), r['ɵeld'](1, 0, null, null, 6, 'div', [], null, null, null, null, null)),
                        r['ɵdid'](2, 278528, null, 0, h.NgClass, [
                            r.IterableDiffers,
                            r.KeyValueDiffers,
                            r.ElementRef,
                            r.Renderer2
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
                        r['ɵpod'](3, { active: 0 }),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, Bt)),
                        r['ɵdid'](5, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, Ft)),
                        r['ɵdid'](7, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null)
                    ], function (l, n) {
                        var e = n.component, t = r['ɵinlineInterpolate'](2, 'block-ui-wrapper ', e.name, ' ', e.className, ''), u = l(n, 3, 0, e.state.blockCount > 0);
                        l(n, 2, 0, t, u), l(n, 5, 0, !e.templateCmp), l(n, 7, 0, e.templateCmp);
                    }, null);
                }
                var Kt = r['ɵccf']('block-ui-content', Lt.c, function (l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 1, 'block-ui-content', [], null, null, null, jt, Ht)),
                        r['ɵdid'](1, 12828672, null, 0, Lt.c, [
                            Lt.h,
                            r.ComponentFactoryResolver,
                            r.ChangeDetectorRef
                        ], null, null)
                    ], function (l, n) {
                        l(n, 1, 0);
                    }, null);
                }, {
                    name: 'name',
                    delayStart: 'delayStart',
                    delayStop: 'delayStop',
                    defaultMessage: 'message',
                    templateCmp: 'template'
                }, {}, []), zt = o('66zS'), Ut = o('W4B1'), qt = o('WJhm'), Wt = o('tYkK'), Yt = o('HeVh'), Xt = o('SCoL'), $t = o('vZwM'), Zt = o('EvHu'), Jt = o('iB+a'), Qt = o('rIfD'), lu = o('ESrA'), nu = o('AytR'), eu = o('2PzG'), tu = function (l) {
                    i(e, l);
                    var n = a(e);
                    function e(l) {
                        var t;
                        return d(this, e), (t = n.call(this)).store = l, t.isLoading = !1, t.canConfirm = !0, t.changeStep = !1, t.showVerifyButton = !0, t;
                    }
                    return f(e, [
                        {
                            key: 'getValuesStore',
                            value: function () {
                                var l = this;
                                this.store.select(function (l) {
                                    return l.auth.user.mobil_device;
                                }).pipe(Object(Fn.a)(this._ngUnsubscribe)).subscribe(function (n) {
                                    l.verifyIfChangeStep(n);
                                });
                            }
                        },
                        {
                            key: 'ngOnInit',
                            value: function () {
                                this.getValuesStore();
                            }
                        },
                        {
                            key: 'verifyDownloadAppConfig',
                            value: function () {
                                this.canConfirm = !1, this.startCounterActiveButton(), this.store.dispatch(new Qt.e());
                            }
                        },
                        {
                            key: 'startCounterActiveButton',
                            value: function () {
                                var l = this;
                                setTimeout(function () {
                                    l.canConfirm = !0;
                                }, nu.a.timeVerifyDownloadApp);
                            }
                        },
                        {
                            key: 'verifyIfChangeStep',
                            value: function (l) {
                                '' != l && null != l && this.store.dispatch(new Qt.a(eu.a.digitalSignature));
                            }
                        }
                    ]), e;
                }(lu.a), uu = r['ɵcrt']({
                    encapsulation: 0,
                    styles: [['.aaa[_ngcontent-%COMP%]{width:100px;height:200px;background-image:url(background_step1.a3430ad9cd91386f7d5d.svg);border:2px solid #777171}']],
                    data: {}
                });
                function iu(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 16777216, null, null, 4, 'i', [
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
                        r['ɵdid'](1, 2703360, null, 0, zt.a, [
                            r.ElementRef,
                            zt.d,
                            r.Renderer2,
                            [
                                2,
                                zt.c
                            ]
                        ], {
                            nzType: [
                                0,
                                'nzType'
                            ]
                        }, null),
                        r['ɵdid'](2, 4866048, null, 0, Ut.c, [
                            r.ElementRef,
                            r.ViewContainerRef,
                            r.ComponentFactoryResolver,
                            r.Renderer2,
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
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ]),
                        r['ɵdid'](4, 4734976, null, 0, qt.a, [
                            r.ElementRef,
                            r.Renderer2
                        ], null, null),
                        (l()(), r['ɵand'](0, null, null, 0))
                    ], function (l, n) {
                        l(n, 1, 0, 'info-circle'), l(n, 2, 0, r['ɵinlineInterpolate'](1, '', r['ɵunv'](n, 2, 0, r['ɵnov'](n, 3).transform('FORM.DESCRIPTIONS.DOWNLOAD_APP.AWAIT_VERIFY')), ''), '');
                    }, function (l, n) {
                        l(n, 0, 0, !0, r['ɵnov'](n, 2).visible);
                    });
                }
                function ou(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 8, 'div', [[
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
                        r['ɵdid'](1, 4931584, null, 0, Wt.c, [
                            r.ElementRef,
                            r.Renderer2,
                            Yt.b,
                            r.NgZone,
                            Xt.a,
                            $t.b
                        ], null, null),
                        (l()(), r['ɵeld'](2, 0, null, null, 6, 'div', [
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
                        r['ɵdid'](3, 4931584, null, 0, Wt.a, [
                            r.ElementRef,
                            [
                                2,
                                Wt.c
                            ],
                            r.Renderer2
                        ], {
                            nzSpan: [
                                0,
                                'nzSpan'
                            ]
                        }, null),
                        (l()(), r['ɵeld'](4, 0, null, null, 2, 'button', [[
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
                        (l()(), r['ɵted'](5, null, [
                            ' ',
                            ' '
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ]),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, iu)),
                        r['ɵdid'](8, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
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
                        l(n, 0, 0, 'top' === r['ɵnov'](n, 1).nzAlign, 'middle' === r['ɵnov'](n, 1).nzAlign, 'bottom' === r['ɵnov'](n, 1).nzAlign, 'start' === r['ɵnov'](n, 1).nzJustify, 'end' === r['ɵnov'](n, 1).nzJustify, 'center' === r['ɵnov'](n, 1).nzJustify, 'space-around' === r['ɵnov'](n, 1).nzJustify, 'space-between' === r['ɵnov'](n, 1).nzJustify), l(n, 2, 0, r['ɵnov'](n, 3).hostFlexStyle), l(n, 4, 0, !e.canConfirm), l(n, 5, 0, r['ɵunv'](n, 5, 0, r['ɵnov'](n, 6).transform('FORM.BUTTOMS.DOWNLOAD_CONFIRM')));
                    });
                }
                function au(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 15, 'ce-layout-dashboard', [], null, null, null, Zt.b, Zt.a)),
                        r['ɵdid'](1, 638976, null, 0, Jt.a, [r.ChangeDetectorRef], null, null),
                        (l()(), r['ɵeld'](2, 0, null, 0, 13, 'div', [
                            [
                                'class',
                                'p-4 m-1'
                            ],
                            [
                                'content',
                                ''
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵeld'](3, 0, null, null, 5, 'h2', [[
                            'class',
                            'display-4'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](4, null, [
                            ' ',
                            ' '
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ]),
                        (l()(), r['ɵeld'](6, 0, null, null, 2, 'small', [[
                            'class',
                            'text-muted'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](7, null, [
                            '',
                            ''
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ]),
                        (l()(), r['ɵeld'](9, 0, null, null, 1, 'img', [
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
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ]),
                        (l()(), r['ɵeld'](11, 0, null, null, 2, 'p', [[
                            'class',
                            'p-3 m-1'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵted'](12, null, [
                            ' ',
                            ' '
                        ])),
                        r['ɵpid'](131072, w.k, [
                            w.l,
                            r.ChangeDetectorRef
                        ]),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, ou)),
                        r['ɵdid'](15, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
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
                        l(n, 4, 0, r['ɵunv'](n, 4, 0, r['ɵnov'](n, 5).transform('FORM.DESCRIPTIONS.DOWNLOAD_APP.NORMAL'))), l(n, 7, 0, r['ɵunv'](n, 7, 0, r['ɵnov'](n, 8).transform('FORM.DESCRIPTIONS.DOWNLOAD_APP.MUTED'))), l(n, 9, 0, r['ɵinlineInterpolate'](1, '', r['ɵunv'](n, 9, 0, r['ɵnov'](n, 10).transform('BASIC_INFO.STEP1.TITLE')), '')), l(n, 12, 0, r['ɵunv'](n, 12, 0, r['ɵnov'](n, 13).transform('FORM.DESCRIPTIONS.DOWNLOAD_APP.SEARCH_APP')));
                    });
                }
                var ru = o('1jwE'), su = function () {
                    var l, n;
                    return {
                        init: function (e) {
                            var t;
                            (l = Zl.a.getById(e)) && (t = 300, void 0 !== wt && (t = wt.getHeight()), (n = new ru.a(l, {
                                sticky: {
                                    offset: t,
                                    zIndex: 90,
                                    position: {
                                        top: function () {
                                            var l = 0;
                                            return Zl.a.getBody(), Zl.a.isBreakpointUp('lg') ? (void 0 !== wt && wt.isFixed() && (l += wt.getHeight()), void 0 !== Jl && Jl.isFixed() && (l += Jl.getHeight())) : void 0 !== wt && wt.isFixedForMobile() && (l += wt.getHeightForMobile()), l - 1;
                                        },
                                        left: function (n) {
                                            return Zl.a.offset(l).left;
                                        },
                                        right: function (n) {
                                            var e = Zl.a.getBody(), t = parseInt(Zl.a.css(l, 'width'));
                                            return parseInt(Zl.a.css(e, 'width')) - t - Zl.a.offset(l).left;
                                        }
                                    }
                                }
                            })).initSticky(), Zl.a.addResizeHandler(function () {
                                n.updateSticky();
                            }));
                        },
                        update: function () {
                            n && n.updateSticky();
                        }
                    };
                }(), du = function () {
                    var l;
                    return {
                        init: function (n) {
                            l = Zl.a.getById(n);
                        },
                        getElement: function () {
                            return l;
                        },
                        getHeight: function () {
                            return n = 0, l && (n = Zl.a.actualHeight(l)), n;
                            var n;
                        }
                    };
                }(), cu = function () {
                    var l, n, e;
                    return {
                        init: function (t) {
                            var u;
                            n = Zl.a.getById(t), l = Zl.a.getBody(), n && (u = Zl.a.hasClass(n, 'aside-offcanvas-default') ? 'aside-offcanvas-default' : 'aside', e = new Ye.a(n, {
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
                            return Zl.a.hasClass(l, 'aside-fixed');
                        },
                        isMinimized: function () {
                            return Zl.a.hasClass(l, 'aside-fixed') && Zl.a.hasClass(l, 'aside-minimize');
                        },
                        isHoverable: function () {
                            return Zl.a.hasClass(l, 'aside-fixed') && Zl.a.hasClass(l, 'aside-minimize-hoverable');
                        }
                    };
                }(), fu = function () {
                    var l, n, e;
                    return {
                        init: function (t) {
                            var u, i, o, a;
                            l = Zl.a.getBody(), (n = Zl.a.getById(t)) && (i = '1' === Zl.a.attr(n, 'data-menu-dropdown') ? 'dropdown' : 'accordion', '1' === Zl.a.attr(n, 'data-menu-scroll') && (u = {
                                rememberPosition: !0,
                                height: function () {
                                    var l = parseInt(Zl.a.getViewPort().height);
                                    return Zl.a.isBreakpointUp('lg') && (l -= du.getHeight()), l - (parseInt(Zl.a.css(n, 'marginBottom')) + parseInt(Zl.a.css(n, 'marginTop')));
                                }
                            }), e = new kt.a(n, {
                                scroll: u,
                                submenu: {
                                    desktop: i,
                                    tablet: 'accordion',
                                    mobile: 'accordion'
                                },
                                accordion: { expandAll: !1 }
                            }), Zl.a.hasClass(l, 'aside-fixed') && Zl.a.hasClass(l, 'aside-minimize-hoverable') && (Zl.a.addEvent(n, 'mouseenter', function (n) {
                                n.preventDefault(), !1 !== Zl.a.isBreakpointUp('lg') && (a && (clearTimeout(a), a = null), o && (clearTimeout(o), o = null), o = setTimeout(function () {
                                    Zl.a.hasClass(l, 'aside-minimize') && Zl.a.isBreakpointUp('lg') && (Zl.a.addClass(l, 'aside-minimize-hover'), fu.getMenu().scrollUpdate(), fu.getMenu().scrollTop());
                                }, 50));
                            }), Zl.a.addEvent(cu.getElement(), 'mouseleave', function (n) {
                                n.preventDefault(), !1 !== Zl.a.isBreakpointUp('lg') && (o && (clearTimeout(o), o = null), a && (clearTimeout(a), a = null), a = setTimeout(function () {
                                    Zl.a.hasClass(l, 'aside-minimize-hover') && Zl.a.isBreakpointUp('lg') && (Zl.a.removeClass(l, 'aside-minimize-hover'), fu.getMenu().scrollUpdate(), fu.getMenu().scrollTop());
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
                            e && Zl.a.isMobileDevice() && e.hide();
                        }
                    };
                }(), pu = fu, hu = o('68Zv'), gu = function () {
                    var l, n, e;
                    return {
                        init: function (t) {
                            n = Zl.a.getById(t), l = Zl.a.getBody(), n && ((e = new nt.a(n, l, {
                                targetState: 'aside-minimize',
                                toggleState: 'active'
                            })).on('toggle', function (l) {
                                void 0 !== su && su.update(), void 0 !== St && St.pauseDropdownHover(800), void 0 !== pu && pu.pauseDropdownHover(800), hu.a.setCookie('kt_aside_toggle_state', l.getState());
                            }), e.on('beforeToggle', function (n) {
                                !1 === Zl.a.hasClass(l, 'aside-minimize') && Zl.a.hasClass(l, 'aside-minimize-hover') && Zl.a.removeClass(l, 'aside-minimize-hover');
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
                }(), mu = function () {
                    var l;
                    return {
                        init: function (n) {
                            l = Zl.a.getById(n);
                        },
                        getHeight: function () {
                            return n = Zl.a.getViewPort().height, l && (n = n - parseInt(Zl.a.css(l, 'paddingTop')) - parseInt(Zl.a.css(l, 'paddingBottom'))), n -= wt.getHeight(), (n -= Jl.getHeight()) - dn.getHeight();
                            var n;
                        },
                        getElement: function () {
                            return l;
                        }
                    };
                }(), vu = function () {
                    var l, n = function () {
                        var n = Zl.a.find(l, '.card-scroll'), e = Zl.a.find(l, '.card-body'), t = Zl.a.find(l, '.card-header'), u = mu.getHeight();
                        u = (u = (u = (u = (u -= parseInt(Zl.a.actualHeight(t))) - parseInt(Zl.a.css(l, 'marginTop')) - parseInt(Zl.a.css(l, 'marginBottom'))) - parseInt(Zl.a.css(l, 'paddingTop')) - parseInt(Zl.a.css(l, 'paddingBottom'))) - parseInt(Zl.a.css(e, 'paddingTop')) - parseInt(Zl.a.css(e, 'paddingBottom'))) - parseInt(Zl.a.css(e, 'marginTop')) - parseInt(Zl.a.css(e, 'marginBottom')), Zl.a.css(n, 'height', (u -= 3) + 'px');
                    };
                    return {
                        init: function (e) {
                            (l = Zl.a.getById(e)) && (n(), Zl.a.addResizeHandler(function () {
                                n();
                            }));
                        },
                        update: function () {
                            n();
                        }
                    };
                }(), bu = function () {
                    function l(n, e) {
                        d(this, l), this.layout = n, this.ref = e, this.asideSelfMinimizeToggle = !1;
                    }
                    return f(l, [
                        {
                            key: 'ngOnInit',
                            value: function () {
                                this.asideSelfMinimizeToggle = this.layout.getProp('aside.self.minimize.toggle');
                            }
                        },
                        {
                            key: 'ngAfterViewInit',
                            value: function () {
                                var l = this;
                                Zl.a.ready(function () {
                                    du.init('kt_brand'), cu.init('kt_aside'), pu.init('kt_aside_menu'), l.asideSelfMinimizeToggle && gu.init('kt_aside_toggle'), su.init('kt_page_sticky_card'), vu.init('kt_page_stretched_card');
                                });
                            }
                        }
                    ]), l;
                }(), yu = r['ɵcrt']({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });
                function wu(l) {
                    return r['ɵvid'](0, [], null, null);
                }
                var ku, Su = o('Ed4d'), Cu = o('NFMk'), Ru = o('cxbk'), Du = o('kcZq'), Iu = function () {
                    function l(n, e, t, u, i, o, a) {
                        var r = this;
                        d(this, l), this.initService = n, this.layout = e, this._notification = t, this.store = u, this.ref = i, this.modal = o, this.viewContainerRef = a, this.userInactive = new Gn.a(), this.awaitMessageClose = !1, this.selfLayout = 'default', this.contentClasses = '', this.contentContainerClasses = '', this.subheaderDisplay = !0, this.asideHTMLAttributes = {}, this.headerMobileClasses = '', this.headerMobileAttributes = {}, this.headerHTMLAttributes = {}, this.extrasSearchOffcanvasDisplay = !1, this.extrasNotificationsOffcanvasDisplay = !1, this.extrasQuickActionsOffcanvasDisplay = !1, this.extrasCartOffcanvasDisplay = !1, this.extrasUserOffcanvasDisplay = !1, this.extrasQuickPanelDisplay = !1, this.extrasScrollTopDisplay = !1, this.labelButtonContinue = 'Siguiente', this.isVisibleModal = !1, this.unsubscribe = new Gn.a(), u.select(function (l) {
                            return l.auth.awaitMessageClose;
                        }).pipe(Object(Fn.a)(this.unsubscribe)).subscribe(function (l) {
                            r.awaitMessageClose = l;
                        }), this.initService.init(), this.setTimeout(), this.userInactive.subscribe(function () {
                            return r.timeExpiredSession();
                        }), u.select(function (l) {
                            return l.layoutModule.basicInfo.modal.isVisible;
                        }).pipe(Object(Fn.a)(this.unsubscribe)).subscribe(function (l) {
                            r.isVisibleModal = l;
                        });
                    }
                    return f(l, [
                        {
                            key: 'ngOnDestroy',
                            value: function () {
                                this.userInactive.unsubscribe(), this.unsubscribe.next();
                            }
                        },
                        {
                            key: 'ngOnInit',
                            value: function () {
                                this.selfLayout = this.layout.getProp('self.layout'), this.asideSelfDisplay = this.layout.getProp('aside.self.display'), this.subheaderDisplay = this.layout.getProp('subheader.display'), this.contentClasses = this.layout.getStringCSSClasses('content'), this.contentContainerClasses = this.layout.getStringCSSClasses('content_container'), this.contentExtended = this.layout.getProp('content.extended'), this.asideHTMLAttributes = this.layout.getHTMLAttributes('aside'), this.asideCSSClasses = this.layout.getStringCSSClasses('aside'), this.headerMobileClasses = this.layout.getStringCSSClasses('header_mobile'), this.headerMobileAttributes = this.layout.getHTMLAttributes('header_mobile'), this.footerDisplay = this.layout.getProp('footer.display'), this.footerCSSClasses = this.layout.getStringCSSClasses('footer'), this.headerCSSClasses = this.layout.getStringCSSClasses('header'), this.headerHTMLAttributes = this.layout.getHTMLAttributes('header'), this.layout.getProp('extras.search.display') && (this.extrasSearchOffcanvasDisplay = 'offcanvas' === this.layout.getProp('extras.search.layout')), this.layout.getProp('extras.notifications.display') && (this.extrasNotificationsOffcanvasDisplay = 'offcanvas' === this.layout.getProp('extras.notifications.layout')), this.layout.getProp('extras.quickActions.display') && (this.extrasQuickActionsOffcanvasDisplay = 'offcanvas' === this.layout.getProp('extras.quickActions.layout')), this.layout.getProp('extras.cart.display') && (this.extrasCartOffcanvasDisplay = 'offcanvas' === this.layout.getProp('extras.cart.layout')), this.layout.getProp('extras.user.display') && (this.extrasUserOffcanvasDisplay = 'offcanvas' === this.layout.getProp('extras.user.layout')), this.extrasQuickPanelDisplay = this.layout.getProp('extras.quickPanel.display'), this.extrasScrollTopDisplay = this.layout.getProp('extras.scrolltop.display');
                            }
                        },
                        {
                            key: 'ngAfterViewInit',
                            value: function () {
                                if (this.ktAside)
                                    for (var l in this.asideHTMLAttributes)
                                        this.asideHTMLAttributes.hasOwnProperty(l) && (this.ktAside.nativeElement.attributes[l] = this.asideHTMLAttributes[l]);
                                if (this.ktHeaderMobile)
                                    for (var n in this.headerMobileAttributes)
                                        this.headerMobileAttributes.hasOwnProperty(n) && (this.ktHeaderMobile.nativeElement.attributes[n] = this.headerMobileAttributes[n]);
                                if (this.ktHeader)
                                    for (var e in this.headerHTMLAttributes)
                                        this.headerHTMLAttributes.hasOwnProperty(e) && (this.ktHeader.nativeElement.attributes[e] = this.headerHTMLAttributes[e]);
                                mu.init('kt_content');
                            }
                        },
                        {
                            key: 'refreshUserState',
                            value: function () {
                                clearTimeout(this.userActivity), this.awaitMessageClose || this.setTimeout();
                            }
                        },
                        {
                            key: 'setTimeout',
                            value: function (l) {
                                function n() {
                                    return l.apply(this, arguments);
                                }
                                return n.toString = function () {
                                    return l.toString();
                                }, n;
                            }(function () {
                                var l = this;
                                this.userActivity = setTimeout(function () {
                                    return l.userInactive.next(void 0);
                                }, Ru.a.timeSessionActive);
                            })
                        },
                        {
                            key: 'timeExpiredSession',
                            value: function () {
                                this.store.dispatch(new Du.g());
                            }
                        },
                        {
                            key: 'handleCancel',
                            value: function () {
                                this.store.dispatch(new Qt.d(!1));
                            }
                        }
                    ]), l;
                }(), xu = ((ku = function () {
                    function l(n) {
                        d(this, l), this.layout = n;
                    }
                    return f(l, [
                        {
                            key: 'init',
                            value: function () {
                                this.layout.initConfig(), this.preInitLayout(), this.initLayout(), this.initLoader(), this.initHeader(), this.initSubheader(), this.initContent(), this.initAside(), this.initFooter(), this.initSkins();
                            }
                        },
                        {
                            key: 'preInitLayout',
                            value: function () {
                                var l = this.layout.getConfig(), n = Object.assign({}, l), e = this.layout.getProp('subheader.fixed'), t = this.layout.getProp('header.self.fixed.desktop');
                                e && t ? n.subheader.style = 'solid' : n.subheader.fixed = !1, this.layout.setConfigWithoutLocalStorageChanges(n);
                            }
                        },
                        {
                            key: 'initLayout',
                            value: function () {
                                var l = this.layout.getProp('self.body.background-image');
                                l && (document.body.style.backgroundImage = 'url("'.concat(l, '")'));
                                var n = (this.layout.getProp('self.body.class') || '').toString();
                                n && n.split(' ').forEach(function (l) {
                                    return document.body.classList.add(l);
                                });
                            }
                        },
                        {
                            key: 'initLoader',
                            value: function () {
                            }
                        },
                        {
                            key: 'initHeader',
                            value: function () {
                                this.layout.getProp('header.self.fixed.desktop') ? (document.body.classList.add('header-fixed'), this.layout.setCSSClass('header', 'header-fixed')) : document.body.classList.add('header-static'), this.layout.getProp('header.self.fixed.mobile') && (document.body.classList.add('header-mobile-fixed'), this.layout.setCSSClass('header_mobile', 'header-mobile-fixed'));
                                var l = this.layout.getProp('header.menu.self.display'), n = this.layout.getProp('header.menu.self.layout');
                                l && (this.layout.setCSSClass('header_menu', 'header-menu-layout-' + n), this.layout.getProp('header.menu.self.rootArrow') && this.layout.setCSSClass('header_menu', 'header-menu-root-arrow')), 'fluid' === this.layout.getProp('header.self.width') ? this.layout.setCSSClass('header_container', 'container-fluid') : this.layout.setCSSClass('header_container', 'container');
                            }
                        },
                        {
                            key: 'initSubheader',
                            value: function () {
                                if (this.layout.getProp('subheader.display')) {
                                    document.body.classList.add('subheader-enabled');
                                    var l = this.layout.getProp('subheader.fixed'), n = this.layout.getProp('header.self.fixed.desktop');
                                    l && n && document.body.classList.add('subheader-fixed');
                                    var e = this.layout.getProp('subheader.style');
                                    e && this.layout.setCSSClass('subheader', 'subheader-' + e), 'fluid' === this.layout.getProp('subheader.width') ? this.layout.setCSSClass('subheader_container', 'container-fluid') : this.layout.setCSSClass('subheader_container', 'container'), this.layout.getProp('subheader.clear') && this.layout.setCSSClass('subheader', 'mb-0');
                                }
                            }
                        },
                        {
                            key: 'initContent',
                            value: function () {
                                this.layout.getProp('content.fit-top') && this.layout.setCSSClass('content', 'pt-0'), this.layout.getProp('content.fit-bottom') && this.layout.setCSSClass('content', 'pb-0'), 'fluid' === this.layout.getProp('content.width') ? this.layout.setCSSClass('content_container', 'container-fluid') : this.layout.setCSSClass('content_container', 'container');
                            }
                        },
                        {
                            key: 'initAside',
                            value: function () {
                                if (!0 === this.layout.getProp('aside.self.display') && (document.body.classList.add('aside-enabled'), this.layout.getProp('aside.self.fixed') ? (document.body.classList.add('aside-fixed'), this.layout.setCSSClass('aside', 'aside-fixed')) : document.body.classList.add('aside-static'), !0 === this.layout.getProp('aside.self.display'))) {
                                    this.layout.getProp('aside.self.minimize.default') && document.body.classList.add('aside-minimize'), this.layout.getProp('aside.self.minimize.hoverable') && document.body.classList.add('aside-minimize-hoverable');
                                    var l = this.layout.getProp('aside.menu.dropdown');
                                    l && (this.layout.setCSSClass('aside_menu', 'aside-menu-dropdown'), this.layout.setHTMLAttribute('aside_menu', 'data-menu-dropdown', '1')), this.layout.setHTMLAttribute('aside_menu', 'data-menu-scroll', !0 !== l ? '1' : '0');
                                    var n = this.layout.getProp('aside.menu.submenu.dropdown.hoverTimeout');
                                    n && this.layout.setHTMLAttribute('aside_menu', 'data-menu-dropdown-timeout', n);
                                }
                            }
                        },
                        {
                            key: 'initFooter',
                            value: function () {
                                !0 === this.layout.getProp('footer.fixed') && document.body.classList.add('footer-fixed'), 'fluid' === this.layout.getProp('footer.width') ? this.layout.setCSSClass('footer_container', 'container-fluid') : this.layout.setCSSClass('footer_container', 'container');
                            }
                        },
                        {
                            key: 'initSkins',
                            value: function () {
                                var l = this.layout.getProp('header.self.theme') || '', n = this.layout.getProp('brand.self.theme') || '';
                                !1 === this.layout.getProp('aside.self.display') ? document.body.classList.add('brand-' + l) : document.body.classList.add('brand-' + n);
                            }
                        }
                    ]), l;
                }()).ɵprov = r['ɵɵdefineInjectable']({
                    factory: function () {
                        return new ku(r['ɵɵinject'](C.a));
                    },
                    token: ku,
                    providedIn: 'root'
                }), ku), Eu = r['ɵcrt']({
                    encapsulation: 0,
                    styles: [['app-layout[_ngcontent-%COMP%]{opacity:0}app-layout[_ngcontent-%COMP%], app-layout[_ngcontent-%COMP%]   .grid-root[_ngcontent-%COMP%]{height:100%}.page-loaded[_ngcontent-%COMP%]   app-layout[_ngcontent-%COMP%]{opacity:1;transition:opacity 1s ease-in-out}']],
                    data: {}
                });
                function Au(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 3, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 2, 'app-aside', [
                            [
                                'class',
                                'aside aside-left d-flex flex-column flex-row-auto'
                            ],
                            [
                                'id',
                                'kt_aside'
                            ]
                        ], null, null, null, T, D)),
                        r['ɵdid'](2, 278528, null, 0, h.NgClass, [
                            r.IterableDiffers,
                            r.KeyValueDiffers,
                            r.ElementRef,
                            r.Renderer2
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
                        r['ɵdid'](3, 114688, [
                            [
                                1,
                                4
                            ],
                            [
                                'ktAside',
                                4
                            ]
                        ], 0, S, [
                            C.a,
                            h.Location,
                            R.o
                        ], null, null)
                    ], function (l, n) {
                        l(n, 2, 0, 'aside aside-left d-flex flex-column flex-row-auto', n.component.asideCSSClasses), l(n, 3, 0);
                    }, null);
                }
                function Tu(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 1, 'app-subheader-wrapper', [], null, null, null, sn, ln)),
                        r['ɵdid'](2, 4308992, null, 0, Ql, [
                            q,
                            y.r
                        ], null, null)
                    ], function (l, n) {
                        l(n, 2, 0);
                    }, null);
                }
                function Vu(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
                        r['ɵdid'](2, 212992, null, 0, y.w, [
                            y.b,
                            r.ViewContainerRef,
                            r.ComponentFactoryResolver,
                            [
                                8,
                                null
                            ],
                            r.ChangeDetectorRef
                        ], null, null),
                        (l()(), r['ɵand'](0, null, null, 0))
                    ], function (l, n) {
                        l(n, 2, 0);
                    }, null);
                }
                function _u(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 5, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 4, 'div', [[
                            'class',
                            'd-flex flex-column-fluid'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](2, 0, null, null, 3, 'div', [], null, null, null, null, null)),
                        r['ɵdid'](3, 278528, null, 0, h.NgClass, [
                            r.IterableDiffers,
                            r.KeyValueDiffers,
                            r.ElementRef,
                            r.Renderer2
                        ], {
                            ngClass: [
                                0,
                                'ngClass'
                            ]
                        }, null),
                        (l()(), r['ɵeld'](4, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
                        r['ɵdid'](5, 212992, null, 0, y.w, [
                            y.b,
                            r.ViewContainerRef,
                            r.ComponentFactoryResolver,
                            [
                                8,
                                null
                            ],
                            r.ChangeDetectorRef
                        ], null, null)
                    ], function (l, n) {
                        l(n, 3, 0, n.component.contentContainerClasses), l(n, 5, 0);
                    }, null);
                }
                function Lu(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 3, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 2, 'app-footer', [
                            [
                                'class',
                                'footer bg-white py-4 d-flex flex-lg-column w-100'
                            ],
                            [
                                'id',
                                'kt_footer'
                            ]
                        ], null, null, null, pn, fn)),
                        r['ɵdid'](2, 278528, null, 0, h.NgClass, [
                            r.IterableDiffers,
                            r.KeyValueDiffers,
                            r.ElementRef,
                            r.Renderer2
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
                        r['ɵdid'](3, 4308992, null, 0, cn, [C.a], null, null)
                    ], function (l, n) {
                        l(n, 2, 0, 'footer bg-white py-4 d-flex flex-lg-column w-100', n.component.footerCSSClasses), l(n, 3, 0);
                    }, null);
                }
                function Ou(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 1, 'app-search-offcanvas', [], null, null, null, mn, gn)),
                        r['ɵdid'](2, 114688, null, 0, hn, [C.a], null, null)
                    ], function (l, n) {
                        l(n, 2, 0);
                    }, null);
                }
                function Pu(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 1, 'app-user-offcanvas', [], null, null, null, Dn, yn)),
                        r['ɵdid'](2, 245760, null, 0, vn.b, [
                            C.a,
                            R.o,
                            r.ChangeDetectorRef,
                            bn.a
                        ], null, null)
                    ], function (l, n) {
                        l(n, 2, 0);
                    }, null);
                }
                function Mu(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 1, 'app-scroll-top', [], null, null, null, Tn, An)),
                        r['ɵdid'](2, 4308992, null, 0, En, [], null, null)
                    ], function (l, n) {
                        l(n, 2, 0);
                    }, null);
                }
                function Hu(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 1, 'div', [[
                            'class',
                            'block-ui-template'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 0, 'img', [[
                            'src',
                            '../assets/media/svg/icons/Code/Loading.svg'
                        ]], null, null, null, null, null))
                    ], null, null);
                }
                function Gu(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 32, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 2, 'app-header-mobile', [
                            [
                                'class',
                                'header-mobile align-items-center'
                            ],
                            [
                                'id',
                                'kt_header_mobile'
                            ]
                        ], null, null, null, Pn, _n)),
                        r['ɵdid'](2, 278528, null, 0, h.NgClass, [
                            r.IterableDiffers,
                            r.KeyValueDiffers,
                            r.ElementRef,
                            r.Renderer2
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
                        r['ɵdid'](3, 4308992, [
                            [
                                2,
                                4
                            ],
                            [
                                'ktHeaderMobile',
                                4
                            ]
                        ], 0, Vn, [C.a], null, null),
                        (l()(), r['ɵeld'](4, 0, null, null, 25, 'div', [[
                            'class',
                            'd-flex flex-column flex-root'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](5, 0, null, null, 16, 'div', [[
                            'class',
                            'd-flex flex-row flex-column-fluid page'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, Au)),
                        r['ɵdid'](7, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵeld'](8, 0, null, null, 13, 'div', [
                            [
                                'class',
                                'd-flex flex-column flex-row-fluid wrapper'
                            ],
                            [
                                'id',
                                'kt_wrapper'
                            ]
                        ], null, null, null, null, null)),
                        (l()(), r['ɵeld'](9, 0, null, null, 2, 'app-header', [
                            [
                                'class',
                                'header'
                            ],
                            [
                                'id',
                                'kt_header'
                            ]
                        ], null, null, null, At, Rt)),
                        r['ɵdid'](10, 278528, null, 0, h.NgClass, [
                            r.IterableDiffers,
                            r.KeyValueDiffers,
                            r.ElementRef,
                            r.Renderer2
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
                        r['ɵdid'](11, 4440064, [
                            [
                                3,
                                4
                            ],
                            [
                                'ktHeader',
                                4
                            ]
                        ], 0, Ct, [
                            C.a,
                            y.r
                        ], null, null),
                        (l()(), r['ɵeld'](12, 0, null, null, 7, 'div', [
                            [
                                'class',
                                'content d-flex flex-column flex-column-fluid'
                            ],
                            [
                                'id',
                                'kt_content'
                            ]
                        ], null, null, null, null, null)),
                        r['ɵdid'](13, 278528, null, 0, h.NgClass, [
                            r.IterableDiffers,
                            r.KeyValueDiffers,
                            r.ElementRef,
                            r.Renderer2
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
                        (l()(), r['ɵand'](16777216, null, null, 1, null, Tu)),
                        r['ɵdid'](15, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, Vu)),
                        r['ɵdid'](17, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, _u)),
                        r['ɵdid'](19, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, Lu)),
                        r['ɵdid'](21, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, Ou)),
                        r['ɵdid'](23, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, Pu)),
                        r['ɵdid'](25, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵeld'](26, 0, null, null, 1, 'app-toolbar', [], null, null, null, _t, Vt)),
                        r['ɵdid'](27, 114688, null, 0, Tt, [y.r], null, null),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, Mu)),
                        r['ɵdid'](29, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
                        ], {
                            ngIf: [
                                0,
                                'ngIf'
                            ]
                        }, null),
                        (l()(), r['ɵeld'](30, 0, null, null, 2, 'block-ui', [], null, null, null, Pt, Ot)),
                        r['ɵdid'](31, 114688, null, 0, Lt.b, [Lt.h], {
                            template: [
                                0,
                                'template'
                            ]
                        }, null),
                        (l()(), r['ɵand'](0, [[
                            'blockTemplate',
                            2
                        ]], 0, 0, null, Hu))
                    ], function (l, n) {
                        var e = n.component;
                        l(n, 2, 0, 'header-mobile align-items-center', e.headerMobileClasses), l(n, 3, 0), l(n, 7, 0, e.asideSelfDisplay), l(n, 10, 0, 'header', e.headerCSSClasses), l(n, 11, 0), l(n, 13, 0, 'content d-flex flex-column flex-column-fluid', e.contentClasses), l(n, 15, 0, e.subheaderDisplay), l(n, 17, 0, e.contentExtended), l(n, 19, 0, !e.contentExtended), l(n, 21, 0, e.footerDisplay), l(n, 23, 0, e.extrasSearchOffcanvasDisplay), l(n, 25, 0, e.extrasUserOffcanvasDisplay), l(n, 27, 0), l(n, 29, 0, e.extrasScrollTopDisplay), l(n, 31, 0, r['ɵnov'](n, 32));
                    }, null);
                }
                function Bu(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 2, 'div', [[
                            'class',
                            'd-flex flex-column flex-root'
                        ]], null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
                        r['ɵdid'](2, 212992, null, 0, y.w, [
                            y.b,
                            r.ViewContainerRef,
                            r.ComponentFactoryResolver,
                            [
                                8,
                                null
                            ],
                            r.ChangeDetectorRef
                        ], null, null)
                    ], function (l, n) {
                        l(n, 2, 0);
                    }, null);
                }
                function Nu(l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                        (l()(), r['ɵeld'](1, 0, null, null, 1, 'ce-view-download-app', [], null, null, null, au, uu)),
                        r['ɵdid'](2, 245760, null, 0, tu, [R.o], {
                            showVerifyButton: [
                                0,
                                'showVerifyButton'
                            ]
                        }, null)
                    ], function (l, n) {
                        l(n, 2, 0, !1);
                    }, null);
                }
                function Fu(l) {
                    return r['ɵvid'](0, [
                        r['ɵqud'](402653184, 1, { ktAside: 0 }),
                        r['ɵqud'](402653184, 2, { ktHeaderMobile: 0 }),
                        r['ɵqud'](402653184, 3, { ktHeader: 0 }),
                        r['ɵqud'](671088640, 4, { deleteSwal: 0 }),
                        (l()(), r['ɵand'](16777216, null, null, 1, null, Gu)),
                        r['ɵdid'](5, 16384, null, 0, h.NgIf, [
                            r.ViewContainerRef,
                            r.TemplateRef
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
                        (l()(), r['ɵand'](0, [[
                            'blankLayout',
                            2
                        ]], null, 0, null, Bu)),
                        (l()(), r['ɵeld'](7, 0, null, null, 1, 'app-scripts-init', [], null, null, null, wu, yu)),
                        r['ɵdid'](8, 4308992, null, 0, bu, [
                            C.a,
                            r.ChangeDetectorRef
                        ], null, null),
                        (l()(), r['ɵeld'](9, 16777216, null, null, 6, 'nz-modal', [
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
                        }, Su.d, Su.c)),
                        r['ɵdid'](10, 704512, null, 2, Cu.c, [
                            r.ChangeDetectorRef,
                            Cu.k,
                            r.ViewContainerRef
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
                        r['ɵqud'](335544320, 5, { contentFromContentChild: 0 }),
                        r['ɵqud'](335544320, 6, { modalFooter: 0 }),
                        r['ɵpod'](13, { background: 0 }),
                        (l()(), r['ɵand'](0, [[
                            5,
                            2
                        ]], 0, 1, null, Nu)),
                        r['ɵdid'](15, 16384, null, 0, Cu.f, [r.TemplateRef], null, null)
                    ], function (l, n) {
                        var e = n.component;
                        l(n, 5, 0, 'blank' !== e.selfLayout, r['ɵnov'](n, 6)), l(n, 8, 0);
                        var t = e.isVisibleModal, u = l(n, 13, 0, 'fixed center url(\'../../../assets/media/svg/custom/basic-info/FONDO-27.svg\') no-repeat');
                        l(n, 10, 0, 'false', t, null, '50%', 'text-center', u);
                    }, null);
                }
                var ju = r['ɵccf']('app-layout', Iu, function (l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 16777216, null, null, 1, 'app-layout', [], null, [[
                            'window',
                            'mousemove'
                        ]], function (l, n, e) {
                            var t = !0;
                            return 'window:mousemove' === n && (t = !1 !== r['ɵnov'](l, 1).refreshUserState() && t), t;
                        }, Fu, Eu)),
                        r['ɵdid'](1, 4440064, null, 0, Iu, [
                            xu,
                            C.a,
                            bn.a,
                            R.o,
                            r.ChangeDetectorRef,
                            Cu.k,
                            r.ViewContainerRef
                        ], null, null)
                    ], function (l, n) {
                        l(n, 1, 0);
                    }, null);
                }, {}, {}, []), Ku = o('ypAQ'), zu = o('QfCi'), Uu = o('8WaK'), qu = o('JRKe'), Wu = o('w464'), Yu = o('Yjna'), Xu = o('jg2L'), $u = o('MqLK'), Zu = o('JYFw'), Ju = o('Y+i1'), Qu = o('Zaee');
                function li(l, n) {
                    1 & l && r['ɵɵelementContainer'](0);
                }
                var ni, ei, ti, ui = new r.InjectionToken('@sweetalert2/ngx-sweetalert2#swalProvider'), ii = new r.InjectionToken('@sweetalert2/ngx-sweetalert2#fireOnInit'), oi = new r.InjectionToken('@sweetalert2/ngx-sweetalert2#dismissOnDestroy'), ai = ((ti = function () {
                    function l(n) {
                        d(this, l), this.swalProvider = n;
                    }
                    return f(l, [
                        {
                            key: 'swal',
                            get: function () {
                                return this.swalPromiseCache || this.preloadSweetAlertLibrary(), this.swalPromiseCache;
                            }
                        },
                        {
                            key: 'preloadSweetAlertLibrary',
                            value: function () {
                                if (!this.swalPromiseCache) {
                                    var l, n = 'function' == typeof (l = this.swalProvider) && void 0 === l.version ? this.swalProvider() : Promise.resolve(this.swalProvider);
                                    this.swalPromiseCache = n.then(function (l) {
                                        return function (l) {
                                            return 'function' == typeof l;
                                        }(l) ? l : l.default;
                                    });
                                }
                            }
                        }
                    ]), l;
                }()).ɵfac = function (l) {
                    return new (l || ti)(r['ɵɵinject'](ui));
                }, ti.ɵprov = r['ɵɵdefineInjectable']({
                    token: ti,
                    factory: ti.ɵfac
                }), ti), ri = ((ei = function () {
                    function l(n, e, t) {
                        d(this, l), this.sweetAlert2Loader = n, this.moduleLevelFireOnInit = e, this.moduleLevelDismissOnDestroy = t, this.willOpen = new r.EventEmitter(), this.didOpen = new r.EventEmitter(), this.didRender = new r.EventEmitter(), this.willClose = new r.EventEmitter(), this.didClose = new r.EventEmitter(), this.didDestroy = new r.EventEmitter(), this.confirm = new r.EventEmitter(), this.deny = new r.EventEmitter(), this.dismiss = new r.EventEmitter(), this.touchedProps = new Set(), this.markTouched = this.touchedProps.add.bind(this.touchedProps), this.isCurrentlyShown = !1;
                    }
                    return f(l, [
                        {
                            key: 'swalOptions',
                            get: function () {
                                var l = this;
                                return e(this.touchedProps).reduce(function (e, t) {
                                    return Object.assign(Object.assign({}, e), n({}, t, l[t]));
                                }, {});
                            },
                            set: function (l) {
                                Object.assign(this, l), Object.keys(l).forEach(this.markTouched);
                            }
                        },
                        {
                            key: 'swalVisible',
                            get: function () {
                                return this.isCurrentlyShown;
                            },
                            set: function (l) {
                                l ? this.fire() : this.close();
                            }
                        },
                        {
                            key: 'ngOnInit',
                            value: function () {
                                this.sweetAlert2Loader.preloadSweetAlertLibrary();
                            }
                        },
                        {
                            key: 'ngAfterViewInit',
                            value: function () {
                                (void 0 === this.swalFireOnInit ? this.moduleLevelFireOnInit : this.swalFireOnInit) && this.fire();
                            }
                        },
                        {
                            key: 'ngOnChanges',
                            value: function (l) {
                                Object.keys(l).filter(function (l) {
                                    return !l.startsWith('swal');
                                }).forEach(this.markTouched), this.update();
                            }
                        },
                        {
                            key: 'ngOnDestroy',
                            value: function () {
                                (void 0 === this.swalDismissOnDestroy ? this.moduleLevelDismissOnDestroy : this.swalDismissOnDestroy) && this.close();
                            }
                        },
                        {
                            key: 'fire',
                            value: function () {
                                return Object(Hn.a)(this, void 0, void 0, regeneratorRuntime.mark(function l() {
                                    var n, e, t, u, i, o = this;
                                    return regeneratorRuntime.wrap(function (l) {
                                        for (; ;)
                                            switch (l.prev = l.next) {
                                                case 0:
                                                    return i = function (l, n) {
                                                        return function () {
                                                            return n.apply(void 0, arguments), null == l ? void 0 : l.apply(void 0, arguments);
                                                        };
                                                    }, l.next = 3, this.sweetAlert2Loader.swal;
                                                case 3:
                                                    return n = l.sent, e = this.swalOptions, t = Object.assign(Object.assign({}, e), {
                                                        willOpen: i(e.willOpen, function (l) {
                                                            o.willOpen.emit({ modalElement: l });
                                                        }),
                                                        didOpen: i(e.didOpen, function (l) {
                                                            o.isCurrentlyShown = !0, o.didOpen.emit({ modalElement: l });
                                                        }),
                                                        didRender: i(e.didRender, function (l) {
                                                            o.didRender.emit({ modalElement: l });
                                                        }),
                                                        willClose: i(e.willClose, function (l) {
                                                            o.isCurrentlyShown = !1, o.willClose.emit({ modalElement: l });
                                                        }),
                                                        didClose: i(e.didClose, function () {
                                                            o.didClose.emit();
                                                        }),
                                                        didDestroy: i(e.didDestroy, function () {
                                                            o.didDestroy.emit();
                                                        })
                                                    }), l.next = 8, n.fire(t);
                                                case 8:
                                                    u = l.sent, l.t0 = !0, l.next = l.t0 === u.isConfirmed ? 12 : l.t0 === u.isDenied ? 14 : l.t0 === u.isDismissed ? 16 : 17;
                                                    break;
                                                case 12:
                                                    return this.confirm.emit(u.value), l.abrupt('break', 17);
                                                case 14:
                                                    return this.deny.emit(), l.abrupt('break', 17);
                                                case 16:
                                                    this.dismiss.emit(u.dismiss);
                                                case 17:
                                                    return l.abrupt('return', u);
                                                case 18:
                                                case 'end':
                                                    return l.stop();
                                            }
                                    }, l, this);
                                }));
                            }
                        },
                        {
                            key: 'close',
                            value: function (l) {
                                return Object(Hn.a)(this, void 0, void 0, regeneratorRuntime.mark(function n() {
                                    return regeneratorRuntime.wrap(function (n) {
                                        for (; ;)
                                            switch (n.prev = n.next) {
                                                case 0:
                                                    if (n.t0 = this.isCurrentlyShown, !n.t0) {
                                                        n.next = 5;
                                                        break;
                                                    }
                                                    return n.next = 4, this.sweetAlert2Loader.swal;
                                                case 4:
                                                    n.sent.close(l);
                                                case 5:
                                                case 'end':
                                                    return n.stop();
                                            }
                                    }, n, this);
                                }));
                            }
                        },
                        {
                            key: 'update',
                            value: function (l) {
                                return Object(Hn.a)(this, void 0, void 0, regeneratorRuntime.mark(function e() {
                                    var t, u, i;
                                    return regeneratorRuntime.wrap(function (e) {
                                        for (; ;)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    if (l && (this.swalOptions = l), this.isCurrentlyShown) {
                                                        e.next = 2;
                                                        break;
                                                    }
                                                    return e.abrupt('return');
                                                case 2:
                                                    return e.next = 4, this.sweetAlert2Loader.swal;
                                                case 4:
                                                    t = e.sent, u = this.swalOptions, i = Object.keys(u).filter(t.isUpdatableParameter).reduce(function (l, e) {
                                                        return Object.assign(Object.assign({}, l), n({}, e, u[e]));
                                                    }, {}), t.update(i);
                                                case 8:
                                                case 'end':
                                                    return e.stop();
                                            }
                                    }, e, this);
                                }));
                            }
                        }
                    ]), l;
                }()).ɵfac = function (l) {
                    return new (l || ei)(r['ɵɵdirectiveInject'](ai), r['ɵɵdirectiveInject'](ii), r['ɵɵdirectiveInject'](oi));
                }, ei.ɵcmp = r['ɵɵdefineComponent']({
                    type: ei,
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
                    features: [r['ɵɵNgOnChangesFeature']],
                    decls: 0,
                    vars: 0,
                    template: function (l, n) {
                    },
                    encapsulation: 2,
                    changeDetection: 0
                }), ei), si = ((ni = function l() {
                    d(this, l), this.template = null;
                }).ɵfac = function (l) {
                    return new (l || ni)();
                }, ni.ɵcmp = r['ɵɵdefineComponent']({
                    type: ni,
                    selectors: [['swal-portal']],
                    inputs: { template: 'template' },
                    decls: 1,
                    vars: 1,
                    consts: [[
                        4,
                        'ngTemplateOutlet'
                    ]],
                    template: function (l, n) {
                        1 & l && r['ɵɵtemplate'](0, li, 1, 0, 'ng-container', 0), 2 & l && r['ɵɵproperty']('ngTemplateOutlet', n.template);
                    },
                    directives: [h.NgTemplateOutlet],
                    encapsulation: 2,
                    changeDetection: 0
                }), ni);
                function di() {
                    return Promise.resolve().then(o.t.bind(null, 'PSD3', 7));
                }
                var ci, fi = ((ci = function () {
                    function l() {
                        d(this, l);
                    }
                    return f(l, null, [
                        {
                            key: 'forRoot',
                            value: function () {
                                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                return {
                                    ngModule: l,
                                    providers: [
                                        ai,
                                        {
                                            provide: ui,
                                            useValue: n.provideSwal || di
                                        },
                                        {
                                            provide: ii,
                                            useValue: n.fireOnInit || !1
                                        },
                                        {
                                            provide: oi,
                                            useValue: n.dismissOnDestroy || !0
                                        }
                                    ]
                                };
                            }
                        },
                        {
                            key: 'forChild',
                            value: function () {
                                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                return {
                                    ngModule: l,
                                    providers: [].concat(e(n.provideSwal ? [
                                        ai,
                                        {
                                            provide: ui,
                                            useValue: n.provideSwal
                                        }
                                    ] : []), e(void 0 !== n.fireOnInit ? [{
                                        provide: ii,
                                        useValue: n.fireOnInit
                                    }] : []), e(void 0 !== n.dismissOnDestroy ? [{
                                        provide: oi,
                                        useValue: n.dismissOnDestroy
                                    }] : []))
                                };
                            }
                        }
                    ]), l;
                }()).ɵmod = r['ɵɵdefineNgModule']({ type: ci }), ci.ɵinj = r['ɵɵdefineInjector']({
                    factory: function (l) {
                        return new (l || ci)();
                    },
                    imports: [[h.CommonModule]]
                }), ci), pi = r['ɵcrt']({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });
                function hi(l) {
                    return r['ɵvid'](2, [], null, null);
                }
                var gi = r['ɵccf']('swal', ri, function (l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 1, 'swal', [], null, null, null, hi, pi)),
                        r['ɵdid'](1, 4964352, null, 0, ri, [
                            ai,
                            ii,
                            oi
                        ], null, null)
                    ], function (l, n) {
                        l(n, 1, 0);
                    }, null);
                }, {
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
                }, []), mi = r['ɵcrt']({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });
                function vi(l) {
                    return r['ɵvid'](0, [(l()(), r['ɵeld'](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
                }
                function bi(l) {
                    return r['ɵvid'](2, [
                        (l()(), r['ɵand'](16777216, null, null, 1, null, vi)),
                        r['ɵdid'](1, 540672, null, 0, h.NgTemplateOutlet, [r.ViewContainerRef], {
                            ngTemplateOutlet: [
                                0,
                                'ngTemplateOutlet'
                            ]
                        }, null)
                    ], function (l, n) {
                        l(n, 1, 0, n.component.template);
                    }, null);
                }
                var yi, wi, ki, Si, Ci, Ri = r['ɵccf']('swal-portal', si, function (l) {
                    return r['ɵvid'](0, [
                        (l()(), r['ɵeld'](0, 0, null, null, 1, 'swal-portal', [], null, null, null, bi, mi)),
                        r['ɵdid'](1, 49152, null, 0, si, [], null, null)
                    ], null, null);
                }, { template: 'template' }, {}, []), Di = o('1O3W'), Ii = o('9gLZ'), xi = o('9b/N'), Ei = o('0YeR'), Ai = o('ul+3'), Ti = o('CbJs'), Vi = o('hzfI'), _i = o('UhP/'), Li = o('34+v'), Oi = o('HKzv'), Pi = function l() {
                    d(this, l);
                }, Mi = function () {
                    function l(n) {
                        d(this, l), this.urlBase = nu.a.urlBase, this._httpClient = n;
                    }
                    return f(l, [
                        {
                            key: 'verifySignatureConfig',
                            value: function () {
                                return this._httpClient.get(this.urlBase + 'users/wizard/validateDS');
                            }
                        },
                        {
                            key: 'confirmPhoneNumber',
                            value: function (l) {
                                return this._httpClient.get(this.urlBase + 'user/mobil/confirm?code=' + l);
                            }
                        },
                        {
                            key: 'sendConfirmEmail',
                            value: function () {
                                return this._httpClient.get(this.urlBase + 'users/wizard/emailConfirm');
                            }
                        },
                        {
                            key: 'saveAvatarFile',
                            value: function (l) {
                                var n = this.urlBase + 'user/avatar', e = new FormData();
                                return e.append('avatar', l.file), this._httpClient.post(n, e);
                            }
                        },
                        {
                            key: 'verifyAppDowload',
                            value: function () {
                                return this._httpClient.get(this.urlBase + 'users/wizard/Dowloadapp');
                            }
                        }
                    ]), l;
                }(), Hi = o('7bNT'), Gi = o('YcMP'), Bi = o('tZxj'), Ni = o('eIep'), Fi = o('JIr8'), ji = o('zp1y'), Ki = (yi = function (n) {
                    i(t, n);
                    var e = a(t);
                    function t(n, u, i, o, a) {
                        var r;
                        return d(this, t), (r = e.call(this, a)).actions$ = n, r._authService = u, r._layoutService = i, r.store = o, r._notificationSrv = a, r.SendCode$ = r.actions$.pipe(Object(Hi.j)(Bi.a.SEND_CODE_MOBILE), Object(Ni.a)(function (l) {
                            return r._authService.getCode(l.request).pipe(Object(Ni.a)(function () {
                                return [];
                            }), Object(Fi.a)(function (l) {
                                return r.notifyError(l.message), [];
                            }));
                        }), Object(Fi.a)(function (l) {
                            return r.notifyError(l.message), [];
                        })), r.VerifyAppDonwload$ = r.actions$.pipe(Object(Hi.j)(Bi.a.VERIFY_APP_DONWLOAD), Object(ji.a)(r.store.select(function (l) {
                            return l.auth.user;
                        })), Object(Ni.a)(function (n) {
                            var e = l(n, 2), t = (e[0], e[1]);
                            return r._layoutService.verifyAppDowload().pipe(Object(Ni.a)(function (l) {
                                return null != l && '' != l ? [
                                    new Qt.a(eu.a.digitalSignature),
                                    new Qt.c(Object.assign(Object.assign({}, t), { mobil_device: l }))
                                ] : [];
                            }));
                        })), r.VerifydigitalSignature$ = r.actions$.pipe(Object(Hi.j)(Bi.a.VERIFY_DIGITAL_SIGNATURE), Object(ji.a)(r.store.select(function (l) {
                            return l.auth.user;
                        })), Object(Ni.a)(function (n) {
                            var e = l(n, 2), t = (e[0], e[1]);
                            return r._layoutService.verifySignatureConfig().pipe(Object(Ni.a)(function () {
                                return [
                                    new Qt.a(eu.a.avatar),
                                    new Qt.c(Object.assign(Object.assign({}, t), { digital_signature_save: new Date() }))
                                ];
                            }), Object(Fi.a)(function (l) {
                                return r.notifyError(l.error[0]), [];
                            }));
                        }), Object(Fi.a)(function (l) {
                            return r.notifyError(l.message), [];
                        })), r.verifyConfirmEmail$ = r.actions$.pipe(Object(Hi.j)(Bi.a.VERIFY_CONFIRM_EMAIL), Object(ji.a)(r.store.select(function (l) {
                            return l.auth.user;
                        })), Object(Ni.a)(function (n) {
                            var e = l(n, 2), t = (e[0], e[1]);
                            return r._layoutService.sendConfirmEmail().pipe(Object(Ni.a)(function (l) {
                                return l ? [
                                    new Qt.a(eu.a.phone),
                                    new Qt.c(Object.assign(Object.assign({}, t), { email_verified_at: l }))
                                ] : [];
                            }));
                        })), r.SaveAvatarFile$ = r.actions$.pipe(Object(Hi.j)(Bi.a.SAVE_AVATAR_FILE), Object(ji.a)(r.store.select(function (l) {
                            return l.auth.user;
                        })), Object(Ni.a)(function (n) {
                            var e = l(n, 2), t = e[0], u = e[1];
                            return r._layoutService.saveAvatarFile(t.avatar).pipe(Object(Ni.a)(function () {
                                return [
                                    new Qt.a(eu.a.email),
                                    new Qt.b(!1),
                                    new Qt.c(Object.assign(Object.assign({}, u), { avatar: t.urlBase64 }))
                                ];
                            }), Object(Fi.a)(function (l) {
                                return r.notifyError(l.message), [new Qt.b(!1)];
                            }));
                        }), Object(Fi.a)(function (l) {
                            return r.notifyError(l.message), [new Qt.b(!1)];
                        })), r.ConfirmPhone$ = r.actions$.pipe(Object(Hi.j)(Bi.a.CONFIRM_FORM_NUMBER), Object(ji.a)(r.store.select(function (l) {
                            return l.auth.user;
                        })), Object(Ni.a)(function (n) {
                            var e = l(n, 2), t = e[0], u = e[1];
                            return r._layoutService.confirmPhoneNumber(t.code).pipe(Object(Ni.a)(function () {
                                return [
                                    new Qt.a(eu.a.eFirma),
                                    new Qt.c(Object.assign(Object.assign({}, u), { mobile_verified_at: new Date() }))
                                ];
                            }), Object(Fi.a)(function (l) {
                                return r.notifyError(l.error[0]), [];
                            }));
                        }), Object(Fi.a)(function (l) {
                            return r.notifyError(l.message), [];
                        })), r;
                    }
                    return t;
                }(Gi.a), Object(Hn.b)([Object(Hi.c)()], yi.prototype, 'SendCode$', void 0), Object(Hn.b)([Object(Hi.c)()], yi.prototype, 'VerifyAppDonwload$', void 0), Object(Hn.b)([Object(Hi.c)()], yi.prototype, 'VerifydigitalSignature$', void 0), Object(Hn.b)([Object(Hi.c)()], yi.prototype, 'verifyConfirmEmail$', void 0), Object(Hn.b)([Object(Hi.c)()], yi.prototype, 'SaveAvatarFile$', void 0), Object(Hn.b)([Object(Hi.c)()], yi.prototype, 'ConfirmPhone$', void 0), yi), zi = o('lJxs'), Ui = ((wi = function () {
                    function l(n, e) {
                        d(this, l), this.store = n, this.router = e;
                    }
                    return f(l, [{
                        key: 'canActivate',
                        value: function (l, n) {
                            var e = this;
                            return this.store.pipe(Object(R.C)(De.c), Object(zi.a)(function (l) {
                                return 0 != l.length || (e.router.navigateByUrl('/packages'), !1);
                            }));
                        }
                    }]), l;
                }()).ɵprov = r['ɵɵdefineInjectable']({
                    factory: function () {
                        return new wi(r['ɵɵinject'](R.o), r['ɵɵinject'](y.r));
                    },
                    token: wi,
                    providedIn: 'root'
                }), wi), qi = o('PVIp'), Wi = ((Ci = function () {
                    function l(n, e) {
                        d(this, l), this.store = n, this.router = e;
                    }
                    return f(l, [{
                        key: 'canActivate',
                        value: function (l, n) {
                            var e = this;
                            return this.store.pipe(Object(R.C)(k.e), Object(zi.a)(function (l) {
                                return !!l || (e.router.navigateByUrl('/packages'), !1);
                            }));
                        }
                    }]), l;
                }()).ɵprov = r['ɵɵdefineInjectable']({
                    factory: function () {
                        return new Ci(r['ɵɵinject'](R.o), r['ɵɵinject'](y.r));
                    },
                    token: Ci,
                    providedIn: 'root'
                }), Ci), Yi = ((Si = function () {
                    function l(n, e) {
                        d(this, l), this.store = n, this.router = e;
                    }
                    return f(l, [{
                        key: 'canActivate',
                        value: function (l, n) {
                            var e = this;
                            return this.store.pipe(Object(R.C)(k.h), Object(zi.a)(function (l) {
                                return !!l || (e.router.navigateByUrl('/packages'), !1);
                            }));
                        }
                    }]), l;
                }()).ɵprov = r['ɵɵdefineInjectable']({
                    factory: function () {
                        return new Si(r['ɵɵinject'](R.o), r['ɵɵinject'](y.r));
                    },
                    token: Si,
                    providedIn: 'root'
                }), Si), Xi = ((ki = function () {
                    function l(n, e) {
                        d(this, l), this.store = n, this.router = e;
                    }
                    return f(l, [{
                        key: 'canActivate',
                        value: function (l, n) {
                            var e = this;
                            return this.store.pipe(Object(R.C)(k.f), Object(zi.a)(function (l) {
                                return !!l || (e.router.navigateByUrl('/packages'), !1);
                            }));
                        }
                    }]), l;
                }()).ɵprov = r['ɵɵdefineInjectable']({
                    factory: function () {
                        return new ki(r['ɵɵinject'](R.o), r['ɵɵinject'](y.r));
                    },
                    token: ki,
                    providedIn: 'root'
                }), ki), $i = function () {
                    return Promise.all([
                        o.e(0),
                        o.e(1),
                        o.e(39)
                    ]).then(o.bind(null, 'BrWb')).then(function (l) {
                        return l.ChartDashboardModuleNgFactory;
                    });
                }, Zi = function () {
                    return Promise.all([
                        o.e(0),
                        o.e(1),
                        o.e(40)
                    ]).then(o.bind(null, 'mhqm')).then(function (l) {
                        return l.DashboardModuleNgFactory;
                    });
                }, Ji = function () {
                    return Promise.all([
                        o.e(0),
                        o.e(2),
                        o.e(3),
                        o.e(6),
                        o.e(19),
                        o.e(1),
                        o.e(31)
                    ]).then(o.bind(null, 've5D')).then(function (l) {
                        return l.SalesModuleNgFactory;
                    });
                }, Qi = function () {
                    return Promise.all([
                        o.e(0),
                        o.e(2),
                        o.e(3),
                        o.e(6),
                        o.e(19),
                        o.e(1),
                        o.e(35)
                    ]).then(o.bind(null, 'Y52y')).then(function (l) {
                        return l.CustomersModuleNgFactory;
                    });
                }, lo = function () {
                    return Promise.all([
                        o.e(3),
                        o.e(1),
                        o.e(26)
                    ]).then(o.bind(null, 'E/Jp')).then(function (l) {
                        return l.SellerModuleNgFactory;
                    });
                }, no = function () {
                    return Promise.all([
                        o.e(0),
                        o.e(2),
                        o.e(3),
                        o.e(4),
                        o.e(6),
                        o.e(5),
                        o.e(9),
                        o.e(16)
                    ]).then(o.bind(null, 'K6+c')).then(function (l) {
                        return l.SignModuleNgFactory;
                    });
                }, eo = function () {
                    return Promise.all([
                        o.e(0),
                        o.e(3),
                        o.e(6),
                        o.e(9),
                        o.e(17)
                    ]).then(o.bind(null, 'F1zo')).then(function (l) {
                        return l.ContractModuleNgFactory;
                    });
                }, to = function () {
                    return Promise.all([
                        o.e(1),
                        o.e(36)
                    ]).then(o.bind(null, 'YyCp')).then(function (l) {
                        return l.PackagesModuleNgFactory;
                    });
                }, uo = function () {
                    return Promise.all([
                        o.e(0),
                        o.e(2),
                        o.e(3),
                        o.e(4),
                        o.e(5),
                        o.e(14)
                    ]).then(o.bind(null, 'seWe')).then(function (l) {
                        return l.NotificationsModuleNgFactory;
                    });
                }, io = function () {
                    return Promise.all([
                        o.e(0),
                        o.e(2),
                        o.e(4),
                        o.e(5),
                        o.e(11),
                        o.e(15),
                        o.e(37)
                    ]).then(o.bind(null, 'v3SN')).then(function (l) {
                        return l.SignContractModuleNgFactory;
                    });
                }, oo = function () {
                    return Promise.all([
                        o.e(0),
                        o.e(2),
                        o.e(4),
                        o.e(11),
                        o.e(38)
                    ]).then(o.bind(null, '0eoa')).then(function (l) {
                        return l.SincronizationModuleNgFactory;
                    });
                }, ao = function () {
                    return Promise.all([
                        o.e(0),
                        o.e(34)
                    ]).then(o.bind(null, '9U7I')).then(function (l) {
                        return l.CheckoutModuleNgFactory;
                    });
                }, ro = function () {
                    return Promise.all([
                        o.e(0),
                        o.e(2),
                        o.e(3),
                        o.e(4),
                        o.e(1),
                        o.e(29)
                    ]).then(o.bind(null, 'cfIE')).then(function (l) {
                        return l.SettingsModuleNgFactory;
                    });
                }, so = function () {
                    return o.e(18).then(o.bind(null, 'sJtH')).then(function (l) {
                        return l.HelpModuleNgFactory;
                    });
                }, co = function l() {
                    d(this, l);
                }, fo = o('tM0M'), po = o('F3IN'), ho = o('zfYk'), go = o('1z/I'), mo = o('7KAL'), vo = o('PgQK'), bo = o('jQCg'), yo = o('W0Pu'), wo = o('wf2+'), ko = o('0CZq'), So = o('Rgb0'), Co = o('Jp/u'), Ro = o('GaVp'), Do = o('YRt3'), Io = o('lAiz'), xo = o('YEUz'), Eo = o('CYS+'), Ao = o('px0D'), To = o('YdS3'), Vo = o('mW00'), _o = o('jTf7'), Lo = o('S/WK'), Oo = o('oBm0'), Po = o('RVNi'), Mo = o('gaRz'), Ho = o('vZsH'), Go = o('fb/r'), Bo = o('z+yo'), No = o('JXeA'), Fo = o('51fn'), jo = o('pKmL'), Ko = { suppressScrollX: !0 }, zo = function l() {
                    d(this, l);
                }, Uo = function l() {
                    d(this, l);
                }, qo = o('xGJD'), Wo = {
                    modal: { isVisible: !1 },
                    forms: { avatar: { isLoading: !1 } },
                    wizard: { currentStep: eu.a.donwloadApp }
                };
                function Yo() {
                    var l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wo, n = arguments.length > 1 ? arguments[1] : void 0;
                    switch (n.type) {
                        case Bi.a.SET_VISIBILITY_MODAL:
                            return Object.assign(Object.assign({}, l), { modal: Object.assign(Object.assign({}, l.modal), { isVisible: n.value }) });
                        case Bi.a.SET_CURRENT_STEP:
                            return Object.assign(Object.assign({}, l), { wizard: Object.assign(Object.assign({}, l.wizard), { currentStep: n.currentStep }) });
                        case Bi.a.SAVE_AVATAR_FILE:
                            return Object.assign(Object.assign({}, l), { forms: Object.assign(Object.assign({}, l.forms), { avatar: Object.assign(Object.assign({}, l.forms.avatar), { isLoading: !0 }) }) });
                        case Bi.a.SET_LOADING_FORM_AVATAR:
                            return Object.assign(Object.assign({}, l), { forms: Object.assign(Object.assign({}, l.forms), { avatar: Object.assign(Object.assign({}, l.forms.avatar), { isLoading: n.value }) }) });
                        default:
                            return l;
                    }
                }
                var Xo = o('cMCp'), $o = o('Dxy4'), Zo = o('q59W'), Jo = o('Tj54'), Qo = o('305l'), la = o('NRzN'), na = o('g297'), ea = o('I6wT'), ta = o('X+QX'), ua = o('vElD'), ia = o('b3X1'), oa = o('6h/S'), aa = r['ɵcmf'](s, [], function (l) {
                    return r['ɵmod']([
                        r['ɵmpd'](512, r.ComponentFactoryResolver, r['ɵCodegenComponentFactoryResolver'], [
                            [
                                8,
                                [
                                    c.a,
                                    ju,
                                    Ku.a,
                                    Mn.h,
                                    Mn.i,
                                    zu.a,
                                    Uu.a,
                                    Su.b,
                                    Su.a,
                                    qu.a,
                                    Mn.b,
                                    Mt,
                                    Kt,
                                    Wu.a,
                                    Yu.a,
                                    Xu.a,
                                    $u.a,
                                    Zu.a,
                                    Ju.a,
                                    Qu.a,
                                    gi,
                                    Ri
                                ]
                            ],
                            [
                                3,
                                r.ComponentFactoryResolver
                            ],
                            r.NgModuleRef
                        ]),
                        r['ɵmpd'](4608, h.NgLocalization, h.NgLocaleLocalization, [r.LOCALE_ID]),
                        r['ɵmpd'](4608, V.E, V.E, [
                            r.ComponentFactoryResolver,
                            r.Injector,
                            V.vb,
                            V.F
                        ]),
                        r['ɵmpd'](4608, Di.d, Di.d, [
                            Di.l,
                            Di.f,
                            r.ComponentFactoryResolver,
                            Di.j,
                            Di.g,
                            r.Injector,
                            r.NgZone,
                            h.DOCUMENT,
                            Ii.b,
                            h.Location,
                            Di.i
                        ]),
                        r['ɵmpd'](5120, Di.m, Di.n, [Di.d]),
                        r['ɵmpd'](4608, _.z, _.z, []),
                        r['ɵmpd'](4608, xi.c, xi.c, []),
                        r['ɵmpd'](135680, Cu.k, Cu.k, [
                            Di.d,
                            r.Injector,
                            Ei.a,
                            [
                                3,
                                Cu.k
                            ]
                        ]),
                        r['ɵmpd'](4608, _.f, _.f, []),
                        r['ɵmpd'](4608, m.HttpXsrfTokenExtractor, m['ɵangular_packages_common_http_http_g'], [
                            h.DOCUMENT,
                            r.PLATFORM_ID,
                            m['ɵangular_packages_common_http_http_e']
                        ]),
                        r['ɵmpd'](4608, m['ɵangular_packages_common_http_http_h'], m['ɵangular_packages_common_http_http_h'], [
                            m.HttpXsrfTokenExtractor,
                            m['ɵangular_packages_common_http_http_f']
                        ]),
                        r['ɵmpd'](4608, m['ɵangular_packages_common_http_http_d'], m['ɵangular_packages_common_http_http_d'], []),
                        r['ɵmpd'](6144, m.XhrFactory, null, [m['ɵangular_packages_common_http_http_d']]),
                        r['ɵmpd'](4608, m.HttpXhrBackend, m.HttpXhrBackend, [m.XhrFactory]),
                        r['ɵmpd'](6144, m.HttpBackend, null, [m.HttpXhrBackend]),
                        r['ɵmpd'](4608, m.HttpHandler, m['ɵHttpInterceptingHandler'], [
                            m.HttpBackend,
                            r.Injector
                        ]),
                        r['ɵmpd'](4608, m.HttpClient, m.HttpClient, [m.HttpHandler]),
                        r['ɵmpd'](4608, tt.a, Ai.a, [m.HttpClient]),
                        r['ɵmpd'](5120, m.HTTP_INTERCEPTORS, function (l, n, e) {
                            return [
                                l,
                                new Ti.a(n, e)
                            ];
                        }, [
                            m['ɵangular_packages_common_http_http_h'],
                            tt.a,
                            R.o
                        ]),
                        r['ɵmpd'](5120, Vi.b, Vi.a, [[
                            3,
                            Vi.b
                        ]]),
                        r['ɵmpd'](4608, _i.b, _i.b, []),
                        r['ɵmpd'](4608, Li.a, Oi.a, [m.HttpClient]),
                        r['ɵmpd'](5120, Lt.h, Lt.g, [Lt.f]),
                        r['ɵmpd'](4608, Lt.e, Lt.e, [Lt.h]),
                        r['ɵmpd'](4608, Pi, Mi, [m.HttpClient]),
                        r['ɵmpd'](4608, Ki, Ki, [
                            Hi.a,
                            tt.a,
                            Pi,
                            R.o,
                            bn.a
                        ]),
                        r['ɵmpd'](4608, ai, ai, [ui]),
                        r['ɵmpd'](1073742336, h.CommonModule, h.CommonModule, []),
                        r['ɵmpd'](1073742336, y.v, y.v, [
                            [
                                2,
                                y.B
                            ],
                            [
                                2,
                                y.r
                            ]
                        ]),
                        r['ɵmpd'](1073742336, co, co, []),
                        r['ɵmpd'](1073742336, w.i, w.i, []),
                        r['ɵmpd'](1073742336, fo.a, fo.a, []),
                        r['ɵmpd'](1073742336, po.InlineSVGModule, po.InlineSVGModule, []),
                        r['ɵmpd'](1073742336, Re, Re, []),
                        r['ɵmpd'](1073742336, ho.a, ho.a, []),
                        r['ɵmpd'](1073742336, V.G, V.G, []),
                        r['ɵmpd'](1073742336, Yt.a, Yt.a, []),
                        r['ɵmpd'](1073742336, Xt.b, Xt.b, []),
                        r['ɵmpd'](1073742336, Wt.b, Wt.b, []),
                        r['ɵmpd'](1073742336, zt.b, zt.b, []),
                        r['ɵmpd'](1073742336, Ii.a, Ii.a, []),
                        r['ɵmpd'](1073742336, go.e, go.e, []),
                        r['ɵmpd'](1073742336, mo.c, mo.c, []),
                        r['ɵmpd'](1073742336, mo.g, mo.g, []),
                        r['ɵmpd'](1073742336, Di.h, Di.h, []),
                        r['ɵmpd'](1073742336, vo.a, vo.a, []),
                        r['ɵmpd'](1073742336, bo.c, bo.c, []),
                        r['ɵmpd'](1073742336, yo.b, yo.b, []),
                        r['ɵmpd'](1073742336, Ut.b, Ut.b, []),
                        r['ɵmpd'](1073742336, wo.e, wo.e, []),
                        r['ɵmpd'](1073742336, ko.d, ko.d, []),
                        r['ɵmpd'](1073742336, ko.c, ko.c, []),
                        r['ɵmpd'](1073742336, _.y, _.y, []),
                        r['ɵmpd'](1073742336, _.l, _.l, []),
                        r['ɵmpd'](1073742336, So.c, So.c, []),
                        r['ɵmpd'](1073742336, Co.c, Co.c, []),
                        r['ɵmpd'](1073742336, qt.b, qt.b, []),
                        r['ɵmpd'](1073742336, Ro.c, Ro.c, []),
                        r['ɵmpd'](1073742336, Do.a, Do.a, []),
                        r['ɵmpd'](1073742336, Io.a, Io.a, []),
                        r['ɵmpd'](1073742336, Io.b, Io.b, []),
                        r['ɵmpd'](1073742336, xi.d, xi.d, []),
                        r['ɵmpd'](1073742336, xo.a, xo.a, [xo.f]),
                        r['ɵmpd'](1073742336, Eo.c, Eo.c, []),
                        r['ɵmpd'](1073742336, Ao.d, Ao.d, []),
                        r['ɵmpd'](1073742336, To.a, To.a, []),
                        r['ɵmpd'](1073742336, Vo.d, Vo.d, []),
                        r['ɵmpd'](1073742336, _o.j, _o.j, []),
                        r['ɵmpd'](1073742336, Lo.a, Lo.a, []),
                        r['ɵmpd'](1073742336, Cu.i, Cu.i, []),
                        r['ɵmpd'](1073742336, Oo.a, Oo.a, []),
                        r['ɵmpd'](1073742336, Po.b, Po.b, []),
                        r['ɵmpd'](1073742336, Mo.d, Mo.d, []),
                        r['ɵmpd'](1073742336, Ho.d, Ho.d, []),
                        r['ɵmpd'](1073742336, Go.b, Go.b, []),
                        r['ɵmpd'](1073742336, _.v, _.v, []),
                        r['ɵmpd'](1073742336, Bo.a, Bo.a, []),
                        r['ɵmpd'](1073742336, No.h, No.h, []),
                        r['ɵmpd'](1073742336, No.f, No.f, []),
                        r['ɵmpd'](1073742336, Fo.a, Fo.a, []),
                        r['ɵmpd'](1073742336, jo.a, jo.a, []),
                        r['ɵmpd'](1073742336, zo, zo, []),
                        r['ɵmpd'](1073742336, V.z, V.z, []),
                        r['ɵmpd'](1073742336, V.V, V.V, []),
                        r['ɵmpd'](1073742336, V.t, V.t, []),
                        r['ɵmpd'](1073742336, Uo, Uo, []),
                        r['ɵmpd'](1073742336, Lt.d, Lt.d, []),
                        r['ɵmpd'](1024, R.P, function () {
                            return [
                                {},
                                {}
                            ];
                        }, []),
                        r['ɵmpd'](1024, R.k, function () {
                            return [
                                {
                                    key: 'auth',
                                    reducerFactory: R.u,
                                    metaReducers: [],
                                    initialState: void 0
                                },
                                {
                                    key: 'layoutModule',
                                    reducerFactory: R.u,
                                    metaReducers: [],
                                    initialState: void 0
                                }
                            ];
                        }, []),
                        r['ɵmpd'](1024, R.Q, R.X, [
                            r.Injector,
                            R.P,
                            R.k
                        ]),
                        r['ɵmpd'](1024, R.O, function () {
                            return [
                                qo.a,
                                { basicInfo: Yo }
                            ];
                        }, []),
                        r['ɵmpd'](1024, R.R, function (l, n) {
                            return [
                                l,
                                n
                            ];
                        }, [
                            R.O,
                            R.O
                        ]),
                        r['ɵmpd'](1024, R.b, function (l, n, e, t, u, i) {
                            return [
                                R.Y(l, n, e),
                                R.Y(t, u, i)
                            ];
                        }, [
                            r.Injector,
                            R.O,
                            R.R,
                            r.Injector,
                            R.O,
                            R.R
                        ]),
                        r['ɵmpd'](1024, R.V, function (l, n) {
                            return [
                                R.I(l),
                                R.I(n)
                            ];
                        }, [
                            R.U,
                            R.U
                        ]),
                        r['ɵmpd'](1073873408, R.p, R.p, [
                            R.Q,
                            R.b,
                            R.h,
                            R.q,
                            [
                                2,
                                R.V
                            ]
                        ]),
                        r['ɵmpd'](1024, Hi.p, function () {
                            return [
                                [],
                                [Ki]
                            ];
                        }, []),
                        r['ɵmpd'](1024, Hi.h, function () {
                            return [
                                [],
                                []
                            ];
                        }, []),
                        r['ɵmpd'](1024, Hi.q, function (l, n, e, t, u, i) {
                            return [
                                Hi.k(l, n, e),
                                Hi.k(t, u, i)
                            ];
                        }, [
                            r.Injector,
                            Hi.p,
                            Hi.h,
                            r.Injector,
                            Hi.p,
                            Hi.h
                        ]),
                        r['ɵmpd'](1073742336, Hi.e, Hi.e, [
                            Hi.f,
                            Hi.q,
                            [
                                2,
                                R.q
                            ],
                            [
                                2,
                                R.p
                            ]
                        ]),
                        r['ɵmpd'](1073742336, Xo.a, Xo.a, []),
                        r['ɵmpd'](1073742336, m.HttpClientXsrfModule, m.HttpClientXsrfModule, []),
                        r['ɵmpd'](1073742336, m.HttpClientModule, m.HttpClientModule, []),
                        r['ɵmpd'](1073742336, _i.k, _i.k, [
                            xo.f,
                            [
                                2,
                                _i.c
                            ],
                            [
                                2,
                                h.DOCUMENT
                            ]
                        ]),
                        r['ɵmpd'](1073742336, _i.u, _i.u, []),
                        r['ɵmpd'](1073742336, $o.a, $o.a, []),
                        r['ɵmpd'](1073742336, Zo.e, Zo.e, []),
                        r['ɵmpd'](1073742336, Jo.b, Jo.b, []),
                        r['ɵmpd'](1073742336, Vi.c, Vi.c, []),
                        r['ɵmpd'](1073742336, Qo.a, Qo.a, []),
                        r['ɵmpd'](1073742336, fi, fi, []),
                        r['ɵmpd'](1073742336, s, s, []),
                        r['ɵmpd'](1024, y.m, function () {
                            return [
                                [{
                                    path: '',
                                    component: Iu,
                                    children: [
                                        {
                                            path: 'dashboard-chart',
                                            loadChildren: $i,
                                            canActivate: [Wi]
                                        },
                                        {
                                            path: 'dashboard',
                                            loadChildren: Zi
                                        },
                                        {
                                            path: 'sales',
                                            loadChildren: Ji,
                                            canActivate: [Yi]
                                        },
                                        {
                                            path: 'customers',
                                            loadChildren: Qi,
                                            canActivate: [Yi]
                                        },
                                        {
                                            path: 'seller',
                                            loadChildren: lo,
                                            canActivate: [Xi]
                                        },
                                        {
                                            path: 'document',
                                            loadChildren: no
                                        },
                                        {
                                            path: 'contract',
                                            loadChildren: eo,
                                            canActivate: [qi.a]
                                        },
                                        {
                                            path: 'packages',
                                            loadChildren: to
                                        },
                                        {
                                            path: 'notifications',
                                            loadChildren: uo
                                        },
                                        {
                                            path: 'sign-contract',
                                            loadChildren: io
                                        },
                                        {
                                            path: 'sincronization',
                                            loadChildren: oo
                                        },
                                        {
                                            path: 'check-out',
                                            loadChildren: ao,
                                            canActivate: [Ui]
                                        },
                                        {
                                            path: 'settings',
                                            loadChildren: ro
                                        },
                                        {
                                            path: 'support-center',
                                            loadChildren: so
                                        },
                                        {
                                            path: '',
                                            redirectTo: 'packages',
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
                                    component: la.a,
                                    children: [
                                        {
                                            path: '',
                                            redirectTo: 'login',
                                            pathMatch: 'full'
                                        },
                                        {
                                            path: 'login',
                                            component: na.a,
                                            data: Xo.b
                                        },
                                        {
                                            path: 'registration',
                                            component: ea.a
                                        },
                                        {
                                            path: 'forgot-password',
                                            component: ta.a
                                        },
                                        {
                                            path: 'logout',
                                            component: ua.a
                                        },
                                        {
                                            path: 'change-password/:code',
                                            component: ia.a
                                        },
                                        {
                                            path: 'confirmation/:code',
                                            component: oa.a
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
                        r['ɵmpd'](256, be, Ko, []),
                        r['ɵmpd'](256, m['ɵangular_packages_common_http_http_e'], 'XSRF-TOKEN', []),
                        r['ɵmpd'](256, m['ɵangular_packages_common_http_http_f'], 'X-XSRF-TOKEN', []),
                        r['ɵmpd'](256, Lt.f, {}, []),
                        r['ɵmpd'](256, ui, di, []),
                        r['ɵmpd'](256, ii, !1, []),
                        r['ɵmpd'](256, oi, !0, [])
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
                var t = e('tqRt'), u = function (l) {
                    return l.checkout.cart;
                }, i = function (l) {
                    return l.checkout.cartUI;
                }, o = Object(t.z)(u, function (l) {
                    return l.packages;
                });
            },
            YcMP: function (l, n, e) {
                'use strict';
                e.d(n, 'a', function () {
                    return t;
                });
                var t = function () {
                    function l(n) {
                        d(this, l), this._notification = n;
                    }
                    return f(l, [{
                        key: 'notifyError',
                        value: function (l) {
                            this._notification.error([l]);
                        }
                    }]), l;
                }();
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
                        var o, a = function l(n) {
                            return Object.keys(l).reduce(function (e, t) {
                                return 'create' === t || 'function' == typeof l[t] && (e[t] = l[t].bind(l, n)), e;
                            }, {});
                        };
                        function r(l, n) {
                            if (o(l, n))
                                return l[n];
                        }
                        function s(n, e, t, u) {
                            if ('number' == typeof e && (e = [e]), !e || 0 === e.length)
                                return n;
                            if ('string' == typeof e)
                                return s(n, e.split('.').map(i), t, u);
                            var o = e[0], a = r(n, o);
                            if (l.includeInheritedProps && ('__proto__' === o || 'constructor' === o && 'function' == typeof a))
                                throw new Error('For security reasons, object\'s magic properties cannot be set');
                            return 1 === e.length ? (void 0 !== a && u || (n[o] = t), a) : (void 0 === a && (n[o] = 'number' == typeof e[1] ? [] : {}), s(n[o], e.slice(1), t, u));
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
                            return s(l, n, e, !0);
                        }, a.set = function (l, n, e, t) {
                            return s(l, n, e, t);
                        }, a.insert = function (l, n, e, t) {
                            var i = a.get(l, n);
                            t = ~~t, u(i) || a.set(l, n, i = []), i.splice(t, 0, e);
                        }, a.empty = function (l, n) {
                            var i, r;
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
                                    for (r in i)
                                        o(i, r) && delete i[r];
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
                            var t = i(n[0]), u = r(l, t);
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
                            }, r = {
                                construct: function (l) {
                                    return t.a.data(i).has('menu') ? e = t.a.data(i).get('menu') : (r.init(l), r.reset(), r.build(), t.a.data(i).set('menu', e)), e;
                                },
                                init: function (l) {
                                    e.events = [], e.eventHandlers = {}, e.options = t.a.deepExtend({}, a, l), e.pauseDropdownHoverTime = 0, e.uid = t.a.getUniqueID();
                                },
                                update: function (l) {
                                    e.options = t.a.deepExtend({}, a, l), e.pauseDropdownHoverTime = 0, r.reset(), e.eventHandlers = {}, r.build(), t.a.data(i).set('menu', e);
                                },
                                reload: function () {
                                    r.reset(), r.build(), r.resetSubmenuProps();
                                },
                                build: function () {
                                    e.eventHandlers.event_1 = t.a.on(i, '.menu-toggle', 'click', r.handleSubmenuAccordion), ('dropdown' === r.getSubmenuMode() || r.isConditionalSubmenuDropdown()) && (e.eventHandlers.event_2 = t.a.on(i, '[data-menu-toggle="hover"]', 'mouseover', r.handleSubmenuDrodownHoverEnter), e.eventHandlers.event_3 = t.a.on(i, '[data-menu-toggle="hover"]', 'mouseout', r.handleSubmenuDrodownHoverExit), e.eventHandlers.event_4 = t.a.on(i, '[data-menu-toggle="click"] > .menu-toggle, [data-menu-toggle="click"] > .menu-link .menu-toggle', 'click', r.handleSubmenuDropdownClick), e.eventHandlers.event_5 = t.a.on(i, '[data-menu-toggle="tab"] > .menu-toggle, [data-menu-toggle="tab"] > .menu-link .menu-toggle', 'click', r.handleSubmenuDropdownTabClick)), e.eventHandlers.event_6 = t.a.on(i, '.menu-item > .menu-link:not(.menu-toggle):not(.menu-link-toggle-skip)', 'click', r.handleLinkClick), e.options.scroll && e.options.scroll.height && r.scrollInit();
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
                                    'accordion' !== r.getSubmenuMode(this) && !1 !== e.resumeDropdownHover() && ('1' == this.getAttribute('data-hover') && (this.removeAttribute('data-hover'), clearTimeout(this.getAttribute('data-timeout')), this.removeAttribute('data-timeout')), r.showSubmenuDropdown(this));
                                },
                                handleSubmenuDrodownHoverExit: function (l) {
                                    if (!1 !== e.resumeDropdownHover() && 'accordion' !== r.getSubmenuMode(this)) {
                                        var n = this, t = setTimeout(function () {
                                            '1' == n.getAttribute('data-hover') && r.hideSubmenuDropdown(n, !0);
                                        }, e.options.dropdown.timeout);
                                        n.setAttribute('data-hover', '1'), n.setAttribute('data-timeout', t);
                                    }
                                },
                                handleSubmenuDropdownClick: function (l) {
                                    if ('accordion' !== r.getSubmenuMode(this)) {
                                        var n = this.closest('.menu-item');
                                        !1 !== r.eventTrigger('submenuToggle', this, l) && 'accordion' != n.getAttribute('data-menu-submenu-mode') && (!1 === t.a.hasClass(n, 'menu-item-hover') ? (t.a.addClass(n, 'menu-item-open-dropdown'), r.showSubmenuDropdown(n)) : (t.a.removeClass(n, 'menu-item-open-dropdown'), r.hideSubmenuDropdown(n, !0)), l.preventDefault());
                                    }
                                },
                                handleSubmenuDropdownTabClick: function (l) {
                                    if ('accordion' !== r.getSubmenuMode(this)) {
                                        var n = this.closest('.menu-item');
                                        !1 !== r.eventTrigger('submenuToggle', this, l) && 'accordion' != n.getAttribute('data-menu-submenu-mode') && (0 == t.a.hasClass(n, 'menu-item-hover') && (t.a.addClass(n, 'menu-item-open-dropdown'), r.showSubmenuDropdown(n)), l.preventDefault());
                                    }
                                },
                                handleLinkClick: function (l) {
                                    var n = this.closest('.menu-item.menu-item-submenu');
                                    !1 !== r.eventTrigger('linkClick', this, l) && n && 'dropdown' === r.getSubmenuMode(n) && r.hideSubmenuDropdowns();
                                },
                                handleSubmenuDropdownClose: function (l, n) {
                                    if ('accordion' !== r.getSubmenuMode(n)) {
                                        var e = i.querySelectorAll('.menu-item.menu-item-submenu.menu-item-hover:not(.menu-item-tabs)');
                                        if (e.length > 0 && !1 === t.a.hasClass(n, 'menu-toggle') && 0 === n.querySelectorAll('.menu-toggle').length)
                                            for (var u = 0, o = e.length; u < o; u++)
                                                r.hideSubmenuDropdown(e[0], !0);
                                    }
                                },
                                handleSubmenuAccordion: function (l, n) {
                                    var u, i = n || this;
                                    if (!1 !== r.eventTrigger('submenuToggle', this, l))
                                        if ('dropdown' === r.getSubmenuMode(n) && (u = i.closest('.menu-item')) && 'accordion' != u.getAttribute('data-menu-submenu-mode'))
                                            l.preventDefault();
                                        else {
                                            var o = i.closest('.menu-item'), a = t.a.child(o, '.menu-submenu, .menu-inner');
                                            if (!t.a.hasClass(i.closest('.menu-item'), 'menu-item-open-always') && o && a) {
                                                l.preventDefault();
                                                var s = e.options.accordion.slideSpeed;
                                                if (!1 === t.a.hasClass(o, 'menu-item-open')) {
                                                    if (!1 === e.options.accordion.expandAll) {
                                                        var d = i.closest('.menu-nav, .menu-subnav'), c = t.a.children(d, '.menu-item.menu-item-open.menu-item-submenu:not(.menu-item-here):not(.menu-item-open-always)');
                                                        if (d && c)
                                                            for (var f = 0, p = c.length; f < p; f++) {
                                                                var h = c[0], g = t.a.child(h, '.menu-submenu');
                                                                g && t.a.slideUp(g, s, function () {
                                                                    r.scrollUpdate(), t.a.removeClass(h, 'menu-item-open');
                                                                });
                                                            }
                                                    }
                                                    t.a.slideDown(a, s, function () {
                                                        r.scrollToItem(i), r.scrollUpdate(), r.eventTrigger('submenuToggle', a, l);
                                                    }), t.a.addClass(o, 'menu-item-open');
                                                } else
                                                    t.a.slideUp(a, s, function () {
                                                        r.scrollToItem(i), r.eventTrigger('submenuToggle', a, l);
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
                                            r.hideSubmenuDropdown(l[n], !0);
                                },
                                showSubmenuDropdown: function (l) {
                                    var n = i.querySelectorAll('.menu-item-submenu.menu-item-hover, .menu-item-submenu.menu-item-active-tab');
                                    if (n)
                                        for (var e = 0, u = n.length; e < u; e++) {
                                            var a = n[e];
                                            l !== a && !1 === a.contains(l) && !1 === l.contains(a) && r.hideSubmenuDropdown(a, !0);
                                        }
                                    t.a.addClass(l, 'menu-item-hover');
                                    var s = t.a.find(l, '.menu-submenu');
                                    s && !1 === s.hasAttribute('data-hor-direction') && (t.a.hasClass(s, 'menu-submenu-left') ? s.setAttribute('data-hor-direction', 'menu-submenu-left') : t.a.hasClass(s, 'menu-submenu-right') && s.setAttribute('data-hor-direction', 'menu-submenu-right')), s && !0 === t.a.isOffscreen(s, 'left', 15) ? (t.a.removeClass(s, 'menu-submenu-left'), t.a.addClass(s, 'menu-submenu-right')) : s && !0 === t.a.isOffscreen(s, 'right', 15) && (t.a.removeClass(s, 'menu-submenu-right'), t.a.addClass(s, 'menu-submenu-left')), l.getAttribute('data-menu-toggle-class') && t.a.addClass(o, l.getAttribute('data-menu-toggle-class'));
                                },
                                createSubmenuDropdownClickDropoff: function (l) {
                                    var n, e = (n = t.a.child(l, '.menu-submenu') ? t.a.css(n, 'z-index') : 0) - 1, u = document.createElement('<div class="menu-dropoff" style="background: transparent; position: fixed; top: 0; bottom: 0; left: 0; right: 0; z-index: ' + e + '"></div>');
                                    o.appendChild(u), t.a.addEvent(u, 'click', function (n) {
                                        n.stopPropagation(), n.preventDefault(), t.a.remove(this), r.hideSubmenuDropdown(l, !0);
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
                                        var r = n[0];
                                        t.a.removeClass(r, 'menu-item-active'), t.a.hide(t.a.child(r, '.menu-submenu'));
                                        for (var s = 0, d = (u = t.a.parents(r, '.menu-item-submenu') || []).length; s < d; s++) {
                                            var c = u[o];
                                            t.a.removeClass(c, 'menu-item-open'), t.a.hide(t.a.child(c, '.menu-submenu'));
                                        }
                                    }
                                    if (!1 === e.options.accordion.expandAll && (n = i.querySelectorAll('.menu-item-open')))
                                        for (o = 0, a = n.length; o < a; o++)
                                            t.a.removeClass(u[0], 'menu-item-open');
                                },
                                setActiveItem: function (l) {
                                    r.resetActiveItem();
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
                                        var r = t.a.child(i[o], '.menu-link');
                                        e.push({
                                            text: n = t.a.child(r, '.menu-text') ? n.innerHTML : '',
                                            title: r.getAttribute('title'),
                                            href: r.getAttribute('href')
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
                                return r.scrollUpdate();
                            }, e.scrollReInit = function () {
                                return r.scrollInit();
                            }, e.scrollTop = function () {
                                return r.scrollTop();
                            }, e.setActiveItem = function (l) {
                                return r.setActiveItem(l);
                            }, e.reload = function () {
                                return r.reload();
                            }, e.update = function (l) {
                                return r.update(l);
                            }, e.getBreadcrumbs = function (l) {
                                return r.getBreadcrumbs(l);
                            }, e.getPageTitle = function (l) {
                                return r.getPageTitle(l);
                            }, e.getSubmenuMode = function (l) {
                                return r.getSubmenuMode(l);
                            }, e.hideDropdown = function (l) {
                                r.hideSubmenuDropdown(l, !0);
                            }, e.hideDropdowns = function () {
                                r.hideSubmenuDropdowns();
                            }, e.pauseDropdownHover = function (l) {
                                r.pauseDropdownHover(l);
                            }, e.resumeDropdownHover = function () {
                                return r.resumeDropdownHover();
                            }, e.on = function (l, n) {
                                return r.addEvent(l, n);
                            }, e.off = function (l) {
                                return r.removeEvent(l);
                            }, e.one = function (l, n) {
                                return r.addEvent(l, n, !0);
                            }, r.construct.apply(e, [n]), t.a.addResizeHandler(function () {
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
                var t = {
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
                    return r;
                });
                var t, u = e('2Vo4'), i = {
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
                }, o = e('boci'), a = e('8Y7J'), r = ((t = function () {
                    function l() {
                        d(this, l), this.layoutConfigSubject = new u.a(void 0), this.classes = {
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
                    return f(l, [
                        {
                            key: 'initConfig',
                            value: function () {
                                var l = localStorage.getItem('1-layoutConfig');
                                if (l)
                                    try {
                                        return void this.layoutConfigSubject.next(JSON.parse(l));
                                    } catch (n) {
                                        this.removeConfig(), console.error('config parse from local storage', n);
                                    }
                                this.layoutConfigSubject.next(i);
                            }
                        },
                        {
                            key: 'removeConfig',
                            value: function () {
                                localStorage.removeItem('1-layoutConfig');
                            }
                        },
                        {
                            key: 'refreshConfigToDefault',
                            value: function () {
                                this.setConfigWithPageRefresh(void 0);
                            }
                        },
                        {
                            key: 'getConfig',
                            value: function () {
                                return this.layoutConfigSubject.value || i;
                            }
                        },
                        {
                            key: 'setConfig',
                            value: function (l) {
                                l ? localStorage.setItem('1-layoutConfig', JSON.stringify(l)) : this.removeConfig(), this.layoutConfigSubject.next(l);
                            }
                        },
                        {
                            key: 'setConfigWithoutLocalStorageChanges',
                            value: function (l) {
                                this.layoutConfigSubject.next(l);
                            }
                        },
                        {
                            key: 'setConfigWithPageRefresh',
                            value: function (l) {
                                this.setConfig(l), document.location.reload();
                            }
                        },
                        {
                            key: 'getProp',
                            value: function (l) {
                                return o.get(this.layoutConfigSubject.value, l);
                            }
                        },
                        {
                            key: 'setCSSClass',
                            value: function (l, n) {
                                var e = this;
                                this.classes[l] || (this.classes[l] = []), n.split(' ').forEach(function (n) {
                                    return e.classes[l].push(n);
                                });
                            }
                        },
                        {
                            key: 'getCSSClasses',
                            value: function (l) {
                                return this.classes[l] || [];
                            }
                        },
                        {
                            key: 'getStringCSSClasses',
                            value: function (l) {
                                return this.getCSSClasses(l).join(' ');
                            }
                        },
                        {
                            key: 'getHTMLAttributes',
                            value: function (l) {
                                return this.attrs[l] || {};
                            }
                        },
                        {
                            key: 'setHTMLAttribute',
                            value: function (l, n, e) {
                                this.attrs[l] || (this.attrs[l] = {}), this.attrs[l][n] = e;
                            }
                        }
                    ]), l;
                }()).ɵprov = a['ɵɵdefineInjectable']({
                    factory: function () {
                        return new t();
                    },
                    token: t,
                    providedIn: 'root'
                }), t);
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
                            var a = { targetToggleMode: 'class' }, r = {
                                construct: function (l) {
                                    return t.a.data(i).has('toggle') ? u = t.a.data(i).get('toggle') : (r.init(l), r.build(), t.a.data(i).set('toggle', u)), u;
                                },
                                init: function (l) {
                                    u.element = i, u.events = [], u.options = t.a.deepExtend({}, a, l), u.target = o, u.targetState = u.options.targetState, u.toggleState = u.options.toggleState, u.state = 'class' == u.options.targetToggleMode ? t.a.hasClasses(u.target, u.targetState) ? 'on' : 'off' : t.a.hasAttr(u.target, 'data-' + u.targetState) ? t.a.attr(u.target, 'data-' + u.targetState) : 'off';
                                },
                                build: function () {
                                    t.a.addEvent(i, 'mouseup', r.toggle);
                                },
                                toggle: function (l) {
                                    return r.eventTrigger('beforeToggle'), 'off' == u.state ? r.toggleOn() : r.toggleOff(), r.eventTrigger('afterToggle'), l.preventDefault(), u;
                                },
                                toggleOn: function () {
                                    return r.eventTrigger('beforeOn'), 'class' == u.options.targetToggleMode ? t.a.addClass(u.target, u.targetState) : t.a.attr(u.target, 'data-' + u.targetState, 'on'), u.toggleState && t.a.addClass(i, u.toggleState), u.state = 'on', r.eventTrigger('afterOn'), r.eventTrigger('toggle'), u;
                                },
                                toggleOff: function () {
                                    return r.eventTrigger('beforeOff'), 'class' == u.options.targetToggleMode ? t.a.removeClass(u.target, u.targetState) : t.a.removeAttr(u.target, 'data-' + u.targetState), u.toggleState && t.a.removeClass(i, u.toggleState), u.state = 'off', r.eventTrigger('afterOff'), r.eventTrigger('toggle'), u;
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
                                return r.toggle();
                            }, u.toggleOn = function () {
                                return r.toggleOn();
                            }, u.toggleOff = function () {
                                return r.toggleOff();
                            }, u.on = function (l, n) {
                                return r.addEvent(l, n);
                            }, u.one = function (l, n) {
                                return r.addEvent(l, n, !0);
                            }, r.construct.apply(u, [e]), u;
                        }
                    };
                }.call(this, e('3UD+')(l)));
            }
        }
    ]);
}();