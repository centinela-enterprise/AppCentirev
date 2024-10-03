(window.webpackJsonp = window.webpackJsonp || []).push([
    [17],
    {
        F1zo: function (l, n, e) {
            'use strict';
            e.r(n), e.d(n, 'ContractModuleNgFactory', function () {
                return pe;
            });
            var t = e('8Y7J');
            class u {
            }
            var o = e('pMnS'), i = e('iInd');
            class a {
                constructor() {
                }
                ngOnInit() {
                }
            }
            var r = t['ɵcrt']({
                encapsulation: 0,
                styles: [['']],
                data: {}
            });
            function d(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
                    t['ɵdid'](1, 212992, null, 0, i.w, [
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
                    l(n, 1, 0);
                }, null);
            }
            function s(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'app-contract', [], null, null, null, d, r)),
                    t['ɵdid'](1, 114688, null, 0, a, [], null, null)
                ], function (l, n) {
                    l(n, 1, 0);
                }, null);
            }
            var c = t['ɵccf']('app-contract', a, s, {}, {}, []), p = e('TSSN'), m = e('SVse'), v = e('G0yt'), f = e('EvHu'), g = e('iB+a'), h = e('s7LF'), C = e('ZA9w'), b = e('gBr1'), R = e('mrSG'), w = e('Br0f'), y = e('07VJ');
            class E {
                constructor(l, n, e, t) {
                    this.fb = l, this.modalService = n, this.contractService = e, this.store = t, this.filter = {
                        initialDate: null,
                        finalDate: null,
                        status: null,
                        contractName: null
                    }, this.isLoadingComponent = !1, this.subscriptions = [];
                }
                ngOnInit() {
                    this.user$ = this.store.select(y.b), this.subscription = this.store.select(y.b).subscribe(l => {
                        this.currentUser = l;
                    }), this.contractService.fetch(), this.grouping = this.contractService.grouping, this.paginator = this.contractService.paginator, this.sorting = this.contractService.sorting;
                    const l = this.contractService.isLoading$.subscribe(l => this.isLoading = l);
                    this.subscriptions.push(l), this.filter.status = 1;
                }
                ngOnDestroy() {
                    this.subscriptions.forEach(l => l.unsubscribe());
                }
                sort(l) {
                    const n = this.sorting;
                    n.column === l ? n.direction = 'asc' === n.direction ? 'desc' : 'asc' : (n.column = l, n.direction = 'asc'), this.contractService.patchState({ sorting: n });
                }
                paginate(l) {
                    this.contractService.patchState({ paginator: l });
                }
                create() {
                    this.edit(void 0);
                }
                edit(l) {
                    const n = this.modalService.open(null, { size: 'xl' });
                    n.componentInstance.id = l, n.result.then(() => this.contractService.fetch(), () => {
                    });
                }
                delete(l) {
                    const n = this.modalService.open(null);
                    n.componentInstance.id = l, n.result.then(() => this.contractService.fetch(), () => {
                    });
                }
                deleteSelected() {
                    const l = this.modalService.open(null);
                    l.componentInstance.ids = this.grouping.getSelectedRows(), l.result.then(() => this.contractService.fetch(), () => {
                    });
                }
                updateStatusForSelected() {
                    const l = this.modalService.open(null);
                    l.componentInstance.ids = this.grouping.getSelectedRows(), l.result.then(() => this.contractService.fetch(), () => {
                    });
                }
                fetchSelected() {
                    const l = this.modalService.open(null);
                    l.componentInstance.ids = this.grouping.getSelectedRows(), l.result.then(() => this.contractService.fetch(), () => {
                    });
                }
                searchCriteria() {
                    this.paginator = new w.a();
                    let l, n, e = new Date();
                    null != this.filter.initialDate && (e = new Date(this.filter.initialDate), l = this.filter.initialDate, this.filter.initialDate = e.getDate() + '/' + (e.getMonth() + 1) + '/' + e.getFullYear()), null != this.filter.finalDate && (e = new Date(this.filter.finalDate), n = this.filter.finalDate, this.filter.finalDate = e.getDate() + '/' + (e.getMonth() + 1) + '/' + e.getFullYear()), this.contractService.patchState(Object.assign(Object.assign({}, this.filter), { paginator: this.paginator })), this.filter.initialDate = l, this.filter.finalDate = n;
                }
                downloadallEvidence(l) {
                    return Object(R.a)(this, void 0, void 0, function* () {
                        try {
                            this.isLoadingComponent = !0, this.contractService.downloadallEvidence(l).subscribe(() => {
                                this.isLoadingComponent = !1;
                            });
                        } catch (n) {
                        }
                    });
                }
                validHolder(l) {
                    return l.holders.filter(l => l.email == this.currentUser.email && '0' == l.holderType).length > 0;
                }
            }
            var T = e('H2HB'), k = e('tqRt'), D = t['ɵcrt']({
                    encapsulation: 0,
                    styles: [['.actions-menu[_ngcontent-%COMP%]{overflow-y:visible;overflow-x:visible}.bg-table[_ngcontent-%COMP%]{background-color:#173f5f;color:#fff!important}.borderTable[_ngcontent-%COMP%]{border:1px solid #173f5f}']],
                    data: {}
                });
            function I(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform('CONTRACT.HOME.VALIDATION')));
                });
            }
            function _(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform('CONTRACT.HOME.PROCESS')));
                });
            }
            function O(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform('CONTRACT.HOME.NOTIFIE')));
                });
            }
            function A(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform('CONTRACT.HOME.OBSERVER')));
                });
            }
            function N(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 4, 'b', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](2, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵted'](-1, null, [': '])),
                    (l()(), t['ɵted'](5, null, [
                        '',
                        ''
                    ])),
                    (l()(), t['ɵeld'](6, 0, null, null, 0, 'br', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](7, 0, null, null, 2, 'b', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](8, null, [
                        '',
                        ': '
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](10, 0, null, null, 4, 'span', [], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, O)),
                    t['ɵdid'](12, 16384, null, 0, m.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, A)),
                    t['ɵdid'](14, 16384, null, 0, m.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null)
                ], function (l, n) {
                    l(n, 12, 0, '0' == n.parent.context.$implicit.holderType), l(n, 14, 0, '1' == n.parent.context.$implicit.holderType);
                }, function (l, n) {
                    l(n, 2, 0, t['ɵunv'](n, 2, 0, t['ɵnov'](n, 3).transform('CONTRACT.HOME.EMAIL'))), l(n, 5, 0, n.parent.context.$implicit.email), l(n, 8, 0, t['ɵunv'](n, 8, 0, t['ɵnov'](n, 9).transform('CONTRACT.HOME.TYPE')));
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
            function x(l) {
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
                    t['ɵdid'](1, 737280, null, 0, v.Q, [
                        t.ElementRef,
                        t.Renderer2,
                        t.Injector,
                        t.ComponentFactoryResolver,
                        t.ViewContainerRef,
                        v.R,
                        t.NgZone,
                        m.DOCUMENT,
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
                    l(n, 0, 0, 0 === n.parent.parent.context.$implicit.status, 1 === n.parent.parent.context.$implicit.status), l(n, 3, 0, n.parent.context.$implicit.initials);
                });
            }
            function L(l) {
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
                    (l()(), t['ɵand'](16777216, null, null, 1, null, x)),
                    t['ɵdid'](4, 16384, null, 0, m.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null)
                ], function (l, n) {
                    l(n, 4, 0, '0' == n.context.$implicit.holderType);
                }, null);
            }
            function M(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 8, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 7, 'a', [[
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
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 2).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](2, 671744, null, 0, i.u, [
                        i.r,
                        i.a,
                        m.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    t['ɵpad'](3, 1),
                    (l()(), t['ɵeld'](4, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](5, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon-edit-1'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](6, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](7, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ])
                ], function (l, n) {
                    var e = l(n, 3, 0, '/contract/update/' + n.parent.context.$implicit.id);
                    l(n, 2, 0, e);
                }, function (l, n) {
                    l(n, 1, 0, t['ɵnov'](n, 2).target, t['ɵnov'](n, 2).href), l(n, 7, 0, t['ɵunv'](n, 7, 0, t['ɵnov'](n, 8).transform('CONTRACT.HOME.EDIT')));
                });
            }
            function F(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 8, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 7, 'a', [[
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
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 2).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](2, 671744, null, 0, i.u, [
                        i.r,
                        i.a,
                        m.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    t['ɵpad'](3, 1),
                    (l()(), t['ɵeld'](4, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](5, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon-edit-1'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](6, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](7, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ])
                ], function (l, n) {
                    var e = l(n, 3, 0, '/notifications/create/contract/' + n.parent.context.$implicit.id);
                    l(n, 2, 0, e);
                }, function (l, n) {
                    l(n, 1, 0, t['ɵnov'](n, 2).target, t['ɵnov'](n, 2).href), l(n, 7, 0, t['ɵunv'](n, 7, 0, t['ɵnov'](n, 8).transform('CONTRACT.HOME.CREATENOTIFICATION')));
                });
            }
            function H(l) {
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
                        return 'click' === n && (t = !1 !== l.component.downloadallEvidence(l.parent.context.$implicit.id) && t), t;
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
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 6, 0, t['ɵunv'](n, 6, 0, t['ɵnov'](n, 7).transform('CONTRACT.HOME.DOWNLOAD')));
                });
            }
            function V(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 44, 'tr', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 5, 'td', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 4, 'span', [[
                            'class',
                            'label label-lg label-inline'
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
                    (l()(), t['ɵand'](16777216, null, null, 1, null, I)),
                    t['ɵdid'](4, 16384, null, 0, m.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, _)),
                    t['ɵdid'](6, 16384, null, 0, m.NgIf, [
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
                    (l()(), t['ɵeld'](11, 0, null, null, 2, 'td', [], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, L)),
                    t['ɵdid'](13, 278528, null, 0, m.NgForOf, [
                        t.ViewContainerRef,
                        t.TemplateRef,
                        t.IterableDiffers
                    ], {
                        ngForOf: [
                            0,
                            'ngForOf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](14, 0, null, null, 1, 'td', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](15, null, [
                        '',
                        ''
                    ])),
                    (l()(), t['ɵeld'](16, 0, null, null, 28, 'td', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](17, 0, null, null, 27, 'div', [[
                            'class',
                            'card-toolbar'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](18, 0, null, null, 26, 'div', [
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
                    t['ɵdid'](19, 1720320, null, 2, v.v, [
                        t.ChangeDetectorRef,
                        v.x,
                        m.DOCUMENT,
                        t.NgZone,
                        t.ElementRef,
                        t.Renderer2,
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
                    t['ɵqud'](603979776, 1, { _menu: 0 }),
                    t['ɵqud'](603979776, 2, { _anchor: 0 }),
                    (l()(), t['ɵeld'](22, 0, null, null, 3, 'a', [
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
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 23).dropdown.toggle() && u), 'keydown.ArrowUp' === n && (u = !1 !== t['ɵnov'](l, 23).dropdown.onKeyDown(e) && u), 'keydown.ArrowDown' === n && (u = !1 !== t['ɵnov'](l, 23).dropdown.onKeyDown(e) && u), 'keydown.Home' === n && (u = !1 !== t['ɵnov'](l, 23).dropdown.onKeyDown(e) && u), 'keydown.End' === n && (u = !1 !== t['ɵnov'](l, 23).dropdown.onKeyDown(e) && u), 'keydown.Tab' === n && (u = !1 !== t['ɵnov'](l, 23).dropdown.onKeyDown(e) && u), 'keydown.Shift.Tab' === n && (u = !1 !== t['ɵnov'](l, 23).dropdown.onKeyDown(e) && u), u;
                    }, null, null)),
                    t['ɵdid'](23, 16384, null, 0, v.A, [
                        v.v,
                        t.ElementRef
                    ], null, null),
                    t['ɵprd'](2048, [[
                            2,
                            4
                        ]], v.w, null, [v.A]),
                    (l()(), t['ɵeld'](25, 0, null, null, 0, 'i', [[
                            'class',
                            'ki ki-bold-more-hor'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](26, 0, null, null, 18, 'div', [
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
                        return 'keydown.ArrowUp' === n && (u = !1 !== t['ɵnov'](l, 27).dropdown.onKeyDown(e) && u), 'keydown.ArrowDown' === n && (u = !1 !== t['ɵnov'](l, 27).dropdown.onKeyDown(e) && u), 'keydown.Home' === n && (u = !1 !== t['ɵnov'](l, 27).dropdown.onKeyDown(e) && u), 'keydown.End' === n && (u = !1 !== t['ɵnov'](l, 27).dropdown.onKeyDown(e) && u), 'keydown.Enter' === n && (u = !1 !== t['ɵnov'](l, 27).dropdown.onKeyDown(e) && u), 'keydown.Space' === n && (u = !1 !== t['ɵnov'](l, 27).dropdown.onKeyDown(e) && u), 'keydown.Tab' === n && (u = !1 !== t['ɵnov'](l, 27).dropdown.onKeyDown(e) && u), 'keydown.Shift.Tab' === n && (u = !1 !== t['ɵnov'](l, 27).dropdown.onKeyDown(e) && u), u;
                    }, null, null)),
                    t['ɵdid'](27, 16384, [[
                            1,
                            4
                        ]], 1, v.y, [
                        v.v,
                        t.ElementRef
                    ], null, null),
                    t['ɵqud'](603979776, 3, { menuItems: 1 }),
                    (l()(), t['ɵeld'](29, 0, null, null, 15, 'ul', [[
                            'class',
                            'navi navi-hover py-5'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, M)),
                    t['ɵdid'](31, 16384, null, 0, m.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, F)),
                    t['ɵdid'](33, 16384, null, 0, m.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](34, 0, null, null, 8, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](35, 0, null, null, 7, 'a', [[
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
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 36).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](36, 671744, null, 0, i.u, [
                        i.r,
                        i.a,
                        m.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    t['ɵpad'](37, 1),
                    (l()(), t['ɵeld'](38, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](39, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon-medical'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](40, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](41, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, H)),
                    t['ɵdid'](44, 16384, null, 0, m.NgIf, [
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
                    l(n, 4, 0, 0 === n.context.$implicit.status), l(n, 6, 0, 1 === n.context.$implicit.status), l(n, 13, 0, n.context.$implicit.holders), l(n, 19, 0, 'bottom-right'), l(n, 31, 0, e.validHolder(n.context.$implicit)), l(n, 33, 0, 1 == n.context.$implicit.status);
                    var t = l(n, 37, 0, '/contract/' + n.context.$implicit.id + '/notifications');
                    l(n, 36, 0, t), l(n, 44, 0, 1 === n.context.$implicit.status);
                }, function (l, n) {
                    l(n, 2, 0, 0 === n.context.$implicit.status, 1 === n.context.$implicit.status), l(n, 8, 0, n.context.$implicit.name), l(n, 10, 0, '1' === n.context.$implicit.signature_type ? 'e.Firma' : 'DIGITAL'), l(n, 15, 0, n.context.$implicit.dead_line), l(n, 18, 0, t['ɵnov'](n, 19).isOpen()), l(n, 22, 0, t['ɵnov'](n, 23).dropdown.isOpen()), l(n, 26, 0, !0, t['ɵnov'](n, 27).dropdown.isOpen(), t['ɵnov'](n, 27).placement), l(n, 35, 0, t['ɵnov'](n, 36).target, t['ɵnov'](n, 36).href), l(n, 41, 0, t['ɵunv'](n, 41, 0, t['ɵnov'](n, 42).transform('CONTRACT.HOME.VIEW')));
                });
            }
            function K(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 116, 'ce-layout-dashboard', [], null, null, null, f.b, f.a)),
                    t['ɵdid'](1, 638976, null, 0, g.a, [t.ChangeDetectorRef], {
                        isLoading: [
                            0,
                            'isLoading'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](2, 0, null, 0, 112, 'div', [
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
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
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
                            '/contract/create'
                        ],
                        [
                            'style',
                            'color: white;'
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
                    t['ɵdid'](10, 671744, null, 0, i.u, [
                        i.r,
                        i.a,
                        m.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    (l()(), t['ɵted'](11, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](13, 0, null, null, 101, 'div', [[
                            'class',
                            'card-body'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](14, 0, null, null, 73, 'div', [[
                            'class',
                            'form form-label-right'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](15, 0, null, null, 72, 'div', [[
                            'class',
                            'form-group row'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](16, 0, null, null, 25, 'div', [[
                            'class',
                            'col-lg-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](17, 0, null, null, 24, 'div', [[
                            'class',
                            'row'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](18, 0, null, null, 23, 'div', [[
                            'class',
                            'col-lg-12'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](19, 0, null, null, 20, 'select', [
                        [
                            'class',
                            'form-control'
                        ],
                        [
                            'name',
                            'status'
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
                        var u = !0, o = l.component;
                        return 'change' === n && (u = !1 !== t['ɵnov'](l, 20).onChange(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 20).onTouched() && u), 'ngModelChange' === n && (u = !1 !== (o.filter.status = e) && u), u;
                    }, null, null)),
                    t['ɵdid'](20, 16384, null, 0, h.w, [
                        t.Renderer2,
                        t.ElementRef
                    ], null, null),
                    t['ɵprd'](1024, null, h.o, function (l) {
                        return [l];
                    }, [h.w]),
                    t['ɵdid'](22, 671744, null, 0, h.t, [
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
                        name: [
                            0,
                            'name'
                        ],
                        model: [
                            1,
                            'model'
                        ]
                    }, { update: 'ngModelChange' }),
                    t['ɵprd'](2048, null, h.p, null, [h.t]),
                    t['ɵdid'](24, 16384, null, 0, h.q, [[
                            4,
                            h.p
                        ]], null, null),
                    (l()(), t['ɵeld'](25, 0, null, null, 4, 'option', [[
                            'value',
                            '-1'
                        ]], null, null, null, null, null)),
                    t['ɵdid'](26, 147456, null, 0, h.u, [
                        t.ElementRef,
                        t.Renderer2,
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
                    t['ɵdid'](27, 147456, null, 0, h.B, [
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
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](30, 0, null, null, 4, 'option', [[
                            'value',
                            '0'
                        ]], null, null, null, null, null)),
                    t['ɵdid'](31, 147456, null, 0, h.u, [
                        t.ElementRef,
                        t.Renderer2,
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
                    t['ɵdid'](32, 147456, null, 0, h.B, [
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
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](35, 0, null, null, 4, 'option', [[
                            'value',
                            '1'
                        ]], null, null, null, null, null)),
                    t['ɵdid'](36, 147456, null, 0, h.u, [
                        t.ElementRef,
                        t.Renderer2,
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
                    t['ɵdid'](37, 147456, null, 0, h.B, [
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
                    (l()(), t['ɵted'](38, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](40, 0, null, null, 1, 'small', [[
                            'class',
                            'form-text text-muted'
                        ]], [[
                            8,
                            'innerHTML',
                            1
                        ]], null, null, null, null)),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](42, 0, null, null, 16, 'div', [[
                            'class',
                            'col-lg-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](43, 0, null, null, 13, 'div', [[
                            'class',
                            'input-group'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](44, 16777216, null, null, 9, 'input', [
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
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 46)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 46).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 46)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 46)._compositionEnd(e.target.value) && u), 'input' === n && (u = !1 !== t['ɵnov'](l, 47).manualDateChange(e.target.value) && u), 'change' === n && (u = !1 !== t['ɵnov'](l, 47).manualDateChange(e.target.value, !0) && u), 'focus' === n && (u = !1 !== t['ɵnov'](l, 47).onFocus() && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 47).onBlur() && u), 'ngModelChange' === n && (u = !1 !== (o.filter.initialDate = e) && u), u;
                    }, null, null)),
                    t['ɵprd'](6144, null, v.q, null, [v.D]),
                    t['ɵdid'](46, 16384, null, 0, h.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            h.b
                        ]
                    ], null, null),
                    t['ɵdid'](47, 671744, [[
                            'd22',
                            4
                        ]], 0, v.C, [
                        v.o,
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.Renderer2,
                        t.ComponentFactoryResolver,
                        t.NgZone,
                        v.h,
                        v.n,
                        m.DOCUMENT,
                        t.ChangeDetectorRef,
                        v.D
                    ], null, null),
                    t['ɵprd'](1024, null, h.n, function (l) {
                        return [l];
                    }, [v.C]),
                    t['ɵprd'](1024, null, h.o, function (l, n) {
                        return [
                            l,
                            n
                        ];
                    }, [
                        h.e,
                        v.C
                    ]),
                    t['ɵdid'](50, 671744, null, 0, h.t, [
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
                        name: [
                            0,
                            'name'
                        ],
                        model: [
                            1,
                            'model'
                        ]
                    }, { update: 'ngModelChange' }),
                    t['ɵprd'](2048, null, h.p, null, [h.t]),
                    t['ɵdid'](52, 16384, null, 0, h.q, [[
                            4,
                            h.p
                        ]], null, null),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](54, 0, null, null, 2, 'div', [[
                            'class',
                            'input-group-append'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](55, 0, null, null, 1, 'button', [
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
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 47).toggle() && u), u;
                    }, null, null)),
                    (l()(), t['ɵeld'](56, 0, null, null, 0, 'i', [
                        [
                            'class',
                            'fa fa-calendar'
                        ],
                        [
                            'style',
                            'color:white'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](57, 0, null, null, 1, 'small', [[
                            'class',
                            'form-text text-muted'
                        ]], [[
                            8,
                            'innerHTML',
                            1
                        ]], null, null, null, null)),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](59, 0, null, null, 14, 'div', [[
                            'class',
                            'col-lg-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](60, 0, null, null, 13, 'div', [[
                            'class',
                            'input-group'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](61, 16777216, null, null, 9, 'input', [
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
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 63)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 63).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 63)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 63)._compositionEnd(e.target.value) && u), 'input' === n && (u = !1 !== t['ɵnov'](l, 64).manualDateChange(e.target.value) && u), 'change' === n && (u = !1 !== t['ɵnov'](l, 64).manualDateChange(e.target.value, !0) && u), 'focus' === n && (u = !1 !== t['ɵnov'](l, 64).onFocus() && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 64).onBlur() && u), 'ngModelChange' === n && (u = !1 !== (o.filter.finalDate = e) && u), u;
                    }, null, null)),
                    t['ɵprd'](6144, null, v.q, null, [v.D]),
                    t['ɵdid'](63, 16384, null, 0, h.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            h.b
                        ]
                    ], null, null),
                    t['ɵdid'](64, 671744, [[
                            'd21',
                            4
                        ]], 0, v.C, [
                        v.o,
                        t.ElementRef,
                        t.ViewContainerRef,
                        t.Renderer2,
                        t.ComponentFactoryResolver,
                        t.NgZone,
                        v.h,
                        v.n,
                        m.DOCUMENT,
                        t.ChangeDetectorRef,
                        v.D
                    ], null, null),
                    t['ɵprd'](1024, null, h.n, function (l) {
                        return [l];
                    }, [v.C]),
                    t['ɵprd'](1024, null, h.o, function (l, n) {
                        return [
                            l,
                            n
                        ];
                    }, [
                        h.e,
                        v.C
                    ]),
                    t['ɵdid'](67, 671744, null, 0, h.t, [
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
                        name: [
                            0,
                            'name'
                        ],
                        model: [
                            1,
                            'model'
                        ]
                    }, { update: 'ngModelChange' }),
                    t['ɵprd'](2048, null, h.p, null, [h.t]),
                    t['ɵdid'](69, 16384, null, 0, h.q, [[
                            4,
                            h.p
                        ]], null, null),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](71, 0, null, null, 2, 'div', [[
                            'class',
                            'input-group-append'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](72, 0, null, null, 1, 'button', [
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
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 64).toggle() && u), u;
                    }, null, null)),
                    (l()(), t['ɵeld'](73, 0, null, null, 0, 'i', [
                        [
                            'class',
                            'fa fa-calendar'
                        ],
                        [
                            'style',
                            'color: white;'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](74, 0, null, null, 10, 'div', [[
                            'class',
                            'col-lg-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](75, 0, null, null, 6, 'input', [
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
                        var u = !0, o = l.component;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 76)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 76).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 76)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 76)._compositionEnd(e.target.value) && u), 'ngModelChange' === n && (u = !1 !== (o.filter.contractName = e) && u), u;
                    }, null, null)),
                    t['ɵdid'](76, 16384, null, 0, h.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            h.b
                        ]
                    ], null, null),
                    t['ɵprd'](1024, null, h.o, function (l) {
                        return [l];
                    }, [h.e]),
                    t['ɵdid'](78, 671744, null, 0, h.t, [
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
                    t['ɵprd'](2048, null, h.p, null, [h.t]),
                    t['ɵdid'](80, 16384, null, 0, h.q, [[
                            4,
                            h.p
                        ]], null, null),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](82, 0, null, null, 2, 'small', [[
                            'class',
                            'form-text text-muted'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](83, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](85, 0, null, null, 2, 'div', [[
                            'class',
                            'col-lg-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](86, 0, null, null, 1, 'button', [
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
                    (l()(), t['ɵeld'](87, 0, null, null, 0, 'i', [
                        [
                            'class',
                            'fa fa-search'
                        ],
                        [
                            'style',
                            'color: white;'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵeld'](88, 0, null, null, 24, 'div', [[
                            'class',
                            'table-responsive angular-bootstrap-table actions-menu'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](89, 0, null, null, 23, 'table', [[
                            'class',
                            'table table-head-custom table-vertical-center overflow-inherit borderTable'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](90, 0, null, null, 18, 'thead', [[
                            'class',
                            'bg-table text-light'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](91, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](92, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](94, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](95, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](97, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](98, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](100, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](101, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](103, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](104, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](106, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](107, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](109, 0, null, null, 3, 'tbody', [], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, V)),
                    t['ɵdid'](111, 278528, null, 0, m.NgForOf, [
                        t.ViewContainerRef,
                        t.TemplateRef,
                        t.IterableDiffers
                    ], {
                        ngForOf: [
                            0,
                            'ngForOf'
                        ]
                    }, null),
                    t['ɵpid'](131072, m.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵeld'](113, 0, null, null, 1, 'app-paginator', [[
                            'class',
                            'd-flex justify-content-between align-items-center flex-wrap'
                        ]], null, [[
                            null,
                            'paginate'
                        ]], function (l, n, e) {
                        var t = !0;
                        return 'paginate' === n && (t = !1 !== l.component.paginate(e) && t), t;
                    }, C.b, C.a)),
                    t['ɵdid'](114, 114688, null, 0, b.a, [], {
                        paginator: [
                            0,
                            'paginator'
                        ],
                        isLoading: [
                            1,
                            'isLoading'
                        ]
                    }, { paginate: 'paginate' }),
                    (l()(), t['ɵeld'](115, 0, null, null, 1, 'ce-layout-dashboard', [], null, null, null, f.b, f.a)),
                    t['ɵdid'](116, 638976, null, 0, g.a, [t.ChangeDetectorRef], null, null)
                ], function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.isLoadingComponent), l(n, 10, 0, '/contract/create'), l(n, 22, 0, 'status', e.filter.status), l(n, 26, 0, '-1'), l(n, 27, 0, '-1'), l(n, 31, 0, '0'), l(n, 32, 0, '0'), l(n, 36, 0, '1'), l(n, 37, 0, '1'), l(n, 50, 0, 'initialDate', e.filter.initialDate), l(n, 67, 0, 'finalDate', e.filter.finalDate), l(n, 78, 0, e.filter.contractName), l(n, 111, 0, t['ɵunv'](n, 111, 0, t['ɵnov'](n, 112).transform(e.contractService.items$))), l(n, 114, 0, e.paginator, e.isLoading), l(n, 116, 0);
                }, function (l, n) {
                    l(n, 6, 0, t['ɵunv'](n, 6, 0, t['ɵnov'](n, 7).transform('CONTRACT.HOME.TITLE'))), l(n, 9, 0, t['ɵnov'](n, 10).target, t['ɵnov'](n, 10).href), l(n, 11, 0, t['ɵunv'](n, 11, 0, t['ɵnov'](n, 12).transform('CONTRACT.HOME.NEW_CONTRACT'))), l(n, 19, 0, t['ɵnov'](n, 24).ngClassUntouched, t['ɵnov'](n, 24).ngClassTouched, t['ɵnov'](n, 24).ngClassPristine, t['ɵnov'](n, 24).ngClassDirty, t['ɵnov'](n, 24).ngClassValid, t['ɵnov'](n, 24).ngClassInvalid, t['ɵnov'](n, 24).ngClassPending), l(n, 28, 0, t['ɵunv'](n, 28, 0, t['ɵnov'](n, 29).transform('CONTRACT.HOME.ALL'))), l(n, 33, 0, t['ɵunv'](n, 33, 0, t['ɵnov'](n, 34).transform('CONTRACT.HOME.VALIDATION'))), l(n, 38, 0, t['ɵunv'](n, 38, 0, t['ɵnov'](n, 39).transform('CONTRACT.HOME.PROCESS'))), l(n, 40, 0, t['ɵunv'](n, 40, 0, t['ɵnov'](n, 41).transform('CONTRACT.HOME.FILTERBYESTATUS'))), l(n, 44, 0, t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 44, 0, t['ɵnov'](n, 53).transform('CONTRACT.HOME.INITIALDATE')), ''), t['ɵnov'](n, 47).disabled, t['ɵnov'](n, 52).ngClassUntouched, t['ɵnov'](n, 52).ngClassTouched, t['ɵnov'](n, 52).ngClassPristine, t['ɵnov'](n, 52).ngClassDirty, t['ɵnov'](n, 52).ngClassValid, t['ɵnov'](n, 52).ngClassInvalid, t['ɵnov'](n, 52).ngClassPending), l(n, 57, 0, t['ɵunv'](n, 57, 0, t['ɵnov'](n, 58).transform('CONTRACT.HOME.FILTERBYRANGEDATE'))), l(n, 61, 0, t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 61, 0, t['ɵnov'](n, 70).transform('CONTRACT.HOME.FINALDATE')), ''), t['ɵnov'](n, 64).disabled, t['ɵnov'](n, 69).ngClassUntouched, t['ɵnov'](n, 69).ngClassTouched, t['ɵnov'](n, 69).ngClassPristine, t['ɵnov'](n, 69).ngClassDirty, t['ɵnov'](n, 69).ngClassValid, t['ɵnov'](n, 69).ngClassInvalid, t['ɵnov'](n, 69).ngClassPending), l(n, 75, 0, t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 75, 0, t['ɵnov'](n, 81).transform('CONTRACT.HOME.SEARCH')), ''), t['ɵnov'](n, 80).ngClassUntouched, t['ɵnov'](n, 80).ngClassTouched, t['ɵnov'](n, 80).ngClassPristine, t['ɵnov'](n, 80).ngClassDirty, t['ɵnov'](n, 80).ngClassValid, t['ɵnov'](n, 80).ngClassInvalid, t['ɵnov'](n, 80).ngClassPending), l(n, 83, 0, t['ɵunv'](n, 83, 0, t['ɵnov'](n, 84).transform('CONTRACT.HOME.SEARCH'))), l(n, 92, 0, t['ɵunv'](n, 92, 0, t['ɵnov'](n, 93).transform('CONTRACT.HOME.STATUS'))), l(n, 95, 0, t['ɵunv'](n, 95, 0, t['ɵnov'](n, 96).transform('CONTRACT.HOME.NAME'))), l(n, 98, 0, t['ɵunv'](n, 98, 0, t['ɵnov'](n, 99).transform('DOCUMENT.HOME.SIGNATURETYPE'))), l(n, 101, 0, t['ɵunv'](n, 101, 0, t['ɵnov'](n, 102).transform('CONTRACT.HOME.NOTIFIED'))), l(n, 104, 0, t['ɵunv'](n, 104, 0, t['ɵnov'](n, 105).transform('DOCUMENT.HOME.CREATED_DATE'))), l(n, 107, 0, t['ɵunv'](n, 107, 0, t['ɵnov'](n, 108).transform('CONTRACT.HOME.ACTIONS')));
                });
            }
            function $(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'ng-component', [], null, null, null, K, D)),
                    t['ɵdid'](1, 245760, null, 0, E, [
                        h.f,
                        v.E,
                        T.a,
                        k.o
                    ], null, null)
                ], function (l, n) {
                    l(n, 1, 0);
                }, null);
            }
            var P = t['ɵccf']('ng-component', E, $, {}, {}, []), U = e('CeGm'), z = e('UhP/'), G = e('wf2+'), B = e('0YeR'), j = e('XWCS'), q = e('tYkK'), Y = e('HeVh'), W = e('SCoL'), J = e('vZwM'), Z = e('Rgb0'), X = e('vrAh'), Q = e('1O3W'), ll = e('9gLZ'), nl = e('7KAL'), el = e('px0D'), tl = e('l+DN'), ul = e('9iie'), ol = e('CYS+'), il = e('YEUz'), al = e('1/8H'), rl = e('kJV1');
            class dl {
                constructor() {
                    this.actionItems = [];
                }
                ngOnInit() {
                }
            }
            var sl = t['ɵcrt']({
                encapsulation: 2,
                styles: [],
                data: {}
            });
            function cl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 12, 'div', [
                        [
                            'class',
                            'dropdown dropdown-inline ml-2'
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
                            'title',
                            'Opciones'
                        ]
                    ], [[
                            2,
                            'show',
                            null
                        ]], null, null, null, null)),
                    t['ɵdid'](1, 1720320, null, 2, v.v, [
                        t.ChangeDetectorRef,
                        v.x,
                        m.DOCUMENT,
                        t.NgZone,
                        t.ElementRef,
                        t.Renderer2,
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
                    t['ɵqud'](603979776, 1, { _menu: 0 }),
                    t['ɵqud'](603979776, 2, { _anchor: 0 }),
                    (l()(), t['ɵeld'](4, 0, null, null, 3, 'a', [
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
                            'btn btn-hover-light-primary btn-sm btn-icon dropdown-toggle'
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
                    t['ɵdid'](5, 16384, null, 0, v.A, [
                        v.v,
                        t.ElementRef
                    ], null, null),
                    t['ɵprd'](2048, [[
                            2,
                            4
                        ]], v.w, null, [v.A]),
                    (l()(), t['ɵeld'](7, 0, null, null, 0, 'i', [[
                            'class',
                            'ki ki-bold-more-hor'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](8, 0, null, null, 4, 'div', [
                        [
                            'class',
                            'dropdown-menu dropdown-menu-fit dropdown-menu-md dropdown-menu-right'
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
                        return 'keydown.ArrowUp' === n && (u = !1 !== t['ɵnov'](l, 9).dropdown.onKeyDown(e) && u), 'keydown.ArrowDown' === n && (u = !1 !== t['ɵnov'](l, 9).dropdown.onKeyDown(e) && u), 'keydown.Home' === n && (u = !1 !== t['ɵnov'](l, 9).dropdown.onKeyDown(e) && u), 'keydown.End' === n && (u = !1 !== t['ɵnov'](l, 9).dropdown.onKeyDown(e) && u), 'keydown.Enter' === n && (u = !1 !== t['ɵnov'](l, 9).dropdown.onKeyDown(e) && u), 'keydown.Space' === n && (u = !1 !== t['ɵnov'](l, 9).dropdown.onKeyDown(e) && u), 'keydown.Tab' === n && (u = !1 !== t['ɵnov'](l, 9).dropdown.onKeyDown(e) && u), 'keydown.Shift.Tab' === n && (u = !1 !== t['ɵnov'](l, 9).dropdown.onKeyDown(e) && u), u;
                    }, null, null)),
                    t['ɵdid'](9, 16384, [[
                            1,
                            4
                        ]], 1, v.y, [
                        v.v,
                        t.ElementRef
                    ], null, null),
                    t['ɵqud'](603979776, 3, { menuItems: 1 }),
                    (l()(), t['ɵeld'](11, 0, null, null, 1, 'app-dropdown-menu2', [], null, null, null, al.b, al.a)),
                    t['ɵdid'](12, 638976, null, 0, rl.a, [], {
                        id: [
                            0,
                            'id'
                        ],
                        title: [
                            1,
                            'title'
                        ],
                        actionItems: [
                            2,
                            'actionItems'
                        ]
                    }, null)
                ], function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, 'left'), l(n, 12, 0, e.indexItem, e.title, e.actionItems);
                }, function (l, n) {
                    l(n, 0, 0, t['ɵnov'](n, 1).isOpen()), l(n, 4, 0, t['ɵnov'](n, 5).dropdown.isOpen()), l(n, 8, 0, !0, t['ɵnov'](n, 9).dropdown.isOpen(), t['ɵnov'](n, 9).placement);
                });
            }
            class pl {
                constructor() {
                    this.select = !0, this.btnAdd = !0, this.items = [], this.actionItems = [], this.buttonAction = new t.EventEmitter(), this.getItems = new t.EventEmitter();
                }
                ngOnInit() {
                }
                buttonAddClick() {
                    this.buttonAction.emit();
                }
            }
            var ml = t['ɵcrt']({
                encapsulation: 2,
                styles: [],
                data: {}
            });
            function vl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'button', [[
                            'class',
                            'btn btn-light-primary btn-sm font-weight-bolder dropdown-toggle'
                        ]], null, [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.buttonAddClick() && t), t;
                    }, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        ' ',
                        ' '
                    ]))
                ], null, function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.buttonTitle ? e.buttonTitle : 'Agregar');
                });
            }
            function fl(l) {
                return t['ɵvid'](0, [(l()(), t['ɵeld'](0, 0, null, null, 0, 'img', [
                        [
                            'alt',
                            ''
                        ],
                        [
                            'class',
                            'h-75 align-self-end'
                        ]
                    ], [[
                            8,
                            'src',
                            4
                        ]], null, null, null, null))], null, function (l, n) {
                    l(n, 0, 0, t['ɵinlineInterpolate'](1, '', n.parent.context.$implicit.image, ''));
                });
            }
            function gl(l) {
                return t['ɵvid'](0, [(l()(), t['ɵeld'](0, 0, null, null, 0, 'img', [
                        [
                            'alt',
                            ''
                        ],
                        [
                            'class',
                            'h-75'
                        ],
                        [
                            'src',
                            '../../../../../../../assets/media//users/default.jpg'
                        ]
                    ], null, null, null, null, null))], null, null);
            }
            function hl(l) {
                return t['ɵvid'](0, [(l()(), t['ɵeld'](0, 0, null, null, 0, 'i', [[
                            'class',
                            'far fa-check-circle'
                        ]], null, null, null, null, null))], null, null);
            }
            function Cl(l) {
                return t['ɵvid'](0, [(l()(), t['ɵeld'](0, 0, null, null, 0, 'i', [[
                            'class',
                            'fas fa-exclamation-circle'
                        ]], null, null, null, null, null))], null, null);
            }
            function bl(l) {
                return t['ɵvid'](0, [(l()(), t['ɵeld'](0, 0, null, null, 0, 'i', [[
                            'class',
                            'far fa-times-circle'
                        ]], null, null, null, null, null))], null, null);
            }
            function Rl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'span', [[
                            'class',
                            'text-hover-primary'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['El Notificado a un no es usuario de la Plataforma Centinela']))
                ], null, null);
            }
            function wl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'span', [[
                            'class',
                            'text-hover-primary'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['El Usuario no Confirmado su Número Celular']))
                ], null, null);
            }
            function yl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'span', [[
                            'class',
                            'text-hover-primary'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['El Notificado no Confirmado su Correo electrónico']))
                ], null, null);
            }
            function El(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'span', [[
                            'class',
                            'text-hover-primary'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](-1, null, ['El Notificado no firmado los terminos y condicciones']))
                ], null, null);
            }
            function Tl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'app-widget4-dropdown', [], null, null, null, cl, sl)),
                    t['ɵdid'](1, 114688, null, 0, dl, [], {
                        indexItem: [
                            0,
                            'indexItem'
                        ],
                        title: [
                            1,
                            'title'
                        ],
                        actionItems: [
                            2,
                            'actionItems'
                        ]
                    }, null)
                ], function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, n.parent.context.index, e.titleActions, e.actionItems);
                }, null);
            }
            function kl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 26, 'div', [[
                            'class',
                            'd-flex align-items-center mb-10'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 4, 'div', [[
                            'class',
                            'symbol symbol-40 symbol-light mr-5'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 3, 'span', [[
                            'class',
                            'symbol-label'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, fl)),
                    t['ɵdid'](4, 16384, null, 0, m.NgIf, [
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
                            'defaultImage',
                            2
                        ]], null, 0, null, gl)),
                    (l()(), t['ɵeld'](6, 0, null, null, 18, 'div', [[
                            'class',
                            'd-flex flex-column flex-grow-1 font-weight-bold'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](7, 0, null, null, 7, 'span', [[
                            'class',
                            'text-dark text-hover-primary mb-1 font-size-lg'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](8, null, [
                        '',
                        ' '
                    ])),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, hl)),
                    t['ɵdid'](10, 16384, null, 0, m.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Cl)),
                    t['ɵdid'](12, 16384, null, 0, m.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, bl)),
                    t['ɵdid'](14, 16384, null, 0, m.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](15, 0, null, null, 1, 'span', [[
                            'class',
                            'text-muted'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](16, null, [
                        '',
                        ''
                    ])),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Rl)),
                    t['ɵdid'](18, 16384, null, 0, m.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, wl)),
                    t['ɵdid'](20, 16384, null, 0, m.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, yl)),
                    t['ɵdid'](22, 16384, null, 0, m.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, El)),
                    t['ɵdid'](24, 16384, null, 0, m.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Tl)),
                    t['ɵdid'](26, 16384, null, 0, m.NgIf, [
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
                    l(n, 4, 0, n.context.$implicit.image, t['ɵnov'](n, 5)), l(n, 10, 0, !(1 != n.context.$implicit.account_exist || null == n.context.$implicit.accept_terms_conditions && '' == n.context.$implicit.accept_terms_conditions || null == n.context.$implicit.email_verified_at && '' == n.context.$implicit.email_verified_at || null == n.context.$implicit.mobile_verified_at && '' == n.context.$implicit.mobile_verified_at)), l(n, 12, 0, !(1 != n.context.$implicit.account_exist || null != n.context.$implicit.accept_terms_conditions && '' != n.context.$implicit.accept_terms_conditions || null != n.context.$implicit.email_verified_at && '' != n.context.$implicit.email_verified_at || null != n.context.$implicit.mobile_verified_at && '' != n.context.$implicit.mobile_verified_at)), l(n, 14, 0, 0 == n.context.$implicit.account_exist), l(n, 18, 0, 0 == n.context.$implicit.account_exist && '0' == n.context.$implicit.holderType), l(n, 20, 0, 1 == n.context.$implicit.account_exist && '0' == n.context.$implicit.holderType && (null == n.context.$implicit.mobile_verified_at || '' == n.context.$implicit.mobile_verified_at)), l(n, 22, 0, 1 == n.context.$implicit.account_exist && '0' == n.context.$implicit.holderType && (null == n.context.$implicit.email_verified_at || '' == n.context.$implicit.email_verified_at)), l(n, 24, 0, 1 == n.context.$implicit.account_exist && '0' == n.context.$implicit.holderType && (null == n.context.$implicit.accept_terms_conditions || '' == n.context.$implicit.accept_terms_conditions)), l(n, 26, 0, e.select);
                }, function (l, n) {
                    l(n, 8, 0, n.context.$implicit.name), l(n, 16, 0, n.context.$implicit.email);
                });
            }
            function Dl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 14, 'div', [[
                            'class',
                            'card card-custom card-stretch gutter-b'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 10, 'div', [[
                            'class',
                            'card-header border-0'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 2, 'h3', [[
                            'class',
                            'card-title font-weight-bolder text-dark'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](3, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](5, 0, null, null, 6, 'div', [[
                            'class',
                            'card-toolbar'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](6, 0, null, null, 5, 'div', [
                        [
                            'class',
                            'dropdown dropdown-inline'
                        ],
                        [
                            'data-placement',
                            'bottom'
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
                            'title',
                            'Quick actions'
                        ]
                    ], [[
                            2,
                            'show',
                            null
                        ]], null, null, null, null)),
                    t['ɵdid'](7, 1720320, null, 2, v.v, [
                        t.ChangeDetectorRef,
                        v.x,
                        m.DOCUMENT,
                        t.NgZone,
                        t.ElementRef,
                        t.Renderer2,
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
                    t['ɵqud'](603979776, 1, { _menu: 0 }),
                    t['ɵqud'](603979776, 2, { _anchor: 0 }),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, vl)),
                    t['ɵdid'](11, 16384, null, 0, m.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](12, 0, null, null, 2, 'div', [[
                            'class',
                            'card-body pt-2'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, kl)),
                    t['ɵdid'](14, 278528, null, 0, m.NgForOf, [
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
                    l(n, 7, 0, 'bottom'), l(n, 11, 0, e.btnAdd), l(n, 14, 0, e.items);
                }, function (l, n) {
                    var e = n.component;
                    l(n, 3, 0, t['ɵunv'](n, 3, 0, t['ɵnov'](n, 4).transform(e.title))), l(n, 6, 0, t['ɵnov'](n, 7).isOpen());
                });
            }
            var Il = e('Iwqi'), _l = e('BN3n'), Ol = e('ka1k'), Al = e('PSD3'), Nl = e.n(Al);
            class Sl {
                constructor(l, n, e, u, o, i) {
                    this.modalService = l, this._validations = n, this.contractService = e, this.store = u, this.traslateService = o, this.userService = i, this.items = [], this.items2 = [], this.externalItems = [], this.validateEmail = !1, this.getItems = new t.EventEmitter(), this.emailsFilters = [], this.actionsItems = [{
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
                        l && (this.items.find(n => n.name.toLocaleLowerCase().trim() == l.toLocaleLowerCase().trim()) || this.externalItems.find(n => n.email.toLocaleLowerCase().trim() == l.toLocaleLowerCase().trim())) && this._validations.entityForm().get('email').setErrors({ custom: { code: 'El correo se encuentra en uso' } });
                    }));
                }
                delete(l) {
                    this.items.splice(l, 1), this.getItems.emit(this.items);
                }
                add() {
                    return Object(R.a)(this, void 0, void 0, function* () {
                        let l = this._validations.entityForm().get('email').value, n = this._validations.entityForm().get('name').value;
                        if (this.items.find(n => n.email == l) || this.items2.find(n => n.email == l)) {
                            let l = this.traslateService.instant('MESSAGES.ERROR_02');
                            Nl.a.fire('upps!', l, 'error');
                        } else if (null == this.optionSelected && (this.holder = yield this.contractService.ValidateAffiliate(l).toPromise(), this.optionSelected = {
                                name: null == this.holder ? l : this.holder.name,
                                email: null == this.holder ? n : this.holder.email,
                                account_exist: null != this.holder.name,
                                mobile_verified_at: this.holder.mobile_verified_at,
                                email_verified_at: this.holder.email_verified_at,
                                accept_terms_conditions: this.holder.accept_terms_conditions,
                                holderType: this.type,
                                initials: '',
                                isRemove: !0,
                                image: this.holder.image
                            }), this.items = [
                                ...this.items,
                                {
                                    email: l,
                                    name: '' + n,
                                    email_verified_at: this.optionSelected.email_verified_at,
                                    holderType: this.type,
                                    account_exist: this.optionSelected.account_exist,
                                    mobile_verified_at: this.optionSelected.mobile_verified_at,
                                    initials: this.optionSelected.initials,
                                    isRemove: !1,
                                    accept_terms_conditions: this.optionSelected.accept_terms_conditions,
                                    image: this.optionSelected.image
                                }
                            ], this.initForm(), this.getItems.emit(this.items), this.isChecked || this.modalService.dismissAll(), null != this.optionSelected && '0' == this.type && (null == this.optionSelected.email_verified_at || null == this.optionSelected.accept_terms_conditions || null == this.optionSelected.mobile_verified_at)) {
                            let l = this.getMessage(this.optionSelected);
                            Nl.a.fire('upps!', l, 'warning');
                        }
                    });
                }
                getMessage(l) {
                    return this.traslateService.instant('MESSAGES.WARNING_01');
                }
                initForm() {
                    this._validations.entityForm().reset(), this._validations.entityForm().get('email').enable(), this._validations.entityForm().get('name').enable(), this.lConfirmate = !1;
                }
                updateForm(l, n) {
                    this._validations.entityForm().get('email').setValue(n.email), this._validations.entityForm().get('name').setValue(n.name), this.lConfirmate = !0, this.optionSelected = n;
                }
                openLarge(l) {
                    this.modalService.open(l, { size: 'md' }), this.initForm();
                }
                keyPress(l) {
                    let n = l.target.value;
                    this.optionSelected && n != this.optionSelected && (this.optionSelected = null, this._validations.entityForm().get('email').reset()), '' != n && n.length > 5 && this.userService.getHolder(n).subscribe(l => {
                        this.emailsFilters = l;
                    });
                }
            }
            var xl = e('eSKV'), Ll = t['ɵcrt']({
                    encapsulation: 0,
                    styles: [['']],
                    data: {}
                });
            function Ml(l) {
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
                        var u = !0, o = l.component;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 1)._selectViaInteraction() && u), 'keydown' === n && (u = !1 !== t['ɵnov'](l, 1)._handleKeydown(e) && u), 'onSelectionChange' === n && (u = !1 !== o.updateForm(e, l.context.$implicit) && u), u;
                    }, U.b, U.a)),
                    t['ɵdid'](1, 8568832, [[
                            3,
                            4
                        ]], 0, z.o, [
                        t.ElementRef,
                        t.ChangeDetectorRef,
                        [
                            2,
                            z.i
                        ],
                        [
                            2,
                            z.h
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
            function Fl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform(e._validations.message().code)));
                });
            }
            function Hl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Fl)),
                    t['ɵdid'](1, 16384, null, 0, m.NgIf, [
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
            function Vl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, null, null, null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform(e._validations.message().code)));
                });
            }
            function Kl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Vl)),
                    t['ɵdid'](1, 16384, null, 0, m.NgIf, [
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
            function $l(l) {
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
                    t['ɵpid'](131072, p.k, [
                        p.l,
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
                    t['ɵdid'](9, 16384, null, 0, h.C, [], null, null),
                    t['ɵdid'](10, 540672, null, 0, h.k, [
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
                    t['ɵprd'](2048, null, h.d, null, [h.k]),
                    t['ɵdid'](12, 16384, null, 0, h.r, [[
                            6,
                            h.d
                        ]], null, null),
                    t['ɵdid'](13, 671744, null, 0, G.b, [
                        B.a,
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
                    ], null, null, j.e, j.b)),
                    t['ɵdid'](16, 4931584, null, 0, q.c, [
                        t.ElementRef,
                        t.Renderer2,
                        Y.b,
                        t.NgZone,
                        W.a,
                        J.b
                    ], null, null),
                    t['ɵdid'](17, 180224, null, 0, G.c, [
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
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](21, 0, null, 0, 20, 'nz-form-control', [[
                            'nzHasFeedback',
                            ''
                        ]], [[
                            4,
                            'flex',
                            null
                        ]], null, null, j.d, j.a)),
                    t['ɵdid'](22, 4931584, null, 0, q.a, [
                        t.ElementRef,
                        [
                            2,
                            q.c
                        ],
                        t.Renderer2
                    ], null, null),
                    t['ɵdid'](23, 1818624, null, 1, G.a, [
                        t.ElementRef,
                        [
                            2,
                            G.c
                        ],
                        t.ChangeDetectorRef,
                        t.Renderer2,
                        Z.e,
                        [
                            2,
                            G.b
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
                        var u = !0, o = l.component;
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 26)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 26).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 26)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 26)._compositionEnd(e.target.value) && u), 'focusin' === n && (u = !1 !== t['ɵnov'](l, 27)._handleFocus() && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 27)._onTouched() && u), 'input' === n && (u = !1 !== t['ɵnov'](l, 27)._handleInput(e) && u), 'keydown' === n && (u = !1 !== t['ɵnov'](l, 27)._handleKeydown(e) && u), 'input' === n && (u = !1 !== o.keyPress(e) && u), u;
                    }, null, null)),
                    t['ɵdid'](26, 16384, null, 0, h.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            h.b
                        ]
                    ], null, null),
                    t['ɵdid'](27, 4866048, null, 0, X.f, [
                        t.ElementRef,
                        Q.d,
                        t.ViewContainerRef,
                        t.NgZone,
                        t.ChangeDetectorRef,
                        X.b,
                        [
                            2,
                            ll.b
                        ],
                        [
                            8,
                            null
                        ],
                        [
                            2,
                            m.DOCUMENT
                        ],
                        nl.i
                    ], {
                        autocomplete: [
                            0,
                            'autocomplete'
                        ]
                    }, null),
                    t['ɵprd'](1024, null, h.o, function (l, n) {
                        return [
                            l,
                            n
                        ];
                    }, [
                        h.e,
                        X.f
                    ]),
                    t['ɵdid'](29, 671744, null, 0, h.i, [
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
                    t['ɵprd'](2048, [[
                            1,
                            4
                        ]], h.p, null, [h.i]),
                    t['ɵdid'](31, 16384, null, 0, h.q, [[
                            4,
                            h.p
                        ]], null, null),
                    t['ɵdid'](32, 737280, null, 0, el.a, [
                        [
                            6,
                            h.p
                        ],
                        t.Renderer2,
                        t.ElementRef
                    ], null, null),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](34, 0, null, 0, 6, 'mat-autocomplete', [[
                            'class',
                            'mat-autocomplete'
                        ]], null, null, null, tl.b, tl.a)),
                    t['ɵprd'](6144, null, z.i, null, [X.d]),
                    t['ɵdid'](36, 1228800, [[
                            'auto',
                            4
                        ]], 2, X.d, [
                        t.ChangeDetectorRef,
                        t.ElementRef,
                        X.a
                    ], null, null),
                    t['ɵqud'](603979776, 2, { optionGroups: 1 }),
                    t['ɵqud'](603979776, 3, { options: 1 }),
                    (l()(), t['ɵand'](16777216, null, 0, 1, null, Ml)),
                    t['ɵdid'](40, 278528, null, 0, m.NgForOf, [
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
                    ], null, null, j.e, j.b)),
                    t['ɵdid'](44, 4931584, null, 0, q.c, [
                        t.ElementRef,
                        t.Renderer2,
                        Y.b,
                        t.NgZone,
                        W.a,
                        J.b
                    ], null, null),
                    t['ɵdid'](45, 180224, null, 0, G.c, [
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
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](49, 0, null, 0, 12, 'nz-form-control', [], [[
                            4,
                            'flex',
                            null
                        ]], null, null, j.d, j.a)),
                    t['ɵdid'](50, 4931584, null, 0, q.a, [
                        t.ElementRef,
                        [
                            2,
                            q.c
                        ],
                        t.Renderer2
                    ], null, null),
                    t['ɵdid'](51, 1818624, null, 1, G.a, [
                        t.ElementRef,
                        [
                            2,
                            G.c
                        ],
                        t.ChangeDetectorRef,
                        t.Renderer2,
                        Z.e,
                        [
                            2,
                            G.b
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
                    t['ɵdid'](55, 16384, null, 0, h.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            h.b
                        ]
                    ], null, null),
                    t['ɵprd'](1024, null, h.o, function (l) {
                        return [l];
                    }, [h.e]),
                    t['ɵdid'](57, 671744, null, 0, h.i, [
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
                    t['ɵprd'](2048, [[
                            4,
                            4
                        ]], h.p, null, [h.i]),
                    t['ɵdid'](59, 16384, null, 0, h.q, [[
                            4,
                            h.p
                        ]], null, null),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵand'](0, [[
                            'errEmail',
                            2
                        ]], 0, 0, null, Kl)),
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
                        var u = !0, o = l.component;
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 64).hostClick(e) && u), 'ngModelChange' === n && (u = !1 !== (o.isChecked = e) && u), u;
                    }, ul.b, ul.a)),
                    t['ɵdid'](64, 4440064, null, 0, ol.a, [
                        t.ElementRef,
                        [
                            2,
                            ol.d
                        ],
                        t.ChangeDetectorRef,
                        il.d
                    ], null, null),
                    t['ɵprd'](1024, null, h.o, function (l) {
                        return [l];
                    }, [ol.a]),
                    t['ɵdid'](66, 671744, null, 0, h.t, [
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
                    t['ɵprd'](2048, null, h.p, null, [h.t]),
                    t['ɵdid'](68, 16384, null, 0, h.q, [[
                            4,
                            h.p
                        ]], null, null),
                    (l()(), t['ɵeld'](69, 0, null, 0, 2, 'span', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](70, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
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
                    t['ɵpid'](131072, p.k, [
                        p.l,
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
                    t['ɵpid'](131072, p.k, [
                        p.l,
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
            function Pl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'app-lists-widget4', [], null, [[
                            null,
                            'buttonAction'
                        ]], function (l, n, e) {
                        var u = !0;
                        return 'buttonAction' === n && (u = !1 !== l.component.openLarge(t['ɵnov'](l, 4)) && u), u;
                    }, Dl, ml)),
                    t['ɵdid'](1, 114688, null, 0, pl, [], {
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
                        ]], null, 0, null, $l))
                ], function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.title, e.titleActions, e.items, e.actionsItems);
                }, null);
            }
            var Ul = e('uvLv'), zl = e('LRne'), Gl = e('eIep'), Bl = e('JIr8'), jl = e('vkgz');
            class ql {
                constructor(l, n, e, t, u, o, i, a) {
                    this.fb = l, this.contractService = n, this.documentService = e, this.router = t, this.route = u, this.traslateService = o, this.changeDetectorRef = i, this.datePipe = a, this.view = !1, this.signsListComponent = [], this.observersListComponent = [], this.signs = [], this.observers = [], this.holders = [], this.observers2 = [], this.documents = [], this.errorMessage = '', this.titulo = '', this.head = '', this.isLoadingComponent = !1, this.tabs = { BASIC_TAB: 0 }, this.EMPTY_CONTRACT = {
                        id: void 0,
                        name: '',
                        status: 0,
                        signature_type: '1',
                        description: '',
                        dead_line: '',
                        document_id: '',
                        holders: []
                    }, this.activeTabId = this.tabs.BASIC_TAB, this.subscriptions = [];
                }
                ngOnInit() {
                    this.isLoading$ = this.contractService.isLoading$, this.loadContract();
                }
                loadContract() {
                    const l = this.route.paramMap.pipe(Object(Gl.a)(l => (this.id = l.get('id'), this.id ? this.contractService.getItemById(this.id) : Object(zl.a)(this.EMPTY_CONTRACT))), Object(Bl.a)(l => (this.errorMessage = l, Object(zl.a)(void 0)))).subscribe(l => {
                        l || this.router.navigate(['/contract'], { relativeTo: this.route }), this.contract = l, this.previous = Object.assign({}, l), this.loadForm();
                    });
                    this.subscriptions.push(l);
                }
                loadForm() {
                    this.head = this.traslateService.instant('MESSAGES.HEAD_01'), this.contract ? (this.titulo = this.titulo = this.traslateService.instant('MESSAGES.SUCCESS_02'), this.formGroup = this.fb.group({
                        name: [
                            this.contract.name,
                            h.x.compose([
                                h.x.required,
                                h.x.minLength(3),
                                h.x.maxLength(130)
                            ])
                        ],
                        signature_type: [
                            this.contract.signature_type,
                            h.x.compose([h.x.required])
                        ],
                        holders: [...this.contract.holders],
                        emailObserver: [
                            '',
                            h.x.compose([h.x.email])
                        ],
                        emailOFirm: [
                            '',
                            h.x.compose([h.x.email])
                        ]
                    }), this.formGroup.get('signature_type').setValue(this.contract.signature_type), 1 == this.contract.status && (this.formGroup.get('signature_type').disable(), this.formGroup.get('name').disable()), this.getSigners(), this.getObservers(), this.changeDetectorRef.detectChanges()) : this.titulo = this.traslateService.instant('MESSAGES.SUCCESS_01');
                }
                reset() {
                    this.previous && (this.contract = Object.assign({}, this.previous), this.loadForm());
                }
                save() {
                    if (this.formGroup.markAllAsTouched(), !this.formGroup.valid)
                        return;
                    const l = this.formGroup.value;
                    this.contract.holders = [].concat(this.holders, this.observers2), l.holders = [...this.contract.holders], this.contract = Object.assign(this.contract, l), this.id ? this.edit() : this.create();
                }
                edit() {
                    const l = this.contractService.update(this.contract).pipe(Object(jl.a)(() => Nl.a.fire(this.head, this.titulo, 'success').then(l => {
                        l.isConfirmed && this.router.navigate(['/contract']);
                    })), Object(Bl.a)(l => Object(zl.a)(this.contract))).subscribe(l => this.contract = l);
                    this.subscriptions.push(l);
                }
                create() {
                    return Object(R.a)(this, void 0, void 0, function* () {
                        try {
                            this.isLoadingComponent = !0, yield this.contractService.createContract(this.contract).toPromise(), Nl.a.fire(this.head, this.titulo, 'success').then(l => {
                                l.isConfirmed && this.router.navigate(['/contract']);
                            });
                        } catch (l) {
                            this.isLoadingComponent = !1, Nl.a.fire('upps!', l, 'error'), this.changeDetectorRef.markForCheck();
                        }
                    });
                }
                loadDocuments() {
                    return Object(R.a)(this, void 0, void 0, function* () {
                        try {
                            let l = yield this.documentService.getDocumentsByUser().toPromise();
                            this.documents = l;
                        } catch (l) {
                            this.isLoadingComponent = !1, Nl.a.fire('upps!', l, 'error');
                        }
                        this.changeDetectorRef.markForCheck();
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
                filterItemsOfType(l) {
                    return this.contract.holders.filter(n => n.holderType == l);
                }
                validField(l) {
                    return '' == this.formGroup.get(l).value || this.formGroup.get(l).invalid;
                }
                validcompleteForm() {
                    let l = this.holders.filter(l => '0' == l.holderType).length;
                    return this.formGroup.invalid || l < 2;
                }
                deleteholder(l) {
                    this.isLoadingComponent = !0, this.contract.holders.splice(this.contract.holders.findIndex(n => n.email == l), 1), this.changeDetectorRef.markForCheck(), this.isLoadingComponent = !1;
                }
                setSigns(l) {
                    this.holders = l.map(l => ({
                        email: l.email,
                        name: l.name,
                        mobile_verified_at: l.mobile_verified_at,
                        email_verified_at: l.email_verified_at,
                        accept_terms_conditions: l.accept_terms_conditions,
                        holderType: '0',
                        initials: l.initials,
                        isRemove: l.isRemove,
                        account_exist: l.account_exist,
                        image: l.image
                    })), this.changeDetectorRef.markForCheck();
                }
                setObservers(l) {
                    this.observers2 = l.map(l => ({
                        email: l.email,
                        name: l.name,
                        mobile_verified_at: l.mobile_verified_at,
                        email_verified_at: l.email_verified_at,
                        accept_terms_conditions: l.accept_terms_conditions,
                        holderType: '1',
                        initials: l.initials,
                        isRemove: l.isRemove,
                        account_exist: l.account_exist,
                        image: l.image
                    })), this.changeDetectorRef.markForCheck();
                }
                getSigners() {
                    let l = [];
                    this.holders = this.contract.holders.filter(({holderType: l}) => '0' == l);
                    let n = this.contract.holders.filter(({holderType: l}) => '0' == l);
                    n.length > 0 && (l = n.map(l => ({
                        email: l.email,
                        name: l.name,
                        mobile_verified_at: l.mobile_verified_at,
                        email_verified_at: l.email_verified_at,
                        accept_terms_conditions: l.accept_terms_conditions,
                        holderType: '1',
                        initials: l.initials,
                        isRemove: l.isRemove,
                        account_exist: l.account_exist,
                        image: l.image
                    }))), this.signsListComponent = l;
                }
                getObservers() {
                    let l = [], n = this.contract.holders.filter(({holderType: l}) => '1' === l);
                    n.length > 0 && (l = n.map(l => ({
                        email: l.email,
                        name: l.name,
                        mobile_verified_at: l.mobile_verified_at,
                        email_verified_at: l.email_verified_at,
                        accept_terms_conditions: l.accept_terms_conditions,
                        holderType: '1',
                        initials: l.initials,
                        isRemove: l.isRemove,
                        account_exist: l.account_exist,
                        image: l.image
                    }))), this.observersListComponent = l;
                }
            }
            var Yl = e('kAVY'), Wl = t['ɵcrt']({
                    encapsulation: 0,
                    styles: [['']],
                    data: {}
                });
            function Jl(l) {
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
            function Zl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 1, 'span', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        '',
                        ''
                    ]))
                ], null, function (l, n) {
                    l(n, 1, 0, n.component.contract.name);
                });
            }
            function Xl(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 5, null, null, null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        ' ',
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Zl)),
                    t['ɵdid'](5, 16384, null, 0, m.NgIf, [
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
                    l(n, 5, 0, e.contract && e.contract.id);
                }, function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform(e.contract && e.contract.id ? 'GENERAL.UPDATE' : 'GENERAL.NEW')), t['ɵunv'](n, 1, 1, t['ɵnov'](n, 3).transform('GENERAL.CONTRACT_SINGLE')));
                });
            }
            function Ql(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 5, 'div', [[
                            'class',
                            'feedback'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](3, 0, null, null, 2, 'b', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](4, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform('GENERAL.PLEASE_ENTER'))), l(n, 4, 0, t['ɵunv'](n, 4, 0, t['ɵnov'](n, 5).transform('CONTRACT.FORM.NAME_TOUCHED')));
                });
            }
            function ln(l) {
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
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform('CONTRACT.FORM.NAME_TOUCHED')), t['ɵunv'](n, 1, 1, t['ɵnov'](n, 3).transform('GENERAL.CORRECTFIELD')));
                });
            }
            function nn(l) {
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
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform('CONTRACT.FORM.NAME_TOUCHED')), t['ɵunv'](n, 1, 1, t['ɵnov'](n, 3).transform('GENERAL.REQUIRED')));
                });
            }
            function en(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 2, 'button', [
                        [
                            'class',
                            'btn btn-primary font-weight-bold mr-2'
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
                        return 'click' === n && (t = !1 !== l.component.save() && t), t;
                    }, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 0, 0, n.component.validcompleteForm()), l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform('GENERAL.BUTTON_SAVE')));
                });
            }
            function tn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 75, 'div', [[
                            'class',
                            'mt-5'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 74, 'form', [
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
                            'submit'
                        ],
                        [
                            null,
                            'reset'
                        ]
                    ], function (l, n, e) {
                        var u = !0;
                        return 'submit' === n && (u = !1 !== t['ɵnov'](l, 3).onSubmit(e) && u), 'reset' === n && (u = !1 !== t['ɵnov'](l, 3).onReset() && u), u;
                    }, null, null)),
                    t['ɵdid'](2, 16384, null, 0, h.C, [], null, null),
                    t['ɵdid'](3, 540672, null, 0, h.k, [
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
                    t['ɵprd'](2048, null, h.d, null, [h.k]),
                    t['ɵdid'](5, 16384, null, 0, h.r, [[
                            6,
                            h.d
                        ]], null, null),
                    (l()(), t['ɵeld'](6, 0, null, null, 48, 'div', [[
                            'class',
                            'form-group row'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](7, 0, null, null, 18, 'div', [[
                            'class',
                            'col-lg-6'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](8, 0, null, null, 2, 'label', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](9, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
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
                        return 'input' === n && (u = !1 !== t['ɵnov'](l, 12)._handleInput(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 12).onTouched() && u), 'compositionstart' === n && (u = !1 !== t['ɵnov'](l, 12)._compositionStart() && u), 'compositionend' === n && (u = !1 !== t['ɵnov'](l, 12)._compositionEnd(e.target.value) && u), u;
                    }, null, null)),
                    t['ɵdid'](12, 16384, null, 0, h.e, [
                        t.Renderer2,
                        t.ElementRef,
                        [
                            2,
                            h.b
                        ]
                    ], null, null),
                    t['ɵdid'](13, 540672, null, 0, h.m, [], {
                        maxlength: [
                            0,
                            'maxlength'
                        ]
                    }, null),
                    t['ɵprd'](1024, null, h.n, function (l) {
                        return [l];
                    }, [h.m]),
                    t['ɵprd'](1024, null, h.o, function (l) {
                        return [l];
                    }, [h.e]),
                    t['ɵdid'](16, 671744, null, 0, h.i, [
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
                    t['ɵprd'](2048, null, h.p, null, [h.i]),
                    t['ɵdid'](18, 16384, null, 0, h.q, [[
                            4,
                            h.p
                        ]], null, null),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Ql)),
                    t['ɵdid'](21, 16384, null, 0, m.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, ln)),
                    t['ɵdid'](23, 16384, null, 0, m.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, nn)),
                    t['ɵdid'](25, 16384, null, 0, m.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](26, 0, null, null, 28, 'div', [[
                            'class',
                            'col-lg-6'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](27, 0, null, null, 2, 'label', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](28, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](30, 0, null, null, 18, 'select', [
                        [
                            'class',
                            'form-control'
                        ],
                        [
                            'disabled',
                            ''
                        ],
                        [
                            'formControlName',
                            'signature_type'
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
                        return 'change' === n && (u = !1 !== t['ɵnov'](l, 31).onChange(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 31).onTouched() && u), u;
                    }, null, null)),
                    t['ɵdid'](31, 16384, null, 0, h.w, [
                        t.Renderer2,
                        t.ElementRef
                    ], null, null),
                    t['ɵprd'](1024, null, h.o, function (l) {
                        return [l];
                    }, [h.w]),
                    t['ɵdid'](33, 671744, null, 0, h.i, [
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
                        ],
                        isDisabled: [
                            1,
                            'isDisabled'
                        ]
                    }, null),
                    t['ɵprd'](2048, null, h.p, null, [h.i]),
                    t['ɵdid'](35, 16384, null, 0, h.q, [[
                            4,
                            h.p
                        ]], null, null),
                    (l()(), t['ɵeld'](36, 0, null, null, 4, 'option', [], null, null, null, null, null)),
                    t['ɵdid'](37, 147456, null, 0, h.u, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            h.w
                        ]
                    ], {
                        ngValue: [
                            0,
                            'ngValue'
                        ]
                    }, null),
                    t['ɵdid'](38, 147456, null, 0, h.B, [
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
                    (l()(), t['ɵted'](39, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](41, 0, null, null, 3, 'option', [[
                            'value',
                            '1'
                        ]], null, null, null, null, null)),
                    t['ɵdid'](42, 147456, null, 0, h.u, [
                        t.ElementRef,
                        t.Renderer2,
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
                    t['ɵdid'](43, 147456, null, 0, h.B, [
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
                    (l()(), t['ɵeld'](45, 0, null, null, 3, 'option', [[
                            'value',
                            '3'
                        ]], null, null, null, null, null)),
                    t['ɵdid'](46, 147456, null, 0, h.u, [
                        t.ElementRef,
                        t.Renderer2,
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
                    t['ɵdid'](47, 147456, null, 0, h.B, [
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
                    (l()(), t['ɵeld'](49, 0, null, null, 5, 'div', [[
                            'class',
                            'feedback'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](50, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](52, 0, null, null, 2, 'b', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](53, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](55, 0, null, null, 12, 'div', [[
                            'class',
                            'row'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](56, 0, null, null, 5, 'div', [[
                            'class',
                            'col-xl-6'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](57, 0, null, null, 4, 'app-involved-holder', [[
                            'type',
                            '0'
                        ]], null, [[
                            null,
                            'getItems'
                        ]], function (l, n, e) {
                        var t = !0;
                        return 'getItems' === n && (t = !1 !== l.component.setSigns(e) && t), t;
                    }, Pl, Ll)),
                    t['ɵprd'](512, null, Il.a, _l.a, [
                        h.f,
                        Ol.a
                    ]),
                    t['ɵdid'](59, 114688, null, 0, Sl, [
                        v.E,
                        Il.a,
                        T.a,
                        k.o,
                        p.l,
                        xl.a
                    ], {
                        titleActions: [
                            0,
                            'titleActions'
                        ],
                        title: [
                            1,
                            'title'
                        ],
                        type: [
                            2,
                            'type'
                        ],
                        items: [
                            3,
                            'items'
                        ],
                        items2: [
                            4,
                            'items2'
                        ]
                    }, { getItems: 'getItems' }),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](62, 0, null, null, 5, 'div', [[
                            'class',
                            'col-xl-6'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](63, 0, null, null, 4, 'app-involved-holder', [[
                            'type',
                            '1'
                        ]], null, [[
                            null,
                            'getItems'
                        ]], function (l, n, e) {
                        var t = !0;
                        return 'getItems' === n && (t = !1 !== l.component.setObservers(e) && t), t;
                    }, Pl, Ll)),
                    t['ɵprd'](512, null, Il.a, _l.a, [
                        h.f,
                        Ol.a
                    ]),
                    t['ɵdid'](65, 114688, null, 0, Sl, [
                        v.E,
                        Il.a,
                        T.a,
                        k.o,
                        p.l,
                        xl.a
                    ], {
                        titleActions: [
                            0,
                            'titleActions'
                        ],
                        title: [
                            1,
                            'title'
                        ],
                        type: [
                            2,
                            'type'
                        ],
                        items: [
                            3,
                            'items'
                        ],
                        items2: [
                            4,
                            'items2'
                        ]
                    }, { getItems: 'getItems' }),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](68, 0, null, null, 7, 'div', [[
                            'style',
                            'clear:both;'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](69, 0, null, null, 6, 'div', [[
                            'class',
                            'float-right'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](70, 0, null, null, 3, 'a', [
                        [
                            'class',
                            'btn btn-default font-weight-bold mr-2'
                        ],
                        [
                            'routerLink',
                            '/contract'
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
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 71).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](71, 671744, null, 0, i.u, [
                        i.r,
                        i.a,
                        m.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    (l()(), t['ɵted'](72, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, en)),
                    t['ɵdid'](75, 16384, null, 0, m.NgIf, [
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
                    l(n, 3, 0, e.formGroup), l(n, 13, 0, '130'), l(n, 16, 0, 'name'), l(n, 21, 0, !e.isControlTouched('name')), l(n, 23, 0, e.isControlValid('name')), l(n, 25, 0, e.controlHasError('required', 'name')), l(n, 33, 0, 'signature_type', ''), l(n, 37, 0, null), l(n, 38, 0, null), l(n, 42, 0, '1'), l(n, 43, 0, '1'), l(n, 46, 0, '3'), l(n, 47, 0, '3'), l(n, 59, 0, t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 59, 0, t['ɵnov'](n, 60).transform('DOCUMENT.CREATE.WIZARD.ADDACCION')), ''), t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 59, 1, t['ɵnov'](n, 61).transform('CONTRACT.FORM.LISTNOTIF')), ''), '0', e.signsListComponent, e.observers2), l(n, 65, 0, t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 65, 0, t['ɵnov'](n, 66).transform('DOCUMENT.CREATE.WIZARD.ADDACCION')), ''), t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 65, 1, t['ɵnov'](n, 67).transform('CONTRACT.FORM.LISTOBSERVER')), ''), '1', e.observersListComponent, e.holders), l(n, 71, 0, '/contract'), l(n, 75, 0, 0 == e.view);
                }, function (l, n) {
                    var e = n.component;
                    l(n, 1, 0, t['ɵnov'](n, 5).ngClassUntouched, t['ɵnov'](n, 5).ngClassTouched, t['ɵnov'](n, 5).ngClassPristine, t['ɵnov'](n, 5).ngClassDirty, t['ɵnov'](n, 5).ngClassValid, t['ɵnov'](n, 5).ngClassInvalid, t['ɵnov'](n, 5).ngClassPending), l(n, 9, 0, t['ɵunv'](n, 9, 0, t['ɵnov'](n, 10).transform('CONTRACT.FORM.NAME'))), l(n, 11, 1, [
                        t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 11, 0, t['ɵnov'](n, 19).transform('CONTRACT.FORM.NAME')), ''),
                        e.isControlInvalid('name'),
                        e.isControlValid('name'),
                        t['ɵnov'](n, 13).maxlength ? t['ɵnov'](n, 13).maxlength : null,
                        t['ɵnov'](n, 18).ngClassUntouched,
                        t['ɵnov'](n, 18).ngClassTouched,
                        t['ɵnov'](n, 18).ngClassPristine,
                        t['ɵnov'](n, 18).ngClassDirty,
                        t['ɵnov'](n, 18).ngClassValid,
                        t['ɵnov'](n, 18).ngClassInvalid,
                        t['ɵnov'](n, 18).ngClassPending
                    ]), l(n, 28, 0, t['ɵunv'](n, 28, 0, t['ɵnov'](n, 29).transform('DOCUMENT.CREATE.FORM.SIGNATURETYPE'))), l(n, 30, 0, t['ɵnov'](n, 35).ngClassUntouched, t['ɵnov'](n, 35).ngClassTouched, t['ɵnov'](n, 35).ngClassPristine, t['ɵnov'](n, 35).ngClassDirty, t['ɵnov'](n, 35).ngClassValid, t['ɵnov'](n, 35).ngClassInvalid, t['ɵnov'](n, 35).ngClassPending), l(n, 39, 0, t['ɵunv'](n, 39, 0, t['ɵnov'](n, 40).transform('DOCUMENT.CREATE.FORM.SELECTOPTION'))), l(n, 50, 0, t['ɵunv'](n, 50, 0, t['ɵnov'](n, 51).transform('GENERAL.PLEASE_SELECT'))), l(n, 53, 0, t['ɵunv'](n, 53, 0, t['ɵnov'](n, 54).transform('CONTRACT.FORM.SELECT_SIGN'))), l(n, 70, 0, t['ɵnov'](n, 71).target, t['ɵnov'](n, 71).href), l(n, 72, 0, t['ɵunv'](n, 72, 0, t['ɵnov'](n, 73).transform('GENERAL.CANCEL_SAVE')));
                });
            }
            function un(l) {
                return t['ɵvid'](2, [
                    (l()(), t['ɵeld'](0, 0, null, null, 19, 'ce-layout-dashboard', [], null, null, null, f.b, f.a)),
                    t['ɵdid'](1, 638976, null, 0, g.a, [t.ChangeDetectorRef], {
                        isLoading: [
                            0,
                            'isLoading'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](2, 0, null, 0, 17, 'div', [
                        [
                            'class',
                            'card card-custom gutter-b'
                        ],
                        [
                            'content',
                            ''
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, Jl)),
                    t['ɵdid'](4, 16384, null, 0, m.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    t['ɵpid'](131072, m.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵeld'](6, 0, null, null, 10, 'div', [[
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
                    (l()(), t['ɵand'](16777216, null, null, 1, null, Xl)),
                    t['ɵdid'](10, 16384, null, 0, m.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](11, 0, null, null, 5, 'div', [[
                            'class',
                            'card-toolbar'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](12, 0, null, null, 4, 'a', [
                        [
                            'class',
                            'btn btn-light'
                        ],
                        [
                            'routerLink',
                            '/contract'
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
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 13).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](13, 671744, null, 0, i.u, [
                        i.r,
                        i.a,
                        m.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](14, 0, null, null, 0, 'i', [[
                            'class',
                            'fa fa-arrow-left'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](15, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](17, 0, null, null, 2, 'div', [[
                            'class',
                            'card-body'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, tn)),
                    t['ɵdid'](19, 16384, null, 0, m.NgIf, [
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
                    l(n, 1, 0, e.isLoadingComponent), l(n, 4, 0, t['ɵunv'](n, 4, 0, t['ɵnov'](n, 5).transform(e.isLoading$))), l(n, 10, 0, e.contract), l(n, 13, 0, '/contract'), l(n, 19, 0, e.contract && e.formGroup);
                }, function (l, n) {
                    l(n, 12, 0, t['ɵnov'](n, 13).target, t['ɵnov'](n, 13).href), l(n, 15, 0, t['ɵunv'](n, 15, 0, t['ɵnov'](n, 16).transform('CONTRACT.FORM.BACK')));
                });
            }
            function on(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 4, 'ng-component', [], null, null, null, un, Wl)),
                    t['ɵprd'](4608, null, v.n, Ul.a, []),
                    t['ɵprd'](4608, null, v.o, Ul.b, []),
                    t['ɵprd'](512, null, m.DatePipe, m.DatePipe, [t.LOCALE_ID]),
                    t['ɵdid'](4, 245760, null, 0, ql, [
                        h.f,
                        T.a,
                        Yl.a,
                        i.r,
                        i.a,
                        p.l,
                        t.ChangeDetectorRef,
                        m.DatePipe
                    ], null, null)
                ], function (l, n) {
                    l(n, 4, 0);
                }, null);
            }
            var an = t['ɵccf']('ng-component', ql, on, {}, {}, []);
            class rn {
                constructor(l, n, e, t, u, o, i, a) {
                    this.fb = l, this.contractService = n, this.notificationService = e, this.router = t, this.route = u, this.traslateService = o, this.datePipe = i, this.splash = a, this.loadingPage = !1, this.filter = { contract_id: null }, this.errorMessage = '', this.isLoadingComponent = !1, this.EMPTY_CONTRACT = {
                        id: void 0,
                        name: '',
                        status: 0,
                        signature_type: '',
                        description: '',
                        dead_line: '',
                        document_id: '',
                        holders: []
                    }, this.subscriptions = [];
                }
                ngOnInit() {
                    this.isLoading$ = this.contractService.isLoading$, this.loadContract(), this.notificationService.fetch(), this.grouping = this.notificationService.grouping, this.paginator = this.notificationService.paginator, this.sorting = this.notificationService.sorting;
                    const l = this.notificationService.isLoading$.subscribe(l => this.isLoadingT = l);
                    this.subscriptions.push(l);
                }
                loadContract() {
                    const l = this.route.paramMap.pipe(Object(Gl.a)(l => (this.id = l.get('id'), this.id ? this.contractService.getItemById(this.id) : Object(zl.a)(this.EMPTY_CONTRACT))), Object(Bl.a)(l => (this.errorMessage = l, Object(zl.a)(void 0)))).subscribe(l => {
                        l || this.router.navigate(['/contract'], { relativeTo: this.route }), this.contract = l, this.loadForm();
                    });
                    this.subscriptions.push(l);
                }
                loadForm() {
                    this.contract && (this.filter.contract_id = this.id, this.notificationService.patchState(Object.assign(Object.assign({}, this.filter), { paginator: this.paginator })), this.formGroup = this.fb.group({
                        name: [
                            this.contract.name,
                            h.x.compose([
                                h.x.required,
                                h.x.minLength(3),
                                h.x.maxLength(150)
                            ])
                        ],
                        signature_type: [
                            this.contract.signature_type,
                            h.x.compose([h.x.required])
                        ],
                        holders: [...this.contract.holders]
                    }), this.formGroup.get('signature_type').setValue(this.contract.signature_type), this.formGroup.get('signature_type').disable());
                }
                ngOnDestroy() {
                    this.subscriptions.forEach(l => l.unsubscribe());
                }
                downloadallEvidence(l) {
                    try {
                        this.isLoadingComponent = !0, this.contractService.downloadallEvidence(l).subscribe(() => {
                        });
                    } catch (n) {
                    }
                    this.isLoadingComponent = !1;
                }
                downloadallEvidenceNotification(l) {
                    return Object(R.a)(this, void 0, void 0, function* () {
                        try {
                            yield this.contractService.downloadallEvidenceNotification(l).toPromise();
                        } catch (n) {
                        }
                        this.isLoadingComponent = !1;
                    });
                }
            }
            var dn = e('AytR'), sn = e('IheW');
            let cn = (() => {
                class l extends w.b {
                    constructor(l) {
                        super(l), this.API_URL = dn.a.urlBase + 'contracts/notification', this.urlBase = dn.a.urlBase;
                    }
                    ngOnDestroy() {
                        this.subscriptions.forEach(l => l.unsubscribe());
                    }
                }
                return l.ɵprov = t['ɵɵdefineInjectable']({
                    factory: function () {
                        return new l(t['ɵɵinject'](sn.HttpClient));
                    },
                    token: l,
                    providedIn: 'root'
                }), l;
            })();
            var pn = e('ONK0'), mn = t['ɵcrt']({
                    encapsulation: 0,
                    styles: [['.actions-menu[_ngcontent-%COMP%]{overflow-y:visible;overflow-x:visible}.bg-table[_ngcontent-%COMP%]{background-color:#173f5f;color:#fff!important}.borderTable[_ngcontent-%COMP%]{border:1px solid #173f5f}']],
                    data: {}
                });
            function vn(l) {
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
            function fn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 3, null, null, null, null, null, null, null)),
                    (l()(), t['ɵted'](1, null, [
                        ' ',
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ])
                ], null, function (l, n) {
                    l(n, 1, 0, t['ɵunv'](n, 1, 0, t['ɵnov'](n, 2).transform('GENERAL.VIEW')), t['ɵunv'](n, 1, 1, t['ɵnov'](n, 3).transform('GENERAL.CONTRACT_SINGLE')));
                });
            }
            function gn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 7, 'div', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 4, 'b', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](3, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵted'](-1, null, [': '])),
                    (l()(), t['ɵted'](6, null, [
                        '',
                        ''
                    ])),
                    (l()(), t['ɵeld'](7, 0, null, null, 0, 'br', [], null, null, null, null, null))
                ], null, function (l, n) {
                    l(n, 3, 0, t['ɵunv'](n, 3, 0, t['ɵnov'](n, 4).transform('NOTIFICATION.HOME.REBELLIONDATE'))), l(n, 6, 0, n.parent.parent.context.$implicit.rebellion_date);
                });
            }
            function hn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 4, 'b', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](2, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵted'](-1, null, [': '])),
                    (l()(), t['ɵted'](5, null, [
                        '',
                        ''
                    ])),
                    (l()(), t['ɵeld'](6, 0, null, null, 0, 'br', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](7, 0, null, null, 4, 'b', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](8, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](9, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵted'](-1, null, [': '])),
                    (l()(), t['ɵted'](12, null, [
                        '',
                        ''
                    ])),
                    (l()(), t['ɵeld'](13, 0, null, null, 0, 'br', [], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, gn)),
                    t['ɵdid'](15, 16384, null, 0, m.NgIf, [
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
                    l(n, 15, 0, null != n.parent.context.$implicit.rebellion_date && '' != n.parent.context.$implicit.rebellion_date);
                }, function (l, n) {
                    l(n, 2, 0, t['ɵunv'](n, 2, 0, t['ɵnov'](n, 3).transform('CONTRACT.HOME.EMAIL'))), l(n, 5, 0, n.parent.context.$implicit.email), l(n, 9, 0, t['ɵunv'](n, 9, 0, t['ɵnov'](n, 10).transform('NOTIFICATION.HOME.ACKNOWLEDGMENTDATE'))), l(n, 12, 0, n.parent.context.$implicit.acknowledgment_date);
                });
            }
            function Cn(l) {
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
            function bn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 6, 'div', [[
                            'style',
                            'float: left;'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵand'](0, [[
                            'popContent',
                            2
                        ]], null, 0, null, hn)),
                    (l()(), t['ɵand'](0, [[
                            'title',
                            2
                        ]], null, 0, null, Cn)),
                    (l()(), t['ɵeld'](3, 16777216, null, null, 3, 'button', [
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
                    t['ɵdid'](4, 737280, null, 0, v.Q, [
                        t.ElementRef,
                        t.Renderer2,
                        t.Injector,
                        t.ComponentFactoryResolver,
                        t.ViewContainerRef,
                        v.R,
                        t.NgZone,
                        m.DOCUMENT,
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
                    (l()(), t['ɵeld'](5, 0, null, null, 1, 'span', [[
                            'class',
                            'symbol-label'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](6, null, [
                        ' ',
                        ' '
                    ]))
                ], function (l, n) {
                    l(n, 4, 0, t['ɵnov'](n, 1), t['ɵinlineInterpolate'](1, '', n.context.$implicit.name, ''), 'top');
                }, function (l, n) {
                    l(n, 3, 0, !n.context.$implicit.acknowledgment_date, n.context.$implicit.acknowledgment_date), l(n, 6, 0, n.context.$implicit.initials);
                });
            }
            function Rn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 41, 'tr', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 1, 'td', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](2, null, [
                        '',
                        ''
                    ])),
                    (l()(), t['ɵeld'](3, 0, null, null, 1, 'td', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](4, null, [
                        '',
                        ''
                    ])),
                    (l()(), t['ɵeld'](5, 0, null, null, 1, 'td', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](6, null, [
                        '',
                        ''
                    ])),
                    (l()(), t['ɵeld'](7, 0, null, null, 1, 'td', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](8, null, [
                        '',
                        ''
                    ])),
                    (l()(), t['ɵeld'](9, 0, null, null, 2, 'td', [], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, bn)),
                    t['ɵdid'](11, 278528, null, 0, m.NgForOf, [
                        t.ViewContainerRef,
                        t.TemplateRef,
                        t.IterableDiffers
                    ], {
                        ngForOf: [
                            0,
                            'ngForOf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](12, 0, null, null, 29, 'td', [], null, null, null, null, null)),
                    (l()(), t['ɵeld'](13, 0, null, null, 28, 'div', [[
                            'class',
                            'card-toolbar'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](14, 0, null, null, 27, 'div', [
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
                    t['ɵdid'](15, 1720320, null, 2, v.v, [
                        t.ChangeDetectorRef,
                        v.x,
                        m.DOCUMENT,
                        t.NgZone,
                        t.ElementRef,
                        t.Renderer2,
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
                    t['ɵqud'](603979776, 1, { _menu: 0 }),
                    t['ɵqud'](603979776, 2, { _anchor: 0 }),
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
                    t['ɵdid'](19, 16384, null, 0, v.A, [
                        v.v,
                        t.ElementRef
                    ], null, null),
                    t['ɵprd'](2048, [[
                            2,
                            4
                        ]], v.w, null, [v.A]),
                    (l()(), t['ɵeld'](21, 0, null, null, 0, 'i', [[
                            'class',
                            'ki ki-bold-more-hor'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](22, 0, null, null, 19, 'div', [
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
                            1,
                            4
                        ]], 1, v.y, [
                        v.v,
                        t.ElementRef
                    ], null, null),
                    t['ɵqud'](603979776, 3, { menuItems: 1 }),
                    (l()(), t['ɵeld'](25, 0, null, null, 16, 'ul', [[
                            'class',
                            'navi navi-hover py-5'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](26, 0, null, null, 6, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var t = !0;
                        return 'click' === n && (t = !1 !== l.component.downloadallEvidenceNotification(l.context.$implicit.notification_id) && t), t;
                    }, null, null)),
                    (l()(), t['ɵeld'](27, 0, null, null, 5, 'a', [[
                            'class',
                            'navi-link cursor-pointer'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](28, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](29, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon-download'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](30, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](31, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](33, 0, null, null, 8, 'li', [[
                            'class',
                            'navi-item'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](34, 0, null, null, 7, 'a', [[
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
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 35).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](35, 671744, null, 0, i.u, [
                        i.r,
                        i.a,
                        m.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    t['ɵpad'](36, 1),
                    (l()(), t['ɵeld'](37, 0, null, null, 1, 'span', [[
                            'class',
                            'navi-icon'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](38, 0, null, null, 0, 'i', [[
                            'class',
                            'flaticon-medical'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](39, 0, null, null, 2, 'span', [[
                            'class',
                            'navi-text'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](40, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ])
                ], function (l, n) {
                    l(n, 11, 0, n.context.$implicit.holders), l(n, 15, 0, 'bottom-right');
                    var e = l(n, 36, 0, '/notifications/view/' + n.context.$implicit.notification_id);
                    l(n, 35, 0, e);
                }, function (l, n) {
                    l(n, 2, 0, n.context.$implicit.invoice), l(n, 4, 0, n.context.$implicit.affair), l(n, 6, 0, n.context.$implicit.created_at), l(n, 8, 0, n.context.$implicit.expiration_date), l(n, 14, 0, t['ɵnov'](n, 15).isOpen()), l(n, 18, 0, t['ɵnov'](n, 19).dropdown.isOpen()), l(n, 22, 0, !0, t['ɵnov'](n, 23).dropdown.isOpen(), t['ɵnov'](n, 23).placement), l(n, 31, 0, t['ɵunv'](n, 31, 0, t['ɵnov'](n, 32).transform('NOTIFICATION.HOME.DOWNLOADEVIDENCE'))), l(n, 34, 0, t['ɵnov'](n, 35).target, t['ɵnov'](n, 35).href), l(n, 40, 0, t['ɵunv'](n, 40, 0, t['ɵnov'](n, 41).transform('NOTIFICATION.HOME.VIEW')));
                });
            }
            function wn(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 67, 'div', [[
                            'class',
                            'mt-5'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](1, 0, null, null, 29, 'div', [[
                            'class',
                            'form-group row'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](2, 0, null, null, 5, 'div', [[
                            'class',
                            'col-lg-6'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](3, 0, null, null, 2, 'label', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](4, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](6, 0, null, null, 1, 'input', [
                        [
                            'class',
                            'form-control form-control-lg form-control'
                        ],
                        [
                            'readonly',
                            'true'
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
                            8,
                            'value',
                            0
                        ]
                    ], null, null, null, null)),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](8, 0, null, null, 22, 'div', [[
                            'class',
                            'col-lg-6'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](9, 0, null, null, 2, 'label', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](10, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](12, 0, null, null, 18, 'select', [
                        [
                            'class',
                            'form-control'
                        ],
                        [
                            'formControlName',
                            'signature_type'
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
                        return 'change' === n && (u = !1 !== t['ɵnov'](l, 13).onChange(e.target.value) && u), 'blur' === n && (u = !1 !== t['ɵnov'](l, 13).onTouched() && u), u;
                    }, null, null)),
                    t['ɵdid'](13, 16384, null, 0, h.w, [
                        t.Renderer2,
                        t.ElementRef
                    ], null, null),
                    t['ɵprd'](1024, null, h.o, function (l) {
                        return [l];
                    }, [h.w]),
                    t['ɵdid'](15, 671744, null, 0, h.i, [
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
                    t['ɵprd'](2048, null, h.p, null, [h.i]),
                    t['ɵdid'](17, 16384, null, 0, h.q, [[
                            4,
                            h.p
                        ]], null, null),
                    (l()(), t['ɵeld'](18, 0, null, null, 4, 'option', [], [[
                            8,
                            'selected',
                            0
                        ]], null, null, null, null)),
                    t['ɵdid'](19, 147456, null, 0, h.u, [
                        t.ElementRef,
                        t.Renderer2,
                        [
                            2,
                            h.w
                        ]
                    ], {
                        ngValue: [
                            0,
                            'ngValue'
                        ]
                    }, null),
                    t['ɵdid'](20, 147456, null, 0, h.B, [
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
                    (l()(), t['ɵted'](21, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](23, 0, null, null, 3, 'option', [[
                            'value',
                            '1'
                        ]], null, null, null, null, null)),
                    t['ɵdid'](24, 147456, null, 0, h.u, [
                        t.ElementRef,
                        t.Renderer2,
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
                    t['ɵdid'](25, 147456, null, 0, h.B, [
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
                    (l()(), t['ɵeld'](27, 0, null, null, 3, 'option', [[
                            'value',
                            '3'
                        ]], null, null, null, null, null)),
                    t['ɵdid'](28, 147456, null, 0, h.u, [
                        t.ElementRef,
                        t.Renderer2,
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
                    t['ɵdid'](29, 147456, null, 0, h.B, [
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
                    (l()(), t['ɵeld'](31, 0, null, null, 36, 'div', [[
                            'class',
                            'form-group row'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](32, 0, null, null, 35, 'div', [[
                            'class',
                            'col-lg-12'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](33, 0, null, null, 34, 'div', [[
                            'class',
                            'card card-custom gutter-b'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](34, 0, null, null, 7, 'div', [[
                            'class',
                            'card-header'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](35, 0, null, null, 2, 'div', [[
                            'class',
                            'card-title'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](36, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](38, 0, null, null, 3, 'div', [[
                            'class',
                            'card-toolbar'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](39, 0, null, null, 2, 'a', [
                        [
                            'class',
                            'btn btn-light-success'
                        ],
                        [
                            'style',
                            'color: white;'
                        ]
                    ], null, [[
                            null,
                            'click'
                        ]], function (l, n, e) {
                        var t = !0, u = l.component;
                        return 'click' === n && (t = !1 !== u.downloadallEvidence(u.id) && t), t;
                    }, null, null)),
                    (l()(), t['ɵted'](40, null, [
                        '',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](42, 0, null, null, 25, 'div', [[
                            'class',
                            'card-body'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](43, 0, null, null, 24, 'div', [[
                            'class',
                            'table-responsive angular-bootstrap-table actions-menu'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](44, 0, null, null, 23, 'table', [[
                            'class',
                            'table table-head-custom table-vertical-center overflow-inherit borderTable'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](45, 0, null, null, 18, 'thead', [[
                            'class',
                            'bg-table'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](46, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](47, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](49, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](50, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](52, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](53, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](55, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](56, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](58, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](59, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](61, 0, null, null, 2, 'th', [], null, null, null, null, null)),
                    (l()(), t['ɵted'](62, null, [
                        ' ',
                        ''
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](64, 0, null, null, 3, 'tbody', [], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, Rn)),
                    t['ɵdid'](66, 278528, null, 0, m.NgForOf, [
                        t.ViewContainerRef,
                        t.TemplateRef,
                        t.IterableDiffers
                    ], {
                        ngForOf: [
                            0,
                            'ngForOf'
                        ]
                    }, null),
                    t['ɵpid'](131072, m.AsyncPipe, [t.ChangeDetectorRef])
                ], function (l, n) {
                    var e = n.component;
                    l(n, 15, 0, 'signature_type'), l(n, 19, 0, null), l(n, 20, 0, null), l(n, 24, 0, '1'), l(n, 25, 0, '1'), l(n, 28, 0, '3'), l(n, 29, 0, '3'), l(n, 66, 0, t['ɵunv'](n, 66, 0, t['ɵnov'](n, 67).transform(e.notificationService.items$)));
                }, function (l, n) {
                    var e = n.component;
                    l(n, 4, 0, t['ɵunv'](n, 4, 0, t['ɵnov'](n, 5).transform('CONTRACT.FORM.NAME'))), l(n, 6, 0, t['ɵinlineInterpolate'](1, '', t['ɵunv'](n, 6, 0, t['ɵnov'](n, 7).transform('CONTRACT.FORM.NAME')), ''), e.contract.name), l(n, 10, 0, t['ɵunv'](n, 10, 0, t['ɵnov'](n, 11).transform('DOCUMENT.CREATE.FORM.SIGNATURETYPE'))), l(n, 12, 0, t['ɵnov'](n, 17).ngClassUntouched, t['ɵnov'](n, 17).ngClassTouched, t['ɵnov'](n, 17).ngClassPristine, t['ɵnov'](n, 17).ngClassDirty, t['ɵnov'](n, 17).ngClassValid, t['ɵnov'](n, 17).ngClassInvalid, t['ɵnov'](n, 17).ngClassPending), l(n, 18, 0, !0), l(n, 21, 0, t['ɵunv'](n, 21, 0, t['ɵnov'](n, 22).transform('DOCUMENT.CREATE.FORM.SELECTOPTION'))), l(n, 36, 0, t['ɵunv'](n, 36, 0, t['ɵnov'](n, 37).transform('CONTRACT.FORM.NOTIFICATIONS'))), l(n, 40, 0, t['ɵunv'](n, 40, 0, t['ɵnov'](n, 41).transform('CONTRACT.HOME.DOWNLOADALLEVIDENCES'))), l(n, 47, 0, t['ɵunv'](n, 47, 0, t['ɵnov'](n, 48).transform('NOTIFICATION.HOME.ID'))), l(n, 50, 0, t['ɵunv'](n, 50, 0, t['ɵnov'](n, 51).transform('NOTIFICATION.HOME.AFFAIR'))), l(n, 53, 0, t['ɵunv'](n, 53, 0, t['ɵnov'](n, 54).transform('NOTIFICATION.HOME.CREATED_DATE'))), l(n, 56, 0, t['ɵunv'](n, 56, 0, t['ɵnov'](n, 57).transform('NOTIFICATION.HOME.EXPIRATIONDATE'))), l(n, 59, 0, t['ɵunv'](n, 59, 0, t['ɵnov'](n, 60).transform('CONTRACT.HOME.NOTIFIED'))), l(n, 62, 0, t['ɵunv'](n, 62, 0, t['ɵnov'](n, 63).transform('NOTIFICATION.HOME.ACTIONS')));
                });
            }
            function yn(l) {
                return t['ɵvid'](2, [
                    (l()(), t['ɵeld'](0, 0, null, null, 19, 'ce-layout-dashboard', [], null, null, null, f.b, f.a)),
                    t['ɵdid'](1, 638976, null, 0, g.a, [t.ChangeDetectorRef], {
                        isLoading: [
                            0,
                            'isLoading'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](2, 0, null, 0, 17, 'div', [
                        [
                            'class',
                            'card card-custom gutter-b'
                        ],
                        [
                            'content',
                            ''
                        ]
                    ], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 2, null, vn)),
                    t['ɵdid'](4, 16384, null, 0, m.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    t['ɵpid'](131072, m.AsyncPipe, [t.ChangeDetectorRef]),
                    (l()(), t['ɵeld'](6, 0, null, null, 10, 'div', [[
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
                    (l()(), t['ɵand'](16777216, null, null, 1, null, fn)),
                    t['ɵdid'](10, 16384, null, 0, m.NgIf, [
                        t.ViewContainerRef,
                        t.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](11, 0, null, null, 5, 'div', [[
                            'class',
                            'card-toolbar'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵeld'](12, 0, null, null, 4, 'a', [
                        [
                            'class',
                            'btn btn-light'
                        ],
                        [
                            'routerLink',
                            '/contract'
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
                        return 'click' === n && (u = !1 !== t['ɵnov'](l, 13).onClick(e.button, e.ctrlKey, e.shiftKey, e.altKey, e.metaKey) && u), u;
                    }, null, null)),
                    t['ɵdid'](13, 671744, null, 0, i.u, [
                        i.r,
                        i.a,
                        m.LocationStrategy
                    ], {
                        routerLink: [
                            0,
                            'routerLink'
                        ]
                    }, null),
                    (l()(), t['ɵeld'](14, 0, null, null, 0, 'i', [[
                            'class',
                            'fa fa-arrow-left'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵted'](15, null, [
                        ' ',
                        ' '
                    ])),
                    t['ɵpid'](131072, p.k, [
                        p.l,
                        t.ChangeDetectorRef
                    ]),
                    (l()(), t['ɵeld'](17, 0, null, null, 2, 'div', [[
                            'class',
                            'card-body'
                        ]], null, null, null, null, null)),
                    (l()(), t['ɵand'](16777216, null, null, 1, null, wn)),
                    t['ɵdid'](19, 16384, null, 0, m.NgIf, [
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
                    l(n, 1, 0, e.isLoadingComponent), l(n, 4, 0, t['ɵunv'](n, 4, 0, t['ɵnov'](n, 5).transform(e.isLoading$))), l(n, 10, 0, e.contract), l(n, 13, 0, '/contract'), l(n, 19, 0, e.contract);
                }, function (l, n) {
                    l(n, 12, 0, t['ɵnov'](n, 13).target, t['ɵnov'](n, 13).href), l(n, 15, 0, t['ɵunv'](n, 15, 0, t['ɵnov'](n, 16).transform('CONTRACT.FORM.BACK')));
                });
            }
            function En(l) {
                return t['ɵvid'](0, [
                    (l()(), t['ɵeld'](0, 0, null, null, 4, 'ng-component', [], null, null, null, yn, mn)),
                    t['ɵprd'](4608, null, v.n, Ul.a, []),
                    t['ɵprd'](4608, null, v.o, Ul.b, []),
                    t['ɵprd'](512, null, m.DatePipe, m.DatePipe, [t.LOCALE_ID]),
                    t['ɵdid'](4, 245760, null, 0, rn, [
                        h.f,
                        T.a,
                        cn,
                        i.r,
                        i.a,
                        p.l,
                        m.DatePipe,
                        pn.a
                    ], null, null)
                ], function (l, n) {
                    l(n, 4, 0);
                }, null);
            }
            var Tn = t['ɵccf']('ng-component', rn, En, {}, {}, []), kn = e('9AJC'), Dn = e('QfCi'), In = e('8WaK'), _n = e('Ed4d'), On = e('JRKe'), An = e('ypAQ'), Nn = e('9b/N'), Sn = e('NFMk'), xn = e('alHs');
            class Ln {
            }
            var Mn = e('66zS'), Fn = e('1z/I'), Hn = e('PgQK'), Vn = e('jQCg'), Kn = e('W0Pu'), $n = e('W4B1'), Pn = e('0CZq'), Un = e('Jp/u'), zn = e('WJhm'), Gn = e('GaVp'), Bn = e('YRt3'), jn = e('lAiz'), qn = e('YdS3'), Yn = e('mW00'), Wn = e('jTf7'), Jn = e('S/WK'), Zn = e('oBm0'), Xn = e('RVNi'), Qn = e('gaRz'), le = e('vZsH'), ne = e('tM0M'), ee = e('fb/r'), te = e('z+yo'), ue = e('JXeA'), oe = e('51fn'), ie = e('pKmL'), ae = e('F3IN'), re = e('RbrB'), de = e('zfYk'), se = e('Tczp'), ce = e('kFOB'), pe = t['ɵcmf'](u, [], function (l) {
                    return t['ɵmod']([
                        t['ɵmpd'](512, t.ComponentFactoryResolver, t['ɵCodegenComponentFactoryResolver'], [
                            [
                                8,
                                [
                                    o.a,
                                    c,
                                    P,
                                    an,
                                    Tn,
                                    kn.h,
                                    kn.i,
                                    Dn.a,
                                    In.a,
                                    _n.b,
                                    _n.a,
                                    On.a,
                                    An.a,
                                    kn.b,
                                    kn.a,
                                    kn.e,
                                    kn.f,
                                    kn.g
                                ]
                            ],
                            [
                                3,
                                t.ComponentFactoryResolver
                            ],
                            t.NgModuleRef
                        ]),
                        t['ɵmpd'](4608, m.NgLocalization, m.NgLocaleLocalization, [t.LOCALE_ID]),
                        t['ɵmpd'](4608, sn.HttpXsrfTokenExtractor, sn['ɵangular_packages_common_http_http_g'], [
                            m.DOCUMENT,
                            t.PLATFORM_ID,
                            sn['ɵangular_packages_common_http_http_e']
                        ]),
                        t['ɵmpd'](4608, sn['ɵangular_packages_common_http_http_h'], sn['ɵangular_packages_common_http_http_h'], [
                            sn.HttpXsrfTokenExtractor,
                            sn['ɵangular_packages_common_http_http_f']
                        ]),
                        t['ɵmpd'](5120, sn.HTTP_INTERCEPTORS, function (l) {
                            return [l];
                        }, [sn['ɵangular_packages_common_http_http_h']]),
                        t['ɵmpd'](4608, sn['ɵangular_packages_common_http_http_d'], sn['ɵangular_packages_common_http_http_d'], []),
                        t['ɵmpd'](6144, sn.XhrFactory, null, [sn['ɵangular_packages_common_http_http_d']]),
                        t['ɵmpd'](4608, sn.HttpXhrBackend, sn.HttpXhrBackend, [sn.XhrFactory]),
                        t['ɵmpd'](6144, sn.HttpBackend, null, [sn.HttpXhrBackend]),
                        t['ɵmpd'](4608, sn.HttpHandler, sn['ɵHttpInterceptingHandler'], [
                            sn.HttpBackend,
                            t.Injector
                        ]),
                        t['ɵmpd'](4608, sn.HttpClient, sn.HttpClient, [sn.HttpHandler]),
                        t['ɵmpd'](4608, h.z, h.z, []),
                        t['ɵmpd'](4608, v.E, v.E, [
                            t.ComponentFactoryResolver,
                            t.Injector,
                            v.vb,
                            v.F
                        ]),
                        t['ɵmpd'](4608, Q.d, Q.d, [
                            Q.l,
                            Q.f,
                            t.ComponentFactoryResolver,
                            Q.j,
                            Q.g,
                            t.Injector,
                            t.NgZone,
                            m.DOCUMENT,
                            ll.b,
                            m.Location,
                            Q.i
                        ]),
                        t['ɵmpd'](5120, Q.m, Q.n, [Q.d]),
                        t['ɵmpd'](4608, Nn.c, Nn.c, []),
                        t['ɵmpd'](135680, Sn.k, Sn.k, [
                            Q.d,
                            t.Injector,
                            B.a,
                            [
                                3,
                                Sn.k
                            ]
                        ]),
                        t['ɵmpd'](4608, h.f, h.f, []),
                        t['ɵmpd'](4608, xn.d, xn.d, [xn.a]),
                        t['ɵmpd'](5120, X.b, X.c, [Q.d]),
                        t['ɵmpd'](1073742336, m.CommonModule, m.CommonModule, []),
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
                        t['ɵmpd'](1073742336, Ln, Ln, []),
                        t['ɵmpd'](1073742336, sn.HttpClientXsrfModule, sn.HttpClientXsrfModule, []),
                        t['ɵmpd'](1073742336, sn.HttpClientModule, sn.HttpClientModule, []),
                        t['ɵmpd'](1073742336, h.y, h.y, []),
                        t['ɵmpd'](1073742336, h.l, h.l, []),
                        t['ɵmpd'](1073742336, v.G, v.G, []),
                        t['ɵmpd'](1073742336, Y.a, Y.a, []),
                        t['ɵmpd'](1073742336, W.b, W.b, []),
                        t['ɵmpd'](1073742336, q.b, q.b, []),
                        t['ɵmpd'](1073742336, Mn.b, Mn.b, []),
                        t['ɵmpd'](1073742336, ll.a, ll.a, []),
                        t['ɵmpd'](1073742336, Fn.e, Fn.e, []),
                        t['ɵmpd'](1073742336, nl.c, nl.c, []),
                        t['ɵmpd'](1073742336, nl.g, nl.g, []),
                        t['ɵmpd'](1073742336, Q.h, Q.h, []),
                        t['ɵmpd'](1073742336, Hn.a, Hn.a, []),
                        t['ɵmpd'](1073742336, Vn.c, Vn.c, []),
                        t['ɵmpd'](1073742336, Kn.b, Kn.b, []),
                        t['ɵmpd'](1073742336, $n.b, $n.b, []),
                        t['ɵmpd'](1073742336, G.e, G.e, []),
                        t['ɵmpd'](1073742336, Pn.d, Pn.d, []),
                        t['ɵmpd'](1073742336, Pn.c, Pn.c, []),
                        t['ɵmpd'](1073742336, Z.c, Z.c, []),
                        t['ɵmpd'](1073742336, Un.c, Un.c, []),
                        t['ɵmpd'](1073742336, zn.b, zn.b, []),
                        t['ɵmpd'](1073742336, Gn.c, Gn.c, []),
                        t['ɵmpd'](1073742336, Bn.a, Bn.a, []),
                        t['ɵmpd'](1073742336, jn.a, jn.a, []),
                        t['ɵmpd'](1073742336, jn.b, jn.b, []),
                        t['ɵmpd'](1073742336, Nn.d, Nn.d, []),
                        t['ɵmpd'](1073742336, il.a, il.a, [il.f]),
                        t['ɵmpd'](1073742336, ol.c, ol.c, []),
                        t['ɵmpd'](1073742336, el.d, el.d, []),
                        t['ɵmpd'](1073742336, qn.a, qn.a, []),
                        t['ɵmpd'](1073742336, Yn.d, Yn.d, []),
                        t['ɵmpd'](1073742336, Wn.j, Wn.j, []),
                        t['ɵmpd'](1073742336, Jn.a, Jn.a, []),
                        t['ɵmpd'](1073742336, Sn.i, Sn.i, []),
                        t['ɵmpd'](1073742336, Zn.a, Zn.a, []),
                        t['ɵmpd'](1073742336, Xn.b, Xn.b, []),
                        t['ɵmpd'](1073742336, Qn.d, Qn.d, []),
                        t['ɵmpd'](1073742336, le.d, le.d, []),
                        t['ɵmpd'](1073742336, p.i, p.i, []),
                        t['ɵmpd'](1073742336, ne.a, ne.a, []),
                        t['ɵmpd'](1073742336, ee.b, ee.b, []),
                        t['ɵmpd'](1073742336, h.v, h.v, []),
                        t['ɵmpd'](1073742336, te.a, te.a, []),
                        t['ɵmpd'](1073742336, ue.h, ue.h, []),
                        t['ɵmpd'](1073742336, ue.f, ue.f, []),
                        t['ɵmpd'](1073742336, oe.a, oe.a, []),
                        t['ɵmpd'](1073742336, ie.a, ie.a, []),
                        t['ɵmpd'](1073742336, ae.InlineSVGModule, ae.InlineSVGModule, []),
                        t['ɵmpd'](1073742336, re.a, re.a, []),
                        t['ɵmpd'](1073742336, v.t, v.t, []),
                        t['ɵmpd'](1073742336, de.a, de.a, []),
                        t['ɵmpd'](1073742336, xn.c, xn.c, []),
                        t['ɵmpd'](1073742336, se.b, se.b, []),
                        t['ɵmpd'](1073742336, v.z, v.z, []),
                        t['ɵmpd'](1073742336, ce.a, ce.a, []),
                        t['ɵmpd'](1073742336, v.c, v.c, []),
                        t['ɵmpd'](1073742336, v.f, v.f, []),
                        t['ɵmpd'](1073742336, v.g, v.g, []),
                        t['ɵmpd'](1073742336, v.k, v.k, []),
                        t['ɵmpd'](1073742336, v.l, v.l, []),
                        t['ɵmpd'](1073742336, v.I, v.I, []),
                        t['ɵmpd'](1073742336, v.N, v.N, []),
                        t['ɵmpd'](1073742336, v.S, v.S, []),
                        t['ɵmpd'](1073742336, v.V, v.V, []),
                        t['ɵmpd'](1073742336, v.Y, v.Y, []),
                        t['ɵmpd'](1073742336, v.gb, v.gb, []),
                        t['ɵmpd'](1073742336, v.jb, v.jb, []),
                        t['ɵmpd'](1073742336, v.kb, v.kb, []),
                        t['ɵmpd'](1073742336, v.lb, v.lb, []),
                        t['ɵmpd'](1073742336, v.bb, v.bb, []),
                        t['ɵmpd'](1073742336, v.H, v.H, []),
                        t['ɵmpd'](1073742336, z.k, z.k, [
                            il.f,
                            [
                                2,
                                z.c
                            ],
                            [
                                2,
                                m.DOCUMENT
                            ]
                        ]),
                        t['ɵmpd'](1073742336, z.u, z.u, []),
                        t['ɵmpd'](1073742336, z.s, z.s, []),
                        t['ɵmpd'](1073742336, z.p, z.p, []),
                        t['ɵmpd'](1073742336, X.e, X.e, []),
                        t['ɵmpd'](1073742336, u, u, []),
                        t['ɵmpd'](1024, i.m, function () {
                            return [[{
                                        path: '',
                                        component: a,
                                        children: [
                                            {
                                                path: '',
                                                component: E
                                            },
                                            {
                                                path: 'create',
                                                component: ql
                                            },
                                            {
                                                path: 'update/:id',
                                                component: ql
                                            },
                                            {
                                                path: ':id/notifications',
                                                component: rn
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
                        t['ɵmpd'](256, sn['ɵangular_packages_common_http_http_e'], 'XSRF-TOKEN', []),
                        t['ɵmpd'](256, sn['ɵangular_packages_common_http_http_f'], 'X-XSRF-TOKEN', []),
                        t['ɵmpd'](256, xn.a, void 0, [])
                    ]);
                });
        }
    }
]);