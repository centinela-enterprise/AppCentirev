(window.webpackJsonp = window.webpackJsonp || []).push([
    [31],
    {
        Iab2: function (l, n, e) {
            var u, t;
            void 0 === (t = 'function' == typeof (u = function () {
                'use strict';
                function n(l, n, e) {
                    var u = new XMLHttpRequest();
                    u.open('GET', l), u.responseType = 'blob', u.onload = function () {
                        i(u.response, n, e);
                    }, u.onerror = function () {
                        console.error('could not download file');
                    }, u.send();
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
                function u(l) {
                    try {
                        l.dispatchEvent(new MouseEvent('click'));
                    } catch (n) {
                        var e = document.createEvent('MouseEvents');
                        e.initMouseEvent('click', !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), l.dispatchEvent(e);
                    }
                }
                var t = 'object' == typeof window && window.window === window ? window : 'object' == typeof self && self.self === self ? self : 'object' == typeof global && global.global === global ? global : void 0, o = t.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), i = t.saveAs || ('object' != typeof window || window !== t ? function () {
                    } : 'download' in HTMLAnchorElement.prototype && !o ? function (l, o, i) {
                        var a = t.URL || t.webkitURL, d = document.createElement('a');
                        d.download = o = o || l.name || 'download', d.rel = 'noopener', 'string' == typeof l ? (d.href = l, d.origin === location.origin ? u(d) : e(d.href) ? n(l, o, i) : u(d, d.target = '_blank')) : (d.href = a.createObjectURL(l), setTimeout(function () {
                            a.revokeObjectURL(d.href);
                        }, 40000), setTimeout(function () {
                            u(d);
                        }, 0));
                    } : 'msSaveOrOpenBlob' in navigator ? function (l, t, o) {
                        if (t = t || l.name || 'download', 'string' != typeof l)
                            navigator.msSaveOrOpenBlob(function (l, n) {
                                return void 0 === n ? n = { autoBom: !1 } : 'object' != typeof n && (console.warn('Deprecated: Expected third argument to be a object'), n = { autoBom: !n }), n.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(l.type) ? new Blob([
                                    '\uFEFF',
                                    l
                                ], { type: l.type }) : l;
                            }(l, o), t);
                        else if (e(l))
                            n(l, t, o);
                        else {
                            var i = document.createElement('a');
                            i.href = l, i.target = '_blank', setTimeout(function () {
                                u(i);
                            });
                        }
                    } : function (l, e, u, i) {
                        if ((i = i || open('', '_blank')) && (i.document.title = i.document.body.innerText = 'downloading...'), 'string' == typeof l)
                            return n(l, e, u);
                        var a = 'application/octet-stream' === l.type, d = /constructor/i.test(t.HTMLElement) || t.safari, r = /CriOS\/[\d]+/.test(navigator.userAgent);
                        if ((r || a && d || o) && 'undefined' != typeof FileReader) {
                            var s = new FileReader();
                            s.onloadend = function () {
                                var l = s.result;
                                l = r ? l : l.replace(/^data:[^;]*;/, 'data:attachment/file;'), i ? i.location.href = l : location = l, i = null;
                            }, s.readAsDataURL(l);
                        } else {
                            var c = t.URL || t.webkitURL, p = c.createObjectURL(l);
                            i ? i.location = p : location.href = p, i = null, setTimeout(function () {
                                c.revokeObjectURL(p);
                            }, 40000);
                        }
                    });
                t.saveAs = i.saveAs = i, l.exports = i;
            }) ? u.apply(n, []) : u) || (l.exports = t);
        },
        ve5D: function (l, n, e) {
            'use strict';
            e.r(n), e.d(n, 'SalesModuleNgFactory', function () {
                return hn;
            });
            var u = e('8Y7J');
            class t {
            }
            var o = e('pMnS'), i = e('iInd');
            class a {
                constructor() {
                }
                ngOnInit() {
                }
            }
            var d = u['ɵcrt']({
                encapsulation: 0,
                styles: [['.disable[_ngcontent-%COMP%]{filter:invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)}']],
                data: {}
            });
            function r(l) {
                return u['ɵvid'](0, [
                    (l()(), u['ɵeld'](0, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
                    u['ɵdid'](1, 212992, null, 0, i.w, [
                        i.b,
                        u.ViewContainerRef,
                        u.ComponentFactoryResolver,
                        [
                            8,
                            null
                        ],
                        u.ChangeDetectorRef
                    ], null, null)
                ], function (l, n) {
                    l(n, 1, 0);
                }, null);
            }
            function s(l) {
                return u['ɵvid'](0, [
                    (l()(), u['ɵeld'](0, 0, null, null, 1, 'app-sales', [], null, null, null, r, d)),
                    u['ɵdid'](1, 114688, null, 0, a, [], null, null)
                ], function (l, n) {
                    l(n, 1, 0);
                }, null);
            }
            var c = u['ɵccf']('app-sales', a, s, {}, {}, []), p = e('SVse'), g = e('TSSN'), v = e('G0yt'), f = e('EvHu'), m = e('iB+a'), h = e('s7LF'), C = e('ZA9w'), E = e('gBr1'), R = e('uvLv'), b = e('mrSG'), L = e('Br0f'), D = e('JcrP');
            class I {
                constructor(l, n, e, u, t, o) {
                    this.fb = l, this.modalService = n, this.salesService = e, this.splash = u, this.notifications = t, this.changeDetector = o, this.filter = {
                        initialDate: null,
                        finalDate: null,
                        product_id: null,
                        payment_type: null,
                        seller: null,
                        clientName: null
                    }, this.loadingPage = !1, this.subscriptions = [];
                }
                ngOnInit() {
                    this.salesService.fetch(), this.grouping = this.salesService.grouping, this.salesService.paginator.pageSize = 10, this.salesService.paginator.isAll = !0, this.paginator = this.salesService.paginator, this.sorting = this.salesService.sorting, this.filter.product_id = 0, this.filter.payment_type = 0, this.filter.seller = '', this.filter.clientName = '';
                    const l = this.salesService.isLoading$.subscribe(l => this.isLoading = l);
                    this.subscriptions.push(l);
                }
                ngOnDestroy() {
                    this.subscriptions.forEach(l => l.unsubscribe());
                }
                search(l) {
                    this.salesService.patchState({ searchTerm: l });
                }
                sort(l) {
                    const n = this.sorting;
                    n.column === l ? n.direction = 'asc' === n.direction ? 'desc' : 'asc' : (n.column = l, n.direction = 'asc'), this.salesService.patchState({ sorting: n });
                }
                paginate(l) {
                    this.salesService.patchState({ paginator: l });
                }
                create() {
                    this.edit(void 0);
                }
                edit(l) {
                    const n = this.modalService.open(null, { size: 'xl' });
                    n.componentInstance.id = l, n.result.then(() => this.salesService.fetch(), () => {
                    });
                }
                delete(l) {
                    return Object(b.a)(this, void 0, void 0, function* () {
                        (yield this.notifications.confirmAsync('\xBFSeguro que desea eliminar el registro ?')) && (this.loadingPage = !0, yield this.salesService.delete(l).toPromise(), this.salesService.fetch(), this.loadingPage = !1);
                    });
                }
                deleteSelected() {
                    const l = this.modalService.open(null);
                    l.componentInstance.ids = this.grouping.getSelectedRows(), l.result.then(() => this.salesService.fetch(), () => {
                    });
                }
                updateStatusForSelected() {
                    const l = this.modalService.open(null);
                    l.componentInstance.ids = this.grouping.getSelectedRows(), l.result.then(() => this.salesService.fetch(), () => {
                    });
                }
                fetchSelected() {
                    const l = this.modalService.open(null);
                    l.componentInstance.ids = this.grouping.getSelectedRows(), l.result.then(() => this.salesService.fetch(), () => {
                    });
                }
                searchCriteria() {
                    this.paginator = new L.a();
                    let l, n, e = new Date();
                    null != this.filter.initialDate && (e = new Date(this.filter.initialDate), l = this.filter.initialDate, this.filter.initialDate = e.getDate() + '/' + (e.getMonth() + 1) + '/' + e.getFullYear()), null != this.filter.finalDate && (e = new Date(this.filter.finalDate), n = this.filter.finalDate, this.filter.finalDate = e.getDate() + '/' + (e.getMonth() + 1) + '/' + e.getFullYear()), this.paginator.isAll = !0, this.salesService.patchState(Object.assign(Object.assign({}, this.filter), { paginator: this.paginator })), this.filter.initialDate = l, this.filter.finalDate = n;
                }
                downloadFileXML(l) {
                    return Object(b.a)(this, void 0, void 0, function* () {
                        try {
                            this.loadingPage = !0, yield this.salesService.downloadXML(l).toPromise();
                        } catch (n) {
                        }
                        this.loadingPage = !1, this.changeDetector.markForCheck();
                    });
                }
                downloadFile(l) {
                    return Object(b.a)(this, void 0, void 0, function* () {
                        try {
                            this.loadingPage = !0, yield this.salesService.downloadFile(l).toPromise();
                        } catch (n) {
                        }
                        this.loadingPage = !1, this.changeDetector.markForCheck();
                    });
                }
                exportexcel() {
                    let l = document.getElementById('data_costumer');
                    const n = D.a.table_to_sheet(l), e = D.a.book_new();
                    D.a.book_append_sheet(e, n, 'Sheet1'), D.b(e, 'Clientes.xlsx');
                }
            }
            var k = e('AytR'), w = e('lJxs'), S = e('Iab2'), y = function (l) {
                    return l[l.CENTINELA = 1] = 'CENTINELA', l[l.LITE = 2] = 'LITE', l[l.NOTIFICATIONS = 3] = 'NOTIFICATIONS', l;
                }({}), T = e('IheW');
            let A = (() => {
                class l extends L.b {
                    constructor(l) {
                        super(l), this.API_URL = k.a.urlBase + 'salespackages';
                    }
                    updateSale(l, n) {
                        return this.http.put(this.API_URL + '/update/' + l, { product_type: n.product_type });
                    }
                    createSale(l) {
                        let n = new FormData();
                        return n.append('client_id', l.client_id), n.append('product_id', l.product_type == y.CENTINELA ? '1' : '2'), n.append('quantity', l.quantity.toString()), n.append('amount', l.amount.toString()), this.http.post(this.API_URL, n);
                    }
                    getById(l) {
                        return this.http.get(this.API_URL + '/' + l);
                    }
                    downloadXML(l) {
                        return this.http.get(this.API_URL + '/download/xml/' + l, {
                            responseType: 'blob',
                            headers: { 'content-type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }
                        }).pipe(Object(w.a)(l => S.saveAs(l, 'file' + new Date().getTime())));
                    }
                    downloadFile(l) {
                        return this.http.get(this.API_URL + '/downloadfile/' + l, {
                            responseType: 'blob',
                            headers: { 'content-type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }
                        }).pipe(Object(w.a)(l => S.saveAs(l, 'file' + new Date().getTime())));
                    }
                    delete(l) {
                        return this.http.get(this.API_URL + '/delete/' + l);
                    }
                    ngOnDestroy() {
                        this.subscriptions.forEach(l => l.unsubscribe());
                    }
                }
                return l.ɵprov = u['ɵɵdefineInjectable']({
                    factory: function () {
                        return new l(u['ɵɵinject'](T.HttpClient));
                    },
                    token: l,
                    providedIn: 'root'
                }), l;
            })();
            var _ = e('ONK0'), O = e('WueC'), x = u['ɵcrt']({
                    encapsulation: 0,
                    styles: [['.actions-menu[_ngcontent-%COMP%]{overflow-y:visible;overflow-x:visible}.bg-table[_ngcontent-%COMP%]{background-color:#173f5f;color:#fff!important}.borderTable[_ngcontent-%COMP%]{border:1px solid #173f5f}']],
                    data: {}
                });
            function N(l) {
                return u['ɵvid'](0, [
                    (l()(), u['ɵeld'](0, 0, null, null, 8, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](1, 0, null, null, 7, 'a', [[
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
                        var t = !0;
                        return 'click' === n && (t = !1 !== u['ɵnov'](l, 2).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && t), t;
                    }, null, null)),
                    u['ɵdid'](2, 671744, null, 0, i.u, [
                        i.r,
                        i.a,
                        p.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    u['ɵpad'](3, 1),
                    (l()(), u['ɵeld'](4, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](5, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon-edit-1'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](6, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵted'](7, null, [
                        ' ',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ])
                ], function (l, n) {
                    var e = l(n, 3, 0, '/sales/bill/' + n.parent.context.$implicit.id);
                    l(n, 2, 0, e);
                }, function (l, n) {
                    l(n, 1, 0, u['ɵnov'](n, 2).target, u['ɵnov'](n, 2).href), l(n, 7, 0, u['ɵunv'](n, 7, 0, u['ɵnov'](n, 8).transform('SELLER.HOME.BILL')));
                });
            }
            function M(l) {
                return u['ɵvid'](0, [
                    (l()(), u['ɵeld'](0, 0, null, null, 6, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== l.component.downloadFile(l.parent.context.$implicit.sales_id) && u), u;
                    }, null, null)),
                    (l()(), u['ɵeld'](1, 0, null, null, 5, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](2, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](3, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon-download'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](4, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵted'](5, null, [
                        '',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 5, 0, u['ɵunv'](n, 5, 0, u['ɵnov'](n, 6).transform('SELLER.HOME.DOWNLOADPDF')));
                });
            }
            function P(l) {
                return u['ɵvid'](0, [
                    (l()(), u['ɵeld'](0, 0, null, null, 6, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== l.component.downloadFileXML(l.parent.context.$implicit.sales_id) && u), u;
                    }, null, null)),
                    (l()(), u['ɵeld'](1, 0, null, null, 5, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](2, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](3, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon-download'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](4, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵted'](5, null, [
                        '',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 5, 0, u['ɵunv'](n, 5, 0, u['ɵnov'](n, 6).transform('SELLER.HOME.DOWNLOADXML')));
                });
            }
            function F(l) {
                return u['ɵvid'](0, [
                    (l()(), u['ɵeld'](0, 0, null, null, 35, 'tr', [], null, null, null, null, null)),
                    (l()(), u['ɵeld'](1, 0, null, null, 1, 'td', [], null, null, null, null, null)),
                    (l()(), u['ɵted'](2, null, [
                        '',
                        ''
                    ])),
                    (l()(), u['ɵeld'](3, 0, null, null, 1, 'td', [], null, null, null, null, null)),
                    (l()(), u['ɵted'](4, null, [
                        '',
                        ''
                    ])),
                    (l()(), u['ɵeld'](5, 0, null, null, 1, 'td', [], null, null, null, null, null)),
                    (l()(), u['ɵted'](6, null, [
                        '',
                        ''
                    ])),
                    (l()(), u['ɵeld'](7, 0, null, null, 2, 'td', [], null, null, null, null, null)),
                    (l()(), u['ɵted'](8, null, [
                        '',
                        ''
                    ])),
                    u['ɵppd'](9, 1),
                    (l()(), u['ɵeld'](10, 0, null, null, 1, 'td', [], null, null, null, null, null)),
                    (l()(), u['ɵted'](11, null, [
                        '',
                        ''
                    ])),
                    (l()(), u['ɵeld'](12, 0, null, null, 1, 'td', [], null, null, null, null, null)),
                    (l()(), u['ɵted'](13, null, [
                        '',
                        ''
                    ])),
                    (l()(), u['ɵeld'](14, 0, null, null, 1, 'td', [], null, null, null, null, null)),
                    (l()(), u['ɵted'](15, null, [
                        '',
                        ''
                    ])),
                    (l()(), u['ɵeld'](16, 0, null, null, 19, 'td', [], null, null, null, null, null)),
                    (l()(), u['ɵeld'](17, 0, null, null, 18, 'div', [[
                            'class',
                            'card-toolbar'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](18, 0, null, null, 17, 'div', [
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
                    u['ɵdid'](19, 1720320, null, 2, v.v, [
                        u.ChangeDetectorRef,
                        v.x,
                        p.DOCUMENT,
                        u.NgZone,
                        u.ElementRef,
                        u.Renderer2,
                        [
                            2,
                            v.K
                        ]
                    ], {
                        placement: [
                            0,
                            'placement'
                        ]
                    }, null),
                    u['ɵqud'](603979776, 1, { _menu: 0 }),
                    u['ɵqud'](603979776, 2, { _anchor: 0 }),
                    (l()(), u['ɵeld'](22, 0, null, null, 3, 'a', [
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
                        var t = !0;
                        return 'click' === n && (t = !1 !== u['ɵnov'](l, 23).dropdown.toggle() && t), 'keydown.ArrowUp' === n && (t = !1 !== u['ɵnov'](l, 23).dropdown.onKeyDown(e) && t), 'keydown.ArrowDown' === n && (t = !1 !== u['ɵnov'](l, 23).dropdown.onKeyDown(e) && t), 'keydown.Home' === n && (t = !1 !== u['ɵnov'](l, 23).dropdown.onKeyDown(e) && t), 'keydown.End' === n && (t = !1 !== u['ɵnov'](l, 23).dropdown.onKeyDown(e) && t), 'keydown.Tab' === n && (t = !1 !== u['ɵnov'](l, 23).dropdown.onKeyDown(e) && t), 'keydown.Shift.Tab' === n && (t = !1 !== u['ɵnov'](l, 23).dropdown.onKeyDown(e) && t), t;
                    }, null, null)),
                    u['ɵdid'](23, 16384, null, 0, v.A, [
                        v.v,
                        u.ElementRef
                    ], null, null),
                    u['ɵprd'](2048, [[
                            2,
                            4
                        ]], v.w, null, [v.A]),
                    (l()(), u['ɵeld'](25, 0, null, null, 0, 'i', [[
                            'class',
                            'ki ki-bold-more-hor'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](26, 0, null, null, 9, 'div', [
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
                        var t = !0;
                        return 'keydown.ArrowUp' === n && (t = !1 !== u['ɵnov'](l, 27).dropdown.onKeyDown(e) && t), 'keydown.ArrowDown' === n && (t = !1 !== u['ɵnov'](l, 27).dropdown.onKeyDown(e) && t), 'keydown.Home' === n && (t = !1 !== u['ɵnov'](l, 27).dropdown.onKeyDown(e) && t), 'keydown.End' === n && (t = !1 !== u['ɵnov'](l, 27).dropdown.onKeyDown(e) && t), 'keydown.Enter' === n && (t = !1 !== u['ɵnov'](l, 27).dropdown.onKeyDown(e) && t), 'keydown.Space' === n && (t = !1 !== u['ɵnov'](l, 27).dropdown.onKeyDown(e) && t), 'keydown.Tab' === n && (t = !1 !== u['ɵnov'](l, 27).dropdown.onKeyDown(e) && t), 'keydown.Shift.Tab' === n && (t = !1 !== u['ɵnov'](l, 27).dropdown.onKeyDown(e) && t), t;
                    }, null, null)),
                    u['ɵdid'](27, 16384, [[
                            1,
                            4
                        ]], 1, v.y, [
                        v.v,
                        u.ElementRef
                    ], null, null),
                    u['ɵqud'](603979776, 3, { menuItems: 1 }),
                    (l()(), u['ɵeld'](29, 0, null, null, 6, 'ul', [[
                            'class',
                            'navi navi-hover py-5'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵand'](16777216, null, null, 1, null, N)),
                    u['ɵdid'](31, 16384, null, 0, p.NgIf, [
                        u.ViewContainerRef,
                        u.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), u['ɵand'](16777216, null, null, 1, null, M)),
                    u['ɵdid'](33, 16384, null, 0, p.NgIf, [
                        u.ViewContainerRef,
                        u.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), u['ɵand'](16777216, null, null, 1, null, P)),
                    u['ɵdid'](35, 16384, null, 0, p.NgIf, [
                        u.ViewContainerRef,
                        u.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null)
                ], function (l, n) {
                    l(n, 19, 0, 'bottom-right'), l(n, 31, 0, !n.context.$implicit.isInvoice), l(n, 33, 0, n.context.$implicit.isInvoice && '' != n.context.$implicit.sales_id), l(n, 35, 0, n.context.$implicit.isInvoice && '' != n.context.$implicit.sales_id);
                }, function (l, n) {
                    l(n, 2, 0, n.context.$implicit.clientName), l(n, 4, 0, n.context.$implicit.productName), l(n, 6, 0, n.context.$implicit.quantity);
                    var e = u['ɵunv'](n, 8, 0, l(n, 9, 0, u['ɵnov'](n.parent, 0), n.context.$implicit.amount));
                    l(n, 8, 0, e), l(n, 11, 0, n.context.$implicit.salesDate), l(n, 13, 0, n.context.$implicit.salesManName), l(n, 15, 0, n.context.$implicit.paymentType), l(n, 18, 0, u['ɵnov'](n, 19).isOpen()), l(n, 22, 0, u['ɵnov'](n, 23).dropdown.isOpen()), l(n, 26, 0, !0, u['ɵnov'](n, 27).dropdown.isOpen(), u['ɵnov'](n, 27).placement);
                });
            }
            function H(l) {
                return u['ɵvid'](0, [
                    u['ɵpid'](0, p.CurrencyPipe, [
                        u.LOCALE_ID,
                        u.DEFAULT_CURRENCY_CODE
                    ]),
                    (l()(), u['ɵeld'](1, 0, null, null, 169, 'ce-layout-dashboard', [], null, null, null, f.b, f.a)),
                    u['ɵdid'](2, 638976, null, 0, m.a, [u.ChangeDetectorRef], {
                        isLoading: [
                            0,
                            'isLoading'
                        ]
                    }, null),
                    (l()(), u['ɵeld'](3, 0, null, 0, 167, 'div', [
                        [
                            'class',
                            'card card-custom gutter-b'
                        ],
                        [
                            'content',
                            ''
                        ]
                    ], null, null, null, null, null)),
                    (l()(), u['ɵeld'](4, 0, null, null, 8, 'div', [[
                            'class',
                            'card-header'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](5, 0, null, null, 3, 'div', [[
                            'class',
                            'card-title'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](6, 0, null, null, 2, 'h3', [[
                            'class',
                            'card-label'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵted'](7, null, [
                        ' ',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](9, 0, null, null, 3, 'div', [[
                            'class',
                            'card-toolbar'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](10, 0, null, null, 2, 'a', [
                        [
                            'class',
                            'btn btn-light-success'
                        ],
                        [
                            'style',
                            'color:#fff !important;'
                        ]
                    ], null, [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== l.component.exportexcel() && u), u;
                    }, null, null)),
                    (l()(), u['ɵted'](11, null, [
                        ' ',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](13, 0, null, null, 157, 'div', [[
                            'class',
                            'card-body'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](14, 0, null, null, 122, 'div', [[
                            'class',
                            'form form-label-right'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](15, 0, null, null, 121, 'div', [[
                            'class',
                            'form-group row'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](16, 0, null, null, 16, 'div', [[
                            'class',
                            'col-lg-2'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](17, 0, null, null, 13, 'div', [[
                            'class',
                            'input-group'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](18, 16777216, null, null, 9, 'input', [
                        [
                            'class',
                            'form-control'
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
                        var t = !0, o = l.component;
                        return 'input' === n && (t = !1 !== u['ɵnov'](l, 20)._handleInput(e.target.value) && t), 'blur' === n && (t = !1 !== u['ɵnov'](l, 20).onTouched() && t), 'compositionstart' === n && (t = !1 !== u['ɵnov'](l, 20)._compositionStart() && t), 'compositionend' === n && (t = !1 !== u['ɵnov'](l, 20)._compositionEnd(e.target.value) && t), 'input' === n && (t = !1 !== u['ɵnov'](l, 21).manualDateChange(e.target.value) && t), 'change' === n && (t = !1 !== u['ɵnov'](l, 21).manualDateChange(e.target.value, !0) && t), 'focus' === n && (t = !1 !== u['ɵnov'](l, 21).onFocus() && t), 'blur' === n && (t = !1 !== u['ɵnov'](l, 21).onBlur() && t), 'ngModelChange' === n && (t = !1 !== (o.filter.initialDate = e) && t), t;
                    }, null, null)),
                    u['ɵprd'](6144, null, v.q, null, [v.D]),
                    u['ɵdid'](20, 16384, null, 0, h.e, [
                        u.Renderer2,
                        u.ElementRef,
                        [
                            2,
                            h.b
                        ]
                    ], null, null),
                    u['ɵdid'](21, 671744, [[
                            'd22',
                            4
                        ]], 0, v.C, [
                        v.o,
                        u.ElementRef,
                        u.ViewContainerRef,
                        u.Renderer2,
                        u.ComponentFactoryResolver,
                        u.NgZone,
                        v.h,
                        v.n,
                        p.DOCUMENT,
                        u.ChangeDetectorRef,
                        v.D
                    ], null, null),
                    u['ɵprd'](1024, null, h.n, function (l) {
                        return [l];
                    }, [v.C]),
                    u['ɵprd'](1024, null, h.o, function (l, n) {
                        return [
                            l,
                            n
                        ];
                    }, [
                        h.e,
                        v.C
                    ]),
                    u['ɵdid'](24, 671744, null, 0, h.t, [
                        [
                            8,
                            null
                        ],
                        [
                            6,
                            h.n
                        ],
                        [
                            8,
                            null
                        ],
                        [
                            6,
                            h.o
                        ]
                    ], {
                        model: [
                            0,
                            'model'
                        ]
                    }, { update: 'ngModelChange' }),
                    u['ɵprd'](2048, null, h.p, null, [h.t]),
                    u['ɵdid'](26, 16384, null, 0, h.q, [[
                            4,
                            h.p
                        ]], null, null),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](28, 0, null, null, 2, 'div', [[
                            'class',
                            'input-group-append'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](29, 0, null, null, 1, 'button', [
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
                        return 'click' === n && (t = !1 !== u['ɵnov'](l, 21).toggle() && t), t;
                    }, null, null)),
                    (l()(), u['ɵeld'](30, 0, null, null, 0, 'i', [
                        [
                            'class',
                            'fa fa-calendar'
                        ],
                        [
                            'style',
                            'color:#fff !important;'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), u['ɵeld'](31, 0, null, null, 1, 'small', [[
                            'class',
                            'form-text text-muted'
                        ]], [[
                            8,
                            'innerHTML',
                            1
                        ]], null, null, null, null)),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](33, 0, null, null, 14, 'div', [[
                            'class',
                            'col-lg-2'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](34, 0, null, null, 13, 'div', [[
                            'class',
                            'input-group'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](35, 16777216, null, null, 9, 'input', [
                        [
                            'class',
                            'form-control'
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
                        var t = !0, o = l.component;
                        return 'input' === n && (t = !1 !== u['ɵnov'](l, 37)._handleInput(e.target.value) && t), 'blur' === n && (t = !1 !== u['ɵnov'](l, 37).onTouched() && t), 'compositionstart' === n && (t = !1 !== u['ɵnov'](l, 37)._compositionStart() && t), 'compositionend' === n && (t = !1 !== u['ɵnov'](l, 37)._compositionEnd(e.target.value) && t), 'input' === n && (t = !1 !== u['ɵnov'](l, 38).manualDateChange(e.target.value) && t), 'change' === n && (t = !1 !== u['ɵnov'](l, 38).manualDateChange(e.target.value, !0) && t), 'focus' === n && (t = !1 !== u['ɵnov'](l, 38).onFocus() && t), 'blur' === n && (t = !1 !== u['ɵnov'](l, 38).onBlur() && t), 'ngModelChange' === n && (t = !1 !== (o.filter.finalDate = e) && t), t;
                    }, null, null)),
                    u['ɵprd'](6144, null, v.q, null, [v.D]),
                    u['ɵdid'](37, 16384, null, 0, h.e, [
                        u.Renderer2,
                        u.ElementRef,
                        [
                            2,
                            h.b
                        ]
                    ], null, null),
                    u['ɵdid'](38, 671744, [[
                            'd21',
                            4
                        ]], 0, v.C, [
                        v.o,
                        u.ElementRef,
                        u.ViewContainerRef,
                        u.Renderer2,
                        u.ComponentFactoryResolver,
                        u.NgZone,
                        v.h,
                        v.n,
                        p.DOCUMENT,
                        u.ChangeDetectorRef,
                        v.D
                    ], null, null),
                    u['ɵprd'](1024, null, h.n, function (l) {
                        return [l];
                    }, [v.C]),
                    u['ɵprd'](1024, null, h.o, function (l, n) {
                        return [
                            l,
                            n
                        ];
                    }, [
                        h.e,
                        v.C
                    ]),
                    u['ɵdid'](41, 671744, null, 0, h.t, [
                        [
                            8,
                            null
                        ],
                        [
                            6,
                            h.n
                        ],
                        [
                            8,
                            null
                        ],
                        [
                            6,
                            h.o
                        ]
                    ], {
                        model: [
                            0,
                            'model'
                        ]
                    }, { update: 'ngModelChange' }),
                    u['ɵprd'](2048, null, h.p, null, [h.t]),
                    u['ɵdid'](43, 16384, null, 0, h.q, [[
                            4,
                            h.p
                        ]], null, null),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](45, 0, null, null, 2, 'div', [[
                            'class',
                            'input-group-append'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](46, 0, null, null, 1, 'button', [
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
                        return 'click' === n && (t = !1 !== u['ɵnov'](l, 38).toggle() && t), t;
                    }, null, null)),
                    (l()(), u['ɵeld'](47, 0, null, null, 0, 'i', [
                        [
                            'class',
                            'fa fa-calendar'
                        ],
                        [
                            'style',
                            'color:#fff !important;'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), u['ɵeld'](48, 0, null, null, 35, 'div', [[
                            'class',
                            'col-lg-2'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](49, 0, null, null, 34, 'div', [[
                            'class',
                            'row'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](50, 0, null, null, 33, 'div', [[
                            'class',
                            'col-lg-12'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](51, 0, null, null, 30, 'select', [
                        [
                            'class',
                            'form-control'
                        ],
                        [
                            'placeholder',
                            'Filtrar por Producto'
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
                            'ngModelChange'
                        ],
                        [
                            null,
                            'change'
                        ],
                        [
                            null,
                            'blur'
                        ]
                    ], function (l, n, e) {
                        var t = !0, o = l.component;
                        return 'change' === n && (t = !1 !== u['ɵnov'](l, 52).onChange(e.target.value) && t), 'blur' === n && (t = !1 !== u['ɵnov'](l, 52).onTouched() && t), 'ngModelChange' === n && (t = !1 !== (o.filter.product_id = e) && t), t;
                    }, null, null)),
                    u['ɵdid'](52, 16384, null, 0, h.w, [
                        u.Renderer2,
                        u.ElementRef
                    ], null, null),
                    u['ɵprd'](1024, null, h.o, function (l) {
                        return [l];
                    }, [h.w]),
                    u['ɵdid'](54, 671744, null, 0, h.t, [
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
                            h.o
                        ]
                    ], {
                        model: [
                            0,
                            'model'
                        ]
                    }, { update: 'ngModelChange' }),
                    u['ɵprd'](2048, null, h.p, null, [h.t]),
                    u['ɵdid'](56, 16384, null, 0, h.q, [[
                            4,
                            h.p
                        ]], null, null),
                    (l()(), u['ɵeld'](57, 0, null, null, 4, 'option', [
                        [
                            'selected',
                            ''
                        ],
                        [
                            'value',
                            '0'
                        ]
                    ], null, null, null, null, null)),
                    u['ɵdid'](58, 147456, null, 0, h.u, [
                        u.ElementRef,
                        u.Renderer2,
                        [
                            2,
                            h.w
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    u['ɵdid'](59, 147456, null, 0, h.B, [
                        u.ElementRef,
                        u.Renderer2,
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
                    (l()(), u['ɵted'](60, null, [
                        '',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](62, 0, null, null, 4, 'option', [[
                            'value',
                            '1'
                        ]], null, null, null, null, null)),
                    u['ɵdid'](63, 147456, null, 0, h.u, [
                        u.ElementRef,
                        u.Renderer2,
                        [
                            2,
                            h.w
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    u['ɵdid'](64, 147456, null, 0, h.B, [
                        u.ElementRef,
                        u.Renderer2,
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
                    (l()(), u['ɵted'](65, null, [
                        '',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](67, 0, null, null, 4, 'option', [[
                            'value',
                            '2'
                        ]], null, null, null, null, null)),
                    u['ɵdid'](68, 147456, null, 0, h.u, [
                        u.ElementRef,
                        u.Renderer2,
                        [
                            2,
                            h.w
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    u['ɵdid'](69, 147456, null, 0, h.B, [
                        u.ElementRef,
                        u.Renderer2,
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
                    (l()(), u['ɵted'](70, null, [
                        '',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](72, 0, null, null, 4, 'option', [[
                            'value',
                            '3'
                        ]], null, null, null, null, null)),
                    u['ɵdid'](73, 147456, null, 0, h.u, [
                        u.ElementRef,
                        u.Renderer2,
                        [
                            2,
                            h.w
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    u['ɵdid'](74, 147456, null, 0, h.B, [
                        u.ElementRef,
                        u.Renderer2,
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
                    (l()(), u['ɵted'](75, null, [
                        '',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](77, 0, null, null, 4, 'option', [[
                            'value',
                            '4'
                        ]], null, null, null, null, null)),
                    u['ɵdid'](78, 147456, null, 0, h.u, [
                        u.ElementRef,
                        u.Renderer2,
                        [
                            2,
                            h.w
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    u['ɵdid'](79, 147456, null, 0, h.B, [
                        u.ElementRef,
                        u.Renderer2,
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
                    (l()(), u['ɵted'](80, null, [
                        '',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](82, 0, null, null, 1, 'small', [[
                            'class',
                            'form-text text-muted'
                        ]], [[
                            8,
                            'innerHTML',
                            1
                        ]], null, null, null, null)),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](84, 0, null, null, 25, 'div', [[
                            'class',
                            'col-lg-2'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](85, 0, null, null, 24, 'div', [[
                            'class',
                            'row'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](86, 0, null, null, 23, 'div', [[
                            'class',
                            'col-lg-12'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](87, 0, null, null, 20, 'select', [
                        [
                            'class',
                            'form-control'
                        ],
                        [
                            'placeholder',
                            'Filtrar por Tipo de Pago'
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
                            'ngModelChange'
                        ],
                        [
                            null,
                            'change'
                        ],
                        [
                            null,
                            'blur'
                        ]
                    ], function (l, n, e) {
                        var t = !0, o = l.component;
                        return 'change' === n && (t = !1 !== u['ɵnov'](l, 88).onChange(e.target.value) && t), 'blur' === n && (t = !1 !== u['ɵnov'](l, 88).onTouched() && t), 'ngModelChange' === n && (t = !1 !== (o.filter.payment_type = e) && t), t;
                    }, null, null)),
                    u['ɵdid'](88, 16384, null, 0, h.w, [
                        u.Renderer2,
                        u.ElementRef
                    ], null, null),
                    u['ɵprd'](1024, null, h.o, function (l) {
                        return [l];
                    }, [h.w]),
                    u['ɵdid'](90, 671744, null, 0, h.t, [
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
                            h.o
                        ]
                    ], {
                        model: [
                            0,
                            'model'
                        ]
                    }, { update: 'ngModelChange' }),
                    u['ɵprd'](2048, null, h.p, null, [h.t]),
                    u['ɵdid'](92, 16384, null, 0, h.q, [[
                            4,
                            h.p
                        ]], null, null),
                    (l()(), u['ɵeld'](93, 0, null, null, 4, 'option', [
                        [
                            'selected',
                            ''
                        ],
                        [
                            'value',
                            '0'
                        ]
                    ], null, null, null, null, null)),
                    u['ɵdid'](94, 147456, null, 0, h.u, [
                        u.ElementRef,
                        u.Renderer2,
                        [
                            2,
                            h.w
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    u['ɵdid'](95, 147456, null, 0, h.B, [
                        u.ElementRef,
                        u.Renderer2,
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
                    (l()(), u['ɵted'](96, null, [
                        '',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](98, 0, null, null, 4, 'option', [[
                            'value',
                            '1'
                        ]], null, null, null, null, null)),
                    u['ɵdid'](99, 147456, null, 0, h.u, [
                        u.ElementRef,
                        u.Renderer2,
                        [
                            2,
                            h.w
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    u['ɵdid'](100, 147456, null, 0, h.B, [
                        u.ElementRef,
                        u.Renderer2,
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
                    (l()(), u['ɵted'](101, null, [
                        '',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](103, 0, null, null, 4, 'option', [[
                            'value',
                            '2'
                        ]], null, null, null, null, null)),
                    u['ɵdid'](104, 147456, null, 0, h.u, [
                        u.ElementRef,
                        u.Renderer2,
                        [
                            2,
                            h.w
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    u['ɵdid'](105, 147456, null, 0, h.B, [
                        u.ElementRef,
                        u.Renderer2,
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
                    (l()(), u['ɵted'](106, null, [
                        '',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](108, 0, null, null, 1, 'small', [[
                            'class',
                            'form-text text-muted'
                        ]], [[
                            8,
                            'innerHTML',
                            1
                        ]], null, null, null, null)),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](110, 0, null, null, 10, 'div', [[
                            'class',
                            'col-lg-2'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](111, 0, null, null, 9, 'div', [[
                            'class',
                            'row'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](112, 0, null, null, 8, 'div', [[
                            'class',
                            'col-lg-12'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](113, 0, null, null, 5, 'input', [
                        [
                            'class',
                            'form-control'
                        ],
                        [
                            'placeholder',
                            'Vendedor'
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
                        ]
                    ], function (l, n, e) {
                        var t = !0, o = l.component;
                        return 'input' === n && (t = !1 !== u['ɵnov'](l, 114)._handleInput(e.target.value) && t), 'blur' === n && (t = !1 !== u['ɵnov'](l, 114).onTouched() && t), 'compositionstart' === n && (t = !1 !== u['ɵnov'](l, 114)._compositionStart() && t), 'compositionend' === n && (t = !1 !== u['ɵnov'](l, 114)._compositionEnd(e.target.value) && t), 'ngModelChange' === n && (t = !1 !== (o.filter.seller = e) && t), t;
                    }, null, null)),
                    u['ɵdid'](114, 16384, null, 0, h.e, [
                        u.Renderer2,
                        u.ElementRef,
                        [
                            2,
                            h.b
                        ]
                    ], null, null),
                    u['ɵprd'](1024, null, h.o, function (l) {
                        return [l];
                    }, [h.e]),
                    u['ɵdid'](116, 671744, null, 0, h.t, [
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
                            h.o
                        ]
                    ], {
                        model: [
                            0,
                            'model'
                        ]
                    }, { update: 'ngModelChange' }),
                    u['ɵprd'](2048, null, h.p, null, [h.t]),
                    u['ɵdid'](118, 16384, null, 0, h.q, [[
                            4,
                            h.p
                        ]], null, null),
                    (l()(), u['ɵeld'](119, 0, null, null, 1, 'small', [[
                            'class',
                            'form-text text-muted'
                        ]], [[
                            8,
                            'innerHTML',
                            1
                        ]], null, null, null, null)),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](121, 0, null, null, 10, 'div', [[
                            'class',
                            'col-lg-2'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](122, 0, null, null, 9, 'div', [[
                            'class',
                            'row'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](123, 0, null, null, 8, 'div', [[
                            'class',
                            'col-lg-12'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](124, 0, null, null, 5, 'input', [
                        [
                            'class',
                            'form-control'
                        ],
                        [
                            'placeholder',
                            'Cliente'
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
                        ]
                    ], function (l, n, e) {
                        var t = !0, o = l.component;
                        return 'input' === n && (t = !1 !== u['ɵnov'](l, 125)._handleInput(e.target.value) && t), 'blur' === n && (t = !1 !== u['ɵnov'](l, 125).onTouched() && t), 'compositionstart' === n && (t = !1 !== u['ɵnov'](l, 125)._compositionStart() && t), 'compositionend' === n && (t = !1 !== u['ɵnov'](l, 125)._compositionEnd(e.target.value) && t), 'ngModelChange' === n && (t = !1 !== (o.filter.clientName = e) && t), t;
                    }, null, null)),
                    u['ɵdid'](125, 16384, null, 0, h.e, [
                        u.Renderer2,
                        u.ElementRef,
                        [
                            2,
                            h.b
                        ]
                    ], null, null),
                    u['ɵprd'](1024, null, h.o, function (l) {
                        return [l];
                    }, [h.e]),
                    u['ɵdid'](127, 671744, null, 0, h.t, [
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
                            h.o
                        ]
                    ], {
                        model: [
                            0,
                            'model'
                        ]
                    }, { update: 'ngModelChange' }),
                    u['ɵprd'](2048, null, h.p, null, [h.t]),
                    u['ɵdid'](129, 16384, null, 0, h.q, [[
                            4,
                            h.p
                        ]], null, null),
                    (l()(), u['ɵeld'](130, 0, null, null, 1, 'small', [[
                            'class',
                            'form-text text-muted'
                        ]], [[
                            8,
                            'innerHTML',
                            1
                        ]], null, null, null, null)),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](132, 0, null, null, 4, 'div', [[
                            'class',
                            'col-lg-2'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](133, 0, null, null, 3, 'button', [
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
                        return 'click' === n && (u = !1 !== l.component.searchCriteria() && u), u;
                    }, null, null)),
                    (l()(), u['ɵeld'](134, 0, null, null, 0, 'i', [
                        [
                            'class',
                            'fa fa-search'
                        ],
                        [
                            'style',
                            'color:#fff !important;'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), u['ɵeld'](135, 0, null, null, 1, 'span', [[
                            'style',
                            'color:#fff !important;'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵted'](-1, null, ['Buscar'])),
                    (l()(), u['ɵeld'](137, 0, null, null, 31, 'div', [[
                            'class',
                            'table-responsive angular-bootstrap-table'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](138, 0, null, null, 30, 'table', [
                        [
                            'class',
                            'table table-head-custom table-vertical-center overflow-inherit borderTable'
                        ],
                        [
                            'id',
                            'data_costumer'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), u['ɵeld'](139, 0, null, null, 25, 'thead', [[
                            'class',
                            'bg-table'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](140, 0, null, null, 24, 'tr', [], null, null, null, null, null)),
                    (l()(), u['ɵeld'](141, 0, null, null, 2, 'th', [
                        [
                            'style',
                            'color:#ffffff;'
                        ],
                        [
                            'width',
                            '25%'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), u['ɵted'](142, null, [
                        ' ',
                        ' '
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](144, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), u['ɵted'](145, null, [
                        ' ',
                        ' '
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](147, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), u['ɵted'](148, null, [
                        ' ',
                        ' '
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](150, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), u['ɵted'](151, null, [
                        ' ',
                        ' '
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](153, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), u['ɵted'](154, null, [
                        ' ',
                        ' '
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](156, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), u['ɵted'](157, null, [
                        ' ',
                        ' '
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](159, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), u['ɵted'](160, null, [
                        ' ',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](162, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), u['ɵted'](163, null, [
                        ' ',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](165, 0, null, null, 3, 'tbody', [], null, null, null, null, null)),
                    (l()(), u['ɵand'](16777216, null, null, 2, null, F)),
                    u['ɵdid'](167, 278528, null, 0, p.NgForOf, [
                        u.ViewContainerRef,
                        u.TemplateRef,
                        u.IterableDiffers
                    ], {
                        ngForOf: [
                            0,
                            'ngForOf'
                        ]
                    }, null),
                    u['ɵpid'](131072, p.AsyncPipe, [u.ChangeDetectorRef]),
                    (l()(), u['ɵeld'](169, 0, null, null, 1, 'app-paginator', [[
                            'class',
                            'd-flex justify-content-between align-items-center flex-wrap'
                        ]], null, [[
                            null,
                            'paginate'
                        ]], function (l, n, e) {
                        var u = !0;
                        return 'paginate' === n && (u = !1 !== l.component.paginate(e) && u), u;
                    }, C.b, C.a)),
                    u['ɵdid'](170, 114688, null, 0, E.a, [], {
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
                    l(n, 2, 0, e.loadingPage), l(n, 24, 0, e.filter.initialDate), l(n, 41, 0, e.filter.finalDate), l(n, 54, 0, e.filter.product_id), l(n, 58, 0, '0'), l(n, 59, 0, '0'), l(n, 63, 0, '1'), l(n, 64, 0, '1'), l(n, 68, 0, '2'), l(n, 69, 0, '2'), l(n, 73, 0, '3'), l(n, 74, 0, '3'), l(n, 78, 0, '4'), l(n, 79, 0, '4'), l(n, 90, 0, e.filter.payment_type), l(n, 94, 0, '0'), l(n, 95, 0, '0'), l(n, 99, 0, '1'), l(n, 100, 0, '1'), l(n, 104, 0, '2'), l(n, 105, 0, '2'), l(n, 116, 0, e.filter.seller), l(n, 127, 0, e.filter.clientName), l(n, 167, 0, u['ɵunv'](n, 167, 0, u['ɵnov'](n, 168).transform(e.salesService.items$))), l(n, 170, 0, e.paginator, e.isLoading);
                }, function (l, n) {
                    l(n, 7, 0, u['ɵunv'](n, 7, 0, u['ɵnov'](n, 8).transform('SALES.HOME.TITLE'))), l(n, 11, 0, u['ɵunv'](n, 11, 0, u['ɵnov'](n, 12).transform('SALES.HOME.NEW_SALE'))), l(n, 18, 0, u['ɵinlineInterpolate'](1, '', u['ɵunv'](n, 18, 0, u['ɵnov'](n, 27).transform('SALES.HOME.INITIALDATE')), ''), u['ɵnov'](n, 21).disabled, u['ɵnov'](n, 26).ngClassUntouched, u['ɵnov'](n, 26).ngClassTouched, u['ɵnov'](n, 26).ngClassPristine, u['ɵnov'](n, 26).ngClassDirty, u['ɵnov'](n, 26).ngClassValid, u['ɵnov'](n, 26).ngClassInvalid, u['ɵnov'](n, 26).ngClassPending), l(n, 31, 0, u['ɵunv'](n, 31, 0, u['ɵnov'](n, 32).transform('SALES.HOME.FILTERBYRANGEDATE'))), l(n, 35, 0, u['ɵinlineInterpolate'](1, '', u['ɵunv'](n, 35, 0, u['ɵnov'](n, 44).transform('SALES.HOME.FINALDATE')), ''), u['ɵnov'](n, 38).disabled, u['ɵnov'](n, 43).ngClassUntouched, u['ɵnov'](n, 43).ngClassTouched, u['ɵnov'](n, 43).ngClassPristine, u['ɵnov'](n, 43).ngClassDirty, u['ɵnov'](n, 43).ngClassValid, u['ɵnov'](n, 43).ngClassInvalid, u['ɵnov'](n, 43).ngClassPending), l(n, 51, 0, u['ɵnov'](n, 56).ngClassUntouched, u['ɵnov'](n, 56).ngClassTouched, u['ɵnov'](n, 56).ngClassPristine, u['ɵnov'](n, 56).ngClassDirty, u['ɵnov'](n, 56).ngClassValid, u['ɵnov'](n, 56).ngClassInvalid, u['ɵnov'](n, 56).ngClassPending), l(n, 60, 0, u['ɵunv'](n, 60, 0, u['ɵnov'](n, 61).transform('SALES.HOME.ALL'))), l(n, 65, 0, u['ɵunv'](n, 65, 0, u['ɵnov'](n, 66).transform('SALES.HOME.CENTINELA'))), l(n, 70, 0, u['ɵunv'](n, 70, 0, u['ɵnov'](n, 71).transform('SALES.HOME.LITE'))), l(n, 75, 0, u['ɵunv'](n, 75, 0, u['ɵnov'](n, 76).transform('SALES.HOME.NOTI'))), l(n, 80, 0, u['ɵunv'](n, 80, 0, u['ɵnov'](n, 81).transform('SALES.HOME.WS'))), l(n, 82, 0, u['ɵunv'](n, 82, 0, u['ɵnov'](n, 83).transform('SALES.HOME.FILTERBYPRODUCT'))), l(n, 87, 0, u['ɵnov'](n, 92).ngClassUntouched, u['ɵnov'](n, 92).ngClassTouched, u['ɵnov'](n, 92).ngClassPristine, u['ɵnov'](n, 92).ngClassDirty, u['ɵnov'](n, 92).ngClassValid, u['ɵnov'](n, 92).ngClassInvalid, u['ɵnov'](n, 92).ngClassPending), l(n, 96, 0, u['ɵunv'](n, 96, 0, u['ɵnov'](n, 97).transform('SALES.HOME.ALL'))), l(n, 101, 0, u['ɵunv'](n, 101, 0, u['ɵnov'](n, 102).transform('SALES.HOME.TC'))), l(n, 106, 0, u['ɵunv'](n, 106, 0, u['ɵnov'](n, 107).transform('SALES.HOME.TRANFER'))), l(n, 108, 0, u['ɵunv'](n, 108, 0, u['ɵnov'](n, 109).transform('SALES.HOME.FILTERBYPAYMENT'))), l(n, 113, 0, u['ɵnov'](n, 118).ngClassUntouched, u['ɵnov'](n, 118).ngClassTouched, u['ɵnov'](n, 118).ngClassPristine, u['ɵnov'](n, 118).ngClassDirty, u['ɵnov'](n, 118).ngClassValid, u['ɵnov'](n, 118).ngClassInvalid, u['ɵnov'](n, 118).ngClassPending), l(n, 119, 0, u['ɵunv'](n, 119, 0, u['ɵnov'](n, 120).transform('SALES.HOME.FILTERBYSELLER'))), l(n, 124, 0, u['ɵnov'](n, 129).ngClassUntouched, u['ɵnov'](n, 129).ngClassTouched, u['ɵnov'](n, 129).ngClassPristine, u['ɵnov'](n, 129).ngClassDirty, u['ɵnov'](n, 129).ngClassValid, u['ɵnov'](n, 129).ngClassInvalid, u['ɵnov'](n, 129).ngClassPending), l(n, 130, 0, u['ɵunv'](n, 130, 0, u['ɵnov'](n, 131).transform('SALES.HOME.FILTERBYCLIENT'))), l(n, 142, 0, u['ɵunv'](n, 142, 0, u['ɵnov'](n, 143).transform('SALES.HOME.CLIENTNAME'))), l(n, 145, 0, u['ɵunv'](n, 145, 0, u['ɵnov'](n, 146).transform('SALES.HOME.PRODUCT'))), l(n, 148, 0, u['ɵunv'](n, 148, 0, u['ɵnov'](n, 149).transform('SALES.HOME.QUANTITY'))), l(n, 151, 0, u['ɵunv'](n, 151, 0, u['ɵnov'](n, 152).transform('SALES.HOME.AMOUNT'))), l(n, 154, 0, u['ɵunv'](n, 154, 0, u['ɵnov'](n, 155).transform('SALES.HOME.SALEDATE'))), l(n, 157, 0, u['ɵunv'](n, 157, 0, u['ɵnov'](n, 158).transform('SALES.HOME.SALESMAN_NAME'))), l(n, 160, 0, u['ɵunv'](n, 160, 0, u['ɵnov'](n, 161).transform('SALES.HOME.PAYMENT_TYPE'))), l(n, 163, 0, u['ɵunv'](n, 163, 0, u['ɵnov'](n, 164).transform('SALES.HOME.ACTIONS')));
                });
            }
            function B(l) {
                return u['ɵvid'](0, [
                    (l()(), u['ɵeld'](0, 0, null, null, 3, 'ng-component', [], null, null, null, H, x)),
                    u['ɵprd'](4608, null, v.n, R.a, []),
                    u['ɵprd'](4608, null, v.o, R.b, []),
                    u['ɵdid'](3, 245760, null, 0, I, [
                        h.f,
                        v.E,
                        A,
                        _.a,
                        O.a,
                        u.ChangeDetectorRef
                    ], null, null)
                ], function (l, n) {
                    l(n, 3, 0);
                }, null);
            }
            var U = u['ɵccf']('ng-component', I, B, {}, {}, []), V = e('LRne'), j = e('eIep'), K = e('JIr8');
            class G {
                constructor(l, n, e, u, t, o, i, a, d) {
                    this.fb = l, this.detector = n, this.notificationService = e, this.billingService = u, this.router = t, this.route = o, this.traslateService = i, this.changeDetectorRef = a, this.datePipe = d, this.view = !1, this.Regimen = [], this.USECFDI = [], this.documents = [], this.errorMessage = '', this.titulo = '', this.isLoadingComponent = !1, this.tabs = { BASIC_TAB: 0 }, this.EMPTY_SELLER = {
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
                    return Object(b.a)(this, void 0, void 0, function* () {
                        this.Regimen = yield this.billingService.getRegime().toPromise(), this.USECFDI = yield this.billingService.getUseCFDI().toPromise();
                        const l = this.route.paramMap.pipe(Object(j.a)(l => (this.id = l.get('id'), this.id ? this.billingService.getBill(this.id) : Object(V.a)(this.EMPTY_SELLER))), Object(K.a)(l => (this.errorMessage = l, Object(V.a)(void 0)))).subscribe(l => {
                            l || this.router.navigate(['/sales'], { relativeTo: this.route }), this.billing = l, this.billing.salesId = this.id, this.previous = Object.assign({}, l), this.loadForm();
                        });
                        this.subscriptions.push(l);
                    });
                }
                loadForm() {
                    this.billing ? (this.titulo = 'La Factura se ha actualizado con éxito', this.formGroup = this.fb.group({
                        name: [
                            this.billing.name,
                            h.x.compose([
                                h.x.required,
                                h.x.minLength(3),
                                h.x.maxLength(130)
                            ])
                        ],
                        cfdi: [
                            this.billing.cfdi,
                            h.x.compose([h.x.required])
                        ],
                        regime: [
                            this.billing.regime,
                            h.x.compose([h.x.required])
                        ],
                        rfc: [
                            this.billing.rfc,
                            h.x.compose([h.x.required])
                        ],
                        emaicc: [
                            this.billing.emaicc,
                            h.x.compose([h.x.email])
                        ],
                        cp: [
                            this.billing.cp,
                            h.x.compose([
                                h.x.required,
                                h.x.minLength(5),
                                h.x.maxLength(5)
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
                    return Object(b.a)(this, void 0, void 0, function* () {
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
            var q = e('wOTk'), $ = u['ɵcrt']({
                    encapsulation: 0,
                    styles: [['']],
                    data: {}
                });
            function Y(l) {
                return u['ɵvid'](0, [
                    (l()(), u['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), u['ɵeld'](1, 0, null, null, 1, 'div', [[
                            'class',
                            'progress progress-modal'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](2, 0, null, null, 0, 'div', [
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
            function X(l) {
                return u['ɵvid'](0, [
                    (l()(), u['ɵeld'](0, 0, null, null, 1, 'span', [], null, null, null, null, null)),
                    (l()(), u['ɵted'](1, null, [
                        '\'',
                        '\''
                    ]))
                ], null, function (l, n) {
                    l(n, 1, 0, n.component.billing.invoice);
                });
            }
            function z(l) {
                return u['ɵvid'](0, [
                    (l()(), u['ɵeld'](0, 0, null, null, 4, null, null, null, null, null, null, null)),
                    (l()(), u['ɵted'](1, null, [
                        ' ',
                        ' '
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵand'](16777216, null, null, 1, null, X)),
                    u['ɵdid'](4, 16384, null, 0, p.NgIf, [
                        u.ViewContainerRef,
                        u.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), u['ɵand'](0, null, null, 0))
                ], function (l, n) {
                    var e = n.component;
                    l(n, 4, 0, e.billing && e.billing.invoice);
                }, function (l, n) {
                    l(n, 1, 0, u['ɵunv'](n, 1, 0, u['ɵnov'](n, 2).transform('SELLER.BILL.NEW')));
                });
            }
            function W(l) {
                return u['ɵvid'](0, [
                    (l()(), u['ɵeld'](0, 0, null, null, 5, 'div', [[
                            'class',
                            'feedback'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵted'](1, null, [
                        '',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](3, 0, null, null, 2, 'b', [], null, null, null, null, null)),
                    (l()(), u['ɵted'](4, null, [
                        ' ',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, u['ɵunv'](n, 1, 0, u['ɵnov'](n, 2).transform('GENERAL.PLEASE_ENTER'))), l(n, 4, 0, u['ɵunv'](n, 4, 0, u['ɵnov'](n, 5).transform('SELLER.BILL.NAME_TOUCHED')));
                });
            }
            function J(l) {
                return u['ɵvid'](0, [
                    (l()(), u['ɵeld'](0, 0, null, null, 3, 'div', [[
                            'class',
                            'valid-feedback'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵted'](1, null, [
                        '',
                        ' ',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, u['ɵunv'](n, 1, 0, u['ɵnov'](n, 2).transform('SELLER.BILL.NAME_TOUCHED')), u['ɵunv'](n, 1, 1, u['ɵnov'](n, 3).transform('GENERAL.CORRECTFIELD')));
                });
            }
            function Q(l) {
                return u['ɵvid'](0, [
                    (l()(), u['ɵeld'](0, 0, null, null, 3, 'div', [[
                            'class',
                            'invalid-feedback'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵted'](1, null, [
                        '',
                        ' ',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, u['ɵunv'](n, 1, 0, u['ɵnov'](n, 2).transform('SELLER.BILL.NAME_TOUCHED')), u['ɵunv'](n, 1, 1, u['ɵnov'](n, 3).transform('GENERAL.REQUIRED')));
                });
            }
            function Z(l) {
                return u['ɵvid'](0, [
                    (l()(), u['ɵeld'](0, 0, null, null, 5, 'div', [[
                            'class',
                            'feedback'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵted'](1, null, [
                        '',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](3, 0, null, null, 2, 'b', [], null, null, null, null, null)),
                    (l()(), u['ɵted'](4, null, [
                        ' ',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, u['ɵunv'](n, 1, 0, u['ɵnov'](n, 2).transform('GENERAL.PLEASE_ENTER'))), l(n, 4, 0, u['ɵunv'](n, 4, 0, u['ɵnov'](n, 5).transform('SELLER.CREATE.RFC_TOUCHED')));
                });
            }
            function ll(l) {
                return u['ɵvid'](0, [
                    (l()(), u['ɵeld'](0, 0, null, null, 3, 'div', [[
                            'class',
                            'valid-feedback'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵted'](1, null, [
                        '',
                        ' ',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, u['ɵunv'](n, 1, 0, u['ɵnov'](n, 2).transform('SELLER.CREATE.RFC_TOUCHED')), u['ɵunv'](n, 1, 1, u['ɵnov'](n, 3).transform('GENERAL.CORRECTFIELD')));
                });
            }
            function nl(l) {
                return u['ɵvid'](0, [
                    (l()(), u['ɵeld'](0, 0, null, null, 3, 'div', [[
                            'class',
                            'invalid-feedback'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵted'](1, null, [
                        '',
                        ' ',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, u['ɵunv'](n, 1, 0, u['ɵnov'](n, 2).transform('SELLER.CREATE.RFC_TOUCHED')), u['ɵunv'](n, 1, 1, u['ɵnov'](n, 3).transform('GENERAL.REQUIRED')));
                });
            }
            function el(l) {
                return u['ɵvid'](0, [
                    (l()(), u['ɵeld'](0, 0, null, null, 3, 'option', [], null, null, null, null, null)),
                    u['ɵdid'](1, 147456, null, 0, h.u, [
                        u.ElementRef,
                        u.Renderer2,
                        [
                            2,
                            h.w
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    u['ɵdid'](2, 147456, null, 0, h.B, [
                        u.ElementRef,
                        u.Renderer2,
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
                    (l()(), u['ɵted'](3, null, [
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
            function ul(l) {
                return u['ɵvid'](0, [
                    (l()(), u['ɵeld'](0, 0, null, null, 3, 'option', [], null, null, null, null, null)),
                    u['ɵdid'](1, 147456, null, 0, h.u, [
                        u.ElementRef,
                        u.Renderer2,
                        [
                            2,
                            h.w
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    u['ɵdid'](2, 147456, null, 0, h.B, [
                        u.ElementRef,
                        u.Renderer2,
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
                    (l()(), u['ɵted'](3, null, [
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
            function tl(l) {
                return u['ɵvid'](0, [
                    (l()(), u['ɵeld'](0, 0, null, null, 5, 'div', [[
                            'class',
                            'feedback'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵted'](1, null, [
                        '',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](3, 0, null, null, 2, 'b', [], null, null, null, null, null)),
                    (l()(), u['ɵted'](4, null, [
                        ' ',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, u['ɵunv'](n, 1, 0, u['ɵnov'](n, 2).transform('GENERAL.PLEASE_ENTER'))), l(n, 4, 0, u['ɵunv'](n, 4, 0, u['ɵnov'](n, 5).transform('SELLER.BILL.CP')));
                });
            }
            function ol(l) {
                return u['ɵvid'](0, [
                    (l()(), u['ɵeld'](0, 0, null, null, 3, 'div', [[
                            'class',
                            'valid-feedback'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵted'](1, null, [
                        '',
                        ' ',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, u['ɵunv'](n, 1, 0, u['ɵnov'](n, 2).transform('SELLER.BILL.CP')), u['ɵunv'](n, 1, 1, u['ɵnov'](n, 3).transform('GENERAL.CORRECTFIELD')));
                });
            }
            function il(l) {
                return u['ɵvid'](0, [
                    (l()(), u['ɵeld'](0, 0, null, null, 3, 'div', [[
                            'class',
                            'invalid-feedback'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵted'](1, null, [
                        '',
                        ' ',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, u['ɵunv'](n, 1, 0, u['ɵnov'](n, 2).transform('SELLER.BILL.CP')), u['ɵunv'](n, 1, 1, u['ɵnov'](n, 3).transform('GENERAL.REQUIRED')));
                });
            }
            function al(l) {
                return u['ɵvid'](0, [
                    (l()(), u['ɵeld'](0, 0, null, null, 5, 'div', [[
                            'class',
                            'feedback'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵted'](1, null, [
                        '',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](3, 0, null, null, 2, 'b', [], null, null, null, null, null)),
                    (l()(), u['ɵted'](4, null, [
                        ' ',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, u['ɵunv'](n, 1, 0, u['ɵnov'](n, 2).transform('GENERAL.PLEASE_ENTER'))), l(n, 4, 0, u['ɵunv'](n, 4, 0, u['ɵnov'](n, 5).transform('SELLER.BILL.EMAIL_TOUCHED')));
                });
            }
            function dl(l) {
                return u['ɵvid'](0, [
                    (l()(), u['ɵeld'](0, 0, null, null, 3, 'div', [[
                            'class',
                            'valid-feedback'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵted'](1, null, [
                        '',
                        ' ',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, u['ɵunv'](n, 1, 0, u['ɵnov'](n, 2).transform('SELLER.BILL.EMAIL_TOUCHED')), u['ɵunv'](n, 1, 1, u['ɵnov'](n, 3).transform('GENERAL.CORRECTFIELD')));
                });
            }
            function rl(l) {
                return u['ɵvid'](0, [
                    (l()(), u['ɵeld'](0, 0, null, null, 3, 'div', [[
                            'class',
                            'invalid-feedback'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵted'](1, null, [
                        '',
                        ' ',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, u['ɵunv'](n, 1, 0, u['ɵnov'](n, 2).transform('SELLER.BILL.EMAIL_TOUCHED')), u['ɵunv'](n, 1, 1, u['ɵnov'](n, 3).transform('GENERAL.REQUIRED')));
                });
            }
            function sl(l) {
                return u['ɵvid'](0, [
                    (l()(), u['ɵeld'](0, 0, null, null, 2, 'button', [
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
                    (l()(), u['ɵted'](1, null, [
                        ' ',
                        ' '
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 0, 0, n.component.validcompleteForm()), l(n, 1, 0, u['ɵunv'](n, 1, 0, u['ɵnov'](n, 2).transform('GENERAL.BUTTON_SAVE')));
                });
            }
            function cl(l) {
                return u['ɵvid'](0, [
                    (l()(), u['ɵeld'](0, 0, null, null, 165, 'div', [[
                            'class',
                            'mt-5'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](1, 0, null, null, 164, 'form', [
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
                        var t = !0, o = l.component;
                        return 'submit' === n && (t = !1 !== u['ɵnov'](l, 3).onSubmit(e) && t), 'reset' === n && (t = !1 !== u['ɵnov'](l, 3).onReset() && t), 'ngSubmit' === n && (t = !1 !== o.save() && t), t;
                    }, null, null)),
                    u['ɵdid'](2, 16384, null, 0, h.C, [], null, null),
                    u['ɵdid'](3, 540672, null, 0, h.k, [
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
                    u['ɵprd'](2048, null, h.d, null, [h.k]),
                    u['ɵdid'](5, 16384, null, 0, h.r, [[
                            6,
                            h.d
                        ]], null, null),
                    (l()(), u['ɵeld'](6, 0, null, null, 26, 'div', [[
                            'class',
                            'form-group row'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](7, 0, null, null, 12, 'div', [[
                            'class',
                            'col-lg-6'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](8, 0, null, null, 2, 'label', [], null, null, null, null, null)),
                    (l()(), u['ɵted'](9, null, [
                        ' ',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](11, 0, null, null, 8, 'input', [
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
                        var t = !0;
                        return 'input' === n && (t = !1 !== u['ɵnov'](l, 12)._handleInput(e.target.value) && t), 'blur' === n && (t = !1 !== u['ɵnov'](l, 12).onTouched() && t), 'compositionstart' === n && (t = !1 !== u['ɵnov'](l, 12)._compositionStart() && t), 'compositionend' === n && (t = !1 !== u['ɵnov'](l, 12)._compositionEnd(e.target.value) && t), t;
                    }, null, null)),
                    u['ɵdid'](12, 16384, null, 0, h.e, [
                        u.Renderer2,
                        u.ElementRef,
                        [
                            2,
                            h.b
                        ]
                    ], null, null),
                    u['ɵdid'](13, 540672, null, 0, h.m, [], {
                        maxlength: [
                            0,
                            'maxlength'
                        ]
                    }, null),
                    u['ɵprd'](1024, null, h.n, function (l) {
                        return [l];
                    }, [h.m]),
                    u['ɵprd'](1024, null, h.o, function (l) {
                        return [l];
                    }, [h.e]),
                    u['ɵdid'](16, 671744, null, 0, h.i, [
                        [
                            3,
                            h.d
                        ],
                        [
                            6,
                            h.n
                        ],
                        [
                            8,
                            null
                        ],
                        [
                            6,
                            h.o
                        ],
                        [
                            2,
                            h.A
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
                    u['ɵprd'](2048, null, h.p, null, [h.i]),
                    u['ɵdid'](18, 16384, null, 0, h.q, [[
                            4,
                            h.p
                        ]], null, null),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](20, 0, null, null, 12, 'div', [[
                            'class',
                            'col-lg-6'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](21, 0, null, null, 2, 'label', [], null, null, null, null, null)),
                    (l()(), u['ɵted'](22, null, [
                        ' ',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](24, 0, null, null, 8, 'input', [
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
                        var t = !0;
                        return 'input' === n && (t = !1 !== u['ɵnov'](l, 25)._handleInput(e.target.value) && t), 'blur' === n && (t = !1 !== u['ɵnov'](l, 25).onTouched() && t), 'compositionstart' === n && (t = !1 !== u['ɵnov'](l, 25)._compositionStart() && t), 'compositionend' === n && (t = !1 !== u['ɵnov'](l, 25)._compositionEnd(e.target.value) && t), t;
                    }, null, null)),
                    u['ɵdid'](25, 16384, null, 0, h.e, [
                        u.Renderer2,
                        u.ElementRef,
                        [
                            2,
                            h.b
                        ]
                    ], null, null),
                    u['ɵdid'](26, 540672, null, 0, h.m, [], {
                        maxlength: [
                            0,
                            'maxlength'
                        ]
                    }, null),
                    u['ɵprd'](1024, null, h.n, function (l) {
                        return [l];
                    }, [h.m]),
                    u['ɵprd'](1024, null, h.o, function (l) {
                        return [l];
                    }, [h.e]),
                    u['ɵdid'](29, 671744, null, 0, h.i, [
                        [
                            3,
                            h.d
                        ],
                        [
                            6,
                            h.n
                        ],
                        [
                            8,
                            null
                        ],
                        [
                            6,
                            h.o
                        ],
                        [
                            2,
                            h.A
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
                    u['ɵprd'](2048, null, h.p, null, [h.i]),
                    u['ɵdid'](31, 16384, null, 0, h.q, [[
                            4,
                            h.p
                        ]], null, null),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](33, 0, null, null, 38, 'div', [[
                            'class',
                            'form-group row'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](34, 0, null, null, 18, 'div', [[
                            'class',
                            'col-lg-6'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](35, 0, null, null, 2, 'label', [], null, null, null, null, null)),
                    (l()(), u['ɵted'](36, null, [
                        ' ',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](38, 0, null, null, 8, 'input', [
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
                        var t = !0;
                        return 'input' === n && (t = !1 !== u['ɵnov'](l, 39)._handleInput(e.target.value) && t), 'blur' === n && (t = !1 !== u['ɵnov'](l, 39).onTouched() && t), 'compositionstart' === n && (t = !1 !== u['ɵnov'](l, 39)._compositionStart() && t), 'compositionend' === n && (t = !1 !== u['ɵnov'](l, 39)._compositionEnd(e.target.value) && t), t;
                    }, null, null)),
                    u['ɵdid'](39, 16384, null, 0, h.e, [
                        u.Renderer2,
                        u.ElementRef,
                        [
                            2,
                            h.b
                        ]
                    ], null, null),
                    u['ɵdid'](40, 540672, null, 0, h.m, [], {
                        maxlength: [
                            0,
                            'maxlength'
                        ]
                    }, null),
                    u['ɵprd'](1024, null, h.n, function (l) {
                        return [l];
                    }, [h.m]),
                    u['ɵprd'](1024, null, h.o, function (l) {
                        return [l];
                    }, [h.e]),
                    u['ɵdid'](43, 671744, null, 0, h.i, [
                        [
                            3,
                            h.d
                        ],
                        [
                            6,
                            h.n
                        ],
                        [
                            8,
                            null
                        ],
                        [
                            6,
                            h.o
                        ],
                        [
                            2,
                            h.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    u['ɵprd'](2048, null, h.p, null, [h.i]),
                    u['ɵdid'](45, 16384, null, 0, h.q, [[
                            4,
                            h.p
                        ]], null, null),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵand'](16777216, null, null, 1, null, W)),
                    u['ɵdid'](48, 16384, null, 0, p.NgIf, [
                        u.ViewContainerRef,
                        u.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), u['ɵand'](16777216, null, null, 1, null, J)),
                    u['ɵdid'](50, 16384, null, 0, p.NgIf, [
                        u.ViewContainerRef,
                        u.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), u['ɵand'](16777216, null, null, 1, null, Q)),
                    u['ɵdid'](52, 16384, null, 0, p.NgIf, [
                        u.ViewContainerRef,
                        u.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), u['ɵeld'](53, 0, null, null, 18, 'div', [[
                            'class',
                            'col-lg-6'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](54, 0, null, null, 2, 'label', [], null, null, null, null, null)),
                    (l()(), u['ɵted'](55, null, [
                        ' ',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](57, 0, null, null, 8, 'input', [
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
                        var t = !0;
                        return 'input' === n && (t = !1 !== u['ɵnov'](l, 58)._handleInput(e.target.value) && t), 'blur' === n && (t = !1 !== u['ɵnov'](l, 58).onTouched() && t), 'compositionstart' === n && (t = !1 !== u['ɵnov'](l, 58)._compositionStart() && t), 'compositionend' === n && (t = !1 !== u['ɵnov'](l, 58)._compositionEnd(e.target.value) && t), t;
                    }, null, null)),
                    u['ɵdid'](58, 16384, null, 0, h.e, [
                        u.Renderer2,
                        u.ElementRef,
                        [
                            2,
                            h.b
                        ]
                    ], null, null),
                    u['ɵdid'](59, 540672, null, 0, h.m, [], {
                        maxlength: [
                            0,
                            'maxlength'
                        ]
                    }, null),
                    u['ɵprd'](1024, null, h.n, function (l) {
                        return [l];
                    }, [h.m]),
                    u['ɵprd'](1024, null, h.o, function (l) {
                        return [l];
                    }, [h.e]),
                    u['ɵdid'](62, 671744, null, 0, h.i, [
                        [
                            3,
                            h.d
                        ],
                        [
                            6,
                            h.n
                        ],
                        [
                            8,
                            null
                        ],
                        [
                            6,
                            h.o
                        ],
                        [
                            2,
                            h.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    u['ɵprd'](2048, null, h.p, null, [h.i]),
                    u['ɵdid'](64, 16384, null, 0, h.q, [[
                            4,
                            h.p
                        ]], null, null),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵand'](16777216, null, null, 1, null, Z)),
                    u['ɵdid'](67, 16384, null, 0, p.NgIf, [
                        u.ViewContainerRef,
                        u.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), u['ɵand'](16777216, null, null, 1, null, ll)),
                    u['ɵdid'](69, 16384, null, 0, p.NgIf, [
                        u.ViewContainerRef,
                        u.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), u['ɵand'](16777216, null, null, 1, null, nl)),
                    u['ɵdid'](71, 16384, null, 0, p.NgIf, [
                        u.ViewContainerRef,
                        u.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), u['ɵeld'](72, 0, null, null, 46, 'div', [[
                            'class',
                            'form-group row'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](73, 0, null, null, 22, 'div', [[
                            'class',
                            'col-lg-6'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](74, 0, null, null, 2, 'label', [], null, null, null, null, null)),
                    (l()(), u['ɵted'](75, null, [
                        '',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](77, 0, null, null, 12, 'select', [
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
                        var t = !0;
                        return 'change' === n && (t = !1 !== u['ɵnov'](l, 78).onChange(e.target.value) && t), 'blur' === n && (t = !1 !== u['ɵnov'](l, 78).onTouched() && t), t;
                    }, null, null)),
                    u['ɵdid'](78, 16384, null, 0, h.w, [
                        u.Renderer2,
                        u.ElementRef
                    ], null, null),
                    u['ɵprd'](1024, null, h.o, function (l) {
                        return [l];
                    }, [h.w]),
                    u['ɵdid'](80, 671744, null, 0, h.i, [
                        [
                            3,
                            h.d
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
                            h.o
                        ],
                        [
                            2,
                            h.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    u['ɵprd'](2048, null, h.p, null, [h.i]),
                    u['ɵdid'](82, 16384, null, 0, h.q, [[
                            4,
                            h.p
                        ]], null, null),
                    (l()(), u['ɵeld'](83, 0, null, null, 4, 'option', [[
                            'value',
                            ''
                        ]], null, null, null, null, null)),
                    u['ɵdid'](84, 147456, null, 0, h.u, [
                        u.ElementRef,
                        u.Renderer2,
                        [
                            2,
                            h.w
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    u['ɵdid'](85, 147456, null, 0, h.B, [
                        u.ElementRef,
                        u.Renderer2,
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
                    (l()(), u['ɵted'](86, null, [
                        '',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵand'](16777216, null, null, 1, null, el)),
                    u['ɵdid'](89, 278528, null, 0, p.NgForOf, [
                        u.ViewContainerRef,
                        u.TemplateRef,
                        u.IterableDiffers
                    ], {
                        ngForOf: [
                            0,
                            'ngForOf'
                        ]
                    }, null),
                    (l()(), u['ɵeld'](90, 0, null, null, 5, 'div', [[
                            'class',
                            'feedback'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵted'](91, null, [
                        '',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](93, 0, null, null, 2, 'b', [], null, null, null, null, null)),
                    (l()(), u['ɵted'](94, null, [
                        ' ',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](96, 0, null, null, 22, 'div', [[
                            'class',
                            'col-lg-6'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](97, 0, null, null, 2, 'label', [], null, null, null, null, null)),
                    (l()(), u['ɵted'](98, null, [
                        '',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](100, 0, null, null, 12, 'select', [
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
                        var t = !0;
                        return 'change' === n && (t = !1 !== u['ɵnov'](l, 101).onChange(e.target.value) && t), 'blur' === n && (t = !1 !== u['ɵnov'](l, 101).onTouched() && t), t;
                    }, null, null)),
                    u['ɵdid'](101, 16384, null, 0, h.w, [
                        u.Renderer2,
                        u.ElementRef
                    ], null, null),
                    u['ɵprd'](1024, null, h.o, function (l) {
                        return [l];
                    }, [h.w]),
                    u['ɵdid'](103, 671744, null, 0, h.i, [
                        [
                            3,
                            h.d
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
                            h.o
                        ],
                        [
                            2,
                            h.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    u['ɵprd'](2048, null, h.p, null, [h.i]),
                    u['ɵdid'](105, 16384, null, 0, h.q, [[
                            4,
                            h.p
                        ]], null, null),
                    (l()(), u['ɵeld'](106, 0, null, null, 4, 'option', [[
                            'value',
                            ''
                        ]], null, null, null, null, null)),
                    u['ɵdid'](107, 147456, null, 0, h.u, [
                        u.ElementRef,
                        u.Renderer2,
                        [
                            2,
                            h.w
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    u['ɵdid'](108, 147456, null, 0, h.B, [
                        u.ElementRef,
                        u.Renderer2,
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
                    (l()(), u['ɵted'](109, null, [
                        '',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵand'](16777216, null, null, 1, null, ul)),
                    u['ɵdid'](112, 278528, null, 0, p.NgForOf, [
                        u.ViewContainerRef,
                        u.TemplateRef,
                        u.IterableDiffers
                    ], {
                        ngForOf: [
                            0,
                            'ngForOf'
                        ]
                    }, null),
                    (l()(), u['ɵeld'](113, 0, null, null, 5, 'div', [[
                            'class',
                            'feedback'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵted'](114, null, [
                        '',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](116, 0, null, null, 2, 'b', [], null, null, null, null, null)),
                    (l()(), u['ɵted'](117, null, [
                        ' ',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](119, 0, null, null, 38, 'div', [[
                            'class',
                            'form-group row'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](120, 0, null, null, 18, 'div', [[
                            'class',
                            'col-lg-6'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](121, 0, null, null, 2, 'label', [], null, null, null, null, null)),
                    (l()(), u['ɵted'](122, null, [
                        ' ',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](124, 0, null, null, 8, 'input', [
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
                        var t = !0;
                        return 'input' === n && (t = !1 !== u['ɵnov'](l, 125)._handleInput(e.target.value) && t), 'blur' === n && (t = !1 !== u['ɵnov'](l, 125).onTouched() && t), 'compositionstart' === n && (t = !1 !== u['ɵnov'](l, 125)._compositionStart() && t), 'compositionend' === n && (t = !1 !== u['ɵnov'](l, 125)._compositionEnd(e.target.value) && t), t;
                    }, null, null)),
                    u['ɵdid'](125, 16384, null, 0, h.e, [
                        u.Renderer2,
                        u.ElementRef,
                        [
                            2,
                            h.b
                        ]
                    ], null, null),
                    u['ɵdid'](126, 540672, null, 0, h.m, [], {
                        maxlength: [
                            0,
                            'maxlength'
                        ]
                    }, null),
                    u['ɵprd'](1024, null, h.n, function (l) {
                        return [l];
                    }, [h.m]),
                    u['ɵprd'](1024, null, h.o, function (l) {
                        return [l];
                    }, [h.e]),
                    u['ɵdid'](129, 671744, null, 0, h.i, [
                        [
                            3,
                            h.d
                        ],
                        [
                            6,
                            h.n
                        ],
                        [
                            8,
                            null
                        ],
                        [
                            6,
                            h.o
                        ],
                        [
                            2,
                            h.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    u['ɵprd'](2048, null, h.p, null, [h.i]),
                    u['ɵdid'](131, 16384, null, 0, h.q, [[
                            4,
                            h.p
                        ]], null, null),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵand'](16777216, null, null, 1, null, tl)),
                    u['ɵdid'](134, 16384, null, 0, p.NgIf, [
                        u.ViewContainerRef,
                        u.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), u['ɵand'](16777216, null, null, 1, null, ol)),
                    u['ɵdid'](136, 16384, null, 0, p.NgIf, [
                        u.ViewContainerRef,
                        u.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), u['ɵand'](16777216, null, null, 1, null, il)),
                    u['ɵdid'](138, 16384, null, 0, p.NgIf, [
                        u.ViewContainerRef,
                        u.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), u['ɵeld'](139, 0, null, null, 18, 'div', [[
                            'class',
                            'col-lg-6'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](140, 0, null, null, 2, 'label', [], null, null, null, null, null)),
                    (l()(), u['ɵted'](141, null, [
                        ' ',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](143, 0, null, null, 8, 'input', [
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
                        var t = !0;
                        return 'input' === n && (t = !1 !== u['ɵnov'](l, 144)._handleInput(e.target.value) && t), 'blur' === n && (t = !1 !== u['ɵnov'](l, 144).onTouched() && t), 'compositionstart' === n && (t = !1 !== u['ɵnov'](l, 144)._compositionStart() && t), 'compositionend' === n && (t = !1 !== u['ɵnov'](l, 144)._compositionEnd(e.target.value) && t), t;
                    }, null, null)),
                    u['ɵdid'](144, 16384, null, 0, h.e, [
                        u.Renderer2,
                        u.ElementRef,
                        [
                            2,
                            h.b
                        ]
                    ], null, null),
                    u['ɵdid'](145, 540672, null, 0, h.m, [], {
                        maxlength: [
                            0,
                            'maxlength'
                        ]
                    }, null),
                    u['ɵprd'](1024, null, h.n, function (l) {
                        return [l];
                    }, [h.m]),
                    u['ɵprd'](1024, null, h.o, function (l) {
                        return [l];
                    }, [h.e]),
                    u['ɵdid'](148, 671744, null, 0, h.i, [
                        [
                            3,
                            h.d
                        ],
                        [
                            6,
                            h.n
                        ],
                        [
                            8,
                            null
                        ],
                        [
                            6,
                            h.o
                        ],
                        [
                            2,
                            h.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    u['ɵprd'](2048, null, h.p, null, [h.i]),
                    u['ɵdid'](150, 16384, null, 0, h.q, [[
                            4,
                            h.p
                        ]], null, null),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵand'](16777216, null, null, 1, null, al)),
                    u['ɵdid'](153, 16384, null, 0, p.NgIf, [
                        u.ViewContainerRef,
                        u.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), u['ɵand'](16777216, null, null, 1, null, dl)),
                    u['ɵdid'](155, 16384, null, 0, p.NgIf, [
                        u.ViewContainerRef,
                        u.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), u['ɵand'](16777216, null, null, 1, null, rl)),
                    u['ɵdid'](157, 16384, null, 0, p.NgIf, [
                        u.ViewContainerRef,
                        u.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), u['ɵeld'](158, 0, null, null, 7, 'div', [[
                            'style',
                            'clear:both;'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](159, 0, null, null, 6, 'div', [[
                            'class',
                            'float-right'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](160, 0, null, null, 3, 'a', [
                        [
                            'class',
                            'btn btn-default font-weight-bold mr-2'
                        ],
                        [
                            'routerLink',
                            '/sales'
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
                        return 'click' === n && (t = !1 !== u['ɵnov'](l, 161).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && t), t;
                    }, null, null)),
                    u['ɵdid'](161, 671744, null, 0, i.u, [
                        i.r,
                        i.a,
                        p.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    (l()(), u['ɵted'](162, null, [
                        ' ',
                        ''
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵand'](16777216, null, null, 1, null, sl)),
                    u['ɵdid'](165, 16384, null, 0, p.NgIf, [
                        u.ViewContainerRef,
                        u.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null)
                ], function (l, n) {
                    var e = n.component;
                    l(n, 3, 0, e.formGroup), l(n, 13, 0, '130'), l(n, 16, 0, 'package', ''), l(n, 26, 0, '130'), l(n, 29, 0, 'total', ''), l(n, 40, 0, '130'), l(n, 43, 0, 'name'), l(n, 48, 0, !e.isControlTouched('name')), l(n, 50, 0, e.isControlValid('name')), l(n, 52, 0, e.controlHasError('required', 'name')), l(n, 59, 0, '130'), l(n, 62, 0, 'rfc'), l(n, 67, 0, !e.isControlTouched('rfc')), l(n, 69, 0, e.isControlValid('rfc')), l(n, 71, 0, e.controlHasError('required', 'rfc')), l(n, 80, 0, 'regime'), l(n, 84, 0, ''), l(n, 85, 0, ''), l(n, 89, 0, e.Regimen), l(n, 103, 0, 'cfdi'), l(n, 107, 0, ''), l(n, 108, 0, ''), l(n, 112, 0, e.USECFDI), l(n, 126, 0, '5'), l(n, 129, 0, 'cp'), l(n, 134, 0, !e.isControlTouched('cp')), l(n, 136, 0, e.isControlValid('cp')), l(n, 138, 0, e.controlHasError('required', 'cp')), l(n, 145, 0, '130'), l(n, 148, 0, 'emaicc'), l(n, 153, 0, !e.isControlTouched('emaicc')), l(n, 155, 0, e.isControlValid('emaicc')), l(n, 157, 0, e.controlHasError('required', 'emaicc')), l(n, 161, 0, '/sales'), l(n, 165, 0, 0 == e.view);
                }, function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, u['ɵnov'](n, 5).ngClassUntouched, u['ɵnov'](n, 5).ngClassTouched, u['ɵnov'](n, 5).ngClassPristine, u['ɵnov'](n, 5).ngClassDirty, u['ɵnov'](n, 5).ngClassValid, u['ɵnov'](n, 5).ngClassInvalid, u['ɵnov'](n, 5).ngClassPending), l(n, 9, 0, u['ɵunv'](n, 9, 0, u['ɵnov'](n, 10).transform('SELLER.BILL.PACKAGES'))), l(n, 11, 1, [
                        u['ɵinlineInterpolate'](1, '', u['ɵunv'](n, 11, 0, u['ɵnov'](n, 19).transform('SELLER.BILL.NAME')), ''),
                        e.isControlInvalid('package'),
                        e.isControlValid('package'),
                        u['ɵnov'](n, 13).maxlength ? u['ɵnov'](n, 13).maxlength : null,
                        u['ɵnov'](n, 18).ngClassUntouched,
                        u['ɵnov'](n, 18).ngClassTouched,
                        u['ɵnov'](n, 18).ngClassPristine,
                        u['ɵnov'](n, 18).ngClassDirty,
                        u['ɵnov'](n, 18).ngClassValid,
                        u['ɵnov'](n, 18).ngClassInvalid,
                        u['ɵnov'](n, 18).ngClassPending
                    ]), l(n, 22, 0, u['ɵunv'](n, 22, 0, u['ɵnov'](n, 23).transform('SELLER.BILL.TOTAL'))), l(n, 24, 1, [
                        u['ɵinlineInterpolate'](1, '', u['ɵunv'](n, 24, 0, u['ɵnov'](n, 32).transform('SELLER.CREATE.RFC')), ''),
                        e.isControlInvalid('total'),
                        e.isControlValid('total'),
                        u['ɵnov'](n, 26).maxlength ? u['ɵnov'](n, 26).maxlength : null,
                        u['ɵnov'](n, 31).ngClassUntouched,
                        u['ɵnov'](n, 31).ngClassTouched,
                        u['ɵnov'](n, 31).ngClassPristine,
                        u['ɵnov'](n, 31).ngClassDirty,
                        u['ɵnov'](n, 31).ngClassValid,
                        u['ɵnov'](n, 31).ngClassInvalid,
                        u['ɵnov'](n, 31).ngClassPending
                    ]), l(n, 36, 0, u['ɵunv'](n, 36, 0, u['ɵnov'](n, 37).transform('SELLER.BILL.NAME'))), l(n, 38, 1, [
                        u['ɵinlineInterpolate'](1, '', u['ɵunv'](n, 38, 0, u['ɵnov'](n, 46).transform('SELLER.BILL.NAME')), ''),
                        e.isControlInvalid('name'),
                        e.isControlValid('name'),
                        u['ɵnov'](n, 40).maxlength ? u['ɵnov'](n, 40).maxlength : null,
                        u['ɵnov'](n, 45).ngClassUntouched,
                        u['ɵnov'](n, 45).ngClassTouched,
                        u['ɵnov'](n, 45).ngClassPristine,
                        u['ɵnov'](n, 45).ngClassDirty,
                        u['ɵnov'](n, 45).ngClassValid,
                        u['ɵnov'](n, 45).ngClassInvalid,
                        u['ɵnov'](n, 45).ngClassPending
                    ]), l(n, 55, 0, u['ɵunv'](n, 55, 0, u['ɵnov'](n, 56).transform('SELLER.CREATE.RFC'))), l(n, 57, 1, [
                        u['ɵinlineInterpolate'](1, '', u['ɵunv'](n, 57, 0, u['ɵnov'](n, 65).transform('SELLER.CREATE.RFC')), ''),
                        e.isControlInvalid('rfc'),
                        e.isControlValid('rfc'),
                        u['ɵnov'](n, 59).maxlength ? u['ɵnov'](n, 59).maxlength : null,
                        u['ɵnov'](n, 64).ngClassUntouched,
                        u['ɵnov'](n, 64).ngClassTouched,
                        u['ɵnov'](n, 64).ngClassPristine,
                        u['ɵnov'](n, 64).ngClassDirty,
                        u['ɵnov'](n, 64).ngClassValid,
                        u['ɵnov'](n, 64).ngClassInvalid,
                        u['ɵnov'](n, 64).ngClassPending
                    ]), l(n, 75, 0, u['ɵunv'](n, 75, 0, u['ɵnov'](n, 76).transform('SELLER.BILL.REGIMEN'))), l(n, 77, 0, u['ɵnov'](n, 82).ngClassUntouched, u['ɵnov'](n, 82).ngClassTouched, u['ɵnov'](n, 82).ngClassPristine, u['ɵnov'](n, 82).ngClassDirty, u['ɵnov'](n, 82).ngClassValid, u['ɵnov'](n, 82).ngClassInvalid, u['ɵnov'](n, 82).ngClassPending), l(n, 86, 0, u['ɵunv'](n, 86, 0, u['ɵnov'](n, 87).transform('DOCUMENT.CREATE.FORM.SELECTOPTION'))), l(n, 91, 0, u['ɵunv'](n, 91, 0, u['ɵnov'](n, 92).transform('GENERAL.PLEASE_SELECT'))), l(n, 94, 0, u['ɵunv'](n, 94, 0, u['ɵnov'](n, 95).transform('SELLER.BILL.REGIMEN_TOUCHED'))), l(n, 98, 0, u['ɵunv'](n, 98, 0, u['ɵnov'](n, 99).transform('SELLER.BILL.CFDI'))), l(n, 100, 0, u['ɵnov'](n, 105).ngClassUntouched, u['ɵnov'](n, 105).ngClassTouched, u['ɵnov'](n, 105).ngClassPristine, u['ɵnov'](n, 105).ngClassDirty, u['ɵnov'](n, 105).ngClassValid, u['ɵnov'](n, 105).ngClassInvalid, u['ɵnov'](n, 105).ngClassPending), l(n, 109, 0, u['ɵunv'](n, 109, 0, u['ɵnov'](n, 110).transform('DOCUMENT.CREATE.FORM.SELECTOPTION'))), l(n, 114, 0, u['ɵunv'](n, 114, 0, u['ɵnov'](n, 115).transform('GENERAL.PLEASE_SELECT'))), l(n, 117, 0, u['ɵunv'](n, 117, 0, u['ɵnov'](n, 118).transform('SELLER.BILL.CFDI_TOUCHED'))), l(n, 122, 0, u['ɵunv'](n, 122, 0, u['ɵnov'](n, 123).transform('SELLER.BILL.CP'))), l(n, 124, 1, [
                        u['ɵinlineInterpolate'](1, '', u['ɵunv'](n, 124, 0, u['ɵnov'](n, 132).transform('SELLER.BILL.CP')), ''),
                        e.isControlInvalid('cp'),
                        e.isControlValid('cp'),
                        u['ɵnov'](n, 126).maxlength ? u['ɵnov'](n, 126).maxlength : null,
                        u['ɵnov'](n, 131).ngClassUntouched,
                        u['ɵnov'](n, 131).ngClassTouched,
                        u['ɵnov'](n, 131).ngClassPristine,
                        u['ɵnov'](n, 131).ngClassDirty,
                        u['ɵnov'](n, 131).ngClassValid,
                        u['ɵnov'](n, 131).ngClassInvalid,
                        u['ɵnov'](n, 131).ngClassPending
                    ]), l(n, 141, 0, u['ɵunv'](n, 141, 0, u['ɵnov'](n, 142).transform('SELLER.BILL.EMAIL'))), l(n, 143, 1, [
                        u['ɵinlineInterpolate'](1, '', u['ɵunv'](n, 143, 0, u['ɵnov'](n, 151).transform('SELLER.BILL.EMAIL')), ''),
                        e.isControlInvalid('emaicc'),
                        e.isControlValid('emaicc'),
                        u['ɵnov'](n, 145).maxlength ? u['ɵnov'](n, 145).maxlength : null,
                        u['ɵnov'](n, 150).ngClassUntouched,
                        u['ɵnov'](n, 150).ngClassTouched,
                        u['ɵnov'](n, 150).ngClassPristine,
                        u['ɵnov'](n, 150).ngClassDirty,
                        u['ɵnov'](n, 150).ngClassValid,
                        u['ɵnov'](n, 150).ngClassInvalid,
                        u['ɵnov'](n, 150).ngClassPending
                    ]), l(n, 160, 0, u['ɵnov'](n, 161).target, u['ɵnov'](n, 161).href), l(n, 162, 0, u['ɵunv'](n, 162, 0, u['ɵnov'](n, 163).transform('GENERAL.CANCEL_SAVE')));
                });
            }
            function pl(l) {
                return u['ɵvid'](2, [
                    (l()(), u['ɵeld'](0, 0, null, null, 23, 'ce-layout-dashboard', [], null, null, null, f.b, f.a)),
                    u['ɵdid'](1, 638976, null, 0, m.a, [u.ChangeDetectorRef], {
                        isLoading: [
                            0,
                            'isLoading'
                        ]
                    }, null),
                    (l()(), u['ɵeld'](2, 0, null, 0, 21, 'div', [
                        [
                            'class',
                            'card card-custom gutter-b'
                        ],
                        [
                            'content',
                            ''
                        ]
                    ], null, null, null, null, null)),
                    (l()(), u['ɵand'](16777216, null, null, 2, null, Y)),
                    u['ɵdid'](4, 16384, null, 0, p.NgIf, [
                        u.ViewContainerRef,
                        u.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    u['ɵpid'](131072, p.AsyncPipe, [u.ChangeDetectorRef]),
                    (l()(), u['ɵeld'](6, 0, null, null, 14, 'div', [[
                            'class',
                            'card-header'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](7, 0, null, null, 3, 'div', [[
                            'class',
                            'card-title'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](8, 0, null, null, 2, 'h3', [[
                            'class',
                            'card-label'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵand'](16777216, null, null, 1, null, z)),
                    u['ɵdid'](10, 16384, null, 0, p.NgIf, [
                        u.ViewContainerRef,
                        u.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), u['ɵeld'](11, 0, null, null, 9, 'div', [[
                            'class',
                            'card-toolbar'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵeld'](12, 0, null, null, 4, 'a', [
                        [
                            'class',
                            'btn btn-light'
                        ],
                        [
                            'routerLink',
                            '/sales'
                        ],
                        [
                            'type',
                            'button'
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
                        return 'click' === n && (t = !1 !== u['ɵnov'](l, 13).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && t), t;
                    }, null, null)),
                    u['ɵdid'](13, 671744, null, 0, i.u, [
                        i.r,
                        i.a,
                        p.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    (l()(), u['ɵeld'](14, 0, null, null, 0, 'i', [[
                            'class',
                            'fa fa-arrow-left'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵted'](15, null, [
                        ' ',
                        ' '
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](17, 0, null, null, 3, 'button', [[
                            'class',
                            'btn btn-secondary ml-2'
                        ]], null, [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== l.component.reset() && u), u;
                    }, null, null)),
                    (l()(), u['ɵeld'](18, 0, null, null, 0, 'i', [[
                            'class',
                            'fa fa-redo'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵted'](19, null, [
                        '',
                        ' '
                    ])),
                    u['ɵpid'](131072, g.k, [
                        g.l,
                        u.ChangeDetectorRef
                    ]),
                    (l()(), u['ɵeld'](21, 0, null, null, 2, 'div', [[
                            'class',
                            'card-body'
                        ]], null, null, null, null, null)),
                    (l()(), u['ɵand'](16777216, null, null, 1, null, cl)),
                    u['ɵdid'](23, 16384, null, 0, p.NgIf, [
                        u.ViewContainerRef,
                        u.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null)
                ], function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.isLoadingComponent), l(n, 4, 0, u['ɵunv'](n, 4, 0, u['ɵnov'](n, 5).transform(e.isLoading$))), l(n, 10, 0, e.billing), l(n, 13, 0, '/sales'), l(n, 23, 0, e.billing && e.formGroup);
                }, function (l, n) {
                    l(n, 12, 0, u['ɵnov'](n, 13).target, u['ɵnov'](n, 13).href), l(n, 15, 0, u['ɵunv'](n, 15, 0, u['ɵnov'](n, 16).transform('CONTRACT.FORM.BACK'))), l(n, 19, 0, u['ɵunv'](n, 19, 0, u['ɵnov'](n, 20).transform('CONTRACT.FORM.RESET')));
                });
            }
            function gl(l) {
                return u['ɵvid'](0, [
                    (l()(), u['ɵeld'](0, 0, null, null, 4, 'app-bill', [], null, null, null, pl, $)),
                    u['ɵprd'](4608, null, v.n, R.a, []),
                    u['ɵprd'](4608, null, v.o, R.b, []),
                    u['ɵprd'](512, null, p.DatePipe, p.DatePipe, [u.LOCALE_ID]),
                    u['ɵdid'](4, 245760, null, 0, G, [
                        h.f,
                        u.ChangeDetectorRef,
                        O.a,
                        q.a,
                        i.r,
                        i.a,
                        g.l,
                        u.ChangeDetectorRef,
                        p.DatePipe
                    ], null, null)
                ], function (l, n) {
                    l(n, 4, 0);
                }, null);
            }
            var vl = u['ɵccf']('app-bill', G, gl, {}, {}, []), fl = e('ypAQ'), ml = e('9AJC'), hl = e('QfCi'), Cl = e('8WaK'), El = e('Ed4d'), Rl = e('JRKe'), bl = e('1O3W'), Ll = e('9gLZ'), Dl = e('9b/N'), Il = e('NFMk'), kl = e('0YeR'), wl = e('alHs'), Sl = e('vrAh');
            class yl {
            }
            var Tl = e('F3IN'), Al = e('HeVh'), _l = e('SCoL'), Ol = e('tYkK'), xl = e('66zS'), Nl = e('1z/I'), Ml = e('7KAL'), Pl = e('PgQK'), Fl = e('jQCg'), Hl = e('W0Pu'), Bl = e('W4B1'), Ul = e('wf2+'), Vl = e('0CZq'), jl = e('Rgb0'), Kl = e('Jp/u'), Gl = e('WJhm'), ql = e('GaVp'), $l = e('YRt3'), Yl = e('lAiz'), Xl = e('YEUz'), zl = e('CYS+'), Wl = e('px0D'), Jl = e('YdS3'), Ql = e('mW00'), Zl = e('jTf7'), ln = e('S/WK'), nn = e('oBm0'), en = e('RVNi'), un = e('gaRz'), tn = e('vZsH'), on = e('tM0M'), an = e('fb/r'), dn = e('z+yo'), rn = e('JXeA'), sn = e('51fn'), cn = e('pKmL'), pn = e('RbrB'), gn = e('Tczp'), vn = e('kFOB'), fn = e('ZEiq'), mn = e('UhP/'), hn = u['ɵcmf'](t, [], function (l) {
                    return u['ɵmod']([
                        u['ɵmpd'](512, u.ComponentFactoryResolver, u['ɵCodegenComponentFactoryResolver'], [
                            [
                                8,
                                [
                                    o.a,
                                    c,
                                    U,
                                    vl,
                                    fl.a,
                                    ml.h,
                                    ml.i,
                                    hl.a,
                                    Cl.a,
                                    El.b,
                                    El.a,
                                    Rl.a,
                                    ml.b,
                                    ml.a,
                                    ml.e,
                                    ml.f,
                                    ml.g
                                ]
                            ],
                            [
                                3,
                                u.ComponentFactoryResolver
                            ],
                            u.NgModuleRef
                        ]),
                        u['ɵmpd'](4608, p.NgLocalization, p.NgLocaleLocalization, [u.LOCALE_ID]),
                        u['ɵmpd'](4608, T.HttpXsrfTokenExtractor, T['ɵangular_packages_common_http_http_g'], [
                            p.DOCUMENT,
                            u.PLATFORM_ID,
                            T['ɵangular_packages_common_http_http_e']
                        ]),
                        u['ɵmpd'](4608, T['ɵangular_packages_common_http_http_h'], T['ɵangular_packages_common_http_http_h'], [
                            T.HttpXsrfTokenExtractor,
                            T['ɵangular_packages_common_http_http_f']
                        ]),
                        u['ɵmpd'](5120, T.HTTP_INTERCEPTORS, function (l) {
                            return [l];
                        }, [T['ɵangular_packages_common_http_http_h']]),
                        u['ɵmpd'](4608, T['ɵangular_packages_common_http_http_d'], T['ɵangular_packages_common_http_http_d'], []),
                        u['ɵmpd'](6144, T.XhrFactory, null, [T['ɵangular_packages_common_http_http_d']]),
                        u['ɵmpd'](4608, T.HttpXhrBackend, T.HttpXhrBackend, [T.XhrFactory]),
                        u['ɵmpd'](6144, T.HttpBackend, null, [T.HttpXhrBackend]),
                        u['ɵmpd'](4608, T.HttpHandler, T['ɵHttpInterceptingHandler'], [
                            T.HttpBackend,
                            u.Injector
                        ]),
                        u['ɵmpd'](4608, T.HttpClient, T.HttpClient, [T.HttpHandler]),
                        u['ɵmpd'](4608, h.z, h.z, []),
                        u['ɵmpd'](4608, h.f, h.f, []),
                        u['ɵmpd'](4608, v.E, v.E, [
                            u.ComponentFactoryResolver,
                            u.Injector,
                            v.vb,
                            v.F
                        ]),
                        u['ɵmpd'](4608, bl.d, bl.d, [
                            bl.l,
                            bl.f,
                            u.ComponentFactoryResolver,
                            bl.j,
                            bl.g,
                            u.Injector,
                            u.NgZone,
                            p.DOCUMENT,
                            Ll.b,
                            p.Location,
                            bl.i
                        ]),
                        u['ɵmpd'](5120, bl.m, bl.n, [bl.d]),
                        u['ɵmpd'](4608, Dl.c, Dl.c, []),
                        u['ɵmpd'](135680, Il.k, Il.k, [
                            bl.d,
                            u.Injector,
                            kl.a,
                            [
                                3,
                                Il.k
                            ]
                        ]),
                        u['ɵmpd'](4608, wl.d, wl.d, [wl.a]),
                        u['ɵmpd'](5120, Sl.b, Sl.c, [bl.d]),
                        u['ɵmpd'](1073742336, p.CommonModule, p.CommonModule, []),
                        u['ɵmpd'](1073742336, T.HttpClientXsrfModule, T.HttpClientXsrfModule, []),
                        u['ɵmpd'](1073742336, T.HttpClientModule, T.HttpClientModule, []),
                        u['ɵmpd'](1073742336, i.v, i.v, [
                            [
                                2,
                                i.B
                            ],
                            [
                                2,
                                i.r
                            ]
                        ]),
                        u['ɵmpd'](1073742336, yl, yl, []),
                        u['ɵmpd'](1073742336, h.y, h.y, []),
                        u['ɵmpd'](1073742336, h.l, h.l, []),
                        u['ɵmpd'](1073742336, h.v, h.v, []),
                        u['ɵmpd'](1073742336, Tl.InlineSVGModule, Tl.InlineSVGModule, []),
                        u['ɵmpd'](1073742336, v.G, v.G, []),
                        u['ɵmpd'](1073742336, Al.a, Al.a, []),
                        u['ɵmpd'](1073742336, _l.b, _l.b, []),
                        u['ɵmpd'](1073742336, Ol.b, Ol.b, []),
                        u['ɵmpd'](1073742336, xl.b, xl.b, []),
                        u['ɵmpd'](1073742336, Ll.a, Ll.a, []),
                        u['ɵmpd'](1073742336, Nl.e, Nl.e, []),
                        u['ɵmpd'](1073742336, Ml.c, Ml.c, []),
                        u['ɵmpd'](1073742336, Ml.g, Ml.g, []),
                        u['ɵmpd'](1073742336, bl.h, bl.h, []),
                        u['ɵmpd'](1073742336, Pl.a, Pl.a, []),
                        u['ɵmpd'](1073742336, Fl.c, Fl.c, []),
                        u['ɵmpd'](1073742336, Hl.b, Hl.b, []),
                        u['ɵmpd'](1073742336, Bl.b, Bl.b, []),
                        u['ɵmpd'](1073742336, Ul.e, Ul.e, []),
                        u['ɵmpd'](1073742336, Vl.d, Vl.d, []),
                        u['ɵmpd'](1073742336, Vl.c, Vl.c, []),
                        u['ɵmpd'](1073742336, jl.c, jl.c, []),
                        u['ɵmpd'](1073742336, Kl.c, Kl.c, []),
                        u['ɵmpd'](1073742336, Gl.b, Gl.b, []),
                        u['ɵmpd'](1073742336, ql.c, ql.c, []),
                        u['ɵmpd'](1073742336, $l.a, $l.a, []),
                        u['ɵmpd'](1073742336, Yl.a, Yl.a, []),
                        u['ɵmpd'](1073742336, Yl.b, Yl.b, []),
                        u['ɵmpd'](1073742336, Dl.d, Dl.d, []),
                        u['ɵmpd'](1073742336, Xl.a, Xl.a, [Xl.f]),
                        u['ɵmpd'](1073742336, zl.c, zl.c, []),
                        u['ɵmpd'](1073742336, Wl.d, Wl.d, []),
                        u['ɵmpd'](1073742336, Jl.a, Jl.a, []),
                        u['ɵmpd'](1073742336, Ql.d, Ql.d, []),
                        u['ɵmpd'](1073742336, Zl.j, Zl.j, []),
                        u['ɵmpd'](1073742336, ln.a, ln.a, []),
                        u['ɵmpd'](1073742336, Il.i, Il.i, []),
                        u['ɵmpd'](1073742336, nn.a, nn.a, []),
                        u['ɵmpd'](1073742336, en.b, en.b, []),
                        u['ɵmpd'](1073742336, un.d, un.d, []),
                        u['ɵmpd'](1073742336, tn.d, tn.d, []),
                        u['ɵmpd'](1073742336, g.i, g.i, []),
                        u['ɵmpd'](1073742336, on.a, on.a, []),
                        u['ɵmpd'](1073742336, an.b, an.b, []),
                        u['ɵmpd'](1073742336, dn.a, dn.a, []),
                        u['ɵmpd'](1073742336, rn.h, rn.h, []),
                        u['ɵmpd'](1073742336, rn.f, rn.f, []),
                        u['ɵmpd'](1073742336, sn.a, sn.a, []),
                        u['ɵmpd'](1073742336, cn.a, cn.a, []),
                        u['ɵmpd'](1073742336, pn.a, pn.a, []),
                        u['ɵmpd'](1073742336, v.t, v.t, []),
                        u['ɵmpd'](1073742336, wl.c, wl.c, []),
                        u['ɵmpd'](1073742336, gn.b, gn.b, []),
                        u['ɵmpd'](1073742336, v.z, v.z, []),
                        u['ɵmpd'](1073742336, vn.a, vn.a, []),
                        u['ɵmpd'](1073742336, v.c, v.c, []),
                        u['ɵmpd'](1073742336, v.f, v.f, []),
                        u['ɵmpd'](1073742336, v.g, v.g, []),
                        u['ɵmpd'](1073742336, v.k, v.k, []),
                        u['ɵmpd'](1073742336, v.l, v.l, []),
                        u['ɵmpd'](1073742336, v.I, v.I, []),
                        u['ɵmpd'](1073742336, v.N, v.N, []),
                        u['ɵmpd'](1073742336, v.S, v.S, []),
                        u['ɵmpd'](1073742336, v.V, v.V, []),
                        u['ɵmpd'](1073742336, v.Y, v.Y, []),
                        u['ɵmpd'](1073742336, v.gb, v.gb, []),
                        u['ɵmpd'](1073742336, v.jb, v.jb, []),
                        u['ɵmpd'](1073742336, v.kb, v.kb, []),
                        u['ɵmpd'](1073742336, v.lb, v.lb, []),
                        u['ɵmpd'](1073742336, v.bb, v.bb, []),
                        u['ɵmpd'](1073742336, v.H, v.H, []),
                        u['ɵmpd'](1073742336, fn.b, fn.b, []),
                        u['ɵmpd'](1073742336, mn.k, mn.k, [
                            Xl.f,
                            [
                                2,
                                mn.c
                            ],
                            [
                                2,
                                p.DOCUMENT
                            ]
                        ]),
                        u['ɵmpd'](1073742336, mn.u, mn.u, []),
                        u['ɵmpd'](1073742336, mn.s, mn.s, []),
                        u['ɵmpd'](1073742336, mn.p, mn.p, []),
                        u['ɵmpd'](1073742336, Sl.e, Sl.e, []),
                        u['ɵmpd'](1073742336, t, t, []),
                        u['ɵmpd'](256, T['ɵangular_packages_common_http_http_e'], 'XSRF-TOKEN', []),
                        u['ɵmpd'](256, T['ɵangular_packages_common_http_http_f'], 'X-XSRF-TOKEN', []),
                        u['ɵmpd'](1024, i.m, function () {
                            return [[{
                                        path: '',
                                        component: a,
                                        children: [
                                            {
                                                path: '',
                                                component: I
                                            },
                                            {
                                                path: 'bill/:id',
                                                component: G
                                            },
                                            {
                                                path: '',
                                                redirectTo: '',
                                                pathMatch: 'full'
                                            },
                                            {
                                                path: '**',
                                                redirectTo: '',
                                                pathMatch: 'full'
                                            }
                                        ]
                                    }]];
                        }, []),
                        u['ɵmpd'](256, wl.a, void 0, [])
                    ]);
                });
        }
    }
]);