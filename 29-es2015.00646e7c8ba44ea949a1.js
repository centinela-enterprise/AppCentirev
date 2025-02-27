(window.webpackJsonp = window.webpackJsonp || []).push([
    [29],
    {
        Iab2: function (l, n, e) {
            var t, u;
            void 0 === (u = 'function' == typeof (t = function () {
                'use strict';
                function n(l, n, e) {
                    var t = new XMLHttpRequest();
                    t.open('GET', l), t.responseType = 'blob', t.onload = function () {
                        i(t.response, n, e);
                    }, t.onerror = function () {
                        console.error('could not download file');
                    }, t.send();
                }
                function e(l) {
                    var n = new XMLHttpRequest();
                    n.open('HEAD', l, !1);
                    try {
                        n.send();
                    } catch (l) {
                    }
                    return 200 <= n.status && 299 >= n.status;
                }
                function t(l) {
                    try {
                        l.dispatchEvent(new MouseEvent('click'));
                    } catch (n) {
                        var e = document.createEvent('MouseEvents');
                        e.initMouseEvent('click', !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), l.dispatchEvent(e);
                    }
                }
                var u = 'object' == typeof window && window.window === window ? window : 'object' == typeof self && self.self === self ? self : 'object' == typeof global && global.global === global ? global : void 0, o = u.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), i = u.saveAs || ('object' != typeof window || window !== u ? function () {
                } : 'download' in HTMLAnchorElement.prototype && !o ? function (l, o, i) {
                    var a = u.URL || u.webkitURL, r = document.createElement('a');
                    r.download = o = o || l.name || 'download', r.rel = 'noopener', 'string' == typeof l ? (r.href = l, r.origin === location.origin ? t(r) : e(r.href) ? n(l, o, i) : t(r, r.target = '_blank')) : (r.href = a.createObjectURL(l), setTimeout(function () {
                        a.revokeObjectURL(r.href);
                    }, 40000), setTimeout(function () {
                        t(r);
                    }, 0));
                } : 'msSaveOrOpenBlob' in navigator ? function (l, u, o) {
                    if (u = u || l.name || 'download', 'string' != typeof l)
                        navigator.msSaveOrOpenBlob(function (l, n) {
                            return void 0 === n ? n = { autoBom: !1 } : 'object' != typeof n && (console.warn('Deprecated: Expected third argument to be a object'), n = { autoBom: !n }), n.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(l.type) ? new Blob([
                                '\uFEFF',
                                l
                            ], { type: l.type }) : l;
                        }(l, o), u);
                    else if (e(l))
                        n(l, u, o);
                    else {
                        var i = document.createElement('a');
                        i.href = l, i.target = '_blank', setTimeout(function () {
                            t(i);
                        });
                    }
                } : function (l, e, t, i) {
                    if ((i = i || open('', '_blank')) && (i.document.title = i.document.body.innerText = 'downloading...'), 'string' == typeof l)
                        return n(l, e, t);
                    var a = 'application/octet-stream' === l.type, r = /constructor/i.test(u.HTMLElement) || u.safari, s = /CriOS\/[\d]+/.test(navigator.userAgent);
                    if ((s || a && r || o) && 'undefined' != typeof FileReader) {
                        var d = new FileReader();
                        d.onloadend = function () {
                            var l = d.result;
                            l = s ? l : l.replace(/^data:[^;]*;/, 'data:attachment/file;'), i ? i.location.href = l : location = l, i = null;
                        }, d.readAsDataURL(l);
                    } else {
                        var c = u.URL || u.webkitURL, m = c.createObjectURL(l);
                        i ? i.location = m : location.href = m, i = null, setTimeout(function () {
                            c.revokeObjectURL(m);
                        }, 40000);
                    }
                });
                u.saveAs = i.saveAs = i, l.exports = i;
            }) ? t.apply(n, []) : t) || (l.exports = u);
        },
        cfIE: function (l, n, e) {
            'use strict';
            e.r(n), e.d(n, 'SettingsModuleNgFactory', function () {
                return Lo;
            });
            var t = e('8Y7J');
            class u {
            }
            var o = e('pMnS'), i = e('iInd'), a = e('SVse'), r = e('TSSN'), s = e('66zS'), d = e('WJhm'), c = e('07VJ');
            class m {
                constructor(l) {
                    this.store = l;
                }
                ngOnInit() {
                    this.user$ = this.store.select(c.b);
                }
            }
            var v = e('tqRt'), p = t['ɵcrt']({
                encapsulation: 0,
                styles: [['']],
                data: {}
            });
            function f(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 18, 'div', [[
                        'class',
                        'navi-item mb-2'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 17, 'a', [
                        [
                            'class',
                            'navi-link py-4'
                        ],
                        [
                            'href',
                            'custom/apps/profile/profile-1/change-phone.html'
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
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 2).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](2, 671744, [[
                        8,
                        4
                    ]], 0, i.u, [
                        i.r,
                        i.a,
                        a.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    t['ɵpad'](3, 1),
                    t['ɵdid'](4, 1720320, null, 2, i.t, [
                        i.r,
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            2,
                            i.s
                        ],
                        [
                            2,
                            i.u
                        ]
                    ], {
                        routerLinkActive: [
                            0,
                            'routerLinkActive'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 7, { links: 1 }),
                    t['ɵqud'](603979776, 8, { linksWithHrefs: 1 }),
                    (l()(), t['ɵeld'](7, 0, null, null, 7, 'span', [[
                        'class',
                        'navi-icon mr-2'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](8, 0, null, null, 6, 'span', [[
                        'class',
                        'svg-icon'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](9, 0, null, null, 5, ':svg:svg', [
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
                    (l()(), t['ɵeld'](10, 0, null, null, 4, ':svg:g', [
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
                    (l()(), t['ɵeld'](11, 0, null, null, 0, ':svg:rect', [
                        [
                            'height',
                            '24'
                        ],
                        [
                            'width',
                            '24'
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
                    (l()(), t['ɵeld'](12, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z'
                        ],
                        [
                            'fill',
                            '#000000'
                        ],
                        [
                            'opacity',
                            '0.3'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](13, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 C13.1045695,7 14,7.8954305 14,9 C14,10.1045695 13.1045695,11 12,11 Z'
                        ],
                        [
                            'fill',
                            '#000000'
                        ],
                        [
                            'opacity',
                            '0.3'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](14, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M7.00036205,16.4995035 C7.21569918,13.5165724 9.36772908,12 11.9907452,12 C14.6506758,12 16.8360465,13.4332455 16.9988413,16.5 C17.0053266,16.6221713 16.9988413,17 16.5815,17 C14.5228466,17 11.463736,17 7.4041679,17 C7.26484009,17 6.98863236,16.6619875 7.00036205,16.4995035 Z'
                        ],
                        [
                            'fill',
                            '#000000'
                        ],
                        [
                            'opacity',
                            '0.3'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](15, 0, null, null, 3, 'span', [[
                        'class',
                        'navi-text font-size-lg'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](16, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], function (l, n) {
                    var e = l(n, 3, 0, '/settings/change-phone');
                    l(n, 2, 0, e), l(n, 4, 0, 'active');
                }, function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, t['ɵnov'](n, 2).target, t['ɵnov'](n, 2).href), l(n, 16, 0, t['ɵunv'](n, 16, 0, t['ɵnov'](n, 18).transform(null != t['ɵunv'](n, 16, 0, t['ɵnov'](n, 17).transform(e.user$)).mobile_verified_at ? 'PROFILE.SUB_TITLES.CHANGE_PHONE' : 'PROFILE.SUB_TITLES.CONFI_PHONE')));
                });
            }
            function g(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 14, 'div', [[
                        'class',
                        'navi-item mb-2'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 13, 'a', [
                        [
                            'class',
                            'navi-link py-4'
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
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 2).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](2, 671744, [[
                        10,
                        4
                    ]], 0, i.u, [
                        i.r,
                        i.a,
                        a.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    t['ɵpad'](3, 1),
                    t['ɵdid'](4, 1720320, null, 2, i.t, [
                        i.r,
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            2,
                            i.s
                        ],
                        [
                            2,
                            i.u
                        ]
                    ], {
                        routerLinkActive: [
                            0,
                            'routerLinkActive'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 9, { links: 1 }),
                    t['ɵqud'](603979776, 10, { linksWithHrefs: 1 }),
                    (l()(), t['ɵeld'](7, 0, null, null, 4, 'span', [[
                        'class',
                        'navi-icon mr-2'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](8, 0, null, null, 3, 'span', [[
                        'class',
                        'svg-icon'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](9, 0, null, null, 2, 'i', [
                        [
                            'nz-icon',
                            ''
                        ],
                        [
                            'nzTheme',
                            'outline'
                        ],
                        [
                            'nzType',
                            'solution'
                        ]
                    ], [[
                        2,
                        'anticon',
                        null
                    ]], null, null, null, null)),
                    t['ɵdid'](10, 2703360, null, 0, s.a, [
                        t.ElementRef,
                        s.d,
                        t.Renderer2,
                        [
                            2,
                            s.c
                        ]
                    ], {
                        nzType: [
                            0,
                            'nzType'
                        ],
                        nzTheme: [
                            1,
                            'nzTheme'
                        ]
                    }, null),
                    t['ɵdid'](11, 4734976, null, 0, d.a, [
                        t.ElementRef,
                        t.Renderer2
                    ], null, null),
                    (l()(), t['ɵeld'](12, 0, null, null, 2, 'span', [[
                        'class',
                        'navi-text font-size-lg'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](13, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], function (l, n) {
                    var e = l(n, 3, 0, '/settings/legal-responsible');
                    l(n, 2, 0, e), l(n, 4, 0, 'active'), l(n, 10, 0, 'solution', 'outline');
                }, function (l, n) {
                    l(n, 1, 0, t['ɵnov'](n, 2).target, t['ɵnov'](n, 2).href), l(n, 9, 0, !0), l(n, 13, 0, t['ɵunv'](n, 13, 0, t['ɵnov'](n, 14).transform('PROFILE.OPTIONS.LEGAL_RESPONSIBLE')));
                });
            }
            function h(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 14, 'div', [[
                        'class',
                        'navi-item mb-2'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 13, 'a', [
                        [
                            'class',
                            'navi-link py-4'
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
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 2).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](2, 671744, [[
                        12,
                        4
                    ]], 0, i.u, [
                        i.r,
                        i.a,
                        a.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    t['ɵpad'](3, 1),
                    t['ɵdid'](4, 1720320, null, 2, i.t, [
                        i.r,
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            2,
                            i.s
                        ],
                        [
                            2,
                            i.u
                        ]
                    ], {
                        routerLinkActive: [
                            0,
                            'routerLinkActive'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 11, { links: 1 }),
                    t['ɵqud'](603979776, 12, { linksWithHrefs: 1 }),
                    (l()(), t['ɵeld'](7, 0, null, null, 4, 'span', [[
                        'class',
                        'navi-icon mr-2'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](8, 0, null, null, 3, 'span', [[
                        'class',
                        'svg-icon'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](9, 0, null, null, 2, 'i', [
                        [
                            'nz-icon',
                            ''
                        ],
                        [
                            'nzTheme',
                            'outline'
                        ],
                        [
                            'nzType',
                            'container'
                        ]
                    ], [[
                        2,
                        'anticon',
                        null
                    ]], null, null, null, null)),
                    t['ɵdid'](10, 2703360, null, 0, s.a, [
                        t.ElementRef,
                        s.d,
                        t.Renderer2,
                        [
                            2,
                            s.c
                        ]
                    ], {
                        nzType: [
                            0,
                            'nzType'
                        ],
                        nzTheme: [
                            1,
                            'nzTheme'
                        ]
                    }, null),
                    t['ɵdid'](11, 4734976, null, 0, d.a, [
                        t.ElementRef,
                        t.Renderer2
                    ], null, null),
                    (l()(), t['ɵeld'](12, 0, null, null, 2, 'span', [[
                        'class',
                        'navi-text font-size-lg'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](13, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], function (l, n) {
                    var e = l(n, 3, 0, '/settings/billing-information');
                    l(n, 2, 0, e), l(n, 4, 0, 'active'), l(n, 10, 0, 'container', 'outline');
                }, function (l, n) {
                    l(n, 1, 0, t['ɵnov'](n, 2).target, t['ɵnov'](n, 2).href), l(n, 9, 0, !0), l(n, 13, 0, t['ɵunv'](n, 13, 0, t['ɵnov'](n, 14).transform('PROFILE.OPTIONS.BILLING_INFO')));
                });
            }
            function b(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 131, 'div', [[
                        'class',
                        'container'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 130, 'div', [[
                        'class',
                        'd-none' //DIV DE SECCION PERFIL
                        // 'd-block d-md-flex flex-row '
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 126, 'div', [
                        [
                            'class',
                            'flex-row-auto w-md-250px w-xxl-350px'
                        ],
                        [
                            'id',
                            'kt_profile_aside'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 125, 'div', [[
                        'class',
                        'card card-custom card-stretch'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](4, 0, null, null, 124, 'div', [[
                        'class',
                        'card-body pt-5'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](5, 0, null, null, 12, 'div', [[
                        'class',
                        'd-flex align-items-center'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](6, 0, null, null, 3, 'div', [[
                        'class',
                        'symbol symbol-60 symbol-xxl-100 mr-5 align-self-start align-self-xxl-center'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](7, 0, null, null, 1, 'div', [[
                        'class',
                        'symbol-label'
                    ]], [[
                        8,
                        'style',
                        2
                    ]], null, null, null, null)),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵeld'](9, 0, null, null, 0, 'i', [[
                        'class',
                        'symbol-badge bg-success'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](10, 0, null, null, 7, 'div', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](11, 0, null, null, 2, 'a', [
                        [
                            'class',
                            'font-weight-bolder font-size-h5 text-dark-75 text-hover-primary'
                        ],
                        [
                            'href',
                            '#'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](12, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵeld'](14, 0, null, null, 3, 'div', [[
                        'class',
                        'text-muted'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](15, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](18, 0, null, null, 6, 'div', [[
                        'class',
                        'py-9'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](19, 0, null, null, 5, 'div', [[
                        'class',
                        'd-flex align-items-center justify-content-between mb-2'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](20, 0, null, null, 1, 'span', [[
                        'class',
                        'font-weight-bold mr-2'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Email:'])),
                    (l()(), t['ɵeld'](22, 0, null, null, 2, 'a', [
                        [
                            'class',
                            'text-muted text-truncate text-hover-primary'
                        ],
                        [
                            'href',
                            '#'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](23, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵeld'](25, 0, null, null, 103, 'div', [[
                        'class',
                        'navi navi-bold navi-hover navi-active navi-link-rounded'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](26, 0, null, null, 15, 'div', [[
                        'class',
                        'navi-item mb-2'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](27, 0, null, null, 14, 'a', [
                        [
                            'class',
                            'navi-link py-4'
                        ],
                        [
                            'href',
                            '\'/settings/profile\''
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
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 28).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](28, 671744, [[
                        2,
                        4
                    ]], 0, i.u, [
                        i.r,
                        i.a,
                        a.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    t['ɵpad'](29, 1),
                    t['ɵdid'](30, 1720320, null, 2, i.t, [
                        i.r,
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            2,
                            i.s
                        ],
                        [
                            2,
                            i.u
                        ]
                    ], {
                        routerLinkActive: [
                            0,
                            'routerLinkActive'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 1, { links: 1 }),
                    t['ɵqud'](603979776, 2, { linksWithHrefs: 1 }),
                    (l()(), t['ɵeld'](33, 0, null, null, 6, 'span', [[
                        'class',
                        'navi-icon mr-2'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](34, 0, null, null, 5, 'span', [[
                        'class',
                        'svg-icon'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](35, 0, null, null, 4, ':svg:svg', [
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
                    (l()(), t['ɵeld'](36, 0, null, null, 3, ':svg:g', [
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
                    (l()(), t['ɵeld'](37, 0, null, null, 0, ':svg:rect', [
                        [
                            'height',
                            '24'
                        ],
                        [
                            'width',
                            '24'
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
                    (l()(), t['ɵeld'](38, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z'
                        ],
                        [
                            'fill',
                            '#000000'
                        ],
                        [
                            'opacity',
                            '0.3'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](39, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z'
                        ],
                        [
                            'fill',
                            '#000000'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](40, 0, null, null, 1, 'span', [[
                        'class',
                        'navi-text font-size-lg'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Perfil'])),
                    (l()(), t['ɵeld'](42, 0, null, null, 16, 'div', [[
                        'class',
                        'navi-item mb-2'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](43, 0, null, null, 15, 'a', [
                        [
                            'class',
                            'navi-link py-4'
                        ],
                        [
                            'href',
                            'custom/apps/profile/profile-1/change-password.html'
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
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 44).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](44, 671744, [[
                        4,
                        4
                    ]], 0, i.u, [
                        i.r,
                        i.a,
                        a.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    t['ɵpad'](45, 1),
                    t['ɵdid'](46, 1720320, null, 2, i.t, [
                        i.r,
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            2,
                            i.s
                        ],
                        [
                            2,
                            i.u
                        ]
                    ], {
                        routerLinkActive: [
                            0,
                            'routerLinkActive'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 3, { links: 1 }),
                    t['ɵqud'](603979776, 4, { linksWithHrefs: 1 }),
                    (l()(), t['ɵeld'](49, 0, null, null, 7, 'span', [[
                        'class',
                        'navi-icon mr-2'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](50, 0, null, null, 6, 'span', [[
                        'class',
                        'svg-icon'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](51, 0, null, null, 5, ':svg:svg', [
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
                    (l()(), t['ɵeld'](52, 0, null, null, 4, ':svg:g', [
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
                    (l()(), t['ɵeld'](53, 0, null, null, 0, ':svg:rect', [
                        [
                            'height',
                            '24'
                        ],
                        [
                            'width',
                            '24'
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
                    (l()(), t['ɵeld'](54, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z'
                        ],
                        [
                            'fill',
                            '#000000'
                        ],
                        [
                            'opacity',
                            '0.3'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](55, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 C13.1045695,7 14,7.8954305 14,9 C14,10.1045695 13.1045695,11 12,11 Z'
                        ],
                        [
                            'fill',
                            '#000000'
                        ],
                        [
                            'opacity',
                            '0.3'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](56, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M7.00036205,16.4995035 C7.21569918,13.5165724 9.36772908,12 11.9907452,12 C14.6506758,12 16.8360465,13.4332455 16.9988413,16.5 C17.0053266,16.6221713 16.9988413,17 16.5815,17 C14.5228466,17 11.463736,17 7.4041679,17 C7.26484009,17 6.98863236,16.6619875 7.00036205,16.4995035 Z'
                        ],
                        [
                            'fill',
                            '#000000'
                        ],
                        [
                            'opacity',
                            '0.3'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](57, 0, null, null, 1, 'span', [[
                        'class',
                        'navi-text font-size-lg'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Cambiar contraseña'])),
                    (l()(), t['ɵeld'](59, 0, null, null, 18, 'div', [[
                        'class',
                        'navi-item mb-2'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](60, 0, null, null, 17, 'a', [
                        [
                            'class',
                            'navi-link py-4'
                        ],
                        [
                            'href',
                            ''
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
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 61).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](61, 671744, [[
                        6,
                        4
                    ]], 0, i.u, [
                        i.r,
                        i.a,
                        a.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    t['ɵpad'](62, 1),
                    t['ɵdid'](63, 1720320, null, 2, i.t, [
                        i.r,
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            2,
                            i.s
                        ],
                        [
                            2,
                            i.u
                        ]
                    ], {
                        routerLinkActive: [
                            0,
                            'routerLinkActive'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 5, { links: 1 }),
                    t['ɵqud'](603979776, 6, { linksWithHrefs: 1 }),
                    (l()(), t['ɵeld'](66, 0, null, null, 7, 'span', [[
                        'class',
                        'navi-icon mr-2'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](67, 0, null, null, 6, 'span', [[
                        'class',
                        'svg-icon'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](68, 0, null, null, 5, ':svg:svg', [
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
                    (l()(), t['ɵeld'](69, 0, null, null, 4, ':svg:g', [
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
                    (l()(), t['ɵeld'](70, 0, null, null, 0, ':svg:rect', [
                        [
                            'height',
                            '24'
                        ],
                        [
                            'width',
                            '24'
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
                    (l()(), t['ɵeld'](71, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z'
                        ],
                        [
                            'fill',
                            '#000000'
                        ],
                        [
                            'opacity',
                            '0.3'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](72, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 C13.1045695,7 14,7.8954305 14,9 C14,10.1045695 13.1045695,11 12,11 Z'
                        ],
                        [
                            'fill',
                            '#000000'
                        ],
                        [
                            'opacity',
                            '0.3'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](73, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M7.00036205,16.4995035 C7.21569918,13.5165724 9.36772908,12 11.9907452,12 C14.6506758,12 16.8360465,13.4332455 16.9988413,16.5 C17.0053266,16.6221713 16.9988413,17 16.5815,17 C14.5228466,17 11.463736,17 7.4041679,17 C7.26484009,17 6.98863236,16.6619875 7.00036205,16.4995035 Z'
                        ],
                        [
                            'fill',
                            '#000000'
                        ],
                        [
                            'opacity',
                            '0.3'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](74, 0, null, null, 3, 'span', [[
                        'class',
                        'navi-text font-size-lg'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](75, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, f)),
                    t['ɵdid'](79, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, g)),
                    t['ɵdid'](82, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, h)),
                    t['ɵdid'](85, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵeld'](87, 0, null, null, 17, 'div', [[
                        'class',
                        'navi-item mb-2'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](88, 0, null, null, 16, 'a', [
                        [
                            'class',
                            'navi-link py-4'
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
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 89).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](89, 671744, [[
                        14,
                        4
                    ]], 0, i.u, [
                        i.r,
                        i.a,
                        a.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    t['ɵpad'](90, 1),
                    t['ɵdid'](91, 1720320, null, 2, i.t, [
                        i.r,
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            2,
                            i.s
                        ],
                        [
                            2,
                            i.u
                        ]
                    ], {
                        routerLinkActive: [
                            0,
                            'routerLinkActive'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 13, { links: 1 }),
                    t['ɵqud'](603979776, 14, { linksWithHrefs: 1 }),
                    (l()(), t['ɵeld'](94, 0, null, null, 7, 'span', [[
                        'class',
                        'navi-icon mr-2'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](95, 0, null, null, 6, 'span', [[
                        'class',
                        'svg-icon'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](96, 0, null, null, 5, ':svg:svg', [
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
                    (l()(), t['ɵeld'](97, 0, null, null, 4, ':svg:g', [
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
                    (l()(), t['ɵeld'](98, 0, null, null, 0, ':svg:rect', [
                        [
                            'height',
                            '24'
                        ],
                        [
                            'width',
                            '24'
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
                    (l()(), t['ɵeld'](99, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z'
                        ],
                        [
                            'fill',
                            '#000000'
                        ],
                        [
                            'opacity',
                            '0.3'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](100, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 C13.1045695,7 14,7.8954305 14,9 C14,10.1045695 13.1045695,11 12,11 Z'
                        ],
                        [
                            'fill',
                            '#000000'
                        ],
                        [
                            'opacity',
                            '0.3'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](101, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M7.00036205,16.4995035 C7.21569918,13.5165724 9.36772908,12 11.9907452,12 C14.6506758,12 16.8360465,13.4332455 16.9988413,16.5 C17.0053266,16.6221713 16.9988413,17 16.5815,17 C14.5228466,17 11.463736,17 7.4041679,17 C7.26484009,17 6.98863236,16.6619875 7.00036205,16.4995035 Z'
                        ],
                        [
                            'fill',
                            '#000000'
                        ],
                        [
                            'opacity',
                            '0.3'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](102, 0, null, null, 2, 'span', [[
                        'class',
                        'navi-text font-size-lg'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](103, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](105, 0, null, null, 11, 'div', [[
                        'class',
                        'navi-item mb-2'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](106, 0, null, null, 10, 'a', [
                        [
                            'class',
                            'navi-link py-4'
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
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 107).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](107, 671744, [[
                        16,
                        4
                    ]], 0, i.u, [
                        i.r,
                        i.a,
                        a.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    t['ɵpad'](108, 1),
                    t['ɵdid'](109, 1720320, null, 2, i.t, [
                        i.r,
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            2,
                            i.s
                        ],
                        [
                            2,
                            i.u
                        ]
                    ], {
                        routerLinkActive: [
                            0,
                            'routerLinkActive'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 15, { links: 1 }),
                    t['ɵqud'](603979776, 16, { linksWithHrefs: 1 }),
                    (l()(), t['ɵeld'](112, 0, null, null, 1, 'span', [[
                        'class',
                        'navi-icon mr-2'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](113, 0, null, null, 0, 'img', [[
                        'src',
                        '../../..//assets/media/svg/icons/Shopping/Money.svg'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](114, 0, null, null, 2, 'span', [[
                        'class',
                        'navi-text font-size-lg'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](115, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](117, 0, null, null, 11, 'div', [[
                        'class',
                        'navi-item mb-2'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](118, 0, null, null, 10, 'a', [
                        [
                            'class',
                            'navi-link py-4'
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
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 119).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](119, 671744, [[
                        18,
                        4
                    ]], 0, i.u, [
                        i.r,
                        i.a,
                        a.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    t['ɵpad'](120, 1),
                    t['ɵdid'](121, 1720320, null, 2, i.t, [
                        i.r,
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            2,
                            i.s
                        ],
                        [
                            2,
                            i.u
                        ]
                    ], {
                        routerLinkActive: [
                            0,
                            'routerLinkActive'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 17, { links: 1 }),
                    t['ɵqud'](603979776, 18, { linksWithHrefs: 1 }),
                    (l()(), t['ɵeld'](124, 0, null, null, 1, 'span', [[
                        'class',
                        'navi-icon mr-2'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](125, 0, null, null, 0, 'img', [[
                        'src',
                        '../../../assets/media/svg/icons/Files/User-folder.svg'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](126, 0, null, null, 2, 'span', [[
                        'class',
                        'navi-text font-size-lg'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](127, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](129, 0, null, null, 2, 'div', [[
                        'class',
                        'flex-row-fluid ml-lg-8'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](130, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
                    t['ɵdid'](131, 212992, null, 0, i.w, [
                        i.b,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        [
                            8,
                            null
                        ],
                        t.ChangeDetectorRef
                    ], null, null)
                ], function (l, n) {
                    var e = n.component, u = l(n, 29, 0, '/settings/profile');
                    l(n, 28, 0, u), l(n, 30, 0, 'active');
                    var o = l(n, 45, 0, '/settings/change-password');
                    l(n, 44, 0, o), l(n, 46, 0, 'active');
                    var i = l(n, 62, 0, '/settings/change-email');
                    l(n, 61, 0, i), l(n, 63, 0, 'active'), l(n, 79, 0, t['ɵunv'](n, 79, 0, t['ɵnov'](n, 80).transform(e.user$)).people_type > 0), l(n, 82, 0, 0 == t['ɵunv'](n, 82, 0, t['ɵnov'](n, 83).transform(e.user$)).people_type), l(n, 85, 0, 0 == t['ɵunv'](n, 85, 0, t['ɵnov'](n, 86).transform(e.user$)).people_type);
                    var a = l(n, 90, 0, '/settings/users-manager');
                    l(n, 89, 0, a), l(n, 91, 0, 'active');
                    var r = l(n, 108, 0, '/settings/users-sales');
                    l(n, 107, 0, r), l(n, 109, 0, 'active');
                    var s = l(n, 120, 0, '/settings/users-storages');
                    l(n, 119, 0, s), l(n, 121, 0, 'active'), l(n, 131, 0);
                }, function (l, n) {
                    var e = n.component;
                    l(n, 7, 0, t['ɵinlineInterpolate'](1, 'background-image:url(\'', t['ɵunv'](n, 7, 0, t['ɵnov'](n, 8).transform(e.user$)).avatar, '\')')), l(n, 12, 0, t['ɵunv'](n, 12, 0, t['ɵnov'](n, 13).transform(e.user$)).name), l(n, 15, 0, t['ɵunv'](n, 15, 0, t['ɵnov'](n, 17).transform(1 == t['ɵunv'](n, 15, 0, t['ɵnov'](n, 16).transform(e.user$)).people_type ? 'USER.PHISICAL' : 'USER.MORAL'))), l(n, 23, 0, t['ɵunv'](n, 23, 0, t['ɵnov'](n, 24).transform(e.user$)).email), l(n, 27, 0, t['ɵnov'](n, 28).target, t['ɵnov'](n, 28).href), l(n, 43, 0, t['ɵnov'](n, 44).target, t['ɵnov'](n, 44).href), l(n, 60, 0, t['ɵnov'](n, 61).target, t['ɵnov'](n, 61).href), l(n, 75, 0, t['ɵunv'](n, 75, 0, t['ɵnov'](n, 77).transform(null != t['ɵunv'](n, 75, 0, t['ɵnov'](n, 76).transform(e.user$)).email_verified_at ? 'PROFILE.SUB_TITLES.CHANGE_EMAIL' : 'PROFILE.SUB_TITLES.CONFI_EMAIL'))), l(n, 88, 0, t['ɵnov'](n, 89).target, t['ɵnov'](n, 89).href), l(n, 103, 0, t['ɵunv'](n, 103, 0, t['ɵnov'](n, 104).transform('PROFILE.OPTIONS.USERS_MANAGER'))), l(n, 106, 0, t['ɵnov'](n, 107).target, t['ɵnov'](n, 107).href), l(n, 115, 0, t['ɵunv'](n, 115, 0, t['ɵnov'](n, 116).transform('PROFILE.OPTIONS.USERS_SALES'))), l(n, 118, 0, t['ɵnov'](n, 119).target, t['ɵnov'](n, 119).href), l(n, 127, 0, t['ɵunv'](n, 127, 0, t['ɵnov'](n, 128).transform('PROFILE.OPTIONS.USERS_STORAGE')));
                });
            }
            function C(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'app-settings', [], null, null, null, b, p)),
                    t['ɵdid'](1, 114688, null, 0, m, [v.o], null, null)
                ], function (l, n) {
                    l(n, 1, 0);
                }, null);
            }
            var R = t['ɵccf']('app-settings', m, C, {}, {}, []), w = e('XWCS'), E = e('tYkK'), y = e('HeVh'), z = e('SCoL'), S = e('vZwM'), I = e('wf2+'), k = e('Rgb0'), L = e('s7LF'), D = e('EvHu'), O = e('iB+a'), T = e('0YeR'), _ = e('Iwqi'), A = e('iBfQ');
            class x extends A.a {
                constructor(l, n) {
                    super(l, n), this._formBuilder = l, this._validate = n, this.setEntityForm = this.formBuilder.group({
                        name: [
                            '',
                            [L.x.required]
                        ],
                        lastName: [''],
                        rfc: [
                            '',
                            [L.x.required]
                        ],
                        avatar: [
                            '',
                            [L.x.required]
                        ]
                    });
                }
            }
            var F = e('ka1k'), N = e('DrXB'), P = e('E2jz');
            class M {
                constructor(l, n, e) {
                    this.store = l, this._validations = n, this.cd = e, this.idUser = '', this.imageSrc = 'none', this.formChange = new t.EventEmitter(), this.changeSelectDocument = new t.EventEmitter(), this.isVisiblePassword = !1, this.isLoading$ = l.select(l => l.settingsModule.profileFormState.isLoading);
                }
                ngAfterViewInit() {
                }
                ngOnInit() {
                    this.user$ = this.store.select(c.b), this.initializedForm();
                }
                initializedForm() {
                    this.form || (this.form = this._validations.entityForm(), this.getInfoProfile());
                }
                getInfoProfile() {
                    this.store.select(c.b).subscribe(l => {
                        null != l && (this.idUser = l.id, this.imageSrc = `url('${l.avatar}')`, this.form.setValue({
                            name: l.firtname,
                            rfc: l.RFC,
                            lastName: l.lastname,
                            avatar: l.avatar
                        }), this.asignValidationRFCUser(l.people_type));
                    });
                }
                asignValidationRFCUser(l) {
                    switch (this.userType = l, l) {
                        case P.a.physic:
                            this.form.get('rfc').setValidators([N.a.rfcPhysicFormat()]), this.form.get('lastName').setValidators([L.x.required]);
                            break;
                        case P.a.moral:
                            this.form.get('rfc').setValidators([N.a.rfcMoralFormat()]);
                    }
                }
                onChangeDocument(l) {
                    this.changeSelectDocument.emit(l);
                }
                deleteAvatar() {
                    this.form.patchValue({ avatar: null }), this.imageSrc = 'none';
                }
                onFileChange(l) {
                    const n = new FileReader();
                    if (l.target.files && l.target.files.length) {
                        const [e] = l.target.files;
                        Math.round(e.size / 1024) <= 2048 ? (n.readAsDataURL(e), this.actualFile = e, n.onload = () => {
                            this.imageSrc = `url('${n.result}')`, this.setImageForm(n.result);
                        }) : (this.imageSrc = 'none', this.form.controls.avatar.setValue(null));
                    }
                }
                setImageForm(l) {
                    this.form.patchValue({ avatar: l }), this.cd.markForCheck();
                }
            }
            var V = t['ɵcrt']({
                encapsulation: 0,
                styles: [['']],
                data: {}
            });
            function U(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'span', [
                        [
                            'class',
                            'btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow'
                        ],
                        [
                            'data-action',
                            'remove'
                        ],
                        [
                            'data-original-title',
                            'Remove avatar'
                        ],
                        [
                            'data-toggle',
                            'tooltip'
                        ],
                        [
                            'title',
                            ''
                        ]
                    ], null, [[
                        null,
                        'click'
                    ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.deleteAvatar() && t), t;
                    }, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 0, 'i', [[
                        'class',
                        'ki ki-bold-close icon-xs text-muted'
                    ]], null, null, null, null, null))
                ], null, null);
            }
            function j(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform(e._validations.message().code)));
                });
            }
            function B(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵand'](16777216, null, null, 1, null, j)),
                    t['ɵdid'](1, 16384, null, 0, a.NgIf, [
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
                    l(n, 1, 0, n.component._validations.validate('avatar'));
                }, null);
            }
            function J(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform(e._validations.message().code)));
                });
            }
            function H(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵand'](16777216, null, null, 1, null, J)),
                    t['ɵdid'](1, 16384, null, 0, a.NgIf, [
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
                    l(n, 1, 0, n.component._validations.validate('name'));
                }, null);
            }
            function G(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform(e._validations.message().code)));
                });
            }
            function q(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵand'](16777216, null, null, 1, null, G)),
                    t['ɵdid'](1, 16384, null, 0, a.NgIf, [
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
                    l(n, 1, 0, n.component._validations.validate('lastName'));
                }, null);
            }
            function $(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 17, 'nz-form-item', [[
                        'class',
                        'row'
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
                        ],
                        [
                            2,
                            'ant-form-item-has-success',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-warning',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-error',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-is-validating',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-feedback',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-with-help',
                            null
                        ]
                    ], null, null, w.e, w.b)),
                    t['ɵdid'](1, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], null, null),
                    t['ɵdid'](2, 180224, null, 0, I.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](3, 0, null, 0, 2, 'label', [[
                        'class',
                        'col-xl-3 col-lg-3 col-form-label'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](4, null, [
                        '',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](6, 0, null, 0, 11, 'div', [[
                        'class',
                        'col-lg-9 col-xl-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](7, 0, null, null, 10, 'nz-form-control', [[
                        'nzHasFeedback',
                        ''
                    ]], [[
                        4,
                        'flex',
                        null
                    ]], null, null, w.d, w.a)),
                    t['ɵdid'](8, 4931584, null, 0, E.a, [
                        t.ElementRef,
                        [
                            2,
                            E.c
                        ],
                        t.Renderer2
                    ], null, null),
                    t['ɵdid'](9, 1818624, null, 1, I.a, [
                        t.ElementRef,
                        [
                            2,
                            I.c
                        ],
                        t.ChangeDetectorRef,
                        t.Renderer2,
                        k.e,
                        [
                            2,
                            I.b
                        ]
                    ], {
                        nzErrorTip: [
                            0,
                            'nzErrorTip'
                        ],
                        nzHasFeedback: [
                            1,
                            'nzHasFeedback'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 3, { defaultValidateControl: 0 }),
                    (l()(), t['ɵeld'](11, 0, null, 0, 5, 'input', [
                        [
                            'class',
                            'form-control form-control-lg form-control-solid'
                        ],
                        [
                            'formControlName',
                            'lastName'
                        ],
                        [
                            'type',
                            'text'
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
                        var u = !0;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 12)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 12).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 12)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 12)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](12, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.e]),
                    t['ɵdid'](14, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
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
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, [[
                        3,
                        4
                    ]], L.p, null, [L.i]),
                    t['ɵdid'](16, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    (l()(), t['ɵand'](0, [[
                        'errlastname',
                        2
                    ]], 0, 0, null, q))
                ], function (l, n) {
                    l(n, 1, 0), l(n, 8, 0), l(n, 9, 0, t['ɵnov'](n, 17), ''), l(n, 14, 0, 'lastName');
                }, function (l, n) {
                    l(n, 0, 1, [
                        'top' === t['ɵnov'](n, 1).nzAlign,
                        'middle' === t['ɵnov'](n, 1).nzAlign,
                        'bottom' === t['ɵnov'](n, 1).nzAlign,
                        'start' === t['ɵnov'](n, 1).nzJustify,
                        'end' === t['ɵnov'](n, 1).nzJustify,
                        'center' === t['ɵnov'](n, 1).nzJustify,
                        'space-around' === t['ɵnov'](n, 1).nzJustify,
                        'space-between' === t['ɵnov'](n, 1).nzJustify,
                        'success' === t['ɵnov'](n, 2).status,
                        'warning' === t['ɵnov'](n, 2).status,
                        'error' === t['ɵnov'](n, 2).status,
                        'validating' === t['ɵnov'](n, 2).status,
                        t['ɵnov'](n, 2).hasFeedback && t['ɵnov'](n, 2).status,
                        t['ɵnov'](n, 2).withHelpClass
                    ]), l(n, 4, 0, t['ɵunv'](n, 4, 0, t['ɵnov'](n, 5).transform('FORM.LABELS.LAST_NAMES'))), l(n, 7, 0, t['ɵnov'](n, 8).hostFlexStyle), l(n, 11, 0, t['ɵnov'](n, 16).ngClassUntouched, t['ɵnov'](n, 16).ngClassTouched, t['ɵnov'](n, 16).ngClassPristine, t['ɵnov'](n, 16).ngClassDirty, t['ɵnov'](n, 16).ngClassValid, t['ɵnov'](n, 16).ngClassInvalid, t['ɵnov'](n, 16).ngClassPending);
                });
            }
            function K(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform(e._validations.message().code)));
                });
            }
            function Z(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵand'](16777216, null, null, 1, null, K)),
                    t['ɵdid'](1, 16384, null, 0, a.NgIf, [
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
                    l(n, 1, 0, n.component._validations.validate('rfc'));
                }, null);
            }
            function X(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 9, 'nz-form-item', [[
                        'class',
                        'row'
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
                        ],
                        [
                            2,
                            'ant-form-item-has-success',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-warning',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-error',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-is-validating',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-feedback',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-with-help',
                            null
                        ]
                    ], null, null, w.e, w.b)),
                    t['ɵdid'](1, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], null, null),
                    t['ɵdid'](2, 180224, null, 0, I.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](3, 0, null, 0, 2, 'label', [[
                        'class',
                        'col-xl-3 col-lg-3 col-form-label'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](4, null, [
                        '',
                        ' : '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](6, 0, null, 0, 3, 'div', [[
                        'class',
                        'col-lg-9 col-xl-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](7, 0, null, null, 2, 'b', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](8, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef])
                ], function (l, n) {
                    l(n, 1, 0);
                }, function (l, n) {
                    var e = n.component;
                    l(n, 0, 1, [
                        'top' === t['ɵnov'](n, 1).nzAlign,
                        'middle' === t['ɵnov'](n, 1).nzAlign,
                        'bottom' === t['ɵnov'](n, 1).nzAlign,
                        'start' === t['ɵnov'](n, 1).nzJustify,
                        'end' === t['ɵnov'](n, 1).nzJustify,
                        'center' === t['ɵnov'](n, 1).nzJustify,
                        'space-around' === t['ɵnov'](n, 1).nzJustify,
                        'space-between' === t['ɵnov'](n, 1).nzJustify,
                        'success' === t['ɵnov'](n, 2).status,
                        'warning' === t['ɵnov'](n, 2).status,
                        'error' === t['ɵnov'](n, 2).status,
                        'validating' === t['ɵnov'](n, 2).status,
                        t['ɵnov'](n, 2).hasFeedback && t['ɵnov'](n, 2).status,
                        t['ɵnov'](n, 2).withHelpClass
                    ]), l(n, 4, 0, t['ɵunv'](n, 4, 0, t['ɵnov'](n, 5).transform('FORM.LABELS.API_TOKEN'))), l(n, 8, 0, t['ɵunv'](n, 8, 0, t['ɵnov'](n, 9).transform(e.user$)).api_token);
                });
            }
            function W(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 82, 'ce-layout-dashboard', [], null, null, null, D.b, D.a)),
                    t['ɵdid'](1, 638976, null, 0, O.a, [t.ChangeDetectorRef], {
                        isLoading: [
                            0,
                            'isLoading'
                        ]
                    }, null),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵeld'](3, 0, null, 0, 79, 'form', [
                        [
                            'class',
                            'form'
                        ],
                        [
                            'content',
                            ''
                        ],
                        [
                            'novalidate',
                            ''
                        ],
                        [
                            'nz-form',
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
                        ],
                        [
                            2,
                            'ant-form-horizontal',
                            null
                        ],
                        [
                            2,
                            'ant-form-vertical',
                            null
                        ],
                        [
                            2,
                            'ant-form-inline',
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
                        return 'submit' === n && (u = !1 !== t['ɵnov'](l, 5).onSubmit(e) && u), 'reset' === n && (u = !1 !== t['ɵnov'](l, 5).onReset() && u), u;
                    }, null, null)),
                    t['ɵdid'](4, 16384, null, 0, L.C, [], null, null),
                    t['ɵdid'](5, 540672, null, 0, L.k, [
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
                    t['ɵprd'](2048, null, L.d, null, [L.k]),
                    t['ɵdid'](7, 16384, null, 0, L.r, [[
                        6,
                        L.d
                    ]], null, null),
                    t['ɵdid'](8, 671744, null, 0, I.b, [
                        T.a,
                        t.ElementRef,
                        t.Renderer2
                    ], null, null),
                    (l()(), t['ɵeld'](9, 0, null, null, 73, 'div', [[
                        'class',
                        'card-body'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](10, 0, null, null, 29, 'nz-form-item', [], [
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
                        ],
                        [
                            2,
                            'ant-form-item-has-success',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-warning',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-error',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-is-validating',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-feedback',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-with-help',
                            null
                        ]
                    ], null, null, w.e, w.b)),
                    t['ɵdid'](11, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], null, null),
                    t['ɵdid'](12, 180224, null, 0, I.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](13, 0, null, 0, 2, 'label', [[
                        'class',
                        'col-xl-3 col-lg-3 col-form-label'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](14, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](16, 0, null, 0, 23, 'div', [[
                        'class',
                        'col-lg-9 col-xl-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](17, 0, null, null, 22, 'nz-form-control', [[
                        'nzHasFeedback',
                        ''
                    ]], [[
                        4,
                        'flex',
                        null
                    ]], null, null, w.d, w.a)),
                    t['ɵdid'](18, 4931584, null, 0, E.a, [
                        t.ElementRef,
                        [
                            2,
                            E.c
                        ],
                        t.Renderer2
                    ], null, null),
                    t['ɵdid'](19, 1818624, null, 1, I.a, [
                        t.ElementRef,
                        [
                            2,
                            I.c
                        ],
                        t.ChangeDetectorRef,
                        t.Renderer2,
                        k.e,
                        [
                            2,
                            I.b
                        ]
                    ], {
                        nzErrorTip: [
                            0,
                            'nzErrorTip'
                        ],
                        nzHasFeedback: [
                            1,
                            'nzHasFeedback'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 1, { defaultValidateControl: 0 }),
                    (l()(), t['ɵeld'](21, 0, null, 0, 14, 'div', [
                        [
                            'class',
                            'image-input image-input-outline'
                        ],
                        [
                            'id',
                            'kt_profile_avatar'
                        ]
                    ], [
                        [
                            2,
                            'image-input-empty',
                            null
                        ],
                        [
                            4,
                            'backgroundImage',
                            null
                        ]
                    ], null, null, null, null)),
                    (l()(), t['ɵeld'](22, 0, null, null, 0, 'div', [[
                        'class',
                        'image-input-wrapper'
                    ]], [[
                        4,
                        'backgroundImage',
                        null
                    ]], null, null, null, null)),
                    (l()(), t['ɵeld'](23, 0, null, null, 8, 'label', [
                        [
                            'class',
                            'btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow'
                        ],
                        [
                            'data-action',
                            'change'
                        ],
                        [
                            'data-original-title',
                            'Change avatar'
                        ],
                        [
                            'data-toggle',
                            'tooltip'
                        ],
                        [
                            'title',
                            ''
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](24, 0, null, null, 0, 'i', [[
                        'class',
                        'fa fa-pen icon-sm text-muted'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](25, 0, null, null, 0, 'input', [
                        [
                            'accept',
                            '.png, .jpg, .jpeg'
                        ],
                        [
                            'name',
                            'profile_avatar'
                        ],
                        [
                            'type',
                            'file'
                        ]
                    ], null, [[
                        null,
                        'change'
                    ]], function (l, n, e) {
                        var t = !0;
                        return 'change' === n && (t = !1 !== l.component.onFileChange(e) && t), t;
                    }, null, null)),
                    (l()(), t['ɵeld'](26, 0, null, null, 5, 'input', [
                        [
                            'formControlName',
                            'avatar'
                        ],
                        [
                            'name',
                            'profile_avatar_remove'
                        ],
                        [
                            'type',
                            'hidden'
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
                        var u = !0;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 27)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 27).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 27)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 27)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](27, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.e]),
                    t['ɵdid'](29, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
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
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, [[
                        1,
                        4
                    ]], L.p, null, [L.i]),
                    t['ɵdid'](31, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    (l()(), t['ɵeld'](32, 0, null, null, 1, 'span', [
                        [
                            'class',
                            'btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow'
                        ],
                        [
                            'data-action',
                            'cancel'
                        ],
                        [
                            'data-original-title',
                            'Cancel avatar'
                        ],
                        [
                            'data-toggle',
                            'tooltip'
                        ],
                        [
                            'title',
                            ''
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](33, 0, null, null, 0, 'i', [[
                        'class',
                        'ki ki-bold-close icon-xs text-muted'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, U)),
                    t['ɵdid'](35, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](36, 0, null, 0, 2, 'span', [[
                        'class',
                        'form-text text-muted'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](37, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵand'](0, [[
                        'erravatar',
                        2
                    ]], 0, 0, null, B)),
                    (l()(), t['ɵeld'](40, 0, null, null, 18, 'nz-form-item', [[
                        'class',
                        'row'
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
                        ],
                        [
                            2,
                            'ant-form-item-has-success',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-warning',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-error',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-is-validating',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-feedback',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-with-help',
                            null
                        ]
                    ], null, null, w.e, w.b)),
                    t['ɵdid'](41, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], null, null),
                    t['ɵdid'](42, 180224, null, 0, I.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](43, 0, null, 0, 3, 'label', [[
                        'class',
                        'col-xl-3 col-lg-3 col-form-label'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](44, null, [
                        '',
                        ' '
                    ])),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](47, 0, null, 0, 11, 'div', [[
                        'class',
                        'col-lg-9 col-xl-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](48, 0, null, null, 10, 'nz-form-control', [[
                        'nzHasFeedback',
                        ''
                    ]], [[
                        4,
                        'flex',
                        null
                    ]], null, null, w.d, w.a)),
                    t['ɵdid'](49, 4931584, null, 0, E.a, [
                        t.ElementRef,
                        [
                            2,
                            E.c
                        ],
                        t.Renderer2
                    ], null, null),
                    t['ɵdid'](50, 1818624, null, 1, I.a, [
                        t.ElementRef,
                        [
                            2,
                            I.c
                        ],
                        t.ChangeDetectorRef,
                        t.Renderer2,
                        k.e,
                        [
                            2,
                            I.b
                        ]
                    ], {
                        nzErrorTip: [
                            0,
                            'nzErrorTip'
                        ],
                        nzHasFeedback: [
                            1,
                            'nzHasFeedback'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 2, { defaultValidateControl: 0 }),
                    (l()(), t['ɵeld'](52, 0, null, 0, 5, 'input', [
                        [
                            'class',
                            'form-control form-control-lg form-control-solid'
                        ],
                        [
                            'formControlName',
                            'name'
                        ],
                        [
                            'type',
                            'text'
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
                        var u = !0;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 53)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 53).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 53)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 53)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](53, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.e]),
                    t['ɵdid'](55, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
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
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, [[
                        2,
                        4
                    ]], L.p, null, [L.i]),
                    t['ɵdid'](57, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    (l()(), t['ɵand'](0, [[
                        'errname',
                        2
                    ]], 0, 0, null, H)),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, $)),
                    t['ɵdid'](60, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵeld'](62, 0, null, null, 17, 'nz-form-item', [[
                        'class',
                        'row'
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
                        ],
                        [
                            2,
                            'ant-form-item-has-success',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-warning',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-error',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-is-validating',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-feedback',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-with-help',
                            null
                        ]
                    ], null, null, w.e, w.b)),
                    t['ɵdid'](63, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], null, null),
                    t['ɵdid'](64, 180224, null, 0, I.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](65, 0, null, 0, 2, 'label', [[
                        'class',
                        'col-xl-3 col-lg-3 col-form-label'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](66, null, [
                        '',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](68, 0, null, 0, 11, 'div', [[
                        'class',
                        'col-lg-9 col-xl-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](69, 0, null, null, 10, 'nz-form-control', [[
                        'nzHasFeedback',
                        ''
                    ]], [[
                        4,
                        'flex',
                        null
                    ]], null, null, w.d, w.a)),
                    t['ɵdid'](70, 4931584, null, 0, E.a, [
                        t.ElementRef,
                        [
                            2,
                            E.c
                        ],
                        t.Renderer2
                    ], null, null),
                    t['ɵdid'](71, 1818624, null, 1, I.a, [
                        t.ElementRef,
                        [
                            2,
                            I.c
                        ],
                        t.ChangeDetectorRef,
                        t.Renderer2,
                        k.e,
                        [
                            2,
                            I.b
                        ]
                    ], {
                        nzErrorTip: [
                            0,
                            'nzErrorTip'
                        ],
                        nzHasFeedback: [
                            1,
                            'nzHasFeedback'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 4, { defaultValidateControl: 0 }),
                    (l()(), t['ɵeld'](73, 0, null, 0, 5, 'input', [
                        [
                            'class',
                            'form-control form-control-lg form-control-solid text-uppercase'
                        ],
                        [
                            'formControlName',
                            'rfc'
                        ],
                        [
                            'type',
                            'text'
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
                        var u = !0;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 74)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 74).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 74)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 74)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](74, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.e]),
                    t['ɵdid'](76, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
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
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, [[
                        4,
                        4
                    ]], L.p, null, [L.i]),
                    t['ɵdid'](78, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    (l()(), t['ɵand'](0, [[
                        'errRFC',
                        2
                    ]], 0, 0, null, Z)),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, X)),
                    t['ɵdid'](81, 16384, null, 0, a.NgIf, [
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
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform(e.isLoading$))), l(n, 5, 0, e.form), l(n, 11, 0), l(n, 18, 0), l(n, 19, 0, t['ɵnov'](n, 39), ''), l(n, 29, 0, 'avatar'), l(n, 35, 0, e.form.controls.avatar.value), l(n, 41, 0), l(n, 49, 0), l(n, 50, 0, t['ɵnov'](n, 58), ''), l(n, 55, 0, 'name'), l(n, 60, 0, 1 == t['ɵunv'](n, 60, 0, t['ɵnov'](n, 61).transform(e.user$)).people_type), l(n, 63, 0), l(n, 70, 0), l(n, 71, 0, t['ɵnov'](n, 79), ''), l(n, 76, 0, 'rfc'), l(n, 81, 0, 0 == t['ɵunv'](n, 81, 0, t['ɵnov'](n, 82).transform(e.user$)).people_type);
                }, function (l, n) {
                    var e = n.component;
                    l(n, 3, 0, t['ɵnov'](n, 7).ngClassUntouched, t['ɵnov'](n, 7).ngClassTouched, t['ɵnov'](n, 7).ngClassPristine, t['ɵnov'](n, 7).ngClassDirty, t['ɵnov'](n, 7).ngClassValid, t['ɵnov'](n, 7).ngClassInvalid, t['ɵnov'](n, 7).ngClassPending, 'horizontal' === t['ɵnov'](n, 8).nzLayout, 'vertical' === t['ɵnov'](n, 8).nzLayout, 'inline' === t['ɵnov'](n, 8).nzLayout), l(n, 10, 1, [
                        'top' === t['ɵnov'](n, 11).nzAlign,
                        'middle' === t['ɵnov'](n, 11).nzAlign,
                        'bottom' === t['ɵnov'](n, 11).nzAlign,
                        'start' === t['ɵnov'](n, 11).nzJustify,
                        'end' === t['ɵnov'](n, 11).nzJustify,
                        'center' === t['ɵnov'](n, 11).nzJustify,
                        'space-around' === t['ɵnov'](n, 11).nzJustify,
                        'space-between' === t['ɵnov'](n, 11).nzJustify,
                        'success' === t['ɵnov'](n, 12).status,
                        'warning' === t['ɵnov'](n, 12).status,
                        'error' === t['ɵnov'](n, 12).status,
                        'validating' === t['ɵnov'](n, 12).status,
                        t['ɵnov'](n, 12).hasFeedback && t['ɵnov'](n, 12).status,
                        t['ɵnov'](n, 12).withHelpClass
                    ]), l(n, 14, 0, t['ɵunv'](n, 14, 0, t['ɵnov'](n, 15).transform('FORM.LABELS.PROFILE_IMAGE'))), l(n, 17, 0, t['ɵnov'](n, 18).hostFlexStyle), l(n, 21, 0, !e.form.controls.avatar.value, 'url(./assets/media/users/blank.png)'), l(n, 22, 0, e.imageSrc), l(n, 26, 0, t['ɵnov'](n, 31).ngClassUntouched, t['ɵnov'](n, 31).ngClassTouched, t['ɵnov'](n, 31).ngClassPristine, t['ɵnov'](n, 31).ngClassDirty, t['ɵnov'](n, 31).ngClassValid, t['ɵnov'](n, 31).ngClassInvalid, t['ɵnov'](n, 31).ngClassPending), l(n, 37, 0, t['ɵunv'](n, 37, 0, t['ɵnov'](n, 38).transform('FORM.LABELS.ALLOWED_FILES'))), l(n, 40, 1, [
                        'top' === t['ɵnov'](n, 41).nzAlign,
                        'middle' === t['ɵnov'](n, 41).nzAlign,
                        'bottom' === t['ɵnov'](n, 41).nzAlign,
                        'start' === t['ɵnov'](n, 41).nzJustify,
                        'end' === t['ɵnov'](n, 41).nzJustify,
                        'center' === t['ɵnov'](n, 41).nzJustify,
                        'space-around' === t['ɵnov'](n, 41).nzJustify,
                        'space-between' === t['ɵnov'](n, 41).nzJustify,
                        'success' === t['ɵnov'](n, 42).status,
                        'warning' === t['ɵnov'](n, 42).status,
                        'error' === t['ɵnov'](n, 42).status,
                        'validating' === t['ɵnov'](n, 42).status,
                        t['ɵnov'](n, 42).hasFeedback && t['ɵnov'](n, 42).status,
                        t['ɵnov'](n, 42).withHelpClass
                    ]), l(n, 44, 0, 1 == t['ɵunv'](n, 44, 0, t['ɵnov'](n, 45).transform(e.user$)).people_type ? 'Nombre (s)' : t['ɵunv'](n, 44, 0, t['ɵnov'](n, 46).transform('FORM.LABELS.COMPANY_NAME'))), l(n, 48, 0, t['ɵnov'](n, 49).hostFlexStyle), l(n, 52, 0, t['ɵnov'](n, 57).ngClassUntouched, t['ɵnov'](n, 57).ngClassTouched, t['ɵnov'](n, 57).ngClassPristine, t['ɵnov'](n, 57).ngClassDirty, t['ɵnov'](n, 57).ngClassValid, t['ɵnov'](n, 57).ngClassInvalid, t['ɵnov'](n, 57).ngClassPending), l(n, 62, 1, [
                        'top' === t['ɵnov'](n, 63).nzAlign,
                        'middle' === t['ɵnov'](n, 63).nzAlign,
                        'bottom' === t['ɵnov'](n, 63).nzAlign,
                        'start' === t['ɵnov'](n, 63).nzJustify,
                        'end' === t['ɵnov'](n, 63).nzJustify,
                        'center' === t['ɵnov'](n, 63).nzJustify,
                        'space-around' === t['ɵnov'](n, 63).nzJustify,
                        'space-between' === t['ɵnov'](n, 63).nzJustify,
                        'success' === t['ɵnov'](n, 64).status,
                        'warning' === t['ɵnov'](n, 64).status,
                        'error' === t['ɵnov'](n, 64).status,
                        'validating' === t['ɵnov'](n, 64).status,
                        t['ɵnov'](n, 64).hasFeedback && t['ɵnov'](n, 64).status,
                        t['ɵnov'](n, 64).withHelpClass
                    ]), l(n, 66, 0, t['ɵunv'](n, 66, 0, t['ɵnov'](n, 67).transform('FORM.LABELS.RFC'))), l(n, 69, 0, t['ɵnov'](n, 70).hostFlexStyle), l(n, 73, 0, t['ɵnov'](n, 78).ngClassUntouched, t['ɵnov'](n, 78).ngClassTouched, t['ɵnov'](n, 78).ngClassPristine, t['ɵnov'](n, 78).ngClassDirty, t['ɵnov'](n, 78).ngClassValid, t['ɵnov'](n, 78).ngClassInvalid, t['ɵnov'](n, 78).ngClassPending);
                });
            }
            var Y = e('mrSG'), Q = e('jU+Z');
            class ll {
                constructor(l) {
                    this.profileInfo = l, this.type = Q.a.UPDATE_INFO;
                }
            }
            class nl {
                constructor(l) {
                    this.email = l, this.type = Q.a.UPDATE__EMAIL;
                }
            }
            class el {
                constructor(l) {
                    this.profileInfo = l, this.type = Q.a.SET_INFO_PROFILE;
                }
            }
            class tl {
                constructor(l) {
                    this.email = l, this.type = Q.a.SET_UPDATE_EMAIL;
                }
            }
            class ul {
                constructor(l) {
                    this.isLoading = l, this.type = Q.a.SET_LOADING_PROFILE_FORM;
                }
            }
            class ol {
                constructor(l, n) {
                    this.store = l, this._notification = n;
                }
                get form() {
                    return this.profileForm ? this.profileForm.form : null;
                }
                ngOnInit() {
                    const currentHostName = window.location.hostname
                    const appv2HostName = currentHostName == 'centirev.centinela.app' ? 'https://appv2-centirev.centinela.app' : 'https://appv2.centinela.app'
                    window.location.href = `${appv2HostName}/redirect?token=${JSON.parse(localStorage.getItem("token")).token}&to=settings/profile`
                }
                ngAfterViewInit() {
                }
                changeInfo() {
                    return Object(Y.a)(this, void 0, void 0, function* () {
                        if (this.form.valid) {
                            let l = Object.assign(Object.assign({}, this.form.value), {
                                file: this.profileForm.actualFile,
                                type: this.profileForm.userType
                            });
                            this.store.dispatch(new ll(l));
                        }
                    });
                }
            }
            var il = e('WueC'), al = t['ɵcrt']({
                encapsulation: 0,
                styles: [['']],
                data: {}
            });
            function rl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, 'div', [[
                        'class',
                        'card-toolbar'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 2, 'button', [
                        [
                            'class',
                            'btn btn-success mr-2'
                        ],
                        [
                            'type',
                            'reset'
                        ]
                    ], [[
                        8,
                        'disabled',
                        0
                    ]], [[
                        null,
                        'click'
                    ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.changeInfo() && t), t;
                    }, null, null)),
                    (l()(), t['ɵted'](2, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, !n.component.form.valid), l(n, 2, 0, t['ɵunv'](n, 2, 0, t['ɵnov'](n, 3).transform('FORM.BUTTOMS.SAVE')));
                });
            }
            function sl(l) {
                return t['ɵvid'](0, [
                    t['ɵqud'](671088640, 1, { profileForm: 0 }),
                    (l()(), t['ɵeld'](1, 0, null, null, 13, 'div', [[
                        'class',
                        'card card-custom'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 9, 'div', [[
                        'class',
                        'card-header py-3'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 6, 'div', [[
                        'class',
                        'card-title align-items-start flex-column'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](4, 0, null, null, 2, 'h3', [[
                        'class',
                        'card-label font-weight-bolder text-dark'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](5, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](7, 0, null, null, 2, 'span', [[
                        'class',
                        'text-muted font-weight-bold font-size-sm mt-1'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](8, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, rl)),
                    t['ɵdid'](11, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](12, 0, null, null, 2, 'app-profile-form', [], null, null, null, W, V)),
                    t['ɵprd'](512, null, _.a, x, [
                        L.f,
                        F.a
                    ]),
                    t['ɵdid'](14, 4308992, [[
                        1,
                        4
                    ]], 0, M, [
                        v.o,
                        _.a,
                        t.ChangeDetectorRef
                    ], null, null)
                ], function (l, n) {
                    var e = n.component;
                    l(n, 11, 0, null != e.form && null != e.form), l(n, 14, 0);
                }, function (l, n) {
                    l(n, 5, 0, t['ɵunv'](n, 5, 0, t['ɵnov'](n, 6).transform('PROFILE.TITLES.INFO_USER'))), l(n, 8, 0, t['ɵunv'](n, 8, 0, t['ɵnov'](n, 9).transform('PROFILE.SUB_TITLES.INFO_USER')));
                });
            }
            function dl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'profile', [], null, null, null, sl, al)),
                    t['ɵdid'](1, 4308992, null, 0, ol, [
                        v.o,
                        il.a
                    ], null, null)
                ], function (l, n) {
                    l(n, 1, 0);
                }, null);
            }
            var cl = t['ɵccf']('profile', ol, dl, {}, {}, []), ml = e('T9Es'), vl = e('H4hL'), pl = e('W4B1');
            class fl extends A.a {
                constructor(l, n) {
                    super(l, n), this._formBuilder = l, this._validate = n, this.setEntityForm = this.formBuilder.group({
                        oldPassword: [
                            null,
                            [
                                L.x.required,
                                N.a.patternValidator(/\d/, { hasNumber: !0 }),
                                N.a.patternValidator(/[A-Z]/, { hasCapitalCase: !0 }),
                                N.a.patternValidator(/[a-z]/, { hasSmallCase: !0 }),
                                L.x.minLength(8),
                                L.x.maxLength(16)
                            ]
                        ],
                        password: [
                            null,
                            L.x.compose([
                                L.x.required,
                                N.a.patternValidator(/\d/, { hasNumber: !0 }),
                                N.a.patternValidator(/[A-Z]/, { hasCapitalCase: !0 }),
                                N.a.patternValidator(/[a-z]/, { hasSmallCase: !0 }),
                                L.x.minLength(8),
                                L.x.maxLength(16)
                            ])
                        ],
                        password_confirmation: [
                            null,
                            L.x.compose([L.x.required])
                        ]
                    }, { validator: N.a.passwordMatchValidator });
                }
            }
            class gl {
                constructor(l, n) {
                    this._validations = l, this.store = n, this.formChange = new t.EventEmitter(), this.changeSelectDocument = new t.EventEmitter(), this.isVisiblePassword = !1, this.isLoading$ = n.select(l => l.settingsModule.passFormState.isLoading);
                }
                ngAfterViewInit() {
                    this.form || (this.form = this._validations.entityForm(), this.formChange.emit(this.form));
                }
                ngOnInit() {
                    this.form || (this.form = this._validations.entityForm(), this.formChange.emit(this.form));
                }
                onChangeDocument(l) {
                    this.changeSelectDocument.emit(l);
                }
            }
            var hl = t['ɵcrt']({
                encapsulation: 0,
                styles: [['']],
                data: {}
            });
            function bl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, null, null, null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        ' ',
                        ' '
                    ]))
                ], null, function (l, n) {
                    l(n, 1, 0, n.component._validations.message().code);
                });
            }
            function Cl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵand'](16777216, null, null, 1, null, bl)),
                    t['ɵdid'](1, 16384, null, 0, a.NgIf, [
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
                    l(n, 1, 0, n.component._validations.validate('oldPassword'));
                }, null);
            }
            function Rl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, null, null, null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        ' ',
                        ' '
                    ]))
                ], null, function (l, n) {
                    l(n, 1, 0, n.component._validations.message().code);
                });
            }
            function wl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 83, 'ce-layout-dashboard', [], null, null, null, D.b, D.a)),
                    t['ɵdid'](1, 638976, null, 0, O.a, [t.ChangeDetectorRef], {
                        isLoading: [
                            0,
                            'isLoading'
                        ]
                    }, null),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵeld'](3, 0, null, 0, 80, 'form', [
                        [
                            'class',
                            'form card-body'
                        ],
                        [
                            'content',
                            ''
                        ],
                        [
                            'novalidate',
                            ''
                        ],
                        [
                            'nz-form',
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
                        ],
                        [
                            2,
                            'ant-form-horizontal',
                            null
                        ],
                        [
                            2,
                            'ant-form-vertical',
                            null
                        ],
                        [
                            2,
                            'ant-form-inline',
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
                        return 'submit' === n && (u = !1 !== t['ɵnov'](l, 5).onSubmit(e) && u), 'reset' === n && (u = !1 !== t['ɵnov'](l, 5).onReset() && u), u;
                    }, null, null)),
                    t['ɵdid'](4, 16384, null, 0, L.C, [], null, null),
                    t['ɵdid'](5, 540672, null, 0, L.k, [
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
                    t['ɵprd'](2048, null, L.d, null, [L.k]),
                    t['ɵdid'](7, 16384, null, 0, L.r, [[
                        6,
                        L.d
                    ]], null, null),
                    t['ɵdid'](8, 671744, null, 0, I.b, [
                        T.a,
                        t.ElementRef,
                        t.Renderer2
                    ], null, null),
                    (l()(), t['ɵeld'](9, 0, null, null, 13, 'nz-form-item', [[
                        'class',
                        'row'
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
                        ],
                        [
                            2,
                            'ant-form-item-has-success',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-warning',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-error',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-is-validating',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-feedback',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-with-help',
                            null
                        ]
                    ], null, null, w.e, w.b)),
                    t['ɵdid'](10, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], null, null),
                    t['ɵdid'](11, 180224, null, 0, I.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](12, 0, null, 0, 2, 'label', [[
                        'class',
                        'col-xl-3 col-lg-3 col-form-label'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](13, null, [
                        ' ',
                        ' * '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](15, 0, null, 0, 7, 'div', [[
                        'class',
                        'col-lg-9 col-xl-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](16, 0, null, null, 6, 'nz-form-control', [[
                        'nzHasFeedback',
                        ''
                    ]], [[
                        4,
                        'flex',
                        null
                    ]], null, null, w.d, w.a)),
                    t['ɵdid'](17, 4931584, null, 0, E.a, [
                        t.ElementRef,
                        [
                            2,
                            E.c
                        ],
                        t.Renderer2
                    ], null, null),
                    t['ɵdid'](18, 1818624, null, 1, I.a, [
                        t.ElementRef,
                        [
                            2,
                            I.c
                        ],
                        t.ChangeDetectorRef,
                        t.Renderer2,
                        k.e,
                        [
                            2,
                            I.b
                        ]
                    ], {
                        nzErrorTip: [
                            0,
                            'nzErrorTip'
                        ],
                        nzHasFeedback: [
                            1,
                            'nzHasFeedback'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 1, { defaultValidateControl: 0 }),
                    (l()(), t['ɵeld'](20, 0, null, 0, 1, 'ce-password', [[
                        'formName',
                        'oldPassword'
                    ]], null, null, null, ml.b, ml.a)),
                    t['ɵdid'](21, 114688, null, 0, vl.a, [], {
                        formName: [
                            0,
                            'formName'
                        ],
                        form: [
                            1,
                            'form'
                        ]
                    }, null),
                    (l()(), t['ɵand'](0, [[
                        'errOldPassword',
                        2
                    ]], 0, 0, null, Cl)),
                    (l()(), t['ɵeld'](23, 0, null, null, 42, 'nz-form-item', [[
                        'class',
                        'row'
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
                        ],
                        [
                            2,
                            'ant-form-item-has-success',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-warning',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-error',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-is-validating',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-feedback',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-with-help',
                            null
                        ]
                    ], null, null, w.e, w.b)),
                    t['ɵdid'](24, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], null, null),
                    t['ɵdid'](25, 180224, null, 0, I.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](26, 0, null, 0, 7, 'label', [[
                        'class',
                        'col-xl-3 col-lg-3 col-form-label'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](27, null, [
                        ' ',
                        ' * '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](29, 16777216, null, null, 4, 'i', [
                        [
                            'class',
                            'ml-2'
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
                    t['ɵdid'](30, 2703360, null, 0, s.a, [
                        t.ElementRef,
                        s.d,
                        t.Renderer2,
                        [
                            2,
                            s.c
                        ]
                    ], {
                        nzType: [
                            0,
                            'nzType'
                        ]
                    }, null),
                    t['ɵdid'](31, 4866048, null, 0, pl.c, [
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
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    t['ɵdid'](33, 4734976, null, 0, d.a, [
                        t.ElementRef,
                        t.Renderer2
                    ], null, null),
                    (l()(), t['ɵeld'](34, 0, null, 0, 31, 'div', [[
                        'class',
                        'col-lg-9 col-xl-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](35, 0, null, null, 30, 'nz-form-control', [], [[
                        4,
                        'flex',
                        null
                    ]], null, null, w.d, w.a)),
                    t['ɵdid'](36, 4931584, null, 0, E.a, [
                        t.ElementRef,
                        [
                            2,
                            E.c
                        ],
                        t.Renderer2
                    ], null, null),
                    t['ɵdid'](37, 1818624, null, 1, I.a, [
                        t.ElementRef,
                        [
                            2,
                            I.c
                        ],
                        t.ChangeDetectorRef,
                        t.Renderer2,
                        k.e,
                        [
                            2,
                            I.b
                        ]
                    ], null, null),
                    t['ɵqud'](603979776, 2, { defaultValidateControl: 0 }),
                    (l()(), t['ɵeld'](39, 0, null, 0, 1, 'ce-password', [[
                        'formName',
                        'password'
                    ]], null, null, null, ml.b, ml.a)),
                    t['ɵdid'](40, 114688, null, 0, vl.a, [], {
                        formName: [
                            0,
                            'formName'
                        ],
                        form: [
                            1,
                            'form'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](41, 0, null, 0, 4, 'div', [], null, null, null, null, null)),
                    t['ɵdid'](42, 278528, null, 0, a.NgClass, [
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
                    (l()(), t['ɵeld'](43, 0, null, null, 1, 'i', [[
                        'class',
                        'material-icons'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](44, null, [
                        '',
                        ''
                    ])),
                    (l()(), t['ɵted'](-1, null, [' Utiliza al menos un número '])),
                    (l()(), t['ɵeld'](46, 0, null, 0, 4, 'div', [], null, null, null, null, null)),
                    t['ɵdid'](47, 278528, null, 0, a.NgClass, [
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
                    (l()(), t['ɵeld'](48, 0, null, null, 1, 'i', [[
                        'class',
                        'material-icons'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](49, null, [
                        '',
                        ''
                    ])),
                    (l()(), t['ɵted'](-1, null, [' Utiliza al menos una letra mayúscula '])),
                    (l()(), t['ɵeld'](51, 0, null, 0, 4, 'div', [], null, null, null, null, null)),
                    t['ɵdid'](52, 278528, null, 0, a.NgClass, [
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
                    (l()(), t['ɵeld'](53, 0, null, null, 1, 'i', [[
                        'class',
                        'material-icons'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](54, null, [
                        '',
                        ' '
                    ])),
                    (l()(), t['ɵted'](-1, null, [' Utiliza al menos una letra minúscula '])),
                    (l()(), t['ɵeld'](56, 0, null, 0, 4, 'div', [], null, null, null, null, null)),
                    t['ɵdid'](57, 278528, null, 0, a.NgClass, [
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
                    (l()(), t['ɵeld'](58, 0, null, null, 1, 'i', [[
                        'class',
                        'material-icons'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](59, null, [
                        '',
                        ''
                    ])),
                    (l()(), t['ɵted'](-1, null, [' Utiliza al menos 8 caracteres '])),
                    (l()(), t['ɵeld'](61, 0, null, 0, 4, 'div', [], null, null, null, null, null)),
                    t['ɵdid'](62, 278528, null, 0, a.NgClass, [
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
                    (l()(), t['ɵeld'](63, 0, null, null, 1, 'i', [[
                        'class',
                        'material-icons'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](64, null, [
                        '',
                        ''
                    ])),
                    (l()(), t['ɵted'](-1, null, [' Utiliza menos de 16 caracteres '])),
                    (l()(), t['ɵeld'](66, 0, null, null, 14, 'nz-form-item', [[
                        'class',
                        'row'
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
                        ],
                        [
                            2,
                            'ant-form-item-has-success',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-warning',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-error',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-is-validating',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-feedback',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-with-help',
                            null
                        ]
                    ], null, null, w.e, w.b)),
                    t['ɵdid'](67, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], null, null),
                    t['ɵdid'](68, 180224, null, 0, I.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](69, 0, null, 0, 2, 'label', [[
                        'class',
                        'col-xl-3 col-lg-3 col-form-label'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](70, null, [
                        ' ',
                        ' * '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](72, 0, null, 0, 8, 'div', [[
                        'class',
                        'col-lg-9 col-xl-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](73, 0, null, null, 7, 'nz-form-control', [[
                        'nzHasFeedback',
                        ''
                    ]], [[
                        4,
                        'flex',
                        null
                    ]], null, null, w.d, w.a)),
                    t['ɵdid'](74, 4931584, null, 0, E.a, [
                        t.ElementRef,
                        [
                            2,
                            E.c
                        ],
                        t.Renderer2
                    ], null, null),
                    t['ɵdid'](75, 1818624, null, 1, I.a, [
                        t.ElementRef,
                        [
                            2,
                            I.c
                        ],
                        t.ChangeDetectorRef,
                        t.Renderer2,
                        k.e,
                        [
                            2,
                            I.b
                        ]
                    ], {
                        nzHasFeedback: [
                            0,
                            'nzHasFeedback'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 3, { defaultValidateControl: 0 }),
                    (l()(), t['ɵeld'](77, 0, null, 0, 1, 'ce-password', [[
                        'formName',
                        'password_confirmation'
                    ]], null, null, null, ml.b, ml.a)),
                    t['ɵdid'](78, 114688, null, 0, vl.a, [], {
                        formName: [
                            0,
                            'formName'
                        ],
                        form: [
                            1,
                            'form'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, 0, 1, null, Rl)),
                    t['ɵdid'](80, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](81, 0, null, null, 2, 'p', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](82, null, [
                        '* ',
                        '.'
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform(e.isLoading$))), l(n, 5, 0, e.form), l(n, 10, 0), l(n, 17, 0), l(n, 18, 0, t['ɵnov'](n, 22), ''), l(n, 21, 0, 'oldPassword', e._validations.entityForm()), l(n, 24, 0), l(n, 30, 0, 'info-circle'), l(n, 31, 0, t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 31, 0, t['ɵnov'](n, 32).transform('GENERAL.INDICATIONS_PASS')), ''), ''), l(n, 36, 0), l(n, 37, 0), l(n, 40, 0, 'password', e._validations.entityForm()), l(n, 42, 0, e._validations.entityForm().controls.password.hasError('required') || e._validations.entityForm().controls.password.hasError('hasNumber') ? 'text-danger' : 'text-success'), l(n, 47, 0, e._validations.entityForm().controls.password.hasError('required') || e._validations.entityForm().controls.password.hasError('hasCapitalCase') ? 'text-danger' : 'text-success'), l(n, 52, 0, e._validations.entityForm().controls.password.hasError('required') || e._validations.entityForm().controls.password.hasError('hasSmallCase') ? 'text-danger' : 'text-success'), l(n, 57, 0, e._validations.entityForm().controls.password.hasError('required') || e._validations.entityForm().controls.password.hasError('minlength') ? 'text-danger' : 'text-success'), l(n, 62, 0, e._validations.entityForm().controls.password.hasError('required') || e._validations.entityForm().controls.password.hasError('minlength') ? 'text-danger' : 'text-success'), l(n, 67, 0), l(n, 74, 0), l(n, 75, 0, ''), l(n, 78, 0, 'password_confirmation', e._validations.entityForm()), l(n, 80, 0, e._validations.validate('password_confirmation'));
                }, function (l, n) {
                    var e = n.component;
                    l(n, 3, 0, t['ɵnov'](n, 7).ngClassUntouched, t['ɵnov'](n, 7).ngClassTouched, t['ɵnov'](n, 7).ngClassPristine, t['ɵnov'](n, 7).ngClassDirty, t['ɵnov'](n, 7).ngClassValid, t['ɵnov'](n, 7).ngClassInvalid, t['ɵnov'](n, 7).ngClassPending, 'horizontal' === t['ɵnov'](n, 8).nzLayout, 'vertical' === t['ɵnov'](n, 8).nzLayout, 'inline' === t['ɵnov'](n, 8).nzLayout), l(n, 9, 1, [
                        'top' === t['ɵnov'](n, 10).nzAlign,
                        'middle' === t['ɵnov'](n, 10).nzAlign,
                        'bottom' === t['ɵnov'](n, 10).nzAlign,
                        'start' === t['ɵnov'](n, 10).nzJustify,
                        'end' === t['ɵnov'](n, 10).nzJustify,
                        'center' === t['ɵnov'](n, 10).nzJustify,
                        'space-around' === t['ɵnov'](n, 10).nzJustify,
                        'space-between' === t['ɵnov'](n, 10).nzJustify,
                        'success' === t['ɵnov'](n, 11).status,
                        'warning' === t['ɵnov'](n, 11).status,
                        'error' === t['ɵnov'](n, 11).status,
                        'validating' === t['ɵnov'](n, 11).status,
                        t['ɵnov'](n, 11).hasFeedback && t['ɵnov'](n, 11).status,
                        t['ɵnov'](n, 11).withHelpClass
                    ]), l(n, 13, 0, t['ɵunv'](n, 13, 0, t['ɵnov'](n, 14).transform('FORM.LABELS.NATIVE_PASS'))), l(n, 16, 0, t['ɵnov'](n, 17).hostFlexStyle), l(n, 23, 1, [
                        'top' === t['ɵnov'](n, 24).nzAlign,
                        'middle' === t['ɵnov'](n, 24).nzAlign,
                        'bottom' === t['ɵnov'](n, 24).nzAlign,
                        'start' === t['ɵnov'](n, 24).nzJustify,
                        'end' === t['ɵnov'](n, 24).nzJustify,
                        'center' === t['ɵnov'](n, 24).nzJustify,
                        'space-around' === t['ɵnov'](n, 24).nzJustify,
                        'space-between' === t['ɵnov'](n, 24).nzJustify,
                        'success' === t['ɵnov'](n, 25).status,
                        'warning' === t['ɵnov'](n, 25).status,
                        'error' === t['ɵnov'](n, 25).status,
                        'validating' === t['ɵnov'](n, 25).status,
                        t['ɵnov'](n, 25).hasFeedback && t['ɵnov'](n, 25).status,
                        t['ɵnov'](n, 25).withHelpClass
                    ]), l(n, 27, 0, t['ɵunv'](n, 27, 0, t['ɵnov'](n, 28).transform('FORM.LABELS.NEW_PASS'))), l(n, 29, 0, !0, t['ɵnov'](n, 31).visible), l(n, 35, 0, t['ɵnov'](n, 36).hostFlexStyle), l(n, 44, 0, e._validations.entityForm().controls.password.hasError('required') || e._validations.entityForm().controls.password.hasError('hasNumber') ? 'cancel' : 'check_circle'), l(n, 49, 0, e._validations.entityForm().controls.password.hasError('required') || e._validations.entityForm().controls.password.hasError('hasCapitalCase') ? 'cancel' : 'check_circle'), l(n, 54, 0, e._validations.entityForm().controls.password.hasError('required') || e._validations.entityForm().controls.password.hasError('hasSmallCase') ? 'cancel' : 'check_circle'), l(n, 59, 0, e._validations.entityForm().controls.password.hasError('required') || e._validations.entityForm().controls.password.hasError('minlength') ? 'cancel' : 'check_circle'), l(n, 64, 0, e._validations.entityForm().controls.password.hasError('required') || e._validations.entityForm().controls.password.hasError('maxLength') ? 'cancel' : 'check_circle'), l(n, 66, 1, [
                        'top' === t['ɵnov'](n, 67).nzAlign,
                        'middle' === t['ɵnov'](n, 67).nzAlign,
                        'bottom' === t['ɵnov'](n, 67).nzAlign,
                        'start' === t['ɵnov'](n, 67).nzJustify,
                        'end' === t['ɵnov'](n, 67).nzJustify,
                        'center' === t['ɵnov'](n, 67).nzJustify,
                        'space-around' === t['ɵnov'](n, 67).nzJustify,
                        'space-between' === t['ɵnov'](n, 67).nzJustify,
                        'success' === t['ɵnov'](n, 68).status,
                        'warning' === t['ɵnov'](n, 68).status,
                        'error' === t['ɵnov'](n, 68).status,
                        'validating' === t['ɵnov'](n, 68).status,
                        t['ɵnov'](n, 68).hasFeedback && t['ɵnov'](n, 68).status,
                        t['ɵnov'](n, 68).withHelpClass
                    ]), l(n, 70, 0, t['ɵunv'](n, 70, 0, t['ɵnov'](n, 71).transform('FORM.LABELS.CONFIRM_PASS'))), l(n, 73, 0, t['ɵnov'](n, 74).hostFlexStyle), l(n, 82, 0, t['ɵunv'](n, 82, 0, t['ɵnov'](n, 83).transform('GLOBAL.FORM')));
                });
            }
            class El {
                constructor(l) {
                    this.request = l, this.type = Q.a.UPDATE_PASS;
                }
            }
            class yl {
                constructor(l) {
                    this.isLoading = l, this.type = Q.a.SET_LOADING_PASS_FORM;
                }
            }
            class zl {
                constructor(l, n) {
                    this.store = l, this._notification = n;
                }
                ngOnInit() {
                    const currentHostName = window.location.hostname
                    const appv2HostName = currentHostName == 'centirev.centinela.app' ? 'https://appv2-centirev.centinela.app' : 'https://appv2.centinela.app'
                    window.location.href = `${appv2HostName}/redirect?token=${JSON.parse(localStorage.getItem("token")).token}&to=settings/change-password`
                }
                changePassword() {
                    if (this.form.valid) {
                        let l = {
                            oldPasssword: this.form.get('oldPassword').value,
                            newPassword: this.form.get('password_confirmation').value
                        };
                        this.store.dispatch(new El(l));
                    } else
                        this._notification.error(['Por favor de llenar todos los campos marcados como obligatorios (*)']);
                }
            }
            var Sl = t['ɵcrt']({
                encapsulation: 0,
                styles: [['']],
                data: {}
            });
            function Il(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 15, 'div', [[
                        'class',
                        'card card-custom'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 11, 'div', [[
                        'class',
                        'card-header py-3'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 6, 'div', [[
                        'class',
                        'card-title align-items-start flex-column'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 2, 'h3', [[
                        'class',
                        'card-label font-weight-bolder text-dark'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](4, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](6, 0, null, null, 2, 'span', [[
                        'class',
                        'text-muted font-weight-bold font-size-sm mt-1'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](7, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](9, 0, null, null, 3, 'div', [[
                        'class',
                        'card-toolbar'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](10, 0, null, null, 2, 'button', [
                        [
                            'class',
                            'btn btn-success mr-2'
                        ],
                        [
                            'type',
                            'reset'
                        ]
                    ], null, [[
                        null,
                        'click'
                    ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.changePassword() && t), t;
                    }, null, null)),
                    (l()(), t['ɵted'](11, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](13, 0, null, null, 2, 'app-change-password-form', [], null, [[
                        null,
                        'formChange'
                    ]], function (l, n, e) {
                        var t = !0;
                        return 'formChange' === n && (t = !1 !== (l.component.form = e) && t), t;
                    }, wl, hl)),
                    t['ɵprd'](512, null, _.a, fl, [
                        L.f,
                        F.a
                    ]),
                    t['ɵdid'](15, 4308992, null, 0, gl, [
                        _.a,
                        v.o
                    ], {
                        form: [
                            0,
                            'form'
                        ]
                    }, { formChange: 'formChange' })
                ], function (l, n) {
                    l(n, 15, 0, n.component.form);
                }, function (l, n) {
                    l(n, 4, 0, t['ɵunv'](n, 4, 0, t['ɵnov'](n, 5).transform('PROFILE.TITLES.CHANGE_PASS'))), l(n, 7, 0, t['ɵunv'](n, 7, 0, t['ɵnov'](n, 8).transform('PROFILE.SUB_TITLES.CHANGE_PASS'))), l(n, 11, 0, t['ɵunv'](n, 11, 0, t['ɵnov'](n, 12).transform('FORM.BUTTOMS.SAVE')));
                });
            }
            function kl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'change-password', [], null, null, null, Il, Sl)),
                    t['ɵdid'](1, 114688, null, 0, zl, [
                        v.o,
                        il.a
                    ], null, null)
                ], function (l, n) {
                    l(n, 1, 0);
                }, null);
            }
            var Ll = t['ɵccf']('change-password', zl, kl, {}, {}, []), Dl = e('G0yt'), Ol = e('px0D'), Tl = e('7FkJ'), _l = e('jTf7'), Al = e('YEUz'), xl = e('Wdw0');
            class Fl extends xl.a {
                constructor(l, n, e) {
                    super(l, n, e), this.setEntityForm = this.formBuilder.group({
                        name: [
                            '',
                            [L.x.required]
                        ],
                        email: [
                            '',
                            [L.x.required]
                        ]
                    }), this.addAditionalControls();
                }
                addAditionalControls() {
                    this.form.addControl('type', new L.g(null, L.x.required));
                }
            }
            var Nl = e('34+v'), Pl = e('1G5W'), Ml = function (l) {
                return l[l.reading = 1] = 'reading', l[l.documentCreator = 2] = 'documentCreator', l;
            }({});
            const Vl = new Map([
                [
                    Ml.reading,
                    'USER.PERFIL.TYPES.READING'
                ],
                [
                    Ml.documentCreator,
                    'USER.PERFIL.TYPES.DOCUMENTCREATOR'
                ]
            ]);
            var Ul = function (l) {
                return l[l.new = 1] = 'new', l[l.edit = 2] = 'edit', l[l.view = 3] = 'view', l[l.delete = 4] = 'delete', l;
            }({});
            new Map([
                [
                    Ul.new,
                    'FORM.MODES.NEW'
                ],
                [
                    Ul.edit,
                    'FORM.MODES.EDIT'
                ],
                [
                    Ul.view,
                    'FORM.MODES.VIEW'
                ],
                [
                    Ul.delete,
                    'FORM.MODES.DELETE'
                ]
            ]);
            var jl = e('PqYM'), Bl = e('3Een'), Jl = function (l) {
                return l[l.EntitiesOnly = 0] = 'EntitiesOnly', l[l.Both = 1] = 'Both', l[l.None = 2] = 'None', l;
            }({});
            function Hl(l) {
                return function (n, e) {
                    const t = {
                        ids: [...e.ids],
                        entities: Object.assign({}, e.entities)
                    }, u = l(n, t);
                    return u === Jl.Both ? Object.assign({}, e, t) : u === Jl.EntitiesOnly ? Object.assign(Object.assign({}, e), { entities: t.entities }) : e;
                };
            }
            function Gl(l, n) {
                const e = n(l);
                return Object(t.isDevMode)() && void 0 === e && console.warn('@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.', 'You should probably provide your own `selectId` implementation.', 'The entity that was passed:', l, 'The `selectId` implementation:', n.toString()), e;
            }
            function ql(l) {
                function n(n, e) {
                    const t = Gl(n, l);
                    return t in e.entities ? Jl.None : (e.ids.push(t), e.entities[t] = n, Jl.Both);
                }
                function e(l, e) {
                    let t = !1;
                    for (const u of l)
                        t = n(u, e) !== Jl.None || t;
                    return t ? Jl.Both : Jl.None;
                }
                function t(l, n) {
                    const e = (l instanceof Array ? l : n.ids.filter(e => l(n.entities[e]))).filter(l => l in n.entities).map(l => delete n.entities[l]).length > 0;
                    return e && (n.ids = n.ids.filter(l => l in n.entities)), e ? Jl.Both : Jl.None;
                }
                function u(l, n) {
                    return o([l], n);
                }
                function o(n, e) {
                    const t = {};
                    return (n = n.filter(l => l.id in e.entities)).length > 0 ? n.filter(n => function (n, e, t) {
                        const u = Object.assign({}, t.entities[e.id], e.changes), o = Gl(u, l), i = o !== e.id;
                        return i && (n[e.id] = o, delete t.entities[e.id]), t.entities[o] = u, i;
                    }(t, n, e)).length > 0 ? (e.ids = e.ids.map(l => t[l] || l), Jl.Both) : Jl.EntitiesOnly : Jl.None;
                }
                function i(n, t) {
                    const u = [], i = [];
                    for (const e of n) {
                        const n = Gl(e, l);
                        n in t.entities ? i.push({
                            id: n,
                            changes: e
                        }) : u.push(e);
                    }
                    const a = o(i, t), r = e(u, t);
                    switch (!0) {
                        case r === Jl.None && a === Jl.None:
                            return Jl.None;
                        case r === Jl.Both || a === Jl.Both:
                            return Jl.Both;
                        default:
                            return Jl.EntitiesOnly;
                    }
                }
                return {
                    removeAll: function (l) {
                        return Object.assign({}, l, {
                            ids: [],
                            entities: {}
                        });
                    },
                    addOne: Hl(n),
                    addMany: Hl(e),
                    setAll: Hl(function (l, n) {
                        return n.ids = [], n.entities = {}, e(l, n), Jl.Both;
                    }),
                    setOne: Hl(function (n, e) {
                        const t = Gl(n, l);
                        return t in e.entities ? (e.entities[t] = n, Jl.EntitiesOnly) : (e.ids.push(t), e.entities[t] = n, Jl.Both);
                    }),
                    updateOne: Hl(u),
                    updateMany: Hl(o),
                    upsertOne: Hl(function (l, n) {
                        return i([l], n);
                    }),
                    upsertMany: Hl(i),
                    removeOne: Hl(function (l, n) {
                        return t([l], n);
                    }),
                    removeMany: Hl(t),
                    map: Hl(function (l, n) {
                        return o(n.ids.reduce((e, t) => {
                            const u = l(n.entities[t]);
                            return u !== n.entities[t] && e.push({
                                id: t,
                                changes: u
                            }), e;
                        }, []).filter(({ id: l }) => l in n.entities), n);
                    }),
                    mapOne: Hl(function ({
                        map: l,
                        id: n
                    }, e) {
                        const t = e.entities[n];
                        return t ? u({
                            id: n,
                            changes: l(t)
                        }, e) : Jl.None;
                    })
                };
            }
            var $l = e('cxbk');
            const Kl = function (l = {}) {
                const {
                    selectId: n,
                    sortComparer: e
                } = Object.assign({
                    sortComparer: !1,
                    selectId: l => l.id
                }, l), t = {
                    getInitialState: function (l = {}) {
                        return Object.assign({
                            ids: [],
                            entities: {}
                        }, l);
                    }
                }, u = {
                    getSelectors: function (l) {
                        const n = l => l.ids, e = l => l.entities, t = Object(v.z)(n, e, (l, n) => l.map(l => n[l])), u = Object(v.z)(n, l => l.length);
                        return l ? {
                            selectIds: Object(v.z)(l, n),
                            selectEntities: Object(v.z)(l, e),
                            selectAll: Object(v.z)(l, t),
                            selectTotal: Object(v.z)(l, u)
                        } : {
                            selectIds: n,
                            selectEntities: e,
                            selectAll: t,
                            selectTotal: u
                        };
                    }
                }, o = e ? function (l, n) {
                    const {
                        removeOne: e,
                        removeMany: t,
                        removeAll: u
                    } = ql(l);
                    function o(l, n) {
                        return i([l], n);
                    }
                    function i(n, e) {
                        const t = n.filter(n => !(Gl(n, l) in e.entities));
                        return 0 === t.length ? Jl.None : (d(t, e), Jl.Both);
                    }
                    function a(l, n) {
                        return r([l], n);
                    }
                    function r(n, e) {
                        const t = [], u = n.filter(n => function (n, e, t) {
                            if (!(e.id in t.entities))
                                return !1;
                            const u = Object.assign({}, t.entities[e.id], e.changes), o = Gl(u, l);
                            return delete t.entities[e.id], n.push(u), o !== e.id;
                        }(t, n, e)).length > 0;
                        if (0 === t.length)
                            return Jl.None;
                        {
                            const l = e.ids, n = [];
                            return e.ids = e.ids.filter((l, t) => l in e.entities || (n.push(t), !1)), d(t, e), !u && n.every(n => e.ids[n] === l[n]) ? Jl.EntitiesOnly : Jl.Both;
                        }
                    }
                    function s(n, e) {
                        const t = [], u = [];
                        for (const i of n) {
                            const n = Gl(i, l);
                            n in e.entities ? u.push({
                                id: n,
                                changes: i
                            }) : t.push(i);
                        }
                        const o = r(u, e), a = i(t, e);
                        switch (!0) {
                            case a === Jl.None && o === Jl.None:
                                return Jl.None;
                            case a === Jl.Both || o === Jl.Both:
                                return Jl.Both;
                            default:
                                return Jl.EntitiesOnly;
                        }
                    }
                    function d(e, t) {
                        e.sort(n);
                        const u = [];
                        let o = 0, i = 0;
                        for (; o < e.length && i < t.ids.length;) {
                            const a = e[o], r = Gl(a, l), s = t.ids[i];
                            n(a, t.entities[s]) <= 0 ? (u.push(r), o++) : (u.push(s), i++);
                        }
                        t.ids = u.concat(o < e.length ? e.slice(o).map(l) : t.ids.slice(i)), e.forEach((n, e) => {
                            t.entities[l(n)] = n;
                        });
                    }
                    return {
                        removeOne: e,
                        removeMany: t,
                        removeAll: u,
                        addOne: Hl(o),
                        updateOne: Hl(a),
                        upsertOne: Hl(function (l, n) {
                            return s([l], n);
                        }),
                        setAll: Hl(function (l, n) {
                            return n.entities = {}, n.ids = [], i(l, n), Jl.Both;
                        }),
                        setOne: Hl(function (n, e) {
                            const t = Gl(n, l);
                            return t in e.entities ? (e.ids = e.ids.filter(l => l !== t), d([n], e), Jl.Both) : o(n, e);
                        }),
                        addMany: Hl(i),
                        updateMany: Hl(r),
                        upsertMany: Hl(s),
                        map: Hl(function (l, n) {
                            return r(n.ids.reduce((e, t) => {
                                const u = l(n.entities[t]);
                                return u !== n.entities[t] && e.push({
                                    id: t,
                                    changes: u
                                }), e;
                            }, []), n);
                        }),
                        mapOne: Hl(function ({
                            map: l,
                            id: n
                        }, e) {
                            const t = e.entities[n];
                            return t ? a({
                                id: n,
                                changes: l(t)
                            }, e) : Jl.None;
                        })
                    };
                }(n, e) : ql(n);
                return Object.assign(Object.assign(Object.assign({
                    selectId: n,
                    sortComparer: e
                }, t), u), o);
            }({ selectId: l => l.id }), Zl = Kl.getInitialState({
                isLoading: !1,
                pagination: {
                    page: 1,
                    pageSize: $l.a.default_page_size,
                    pages: 0,
                    totalRecords: 0,
                    currentPage: 1
                },
                form: {
                    isLoading: !1,
                    isVisible: !1,
                    values: {
                        name: '',
                        last_name: '',
                        type: null,
                        RFC: '',
                        mobile: '',
                        email: '',
                        perfil: null
                    }
                }
            }), { selectAll: Xl } = Kl.getSelectors(), Wl = l => l.settingsModule.usersManagerTableState, Yl = Object(v.z)(Wl, Xl), Ql = Object(v.z)(Wl, l => l.pagination), ln = Object(v.z)(Wl, l => l.form.isLoading);
            class nn {
                constructor(l) {
                    this.request = l, this.type = Q.a.SAVE_NEW_USER_MANAGER;
                }
            }
            class en {
                constructor(l) {
                    this.request = l, this.type = Q.a.EDIT_USER_MANAGER;
                }
            }
            class tn {
                constructor(l) {
                    this.value = l, this.type = Q.a.SET_LOADING_FORM_USER_MANAGER;
                }
            }
            class un {
                constructor(l) {
                    this.value = l, this.type = Q.a.SET_VISIBILITY_FORM_USER_MANAGER;
                }
            }
            class on {
                constructor(l) {
                    this.userId = l, this.type = Q.a.GET_VALUES_FORM_USER_MANAGER;
                }
            }
            class an {
                constructor() {
                    this.type = Q.a.RESET_FORM_VALUES;
                }
            }
            class rn {
                constructor(l) {
                    this.values = l, this.type = Q.a.SET_VALUES_FORM_USER_MANAGER;
                }
            }
            var sn = e('ESrA');
            class dn extends sn.a {
                constructor(l, n, e) {
                    super(), this._validations = l, this.store = n, this.existingService = e, this.userId = null, this.mode = Ul.new, this.PeopleType = P.a, this.getNamePeopleType = P.b, this.UserPerfilType = Ml, this.getNameUserPerfil = Vl, this.values = {
                        RFC: '',
                        email: '',
                        last_name: '',
                        mobile: '',
                        name: '',
                        type: null,
                        perfil: null
                    }, this.placeHolderName = 'FORM.PLACEHOLDERS.NAMES', this.seeExtraInputs = !1, this.form = l.entityForm(), this.getValuesStore();
                }
                ngAfterViewInit() {
                    this.mode != Ul.new && Object(jl.a)(1000).subscribe(() => {
                        this.initializeValuesForm(this.values);
                    });
                }
                ngOnDestroy() {
                    super.ngOnDestroy(), this.store.dispatch(new an());
                }
                getValuesStore() {
                    this.isLoading$ = this.store.select(ln), this.store.select(l => l.settingsModule.usersManagerTableState.form.values).pipe(Object(Pl.a)(this._ngUnsubscribe)).subscribe(l => {
                        this.mode != Ul.new && (this.values = Object.assign({}, l));
                    });
                }
                getInfoForm() {
                    this.mode != Ul.new && this.store.dispatch(new on(this.userId));
                }
                ngOnInit() {
                    this.getInfoForm();
                }
                selectChange(l) {
                    switch (+l) {
                        case P.a.physic:
                            this.placeHolderName = 'FORM.PLACEHOLDERS.NAMES', this.addControlExtra();
                            break;
                        case P.a.workStation:
                            this.placeHolderName = 'FORM.PLACEHOLDERS.NAMES_WORKSTATION';
                        default:
                            this.removeControlsExtra();
                    }
                    this.disabledControls();
                }
                initializeValuesForm(l) {
                    this.form.controls.type.setValue(l.type + ''), this.form.controls.name.setValue(l.name), this.form.controls.email.setValue(l.email), l.type == P.a.physic && (this.form.controls.mobile.setValue(l.mobile), this.form.controls.perfil.setValue(l.perfil), this.form.controls.last_name.setValue(l.last_name));
                }
                addControlExtra() {
                    this.seeExtraInputs || (this.form.addControl('mobile', new L.g(this.values.mobile, [
                        L.x.required,
                        N.a.onlyNumbers(),
                        L.x.maxLength(10),
                        L.x.minLength(10)
                    ], [Bl.a.phoneNumberInUse(this.existingService)])), this.form.addControl('perfil', new L.g(this.values.perfil, [L.x.required])), this.form.addControl('last_name', new L.g(this.values.last_name, [
                        L.x.required,
                        L.x.maxLength(60)
                    ]))), this.seeExtraInputs = !0;
                }
                removeControlsExtra() {
                    this.form.removeControl('mobile'), this.form.removeControl('perfil'), this.form.removeControl('last_name'), this.seeExtraInputs = !1;
                }
                disabledControls() {
                    this.mode == Ul.edit ? (this.seeExtraInputs && null != this.values.mobile && '' != this.values.mobile && this.form.controls.mobile.disable(), this.form.controls.email.disable()) : this.mode == Ul.view && Object.keys(this.form.controls).forEach(l => {
                        this.form.controls[l].disable();
                    });
                }
            }
            var cn = t['ɵcrt']({
                encapsulation: 0,
                styles: [['']],
                data: {}
            });
            function mn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'span', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](2, null, [
                        ' ',
                        ' '
                    ]))
                ], null, function (l, n) {
                    l(n, 2, 0, n.component._validations.message().code);
                });
            }
            function vn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵand'](16777216, null, null, 1, null, mn)),
                    t['ɵdid'](1, 16384, null, 0, a.NgIf, [
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
                    l(n, 1, 0, n.component._validations.validate('type'));
                }, null);
            }
            function pn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform(e._validations.message().code)));
                });
            }
            function fn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵand'](16777216, null, null, 1, null, pn)),
                    t['ɵdid'](1, 16384, null, 0, a.NgIf, [
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
                    l(n, 1, 0, n.component._validations.validate('name'));
                }, null);
            }
            function gn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'span', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](2, null, [
                        ' ',
                        ' '
                    ]))
                ], null, function (l, n) {
                    l(n, 2, 0, n.component._validations.message().code);
                });
            }
            function hn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵand'](16777216, null, null, 1, null, gn)),
                    t['ɵdid'](1, 16384, null, 0, a.NgIf, [
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
                    l(n, 1, 0, n.component._validations.validate('last_name'));
                }, null);
            }
            function bn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 22, 'div', [[
                        'nz-col',
                        ''
                    ]], [[
                        4,
                        'flex',
                        null
                    ]], null, null, null, null)),
                    t['ɵdid'](1, 4931584, null, 0, E.a, [
                        t.ElementRef,
                        [
                            2,
                            E.c
                        ],
                        t.Renderer2
                    ], {
                        nzSpan: [
                            0,
                            'nzSpan'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](2, 0, null, null, 20, 'nz-form-item', [], [
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
                        ],
                        [
                            2,
                            'ant-form-item-has-success',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-warning',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-error',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-is-validating',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-feedback',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-with-help',
                            null
                        ]
                    ], null, null, w.e, w.b)),
                    t['ɵdid'](3, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], null, null),
                    t['ɵdid'](4, 180224, null, 0, I.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](5, 0, null, 0, 4, 'nz-form-label', [], [[
                        4,
                        'flex',
                        null
                    ]], null, null, w.f, w.c)),
                    t['ɵdid'](6, 4931584, null, 0, E.a, [
                        t.ElementRef,
                        [
                            2,
                            E.c
                        ],
                        t.Renderer2
                    ], {
                        nzXs: [
                            0,
                            'nzXs'
                        ],
                        nzSm: [
                            1,
                            'nzSm'
                        ]
                    }, null),
                    t['ɵdid'](7, 180224, null, 0, I.d, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            3,
                            I.b
                        ]
                    ], null, null),
                    (l()(), t['ɵted'](8, 0, [
                        ' ',
                        ' * '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](10, 0, null, 0, 12, 'nz-form-control', [[
                        'nzHasFeedback',
                        ''
                    ]], [[
                        4,
                        'flex',
                        null
                    ]], null, null, w.d, w.a)),
                    t['ɵdid'](11, 4931584, null, 0, E.a, [
                        t.ElementRef,
                        [
                            2,
                            E.c
                        ],
                        t.Renderer2
                    ], {
                        nzXs: [
                            0,
                            'nzXs'
                        ],
                        nzSm: [
                            1,
                            'nzSm'
                        ]
                    }, null),
                    t['ɵdid'](12, 1818624, null, 1, I.a, [
                        t.ElementRef,
                        [
                            2,
                            I.c
                        ],
                        t.ChangeDetectorRef,
                        t.Renderer2,
                        k.e,
                        [
                            2,
                            I.b
                        ]
                    ], {
                        nzErrorTip: [
                            0,
                            'nzErrorTip'
                        ],
                        nzHasFeedback: [
                            1,
                            'nzHasFeedback'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 5, { defaultValidateControl: 0 }),
                    (l()(), t['ɵeld'](14, 0, null, 0, 7, 'input', [
                        [
                            'class',
                            'form-control'
                        ],
                        [
                            'formControlName',
                            'last_name'
                        ],
                        [
                            'nz-input',
                            ''
                        ]
                    ], [
                        [
                            8,
                            'placeholder',
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
                        ],
                        [
                            2,
                            'ant-input-disabled',
                            null
                        ],
                        [
                            2,
                            'ant-input-borderless',
                            null
                        ],
                        [
                            2,
                            'ant-input-lg',
                            null
                        ],
                        [
                            2,
                            'ant-input-sm',
                            null
                        ],
                        [
                            1,
                            'disabled',
                            0
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
                        var u = !0;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 15)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 15).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 15)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 15)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](15, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.e]),
                    t['ɵdid'](17, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
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
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, [[
                        5,
                        4
                    ]], L.p, null, [L.i]),
                    t['ɵdid'](19, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    t['ɵdid'](20, 737280, null, 0, Ol.a, [
                        [
                            6,
                            L.p
                        ],
                        t.Renderer2,
                        t.ElementRef
                    ], null, null),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵand'](0, [[
                        'errLastName',
                        2
                    ]], 0, 0, null, hn))
                ], function (l, n) {
                    l(n, 1, 0, 12), l(n, 3, 0), l(n, 6, 0, 24, 8), l(n, 11, 0, 24, 16), l(n, 12, 0, t['ɵnov'](n, 22), ''), l(n, 17, 0, 'last_name'), l(n, 20, 0);
                }, function (l, n) {
                    l(n, 0, 0, t['ɵnov'](n, 1).hostFlexStyle), l(n, 2, 1, [
                        'top' === t['ɵnov'](n, 3).nzAlign,
                        'middle' === t['ɵnov'](n, 3).nzAlign,
                        'bottom' === t['ɵnov'](n, 3).nzAlign,
                        'start' === t['ɵnov'](n, 3).nzJustify,
                        'end' === t['ɵnov'](n, 3).nzJustify,
                        'center' === t['ɵnov'](n, 3).nzJustify,
                        'space-around' === t['ɵnov'](n, 3).nzJustify,
                        'space-between' === t['ɵnov'](n, 3).nzJustify,
                        'success' === t['ɵnov'](n, 4).status,
                        'warning' === t['ɵnov'](n, 4).status,
                        'error' === t['ɵnov'](n, 4).status,
                        'validating' === t['ɵnov'](n, 4).status,
                        t['ɵnov'](n, 4).hasFeedback && t['ɵnov'](n, 4).status,
                        t['ɵnov'](n, 4).withHelpClass
                    ]), l(n, 5, 0, t['ɵnov'](n, 6).hostFlexStyle), l(n, 8, 0, t['ɵunv'](n, 8, 0, t['ɵnov'](n, 9).transform('FORM.LABELS.LAST_NAMES'))), l(n, 10, 0, t['ɵnov'](n, 11).hostFlexStyle), l(n, 14, 1, [
                        t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 14, 0, t['ɵnov'](n, 21).transform('FORM.PLACEHOLDERS.LAST_NAMES')), ''),
                        t['ɵnov'](n, 19).ngClassUntouched,
                        t['ɵnov'](n, 19).ngClassTouched,
                        t['ɵnov'](n, 19).ngClassPristine,
                        t['ɵnov'](n, 19).ngClassDirty,
                        t['ɵnov'](n, 19).ngClassValid,
                        t['ɵnov'](n, 19).ngClassInvalid,
                        t['ɵnov'](n, 19).ngClassPending,
                        t['ɵnov'](n, 20).disabled,
                        t['ɵnov'](n, 20).nzBorderless,
                        'large' === t['ɵnov'](n, 20).nzSize,
                        'small' === t['ɵnov'](n, 20).nzSize,
                        t['ɵnov'](n, 20).disabled || null
                    ]);
                });
            }
            function Cn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 2, 'span', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](2, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    var e = n.component;
                    l(n, 2, 0, t['ɵunv'](n, 2, 0, t['ɵnov'](n, 3).transform(e._validations.message().code)));
                });
            }
            function Rn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Cn)),
                    t['ɵdid'](1, 16384, null, 0, a.NgIf, [
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
                    l(n, 1, 0, n.component._validations.validate('email'));
                }, null);
            }
            function wn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'span', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](2, null, [
                        ' ',
                        ' '
                    ]))
                ], null, function (l, n) {
                    l(n, 2, 0, n.component._validations.message().code);
                });
            }
            function En(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵand'](16777216, null, null, 1, null, wn)),
                    t['ɵdid'](1, 16384, null, 0, a.NgIf, [
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
                    l(n, 1, 0, n.component._validations.validate('perfil'));
                }, null);
            }
            function yn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 29, 'div', [[
                        'nz-col',
                        ''
                    ]], [[
                        4,
                        'flex',
                        null
                    ]], null, null, null, null)),
                    t['ɵdid'](1, 4931584, null, 0, E.a, [
                        t.ElementRef,
                        [
                            2,
                            E.c
                        ],
                        t.Renderer2
                    ], {
                        nzSpan: [
                            0,
                            'nzSpan'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](2, 0, null, null, 27, 'nz-form-item', [], [
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
                        ],
                        [
                            2,
                            'ant-form-item-has-success',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-warning',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-error',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-is-validating',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-feedback',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-with-help',
                            null
                        ]
                    ], null, null, w.e, w.b)),
                    t['ɵdid'](3, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], null, null),
                    t['ɵdid'](4, 180224, null, 0, I.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](5, 0, null, 0, 4, 'nz-form-label', [], [[
                        4,
                        'flex',
                        null
                    ]], null, null, w.f, w.c)),
                    t['ɵdid'](6, 4931584, null, 0, E.a, [
                        t.ElementRef,
                        [
                            2,
                            E.c
                        ],
                        t.Renderer2
                    ], {
                        nzXs: [
                            0,
                            'nzXs'
                        ],
                        nzSm: [
                            1,
                            'nzSm'
                        ]
                    }, null),
                    t['ɵdid'](7, 180224, null, 0, I.d, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            3,
                            I.b
                        ]
                    ], null, null),
                    (l()(), t['ɵted'](8, 0, [
                        ' ',
                        ' * '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](10, 0, null, 0, 18, 'nz-form-control', [[
                        'nzHasFeedback',
                        ''
                    ]], [[
                        4,
                        'flex',
                        null
                    ]], null, null, w.d, w.a)),
                    t['ɵdid'](11, 4931584, null, 0, E.a, [
                        t.ElementRef,
                        [
                            2,
                            E.c
                        ],
                        t.Renderer2
                    ], {
                        nzXs: [
                            0,
                            'nzXs'
                        ],
                        nzSm: [
                            1,
                            'nzSm'
                        ]
                    }, null),
                    t['ɵdid'](12, 1818624, null, 1, I.a, [
                        t.ElementRef,
                        [
                            2,
                            I.c
                        ],
                        t.ChangeDetectorRef,
                        t.Renderer2,
                        k.e,
                        [
                            2,
                            I.b
                        ]
                    ], {
                        nzErrorTip: [
                            0,
                            'nzErrorTip'
                        ],
                        nzHasFeedback: [
                            1,
                            'nzHasFeedback'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 7, { defaultValidateControl: 0 }),
                    (l()(), t['ɵeld'](14, 0, null, 0, 14, 'nz-select', [
                        [
                            'formControlName',
                            'perfil'
                        ],
                        [
                            'nzAllowClear',
                            ''
                        ]
                    ], [
                        [
                            2,
                            'ant-select-lg',
                            null
                        ],
                        [
                            2,
                            'ant-select-sm',
                            null
                        ],
                        [
                            2,
                            'ant-select-show-arrow',
                            null
                        ],
                        [
                            2,
                            'ant-select-disabled',
                            null
                        ],
                        [
                            2,
                            'ant-select-show-search',
                            null
                        ],
                        [
                            2,
                            'ant-select-allow-clear',
                            null
                        ],
                        [
                            2,
                            'ant-select-borderless',
                            null
                        ],
                        [
                            2,
                            'ant-select-open',
                            null
                        ],
                        [
                            2,
                            'ant-select-focused',
                            null
                        ],
                        [
                            2,
                            'ant-select-single',
                            null
                        ],
                        [
                            2,
                            'ant-select-multiple',
                            null
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
                    ], [[
                        null,
                        'click'
                    ]], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 15).onHostClick() && u), u;
                    }, Tl.d, Tl.b)),
                    t['ɵdid'](15, 6012928, null, 2, _l.h, [
                        T.a,
                        t.ChangeDetectorRef,
                        t.ElementRef,
                        z.a,
                        Al.d,
                        [
                            8,
                            null
                        ]
                    ], {
                        nzPlaceHolder: [
                            0,
                            'nzPlaceHolder'
                        ],
                        nzAllowClear: [
                            1,
                            'nzAllowClear'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 8, { listOfNzOptionComponent: 1 }),
                    t['ɵqud'](603979776, 9, { listOfNzOptionGroupComponent: 1 }),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [_l.h]),
                    t['ɵdid'](20, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
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
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, [[
                        7,
                        4
                    ]], L.p, null, [L.i]),
                    t['ɵdid'](22, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    (l()(), t['ɵeld'](23, 0, null, null, 2, 'nz-option', [], null, null, null, Tl.c, Tl.a)),
                    t['ɵdid'](24, 770048, [[
                        8,
                        4
                    ]], 0, _l.a, [[
                        2,
                        _l.c
                    ]], {
                        nzLabel: [
                            0,
                            'nzLabel'
                        ],
                        nzValue: [
                            1,
                            'nzValue'
                        ]
                    }, null),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](26, 0, null, null, 2, 'nz-option', [], null, null, null, Tl.c, Tl.a)),
                    t['ɵdid'](27, 770048, [[
                        8,
                        4
                    ]], 0, _l.a, [[
                        2,
                        _l.c
                    ]], {
                        nzLabel: [
                            0,
                            'nzLabel'
                        ],
                        nzValue: [
                            1,
                            'nzValue'
                        ]
                    }, null),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵand'](0, [[
                        'typeUserPerfil',
                        2
                    ]], 0, 0, null, En))
                ], function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, 12), l(n, 3, 0), l(n, 6, 0, 24, 8), l(n, 11, 0, 24, 16), l(n, 12, 0, t['ɵnov'](n, 29), ''), l(n, 15, 0, t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 15, 0, t['ɵnov'](n, 18).transform('FORM.PLACEHOLDERS.TYPE_USER_PERFIL')), ''), ''), l(n, 20, 0, 'perfil'), l(n, 24, 0, t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 24, 0, t['ɵnov'](n, 25).transform(e.getNameUserPerfil.get(e.UserPerfilType.reading))), ''), t['ɵinlineInterpolate'](1, '', e.UserPerfilType.reading, '')), l(n, 27, 0, t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 27, 0, t['ɵnov'](n, 28).transform(e.getNameUserPerfil.get(e.UserPerfilType.documentCreator))), ''), t['ɵinlineInterpolate'](1, '', e.UserPerfilType.documentCreator, ''));
                }, function (l, n) {
                    l(n, 0, 0, t['ɵnov'](n, 1).hostFlexStyle), l(n, 2, 1, [
                        'top' === t['ɵnov'](n, 3).nzAlign,
                        'middle' === t['ɵnov'](n, 3).nzAlign,
                        'bottom' === t['ɵnov'](n, 3).nzAlign,
                        'start' === t['ɵnov'](n, 3).nzJustify,
                        'end' === t['ɵnov'](n, 3).nzJustify,
                        'center' === t['ɵnov'](n, 3).nzJustify,
                        'space-around' === t['ɵnov'](n, 3).nzJustify,
                        'space-between' === t['ɵnov'](n, 3).nzJustify,
                        'success' === t['ɵnov'](n, 4).status,
                        'warning' === t['ɵnov'](n, 4).status,
                        'error' === t['ɵnov'](n, 4).status,
                        'validating' === t['ɵnov'](n, 4).status,
                        t['ɵnov'](n, 4).hasFeedback && t['ɵnov'](n, 4).status,
                        t['ɵnov'](n, 4).withHelpClass
                    ]), l(n, 5, 0, t['ɵnov'](n, 6).hostFlexStyle), l(n, 8, 0, t['ɵunv'](n, 8, 0, t['ɵnov'](n, 9).transform('FORM.LABELS.TYPE_USER_PERFIL'))), l(n, 10, 0, t['ɵnov'](n, 11).hostFlexStyle), l(n, 14, 1, [
                        'large' === t['ɵnov'](n, 15).nzSize,
                        'small' === t['ɵnov'](n, 15).nzSize,
                        t['ɵnov'](n, 15).nzShowArrow,
                        t['ɵnov'](n, 15).nzDisabled,
                        (t['ɵnov'](n, 15).nzShowSearch || 'default' !== t['ɵnov'](n, 15).nzMode) && !t['ɵnov'](n, 15).nzDisabled,
                        t['ɵnov'](n, 15).nzAllowClear,
                        t['ɵnov'](n, 15).nzBorderless,
                        t['ɵnov'](n, 15).nzOpen,
                        t['ɵnov'](n, 15).nzOpen || t['ɵnov'](n, 15).focused,
                        'default' === t['ɵnov'](n, 15).nzMode,
                        'default' !== t['ɵnov'](n, 15).nzMode,
                        t['ɵnov'](n, 22).ngClassUntouched,
                        t['ɵnov'](n, 22).ngClassTouched,
                        t['ɵnov'](n, 22).ngClassPristine,
                        t['ɵnov'](n, 22).ngClassDirty,
                        t['ɵnov'](n, 22).ngClassValid,
                        t['ɵnov'](n, 22).ngClassInvalid,
                        t['ɵnov'](n, 22).ngClassPending
                    ]);
                });
            }
            function zn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform(e._validations.message().code)));
                });
            }
            function Sn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵand'](16777216, null, null, 1, null, zn)),
                    t['ɵdid'](1, 16384, null, 0, a.NgIf, [
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
                    l(n, 1, 0, n.component._validations.validate('mobile'));
                }, null);
            }
            function In(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 22, 'div', [[
                        'nz-col',
                        ''
                    ]], [[
                        4,
                        'flex',
                        null
                    ]], null, null, null, null)),
                    t['ɵdid'](1, 4931584, null, 0, E.a, [
                        t.ElementRef,
                        [
                            2,
                            E.c
                        ],
                        t.Renderer2
                    ], {
                        nzSpan: [
                            0,
                            'nzSpan'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](2, 0, null, null, 20, 'nz-form-item', [], [
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
                        ],
                        [
                            2,
                            'ant-form-item-has-success',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-warning',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-error',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-is-validating',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-feedback',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-with-help',
                            null
                        ]
                    ], null, null, w.e, w.b)),
                    t['ɵdid'](3, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], null, null),
                    t['ɵdid'](4, 180224, null, 0, I.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](5, 0, null, 0, 4, 'nz-form-label', [], [[
                        4,
                        'flex',
                        null
                    ]], null, null, w.f, w.c)),
                    t['ɵdid'](6, 4931584, null, 0, E.a, [
                        t.ElementRef,
                        [
                            2,
                            E.c
                        ],
                        t.Renderer2
                    ], {
                        nzXs: [
                            0,
                            'nzXs'
                        ],
                        nzSm: [
                            1,
                            'nzSm'
                        ]
                    }, null),
                    t['ɵdid'](7, 180224, null, 0, I.d, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            3,
                            I.b
                        ]
                    ], null, null),
                    (l()(), t['ɵted'](8, 0, [
                        ' ',
                        ' * '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](10, 0, null, 0, 12, 'nz-form-control', [[
                        'nzHasFeedback',
                        ''
                    ]], [[
                        4,
                        'flex',
                        null
                    ]], null, null, w.d, w.a)),
                    t['ɵdid'](11, 4931584, null, 0, E.a, [
                        t.ElementRef,
                        [
                            2,
                            E.c
                        ],
                        t.Renderer2
                    ], {
                        nzXs: [
                            0,
                            'nzXs'
                        ],
                        nzSm: [
                            1,
                            'nzSm'
                        ]
                    }, null),
                    t['ɵdid'](12, 1818624, null, 1, I.a, [
                        t.ElementRef,
                        [
                            2,
                            I.c
                        ],
                        t.ChangeDetectorRef,
                        t.Renderer2,
                        k.e,
                        [
                            2,
                            I.b
                        ]
                    ], {
                        nzErrorTip: [
                            0,
                            'nzErrorTip'
                        ],
                        nzHasFeedback: [
                            1,
                            'nzHasFeedback'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 10, { defaultValidateControl: 0 }),
                    (l()(), t['ɵeld'](14, 0, null, 0, 7, 'input', [
                        [
                            'class',
                            'form-control'
                        ],
                        [
                            'formControlName',
                            'mobile'
                        ],
                        [
                            'nz-input',
                            ''
                        ]
                    ], [
                        [
                            8,
                            'placeholder',
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
                        ],
                        [
                            2,
                            'ant-input-disabled',
                            null
                        ],
                        [
                            2,
                            'ant-input-borderless',
                            null
                        ],
                        [
                            2,
                            'ant-input-lg',
                            null
                        ],
                        [
                            2,
                            'ant-input-sm',
                            null
                        ],
                        [
                            1,
                            'disabled',
                            0
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
                        var u = !0;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 15)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 15).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 15)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 15)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](15, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.e]),
                    t['ɵdid'](17, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
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
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, [[
                        10,
                        4
                    ]], L.p, null, [L.i]),
                    t['ɵdid'](19, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    t['ɵdid'](20, 737280, null, 0, Ol.a, [
                        [
                            6,
                            L.p
                        ],
                        t.Renderer2,
                        t.ElementRef
                    ], null, null),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵand'](0, [[
                        'errMobile',
                        2
                    ]], 0, 0, null, Sn))
                ], function (l, n) {
                    l(n, 1, 0, 12), l(n, 3, 0), l(n, 6, 0, 24, 8), l(n, 11, 0, 24, 16), l(n, 12, 0, t['ɵnov'](n, 22), ''), l(n, 17, 0, 'mobile'), l(n, 20, 0);
                }, function (l, n) {
                    l(n, 0, 0, t['ɵnov'](n, 1).hostFlexStyle), l(n, 2, 1, [
                        'top' === t['ɵnov'](n, 3).nzAlign,
                        'middle' === t['ɵnov'](n, 3).nzAlign,
                        'bottom' === t['ɵnov'](n, 3).nzAlign,
                        'start' === t['ɵnov'](n, 3).nzJustify,
                        'end' === t['ɵnov'](n, 3).nzJustify,
                        'center' === t['ɵnov'](n, 3).nzJustify,
                        'space-around' === t['ɵnov'](n, 3).nzJustify,
                        'space-between' === t['ɵnov'](n, 3).nzJustify,
                        'success' === t['ɵnov'](n, 4).status,
                        'warning' === t['ɵnov'](n, 4).status,
                        'error' === t['ɵnov'](n, 4).status,
                        'validating' === t['ɵnov'](n, 4).status,
                        t['ɵnov'](n, 4).hasFeedback && t['ɵnov'](n, 4).status,
                        t['ɵnov'](n, 4).withHelpClass
                    ]), l(n, 5, 0, t['ɵnov'](n, 6).hostFlexStyle), l(n, 8, 0, t['ɵunv'](n, 8, 0, t['ɵnov'](n, 9).transform('FORM.LABELS.MOBILE'))), l(n, 10, 0, t['ɵnov'](n, 11).hostFlexStyle), l(n, 14, 1, [
                        t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 14, 0, t['ɵnov'](n, 21).transform('FORM.PLACEHOLDERS.MOBILE')), ''),
                        t['ɵnov'](n, 19).ngClassUntouched,
                        t['ɵnov'](n, 19).ngClassTouched,
                        t['ɵnov'](n, 19).ngClassPristine,
                        t['ɵnov'](n, 19).ngClassDirty,
                        t['ɵnov'](n, 19).ngClassValid,
                        t['ɵnov'](n, 19).ngClassInvalid,
                        t['ɵnov'](n, 19).ngClassPending,
                        t['ɵnov'](n, 20).disabled,
                        t['ɵnov'](n, 20).nzBorderless,
                        'large' === t['ɵnov'](n, 20).nzSize,
                        'small' === t['ɵnov'](n, 20).nzSize,
                        t['ɵnov'](n, 20).disabled || null
                    ]);
                });
            }
            function kn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 102, 'ce-layout-dashboard', [], null, null, null, D.b, D.a)),
                    t['ɵdid'](1, 638976, null, 0, O.a, [t.ChangeDetectorRef], {
                        isLoading: [
                            0,
                            'isLoading'
                        ]
                    }, null),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵeld'](3, 0, null, 0, 99, 'form', [
                        [
                            'class',
                            'form'
                        ],
                        [
                            'content',
                            ''
                        ],
                        [
                            'novalidate',
                            ''
                        ],
                        [
                            'nz-form',
                            ''
                        ],
                        [
                            'nzNoColon',
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
                        ],
                        [
                            2,
                            'ant-form-horizontal',
                            null
                        ],
                        [
                            2,
                            'ant-form-vertical',
                            null
                        ],
                        [
                            2,
                            'ant-form-inline',
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
                        return 'submit' === n && (u = !1 !== t['ɵnov'](l, 5).onSubmit(e) && u), 'reset' === n && (u = !1 !== t['ɵnov'](l, 5).onReset() && u), u;
                    }, null, null)),
                    t['ɵdid'](4, 16384, null, 0, L.C, [], null, null),
                    t['ɵdid'](5, 540672, null, 0, L.k, [
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
                    t['ɵprd'](2048, null, L.d, null, [L.k]),
                    t['ɵdid'](7, 16384, null, 0, L.r, [[
                        6,
                        L.d
                    ]], null, null),
                    t['ɵdid'](8, 671744, null, 0, I.b, [
                        T.a,
                        t.ElementRef,
                        t.Renderer2
                    ], {
                        nzNoColon: [
                            0,
                            'nzNoColon'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](9, 0, null, null, 90, 'div', [[
                        'class',
                        'card-body'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](10, 0, null, null, 31, 'div', [[
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
                    t['ɵdid'](11, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], {
                        nzGutter: [
                            0,
                            'nzGutter'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](12, 0, null, null, 29, 'div', [[
                        'nz-col',
                        ''
                    ]], [[
                        4,
                        'flex',
                        null
                    ]], null, null, null, null)),
                    t['ɵdid'](13, 4931584, null, 0, E.a, [
                        t.ElementRef,
                        [
                            2,
                            E.c
                        ],
                        t.Renderer2
                    ], {
                        nzSpan: [
                            0,
                            'nzSpan'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](14, 0, null, null, 27, 'nz-form-item', [], [
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
                        ],
                        [
                            2,
                            'ant-form-item-has-success',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-warning',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-error',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-is-validating',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-feedback',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-with-help',
                            null
                        ]
                    ], null, null, w.e, w.b)),
                    t['ɵdid'](15, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], null, null),
                    t['ɵdid'](16, 180224, null, 0, I.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](17, 0, null, 0, 4, 'nz-form-label', [], [[
                        4,
                        'flex',
                        null
                    ]], null, null, w.f, w.c)),
                    t['ɵdid'](18, 4931584, null, 0, E.a, [
                        t.ElementRef,
                        [
                            2,
                            E.c
                        ],
                        t.Renderer2
                    ], {
                        nzXs: [
                            0,
                            'nzXs'
                        ],
                        nzSm: [
                            1,
                            'nzSm'
                        ]
                    }, null),
                    t['ɵdid'](19, 180224, null, 0, I.d, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            3,
                            I.b
                        ]
                    ], null, null),
                    (l()(), t['ɵted'](20, 0, [
                        ' ',
                        ' * '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](22, 0, null, 0, 18, 'nz-form-control', [[
                        'nzHasFeedback',
                        ''
                    ]], [[
                        4,
                        'flex',
                        null
                    ]], null, null, w.d, w.a)),
                    t['ɵdid'](23, 4931584, null, 0, E.a, [
                        t.ElementRef,
                        [
                            2,
                            E.c
                        ],
                        t.Renderer2
                    ], {
                        nzXs: [
                            0,
                            'nzXs'
                        ],
                        nzSm: [
                            1,
                            'nzSm'
                        ]
                    }, null),
                    t['ɵdid'](24, 1818624, null, 1, I.a, [
                        t.ElementRef,
                        [
                            2,
                            I.c
                        ],
                        t.ChangeDetectorRef,
                        t.Renderer2,
                        k.e,
                        [
                            2,
                            I.b
                        ]
                    ], {
                        nzErrorTip: [
                            0,
                            'nzErrorTip'
                        ],
                        nzHasFeedback: [
                            1,
                            'nzHasFeedback'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 1, { defaultValidateControl: 0 }),
                    (l()(), t['ɵeld'](26, 0, null, 0, 14, 'nz-select', [
                        [
                            'formControlName',
                            'type'
                        ],
                        [
                            'nzAllowClear',
                            ''
                        ]
                    ], [
                        [
                            2,
                            'ant-select-lg',
                            null
                        ],
                        [
                            2,
                            'ant-select-sm',
                            null
                        ],
                        [
                            2,
                            'ant-select-show-arrow',
                            null
                        ],
                        [
                            2,
                            'ant-select-disabled',
                            null
                        ],
                        [
                            2,
                            'ant-select-show-search',
                            null
                        ],
                        [
                            2,
                            'ant-select-allow-clear',
                            null
                        ],
                        [
                            2,
                            'ant-select-borderless',
                            null
                        ],
                        [
                            2,
                            'ant-select-open',
                            null
                        ],
                        [
                            2,
                            'ant-select-focused',
                            null
                        ],
                        [
                            2,
                            'ant-select-single',
                            null
                        ],
                        [
                            2,
                            'ant-select-multiple',
                            null
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
                            'ngModelChange'
                        ],
                        [
                            null,
                            'click'
                        ]
                    ], function (l, n, e) {
                        var u = !0, o = l.component;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 27).onHostClick() && u), 'ngModelChange' === n && (u = !1 !== o.selectChange(e) && u), u;
                    }, Tl.d, Tl.b)),
                    t['ɵdid'](27, 6012928, null, 2, _l.h, [
                        T.a,
                        t.ChangeDetectorRef,
                        t.ElementRef,
                        z.a,
                        Al.d,
                        [
                            8,
                            null
                        ]
                    ], {
                        nzPlaceHolder: [
                            0,
                            'nzPlaceHolder'
                        ],
                        nzAllowClear: [
                            1,
                            'nzAllowClear'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 2, { listOfNzOptionComponent: 1 }),
                    t['ɵqud'](603979776, 3, { listOfNzOptionGroupComponent: 1 }),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [_l.h]),
                    t['ɵdid'](32, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
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
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, { update: 'ngModelChange' }),
                    t['ɵprd'](2048, [[
                        1,
                        4
                    ]], L.p, null, [L.i]),
                    t['ɵdid'](34, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    (l()(), t['ɵeld'](35, 0, null, null, 2, 'nz-option', [], null, null, null, Tl.c, Tl.a)),
                    t['ɵdid'](36, 770048, [[
                        2,
                        4
                    ]], 0, _l.a, [[
                        2,
                        _l.c
                    ]], {
                        nzLabel: [
                            0,
                            'nzLabel'
                        ],
                        nzValue: [
                            1,
                            'nzValue'
                        ]
                    }, null),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](38, 0, null, null, 2, 'nz-option', [], null, null, null, Tl.c, Tl.a)),
                    t['ɵdid'](39, 770048, [[
                        2,
                        4
                    ]], 0, _l.a, [[
                        2,
                        _l.c
                    ]], {
                        nzLabel: [
                            0,
                            'nzLabel'
                        ],
                        nzValue: [
                            1,
                            'nzValue'
                        ]
                    }, null),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵand'](0, [[
                        'typeUserManager',
                        2
                    ]], 0, 0, null, vn)),
                    (l()(), t['ɵeld'](42, 0, null, null, 26, 'div', [[
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
                    t['ɵdid'](43, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], {
                        nzGutter: [
                            0,
                            'nzGutter'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](44, 0, null, null, 22, 'div', [[
                        'nz-col',
                        ''
                    ]], [[
                        4,
                        'flex',
                        null
                    ]], null, null, null, null)),
                    t['ɵdid'](45, 4931584, null, 0, E.a, [
                        t.ElementRef,
                        [
                            2,
                            E.c
                        ],
                        t.Renderer2
                    ], {
                        nzSpan: [
                            0,
                            'nzSpan'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](46, 0, null, null, 20, 'nz-form-item', [], [
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
                        ],
                        [
                            2,
                            'ant-form-item-has-success',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-warning',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-error',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-is-validating',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-feedback',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-with-help',
                            null
                        ]
                    ], null, null, w.e, w.b)),
                    t['ɵdid'](47, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], null, null),
                    t['ɵdid'](48, 180224, null, 0, I.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](49, 0, null, 0, 4, 'nz-form-label', [], [[
                        4,
                        'flex',
                        null
                    ]], null, null, w.f, w.c)),
                    t['ɵdid'](50, 4931584, null, 0, E.a, [
                        t.ElementRef,
                        [
                            2,
                            E.c
                        ],
                        t.Renderer2
                    ], {
                        nzXs: [
                            0,
                            'nzXs'
                        ],
                        nzSm: [
                            1,
                            'nzSm'
                        ]
                    }, null),
                    t['ɵdid'](51, 180224, null, 0, I.d, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            3,
                            I.b
                        ]
                    ], null, null),
                    (l()(), t['ɵted'](52, 0, [
                        ' ',
                        ' * '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](54, 0, null, 0, 12, 'nz-form-control', [[
                        'nzHasFeedback',
                        ''
                    ]], [[
                        4,
                        'flex',
                        null
                    ]], null, null, w.d, w.a)),
                    t['ɵdid'](55, 4931584, null, 0, E.a, [
                        t.ElementRef,
                        [
                            2,
                            E.c
                        ],
                        t.Renderer2
                    ], {
                        nzXs: [
                            0,
                            'nzXs'
                        ],
                        nzSm: [
                            1,
                            'nzSm'
                        ]
                    }, null),
                    t['ɵdid'](56, 1818624, null, 1, I.a, [
                        t.ElementRef,
                        [
                            2,
                            I.c
                        ],
                        t.ChangeDetectorRef,
                        t.Renderer2,
                        k.e,
                        [
                            2,
                            I.b
                        ]
                    ], {
                        nzErrorTip: [
                            0,
                            'nzErrorTip'
                        ],
                        nzHasFeedback: [
                            1,
                            'nzHasFeedback'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 4, { defaultValidateControl: 0 }),
                    (l()(), t['ɵeld'](58, 0, null, 0, 7, 'input', [
                        [
                            'class',
                            'form-control'
                        ],
                        [
                            'formControlName',
                            'name'
                        ],
                        [
                            'nz-input',
                            ''
                        ],
                        [
                            'type',
                            'text'
                        ]
                    ], [
                        [
                            8,
                            'placeholder',
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
                        ],
                        [
                            2,
                            'ant-input-disabled',
                            null
                        ],
                        [
                            2,
                            'ant-input-borderless',
                            null
                        ],
                        [
                            2,
                            'ant-input-lg',
                            null
                        ],
                        [
                            2,
                            'ant-input-sm',
                            null
                        ],
                        [
                            1,
                            'disabled',
                            0
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
                        var u = !0;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 59)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 59).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 59)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 59)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](59, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.e]),
                    t['ɵdid'](61, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
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
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, [[
                        4,
                        4
                    ]], L.p, null, [L.i]),
                    t['ɵdid'](63, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    t['ɵdid'](64, 737280, null, 0, Ol.a, [
                        [
                            6,
                            L.p
                        ],
                        t.Renderer2,
                        t.ElementRef
                    ], null, null),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵand'](0, [[
                        'errname',
                        2
                    ]], 0, 0, null, fn)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, bn)),
                    t['ɵdid'](68, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](69, 0, null, null, 26, 'div', [[
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
                    t['ɵdid'](70, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], {
                        nzGutter: [
                            0,
                            'nzGutter'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](71, 0, null, null, 22, 'div', [[
                        'nz-col',
                        ''
                    ]], [[
                        4,
                        'flex',
                        null
                    ]], null, null, null, null)),
                    t['ɵdid'](72, 4931584, null, 0, E.a, [
                        t.ElementRef,
                        [
                            2,
                            E.c
                        ],
                        t.Renderer2
                    ], {
                        nzSpan: [
                            0,
                            'nzSpan'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](73, 0, null, null, 20, 'nz-form-item', [], [
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
                        ],
                        [
                            2,
                            'ant-form-item-has-success',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-warning',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-error',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-is-validating',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-feedback',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-with-help',
                            null
                        ]
                    ], null, null, w.e, w.b)),
                    t['ɵdid'](74, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], null, null),
                    t['ɵdid'](75, 180224, null, 0, I.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](76, 0, null, 0, 4, 'nz-form-label', [], [[
                        4,
                        'flex',
                        null
                    ]], null, null, w.f, w.c)),
                    t['ɵdid'](77, 4931584, null, 0, E.a, [
                        t.ElementRef,
                        [
                            2,
                            E.c
                        ],
                        t.Renderer2
                    ], {
                        nzXs: [
                            0,
                            'nzXs'
                        ],
                        nzSm: [
                            1,
                            'nzSm'
                        ]
                    }, null),
                    t['ɵdid'](78, 180224, null, 0, I.d, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef,
                        [
                            3,
                            I.b
                        ]
                    ], null, null),
                    (l()(), t['ɵted'](79, 0, [
                        ' ',
                        ' * '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](81, 0, null, 0, 12, 'nz-form-control', [[
                        'nzHasFeedback',
                        ''
                    ]], [[
                        4,
                        'flex',
                        null
                    ]], null, null, w.d, w.a)),
                    t['ɵdid'](82, 4931584, null, 0, E.a, [
                        t.ElementRef,
                        [
                            2,
                            E.c
                        ],
                        t.Renderer2
                    ], {
                        nzXs: [
                            0,
                            'nzXs'
                        ],
                        nzSm: [
                            1,
                            'nzSm'
                        ]
                    }, null),
                    t['ɵdid'](83, 1818624, null, 1, I.a, [
                        t.ElementRef,
                        [
                            2,
                            I.c
                        ],
                        t.ChangeDetectorRef,
                        t.Renderer2,
                        k.e,
                        [
                            2,
                            I.b
                        ]
                    ], {
                        nzErrorTip: [
                            0,
                            'nzErrorTip'
                        ],
                        nzHasFeedback: [
                            1,
                            'nzHasFeedback'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 6, { defaultValidateControl: 0 }),
                    (l()(), t['ɵeld'](85, 0, null, 0, 7, 'input', [
                        [
                            'class',
                            'form-control'
                        ],
                        [
                            'formControlName',
                            'email'
                        ],
                        [
                            'nz-input',
                            ''
                        ]
                    ], [
                        [
                            8,
                            'placeholder',
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
                        ],
                        [
                            2,
                            'ant-input-disabled',
                            null
                        ],
                        [
                            2,
                            'ant-input-borderless',
                            null
                        ],
                        [
                            2,
                            'ant-input-lg',
                            null
                        ],
                        [
                            2,
                            'ant-input-sm',
                            null
                        ],
                        [
                            1,
                            'disabled',
                            0
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
                        var u = !0;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 86)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 86).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 86)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 86)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](86, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.e]),
                    t['ɵdid'](88, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
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
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, [[
                        6,
                        4
                    ]], L.p, null, [L.i]),
                    t['ɵdid'](90, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    t['ɵdid'](91, 737280, null, 0, Ol.a, [
                        [
                            6,
                            L.p
                        ],
                        t.Renderer2,
                        t.ElementRef
                    ], null, null),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵand'](0, [[
                        'errEmail',
                        2
                    ]], 0, 0, null, Rn)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, yn)),
                    t['ɵdid'](95, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](96, 0, null, null, 3, 'div', [[
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
                    t['ɵdid'](97, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], {
                        nzGutter: [
                            0,
                            'nzGutter'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, In)),
                    t['ɵdid'](99, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](100, 0, null, null, 2, 'p', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](101, null, [
                        '* ',
                        '.'
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform(e.isLoading$))), l(n, 5, 0, e.form), l(n, 8, 0, ''), l(n, 11, 0, 24), l(n, 13, 0, 12), l(n, 15, 0), l(n, 18, 0, 24, 8), l(n, 23, 0, 24, 16), l(n, 24, 0, t['ɵnov'](n, 41), ''), l(n, 27, 0, t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 27, 0, t['ɵnov'](n, 30).transform('FORM.PLACEHOLDERS.TYPE_USER_MANAGER')), ''), ''), l(n, 32, 0, 'type'), l(n, 36, 0, t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 36, 0, t['ɵnov'](n, 37).transform(e.getNamePeopleType.get(e.PeopleType.physic))), ''), t['ɵinlineInterpolate'](1, '', e.PeopleType.physic, '')), l(n, 39, 0, t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 39, 0, t['ɵnov'](n, 40).transform(e.getNamePeopleType.get(e.PeopleType.workStation))), ''), t['ɵinlineInterpolate'](1, '', e.PeopleType.workStation, '')), l(n, 43, 0, 24), l(n, 45, 0, 12), l(n, 47, 0), l(n, 50, 0, 24, 8), l(n, 55, 0, 24, 16), l(n, 56, 0, t['ɵnov'](n, 66), ''), l(n, 61, 0, 'name'), l(n, 64, 0), l(n, 68, 0, e.seeExtraInputs), l(n, 70, 0, 24), l(n, 72, 0, 12), l(n, 74, 0), l(n, 77, 0, 24, 8), l(n, 82, 0, 24, 16), l(n, 83, 0, t['ɵnov'](n, 93), ''), l(n, 88, 0, 'email'), l(n, 91, 0), l(n, 95, 0, e.seeExtraInputs), l(n, 97, 0, 24), l(n, 99, 0, e.seeExtraInputs);
                }, function (l, n) {
                    var e = n.component;
                    l(n, 3, 0, t['ɵnov'](n, 7).ngClassUntouched, t['ɵnov'](n, 7).ngClassTouched, t['ɵnov'](n, 7).ngClassPristine, t['ɵnov'](n, 7).ngClassDirty, t['ɵnov'](n, 7).ngClassValid, t['ɵnov'](n, 7).ngClassInvalid, t['ɵnov'](n, 7).ngClassPending, 'horizontal' === t['ɵnov'](n, 8).nzLayout, 'vertical' === t['ɵnov'](n, 8).nzLayout, 'inline' === t['ɵnov'](n, 8).nzLayout), l(n, 10, 0, 'top' === t['ɵnov'](n, 11).nzAlign, 'middle' === t['ɵnov'](n, 11).nzAlign, 'bottom' === t['ɵnov'](n, 11).nzAlign, 'start' === t['ɵnov'](n, 11).nzJustify, 'end' === t['ɵnov'](n, 11).nzJustify, 'center' === t['ɵnov'](n, 11).nzJustify, 'space-around' === t['ɵnov'](n, 11).nzJustify, 'space-between' === t['ɵnov'](n, 11).nzJustify), l(n, 12, 0, t['ɵnov'](n, 13).hostFlexStyle), l(n, 14, 1, [
                        'top' === t['ɵnov'](n, 15).nzAlign,
                        'middle' === t['ɵnov'](n, 15).nzAlign,
                        'bottom' === t['ɵnov'](n, 15).nzAlign,
                        'start' === t['ɵnov'](n, 15).nzJustify,
                        'end' === t['ɵnov'](n, 15).nzJustify,
                        'center' === t['ɵnov'](n, 15).nzJustify,
                        'space-around' === t['ɵnov'](n, 15).nzJustify,
                        'space-between' === t['ɵnov'](n, 15).nzJustify,
                        'success' === t['ɵnov'](n, 16).status,
                        'warning' === t['ɵnov'](n, 16).status,
                        'error' === t['ɵnov'](n, 16).status,
                        'validating' === t['ɵnov'](n, 16).status,
                        t['ɵnov'](n, 16).hasFeedback && t['ɵnov'](n, 16).status,
                        t['ɵnov'](n, 16).withHelpClass
                    ]), l(n, 17, 0, t['ɵnov'](n, 18).hostFlexStyle), l(n, 20, 0, t['ɵunv'](n, 20, 0, t['ɵnov'](n, 21).transform('FORM.LABELS.TYPE_USER_MANAGER'))), l(n, 22, 0, t['ɵnov'](n, 23).hostFlexStyle), l(n, 26, 1, [
                        'large' === t['ɵnov'](n, 27).nzSize,
                        'small' === t['ɵnov'](n, 27).nzSize,
                        t['ɵnov'](n, 27).nzShowArrow,
                        t['ɵnov'](n, 27).nzDisabled,
                        (t['ɵnov'](n, 27).nzShowSearch || 'default' !== t['ɵnov'](n, 27).nzMode) && !t['ɵnov'](n, 27).nzDisabled,
                        t['ɵnov'](n, 27).nzAllowClear,
                        t['ɵnov'](n, 27).nzBorderless,
                        t['ɵnov'](n, 27).nzOpen,
                        t['ɵnov'](n, 27).nzOpen || t['ɵnov'](n, 27).focused,
                        'default' === t['ɵnov'](n, 27).nzMode,
                        'default' !== t['ɵnov'](n, 27).nzMode,
                        t['ɵnov'](n, 34).ngClassUntouched,
                        t['ɵnov'](n, 34).ngClassTouched,
                        t['ɵnov'](n, 34).ngClassPristine,
                        t['ɵnov'](n, 34).ngClassDirty,
                        t['ɵnov'](n, 34).ngClassValid,
                        t['ɵnov'](n, 34).ngClassInvalid,
                        t['ɵnov'](n, 34).ngClassPending
                    ]), l(n, 42, 0, 'top' === t['ɵnov'](n, 43).nzAlign, 'middle' === t['ɵnov'](n, 43).nzAlign, 'bottom' === t['ɵnov'](n, 43).nzAlign, 'start' === t['ɵnov'](n, 43).nzJustify, 'end' === t['ɵnov'](n, 43).nzJustify, 'center' === t['ɵnov'](n, 43).nzJustify, 'space-around' === t['ɵnov'](n, 43).nzJustify, 'space-between' === t['ɵnov'](n, 43).nzJustify), l(n, 44, 0, t['ɵnov'](n, 45).hostFlexStyle), l(n, 46, 1, [
                        'top' === t['ɵnov'](n, 47).nzAlign,
                        'middle' === t['ɵnov'](n, 47).nzAlign,
                        'bottom' === t['ɵnov'](n, 47).nzAlign,
                        'start' === t['ɵnov'](n, 47).nzJustify,
                        'end' === t['ɵnov'](n, 47).nzJustify,
                        'center' === t['ɵnov'](n, 47).nzJustify,
                        'space-around' === t['ɵnov'](n, 47).nzJustify,
                        'space-between' === t['ɵnov'](n, 47).nzJustify,
                        'success' === t['ɵnov'](n, 48).status,
                        'warning' === t['ɵnov'](n, 48).status,
                        'error' === t['ɵnov'](n, 48).status,
                        'validating' === t['ɵnov'](n, 48).status,
                        t['ɵnov'](n, 48).hasFeedback && t['ɵnov'](n, 48).status,
                        t['ɵnov'](n, 48).withHelpClass
                    ]), l(n, 49, 0, t['ɵnov'](n, 50).hostFlexStyle), l(n, 52, 0, t['ɵunv'](n, 52, 0, t['ɵnov'](n, 53).transform('FORM.LABELS.NAMES'))), l(n, 54, 0, t['ɵnov'](n, 55).hostFlexStyle), l(n, 58, 1, [
                        t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 58, 0, t['ɵnov'](n, 65).transform(e.placeHolderName)), ''),
                        t['ɵnov'](n, 63).ngClassUntouched,
                        t['ɵnov'](n, 63).ngClassTouched,
                        t['ɵnov'](n, 63).ngClassPristine,
                        t['ɵnov'](n, 63).ngClassDirty,
                        t['ɵnov'](n, 63).ngClassValid,
                        t['ɵnov'](n, 63).ngClassInvalid,
                        t['ɵnov'](n, 63).ngClassPending,
                        t['ɵnov'](n, 64).disabled,
                        t['ɵnov'](n, 64).nzBorderless,
                        'large' === t['ɵnov'](n, 64).nzSize,
                        'small' === t['ɵnov'](n, 64).nzSize,
                        t['ɵnov'](n, 64).disabled || null
                    ]), l(n, 69, 0, 'top' === t['ɵnov'](n, 70).nzAlign, 'middle' === t['ɵnov'](n, 70).nzAlign, 'bottom' === t['ɵnov'](n, 70).nzAlign, 'start' === t['ɵnov'](n, 70).nzJustify, 'end' === t['ɵnov'](n, 70).nzJustify, 'center' === t['ɵnov'](n, 70).nzJustify, 'space-around' === t['ɵnov'](n, 70).nzJustify, 'space-between' === t['ɵnov'](n, 70).nzJustify), l(n, 71, 0, t['ɵnov'](n, 72).hostFlexStyle), l(n, 73, 1, [
                        'top' === t['ɵnov'](n, 74).nzAlign,
                        'middle' === t['ɵnov'](n, 74).nzAlign,
                        'bottom' === t['ɵnov'](n, 74).nzAlign,
                        'start' === t['ɵnov'](n, 74).nzJustify,
                        'end' === t['ɵnov'](n, 74).nzJustify,
                        'center' === t['ɵnov'](n, 74).nzJustify,
                        'space-around' === t['ɵnov'](n, 74).nzJustify,
                        'space-between' === t['ɵnov'](n, 74).nzJustify,
                        'success' === t['ɵnov'](n, 75).status,
                        'warning' === t['ɵnov'](n, 75).status,
                        'error' === t['ɵnov'](n, 75).status,
                        'validating' === t['ɵnov'](n, 75).status,
                        t['ɵnov'](n, 75).hasFeedback && t['ɵnov'](n, 75).status,
                        t['ɵnov'](n, 75).withHelpClass
                    ]), l(n, 76, 0, t['ɵnov'](n, 77).hostFlexStyle), l(n, 79, 0, t['ɵunv'](n, 79, 0, t['ɵnov'](n, 80).transform('FORM.LABELS.EMAIL'))), l(n, 81, 0, t['ɵnov'](n, 82).hostFlexStyle), l(n, 85, 1, [
                        t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 85, 0, t['ɵnov'](n, 92).transform('FORM.PLACEHOLDERS.EMAIL')), ''),
                        t['ɵnov'](n, 90).ngClassUntouched,
                        t['ɵnov'](n, 90).ngClassTouched,
                        t['ɵnov'](n, 90).ngClassPristine,
                        t['ɵnov'](n, 90).ngClassDirty,
                        t['ɵnov'](n, 90).ngClassValid,
                        t['ɵnov'](n, 90).ngClassInvalid,
                        t['ɵnov'](n, 90).ngClassPending,
                        t['ɵnov'](n, 91).disabled,
                        t['ɵnov'](n, 91).nzBorderless,
                        'large' === t['ɵnov'](n, 91).nzSize,
                        'small' === t['ɵnov'](n, 91).nzSize,
                        t['ɵnov'](n, 91).disabled || null
                    ]), l(n, 96, 0, 'top' === t['ɵnov'](n, 97).nzAlign, 'middle' === t['ɵnov'](n, 97).nzAlign, 'bottom' === t['ɵnov'](n, 97).nzAlign, 'start' === t['ɵnov'](n, 97).nzJustify, 'end' === t['ɵnov'](n, 97).nzJustify, 'center' === t['ɵnov'](n, 97).nzJustify, 'space-around' === t['ɵnov'](n, 97).nzJustify, 'space-between' === t['ɵnov'](n, 97).nzJustify), l(n, 101, 0, t['ɵunv'](n, 101, 0, t['ɵnov'](n, 102).transform('GLOBAL.FORM')));
                });
            }
            var Ln = e('vZsH'), Dn = e('1O3W'), On = e('9gLZ'), Tn = e('9b/N'), _n = e('1z/I'), An = e('7KAL'), xn = e('PgQK'), Fn = e('mW00'), Nn = e('jQCg'), Pn = e('W0Pu'), Mn = t['ɵcrt']({
                encapsulation: 2,
                styles: [],
                data: {}
            });
            function Vn(l) {
                return t['ɵvid'](0, [(l()(), t['ɵand'](0, null, null, 0))], null, null);
            }
            function Un(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Vn)),
                    t['ɵdid'](2, 540672, null, 0, a.NgTemplateOutlet, [t.ViewContainerRef], {
                        ngTemplateOutlet: [
                            0,
                            'ngTemplateOutlet'
                        ]
                    }, null),
                    (l()(), t['ɵand'](0, null, null, 0))
                ], function (l, n) {
                    l(n, 2, 0, t['ɵnov'](n.parent.parent, 3).template);
                }, null);
            }
            function jn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Un)),
                    t['ɵdid'](2, 16384, null, 0, a.NgIf, [
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
                    (l()(), t['ɵand'](0, null, null, 0))
                ], function (l, n) {
                    l(n, 2, 0, n.component.nzSimple, t['ɵnov'](n.parent, 5).template);
                }, null);
            }
            function Bn(l) {
                return t['ɵvid'](2, [
                    (l()(), t['ɵand'](16777216, null, null, 1, null, jn)),
                    t['ɵdid'](1, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](2, 0, null, null, 1, 'nz-pagination-simple', [], null, [[
                        null,
                        'pageIndexChange'
                    ]], function (l, n, e) {
                        var t = !0;
                        return 'pageIndexChange' === n && (t = !1 !== l.component.onPageIndexChange(e) && t), t;
                    }, Gn, Jn)),
                    t['ɵdid'](3, 573440, [[
                        'simplePagination',
                        4
                    ]], 0, Ln.f, [
                        t.Renderer2,
                        t.ElementRef
                    ], {
                        itemRender: [
                            0,
                            'itemRender'
                        ],
                        disabled: [
                            1,
                            'disabled'
                        ],
                        locale: [
                            2,
                            'locale'
                        ],
                        total: [
                            3,
                            'total'
                        ],
                        pageIndex: [
                            4,
                            'pageIndex'
                        ],
                        pageSize: [
                            5,
                            'pageSize'
                        ]
                    }, { pageIndexChange: 'pageIndexChange' }),
                    (l()(), t['ɵeld'](4, 0, null, null, 1, 'nz-pagination-default', [], null, [
                        [
                            null,
                            'pageIndexChange'
                        ],
                        [
                            null,
                            'pageSizeChange'
                        ]
                    ], function (l, n, e) {
                        var t = !0, u = l.component;
                        return 'pageIndexChange' === n && (t = !1 !== u.onPageIndexChange(e) && t), 'pageSizeChange' === n && (t = !1 !== u.onPageSizeChange(e) && t), t;
                    }, pe, re)),
                    t['ɵdid'](5, 573440, [[
                        'defaultPagination',
                        4
                    ]], 0, Ln.b, [
                        t.Renderer2,
                        t.ElementRef
                    ], {
                        nzSize: [
                            0,
                            'nzSize'
                        ],
                        itemRender: [
                            1,
                            'itemRender'
                        ],
                        showTotal: [
                            2,
                            'showTotal'
                        ],
                        disabled: [
                            3,
                            'disabled'
                        ],
                        locale: [
                            4,
                            'locale'
                        ],
                        showSizeChanger: [
                            5,
                            'showSizeChanger'
                        ],
                        showQuickJumper: [
                            6,
                            'showQuickJumper'
                        ],
                        total: [
                            7,
                            'total'
                        ],
                        pageIndex: [
                            8,
                            'pageIndex'
                        ],
                        pageSize: [
                            9,
                            'pageSize'
                        ],
                        pageSizeOptions: [
                            10,
                            'pageSizeOptions'
                        ]
                    }, {
                        pageIndexChange: 'pageIndexChange',
                        pageSizeChange: 'pageSizeChange'
                    })
                ], function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.showPagination), l(n, 3, 0, e.nzItemRender, e.nzDisabled, e.locale, e.nzTotal, e.nzPageIndex, e.nzPageSize), l(n, 5, 1, [
                        e.size,
                        e.nzItemRender,
                        e.nzShowTotal,
                        e.nzDisabled,
                        e.locale,
                        e.nzShowSizeChanger,
                        e.nzShowQuickJumper,
                        e.nzTotal,
                        e.nzPageIndex,
                        e.nzPageSize,
                        e.nzPageSizeOptions
                    ]);
                }, null);
            }
            var Jn = t['ɵcrt']({
                encapsulation: 2,
                styles: [],
                data: {}
            });
            function Hn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'li', [
                        [
                            'nz-pagination-item',
                            ''
                        ],
                        [
                            'type',
                            'prev'
                        ]
                    ], [
                        [
                            1,
                            'title',
                            0
                        ],
                        [
                            2,
                            'ant-pagination-prev',
                            null
                        ],
                        [
                            2,
                            'ant-pagination-next',
                            null
                        ],
                        [
                            2,
                            'ant-pagination-item',
                            null
                        ],
                        [
                            2,
                            'ant-pagination-jump-prev',
                            null
                        ],
                        [
                            2,
                            'ant-pagination-jump-prev-custom-icon',
                            null
                        ],
                        [
                            2,
                            'ant-pagination-jump-next',
                            null
                        ],
                        [
                            2,
                            'ant-pagination-jump-next-custom-icon',
                            null
                        ],
                        [
                            2,
                            'ant-pagination-disabled',
                            null
                        ],
                        [
                            2,
                            'ant-pagination-item-active',
                            null
                        ],
                        [
                            1,
                            'title',
                            0
                        ]
                    ], [[
                        null,
                        'click'
                    ]], function (l, n, e) {
                        var u = !0, o = l.component;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 1).clickItem() && u), 'click' === n && (u = !1 !== o.prePage() && u), u;
                    }, ae, Wn)),
                    t['ɵdid'](1, 573440, null, 0, Ln.c, [], {
                        disabled: [
                            0,
                            'disabled'
                        ],
                        type: [
                            1,
                            'type'
                        ],
                        itemRender: [
                            2,
                            'itemRender'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](2, 0, null, null, 4, 'li', [[
                        'class',
                        'ant-pagination-simple-pager'
                    ]], [[
                        1,
                        'title',
                        0
                    ]], null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 0, 'input', [[
                        'size',
                        '3'
                    ]], [
                        [
                            8,
                            'disabled',
                            0
                        ],
                        [
                            8,
                            'value',
                            0
                        ]
                    ], [[
                        null,
                        'keydown.enter'
                    ]], function (l, n, e) {
                        var t = !0;
                        return 'keydown.enter' === n && (t = !1 !== l.component.jumpToPageViaInput(e) && t), t;
                    }, null, null)),
                    (l()(), t['ɵeld'](4, 0, null, null, 1, 'span', [[
                        'class',
                        'ant-pagination-slash'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['/'])),
                    (l()(), t['ɵted'](6, null, [
                        ' ',
                        ' '
                    ])),
                    (l()(), t['ɵeld'](7, 0, null, null, 1, 'li', [
                        [
                            'nz-pagination-item',
                            ''
                        ],
                        [
                            'type',
                            'next'
                        ]
                    ], [
                        [
                            1,
                            'title',
                            0
                        ],
                        [
                            2,
                            'ant-pagination-prev',
                            null
                        ],
                        [
                            2,
                            'ant-pagination-next',
                            null
                        ],
                        [
                            2,
                            'ant-pagination-item',
                            null
                        ],
                        [
                            2,
                            'ant-pagination-jump-prev',
                            null
                        ],
                        [
                            2,
                            'ant-pagination-jump-prev-custom-icon',
                            null
                        ],
                        [
                            2,
                            'ant-pagination-jump-next',
                            null
                        ],
                        [
                            2,
                            'ant-pagination-jump-next-custom-icon',
                            null
                        ],
                        [
                            2,
                            'ant-pagination-disabled',
                            null
                        ],
                        [
                            2,
                            'ant-pagination-item-active',
                            null
                        ],
                        [
                            1,
                            'title',
                            0
                        ]
                    ], [[
                        null,
                        'click'
                    ]], function (l, n, e) {
                        var u = !0, o = l.component;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 8).clickItem() && u), 'click' === n && (u = !1 !== o.nextPage() && u), u;
                    }, ae, Wn)),
                    t['ɵdid'](8, 573440, null, 0, Ln.c, [], {
                        disabled: [
                            0,
                            'disabled'
                        ],
                        type: [
                            1,
                            'type'
                        ],
                        itemRender: [
                            2,
                            'itemRender'
                        ]
                    }, null)
                ], function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.isFirstIndex, 'prev', e.itemRender), l(n, 8, 0, e.isLastIndex, 'next', e.itemRender);
                }, function (l, n) {
                    var e = n.component;
                    l(n, 0, 1, [
                        e.locale.prev_page,
                        'prev' === t['ɵnov'](n, 1).type,
                        'next' === t['ɵnov'](n, 1).type,
                        'page' === t['ɵnov'](n, 1).type,
                        'prev_5' === t['ɵnov'](n, 1).type,
                        'prev_5' === t['ɵnov'](n, 1).type,
                        'next_5' === t['ɵnov'](n, 1).type,
                        'next_5' === t['ɵnov'](n, 1).type,
                        t['ɵnov'](n, 1).disabled,
                        t['ɵnov'](n, 1).active,
                        t['ɵnov'](n, 1).title
                    ]), l(n, 2, 0, e.pageIndex + '/' + e.lastIndex), l(n, 3, 0, e.disabled, e.pageIndex), l(n, 6, 0, e.lastIndex), l(n, 7, 1, [
                        null == e.locale ? null : e.locale.next_page,
                        'prev' === t['ɵnov'](n, 8).type,
                        'next' === t['ɵnov'](n, 8).type,
                        'page' === t['ɵnov'](n, 8).type,
                        'prev_5' === t['ɵnov'](n, 8).type,
                        'prev_5' === t['ɵnov'](n, 8).type,
                        'next_5' === t['ɵnov'](n, 8).type,
                        'next_5' === t['ɵnov'](n, 8).type,
                        t['ɵnov'](n, 8).disabled,
                        t['ɵnov'](n, 8).active,
                        t['ɵnov'](n, 8).title
                    ]);
                });
            }
            function Gn(l) {
                return t['ɵvid'](2, [
                    t['ɵqud'](402653184, 1, { template: 0 }),
                    (l()(), t['ɵand'](0, [
                        [
                            1,
                            2
                        ],
                        [
                            'containerTemplate',
                            2
                        ]
                    ], null, 0, null, Hn))
                ], null, null);
            }
            var qn = t['ɵcrt']({
                encapsulation: 2,
                styles: [],
                data: {}
            });
            function $n(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'nz-option', [], null, null, null, Tl.c, Tl.a)),
                    t['ɵdid'](1, 770048, [[
                        1,
                        4
                    ]], 0, _l.a, [[
                        2,
                        _l.c
                    ]], {
                        nzLabel: [
                            0,
                            'nzLabel'
                        ],
                        nzValue: [
                            1,
                            'nzValue'
                        ]
                    }, null)
                ], function (l, n) {
                    l(n, 1, 0, n.context.$implicit.label, n.context.$implicit.value);
                }, null);
            }
            function Kn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 9, 'nz-select', [[
                        'class',
                        'ant-pagination-options-size-changer'
                    ]], [
                        [
                            2,
                            'ant-select-lg',
                            null
                        ],
                        [
                            2,
                            'ant-select-sm',
                            null
                        ],
                        [
                            2,
                            'ant-select-show-arrow',
                            null
                        ],
                        [
                            2,
                            'ant-select-disabled',
                            null
                        ],
                        [
                            2,
                            'ant-select-show-search',
                            null
                        ],
                        [
                            2,
                            'ant-select-allow-clear',
                            null
                        ],
                        [
                            2,
                            'ant-select-borderless',
                            null
                        ],
                        [
                            2,
                            'ant-select-open',
                            null
                        ],
                        [
                            2,
                            'ant-select-focused',
                            null
                        ],
                        [
                            2,
                            'ant-select-single',
                            null
                        ],
                        [
                            2,
                            'ant-select-multiple',
                            null
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
                            'ngModelChange'
                        ],
                        [
                            null,
                            'click'
                        ]
                    ], function (l, n, e) {
                        var u = !0, o = l.component;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 1).onHostClick() && u), 'ngModelChange' === n && (u = !1 !== o.onPageSizeChange(e) && u), u;
                    }, Tl.d, Tl.b)),
                    t['ɵdid'](1, 6012928, null, 2, _l.h, [
                        T.a,
                        t.ChangeDetectorRef,
                        t.ElementRef,
                        z.a,
                        Al.d,
                        [
                            8,
                            null
                        ]
                    ], {
                        nzSize: [
                            0,
                            'nzSize'
                        ],
                        nzDisabled: [
                            1,
                            'nzDisabled'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 1, { listOfNzOptionComponent: 1 }),
                    t['ɵqud'](603979776, 2, { listOfNzOptionGroupComponent: 1 }),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [_l.h]),
                    t['ɵdid'](5, 671744, null, 0, L.t, [
                        [
                            8,
                            null
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
                            L.o
                        ]
                    ], {
                        model: [
                            0,
                            'model'
                        ]
                    }, { update: 'ngModelChange' }),
                    t['ɵprd'](2048, null, L.p, null, [L.t]),
                    t['ɵdid'](7, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, $n)),
                    t['ɵdid'](9, 278528, null, 0, a.NgForOf, [
                        t.ViewContainerRef,
                        t.TemplateRef,
                        t.IterableDiffers
                    ], {
                        ngForOf: [
                            0,
                            'ngForOf'
                        ],
                        ngForTrackBy: [
                            1,
                            'ngForTrackBy'
                        ]
                    }, null)
                ], function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.nzSize, e.disabled), l(n, 5, 0, e.pageSize), l(n, 9, 0, e.listOfPageSizeOption, e.trackByOption);
                }, function (l, n) {
                    l(n, 0, 1, [
                        'large' === t['ɵnov'](n, 1).nzSize,
                        'small' === t['ɵnov'](n, 1).nzSize,
                        t['ɵnov'](n, 1).nzShowArrow,
                        t['ɵnov'](n, 1).nzDisabled,
                        (t['ɵnov'](n, 1).nzShowSearch || 'default' !== t['ɵnov'](n, 1).nzMode) && !t['ɵnov'](n, 1).nzDisabled,
                        t['ɵnov'](n, 1).nzAllowClear,
                        t['ɵnov'](n, 1).nzBorderless,
                        t['ɵnov'](n, 1).nzOpen,
                        t['ɵnov'](n, 1).nzOpen || t['ɵnov'](n, 1).focused,
                        'default' === t['ɵnov'](n, 1).nzMode,
                        'default' !== t['ɵnov'](n, 1).nzMode,
                        t['ɵnov'](n, 7).ngClassUntouched,
                        t['ɵnov'](n, 7).ngClassTouched,
                        t['ɵnov'](n, 7).ngClassPristine,
                        t['ɵnov'](n, 7).ngClassDirty,
                        t['ɵnov'](n, 7).ngClassValid,
                        t['ɵnov'](n, 7).ngClassInvalid,
                        t['ɵnov'](n, 7).ngClassPending
                    ]);
                });
            }
            function Zn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, 'div', [[
                        'class',
                        'ant-pagination-options-quick-jumper'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        ' ',
                        ' '
                    ])),
                    (l()(), t['ɵeld'](2, 0, null, null, 0, 'input', [], [[
                        8,
                        'disabled',
                        0
                    ]], [[
                        null,
                        'keydown.enter'
                    ]], function (l, n, e) {
                        var t = !0;
                        return 'keydown.enter' === n && (t = !1 !== l.component.jumpToPageViaInput(e) && t), t;
                    }, null, null)),
                    (l()(), t['ɵted'](3, null, [
                        ' ',
                        ' '
                    ]))
                ], null, function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.locale.jump_to), l(n, 2, 0, e.disabled), l(n, 3, 0, e.locale.page);
                });
            }
            function Xn(l) {
                return t['ɵvid'](2, [
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Kn)),
                    t['ɵdid'](1, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Zn)),
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
                    l(n, 1, 0, e.showSizeChanger), l(n, 3, 0, e.showQuickJumper);
                }, null);
            }
            var Wn = t['ɵcrt']({
                encapsulation: 2,
                styles: [],
                data: {}
            });
            function Yn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'a', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        '',
                        ''
                    ]))
                ], null, function (l, n) {
                    l(n, 1, 0, n.parent.context.page);
                });
            }
            function Qn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, 'button', [[
                        'class',
                        'ant-pagination-item-link'
                    ]], [[
                        8,
                        'disabled',
                        0
                    ]], null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'i', [
                        [
                            'nz-icon',
                            ''
                        ],
                        [
                            'nzType',
                            'left'
                        ]
                    ], [[
                        2,
                        'anticon',
                        null
                    ]], null, null, null, null)),
                    t['ɵdid'](2, 2703360, null, 0, s.a, [
                        t.ElementRef,
                        s.d,
                        t.Renderer2,
                        [
                            2,
                            s.c
                        ]
                    ], {
                        nzType: [
                            0,
                            'nzType'
                        ]
                    }, null)
                ], function (l, n) {
                    l(n, 2, 0, 'left');
                }, function (l, n) {
                    l(n, 0, 0, n.component.disabled), l(n, 1, 0, !0);
                });
            }
            function le(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, 'button', [[
                        'class',
                        'ant-pagination-item-link'
                    ]], [[
                        8,
                        'disabled',
                        0
                    ]], null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'i', [
                        [
                            'nz-icon',
                            ''
                        ],
                        [
                            'nzType',
                            'right'
                        ]
                    ], [[
                        2,
                        'anticon',
                        null
                    ]], null, null, null, null)),
                    t['ɵdid'](2, 2703360, null, 0, s.a, [
                        t.ElementRef,
                        s.d,
                        t.Renderer2,
                        [
                            2,
                            s.c
                        ]
                    ], {
                        nzType: [
                            0,
                            'nzType'
                        ]
                    }, null)
                ], function (l, n) {
                    l(n, 2, 0, 'right');
                }, function (l, n) {
                    l(n, 0, 0, n.component.disabled), l(n, 1, 0, !0);
                });
            }
            function ne(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'i', [
                        [
                            'class',
                            'ant-pagination-item-link-icon'
                        ],
                        [
                            'nz-icon',
                            ''
                        ],
                        [
                            'nzType',
                            'double-left'
                        ]
                    ], [[
                        2,
                        'anticon',
                        null
                    ]], null, null, null, null)),
                    t['ɵdid'](1, 2703360, null, 0, s.a, [
                        t.ElementRef,
                        s.d,
                        t.Renderer2,
                        [
                            2,
                            s.c
                        ]
                    ], {
                        nzType: [
                            0,
                            'nzType'
                        ]
                    }, null)
                ], function (l, n) {
                    l(n, 1, 0, 'double-left');
                }, function (l, n) {
                    l(n, 0, 0, !0);
                });
            }
            function ee(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'i', [
                        [
                            'class',
                            'ant-pagination-item-link-icon'
                        ],
                        [
                            'nz-icon',
                            ''
                        ],
                        [
                            'nzType',
                            'double-right'
                        ]
                    ], [[
                        2,
                        'anticon',
                        null
                    ]], null, null, null, null)),
                    t['ɵdid'](1, 2703360, null, 0, s.a, [
                        t.ElementRef,
                        s.d,
                        t.Renderer2,
                        [
                            2,
                            s.c
                        ]
                    ], {
                        nzType: [
                            0,
                            'nzType'
                        ]
                    }, null)
                ], function (l, n) {
                    l(n, 1, 0, 'double-right');
                }, function (l, n) {
                    l(n, 0, 0, !0);
                });
            }
            function te(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 8, 'div', [[
                        'class',
                        'ant-pagination-item-container'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 5, null, null, null, null, null, null, null)),
                    t['ɵdid'](2, 16384, null, 0, a.NgSwitch, [], {
                        ngSwitch: [
                            0,
                            'ngSwitch'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, ne)),
                    t['ɵdid'](4, 278528, null, 0, a.NgSwitchCase, [
                        t.ViewContainerRef,
                        t.TemplateRef,
                        a.NgSwitch
                    ], {
                        ngSwitchCase: [
                            0,
                            'ngSwitchCase'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, ee)),
                    t['ɵdid'](6, 278528, null, 0, a.NgSwitchCase, [
                        t.ViewContainerRef,
                        t.TemplateRef,
                        a.NgSwitch
                    ], {
                        ngSwitchCase: [
                            0,
                            'ngSwitchCase'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](7, 0, null, null, 1, 'span', [[
                        'class',
                        'ant-pagination-item-ellipsis'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['\u2022\u2022\u2022']))
                ], function (l, n) {
                    l(n, 2, 0, n.parent.parent.context.$implicit), l(n, 4, 0, 'prev_5'), l(n, 6, 0, 'next_5');
                }, null);
            }
            function ue(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 4, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 3, 'a', [[
                        'class',
                        'ant-pagination-item-link'
                    ]], null, null, null, null, null)),
                    t['ɵdid'](2, 16384, null, 0, a.NgSwitch, [], {
                        ngSwitch: [
                            0,
                            'ngSwitch'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, te)),
                    t['ɵdid'](4, 16384, null, 0, a.NgSwitchDefault, [
                        t.ViewContainerRef,
                        t.TemplateRef,
                        a.NgSwitch
                    ], null, null)
                ], function (l, n) {
                    l(n, 2, 0, n.parent.context.$implicit);
                }, null);
            }
            function oe(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 9, null, null, null, null, null, null, null)),
                    t['ɵdid'](1, 16384, null, 0, a.NgSwitch, [], {
                        ngSwitch: [
                            0,
                            'ngSwitch'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Yn)),
                    t['ɵdid'](3, 278528, null, 0, a.NgSwitchCase, [
                        t.ViewContainerRef,
                        t.TemplateRef,
                        a.NgSwitch
                    ], {
                        ngSwitchCase: [
                            0,
                            'ngSwitchCase'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Qn)),
                    t['ɵdid'](5, 278528, null, 0, a.NgSwitchCase, [
                        t.ViewContainerRef,
                        t.TemplateRef,
                        a.NgSwitch
                    ], {
                        ngSwitchCase: [
                            0,
                            'ngSwitchCase'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, le)),
                    t['ɵdid'](7, 278528, null, 0, a.NgSwitchCase, [
                        t.ViewContainerRef,
                        t.TemplateRef,
                        a.NgSwitch
                    ], {
                        ngSwitchCase: [
                            0,
                            'ngSwitchCase'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, ue)),
                    t['ɵdid'](9, 16384, null, 0, a.NgSwitchDefault, [
                        t.ViewContainerRef,
                        t.TemplateRef,
                        a.NgSwitch
                    ], null, null),
                    (l()(), t['ɵand'](0, null, null, 0))
                ], function (l, n) {
                    l(n, 1, 0, n.context.$implicit), l(n, 3, 0, 'page'), l(n, 5, 0, 'prev'), l(n, 7, 0, 'next');
                }, null);
            }
            function ie(l) {
                return t['ɵvid'](0, [(l()(), t['ɵand'](0, null, null, 0))], null, null);
            }
            function ae(l) {
                return t['ɵvid'](2, [
                    (l()(), t['ɵand'](0, [[
                        'renderItemTemplate',
                        2
                    ]], null, 0, null, oe)),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, ie)),
                    t['ɵdid'](2, 540672, null, 0, a.NgTemplateOutlet, [t.ViewContainerRef], {
                        ngTemplateOutletContext: [
                            0,
                            'ngTemplateOutletContext'
                        ],
                        ngTemplateOutlet: [
                            1,
                            'ngTemplateOutlet'
                        ]
                    }, null),
                    t['ɵpod'](3, {
                        $implicit: 0,
                        page: 1
                    })
                ], function (l, n) {
                    var e = n.component, u = l(n, 3, 0, e.type, e.index);
                    l(n, 2, 0, u, e.itemRender || t['ɵnov'](n, 0));
                }, null);
            }
            var re = t['ɵcrt']({
                encapsulation: 2,
                styles: [],
                data: {}
            });
            function se(l) {
                return t['ɵvid'](0, [(l()(), t['ɵand'](0, null, null, 0))], null, null);
            }
            function de(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, 'li', [[
                        'class',
                        'ant-pagination-total-text'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, se)),
                    t['ɵdid'](2, 540672, null, 0, a.NgTemplateOutlet, [t.ViewContainerRef], {
                        ngTemplateOutletContext: [
                            0,
                            'ngTemplateOutletContext'
                        ],
                        ngTemplateOutlet: [
                            1,
                            'ngTemplateOutlet'
                        ]
                    }, null),
                    t['ɵpod'](3, {
                        $implicit: 0,
                        range: 1
                    })
                ], function (l, n) {
                    var e = n.component, t = l(n, 3, 0, e.total, e.ranges);
                    l(n, 2, 0, t, e.showTotal);
                }, null);
            }
            function ce(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'li', [[
                        'nz-pagination-item',
                        ''
                    ]], [
                        [
                            2,
                            'ant-pagination-prev',
                            null
                        ],
                        [
                            2,
                            'ant-pagination-next',
                            null
                        ],
                        [
                            2,
                            'ant-pagination-item',
                            null
                        ],
                        [
                            2,
                            'ant-pagination-jump-prev',
                            null
                        ],
                        [
                            2,
                            'ant-pagination-jump-prev-custom-icon',
                            null
                        ],
                        [
                            2,
                            'ant-pagination-jump-next',
                            null
                        ],
                        [
                            2,
                            'ant-pagination-jump-next-custom-icon',
                            null
                        ],
                        [
                            2,
                            'ant-pagination-disabled',
                            null
                        ],
                        [
                            2,
                            'ant-pagination-item-active',
                            null
                        ],
                        [
                            1,
                            'title',
                            0
                        ]
                    ], [
                        [
                            null,
                            'gotoIndex'
                        ],
                        [
                            null,
                            'diffIndex'
                        ],
                        [
                            null,
                            'click'
                        ]
                    ], function (l, n, e) {
                        var u = !0, o = l.component;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 1).clickItem() && u), 'gotoIndex' === n && (u = !1 !== o.jumpPage(e) && u), 'diffIndex' === n && (u = !1 !== o.jumpDiff(e) && u), u;
                    }, ae, Wn)),
                    t['ɵdid'](1, 573440, null, 0, Ln.c, [], {
                        active: [
                            0,
                            'active'
                        ],
                        locale: [
                            1,
                            'locale'
                        ],
                        index: [
                            2,
                            'index'
                        ],
                        disabled: [
                            3,
                            'disabled'
                        ],
                        type: [
                            4,
                            'type'
                        ],
                        itemRender: [
                            5,
                            'itemRender'
                        ]
                    }, {
                        diffIndex: 'diffIndex',
                        gotoIndex: 'gotoIndex'
                    })
                ], function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.pageIndex === n.context.$implicit.index, e.locale, n.context.$implicit.index, !!n.context.$implicit.disabled, n.context.$implicit.type, e.itemRender);
                }, function (l, n) {
                    l(n, 0, 0, 'prev' === t['ɵnov'](n, 1).type, 'next' === t['ɵnov'](n, 1).type, 'page' === t['ɵnov'](n, 1).type, 'prev_5' === t['ɵnov'](n, 1).type, 'prev_5' === t['ɵnov'](n, 1).type, 'next_5' === t['ɵnov'](n, 1).type, 'next_5' === t['ɵnov'](n, 1).type, t['ɵnov'](n, 1).disabled, t['ɵnov'](n, 1).active, t['ɵnov'](n, 1).title);
                });
            }
            function me(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'div', [[
                        'nz-pagination-options',
                        ''
                    ]], null, [
                        [
                            null,
                            'pageIndexChange'
                        ],
                        [
                            null,
                            'pageSizeChange'
                        ]
                    ], function (l, n, e) {
                        var t = !0, u = l.component;
                        return 'pageIndexChange' === n && (t = !1 !== u.onPageIndexChange(e) && t), 'pageSizeChange' === n && (t = !1 !== u.onPageSizeChange(e) && t), t;
                    }, Xn, qn)),
                    t['ɵdid'](1, 573440, null, 0, Ln.e, [t.ElementRef], {
                        nzSize: [
                            0,
                            'nzSize'
                        ],
                        disabled: [
                            1,
                            'disabled'
                        ],
                        showSizeChanger: [
                            2,
                            'showSizeChanger'
                        ],
                        showQuickJumper: [
                            3,
                            'showQuickJumper'
                        ],
                        locale: [
                            4,
                            'locale'
                        ],
                        total: [
                            5,
                            'total'
                        ],
                        pageIndex: [
                            6,
                            'pageIndex'
                        ],
                        pageSize: [
                            7,
                            'pageSize'
                        ],
                        pageSizeOptions: [
                            8,
                            'pageSizeOptions'
                        ]
                    }, {
                        pageIndexChange: 'pageIndexChange',
                        pageSizeChange: 'pageSizeChange'
                    })
                ], function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.nzSize, e.disabled, e.showSizeChanger, e.showQuickJumper, e.locale, e.total, e.pageIndex, e.pageSize, e.pageSizeOptions);
                }, null);
            }
            function ve(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵand'](16777216, null, null, 1, null, de)),
                    t['ɵdid'](1, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, ce)),
                    t['ɵdid'](3, 278528, null, 0, a.NgForOf, [
                        t.ViewContainerRef,
                        t.TemplateRef,
                        t.IterableDiffers
                    ], {
                        ngForOf: [
                            0,
                            'ngForOf'
                        ],
                        ngForTrackBy: [
                            1,
                            'ngForTrackBy'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, me)),
                    t['ɵdid'](5, 16384, null, 0, a.NgIf, [
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
                    l(n, 1, 0, e.showTotal), l(n, 3, 0, e.listOfPageItem, e.trackByPageItem), l(n, 5, 0, e.showQuickJumper || e.showSizeChanger);
                }, null);
            }
            function pe(l) {
                return t['ɵvid'](2, [
                    t['ɵqud'](402653184, 1, { template: 0 }),
                    (l()(), t['ɵand'](0, [
                        [
                            1,
                            2
                        ],
                        [
                            'containerTemplate',
                            2
                        ]
                    ], null, 0, null, ve))
                ], null, null);
            }
            var fe = e('Ed4d'), ge = e('NFMk'), he = e('XNiG');
            class be {
                constructor(l) {
                    this.pageRequest = l, this.type = Q.a.GET_USERS_TABLE;
                }
            }
            class Ce {
                constructor(l, n) {
                    this.userRows = l, this.newPagination = n, this.type = Q.a.SET_USERS_ROWS;
                }
            }
            class Re {
                constructor(l) {
                    this.value = l, this.type = Q.a.SET_LOADING_USERS_MANAGER_TABLE;
                }
            }
            class we {
                constructor(l, n) {
                    this.userId = l, this.name = n, this.type = Q.a.DELETE_USER_MANAGER;
                }
            }
            class Ee {
                constructor(l, n) {
                    this.store = l, this.notificationService = n, this.unsubscribe = new he.a(), this.getNamePeopleType = P.b, this.ModeFormType = Ul, this.users = l.select(Yl), this.isLoading$ = l.select(l => l.settingsModule.usersManagerTableState.isLoading), this.isVisible$ = l.select(l => l.settingsModule.usersManagerTableState.form.isVisible), this.store.select(Ql).pipe(Object(Pl.a)(this.unsubscribe)).subscribe(l => {
                        this.pagination = Object.assign({}, l);
                    }), this.searchUsers();
                }
                get form() {
                    return this.userManagerForm ? this.userManagerForm.form : null;
                }
                ngOnInit() {
                    this.store.dispatch(new un(!1));
                }
                callForm(l, n) {
                    this.mode = n, this.userId = l, this.store.dispatch(new un(!0));
                }
                delete(l, n) {
                    return Object(Y.a)(this, void 0, void 0, function* () {
                        (yield this.notificationService.confirmAsync('\xBFDeseas Eliminar el usuario ' + n + '?')) && this.store.dispatch(new we(l, n));
                    });
                }
                handleOk() {
                    var l, n, e, t;
                    if (this.form.valid)
                        switch (this.mode) {
                            case Ul.new:
                                this.store.dispatch(new nn(Object.assign({}, this.form.value)));
                                break;
                            case Ul.edit:
                                this.store.dispatch(new en(Object.assign(Object.assign({}, this.form.value), {
                                    email: this.form.controls.email.value,
                                    RFC: (null === (n = null === (l = this.form.controls) || void 0 === l ? void 0 : l.RFC) || void 0 === n ? void 0 : n.value) ? this.form.controls.RFC.value : null,
                                    mobile: (null === (t = null === (e = this.form.controls) || void 0 === e ? void 0 : e.mobile) || void 0 === t ? void 0 : t.value) ? this.form.controls.mobile.value : null,
                                    id: this.userId
                                })));
                        }
                    else
                        this.notificationService.error(['Por favor de llenar todos los campos marcados como obligatorios (*)']), Object.values(this.form.controls).forEach(l => {
                            l.invalid && (l.markAsDirty(), l.updateValueAndValidity({ onlySelf: !0 }));
                        });
                }
                handleCancel() {
                    this.store.dispatch(new un(!1));
                }
                changePage(l) {
                    this.pagination.page = l, this.searchUsers();
                }
                changeSizePage(l) {
                    this.pagination.pageSize = l, this.searchUsers();
                }
                searchUsers() {
                    this.store.dispatch(new be(this.pagination));
                }
            }
            var ye = t['ɵcrt']({
                encapsulation: 0,
                styles: [['.actions-menu[_ngcontent-%COMP%]{overflow-y:visible;overflow-x:visible}.bg-table[_ngcontent-%COMP%]{background-color:#173f5f;color:#fff!important}.borderTable[_ngcontent-%COMP%]{border:1px solid #173f5f}']],
                data: {}
            });
            function ze(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 46, 'tr', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'td', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](2, null, [
                        ' ',
                        ' '
                    ])),
                    (l()(), t['ɵeld'](3, 0, null, null, 4, 'td', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](4, 0, null, null, 3, 'span', [[
                        'class',
                        'label label-lg label-inline'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](5, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵted'](6, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](8, 0, null, null, 1, 'td', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](9, null, [
                        ' ',
                        ' '
                    ])),
                    (l()(), t['ɵeld'](10, 0, null, null, 1, 'td', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](11, null, [
                        ' ',
                        ' '
                    ])),
                    (l()(), t['ɵeld'](12, 0, null, null, 34, 'td', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](13, 0, null, null, 33, 'div', [[
                        'class',
                        'card-toolbar'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](14, 0, null, null, 32, 'div', [
                        [
                            'class',
                            'dropdown dropdown-inline'
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
                    t['ɵdid'](15, 1720320, null, 2, Dl.v, [
                        t.ChangeDetectorRef,
                        Dl.x,
                        a.DOCUMENT,
                        t.NgZone,
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            Dl.K
                        ]
                    ], {
                        placement: [
                            0,
                            'placement'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 2, { _menu: 0 }),
                    t['ɵqud'](603979776, 3, { _anchor: 0 }),
                    (l()(), t['ɵeld'](18, 0, null, null, 3, 'a', [
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
                            'btn btn-info btn-icon bg-table dropdown-toggle'
                        ],
                        [
                            'data-toggle',
                            'dropdown'
                        ],
                        [
                            'id',
                            'dropdownManual'
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
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 19).dropdown.toggle() && u), 'keydown.ArrowUp' === n && (u = !1 !== t['ɵnov'](l, 19).dropdown.onKeyDown(e) && u), 'keydown.ArrowDown' === n && (u = !1 !== t['ɵnov'](l, 19).dropdown.onKeyDown(e) && u), 'keydown.Home' === n && (u = !1 !== t['ɵnov'](l, 19).dropdown.onKeyDown(e) && u), 'keydown.End' === n && (u = !1 !== t['ɵnov'](l, 19).dropdown.onKeyDown(e) && u), 'keydown.Tab' === n && (u = !1 !== t['ɵnov'](l, 19).dropdown.onKeyDown(e) && u), 'keydown.Shift.Tab' === n && (u = !1 !== t['ɵnov'](l, 19).dropdown.onKeyDown(e) && u), u;
                    }, null, null)),
                    t['ɵdid'](19, 16384, null, 0, Dl.A, [
                        Dl.v,
                        t.ElementRef
                    ], null, null),
                    t['ɵprd'](2048, [[
                        3,
                        4
                    ]], Dl.w, null, [Dl.A]),
                    (l()(), t['ɵeld'](21, 0, null, null, 0, 'i', [[
                        'class',
                        'ki ki-bold-more-hor'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](22, 0, null, null, 24, 'div', [
                        [
                            'aria-labelledby',
                            'dropdownManual'
                        ],
                        [
                            'class',
                            'dropdown-menu dropdown-menu-md dropdown-menu-right'
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
                        return 'keydown.ArrowUp' === n && (u = !1 !== t['ɵnov'](l, 23).dropdown.onKeyDown(e) && u), 'keydown.ArrowDown' === n && (u = !1 !== t['ɵnov'](l, 23).dropdown.onKeyDown(e) && u), 'keydown.Home' === n && (u = !1 !== t['ɵnov'](l, 23).dropdown.onKeyDown(e) && u), 'keydown.End' === n && (u = !1 !== t['ɵnov'](l, 23).dropdown.onKeyDown(e) && u), 'keydown.Enter' === n && (u = !1 !== t['ɵnov'](l, 23).dropdown.onKeyDown(e) && u), 'keydown.Space' === n && (u = !1 !== t['ɵnov'](l, 23).dropdown.onKeyDown(e) && u), 'keydown.Tab' === n && (u = !1 !== t['ɵnov'](l, 23).dropdown.onKeyDown(e) && u), 'keydown.Shift.Tab' === n && (u = !1 !== t['ɵnov'](l, 23).dropdown.onKeyDown(e) && u), u;
                    }, null, null)),
                    t['ɵdid'](23, 16384, [[
                        2,
                        4
                    ]], 1, Dl.y, [
                        Dl.v,
                        t.ElementRef
                    ], null, null),
                    t['ɵqud'](603979776, 4, { menuItems: 1 }),
                    (l()(), t['ɵeld'](25, 0, null, null, 21, 'ul', [[
                        'class',
                        'navi navi-hover py-5'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](26, 0, null, null, 6, 'li', [[
                        'class',
                        'navi-item'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](27, 0, null, null, 5, 'a', [[
                        'class',
                        'navi-link cursor-pointer'
                    ]], null, [[
                        null,
                        'click'
                    ]], function (l, n, e) {
                        var t = !0, u = l.component;
                        return 'click' === n && (t = !1 !== u.callForm(null == l.context.$implicit ? null : l.context.$implicit.id, u.ModeFormType.edit) && t), t;
                    }, null, null)),
                    (l()(), t['ɵeld'](28, 0, null, null, 1, 'span', [[
                        'class',
                        'navi-icon'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](29, 0, null, null, 0, 'i', [[
                        'class',
                        'flaticon-medical'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](30, 0, null, null, 2, 'span', [[
                        'class',
                        'navi-text'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](31, null, [
                        '',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](33, 0, null, null, 6, 'li', [[
                        'class',
                        'navi-item'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](34, 0, null, null, 5, 'a', [[
                        'class',
                        'navi-link cursor-pointer'
                    ]], null, [[
                        null,
                        'click'
                    ]], function (l, n, e) {
                        var t = !0, u = l.component;
                        return 'click' === n && (t = !1 !== u.callForm(null == l.context.$implicit ? null : l.context.$implicit.id, u.ModeFormType.view) && t), t;
                    }, null, null)),
                    (l()(), t['ɵeld'](35, 0, null, null, 1, 'span', [[
                        'class',
                        'navi-icon'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](36, 0, null, null, 0, 'i', [[
                        'class',
                        'flaticon-medical'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](37, 0, null, null, 2, 'span', [[
                        'class',
                        'navi-text'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](38, null, [
                        '',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](40, 0, null, null, 6, 'li', [[
                        'class',
                        'navi-item'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](41, 0, null, null, 5, 'a', [[
                        'class',
                        'navi-link cursor-pointer'
                    ]], null, [[
                        null,
                        'click'
                    ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.delete(null == l.context.$implicit ? null : l.context.$implicit.id, (null == l.context.$implicit ? null : l.context.$implicit.name) + ' ' + (null == l.context.$implicit ? null : l.context.$implicit.last_name)) && t), t;
                    }, null, null)),
                    (l()(), t['ɵeld'](42, 0, null, null, 1, 'span', [[
                        'class',
                        'navi-icon'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](43, 0, null, null, 0, 'i', [[
                        'class',
                        'flaticon-delete'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](44, 0, null, null, 2, 'span', [[
                        'class',
                        'navi-text'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](45, null, [
                        '',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], function (l, n) {
                    l(n, 15, 0, 'bottom-right');
                }, function (l, n) {
                    var e = n.component;
                    l(n, 2, 0, (null == n.context.$implicit ? null : n.context.$implicit.name) + ' ' + (null == n.context.$implicit ? null : n.context.$implicit.last_name)), l(n, 6, 0, t['ɵunv'](n, 6, 0, t['ɵnov'](n, 7).transform(e.getNamePeopleType.get(null == n.context.$implicit ? null : n.context.$implicit.type)))), l(n, 9, 0, null == n.context.$implicit ? null : n.context.$implicit.document_signature), l(n, 11, 0, null == n.context.$implicit ? null : n.context.$implicit.document_created), l(n, 14, 0, t['ɵnov'](n, 15).isOpen()), l(n, 18, 0, t['ɵnov'](n, 19).dropdown.isOpen()), l(n, 22, 0, !0, t['ɵnov'](n, 23).dropdown.isOpen(), t['ɵnov'](n, 23).placement), l(n, 31, 0, t['ɵunv'](n, 31, 0, t['ɵnov'](n, 32).transform('FORM.MODES.EDIT'))), l(n, 38, 0, t['ɵunv'](n, 38, 0, t['ɵnov'](n, 39).transform('FORM.MODES.VIEW'))), l(n, 45, 0, t['ɵunv'](n, 45, 0, t['ɵnov'](n, 46).transform('FORM.MODES.DELETE')));
                });
            }
            function Se(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, 'ce-user-form', [], null, null, null, kn, cn)),
                    t['ɵprd'](512, null, _.a, Fl, [
                        L.f,
                        F.a,
                        Nl.a
                    ]),
                    t['ɵdid'](2, 4440064, [[
                        1,
                        4
                    ]], 0, dn, [
                        _.a,
                        v.o,
                        Nl.a
                    ], {
                        userId: [
                            0,
                            'userId'
                        ],
                        mode: [
                            1,
                            'mode'
                        ]
                    }, null)
                ], function (l, n) {
                    var e = n.component;
                    l(n, 2, 0, e.userId, e.mode);
                }, null);
            }
            function Ie(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, 'button', [
                        [
                            'class',
                            'btn btn-error mr-2'
                        ],
                        [
                            'type',
                            'reset'
                        ]
                    ], null, [[
                        null,
                        'click'
                    ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.handleCancel() && t), t;
                    }, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](3, 0, null, null, 2, 'button', [
                        [
                            'class',
                            'btn btn-success mr-2'
                        ],
                        [
                            'type',
                            'reset'
                        ]
                    ], null, [[
                        null,
                        'click'
                    ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.handleOk() && t), t;
                    }, null, null)),
                    (l()(), t['ɵted'](4, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform('FORM.BUTTOMS.CANCEL'))), l(n, 4, 0, t['ɵunv'](n, 4, 0, t['ɵnov'](n, 5).transform('FORM.BUTTOMS.SAVE')));
                });
            }
            function ke(l) {
                return t['ɵvid'](0, [
                    t['ɵqud'](671088640, 1, { userManagerForm: 0 }),
                    (l()(), t['ɵeld'](1, 0, null, null, 55, 'ce-layout-dashboard', [], null, null, null, D.b, D.a)),
                    t['ɵdid'](2, 638976, null, 0, O.a, [t.ChangeDetectorRef], {
                        isLoading: [
                            0,
                            'isLoading'
                        ]
                    }, null),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵeld'](4, 0, null, 0, 42, 'div', [
                        [
                            'class',
                            'card card-custom'
                        ],
                        [
                            'content',
                            ''
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](5, 0, null, null, 16, 'div', [[
                        'class',
                        'card-header py-3'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](6, 0, null, null, 6, 'div', [[
                        'class',
                        'card-title align-items-start flex-column'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](7, 0, null, null, 2, 'h3', [[
                        'class',
                        'card-label font-weight-bolder text-dark'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](8, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](10, 0, null, null, 2, 'span', [[
                        'class',
                        'text-muted font-weight-bold font-size-sm mt-1'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](11, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](13, 0, null, null, 8, 'div', [[
                        'class',
                        'card-toolbar'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](14, 0, null, null, 2, 'button', [
                        [
                            'class',
                            'btn btn-success mr-2'
                        ],
                        [
                            'type',
                            'reset'
                        ]
                    ], null, [[
                        null,
                        'click'
                    ]], function (l, n, e) {
                        var t = !0, u = l.component;
                        return 'click' === n && (t = !1 !== u.callForm(null, u.ModeFormType.new) && t), t;
                    }, null, null)),
                    (l()(), t['ɵted'](15, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](17, 0, null, null, 4, 'a', [
                        [
                            'class',
                            'btn btn-success mr-2'
                        ],
                        [
                            'type',
                            'reset'
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
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 18).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](18, 671744, null, 0, i.u, [
                        i.r,
                        i.a,
                        a.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    t['ɵpad'](19, 1),
                    (l()(), t['ɵted'](20, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](22, 0, null, null, 21, 'div', [[
                        'class',
                        'table-responsive angular-bootstrap-table actions-menu'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](23, 0, null, null, 20, 'table', [[
                        'class',
                        'table table-head-custom table-vertical-center overflow-inherit borderTable'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](24, 0, null, null, 15, 'thead', [[
                        'class',
                        'bg-table text-light'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](25, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](26, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](28, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](29, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](31, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](32, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](34, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](35, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](37, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](38, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](40, 0, null, null, 3, 'tbody', [], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, ze)),
                    t['ɵdid'](42, 278528, null, 0, a.NgForOf, [
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
                    (l()(), t['ɵeld'](44, 0, null, null, 2, 'div', [[
                        'class',
                        'd-flex flex-wrap py-2 mr-3'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](45, 0, null, null, 1, 'nz-pagination', [[
                        'nzShowSizeChanger',
                        ''
                    ]], [
                        [
                            2,
                            'ant-pagination-simple',
                            null
                        ],
                        [
                            2,
                            'ant-pagination-disabled',
                            null
                        ],
                        [
                            2,
                            'mini',
                            null
                        ]
                    ], [
                        [
                            null,
                            'nzPageIndexChange'
                        ],
                        [
                            null,
                            'nzPageSizeChange'
                        ]
                    ], function (l, n, e) {
                        var t = !0, u = l.component;
                        return 'nzPageIndexChange' === n && (t = !1 !== u.changePage(e) && t), 'nzPageSizeChange' === n && (t = !1 !== u.changeSizePage(e) && t), t;
                    }, Bn, Mn)),
                    t['ɵdid'](46, 770048, null, 0, Ln.a, [
                        k.e,
                        t.ChangeDetectorRef,
                        S.b,
                        T.a,
                        t.ElementRef
                    ], {
                        nzShowSizeChanger: [
                            0,
                            'nzShowSizeChanger'
                        ],
                        nzTotal: [
                            1,
                            'nzTotal'
                        ],
                        nzPageIndex: [
                            2,
                            'nzPageIndex'
                        ],
                        nzPageSize: [
                            3,
                            'nzPageSize'
                        ]
                    }, {
                        nzPageSizeChange: 'nzPageSizeChange',
                        nzPageIndexChange: 'nzPageIndexChange'
                    }),
                    (l()(), t['ɵeld'](47, 16777216, null, null, 9, 'nz-modal', [
                        [
                            'nzClosable',
                            'false'
                        ],
                        [
                            'nzWidth',
                            '50%'
                        ]
                    ], null, null, null, fe.d, fe.c)),
                    t['ɵdid'](48, 704512, null, 2, ge.c, [
                        t.ChangeDetectorRef,
                        ge.k,
                        t.ViewContainerRef
                    ], {
                        nzVisible: [
                            0,
                            'nzVisible'
                        ],
                        nzClosable: [
                            1,
                            'nzClosable'
                        ],
                        nzWidth: [
                            2,
                            'nzWidth'
                        ],
                        nzTitle: [
                            3,
                            'nzTitle'
                        ]
                    }, null),
                    t['ɵqud'](335544320, 5, { contentFromContentChild: 0 }),
                    t['ɵqud'](335544320, 6, { modalFooter: 0 }),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵand'](0, [[
                        5,
                        2
                    ]], 0, 1, null, Se)),
                    t['ɵdid'](54, 16384, null, 0, ge.f, [t.TemplateRef], null, null),
                    (l()(), t['ɵand'](0, [[
                        6,
                        2
                    ]], 0, 1, null, Ie)),
                    t['ɵdid'](56, 16384, null, 0, ge.h, [
                        [
                            2,
                            ge.j
                        ],
                        t.TemplateRef
                    ], null, null)
                ], function (l, n) {
                    var e = n.component;
                    l(n, 2, 0, t['ɵunv'](n, 2, 0, t['ɵnov'](n, 3).transform(e.isLoading$)));
                    var u = l(n, 19, 0, '/settings/employee-bonding');
                    l(n, 18, 0, u), l(n, 42, 0, t['ɵunv'](n, 42, 0, t['ɵnov'](n, 43).transform(e.users))), l(n, 46, 0, '', e.pagination.totalRecords, e.pagination.currentPage, e.pagination.pageSize), l(n, 48, 0, t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 48, 0, t['ɵnov'](n, 51).transform(e.isVisible$)), ''), 'false', '50%', t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 48, 3, t['ɵnov'](n, 52).transform('PROFILE.TITLES.USER_MANAGER_FORM')), ''));
                }, function (l, n) {
                    l(n, 8, 0, t['ɵunv'](n, 8, 0, t['ɵnov'](n, 9).transform('PROFILE.TITLES.USERS_MANAGER'))), l(n, 11, 0, t['ɵunv'](n, 11, 0, t['ɵnov'](n, 12).transform('PROFILE.SUB_TITLES.USERS_MANAGER'))), l(n, 15, 0, t['ɵunv'](n, 15, 0, t['ɵnov'](n, 16).transform('FORM.BUTTOMS.NEW'))), l(n, 17, 0, t['ɵnov'](n, 18).target, t['ɵnov'](n, 18).href), l(n, 20, 0, t['ɵunv'](n, 20, 0, t['ɵnov'](n, 21).transform('FORM.BUTTOMS.VINC'))), l(n, 26, 0, t['ɵunv'](n, 26, 0, t['ɵnov'](n, 27).transform('USER.TABLE.COLUMNS.NAME'))), l(n, 29, 0, t['ɵunv'](n, 29, 0, t['ɵnov'](n, 30).transform('USER.TABLE.COLUMNS.TYPE'))), l(n, 32, 0, t['ɵunv'](n, 32, 0, t['ɵnov'](n, 33).transform('USER.TABLE.COLUMNS.DOCUMENT_SIGNED'))), l(n, 35, 0, t['ɵunv'](n, 35, 0, t['ɵnov'](n, 36).transform('USER.TABLE.COLUMNS.SIGNATURE_APPLY'))), l(n, 38, 0, t['ɵunv'](n, 38, 0, t['ɵnov'](n, 39).transform('USER.TABLE.COLUMNS.ACTIONS'))), l(n, 45, 0, t['ɵnov'](n, 46).nzSimple, t['ɵnov'](n, 46).nzDisabled, !t['ɵnov'](n, 46).nzSimple && 'small' === t['ɵnov'](n, 46).size);
                });
            }
            function Le(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'ce-users-manager', [], null, null, null, ke, ye)),
                    t['ɵdid'](1, 114688, null, 0, Ee, [
                        v.o,
                        il.a
                    ], null, null)
                ], function (l, n) {
                    l(n, 1, 0);
                }, null);
            }
            var De = t['ɵccf']('ce-users-manager', Ee, Le, {}, {}, []), Oe = e('ZA9w'), Te = e('gBr1'), _e = e('uvLv'), Ae = e('Br0f');
            class xe {
                constructor(l, n, e, t) {
                    this.fb = l, this.modalService = n, this.salesService = e, this.changeDetector = t, this.filter = {
                        initialDate: null,
                        finalDate: null
                    }, this.loadingPage = !1, this.subscriptions = [];
                }
                ngOnInit() {
                    const currentHostName = window.location.hostname
                    const appv2HostName = currentHostName == 'centirev.centinela.app' ? 'https://appv2-centirev.centinela.app' : 'https://appv2.centinela.app'
                    window.location.href = `${appv2HostName}/redirect?token=${JSON.parse(localStorage.getItem("token")).token}&to=settings/users-sales`
                    this.salesService.fetch(), this.grouping = this.salesService.grouping, this.paginator = this.salesService.paginator, this.sorting = this.salesService.sorting;
                    const l = this.salesService.isLoading$.subscribe(l => this.isLoading = l);
                    this.subscriptions.push(l), this.filter.initialDate = null, this.filter.finalDate = null;
                }
                ngOnDestroy() {
                    this.subscriptions.forEach(l => l.unsubscribe());
                }
                searchCriteria() {
                    this.paginator = new Ae.a();
                    let l, n, e = new Date();
                    null != this.filter.initialDate && (e = new Date(this.filter.initialDate), l = this.filter.initialDate, this.filter.initialDate = e.getDate() + '/' + (e.getMonth() + 1) + '/' + e.getFullYear()), null != this.filter.finalDate && (e = new Date(this.filter.finalDate), n = this.filter.finalDate, this.filter.finalDate = e.getDate() + '/' + (e.getMonth() + 1) + '/' + e.getFullYear()), this.salesService.patchState(Object.assign(Object.assign({}, this.filter), { paginator: this.paginator })), this.filter.initialDate = l, this.filter.finalDate = n;
                }
                fetchSelected() {
                    const l = this.modalService.open(null);
                    l.componentInstance.ids = this.grouping.getSelectedRows(), l.result.then(() => this.salesService.fetch(), () => {
                    });
                }
                sort(l) {
                    const n = this.sorting;
                    n.column === l ? n.direction = 'asc' === n.direction ? 'desc' : 'asc' : (n.column = l, n.direction = 'asc'), this.salesService.patchState({ sorting: n });
                }
                paginate(l) {
                    this.salesService.patchState({ paginator: l });
                }
                downloadFileXML(l) {
                    return Object(Y.a)(this, void 0, void 0, function* () {
                        try {
                            this.loadingPage = !0, yield this.salesService.downloadXML(l).toPromise();
                        } catch (n) {
                        }
                        this.loadingPage = !1, this.changeDetector.markForCheck();
                    });
                }
                downloadFile(l) {
                    return Object(Y.a)(this, void 0, void 0, function* () {
                        try {
                            this.loadingPage = !0, yield this.salesService.downloadFile(l).toPromise();
                        } catch (n) {
                        }
                        this.loadingPage = !1, this.changeDetector.markForCheck();
                    });
                }
            }
            var Fe = e('AytR'), Ne = e('lJxs'), Pe = e('Iab2'), Me = e('IheW');
            let Ve = (() => {
                class l extends Ae.b {
                    constructor(l) {
                        super(l), this.API_URL = Fe.a.urlBase + 'sales', this.urlBase = Fe.a.urlBase;
                    }
                    ngOnDestroy() {
                        this.subscriptions.forEach(l => l.unsubscribe());
                    }
                    downloadXML(l) {
                        return this.http.get(this.API_URL + '/download/xml/' + l, {
                            responseType: 'blob',
                            headers: { 'content-type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }
                        }).pipe(Object(Ne.a)(l => Pe.saveAs(l, 'file' + new Date().getTime())));
                    }
                    downloadFile(l) {
                        return this.http.get(this.API_URL + '/downloadfile/' + l, {
                            responseType: 'blob',
                            headers: { 'content-type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }
                        }).pipe(Object(Ne.a)(l => Pe.saveAs(l, 'file' + new Date().getTime())));
                    }
                }
                return l.ɵprov = t['ɵɵdefineInjectable']({
                    factory: function () {
                        return new l(t['ɵɵinject'](Me.HttpClient));
                    },
                    token: l,
                    providedIn: 'root'
                }), l;
            })();
            var Ue = t['ɵcrt']({
                encapsulation: 0,
                styles: [['']],
                data: {}
            });
            function je(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 6, 'li', [[
                        'class',
                        'navi-item'
                    ]], null, [[
                        null,
                        'click'
                    ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.downloadFile(l.parent.context.$implicit.sales_id) && t), t;
                    }, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 5, 'a', [[
                        'class',
                        'navi-link cursor-pointer'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 1, 'span', [[
                        'class',
                        'navi-icon'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 0, 'i', [[
                        'class',
                        'flaticon-download'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](4, 0, null, null, 2, 'span', [[
                        'class',
                        'navi-text'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](5, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 5, 0, t['ɵunv'](n, 5, 0, t['ɵnov'](n, 6).transform('SELLER.HOME.DOWNLOADPDF')));
                });
            }
            function Be(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 6, 'li', [[
                        'class',
                        'navi-item'
                    ]], null, [[
                        null,
                        'click'
                    ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.downloadFileXML(l.parent.context.$implicit.sales_id) && t), t;
                    }, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 5, 'a', [[
                        'class',
                        'navi-link cursor-pointer'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 1, 'span', [[
                        'class',
                        'navi-icon'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 0, 'i', [[
                        'class',
                        'flaticon-download'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](4, 0, null, null, 2, 'span', [[
                        'class',
                        'navi-text'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](5, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 5, 0, t['ɵunv'](n, 5, 0, t['ɵnov'](n, 6).transform('SELLER.HOME.DOWNLOADXML')));
                });
            }
            function Je(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 37, 'tr', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'td', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](2, null, [
                        '',
                        ''
                    ])),
                    (l()(), t['ɵeld'](3, 0, null, null, 2, 'td', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](4, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵppd'](5, 1),
                    (l()(), t['ɵeld'](6, 0, null, null, 2, 'td', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](7, null, [
                        '',
                        ''
                    ])),
                    t['ɵppd'](8, 1),
                    (l()(), t['ɵeld'](9, 0, null, null, 1, 'td', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](10, null, [
                        '',
                        ''
                    ])),
                    (l()(), t['ɵeld'](11, 0, null, null, 26, 'td', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](12, 0, null, null, 25, 'div', [[
                        'class',
                        'card-toolbar'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](13, 0, null, null, 24, 'div', [
                        [
                            'class',
                            'dropdown dropdown-inline'
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
                    t['ɵdid'](14, 1720320, null, 2, Dl.v, [
                        t.ChangeDetectorRef,
                        Dl.x,
                        a.DOCUMENT,
                        t.NgZone,
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            Dl.K
                        ]
                    ], {
                        placement: [
                            0,
                            'placement'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 1, { _menu: 0 }),
                    t['ɵqud'](603979776, 2, { _anchor: 0 }),
                    (l()(), t['ɵeld'](17, 0, null, null, 3, 'a', [
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
                            'btn btn-light-success btn-sm btn-icon bg-table dropdown-toggle'
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
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 18).dropdown.toggle() && u), 'keydown.ArrowUp' === n && (u = !1 !== t['ɵnov'](l, 18).dropdown.onKeyDown(e) && u), 'keydown.ArrowDown' === n && (u = !1 !== t['ɵnov'](l, 18).dropdown.onKeyDown(e) && u), 'keydown.Home' === n && (u = !1 !== t['ɵnov'](l, 18).dropdown.onKeyDown(e) && u), 'keydown.End' === n && (u = !1 !== t['ɵnov'](l, 18).dropdown.onKeyDown(e) && u), 'keydown.Tab' === n && (u = !1 !== t['ɵnov'](l, 18).dropdown.onKeyDown(e) && u), 'keydown.Shift.Tab' === n && (u = !1 !== t['ɵnov'](l, 18).dropdown.onKeyDown(e) && u), u;
                    }, null, null)),
                    t['ɵdid'](18, 16384, null, 0, Dl.A, [
                        Dl.v,
                        t.ElementRef
                    ], null, null),
                    t['ɵprd'](2048, [[
                        2,
                        4
                    ]], Dl.w, null, [Dl.A]),
                    (l()(), t['ɵeld'](20, 0, null, null, 0, 'i', [[
                        'class',
                        'ki ki-bold-more-hor'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](21, 0, null, null, 16, 'div', [
                        [
                            'class',
                            'dropdown-menu dropdown-menu-md dropdown-menu-right'
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
                        return 'keydown.ArrowUp' === n && (u = !1 !== t['ɵnov'](l, 22).dropdown.onKeyDown(e) && u), 'keydown.ArrowDown' === n && (u = !1 !== t['ɵnov'](l, 22).dropdown.onKeyDown(e) && u), 'keydown.Home' === n && (u = !1 !== t['ɵnov'](l, 22).dropdown.onKeyDown(e) && u), 'keydown.End' === n && (u = !1 !== t['ɵnov'](l, 22).dropdown.onKeyDown(e) && u), 'keydown.Enter' === n && (u = !1 !== t['ɵnov'](l, 22).dropdown.onKeyDown(e) && u), 'keydown.Space' === n && (u = !1 !== t['ɵnov'](l, 22).dropdown.onKeyDown(e) && u), 'keydown.Tab' === n && (u = !1 !== t['ɵnov'](l, 22).dropdown.onKeyDown(e) && u), 'keydown.Shift.Tab' === n && (u = !1 !== t['ɵnov'](l, 22).dropdown.onKeyDown(e) && u), u;
                    }, null, null)),
                    t['ɵdid'](22, 16384, [[
                        1,
                        4
                    ]], 1, Dl.y, [
                        Dl.v,
                        t.ElementRef
                    ], null, null),
                    t['ɵqud'](603979776, 3, { menuItems: 1 }),
                    (l()(), t['ɵeld'](24, 0, null, null, 13, 'ul', [[
                        'class',
                        'navi navi-hover py-5'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](25, 0, null, null, 8, 'li', [[
                        'class',
                        'navi-item'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](26, 0, null, null, 7, 'a', [[
                        'class',
                        'navi-link cursor-pointer'
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
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 27).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](27, 671744, null, 0, i.u, [
                        i.r,
                        i.a,
                        a.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    t['ɵpad'](28, 1),
                    (l()(), t['ɵeld'](29, 0, null, null, 1, 'span', [[
                        'class',
                        'navi-icon'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](30, 0, null, null, 0, 'i', [[
                        'class',
                        'flaticon-edit-1'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](31, 0, null, null, 2, 'span', [[
                        'class',
                        'navi-text'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](32, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, je)),
                    t['ɵdid'](35, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Be)),
                    t['ɵdid'](37, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null)
                ], function (l, n) {
                    l(n, 14, 0, 'bottom-right');
                    var e = l(n, 28, 0, '/settings/invoice/' + n.context.$implicit.id);
                    l(n, 27, 0, e), l(n, 35, 0, n.context.$implicit.isInvoice && '' != n.context.$implicit.sales_id), l(n, 37, 0, n.context.$implicit.isInvoice && '' != n.context.$implicit.sales_id);
                }, function (l, n) {
                    l(n, 2, 0, n.context.$implicit.invoice);
                    var e = t['ɵunv'](n, 4, 0, l(n, 5, 0, t['ɵnov'](n.parent, 0), n.context.$implicit.subtotal));
                    l(n, 4, 0, e);
                    var u = t['ɵunv'](n, 7, 0, l(n, 8, 0, t['ɵnov'](n.parent, 0), n.context.$implicit.total));
                    l(n, 7, 0, u), l(n, 10, 0, n.context.$implicit.confirmation_date), l(n, 13, 0, t['ɵnov'](n, 14).isOpen()), l(n, 17, 0, t['ɵnov'](n, 18).dropdown.isOpen()), l(n, 21, 0, !0, t['ɵnov'](n, 22).dropdown.isOpen(), t['ɵnov'](n, 22).placement), l(n, 26, 0, t['ɵnov'](n, 27).target, t['ɵnov'](n, 27).href), l(n, 32, 0, t['ɵunv'](n, 32, 0, t['ɵnov'](n, 33).transform('SELLER.HOME.BILL')));
                });
            }
            function He(l) {
                return t['ɵvid'](0, [
                    t['ɵpid'](0, a.CurrencyPipe, [
                        t.LOCALE_ID,
                        t.DEFAULT_CURRENCY_CODE
                    ]),
                    (l()(), t['ɵeld'](1, 0, null, null, 67, 'div', [[
                        'class',
                        'card card-custom gutter-b'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 4, 'div', [[
                        'class',
                        'card-header'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 3, 'div', [[
                        'class',
                        'card-title'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](4, 0, null, null, 2, 'h3', [[
                        'class',
                        'card-label'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](5, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](7, 0, null, null, 61, 'div', [[
                        'class',
                        'card-body'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](8, 0, null, null, 36, 'div', [[
                        'class',
                        'form form-label-right'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](9, 0, null, null, 35, 'div', [[
                        'class',
                        'form-group row'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](10, 0, null, null, 16, 'div', [[
                        'class',
                        'col-lg-4'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](11, 0, null, null, 13, 'div', [[
                        'class',
                        'input-group'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](12, 16777216, null, null, 9, 'input', [
                        [
                            'class',
                            'form-control'
                        ],
                        [
                            'name',
                            'initialDate'
                        ],
                        [
                            'ngbDatepicker',
                            ''
                        ]
                    ], [
                        [
                            8,
                            'placeholder',
                            0
                        ],
                        [
                            8,
                            'disabled',
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
                            'ngModelChange'
                        ],
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
                        ],
                        [
                            null,
                            'change'
                        ],
                        [
                            null,
                            'focus'
                        ]
                    ], function (l, n, e) {
                        var u = !0, o = l.component;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 14)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 14).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 14)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 14)._compositionEnd(e.target.value) && u), 'input' === n && (u = !1 !== t['ɵnov'](l, 15).manualDateChange(e.target.value) && u), 'change' === n && (u = !1 !== t['ɵnov'](l, 15).manualDateChange(e.target.value, !0) && u), 'focus' === n && (u = !1 !== t['ɵnov'](l, 15).onFocus() && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 15).onBlur() && u), 'ngModelChange' === n && (u = !1 !== (o.filter.initialDate = e) && u), u;
                    }, null, null)),
                    t['ɵprd'](6144, null, Dl.q, null, [Dl.D]),
                    t['ɵdid'](14, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵdid'](15, 671744, [[
                        'd22',
                        4
                    ]], 0, Dl.C, [
                        Dl.o,
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.Renderer2,
                        t.ComponentFactoryResolver,
                        t.NgZone,
                        Dl.h,
                        Dl.n,
                        a.DOCUMENT,
                        t.ChangeDetectorRef,
                        Dl.D
                    ], null, null),
                    t['ɵprd'](1024, null, L.n, function (l) {
                        return [l];
                    }, [Dl.C]),
                    t['ɵprd'](1024, null, L.o, function (l, n) {
                        return [
                            l,
                            n
                        ];
                    }, [
                        L.e,
                        Dl.C
                    ]),
                    t['ɵdid'](18, 671744, null, 0, L.t, [
                        [
                            8,
                            null
                        ],
                        [
                            6,
                            L.n
                        ],
                        [
                            8,
                            null
                        ],
                        [
                            6,
                            L.o
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ],
                        model: [
                            1,
                            'model'
                        ]
                    }, { update: 'ngModelChange' }),
                    t['ɵprd'](2048, null, L.p, null, [L.t]),
                    t['ɵdid'](20, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](22, 0, null, null, 2, 'div', [[
                        'class',
                        'input-group-append'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](23, 0, null, null, 1, 'button', [
                        [
                            'class',
                            'btn btn-light-success'
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
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 15).toggle() && u), u;
                    }, null, null)),
                    (l()(), t['ɵeld'](24, 0, null, null, 0, 'i', [
                        [
                            'class',
                            'fa fa-calendar'
                        ],
                        [
                            'style',
                            'color:white'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](25, 0, null, null, 1, 'small', [[
                        'class',
                        'form-text text-muted'
                    ]], [[
                        8,
                        'innerHTML',
                        1
                    ]], null, null, null, null)),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](27, 0, null, null, 14, 'div', [[
                        'class',
                        'col-lg-4'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](28, 0, null, null, 13, 'div', [[
                        'class',
                        'input-group'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](29, 16777216, null, null, 9, 'input', [
                        [
                            'class',
                            'form-control'
                        ],
                        [
                            'name',
                            'finalDate'
                        ],
                        [
                            'ngbDatepicker',
                            ''
                        ]
                    ], [
                        [
                            8,
                            'placeholder',
                            0
                        ],
                        [
                            8,
                            'disabled',
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
                            'ngModelChange'
                        ],
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
                        ],
                        [
                            null,
                            'change'
                        ],
                        [
                            null,
                            'focus'
                        ]
                    ], function (l, n, e) {
                        var u = !0, o = l.component;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 31)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 31).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 31)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 31)._compositionEnd(e.target.value) && u), 'input' === n && (u = !1 !== t['ɵnov'](l, 32).manualDateChange(e.target.value) && u), 'change' === n && (u = !1 !== t['ɵnov'](l, 32).manualDateChange(e.target.value, !0) && u), 'focus' === n && (u = !1 !== t['ɵnov'](l, 32).onFocus() && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 32).onBlur() && u), 'ngModelChange' === n && (u = !1 !== (o.filter.finalDate = e) && u), u;
                    }, null, null)),
                    t['ɵprd'](6144, null, Dl.q, null, [Dl.D]),
                    t['ɵdid'](31, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵdid'](32, 671744, [[
                        'd21',
                        4
                    ]], 0, Dl.C, [
                        Dl.o,
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.Renderer2,
                        t.ComponentFactoryResolver,
                        t.NgZone,
                        Dl.h,
                        Dl.n,
                        a.DOCUMENT,
                        t.ChangeDetectorRef,
                        Dl.D
                    ], null, null),
                    t['ɵprd'](1024, null, L.n, function (l) {
                        return [l];
                    }, [Dl.C]),
                    t['ɵprd'](1024, null, L.o, function (l, n) {
                        return [
                            l,
                            n
                        ];
                    }, [
                        L.e,
                        Dl.C
                    ]),
                    t['ɵdid'](35, 671744, null, 0, L.t, [
                        [
                            8,
                            null
                        ],
                        [
                            6,
                            L.n
                        ],
                        [
                            8,
                            null
                        ],
                        [
                            6,
                            L.o
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ],
                        model: [
                            1,
                            'model'
                        ]
                    }, { update: 'ngModelChange' }),
                    t['ɵprd'](2048, null, L.p, null, [L.t]),
                    t['ɵdid'](37, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](39, 0, null, null, 2, 'div', [[
                        'class',
                        'input-group-append'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](40, 0, null, null, 1, 'button', [
                        [
                            'class',
                            'btn btn-light-success'
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
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 32).toggle() && u), u;
                    }, null, null)),
                    (l()(), t['ɵeld'](41, 0, null, null, 0, 'i', [
                        [
                            'class',
                            'fa fa-calendar'
                        ],
                        [
                            'style',
                            'color: white;'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](42, 0, null, null, 2, 'div', [[
                        'class',
                        'col-lg-2'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](43, 0, null, null, 1, 'button', [
                        [
                            'class',
                            'btn btn-light-success'
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
                        return 'click' === n && (t = !1 !== l.component.searchCriteria() && t), t;
                    }, null, null)),
                    (l()(), t['ɵeld'](44, 0, null, null, 0, 'i', [
                        [
                            'class',
                            'fa fa-search'
                        ],
                        [
                            'style',
                            'color: white;'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](45, 0, null, null, 21, 'div', [[
                        'class',
                        'table-responsive angular-bootstrap-table actions-menu'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](46, 0, null, null, 20, 'table', [[
                        'class',
                        'table table-head-custom table-vertical-center overflow-inherit borderTable'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](47, 0, null, null, 15, 'thead', [[
                        'class',
                        'bg-table text-light'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](48, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](49, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](51, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](52, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](54, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](55, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](57, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](58, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](60, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](61, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](63, 0, null, null, 3, 'tbody', [], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, Je)),
                    t['ɵdid'](65, 278528, null, 0, a.NgForOf, [
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
                    (l()(), t['ɵeld'](67, 0, null, null, 1, 'app-paginator', [[
                        'class',
                        'd-flex justify-content-between align-items-center flex-wrap'
                    ]], null, [[
                        null,
                        'paginate'
                    ]], function (l, n, e) {
                        var t = !0;
                        return 'paginate' === n && (t = !1 !== l.component.paginate(e) && t), t;
                    }, Oe.b, Oe.a)),
                    t['ɵdid'](68, 114688, null, 0, Te.a, [], {
                        paginator: [
                            0,
                            'paginator'
                        ],
                        isLoading: [
                            1,
                            'isLoading'
                        ]
                    }, { paginate: 'paginate' })
                ], function (l, n) {
                    var e = n.component;
                    l(n, 18, 0, 'initialDate', e.filter.initialDate), l(n, 35, 0, 'finalDate', e.filter.finalDate), l(n, 65, 0, t['ɵunv'](n, 65, 0, t['ɵnov'](n, 66).transform(e.salesService.items$))), l(n, 68, 0, e.paginator, e.isLoading);
                }, function (l, n) {
                    l(n, 5, 0, t['ɵunv'](n, 5, 0, t['ɵnov'](n, 6).transform('USER.SALES.TITLE'))), l(n, 12, 0, t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 12, 0, t['ɵnov'](n, 21).transform('CONTRACT.HOME.INITIALDATE')), ''), t['ɵnov'](n, 15).disabled, t['ɵnov'](n, 20).ngClassUntouched, t['ɵnov'](n, 20).ngClassTouched, t['ɵnov'](n, 20).ngClassPristine, t['ɵnov'](n, 20).ngClassDirty, t['ɵnov'](n, 20).ngClassValid, t['ɵnov'](n, 20).ngClassInvalid, t['ɵnov'](n, 20).ngClassPending), l(n, 25, 0, t['ɵunv'](n, 25, 0, t['ɵnov'](n, 26).transform('CONTRACT.HOME.FILTERBYRANGEDATE'))), l(n, 29, 0, t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 29, 0, t['ɵnov'](n, 38).transform('CONTRACT.HOME.FINALDATE')), ''), t['ɵnov'](n, 32).disabled, t['ɵnov'](n, 37).ngClassUntouched, t['ɵnov'](n, 37).ngClassTouched, t['ɵnov'](n, 37).ngClassPristine, t['ɵnov'](n, 37).ngClassDirty, t['ɵnov'](n, 37).ngClassValid, t['ɵnov'](n, 37).ngClassInvalid, t['ɵnov'](n, 37).ngClassPending), l(n, 49, 0, t['ɵunv'](n, 49, 0, t['ɵnov'](n, 50).transform('USER.SALES.INVOICE'))), l(n, 52, 0, t['ɵunv'](n, 52, 0, t['ɵnov'](n, 53).transform('USER.SALES.SUBOTAL'))), l(n, 55, 0, t['ɵunv'](n, 55, 0, t['ɵnov'](n, 56).transform('USER.SALES.TOTAL'))), l(n, 58, 0, t['ɵunv'](n, 58, 0, t['ɵnov'](n, 59).transform('USER.SALES.FECHA'))), l(n, 61, 0, t['ɵunv'](n, 61, 0, t['ɵnov'](n, 62).transform('SALES.HOME.ACTIONS')));
                });
            }
            function Ge(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, 'app-sales', [], null, null, null, He, Ue)),
                    t['ɵprd'](4608, null, Dl.n, _e.a, []),
                    t['ɵprd'](4608, null, Dl.o, _e.b, []),
                    t['ɵdid'](3, 245760, null, 0, xe, [
                        L.f,
                        Dl.E,
                        Ve,
                        t.ChangeDetectorRef
                    ], null, null)
                ], function (l, n) {
                    l(n, 3, 0);
                }, null);
            }
            var qe = t['ɵccf']('app-sales', xe, Ge, {}, {}, []);
            class $e {
                constructor(l, n, e) {
                    this.fb = l, this.modalService = n, this.storageService = e, this.filter = {
                        initialDate: null,
                        finalDate: null
                    }, this.subscriptions = [];
                }
                ngOnInit() {
                    const currentHostName = window.location.hostname
                    const appv2HostName = currentHostName == 'centirev.centinela.app' ? 'https://appv2-centirev.centinela.app' : 'https://appv2.centinela.app'
                    window.location.href = `${appv2HostName}/redirect?token=${JSON.parse(localStorage.getItem("token")).token}&to=settings/users-storages`
                    this.storageService.fetch(), this.grouping = this.storageService.grouping, this.paginator = this.storageService.paginator, this.sorting = this.storageService.sorting;
                    const l = this.storageService.isLoading$.subscribe(l => this.isLoading = l);
                    this.subscriptions.push(l), this.filter.initialDate = null, this.filter.finalDate = null;
                }
                ngOnDestroy() {
                    this.subscriptions.forEach(l => l.unsubscribe());
                }
                searchCriteria() {
                    this.paginator = new Ae.a();
                    let l, n, e = new Date();
                    null != this.filter.initialDate && (e = new Date(this.filter.initialDate), l = this.filter.initialDate, this.filter.initialDate = e.getDate() + '/' + (e.getMonth() + 1) + '/' + e.getFullYear()), null != this.filter.finalDate && (e = new Date(this.filter.finalDate), n = this.filter.finalDate, this.filter.finalDate = e.getDate() + '/' + (e.getMonth() + 1) + '/' + e.getFullYear()), this.storageService.patchState(Object.assign(Object.assign({}, this.filter), { paginator: this.paginator })), this.filter.initialDate = l, this.filter.finalDate = n;
                }
                fetchSelected() {
                    const l = this.modalService.open(null);
                    l.componentInstance.ids = this.grouping.getSelectedRows(), l.result.then(() => this.storageService.fetch(), () => {
                    });
                }
                sort(l) {
                    const n = this.sorting;
                    n.column === l ? n.direction = 'asc' === n.direction ? 'desc' : 'asc' : (n.column = l, n.direction = 'asc'), this.storageService.patchState({ sorting: n });
                }
                paginate(l) {
                    this.storageService.patchState({ paginator: l });
                }
            }
            let Ke = (() => {
                class l extends Ae.b {
                    constructor(l) {
                        super(l), this.API_URL = Fe.a.urlBase + 'storage', this.urlBase = Fe.a.urlBase;
                    }
                    ngOnDestroy() {
                        this.subscriptions.forEach(l => l.unsubscribe());
                    }
                }
                return l.ɵprov = t['ɵɵdefineInjectable']({
                    factory: function () {
                        return new l(t['ɵɵinject'](Me.HttpClient));
                    },
                    token: l,
                    providedIn: 'root'
                }), l;
            })();
            var Ze = t['ɵcrt']({
                encapsulation: 0,
                styles: [['']],
                data: {}
            });
            function Xe(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 10, 'tr', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'td', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](2, null, [
                        '',
                        ''
                    ])),
                    (l()(), t['ɵeld'](3, 0, null, null, 1, 'td', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](4, null, [
                        ' ',
                        ' '
                    ])),
                    (l()(), t['ɵeld'](5, 0, null, null, 1, 'td', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](6, null, [
                        '',
                        ''
                    ])),
                    (l()(), t['ɵeld'](7, 0, null, null, 1, 'td', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](8, null, [
                        '',
                        ' KB'
                    ])),
                    (l()(), t['ɵeld'](9, 0, null, null, 1, 'td', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](10, null, [
                        '',
                        ''
                    ]))
                ], null, function (l, n) {
                    l(n, 2, 0, n.context.$implicit.name), l(n, 4, 0, n.context.$implicit.mime), l(n, 6, 0, n.context.$implicit.extension), l(n, 8, 0, n.context.$implicit.size), l(n, 10, 0, n.context.$implicit.created_at);
                });
            }
            function We(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 67, 'div', [[
                        'class',
                        'card card-custom gutter-b'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 4, 'div', [[
                        'class',
                        'card-header'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 3, 'div', [[
                        'class',
                        'card-title'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 2, 'h3', [[
                        'class',
                        'card-label'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](4, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](6, 0, null, null, 61, 'div', [[
                        'class',
                        'card-body'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](7, 0, null, null, 36, 'div', [[
                        'class',
                        'form form-label-right'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](8, 0, null, null, 35, 'div', [[
                        'class',
                        'form-group row'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](9, 0, null, null, 16, 'div', [[
                        'class',
                        'col-lg-4'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](10, 0, null, null, 13, 'div', [[
                        'class',
                        'input-group'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](11, 16777216, null, null, 9, 'input', [
                        [
                            'class',
                            'form-control'
                        ],
                        [
                            'name',
                            'initialDate'
                        ],
                        [
                            'ngbDatepicker',
                            ''
                        ]
                    ], [
                        [
                            8,
                            'placeholder',
                            0
                        ],
                        [
                            8,
                            'disabled',
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
                            'ngModelChange'
                        ],
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
                        ],
                        [
                            null,
                            'change'
                        ],
                        [
                            null,
                            'focus'
                        ]
                    ], function (l, n, e) {
                        var u = !0, o = l.component;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 13)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 13).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 13)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 13)._compositionEnd(e.target.value) && u), 'input' === n && (u = !1 !== t['ɵnov'](l, 14).manualDateChange(e.target.value) && u), 'change' === n && (u = !1 !== t['ɵnov'](l, 14).manualDateChange(e.target.value, !0) && u), 'focus' === n && (u = !1 !== t['ɵnov'](l, 14).onFocus() && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 14).onBlur() && u), 'ngModelChange' === n && (u = !1 !== (o.filter.initialDate = e) && u), u;
                    }, null, null)),
                    t['ɵprd'](6144, null, Dl.q, null, [Dl.D]),
                    t['ɵdid'](13, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵdid'](14, 671744, [[
                        'd22',
                        4
                    ]], 0, Dl.C, [
                        Dl.o,
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.Renderer2,
                        t.ComponentFactoryResolver,
                        t.NgZone,
                        Dl.h,
                        Dl.n,
                        a.DOCUMENT,
                        t.ChangeDetectorRef,
                        Dl.D
                    ], null, null),
                    t['ɵprd'](1024, null, L.n, function (l) {
                        return [l];
                    }, [Dl.C]),
                    t['ɵprd'](1024, null, L.o, function (l, n) {
                        return [
                            l,
                            n
                        ];
                    }, [
                        L.e,
                        Dl.C
                    ]),
                    t['ɵdid'](17, 671744, null, 0, L.t, [
                        [
                            8,
                            null
                        ],
                        [
                            6,
                            L.n
                        ],
                        [
                            8,
                            null
                        ],
                        [
                            6,
                            L.o
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ],
                        model: [
                            1,
                            'model'
                        ]
                    }, { update: 'ngModelChange' }),
                    t['ɵprd'](2048, null, L.p, null, [L.t]),
                    t['ɵdid'](19, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](21, 0, null, null, 2, 'div', [[
                        'class',
                        'input-group-append'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](22, 0, null, null, 1, 'button', [
                        [
                            'class',
                            'btn btn-light-success'
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
                    (l()(), t['ɵeld'](23, 0, null, null, 0, 'i', [
                        [
                            'class',
                            'fa fa-calendar'
                        ],
                        [
                            'style',
                            'color:white'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](24, 0, null, null, 1, 'small', [[
                        'class',
                        'form-text text-muted'
                    ]], [[
                        8,
                        'innerHTML',
                        1
                    ]], null, null, null, null)),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](26, 0, null, null, 14, 'div', [[
                        'class',
                        'col-lg-4'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](27, 0, null, null, 13, 'div', [[
                        'class',
                        'input-group'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](28, 16777216, null, null, 9, 'input', [
                        [
                            'class',
                            'form-control'
                        ],
                        [
                            'name',
                            'finalDate'
                        ],
                        [
                            'ngbDatepicker',
                            ''
                        ]
                    ], [
                        [
                            8,
                            'placeholder',
                            0
                        ],
                        [
                            8,
                            'disabled',
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
                            'ngModelChange'
                        ],
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
                        ],
                        [
                            null,
                            'change'
                        ],
                        [
                            null,
                            'focus'
                        ]
                    ], function (l, n, e) {
                        var u = !0, o = l.component;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 30)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 30).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 30)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 30)._compositionEnd(e.target.value) && u), 'input' === n && (u = !1 !== t['ɵnov'](l, 31).manualDateChange(e.target.value) && u), 'change' === n && (u = !1 !== t['ɵnov'](l, 31).manualDateChange(e.target.value, !0) && u), 'focus' === n && (u = !1 !== t['ɵnov'](l, 31).onFocus() && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 31).onBlur() && u), 'ngModelChange' === n && (u = !1 !== (o.filter.finalDate = e) && u), u;
                    }, null, null)),
                    t['ɵprd'](6144, null, Dl.q, null, [Dl.D]),
                    t['ɵdid'](30, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵdid'](31, 671744, [[
                        'd21',
                        4
                    ]], 0, Dl.C, [
                        Dl.o,
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.Renderer2,
                        t.ComponentFactoryResolver,
                        t.NgZone,
                        Dl.h,
                        Dl.n,
                        a.DOCUMENT,
                        t.ChangeDetectorRef,
                        Dl.D
                    ], null, null),
                    t['ɵprd'](1024, null, L.n, function (l) {
                        return [l];
                    }, [Dl.C]),
                    t['ɵprd'](1024, null, L.o, function (l, n) {
                        return [
                            l,
                            n
                        ];
                    }, [
                        L.e,
                        Dl.C
                    ]),
                    t['ɵdid'](34, 671744, null, 0, L.t, [
                        [
                            8,
                            null
                        ],
                        [
                            6,
                            L.n
                        ],
                        [
                            8,
                            null
                        ],
                        [
                            6,
                            L.o
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ],
                        model: [
                            1,
                            'model'
                        ]
                    }, { update: 'ngModelChange' }),
                    t['ɵprd'](2048, null, L.p, null, [L.t]),
                    t['ɵdid'](36, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](38, 0, null, null, 2, 'div', [[
                        'class',
                        'input-group-append'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](39, 0, null, null, 1, 'button', [
                        [
                            'class',
                            'btn btn-light-success'
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
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 31).toggle() && u), u;
                    }, null, null)),
                    (l()(), t['ɵeld'](40, 0, null, null, 0, 'i', [
                        [
                            'class',
                            'fa fa-calendar'
                        ],
                        [
                            'style',
                            'color: white;'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](41, 0, null, null, 2, 'div', [[
                        'class',
                        'col-lg-2'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](42, 0, null, null, 1, 'button', [
                        [
                            'class',
                            'btn btn-light-success'
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
                        return 'click' === n && (t = !1 !== l.component.searchCriteria() && t), t;
                    }, null, null)),
                    (l()(), t['ɵeld'](43, 0, null, null, 0, 'i', [
                        [
                            'class',
                            'fa fa-search'
                        ],
                        [
                            'style',
                            'color: white;'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](44, 0, null, null, 21, 'div', [[
                        'class',
                        'table-responsive angular-bootstrap-table actions-menu'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](45, 0, null, null, 20, 'table', [[
                        'class',
                        'table table-head-custom table-vertical-center overflow-inherit borderTable'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](46, 0, null, null, 15, 'thead', [[
                        'class',
                        'bg-table text-light'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](47, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](48, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](50, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](51, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](53, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](54, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](56, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](57, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](59, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](60, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](62, 0, null, null, 3, 'tbody', [], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, Xe)),
                    t['ɵdid'](64, 278528, null, 0, a.NgForOf, [
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
                    (l()(), t['ɵeld'](66, 0, null, null, 1, 'app-paginator', [[
                        'class',
                        'd-flex justify-content-between align-items-center flex-wrap'
                    ]], null, [[
                        null,
                        'paginate'
                    ]], function (l, n, e) {
                        var t = !0;
                        return 'paginate' === n && (t = !1 !== l.component.paginate(e) && t), t;
                    }, Oe.b, Oe.a)),
                    t['ɵdid'](67, 114688, null, 0, Te.a, [], {
                        paginator: [
                            0,
                            'paginator'
                        ],
                        isLoading: [
                            1,
                            'isLoading'
                        ]
                    }, { paginate: 'paginate' })
                ], function (l, n) {
                    var e = n.component;
                    l(n, 17, 0, 'initialDate', e.filter.initialDate), l(n, 34, 0, 'finalDate', e.filter.finalDate), l(n, 64, 0, t['ɵunv'](n, 64, 0, t['ɵnov'](n, 65).transform(e.storageService.items$))), l(n, 67, 0, e.paginator, e.isLoading);
                }, function (l, n) {
                    l(n, 4, 0, t['ɵunv'](n, 4, 0, t['ɵnov'](n, 5).transform('USER.STORAGE.TITLE'))), l(n, 11, 0, t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 11, 0, t['ɵnov'](n, 20).transform('CONTRACT.HOME.INITIALDATE')), ''), t['ɵnov'](n, 14).disabled, t['ɵnov'](n, 19).ngClassUntouched, t['ɵnov'](n, 19).ngClassTouched, t['ɵnov'](n, 19).ngClassPristine, t['ɵnov'](n, 19).ngClassDirty, t['ɵnov'](n, 19).ngClassValid, t['ɵnov'](n, 19).ngClassInvalid, t['ɵnov'](n, 19).ngClassPending), l(n, 24, 0, t['ɵunv'](n, 24, 0, t['ɵnov'](n, 25).transform('CONTRACT.HOME.FILTERBYRANGEDATE'))), l(n, 28, 0, t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 28, 0, t['ɵnov'](n, 37).transform('CONTRACT.HOME.FINALDATE')), ''), t['ɵnov'](n, 31).disabled, t['ɵnov'](n, 36).ngClassUntouched, t['ɵnov'](n, 36).ngClassTouched, t['ɵnov'](n, 36).ngClassPristine, t['ɵnov'](n, 36).ngClassDirty, t['ɵnov'](n, 36).ngClassValid, t['ɵnov'](n, 36).ngClassInvalid, t['ɵnov'](n, 36).ngClassPending), l(n, 48, 0, t['ɵunv'](n, 48, 0, t['ɵnov'](n, 49).transform('USER.STORAGE.NAME'))), l(n, 51, 0, t['ɵunv'](n, 51, 0, t['ɵnov'](n, 52).transform('USER.STORAGE.MIME'))), l(n, 54, 0, t['ɵunv'](n, 54, 0, t['ɵnov'](n, 55).transform('USER.STORAGE.EXTENCION'))), l(n, 57, 0, t['ɵunv'](n, 57, 0, t['ɵnov'](n, 58).transform('USER.STORAGE.SIZE'))), l(n, 60, 0, t['ɵunv'](n, 60, 0, t['ɵnov'](n, 61).transform('USER.STORAGE.FECHA')));
                });
            }
            function Ye(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, 'app-storage-files', [], null, null, null, We, Ze)),
                    t['ɵprd'](4608, null, Dl.n, _e.a, []),
                    t['ɵprd'](4608, null, Dl.o, _e.b, []),
                    t['ɵdid'](3, 245760, null, 0, $e, [
                        L.f,
                        Dl.E,
                        Ke
                    ], null, null)
                ], function (l, n) {
                    l(n, 3, 0);
                }, null);
            }
            var Qe = t['ɵccf']('app-storage-files', $e, Ye, {}, {}, []);
            class lt {
                constructor(l, n, e, t) {
                    this.fb = l, this.router = n, this.notificationService = e, this.responsibleService = t, this.isLoadingComponent = !1, this.empty_responsible = {
                        name: '',
                        email: '',
                        mobile: '',
                        rfc: ''
                    };
                }
                ngOnInit() {
                    return Object(Y.a)(this, void 0, void 0, function* () {
                        this.loadForm(), this.chargeForm();
                    });
                }
                loadForm() {
                    this.formGroup = this.fb.group({
                        name: [''],
                        email: [''],
                        phone: [''],
                        rfc: [''],
                        emailOFirm: [
                            '',
                            L.x.compose([
                                L.x.required,
                                L.x.email
                            ])
                        ]
                    });
                }
                chargeForm() {
                    return Object(Y.a)(this, void 0, void 0, function* () {
                        this.isLoadingComponent = !0, this.legal_responsible = yield this.responsibleService.getResponsible().toPromise(), null != this.legal_responsible && this.assingValue();
                    });
                }
                assingValue() {
                    this.formGroup.get('email').setValue(this.legal_responsible.email), this.formGroup.get('name').setValue(this.legal_responsible.name), this.formGroup.get('phone').setValue(this.legal_responsible.mobile), this.formGroup.get('rfc').setValue(this.legal_responsible.rfc);
                }
                saveData() {
                    this.router.navigate(['/settings/document-legal/' + this.legal_responsible.rfc]);
                }
                getResponsible() {
                    return Object(Y.a)(this, void 0, void 0, function* () {
                        try {
                            return this.empty_responsible;
                        } catch (l) {
                            return this.empty_responsible;
                        }
                    });
                }
                searchResponsible() {
                    return Object(Y.a)(this, void 0, void 0, function* () {
                        let l = '';
                        try {
                            this.isLoadingComponent = !0, l = this.formGroup.get('emailOFirm').value, this.legal_responsible = yield this.responsibleService.SearchResponsible(l).toPromise(), this.assingValue();
                        } catch (n) {
                            this.isLoadingComponent = !1, this.notificationService.error(['El correo ' + l + 'no se encuentra registrado en la plataforma centinela']);
                        }
                    });
                }
                validField(l) {
                    return '' == this.formGroup.get(l).value || this.formGroup.get(l).invalid;
                }
            }
            var nt = e('LOoK'), et = t['ɵcrt']({
                encapsulation: 0,
                styles: [['']],
                data: {}
            });
            function tt(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, 'div', [[
                        'class',
                        'card-toolbar'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 2, 'button', [
                        [
                            'class',
                            'btn btn-success mr-2'
                        ],
                        [
                            'type',
                            'reset'
                        ]
                    ], [[
                        8,
                        'disabled',
                        0
                    ]], [[
                        null,
                        'click'
                    ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.saveData() && t), t;
                    }, null, null)),
                    (l()(), t['ɵted'](2, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, !n.component.formGroup.valid), l(n, 2, 0, t['ɵunv'](n, 2, 0, t['ɵnov'](n, 3).transform('FORM.BUTTOMS.SAVE')));
                });
            }
            function ut(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 86, 'div', [[
                        'class',
                        'card card-custom'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 9, 'div', [[
                        'class',
                        'card-header py-3'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 6, 'div', [[
                        'class',
                        'card-title align-items-start flex-column'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 2, 'h3', [[
                        'class',
                        'card-label font-weight-bolder text-dark'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](4, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](6, 0, null, null, 2, 'span', [[
                        'class',
                        'text-muted font-weight-bold font-size-sm mt-1'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](7, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, tt)),
                    t['ɵdid'](10, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](11, 0, null, null, 75, 'form', [
                        [
                            'class',
                            'form'
                        ],
                        [
                            'content',
                            ''
                        ],
                        [
                            'novalidate',
                            ''
                        ],
                        [
                            'nz-form',
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
                        ],
                        [
                            2,
                            'ant-form-horizontal',
                            null
                        ],
                        [
                            2,
                            'ant-form-vertical',
                            null
                        ],
                        [
                            2,
                            'ant-form-inline',
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
                        return 'submit' === n && (u = !1 !== t['ɵnov'](l, 13).onSubmit(e) && u), 'reset' === n && (u = !1 !== t['ɵnov'](l, 13).onReset() && u), u;
                    }, null, null)),
                    t['ɵdid'](12, 16384, null, 0, L.C, [], null, null),
                    t['ɵdid'](13, 540672, null, 0, L.k, [
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
                    t['ɵprd'](2048, null, L.d, null, [L.k]),
                    t['ɵdid'](15, 16384, null, 0, L.r, [[
                        6,
                        L.d
                    ]], null, null),
                    t['ɵdid'](16, 671744, null, 0, I.b, [
                        T.a,
                        t.ElementRef,
                        t.Renderer2
                    ], null, null),
                    (l()(), t['ɵeld'](17, 0, null, null, 69, 'div', [[
                        'class',
                        'card-body'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](18, 0, null, null, 16, 'nz-form-item', [[
                        'class',
                        'row'
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
                        ],
                        [
                            2,
                            'ant-form-item-has-success',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-warning',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-error',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-is-validating',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-feedback',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-with-help',
                            null
                        ]
                    ], null, null, w.e, w.b)),
                    t['ɵdid'](19, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], null, null),
                    t['ɵdid'](20, 180224, null, 0, I.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](21, 0, null, 0, 1, 'p', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Por favor ingresar el correo de electrónico de la persona a la que nombrar representante Legal, esta persona deberá tener una cuenta activa en la Plataforma Centinela.'])),
                    (l()(), t['ɵeld'](23, 0, null, 0, 11, 'div', [[
                        'class',
                        'col-lg-9 col-xl-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](24, 0, null, null, 10, 'div', [[
                        'class',
                        'input-group'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](25, 0, null, null, 6, 'input', [
                        [
                            'autocomplete',
                            'off'
                        ],
                        [
                            'class',
                            'form-control form-control-lg'
                        ],
                        [
                            'formControlName',
                            'emailOFirm'
                        ],
                        [
                            'type',
                            'text'
                        ]
                    ], [
                        [
                            8,
                            'placeholder',
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
                        var u = !0;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 26)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 26).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 26)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 26)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](26, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.e]),
                    t['ɵdid'](28, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
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
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, null, L.p, null, [L.i]),
                    t['ɵdid'](30, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](32, 0, null, null, 2, 'div', [[
                        'class',
                        'input-group-append'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](33, 0, null, null, 1, 'button', [
                        [
                            'class',
                            'input-group-text btn btn-primary'
                        ],
                        [
                            'type',
                            'button'
                        ]
                    ], [[
                        8,
                        'disabled',
                        0
                    ]], [[
                        null,
                        'click'
                    ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.searchResponsible() && t), t;
                    }, null, null)),
                    (l()(), t['ɵeld'](34, 0, null, null, 0, 'i', [[
                        'class',
                        'text-white-50 flaticon-user-add'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](35, 0, null, null, 12, 'nz-form-item', [[
                        'class',
                        'row'
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
                        ],
                        [
                            2,
                            'ant-form-item-has-success',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-warning',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-error',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-is-validating',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-feedback',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-with-help',
                            null
                        ]
                    ], null, null, w.e, w.b)),
                    t['ɵdid'](36, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], null, null),
                    t['ɵdid'](37, 180224, null, 0, I.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](38, 0, null, 0, 2, 'label', [[
                        'class',
                        'col-xl-3 col-lg-3 col-form-label'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](39, null, [
                        '',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](41, 0, null, 0, 6, 'div', [[
                        'class',
                        'col-lg-9 col-xl-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](42, 0, null, null, 5, 'input', [
                        [
                            'class',
                            'form-control form-control-lg form-control-solid'
                        ],
                        [
                            'formControlName',
                            'name'
                        ],
                        [
                            'type',
                            'text'
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
                        var u = !0;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 43)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 43).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 43)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 43)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](43, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.e]),
                    t['ɵdid'](45, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
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
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, null, L.p, null, [L.i]),
                    t['ɵdid'](47, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    (l()(), t['ɵeld'](48, 0, null, null, 12, 'nz-form-item', [[
                        'class',
                        'row'
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
                        ],
                        [
                            2,
                            'ant-form-item-has-success',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-warning',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-error',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-is-validating',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-feedback',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-with-help',
                            null
                        ]
                    ], null, null, w.e, w.b)),
                    t['ɵdid'](49, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], null, null),
                    t['ɵdid'](50, 180224, null, 0, I.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](51, 0, null, 0, 2, 'label', [[
                        'class',
                        'col-xl-3 col-lg-3 col-form-label'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](52, null, [
                        '',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](54, 0, null, 0, 6, 'div', [[
                        'class',
                        'col-lg-9 col-xl-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](55, 0, null, null, 5, 'input', [
                        [
                            'class',
                            'form-control form-control-lg form-control-solid text-uppercase'
                        ],
                        [
                            'formControlName',
                            'rfc'
                        ],
                        [
                            'type',
                            'text'
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
                        var u = !0;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 56)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 56).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 56)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 56)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](56, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.e]),
                    t['ɵdid'](58, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
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
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, null, L.p, null, [L.i]),
                    t['ɵdid'](60, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    (l()(), t['ɵeld'](61, 0, null, null, 12, 'nz-form-item', [[
                        'class',
                        'row'
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
                        ],
                        [
                            2,
                            'ant-form-item-has-success',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-warning',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-error',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-is-validating',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-feedback',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-with-help',
                            null
                        ]
                    ], null, null, w.e, w.b)),
                    t['ɵdid'](62, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], null, null),
                    t['ɵdid'](63, 180224, null, 0, I.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](64, 0, null, 0, 2, 'label', [[
                        'class',
                        'col-xl-3 col-lg-3 col-form-label'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](65, null, [
                        '',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](67, 0, null, 0, 6, 'div', [[
                        'class',
                        'col-lg-9 col-xl-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](68, 0, null, null, 5, 'input', [
                        [
                            'class',
                            'form-control form-control-lg form-control-solid'
                        ],
                        [
                            'formControlName',
                            'email'
                        ],
                        [
                            'type',
                            'text'
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
                        var u = !0;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 69)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 69).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 69)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 69)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](69, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.e]),
                    t['ɵdid'](71, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
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
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, null, L.p, null, [L.i]),
                    t['ɵdid'](73, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    (l()(), t['ɵeld'](74, 0, null, null, 12, 'nz-form-item', [[
                        'class',
                        'row'
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
                        ],
                        [
                            2,
                            'ant-form-item-has-success',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-warning',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-error',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-is-validating',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-feedback',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-with-help',
                            null
                        ]
                    ], null, null, w.e, w.b)),
                    t['ɵdid'](75, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], null, null),
                    t['ɵdid'](76, 180224, null, 0, I.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](77, 0, null, 0, 2, 'label', [[
                        'class',
                        'col-xl-3 col-lg-3 col-form-label'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](78, null, [
                        '',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](80, 0, null, 0, 6, 'div', [[
                        'class',
                        'col-lg-9 col-xl-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](81, 0, null, null, 5, 'input', [
                        [
                            'class',
                            'form-control form-control-lg form-control-solid text-uppercase'
                        ],
                        [
                            'formControlName',
                            'phone'
                        ],
                        [
                            'type',
                            'text'
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
                        var u = !0;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 82)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 82).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 82)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 82)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](82, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.e]),
                    t['ɵdid'](84, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
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
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, null, L.p, null, [L.i]),
                    t['ɵdid'](86, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null)
                ], function (l, n) {
                    var e = n.component;
                    l(n, 10, 0, null != e.formGroup && null != e.formGroup), l(n, 13, 0, e.formGroup), l(n, 19, 0), l(n, 28, 0, 'emailOFirm'), l(n, 36, 0), l(n, 45, 0, 'name'), l(n, 49, 0), l(n, 58, 0, 'rfc'), l(n, 62, 0), l(n, 71, 0, 'email'), l(n, 75, 0), l(n, 84, 0, 'phone');
                }, function (l, n) {
                    var e = n.component;
                    l(n, 4, 0, t['ɵunv'](n, 4, 0, t['ɵnov'](n, 5).transform('PROFILE.TITLES.LEGAL_RESPOSIBLE'))), l(n, 7, 0, t['ɵunv'](n, 7, 0, t['ɵnov'](n, 8).transform('PROFILE.SUB_TITLES.LEGAL_RESPOSIBLE'))), l(n, 11, 0, t['ɵnov'](n, 15).ngClassUntouched, t['ɵnov'](n, 15).ngClassTouched, t['ɵnov'](n, 15).ngClassPristine, t['ɵnov'](n, 15).ngClassDirty, t['ɵnov'](n, 15).ngClassValid, t['ɵnov'](n, 15).ngClassInvalid, t['ɵnov'](n, 15).ngClassPending, 'horizontal' === t['ɵnov'](n, 16).nzLayout, 'vertical' === t['ɵnov'](n, 16).nzLayout, 'inline' === t['ɵnov'](n, 16).nzLayout), l(n, 18, 1, [
                        'top' === t['ɵnov'](n, 19).nzAlign,
                        'middle' === t['ɵnov'](n, 19).nzAlign,
                        'bottom' === t['ɵnov'](n, 19).nzAlign,
                        'start' === t['ɵnov'](n, 19).nzJustify,
                        'end' === t['ɵnov'](n, 19).nzJustify,
                        'center' === t['ɵnov'](n, 19).nzJustify,
                        'space-around' === t['ɵnov'](n, 19).nzJustify,
                        'space-between' === t['ɵnov'](n, 19).nzJustify,
                        'success' === t['ɵnov'](n, 20).status,
                        'warning' === t['ɵnov'](n, 20).status,
                        'error' === t['ɵnov'](n, 20).status,
                        'validating' === t['ɵnov'](n, 20).status,
                        t['ɵnov'](n, 20).hasFeedback && t['ɵnov'](n, 20).status,
                        t['ɵnov'](n, 20).withHelpClass
                    ]), l(n, 25, 0, t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 25, 0, t['ɵnov'](n, 31).transform('GENERAL.EMAIL')), ''), t['ɵnov'](n, 30).ngClassUntouched, t['ɵnov'](n, 30).ngClassTouched, t['ɵnov'](n, 30).ngClassPristine, t['ɵnov'](n, 30).ngClassDirty, t['ɵnov'](n, 30).ngClassValid, t['ɵnov'](n, 30).ngClassInvalid, t['ɵnov'](n, 30).ngClassPending), l(n, 33, 0, e.validField('emailOFirm')), l(n, 35, 1, [
                        'top' === t['ɵnov'](n, 36).nzAlign,
                        'middle' === t['ɵnov'](n, 36).nzAlign,
                        'bottom' === t['ɵnov'](n, 36).nzAlign,
                        'start' === t['ɵnov'](n, 36).nzJustify,
                        'end' === t['ɵnov'](n, 36).nzJustify,
                        'center' === t['ɵnov'](n, 36).nzJustify,
                        'space-around' === t['ɵnov'](n, 36).nzJustify,
                        'space-between' === t['ɵnov'](n, 36).nzJustify,
                        'success' === t['ɵnov'](n, 37).status,
                        'warning' === t['ɵnov'](n, 37).status,
                        'error' === t['ɵnov'](n, 37).status,
                        'validating' === t['ɵnov'](n, 37).status,
                        t['ɵnov'](n, 37).hasFeedback && t['ɵnov'](n, 37).status,
                        t['ɵnov'](n, 37).withHelpClass
                    ]), l(n, 39, 0, t['ɵunv'](n, 39, 0, t['ɵnov'](n, 40).transform('FORM.LABELS.NAME'))), l(n, 42, 0, t['ɵnov'](n, 47).ngClassUntouched, t['ɵnov'](n, 47).ngClassTouched, t['ɵnov'](n, 47).ngClassPristine, t['ɵnov'](n, 47).ngClassDirty, t['ɵnov'](n, 47).ngClassValid, t['ɵnov'](n, 47).ngClassInvalid, t['ɵnov'](n, 47).ngClassPending), l(n, 48, 1, [
                        'top' === t['ɵnov'](n, 49).nzAlign,
                        'middle' === t['ɵnov'](n, 49).nzAlign,
                        'bottom' === t['ɵnov'](n, 49).nzAlign,
                        'start' === t['ɵnov'](n, 49).nzJustify,
                        'end' === t['ɵnov'](n, 49).nzJustify,
                        'center' === t['ɵnov'](n, 49).nzJustify,
                        'space-around' === t['ɵnov'](n, 49).nzJustify,
                        'space-between' === t['ɵnov'](n, 49).nzJustify,
                        'success' === t['ɵnov'](n, 50).status,
                        'warning' === t['ɵnov'](n, 50).status,
                        'error' === t['ɵnov'](n, 50).status,
                        'validating' === t['ɵnov'](n, 50).status,
                        t['ɵnov'](n, 50).hasFeedback && t['ɵnov'](n, 50).status,
                        t['ɵnov'](n, 50).withHelpClass
                    ]), l(n, 52, 0, t['ɵunv'](n, 52, 0, t['ɵnov'](n, 53).transform('FORM.LABELS.RFC'))), l(n, 55, 0, t['ɵnov'](n, 60).ngClassUntouched, t['ɵnov'](n, 60).ngClassTouched, t['ɵnov'](n, 60).ngClassPristine, t['ɵnov'](n, 60).ngClassDirty, t['ɵnov'](n, 60).ngClassValid, t['ɵnov'](n, 60).ngClassInvalid, t['ɵnov'](n, 60).ngClassPending), l(n, 61, 1, [
                        'top' === t['ɵnov'](n, 62).nzAlign,
                        'middle' === t['ɵnov'](n, 62).nzAlign,
                        'bottom' === t['ɵnov'](n, 62).nzAlign,
                        'start' === t['ɵnov'](n, 62).nzJustify,
                        'end' === t['ɵnov'](n, 62).nzJustify,
                        'center' === t['ɵnov'](n, 62).nzJustify,
                        'space-around' === t['ɵnov'](n, 62).nzJustify,
                        'space-between' === t['ɵnov'](n, 62).nzJustify,
                        'success' === t['ɵnov'](n, 63).status,
                        'warning' === t['ɵnov'](n, 63).status,
                        'error' === t['ɵnov'](n, 63).status,
                        'validating' === t['ɵnov'](n, 63).status,
                        t['ɵnov'](n, 63).hasFeedback && t['ɵnov'](n, 63).status,
                        t['ɵnov'](n, 63).withHelpClass
                    ]), l(n, 65, 0, t['ɵunv'](n, 65, 0, t['ɵnov'](n, 66).transform('FORM.LABELS.EMAIL'))), l(n, 68, 0, t['ɵnov'](n, 73).ngClassUntouched, t['ɵnov'](n, 73).ngClassTouched, t['ɵnov'](n, 73).ngClassPristine, t['ɵnov'](n, 73).ngClassDirty, t['ɵnov'](n, 73).ngClassValid, t['ɵnov'](n, 73).ngClassInvalid, t['ɵnov'](n, 73).ngClassPending), l(n, 74, 1, [
                        'top' === t['ɵnov'](n, 75).nzAlign,
                        'middle' === t['ɵnov'](n, 75).nzAlign,
                        'bottom' === t['ɵnov'](n, 75).nzAlign,
                        'start' === t['ɵnov'](n, 75).nzJustify,
                        'end' === t['ɵnov'](n, 75).nzJustify,
                        'center' === t['ɵnov'](n, 75).nzJustify,
                        'space-around' === t['ɵnov'](n, 75).nzJustify,
                        'space-between' === t['ɵnov'](n, 75).nzJustify,
                        'success' === t['ɵnov'](n, 76).status,
                        'warning' === t['ɵnov'](n, 76).status,
                        'error' === t['ɵnov'](n, 76).status,
                        'validating' === t['ɵnov'](n, 76).status,
                        t['ɵnov'](n, 76).hasFeedback && t['ɵnov'](n, 76).status,
                        t['ɵnov'](n, 76).withHelpClass
                    ]), l(n, 78, 0, t['ɵunv'](n, 78, 0, t['ɵnov'](n, 79).transform('FORM.LABELS.MOBILE'))), l(n, 81, 0, t['ɵnov'](n, 86).ngClassUntouched, t['ɵnov'](n, 86).ngClassTouched, t['ɵnov'](n, 86).ngClassPristine, t['ɵnov'](n, 86).ngClassDirty, t['ɵnov'](n, 86).ngClassValid, t['ɵnov'](n, 86).ngClassInvalid, t['ɵnov'](n, 86).ngClassPending);
                });
            }
            function ot(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'ce-legal-responsible', [], null, null, null, ut, et)),
                    t['ɵdid'](1, 114688, null, 0, lt, [
                        L.f,
                        i.r,
                        il.a,
                        nt.a
                    ], null, null)
                ], function (l, n) {
                    l(n, 1, 0);
                }, null);
            }
            var it = t['ɵccf']('ce-legal-responsible', lt, ot, {}, {}, []), at = e('PGiN'), rt = e('ceAI'), st = e('xIfL'), dt = e('p8Fu'), ct = e('rh/z');
            class mt {
                constructor(l, n, e, t, u, o, i, a) {
                    this._validations = l, this.changeDetector = n, this.responsibleService = e, this.notificationService = t, this.router = u, this.detectorRef = o, this.notifications = i, this.activatedRoute = a, this.current = 0, this.isLoading = !1, this.isLoadingresponsability = !1, this.isVisiblePassword = !1, this.subscriptions = [];
                }
                ngOnDestroy() {
                    this.subscriptions.forEach(l => l.unsubscribe());
                }
                ngOnInit() {
                }
                ngAfterViewInit() {
                    return Object(Y.a)(this, void 0, void 0, function* () {
                        try {
                            this.wizard = new dt.a('kt_wizard_v1', { startStep: 1 }), this.wizard.on('change', () => {
                                setTimeout(() => {
                                    ct.a.scrollTop();
                                }, 500);
                            }), this.isLoading = !0, this.rfc = this.activatedRoute.snapshot.params.rfc;
                            const l = yield this.notificationService.getDocumentResposability(this.rfc).toPromise();
                            this.responsability.nativeElement.innerHTML = l.html, this.isLoading = !1, this.detectorRef.markForCheck();
                        } catch (l) {
                            this.notifications.error(['Usted ya ha asignado previamente al Usuario con RFC ' + this.rfc + ' como su representante Legal']), this.isLoading = !1, this.router.navigate(['/settings/legal-responsible']);
                        }
                    });
                }
                goTo(l) {
                    this.wizard.goTo(l);
                }
                sendAcknowledgment() {
                    return Object(Y.a)(this, void 0, void 0, function* () {
                        try {
                            const l = Object.assign({}, this._validations.entityForm().value);
                            this.isLoadingresponsability = !0, yield this.notificationService.applySignatureLegal(l.filecer, l.filekey, l.passwordfiel, this.rfc, this.responsability.nativeElement.innerHTML).toPromise(), this.isLoadingresponsability = !1, this.notifications.success('Gracias, se ha firmado correctamente la signación del Representante Legal'), this.router.navigate(['/settings/legal-responsible']);
                        } catch (l) {
                            this.notifications.error(l.error), this.isLoadingresponsability = !1;
                        }
                        this.detectorRef.markForCheck();
                    });
                }
                changeVisiblePassword() {
                    this.isVisiblePassword = !this.isVisiblePassword;
                }
            }
            var vt = e('YLml'), pt = t['ɵcrt']({
                encapsulation: 0,
                styles: [['']],
                data: {}
            });
            function ft(l) {
                return t['ɵvid'](2, [
                    t['ɵqud'](402653184, 1, { el: 0 }),
                    t['ɵqud'](671088640, 2, { responsability: 0 }),
                    (l()(), t['ɵeld'](2, 0, null, null, 87, 'ce-layout-dashboard', [], null, null, null, D.b, D.a)),
                    t['ɵdid'](3, 638976, null, 0, O.a, [t.ChangeDetectorRef], {
                        isLoading: [
                            0,
                            'isLoading'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](4, 0, null, 0, 85, 'div', [
                        [
                            'class',
                            'card card-custom gutter-b'
                        ],
                        [
                            'content',
                            ''
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](5, 0, null, null, 3, 'div', [[
                        'class',
                        'card-header'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](6, 0, null, null, 2, 'div', [[
                        'class',
                        'card-title'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](7, 0, null, null, 1, 'h3', [[
                        'class',
                        'card-label'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Firma de Asignación del Representante Legal'])),
                    (l()(), t['ɵeld'](9, 0, null, null, 80, 'div', [[
                        'class',
                        'card-body'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](10, 0, [
                        [
                            1,
                            0
                        ],
                        [
                            'wizard',
                            1
                        ]
                    ], null, 79, 'div', [
                        [
                            'class',
                            'wizard wizard-1'
                        ],
                        [
                            'data-wizard-clickable',
                            'true'
                        ],
                        [
                            'data-wizard-state',
                            'step-first'
                        ],
                        [
                            'id',
                            'kt_wizard_v1'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](11, 0, null, null, 13, 'div', [
                        [
                            'class',
                            'wizard-nav border-bottom'
                        ],
                        [
                            'style',
                            'display: none;'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](12, 0, null, null, 12, 'div', [[
                        'class',
                        'wizard-steps p-8 p-lg-10'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](13, 0, null, null, 5, 'a', [
                        [
                            'class',
                            'wizard-step'
                        ],
                        [
                            'data-wizard-state',
                            'current'
                        ],
                        [
                            'data-wizard-type',
                            'step'
                        ],
                        [
                            'href',
                            'javascript:;'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](14, 0, null, null, 4, 'div', [[
                        'class',
                        'wizard-label'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](15, 0, null, null, 0, 'i', [[
                        'class',
                        'wizard-icon flaticon-list'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](16, 0, null, null, 2, 'h3', [[
                        'class',
                        'wizard-title'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](17, null, [
                        '1) ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](19, 0, null, null, 5, 'a', [
                        [
                            'class',
                            'wizard-step'
                        ],
                        [
                            'data-wizard-type',
                            'step'
                        ],
                        [
                            'href',
                            'javascript:;'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](20, 0, null, null, 4, 'div', [[
                        'class',
                        'wizard-label'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](21, 0, null, null, 0, 'i', [[
                        'class',
                        'wizard-icon flaticon-file-1'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](22, 0, null, null, 2, 'h3', [[
                        'class',
                        'wizard-title'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](23, null, [
                        '2) ',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](25, 0, null, null, 64, 'div', [[
                        'class',
                        'row justify-content-center my-10 px-8 my-lg-15 px-lg-10'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](26, 0, null, null, 63, 'div', [[
                        'class',
                        'col-xl-12 col-xxl-10'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](27, 0, null, null, 62, 'form', [
                        [
                            'class',
                            'form'
                        ],
                        [
                            'id',
                            'kt_form'
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
                        return 'submit' === n && (u = !1 !== t['ɵnov'](l, 29).onSubmit(e) && u), 'reset' === n && (u = !1 !== t['ɵnov'](l, 29).onReset() && u), u;
                    }, null, null)),
                    t['ɵdid'](28, 16384, null, 0, L.C, [], null, null),
                    t['ɵdid'](29, 4210688, null, 0, L.s, [
                        [
                            8,
                            null
                        ],
                        [
                            8,
                            null
                        ]
                    ], null, null),
                    t['ɵprd'](2048, null, L.d, null, [L.s]),
                    t['ɵdid'](31, 16384, null, 0, L.r, [[
                        6,
                        L.d
                    ]], null, null),
                    (l()(), t['ɵeld'](32, 0, null, null, 7, 'div', [
                        [
                            'class',
                            'pb-5'
                        ],
                        [
                            'data-wizard-state',
                            'current'
                        ],
                        [
                            'data-wizard-type',
                            'step-content'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](33, 0, null, null, 1, 'div', [[
                        'class',
                        'content overflow-auto'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](34, 0, [
                        [
                            2,
                            0
                        ],
                        [
                            'responsability',
                            1
                        ]
                    ], null, 0, 'div', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](35, 0, null, null, 4, 'div', [[
                        'class',
                        'd-flex justify-content-end border-top pt-10'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](36, 0, null, null, 3, 'div', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](37, 0, null, null, 2, 'button', [[
                        'class',
                        'btn btn-primary font-weight-bold text-uppercase px-9 py-4'
                    ]], [[
                        8,
                        'disabled',
                        0
                    ]], [[
                        null,
                        'click'
                    ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.goTo(2) && t), t;
                    }, null, null)),
                    (l()(), t['ɵted'](38, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](40, 0, null, null, 49, 'div', [
                        [
                            'class',
                            'pb-5'
                        ],
                        [
                            'data-wizard-type',
                            'step-content'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](41, 0, null, null, 48, 'div', [[
                        'class',
                        'content-form'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](42, 0, null, null, 38, 'ce-layout-dashboard', [], null, null, null, D.b, D.a)),
                    t['ɵdid'](43, 638976, null, 0, O.a, [t.ChangeDetectorRef], {
                        isLoading: [
                            0,
                            'isLoading'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](44, 0, null, 0, 36, 'form', [
                        [
                            'class',
                            'col'
                        ],
                        [
                            'content',
                            ''
                        ],
                        [
                            'novalidate',
                            ''
                        ],
                        [
                            'nz-form',
                            ''
                        ],
                        [
                            'nzLayout',
                            'vertical'
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
                        ],
                        [
                            2,
                            'ant-form-horizontal',
                            null
                        ],
                        [
                            2,
                            'ant-form-vertical',
                            null
                        ],
                        [
                            2,
                            'ant-form-inline',
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
                        return 'submit' === n && (u = !1 !== t['ɵnov'](l, 46).onSubmit(e) && u), 'reset' === n && (u = !1 !== t['ɵnov'](l, 46).onReset() && u), u;
                    }, null, null)),
                    t['ɵdid'](45, 16384, null, 0, L.C, [], null, null),
                    t['ɵdid'](46, 540672, null, 0, L.k, [
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
                    t['ɵprd'](2048, null, L.d, null, [L.k]),
                    t['ɵdid'](48, 16384, null, 0, L.r, [[
                        6,
                        L.d
                    ]], null, null),
                    t['ɵdid'](49, 671744, null, 0, I.b, [
                        T.a,
                        t.ElementRef,
                        t.Renderer2
                    ], {
                        nzLayout: [
                            0,
                            'nzLayout'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](50, 0, null, null, 5, 'div', [[
                        'class',
                        'row'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](51, 0, null, null, 4, 'div', [[
                        'class',
                        'col-12'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](52, 0, null, null, 3, 'div', [[
                        'class',
                        'form-group'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](53, 0, null, null, 2, 'ce-upload', [
                        [
                            'accept',
                            '.cer'
                        ],
                        [
                            'description',
                            'DOCUMENT.SIGN.UPLOADCER'
                        ],
                        [
                            'fieldName',
                            'DOCUMENT.SIGN.CER'
                        ],
                        [
                            'fileType',
                            'application/x-x509-ca-cert'
                        ],
                        [
                            'label',
                            'filecer'
                        ]
                    ], null, null, null, at.b, at.a)),
                    t['ɵdid'](54, 114688, null, 0, rt.a, [r.l], {
                        form: [
                            0,
                            'form'
                        ],
                        label: [
                            1,
                            'label'
                        ],
                        fieldName: [
                            2,
                            'fieldName'
                        ],
                        description: [
                            3,
                            'description'
                        ],
                        fileType: [
                            4,
                            'fileType'
                        ],
                        accept: [
                            5,
                            'accept'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](55, 0, null, 0, 0, 'img', [
                        [
                            'height',
                            '100'
                        ],
                        [
                            'icon',
                            ''
                        ],
                        [
                            'src',
                            '../assets/media/svg/uploads/cer.svg'
                        ],
                        [
                            'width',
                            '100'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](56, 0, null, null, 5, 'div', [[
                        'class',
                        'row'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](57, 0, null, null, 4, 'div', [[
                        'class',
                        'col-12'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](58, 0, null, null, 3, 'div', [[
                        'class',
                        'form-group'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](59, 0, null, null, 2, 'ce-upload', [
                        [
                            'accept',
                            '.key'
                        ],
                        [
                            'description',
                            'DOCUMENT.SIGN.UPLOADKEY'
                        ],
                        [
                            'fieldName',
                            'DOCUMENT.SIGN.KEY'
                        ],
                        [
                            'fileType',
                            '.key'
                        ],
                        [
                            'label',
                            'filekey'
                        ]
                    ], null, null, null, at.b, at.a)),
                    t['ɵdid'](60, 114688, null, 0, rt.a, [r.l], {
                        form: [
                            0,
                            'form'
                        ],
                        label: [
                            1,
                            'label'
                        ],
                        fieldName: [
                            2,
                            'fieldName'
                        ],
                        description: [
                            3,
                            'description'
                        ],
                        fileType: [
                            4,
                            'fileType'
                        ],
                        accept: [
                            5,
                            'accept'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](61, 0, null, 0, 0, 'img', [
                        [
                            'height',
                            '100'
                        ],
                        [
                            'icon',
                            ''
                        ],
                        [
                            'src',
                            '../assets/media/svg/uploads/key.svg'
                        ],
                        [
                            'width',
                            '100'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](62, 0, null, null, 18, 'div', [[
                        'class',
                        'row'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](63, 0, null, null, 17, 'div', [[
                        'class',
                        'col-12'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](64, 0, null, null, 16, 'div', [[
                        'class',
                        'form-group'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](65, 0, null, null, 3, 'label', [[
                        'class',
                        'mb-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](66, 0, null, null, 2, 'b', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](67, null, [
                        '3. ',
                        ':'
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](69, 0, null, null, 11, 'div', [[
                        'class',
                        'input-group mb-3'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](70, 0, null, null, 5, 'input', [
                        [
                            'class',
                            'form-control'
                        ],
                        [
                            'formControlName',
                            'passwordfiel'
                        ]
                    ], [
                        [
                            8,
                            'type',
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
                        var u = !0;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 71)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 71).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 71)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 71)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](71, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.e]),
                    t['ɵdid'](73, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
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
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, null, L.p, null, [L.i]),
                    t['ɵdid'](75, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    (l()(), t['ɵeld'](76, 0, null, null, 4, 'div', [[
                        'class',
                        'input-group-append'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](77, 0, null, null, 3, 'button', [
                        [
                            'class',
                            'btn btn-outline-secondary'
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
                        return 'click' === n && (t = !1 !== l.component.changeVisiblePassword() && t), t;
                    }, null, null)),
                    (l()(), t['ɵeld'](78, 0, null, null, 2, 'i', [
                        [
                            'nz-icon',
                            ''
                        ],
                        [
                            'nzTheme',
                            'outline'
                        ]
                    ], [[
                        2,
                        'anticon',
                        null
                    ]], null, null, null, null)),
                    t['ɵdid'](79, 2703360, null, 0, s.a, [
                        t.ElementRef,
                        s.d,
                        t.Renderer2,
                        [
                            2,
                            s.c
                        ]
                    ], {
                        nzType: [
                            0,
                            'nzType'
                        ],
                        nzTheme: [
                            1,
                            'nzTheme'
                        ]
                    }, null),
                    t['ɵdid'](80, 4734976, null, 0, d.a, [
                        t.ElementRef,
                        t.Renderer2
                    ], null, null),
                    (l()(), t['ɵeld'](81, 0, null, null, 8, 'div', [[
                        'class',
                        'd-flex justify-content-between border-top pt-10'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](82, 0, null, null, 3, 'div', [[
                        'class',
                        'mr-2'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](83, 0, null, null, 2, 'div', [[
                        'class',
                        'btn btn-light-primary font-weight-bold text-uppercase px-9 py-4'
                    ]], null, [[
                        null,
                        'click'
                    ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.goTo(1) && t), t;
                    }, null, null)),
                    (l()(), t['ɵted'](84, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](86, 0, null, null, 3, 'div', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](87, 0, null, null, 2, 'button', [[
                        'class',
                        'btn btn-primary font-weight-bold text-uppercase px-9 py-4'
                    ]], [[
                        8,
                        'disabled',
                        0
                    ]], [[
                        null,
                        'click'
                    ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.sendAcknowledgment() && t), t;
                    }, null, null)),
                    (l()(), t['ɵted'](88, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], function (l, n) {
                    var e = n.component;
                    l(n, 3, 0, e.isLoading), l(n, 43, 0, e.isLoadingresponsability), l(n, 46, 0, e._validations.entityForm()), l(n, 49, 0, 'vertical'), l(n, 54, 0, e._validations.entityForm(), 'filecer', 'DOCUMENT.SIGN.CER', 'DOCUMENT.SIGN.UPLOADCER', 'application/x-x509-ca-cert', '.cer'), l(n, 60, 0, e._validations.entityForm(), 'filekey', 'DOCUMENT.SIGN.KEY', 'DOCUMENT.SIGN.UPLOADKEY', '.key', '.key'), l(n, 73, 0, 'passwordfiel'), l(n, 79, 0, e.isVisiblePassword ? 'eye' : 'eye-invisible', 'outline');
                }, function (l, n) {
                    var e = n.component;
                    l(n, 17, 0, t['ɵunv'](n, 17, 0, t['ɵnov'](n, 18).transform('NOTIFICATION.CREATE.WIZARD.KEPP1'))), l(n, 23, 0, t['ɵunv'](n, 23, 0, t['ɵnov'](n, 24).transform('NOTIFICATION.CREATE.WIZARD.KEPP2'))), l(n, 27, 0, t['ɵnov'](n, 31).ngClassUntouched, t['ɵnov'](n, 31).ngClassTouched, t['ɵnov'](n, 31).ngClassPristine, t['ɵnov'](n, 31).ngClassDirty, t['ɵnov'](n, 31).ngClassValid, t['ɵnov'](n, 31).ngClassInvalid, t['ɵnov'](n, 31).ngClassPending), l(n, 37, 0, !1), l(n, 38, 0, t['ɵunv'](n, 38, 0, t['ɵnov'](n, 39).transform('NOTIFICATION.CREATE.WIZARD.NEXT'))), l(n, 44, 0, t['ɵnov'](n, 48).ngClassUntouched, t['ɵnov'](n, 48).ngClassTouched, t['ɵnov'](n, 48).ngClassPristine, t['ɵnov'](n, 48).ngClassDirty, t['ɵnov'](n, 48).ngClassValid, t['ɵnov'](n, 48).ngClassInvalid, t['ɵnov'](n, 48).ngClassPending, 'horizontal' === t['ɵnov'](n, 49).nzLayout, 'vertical' === t['ɵnov'](n, 49).nzLayout, 'inline' === t['ɵnov'](n, 49).nzLayout), l(n, 67, 0, t['ɵunv'](n, 67, 0, t['ɵnov'](n, 68).transform('DOCUMENT.SIGN.PASS'))), l(n, 70, 0, e.isVisiblePassword ? 'text' : 'password', t['ɵnov'](n, 75).ngClassUntouched, t['ɵnov'](n, 75).ngClassTouched, t['ɵnov'](n, 75).ngClassPristine, t['ɵnov'](n, 75).ngClassDirty, t['ɵnov'](n, 75).ngClassValid, t['ɵnov'](n, 75).ngClassInvalid, t['ɵnov'](n, 75).ngClassPending), l(n, 78, 0, !0), l(n, 84, 0, t['ɵunv'](n, 84, 0, t['ɵnov'](n, 85).transform('NOTIFICATION.CREATE.WIZARD.BACK'))), l(n, 87, 0, !e._validations.entityForm().valid), l(n, 88, 0, t['ɵunv'](n, 88, 0, t['ɵnov'](n, 89).transform('Aceptar y Firmar')));
                });
            }
            function gt(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, 'app-sing-legal-responsability', [], null, null, null, ft, pt)),
                    t['ɵprd'](512, null, _.a, st.a, [
                        L.f,
                        F.a
                    ]),
                    t['ɵdid'](2, 4440064, null, 0, mt, [
                        _.a,
                        t.ChangeDetectorRef,
                        nt.a,
                        vt.a,
                        i.r,
                        t.ChangeDetectorRef,
                        il.a,
                        i.a
                    ], null, null)
                ], function (l, n) {
                    l(n, 2, 0);
                }, null);
            }
            var ht = t['ɵccf']('app-sing-legal-responsability', mt, gt, {
                current: 'current',
                info: 'info'
            }, {}, []);
            class bt extends A.a {
                constructor(l, n) {
                    super(l, n), this._formBuilder = l, this._validate = n, this.setEntityForm = this.formBuilder.group({
                        companyName: [
                            '',
                            [L.x.required]
                        ],
                        address: [
                            '',
                            [L.x.required]
                        ],
                        cp: [
                            '',
                            [L.x.required]
                        ],
                        CFDI: [
                            0,
                            [L.x.required]
                        ],
                        regimen: [
                            0,
                            [L.x.required]
                        ]
                    });
                }
            }
            var Ct = function (l) {
                return l[l.ingress = 1] = 'ingress', l[l.egress = 2] = 'egress', l[l.transfer = 3] = 'transfer', l;
            }({});
            const Rt = new Map([
                [
                    Ct.ingress,
                    'ENUMS.CFDI.INGRESS'
                ],
                [
                    Ct.egress,
                    'ENUMS.CFDI.EGRESS'
                ],
                [
                    Ct.transfer,
                    'ENUMS.CFDI.TRANSFER'
                ]
            ]);
            class wt {
                constructor(l, n, e, t) {
                    this.fb = l, this.router = n, this.notificationService = e, this.billingService = t, this.getNameCFDIType = Rt, this.CFDIType = Ct, this.isLoadingComponent = !1, this.Regimen = [], this.USECFDI = [], this.empty_billing_Information = {
                        name: '',
                        address: '',
                        cfdi: '',
                        rfc: '',
                        regime: '',
                        cp: ''
                    };
                }
                ngOnInit() {
                    this.loadForm(), this.chargeForm();
                }
                loadForm() {
                    this.formGroup = this.fb.group({
                        name: [''],
                        address: [''],
                        CFDI: [''],
                        rfc: [''],
                        regime: [''],
                        cp: ['']
                    });
                }
                chargeForm() {
                    return Object(Y.a)(this, void 0, void 0, function* () {
                        this.Regimen = yield this.billingService.getRegime().toPromise(), this.USECFDI = yield this.billingService.getUseCFDI().toPromise(), this.isLoadingComponent = !0, this.billing_Information = yield this.billingService.getBilling().toPromise(), null != this.billing_Information && this.assingValue();
                    });
                }
                assingValue() {
                    this.formGroup.get('address').setValue(this.billing_Information.address), this.formGroup.get('name').setValue(this.billing_Information.name), this.formGroup.get('CFDI').setValue(this.billing_Information.cfdi), this.formGroup.get('rfc').setValue(this.billing_Information.rfc), this.formGroup.get('cp').setValue(this.billing_Information.cp), this.formGroup.get('regime').setValue(this.billing_Information.regime);
                }
                isControlValid(l) {
                    const n = this.formGroup.controls[l];
                    return n.valid && (n.dirty || n.touched);
                }
                isControlInvalid(l) {
                    const n = this.formGroup.controls[l];
                    return n.invalid && (n.dirty || n.touched);
                }
                controlHasError(l, n) {
                    const e = this.formGroup.controls[n];
                    return e.hasError(l) && (e.dirty || e.touched);
                }
                isControlTouched(l) {
                    var n;
                    const e = null === (n = this.formGroup) || void 0 === n ? void 0 : n.controls[l];
                    return (null == e ? void 0 : e.dirty) || (null == e ? void 0 : e.touched);
                }
                saveData() {
                    return Object(Y.a)(this, void 0, void 0, function* () {
                        try {
                            this.isLoadingComponent = !0, this.billing_Information = Object.assign(this.billing_Information, this.formGroup.value), yield this.billingService.save(this.billing_Information).toPromise(), this.isLoadingComponent = !1, this.notificationService.success('\xA1Tu datos de facturación se han actualizado con éxito!');
                        } catch (l) {
                            this.isLoadingComponent = !1, this.notificationService.error(l.error);
                        }
                    });
                }
            }
            class Et {
            }
            var yt = t['ɵcrt']({
                encapsulation: 0,
                styles: [['']],
                data: {}
            });
            function zt(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, 'div', [[
                        'class',
                        'card-toolbar'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 2, 'button', [
                        [
                            'class',
                            'btn btn-success mr-2'
                        ],
                        [
                            'type',
                            'reset'
                        ]
                    ], [[
                        8,
                        'disabled',
                        0
                    ]], [[
                        null,
                        'click'
                    ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.saveData() && t), t;
                    }, null, null)),
                    (l()(), t['ɵted'](2, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, !n.component.formGroup.valid), l(n, 2, 0, t['ɵunv'](n, 2, 0, t['ɵnov'](n, 3).transform('FORM.BUTTOMS.SAVE')));
                });
            }
            function St(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, 'option', [], null, null, null, null, null)),
                    t['ɵdid'](1, 147456, null, 0, L.u, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            L.w
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    t['ɵdid'](2, 147456, null, 0, L.B, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            8,
                            null
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    (l()(), t['ɵted'](3, null, [
                        '',
                        '-',
                        ''
                    ]))
                ], function (l, n) {
                    l(n, 1, 0, n.context.$implicit.code), l(n, 2, 0, n.context.$implicit.code);
                }, function (l, n) {
                    l(n, 3, 0, n.context.$implicit.code, n.context.$implicit.name);
                });
            }
            function It(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, 'option', [], null, null, null, null, null)),
                    t['ɵdid'](1, 147456, null, 0, L.u, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            L.w
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    t['ɵdid'](2, 147456, null, 0, L.B, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            8,
                            null
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    (l()(), t['ɵted'](3, null, [
                        '',
                        '-',
                        ''
                    ]))
                ], function (l, n) {
                    l(n, 1, 0, n.context.$implicit.code), l(n, 2, 0, n.context.$implicit.code);
                }, function (l, n) {
                    l(n, 3, 0, n.context.$implicit.code, n.context.$implicit.name);
                });
            }
            function kt(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 103, 'div', [[
                        'class',
                        'card card-custom'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 9, 'div', [[
                        'class',
                        'card-header py-3'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 6, 'div', [[
                        'class',
                        'card-title align-items-start flex-column'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 2, 'h3', [[
                        'class',
                        'card-label font-weight-bolder text-dark'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](4, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](6, 0, null, null, 2, 'span', [[
                        'class',
                        'text-muted font-weight-bold font-size-sm mt-1'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](7, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, zt)),
                    t['ɵdid'](10, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](11, 0, null, null, 92, 'form', [
                        [
                            'class',
                            'form'
                        ],
                        [
                            'content',
                            ''
                        ],
                        [
                            'novalidate',
                            ''
                        ],
                        [
                            'nz-form',
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
                        ],
                        [
                            2,
                            'ant-form-horizontal',
                            null
                        ],
                        [
                            2,
                            'ant-form-vertical',
                            null
                        ],
                        [
                            2,
                            'ant-form-inline',
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
                        return 'submit' === n && (u = !1 !== t['ɵnov'](l, 13).onSubmit(e) && u), 'reset' === n && (u = !1 !== t['ɵnov'](l, 13).onReset() && u), u;
                    }, null, null)),
                    t['ɵdid'](12, 16384, null, 0, L.C, [], null, null),
                    t['ɵdid'](13, 540672, null, 0, L.k, [
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
                    t['ɵprd'](2048, null, L.d, null, [L.k]),
                    t['ɵdid'](15, 16384, null, 0, L.r, [[
                        6,
                        L.d
                    ]], null, null),
                    t['ɵdid'](16, 671744, null, 0, I.b, [
                        T.a,
                        t.ElementRef,
                        t.Renderer2
                    ], null, null),
                    (l()(), t['ɵeld'](17, 0, null, null, 86, 'div', [[
                        'class',
                        'card-body'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](18, 0, null, null, 12, 'nz-form-item', [[
                        'class',
                        'row'
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
                        ],
                        [
                            2,
                            'ant-form-item-has-success',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-warning',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-error',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-is-validating',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-feedback',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-with-help',
                            null
                        ]
                    ], null, null, w.e, w.b)),
                    t['ɵdid'](19, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], null, null),
                    t['ɵdid'](20, 180224, null, 0, I.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](21, 0, null, 0, 2, 'label', [[
                        'class',
                        'col-xl-3 col-lg-3 col-form-label'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](22, null, [
                        '',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](24, 0, null, 0, 6, 'div', [[
                        'class',
                        'col-lg-9 col-xl-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](25, 0, null, null, 5, 'input', [
                        [
                            'class',
                            'form-control form-control-lg form-control-solid'
                        ],
                        [
                            'formControlName',
                            'rfc'
                        ],
                        [
                            'type',
                            'text'
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
                        var u = !0;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 26)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 26).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 26)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 26)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](26, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.e]),
                    t['ɵdid'](28, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
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
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, null, L.p, null, [L.i]),
                    t['ɵdid'](30, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    (l()(), t['ɵeld'](31, 0, null, null, 14, 'nz-form-item', [[
                        'class',
                        'row'
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
                        ],
                        [
                            2,
                            'ant-form-item-has-success',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-warning',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-error',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-is-validating',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-feedback',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-with-help',
                            null
                        ]
                    ], null, null, w.e, w.b)),
                    t['ɵdid'](32, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], null, null),
                    t['ɵdid'](33, 180224, null, 0, I.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](34, 0, null, 0, 2, 'label', [[
                        'class',
                        'col-xl-3 col-lg-3 col-form-label'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](35, null, [
                        '',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](37, 0, null, 0, 8, 'div', [[
                        'class',
                        'col-lg-9 col-xl-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](38, 0, null, null, 7, 'select', [
                        [
                            'class',
                            'form-control form-control-lg form-control-solid'
                        ],
                        [
                            'formControlName',
                            'regime'
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
                            'change'
                        ],
                        [
                            null,
                            'blur'
                        ]
                    ], function (l, n, e) {
                        var u = !0;
                        return 'change' === n && (u = !1 !== t['ɵnov'](l, 39).onChange(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 39).onTouched() && u), u;
                    }, null, null)),
                    t['ɵdid'](39, 16384, null, 0, L.w, [
                        t.Renderer2,
                        t.ElementRef
                    ], null, null),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.w]),
                    t['ɵdid'](41, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
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
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, null, L.p, null, [L.i]),
                    t['ɵdid'](43, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, St)),
                    t['ɵdid'](45, 278528, null, 0, a.NgForOf, [
                        t.ViewContainerRef,
                        t.TemplateRef,
                        t.IterableDiffers
                    ], {
                        ngForOf: [
                            0,
                            'ngForOf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](46, 0, null, null, 12, 'nz-form-item', [[
                        'class',
                        'row'
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
                        ],
                        [
                            2,
                            'ant-form-item-has-success',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-warning',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-error',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-is-validating',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-feedback',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-with-help',
                            null
                        ]
                    ], null, null, w.e, w.b)),
                    t['ɵdid'](47, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], null, null),
                    t['ɵdid'](48, 180224, null, 0, I.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](49, 0, null, 0, 2, 'label', [[
                        'class',
                        'col-xl-3 col-lg-3 col-form-label'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](50, null, [
                        '',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](52, 0, null, 0, 6, 'div', [[
                        'class',
                        'col-lg-9 col-xl-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](53, 0, null, null, 5, 'input', [
                        [
                            'class',
                            'form-control form-control-lg form-control-solid'
                        ],
                        [
                            'formControlName',
                            'name'
                        ],
                        [
                            'type',
                            'text'
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
                        var u = !0;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 54)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 54).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 54)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 54)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](54, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.e]),
                    t['ɵdid'](56, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
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
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, null, L.p, null, [L.i]),
                    t['ɵdid'](58, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    (l()(), t['ɵeld'](59, 0, null, null, 12, 'nz-form-item', [[
                        'class',
                        'row'
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
                        ],
                        [
                            2,
                            'ant-form-item-has-success',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-warning',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-error',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-is-validating',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-feedback',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-with-help',
                            null
                        ]
                    ], null, null, w.e, w.b)),
                    t['ɵdid'](60, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], null, null),
                    t['ɵdid'](61, 180224, null, 0, I.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](62, 0, null, 0, 2, 'label', [[
                        'class',
                        'col-xl-3 col-lg-3 col-form-label'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](63, null, [
                        '',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](65, 0, null, 0, 6, 'div', [[
                        'class',
                        'col-lg-9 col-xl-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](66, 0, null, null, 5, 'input', [
                        [
                            'class',
                            'form-control form-control-lg form-control-solid'
                        ],
                        [
                            'formControlName',
                            'address'
                        ],
                        [
                            'type',
                            'text'
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
                        var u = !0;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 67)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 67).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 67)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 67)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](67, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.e]),
                    t['ɵdid'](69, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
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
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, null, L.p, null, [L.i]),
                    t['ɵdid'](71, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    (l()(), t['ɵeld'](72, 0, null, null, 12, 'nz-form-item', [[
                        'class',
                        'row'
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
                        ],
                        [
                            2,
                            'ant-form-item-has-success',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-warning',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-error',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-is-validating',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-feedback',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-with-help',
                            null
                        ]
                    ], null, null, w.e, w.b)),
                    t['ɵdid'](73, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], null, null),
                    t['ɵdid'](74, 180224, null, 0, I.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](75, 0, null, 0, 2, 'label', [[
                        'class',
                        'col-xl-3 col-lg-3 col-form-label'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](76, null, [
                        '',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](78, 0, null, 0, 6, 'div', [[
                        'class',
                        'col-lg-9 col-xl-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](79, 0, null, null, 5, 'input', [
                        [
                            'class',
                            'form-control form-control-lg form-control-solid'
                        ],
                        [
                            'formControlName',
                            'cp'
                        ],
                        [
                            'type',
                            'text'
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
                        var u = !0;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 80)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 80).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 80)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 80)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](80, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.e]),
                    t['ɵdid'](82, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
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
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, null, L.p, null, [L.i]),
                    t['ɵdid'](84, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    (l()(), t['ɵeld'](85, 0, null, null, 18, 'nz-form-item', [[
                        'class',
                        'row'
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
                        ],
                        [
                            2,
                            'ant-form-item-has-success',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-warning',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-error',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-is-validating',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-feedback',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-with-help',
                            null
                        ]
                    ], null, null, w.e, w.b)),
                    t['ɵdid'](86, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], null, null),
                    t['ɵdid'](87, 180224, null, 0, I.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](88, 0, null, 0, 2, 'label', [[
                        'class',
                        'col-xl-3 col-lg-3 col-form-label'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](89, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](91, 0, null, 0, 12, 'div', [[
                        'class',
                        'col-lg-9 col-xl-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](92, 0, null, null, 11, 'nz-form-control', [], [[
                        4,
                        'flex',
                        null
                    ]], null, null, w.d, w.a)),
                    t['ɵdid'](93, 4931584, null, 0, E.a, [
                        t.ElementRef,
                        [
                            2,
                            E.c
                        ],
                        t.Renderer2
                    ], null, null),
                    t['ɵdid'](94, 1818624, null, 1, I.a, [
                        t.ElementRef,
                        [
                            2,
                            I.c
                        ],
                        t.ChangeDetectorRef,
                        t.Renderer2,
                        k.e,
                        [
                            2,
                            I.b
                        ]
                    ], null, null),
                    t['ɵqud'](603979776, 1, { defaultValidateControl: 0 }),
                    (l()(), t['ɵeld'](96, 0, null, 0, 7, 'select', [
                        [
                            'class',
                            'form-control form-control-lg form-control-solid'
                        ],
                        [
                            'formControlName',
                            'CFDI'
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
                            'change'
                        ],
                        [
                            null,
                            'blur'
                        ]
                    ], function (l, n, e) {
                        var u = !0;
                        return 'change' === n && (u = !1 !== t['ɵnov'](l, 97).onChange(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 97).onTouched() && u), u;
                    }, null, null)),
                    t['ɵdid'](97, 16384, null, 0, L.w, [
                        t.Renderer2,
                        t.ElementRef
                    ], null, null),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.w]),
                    t['ɵdid'](99, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
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
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, [[
                        1,
                        4
                    ]], L.p, null, [L.i]),
                    t['ɵdid'](101, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, It)),
                    t['ɵdid'](103, 278528, null, 0, a.NgForOf, [
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
                    l(n, 10, 0, null != e.formGroup && null != e.formGroup), l(n, 13, 0, e.formGroup), l(n, 19, 0), l(n, 28, 0, 'rfc'), l(n, 32, 0), l(n, 41, 0, 'regime'), l(n, 45, 0, e.Regimen), l(n, 47, 0), l(n, 56, 0, 'name'), l(n, 60, 0), l(n, 69, 0, 'address'), l(n, 73, 0), l(n, 82, 0, 'cp'), l(n, 86, 0), l(n, 93, 0), l(n, 94, 0), l(n, 99, 0, 'CFDI'), l(n, 103, 0, e.USECFDI);
                }, function (l, n) {
                    l(n, 4, 0, t['ɵunv'](n, 4, 0, t['ɵnov'](n, 5).transform('PROFILE.TITLES.BILLING_INFO'))), l(n, 7, 0, t['ɵunv'](n, 7, 0, t['ɵnov'](n, 8).transform('PROFILE.SUB_TITLES.BILLING_INFO'))), l(n, 11, 0, t['ɵnov'](n, 15).ngClassUntouched, t['ɵnov'](n, 15).ngClassTouched, t['ɵnov'](n, 15).ngClassPristine, t['ɵnov'](n, 15).ngClassDirty, t['ɵnov'](n, 15).ngClassValid, t['ɵnov'](n, 15).ngClassInvalid, t['ɵnov'](n, 15).ngClassPending, 'horizontal' === t['ɵnov'](n, 16).nzLayout, 'vertical' === t['ɵnov'](n, 16).nzLayout, 'inline' === t['ɵnov'](n, 16).nzLayout), l(n, 18, 1, [
                        'top' === t['ɵnov'](n, 19).nzAlign,
                        'middle' === t['ɵnov'](n, 19).nzAlign,
                        'bottom' === t['ɵnov'](n, 19).nzAlign,
                        'start' === t['ɵnov'](n, 19).nzJustify,
                        'end' === t['ɵnov'](n, 19).nzJustify,
                        'center' === t['ɵnov'](n, 19).nzJustify,
                        'space-around' === t['ɵnov'](n, 19).nzJustify,
                        'space-between' === t['ɵnov'](n, 19).nzJustify,
                        'success' === t['ɵnov'](n, 20).status,
                        'warning' === t['ɵnov'](n, 20).status,
                        'error' === t['ɵnov'](n, 20).status,
                        'validating' === t['ɵnov'](n, 20).status,
                        t['ɵnov'](n, 20).hasFeedback && t['ɵnov'](n, 20).status,
                        t['ɵnov'](n, 20).withHelpClass
                    ]), l(n, 22, 0, t['ɵunv'](n, 22, 0, t['ɵnov'](n, 23).transform('FORM.LABELS.RFC'))), l(n, 25, 0, t['ɵnov'](n, 30).ngClassUntouched, t['ɵnov'](n, 30).ngClassTouched, t['ɵnov'](n, 30).ngClassPristine, t['ɵnov'](n, 30).ngClassDirty, t['ɵnov'](n, 30).ngClassValid, t['ɵnov'](n, 30).ngClassInvalid, t['ɵnov'](n, 30).ngClassPending), l(n, 31, 1, [
                        'top' === t['ɵnov'](n, 32).nzAlign,
                        'middle' === t['ɵnov'](n, 32).nzAlign,
                        'bottom' === t['ɵnov'](n, 32).nzAlign,
                        'start' === t['ɵnov'](n, 32).nzJustify,
                        'end' === t['ɵnov'](n, 32).nzJustify,
                        'center' === t['ɵnov'](n, 32).nzJustify,
                        'space-around' === t['ɵnov'](n, 32).nzJustify,
                        'space-between' === t['ɵnov'](n, 32).nzJustify,
                        'success' === t['ɵnov'](n, 33).status,
                        'warning' === t['ɵnov'](n, 33).status,
                        'error' === t['ɵnov'](n, 33).status,
                        'validating' === t['ɵnov'](n, 33).status,
                        t['ɵnov'](n, 33).hasFeedback && t['ɵnov'](n, 33).status,
                        t['ɵnov'](n, 33).withHelpClass
                    ]), l(n, 35, 0, t['ɵunv'](n, 35, 0, t['ɵnov'](n, 36).transform('FORM.LABELS.REGIMEN'))), l(n, 38, 0, t['ɵnov'](n, 43).ngClassUntouched, t['ɵnov'](n, 43).ngClassTouched, t['ɵnov'](n, 43).ngClassPristine, t['ɵnov'](n, 43).ngClassDirty, t['ɵnov'](n, 43).ngClassValid, t['ɵnov'](n, 43).ngClassInvalid, t['ɵnov'](n, 43).ngClassPending), l(n, 46, 1, [
                        'top' === t['ɵnov'](n, 47).nzAlign,
                        'middle' === t['ɵnov'](n, 47).nzAlign,
                        'bottom' === t['ɵnov'](n, 47).nzAlign,
                        'start' === t['ɵnov'](n, 47).nzJustify,
                        'end' === t['ɵnov'](n, 47).nzJustify,
                        'center' === t['ɵnov'](n, 47).nzJustify,
                        'space-around' === t['ɵnov'](n, 47).nzJustify,
                        'space-between' === t['ɵnov'](n, 47).nzJustify,
                        'success' === t['ɵnov'](n, 48).status,
                        'warning' === t['ɵnov'](n, 48).status,
                        'error' === t['ɵnov'](n, 48).status,
                        'validating' === t['ɵnov'](n, 48).status,
                        t['ɵnov'](n, 48).hasFeedback && t['ɵnov'](n, 48).status,
                        t['ɵnov'](n, 48).withHelpClass
                    ]), l(n, 50, 0, t['ɵunv'](n, 50, 0, t['ɵnov'](n, 51).transform('FORM.LABELS.RZ'))), l(n, 53, 0, t['ɵnov'](n, 58).ngClassUntouched, t['ɵnov'](n, 58).ngClassTouched, t['ɵnov'](n, 58).ngClassPristine, t['ɵnov'](n, 58).ngClassDirty, t['ɵnov'](n, 58).ngClassValid, t['ɵnov'](n, 58).ngClassInvalid, t['ɵnov'](n, 58).ngClassPending), l(n, 59, 1, [
                        'top' === t['ɵnov'](n, 60).nzAlign,
                        'middle' === t['ɵnov'](n, 60).nzAlign,
                        'bottom' === t['ɵnov'](n, 60).nzAlign,
                        'start' === t['ɵnov'](n, 60).nzJustify,
                        'end' === t['ɵnov'](n, 60).nzJustify,
                        'center' === t['ɵnov'](n, 60).nzJustify,
                        'space-around' === t['ɵnov'](n, 60).nzJustify,
                        'space-between' === t['ɵnov'](n, 60).nzJustify,
                        'success' === t['ɵnov'](n, 61).status,
                        'warning' === t['ɵnov'](n, 61).status,
                        'error' === t['ɵnov'](n, 61).status,
                        'validating' === t['ɵnov'](n, 61).status,
                        t['ɵnov'](n, 61).hasFeedback && t['ɵnov'](n, 61).status,
                        t['ɵnov'](n, 61).withHelpClass
                    ]), l(n, 63, 0, t['ɵunv'](n, 63, 0, t['ɵnov'](n, 64).transform('FORM.LABELS.ADDRESS'))), l(n, 66, 0, t['ɵnov'](n, 71).ngClassUntouched, t['ɵnov'](n, 71).ngClassTouched, t['ɵnov'](n, 71).ngClassPristine, t['ɵnov'](n, 71).ngClassDirty, t['ɵnov'](n, 71).ngClassValid, t['ɵnov'](n, 71).ngClassInvalid, t['ɵnov'](n, 71).ngClassPending), l(n, 72, 1, [
                        'top' === t['ɵnov'](n, 73).nzAlign,
                        'middle' === t['ɵnov'](n, 73).nzAlign,
                        'bottom' === t['ɵnov'](n, 73).nzAlign,
                        'start' === t['ɵnov'](n, 73).nzJustify,
                        'end' === t['ɵnov'](n, 73).nzJustify,
                        'center' === t['ɵnov'](n, 73).nzJustify,
                        'space-around' === t['ɵnov'](n, 73).nzJustify,
                        'space-between' === t['ɵnov'](n, 73).nzJustify,
                        'success' === t['ɵnov'](n, 74).status,
                        'warning' === t['ɵnov'](n, 74).status,
                        'error' === t['ɵnov'](n, 74).status,
                        'validating' === t['ɵnov'](n, 74).status,
                        t['ɵnov'](n, 74).hasFeedback && t['ɵnov'](n, 74).status,
                        t['ɵnov'](n, 74).withHelpClass
                    ]), l(n, 76, 0, t['ɵunv'](n, 76, 0, t['ɵnov'](n, 77).transform('FORM.LABELS.CP'))), l(n, 79, 0, t['ɵnov'](n, 84).ngClassUntouched, t['ɵnov'](n, 84).ngClassTouched, t['ɵnov'](n, 84).ngClassPristine, t['ɵnov'](n, 84).ngClassDirty, t['ɵnov'](n, 84).ngClassValid, t['ɵnov'](n, 84).ngClassInvalid, t['ɵnov'](n, 84).ngClassPending), l(n, 85, 1, [
                        'top' === t['ɵnov'](n, 86).nzAlign,
                        'middle' === t['ɵnov'](n, 86).nzAlign,
                        'bottom' === t['ɵnov'](n, 86).nzAlign,
                        'start' === t['ɵnov'](n, 86).nzJustify,
                        'end' === t['ɵnov'](n, 86).nzJustify,
                        'center' === t['ɵnov'](n, 86).nzJustify,
                        'space-around' === t['ɵnov'](n, 86).nzJustify,
                        'space-between' === t['ɵnov'](n, 86).nzJustify,
                        'success' === t['ɵnov'](n, 87).status,
                        'warning' === t['ɵnov'](n, 87).status,
                        'error' === t['ɵnov'](n, 87).status,
                        'validating' === t['ɵnov'](n, 87).status,
                        t['ɵnov'](n, 87).hasFeedback && t['ɵnov'](n, 87).status,
                        t['ɵnov'](n, 87).withHelpClass
                    ]), l(n, 89, 0, t['ɵunv'](n, 89, 0, t['ɵnov'](n, 90).transform('FORM.LABELS.CFDI'))), l(n, 92, 0, t['ɵnov'](n, 93).hostFlexStyle), l(n, 96, 0, t['ɵnov'](n, 101).ngClassUntouched, t['ɵnov'](n, 101).ngClassTouched, t['ɵnov'](n, 101).ngClassPristine, t['ɵnov'](n, 101).ngClassDirty, t['ɵnov'](n, 101).ngClassValid, t['ɵnov'](n, 101).ngClassInvalid, t['ɵnov'](n, 101).ngClassPending);
                });
            }
            function Lt(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, 'app-billing-information', [], null, null, null, kt, yt)),
                    t['ɵprd'](4608, null, _.a, bt, [
                        L.f,
                        F.a
                    ]),
                    t['ɵdid'](2, 114688, null, 0, wt, [
                        L.f,
                        i.r,
                        il.a,
                        Et
                    ], null, null)
                ], function (l, n) {
                    l(n, 2, 0);
                }, null);
            }
            var Dt = t['ɵccf']('app-billing-information', wt, Lt, {}, {}, []);
            class Ot {
                constructor(l, n, e, t, u, o, i) {
                    this.fb = l, this.router = n, this.route = e, this.traslateService = t, this.changeDetectorRef = u, this.notificationService = o, this.responsibleService = i, this.isLoadingComponent = !1;
                }
                ngOnInit() {
                    this.loadForm();
                }
                loadForm() {
                    this.formGroup = this.fb.group({
                        name: [''],
                        email: [''],
                        phone: [''],
                        rfc: [''],
                        emailOFirm: [
                            '',
                            L.x.compose([
                                L.x.required,
                                L.x.email
                            ])
                        ]
                    });
                }
                validField(l) {
                    return '' == this.formGroup.get(l).value || this.formGroup.get(l).invalid;
                }
                searchResponsible() {
                    return Object(Y.a)(this, void 0, void 0, function* () {
                        try {
                            this.isLoadingComponent = !0;
                            let l = this.formGroup.get('emailOFirm').value;
                            this.legal_responsible = yield this.responsibleService.SearchResponsible(l).toPromise(), this.assingValue();
                        } catch (l) {
                            this.isLoadingComponent = !1, this.notificationService.error(['El correo que requiere vincular no tiene una cuenta centinela']);
                        }
                    });
                }
                save() {
                    return Object(Y.a)(this, void 0, void 0, function* () {
                        try {
                            this.isLoadingComponent = !0;
                            let l = this.formGroup.get('email').value;
                            yield this.responsibleService.saveEmploye(l).toPromise(), this.notificationService.success('El correo se ha vinculado con éxito'), this.router.navigate(['/settings/users-manager']);
                        } catch (l) {
                            this.isLoadingComponent = !1, this.notificationService.error(l.error);
                        }
                    });
                }
                assingValue() {
                    this.formGroup.get('email').setValue(this.legal_responsible.email), this.formGroup.get('name').setValue(this.legal_responsible.name), this.formGroup.get('phone').setValue(this.legal_responsible.mobile), this.formGroup.get('rfc').setValue(this.legal_responsible.rfc);
                }
            }
            var Tt = t['ɵcrt']({
                encapsulation: 0,
                styles: [['']],
                data: {}
            });
            function _t(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, 'div', [[
                        'class',
                        'card-toolbar'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 2, 'button', [
                        [
                            'class',
                            'btn btn-success mr-2'
                        ],
                        [
                            'type',
                            'reset'
                        ]
                    ], [[
                        8,
                        'disabled',
                        0
                    ]], [[
                        null,
                        'click'
                    ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.save() && t), t;
                    }, null, null)),
                    (l()(), t['ɵted'](2, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, !n.component.formGroup.valid), l(n, 2, 0, t['ɵunv'](n, 2, 0, t['ɵnov'](n, 3).transform('FORM.BUTTOMS.VINC')));
                });
            }
            function At(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 90, 'div', [[
                        'class',
                        'card card-custom'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 9, 'div', [[
                        'class',
                        'card-header py-3'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 6, 'div', [[
                        'class',
                        'card-title align-items-start flex-column'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 2, 'h3', [[
                        'class',
                        'card-label font-weight-bolder text-dark'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](4, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](6, 0, null, null, 2, 'span', [[
                        'class',
                        'text-muted font-weight-bold font-size-sm mt-1'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](7, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, _t)),
                    t['ɵdid'](10, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](11, 0, null, null, 79, 'form', [
                        [
                            'class',
                            'form'
                        ],
                        [
                            'content',
                            ''
                        ],
                        [
                            'novalidate',
                            ''
                        ],
                        [
                            'nz-form',
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
                        ],
                        [
                            2,
                            'ant-form-horizontal',
                            null
                        ],
                        [
                            2,
                            'ant-form-vertical',
                            null
                        ],
                        [
                            2,
                            'ant-form-inline',
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
                        return 'submit' === n && (u = !1 !== t['ɵnov'](l, 13).onSubmit(e) && u), 'reset' === n && (u = !1 !== t['ɵnov'](l, 13).onReset() && u), u;
                    }, null, null)),
                    t['ɵdid'](12, 16384, null, 0, L.C, [], null, null),
                    t['ɵdid'](13, 540672, null, 0, L.k, [
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
                    t['ɵprd'](2048, null, L.d, null, [L.k]),
                    t['ɵdid'](15, 16384, null, 0, L.r, [[
                        6,
                        L.d
                    ]], null, null),
                    t['ɵdid'](16, 671744, null, 0, I.b, [
                        T.a,
                        t.ElementRef,
                        t.Renderer2
                    ], null, null),
                    (l()(), t['ɵeld'](17, 0, null, null, 70, 'div', [[
                        'class',
                        'card-body'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](18, 0, null, null, 17, 'nz-form-item', [[
                        'class',
                        'row'
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
                        ],
                        [
                            2,
                            'ant-form-item-has-success',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-warning',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-error',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-is-validating',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-feedback',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-with-help',
                            null
                        ]
                    ], null, null, w.e, w.b)),
                    t['ɵdid'](19, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], null, null),
                    t['ɵdid'](20, 180224, null, 0, I.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](21, 0, null, 0, 2, 'p', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](22, null, [
                        '* ',
                        '.'
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](24, 0, null, 0, 11, 'div', [[
                        'class',
                        'col-lg-9 col-xl-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](25, 0, null, null, 10, 'div', [[
                        'class',
                        'input-group'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](26, 0, null, null, 6, 'input', [
                        [
                            'autocomplete',
                            'off'
                        ],
                        [
                            'class',
                            'form-control form-control-lg'
                        ],
                        [
                            'formControlName',
                            'emailOFirm'
                        ],
                        [
                            'type',
                            'text'
                        ]
                    ], [
                        [
                            8,
                            'placeholder',
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
                        var u = !0;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 27)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 27).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 27)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 27)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](27, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.e]),
                    t['ɵdid'](29, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
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
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, null, L.p, null, [L.i]),
                    t['ɵdid'](31, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](33, 0, null, null, 2, 'div', [[
                        'class',
                        'input-group-append'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](34, 0, null, null, 1, 'button', [
                        [
                            'class',
                            'input-group-text btn btn-primary'
                        ],
                        [
                            'type',
                            'button'
                        ]
                    ], [[
                        8,
                        'disabled',
                        0
                    ]], [[
                        null,
                        'click'
                    ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.searchResponsible() && t), t;
                    }, null, null)),
                    (l()(), t['ɵeld'](35, 0, null, null, 0, 'i', [[
                        'class',
                        'text-white-50 flaticon-user-add'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](36, 0, null, null, 12, 'nz-form-item', [[
                        'class',
                        'row'
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
                        ],
                        [
                            2,
                            'ant-form-item-has-success',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-warning',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-error',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-is-validating',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-feedback',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-with-help',
                            null
                        ]
                    ], null, null, w.e, w.b)),
                    t['ɵdid'](37, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], null, null),
                    t['ɵdid'](38, 180224, null, 0, I.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](39, 0, null, 0, 2, 'label', [[
                        'class',
                        'col-xl-3 col-lg-3 col-form-label'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](40, null, [
                        '',
                        ' * '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](42, 0, null, 0, 6, 'div', [[
                        'class',
                        'col-lg-9 col-xl-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](43, 0, null, null, 5, 'input', [
                        [
                            'class',
                            'form-control form-control-lg form-control-solid'
                        ],
                        [
                            'formControlName',
                            'name'
                        ],
                        [
                            'type',
                            'text'
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
                        var u = !0;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 44)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 44).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 44)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 44)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](44, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.e]),
                    t['ɵdid'](46, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
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
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, null, L.p, null, [L.i]),
                    t['ɵdid'](48, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    (l()(), t['ɵeld'](49, 0, null, null, 12, 'nz-form-item', [[
                        'class',
                        'row'
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
                        ],
                        [
                            2,
                            'ant-form-item-has-success',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-warning',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-error',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-is-validating',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-feedback',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-with-help',
                            null
                        ]
                    ], null, null, w.e, w.b)),
                    t['ɵdid'](50, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], null, null),
                    t['ɵdid'](51, 180224, null, 0, I.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](52, 0, null, 0, 2, 'label', [[
                        'class',
                        'col-xl-3 col-lg-3 col-form-label'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](53, null, [
                        '',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](55, 0, null, 0, 6, 'div', [[
                        'class',
                        'col-lg-9 col-xl-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](56, 0, null, null, 5, 'input', [
                        [
                            'class',
                            'form-control form-control-lg form-control-solid text-uppercase'
                        ],
                        [
                            'formControlName',
                            'rfc'
                        ],
                        [
                            'type',
                            'text'
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
                        var u = !0;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 57)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 57).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 57)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 57)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](57, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.e]),
                    t['ɵdid'](59, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
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
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, null, L.p, null, [L.i]),
                    t['ɵdid'](61, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    (l()(), t['ɵeld'](62, 0, null, null, 12, 'nz-form-item', [[
                        'class',
                        'row'
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
                        ],
                        [
                            2,
                            'ant-form-item-has-success',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-warning',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-error',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-is-validating',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-feedback',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-with-help',
                            null
                        ]
                    ], null, null, w.e, w.b)),
                    t['ɵdid'](63, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], null, null),
                    t['ɵdid'](64, 180224, null, 0, I.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](65, 0, null, 0, 2, 'label', [[
                        'class',
                        'col-xl-3 col-lg-3 col-form-label'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](66, null, [
                        '',
                        ' * '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](68, 0, null, 0, 6, 'div', [[
                        'class',
                        'col-lg-9 col-xl-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](69, 0, null, null, 5, 'input', [
                        [
                            'class',
                            'form-control form-control-lg form-control-solid'
                        ],
                        [
                            'formControlName',
                            'email'
                        ],
                        [
                            'type',
                            'text'
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
                        var u = !0;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 70)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 70).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 70)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 70)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](70, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.e]),
                    t['ɵdid'](72, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
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
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, null, L.p, null, [L.i]),
                    t['ɵdid'](74, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    (l()(), t['ɵeld'](75, 0, null, null, 12, 'nz-form-item', [[
                        'class',
                        'row'
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
                        ],
                        [
                            2,
                            'ant-form-item-has-success',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-warning',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-error',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-is-validating',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-feedback',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-with-help',
                            null
                        ]
                    ], null, null, w.e, w.b)),
                    t['ɵdid'](76, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], null, null),
                    t['ɵdid'](77, 180224, null, 0, I.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](78, 0, null, 0, 2, 'label', [[
                        'class',
                        'col-xl-3 col-lg-3 col-form-label'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](79, null, [
                        '',
                        ' * '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](81, 0, null, 0, 6, 'div', [[
                        'class',
                        'col-lg-9 col-xl-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](82, 0, null, null, 5, 'input', [
                        [
                            'class',
                            'form-control form-control-lg form-control-solid text-uppercase'
                        ],
                        [
                            'formControlName',
                            'phone'
                        ],
                        [
                            'type',
                            'text'
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
                        var u = !0;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 83)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 83).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 83)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 83)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](83, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.e]),
                    t['ɵdid'](85, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
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
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, null, L.p, null, [L.i]),
                    t['ɵdid'](87, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    (l()(), t['ɵeld'](88, 0, null, null, 2, 'p', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](89, null, [
                        '* ',
                        '.'
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], function (l, n) {
                    var e = n.component;
                    l(n, 10, 0, null != e.formGroup && null != e.formGroup), l(n, 13, 0, e.formGroup), l(n, 19, 0), l(n, 29, 0, 'emailOFirm'), l(n, 37, 0), l(n, 46, 0, 'name'), l(n, 50, 0), l(n, 59, 0, 'rfc'), l(n, 63, 0), l(n, 72, 0, 'email'), l(n, 76, 0), l(n, 85, 0, 'phone');
                }, function (l, n) {
                    var e = n.component;
                    l(n, 4, 0, t['ɵunv'](n, 4, 0, t['ɵnov'](n, 5).transform('PROFILE.TITLES.EMPLOYE_VINC'))), l(n, 7, 0, t['ɵunv'](n, 7, 0, t['ɵnov'](n, 8).transform('PROFILE.SUB_TITLES.EMPLOYE_VINC'))), l(n, 11, 0, t['ɵnov'](n, 15).ngClassUntouched, t['ɵnov'](n, 15).ngClassTouched, t['ɵnov'](n, 15).ngClassPristine, t['ɵnov'](n, 15).ngClassDirty, t['ɵnov'](n, 15).ngClassValid, t['ɵnov'](n, 15).ngClassInvalid, t['ɵnov'](n, 15).ngClassPending, 'horizontal' === t['ɵnov'](n, 16).nzLayout, 'vertical' === t['ɵnov'](n, 16).nzLayout, 'inline' === t['ɵnov'](n, 16).nzLayout), l(n, 18, 1, [
                        'top' === t['ɵnov'](n, 19).nzAlign,
                        'middle' === t['ɵnov'](n, 19).nzAlign,
                        'bottom' === t['ɵnov'](n, 19).nzAlign,
                        'start' === t['ɵnov'](n, 19).nzJustify,
                        'end' === t['ɵnov'](n, 19).nzJustify,
                        'center' === t['ɵnov'](n, 19).nzJustify,
                        'space-around' === t['ɵnov'](n, 19).nzJustify,
                        'space-between' === t['ɵnov'](n, 19).nzJustify,
                        'success' === t['ɵnov'](n, 20).status,
                        'warning' === t['ɵnov'](n, 20).status,
                        'error' === t['ɵnov'](n, 20).status,
                        'validating' === t['ɵnov'](n, 20).status,
                        t['ɵnov'](n, 20).hasFeedback && t['ɵnov'](n, 20).status,
                        t['ɵnov'](n, 20).withHelpClass
                    ]), l(n, 22, 0, t['ɵunv'](n, 22, 0, t['ɵnov'](n, 23).transform('GLOBAL.BONDING'))), l(n, 26, 0, t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 26, 0, t['ɵnov'](n, 32).transform('GENERAL.EMAIL')), ''), t['ɵnov'](n, 31).ngClassUntouched, t['ɵnov'](n, 31).ngClassTouched, t['ɵnov'](n, 31).ngClassPristine, t['ɵnov'](n, 31).ngClassDirty, t['ɵnov'](n, 31).ngClassValid, t['ɵnov'](n, 31).ngClassInvalid, t['ɵnov'](n, 31).ngClassPending), l(n, 34, 0, e.validField('emailOFirm')), l(n, 36, 1, [
                        'top' === t['ɵnov'](n, 37).nzAlign,
                        'middle' === t['ɵnov'](n, 37).nzAlign,
                        'bottom' === t['ɵnov'](n, 37).nzAlign,
                        'start' === t['ɵnov'](n, 37).nzJustify,
                        'end' === t['ɵnov'](n, 37).nzJustify,
                        'center' === t['ɵnov'](n, 37).nzJustify,
                        'space-around' === t['ɵnov'](n, 37).nzJustify,
                        'space-between' === t['ɵnov'](n, 37).nzJustify,
                        'success' === t['ɵnov'](n, 38).status,
                        'warning' === t['ɵnov'](n, 38).status,
                        'error' === t['ɵnov'](n, 38).status,
                        'validating' === t['ɵnov'](n, 38).status,
                        t['ɵnov'](n, 38).hasFeedback && t['ɵnov'](n, 38).status,
                        t['ɵnov'](n, 38).withHelpClass
                    ]), l(n, 40, 0, t['ɵunv'](n, 40, 0, t['ɵnov'](n, 41).transform('FORM.LABELS.NAME'))), l(n, 43, 0, t['ɵnov'](n, 48).ngClassUntouched, t['ɵnov'](n, 48).ngClassTouched, t['ɵnov'](n, 48).ngClassPristine, t['ɵnov'](n, 48).ngClassDirty, t['ɵnov'](n, 48).ngClassValid, t['ɵnov'](n, 48).ngClassInvalid, t['ɵnov'](n, 48).ngClassPending), l(n, 49, 1, [
                        'top' === t['ɵnov'](n, 50).nzAlign,
                        'middle' === t['ɵnov'](n, 50).nzAlign,
                        'bottom' === t['ɵnov'](n, 50).nzAlign,
                        'start' === t['ɵnov'](n, 50).nzJustify,
                        'end' === t['ɵnov'](n, 50).nzJustify,
                        'center' === t['ɵnov'](n, 50).nzJustify,
                        'space-around' === t['ɵnov'](n, 50).nzJustify,
                        'space-between' === t['ɵnov'](n, 50).nzJustify,
                        'success' === t['ɵnov'](n, 51).status,
                        'warning' === t['ɵnov'](n, 51).status,
                        'error' === t['ɵnov'](n, 51).status,
                        'validating' === t['ɵnov'](n, 51).status,
                        t['ɵnov'](n, 51).hasFeedback && t['ɵnov'](n, 51).status,
                        t['ɵnov'](n, 51).withHelpClass
                    ]), l(n, 53, 0, t['ɵunv'](n, 53, 0, t['ɵnov'](n, 54).transform('FORM.LABELS.RFC'))), l(n, 56, 0, t['ɵnov'](n, 61).ngClassUntouched, t['ɵnov'](n, 61).ngClassTouched, t['ɵnov'](n, 61).ngClassPristine, t['ɵnov'](n, 61).ngClassDirty, t['ɵnov'](n, 61).ngClassValid, t['ɵnov'](n, 61).ngClassInvalid, t['ɵnov'](n, 61).ngClassPending), l(n, 62, 1, [
                        'top' === t['ɵnov'](n, 63).nzAlign,
                        'middle' === t['ɵnov'](n, 63).nzAlign,
                        'bottom' === t['ɵnov'](n, 63).nzAlign,
                        'start' === t['ɵnov'](n, 63).nzJustify,
                        'end' === t['ɵnov'](n, 63).nzJustify,
                        'center' === t['ɵnov'](n, 63).nzJustify,
                        'space-around' === t['ɵnov'](n, 63).nzJustify,
                        'space-between' === t['ɵnov'](n, 63).nzJustify,
                        'success' === t['ɵnov'](n, 64).status,
                        'warning' === t['ɵnov'](n, 64).status,
                        'error' === t['ɵnov'](n, 64).status,
                        'validating' === t['ɵnov'](n, 64).status,
                        t['ɵnov'](n, 64).hasFeedback && t['ɵnov'](n, 64).status,
                        t['ɵnov'](n, 64).withHelpClass
                    ]), l(n, 66, 0, t['ɵunv'](n, 66, 0, t['ɵnov'](n, 67).transform('FORM.LABELS.EMAIL'))), l(n, 69, 0, t['ɵnov'](n, 74).ngClassUntouched, t['ɵnov'](n, 74).ngClassTouched, t['ɵnov'](n, 74).ngClassPristine, t['ɵnov'](n, 74).ngClassDirty, t['ɵnov'](n, 74).ngClassValid, t['ɵnov'](n, 74).ngClassInvalid, t['ɵnov'](n, 74).ngClassPending), l(n, 75, 1, [
                        'top' === t['ɵnov'](n, 76).nzAlign,
                        'middle' === t['ɵnov'](n, 76).nzAlign,
                        'bottom' === t['ɵnov'](n, 76).nzAlign,
                        'start' === t['ɵnov'](n, 76).nzJustify,
                        'end' === t['ɵnov'](n, 76).nzJustify,
                        'center' === t['ɵnov'](n, 76).nzJustify,
                        'space-around' === t['ɵnov'](n, 76).nzJustify,
                        'space-between' === t['ɵnov'](n, 76).nzJustify,
                        'success' === t['ɵnov'](n, 77).status,
                        'warning' === t['ɵnov'](n, 77).status,
                        'error' === t['ɵnov'](n, 77).status,
                        'validating' === t['ɵnov'](n, 77).status,
                        t['ɵnov'](n, 77).hasFeedback && t['ɵnov'](n, 77).status,
                        t['ɵnov'](n, 77).withHelpClass
                    ]), l(n, 79, 0, t['ɵunv'](n, 79, 0, t['ɵnov'](n, 80).transform('FORM.LABELS.MOBILE'))), l(n, 82, 0, t['ɵnov'](n, 87).ngClassUntouched, t['ɵnov'](n, 87).ngClassTouched, t['ɵnov'](n, 87).ngClassPristine, t['ɵnov'](n, 87).ngClassDirty, t['ɵnov'](n, 87).ngClassValid, t['ɵnov'](n, 87).ngClassInvalid, t['ɵnov'](n, 87).ngClassPending), l(n, 89, 0, t['ɵunv'](n, 89, 0, t['ɵnov'](n, 90).transform('GLOBAL.FORM')));
                });
            }
            function xt(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'app-employee-bonding', [], null, null, null, At, Tt)),
                    t['ɵdid'](1, 114688, null, 0, Ot, [
                        L.f,
                        i.r,
                        i.a,
                        r.l,
                        t.ChangeDetectorRef,
                        il.a,
                        nt.a
                    ], null, null)
                ], function (l, n) {
                    l(n, 1, 0);
                }, null);
            }
            var Ft = t['ɵccf']('app-employee-bonding', Ot, xt, {}, {}, []), Nt = e('7sJh'), Pt = e('onZ2');
            class Mt {
                constructor(l, n, e, u, o, i) {
                    this.fb = l, this.store = n, this.router = e, this.notificationService = u, this.authService = o, this.changeDetector = i, this.countryOptions = Pt.a.countries, this.model_phone = {
                        mobile: '',
                        codephone: '',
                        code: ''
                    }, this.show_phone = !0, this.isCountingClock = !1, this.time = 0, this.labelButton = 'AUTH.FORM.RESENDCODE', this.canSendCode = !0, this.isLoadingComponent = !1, this.countIsRunning = new t.EventEmitter(), this.sendCode = new t.EventEmitter();
                }
                ngOnInit() {
                    const currentHostName = window.location.hostname
                    const appv2HostName = currentHostName == 'centirev.centinela.app' ? 'https://appv2-centirev.centinela.app' : 'https://appv2.centinela.app'
                    window.location.href = `${appv2HostName}/redirect?token=${JSON.parse(localStorage.getItem("token")).token}&to=settings/change-phone`
                    return Object(Y.a)(this, void 0, void 0, function* () {
                        this.loadForm(), this.getInfoPhone(), this.user$ = this.store.select(c.b);
                    });
                }
                loadForm() {
                    this.formGroup = this.fb.group({
                        mobile: [
                            '',
                            L.x.compose([L.x.required])
                        ],
                        codephone: [
                            '',
                            L.x.compose([L.x.required])
                        ],
                        code: ['']
                    });
                }
                getValue(l) {
                    return '+' + l;
                }
                resendCode() {
                    return Object(Y.a)(this, void 0, void 0, function* () {
                        this.model_phone = Object.assign(this.model_phone, this.formGroup.value);
                        try {
                            yield this.authService.forwardCodeUpdate(this.model_phone.codephone, this.model_phone.mobile).toPromise(), this.show_phone = !1, this.notificationService.success('Se ha enviado un mensaje de texto al teléfono ' + this.model_phone.codephone + ' ' + this.model_phone.mobile + ', favor de ingresar el código para validar su número telefónico'), this.startCounterClock();
                        } catch (l) {
                            this.isLoadingComponent = !1, this.notificationService.error(l.error);
                        }
                    });
                }
                updatePhone() {
                    this.show_phone = !0;
                }
                save() {
                    return Object(Y.a)(this, void 0, void 0, function* () {
                        try {
                            this.isLoadingComponent = !0, this.model_phone = Object.assign(this.model_phone, this.formGroup.value), yield this.authService.updatePhone(this.model_phone.code, this.model_phone.codephone, this.model_phone.mobile).toPromise(), this.isLoadingComponent = !1, this.notificationService.success('\xA1Tu número móvil  se ha actualizado con éxito!'), this.router.navigate(['/settings/profile']);
                        } catch (l) {
                            this.isLoadingComponent = !1, this.notificationService.error(l.error);
                        }
                    });
                }
                getInfoPhone() {
                    this.store.select(c.b).subscribe(l => {
                        null != l && this.formGroup.setValue({
                            mobile: l.mobile,
                            codephone: l.code_mobile,
                            code: ''
                        });
                    });
                }
                startCounterClock() {
                    this.countIsRunning.emit(!0), this.isCountingClock = !0, this.time = 60;
                    let l = setInterval(() => {
                        this.time = this.time - 1, this.time <= 0 && (this.countIsRunning.emit(!1), this.isCountingClock = !1, clearInterval(l)), this.changeDetector.markForCheck();
                    }, 1000);
                }
                getTimeFormat(l) {
                    let n = Math.floor(l / 60 % 60);
                    n = n < 10 ? '0' + n : n;
                    let e = l % 60;
                    return e = e < 10 ? '0' + e : e, n + ':' + e;
                }
            }
            var Vt = e('Zker'), Ut = t['ɵcrt']({
                encapsulation: 0,
                styles: [['']],
                data: {}
            });
            function jt(l) {
                return t['ɵvid'](0, [(l()(), t['ɵeld'](0, 0, null, null, 0, 'img', [
                    [
                        'style',
                        'margin-right:5px;'
                    ],
                    [
                        'width',
                        '20'
                    ]
                ], [
                    [
                        8,
                        'src',
                        4
                    ],
                    [
                        8,
                        'alt',
                        0
                    ]
                ], null, null, null, null))], null, function (l, n) {
                    l(n, 0, 0, n.parent.context.$implicit.image, n.parent.context.$implicit.name);
                });
            }
            function Bt(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 4, 'nz-option', [[
                        'nzCustomContent',
                        ''
                    ]], null, null, null, Tl.c, Tl.a)),
                    t['ɵdid'](1, 770048, [[
                        3,
                        4
                    ]], 0, _l.a, [[
                        2,
                        _l.c
                    ]], {
                        nzLabel: [
                            0,
                            'nzLabel'
                        ],
                        nzValue: [
                            1,
                            'nzValue'
                        ],
                        nzCustomContent: [
                            2,
                            'nzCustomContent'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, 0, 1, null, jt)),
                    t['ɵdid'](3, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵted'](4, 0, [
                        ' ',
                        ' +',
                        ' '
                    ]))
                ], function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.getValue(n.context.$implicit.code), e.getValue(n.context.$implicit.code), ''), l(n, 3, 0, n.context.$implicit.image);
                }, function (l, n) {
                    l(n, 4, 0, n.context.$implicit.ISO2, n.context.$implicit.code);
                });
            }
            function Jt(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 39, 'div', [[
                        'class',
                        'card-body'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 38, 'div', [[
                        'class',
                        'row'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 37, 'div', [[
                        'class',
                        'col-xl-8'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 32, 'div', [[
                        'class',
                        'form-group'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](4, 0, null, null, 31, 'nz-form-item', [], [
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
                        ],
                        [
                            2,
                            'ant-form-item-has-success',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-warning',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-error',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-is-validating',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-feedback',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-with-help',
                            null
                        ]
                    ], null, null, w.e, w.b)),
                    t['ɵdid'](5, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], null, null),
                    t['ɵdid'](6, 180224, null, 0, I.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](7, 0, null, 0, 3, 'label', [[
                        'class',
                        'col-xl-3 col-lg-3 col-form-label'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](8, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](11, 0, null, 0, 24, 'nz-form-control', [[
                        'nzHasFeedback',
                        ''
                    ]], [[
                        4,
                        'flex',
                        null
                    ]], null, null, w.d, w.a)),
                    t['ɵdid'](12, 4931584, null, 0, E.a, [
                        t.ElementRef,
                        [
                            2,
                            E.c
                        ],
                        t.Renderer2
                    ], null, null),
                    t['ɵdid'](13, 1818624, null, 1, I.a, [
                        t.ElementRef,
                        [
                            2,
                            I.c
                        ],
                        t.ChangeDetectorRef,
                        t.Renderer2,
                        k.e,
                        [
                            2,
                            I.b
                        ]
                    ], {
                        nzHasFeedback: [
                            0,
                            'nzHasFeedback'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 1, { defaultValidateControl: 0 }),
                    (l()(), t['ɵeld'](15, 0, null, 0, 20, 'nz-input-group', [[
                        'nzCompact',
                        ''
                    ]], [
                        [
                            2,
                            'ant-input-group-compact',
                            null
                        ],
                        [
                            2,
                            'ant-input-search-enter-button',
                            null
                        ],
                        [
                            2,
                            'ant-input-search',
                            null
                        ],
                        [
                            2,
                            'ant-input-search-sm',
                            null
                        ],
                        [
                            2,
                            'ant-input-search-large',
                            null
                        ],
                        [
                            2,
                            'ant-input-group-wrapper',
                            null
                        ],
                        [
                            2,
                            'ant-input-group-wrapper-lg',
                            null
                        ],
                        [
                            2,
                            'ant-input-group-wrapper-sm',
                            null
                        ],
                        [
                            2,
                            'ant-input-affix-wrapper',
                            null
                        ],
                        [
                            2,
                            'ant-input-affix-wrapper-focused',
                            null
                        ],
                        [
                            2,
                            'ant-input-affix-wrapper-disabled',
                            null
                        ],
                        [
                            2,
                            'ant-input-affix-wrapper-lg',
                            null
                        ],
                        [
                            2,
                            'ant-input-affix-wrapper-sm',
                            null
                        ],
                        [
                            2,
                            'ant-input-group',
                            null
                        ],
                        [
                            2,
                            'ant-input-group-lg',
                            null
                        ],
                        [
                            2,
                            'ant-input-group-sm',
                            null
                        ]
                    ], null, null, Nt.b, Nt.a)),
                    t['ɵdid'](16, 1818624, null, 1, Ol.b, [
                        Al.d,
                        t.ElementRef,
                        t.ChangeDetectorRef
                    ], {
                        nzCompact: [
                            0,
                            'nzCompact'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 2, { listOfNzInputDirective: 1 }),
                    t['ɵdid'](18, 4734976, null, 0, d.a, [
                        t.ElementRef,
                        t.Renderer2
                    ], null, null),
                    (l()(), t['ɵeld'](19, 0, null, 0, 9, 'nz-select', [
                        [
                            'class',
                            'select-country__container'
                        ],
                        [
                            'formControlName',
                            'codephone'
                        ],
                        [
                            'nzPlaceHolder',
                            'Código'
                        ],
                        [
                            'style',
                            'width:40%;'
                        ]
                    ], [
                        [
                            2,
                            'ant-select-lg',
                            null
                        ],
                        [
                            2,
                            'ant-select-sm',
                            null
                        ],
                        [
                            2,
                            'ant-select-show-arrow',
                            null
                        ],
                        [
                            2,
                            'ant-select-disabled',
                            null
                        ],
                        [
                            2,
                            'ant-select-show-search',
                            null
                        ],
                        [
                            2,
                            'ant-select-allow-clear',
                            null
                        ],
                        [
                            2,
                            'ant-select-borderless',
                            null
                        ],
                        [
                            2,
                            'ant-select-open',
                            null
                        ],
                        [
                            2,
                            'ant-select-focused',
                            null
                        ],
                        [
                            2,
                            'ant-select-single',
                            null
                        ],
                        [
                            2,
                            'ant-select-multiple',
                            null
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
                    ], [[
                        null,
                        'click'
                    ]], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 20).onHostClick() && u), u;
                    }, Tl.d, Tl.b)),
                    t['ɵdid'](20, 6012928, null, 2, _l.h, [
                        T.a,
                        t.ChangeDetectorRef,
                        t.ElementRef,
                        z.a,
                        Al.d,
                        [
                            8,
                            null
                        ]
                    ], {
                        nzPlaceHolder: [
                            0,
                            'nzPlaceHolder'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 3, { listOfNzOptionComponent: 1 }),
                    t['ɵqud'](603979776, 4, { listOfNzOptionGroupComponent: 1 }),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [_l.h]),
                    t['ɵdid'](24, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
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
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, [[
                        1,
                        4
                    ]], L.p, null, [L.i]),
                    t['ɵdid'](26, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Bt)),
                    t['ɵdid'](28, 278528, null, 0, a.NgForOf, [
                        t.ViewContainerRef,
                        t.TemplateRef,
                        t.IterableDiffers
                    ], {
                        ngForOf: [
                            0,
                            'ngForOf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](29, 0, null, 0, 6, 'input', [
                        [
                            'formControlName',
                            'mobile'
                        ],
                        [
                            'id',
                            'mobile'
                        ],
                        [
                            'nz-input',
                            ''
                        ],
                        [
                            'style',
                            'width:60%;'
                        ],
                        [
                            'type',
                            'text'
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
                        ],
                        [
                            2,
                            'ant-input-disabled',
                            null
                        ],
                        [
                            2,
                            'ant-input-borderless',
                            null
                        ],
                        [
                            2,
                            'ant-input-lg',
                            null
                        ],
                        [
                            2,
                            'ant-input-sm',
                            null
                        ],
                        [
                            1,
                            'disabled',
                            0
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
                        var u = !0;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 30)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 30).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 30)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 30)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](30, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.e]),
                    t['ɵdid'](32, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
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
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, [[
                        1,
                        4
                    ]], L.p, null, [L.i]),
                    t['ɵdid'](34, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    t['ɵdid'](35, 737280, [[
                        2,
                        4
                    ]], 0, Ol.a, [
                        [
                            6,
                            L.p
                        ],
                        t.Renderer2,
                        t.ElementRef
                    ], null, null),
                    (l()(), t['ɵeld'](36, 0, null, null, 3, 'div', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](37, 0, null, null, 2, 'button', [[
                        'class',
                        'btn btn-success mr-2'
                    ]], null, [[
                        null,
                        'click'
                    ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.resendCode() && t), t;
                    }, null, null)),
                    (l()(), t['ɵted'](38, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], function (l, n) {
                    var e = n.component;
                    l(n, 5, 0), l(n, 12, 0), l(n, 13, 0, ''), l(n, 16, 0, ''), l(n, 20, 0, 'Código'), l(n, 24, 0, 'codephone'), l(n, 28, 0, e.countryOptions), l(n, 32, 0, 'mobile'), l(n, 35, 0);
                }, function (l, n) {
                    var e = n.component;
                    l(n, 4, 1, [
                        'top' === t['ɵnov'](n, 5).nzAlign,
                        'middle' === t['ɵnov'](n, 5).nzAlign,
                        'bottom' === t['ɵnov'](n, 5).nzAlign,
                        'start' === t['ɵnov'](n, 5).nzJustify,
                        'end' === t['ɵnov'](n, 5).nzJustify,
                        'center' === t['ɵnov'](n, 5).nzJustify,
                        'space-around' === t['ɵnov'](n, 5).nzJustify,
                        'space-between' === t['ɵnov'](n, 5).nzJustify,
                        'success' === t['ɵnov'](n, 6).status,
                        'warning' === t['ɵnov'](n, 6).status,
                        'error' === t['ɵnov'](n, 6).status,
                        'validating' === t['ɵnov'](n, 6).status,
                        t['ɵnov'](n, 6).hasFeedback && t['ɵnov'](n, 6).status,
                        t['ɵnov'](n, 6).withHelpClass
                    ]), l(n, 8, 0, t['ɵunv'](n, 8, 0, t['ɵnov'](n, 10).transform(null != t['ɵunv'](n, 8, 0, t['ɵnov'](n, 9).transform(e.user$)).mobile_verified_at ? 'PROFILE.SUB_TITLES.PHONENEW' : 'PROFILE.SUB_TITLES.PHONE'))), l(n, 11, 0, t['ɵnov'](n, 12).hostFlexStyle), l(n, 15, 1, [
                        t['ɵnov'](n, 16).nzCompact,
                        t['ɵnov'](n, 16).nzSearch,
                        t['ɵnov'](n, 16).nzSearch,
                        t['ɵnov'](n, 16).nzSearch && t['ɵnov'](n, 16).isSmall,
                        t['ɵnov'](n, 16).nzSearch && t['ɵnov'](n, 16).isLarge,
                        t['ɵnov'](n, 16).isAddOn,
                        t['ɵnov'](n, 16).isAddOn && t['ɵnov'](n, 16).isLarge,
                        t['ɵnov'](n, 16).isAddOn && t['ɵnov'](n, 16).isSmall,
                        t['ɵnov'](n, 16).isAffix && !t['ɵnov'](n, 16).isAddOn,
                        t['ɵnov'](n, 16).isAffix && t['ɵnov'](n, 16).focused,
                        t['ɵnov'](n, 16).isAffix && t['ɵnov'](n, 16).disabled,
                        t['ɵnov'](n, 16).isAffix && !t['ɵnov'](n, 16).isAddOn && t['ɵnov'](n, 16).isLarge,
                        t['ɵnov'](n, 16).isAffix && !t['ɵnov'](n, 16).isAddOn && t['ɵnov'](n, 16).isSmall,
                        !t['ɵnov'](n, 16).isAffix && !t['ɵnov'](n, 16).isAddOn,
                        !t['ɵnov'](n, 16).isAffix && !t['ɵnov'](n, 16).isAddOn && t['ɵnov'](n, 16).isLarge,
                        !t['ɵnov'](n, 16).isAffix && !t['ɵnov'](n, 16).isAddOn && t['ɵnov'](n, 16).isSmall
                    ]), l(n, 19, 1, [
                        'large' === t['ɵnov'](n, 20).nzSize,
                        'small' === t['ɵnov'](n, 20).nzSize,
                        t['ɵnov'](n, 20).nzShowArrow,
                        t['ɵnov'](n, 20).nzDisabled,
                        (t['ɵnov'](n, 20).nzShowSearch || 'default' !== t['ɵnov'](n, 20).nzMode) && !t['ɵnov'](n, 20).nzDisabled,
                        t['ɵnov'](n, 20).nzAllowClear,
                        t['ɵnov'](n, 20).nzBorderless,
                        t['ɵnov'](n, 20).nzOpen,
                        t['ɵnov'](n, 20).nzOpen || t['ɵnov'](n, 20).focused,
                        'default' === t['ɵnov'](n, 20).nzMode,
                        'default' !== t['ɵnov'](n, 20).nzMode,
                        t['ɵnov'](n, 26).ngClassUntouched,
                        t['ɵnov'](n, 26).ngClassTouched,
                        t['ɵnov'](n, 26).ngClassPristine,
                        t['ɵnov'](n, 26).ngClassDirty,
                        t['ɵnov'](n, 26).ngClassValid,
                        t['ɵnov'](n, 26).ngClassInvalid,
                        t['ɵnov'](n, 26).ngClassPending
                    ]), l(n, 29, 1, [
                        t['ɵnov'](n, 34).ngClassUntouched,
                        t['ɵnov'](n, 34).ngClassTouched,
                        t['ɵnov'](n, 34).ngClassPristine,
                        t['ɵnov'](n, 34).ngClassDirty,
                        t['ɵnov'](n, 34).ngClassValid,
                        t['ɵnov'](n, 34).ngClassInvalid,
                        t['ɵnov'](n, 34).ngClassPending,
                        t['ɵnov'](n, 35).disabled,
                        t['ɵnov'](n, 35).nzBorderless,
                        'large' === t['ɵnov'](n, 35).nzSize,
                        'small' === t['ɵnov'](n, 35).nzSize,
                        t['ɵnov'](n, 35).disabled || null
                    ]), l(n, 38, 0, t['ɵunv'](n, 38, 0, t['ɵnov'](n, 39).transform('PROFILE.SUB_TITLES.SEND')));
                });
            }
            function Ht(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 41, 'div', [[
                        'class',
                        'row'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 9, 'div', [[
                        'class',
                        'col-12 text-center'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 3, 'p', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 0, 'br', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](4, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](6, 0, null, null, 4, 'h3', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](7, null, [
                        ' ',
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](9, 0, null, null, 0, 'br', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['\xA0 '])),
                    (l()(), t['ɵeld'](11, 0, null, null, 30, 'div', [[
                        'class',
                        'col-8'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](12, 0, null, null, 16, 'nz-form-item', [], [
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
                        ],
                        [
                            2,
                            'ant-form-item-has-success',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-warning',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-error',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-is-validating',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-feedback',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-with-help',
                            null
                        ]
                    ], null, null, w.e, w.b)),
                    t['ɵdid'](13, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], null, null),
                    t['ɵdid'](14, 180224, null, 0, I.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](15, 0, null, 0, 2, 'label', [[
                        'class',
                        'col-xl-4 col-lg-3 col-form-label'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](16, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](18, 0, null, 0, 10, 'nz-form-control', [], [[
                        4,
                        'flex',
                        null
                    ]], null, null, w.d, w.a)),
                    t['ɵdid'](19, 4931584, null, 0, E.a, [
                        t.ElementRef,
                        [
                            2,
                            E.c
                        ],
                        t.Renderer2
                    ], null, null),
                    t['ɵdid'](20, 1818624, null, 1, I.a, [
                        t.ElementRef,
                        [
                            2,
                            I.c
                        ],
                        t.ChangeDetectorRef,
                        t.Renderer2,
                        k.e,
                        [
                            2,
                            I.b
                        ]
                    ], null, null),
                    t['ɵqud'](603979776, 5, { defaultValidateControl: 0 }),
                    (l()(), t['ɵeld'](22, 0, null, 0, 6, 'div', [[
                        'class',
                        'input-group mb-3'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](23, 0, null, null, 5, 'input', [
                        [
                            'class',
                            'form-control'
                        ],
                        [
                            'formControlName',
                            'code'
                        ],
                        [
                            'placeholder',
                            'Código'
                        ],
                        [
                            'type',
                            'text'
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
                        var u = !0;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 24)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 24).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 24)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 24)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](24, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.e]),
                    t['ɵdid'](26, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
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
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, [[
                        5,
                        4
                    ]], L.p, null, [L.i]),
                    t['ɵdid'](28, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    (l()(), t['ɵeld'](29, 0, null, null, 12, 'div', [
                        [
                            'class',
                            'form-group'
                        ],
                        [
                            'style',
                            'margin-left: 10%;'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](30, 0, null, null, 3, 'div', [[
                        'style',
                        'float: left; width: auto;'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](31, 0, null, null, 2, 'button', [[
                        'class',
                        'btn btn-primary'
                    ]], [[
                        8,
                        'disabled',
                        0
                    ]], [[
                        null,
                        'click'
                    ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.updatePhone() && t), t;
                    }, null, null)),
                    (l()(), t['ɵted'](32, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](34, 0, null, null, 3, 'div', [[
                        'style',
                        'float: left; width: auto; margin-left:5%'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](35, 0, null, null, 2, 'button', [[
                        'class',
                        'btn btn-success mr-2'
                    ]], [[
                        8,
                        'disabled',
                        0
                    ]], [[
                        null,
                        'click'
                    ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.resendCode() && t), t;
                    }, null, null)),
                    (l()(), t['ɵted'](36, null, [
                        '',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](38, 0, null, null, 3, 'div', [[
                        'style',
                        'float: left; width: auto; margin-left:5%'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](39, 0, null, null, 2, 'button', [[
                        'class',
                        'btn btn-success mr-2'
                    ]], null, [[
                        null,
                        'click'
                    ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.save() && t), t;
                    }, null, null)),
                    (l()(), t['ɵted'](40, null, [
                        '',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], function (l, n) {
                    l(n, 13, 0), l(n, 19, 0), l(n, 20, 0), l(n, 26, 0, 'code');
                }, function (l, n) {
                    var e = n.component;
                    l(n, 4, 0, t['ɵunv'](n, 4, 0, t['ɵnov'](n, 5).transform('PROFILE.SUB_TITLES.MESSAGES_PHONE'))), l(n, 7, 0, t['ɵunv'](n, 7, 0, t['ɵnov'](n, 8).transform('PROFILE.SUB_TITLES.TIME_PHONE')), e.time > 0 ? e.getTimeFormat(e.time) : '00:00'), l(n, 12, 1, [
                        'top' === t['ɵnov'](n, 13).nzAlign,
                        'middle' === t['ɵnov'](n, 13).nzAlign,
                        'bottom' === t['ɵnov'](n, 13).nzAlign,
                        'start' === t['ɵnov'](n, 13).nzJustify,
                        'end' === t['ɵnov'](n, 13).nzJustify,
                        'center' === t['ɵnov'](n, 13).nzJustify,
                        'space-around' === t['ɵnov'](n, 13).nzJustify,
                        'space-between' === t['ɵnov'](n, 13).nzJustify,
                        'success' === t['ɵnov'](n, 14).status,
                        'warning' === t['ɵnov'](n, 14).status,
                        'error' === t['ɵnov'](n, 14).status,
                        'validating' === t['ɵnov'](n, 14).status,
                        t['ɵnov'](n, 14).hasFeedback && t['ɵnov'](n, 14).status,
                        t['ɵnov'](n, 14).withHelpClass
                    ]), l(n, 16, 0, t['ɵunv'](n, 16, 0, t['ɵnov'](n, 17).transform('FORM.LABELS.CODE'))), l(n, 18, 0, t['ɵnov'](n, 19).hostFlexStyle), l(n, 23, 0, t['ɵnov'](n, 28).ngClassUntouched, t['ɵnov'](n, 28).ngClassTouched, t['ɵnov'](n, 28).ngClassPristine, t['ɵnov'](n, 28).ngClassDirty, t['ɵnov'](n, 28).ngClassValid, t['ɵnov'](n, 28).ngClassInvalid, t['ɵnov'](n, 28).ngClassPending), l(n, 31, 0, e.isCountingClock || !e.canSendCode), l(n, 32, 0, t['ɵunv'](n, 32, 0, t['ɵnov'](n, 33).transform('PROFILE.SUB_TITLES.UPDATE_PHONE'))), l(n, 35, 0, e.isCountingClock || !e.canSendCode), l(n, 36, 0, t['ɵunv'](n, 36, 0, t['ɵnov'](n, 37).transform(e.labelButton))), l(n, 40, 0, t['ɵunv'](n, 40, 0, t['ɵnov'](n, 41).transform('PROFILE.SUB_TITLES.VALID_PHONE')));
                });
            }
            function Gt(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 21, 'ce-layout-dashboard', [], null, null, null, D.b, D.a)),
                    t['ɵdid'](1, 638976, null, 0, O.a, [t.ChangeDetectorRef], {
                        isLoading: [
                            0,
                            'isLoading'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](2, 0, null, 0, 19, 'div', [
                        [
                            'class',
                            'card card-custom'
                        ],
                        [
                            'content',
                            ''
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 8, 'div', [[
                        'class',
                        'card-header py-3'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](4, 0, null, null, 7, 'div', [[
                        'class',
                        'card-title align-items-start flex-column'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](5, 0, null, null, 3, 'h3', [[
                        'class',
                        'card-label font-weight-bolder text-dark'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](6, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](9, 0, null, null, 2, 'span', [[
                        'class',
                        'text-muted font-weight-bold font-size-sm mt-1'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](10, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](12, 0, null, null, 9, 'form', [
                        [
                            'class',
                            'form'
                        ],
                        [
                            'content',
                            ''
                        ],
                        [
                            'novalidate',
                            ''
                        ],
                        [
                            'nz-form',
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
                        ],
                        [
                            2,
                            'ant-form-horizontal',
                            null
                        ],
                        [
                            2,
                            'ant-form-vertical',
                            null
                        ],
                        [
                            2,
                            'ant-form-inline',
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
                        return 'submit' === n && (u = !1 !== t['ɵnov'](l, 14).onSubmit(e) && u), 'reset' === n && (u = !1 !== t['ɵnov'](l, 14).onReset() && u), u;
                    }, null, null)),
                    t['ɵdid'](13, 16384, null, 0, L.C, [], null, null),
                    t['ɵdid'](14, 540672, null, 0, L.k, [
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
                    t['ɵprd'](2048, null, L.d, null, [L.k]),
                    t['ɵdid'](16, 16384, null, 0, L.r, [[
                        6,
                        L.d
                    ]], null, null),
                    t['ɵdid'](17, 671744, null, 0, I.b, [
                        T.a,
                        t.ElementRef,
                        t.Renderer2
                    ], null, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Jt)),
                    t['ɵdid'](19, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Ht)),
                    t['ɵdid'](21, 16384, null, 0, a.NgIf, [
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
                    l(n, 1, 0, e.isLoadingComponent), l(n, 14, 0, e.formGroup), l(n, 19, 0, e.show_phone), l(n, 21, 0, !e.show_phone);
                }, function (l, n) {
                    var e = n.component;
                    l(n, 6, 0, t['ɵunv'](n, 6, 0, t['ɵnov'](n, 8).transform(null != t['ɵunv'](n, 6, 0, t['ɵnov'](n, 7).transform(e.user$)).mobile_verified_at ? 'PROFILE.SUB_TITLES.CHANGE_PHONE' : 'PROFILE.SUB_TITLES.CONFI_PHONE'))), l(n, 10, 0, t['ɵunv'](n, 10, 0, t['ɵnov'](n, 11).transform('PROFILE.SUB_TITLES.CHANGE_PHONE'))), l(n, 12, 0, t['ɵnov'](n, 16).ngClassUntouched, t['ɵnov'](n, 16).ngClassTouched, t['ɵnov'](n, 16).ngClassPristine, t['ɵnov'](n, 16).ngClassDirty, t['ɵnov'](n, 16).ngClassValid, t['ɵnov'](n, 16).ngClassInvalid, t['ɵnov'](n, 16).ngClassPending, 'horizontal' === t['ɵnov'](n, 17).nzLayout, 'vertical' === t['ɵnov'](n, 17).nzLayout, 'inline' === t['ɵnov'](n, 17).nzLayout);
                });
            }
            function qt(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'app-change-phone', [], null, null, null, Gt, Ut)),
                    t['ɵdid'](1, 114688, null, 0, Mt, [
                        L.f,
                        v.o,
                        i.r,
                        il.a,
                        Vt.a,
                        t.ChangeDetectorRef
                    ], null, null)
                ], function (l, n) {
                    l(n, 1, 0);
                }, null);
            }
            var $t = t['ɵccf']('app-change-phone', Mt, qt, {}, {}, []);
            class Kt extends A.a {
                constructor(l, n, e) {
                    super(l, n), this.existingService = e, this.setEntityForm = this.formBuilder.group({
                        email: [
                            '',
                            [
                                L.x.required,
                                L.x.maxLength(60),
                                N.a.emailValidator()
                            ],
                            []
                        ],
                        email_confirmation: [
                            '',
                            [
                                N.a.emailValidator(),
                                L.x.required,
                                L.x.maxLength(60)
                            ]
                        ]
                    }, { validator: N.a.EmailMatchValidatorv2 }), this.addAditionalControls();
                }
                addAditionalControls() {
                }
            }
            class Zt {
                constructor(l, n, e, t, u, o, i, a) {
                    this.fb = l, this.store = n, this.changeDetectorRef = e, this.router = t, this._validations = u, this.notificationService = o, this.authService = i, this.traslateService = a, this.isLoadingComponent = !1, this.model_email = {
                        email: '',
                        email_confirmation: ''
                    };
                }
                ngOnInit() {
                    const currentHostName = window.location.hostname
                    const appv2HostName = currentHostName == 'centirev.centinela.app' ? 'https://appv2-centirev.centinela.app' : 'https://appv2.centinela.app'
                    window.location.href = `${appv2HostName}/redirect?token=${JSON.parse(localStorage.getItem("token")).token}&to=settings/change-email`
                    this.formGroup = this._validations.entityForm(), this.user$ = this.store.select(c.b);
                }
                ngAfterViewInit() {
                    this.formGroup = this._validations.entityForm(), this.getInfo();
                }
                save() {
                    return Object(Y.a)(this, void 0, void 0, function* () {
                        try {
                            if (this.isLoadingComponent = !0, this.model_email = Object.assign(this.model_email, this.formGroup.value), this.model_email.email == this.model_email.email_confirmation)
                                this.store.dispatch(new nl(this.model_email.email)), this.isLoadingComponent = !1, this.formGroup.reset();
                            else {
                                this.isLoadingComponent = !1;
                                let l = this.traslateService.instant('MESSAGES.ERROR_01');
                                this.notificationService.error([l]);
                            }
                        } catch (l) {
                            this.isLoadingComponent = !1, this.notificationService.error(l.error);
                        }
                    });
                }
                getInfo() {
                    this.store.select(c.b).subscribe(l => {
                        null != l && this.formGroup.setValue({
                            email: l.email,
                            email_confirmation: ''
                        });
                    });
                }
            }
            var Xt = t['ɵcrt']({
                encapsulation: 0,
                styles: [['']],
                data: {}
            });
            function Wt(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 2, 'span', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](2, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    var e = n.component;
                    l(n, 2, 0, t['ɵunv'](n, 2, 0, t['ɵnov'](n, 3).transform(e._validations.message().code)));
                });
            }
            function Yt(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Wt)),
                    t['ɵdid'](1, 16384, null, 0, a.NgIf, [
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
                    l(n, 1, 0, n.component._validations.validate('email'));
                }, null);
            }
            function Qt(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 2, 'span', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](2, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    var e = n.component;
                    l(n, 2, 0, t['ɵunv'](n, 2, 0, t['ɵnov'](n, 3).transform(e._validations.message().code)));
                });
            }
            function lu(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Qt)),
                    t['ɵdid'](1, 16384, null, 0, a.NgIf, [
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
                    l(n, 1, 0, n.component._validations.validate('email_confirmation'));
                }, null);
            }
            function nu(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 63, 'ce-layout-dashboard', [], null, null, null, D.b, D.a)),
                    t['ɵdid'](1, 638976, null, 0, O.a, [t.ChangeDetectorRef], {
                        isLoading: [
                            0,
                            'isLoading'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](2, 0, null, 0, 61, 'div', [
                        [
                            'class',
                            'card card-custom'
                        ],
                        [
                            'content',
                            ''
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 13, 'div', [[
                        'class',
                        'card-header py-3'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](4, 0, null, null, 8, 'div', [[
                        'class',
                        'card-title align-items-start flex-column'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](5, 0, null, null, 3, 'h3', [[
                        'class',
                        'card-label font-weight-bolder text-dark'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](6, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](9, 0, null, null, 3, 'span', [[
                        'class',
                        'text-muted font-weight-bold font-size-sm mt-1'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](10, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](13, 0, null, null, 3, 'div', [[
                        'class',
                        'card-toolbar'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](14, 0, null, null, 2, 'button', [
                        [
                            'class',
                            'btn btn-success mr-2'
                        ],
                        [
                            'type',
                            'reset'
                        ]
                    ], [[
                        8,
                        'disabled',
                        0
                    ]], [[
                        null,
                        'click'
                    ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.save() && t), t;
                    }, null, null)),
                    (l()(), t['ɵted'](15, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](17, 0, null, null, 46, 'form', [
                        [
                            'class',
                            'form'
                        ],
                        [
                            'content',
                            ''
                        ],
                        [
                            'novalidate',
                            ''
                        ],
                        [
                            'nz-form',
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
                        ],
                        [
                            2,
                            'ant-form-horizontal',
                            null
                        ],
                        [
                            2,
                            'ant-form-vertical',
                            null
                        ],
                        [
                            2,
                            'ant-form-inline',
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
                        return 'submit' === n && (u = !1 !== t['ɵnov'](l, 19).onSubmit(e) && u), 'reset' === n && (u = !1 !== t['ɵnov'](l, 19).onReset() && u), u;
                    }, null, null)),
                    t['ɵdid'](18, 16384, null, 0, L.C, [], null, null),
                    t['ɵdid'](19, 540672, null, 0, L.k, [
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
                    t['ɵprd'](2048, null, L.d, null, [L.k]),
                    t['ɵdid'](21, 16384, null, 0, L.r, [[
                        6,
                        L.d
                    ]], null, null),
                    t['ɵdid'](22, 671744, null, 0, I.b, [
                        T.a,
                        t.ElementRef,
                        t.Renderer2
                    ], null, null),
                    (l()(), t['ɵeld'](23, 0, null, null, 40, 'div', [[
                        'class',
                        'card-body'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](24, 0, null, null, 19, 'nz-form-item', [[
                        'class',
                        'row'
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
                        ],
                        [
                            2,
                            'ant-form-item-has-success',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-warning',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-error',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-is-validating',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-feedback',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-with-help',
                            null
                        ]
                    ], null, null, w.e, w.b)),
                    t['ɵdid'](25, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], null, null),
                    t['ɵdid'](26, 180224, null, 0, I.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](27, 0, null, 0, 3, 'label', [[
                        'class',
                        'col-xl-3 col-lg-3 col-form-label'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](28, null, [
                        '',
                        ' '
                    ])),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](31, 0, null, 0, 12, 'div', [[
                        'class',
                        'col-lg-9 col-xl-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](32, 0, null, null, 11, 'nz-form-control', [[
                        'nzHasFeedback',
                        ''
                    ]], [[
                        4,
                        'flex',
                        null
                    ]], null, null, w.d, w.a)),
                    t['ɵdid'](33, 4931584, null, 0, E.a, [
                        t.ElementRef,
                        [
                            2,
                            E.c
                        ],
                        t.Renderer2
                    ], null, null),
                    t['ɵdid'](34, 1818624, null, 1, I.a, [
                        t.ElementRef,
                        [
                            2,
                            I.c
                        ],
                        t.ChangeDetectorRef,
                        t.Renderer2,
                        k.e,
                        [
                            2,
                            I.b
                        ]
                    ], {
                        nzErrorTip: [
                            0,
                            'nzErrorTip'
                        ],
                        nzHasFeedback: [
                            1,
                            'nzHasFeedback'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 1, { defaultValidateControl: 0 }),
                    (l()(), t['ɵeld'](36, 0, null, 0, 6, 'input', [
                        [
                            'class',
                            'form-control'
                        ],
                        [
                            'formControlName',
                            'email'
                        ],
                        [
                            'nz-input',
                            ''
                        ],
                        [
                            'placeholder',
                            'Correo'
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
                        ],
                        [
                            2,
                            'ant-input-disabled',
                            null
                        ],
                        [
                            2,
                            'ant-input-borderless',
                            null
                        ],
                        [
                            2,
                            'ant-input-lg',
                            null
                        ],
                        [
                            2,
                            'ant-input-sm',
                            null
                        ],
                        [
                            1,
                            'disabled',
                            0
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
                        var u = !0;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 37)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 37).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 37)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 37)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](37, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.e]),
                    t['ɵdid'](39, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
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
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, [[
                        1,
                        4
                    ]], L.p, null, [L.i]),
                    t['ɵdid'](41, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    t['ɵdid'](42, 737280, null, 0, Ol.a, [
                        [
                            6,
                            L.p
                        ],
                        t.Renderer2,
                        t.ElementRef
                    ], null, null),
                    (l()(), t['ɵand'](0, [[
                        'errEmail',
                        2
                    ]], 0, 0, null, Yt)),
                    (l()(), t['ɵeld'](44, 0, null, null, 19, 'nz-form-item', [[
                        'class',
                        'row'
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
                        ],
                        [
                            2,
                            'ant-form-item-has-success',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-warning',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-error',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-is-validating',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-has-feedback',
                            null
                        ],
                        [
                            2,
                            'ant-form-item-with-help',
                            null
                        ]
                    ], null, null, w.e, w.b)),
                    t['ɵdid'](45, 4931584, null, 0, E.c, [
                        t.ElementRef,
                        t.Renderer2,
                        y.b,
                        t.NgZone,
                        z.a,
                        S.b
                    ], null, null),
                    t['ɵdid'](46, 180224, null, 0, I.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](47, 0, null, 0, 3, 'label', [[
                        'class',
                        'col-xl-3 col-lg-3 col-form-label'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](48, null, [
                        '',
                        ' '
                    ])),
                    t['ɵpid'](131072, a.AsyncPipe, [t.ChangeDetectorRef]),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](51, 0, null, 0, 12, 'div', [[
                        'class',
                        'col-lg-9 col-xl-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](52, 0, null, null, 11, 'nz-form-control', [[
                        'nzHasFeedback',
                        ''
                    ]], [[
                        4,
                        'flex',
                        null
                    ]], null, null, w.d, w.a)),
                    t['ɵdid'](53, 4931584, null, 0, E.a, [
                        t.ElementRef,
                        [
                            2,
                            E.c
                        ],
                        t.Renderer2
                    ], null, null),
                    t['ɵdid'](54, 1818624, null, 1, I.a, [
                        t.ElementRef,
                        [
                            2,
                            I.c
                        ],
                        t.ChangeDetectorRef,
                        t.Renderer2,
                        k.e,
                        [
                            2,
                            I.b
                        ]
                    ], {
                        nzErrorTip: [
                            0,
                            'nzErrorTip'
                        ],
                        nzHasFeedback: [
                            1,
                            'nzHasFeedback'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 2, { defaultValidateControl: 0 }),
                    (l()(), t['ɵeld'](56, 0, null, 0, 6, 'input', [
                        [
                            'class',
                            'form-control'
                        ],
                        [
                            'formControlName',
                            'email_confirmation'
                        ],
                        [
                            'nz-input',
                            ''
                        ],
                        [
                            'placeholder',
                            'Correo'
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
                        ],
                        [
                            2,
                            'ant-input-disabled',
                            null
                        ],
                        [
                            2,
                            'ant-input-borderless',
                            null
                        ],
                        [
                            2,
                            'ant-input-lg',
                            null
                        ],
                        [
                            2,
                            'ant-input-sm',
                            null
                        ],
                        [
                            1,
                            'disabled',
                            0
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
                        var u = !0;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 57)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 57).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 57)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 57)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](57, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.e]),
                    t['ɵdid'](59, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
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
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, [[
                        2,
                        4
                    ]], L.p, null, [L.i]),
                    t['ɵdid'](61, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    t['ɵdid'](62, 737280, null, 0, Ol.a, [
                        [
                            6,
                            L.p
                        ],
                        t.Renderer2,
                        t.ElementRef
                    ], null, null),
                    (l()(), t['ɵand'](0, [[
                        'errEmail2',
                        2
                    ]], 0, 0, null, lu))
                ], function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.isLoadingComponent), l(n, 19, 0, e.formGroup), l(n, 25, 0), l(n, 33, 0), l(n, 34, 0, t['ɵnov'](n, 43), ''), l(n, 39, 0, 'email'), l(n, 42, 0), l(n, 45, 0), l(n, 53, 0), l(n, 54, 0, t['ɵnov'](n, 63), ''), l(n, 59, 0, 'email_confirmation'), l(n, 62, 0);
                }, function (l, n) {
                    var e = n.component;
                    l(n, 6, 0, t['ɵunv'](n, 6, 0, t['ɵnov'](n, 8).transform(null != t['ɵunv'](n, 6, 0, t['ɵnov'](n, 7).transform(e.user$)).email_verified_at ? 'PROFILE.SUB_TITLES.CHANGE_EMAIL' : 'PROFILE.SUB_TITLES.CONFI_EMAIL'))), l(n, 10, 0, t['ɵunv'](n, 10, 0, t['ɵnov'](n, 12).transform(null != t['ɵunv'](n, 10, 0, t['ɵnov'](n, 11).transform(e.user$)).email_verified_at ? 'PROFILE.SUB_TITLES.CHANGE_EMAIL' : 'PROFILE.SUB_TITLES.CONFI_EMAIL'))), l(n, 14, 0, !e.formGroup.valid), l(n, 15, 0, t['ɵunv'](n, 15, 0, t['ɵnov'](n, 16).transform('FORM.BUTTOMS.SAVE'))), l(n, 17, 0, t['ɵnov'](n, 21).ngClassUntouched, t['ɵnov'](n, 21).ngClassTouched, t['ɵnov'](n, 21).ngClassPristine, t['ɵnov'](n, 21).ngClassDirty, t['ɵnov'](n, 21).ngClassValid, t['ɵnov'](n, 21).ngClassInvalid, t['ɵnov'](n, 21).ngClassPending, 'horizontal' === t['ɵnov'](n, 22).nzLayout, 'vertical' === t['ɵnov'](n, 22).nzLayout, 'inline' === t['ɵnov'](n, 22).nzLayout), l(n, 24, 1, [
                        'top' === t['ɵnov'](n, 25).nzAlign,
                        'middle' === t['ɵnov'](n, 25).nzAlign,
                        'bottom' === t['ɵnov'](n, 25).nzAlign,
                        'start' === t['ɵnov'](n, 25).nzJustify,
                        'end' === t['ɵnov'](n, 25).nzJustify,
                        'center' === t['ɵnov'](n, 25).nzJustify,
                        'space-around' === t['ɵnov'](n, 25).nzJustify,
                        'space-between' === t['ɵnov'](n, 25).nzJustify,
                        'success' === t['ɵnov'](n, 26).status,
                        'warning' === t['ɵnov'](n, 26).status,
                        'error' === t['ɵnov'](n, 26).status,
                        'validating' === t['ɵnov'](n, 26).status,
                        t['ɵnov'](n, 26).hasFeedback && t['ɵnov'](n, 26).status,
                        t['ɵnov'](n, 26).withHelpClass
                    ]), l(n, 28, 0, t['ɵunv'](n, 28, 0, t['ɵnov'](n, 30).transform(null != t['ɵunv'](n, 28, 0, t['ɵnov'](n, 29).transform(e.user$)).email_verified_at ? 'PROFILE.SUB_TITLES.EMAILNEW' : 'FORM.LABELS.EMAIL'))), l(n, 32, 0, t['ɵnov'](n, 33).hostFlexStyle), l(n, 36, 1, [
                        t['ɵnov'](n, 41).ngClassUntouched,
                        t['ɵnov'](n, 41).ngClassTouched,
                        t['ɵnov'](n, 41).ngClassPristine,
                        t['ɵnov'](n, 41).ngClassDirty,
                        t['ɵnov'](n, 41).ngClassValid,
                        t['ɵnov'](n, 41).ngClassInvalid,
                        t['ɵnov'](n, 41).ngClassPending,
                        t['ɵnov'](n, 42).disabled,
                        t['ɵnov'](n, 42).nzBorderless,
                        'large' === t['ɵnov'](n, 42).nzSize,
                        'small' === t['ɵnov'](n, 42).nzSize,
                        t['ɵnov'](n, 42).disabled || null
                    ]), l(n, 44, 1, [
                        'top' === t['ɵnov'](n, 45).nzAlign,
                        'middle' === t['ɵnov'](n, 45).nzAlign,
                        'bottom' === t['ɵnov'](n, 45).nzAlign,
                        'start' === t['ɵnov'](n, 45).nzJustify,
                        'end' === t['ɵnov'](n, 45).nzJustify,
                        'center' === t['ɵnov'](n, 45).nzJustify,
                        'space-around' === t['ɵnov'](n, 45).nzJustify,
                        'space-between' === t['ɵnov'](n, 45).nzJustify,
                        'success' === t['ɵnov'](n, 46).status,
                        'warning' === t['ɵnov'](n, 46).status,
                        'error' === t['ɵnov'](n, 46).status,
                        'validating' === t['ɵnov'](n, 46).status,
                        t['ɵnov'](n, 46).hasFeedback && t['ɵnov'](n, 46).status,
                        t['ɵnov'](n, 46).withHelpClass
                    ]), l(n, 48, 0, t['ɵunv'](n, 48, 0, t['ɵnov'](n, 50).transform(null != t['ɵunv'](n, 48, 0, t['ɵnov'](n, 49).transform(e.user$)).email_verified_at ? 'PROFILE.SUB_TITLES.CONFI_EMAIL_NEW' : 'PROFILE.SUB_TITLES.CONFI_EMAIL'))), l(n, 52, 0, t['ɵnov'](n, 53).hostFlexStyle), l(n, 56, 1, [
                        t['ɵnov'](n, 61).ngClassUntouched,
                        t['ɵnov'](n, 61).ngClassTouched,
                        t['ɵnov'](n, 61).ngClassPristine,
                        t['ɵnov'](n, 61).ngClassDirty,
                        t['ɵnov'](n, 61).ngClassValid,
                        t['ɵnov'](n, 61).ngClassInvalid,
                        t['ɵnov'](n, 61).ngClassPending,
                        t['ɵnov'](n, 62).disabled,
                        t['ɵnov'](n, 62).nzBorderless,
                        'large' === t['ɵnov'](n, 62).nzSize,
                        'small' === t['ɵnov'](n, 62).nzSize,
                        t['ɵnov'](n, 62).disabled || null
                    ]);
                });
            }
            function eu(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, 'app-change-email', [], null, null, null, nu, Xt)),
                    t['ɵprd'](512, null, _.a, Kt, [
                        L.f,
                        F.a,
                        Nl.a
                    ]),
                    t['ɵdid'](2, 4308992, null, 0, Zt, [
                        L.f,
                        v.o,
                        t.ChangeDetectorRef,
                        i.r,
                        _.a,
                        il.a,
                        Vt.a,
                        r.l
                    ], null, null)
                ], function (l, n) {
                    l(n, 2, 0);
                }, null);
            }
            var tu = t['ɵccf']('app-change-email', Zt, eu, {}, {}, []), uu = e('LRne'), ou = e('eIep'), iu = e('JIr8');
            class au {
                constructor(l, n, e, t, u, o, i, a, r) {
                    this.fb = l, this.detector = n, this.notificationService = e, this.billingService = t, this.router = u, this.route = o, this.traslateService = i, this.changeDetectorRef = a, this.datePipe = r, this.view = !1, this.Regimen = [], this.USECFDI = [], this.documents = [], this.errorMessage = '', this.titulo = '', this.isLoadingComponent = !1, this.tabs = { BASIC_TAB: 0 }, this.EMPTY_SELLER = {
                        salesId: '',
                        rfc: '',
                        cp: '',
                        name: '',
                        cfdi: '',
                        regime: '',
                        emaicc: '',
                        package: '',
                        total: 0,
                        invoice: 0
                    }, this.activeTabId = this.tabs.BASIC_TAB, this.subscriptions = [];
                }
                ngOnInit() {
                    this.isLoading$ = this.billingService.isLoading$, this.loadBilling();

                }
                loadBilling() {
                    return Object(Y.a)(this, void 0, void 0, function* () {
                        this.Regimen = yield this.billingService.getRegime().toPromise(), this.USECFDI = yield this.billingService.getUseCFDI().toPromise();
                        const l = this.route.paramMap.pipe(Object(ou.a)(l => (this.id = l.get('id'), this.id ? this.billingService.getBill(this.id) : Object(uu.a)(this.EMPTY_SELLER))), Object(iu.a)(l => (this.errorMessage = l, Object(uu.a)(void 0)))).subscribe(l => {
                            l || this.router.navigate(['/sales'], { relativeTo: this.route }), this.billing = l, this.billing.salesId = this.id, this.previous = Object.assign({}, l), this.loadForm();
                        });
                        const currentHostName = window.location.hostname
                        const appv2HostName = currentHostName == 'centirev.centinela.app' ? 'https://appv2-centirev.centinela.app' : 'https://appv2.centinela.app'
                        window.location.href = `${appv2HostName}/settings/invoice/${this.id}`
                        this.subscriptions.push(l);
                    });
                }
                loadForm() {
                    this.billing ? (this.titulo = 'La Factura se ha actualizado con éxito', this.formGroup = this.fb.group({
                        name: [
                            this.billing.name,
                            L.x.compose([
                                L.x.required,
                                L.x.minLength(3),
                                L.x.maxLength(130)
                            ])
                        ],
                        cfdi: [
                            this.billing.cfdi,
                            L.x.compose([L.x.required])
                        ],
                        regime: [
                            this.billing.regime,
                            L.x.compose([L.x.required])
                        ],
                        rfc: [
                            this.billing.rfc,
                            L.x.compose([
                                L.x.required,
                                ,
                                L.x.minLength(11),
                                L.x.maxLength(13)
                            ])
                        ],
                        emaicc: [
                            this.billing.emaicc,
                            L.x.compose([
                                L.x.email,
                                L.x.maxLength(130)
                            ])
                        ],
                        cp: [
                            this.billing.cp,
                            L.x.compose([
                                L.x.required,
                                L.x.minLength(5),
                                L.x.maxLength(5)
                            ])
                        ],
                        package: [this.billing.package],
                        total: [this.billing.total]
                    }), this.changeDetectorRef.detectChanges()) : this.titulo = 'La Factura se ha creado con éxito';
                }
                reset() {
                    this.previous && (this.billing = Object.assign({}, this.previous), this.loadForm());
                }
                save() {
                    this.formGroup.markAllAsTouched(), this.formGroup.valid && (this.billing = Object.assign(this.billing, this.formGroup.value), this.create());
                }
                create() {
                    return Object(Y.a)(this, void 0, void 0, function* () {
                        try {
                            this.isLoadingComponent = !0, yield this.billingService.createBill(this.billing).toPromise(), this.notificationService.success('\xA1La Factura se ha creado con éxito!'), this.router.navigate(['/sales']);
                        } catch (l) {
                            this.isLoadingComponent = !1, this.detector.markForCheck(), this.notificationService.error([l.error]);
                        }
                    });
                }
                ngOnDestroy() {
                    this.subscriptions.forEach(l => l.unsubscribe());
                }
                isControlValid(l) {
                    const n = this.formGroup.controls[l];
                    return n.valid && (n.dirty || n.touched);
                }
                isControlInvalid(l) {
                    const n = this.formGroup.controls[l];
                    return n.invalid && (n.dirty || n.touched);
                }
                controlHasError(l, n) {
                    const e = this.formGroup.controls[n];
                    return e.hasError(l) && (e.dirty || e.touched);
                }
                isControlTouched(l) {
                    var n;
                    const e = null === (n = this.formGroup) || void 0 === n ? void 0 : n.controls[l];
                    return (null == e ? void 0 : e.dirty) || (null == e ? void 0 : e.touched);
                }
                validcompleteForm() {
                    return this.formGroup.invalid;
                }
            }
            var ru = e('wOTk'), su = t['ɵcrt']({
                encapsulation: 0,
                styles: [['']],
                data: {}
            });
            function du(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'div', [[
                        'class',
                        'progress progress-modal'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 0, 'div', [
                        [
                            'aria-valuemax',
                            '100'
                        ],
                        [
                            'aria-valuemin',
                            '0'
                        ],
                        [
                            'aria-valuenow',
                            '100'
                        ],
                        [
                            'class',
                            'progress-bar progress-bar-striped progress-bar-animated bg-primary'
                        ],
                        [
                            'role',
                            'progressbar'
                        ],
                        [
                            'style',
                            'width: 100%'
                        ]
                    ], null, null, null, null, null))
                ], null, null);
            }
            function cu(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'span', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        '\'',
                        '\''
                    ]))
                ], null, function (l, n) {
                    l(n, 1, 0, n.component.billing.invoice);
                });
            }
            function mu(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 4, null, null, null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, cu)),
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
                    l(n, 4, 0, e.billing && e.billing.invoice);
                }, function (l, n) {
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform('SELLER.BILL.NEW')));
                });
            }
            function vu(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 5, 'div', [[
                        'class',
                        'feedback'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](3, 0, null, null, 2, 'b', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](4, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform('GENERAL.PLEASE_ENTER'))), l(n, 4, 0, t['ɵunv'](n, 4, 0, t['ɵnov'](n, 5).transform('SELLER.BILL.NAME_TOUCHED')));
                });
            }
            function pu(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, 'div', [[
                        'class',
                        'valid-feedback'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        '',
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform('SELLER.BILL.NAME_TOUCHED')), t['ɵunv'](n, 1, 1, t['ɵnov'](n, 3).transform('GENERAL.CORRECTFIELD')));
                });
            }
            function fu(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, 'div', [[
                        'class',
                        'invalid-feedback'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        '',
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform('SELLER.BILL.NAME_TOUCHED')), t['ɵunv'](n, 1, 1, t['ɵnov'](n, 3).transform('GENERAL.REQUIRED')));
                });
            }
            function gu(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 5, 'div', [[
                        'class',
                        'feedback'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](3, 0, null, null, 2, 'b', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](4, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform('GENERAL.PLEASE_ENTER'))), l(n, 4, 0, t['ɵunv'](n, 4, 0, t['ɵnov'](n, 5).transform('SELLER.CREATE.RFC_TOUCHED')));
                });
            }
            function hu(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, 'div', [[
                        'class',
                        'valid-feedback'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        '',
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform('SELLER.CREATE.RFC_TOUCHED')), t['ɵunv'](n, 1, 1, t['ɵnov'](n, 3).transform('GENERAL.CORRECTFIELD')));
                });
            }
            function bu(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, 'div', [[
                        'class',
                        'invalid-feedback'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        '',
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform('SELLER.CREATE.RFC_TOUCHED')), t['ɵunv'](n, 1, 1, t['ɵnov'](n, 3).transform('GENERAL.REQUIRED')));
                });
            }
            function Cu(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, 'option', [], null, null, null, null, null)),
                    t['ɵdid'](1, 147456, null, 0, L.u, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            L.w
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    t['ɵdid'](2, 147456, null, 0, L.B, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            8,
                            null
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    (l()(), t['ɵted'](3, null, [
                        '',
                        '-',
                        ''
                    ]))
                ], function (l, n) {
                    l(n, 1, 0, n.context.$implicit.code), l(n, 2, 0, n.context.$implicit.code);
                }, function (l, n) {
                    l(n, 3, 0, n.context.$implicit.code, n.context.$implicit.name);
                });
            }
            function Ru(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, 'option', [], null, null, null, null, null)),
                    t['ɵdid'](1, 147456, null, 0, L.u, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            L.w
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    t['ɵdid'](2, 147456, null, 0, L.B, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            8,
                            null
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    (l()(), t['ɵted'](3, null, [
                        '',
                        '-',
                        ''
                    ]))
                ], function (l, n) {
                    l(n, 1, 0, n.context.$implicit.code), l(n, 2, 0, n.context.$implicit.code);
                }, function (l, n) {
                    l(n, 3, 0, n.context.$implicit.code, n.context.$implicit.name);
                });
            }
            function wu(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 5, 'div', [[
                        'class',
                        'feedback'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](3, 0, null, null, 2, 'b', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](4, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform('GENERAL.PLEASE_ENTER'))), l(n, 4, 0, t['ɵunv'](n, 4, 0, t['ɵnov'](n, 5).transform('SELLER.BILL.CP')));
                });
            }
            function Eu(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, 'div', [[
                        'class',
                        'valid-feedback'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        '',
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform('SELLER.BILL.CP')), t['ɵunv'](n, 1, 1, t['ɵnov'](n, 3).transform('GENERAL.CORRECTFIELD')));
                });
            }
            function yu(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, 'div', [[
                        'class',
                        'invalid-feedback'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        '',
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform('SELLER.BILL.CP')), t['ɵunv'](n, 1, 1, t['ɵnov'](n, 3).transform('GENERAL.REQUIRED')));
                });
            }
            function zu(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 5, 'div', [[
                        'class',
                        'feedback'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](3, 0, null, null, 2, 'b', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](4, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform('GENERAL.PLEASE_ENTER'))), l(n, 4, 0, t['ɵunv'](n, 4, 0, t['ɵnov'](n, 5).transform('SELLER.BILL.EMAIL_TOUCHED')));
                });
            }
            function Su(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, 'div', [[
                        'class',
                        'valid-feedback'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        '',
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform('SELLER.BILL.EMAIL_TOUCHED')), t['ɵunv'](n, 1, 1, t['ɵnov'](n, 3).transform('GENERAL.CORRECTFIELD')));
                });
            }
            function Iu(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, 'div', [[
                        'class',
                        'invalid-feedback'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        '',
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform('SELLER.BILL.EMAIL_TOUCHED')), t['ɵunv'](n, 1, 1, t['ɵnov'](n, 3).transform('GENERAL.REQUIRED')));
                });
            }
            function ku(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, 'button', [
                        [
                            'class',
                            'btn btn-primary font-weight-bold mr-2'
                        ],
                        [
                            'type',
                            'submit'
                        ]
                    ], [[
                        8,
                        'disabled',
                        0
                    ]], null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 0, 0, n.component.validcompleteForm()), l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform('GENERAL.BUTTON_SAVE')));
                });
            }
            function Lu(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 165, 'div', [[
                        'class',
                        'mt-5'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 164, 'form', [
                        [
                            'class',
                            'form form-label-right'
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
                            'ngSubmit'
                        ],
                        [
                            null,
                            'submit'
                        ],
                        [
                            null,
                            'reset'
                        ]
                    ], function (l, n, e) {
                        var u = !0, o = l.component;
                        return 'submit' === n && (u = !1 !== t['ɵnov'](l, 3).onSubmit(e) && u), 'reset' === n && (u = !1 !== t['ɵnov'](l, 3).onReset() && u), 'ngSubmit' === n && (u = !1 !== o.save() && u), u;
                    }, null, null)),
                    t['ɵdid'](2, 16384, null, 0, L.C, [], null, null),
                    t['ɵdid'](3, 540672, null, 0, L.k, [
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
                    }, { ngSubmit: 'ngSubmit' }),
                    t['ɵprd'](2048, null, L.d, null, [L.k]),
                    t['ɵdid'](5, 16384, null, 0, L.r, [[
                        6,
                        L.d
                    ]], null, null),
                    (l()(), t['ɵeld'](6, 0, null, null, 26, 'div', [[
                        'class',
                        'form-group row'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](7, 0, null, null, 12, 'div', [[
                        'class',
                        'col-lg-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](8, 0, null, null, 2, 'label', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](9, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](11, 0, null, null, 8, 'input', [
                        [
                            'autocomplete',
                            'off'
                        ],
                        [
                            'class',
                            'form-control form-control-lg form-control'
                        ],
                        [
                            'disabled',
                            ''
                        ],
                        [
                            'formControlName',
                            'package'
                        ],
                        [
                            'maxlength',
                            '130'
                        ],
                        [
                            'name',
                            'package'
                        ],
                        [
                            'type',
                            'text'
                        ]
                    ], [
                        [
                            8,
                            'placeholder',
                            0
                        ],
                        [
                            2,
                            'is-invalid',
                            null
                        ],
                        [
                            2,
                            'is-valid',
                            null
                        ],
                        [
                            1,
                            'maxlength',
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
                        var u = !0;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 12)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 12).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 12)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 12)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](12, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵdid'](13, 540672, null, 0, L.m, [], {
                        maxlength: [
                            0,
                            'maxlength'
                        ]
                    }, null),
                    t['ɵprd'](1024, null, L.n, function (l) {
                        return [l];
                    }, [L.m]),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.e]),
                    t['ɵdid'](16, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
                        ],
                        [
                            6,
                            L.n
                        ],
                        [
                            8,
                            null
                        ],
                        [
                            6,
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ],
                        isDisabled: [
                            1,
                            'isDisabled'
                        ]
                    }, null),
                    t['ɵprd'](2048, null, L.p, null, [L.i]),
                    t['ɵdid'](18, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](20, 0, null, null, 12, 'div', [[
                        'class',
                        'col-lg-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](21, 0, null, null, 2, 'label', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](22, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](24, 0, null, null, 8, 'input', [
                        [
                            'autocomplete',
                            'off'
                        ],
                        [
                            'class',
                            'form-control form-control-lg form-control'
                        ],
                        [
                            'disabled',
                            ''
                        ],
                        [
                            'formControlName',
                            'total'
                        ],
                        [
                            'maxlength',
                            '130'
                        ],
                        [
                            'name',
                            'total'
                        ],
                        [
                            'type',
                            'text'
                        ]
                    ], [
                        [
                            8,
                            'placeholder',
                            0
                        ],
                        [
                            2,
                            'is-invalid',
                            null
                        ],
                        [
                            2,
                            'is-valid',
                            null
                        ],
                        [
                            1,
                            'maxlength',
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
                        var u = !0;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 25)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 25).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 25)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 25)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](25, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵdid'](26, 540672, null, 0, L.m, [], {
                        maxlength: [
                            0,
                            'maxlength'
                        ]
                    }, null),
                    t['ɵprd'](1024, null, L.n, function (l) {
                        return [l];
                    }, [L.m]),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.e]),
                    t['ɵdid'](29, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
                        ],
                        [
                            6,
                            L.n
                        ],
                        [
                            8,
                            null
                        ],
                        [
                            6,
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ],
                        isDisabled: [
                            1,
                            'isDisabled'
                        ]
                    }, null),
                    t['ɵprd'](2048, null, L.p, null, [L.i]),
                    t['ɵdid'](31, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](33, 0, null, null, 38, 'div', [[
                        'class',
                        'form-group row'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](34, 0, null, null, 18, 'div', [[
                        'class',
                        'col-lg-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](35, 0, null, null, 2, 'label', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](36, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](38, 0, null, null, 8, 'input', [
                        [
                            'autocomplete',
                            'off'
                        ],
                        [
                            'class',
                            'form-control form-control-lg form-control'
                        ],
                        [
                            'formControlName',
                            'name'
                        ],
                        [
                            'maxlength',
                            '130'
                        ],
                        [
                            'name',
                            'name'
                        ],
                        [
                            'type',
                            'text'
                        ]
                    ], [
                        [
                            8,
                            'placeholder',
                            0
                        ],
                        [
                            2,
                            'is-invalid',
                            null
                        ],
                        [
                            2,
                            'is-valid',
                            null
                        ],
                        [
                            1,
                            'maxlength',
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
                        var u = !0;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 39)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 39).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 39)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 39)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](39, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵdid'](40, 540672, null, 0, L.m, [], {
                        maxlength: [
                            0,
                            'maxlength'
                        ]
                    }, null),
                    t['ɵprd'](1024, null, L.n, function (l) {
                        return [l];
                    }, [L.m]),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.e]),
                    t['ɵdid'](43, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
                        ],
                        [
                            6,
                            L.n
                        ],
                        [
                            8,
                            null
                        ],
                        [
                            6,
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, null, L.p, null, [L.i]),
                    t['ɵdid'](45, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, vu)),
                    t['ɵdid'](48, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, pu)),
                    t['ɵdid'](50, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, fu)),
                    t['ɵdid'](52, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](53, 0, null, null, 18, 'div', [[
                        'class',
                        'col-lg-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](54, 0, null, null, 2, 'label', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](55, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](57, 0, null, null, 8, 'input', [
                        [
                            'autocomplete',
                            'off'
                        ],
                        [
                            'class',
                            'form-control form-control-lg form-control'
                        ],
                        [
                            'formControlName',
                            'rfc'
                        ],
                        [
                            'maxlength',
                            '130'
                        ],
                        [
                            'name',
                            'rfc'
                        ],
                        [
                            'type',
                            'text'
                        ]
                    ], [
                        [
                            8,
                            'placeholder',
                            0
                        ],
                        [
                            2,
                            'is-invalid',
                            null
                        ],
                        [
                            2,
                            'is-valid',
                            null
                        ],
                        [
                            1,
                            'maxlength',
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
                        var u = !0;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 58)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 58).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 58)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 58)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](58, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵdid'](59, 540672, null, 0, L.m, [], {
                        maxlength: [
                            0,
                            'maxlength'
                        ]
                    }, null),
                    t['ɵprd'](1024, null, L.n, function (l) {
                        return [l];
                    }, [L.m]),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.e]),
                    t['ɵdid'](62, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
                        ],
                        [
                            6,
                            L.n
                        ],
                        [
                            8,
                            null
                        ],
                        [
                            6,
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, null, L.p, null, [L.i]),
                    t['ɵdid'](64, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, gu)),
                    t['ɵdid'](67, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, hu)),
                    t['ɵdid'](69, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, bu)),
                    t['ɵdid'](71, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](72, 0, null, null, 46, 'div', [[
                        'class',
                        'form-group row'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](73, 0, null, null, 22, 'div', [[
                        'class',
                        'col-lg-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](74, 0, null, null, 2, 'label', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](75, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](77, 0, null, null, 12, 'select', [
                        [
                            'class',
                            'form-control form-control-lg form-control'
                        ],
                        [
                            'formControlName',
                            'regime'
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
                            'change'
                        ],
                        [
                            null,
                            'blur'
                        ]
                    ], function (l, n, e) {
                        var u = !0;
                        return 'change' === n && (u = !1 !== t['ɵnov'](l, 78).onChange(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 78).onTouched() && u), u;
                    }, null, null)),
                    t['ɵdid'](78, 16384, null, 0, L.w, [
                        t.Renderer2,
                        t.ElementRef
                    ], null, null),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.w]),
                    t['ɵdid'](80, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
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
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, null, L.p, null, [L.i]),
                    t['ɵdid'](82, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    (l()(), t['ɵeld'](83, 0, null, null, 4, 'option', [[
                        'value',
                        ''
                    ]], null, null, null, null, null)),
                    t['ɵdid'](84, 147456, null, 0, L.u, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            L.w
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    t['ɵdid'](85, 147456, null, 0, L.B, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            8,
                            null
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    (l()(), t['ɵted'](86, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Cu)),
                    t['ɵdid'](89, 278528, null, 0, a.NgForOf, [
                        t.ViewContainerRef,
                        t.TemplateRef,
                        t.IterableDiffers
                    ], {
                        ngForOf: [
                            0,
                            'ngForOf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](90, 0, null, null, 5, 'div', [[
                        'class',
                        'feedback'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](91, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](93, 0, null, null, 2, 'b', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](94, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](96, 0, null, null, 22, 'div', [[
                        'class',
                        'col-lg-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](97, 0, null, null, 2, 'label', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](98, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](100, 0, null, null, 12, 'select', [
                        [
                            'class',
                            'form-control form-control-lg form-control'
                        ],
                        [
                            'formControlName',
                            'cfdi'
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
                            'change'
                        ],
                        [
                            null,
                            'blur'
                        ]
                    ], function (l, n, e) {
                        var u = !0;
                        return 'change' === n && (u = !1 !== t['ɵnov'](l, 101).onChange(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 101).onTouched() && u), u;
                    }, null, null)),
                    t['ɵdid'](101, 16384, null, 0, L.w, [
                        t.Renderer2,
                        t.ElementRef
                    ], null, null),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.w]),
                    t['ɵdid'](103, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
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
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, null, L.p, null, [L.i]),
                    t['ɵdid'](105, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    (l()(), t['ɵeld'](106, 0, null, null, 4, 'option', [[
                        'value',
                        ''
                    ]], null, null, null, null, null)),
                    t['ɵdid'](107, 147456, null, 0, L.u, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            L.w
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    t['ɵdid'](108, 147456, null, 0, L.B, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            8,
                            null
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    (l()(), t['ɵted'](109, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Ru)),
                    t['ɵdid'](112, 278528, null, 0, a.NgForOf, [
                        t.ViewContainerRef,
                        t.TemplateRef,
                        t.IterableDiffers
                    ], {
                        ngForOf: [
                            0,
                            'ngForOf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](113, 0, null, null, 5, 'div', [[
                        'class',
                        'feedback'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](114, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](116, 0, null, null, 2, 'b', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](117, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](119, 0, null, null, 38, 'div', [[
                        'class',
                        'form-group row'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](120, 0, null, null, 18, 'div', [[
                        'class',
                        'col-lg-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](121, 0, null, null, 2, 'label', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](122, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](124, 0, null, null, 8, 'input', [
                        [
                            'autocomplete',
                            'off'
                        ],
                        [
                            'class',
                            'form-control form-control-lg form-control'
                        ],
                        [
                            'formControlName',
                            'cp'
                        ],
                        [
                            'maxlength',
                            '5'
                        ],
                        [
                            'name',
                            'cp'
                        ],
                        [
                            'type',
                            'text'
                        ]
                    ], [
                        [
                            8,
                            'placeholder',
                            0
                        ],
                        [
                            2,
                            'is-invalid',
                            null
                        ],
                        [
                            2,
                            'is-valid',
                            null
                        ],
                        [
                            1,
                            'maxlength',
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
                        var u = !0;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 125)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 125).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 125)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 125)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](125, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵdid'](126, 540672, null, 0, L.m, [], {
                        maxlength: [
                            0,
                            'maxlength'
                        ]
                    }, null),
                    t['ɵprd'](1024, null, L.n, function (l) {
                        return [l];
                    }, [L.m]),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.e]),
                    t['ɵdid'](129, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
                        ],
                        [
                            6,
                            L.n
                        ],
                        [
                            8,
                            null
                        ],
                        [
                            6,
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, null, L.p, null, [L.i]),
                    t['ɵdid'](131, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, wu)),
                    t['ɵdid'](134, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Eu)),
                    t['ɵdid'](136, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, yu)),
                    t['ɵdid'](138, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](139, 0, null, null, 18, 'div', [[
                        'class',
                        'col-lg-6'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](140, 0, null, null, 2, 'label', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](141, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](143, 0, null, null, 8, 'input', [
                        [
                            'autocomplete',
                            'off'
                        ],
                        [
                            'class',
                            'form-control form-control-lg form-control'
                        ],
                        [
                            'formControlName',
                            'emaicc'
                        ],
                        [
                            'maxlength',
                            '130'
                        ],
                        [
                            'name',
                            'emaicc'
                        ],
                        [
                            'type',
                            'text'
                        ]
                    ], [
                        [
                            8,
                            'placeholder',
                            0
                        ],
                        [
                            2,
                            'is-invalid',
                            null
                        ],
                        [
                            2,
                            'is-valid',
                            null
                        ],
                        [
                            1,
                            'maxlength',
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
                        var u = !0;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 144)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 144).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 144)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 144)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](144, 16384, null, 0, L.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            L.b
                        ]
                    ], null, null),
                    t['ɵdid'](145, 540672, null, 0, L.m, [], {
                        maxlength: [
                            0,
                            'maxlength'
                        ]
                    }, null),
                    t['ɵprd'](1024, null, L.n, function (l) {
                        return [l];
                    }, [L.m]),
                    t['ɵprd'](1024, null, L.o, function (l) {
                        return [l];
                    }, [L.e]),
                    t['ɵdid'](148, 671744, null, 0, L.i, [
                        [
                            3,
                            L.d
                        ],
                        [
                            6,
                            L.n
                        ],
                        [
                            8,
                            null
                        ],
                        [
                            6,
                            L.o
                        ],
                        [
                            2,
                            L.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, null, L.p, null, [L.i]),
                    t['ɵdid'](150, 16384, null, 0, L.q, [[
                        4,
                        L.p
                    ]], null, null),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, zu)),
                    t['ɵdid'](153, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Su)),
                    t['ɵdid'](155, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Iu)),
                    t['ɵdid'](157, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](158, 0, null, null, 7, 'div', [[
                        'style',
                        'clear:both;'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](159, 0, null, null, 6, 'div', [[
                        'class',
                        'float-right'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](160, 0, null, null, 3, 'a', [
                        [
                            'class',
                            'btn btn-default font-weight-bold mr-2'
                        ],
                        [
                            'routerLink',
                            '/settings/users-sales'
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
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 161).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](161, 671744, null, 0, i.u, [
                        i.r,
                        i.a,
                        a.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    (l()(), t['ɵted'](162, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, r.k, [
                        r.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, ku)),
                    t['ɵdid'](165, 16384, null, 0, a.NgIf, [
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
                    l(n, 3, 0, e.formGroup), l(n, 13, 0, '130'), l(n, 16, 0, 'package', ''), l(n, 26, 0, '130'), l(n, 29, 0, 'total', ''), l(n, 40, 0, '130'), l(n, 43, 0, 'name'), l(n, 48, 0, !e.isControlTouched('name')), l(n, 50, 0, e.isControlValid('name')), l(n, 52, 0, e.controlHasError('required', 'name')), l(n, 59, 0, '130'), l(n, 62, 0, 'rfc'), l(n, 67, 0, !e.isControlTouched('rfc')), l(n, 69, 0, e.isControlValid('rfc')), l(n, 71, 0, e.controlHasError('required', 'rfc')), l(n, 80, 0, 'regime'), l(n, 84, 0, ''), l(n, 85, 0, ''), l(n, 89, 0, e.Regimen), l(n, 103, 0, 'cfdi'), l(n, 107, 0, ''), l(n, 108, 0, ''), l(n, 112, 0, e.USECFDI), l(n, 126, 0, '5'), l(n, 129, 0, 'cp'), l(n, 134, 0, !e.isControlTouched('cp')), l(n, 136, 0, e.isControlValid('cp')), l(n, 138, 0, e.controlHasError('required', 'cp')), l(n, 145, 0, '130'), l(n, 148, 0, 'emaicc'), l(n, 153, 0, !e.isControlTouched('emaicc')), l(n, 155, 0, e.isControlValid('emaicc')), l(n, 157, 0, e.controlHasError('required', 'emaicc')), l(n, 161, 0, '/settings/users-sales'), l(n, 165, 0, 0 == e.view);
                }, function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, t['ɵnov'](n, 5).ngClassUntouched, t['ɵnov'](n, 5).ngClassTouched, t['ɵnov'](n, 5).ngClassPristine, t['ɵnov'](n, 5).ngClassDirty, t['ɵnov'](n, 5).ngClassValid, t['ɵnov'](n, 5).ngClassInvalid, t['ɵnov'](n, 5).ngClassPending), l(n, 9, 0, t['ɵunv'](n, 9, 0, t['ɵnov'](n, 10).transform('SELLER.BILL.PACKAGES'))), l(n, 11, 1, [
                        t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 11, 0, t['ɵnov'](n, 19).transform('SELLER.BILL.NAME')), ''),
                        e.isControlInvalid('package'),
                        e.isControlValid('package'),
                        t['ɵnov'](n, 13).maxlength ? t['ɵnov'](n, 13).maxlength : null,
                        t['ɵnov'](n, 18).ngClassUntouched,
                        t['ɵnov'](n, 18).ngClassTouched,
                        t['ɵnov'](n, 18).ngClassPristine,
                        t['ɵnov'](n, 18).ngClassDirty,
                        t['ɵnov'](n, 18).ngClassValid,
                        t['ɵnov'](n, 18).ngClassInvalid,
                        t['ɵnov'](n, 18).ngClassPending
                    ]), l(n, 22, 0, t['ɵunv'](n, 22, 0, t['ɵnov'](n, 23).transform('SELLER.BILL.TOTAL'))), l(n, 24, 1, [
                        t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 24, 0, t['ɵnov'](n, 32).transform('SELLER.CREATE.RFC')), ''),
                        e.isControlInvalid('total'),
                        e.isControlValid('total'),
                        t['ɵnov'](n, 26).maxlength ? t['ɵnov'](n, 26).maxlength : null,
                        t['ɵnov'](n, 31).ngClassUntouched,
                        t['ɵnov'](n, 31).ngClassTouched,
                        t['ɵnov'](n, 31).ngClassPristine,
                        t['ɵnov'](n, 31).ngClassDirty,
                        t['ɵnov'](n, 31).ngClassValid,
                        t['ɵnov'](n, 31).ngClassInvalid,
                        t['ɵnov'](n, 31).ngClassPending
                    ]), l(n, 36, 0, t['ɵunv'](n, 36, 0, t['ɵnov'](n, 37).transform('SELLER.BILL.NAME'))), l(n, 38, 1, [
                        t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 38, 0, t['ɵnov'](n, 46).transform('SELLER.BILL.NAME')), ''),
                        e.isControlInvalid('name'),
                        e.isControlValid('name'),
                        t['ɵnov'](n, 40).maxlength ? t['ɵnov'](n, 40).maxlength : null,
                        t['ɵnov'](n, 45).ngClassUntouched,
                        t['ɵnov'](n, 45).ngClassTouched,
                        t['ɵnov'](n, 45).ngClassPristine,
                        t['ɵnov'](n, 45).ngClassDirty,
                        t['ɵnov'](n, 45).ngClassValid,
                        t['ɵnov'](n, 45).ngClassInvalid,
                        t['ɵnov'](n, 45).ngClassPending
                    ]), l(n, 55, 0, t['ɵunv'](n, 55, 0, t['ɵnov'](n, 56).transform('SELLER.CREATE.RFC'))), l(n, 57, 1, [
                        t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 57, 0, t['ɵnov'](n, 65).transform('SELLER.CREATE.RFC')), ''),
                        e.isControlInvalid('rfc'),
                        e.isControlValid('rfc'),
                        t['ɵnov'](n, 59).maxlength ? t['ɵnov'](n, 59).maxlength : null,
                        t['ɵnov'](n, 64).ngClassUntouched,
                        t['ɵnov'](n, 64).ngClassTouched,
                        t['ɵnov'](n, 64).ngClassPristine,
                        t['ɵnov'](n, 64).ngClassDirty,
                        t['ɵnov'](n, 64).ngClassValid,
                        t['ɵnov'](n, 64).ngClassInvalid,
                        t['ɵnov'](n, 64).ngClassPending
                    ]), l(n, 75, 0, t['ɵunv'](n, 75, 0, t['ɵnov'](n, 76).transform('SELLER.BILL.REGIMEN'))), l(n, 77, 0, t['ɵnov'](n, 82).ngClassUntouched, t['ɵnov'](n, 82).ngClassTouched, t['ɵnov'](n, 82).ngClassPristine, t['ɵnov'](n, 82).ngClassDirty, t['ɵnov'](n, 82).ngClassValid, t['ɵnov'](n, 82).ngClassInvalid, t['ɵnov'](n, 82).ngClassPending), l(n, 86, 0, t['ɵunv'](n, 86, 0, t['ɵnov'](n, 87).transform('DOCUMENT.CREATE.FORM.SELECTOPTION'))), l(n, 91, 0, t['ɵunv'](n, 91, 0, t['ɵnov'](n, 92).transform('GENERAL.PLEASE_SELECT'))), l(n, 94, 0, t['ɵunv'](n, 94, 0, t['ɵnov'](n, 95).transform('SELLER.BILL.REGIMEN_TOUCHED'))), l(n, 98, 0, t['ɵunv'](n, 98, 0, t['ɵnov'](n, 99).transform('SELLER.BILL.CFDI'))), l(n, 100, 0, t['ɵnov'](n, 105).ngClassUntouched, t['ɵnov'](n, 105).ngClassTouched, t['ɵnov'](n, 105).ngClassPristine, t['ɵnov'](n, 105).ngClassDirty, t['ɵnov'](n, 105).ngClassValid, t['ɵnov'](n, 105).ngClassInvalid, t['ɵnov'](n, 105).ngClassPending), l(n, 109, 0, t['ɵunv'](n, 109, 0, t['ɵnov'](n, 110).transform('DOCUMENT.CREATE.FORM.SELECTOPTION'))), l(n, 114, 0, t['ɵunv'](n, 114, 0, t['ɵnov'](n, 115).transform('GENERAL.PLEASE_SELECT'))), l(n, 117, 0, t['ɵunv'](n, 117, 0, t['ɵnov'](n, 118).transform('SELLER.BILL.CFDI_TOUCHED'))), l(n, 122, 0, t['ɵunv'](n, 122, 0, t['ɵnov'](n, 123).transform('SELLER.BILL.CP'))), l(n, 124, 1, [
                        t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 124, 0, t['ɵnov'](n, 132).transform('SELLER.BILL.CP')), ''),
                        e.isControlInvalid('cp'),
                        e.isControlValid('cp'),
                        t['ɵnov'](n, 126).maxlength ? t['ɵnov'](n, 126).maxlength : null,
                        t['ɵnov'](n, 131).ngClassUntouched,
                        t['ɵnov'](n, 131).ngClassTouched,
                        t['ɵnov'](n, 131).ngClassPristine,
                        t['ɵnov'](n, 131).ngClassDirty,
                        t['ɵnov'](n, 131).ngClassValid,
                        t['ɵnov'](n, 131).ngClassInvalid,
                        t['ɵnov'](n, 131).ngClassPending
                    ]), l(n, 141, 0, t['ɵunv'](n, 141, 0, t['ɵnov'](n, 142).transform('SELLER.BILL.EMAIL'))), l(n, 143, 1, [
                        t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 143, 0, t['ɵnov'](n, 151).transform('SELLER.BILL.EMAIL')), ''),
                        e.isControlInvalid('emaicc'),
                        e.isControlValid('emaicc'),
                        t['ɵnov'](n, 145).maxlength ? t['ɵnov'](n, 145).maxlength : null,
                        t['ɵnov'](n, 150).ngClassUntouched,
                        t['ɵnov'](n, 150).ngClassTouched,
                        t['ɵnov'](n, 150).ngClassPristine,
                        t['ɵnov'](n, 150).ngClassDirty,
                        t['ɵnov'](n, 150).ngClassValid,
                        t['ɵnov'](n, 150).ngClassInvalid,
                        t['ɵnov'](n, 150).ngClassPending
                    ]), l(n, 160, 0, t['ɵnov'](n, 161).target, t['ɵnov'](n, 161).href), l(n, 162, 0, t['ɵunv'](n, 162, 0, t['ɵnov'](n, 163).transform('GENERAL.CANCEL_SAVE')));
                });
            }
            function Du(l) {
                return t['ɵvid'](2, [
                    (l()(), t['ɵeld'](0, 0, null, null, 13, 'ce-layout-dashboard', [], null, null, null, D.b, D.a)),
                    t['ɵdid'](1, 638976, null, 0, O.a, [t.ChangeDetectorRef], {
                        isLoading: [
                            0,
                            'isLoading'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](2, 0, null, 0, 11, 'div', [
                        [
                            'class',
                            'card card-custom gutter-b'
                        ],
                        [
                            'content',
                            ''
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, du)),
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
                    (l()(), t['ɵeld'](6, 0, null, null, 4, 'div', [[
                        'class',
                        'card-header'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](7, 0, null, null, 3, 'div', [[
                        'class',
                        'card-title'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](8, 0, null, null, 2, 'h3', [[
                        'class',
                        'card-label'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, mu)),
                    t['ɵdid'](10, 16384, null, 0, a.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](11, 0, null, null, 2, 'div', [[
                        'class',
                        'card-body'
                    ]], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Lu)),
                    t['ɵdid'](13, 16384, null, 0, a.NgIf, [
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
                    l(n, 1, 0, e.isLoadingComponent), l(n, 4, 0, t['ɵunv'](n, 4, 0, t['ɵnov'](n, 5).transform(e.isLoading$))), l(n, 10, 0, e.billing), l(n, 13, 0, e.billing && e.formGroup);
                }, null);
            }
            function Ou(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 4, 'app-invoice', [], null, null, null, Du, su)),
                    t['ɵprd'](4608, null, Dl.n, _e.a, []),
                    t['ɵprd'](4608, null, Dl.o, _e.b, []),
                    t['ɵprd'](512, null, a.DatePipe, a.DatePipe, [t.LOCALE_ID]),
                    t['ɵdid'](4, 245760, null, 0, au, [
                        L.f,
                        t.ChangeDetectorRef,
                        il.a,
                        ru.a,
                        i.r,
                        i.a,
                        r.l,
                        t.ChangeDetectorRef,
                        a.DatePipe
                    ], null, null)
                ], function (l, n) {
                    l(n, 4, 0);
                }, null);
            }
            var Tu = t['ɵccf']('app-invoice', au, Ou, {}, {}, []), _u = e('9AJC'), Au = e('QfCi'), xu = e('8WaK'), Fu = e('JRKe'), Nu = e('ypAQ'), Pu = e('ul+3'), Mu = e('CbJs'), Vu = e('alHs');
            class Uu {
            }
            class ju {
                constructor(l) {
                    this.urlBase = Fe.a.urlBase, this._httpClient = l;
                }
                getUserManager(l) {
                    return this._httpClient.get(`${this.urlBase}company/users/view/${l}`);
                }
                editUserManager(l) {
                    let n = this.urlBase + 'company/users/';
                    switch (+l.type) {
                        case P.a.physic:
                            n += 'edit';
                            break;
                        case P.a.workStation:
                            n += 'editws';
                    }
                    return this._httpClient.post(n, l);
                }
                saveNewUserManager(l) {
                    let n = this.urlBase + 'company/';
                    switch (+l.type) {
                        case P.a.physic:
                            n += 'register';
                            break;
                        case P.a.workStation:
                            n += 'registerWS';
                    }
                    return this._httpClient.post(n, l);
                }
                getUserRowsTable(l) {
                    let n = this.urlBase + 'company/getall';
                    return this._headers = new Me.HttpHeaders().append('page', l.page + '').append('pageSize', l.pageSize + ''), this._httpClient.get(n, { headers: this._headers });
                }
                updateProfileInfo(l) {
                    let n = this.urlBase;
                    const e = new FormData();
                    switch (e.append('avatar', l.file), e.append('RFC', l.rfc), +l.type) {
                        case P.a.moral:
                            n += 'moral/update', e.append('business_name', l.name);
                            break;
                        case P.a.physic:
                            n += 'physical/update', e.append('last_name', l.lastName), e.append('name', l.name);
                            break;
                        default:
                            n += 'moral/update', e.append('business_name', l.name);
                    }
                    return this._httpClient.post(n, e);
                }
                deleteUserManager(l) {
                    return this._httpClient.get(`${this.urlBase}company/users/delete/${l}`);
                }
            }
            var Bu = e('7bNT'), Ju = e('YcMP');
            class Hu {
                updateProfileInfo(l) {
                    let n = localStorage.getItem('token');
                    if ('' != n) {
                        let e = JSON.parse(n);
                        e.avatar = l.avatar, e.RFC = l.rfc, e.name = l.name, e.firtname = l.name, 1 == e.people_type && (e.lastname = l.lastName), localStorage.setItem('token', JSON.stringify(e));
                    }
                }
                updateMailuser(l) {
                    let n = localStorage.getItem('token');
                    if ('' != n) {
                        let e = JSON.parse(n);
                        e.email = l, localStorage.setItem('token', JSON.stringify(e));
                    }
                }
            }
            let Gu = (() => {
                class l extends Ju.a {
                    constructor(l, n, e, t, u) {
                        super(u), this.actions$ = l, this.store = n, this._profileService = e, this._authService = t, this._notificationSrv = u, this.UpdateProfileInfo$ = this.actions$.pipe(Object(Bu.j)(Q.a.UPDATE_INFO), Object(ou.a)(l => this._profileService.updateProfileInfo(l.profileInfo).pipe(Object(ou.a)(() => (this._notification.success('Actualización exitosa', 'Se guardaron correctamente los datos'), new Hu().updateProfileInfo(l.profileInfo), [new el(l.profileInfo)])), Object(iu.a)(l => (this.notifyError(l.error), [new ul(!1)])))), Object(iu.a)(l => (this.notifyError(l.error), [new ul(!1)]))), this.updateEmail$ = this.actions$.pipe(Object(Bu.j)(Q.a.UPDATE__EMAIL), Object(ou.a)(l => this._authService.updateEmail(l.email).pipe(Object(ou.a)(() => (this._notification.success('Actualización exitosa', 'Se Actualizo correctamente su email'), new Hu().updateMailuser(l.email), [new tl(l.email)])), Object(iu.a)(l => (this.notifyError(l.error), [new ul(!1)])))), Object(iu.a)(l => (this.notifyError(l.error), [new ul(!1)])));
                    }
                }
                return Object(Y.b)([Object(Bu.c)()], l.prototype, 'UpdateProfileInfo$', void 0), Object(Y.b)([Object(Bu.c)()], l.prototype, 'updateEmail$', void 0), l;
            })(), qu = (() => {
                class l extends Ju.a {
                    constructor(l, n, e, t) {
                        super(t), this.actions$ = l, this.store = n, this._authService = e, this._notificationSrv = t, this.UpdatePassInfo$ = this.actions$.pipe(Object(Bu.j)(Q.a.UPDATE_PASS), Object(ou.a)(l => this._authService.changePasswordUserAuth(l.request).pipe(Object(ou.a)(() => (this._notification.success('Actualización exitosa', 'Se guardaron correctamente los datos'), [new yl(!1)])), Object(iu.a)(l => (this.notifyError(l.error), [new yl(!1)])))), Object(iu.a)(l => (this.notifyError(l.error), [new yl(!1)])));
                    }
                }
                return Object(Y.b)([Object(Bu.c)()], l.prototype, 'UpdatePassInfo$', void 0), l;
            })();
            class $u {
            }
            var Ku = e('zp1y');
            let Zu = (() => {
                class l extends Ju.a {
                    constructor(l, n, e, t) {
                        super(t), this.actions$ = l, this.userTableService = n, this.store = e, this._notificationSrv = t, this.GetUsersTable$ = this.actions$.pipe(Object(Bu.j)(Q.a.GET_USERS_TABLE), Object(ou.a)(l => this.userTableService.getUserRowsTable(l.pageRequest).pipe(Object(ou.a)(n => [new Ce(n.data, Object.assign(Object.assign({}, n), {
                            page: l.pageRequest.page,
                            pageSize: l.pageRequest.pageSize
                        }))]), Object(iu.a)(l => (this.notifyError(l.error), [new Re(!1)])))), Object(iu.a)(l => (this.notifyError(l.error), [new Re(!1)]))), this.DeleteRelation$ = this.actions$.pipe(Object(Bu.j)(Q.a.DELETE_USER_MANAGER), Object(Ku.a)(this.store.select(l => l.settingsModule.usersManagerTableState.pagination)), Object(ou.a)(([l, n]) => this.userTableService.deleteUserManager(l.userId).pipe(Object(ou.a)(e => (this._notification.success('Se Elimino correctamente el usuario ' + l.name), [new be(n)])), Object(iu.a)(l => (this.notifyError(l.error), [new Re(!1)])))), Object(iu.a)(l => (this.notifyError(l.error), [new Re(!1)])));
                    }
                }
                return Object(Y.b)([Object(Bu.c)()], l.prototype, 'GetUsersTable$', void 0), Object(Y.b)([Object(Bu.c)()], l.prototype, 'DeleteRelation$', void 0), l;
            })();
            class Xu {
            }
            let Wu = (() => {
                class l extends Ju.a {
                    constructor(l, n, e, t, u) {
                        super(u), this.actions$ = l, this.userManagerFormService = n, this.translate = e, this.store = t, this._notificationSrv = u, this.SaveNewUserManager$ = this.actions$.pipe(Object(Bu.j)(Q.a.SAVE_NEW_USER_MANAGER), Object(Ku.a)(this.store.select(l => l.settingsModule.usersManagerTableState.pagination)), Object(ou.a)(([l, n]) => this.userManagerFormService.saveNewUserManager(l.request).pipe(Object(ou.a)(l => (this._notification.success(this.successMessage), [
                            new tn(!1),
                            new un(!1),
                            new be(n)
                        ])), Object(iu.a)(l => (this.notifyError(l.error), [new tn(!1)])))), Object(iu.a)(l => (this.notifyError(l.error), [new tn(!1)]))), this.EditUserManager$ = this.actions$.pipe(Object(Bu.j)(Q.a.EDIT_USER_MANAGER), Object(Ku.a)(this.store.select(l => l.settingsModule.usersManagerTableState.pagination)), Object(ou.a)(([l, n]) => this.userManagerFormService.editUserManager(l.request).pipe(Object(ou.a)(l => (this._notification.success('Se edito correctamente el usuario'), [
                            new tn(!1),
                            new un(!1),
                            new be(n)
                        ])), Object(iu.a)(l => (this.notifyError(l.error), [new tn(!1)])))), Object(iu.a)(l => (this.notifyError(l.error), [new tn(!1)]))), this.GetValuesForm$ = this.actions$.pipe(Object(Bu.j)(Q.a.GET_VALUES_FORM_USER_MANAGER), Object(ou.a)(l => this.userManagerFormService.getUserManager(l.userId).pipe(Object(ou.a)(l => [
                            new tn(!1),
                            new rn({
                                RFC: l.RFC,
                                email: l.email,
                                last_name: l.last_name,
                                mobile: l.mobile,
                                name: l.name,
                                type: l.type,
                                perfil: l.perfil
                            })
                        ]), Object(iu.a)(l => (this.notifyError(l.error), [new tn(!1)])))), Object(iu.a)(l => (this.notifyError(l.error), [new tn(!1)]))), e.get('MESSAGES.SUCCESS_NEW_USER').subscribe(l => {
                            this.successMessage = l;
                        });
                    }
                }
                return Object(Y.b)([Object(Bu.c)()], l.prototype, 'SaveNewUserManager$', void 0), Object(Y.b)([Object(Bu.c)()], l.prototype, 'EditUserManager$', void 0), Object(Y.b)([Object(Bu.c)()], l.prototype, 'GetValuesForm$', void 0), l;
            })();
            class Yu {
            }
            var Qu = e('0CZq'), lo = e('Jp/u'), no = e('GaVp'), eo = e('YRt3'), to = e('lAiz'), uo = e('CYS+'), oo = e('YdS3'), io = e('S/WK'), ao = e('oBm0'), ro = e('RVNi'), so = e('gaRz'), co = e('tM0M'), mo = e('fb/r'), vo = e('z+yo'), po = e('JXeA'), fo = e('51fn'), go = e('pKmL'), ho = e('zfYk'), bo = e('F3IN'), Co = e('Tczp'), Ro = e('kFOB');
            const wo = { isLoading: !1 };
            function Eo(l = wo, n) {
                switch (n.type) {
                    case Q.a.UPDATE_INFO:
                        return Object.assign(Object.assign({}, l), { isLoading: !0 });
                    case Q.a.SET_INFO_PROFILE:
                        return Object.assign(Object.assign({}, l), { isLoading: !1 });
                    case Q.a.SET_LOADING_PROFILE_FORM:
                        return Object.assign(Object.assign({}, l), { isLoading: n.isLoading });
                    default:
                        return l;
                }
            }
            const yo = { isLoading: !1 };
            function zo(l = yo, n) {
                switch (n.type) {
                    case Q.a.UPDATE_PASS:
                        return Object.assign(Object.assign({}, l), { isLoading: !0 });
                    case Q.a.SET_LOADING_PASS_FORM:
                        return Object.assign(Object.assign({}, l), { isLoading: n.isLoading });
                    default:
                        return l;
                }
            }
            function So(l = Zl, n) {
                switch (n.type) {
                    case Q.a.GET_USERS_TABLE:
                        return Object.assign(Object.assign({}, l), { isLoading: !0 });
                    case Q.a.SET_USERS_ROWS:
                        return Kl.setAll(n.userRows, Object.assign(Object.assign({}, l), {
                            isLoading: !1,
                            pagination: n.newPagination
                        }));
                    case Q.a.SET_LOADING_USERS_MANAGER_TABLE:
                        return Object.assign(Object.assign({}, l), { isLoading: n.value });
                    case Q.a.SAVE_NEW_USER_MANAGER:
                        return Object.assign(Object.assign({}, l), { form: Object.assign(Object.assign({}, l.form), { isLoading: !0 }) });
                    case Q.a.SET_LOADING_FORM_USER_MANAGER:
                        return Object.assign(Object.assign({}, l), { form: Object.assign(Object.assign({}, l.form), { isLoading: n.value }) });
                    case Q.a.SET_VISIBILITY_FORM_USER_MANAGER:
                        return Object.assign(Object.assign({}, l), { form: Object.assign(Object.assign({}, l.form), { isVisible: n.value }) });
                    case Q.a.SET_VALUES_FORM_USER_MANAGER:
                        return Object.assign(Object.assign({}, l), {
                            form: Object.assign(Object.assign({}, l.form), {
                                values: n.values,
                                isLoading: !1
                            })
                        });
                    case Q.a.GET_VALUES_FORM_USER_MANAGER:
                        return Object.assign(Object.assign({}, l), { form: Object.assign(Object.assign({}, l.form), { isLoading: !0 }) });
                    case Q.a.RESET_FORM_VALUES:
                        return Object.assign(Object.assign({}, l), { form: Object.assign(Object.assign({}, l.form), { values: Object.assign({}, Zl.form.values) }) });
                    default:
                        return l;
                }
            }
            var Io = e('RbrB'), ko = e('ZEiq'), Lo = t['ɵcmf'](u, [], function (l) {
                return t['ɵmod']([
                    t['ɵmpd'](512, t.ComponentFactoryResolver, t['ɵCodegenComponentFactoryResolver'], [
                        [
                            8,
                            [
                                o.a,
                                R,
                                cl,
                                Ll,
                                De,
                                qe,
                                Qe,
                                it,
                                ht,
                                Dt,
                                Ft,
                                $t,
                                tu,
                                Tu,
                                _u.h,
                                _u.i,
                                Au.a,
                                xu.a,
                                fe.b,
                                fe.a,
                                Fu.a,
                                _u.b,
                                Nu.a,
                                _u.a,
                                _u.e,
                                _u.f,
                                _u.g
                            ]
                        ],
                        [
                            3,
                            t.ComponentFactoryResolver
                        ],
                        t.NgModuleRef
                    ]),
                    t['ɵmpd'](4608, a.NgLocalization, a.NgLocaleLocalization, [t.LOCALE_ID]),
                    t['ɵmpd'](4608, Me.HttpXsrfTokenExtractor, Me['ɵangular_packages_common_http_http_g'], [
                        a.DOCUMENT,
                        t.PLATFORM_ID,
                        Me['ɵangular_packages_common_http_http_e']
                    ]),
                    t['ɵmpd'](4608, Me['ɵangular_packages_common_http_http_h'], Me['ɵangular_packages_common_http_http_h'], [
                        Me.HttpXsrfTokenExtractor,
                        Me['ɵangular_packages_common_http_http_f']
                    ]),
                    t['ɵmpd'](4608, Me['ɵangular_packages_common_http_http_d'], Me['ɵangular_packages_common_http_http_d'], []),
                    t['ɵmpd'](6144, Me.XhrFactory, null, [Me['ɵangular_packages_common_http_http_d']]),
                    t['ɵmpd'](4608, Me.HttpXhrBackend, Me.HttpXhrBackend, [Me.XhrFactory]),
                    t['ɵmpd'](6144, Me.HttpBackend, null, [Me.HttpXhrBackend]),
                    t['ɵmpd'](4608, Me.HttpHandler, Me['ɵHttpInterceptingHandler'], [
                        Me.HttpBackend,
                        t.Injector
                    ]),
                    t['ɵmpd'](4608, Me.HttpClient, Me.HttpClient, [Me.HttpHandler]),
                    t['ɵmpd'](4608, Vt.a, Pu.a, [Me.HttpClient]),
                    t['ɵmpd'](5120, Me.HTTP_INTERCEPTORS, function (l, n, e) {
                        return [
                            l,
                            new Mu.a(n, e)
                        ];
                    }, [
                        Me['ɵangular_packages_common_http_http_h'],
                        Vt.a,
                        v.o
                    ]),
                    t['ɵmpd'](4608, L.z, L.z, []),
                    t['ɵmpd'](4608, L.f, L.f, []),
                    t['ɵmpd'](4608, Dl.E, Dl.E, [
                        t.ComponentFactoryResolver,
                        t.Injector,
                        Dl.vb,
                        Dl.F
                    ]),
                    t['ɵmpd'](4608, Dn.d, Dn.d, [
                        Dn.l,
                        Dn.f,
                        t.ComponentFactoryResolver,
                        Dn.j,
                        Dn.g,
                        t.Injector,
                        t.NgZone,
                        a.DOCUMENT,
                        On.b,
                        a.Location,
                        Dn.i
                    ]),
                    t['ɵmpd'](5120, Dn.m, Dn.n, [Dn.d]),
                    t['ɵmpd'](4608, Tn.c, Tn.c, []),
                    t['ɵmpd'](135680, ge.k, ge.k, [
                        Dn.d,
                        t.Injector,
                        T.a,
                        [
                            3,
                            ge.k
                        ]
                    ]),
                    t['ɵmpd'](4608, Vu.d, Vu.d, [Vu.a]),
                    t['ɵmpd'](4608, Uu, ju, [Me.HttpClient]),
                    t['ɵmpd'](4608, Gu, Gu, [
                        Bu.a,
                        v.o,
                        Uu,
                        Vt.a,
                        il.a
                    ]),
                    t['ɵmpd'](4608, qu, qu, [
                        Bu.a,
                        v.o,
                        Vt.a,
                        il.a
                    ]),
                    t['ɵmpd'](4608, $u, ju, [Me.HttpClient]),
                    t['ɵmpd'](4608, Zu, Zu, [
                        Bu.a,
                        $u,
                        v.o,
                        il.a
                    ]),
                    t['ɵmpd'](4608, Xu, ju, [Me.HttpClient]),
                    t['ɵmpd'](4608, Wu, Wu, [
                        Bu.a,
                        Xu,
                        r.l,
                        v.o,
                        il.a
                    ]),
                    t['ɵmpd'](4608, Et, ru.a, [Me.HttpClient]),
                    t['ɵmpd'](1073742336, a.CommonModule, a.CommonModule, []),
                    t['ɵmpd'](1073742336, i.v, i.v, [
                        [
                            2,
                            i.B
                        ],
                        [
                            2,
                            i.r
                        ]
                    ]),
                    t['ɵmpd'](1073742336, Yu, Yu, []),
                    t['ɵmpd'](1073742336, Me.HttpClientXsrfModule, Me.HttpClientXsrfModule, []),
                    t['ɵmpd'](1073742336, Me.HttpClientModule, Me.HttpClientModule, []),
                    t['ɵmpd'](1073742336, L.y, L.y, []),
                    t['ɵmpd'](1073742336, L.l, L.l, []),
                    t['ɵmpd'](1073742336, L.v, L.v, []),
                    t['ɵmpd'](1073742336, Dl.G, Dl.G, []),
                    t['ɵmpd'](1073742336, y.a, y.a, []),
                    t['ɵmpd'](1073742336, z.b, z.b, []),
                    t['ɵmpd'](1073742336, E.b, E.b, []),
                    t['ɵmpd'](1073742336, s.b, s.b, []),
                    t['ɵmpd'](1073742336, On.a, On.a, []),
                    t['ɵmpd'](1073742336, _n.e, _n.e, []),
                    t['ɵmpd'](1073742336, An.c, An.c, []),
                    t['ɵmpd'](1073742336, An.g, An.g, []),
                    t['ɵmpd'](1073742336, Dn.h, Dn.h, []),
                    t['ɵmpd'](1073742336, xn.a, xn.a, []),
                    t['ɵmpd'](1073742336, Nn.c, Nn.c, []),
                    t['ɵmpd'](1073742336, Pn.b, Pn.b, []),
                    t['ɵmpd'](1073742336, pl.b, pl.b, []),
                    t['ɵmpd'](1073742336, I.e, I.e, []),
                    t['ɵmpd'](1073742336, Qu.d, Qu.d, []),
                    t['ɵmpd'](1073742336, Qu.c, Qu.c, []),
                    t['ɵmpd'](1073742336, k.c, k.c, []),
                    t['ɵmpd'](1073742336, lo.c, lo.c, []),
                    t['ɵmpd'](1073742336, d.b, d.b, []),
                    t['ɵmpd'](1073742336, no.c, no.c, []),
                    t['ɵmpd'](1073742336, eo.a, eo.a, []),
                    t['ɵmpd'](1073742336, to.a, to.a, []),
                    t['ɵmpd'](1073742336, to.b, to.b, []),
                    t['ɵmpd'](1073742336, Tn.d, Tn.d, []),
                    t['ɵmpd'](1073742336, Al.a, Al.a, [Al.f]),
                    t['ɵmpd'](1073742336, uo.c, uo.c, []),
                    t['ɵmpd'](1073742336, Ol.d, Ol.d, []),
                    t['ɵmpd'](1073742336, oo.a, oo.a, []),
                    t['ɵmpd'](1073742336, Fn.d, Fn.d, []),
                    t['ɵmpd'](1073742336, _l.j, _l.j, []),
                    t['ɵmpd'](1073742336, io.a, io.a, []),
                    t['ɵmpd'](1073742336, ge.i, ge.i, []),
                    t['ɵmpd'](1073742336, ao.a, ao.a, []),
                    t['ɵmpd'](1073742336, ro.b, ro.b, []),
                    t['ɵmpd'](1073742336, so.d, so.d, []),
                    t['ɵmpd'](1073742336, Ln.d, Ln.d, []),
                    t['ɵmpd'](1073742336, r.i, r.i, []),
                    t['ɵmpd'](1073742336, co.a, co.a, []),
                    t['ɵmpd'](1073742336, mo.b, mo.b, []),
                    t['ɵmpd'](1073742336, vo.a, vo.a, []),
                    t['ɵmpd'](1073742336, po.h, po.h, []),
                    t['ɵmpd'](1073742336, po.f, po.f, []),
                    t['ɵmpd'](1073742336, fo.a, fo.a, []),
                    t['ɵmpd'](1073742336, go.a, go.a, []),
                    t['ɵmpd'](1073742336, Dl.t, Dl.t, []),
                    t['ɵmpd'](1073742336, ho.a, ho.a, []),
                    t['ɵmpd'](1073742336, bo.InlineSVGModule, bo.InlineSVGModule, []),
                    t['ɵmpd'](1073742336, Co.b, Co.b, []),
                    t['ɵmpd'](1073742336, Dl.z, Dl.z, []),
                    t['ɵmpd'](1073742336, Ro.a, Ro.a, []),
                    t['ɵmpd'](1073742336, Dl.c, Dl.c, []),
                    t['ɵmpd'](1073742336, Dl.f, Dl.f, []),
                    t['ɵmpd'](1073742336, Dl.g, Dl.g, []),
                    t['ɵmpd'](1073742336, Dl.k, Dl.k, []),
                    t['ɵmpd'](1073742336, Dl.l, Dl.l, []),
                    t['ɵmpd'](1073742336, Dl.I, Dl.I, []),
                    t['ɵmpd'](1073742336, Dl.N, Dl.N, []),
                    t['ɵmpd'](1073742336, Dl.S, Dl.S, []),
                    t['ɵmpd'](1073742336, Dl.V, Dl.V, []),
                    t['ɵmpd'](1073742336, Dl.Y, Dl.Y, []),
                    t['ɵmpd'](1073742336, Dl.gb, Dl.gb, []),
                    t['ɵmpd'](1073742336, Dl.jb, Dl.jb, []),
                    t['ɵmpd'](1073742336, Dl.kb, Dl.kb, []),
                    t['ɵmpd'](1073742336, Dl.lb, Dl.lb, []),
                    t['ɵmpd'](1073742336, Dl.bb, Dl.bb, []),
                    t['ɵmpd'](1073742336, Dl.H, Dl.H, []),
                    t['ɵmpd'](1024, v.P, function () {
                        return [{}];
                    }, []),
                    t['ɵmpd'](1024, v.k, function () {
                        return [{
                            key: 'settingsModule',
                            reducerFactory: v.u,
                            metaReducers: [],
                            initialState: void 0
                        }];
                    }, []),
                    t['ɵmpd'](1024, v.Q, v.X, [
                        t.Injector,
                        v.P,
                        v.k
                    ]),
                    t['ɵmpd'](1024, v.O, function () {
                        return [{
                            profileFormState: Eo,
                            passFormState: zo,
                            usersManagerTableState: So
                        }];
                    }, []),
                    t['ɵmpd'](1024, v.R, function (l) {
                        return [l];
                    }, [v.O]),
                    t['ɵmpd'](1024, v.b, function (l, n, e) {
                        return [v.Y(l, n, e)];
                    }, [
                        t.Injector,
                        v.O,
                        v.R
                    ]),
                    t['ɵmpd'](1024, v.V, function (l) {
                        return [v.I(l)];
                    }, [v.U]),
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
                    t['ɵmpd'](1024, Bu.p, function () {
                        return [[
                            Gu,
                            qu,
                            Zu,
                            Wu
                        ]];
                    }, []),
                    t['ɵmpd'](1024, Bu.h, function () {
                        return [[]];
                    }, []),
                    t['ɵmpd'](1024, Bu.q, function (l, n, e) {
                        return [Bu.k(l, n, e)];
                    }, [
                        t.Injector,
                        Bu.p,
                        Bu.h
                    ]),
                    t['ɵmpd'](1073742336, Bu.e, Bu.e, [
                        Bu.f,
                        Bu.q,
                        [
                            2,
                            v.q
                        ],
                        [
                            2,
                            v.p
                        ]
                    ]),
                    t['ɵmpd'](1073742336, Io.a, Io.a, []),
                    t['ɵmpd'](1073742336, ko.b, ko.b, []),
                    t['ɵmpd'](1073742336, Vu.c, Vu.c, []),
                    t['ɵmpd'](1073742336, u, u, []),
                    t['ɵmpd'](1024, i.m, function () {
                        return [[{
                            path: '',
                            component: m,
                            children: [
                                {
                                    path: 'profile',
                                    component: ol
                                },
                                {
                                    path: 'change-password',
                                    component: zl
                                },
                                {
                                    path: 'users-manager',
                                    component: Ee
                                },
                                {
                                    path: 'users-sales',
                                    component: xe
                                },
                                {
                                    path: 'users-storages',
                                    component: $e
                                },
                                {
                                    path: 'legal-responsible',
                                    component: lt
                                },
                                {
                                    path: 'document-legal/:rfc',
                                    component: mt
                                },
                                {
                                    path: 'billing-information',
                                    component: wt
                                },
                                {
                                    path: 'employee-bonding',
                                    component: Ot
                                },
                                {
                                    path: 'change-phone',
                                    component: Mt
                                },
                                {
                                    path: 'change-email',
                                    component: Zt
                                },
                                {
                                    path: 'invoice/:id',
                                    component: au
                                },
                                {
                                    path: '',
                                    redirectTo: 'profile',
                                    pathMatch: 'full'
                                },
                                {
                                    path: '**',
                                    redirectTo: 'profile',
                                    pathMatch: 'full'
                                }
                            ]
                        }]];
                    }, []),
                    t['ɵmpd'](256, Me['ɵangular_packages_common_http_http_e'], 'XSRF-TOKEN', []),
                    t['ɵmpd'](256, Me['ɵangular_packages_common_http_http_f'], 'X-XSRF-TOKEN', []),
                    t['ɵmpd'](256, Vu.a, void 0, [])
                ]);
            });
        },
        xIfL: function (l, n, e) {
            'use strict';
            e.d(n, 'a', function () {
                return o;
            });
            var t = e('iBfQ'), u = e('s7LF');
            class o extends t.a {
                constructor(l, n) {
                    super(l, n), this._formBuilder = l, this._validate = n, this.setEntityForm = this.formBuilder.group({
                        filecer: [
                            null,
                            [u.x.required]
                        ],
                        filekey: [
                            null,
                            [u.x.required]
                        ],
                        passwordfiel: [
                            null,
                            [u.x.required]
                        ]
                    });
                }
            }
        }
    }
]);