(window.webpackJsonp = window.webpackJsonp || []).push([
    [16],
    {
        'K6+c': function (l, n, e) {
            'use strict';
            e.r(n), e.d(n, 'SignModuleNgFactory', function () {
                return Yn;
            });
            var t = e('8Y7J');
            class u {
            }
            var i = e('pMnS'), o = e('iInd');
            class a {
                constructor() {
                }
                ngOnInit() {
                }
            }
            var r = t['ɵcrt']({
                encapsulation: 0,
                styles: [['.disable[_ngcontent-%COMP%]{filter:invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)}']],
                data: {}
            });
            function d(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
                    t['ɵdid'](1, 212992, null, 0, o.w, [
                        o.b,
                        t.ViewContainerRef,
                        t.ComponentFactoryResolver,
                        [
                            8,
                            null
                        ],
                        t.ChangeDetectorRef
                    ], null, null)
                ], function (l, n) {
                    l(n, 1, 0);
                }, null);
            }
            function s(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'app-sign', [], null, null, null, d, r)),
                    t['ɵdid'](1, 114688, null, 0, a, [], null, null)
                ], function (l, n) {
                    l(n, 1, 0);
                }, null);
            }
            var c = t['ɵccf']('app-sign', a, s, {}, {}, []), g = e('TSSN'), p = e('SVse'), m = e('G0yt'), v = e('EvHu'), f = e('iB+a'), C = e('s7LF'), h = e('ZA9w'), w = e('gBr1'), O = e('uvLv'), M = e('mrSG'), z = e('Br0f');
            class _ {
                constructor(l, n, e, t, u, i) {
                    this.fb = l, this.modalService = n, this.documentService = e, this.splash = t, this.notifications = u, this.changeDetector = i, this.filter = {
                        initialDate: null,
                        finalDate: null,
                        status: null,
                        documentName: null,
                        type_signature: null,
                        type_document: null
                    }, this.loadingPage = !1, this.subscriptions = [];
                }
                ngOnInit() {
                    this.documentService.fetch(), this.grouping = this.documentService.grouping, this.paginator = this.documentService.paginator, this.sorting = this.documentService.sorting, this.filter.status = 1, this.filter.type_document = '', this.filter.type_signature = '';
                    const l = this.documentService.isLoading$.subscribe(l => this.isLoading = l);
                    this.subscriptions.push(l);
                }
                ngOnDestroy() {
                    this.subscriptions.forEach(l => l.unsubscribe());
                }
                search(l) {
                    this.documentService.patchState({ searchTerm: l });
                }
                sort(l) {
                    const n = this.sorting;
                    n.column === l ? n.direction = 'asc' === n.direction ? 'desc' : 'asc' : (n.column = l, n.direction = 'asc'), this.documentService.patchState({ sorting: n });
                }
                paginate(l) {
                    this.documentService.patchState({ paginator: l });
                }
                create() {
                    this.edit(void 0);
                }
                edit(l) {
                    const n = this.modalService.open(null, { size: 'xl' });
                    n.componentInstance.id = l, n.result.then(() => this.documentService.fetch(), () => {
                    });
                }
                delete(l) {
                    return Object(M.a)(this, void 0, void 0, function* () {
                        (yield this.notifications.confirmAsync('\xBFSeguro que desea eliminar el registro ?')) && (this.loadingPage = !0, yield this.documentService.delete(l).toPromise(), this.documentService.fetch(), this.loadingPage = !1);
                    });
                }
                deleteSelected() {
                    const l = this.modalService.open(null);
                    l.componentInstance.ids = this.grouping.getSelectedRows(), l.result.then(() => this.documentService.fetch(), () => {
                    });
                }
                updateStatusForSelected() {
                    const l = this.modalService.open(null);
                    l.componentInstance.ids = this.grouping.getSelectedRows(), l.result.then(() => this.documentService.fetch(), () => {
                    });
                }
                fetchSelected() {
                    const l = this.modalService.open(null);
                    l.componentInstance.ids = this.grouping.getSelectedRows(), l.result.then(() => this.documentService.fetch(), () => {
                    });
                }
                searchCriteria() {
                    this.paginator = new z.a();
                    let l, n, e = new Date();
                    null != this.filter.initialDate && (e = new Date(this.filter.initialDate), l = this.filter.initialDate, this.filter.initialDate = e.getDate() + '/' + (e.getMonth() + 1) + '/' + e.getFullYear()), null != this.filter.finalDate && (e = new Date(this.filter.finalDate), n = this.filter.finalDate, this.filter.finalDate = e.getDate() + '/' + (e.getMonth() + 1) + '/' + e.getFullYear()), this.documentService.patchState(Object.assign(Object.assign({}, this.filter), { paginator: this.paginator })), this.filter.initialDate = l, this.filter.finalDate = n;
                }
                downloadFileXML(l) {
                    return Object(M.a)(this, void 0, void 0, function* () {
                        try {
                            this.loadingPage = !0, yield this.documentService.downloadXML(l).toPromise();
                        } catch (n) {
                        }
                        this.loadingPage = !1, this.changeDetector.markForCheck();
                    });
                }
                downloadFileOriginal(l) {
                    return Object(M.a)(this, void 0, void 0, function* () {
                        try {
                            this.loadingPage = !0, yield this.documentService.downloadOriginal(l).toPromise();
                        } catch (n) {
                        }
                        this.loadingPage = !1, this.changeDetector.markForCheck();
                    });
                }
                downloadFileSigned(l) {
                    return Object(M.a)(this, void 0, void 0, function* () {
                        try {
                            this.loadingPage = !0, yield this.documentService.downloadSigned(l).toPromise();
                        } catch (n) {
                        }
                        this.loadingPage = !1, this.changeDetector.markForCheck();
                    });
                }
            }
            var b = e('kAVY'), R = e('ONK0'), P = e('WueC'), E = t['ɵcrt']({
                    encapsulation: 0,
                    styles: [['.actions-menu[_ngcontent-%COMP%]{overflow-y:visible;overflow-x:visible}.bg-table[_ngcontent-%COMP%]{background-color:#173f5f;color:#fff!important}.borderTable[_ngcontent-%COMP%]{border:1px solid #173f5f}']],
                    data: {}
                });
            function D(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform('DOCUMENT.HOME.PENDING')));
                });
            }
            function y(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform('DOCUMENT.HOME.SIGNED')));
                });
            }
            function T(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        '',
                        ' '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform('DOCUMENT.HOME.SIGNATORY')));
                });
            }
            function k(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        '',
                        ' '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform('DOCUMENT.HOME.OBSERVER')));
                });
            }
            function I(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, null, null, null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        '',
                        ''
                    ]))
                ], null, function (l, n) {
                    l(n, 1, 0, n.parent.parent.parent.context.$implicit.execution_date);
                });
            }
            function A(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        '',
                        ' '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform('DOCUMENT.HOME.NOTAPPLY')));
                });
            }
            function x(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 7, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 0, 'br', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 1, 'b', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Firma: '])),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, I)),
                    t['ɵdid'](5, 16384, null, 0, p.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, A)),
                    t['ɵdid'](7, 16384, null, 0, p.NgIf, [
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
                    l(n, 5, 0, null != n.parent.parent.context.$implicit.execution_date), l(n, 7, 0, null == n.parent.parent.context.$implicit.execution_date);
                }, null);
            }
            function N(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, 'b', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        '',
                        ': '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵted'](3, null, [
                        '',
                        ''
                    ])),
                    (l()(), t['ɵeld'](4, 0, null, null, 0, 'br', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](5, 0, null, null, 2, 'b', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](6, null, [
                        '',
                        ': '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](8, 0, null, null, 4, 'span', [], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, T)),
                    t['ɵdid'](10, 16384, null, 0, p.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, k)),
                    t['ɵdid'](12, 16384, null, 0, p.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, x)),
                    t['ɵdid'](14, 16384, null, 0, p.NgIf, [
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
                    l(n, 10, 0, '0' == n.parent.context.$implicit.reciverType), l(n, 12, 0, '1' == n.parent.context.$implicit.reciverType), l(n, 14, 0, '0' == n.parent.context.$implicit.reciverType);
                }, function (l, n) {
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform('DOCUMENT.HOME.EMAIL'))), l(n, 3, 0, n.parent.context.$implicit.email), l(n, 6, 0, t['ɵunv'](n, 6, 0, t['ɵnov'](n, 7).transform('DOCUMENT.HOME.TYPE')));
                });
            }
            function S(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'b', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        '',
                        ''
                    ]))
                ], null, function (l, n) {
                    l(n, 1, 0, n.parent.context.$implicit.name);
                });
            }
            function F(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 16777216, null, null, 3, 'button', [
                        [
                            'class',
                            'btn btn-primary kt-btn--wide'
                        ],
                        [
                            'placement',
                            'top'
                        ],
                        [
                            'style',
                            'margin-left: 5px;'
                        ],
                        [
                            'type',
                            'button'
                        ]
                    ], [
                        [
                            2,
                            'btn-primary',
                            null
                        ],
                        [
                            2,
                            'btn-success',
                            null
                        ]
                    ], null, null, null, null)),
                    t['ɵdid'](1, 737280, null, 0, m.Q, [
                        t.ElementRef,
                        t.Renderer2,
                        t.Injector,
                        t.ComponentFactoryResolver,
                        t.ViewContainerRef,
                        m.R,
                        t.NgZone,
                        p.DOCUMENT,
                        t.ChangeDetectorRef,
                        t.ApplicationRef
                    ], {
                        ngbPopover: [
                            0,
                            'ngbPopover'
                        ],
                        popoverTitle: [
                            1,
                            'popoverTitle'
                        ],
                        placement: [
                            2,
                            'placement'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](2, 0, null, null, 1, 'span', [[
                            'class',
                            'symbol-label'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](3, null, [
                        ' ',
                        ' '
                    ])),
                    (l()(), t['ɵand'](0, null, null, 0))
                ], function (l, n) {
                    l(n, 1, 0, t['ɵnov'](n.parent, 1), t['ɵinlineInterpolate'](1, '', n.parent.context.$implicit.name, ''), 'top');
                }, function (l, n) {
                    l(n, 0, 0, null == n.parent.context.$implicit.execution_date, null != n.parent.context.$implicit.execution_date || '3' === n.parent.parent.context.$implicit.status), l(n, 3, 0, n.parent.context.$implicit.initials);
                });
            }
            function U(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 4, 'div', [[
                            'style',
                            'float: left;'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵand'](0, [[
                            'popContent',
                            2
                        ]], null, 0, null, N)),
                    (l()(), t['ɵand'](0, [[
                            'title',
                            2
                        ]], null, 0, null, S)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, F)),
                    t['ɵdid'](4, 16384, null, 0, p.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null)
                ], function (l, n) {
                    l(n, 4, 0, '0' == n.context.$implicit.reciverType);
                }, null);
            }
            function L(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 8, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 7, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.downloadFileOriginal(l.parent.context.$implicit.id) && t), t;
                    }, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 6, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](4, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon-multimedia-5'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](5, 0, null, null, 3, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](6, 0, null, null, 2, 'a', [[
                            'target',
                            '_blank'
                        ]], [[
                            8,
                            'href',
                            4
                        ]], null, null, null, null)),
                    (l()(), t['ɵted'](7, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 6, 0, t['ɵinlineInterpolate'](1, 'https://verify.centinela.app/', n.parent.context.$implicit.id, '/')), l(n, 7, 0, t['ɵunv'](n, 7, 0, t['ɵnov'](n, 8).transform('DOCUMENT.HOME.VALID')));
                });
            }
            function V(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 21, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 6, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.downloadFileOriginal(l.parent.context.$implicit.id) && t), t;
                    }, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 5, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](4, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon-download'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](5, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](6, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](8, 0, null, null, 6, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.downloadFileSigned(l.parent.context.$implicit.id) && t), t;
                    }, null, null)),
                    (l()(), t['ɵeld'](9, 0, null, null, 5, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](10, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](11, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon-download'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](12, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](13, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](15, 0, null, null, 6, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.downloadFileXML(l.parent.context.$implicit.id) && t), t;
                    }, null, null)),
                    (l()(), t['ɵeld'](16, 0, null, null, 5, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](17, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](18, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon-download'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](19, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](20, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 6, 0, t['ɵunv'](n, 6, 0, t['ɵnov'](n, 7).transform('DOCUMENT.HOME.ORIGINALDOCUMENT'))), l(n, 13, 0, t['ɵunv'](n, 13, 0, t['ɵnov'](n, 14).transform('DOCUMENT.HOME.SIGNEDDOCUMENT'))), l(n, 20, 0, t['ɵunv'](n, 20, 0, t['ɵnov'](n, 21).transform('DOCUMENT.HOME.FILEXML')));
                });
            }
            function H(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 9, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 8, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 2).onClick() && u), u;
                    }, null, null)),
                    t['ɵdid'](2, 540672, null, 0, o.s, [
                        o.r,
                        o.a,
                        [
                            8,
                            null
                        ],
                        t.Renderer2,
                        t.ElementRef
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    t['ɵpad'](3, 1),
                    (l()(), t['ɵeld'](4, 0, null, null, 5, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](5, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](6, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon-edit-1'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](7, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](8, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ])
                ], function (l, n) {
                    var e = l(n, 3, 0, '/document/update/' + n.parent.context.$implicit.id);
                    l(n, 2, 0, e);
                }, function (l, n) {
                    l(n, 8, 0, t['ɵunv'](n, 8, 0, t['ɵnov'](n, 9).transform('DOCUMENT.HOME.EDIT')));
                });
            }
            function $(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 9, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 8, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 2).onClick() && u), u;
                    }, null, null)),
                    t['ɵdid'](2, 540672, null, 0, o.s, [
                        o.r,
                        o.a,
                        [
                            8,
                            null
                        ],
                        t.Renderer2,
                        t.ElementRef
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    t['ɵpad'](3, 1),
                    (l()(), t['ɵeld'](4, 0, null, null, 5, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](5, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](6, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon-interface'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](7, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](8, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ])
                ], function (l, n) {
                    var e = l(n, 3, 0, '../sign-contract/client/' + n.parent.context.$implicit.id);
                    l(n, 2, 0, e);
                }, function (l, n) {
                    l(n, 8, 0, t['ɵunv'](n, 8, 0, t['ɵnov'](n, 9).transform('DOCUMENT.HOME.SIGNDOCUMENT')));
                });
            }
            function Z(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 9, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 8, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 7, 'a', [[
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
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 3).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](3, 671744, null, 0, o.u, [
                        o.r,
                        o.a,
                        p.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    t['ɵpad'](4, 1),
                    (l()(), t['ɵeld'](5, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](6, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon-medical'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](7, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](8, null, [
                        '',
                        ' '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ])
                ], function (l, n) {
                    var e = l(n, 4, 0, '../sign-contract/client/' + n.parent.context.$implicit.id + '/v');
                    l(n, 3, 0, e);
                }, function (l, n) {
                    l(n, 2, 0, t['ɵnov'](n, 3).target, t['ɵnov'](n, 3).href), l(n, 8, 0, t['ɵunv'](n, 8, 0, t['ɵnov'](n, 9).transform('DOCUMENT.HOME.VIEW')));
                });
            }
            function K(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 7, null, null, null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 6, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.delete(l.parent.context.$implicit.id) && t), t;
                    }, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 5, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](4, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon-cancel'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](5, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](6, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 6, 0, t['ɵunv'](n, 6, 0, t['ɵnov'](n, 7).transform('DOCUMENT.HOME.DELETEDOCUMENT')));
                });
            }
            function B(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 43, 'tr', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 5, 'td', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 4, 'span', [[
                            'class',
                            'label label-lg label-inline py-5'
                        ]], [
                        [
                            2,
                            'label-primary',
                            null
                        ],
                        [
                            2,
                            'label-success',
                            null
                        ]
                    ], null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, D)),
                    t['ɵdid'](4, 16384, null, 0, p.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, y)),
                    t['ɵdid'](6, 16384, null, 0, p.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](7, 0, null, null, 1, 'td', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](8, null, [
                        '',
                        ''
                    ])),
                    (l()(), t['ɵeld'](9, 0, null, null, 1, 'td', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](10, null, [
                        '',
                        ''
                    ])),
                    (l()(), t['ɵeld'](11, 0, null, null, 1, 'td', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](12, null, [
                        '',
                        ''
                    ])),
                    (l()(), t['ɵeld'](13, 0, null, null, 2, 'td', [], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, U)),
                    t['ɵdid'](15, 278528, null, 0, p.NgForOf, [
                        t.ViewContainerRef,
                        t.TemplateRef,
                        t.IterableDiffers
                    ], {
                        ngForOf: [
                            0,
                            'ngForOf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](16, 0, null, null, 1, 'td', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](17, null, [
                        '',
                        ''
                    ])),
                    (l()(), t['ɵeld'](18, 0, null, null, 25, 'td', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](19, 0, null, null, 24, 'div', [[
                            'class',
                            'card-toolbar'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](20, 0, null, null, 23, 'div', [
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
                    t['ɵdid'](21, 1720320, null, 2, m.v, [
                        t.ChangeDetectorRef,
                        m.x,
                        p.DOCUMENT,
                        t.NgZone,
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            m.K
                        ]
                    ], {
                        placement: [
                            0,
                            'placement'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 1, { _menu: 0 }),
                    t['ɵqud'](603979776, 2, { _anchor: 0 }),
                    (l()(), t['ɵeld'](24, 0, null, null, 3, 'a', [
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
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 25).dropdown.toggle() && u), 'keydown.ArrowUp' === n && (u = !1 !== t['ɵnov'](l, 25).dropdown.onKeyDown(e) && u), 'keydown.ArrowDown' === n && (u = !1 !== t['ɵnov'](l, 25).dropdown.onKeyDown(e) && u), 'keydown.Home' === n && (u = !1 !== t['ɵnov'](l, 25).dropdown.onKeyDown(e) && u), 'keydown.End' === n && (u = !1 !== t['ɵnov'](l, 25).dropdown.onKeyDown(e) && u), 'keydown.Tab' === n && (u = !1 !== t['ɵnov'](l, 25).dropdown.onKeyDown(e) && u), 'keydown.Shift.Tab' === n && (u = !1 !== t['ɵnov'](l, 25).dropdown.onKeyDown(e) && u), u;
                    }, null, null)),
                    t['ɵdid'](25, 16384, null, 0, m.A, [
                        m.v,
                        t.ElementRef
                    ], null, null),
                    t['ɵprd'](2048, [[
                            2,
                            4
                        ]], m.w, null, [m.A]),
                    (l()(), t['ɵeld'](27, 0, null, null, 0, 'i', [[
                            'class',
                            'ki ki-bold-more-hor'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](28, 0, null, null, 15, 'div', [
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
                        return 'keydown.ArrowUp' === n && (u = !1 !== t['ɵnov'](l, 29).dropdown.onKeyDown(e) && u), 'keydown.ArrowDown' === n && (u = !1 !== t['ɵnov'](l, 29).dropdown.onKeyDown(e) && u), 'keydown.Home' === n && (u = !1 !== t['ɵnov'](l, 29).dropdown.onKeyDown(e) && u), 'keydown.End' === n && (u = !1 !== t['ɵnov'](l, 29).dropdown.onKeyDown(e) && u), 'keydown.Enter' === n && (u = !1 !== t['ɵnov'](l, 29).dropdown.onKeyDown(e) && u), 'keydown.Space' === n && (u = !1 !== t['ɵnov'](l, 29).dropdown.onKeyDown(e) && u), 'keydown.Tab' === n && (u = !1 !== t['ɵnov'](l, 29).dropdown.onKeyDown(e) && u), 'keydown.Shift.Tab' === n && (u = !1 !== t['ɵnov'](l, 29).dropdown.onKeyDown(e) && u), u;
                    }, null, null)),
                    t['ɵdid'](29, 16384, [[
                            1,
                            4
                        ]], 1, m.y, [
                        m.v,
                        t.ElementRef
                    ], null, null),
                    t['ɵqud'](603979776, 3, { menuItems: 1 }),
                    (l()(), t['ɵeld'](31, 0, null, null, 12, 'ul', [[
                            'class',
                            'navi navi-hover py-5'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, L)),
                    t['ɵdid'](33, 16384, null, 0, p.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, V)),
                    t['ɵdid'](35, 16384, null, 0, p.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, H)),
                    t['ɵdid'](37, 16384, null, 0, p.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, $)),
                    t['ɵdid'](39, 16384, null, 0, p.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Z)),
                    t['ɵdid'](41, 16384, null, 0, p.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, K)),
                    t['ɵdid'](43, 16384, null, 0, p.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null)
                ], function (l, n) {
                    l(n, 4, 0, '1' === n.context.$implicit.status || '2' === n.context.$implicit.status), l(n, 6, 0, '3' === n.context.$implicit.status), l(n, 15, 0, n.context.$implicit.recivers), l(n, 21, 0, 'bottom-right'), l(n, 33, 0, '3' === n.context.$implicit.status && '' != n.context.$implicit.delete_at), l(n, 35, 0, '3' === n.context.$implicit.status && '' == n.context.$implicit.delete_at), l(n, 37, 0, '1' === n.context.$implicit.status && n.context.$implicit.lowner && '' == n.context.$implicit.delete_at), l(n, 39, 0, ('1' === n.context.$implicit.status || '2' === n.context.$implicit.status) && '0' == n.context.$implicit.reciver_type && null == n.context.$implicit.signature_date && '' == n.context.$implicit.delete_at), l(n, 41, 0, '' == n.context.$implicit.delete_at), l(n, 43, 0, ('1' === n.context.$implicit.status || '2' === n.context.$implicit.status) && n.context.$implicit.lowner);
                }, function (l, n) {
                    l(n, 2, 0, '1' === n.context.$implicit.status || '2' === n.context.$implicit.status, '3' === n.context.$implicit.status), l(n, 8, 0, n.context.$implicit.name), l(n, 10, 0, '1' === n.context.$implicit.signature_type ? 'e.Firma' : 'DIGITAL'), l(n, 12, 0, '1' == n.context.$implicit.constancy_nom151 ? 'Centinela' : 'Lite'), l(n, 17, 0, n.context.$implicit.created_at), l(n, 20, 0, t['ɵnov'](n, 21).isOpen()), l(n, 24, 0, t['ɵnov'](n, 25).dropdown.isOpen()), l(n, 28, 0, !0, t['ɵnov'](n, 29).dropdown.isOpen(), t['ɵnov'](n, 29).placement);
                });
            }
            function j(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 166, 'ce-layout-dashboard', [], null, null, null, v.b, v.a)),
                    t['ɵdid'](1, 638976, null, 0, f.a, [t.ChangeDetectorRef], {
                        isLoading: [
                            0,
                            'isLoading'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](2, 0, null, 0, 164, 'div', [
                        [
                            'class',
                            'card card-custom gutter-b'
                        ],
                        [
                            'content',
                            ''
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 9, 'div', [[
                            'class',
                            'card-header'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](4, 0, null, null, 3, 'div', [[
                            'class',
                            'card-title'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](5, 0, null, null, 2, 'h3', [[
                            'class',
                            'card-label'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](6, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](8, 0, null, null, 4, 'div', [[
                            'class',
                            'card-toolbar'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](9, 0, null, null, 3, 'a', [
                        [
                            'class',
                            'btn btn-light-success'
                        ],
                        [
                            'routerLink',
                            '/document/create'
                        ],
                        [
                            'style',
                            'color:#fff !important;'
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
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 10).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](10, 671744, null, 0, o.u, [
                        o.r,
                        o.a,
                        p.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    (l()(), t['ɵted'](11, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](13, 0, null, null, 153, 'div', [[
                            'class',
                            'card-body'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](14, 0, null, null, 68, 'div', [[
                            'class',
                            'form form-label-right'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](15, 0, null, null, 67, 'div', [[
                            'class',
                            'form-group row'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](16, 0, null, null, 20, 'div', [[
                            'class',
                            'col-lg-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](17, 0, null, null, 19, 'div', [[
                            'class',
                            'row'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](18, 0, null, null, 18, 'div', [[
                            'class',
                            'col-lg-12'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](19, 0, null, null, 15, 'select', [
                        [
                            'class',
                            'form-control'
                        ],
                        [
                            'placeholder',
                            'Filter by Status'
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
                        var u = !0, i = l.component;
                        return 'change' === n && (u = !1 !== t['ɵnov'](l, 20).onChange(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 20).onTouched() && u), 'ngModelChange' === n && (u = !1 !== (i.filter.status = e) && u), u;
                    }, null, null)),
                    t['ɵdid'](20, 16384, null, 0, C.w, [
                        t.Renderer2,
                        t.ElementRef
                    ], null, null),
                    t['ɵprd'](1024, null, C.o, function (l) {
                        return [l];
                    }, [C.w]),
                    t['ɵdid'](22, 671744, null, 0, C.t, [
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
                            C.o
                        ]
                    ], {
                        model: [
                            0,
                            'model'
                        ]
                    }, { update: 'ngModelChange' }),
                    t['ɵprd'](2048, null, C.p, null, [C.t]),
                    t['ɵdid'](24, 16384, null, 0, C.q, [[
                            4,
                            C.p
                        ]], null, null),
                    (l()(), t['ɵeld'](25, 0, null, null, 4, 'option', [
                        [
                            'selected',
                            ''
                        ],
                        [
                            'value',
                            '1'
                        ]
                    ], null, null, null, null, null)),
                    t['ɵdid'](26, 147456, null, 0, C.u, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            C.w
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    t['ɵdid'](27, 147456, null, 0, C.B, [
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
                    (l()(), t['ɵted'](28, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](30, 0, null, null, 4, 'option', [[
                            'value',
                            '3'
                        ]], null, null, null, null, null)),
                    t['ɵdid'](31, 147456, null, 0, C.u, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            C.w
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    t['ɵdid'](32, 147456, null, 0, C.B, [
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
                    (l()(), t['ɵted'](33, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](35, 0, null, null, 1, 'small', [[
                            'class',
                            'form-text text-muted'
                        ]], [[
                            8,
                            'innerHTML',
                            1
                        ]], null, null, null, null)),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](37, 0, null, null, 16, 'div', [[
                            'class',
                            'col-lg-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](38, 0, null, null, 13, 'div', [[
                            'class',
                            'input-group'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](39, 16777216, null, null, 9, 'input', [
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
                        var u = !0, i = l.component;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 41)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 41).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 41)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 41)._compositionEnd(e.target.value) && u), 'input' === n && (u = !1 !== t['ɵnov'](l, 42).manualDateChange(e.target.value) && u), 'change' === n && (u = !1 !== t['ɵnov'](l, 42).manualDateChange(e.target.value, !0) && u), 'focus' === n && (u = !1 !== t['ɵnov'](l, 42).onFocus() && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 42).onBlur() && u), 'ngModelChange' === n && (u = !1 !== (i.filter.initialDate = e) && u), u;
                    }, null, null)),
                    t['ɵprd'](6144, null, m.q, null, [m.D]),
                    t['ɵdid'](41, 16384, null, 0, C.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            C.b
                        ]
                    ], null, null),
                    t['ɵdid'](42, 671744, [[
                            'd22',
                            4
                        ]], 0, m.C, [
                        m.o,
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.Renderer2,
                        t.ComponentFactoryResolver,
                        t.NgZone,
                        m.h,
                        m.n,
                        p.DOCUMENT,
                        t.ChangeDetectorRef,
                        m.D
                    ], null, null),
                    t['ɵprd'](1024, null, C.n, function (l) {
                        return [l];
                    }, [m.C]),
                    t['ɵprd'](1024, null, C.o, function (l, n) {
                        return [
                            l,
                            n
                        ];
                    }, [
                        C.e,
                        m.C
                    ]),
                    t['ɵdid'](45, 671744, null, 0, C.t, [
                        [
                            8,
                            null
                        ],
                        [
                            6,
                            C.n
                        ],
                        [
                            8,
                            null
                        ],
                        [
                            6,
                            C.o
                        ]
                    ], {
                        model: [
                            0,
                            'model'
                        ]
                    }, { update: 'ngModelChange' }),
                    t['ɵprd'](2048, null, C.p, null, [C.t]),
                    t['ɵdid'](47, 16384, null, 0, C.q, [[
                            4,
                            C.p
                        ]], null, null),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](49, 0, null, null, 2, 'div', [[
                            'class',
                            'input-group-append'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](50, 0, null, null, 1, 'button', [
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
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 42).toggle() && u), u;
                    }, null, null)),
                    (l()(), t['ɵeld'](51, 0, null, null, 0, 'i', [
                        [
                            'class',
                            'fa fa-calendar'
                        ],
                        [
                            'style',
                            'color:#fff !important;'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](52, 0, null, null, 1, 'small', [[
                            'class',
                            'form-text text-muted'
                        ]], [[
                            8,
                            'innerHTML',
                            1
                        ]], null, null, null, null)),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](54, 0, null, null, 14, 'div', [[
                            'class',
                            'col-lg-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](55, 0, null, null, 13, 'div', [[
                            'class',
                            'input-group'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](56, 16777216, null, null, 9, 'input', [
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
                        var u = !0, i = l.component;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 58)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 58).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 58)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 58)._compositionEnd(e.target.value) && u), 'input' === n && (u = !1 !== t['ɵnov'](l, 59).manualDateChange(e.target.value) && u), 'change' === n && (u = !1 !== t['ɵnov'](l, 59).manualDateChange(e.target.value, !0) && u), 'focus' === n && (u = !1 !== t['ɵnov'](l, 59).onFocus() && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 59).onBlur() && u), 'ngModelChange' === n && (u = !1 !== (i.filter.finalDate = e) && u), u;
                    }, null, null)),
                    t['ɵprd'](6144, null, m.q, null, [m.D]),
                    t['ɵdid'](58, 16384, null, 0, C.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            C.b
                        ]
                    ], null, null),
                    t['ɵdid'](59, 671744, [[
                            'd21',
                            4
                        ]], 0, m.C, [
                        m.o,
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.Renderer2,
                        t.ComponentFactoryResolver,
                        t.NgZone,
                        m.h,
                        m.n,
                        p.DOCUMENT,
                        t.ChangeDetectorRef,
                        m.D
                    ], null, null),
                    t['ɵprd'](1024, null, C.n, function (l) {
                        return [l];
                    }, [m.C]),
                    t['ɵprd'](1024, null, C.o, function (l, n) {
                        return [
                            l,
                            n
                        ];
                    }, [
                        C.e,
                        m.C
                    ]),
                    t['ɵdid'](62, 671744, null, 0, C.t, [
                        [
                            8,
                            null
                        ],
                        [
                            6,
                            C.n
                        ],
                        [
                            8,
                            null
                        ],
                        [
                            6,
                            C.o
                        ]
                    ], {
                        model: [
                            0,
                            'model'
                        ]
                    }, { update: 'ngModelChange' }),
                    t['ɵprd'](2048, null, C.p, null, [C.t]),
                    t['ɵdid'](64, 16384, null, 0, C.q, [[
                            4,
                            C.p
                        ]], null, null),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](66, 0, null, null, 2, 'div', [[
                            'class',
                            'input-group-append'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](67, 0, null, null, 1, 'button', [
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
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 59).toggle() && u), u;
                    }, null, null)),
                    (l()(), t['ɵeld'](68, 0, null, null, 0, 'i', [
                        [
                            'class',
                            'fa fa-calendar'
                        ],
                        [
                            'style',
                            'color:#fff !important;'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](69, 0, null, null, 10, 'div', [[
                            'class',
                            'col-lg-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](70, 0, null, null, 6, 'input', [
                        [
                            'class',
                            'form-control'
                        ],
                        [
                            'type',
                            'text'
                        ],
                        [
                            'value',
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
                        var u = !0, i = l.component;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 71)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 71).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 71)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 71)._compositionEnd(e.target.value) && u), 'ngModelChange' === n && (u = !1 !== (i.filter.documentName = e) && u), u;
                    }, null, null)),
                    t['ɵdid'](71, 16384, null, 0, C.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            C.b
                        ]
                    ], null, null),
                    t['ɵprd'](1024, null, C.o, function (l) {
                        return [l];
                    }, [C.e]),
                    t['ɵdid'](73, 671744, null, 0, C.t, [
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
                            C.o
                        ]
                    ], {
                        model: [
                            0,
                            'model'
                        ]
                    }, { update: 'ngModelChange' }),
                    t['ɵprd'](2048, null, C.p, null, [C.t]),
                    t['ɵdid'](75, 16384, null, 0, C.q, [[
                            4,
                            C.p
                        ]], null, null),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](77, 0, null, null, 2, 'small', [[
                            'class',
                            'form-text text-muted'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](78, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](80, 0, null, null, 2, 'div', [[
                            'class',
                            'col-lg-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](81, 0, null, null, 1, 'button', [
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
                    (l()(), t['ɵeld'](82, 0, null, null, 0, 'i', [
                        [
                            'class',
                            'fa fa-search'
                        ],
                        [
                            'style',
                            'color:#fff !important;'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](83, 0, null, null, 53, 'div', [[
                            'class',
                            'form form-label-right'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](84, 0, null, null, 52, 'div', [[
                            'class',
                            'form-group row'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](85, 0, null, null, 25, 'div', [[
                            'class',
                            'col-lg-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](86, 0, null, null, 24, 'div', [[
                            'class',
                            'row'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](87, 0, null, null, 23, 'div', [[
                            'class',
                            'col-lg-12'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](88, 0, null, null, 20, 'select', [
                        [
                            'class',
                            'form-control'
                        ],
                        [
                            'placeholder',
                            'Filter by Status'
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
                        var u = !0, i = l.component;
                        return 'change' === n && (u = !1 !== t['ɵnov'](l, 89).onChange(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 89).onTouched() && u), 'ngModelChange' === n && (u = !1 !== (i.filter.type_document = e) && u), u;
                    }, null, null)),
                    t['ɵdid'](89, 16384, null, 0, C.w, [
                        t.Renderer2,
                        t.ElementRef
                    ], null, null),
                    t['ɵprd'](1024, null, C.o, function (l) {
                        return [l];
                    }, [C.w]),
                    t['ɵdid'](91, 671744, null, 0, C.t, [
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
                            C.o
                        ]
                    ], {
                        model: [
                            0,
                            'model'
                        ]
                    }, { update: 'ngModelChange' }),
                    t['ɵprd'](2048, null, C.p, null, [C.t]),
                    t['ɵdid'](93, 16384, null, 0, C.q, [[
                            4,
                            C.p
                        ]], null, null),
                    (l()(), t['ɵeld'](94, 0, null, null, 4, 'option', [[
                            'value',
                            ''
                        ]], null, null, null, null, null)),
                    t['ɵdid'](95, 147456, null, 0, C.u, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            C.w
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    t['ɵdid'](96, 147456, null, 0, C.B, [
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
                    (l()(), t['ɵted'](97, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](99, 0, null, null, 4, 'option', [[
                            'value',
                            '1'
                        ]], null, null, null, null, null)),
                    t['ɵdid'](100, 147456, null, 0, C.u, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            C.w
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    t['ɵdid'](101, 147456, null, 0, C.B, [
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
                    (l()(), t['ɵted'](102, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](104, 0, null, null, 4, 'option', [[
                            'value',
                            '2'
                        ]], null, null, null, null, null)),
                    t['ɵdid'](105, 147456, null, 0, C.u, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            C.w
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    t['ɵdid'](106, 147456, null, 0, C.B, [
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
                    (l()(), t['ɵted'](107, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](109, 0, null, null, 1, 'small', [[
                            'class',
                            'form-text text-muted'
                        ]], [[
                            8,
                            'innerHTML',
                            1
                        ]], null, null, null, null)),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](111, 0, null, null, 25, 'div', [[
                            'class',
                            'col-lg-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](112, 0, null, null, 24, 'div', [[
                            'class',
                            'row'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](113, 0, null, null, 23, 'div', [[
                            'class',
                            'col-lg-12'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](114, 0, null, null, 20, 'select', [
                        [
                            'class',
                            'form-control'
                        ],
                        [
                            'placeholder',
                            'Filter by Status'
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
                        var u = !0, i = l.component;
                        return 'change' === n && (u = !1 !== t['ɵnov'](l, 115).onChange(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 115).onTouched() && u), 'ngModelChange' === n && (u = !1 !== (i.filter.type_signature = e) && u), u;
                    }, null, null)),
                    t['ɵdid'](115, 16384, null, 0, C.w, [
                        t.Renderer2,
                        t.ElementRef
                    ], null, null),
                    t['ɵprd'](1024, null, C.o, function (l) {
                        return [l];
                    }, [C.w]),
                    t['ɵdid'](117, 671744, null, 0, C.t, [
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
                            C.o
                        ]
                    ], {
                        model: [
                            0,
                            'model'
                        ]
                    }, { update: 'ngModelChange' }),
                    t['ɵprd'](2048, null, C.p, null, [C.t]),
                    t['ɵdid'](119, 16384, null, 0, C.q, [[
                            4,
                            C.p
                        ]], null, null),
                    (l()(), t['ɵeld'](120, 0, null, null, 4, 'option', [[
                            'value',
                            ''
                        ]], null, null, null, null, null)),
                    t['ɵdid'](121, 147456, null, 0, C.u, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            C.w
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    t['ɵdid'](122, 147456, null, 0, C.B, [
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
                    (l()(), t['ɵted'](123, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](125, 0, null, null, 4, 'option', [[
                            'value',
                            '1'
                        ]], null, null, null, null, null)),
                    t['ɵdid'](126, 147456, null, 0, C.u, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            C.w
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    t['ɵdid'](127, 147456, null, 0, C.B, [
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
                    (l()(), t['ɵted'](128, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](130, 0, null, null, 4, 'option', [[
                            'value',
                            '3'
                        ]], null, null, null, null, null)),
                    t['ɵdid'](131, 147456, null, 0, C.u, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            C.w
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    t['ɵdid'](132, 147456, null, 0, C.B, [
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
                    (l()(), t['ɵted'](133, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](135, 0, null, null, 1, 'small', [[
                            'class',
                            'form-text text-muted'
                        ]], [[
                            8,
                            'innerHTML',
                            1
                        ]], null, null, null, null)),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](137, 0, null, null, 27, 'div', [[
                            'class',
                            'table-responsive angular-bootstrap-table'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](138, 0, null, null, 26, 'table', [[
                            'class',
                            'table table-head-custom table-vertical-center overflow-inherit borderTable'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](139, 0, null, null, 21, 'thead', [[
                            'class',
                            'bg-table'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](140, 0, null, null, 2, 'th', [
                        [
                            'style',
                            'color:#ffffff;'
                        ],
                        [
                            'width',
                            '15%'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵted'](141, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](143, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](144, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](146, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](147, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](149, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](150, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](152, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](153, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](155, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](156, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](158, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](159, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](161, 0, null, null, 3, 'tbody', [], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, B)),
                    t['ɵdid'](163, 278528, null, 0, p.NgForOf, [
                        t.ViewContainerRef,
                        t.TemplateRef,
                        t.IterableDiffers
                    ], {
                        ngForOf: [
                            0,
                            'ngForOf'
                        ]
                    }, null),
                    t['ɵpid'](131072, p.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵeld'](165, 0, null, null, 1, 'app-paginator', [[
                            'class',
                            'd-flex justify-content-between align-items-center flex-wrap'
                        ]], null, [[
                            null,
                            'paginate'
                        ]], function (l, n, e) {
                        var t = !0;
                        return 'paginate' === n && (t = !1 !== l.component.paginate(e) && t), t;
                    }, h.b, h.a)),
                    t['ɵdid'](166, 114688, null, 0, w.a, [], {
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
                    l(n, 1, 0, e.loadingPage), l(n, 10, 0, '/document/create'), l(n, 22, 0, e.filter.status), l(n, 26, 0, '1'), l(n, 27, 0, '1'), l(n, 31, 0, '3'), l(n, 32, 0, '3'), l(n, 45, 0, e.filter.initialDate), l(n, 62, 0, e.filter.finalDate), l(n, 73, 0, e.filter.documentName), l(n, 91, 0, e.filter.type_document), l(n, 95, 0, ''), l(n, 96, 0, ''), l(n, 100, 0, '1'), l(n, 101, 0, '1'), l(n, 105, 0, '2'), l(n, 106, 0, '2'), l(n, 117, 0, e.filter.type_signature), l(n, 121, 0, ''), l(n, 122, 0, ''), l(n, 126, 0, '1'), l(n, 127, 0, '1'), l(n, 131, 0, '3'), l(n, 132, 0, '3'), l(n, 163, 0, t['ɵunv'](n, 163, 0, t['ɵnov'](n, 164).transform(e.documentService.items$))), l(n, 166, 0, e.paginator, e.isLoading);
                }, function (l, n) {
                    l(n, 6, 0, t['ɵunv'](n, 6, 0, t['ɵnov'](n, 7).transform('DOCUMENT.HOME.TITLE'))), l(n, 9, 0, t['ɵnov'](n, 10).target, t['ɵnov'](n, 10).href), l(n, 11, 0, t['ɵunv'](n, 11, 0, t['ɵnov'](n, 12).transform('DOCUMENT.HOME.NEW_DOCUMENT'))), l(n, 19, 0, t['ɵnov'](n, 24).ngClassUntouched, t['ɵnov'](n, 24).ngClassTouched, t['ɵnov'](n, 24).ngClassPristine, t['ɵnov'](n, 24).ngClassDirty, t['ɵnov'](n, 24).ngClassValid, t['ɵnov'](n, 24).ngClassInvalid, t['ɵnov'](n, 24).ngClassPending), l(n, 28, 0, t['ɵunv'](n, 28, 0, t['ɵnov'](n, 29).transform('DOCUMENT.HOME.PENDING'))), l(n, 33, 0, t['ɵunv'](n, 33, 0, t['ɵnov'](n, 34).transform('DOCUMENT.HOME.SIGNED'))), l(n, 35, 0, t['ɵunv'](n, 35, 0, t['ɵnov'](n, 36).transform('DOCUMENT.HOME.FILTERBYESTATUS'))), l(n, 39, 0, t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 39, 0, t['ɵnov'](n, 48).transform('DOCUMENT.HOME.INITIALDATE')), ''), t['ɵnov'](n, 42).disabled, t['ɵnov'](n, 47).ngClassUntouched, t['ɵnov'](n, 47).ngClassTouched, t['ɵnov'](n, 47).ngClassPristine, t['ɵnov'](n, 47).ngClassDirty, t['ɵnov'](n, 47).ngClassValid, t['ɵnov'](n, 47).ngClassInvalid, t['ɵnov'](n, 47).ngClassPending), l(n, 52, 0, t['ɵunv'](n, 52, 0, t['ɵnov'](n, 53).transform('DOCUMENT.HOME.FILTERBYRANGEDATE'))), l(n, 56, 0, t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 56, 0, t['ɵnov'](n, 65).transform('DOCUMENT.HOME.FINALDATE')), ''), t['ɵnov'](n, 59).disabled, t['ɵnov'](n, 64).ngClassUntouched, t['ɵnov'](n, 64).ngClassTouched, t['ɵnov'](n, 64).ngClassPristine, t['ɵnov'](n, 64).ngClassDirty, t['ɵnov'](n, 64).ngClassValid, t['ɵnov'](n, 64).ngClassInvalid, t['ɵnov'](n, 64).ngClassPending), l(n, 70, 0, t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 70, 0, t['ɵnov'](n, 76).transform('DOCUMENT.HOME.SEARCH')), ''), t['ɵnov'](n, 75).ngClassUntouched, t['ɵnov'](n, 75).ngClassTouched, t['ɵnov'](n, 75).ngClassPristine, t['ɵnov'](n, 75).ngClassDirty, t['ɵnov'](n, 75).ngClassValid, t['ɵnov'](n, 75).ngClassInvalid, t['ɵnov'](n, 75).ngClassPending), l(n, 78, 0, t['ɵunv'](n, 78, 0, t['ɵnov'](n, 79).transform('DOCUMENT.HOME.SEARCH'))), l(n, 88, 0, t['ɵnov'](n, 93).ngClassUntouched, t['ɵnov'](n, 93).ngClassTouched, t['ɵnov'](n, 93).ngClassPristine, t['ɵnov'](n, 93).ngClassDirty, t['ɵnov'](n, 93).ngClassValid, t['ɵnov'](n, 93).ngClassInvalid, t['ɵnov'](n, 93).ngClassPending), l(n, 97, 0, t['ɵunv'](n, 97, 0, t['ɵnov'](n, 98).transform('DOCUMENT.HOME.ALL'))), l(n, 102, 0, t['ɵunv'](n, 102, 0, t['ɵnov'](n, 103).transform('Centinela'))), l(n, 107, 0, t['ɵunv'](n, 107, 0, t['ɵnov'](n, 108).transform('Lite'))), l(n, 109, 0, t['ɵunv'](n, 109, 0, t['ɵnov'](n, 110).transform('DOCUMENT.HOME.TYPEDOCUMENT'))), l(n, 114, 0, t['ɵnov'](n, 119).ngClassUntouched, t['ɵnov'](n, 119).ngClassTouched, t['ɵnov'](n, 119).ngClassPristine, t['ɵnov'](n, 119).ngClassDirty, t['ɵnov'](n, 119).ngClassValid, t['ɵnov'](n, 119).ngClassInvalid, t['ɵnov'](n, 119).ngClassPending), l(n, 123, 0, t['ɵunv'](n, 123, 0, t['ɵnov'](n, 124).transform('DOCUMENT.HOME.ALL'))), l(n, 128, 0, t['ɵunv'](n, 128, 0, t['ɵnov'](n, 129).transform('e.Firma'))), l(n, 133, 0, t['ɵunv'](n, 133, 0, t['ɵnov'](n, 134).transform('Digital'))), l(n, 135, 0, t['ɵunv'](n, 135, 0, t['ɵnov'](n, 136).transform('DOCUMENT.HOME.SIGNATURETYPE'))), l(n, 141, 0, t['ɵunv'](n, 141, 0, t['ɵnov'](n, 142).transform('DOCUMENT.HOME.STATUS'))), l(n, 144, 0, t['ɵunv'](n, 144, 0, t['ɵnov'](n, 145).transform('DOCUMENT.HOME.NAME'))), l(n, 147, 0, t['ɵunv'](n, 147, 0, t['ɵnov'](n, 148).transform('DOCUMENT.HOME.SIGNATURETYPE'))), l(n, 150, 0, t['ɵunv'](n, 150, 0, t['ɵnov'](n, 151).transform('DOCUMENT.HOME.TYPEDOCUMENT'))), l(n, 153, 0, t['ɵunv'](n, 153, 0, t['ɵnov'](n, 154).transform('DOCUMENT.HOME.SIGNATORYS'))), l(n, 156, 0, t['ɵunv'](n, 156, 0, t['ɵnov'](n, 157).transform('DOCUMENT.HOME.CREATED_DATE'))), l(n, 159, 0, t['ɵunv'](n, 159, 0, t['ɵnov'](n, 160).transform('DOCUMENT.HOME.ACTIONS')));
                });
            }
            function W(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, 'ng-component', [], null, null, null, j, E)),
                    t['ɵprd'](4608, null, m.n, O.a, []),
                    t['ɵprd'](4608, null, m.o, O.b, []),
                    t['ɵdid'](3, 245760, null, 0, _, [
                        C.f,
                        m.E,
                        b.a,
                        R.a,
                        P.a,
                        t.ChangeDetectorRef
                    ], null, null)
                ], function (l, n) {
                    l(n, 3, 0);
                }, null);
            }
            var q = t['ɵccf']('ng-component', _, W, {}, {}, []), G = e('lnN7'), J = e('alHs'), Y = e('cUpR'), X = e('PGiN'), Q = e('ceAI'), ll = e('wf2+'), nl = e('0YeR'), el = e('XWCS'), tl = e('tYkK'), ul = e('HeVh'), il = e('SCoL'), ol = e('vZwM'), al = e('Rgb0'), rl = e('px0D'), dl = e('Iwqi'), sl = e('iBfQ');
            class cl extends sl.a {
                constructor(l, n) {
                    super(l, n), this.setEntityForm = this.formBuilder.group({
                        name: [
                            null,
                            [
                                C.x.required,
                                C.x.maxLength(130)
                            ]
                        ],
                        signatureType: [
                            null,
                            [C.x.required]
                        ],
                        documentType: [
                            null,
                            [C.x.required]
                        ],
                        constancy_nom151: [
                            null,
                            [C.x.required]
                        ],
                        tenant_id: [
                            null,
                            []
                        ]
                    });
                }
            }
            var gl = e('ka1k'), pl = e('07VJ');
            class ml {
                constructor(l, n, e, u) {
                    this._validations = l, this.store = n, this.changeDetectorRef = e, this.documentService = u, this.formChange = new t.EventEmitter(), this.changeSelectDocument = new t.EventEmitter(), this.changeLoadOwner = new t.EventEmitter(), this.isVisiblePassword = !1, this.dead_line = '', this.tenant = [], this.tenant_default = {
                        id: void 0,
                        name: ''
                    }, this.document_lite = 1, this.document_centinela = 1, this.name = '', this.id = 0, this.loading = !1;
                }
                ngAfterViewInit() {
                    this.form || (this.form = this._validations.entityForm(), this.formChange.emit(this.form), this.changeLoadOwner.emit(!0));
                }
                ngOnInit() {
                    this.form || (this.form = this._validations.entityForm(), this.loadOwner(), this.formChange.emit(this.form)), this.user2$ = JSON.parse(localStorage.getItem('token')), this.user$ = this.store.select(pl.b), this.form.get('signatureType').setValue(2), 'N' == this.mode && (this.document_lite = this.user2$.document, this.document_centinela = this.user2$.document_n51, this.user2$.document > 0 ? this.form.get('constancy_nom151').setValue(2) : this.user2$.document_n51 > 0 && this.form.get('constancy_nom151').setValue(1));
                }
                loadOwner() {
                    return Object(M.a)(this, void 0, void 0, function* () {
                        this.loading = !0, this.tenant = yield this.documentService.getTenants().toPromise(), this.changeDetectorRef.markForCheck(), this.tenant.length > 1 && this.form.get('tenant_id').setValue(0), this.tenant_default.name = this.user2$.name, this.tenant_default.id = Number(this.user2$.id), this.tenant.push(this.tenant_default), this.loading = !1;
                    });
                }
                onChangeTenant(l) {
                    return Object(M.a)(this, void 0, void 0, function* () {
                        l = 0 == l ? this.user2$.id : l, this.loading = !0, this.sing_ent = yield this.documentService.getCredits(l).toPromise(), this.document_lite = this.sing_ent.lite, this.document_centinela = this.sing_ent.centinela, this.loading = !1, this.document_lite > 0 ? this.form.get('constancy_nom151').setValue(2) : this.document_centinela > 0 && this.form.get('constancy_nom151').setValue(1), this.changeDetectorRef.markForCheck();
                    });
                }
                onChangeDocument(l) {
                    this.changeSelectDocument.emit(l);
                }
            }
            var vl = e('tqRt'), fl = t['ɵcrt']({
                    encapsulation: 0,
                    styles: [['']],
                    data: {}
                });
            function Cl(l) {
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
            function hl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Cl)),
                    t['ɵdid'](1, 16384, null, 0, p.NgIf, [
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
            function wl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, 'option', [], null, null, null, null, null)),
                    t['ɵdid'](1, 147456, null, 0, C.u, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            C.w
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    t['ɵdid'](2, 147456, null, 0, C.B, [
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
                        ''
                    ]))
                ], function (l, n) {
                    l(n, 1, 0, n.context.$implicit.id), l(n, 2, 0, n.context.$implicit.id);
                }, function (l, n) {
                    l(n, 3, 0, n.context.$implicit.name);
                });
            }
            function Ol(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 17, 'div', [[
                            'class',
                            'col-xl-4'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 16, 'div', [[
                            'class',
                            'form-group'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 2, 'label', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](3, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](5, 0, null, null, 12, 'select', [
                        [
                            'class',
                            'form-control'
                        ],
                        [
                            'formControlName',
                            'tenant_id'
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
                        var u = !0, i = l.component;
                        return 'change' === n && (u = !1 !== t['ɵnov'](l, 6).onChange(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 6).onTouched() && u), 'change' === n && (u = !1 !== i.onChangeTenant(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](6, 16384, null, 0, C.w, [
                        t.Renderer2,
                        t.ElementRef
                    ], null, null),
                    t['ɵprd'](1024, null, C.o, function (l) {
                        return [l];
                    }, [C.w]),
                    t['ɵdid'](8, 671744, null, 0, C.i, [
                        [
                            3,
                            C.d
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
                            C.o
                        ],
                        [
                            2,
                            C.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, null, C.p, null, [C.i]),
                    t['ɵdid'](10, 16384, null, 0, C.q, [[
                            4,
                            C.p
                        ]], null, null),
                    (l()(), t['ɵeld'](11, 0, null, null, 4, 'option', [], null, null, null, null, null)),
                    t['ɵdid'](12, 147456, null, 0, C.u, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            C.w
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    t['ɵdid'](13, 147456, null, 0, C.B, [
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
                    (l()(), t['ɵted'](14, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, p.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, wl)),
                    t['ɵdid'](17, 278528, null, 0, p.NgForOf, [
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
                    l(n, 8, 0, 'tenant_id'), l(n, 12, 0, 0), l(n, 13, 0, 0), l(n, 17, 0, e.tenant);
                }, function (l, n) {
                    var e = n.component;
                    l(n, 3, 0, t['ɵunv'](n, 3, 0, t['ɵnov'](n, 4).transform('DOCUMENT.CREATE.FORM.OWNER'))), l(n, 5, 0, t['ɵnov'](n, 10).ngClassUntouched, t['ɵnov'](n, 10).ngClassTouched, t['ɵnov'](n, 10).ngClassPristine, t['ɵnov'](n, 10).ngClassDirty, t['ɵnov'](n, 10).ngClassValid, t['ɵnov'](n, 10).ngClassInvalid, t['ɵnov'](n, 10).ngClassPending), l(n, 14, 0, t['ɵunv'](n, 14, 0, t['ɵnov'](n, 15).transform(e.user$)).name);
                });
            }
            function Ml(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 106, 'form', [
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
                        return 'submit' === n && (u = !1 !== t['ɵnov'](l, 2).onSubmit(e) && u), 'reset' === n && (u = !1 !== t['ɵnov'](l, 2).onReset() && u), u;
                    }, null, null)),
                    t['ɵdid'](1, 16384, null, 0, C.C, [], null, null),
                    t['ɵdid'](2, 540672, null, 0, C.k, [
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
                    t['ɵprd'](2048, null, C.d, null, [C.k]),
                    t['ɵdid'](4, 16384, null, 0, C.r, [[
                            6,
                            C.d
                        ]], null, null),
                    t['ɵdid'](5, 671744, null, 0, ll.b, [
                        nl.a,
                        t.ElementRef,
                        t.Renderer2
                    ], {
                        nzLayout: [
                            0,
                            'nzLayout'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](6, 0, null, null, 49, 'div', [
                        [
                            'class',
                            'row'
                        ],
                        [
                            'content',
                            ''
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](7, 0, null, null, 22, 'div', [[
                            'class',
                            'col-xl-4'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](8, 0, null, null, 21, 'div', [[
                            'class',
                            'form-group'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](9, 0, null, null, 20, 'nz-form-item', [], [
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
                    ], null, null, el.e, el.b)),
                    t['ɵdid'](10, 4931584, null, 0, tl.c, [
                        t.ElementRef,
                        t.Renderer2,
                        ul.b,
                        t.NgZone,
                        il.a,
                        ol.b
                    ], null, null),
                    t['ɵdid'](11, 180224, null, 0, ll.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](12, 0, null, 0, 2, 'label', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](13, null, [
                        '',
                        ' '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](15, 0, null, 0, 14, 'nz-form-control', [[
                            'nzHasFeedback',
                            ''
                        ]], [[
                            4,
                            'flex',
                            null
                        ]], null, null, el.d, el.a)),
                    t['ɵdid'](16, 4931584, null, 0, tl.a, [
                        t.ElementRef,
                        [
                            2,
                            tl.c
                        ],
                        t.Renderer2
                    ], null, null),
                    t['ɵdid'](17, 1818624, null, 1, ll.a, [
                        t.ElementRef,
                        [
                            2,
                            ll.c
                        ],
                        t.ChangeDetectorRef,
                        t.Renderer2,
                        al.e,
                        [
                            2,
                            ll.b
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
                    (l()(), t['ɵeld'](19, 0, null, 0, 9, 'input', [
                        [
                            'class',
                            'form-control'
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
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 20)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 20).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 20)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 20)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](20, 16384, null, 0, C.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            C.b
                        ]
                    ], null, null),
                    t['ɵdid'](21, 540672, null, 0, C.m, [], {
                        maxlength: [
                            0,
                            'maxlength'
                        ]
                    }, null),
                    t['ɵprd'](1024, null, C.n, function (l) {
                        return [l];
                    }, [C.m]),
                    t['ɵprd'](1024, null, C.o, function (l) {
                        return [l];
                    }, [C.e]),
                    t['ɵdid'](24, 671744, null, 0, C.i, [
                        [
                            3,
                            C.d
                        ],
                        [
                            6,
                            C.n
                        ],
                        [
                            8,
                            null
                        ],
                        [
                            6,
                            C.o
                        ],
                        [
                            2,
                            C.A
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
                        ]], C.p, null, [C.i]),
                    t['ɵdid'](26, 16384, null, 0, C.q, [[
                            4,
                            C.p
                        ]], null, null),
                    t['ɵdid'](27, 737280, null, 0, rl.a, [
                        [
                            6,
                            C.p
                        ],
                        t.Renderer2,
                        t.ElementRef
                    ], null, null),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵand'](0, [[
                            'errName',
                            2
                        ]], 0, 0, null, hl)),
                    (l()(), t['ɵeld'](30, 0, null, null, 23, 'div', [[
                            'class',
                            'col-xl-4'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](31, 0, null, null, 22, 'div', [[
                            'class',
                            'form-group'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](32, 0, null, null, 2, 'label', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](33, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](35, 0, null, null, 18, 'select', [
                        [
                            'class',
                            'form-control'
                        ],
                        [
                            'formControlName',
                            'signatureType'
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
                        return 'change' === n && (u = !1 !== t['ɵnov'](l, 36).onChange(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 36).onTouched() && u), u;
                    }, null, null)),
                    t['ɵdid'](36, 16384, null, 0, C.w, [
                        t.Renderer2,
                        t.ElementRef
                    ], null, null),
                    t['ɵprd'](1024, null, C.o, function (l) {
                        return [l];
                    }, [C.w]),
                    t['ɵdid'](38, 671744, null, 0, C.i, [
                        [
                            3,
                            C.d
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
                            C.o
                        ],
                        [
                            2,
                            C.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, null, C.p, null, [C.i]),
                    t['ɵdid'](40, 16384, null, 0, C.q, [[
                            4,
                            C.p
                        ]], null, null),
                    (l()(), t['ɵeld'](41, 0, null, null, 4, 'option', [], [[
                            8,
                            'disabled',
                            0
                        ]], null, null, null, null)),
                    t['ɵdid'](42, 147456, null, 0, C.u, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            C.w
                        ]
                    ], {
                        ngValue: [
                            0,
                            'ngValue'
                        ]
                    }, null),
                    t['ɵdid'](43, 147456, null, 0, C.B, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            8,
                            null
                        ]
                    ], {
                        ngValue: [
                            0,
                            'ngValue'
                        ]
                    }, null),
                    (l()(), t['ɵted'](44, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](46, 0, null, null, 3, 'option', [[
                            'value',
                            '1'
                        ]], null, null, null, null, null)),
                    t['ɵdid'](47, 147456, null, 0, C.u, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            C.w
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    t['ɵdid'](48, 147456, null, 0, C.B, [
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
                    (l()(), t['ɵted'](-1, null, ['e.Firma'])),
                    (l()(), t['ɵeld'](50, 0, null, null, 3, 'option', [[
                            'value',
                            '3'
                        ]], [[
                            8,
                            'selected',
                            0
                        ]], null, null, null, null)),
                    t['ɵdid'](51, 147456, null, 0, C.u, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            C.w
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    t['ɵdid'](52, 147456, null, 0, C.B, [
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
                    (l()(), t['ɵted'](-1, null, ['Digital'])),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Ol)),
                    t['ɵdid'](55, 16384, null, 0, p.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](56, 0, null, null, 50, 'div', [[
                            'class',
                            'row'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](57, 0, null, null, 23, 'div', [[
                            'class',
                            'col-xl-6'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](58, 0, null, null, 22, 'div', [[
                            'class',
                            'form-group'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](59, 0, null, null, 2, 'label', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](60, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](62, 0, null, null, 18, 'select', [
                        [
                            'class',
                            'form-control'
                        ],
                        [
                            'formControlName',
                            'constancy_nom151'
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
                        return 'change' === n && (u = !1 !== t['ɵnov'](l, 63).onChange(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 63).onTouched() && u), u;
                    }, null, null)),
                    t['ɵdid'](63, 16384, null, 0, C.w, [
                        t.Renderer2,
                        t.ElementRef
                    ], null, null),
                    t['ɵprd'](1024, null, C.o, function (l) {
                        return [l];
                    }, [C.w]),
                    t['ɵdid'](65, 671744, null, 0, C.i, [
                        [
                            3,
                            C.d
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
                            C.o
                        ],
                        [
                            2,
                            C.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, null, C.p, null, [C.i]),
                    t['ɵdid'](67, 16384, null, 0, C.q, [[
                            4,
                            C.p
                        ]], null, null),
                    (l()(), t['ɵeld'](68, 0, null, null, 4, 'option', [], [[
                            8,
                            'disabled',
                            0
                        ]], null, null, null, null)),
                    t['ɵdid'](69, 147456, null, 0, C.u, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            C.w
                        ]
                    ], {
                        ngValue: [
                            0,
                            'ngValue'
                        ]
                    }, null),
                    t['ɵdid'](70, 147456, null, 0, C.B, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            8,
                            null
                        ]
                    ], {
                        ngValue: [
                            0,
                            'ngValue'
                        ]
                    }, null),
                    (l()(), t['ɵted'](71, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](73, 0, null, null, 3, 'option', [[
                            'value',
                            '1'
                        ]], [[
                            8,
                            'disabled',
                            0
                        ]], null, null, null, null)),
                    t['ɵdid'](74, 147456, null, 0, C.u, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            C.w
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    t['ɵdid'](75, 147456, null, 0, C.B, [
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
                    (l()(), t['ɵted'](76, null, [
                        'Documento Centinela (',
                        ' Documentos)'
                    ])),
                    (l()(), t['ɵeld'](77, 0, null, null, 3, 'option', [[
                            'value',
                            '2'
                        ]], [[
                            8,
                            'disabled',
                            0
                        ]], null, null, null, null)),
                    t['ɵdid'](78, 147456, null, 0, C.u, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            C.w
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    t['ɵdid'](79, 147456, null, 0, C.B, [
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
                    (l()(), t['ɵted'](80, null, [
                        'Documento Lite (',
                        ' Documentos)'
                    ])),
                    (l()(), t['ɵeld'](81, 0, null, null, 25, 'div', [[
                            'class',
                            'col-xl-6'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](82, 0, null, null, 24, 'div', [[
                            'class',
                            'form-group'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](83, 0, null, null, 2, 'label', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](84, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](86, 0, null, null, 20, 'select', [
                        [
                            'class',
                            'form-control'
                        ],
                        [
                            'formControlName',
                            'documentType'
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
                        var u = !0, i = l.component;
                        return 'change' === n && (u = !1 !== t['ɵnov'](l, 87).onChange(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 87).onTouched() && u), 'change' === n && (u = !1 !== i.onChangeDocument(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](87, 16384, null, 0, C.w, [
                        t.Renderer2,
                        t.ElementRef
                    ], null, null),
                    t['ɵprd'](1024, null, C.o, function (l) {
                        return [l];
                    }, [C.w]),
                    t['ɵdid'](89, 671744, null, 0, C.i, [
                        [
                            3,
                            C.d
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
                            C.o
                        ],
                        [
                            2,
                            C.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    t['ɵprd'](2048, null, C.p, null, [C.i]),
                    t['ɵdid'](91, 16384, null, 0, C.q, [[
                            4,
                            C.p
                        ]], null, null),
                    (l()(), t['ɵeld'](92, 0, null, null, 4, 'option', [], [[
                            8,
                            'disabled',
                            0
                        ]], null, null, null, null)),
                    t['ɵdid'](93, 147456, null, 0, C.u, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            C.w
                        ]
                    ], {
                        ngValue: [
                            0,
                            'ngValue'
                        ]
                    }, null),
                    t['ɵdid'](94, 147456, null, 0, C.B, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            8,
                            null
                        ]
                    ], {
                        ngValue: [
                            0,
                            'ngValue'
                        ]
                    }, null),
                    (l()(), t['ɵted'](95, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](97, 0, null, null, 4, 'option', [[
                            'value',
                            '1'
                        ]], null, null, null, null, null)),
                    t['ɵdid'](98, 147456, null, 0, C.u, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            C.w
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    t['ɵdid'](99, 147456, null, 0, C.B, [
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
                    (l()(), t['ɵted'](100, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](102, 0, null, null, 4, 'option', [[
                            'value',
                            '2'
                        ]], null, null, null, null, null)),
                    t['ɵdid'](103, 147456, null, 0, C.u, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            C.w
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, null),
                    t['ɵdid'](104, 147456, null, 0, C.B, [
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
                    (l()(), t['ɵted'](105, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ])
                ], function (l, n) {
                    var e = n.component;
                    l(n, 2, 0, e.form), l(n, 5, 0, 'vertical'), l(n, 10, 0), l(n, 16, 0), l(n, 17, 0, t['ɵnov'](n, 29), ''), l(n, 21, 0, '130'), l(n, 24, 0, 'name'), l(n, 27, 0), l(n, 38, 0, 'signatureType'), l(n, 42, 0, null), l(n, 43, 0, null), l(n, 47, 0, '1'), l(n, 48, 0, '1'), l(n, 51, 0, '3'), l(n, 52, 0, '3'), l(n, 55, 0, e.tenant.length > 1), l(n, 65, 0, 'constancy_nom151'), l(n, 69, 0, null), l(n, 70, 0, null), l(n, 74, 0, '1'), l(n, 75, 0, '1'), l(n, 78, 0, '2'), l(n, 79, 0, '2'), l(n, 89, 0, 'documentType'), l(n, 93, 0, null), l(n, 94, 0, null), l(n, 98, 0, '1'), l(n, 99, 0, '1'), l(n, 103, 0, '2'), l(n, 104, 0, '2');
                }, function (l, n) {
                    var e = n.component;
                    l(n, 0, 0, t['ɵnov'](n, 4).ngClassUntouched, t['ɵnov'](n, 4).ngClassTouched, t['ɵnov'](n, 4).ngClassPristine, t['ɵnov'](n, 4).ngClassDirty, t['ɵnov'](n, 4).ngClassValid, t['ɵnov'](n, 4).ngClassInvalid, t['ɵnov'](n, 4).ngClassPending, 'horizontal' === t['ɵnov'](n, 5).nzLayout, 'vertical' === t['ɵnov'](n, 5).nzLayout, 'inline' === t['ɵnov'](n, 5).nzLayout), l(n, 9, 1, [
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
                    ]), l(n, 13, 0, t['ɵunv'](n, 13, 0, t['ɵnov'](n, 14).transform('DOCUMENT.CREATE.FORM.DOCUMENTNAME'))), l(n, 15, 0, t['ɵnov'](n, 16).hostFlexStyle), l(n, 19, 1, [
                        t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 19, 0, t['ɵnov'](n, 28).transform('DOCUMENT.CREATE.FORM.NAMEPLACEHOLDER')), ''),
                        t['ɵnov'](n, 21).maxlength ? t['ɵnov'](n, 21).maxlength : null,
                        t['ɵnov'](n, 26).ngClassUntouched,
                        t['ɵnov'](n, 26).ngClassTouched,
                        t['ɵnov'](n, 26).ngClassPristine,
                        t['ɵnov'](n, 26).ngClassDirty,
                        t['ɵnov'](n, 26).ngClassValid,
                        t['ɵnov'](n, 26).ngClassInvalid,
                        t['ɵnov'](n, 26).ngClassPending,
                        t['ɵnov'](n, 27).disabled,
                        t['ɵnov'](n, 27).nzBorderless,
                        'large' === t['ɵnov'](n, 27).nzSize,
                        'small' === t['ɵnov'](n, 27).nzSize,
                        t['ɵnov'](n, 27).disabled || null
                    ]), l(n, 33, 0, t['ɵunv'](n, 33, 0, t['ɵnov'](n, 34).transform('DOCUMENT.CREATE.FORM.SIGNATURETYPE'))), l(n, 35, 0, t['ɵnov'](n, 40).ngClassUntouched, t['ɵnov'](n, 40).ngClassTouched, t['ɵnov'](n, 40).ngClassPristine, t['ɵnov'](n, 40).ngClassDirty, t['ɵnov'](n, 40).ngClassValid, t['ɵnov'](n, 40).ngClassInvalid, t['ɵnov'](n, 40).ngClassPending), l(n, 41, 0, !0), l(n, 44, 0, t['ɵunv'](n, 44, 0, t['ɵnov'](n, 45).transform('DOCUMENT.CREATE.FORM.SELECTOPTION'))), l(n, 50, 0, !0), l(n, 60, 0, t['ɵunv'](n, 60, 0, t['ɵnov'](n, 61).transform('DOCUMENT.CREATE.FORM.NOM151'))), l(n, 62, 0, t['ɵnov'](n, 67).ngClassUntouched, t['ɵnov'](n, 67).ngClassTouched, t['ɵnov'](n, 67).ngClassPristine, t['ɵnov'](n, 67).ngClassDirty, t['ɵnov'](n, 67).ngClassValid, t['ɵnov'](n, 67).ngClassInvalid, t['ɵnov'](n, 67).ngClassPending), l(n, 68, 0, !0), l(n, 71, 0, t['ɵunv'](n, 71, 0, t['ɵnov'](n, 72).transform('DOCUMENT.CREATE.FORM.SELECTOPTION'))), l(n, 73, 0, 0 == e.document_centinela), l(n, 76, 0, e.document_centinela), l(n, 77, 0, 0 == e.document_lite), l(n, 80, 0, e.document_lite), l(n, 84, 0, t['ɵunv'](n, 84, 0, t['ɵnov'](n, 85).transform('DOCUMENT.CREATE.FORM.DOCUMENTYPE'))), l(n, 86, 0, t['ɵnov'](n, 91).ngClassUntouched, t['ɵnov'](n, 91).ngClassTouched, t['ɵnov'](n, 91).ngClassPristine, t['ɵnov'](n, 91).ngClassDirty, t['ɵnov'](n, 91).ngClassValid, t['ɵnov'](n, 91).ngClassInvalid, t['ɵnov'](n, 91).ngClassPending), l(n, 92, 0, !0), l(n, 95, 0, t['ɵunv'](n, 95, 0, t['ɵnov'](n, 96).transform('DOCUMENT.CREATE.FORM.SELECTOPTION'))), l(n, 100, 0, t['ɵunv'](n, 100, 0, t['ɵnov'](n, 101).transform('DOCUMENT.CREATE.FORM.UPLOADFILE'))), l(n, 105, 0, t['ɵunv'](n, 105, 0, t['ɵnov'](n, 106).transform('DOCUMENT.CREATE.FORM.WRITEDOCUMENT')));
                });
            }
            var zl = e('CeGm'), _l = e('UhP/'), bl = e('vrAh'), Rl = e('1O3W'), Pl = e('9gLZ'), El = e('7KAL'), Dl = e('l+DN'), yl = e('9iie'), Tl = e('CYS+'), kl = e('YEUz'), Il = e('6GRG'), Al = e('Ppjl'), xl = e('BN3n');
            class Nl {
                constructor(l, n, e, u, i) {
                    this.modalService = l, this._validations = n, this.contractService = e, this.store = u, this.userService = i, this.items = [], this.externalItems = [], this.validateEmail = !1, this.getItems = new t.EventEmitter(), this.emailsFilters = [], this.actionsItems = [{
                            action: l => {
                                this.delete(l);
                            },
                            name: 'Eliminar',
                            icon: 'flaticon-delete'
                        }];
                }
                ngOnInit() {
                    var l, n;
                    this.emailsFilters = [], this.validateEmail && (null === (n = null === (l = this._validations.entityForm()) || void 0 === l ? void 0 : l.get('email')) || void 0 === n || n.valueChanges.subscribe(l => {
                        l && (this.items.find(n => n.description.toLocaleLowerCase().trim() == l.toLocaleLowerCase().trim()) || this.externalItems.find(n => n.email.toLocaleLowerCase().trim() == l.toLocaleLowerCase().trim())) && this._validations.entityForm().get('email').setErrors({ custom: { code: 'El correo se encuentra en uso' } });
                    }));
                }
                delete(l) {
                    this.items.splice(l, 1), this.getItems.emit(this.items);
                }
                add() {
                    return Object(M.a)(this, void 0, void 0, function* () {
                        let l = this._validations.entityForm().get('email').value, n = this._validations.entityForm().get('name').value;
                        this.emailsFilters.filter(n => n.email == l), this.items.find(n => n.id == l) || (this.items = [
                            ...this.items,
                            {
                                id: l,
                                title: '' + n,
                                description: l,
                                type: this.lConfirmate,
                                image: ''
                            }
                        ], this.initForm(), this.getItems.emit(this.items), this.isChecked || this.modalService.dismissAll());
                    });
                }
                initForm() {
                    this._validations.entityForm().reset(), this._validations.entityForm().get('email').enable(), this._validations.entityForm().get('name').enable(), this.lConfirmate = !1;
                }
                updateForm(l, n, e) {
                    this._validations.entityForm().get('email').setValue(n), this._validations.entityForm().get('name').setValue(e), this.lConfirmate = !0, this.optionSelected = this._validations.entityForm().get('name').value;
                }
                openLarge(l) {
                    this.modalService.open(l, { size: 'md' }), this.initForm();
                }
                keyPress(l) {
                    let n = l.target.value;
                    this.optionSelected && n != this.optionSelected && (this.optionSelected = null, this._validations.entityForm().get('email').reset()), '' != n && n.length > 5 && this.userService.getUsers(n).subscribe(l => {
                        this.emailsFilters = l;
                    });
                }
            }
            var Sl = e('H2HB'), Fl = e('eSKV'), Ul = t['ɵcrt']({
                    encapsulation: 0,
                    styles: [['']],
                    data: {}
                });
            function Ll(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, 'mat-option', [
                        [
                            'class',
                            'mat-option mat-focus-indicator'
                        ],
                        [
                            'role',
                            'option'
                        ]
                    ], [
                        [
                            1,
                            'tabindex',
                            0
                        ],
                        [
                            2,
                            'mat-selected',
                            null
                        ],
                        [
                            2,
                            'mat-option-multiple',
                            null
                        ],
                        [
                            2,
                            'mat-active',
                            null
                        ],
                        [
                            8,
                            'id',
                            0
                        ],
                        [
                            1,
                            'aria-selected',
                            0
                        ],
                        [
                            1,
                            'aria-disabled',
                            0
                        ],
                        [
                            2,
                            'mat-option-disabled',
                            null
                        ]
                    ], [
                        [
                            null,
                            'onSelectionChange'
                        ],
                        [
                            null,
                            'click'
                        ],
                        [
                            null,
                            'keydown'
                        ]
                    ], function (l, n, e) {
                        var u = !0, i = l.component;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 1)._selectViaInteraction() && u), 'keydown' === n && (u = !1 !== t['ɵnov'](l, 1)._handleKeydown(e) && u), 'onSelectionChange' === n && (u = !1 !== i.updateForm(e, l.context.$implicit.email, l.context.$implicit.name) && u), u;
                    }, zl.b, zl.a)),
                    t['ɵdid'](1, 8568832, [[
                            3,
                            4
                        ]], 0, _l.o, [
                        t.ElementRef,
                        t.ChangeDetectorRef,
                        [
                            2,
                            _l.i
                        ],
                        [
                            2,
                            _l.h
                        ]
                    ], {
                        value: [
                            0,
                            'value'
                        ]
                    }, { onSelectionChange: 'onSelectionChange' }),
                    (l()(), t['ɵted'](2, 0, [
                        ' ',
                        ' '
                    ]))
                ], function (l, n) {
                    l(n, 1, 0, n.context.$implicit.email);
                }, function (l, n) {
                    l(n, 0, 0, t['ɵnov'](n, 1)._getTabIndex(), t['ɵnov'](n, 1).selected, t['ɵnov'](n, 1).multiple, t['ɵnov'](n, 1).active, t['ɵnov'](n, 1).id, t['ɵnov'](n, 1)._getAriaSelected(), t['ɵnov'](n, 1).disabled.toString(), t['ɵnov'](n, 1).disabled), l(n, 2, 0, n.context.$implicit.name);
                });
            }
            function Vl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform(e._validations.message().code)));
                });
            }
            function Hl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Vl)),
                    t['ɵdid'](1, 16384, null, 0, p.NgIf, [
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
            function $l(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform(e._validations.message().code)));
                });
            }
            function Zl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵand'](16777216, null, null, 1, null, $l)),
                    t['ɵdid'](1, 16384, null, 0, p.NgIf, [
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
            function Kl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 6, 'div', [[
                            'class',
                            'modal-header'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 2, 'h4', [[
                            'class',
                            'modal-title'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](2, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](4, 0, null, null, 2, 'button', [
                        [
                            'aria-label',
                            'Close'
                        ],
                        [
                            'class',
                            'close'
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
                        return 'click' === n && (t = !1 !== l.context.dismiss('Cross click') && t), t;
                    }, null, null)),
                    (l()(), t['ɵeld'](5, 0, null, null, 1, 'span', [[
                            'aria-hidden',
                            'true'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](6, 0, null, null, 0, 'i', [[
                            'class',
                            'fa fa-close'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](7, 0, null, null, 54, 'div', [[
                            'class',
                            'modal-body'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](8, 0, null, null, 53, 'form', [
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
                        return 'submit' === n && (u = !1 !== t['ɵnov'](l, 10).onSubmit(e) && u), 'reset' === n && (u = !1 !== t['ɵnov'](l, 10).onReset() && u), u;
                    }, null, null)),
                    t['ɵdid'](9, 16384, null, 0, C.C, [], null, null),
                    t['ɵdid'](10, 540672, null, 0, C.k, [
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
                    t['ɵprd'](2048, null, C.d, null, [C.k]),
                    t['ɵdid'](12, 16384, null, 0, C.r, [[
                            6,
                            C.d
                        ]], null, null),
                    t['ɵdid'](13, 671744, null, 0, ll.b, [
                        nl.a,
                        t.ElementRef,
                        t.Renderer2
                    ], {
                        nzLayout: [
                            0,
                            'nzLayout'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](14, 0, null, null, 27, 'div', [[
                            'class',
                            'form-group'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](15, 0, null, null, 26, 'nz-form-item', [], [
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
                    ], null, null, el.e, el.b)),
                    t['ɵdid'](16, 4931584, null, 0, tl.c, [
                        t.ElementRef,
                        t.Renderer2,
                        ul.b,
                        t.NgZone,
                        il.a,
                        ol.b
                    ], null, null),
                    t['ɵdid'](17, 180224, null, 0, ll.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](18, 0, null, 0, 2, 'label', [[
                            'class',
                            'font-size-h6 font-weight-bolder text-dark'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](19, null, [
                        '',
                        ' '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](21, 0, null, 0, 20, 'nz-form-control', [[
                            'nzHasFeedback',
                            ''
                        ]], [[
                            4,
                            'flex',
                            null
                        ]], null, null, el.d, el.a)),
                    t['ɵdid'](22, 4931584, null, 0, tl.a, [
                        t.ElementRef,
                        [
                            2,
                            tl.c
                        ],
                        t.Renderer2
                    ], null, null),
                    t['ɵdid'](23, 1818624, null, 1, ll.a, [
                        t.ElementRef,
                        [
                            2,
                            ll.c
                        ],
                        t.ChangeDetectorRef,
                        t.Renderer2,
                        al.e,
                        [
                            2,
                            ll.b
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
                    (l()(), t['ɵeld'](25, 16777216, null, 0, 8, 'input', [
                        [
                            'class',
                            'form-control mat-autocomplete-trigger'
                        ],
                        [
                            'formControlName',
                            'name'
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
                            1,
                            'autocomplete',
                            0
                        ],
                        [
                            1,
                            'role',
                            0
                        ],
                        [
                            1,
                            'aria-autocomplete',
                            0
                        ],
                        [
                            1,
                            'aria-activedescendant',
                            0
                        ],
                        [
                            1,
                            'aria-expanded',
                            0
                        ],
                        [
                            1,
                            'aria-owns',
                            0
                        ],
                        [
                            1,
                            'aria-haspopup',
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
                        ],
                        [
                            null,
                            'focusin'
                        ],
                        [
                            null,
                            'keydown'
                        ]
                    ], function (l, n, e) {
                        var u = !0, i = l.component;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 26)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 26).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 26)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 26)._compositionEnd(e.target.value) && u), 'focusin' === n && (u = !1 !== t['ɵnov'](l, 27)._handleFocus() && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 27)._onTouched() && u), 'input' === n && (u = !1 !== t['ɵnov'](l, 27)._handleInput(e) && u), 'keydown' === n && (u = !1 !== t['ɵnov'](l, 27)._handleKeydown(e) && u), 'input' === n && (u = !1 !== i.keyPress(e) && u), u;
                    }, null, null)),
                    t['ɵdid'](26, 16384, null, 0, C.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            C.b
                        ]
                    ], null, null),
                    t['ɵdid'](27, 4866048, null, 0, bl.f, [
                        t.ElementRef,
                        Rl.d,
                        t.ViewContainerRef,
                        t.NgZone,
                        t.ChangeDetectorRef,
                        bl.b,
                        [
                            2,
                            Pl.b
                        ],
                        [
                            8,
                            null
                        ],
                        [
                            2,
                            p.DOCUMENT
                        ],
                        El.i
                    ], {
                        autocomplete: [
                            0,
                            'autocomplete'
                        ]
                    }, null),
                    t['ɵprd'](1024, null, C.o, function (l, n) {
                        return [
                            l,
                            n
                        ];
                    }, [
                        C.e,
                        bl.f
                    ]),
                    t['ɵdid'](29, 671744, null, 0, C.i, [
                        [
                            3,
                            C.d
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
                            C.o
                        ],
                        [
                            2,
                            C.A
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
                        ]], C.p, null, [C.i]),
                    t['ɵdid'](31, 16384, null, 0, C.q, [[
                            4,
                            C.p
                        ]], null, null),
                    t['ɵdid'](32, 737280, null, 0, rl.a, [
                        [
                            6,
                            C.p
                        ],
                        t.Renderer2,
                        t.ElementRef
                    ], null, null),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](34, 0, null, 0, 6, 'mat-autocomplete', [[
                            'class',
                            'mat-autocomplete'
                        ]], null, null, null, Dl.b, Dl.a)),
                    t['ɵprd'](6144, null, _l.i, null, [bl.d]),
                    t['ɵdid'](36, 1228800, [[
                            'auto',
                            4
                        ]], 2, bl.d, [
                        t.ChangeDetectorRef,
                        t.ElementRef,
                        bl.a
                    ], null, null),
                    t['ɵqud'](603979776, 2, { optionGroups: 1 }),
                    t['ɵqud'](603979776, 3, { options: 1 }),
                    (l()(), t['ɵand'](16777216, null, 0, 1, null, Ll)),
                    t['ɵdid'](40, 278528, null, 0, p.NgForOf, [
                        t.ViewContainerRef,
                        t.TemplateRef,
                        t.IterableDiffers
                    ], {
                        ngForOf: [
                            0,
                            'ngForOf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](0, [[
                            'errName',
                            2
                        ]], 0, 0, null, Hl)),
                    (l()(), t['ɵeld'](42, 0, null, null, 19, 'div', [[
                            'class',
                            'form-group'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](43, 0, null, null, 18, 'nz-form-item', [], [
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
                    ], null, null, el.e, el.b)),
                    t['ɵdid'](44, 4931584, null, 0, tl.c, [
                        t.ElementRef,
                        t.Renderer2,
                        ul.b,
                        t.NgZone,
                        il.a,
                        ol.b
                    ], null, null),
                    t['ɵdid'](45, 180224, null, 0, ll.c, [
                        t.ElementRef,
                        t.Renderer2,
                        t.ChangeDetectorRef
                    ], null, null),
                    (l()(), t['ɵeld'](46, 0, null, 0, 2, 'label', [[
                            'class',
                            'font-size-h6 font-weight-bolder text-dark'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](47, null, [
                        '',
                        ' '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](49, 0, null, 0, 12, 'nz-form-control', [], [[
                            4,
                            'flex',
                            null
                        ]], null, null, el.d, el.a)),
                    t['ɵdid'](50, 4931584, null, 0, tl.a, [
                        t.ElementRef,
                        [
                            2,
                            tl.c
                        ],
                        t.Renderer2
                    ], null, null),
                    t['ɵdid'](51, 1818624, null, 1, ll.a, [
                        t.ElementRef,
                        [
                            2,
                            ll.c
                        ],
                        t.ChangeDetectorRef,
                        t.Renderer2,
                        al.e,
                        [
                            2,
                            ll.b
                        ]
                    ], {
                        nzErrorTip: [
                            0,
                            'nzErrorTip'
                        ]
                    }, null),
                    t['ɵqud'](603979776, 4, { defaultValidateControl: 0 }),
                    (l()(), t['ɵeld'](53, 0, null, 0, 7, 'div', [[
                            'class',
                            'input-group mb-3'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](54, 0, null, null, 6, 'input', [
                        [
                            'class',
                            'form-control'
                        ],
                        [
                            'formControlName',
                            'email'
                        ],
                        [
                            'matInput',
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
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 55)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 55).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 55)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 55)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](55, 16384, null, 0, C.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            C.b
                        ]
                    ], null, null),
                    t['ɵprd'](1024, null, C.o, function (l) {
                        return [l];
                    }, [C.e]),
                    t['ɵdid'](57, 671744, null, 0, C.i, [
                        [
                            3,
                            C.d
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
                            C.o
                        ],
                        [
                            2,
                            C.A
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
                        ]], C.p, null, [C.i]),
                    t['ɵdid'](59, 16384, null, 0, C.q, [[
                            4,
                            C.p
                        ]], null, null),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵand'](0, [[
                            'errEmail',
                            2
                        ]], 0, 0, null, Zl)),
                    (l()(), t['ɵeld'](62, 0, null, null, 15, 'div', [[
                            'class',
                            'modal-footer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](63, 0, null, null, 8, 'label', [[
                            'nz-checkbox',
                            ''
                        ]], [
                        [
                            2,
                            'ant-checkbox-wrapper-checked',
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
                        var u = !0, i = l.component;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 64).hostClick(e) && u), 'ngModelChange' === n && (u = !1 !== (i.isChecked = e) && u), u;
                    }, yl.b, yl.a)),
                    t['ɵdid'](64, 4440064, null, 0, Tl.a, [
                        t.ElementRef,
                        [
                            2,
                            Tl.d
                        ],
                        t.ChangeDetectorRef,
                        kl.d
                    ], null, null),
                    t['ɵprd'](1024, null, C.o, function (l) {
                        return [l];
                    }, [Tl.a]),
                    t['ɵdid'](66, 671744, null, 0, C.t, [
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
                            C.o
                        ]
                    ], {
                        model: [
                            0,
                            'model'
                        ]
                    }, { update: 'ngModelChange' }),
                    t['ɵprd'](2048, null, C.p, null, [C.t]),
                    t['ɵdid'](68, 16384, null, 0, C.q, [[
                            4,
                            C.p
                        ]], null, null),
                    (l()(), t['ɵeld'](69, 0, null, 0, 2, 'span', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](70, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](72, 0, null, null, 2, 'button', [
                        [
                            'class',
                            'btn btn-secondary'
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
                        return 'click' === n && (t = !1 !== l.context.close('Close click') && t), t;
                    }, null, null)),
                    (l()(), t['ɵted'](73, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](75, 0, null, null, 2, 'button', [
                        [
                            'class',
                            'btn btn-primary'
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
                        return 'click' === n && (t = !1 !== l.component.add() && t), t;
                    }, null, null)),
                    (l()(), t['ɵted'](76, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ])
                ], function (l, n) {
                    var e = n.component;
                    l(n, 10, 0, e._validations.entityForm()), l(n, 13, 0, 'vertical'), l(n, 16, 0), l(n, 22, 0), l(n, 23, 0, t['ɵnov'](n, 41), ''), l(n, 27, 0, t['ɵnov'](n, 36)), l(n, 29, 0, 'name'), l(n, 32, 0), l(n, 40, 0, e.emailsFilters), l(n, 44, 0), l(n, 50, 0), l(n, 51, 0, t['ɵnov'](n, 61)), l(n, 57, 0, 'email'), l(n, 64, 0), l(n, 66, 0, e.isChecked);
                }, function (l, n) {
                    var e = n.component;
                    l(n, 2, 0, t['ɵunv'](n, 2, 0, t['ɵnov'](n, 3).transform('DOCUMENT.CREATE.MODAL.ADD'))), l(n, 8, 0, t['ɵnov'](n, 12).ngClassUntouched, t['ɵnov'](n, 12).ngClassTouched, t['ɵnov'](n, 12).ngClassPristine, t['ɵnov'](n, 12).ngClassDirty, t['ɵnov'](n, 12).ngClassValid, t['ɵnov'](n, 12).ngClassInvalid, t['ɵnov'](n, 12).ngClassPending, 'horizontal' === t['ɵnov'](n, 13).nzLayout, 'vertical' === t['ɵnov'](n, 13).nzLayout, 'inline' === t['ɵnov'](n, 13).nzLayout), l(n, 15, 1, [
                        'top' === t['ɵnov'](n, 16).nzAlign,
                        'middle' === t['ɵnov'](n, 16).nzAlign,
                        'bottom' === t['ɵnov'](n, 16).nzAlign,
                        'start' === t['ɵnov'](n, 16).nzJustify,
                        'end' === t['ɵnov'](n, 16).nzJustify,
                        'center' === t['ɵnov'](n, 16).nzJustify,
                        'space-around' === t['ɵnov'](n, 16).nzJustify,
                        'space-between' === t['ɵnov'](n, 16).nzJustify,
                        'success' === t['ɵnov'](n, 17).status,
                        'warning' === t['ɵnov'](n, 17).status,
                        'error' === t['ɵnov'](n, 17).status,
                        'validating' === t['ɵnov'](n, 17).status,
                        t['ɵnov'](n, 17).hasFeedback && t['ɵnov'](n, 17).status,
                        t['ɵnov'](n, 17).withHelpClass
                    ]), l(n, 19, 0, t['ɵunv'](n, 19, 0, t['ɵnov'](n, 20).transform('DOCUMENT.CREATE.MODAL.NAME'))), l(n, 21, 0, t['ɵnov'](n, 22).hostFlexStyle), l(n, 25, 1, [
                        t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 25, 0, t['ɵnov'](n, 33).transform('DOCUMENT.CREATE.MODAL.WRITENAME')), ''),
                        t['ɵnov'](n, 27).autocompleteAttribute,
                        t['ɵnov'](n, 27).autocompleteDisabled ? null : 'combobox',
                        t['ɵnov'](n, 27).autocompleteDisabled ? null : 'list',
                        t['ɵnov'](n, 27).panelOpen && t['ɵnov'](n, 27).activeOption ? t['ɵnov'](n, 27).activeOption.id : null,
                        t['ɵnov'](n, 27).autocompleteDisabled ? null : t['ɵnov'](n, 27).panelOpen.toString(),
                        t['ɵnov'](n, 27).autocompleteDisabled || !t['ɵnov'](n, 27).panelOpen || null == t['ɵnov'](n, 27).autocomplete ? null : t['ɵnov'](n, 27).autocomplete.id,
                        !t['ɵnov'](n, 27).autocompleteDisabled,
                        t['ɵnov'](n, 31).ngClassUntouched,
                        t['ɵnov'](n, 31).ngClassTouched,
                        t['ɵnov'](n, 31).ngClassPristine,
                        t['ɵnov'](n, 31).ngClassDirty,
                        t['ɵnov'](n, 31).ngClassValid,
                        t['ɵnov'](n, 31).ngClassInvalid,
                        t['ɵnov'](n, 31).ngClassPending,
                        t['ɵnov'](n, 32).disabled,
                        t['ɵnov'](n, 32).nzBorderless,
                        'large' === t['ɵnov'](n, 32).nzSize,
                        'small' === t['ɵnov'](n, 32).nzSize,
                        t['ɵnov'](n, 32).disabled || null
                    ]), l(n, 43, 1, [
                        'top' === t['ɵnov'](n, 44).nzAlign,
                        'middle' === t['ɵnov'](n, 44).nzAlign,
                        'bottom' === t['ɵnov'](n, 44).nzAlign,
                        'start' === t['ɵnov'](n, 44).nzJustify,
                        'end' === t['ɵnov'](n, 44).nzJustify,
                        'center' === t['ɵnov'](n, 44).nzJustify,
                        'space-around' === t['ɵnov'](n, 44).nzJustify,
                        'space-between' === t['ɵnov'](n, 44).nzJustify,
                        'success' === t['ɵnov'](n, 45).status,
                        'warning' === t['ɵnov'](n, 45).status,
                        'error' === t['ɵnov'](n, 45).status,
                        'validating' === t['ɵnov'](n, 45).status,
                        t['ɵnov'](n, 45).hasFeedback && t['ɵnov'](n, 45).status,
                        t['ɵnov'](n, 45).withHelpClass
                    ]), l(n, 47, 0, t['ɵunv'](n, 47, 0, t['ɵnov'](n, 48).transform('GENERAL.EMAIL'))), l(n, 49, 0, t['ɵnov'](n, 50).hostFlexStyle), l(n, 54, 0, t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 54, 0, t['ɵnov'](n, 60).transform('GENERAL.EMAIL')), ''), t['ɵnov'](n, 59).ngClassUntouched, t['ɵnov'](n, 59).ngClassTouched, t['ɵnov'](n, 59).ngClassPristine, t['ɵnov'](n, 59).ngClassDirty, t['ɵnov'](n, 59).ngClassValid, t['ɵnov'](n, 59).ngClassInvalid, t['ɵnov'](n, 59).ngClassPending), l(n, 63, 0, t['ɵnov'](n, 64).nzChecked, t['ɵnov'](n, 68).ngClassUntouched, t['ɵnov'](n, 68).ngClassTouched, t['ɵnov'](n, 68).ngClassPristine, t['ɵnov'](n, 68).ngClassDirty, t['ɵnov'](n, 68).ngClassValid, t['ɵnov'](n, 68).ngClassInvalid, t['ɵnov'](n, 68).ngClassPending), l(n, 70, 0, t['ɵunv'](n, 70, 0, t['ɵnov'](n, 71).transform('DOCUMENT.CREATE.MODAL.KEEPADDING'))), l(n, 73, 0, t['ɵunv'](n, 73, 0, t['ɵnov'](n, 74).transform('GENERAL.CANCEL_SAVE'))), l(n, 75, 0, !e._validations.entityForm().valid), l(n, 76, 0, t['ɵunv'](n, 76, 0, t['ɵnov'](n, 77).transform('DOCUMENT.CREATE.MODAL.ADD')));
                });
            }
            function Bl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'app-lists-widget3', [], null, [[
                            null,
                            'buttonAction'
                        ]], function (l, n, e) {
                        var u = !0;
                        return 'buttonAction' === n && (u = !1 !== l.component.openLarge(t['ɵnov'](l, 4)) && u), u;
                    }, Il.b, Il.a)),
                    t['ɵdid'](1, 114688, null, 0, Al.a, [], {
                        title: [
                            0,
                            'title'
                        ],
                        titleActions: [
                            1,
                            'titleActions'
                        ],
                        items: [
                            2,
                            'items'
                        ],
                        actionItems: [
                            3,
                            'actionItems'
                        ]
                    }, { buttonAction: 'buttonAction' }),
                    (l()(), t['ɵeld'](2, 0, null, null, 2, 'div', [[
                            'class',
                            'example-preview'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 1, 'div', [], null, null, null, null, null)),
                    (l()(), t['ɵand'](0, [[
                            'content6',
                            2
                        ]], null, 0, null, Kl))
                ], function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.title, e.titleActions, e.items, e.actionsItems);
                }, null);
            }
            var jl = e('p8Fu'), Wl = e('rh/z'), ql = e('AoOi'), Gl = e('/C+/');
            class Jl {
                constructor(l, n, e, t, u, i) {
                    this.detector = l, this.notificationService = n, this.fb = e, this.documentService = t, this.router = u, this.store = i, this.signsListComponent = [], this.observersListComponent = [], this.signs = [], this.observers = [], this.editorStyle = { height: '500px' }, this.loading = !1, this.editorModules = {
                        toolbar: [
                            [
                                'bold',
                                'italic',
                                'underline',
                                'strike'
                            ],
                            [
                                { header: 1 },
                                { header: 2 }
                            ],
                            [
                                { list: 'ordered' },
                                { list: 'bullet' }
                            ],
                            [{ direction: 'rtl' }],
                            [{
                                    size: [
                                        'small',
                                        !1,
                                        'large',
                                        'huge'
                                    ]
                                }],
                            [{
                                    header: [
                                        1,
                                        2,
                                        3,
                                        4,
                                        5,
                                        6,
                                        !1
                                    ]
                                }],
                            [
                                { color: [] },
                                { background: [] }
                            ],
                            [{ font: [] }],
                            [{ align: [] }],
                            ['clean']
                        ]
                    }, this.document = { recivers: [] }, this.mode_view = 'N', this.documentForm = this.fb.group({
                        documentFile: [''],
                        text: ['']
                    });
                }
                ngOnInit() {
                    this.suscription = this.store.select(pl.b).subscribe(l => {
                        this.currentUser = l;
                    });
                }
                ngAfterViewInit() {
                    this.wizard = new jl.a('kt_wizard_v1', { startStep: 1 }), this.wizard.on('change', () => {
                        setTimeout(() => {
                            Wl.a.scrollTop();
                        }, 500);
                    });
                }
                goTo(l) {
                    this.wizard.goTo(l);
                }
                editorChanged(l) {
                    let n = '' != l.editor.root.innerText.trim() ? l.editor.root.innerHTML : null;
                    this.documentForm.get('text').setValue(n);
                }
                ngOnDestroy() {
                    this.suscription.unsubscribe(), this.wizard = void 0;
                }
                setSigns(l) {
                    this.signs = l.map(l => ({
                        email: l.description,
                        name: l.title,
                        reciverType: Gl.a.SIGN,
                        image: l.image
                    }));
                }
                setObservers(l) {
                    this.observers = l.map(l => ({
                        email: l.description,
                        name: l.title,
                        reciverType: Gl.a.Observer,
                        image: '' == l.image ? './assets/media/svg/avatars/011-boy-5.svg' : 'url(' + l.image + ')'
                    }));
                }
                create() {
                    var l;
                    return Object(M.a)(this, void 0, void 0, function* () {
                        try {
                            this.loading = !0;
                            const e = [
                                ...this.signs,
                                ...this.observers
                            ];
                            let t = new Date(new Date().getTime());
                            t.setDate(t.getDate() + 30).toString();
                            let u = Object.assign(Object.assign(Object.assign({}, this.infoForm.value), this.documentForm.value), {
                                recivers: e,
                                signature_type: this.infoForm.get('signatureType').value,
                                constancy_nom151: '1' == this.infoForm.get('constancy_nom151').value,
                                document_type: null === (l = this.infoForm) || void 0 === l ? void 0 : l.get('documentType').value
                            });
                            var n = yield this.documentService.createDocument(u).toPromise();
                            if (this.isUserFound = !!this.signs.find(l => l.email == this.currentUser.email), this.isUserFound && u.signature_type == ql.b.Efirma) {
                                let l = yield this.notificationService.confirmAsync('\xA1Tu documento se ha creado con éxito!, \xBFDeseas firmar el documento ahora?');
                                this.router.navigate(l ? ['../sign-contract/client/' + n.id] : ['/document']);
                            } else
                                this.notificationService.success('\xA1Tu documento se ha creado con éxito!'), this.router.navigate(['/document']);
                        } catch (e) {
                            this.loading = !1, this.notificationService.error(e.error);
                        } finally {
                            this.loading = !1, this.detector.markForCheck();
                        }
                    });
                }
                get documentType() {
                    var l;
                    return null === (l = this.infoForm) || void 0 === l ? void 0 : l.get('documentType').value;
                }
                onChangeSelectDocument(l) {
                    this.documentForm.reset(), '1' == this.documentType ? (this.documentForm.controls.text.clearValidators(), this.documentForm.controls.documentFile.setValidators([C.x.required]), this.documentForm.controls.text.updateValueAndValidity(), this.documentForm.controls.documentFile.updateValueAndValidity()) : (this.documentForm.controls.documentFile.clearValidators(), this.documentForm.controls.text.setValidators([C.x.required]), this.documentForm.controls.documentFile.updateValueAndValidity(), this.documentForm.controls.text.updateValueAndValidity());
                }
                get isFormsValid() {
                    var l, n;
                    return (null === (l = this.documentForm) || void 0 === l ? void 0 : l.valid) && (null === (n = this.infoForm) || void 0 === n ? void 0 : n.valid) && this.signs.length > 0;
                }
            }
            var Yl = t['ɵcrt']({
                encapsulation: 0,
                styles: [['.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]{display:flex;align-items:center;text-align:center}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]{margin-left:3.5rem;margin-right:3.5rem}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]{color:#b5b5c3;font-size:3.75rem;filter:brightness(.5) sepia(1) hue-rotate(-70deg) saturate(5)}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-title[_ngcontent-%COMP%]{color:#7e8299;font-size:1.1rem;font-weight:500;margin-top:.75rem}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-arrow[_ngcontent-%COMP%]{color:#7e8299;font-size:1.25rem}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-arrow.last[_ngcontent-%COMP%]{display:none}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%], .wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=done][_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]{color:#226298;filter:none}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%], .wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=done][_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{transition:fill .3s ease;fill:#ed553b}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%], .wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=done][_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{transition:fill .3s ease}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]   .wizard-arrow[_ngcontent-%COMP%], .wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-title[_ngcontent-%COMP%], .wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=done][_ngcontent-%COMP%]   .wizard-arrow[_ngcontent-%COMP%], .wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=done][_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-title[_ngcontent-%COMP%]{color:#226298}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]   .wizard-arrow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%], .wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=done][_ngcontent-%COMP%]   .wizard-arrow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{transition:fill .3s ease;fill:#ed553b}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]   .wizard-arrow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%], .wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=done][_ngcontent-%COMP%]   .wizard-arrow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{transition:fill .3s ease}@media (min-width:768px) and (max-width:1199.98px){.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]{margin-left:1.5rem;margin-right:1.5rem}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]{font-size:3.75rem}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-title[_ngcontent-%COMP%]{margin-top:.75rem}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-arrow[_ngcontent-%COMP%]{font-size:1.1rem}}@media (max-width:767.98px){.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]{flex-direction:column}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]{width:100%;flex-direction:row;justify-content:space-between;margin-bottom:.5rem;margin-top:.5rem}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]{flex-direction:row;display:flex;align-items:center;margin-left:0;margin-right:0}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]{font-size:1.5rem;margin-right:1.25rem}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-arrow[_ngcontent-%COMP%]{font-size:1rem}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-arrow.last[_ngcontent-%COMP%]{display:block}}']],
                data: {}
            });
            function Xl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 4, 'div', [[
                            'class',
                            'form-group'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 3, 'quill-editor', [], null, [[
                            null,
                            'onEditorChanged'
                        ]], function (l, n, e) {
                        var t = !0;
                        return 'onEditorChanged' === n && (t = !1 !== l.component.editorChanged(e) && t), t;
                    }, G.b, G.a)),
                    t['ɵprd'](5120, null, C.o, function (l) {
                        return [l];
                    }, [J.b]),
                    t['ɵprd'](5120, null, C.n, function (l) {
                        return [l];
                    }, [J.b]),
                    t['ɵdid'](4, 4898816, null, 0, J.b, [
                        t.ElementRef,
                        Y.b,
                        p.DOCUMENT,
                        t.PLATFORM_ID,
                        t.Renderer2,
                        t.NgZone,
                        J.d
                    ], {
                        modules: [
                            0,
                            'modules'
                        ],
                        styles: [
                            1,
                            'styles'
                        ]
                    }, { onEditorChanged: 'onEditorChanged' })
                ], function (l, n) {
                    var e = n.component;
                    l(n, 4, 0, e.editorModules, e.editorStyle);
                }, null);
            }
            function Ql(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 30, 'ce-upload', [
                        [
                            'accept',
                            '.pdf'
                        ],
                        [
                            'description',
                            'Arrastra y suelta tu documento PDF de hasta 5 MB de peso'
                        ],
                        [
                            'fileType',
                            'application/pdf'
                        ],
                        [
                            'label',
                            'documentFile'
                        ]
                    ], null, null, null, X.b, X.a)),
                    t['ɵdid'](1, 114688, null, 0, Q.a, [g.l], {
                        form: [
                            0,
                            'form'
                        ],
                        label: [
                            1,
                            'label'
                        ],
                        description: [
                            2,
                            'description'
                        ],
                        fileType: [
                            3,
                            'fileType'
                        ],
                        accept: [
                            4,
                            'accept'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](2, 0, null, 0, 28, ':svg:svg', [
                        [
                            'data-name',
                            'Layer 1'
                        ],
                        [
                            'height',
                            '100'
                        ],
                        [
                            'icon',
                            ''
                        ],
                        [
                            'id',
                            'a36694c7-9e7e-4fa0-bd34-1ff06c34a584'
                        ],
                        [
                            'viewBox',
                            '0 0 1089.86663 822.50661'
                        ],
                        [
                            'width',
                            '100'
                        ],
                        [
                            'xmlns',
                            'http://www.w3.org/2000/svg'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 1, ':svg:title', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['Documento PDF'])),
                    (l()(), t['ɵeld'](5, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M988.80331,484.3133c0,126.51-74.17,238.43-187.87,306.56-72.9,43.69-162.06,69.38-258.33,69.38-128.25,0-226.08-48.47-299.67-122.72-67.83-68.42-115.06-158.75-146.53-253.22-140.49-421.79,94.2-536.86,446.2-375.94C766.72329,210.84327,988.80331,276.69331,988.80331,484.3133Z'
                        ],
                        [
                            'fill',
                            '#00bfa6'
                        ],
                        [
                            'transform',
                            'translate(-55.06669 -38.74669)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](6, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M800.93331,263.50331v528.37c-72.9,43.69-162.06,69.38-258.33,69.38-128.25,0-226.08-48.47-299.67-122.72v-475.03Z'
                        ],
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'transform',
                            'translate(-55.06669 -38.74669)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](7, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M296.60406,520.9551a349.10769,349.10769,0,0,1,90.1557-16.07316,282.15087,282.15087,0,0,1,45.97047,1.7986,287.56233,287.56233,0,0,1,44.61626,9.55207c14.4206,4.17522,28.64209,8.99849,43.01405,13.33329a401.17806,401.17806,0,0,0,44.45525,10.84819,376.87356,376.87356,0,0,0,45.16986,5.38371c15.00305.87194,30.15309,1.0421,45.11414-.55621a138.0256,138.0256,0,0,0,40.59011-10.28933A123.97053,123.97053,0,0,0,728.70055,513.779q3.67222-3.2781,7.06609-6.84515c1.33469-1.39522-.78353-3.51978-2.12132-2.12132-19.12461,19.99191-44.26195,32.38806-71.527,36.52762-14.853,2.25509-29.98981,2.38592-44.97348,1.80438a370.06082,370.06082,0,0,1-45.71483-4.619A382.03123,382.03123,0,0,1,527.155,528.4477c-14.28794-4.13931-28.38132-8.91171-42.61931-13.21479a320.72782,320.72782,0,0,0-43.87857-10.45407,275.93839,275.93839,0,0,0-45.01855-3.12473A344.20143,344.20143,0,0,0,306.666,514.82967q-5.45484,1.53164-10.85948,3.23259c-1.836.5756-1.05209,3.47271.79752,2.89284Z'
                        ],
                        [
                            'fill',
                            '#3f3d56'
                        ],
                        [
                            'transform',
                            'translate(-55.06669 -38.74669)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](8, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M296.60406,596.9551a349.10769,349.10769,0,0,1,90.1557-16.07316,282.15087,282.15087,0,0,1,45.97047,1.7986,287.56233,287.56233,0,0,1,44.61626,9.55207c14.4206,4.17522,28.64209,8.99849,43.01405,13.33329a401.17806,401.17806,0,0,0,44.45525,10.84819,376.87356,376.87356,0,0,0,45.16986,5.38371c15.00305.87194,30.15309,1.0421,45.11414-.55621a138.0256,138.0256,0,0,0,40.59011-10.28933A123.97053,123.97053,0,0,0,728.70055,589.779q3.67222-3.2781,7.06609-6.84515c1.33469-1.39522-.78353-3.51978-2.12132-2.12132-19.12461,19.99191-44.26195,32.38806-71.527,36.52762-14.853,2.25509-29.98981,2.38592-44.97348,1.80438a370.06082,370.06082,0,0,1-45.71483-4.619A382.03123,382.03123,0,0,1,527.155,604.4477c-14.28794-4.13931-28.38132-8.91171-42.61931-13.21479a320.72782,320.72782,0,0,0-43.87857-10.45407,275.93839,275.93839,0,0,0-45.01855-3.12473A344.20143,344.20143,0,0,0,306.666,590.82967q-5.45484,1.53164-10.85948,3.23259c-1.836.5756-1.05209,3.47271.79752,2.89284Z'
                        ],
                        [
                            'fill',
                            '#3f3d56'
                        ],
                        [
                            'transform',
                            'translate(-55.06669 -38.74669)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](9, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M296.60406,451.9551a349.10769,349.10769,0,0,1,90.1557-16.07316,282.15087,282.15087,0,0,1,45.97047,1.7986,287.56233,287.56233,0,0,1,44.61626,9.55207c14.4206,4.17522,28.64209,8.99849,43.01405,13.33329a401.17806,401.17806,0,0,0,44.45525,10.84819,376.87356,376.87356,0,0,0,45.16986,5.38371c15.00305.87194,30.15309,1.0421,45.11414-.55621a138.0256,138.0256,0,0,0,40.59011-10.28933A123.97053,123.97053,0,0,0,728.70055,444.779q3.67222-3.2781,7.06609-6.84515c1.33469-1.39522-.78353-3.51978-2.12132-2.12132-19.12461,19.99191-44.26195,32.38806-71.527,36.52762-14.853,2.25509-29.98981,2.38592-44.97348,1.80438A370.06082,370.06082,0,0,1,571.43,469.52557,382.03123,382.03123,0,0,1,527.155,459.4477c-14.28794-4.13931-28.38132-8.91171-42.61931-13.21479a320.72782,320.72782,0,0,0-43.87857-10.45407,275.93839,275.93839,0,0,0-45.01855-3.12473A344.20143,344.20143,0,0,0,306.666,445.82967q-5.45484,1.53163-10.85948,3.23259c-1.836.5756-1.05209,3.47271.79752,2.89284Z'
                        ],
                        [
                            'fill',
                            '#3f3d56'
                        ],
                        [
                            'transform',
                            'translate(-55.06669 -38.74669)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](10, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M293.02966,321.49617c7.25838-3.21556,15.5732-2.65483,23.1061-.79035,8.12236,2.01037,15.771,5.50661,23.76662,7.924a82.27145,82.27145,0,0,0,43.97788.83424,81.06329,81.06329,0,0,0,23.03191-9.8719c1.63065-1.025.12677-3.62188-1.51415-2.59041a79.4874,79.4874,0,0,1-42.31964,12.06472,77.64725,77.64725,0,0,1-22.15352-3.262c-7.93732-2.3799-15.52474-5.83513-23.56552-7.88447-8.51912-2.17125-17.65485-2.6421-25.84384.98574-1.76158.7804-.237,3.36618,1.51416,2.59041Z'
                        ],
                        [
                            'fill',
                            '#3f3d56'
                        ],
                        [
                            'transform',
                            'translate(-55.06669 -38.74669)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](11, 0, null, null, 0, ':svg:circle', [
                        [
                            'cx',
                            '460.86663'
                        ],
                        [
                            'cy',
                            '696.75661'
                        ],
                        [
                            'fill',
                            '#3f3d56'
                        ],
                        [
                            'r',
                            '46'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](12, 0, null, null, 0, ':svg:circle', [
                        [
                            'cx',
                            '212.86663'
                        ],
                        [
                            'cy',
                            '105.75661'
                        ],
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'r',
                            '25'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](13, 0, null, null, 0, ':svg:circle', [
                        [
                            'cx',
                            '431.86663'
                        ],
                        [
                            'cy',
                            '176.75661'
                        ],
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'r',
                            '17'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](14, 0, null, null, 0, ':svg:circle', [
                        [
                            'cx',
                            '155.86663'
                        ],
                        [
                            'cy',
                            '339.75661'
                        ],
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'r',
                            '17'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](15, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#3f3d56'
                        ],
                        [
                            'height',
                            '335.24432'
                        ],
                        [
                            'width',
                            '1.8747'
                        ],
                        [
                            'x',
                            '85.547'
                        ],
                        [
                            'y',
                            '213.46424'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](16, 0, null, null, 0, ':svg:ellipse', [
                        [
                            'cx',
                            '86.84593'
                        ],
                        [
                            'cy',
                            '436.55402'
                        ],
                        [
                            'fill',
                            '#3f3d56'
                        ],
                        [
                            'rx',
                            '36.55673'
                        ],
                        [
                            'ry',
                            '83.42433'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](17, 0, null, null, 0, ':svg:ellipse', [
                        [
                            'cx',
                            '86.84593'
                        ],
                        [
                            'cy',
                            '246.27156'
                        ],
                        [
                            'fill',
                            '#3f3d56'
                        ],
                        [
                            'rx',
                            '36.55673'
                        ],
                        [
                            'ry',
                            '83.42433'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](18, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M142.81061,216.86068l-1.796-.53824c.1135-.379,11.13471-38.14721-6.962-62.4607-10.22116-13.73165-27.76036-20.69451-52.13059-20.69451v-1.87471c24.9991,0,43.04588,7.21917,53.6396,21.457C154.21857,177.82509,142.92686,216.47347,142.81061,216.86068Z'
                        ],
                        [
                            'fill',
                            '#3f3d56'
                        ],
                        [
                            'transform',
                            'translate(-55.06669 -38.74669)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](19, 0, null, null, 0, ':svg:circle', [
                        [
                            'cx',
                            '26.8554'
                        ],
                        [
                            'cy',
                            '93.48318'
                        ],
                        [
                            'fill',
                            '#3f3d56'
                        ],
                        [
                            'r',
                            '23.4338'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](20, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M825.8065,663.424,808.274,824.72309H929.24832l5.25976-12.27276,7.013,12.27276h113.96133s-8.76625-166.55887-24.54551-171.81863S825.8065,663.424,825.8065,663.424Z'
                        ],
                        [
                            'fill',
                            '#2f2e41'
                        ],
                        [
                            'transform',
                            'translate(-55.06669 -38.74669)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](21, 0, null, null, 0, ':svg:circle', [
                        [
                            'cx',
                            '874.18164'
                        ],
                        [
                            'cy',
                            '209.15673'
                        ],
                        [
                            'fill',
                            '#ffb8b8'
                        ],
                        [
                            'r',
                            '61.36379'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](22, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M894.1833,286.475s5.25975,56.104,0,59.61054,84.15606,1.75326,84.15606,1.75326-12.27276-50.84429,0-75.38981Z'
                        ],
                        [
                            'fill',
                            '#ffb8b8'
                        ],
                        [
                            'transform',
                            'translate(-55.06669 -38.74669)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](23, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M925.74182,333.81273s45.11322,7.02643,48.85538-7.00629l23.02792,31.55181,1.75325,315.58523s-187.59788,22.79227-194.61089-14.026,71.88331-327.858,71.88331-327.858l19.86216-1.28572S922.23532,333.81273,925.74182,333.81273Z'
                        ],
                        [
                            'fill',
                            '#d0cde1'
                        ],
                        [
                            'transform',
                            'translate(-55.06669 -38.74669)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](24, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M896.21439,316.37533l-30.08311,10.4244-85.90931,21.039,3.5065,210.39015s-73.63655,210.39015-40.32478,226.16941,80.64956-21.039,94.67557-47.33779,63.117-390.975,63.117-397.988S896.21439,316.37533,896.21439,316.37533Z'
                        ],
                        [
                            'fill',
                            '#3f3d56'
                        ],
                        [
                            'transform',
                            'translate(-55.06669 -38.74669)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](25, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M973.47025,316.37533l11.88211,10.4244,84.15606,38.57153-42.078,212.1434s56.104,192.85764,35.065,203.37715-52.59754,40.32478-59.61054,22.79226S954.57513,335.7562,973.47025,316.37533Z'
                        ],
                        [
                            'fill',
                            '#3f3d56'
                        ],
                        [
                            'transform',
                            'translate(-55.06669 -38.74669)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](26, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M1022.17064,596.80042s-78.89631-33.31177-80.64956-3.5065,89.41582,50.84429,89.41582,42.078S1022.17064,596.80042,1022.17064,596.80042Z'
                        ],
                        [
                            'fill',
                            '#ffb8b8'
                        ],
                        [
                            'transform',
                            'translate(-55.06669 -38.74669)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](27, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M829.313,584.52767s91.16907,68.37679,56.104,85.90931-80.64956-61.3638-80.64956-61.3638Z'
                        ],
                        [
                            'fill',
                            '#ffb8b8'
                        ],
                        [
                            'transform',
                            'translate(-55.06669 -38.74669)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](28, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M956.49132,158.01513a3.38451,3.38451,0,0,1,3.25676-1.93273c-28.09345-1.68046-57.68462,1.59391-81.18765,17.0753-6.58229,4.33573-12.72923,9.6376-20.22289,12.081l6.08267,4.77011-7.26763,2.21543,10.69544,6.91263a9.27045,9.27045,0,0,1-8.82861,2.95773c4.64818,1.358,8.07046,5.49439,9.80869,10.01416s2.05052,9.44217,2.34418,14.27575c1.79656-6.9743,9.408-11.07972,16.59785-11.49687s14.2019,1.95512,21.19907,3.66045a117.27154,117.27154,0,0,0,46.548,1.79065c-5.25649,10.54877-.82242,23.13119,3.63955,34.03981L968.066,276.1598c4.94626.49749,8.44239-4.42141,12.16886-7.71176,3.39641-2.99892-10.12543,23.37638-8.03185,22.41,2.71982-1.25539,31.42131-32.94373,32.76537-35.62084,6.13213-12.21409,9.81123-25.8377,9.25789-39.4935s-5.55-27.31832-14.96291-37.2275c-6.39033-6.72714-15.23132-7.90529-21.746-13.49635-2.56408-2.20055-2.57349-3.91969-6.09717-5.20273C970.24979,159.391,956.68486,157.58563,956.49132,158.01513Z'
                        ],
                        [
                            'fill',
                            '#2f2e41'
                        ],
                        [
                            'transform',
                            'translate(-55.06669 -38.74669)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](29, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M792.49472,353.0985,780.222,347.83875,682.0399,509.13786s-17.53252,42.078,14.026,61.3638S801.261,647.64471,801.261,647.64471l42.078-64.8703s-85.90931-40.32478-80.64956-56.104,33.31178-57.85729,33.31178-57.85729Z'
                        ],
                        [
                            'fill',
                            '#3f3d56'
                        ],
                        [
                            'transform',
                            'translate(-55.06669 -38.74669)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](30, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M1046.71616,361.86476l22.79226,3.5065s94.67557,185.84463,71.88331,220.90966S1025.67714,670.437,1025.67714,670.437s-1.75325-57.85729-17.53251-78.89631l54.35079-21.039-29.80527-115.71459Z'
                        ],
                        [
                            'fill',
                            '#3f3d56'
                        ],
                        [
                            'transform',
                            'translate(-55.06669 -38.74669)'
                        ]
                    ], null, null, null, null, null))
                ], function (l, n) {
                    l(n, 1, 0, n.component.documentForm, 'documentFile', 'Arrastra y suelta tu documento PDF de hasta 5 MB de peso', 'application/pdf', '.pdf');
                }, null);
            }
            function ln(l) {
                return t['ɵvid'](2, [
                    t['ɵqud'](402653184, 1, { el: 0 }),
                    (l()(), t['ɵeld'](1, 0, null, null, 105, 'ce-layout-dashboard', [], null, null, null, v.b, v.a)),
                    t['ɵdid'](2, 638976, null, 0, f.a, [t.ChangeDetectorRef], {
                        isLoading: [
                            0,
                            'isLoading'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](3, 0, null, 0, 103, 'div', [
                        [
                            'class',
                            'card card-custom gutter-b'
                        ],
                        [
                            'content',
                            ''
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](4, 0, null, null, 10, 'div', [[
                            'class',
                            'card-header'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](5, 0, null, null, 3, 'div', [[
                            'class',
                            'card-title'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](6, 0, null, null, 2, 'h3', [[
                            'class',
                            'card-label'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](7, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](9, 0, null, null, 5, 'div', [[
                            'class',
                            'card-toolbar'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](10, 0, null, null, 4, 'a', [
                        [
                            'class',
                            'btn btn-light'
                        ],
                        [
                            'routerLink',
                            '/document'
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
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 11).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](11, 671744, null, 0, o.u, [
                        o.r,
                        o.a,
                        p.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](12, 0, null, null, 0, 'i', [[
                            'class',
                            'fa fa-arrow-left'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](13, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](15, 0, null, null, 91, 'div', [[
                            'class',
                            'card-body'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](16, 0, [
                        [
                            1,
                            0
                        ],
                        [
                            'wizard',
                            1
                        ]
                    ], null, 90, 'div', [
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
                    (l()(), t['ɵeld'](17, 0, null, null, 22, 'div', [[
                            'class',
                            'wizard-nav border-bottom'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](18, 0, null, null, 21, 'div', [[
                            'class',
                            'wizard-steps p-8 p-lg-10'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](19, 0, null, null, 6, 'a', [
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
                    (l()(), t['ɵeld'](20, 0, null, null, 5, 'div', [[
                            'class',
                            'wizard-label'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](21, 0, null, null, 1, 'div', [[
                            'class',
                            'wizard-icon'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](22, 0, null, null, 0, 'img', [
                        [
                            'src',
                            '../../../../../assets/media/wizard/step_1.svg'
                        ],
                        [
                            'style',
                            'min-width: 100px;'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](23, 0, null, null, 2, 'h3', [[
                            'class',
                            'wizard-title'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](24, null, [
                        '1) ',
                        ' '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](26, 0, null, null, 6, 'a', [
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
                    (l()(), t['ɵeld'](27, 0, null, null, 5, 'div', [[
                            'class',
                            'wizard-label'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](28, 0, null, null, 1, 'div', [[
                            'class',
                            'wizard-icon'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](29, 0, null, null, 0, 'img', [
                        [
                            'alt',
                            'Teléfono'
                        ],
                        [
                            'class',
                            'disable'
                        ],
                        [
                            'src',
                            '../../../../../assets/media/wizard/step_2.svg'
                        ],
                        [
                            'style',
                            'min-width: 100px;'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](30, 0, null, null, 2, 'h3', [[
                            'class',
                            'wizard-title'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](31, null, [
                        '2) ',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](33, 0, null, null, 6, 'a', [
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
                    (l()(), t['ɵeld'](34, 0, null, null, 5, 'div', [[
                            'class',
                            'wizard-label'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](35, 0, null, null, 1, 'div', [[
                            'class',
                            'wizard-icon'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](36, 0, null, null, 0, 'img', [
                        [
                            'alt',
                            'Teléfono'
                        ],
                        [
                            'class',
                            'disable'
                        ],
                        [
                            'src',
                            '../../../../../assets/media/wizard/step_3.svg'
                        ],
                        [
                            'style',
                            'min-width: 100px;'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](37, 0, null, null, 2, 'h3', [[
                            'class',
                            'wizard-title'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](38, null, [
                        '3) ',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](40, 0, null, null, 66, 'div', [[
                            'class',
                            'row justify-content-center my-10 px-8 my-lg-15 px-lg-10'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](41, 0, null, null, 65, 'div', [[
                            'class',
                            'col-xl-12 col-xxl-10'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](42, 0, null, null, 64, 'form', [
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
                        return 'submit' === n && (u = !1 !== t['ɵnov'](l, 44).onSubmit(e) && u), 'reset' === n && (u = !1 !== t['ɵnov'](l, 44).onReset() && u), u;
                    }, null, null)),
                    t['ɵdid'](43, 16384, null, 0, C.C, [], null, null),
                    t['ɵdid'](44, 4210688, null, 0, C.s, [
                        [
                            8,
                            null
                        ],
                        [
                            8,
                            null
                        ]
                    ], null, null),
                    t['ɵprd'](2048, null, C.d, null, [C.s]),
                    t['ɵdid'](46, 16384, null, 0, C.r, [[
                            6,
                            C.d
                        ]], null, null),
                    (l()(), t['ɵeld'](47, 0, null, null, 11, 'div', [
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
                    (l()(), t['ɵeld'](48, 0, null, null, 2, 'div', [[
                            'class',
                            'mb-10 font-weight-bold text-dark'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](49, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](51, 0, null, null, 2, 'app-form-step1', [], null, [
                        [
                            null,
                            'formChange'
                        ],
                        [
                            null,
                            'modeChange'
                        ],
                        [
                            null,
                            'changeSelectDocument'
                        ]
                    ], function (l, n, e) {
                        var t = !0, u = l.component;
                        return 'formChange' === n && (t = !1 !== (u.infoForm = e) && t), 'modeChange' === n && (t = !1 !== (u.mode_view = e) && t), 'changeSelectDocument' === n && (t = !1 !== (u.onChangeSelectDocument = e) && t), t;
                    }, Ml, fl)),
                    t['ɵprd'](512, null, dl.a, cl, [
                        C.f,
                        gl.a
                    ]),
                    t['ɵdid'](53, 4308992, null, 0, ml, [
                        dl.a,
                        vl.o,
                        t.ChangeDetectorRef,
                        b.a
                    ], {
                        form: [
                            0,
                            'form'
                        ],
                        mode: [
                            1,
                            'mode'
                        ]
                    }, {
                        formChange: 'formChange',
                        changeSelectDocument: 'changeSelectDocument'
                    }),
                    (l()(), t['ɵeld'](54, 0, null, null, 4, 'div', [[
                            'class',
                            'd-flex justify-content-end border-top pt-10'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](55, 0, null, null, 3, 'div', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](56, 0, null, null, 2, 'button', [[
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
                    (l()(), t['ɵted'](57, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](59, 0, null, null, 21, 'div', [
                        [
                            'class',
                            'pb-5'
                        ],
                        [
                            'data-wizard-type',
                            'step-content'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](60, 0, null, null, 2, 'div', [[
                            'class',
                            'mb-10 font-weight-bold text-dark'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](61, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](63, 0, null, null, 17, 'form', [[
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
                        return 'submit' === n && (u = !1 !== t['ɵnov'](l, 65).onSubmit(e) && u), 'reset' === n && (u = !1 !== t['ɵnov'](l, 65).onReset() && u), u;
                    }, null, null)),
                    t['ɵdid'](64, 16384, null, 0, C.C, [], null, null),
                    t['ɵdid'](65, 540672, null, 0, C.k, [
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
                    t['ɵprd'](2048, null, C.d, null, [C.k]),
                    t['ɵdid'](67, 16384, null, 0, C.r, [[
                            6,
                            C.d
                        ]], null, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Xl)),
                    t['ɵdid'](69, 16384, null, 0, p.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Ql)),
                    t['ɵdid'](71, 16384, null, 0, p.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](72, 0, null, null, 8, 'div', [[
                            'class',
                            'd-flex justify-content-between border-top pt-10'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](73, 0, null, null, 3, 'div', [[
                            'class',
                            'mr-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](74, 0, null, null, 2, 'div', [[
                            'class',
                            'btn btn-light-primary font-weight-bold text-uppercase px-9 py-4'
                        ]], null, [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.goTo(1) && t), t;
                    }, null, null)),
                    (l()(), t['ɵted'](75, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](77, 0, null, null, 3, 'div', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](78, 0, null, null, 2, 'button', [[
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
                        return 'click' === n && (t = !1 !== l.component.goTo(3) && t), t;
                    }, null, null)),
                    (l()(), t['ɵted'](79, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](81, 0, null, null, 25, 'div', [
                        [
                            'class',
                            'pb-5'
                        ],
                        [
                            'data-wizard-type',
                            'step-content'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](82, 0, null, null, 2, 'div', [[
                            'class',
                            'mb-10 font-weight-bold text-dark'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](83, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](85, 0, null, null, 12, 'div', [[
                            'class',
                            'row'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](86, 0, null, null, 5, 'div', [[
                            'class',
                            'col-xl-6'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](87, 0, null, null, 4, 'app-involved-list', [], null, [[
                            null,
                            'getItems'
                        ]], function (l, n, e) {
                        var t = !0;
                        return 'getItems' === n && (t = !1 !== l.component.setSigns(e) && t), t;
                    }, Bl, Ul)),
                    t['ɵprd'](512, null, dl.a, xl.a, [
                        C.f,
                        gl.a
                    ]),
                    t['ɵdid'](89, 114688, null, 0, Nl, [
                        m.E,
                        dl.a,
                        Sl.a,
                        vl.o,
                        Fl.a
                    ], {
                        titleActions: [
                            0,
                            'titleActions'
                        ],
                        title: [
                            1,
                            'title'
                        ],
                        items: [
                            2,
                            'items'
                        ]
                    }, { getItems: 'getItems' }),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](92, 0, null, null, 5, 'div', [[
                            'class',
                            'col-xl-6'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](93, 0, null, null, 4, 'app-involved-list', [], null, [[
                            null,
                            'getItems'
                        ]], function (l, n, e) {
                        var t = !0;
                        return 'getItems' === n && (t = !1 !== l.component.setObservers(e) && t), t;
                    }, Bl, Ul)),
                    t['ɵprd'](512, null, dl.a, xl.a, [
                        C.f,
                        gl.a
                    ]),
                    t['ɵdid'](95, 114688, null, 0, Nl, [
                        m.E,
                        dl.a,
                        Sl.a,
                        vl.o,
                        Fl.a
                    ], {
                        titleActions: [
                            0,
                            'titleActions'
                        ],
                        title: [
                            1,
                            'title'
                        ],
                        items: [
                            2,
                            'items'
                        ]
                    }, { getItems: 'getItems' }),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](98, 0, null, null, 8, 'div', [[
                            'class',
                            'd-flex justify-content-between border-top pt-10'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](99, 0, null, null, 3, 'div', [[
                            'class',
                            'mr-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](100, 0, null, null, 2, 'div', [[
                            'class',
                            'btn btn-light-primary font-weight-bold text-uppercase px-9 py-4'
                        ]], null, [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.goTo(2) && t), t;
                    }, null, null)),
                    (l()(), t['ɵted'](101, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](103, 0, null, null, 3, 'div', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](104, 0, null, null, 2, 'button', [[
                            'class',
                            'btn btn-success font-weight-bold text-uppercase px-9 py-4'
                        ]], [[
                            8,
                            'disabled',
                            0
                        ]], [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.create() && t), t;
                    }, null, null)),
                    (l()(), t['ɵted'](105, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ])
                ], function (l, n) {
                    var e = n.component;
                    l(n, 2, 0, e.loading), l(n, 11, 0, '/document'), l(n, 53, 0, e.infoForm, e.mode_view), l(n, 65, 0, e.documentForm), l(n, 69, 0, '2' == e.documentType), l(n, 71, 0, '1' == e.documentType), l(n, 89, 0, t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 89, 0, t['ɵnov'](n, 90).transform('DOCUMENT.CREATE.WIZARD.ADDACCION')), ''), t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 89, 1, t['ɵnov'](n, 91).transform('DOCUMENT.CREATE.WIZARD.LISTSIGNATURE')), ''), e.signsListComponent), l(n, 95, 0, t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 95, 0, t['ɵnov'](n, 96).transform('DOCUMENT.CREATE.WIZARD.ADDACCION')), ''), t['ɵinlineInterpolate'](1, ' ', t['ɵunv'](n, 95, 1, t['ɵnov'](n, 97).transform('DOCUMENT.CREATE.WIZARD.LISTOBSERVATER')), ''), e.observersListComponent);
                }, function (l, n) {
                    var e = n.component;
                    l(n, 7, 0, t['ɵunv'](n, 7, 0, t['ɵnov'](n, 8).transform('DOCUMENT.CREATE.WIZARD.CREATEDOCUMENT'))), l(n, 10, 0, t['ɵnov'](n, 11).target, t['ɵnov'](n, 11).href), l(n, 13, 0, t['ɵunv'](n, 13, 0, t['ɵnov'](n, 14).transform('CONTRACT.FORM.BACK'))), l(n, 24, 0, t['ɵunv'](n, 24, 0, t['ɵnov'](n, 25).transform('DOCUMENT.CREATE.WIZARD.KEPP1'))), l(n, 31, 0, t['ɵunv'](n, 31, 0, t['ɵnov'](n, 32).transform('DOCUMENT.CREATE.WIZARD.KEPP2'))), l(n, 38, 0, t['ɵunv'](n, 38, 0, t['ɵnov'](n, 39).transform('DOCUMENT.CREATE.WIZARD.KEPP3'))), l(n, 42, 0, t['ɵnov'](n, 46).ngClassUntouched, t['ɵnov'](n, 46).ngClassTouched, t['ɵnov'](n, 46).ngClassPristine, t['ɵnov'](n, 46).ngClassDirty, t['ɵnov'](n, 46).ngClassValid, t['ɵnov'](n, 46).ngClassInvalid, t['ɵnov'](n, 46).ngClassPending), l(n, 49, 0, t['ɵunv'](n, 49, 0, t['ɵnov'](n, 50).transform('DOCUMENT.CREATE.WIZARD.KEEP1DESCRIPTION'))), l(n, 56, 0, !e.infoForm.valid), l(n, 57, 0, t['ɵunv'](n, 57, 0, t['ɵnov'](n, 58).transform('DOCUMENT.CREATE.WIZARD.NEXT'))), l(n, 61, 0, 1 == e.documentType ? 'DOCUMENT.CREATE.WIZARD.WRITEDOCUMENT' : t['ɵunv'](n, 61, 0, t['ɵnov'](n, 62).transform('DOCUMENT.CREATE.WIZARD.UPLOADDOCUMENT'))), l(n, 63, 0, t['ɵnov'](n, 67).ngClassUntouched, t['ɵnov'](n, 67).ngClassTouched, t['ɵnov'](n, 67).ngClassPristine, t['ɵnov'](n, 67).ngClassDirty, t['ɵnov'](n, 67).ngClassValid, t['ɵnov'](n, 67).ngClassInvalid, t['ɵnov'](n, 67).ngClassPending), l(n, 75, 0, t['ɵunv'](n, 75, 0, t['ɵnov'](n, 76).transform('DOCUMENT.CREATE.WIZARD.BACK'))), l(n, 78, 0, !e.documentForm.valid), l(n, 79, 0, t['ɵunv'](n, 79, 0, t['ɵnov'](n, 80).transform('DOCUMENT.CREATE.WIZARD.NEXT'))), l(n, 83, 0, t['ɵunv'](n, 83, 0, t['ɵnov'](n, 84).transform('DOCUMENT.CREATE.WIZARD.ADDSIGNATURES'))), l(n, 101, 0, t['ɵunv'](n, 101, 0, t['ɵnov'](n, 102).transform('DOCUMENT.CREATE.WIZARD.BACK'))), l(n, 104, 0, !e.isFormsValid), l(n, 105, 0, t['ɵunv'](n, 105, 0, t['ɵnov'](n, 106).transform('DOCUMENT.CREATE.WIZARD.CREATEDOCUMENT')));
                });
            }
            function nn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, 'ng-component', [], null, null, null, ln, Yl)),
                    t['ɵprd'](4608, null, m.n, O.a, []),
                    t['ɵprd'](4608, null, m.o, O.b, []),
                    t['ɵdid'](3, 4440064, null, 0, Jl, [
                        t.ChangeDetectorRef,
                        P.a,
                        C.f,
                        b.a,
                        o.r,
                        vl.o
                    ], null, null)
                ], function (l, n) {
                    l(n, 3, 0);
                }, null);
            }
            var en = t['ɵccf']('ng-component', Jl, nn, {}, {}, []), tn = e('fWv6'), un = e('ZEiq');
            class on {
                constructor(l, n, e, t) {
                    this.notificationService = l, this.documentService = n, this.router = e, this.activatedRoute = t, this.initObserver = [], this.initSigns = [], this.signsListComponent = [], this.observersListComponent = [], this.signs = [], this.observers = [], this.editorStyle = { height: '500px' }, this.document = { recivers: [] }, this.loading = !1, this.mode_view = 'E';
                }
                ngOnInit() {
                    return Object(M.a)(this, void 0, void 0, function* () {
                        try {
                            this.loading = !0, this.documentId = this.activatedRoute.snapshot.params.id, this.document = yield this.documentService.getById(this.documentId).toPromise();
                            const l = this.b64toBlob(this.document.file, 'application/pdf'), n = URL.createObjectURL(l);
                            this.pdfSrc = n, this.infoForm.get('signatureType').disable(), this.infoForm.get('documentType').disable(), this.infoForm.get('tenant_id').disable(), this.infoForm.get('constancy_nom151').disable(), this.infoForm.get('constancy_nom151').setValue(this.document.constancy_nom151), this.infoForm.get('name').setValue(this.document.name), this.infoForm.get('signatureType').setValue(this.document.signature_type), this.infoForm.get('documentType').setValue(this.document.document_type), this.infoForm.get('tenant_id').setValue(this.document.tenant_id), this.getSigners(), this.getObservers();
                        } catch (l) {
                        } finally {
                            this.loading = !1;
                        }
                    });
                }
                b64toBlob(l, n = '', e = 512) {
                    const t = atob(l), u = [];
                    for (let i = 0; i < t.length; i += e) {
                        const l = t.slice(i, i + e), n = new Array(l.length);
                        for (let e = 0; e < l.length; e++)
                            n[e] = l.charCodeAt(e);
                        const o = new Uint8Array(n);
                        u.push(o);
                    }
                    return new Blob(u, { type: n });
                }
                ngAfterViewInit() {
                    this.wizard = new jl.a('kt_wizard_v1', { startStep: 1 }), this.wizard.on('change', () => {
                        setTimeout(() => {
                            Wl.a.scrollTop();
                        }, 500);
                    }), this.infoForm.get('tenant_id').setValue(this.document.tenant_id);
                }
                goTo(l) {
                    this.wizard.goTo(l);
                }
                ngOnDestroy() {
                    this.wizard = void 0;
                }
                setSigns(l) {
                    this.signs = l.map(l => ({
                        email: l.description,
                        name: l.title,
                        reciverType: Gl.a.SIGN
                    }));
                }
                setObservers(l) {
                    this.observers = l.map(l => ({
                        email: l.description,
                        name: l.title,
                        reciverType: Gl.a.Observer
                    }));
                }
                getSigners() {
                    let l = [], n = this.document.recivers.filter(({reciverType: l}) => l == Gl.a.SIGN);
                    this.initSigns = n, this.signs = n, n.length > 0 && (l = n.map(l => ({
                        title: l.name,
                        description: l.email,
                        date: l.execution_date
                    }))), this.signsListComponent = l;
                }
                getObservers() {
                    let l = [], n = this.document.recivers.filter(({reciverType: l}) => l === Gl.a.Observer);
                    this.initObserver = n, this.observers = n, n.length > 0 && (l = n.map(l => ({
                        title: l.name,
                        description: l.email,
                        date: l.execution_date
                    }))), this.observersListComponent = l;
                }
                update() {
                    return Object(M.a)(this, void 0, void 0, function* () {
                        try {
                            this.loading = !0;
                            let l = this.getRecivers(this.initSigns, this.signs), n = this.getRecivers(this.initObserver, this.observers);
                            const e = [
                                ...l,
                                ...n
                            ];
                            let t = Object.assign(Object.assign({}, this.infoForm.value), { recivers: e });
                            yield this.documentService.updateDocument(this.documentId, t).toPromise(), this.notificationService.success('Su documento se actualizo con éxito'), this.router.navigate(['/document']), this.loading = !1;
                        } catch (l) {
                            this.loading = !1, Array.isArray(l.error) && this.notificationService.error(l.error);
                        }
                    });
                }
                getRecivers(l, n) {
                    let e = [];
                    if (0 === l.length)
                        for (let t of n)
                            e.push(Object.assign(Object.assign({}, t), { status: !0 }));
                    else if (0 === n.length)
                        for (let t of l)
                            e.push(Object.assign(Object.assign({}, t), { status: !1 }));
                    else {
                        let t = 0;
                        for (let u of l) {
                            t = 0;
                            for (let l of n) {
                                if (u.email === l.email) {
                                    e.push({
                                        name: u.name,
                                        email: u.email,
                                        reciverType: u.reciverType,
                                        status: !0
                                    });
                                    break;
                                }
                                t == n.length - 1 && e.push({
                                    name: u.name,
                                    email: u.email,
                                    reciverType: u.reciverType,
                                    status: !1
                                }), t++;
                            }
                        }
                        for (let l of n)
                            for (let n of e) {
                                if (e.find(n => n.email == l.email))
                                    break;
                                if (n.email !== l.email) {
                                    e.push({
                                        name: l.name,
                                        email: l.email,
                                        reciverType: l.reciverType,
                                        status: !0
                                    });
                                    break;
                                }
                            }
                    }
                    return e;
                }
                get isFormsValid() {
                    var l;
                    return (null === (l = this.infoForm) || void 0 === l ? void 0 : l.valid) && this.signs.length > 0;
                }
                onChangeLoadOwner(l) {
                    this.infoForm.get('tenant_id').setValue(this.document.tenant_id);
                }
            }
            var an = t['ɵcrt']({
                encapsulation: 0,
                styles: [['.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]{display:flex;align-items:center;text-align:center}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]{margin-left:3.5rem;margin-right:3.5rem}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]{color:#b5b5c3;font-size:3.75rem;filter:brightness(.5) sepia(1) hue-rotate(-70deg) saturate(5)}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-title[_ngcontent-%COMP%]{color:#7e8299;font-size:1.1rem;font-weight:500;margin-top:.75rem}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-arrow[_ngcontent-%COMP%]{color:#7e8299;font-size:1.25rem}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-arrow.last[_ngcontent-%COMP%]{display:none}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%], .wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=done][_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]{color:#226298;filter:none}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%], .wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=done][_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{transition:fill .3s ease;fill:#ed553b}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%], .wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=done][_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{transition:fill .3s ease}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]   .wizard-arrow[_ngcontent-%COMP%], .wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-title[_ngcontent-%COMP%], .wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=done][_ngcontent-%COMP%]   .wizard-arrow[_ngcontent-%COMP%], .wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=done][_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-title[_ngcontent-%COMP%]{color:#226298}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]   .wizard-arrow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%], .wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=done][_ngcontent-%COMP%]   .wizard-arrow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{transition:fill .3s ease;fill:#ed553b}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]   .wizard-arrow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%], .wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=done][_ngcontent-%COMP%]   .wizard-arrow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{transition:fill .3s ease}@media (min-width:768px) and (max-width:1199.98px){.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]{margin-left:1.5rem;margin-right:1.5rem}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]{font-size:3.75rem}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-title[_ngcontent-%COMP%]{margin-top:.75rem}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-arrow[_ngcontent-%COMP%]{font-size:1.1rem}}@media (max-width:767.98px){.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]{flex-direction:column}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]{width:100%;flex-direction:row;justify-content:space-between;margin-bottom:.5rem;margin-top:.5rem}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]{flex-direction:row;display:flex;align-items:center;margin-left:0;margin-right:0}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]{font-size:1.5rem;margin-right:1.25rem}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-arrow[_ngcontent-%COMP%]{font-size:1rem}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-arrow.last[_ngcontent-%COMP%]{display:block}}']],
                data: {}
            });
            function rn(l) {
                return t['ɵvid'](0, [
                    t['ɵqud'](402653184, 1, { el: 0 }),
                    (l()(), t['ɵeld'](1, 0, null, null, 98, 'ce-layout-dashboard', [], null, null, null, v.b, v.a)),
                    t['ɵdid'](2, 638976, null, 0, f.a, [t.ChangeDetectorRef], {
                        isLoading: [
                            0,
                            'isLoading'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](3, 0, null, 0, 96, 'div', [
                        [
                            'class',
                            'card card-custom gutter-b'
                        ],
                        [
                            'content',
                            ''
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](4, 0, null, null, 10, 'div', [[
                            'class',
                            'card-header'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](5, 0, null, null, 3, 'div', [[
                            'class',
                            'card-title'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](6, 0, null, null, 2, 'h3', [[
                            'class',
                            'card-label'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](7, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](9, 0, null, null, 5, 'div', [[
                            'class',
                            'card-toolbar'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](10, 0, null, null, 4, 'a', [
                        [
                            'class',
                            'btn btn-light'
                        ],
                        [
                            'routerLink',
                            '/document'
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
                        var u = !0;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 11).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](11, 671744, null, 0, o.u, [
                        o.r,
                        o.a,
                        p.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](12, 0, null, null, 0, 'i', [[
                            'class',
                            'fa fa-arrow-left'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](13, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](15, 0, null, null, 84, 'div', [[
                            'class',
                            'card-body'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](16, 0, [
                        [
                            1,
                            0
                        ],
                        [
                            'wizard',
                            1
                        ]
                    ], null, 83, 'div', [
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
                    (l()(), t['ɵeld'](17, 0, null, null, 19, 'div', [[
                            'class',
                            'wizard-nav border-bottom'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](18, 0, null, null, 18, 'div', [[
                            'class',
                            'wizard-steps p-8 p-lg-10'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](19, 0, null, null, 5, 'a', [
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
                    (l()(), t['ɵeld'](20, 0, null, null, 4, 'div', [[
                            'class',
                            'wizard-label'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](21, 0, null, null, 0, 'i', [[
                            'class',
                            'wizard-icon flaticon-list'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](22, 0, null, null, 2, 'h3', [[
                            'class',
                            'wizard-title'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](23, null, [
                        '1) ',
                        ' '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](25, 0, null, null, 5, 'a', [
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
                    (l()(), t['ɵeld'](26, 0, null, null, 4, 'div', [[
                            'class',
                            'wizard-label'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](27, 0, null, null, 0, 'i', [[
                            'class',
                            'wizard-icon flaticon-file-1'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](28, 0, null, null, 2, 'h3', [[
                            'class',
                            'wizard-title'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](29, null, [
                        '2) ',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](31, 0, null, null, 5, 'a', [
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
                    (l()(), t['ɵeld'](32, 0, null, null, 4, 'div', [[
                            'class',
                            'wizard-label'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](33, 0, null, null, 0, 'i', [[
                            'class',
                            'wizard-icon flaticon-user-add'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](34, 0, null, null, 2, 'h3', [[
                            'class',
                            'wizard-title'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](35, null, [
                        '3) ',
                        ''
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](37, 0, null, null, 62, 'div', [[
                            'class',
                            'row justify-content-center my-10 px-8 my-lg-15 px-lg-10'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](38, 0, null, null, 61, 'div', [[
                            'class',
                            'col-xl-12 col-xxl-10'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](39, 0, null, null, 60, 'form', [
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
                        return 'submit' === n && (u = !1 !== t['ɵnov'](l, 41).onSubmit(e) && u), 'reset' === n && (u = !1 !== t['ɵnov'](l, 41).onReset() && u), u;
                    }, null, null)),
                    t['ɵdid'](40, 16384, null, 0, C.C, [], null, null),
                    t['ɵdid'](41, 4210688, null, 0, C.s, [
                        [
                            8,
                            null
                        ],
                        [
                            8,
                            null
                        ]
                    ], null, null),
                    t['ɵprd'](2048, null, C.d, null, [C.s]),
                    t['ɵdid'](43, 16384, null, 0, C.r, [[
                            6,
                            C.d
                        ]], null, null),
                    (l()(), t['ɵeld'](44, 0, null, null, 11, 'div', [
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
                    (l()(), t['ɵeld'](45, 0, null, null, 1, 'div', [[
                            'class',
                            'mb-10 font-weight-bold text-dark'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, [' Visualice su documento '])),
                    (l()(), t['ɵeld'](47, 0, null, null, 3, 'app-form-step1', [], null, [[
                            null,
                            'formChange'
                        ]], function (l, n, e) {
                        var t = !0;
                        return 'formChange' === n && (t = !1 !== (l.component.infoForm = e) && t), t;
                    }, Ml, fl)),
                    t['ɵprd'](512, null, dl.a, cl, [
                        C.f,
                        gl.a
                    ]),
                    t['ɵdid'](49, 4308992, null, 0, ml, [
                        dl.a,
                        vl.o,
                        t.ChangeDetectorRef,
                        b.a
                    ], {
                        form: [
                            0,
                            'form'
                        ]
                    }, { formChange: 'formChange' }),
                    (l()(), t['ɵted'](-1, null, [' [(mode)]="mode_view" '])),
                    (l()(), t['ɵeld'](51, 0, null, null, 4, 'div', [[
                            'class',
                            'd-flex justify-content-end border-top pt-10'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](52, 0, null, null, 3, 'div', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](53, 0, null, null, 2, 'button', [[
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
                    (l()(), t['ɵted'](54, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](56, 0, null, null, 17, 'div', [
                        [
                            'class',
                            'pb-5'
                        ],
                        [
                            'data-wizard-type',
                            'step-content'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](57, 0, null, null, 2, 'div', [[
                            'class',
                            'mb-10 font-weight-bold text-dark'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](58, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](60, 0, null, null, 4, 'div', [[
                            'class',
                            'form-group'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](61, 0, null, null, 3, 'div', [[
                            'class',
                            'row mt-10'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](62, 0, null, null, 2, 'div', [[
                            'class',
                            'col-12'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](63, 0, null, null, 1, 'pdf-viewer', [[
                            'class',
                            'd-flex w-full shadow '
                        ]], null, [[
                            'window',
                            'resize'
                        ]], function (l, n, e) {
                        var u = !0;
                        return 'window:resize' === n && (u = !1 !== t['ɵnov'](l, 64).onPageResize() && u), u;
                    }, tn.b, tn.a)),
                    t['ɵdid'](64, 9158656, null, 0, un.a, [t.ElementRef], {
                        src: [
                            0,
                            'src'
                        ],
                        renderText: [
                            1,
                            'renderText'
                        ],
                        originalSize: [
                            2,
                            'originalSize'
                        ],
                        showAll: [
                            3,
                            'showAll'
                        ],
                        stickToPage: [
                            4,
                            'stickToPage'
                        ],
                        autoresize: [
                            5,
                            'autoresize'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](65, 0, null, null, 8, 'div', [[
                            'class',
                            'd-flex justify-content-between border-top pt-10'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](66, 0, null, null, 3, 'div', [[
                            'class',
                            'mr-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](67, 0, null, null, 2, 'div', [[
                            'class',
                            'btn btn-light-primary font-weight-bold text-uppercase px-9 py-4'
                        ]], null, [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.goTo(1) && t), t;
                    }, null, null)),
                    (l()(), t['ɵted'](68, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](70, 0, null, null, 3, 'div', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](71, 0, null, null, 2, 'button', [[
                            'class',
                            'btn btn-primary font-weight-bold text-uppercase px-9 py-4'
                        ]], null, [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.goTo(3) && t), t;
                    }, null, null)),
                    (l()(), t['ɵted'](72, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](74, 0, null, null, 25, 'div', [
                        [
                            'class',
                            'pb-5'
                        ],
                        [
                            'data-wizard-type',
                            'step-content'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](75, 0, null, null, 2, 'div', [[
                            'class',
                            'mb-10 font-weight-bold text-dark'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](76, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](78, 0, null, null, 12, 'div', [[
                            'class',
                            'row'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](79, 0, null, null, 5, 'div', [[
                            'class',
                            'col-xl-6'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](80, 0, null, null, 4, 'app-involved-list', [], null, [[
                            null,
                            'getItems'
                        ]], function (l, n, e) {
                        var t = !0;
                        return 'getItems' === n && (t = !1 !== l.component.setSigns(e) && t), t;
                    }, Bl, Ul)),
                    t['ɵprd'](512, null, dl.a, xl.a, [
                        C.f,
                        gl.a
                    ]),
                    t['ɵdid'](82, 114688, null, 0, Nl, [
                        m.E,
                        dl.a,
                        Sl.a,
                        vl.o,
                        Fl.a
                    ], {
                        titleActions: [
                            0,
                            'titleActions'
                        ],
                        title: [
                            1,
                            'title'
                        ],
                        items: [
                            2,
                            'items'
                        ],
                        externalItems: [
                            3,
                            'externalItems'
                        ],
                        validateEmail: [
                            4,
                            'validateEmail'
                        ]
                    }, { getItems: 'getItems' }),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](85, 0, null, null, 5, 'div', [[
                            'class',
                            'col-xl-6'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](86, 0, null, null, 4, 'app-involved-list', [], null, [[
                            null,
                            'getItems'
                        ]], function (l, n, e) {
                        var t = !0;
                        return 'getItems' === n && (t = !1 !== l.component.setObservers(e) && t), t;
                    }, Bl, Ul)),
                    t['ɵprd'](512, null, dl.a, xl.a, [
                        C.f,
                        gl.a
                    ]),
                    t['ɵdid'](88, 114688, null, 0, Nl, [
                        m.E,
                        dl.a,
                        Sl.a,
                        vl.o,
                        Fl.a
                    ], {
                        titleActions: [
                            0,
                            'titleActions'
                        ],
                        title: [
                            1,
                            'title'
                        ],
                        items: [
                            2,
                            'items'
                        ],
                        externalItems: [
                            3,
                            'externalItems'
                        ],
                        validateEmail: [
                            4,
                            'validateEmail'
                        ]
                    }, { getItems: 'getItems' }),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](91, 0, null, null, 8, 'div', [[
                            'class',
                            'd-flex justify-content-between border-top pt-10'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](92, 0, null, null, 3, 'div', [[
                            'class',
                            'mr-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](93, 0, null, null, 2, 'div', [[
                            'class',
                            'btn btn-light-primary font-weight-bold text-uppercase px-9 py-4'
                        ]], null, [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.goTo(2) && t), t;
                    }, null, null)),
                    (l()(), t['ɵted'](94, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](96, 0, null, null, 3, 'div', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](97, 0, null, null, 2, 'button', [[
                            'class',
                            'btn btn-success font-weight-bold text-uppercase px-9 py-4'
                        ]], [[
                            8,
                            'disabled',
                            0
                        ]], [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.update() && t), t;
                    }, null, null)),
                    (l()(), t['ɵted'](98, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, g.k, [
                        g.l,
                        t.ChangeDetectorRef
                    ])
                ], function (l, n) {
                    var e = n.component;
                    l(n, 2, 0, e.loading), l(n, 11, 0, '/document'), l(n, 49, 0, e.infoForm), l(n, 64, 0, e.pdfSrc, !0, !1, !0, !0, !0), l(n, 82, 0, t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 82, 0, t['ɵnov'](n, 83).transform('DOCUMENT.CREATE.WIZARD.ADDACCION')), ''), t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 82, 1, t['ɵnov'](n, 84).transform('DOCUMENT.CREATE.WIZARD.LISTSIGNATURE')), ''), e.signsListComponent, e.observers, !0), l(n, 88, 0, t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 88, 0, t['ɵnov'](n, 89).transform('DOCUMENT.CREATE.WIZARD.ADDACCION')), ''), t['ɵinlineInterpolate'](1, ' ', t['ɵunv'](n, 88, 1, t['ɵnov'](n, 90).transform('DOCUMENT.CREATE.WIZARD.LISTOBSERVATER')), ''), e.observersListComponent, e.signs, !0);
                }, function (l, n) {
                    var e = n.component;
                    l(n, 7, 0, t['ɵunv'](n, 7, 0, t['ɵnov'](n, 8).transform('DOCUMENT.CREATE.WIZARD.UPDATEDOCUMENT'))), l(n, 10, 0, t['ɵnov'](n, 11).target, t['ɵnov'](n, 11).href), l(n, 13, 0, t['ɵunv'](n, 13, 0, t['ɵnov'](n, 14).transform('CONTRACT.FORM.BACK'))), l(n, 23, 0, t['ɵunv'](n, 23, 0, t['ɵnov'](n, 24).transform('DOCUMENT.CREATE.WIZARD.KEPP1'))), l(n, 29, 0, t['ɵunv'](n, 29, 0, t['ɵnov'](n, 30).transform('DOCUMENT.CREATE.WIZARD.KEPP2'))), l(n, 35, 0, t['ɵunv'](n, 35, 0, t['ɵnov'](n, 36).transform('DOCUMENT.CREATE.WIZARD.KEPP3'))), l(n, 39, 0, t['ɵnov'](n, 43).ngClassUntouched, t['ɵnov'](n, 43).ngClassTouched, t['ɵnov'](n, 43).ngClassPristine, t['ɵnov'](n, 43).ngClassDirty, t['ɵnov'](n, 43).ngClassValid, t['ɵnov'](n, 43).ngClassInvalid, t['ɵnov'](n, 43).ngClassPending), l(n, 53, 0, !e.infoForm.valid), l(n, 54, 0, t['ɵunv'](n, 54, 0, t['ɵnov'](n, 55).transform('DOCUMENT.CREATE.WIZARD.NEXT'))), l(n, 58, 0, t['ɵunv'](n, 58, 0, t['ɵnov'](n, 59).transform('DOCUMENT.CREATE.WIZARD.WRITEDOCUMENT'))), l(n, 68, 0, t['ɵunv'](n, 68, 0, t['ɵnov'](n, 69).transform('DOCUMENT.CREATE.WIZARD.BACK'))), l(n, 72, 0, t['ɵunv'](n, 72, 0, t['ɵnov'](n, 73).transform('DOCUMENT.CREATE.WIZARD.NEXT'))), l(n, 76, 0, t['ɵunv'](n, 76, 0, t['ɵnov'](n, 77).transform('DOCUMENT.CREATE.WIZARD.ADDSIGNATURES'))), l(n, 94, 0, t['ɵunv'](n, 94, 0, t['ɵnov'](n, 95).transform('DOCUMENT.CREATE.WIZARD.BACK'))), l(n, 97, 0, !e.isFormsValid), l(n, 98, 0, t['ɵunv'](n, 98, 0, t['ɵnov'](n, 99).transform('DOCUMENT.CREATE.WIZARD.UPDATEDOCUMENT')));
                });
            }
            function dn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, 'ng-component', [], null, null, null, rn, an)),
                    t['ɵprd'](4608, null, m.n, O.a, []),
                    t['ɵprd'](4608, null, m.o, O.b, []),
                    t['ɵdid'](3, 4440064, null, 0, on, [
                        P.a,
                        b.a,
                        o.r,
                        o.a
                    ], null, null)
                ], function (l, n) {
                    l(n, 3, 0);
                }, null);
            }
            var sn = t['ɵccf']('ng-component', on, dn, {}, {}, []), cn = e('ypAQ'), gn = e('9AJC'), pn = e('QfCi'), mn = e('8WaK'), vn = e('Ed4d'), fn = e('JRKe'), Cn = e('IheW'), hn = e('9b/N'), wn = e('NFMk');
            class On {
            }
            var Mn = e('F3IN'), zn = e('66zS'), _n = e('1z/I'), bn = e('PgQK'), Rn = e('jQCg'), Pn = e('W0Pu'), En = e('W4B1'), Dn = e('0CZq'), yn = e('Jp/u'), Tn = e('WJhm'), kn = e('GaVp'), In = e('YRt3'), An = e('lAiz'), xn = e('YdS3'), Nn = e('mW00'), Sn = e('jTf7'), Fn = e('S/WK'), Un = e('oBm0'), Ln = e('RVNi'), Vn = e('gaRz'), Hn = e('vZsH'), $n = e('tM0M'), Zn = e('fb/r'), Kn = e('z+yo'), Bn = e('JXeA'), jn = e('51fn'), Wn = e('pKmL'), qn = e('RbrB'), Gn = e('Tczp'), Jn = e('kFOB'), Yn = t['ɵcmf'](u, [], function (l) {
                    return t['ɵmod']([
                        t['ɵmpd'](512, t.ComponentFactoryResolver, t['ɵCodegenComponentFactoryResolver'], [
                            [
                                8,
                                [
                                    i.a,
                                    c,
                                    q,
                                    en,
                                    sn,
                                    cn.a,
                                    gn.h,
                                    gn.i,
                                    pn.a,
                                    mn.a,
                                    vn.b,
                                    vn.a,
                                    fn.a,
                                    gn.b,
                                    gn.a,
                                    gn.e,
                                    gn.f,
                                    gn.g
                                ]
                            ],
                            [
                                3,
                                t.ComponentFactoryResolver
                            ],
                            t.NgModuleRef
                        ]),
                        t['ɵmpd'](4608, p.NgLocalization, p.NgLocaleLocalization, [t.LOCALE_ID]),
                        t['ɵmpd'](4608, Cn.HttpXsrfTokenExtractor, Cn['ɵangular_packages_common_http_http_g'], [
                            p.DOCUMENT,
                            t.PLATFORM_ID,
                            Cn['ɵangular_packages_common_http_http_e']
                        ]),
                        t['ɵmpd'](4608, Cn['ɵangular_packages_common_http_http_h'], Cn['ɵangular_packages_common_http_http_h'], [
                            Cn.HttpXsrfTokenExtractor,
                            Cn['ɵangular_packages_common_http_http_f']
                        ]),
                        t['ɵmpd'](5120, Cn.HTTP_INTERCEPTORS, function (l) {
                            return [l];
                        }, [Cn['ɵangular_packages_common_http_http_h']]),
                        t['ɵmpd'](4608, Cn['ɵangular_packages_common_http_http_d'], Cn['ɵangular_packages_common_http_http_d'], []),
                        t['ɵmpd'](6144, Cn.XhrFactory, null, [Cn['ɵangular_packages_common_http_http_d']]),
                        t['ɵmpd'](4608, Cn.HttpXhrBackend, Cn.HttpXhrBackend, [Cn.XhrFactory]),
                        t['ɵmpd'](6144, Cn.HttpBackend, null, [Cn.HttpXhrBackend]),
                        t['ɵmpd'](4608, Cn.HttpHandler, Cn['ɵHttpInterceptingHandler'], [
                            Cn.HttpBackend,
                            t.Injector
                        ]),
                        t['ɵmpd'](4608, Cn.HttpClient, Cn.HttpClient, [Cn.HttpHandler]),
                        t['ɵmpd'](4608, C.z, C.z, []),
                        t['ɵmpd'](4608, C.f, C.f, []),
                        t['ɵmpd'](4608, m.E, m.E, [
                            t.ComponentFactoryResolver,
                            t.Injector,
                            m.vb,
                            m.F
                        ]),
                        t['ɵmpd'](4608, Rl.d, Rl.d, [
                            Rl.l,
                            Rl.f,
                            t.ComponentFactoryResolver,
                            Rl.j,
                            Rl.g,
                            t.Injector,
                            t.NgZone,
                            p.DOCUMENT,
                            Pl.b,
                            p.Location,
                            Rl.i
                        ]),
                        t['ɵmpd'](5120, Rl.m, Rl.n, [Rl.d]),
                        t['ɵmpd'](4608, hn.c, hn.c, []),
                        t['ɵmpd'](135680, wn.k, wn.k, [
                            Rl.d,
                            t.Injector,
                            nl.a,
                            [
                                3,
                                wn.k
                            ]
                        ]),
                        t['ɵmpd'](4608, J.d, J.d, [J.a]),
                        t['ɵmpd'](5120, bl.b, bl.c, [Rl.d]),
                        t['ɵmpd'](1073742336, p.CommonModule, p.CommonModule, []),
                        t['ɵmpd'](1073742336, Cn.HttpClientXsrfModule, Cn.HttpClientXsrfModule, []),
                        t['ɵmpd'](1073742336, Cn.HttpClientModule, Cn.HttpClientModule, []),
                        t['ɵmpd'](1073742336, o.v, o.v, [
                            [
                                2,
                                o.B
                            ],
                            [
                                2,
                                o.r
                            ]
                        ]),
                        t['ɵmpd'](1073742336, On, On, []),
                        t['ɵmpd'](1073742336, C.y, C.y, []),
                        t['ɵmpd'](1073742336, C.l, C.l, []),
                        t['ɵmpd'](1073742336, C.v, C.v, []),
                        t['ɵmpd'](1073742336, Mn.InlineSVGModule, Mn.InlineSVGModule, []),
                        t['ɵmpd'](1073742336, m.G, m.G, []),
                        t['ɵmpd'](1073742336, ul.a, ul.a, []),
                        t['ɵmpd'](1073742336, il.b, il.b, []),
                        t['ɵmpd'](1073742336, tl.b, tl.b, []),
                        t['ɵmpd'](1073742336, zn.b, zn.b, []),
                        t['ɵmpd'](1073742336, Pl.a, Pl.a, []),
                        t['ɵmpd'](1073742336, _n.e, _n.e, []),
                        t['ɵmpd'](1073742336, El.c, El.c, []),
                        t['ɵmpd'](1073742336, El.g, El.g, []),
                        t['ɵmpd'](1073742336, Rl.h, Rl.h, []),
                        t['ɵmpd'](1073742336, bn.a, bn.a, []),
                        t['ɵmpd'](1073742336, Rn.c, Rn.c, []),
                        t['ɵmpd'](1073742336, Pn.b, Pn.b, []),
                        t['ɵmpd'](1073742336, En.b, En.b, []),
                        t['ɵmpd'](1073742336, ll.e, ll.e, []),
                        t['ɵmpd'](1073742336, Dn.d, Dn.d, []),
                        t['ɵmpd'](1073742336, Dn.c, Dn.c, []),
                        t['ɵmpd'](1073742336, al.c, al.c, []),
                        t['ɵmpd'](1073742336, yn.c, yn.c, []),
                        t['ɵmpd'](1073742336, Tn.b, Tn.b, []),
                        t['ɵmpd'](1073742336, kn.c, kn.c, []),
                        t['ɵmpd'](1073742336, In.a, In.a, []),
                        t['ɵmpd'](1073742336, An.a, An.a, []),
                        t['ɵmpd'](1073742336, An.b, An.b, []),
                        t['ɵmpd'](1073742336, hn.d, hn.d, []),
                        t['ɵmpd'](1073742336, kl.a, kl.a, [kl.f]),
                        t['ɵmpd'](1073742336, Tl.c, Tl.c, []),
                        t['ɵmpd'](1073742336, rl.d, rl.d, []),
                        t['ɵmpd'](1073742336, xn.a, xn.a, []),
                        t['ɵmpd'](1073742336, Nn.d, Nn.d, []),
                        t['ɵmpd'](1073742336, Sn.j, Sn.j, []),
                        t['ɵmpd'](1073742336, Fn.a, Fn.a, []),
                        t['ɵmpd'](1073742336, wn.i, wn.i, []),
                        t['ɵmpd'](1073742336, Un.a, Un.a, []),
                        t['ɵmpd'](1073742336, Ln.b, Ln.b, []),
                        t['ɵmpd'](1073742336, Vn.d, Vn.d, []),
                        t['ɵmpd'](1073742336, Hn.d, Hn.d, []),
                        t['ɵmpd'](1073742336, g.i, g.i, []),
                        t['ɵmpd'](1073742336, $n.a, $n.a, []),
                        t['ɵmpd'](1073742336, Zn.b, Zn.b, []),
                        t['ɵmpd'](1073742336, Kn.a, Kn.a, []),
                        t['ɵmpd'](1073742336, Bn.h, Bn.h, []),
                        t['ɵmpd'](1073742336, Bn.f, Bn.f, []),
                        t['ɵmpd'](1073742336, jn.a, jn.a, []),
                        t['ɵmpd'](1073742336, Wn.a, Wn.a, []),
                        t['ɵmpd'](1073742336, qn.a, qn.a, []),
                        t['ɵmpd'](1073742336, m.t, m.t, []),
                        t['ɵmpd'](1073742336, J.c, J.c, []),
                        t['ɵmpd'](1073742336, Gn.b, Gn.b, []),
                        t['ɵmpd'](1073742336, m.z, m.z, []),
                        t['ɵmpd'](1073742336, Jn.a, Jn.a, []),
                        t['ɵmpd'](1073742336, m.c, m.c, []),
                        t['ɵmpd'](1073742336, m.f, m.f, []),
                        t['ɵmpd'](1073742336, m.g, m.g, []),
                        t['ɵmpd'](1073742336, m.k, m.k, []),
                        t['ɵmpd'](1073742336, m.l, m.l, []),
                        t['ɵmpd'](1073742336, m.I, m.I, []),
                        t['ɵmpd'](1073742336, m.N, m.N, []),
                        t['ɵmpd'](1073742336, m.S, m.S, []),
                        t['ɵmpd'](1073742336, m.V, m.V, []),
                        t['ɵmpd'](1073742336, m.Y, m.Y, []),
                        t['ɵmpd'](1073742336, m.gb, m.gb, []),
                        t['ɵmpd'](1073742336, m.jb, m.jb, []),
                        t['ɵmpd'](1073742336, m.kb, m.kb, []),
                        t['ɵmpd'](1073742336, m.lb, m.lb, []),
                        t['ɵmpd'](1073742336, m.bb, m.bb, []),
                        t['ɵmpd'](1073742336, m.H, m.H, []),
                        t['ɵmpd'](1073742336, un.b, un.b, []),
                        t['ɵmpd'](1073742336, _l.k, _l.k, [
                            kl.f,
                            [
                                2,
                                _l.c
                            ],
                            [
                                2,
                                p.DOCUMENT
                            ]
                        ]),
                        t['ɵmpd'](1073742336, _l.u, _l.u, []),
                        t['ɵmpd'](1073742336, _l.s, _l.s, []),
                        t['ɵmpd'](1073742336, _l.p, _l.p, []),
                        t['ɵmpd'](1073742336, bl.e, bl.e, []),
                        t['ɵmpd'](1073742336, u, u, []),
                        t['ɵmpd'](256, Cn['ɵangular_packages_common_http_http_e'], 'XSRF-TOKEN', []),
                        t['ɵmpd'](256, Cn['ɵangular_packages_common_http_http_f'], 'X-XSRF-TOKEN', []),
                        t['ɵmpd'](1024, o.m, function () {
                            return [[{
                                        path: '',
                                        component: a,
                                        children: [
                                            {
                                                path: '',
                                                component: _
                                            },
                                            {
                                                path: 'create',
                                                component: Jl
                                            },
                                            {
                                                path: 'update/:id',
                                                component: on
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
                        t['ɵmpd'](256, J.a, void 0, [])
                    ]);
                });
        },
        lnN7: function (l, n, e) {
            'use strict';
            e.d(n, 'a', function () {
                return u;
            }), e.d(n, 'b', function () {
                return i;
            });
            var t = e('8Y7J'), u = (e('alHs'), e('SVse'), e('s7LF'), e('cUpR'), t['ɵcrt']({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                }));
            function i(l) {
                return t['ɵvid'](0, [t['ɵncd'](null, 0)], null, null);
            }
        }
    }
]);