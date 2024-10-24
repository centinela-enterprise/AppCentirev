(window.webpackJsonp = window.webpackJsonp || []).push([
    [27],
    {
        F8LO: function (l, n, t) {
            'use strict';
            t.r(n), t.d(n, 'CentinelaModuleNgFactory', function () {
                return Xl;
            });
            var e = t('8Y7J');
            class u {
            }
            var i = t('pMnS'), a = t('iInd');
            class o {
                constructor() {
                }
                ngOnInit() {
                }
            }
            var d = e['ɵcrt']({
                encapsulation: 0,
                styles: [['']],
                data: {}
            });
            function s(l) {
                return e['ɵvid'](0, [
                    (l()(), e['ɵeld'](0, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
                    e['ɵdid'](1, 212992, null, 0, a.w, [
                        a.b,
                        e.ViewContainerRef,
                        e.ComponentFactoryResolver,
                        [
                            8,
                            null
                        ],
                        e.ChangeDetectorRef
                    ], null, null)
                ], function (l, n) {
                    l(n, 1, 0);
                }, null);
            }
            function r(l) {
                return e['ɵvid'](0, [
                    (l()(), e['ɵeld'](0, 0, null, null, 1, 'app-centinela', [], null, null, null, s, d)),
                    e['ɵdid'](1, 114688, null, 0, o, [], null, null)
                ], function (l, n) {
                    l(n, 1, 0);
                }, null);
            }
            var c = e['ɵccf']('app-centinela', o, r, {}, {}, []), g = t('fWv6'), p = t('ZEiq'), m = t('6GRG'), f = t('Ppjl'), w = t('EvHu'), C = t('iB+a'), v = t('TSSN'), h = t('SVse'), M = t('s7LF'), z = t('wf2+'), O = t('0YeR'), P = t('PGiN'), _ = t('ceAI'), b = t('66zS'), y = t('WJhm'), x = t('Iwqi'), N = t('xIfL'), k = t('ka1k'), R = t('mrSG'), D = t('p8Fu'), I = t('rh/z');
            class T {
                constructor(l, n, t, e, u, i, a) {
                    this.firmService = l, this.activatedRoute = n, this.router = t, this.traslateService = e, this._validations = u, this.changeDetectorRef = i, this.notifications = a, this.isVisiblePassword = !1, this.step = 0, this.error = !1, this.document = {
                        recivers: [],
                        deadLine: null,
                        description: null,
                        documentType: null,
                        documentbase64: null,
                        id: null,
                        name: null,
                        nameFile: null,
                        owner_name: null,
                        signature_type: null,
                        status: null,
                        userId: null,
                        lSign: null,
                        reciver_type: null,
                        signature_date: null
                    }, this.loadingDocument = !0, this.stepDisabled = !1, this.isActive = !1, this.signers = [], this.observers = [], this.isLoadingComponent = !1;
                }
                goTo(l) {
                    this.wizard.goTo(l), this.changeDetectorRef.markForCheck();
                }
                ngOnInit() {
                    return Object(R.a)(this, void 0, void 0, function* () {
                        try {
                            this.loadingDocument = !0, this.code = this.activatedRoute.snapshot.params.code, this.document = yield this.firmService.getDocumentNoLogin(this.code).toPromise(), this.isActive = '0' == this.document.reciver_type && '1' == this.document.signature_type && null == this.document.signature_date, this.getObservers(), this.getSigners();
                            const l = this.b64toBlob(this.document.file, 'application/pdf'), n = URL.createObjectURL(l);
                            this.pdfSrc = n;
                        } catch (l) {
                            this.router.navigate(['centinela/document/notfound']);
                        } finally {
                            this.loadingDocument = !1, this.changeDetectorRef.markForCheck();
                        }
                    });
                }
                b64toBlob(l, n = '', t = 512) {
                    const e = atob(l), u = [];
                    for (let i = 0; i < e.length; i += t) {
                        const l = e.slice(i, i + t), n = new Array(l.length);
                        for (let t = 0; t < l.length; t++)
                            n[t] = l.charCodeAt(t);
                        const a = new Uint8Array(n);
                        u.push(a);
                    }
                    return new Blob(u, { type: n });
                }
                applySignature() {
                    return Object(R.a)(this, void 0, void 0, function* () {
                        try {
                            this.isLoadingComponent = !0, this.loadingForm = !0;
                            let l = Object.assign(Object.assign({}, this._validations.entityForm().value), { token: this.code });
                            yield this.firmService.applySignatureNoLogin(l).toPromise();
                            let n = this.traslateService.instant('DOCUMENT.SIGN.TITLE'), t = this.traslateService.instant('DOCUMENT.SIGN.BODYMESSAGE');
                            this.notifications.success(n, t), this.isLoadingComponent = !1, this.router.navigate(['centinela/signature/success']);
                        } catch (l) {
                            this.isLoadingComponent = !1, this.notifications.error(l.error);
                        } finally {
                            this.isLoadingComponent = !1, this.changeDetectorRef.markForCheck(), this.loadingForm = !1;
                        }
                    });
                }
                getSigners() {
                    let l = [], n = this.document.recivers.filter(({reciverType: l}) => '0' === l);
                    n.length > 0 && (l = n.map(l => ({
                        title: l.name,
                        description: l.email,
                        date: l.execution_date
                    }))), this.signers = l;
                }
                getObservers() {
                    let l = [], n = this.document.recivers.filter(({reciverType: l}) => '1' === l);
                    n.length > 0 && (l = n.map(l => ({
                        title: l.name,
                        description: l.email,
                        date: l.execution_date
                    }))), this.observers = l;
                }
                ngOnDestroy() {
                    this.wizard = void 0;
                }
                ngAfterViewInit() {
                    this.wizard = new D.a('kt_wizard_v1', { startStep: 1 }), this.wizard.on('change', () => {
                        setTimeout(() => {
                            I.a.scrollTop();
                        }, 500);
                    });
                }
                changeVisiblePassword() {
                    this.isVisiblePassword = !this.isVisiblePassword;
                }
            }
            var E = t('agFG'), S = t('WueC'), A = e['ɵcrt']({
                    encapsulation: 0,
                    styles: [['.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]{display:flex;align-items:center;text-align:center}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]{margin-left:3.5rem;margin-right:3.5rem}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]{color:#b5b5c3;font-size:3.75rem;filter:brightness(.5) sepia(1) hue-rotate(-70deg) saturate(5)}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-title[_ngcontent-%COMP%]{color:#7e8299;font-size:1.1rem;font-weight:500;margin-top:.75rem}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-arrow[_ngcontent-%COMP%]{color:#7e8299;font-size:1.25rem}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-arrow.last[_ngcontent-%COMP%]{display:none}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%], .wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=done][_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]{color:#226298;filter:none}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%], .wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=done][_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{transition:fill .3s ease;fill:#ed553b}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%], .wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=done][_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{transition:fill .3s ease}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]   .wizard-arrow[_ngcontent-%COMP%], .wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-title[_ngcontent-%COMP%], .wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=done][_ngcontent-%COMP%]   .wizard-arrow[_ngcontent-%COMP%], .wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=done][_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-title[_ngcontent-%COMP%]{color:#226298}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]   .wizard-arrow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%], .wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=done][_ngcontent-%COMP%]   .wizard-arrow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{transition:fill .3s ease;fill:#ed553b}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=current][_ngcontent-%COMP%]   .wizard-arrow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%], .wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[data-wizard-state=done][_ngcontent-%COMP%]   .wizard-arrow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover   g[_ngcontent-%COMP%]   [fill][_ngcontent-%COMP%]{transition:fill .3s ease}@media (min-width:768px) and (max-width:1199.98px){.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]{margin-left:1.5rem;margin-right:1.5rem}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]{font-size:3.75rem}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-title[_ngcontent-%COMP%]{margin-top:.75rem}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-arrow[_ngcontent-%COMP%]{font-size:1.1rem}}@media (max-width:767.98px){.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]{flex-direction:column}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]{width:100%;flex-direction:row;justify-content:space-between;margin-bottom:.5rem;margin-top:.5rem}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]{flex-direction:row;display:flex;align-items:center;margin-left:0;margin-right:0}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-label[_ngcontent-%COMP%]   .wizard-icon[_ngcontent-%COMP%]{font-size:1.5rem;margin-right:1.25rem}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-arrow[_ngcontent-%COMP%]{font-size:1rem}.wizard.wizard-1[_ngcontent-%COMP%]   .wizard-nav[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .wizard-arrow.last[_ngcontent-%COMP%]{display:block}}pdf-viewer[_ngcontent-%COMP%]{display:block;height:100vh}']],
                    data: {}
                });
            function F(l) {
                return e['ɵvid'](0, [
                    (l()(), e['ɵeld'](0, 0, null, null, 1, 'pdf-viewer', [[
                            'class',
                            'd-flex w-full shadow '
                        ]], null, [[
                            'window',
                            'resize'
                        ]], function (l, n, t) {
                        var u = !0;
                        return 'window:resize' === n && (u = !1 !== e['ɵnov'](l, 1).onPageResize() && u), u;
                    }, g.b, g.a)),
                    e['ɵdid'](1, 9158656, null, 0, p.a, [e.ElementRef], {
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
                    }, null)
                ], function (l, n) {
                    l(n, 1, 0, n.component.pdfSrc, !0, !1, !0, !0, !0);
                }, null);
            }
            function L(l) {
                return e['ɵvid'](0, [
                    (l()(), e['ɵeld'](0, 0, null, null, 2, 'div', [], null, null, null, null, null)),
                    (l()(), e['ɵeld'](1, 0, null, null, 1, 'app-lists-widget3', [], null, null, null, m.b, m.a)),
                    e['ɵdid'](2, 114688, null, 0, f.a, [], {
                        title: [
                            0,
                            'title'
                        ],
                        select: [
                            1,
                            'select'
                        ],
                        btnAdd: [
                            2,
                            'btnAdd'
                        ],
                        items: [
                            3,
                            'items'
                        ]
                    }, null)
                ], function (l, n) {
                    l(n, 2, 0, 'DOCUMENT.SIGN.SIGNATURES', !1, !1, n.component.signers);
                }, null);
            }
            function j(l) {
                return e['ɵvid'](0, [
                    (l()(), e['ɵeld'](0, 0, null, null, 2, 'div', [], null, null, null, null, null)),
                    (l()(), e['ɵeld'](1, 0, null, null, 1, 'app-lists-widget3', [], null, null, null, m.b, m.a)),
                    e['ɵdid'](2, 114688, null, 0, f.a, [], {
                        title: [
                            0,
                            'title'
                        ],
                        select: [
                            1,
                            'select'
                        ],
                        btnAdd: [
                            2,
                            'btnAdd'
                        ],
                        items: [
                            3,
                            'items'
                        ]
                    }, null)
                ], function (l, n) {
                    l(n, 2, 0, 'Observadores', !1, !1, n.component.observers);
                }, null);
            }
            function U(l) {
                return e['ɵvid'](2, [
                    e['ɵqud'](402653184, 1, { el: 0 }),
                    (l()(), e['ɵeld'](1, 0, null, null, 129, 'ce-layout-dashboard', [], null, null, null, w.b, w.a)),
                    e['ɵdid'](2, 638976, null, 0, C.a, [e.ChangeDetectorRef], {
                        isLoading: [
                            0,
                            'isLoading'
                        ]
                    }, null),
                    (l()(), e['ɵeld'](3, 0, null, 0, 127, 'div', [
                        [
                            'class',
                            'container'
                        ],
                        [
                            'content',
                            ''
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](4, 0, null, null, 126, 'div', [[
                            'class',
                            'card card-custom gutter-b'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](5, 0, null, null, 4, 'div', [[
                            'class',
                            'card-header'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](6, 0, null, null, 3, 'div', [[
                            'class',
                            'card-title'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](7, 0, null, null, 2, 'h3', [[
                            'class',
                            'card-label'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵted'](8, null, [
                        ' ',
                        ''
                    ])),
                    e['ɵpid'](131072, v.k, [
                        v.l,
                        e.ChangeDetectorRef
                    ]),
                    (l()(), e['ɵeld'](10, 0, null, null, 120, 'div', [[
                            'class',
                            'card-body'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](11, 0, [
                        [
                            1,
                            0
                        ],
                        [
                            'wizard',
                            1
                        ]
                    ], null, 119, 'div', [
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
                    (l()(), e['ɵeld'](12, 0, null, null, 15, 'div', [[
                            'class',
                            'wizard-nav'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](13, 0, null, null, 14, 'div', [[
                            'class',
                            'wizard-steps p-8 p-lg-10 d-none'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](14, 0, null, null, 5, 'a', [
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
                    (l()(), e['ɵeld'](15, 0, null, null, 4, 'div', [[
                            'class',
                            'wizard-label'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](16, 0, null, null, 0, 'i', [[
                            'class',
                            'wizard-icon flaticon-list'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](17, 0, null, null, 2, 'h3', [[
                            'class',
                            'wizard-title'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵted'](18, null, [
                        '1) ',
                        ' '
                    ])),
                    e['ɵpid'](131072, v.k, [
                        v.l,
                        e.ChangeDetectorRef
                    ]),
                    (l()(), e['ɵeld'](20, 0, null, null, 7, 'a', [
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
                    e['ɵdid'](21, 278528, null, 0, h.NgClass, [
                        e.IterableDiffers,
                        e.KeyValueDiffers,
                        e.ElementRef,
                        e.Renderer2
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
                    e['ɵpod'](22, { 'd-none': 0 }),
                    (l()(), e['ɵeld'](23, 0, null, null, 4, 'div', [[
                            'class',
                            'wizard-label'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](24, 0, null, null, 0, 'i', [[
                            'class',
                            'wizard-icon flaticon-file-1'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](25, 0, null, null, 2, 'h3', [[
                            'class',
                            'wizard-title'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵted'](26, null, [
                        '2) ',
                        ''
                    ])),
                    e['ɵpid'](131072, v.k, [
                        v.l,
                        e.ChangeDetectorRef
                    ]),
                    (l()(), e['ɵeld'](28, 0, null, null, 102, 'div', [[
                            'class',
                            'row justify-content-center'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](29, 0, null, null, 70, 'div', [[
                            'class',
                            'col-xl-8'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](30, 0, null, null, 69, 'form', [
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
                    ], function (l, n, t) {
                        var u = !0;
                        return 'submit' === n && (u = !1 !== e['ɵnov'](l, 32).onSubmit(t) && u), 'reset' === n && (u = !1 !== e['ɵnov'](l, 32).onReset() && u), u;
                    }, null, null)),
                    e['ɵdid'](31, 16384, null, 0, M.C, [], null, null),
                    e['ɵdid'](32, 4210688, null, 0, M.s, [
                        [
                            8,
                            null
                        ],
                        [
                            8,
                            null
                        ]
                    ], null, null),
                    e['ɵprd'](2048, null, M.d, null, [M.s]),
                    e['ɵdid'](34, 16384, null, 0, M.r, [[
                            6,
                            M.d
                        ]], null, null),
                    (l()(), e['ɵeld'](35, 0, null, null, 16, 'div', [
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
                    (l()(), e['ɵeld'](36, 0, null, null, 2, 'div', [[
                            'class',
                            'font-weight-bold text-dark'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵted'](37, null, [
                        ' ',
                        ' '
                    ])),
                    e['ɵpid'](131072, v.k, [
                        v.l,
                        e.ChangeDetectorRef
                    ]),
                    (l()(), e['ɵeld'](39, 0, null, null, 3, 'div', [[
                            'class',
                            'row mt-10'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](40, 0, null, null, 2, 'div', [[
                            'class',
                            'col-12'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵand'](16777216, null, null, 1, null, F)),
                    e['ɵdid'](42, 16384, null, 0, h.NgIf, [
                        e.ViewContainerRef,
                        e.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), e['ɵeld'](43, 0, null, null, 8, 'div', [[
                            'class',
                            'd-flex justify-content-end border-top pt-10'
                        ]], null, null, null, null, null)),
                    e['ɵdid'](44, 278528, null, 0, h.NgClass, [
                        e.IterableDiffers,
                        e.KeyValueDiffers,
                        e.ElementRef,
                        e.Renderer2
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
                    e['ɵpod'](45, { 'd-none': 0 }),
                    (l()(), e['ɵeld'](46, 0, null, null, 5, 'div', [], null, null, null, null, null)),
                    (l()(), e['ɵeld'](47, 0, null, null, 4, 'button', [[
                            'class',
                            'btn btn-primary font-weight-bold text-uppercase px-9 py-4'
                        ]], null, [[
                            null,
                            'click'
                        ]], function (l, n, t) {
                        var e = !0;
                        return 'click' === n && (e = !1 !== l.component.goTo(2) && e), e;
                    }, null, null)),
                    e['ɵdid'](48, 278528, null, 0, h.NgClass, [
                        e.IterableDiffers,
                        e.KeyValueDiffers,
                        e.ElementRef,
                        e.Renderer2
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
                    e['ɵpod'](49, { 'd-none': 0 }),
                    (l()(), e['ɵted'](50, null, [
                        ' ',
                        ' '
                    ])),
                    e['ɵpid'](131072, v.k, [
                        v.l,
                        e.ChangeDetectorRef
                    ]),
                    (l()(), e['ɵeld'](52, 0, null, null, 47, 'div', [
                        [
                            'class',
                            'pb-5'
                        ],
                        [
                            'data-wizard-type',
                            'step-content'
                        ]
                    ], null, null, null, null, null)),
                    e['ɵdid'](53, 278528, null, 0, h.NgClass, [
                        e.IterableDiffers,
                        e.KeyValueDiffers,
                        e.ElementRef,
                        e.Renderer2
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
                    e['ɵpod'](54, { 'd-none': 0 }),
                    (l()(), e['ɵeld'](55, 0, null, null, 2, 'div', [[
                            'class',
                            'mb-10 font-weight-bold text-dark'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵted'](56, null, [
                        ' ',
                        ': '
                    ])),
                    e['ɵpid'](131072, v.k, [
                        v.l,
                        e.ChangeDetectorRef
                    ]),
                    (l()(), e['ɵeld'](58, 0, null, null, 30, 'form', [
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
                    ], function (l, n, t) {
                        var u = !0;
                        return 'submit' === n && (u = !1 !== e['ɵnov'](l, 60).onSubmit(t) && u), 'reset' === n && (u = !1 !== e['ɵnov'](l, 60).onReset() && u), u;
                    }, null, null)),
                    e['ɵdid'](59, 16384, null, 0, M.C, [], null, null),
                    e['ɵdid'](60, 540672, null, 0, M.k, [
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
                    e['ɵprd'](2048, null, M.d, null, [M.k]),
                    e['ɵdid'](62, 16384, null, 0, M.r, [[
                            6,
                            M.d
                        ]], null, null),
                    e['ɵdid'](63, 671744, null, 0, z.b, [
                        O.a,
                        e.ElementRef,
                        e.Renderer2
                    ], {
                        nzLayout: [
                            0,
                            'nzLayout'
                        ]
                    }, null),
                    (l()(), e['ɵeld'](64, 0, null, null, 3, 'div', [[
                            'class',
                            'col-xl-12'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](65, 0, null, null, 2, 'ce-upload', [
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
                    ], null, null, null, P.b, P.a)),
                    e['ɵdid'](66, 114688, null, 0, _.a, [v.l], {
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
                    (l()(), e['ɵeld'](67, 0, null, 0, 0, 'img', [
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
                            '../assets/media/svg/icons/Files/File.svg'
                        ],
                        [
                            'width',
                            '100'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](68, 0, null, null, 3, 'div', [[
                            'class',
                            'col-xl-12 mt-10'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](69, 0, null, null, 2, 'ce-upload', [
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
                    ], null, null, null, P.b, P.a)),
                    e['ɵdid'](70, 114688, null, 0, _.a, [v.l], {
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
                    (l()(), e['ɵeld'](71, 0, null, 0, 0, 'img', [
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
                            '../assets/media/svg/icons/Home/Key.svg'
                        ],
                        [
                            'width',
                            '100'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](72, 0, null, null, 16, 'div', [[
                            'class',
                            'col-xl-4 form-group'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](73, 0, null, null, 3, 'label', [[
                            'class',
                            'mb-6'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](74, 0, null, null, 2, 'b', [], null, null, null, null, null)),
                    (l()(), e['ɵted'](75, null, [
                        '3. ',
                        ':'
                    ])),
                    e['ɵpid'](131072, v.k, [
                        v.l,
                        e.ChangeDetectorRef
                    ]),
                    (l()(), e['ɵeld'](77, 0, null, null, 11, 'div', [[
                            'class',
                            'input-group mb-3'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](78, 0, null, null, 5, 'input', [
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
                    ], function (l, n, t) {
                        var u = !0;
                        return 'input' === n && (u = !1 !== e['ɵnov'](l, 79)._handleInput(t.target.value) && u), 'blur' === n && (u = !1 !== e['ɵnov'](l, 79).onTouched() && u), 'compositionstart' === n && (u = !1 !== e['ɵnov'](l, 79)._compositionStart() && u), 'compositionend' === n && (u = !1 !== e['ɵnov'](l, 79)._compositionEnd(t.target.value) && u), u;
                    }, null, null)),
                    e['ɵdid'](79, 16384, null, 0, M.e, [
                        e.Renderer2,
                        e.ElementRef,
                        [
                            2,
                            M.b
                        ]
                    ], null, null),
                    e['ɵprd'](1024, null, M.o, function (l) {
                        return [l];
                    }, [M.e]),
                    e['ɵdid'](81, 671744, null, 0, M.i, [
                        [
                            3,
                            M.d
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
                            M.o
                        ],
                        [
                            2,
                            M.A
                        ]
                    ], {
                        name: [
                            0,
                            'name'
                        ]
                    }, null),
                    e['ɵprd'](2048, null, M.p, null, [M.i]),
                    e['ɵdid'](83, 16384, null, 0, M.q, [[
                            4,
                            M.p
                        ]], null, null),
                    (l()(), e['ɵeld'](84, 0, null, null, 4, 'div', [[
                            'class',
                            'input-group-append'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](85, 0, null, null, 3, 'button', [
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
                        ]], function (l, n, t) {
                        var e = !0;
                        return 'click' === n && (e = !1 !== l.component.changeVisiblePassword() && e), e;
                    }, null, null)),
                    (l()(), e['ɵeld'](86, 0, null, null, 2, 'i', [
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
                    e['ɵdid'](87, 2703360, null, 0, b.a, [
                        e.ElementRef,
                        b.d,
                        e.Renderer2,
                        [
                            2,
                            b.c
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
                    e['ɵdid'](88, 4734976, null, 0, y.a, [
                        e.ElementRef,
                        e.Renderer2
                    ], null, null),
                    (l()(), e['ɵeld'](89, 0, null, null, 10, 'div', [[
                            'class',
                            'd-flex justify-content-between border-top pt-10'
                        ]], null, null, null, null, null)),
                    e['ɵdid'](90, 278528, null, 0, h.NgClass, [
                        e.IterableDiffers,
                        e.KeyValueDiffers,
                        e.ElementRef,
                        e.Renderer2
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
                    e['ɵpod'](91, { 'd-none': 0 }),
                    (l()(), e['ɵeld'](92, 0, null, null, 3, 'div', [[
                            'class',
                            'mr-2'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](93, 0, null, null, 2, 'div', [[
                            'class',
                            'btn btn-light-primary font-weight-bold text-uppercase px-9 py-4'
                        ]], null, [[
                            null,
                            'click'
                        ]], function (l, n, t) {
                        var e = !0;
                        return 'click' === n && (e = !1 !== l.component.goTo(1) && e), e;
                    }, null, null)),
                    (l()(), e['ɵted'](94, null, [
                        ' ',
                        ' '
                    ])),
                    e['ɵpid'](131072, v.k, [
                        v.l,
                        e.ChangeDetectorRef
                    ]),
                    (l()(), e['ɵeld'](96, 0, null, null, 3, 'div', [], null, null, null, null, null)),
                    (l()(), e['ɵeld'](97, 0, null, null, 2, 'button', [[
                            'class',
                            'btn btn-success font-weight-bold text-uppercase px-9 py-4'
                        ]], [[
                            8,
                            'disabled',
                            0
                        ]], [[
                            null,
                            'click'
                        ]], function (l, n, t) {
                        var e = !0;
                        return 'click' === n && (e = !1 !== l.component.applySignature() && e), e;
                    }, null, null)),
                    (l()(), e['ɵted'](98, null, [
                        ' ',
                        ' '
                    ])),
                    e['ɵpid'](131072, v.k, [
                        v.l,
                        e.ChangeDetectorRef
                    ]),
                    (l()(), e['ɵeld'](100, 0, null, null, 30, 'div', [[
                            'class',
                            'col col-md-4'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](101, 0, null, null, 12, 'div', [[
                            'class',
                            'col mt-15'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](102, 0, null, null, 2, 'h4', [[
                            'class',
                            'font-weight-bolder'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵted'](103, null, [
                        ' ',
                        ''
                    ])),
                    e['ɵpid'](131072, v.k, [
                        v.l,
                        e.ChangeDetectorRef
                    ]),
                    (l()(), e['ɵeld'](105, 0, null, null, 8, 'div', [[
                            'class',
                            'd-flex'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](106, 0, null, null, 2, 'div', [[
                            'class',
                            'symbol symbol-40 symbol-light-dark mr-5'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](107, 0, null, null, 1, 'span', [[
                            'class',
                            'symbol-label'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](108, 0, null, null, 0, 'img', [
                        [
                            'class',
                            'h-75 align-self-end'
                        ],
                        [
                            'src',
                            '../assets/media/svg/icons/Files/Selected-file.svg'
                        ]
                    ], [[
                            8,
                            'alt',
                            0
                        ]], null, null, null, null)),
                    (l()(), e['ɵeld'](109, 0, null, null, 4, 'div', [[
                            'class',
                            'col d-flex justify-content-end flex-column'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](110, 0, null, null, 1, 'span', [[
                            'class',
                            'text-dark text-hover-primary mb-1 font-size-lg text-truncate'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵted'](111, null, [
                        '',
                        ' '
                    ])),
                    (l()(), e['ɵeld'](112, 0, null, null, 1, 'span', [[
                            'class',
                            'text-muted text-truncate'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵted'](113, null, [
                        '',
                        ''
                    ])),
                    (l()(), e['ɵeld'](114, 0, null, null, 10, 'div', [[
                            'class',
                            'col mt-5'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](115, 0, null, null, 2, 'h4', [[
                            'class',
                            'font-weight-bolder'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵted'](116, null, [
                        '',
                        ''
                    ])),
                    e['ɵpid'](131072, v.k, [
                        v.l,
                        e.ChangeDetectorRef
                    ]),
                    (l()(), e['ɵeld'](118, 0, null, null, 6, 'div', [[
                            'class',
                            'col d-flex'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](119, 0, null, null, 2, 'div', [[
                            'class',
                            'symbol symbol-40 symbol-light-dark mr-5'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](120, 0, null, null, 1, 'span', [[
                            'class',
                            'symbol-label'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](121, 0, null, null, 0, 'img', [
                        [
                            'class',
                            'h-75 align-self-end'
                        ],
                        [
                            'src',
                            './assets/media/svg/avatars/011-boy-5.svg'
                        ]
                    ], [[
                            8,
                            'alt',
                            0
                        ]], null, null, null, null)),
                    (l()(), e['ɵeld'](122, 0, null, null, 2, 'div', [[
                            'class',
                            'col d-flex justify-content-end flex-column'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](123, 0, null, null, 1, 'span', [[
                            'class',
                            'text-dark text-hover-primary mb-1 font-size-lg text-truncate'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵted'](124, null, [
                        '',
                        ' '
                    ])),
                    (l()(), e['ɵeld'](125, 0, null, null, 5, 'div', [[
                            'class',
                            'row mt-5'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](126, 0, null, null, 4, 'div', [[
                            'class',
                            'col-12'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵand'](16777216, null, null, 1, null, L)),
                    e['ɵdid'](128, 16384, null, 0, h.NgIf, [
                        e.ViewContainerRef,
                        e.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    (l()(), e['ɵand'](16777216, null, null, 1, null, j)),
                    e['ɵdid'](130, 16384, null, 0, h.NgIf, [
                        e.ViewContainerRef,
                        e.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null)
                ], function (l, n) {
                    var t = n.component;
                    l(n, 2, 0, t.isLoadingComponent);
                    var e = l(n, 22, 0, !t.isActive);
                    l(n, 21, 0, 'wizard-step', e), l(n, 42, 0, 0 === t.step && t.pdfSrc);
                    var u = l(n, 45, 0, !t.isActive);
                    l(n, 44, 0, 'd-flex justify-content-end border-top pt-10', u);
                    var i = l(n, 49, 0, !t.isActive);
                    l(n, 48, 0, 'btn btn-primary font-weight-bold text-uppercase px-9 py-4', i);
                    var a = l(n, 54, 0, !t.isActive);
                    l(n, 53, 0, 'pb-5', a), l(n, 60, 0, t._validations.entityForm()), l(n, 63, 0, 'vertical'), l(n, 66, 0, t._validations.entityForm(), 'filecer', 'DOCUMENT.SIGN.CER', 'DOCUMENT.SIGN.UPLOADCER', 'application/x-x509-ca-cert', '.cer'), l(n, 70, 0, t._validations.entityForm(), 'filekey', 'DOCUMENT.SIGN.KEY', 'DOCUMENT.SIGN.UPLOADKEY', '.key', '.key'), l(n, 81, 0, 'passwordfiel'), l(n, 87, 0, t.isVisiblePassword ? 'eye' : 'eye-invisible', 'outline');
                    var o = l(n, 91, 0, !t.isActive);
                    l(n, 90, 0, 'd-flex justify-content-between border-top pt-10', o), l(n, 128, 0, t.signers.length > 0), l(n, 130, 0, t.observers.length > 0);
                }, function (l, n) {
                    var t = n.component;
                    l(n, 8, 0, e['ɵunv'](n, 8, 0, e['ɵnov'](n, 9).transform('DOCUMENT.SIGN.SIGNDOCU'))), l(n, 18, 0, e['ɵunv'](n, 18, 0, e['ɵnov'](n, 19).transform('DOCUMENT.CREATE.WIZARD.KEPP1'))), l(n, 26, 0, e['ɵunv'](n, 26, 0, e['ɵnov'](n, 27).transform('DOCUMENT.CREATE.WIZARD.KEPP2'))), l(n, 30, 0, e['ɵnov'](n, 34).ngClassUntouched, e['ɵnov'](n, 34).ngClassTouched, e['ɵnov'](n, 34).ngClassPristine, e['ɵnov'](n, 34).ngClassDirty, e['ɵnov'](n, 34).ngClassValid, e['ɵnov'](n, 34).ngClassInvalid, e['ɵnov'](n, 34).ngClassPending), l(n, 37, 0, e['ɵunv'](n, 37, 0, e['ɵnov'](n, 38).transform('DOCUMENT.CREATE.WIZARD.KEEP1DESCRIPTION'))), l(n, 50, 0, e['ɵunv'](n, 50, 0, e['ɵnov'](n, 51).transform('DOCUMENT.SIGN.NEXT'))), l(n, 56, 0, e['ɵunv'](n, 56, 0, e['ɵnov'](n, 57).transform('DOCUMENT.SIGN.INSSIGN'))), l(n, 58, 0, e['ɵnov'](n, 62).ngClassUntouched, e['ɵnov'](n, 62).ngClassTouched, e['ɵnov'](n, 62).ngClassPristine, e['ɵnov'](n, 62).ngClassDirty, e['ɵnov'](n, 62).ngClassValid, e['ɵnov'](n, 62).ngClassInvalid, e['ɵnov'](n, 62).ngClassPending, 'horizontal' === e['ɵnov'](n, 63).nzLayout, 'vertical' === e['ɵnov'](n, 63).nzLayout, 'inline' === e['ɵnov'](n, 63).nzLayout), l(n, 75, 0, e['ɵunv'](n, 75, 0, e['ɵnov'](n, 76).transform('DOCUMENT.SIGN.PASS'))), l(n, 78, 0, t.isVisiblePassword ? 'text' : 'password', e['ɵnov'](n, 83).ngClassUntouched, e['ɵnov'](n, 83).ngClassTouched, e['ɵnov'](n, 83).ngClassPristine, e['ɵnov'](n, 83).ngClassDirty, e['ɵnov'](n, 83).ngClassValid, e['ɵnov'](n, 83).ngClassInvalid, e['ɵnov'](n, 83).ngClassPending), l(n, 86, 0, !0), l(n, 94, 0, e['ɵunv'](n, 94, 0, e['ɵnov'](n, 95).transform('DOCUMENT.SIGN.BACK'))), l(n, 97, 0, !t._validations.entityForm().valid), l(n, 98, 0, e['ɵunv'](n, 98, 0, e['ɵnov'](n, 99).transform('DOCUMENT.SIGN.SIGN'))), l(n, 103, 0, e['ɵunv'](n, 103, 0, e['ɵnov'](n, 104).transform('DOCUMENT.SIGN.INFO'))), l(n, 108, 0, e['ɵinlineInterpolate'](1, '', t.document.owner_name, '')), l(n, 111, 0, t.document.name), l(n, 113, 0, t.document.description), l(n, 116, 0, e['ɵunv'](n, 116, 0, e['ɵnov'](n, 117).transform('DOCUMENT.SIGN.OWNER'))), l(n, 121, 0, e['ɵinlineInterpolate'](1, '', t.document.owner_name, '')), l(n, 124, 0, t.document.owner_name);
                });
            }
            function G(l) {
                return e['ɵvid'](0, [
                    (l()(), e['ɵeld'](0, 0, null, null, 2, 'ng-component', [], null, null, null, U, A)),
                    e['ɵprd'](512, null, x.a, N.a, [
                        M.f,
                        k.a
                    ]),
                    e['ɵdid'](2, 4440064, null, 0, T, [
                        E.a,
                        a.a,
                        a.r,
                        v.l,
                        x.a,
                        e.ChangeDetectorRef,
                        S.a
                    ], null, null)
                ], function (l, n) {
                    l(n, 2, 0);
                }, null);
            }
            var V = e['ɵccf']('ng-component', T, G, {}, {}, []), Z = t('yxt2'), K = t('q/nf');
            class W {
                constructor() {
                }
                ngOnInit() {
                    setTimeout(() => {
                        window.location.href = 'https://clegal.com.mx/firma-electronica';
                    }, 5000, this);
                }
            }
            var Y = e['ɵcrt']({
                encapsulation: 0,
                styles: [['']],
                data: {}
            });
            function B(l) {
                return e['ɵvid'](0, [
                    (l()(), e['ɵeld'](0, 0, null, null, 11, 'app-layout-auth', [], null, null, null, Z.b, Z.a)),
                    e['ɵdid'](1, 114688, null, 0, K.a, [], null, null),
                    (l()(), e['ɵeld'](2, 0, null, 0, 9, 'div', [
                        [
                            'class',
                            'row'
                        ],
                        [
                            'content',
                            ''
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](3, 0, null, null, 8, 'div', [[
                            'class',
                            'col-12'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](4, 0, null, null, 7, 'div', [[
                            'class',
                            'row'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](5, 0, null, null, 6, 'div', [[
                            'class',
                            'col'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](6, 0, null, null, 5, 'div', [[
                            'class',
                            'px-6 py-5'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](7, 0, null, null, 2, 'div', [[
                            'class',
                            'pb-13 pt-lg-0 pt-5'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](8, 0, null, null, 1, 'h3', [[
                            'class',
                            'font-weight-bolder text-dark font-size-h4 font-size-h1-lg text-justify'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵted'](-1, null, [' Una vez que el documento haya sido firmado por todas las partes, le haremos llegar una copia del mismo. '])),
                    (l()(), e['ɵeld'](10, 0, null, null, 1, 'div', [[
                            'class',
                            'd-block mt-5'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](11, 0, null, null, 0, 'img', [[
                            'src',
                            '../../../../../../assets/media/svg/custom/success_sign.svg'
                        ]], null, null, null, null, null))
                ], function (l, n) {
                    l(n, 1, 0);
                }, null);
            }
            function J(l) {
                return e['ɵvid'](0, [
                    (l()(), e['ɵeld'](0, 0, null, null, 1, 'ng-component', [], null, null, null, B, Y)),
                    e['ɵdid'](1, 114688, null, 0, W, [], null, null)
                ], function (l, n) {
                    l(n, 1, 0);
                }, null);
            }
            var q = e['ɵccf']('ng-component', W, J, {}, {}, []);
            class H {
                constructor() {
                }
                ngOnInit() {
                    setTimeout(() => {
                        window.location.href = 'https://clegal.com.mx/firma-electronica';
                    }, 10000, this);
                }
            }
            var Q = e['ɵcrt']({
                encapsulation: 0,
                styles: [['']],
                data: {}
            });
            function X(l) {
                return e['ɵvid'](0, [
                    (l()(), e['ɵeld'](0, 0, null, null, 40, 'app-layout-auth', [], null, null, null, Z.b, Z.a)),
                    e['ɵdid'](1, 114688, null, 0, K.a, [], null, null),
                    (l()(), e['ɵeld'](2, 0, null, 0, 38, 'div', [
                        [
                            'class',
                            'row'
                        ],
                        [
                            'content',
                            ''
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](3, 0, null, null, 37, 'div', [[
                            'class',
                            'col-12'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](4, 0, null, null, 32, 'div', [[
                            'class',
                            'row'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](5, 0, null, null, 31, 'div', [[
                            'class',
                            'col'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](6, 0, null, null, 30, 'div', [[
                            'class',
                            'px-6 py-5'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](7, 0, null, null, 2, 'div', [[
                            'class',
                            'pb-13 pt-lg-0 pt-5'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](8, 0, null, null, 1, 'h3', [[
                            'class',
                            'font-weight-bolder text-dark font-size-h4 font-size-h1-lg text-center'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵted'](-1, null, [' Lo sentimos, el documento ya no se encuentra disponible o ya ha sido firmado '])),
                    (l()(), e['ɵeld'](10, 0, null, null, 26, 'div', [[
                            'class',
                            'd-block mt-5'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](11, 0, null, null, 25, ':svg:svg', [
                        [
                            'data-name',
                            'Layer 1'
                        ],
                        [
                            'id',
                            'aea0ab56-7c2a-4cc8-af5a-ac1cebf18173'
                        ],
                        [
                            'viewBox',
                            '0 0 679.6657 650.59919'
                        ],
                        [
                            'xmlns',
                            'http://www.w3.org/2000/svg'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](12, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M930.83285,775.2996h-531a9.01016,9.01016,0,0,1-9-9v-327a9.01016,9.01016,0,0,1,9-9h531a9.01016,9.01016,0,0,1,9,9v327A9.01016,9.01016,0,0,1,930.83285,775.2996Zm-531-343a7.00818,7.00818,0,0,0-7,7v327a7.00818,7.00818,0,0,0,7,7h531a7.00818,7.00818,0,0,0,7-7v-327a7.00818,7.00818,0,0,0-7-7Z'
                        ],
                        [
                            'fill',
                            '#3f3d56'
                        ],
                        [
                            'transform',
                            'translate(-260.16715 -124.7004)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](13, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M869.5,711h-42a2.50263,2.50263,0,0,1-2.5-2.5v-22a2.50263,2.50263,0,0,1,2.5-2.5h30.25a1.5,1.5,0,0,1,0,3H829.5a1.50164,1.50164,0,0,0-1.5,1.5v18a1.50164,1.50164,0,0,0,1.5,1.5h38a1.50164,1.50164,0,0,0,1.5-1.5v-9.53516a1.5,1.5,0,0,1,3,0V708.5A2.50263,2.50263,0,0,1,869.5,711Z'
                        ],
                        [
                            'fill',
                            '#3f3d56'
                        ],
                        [
                            'transform',
                            'translate(-260.16715 -124.7004)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](14, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M795.33285,490.2996h-323a4.5,4.5,0,0,1,0-9h323a4.5,4.5,0,0,1,0,9Z'
                        ],
                        [
                            'fill',
                            '#ccc'
                        ],
                        [
                            'transform',
                            'translate(-260.16715 -124.7004)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](15, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M795.33285,527.2996h-323a4.5,4.5,0,0,1,0-9h323a4.5,4.5,0,0,1,0,9Z'
                        ],
                        [
                            'fill',
                            '#ccc'
                        ],
                        [
                            'transform',
                            'translate(-260.16715 -124.7004)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](16, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M795.33285,564.2996h-323a4.5,4.5,0,0,1,0-9h323a4.5,4.5,0,0,1,0,9Z'
                        ],
                        [
                            'fill',
                            '#ccc'
                        ],
                        [
                            'transform',
                            'translate(-260.16715 -124.7004)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](17, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M795.33285,601.2996h-323a4.5,4.5,0,0,1,0-9h323a4.5,4.5,0,0,1,0,9Z'
                        ],
                        [
                            'fill',
                            '#ccc'
                        ],
                        [
                            'transform',
                            'translate(-260.16715 -124.7004)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](18, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M795.33285,638.2996h-323a4.5,4.5,0,0,1,0-9h323a4.5,4.5,0,0,1,0,9Z'
                        ],
                        [
                            'fill',
                            '#ccc'
                        ],
                        [
                            'transform',
                            'translate(-260.16715 -124.7004)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](19, 0, null, null, 0, ':svg:circle', [
                        [
                            'cx',
                            '589.16558'
                        ],
                        [
                            'cy',
                            '361.09885'
                        ],
                        [
                            'fill',
                            '#3699FF'
                        ],
                        [
                            'r',
                            '13'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](20, 0, null, null, 0, ':svg:circle', [
                        [
                            'cx',
                            '589.16558'
                        ],
                        [
                            'cy',
                            '398.09885'
                        ],
                        [
                            'fill',
                            '#ff6584'
                        ],
                        [
                            'r',
                            '13'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](21, 0, null, null, 0, ':svg:circle', [
                        [
                            'cx',
                            '589.16558'
                        ],
                        [
                            'cy',
                            '435.09885'
                        ],
                        [
                            'fill',
                            '#3699FF'
                        ],
                        [
                            'r',
                            '13'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](22, 0, null, null, 0, ':svg:circle', [
                        [
                            'cx',
                            '589.16558'
                        ],
                        [
                            'cy',
                            '472.09885'
                        ],
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'r',
                            '13'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](23, 0, null, null, 0, ':svg:circle', [
                        [
                            'cx',
                            '589.16558'
                        ],
                        [
                            'cy',
                            '509.09885'
                        ],
                        [
                            'fill',
                            '#f2f2f2'
                        ],
                        [
                            'r',
                            '13'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](24, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M849,703.957a2.79654,2.79654,0,0,1-1.98389-.82031l-8.86963-8.86914a1.50065,1.50065,0,0,1,0-2.1211,1.53688,1.53688,0,0,1,2.12159,0l8.37841,8.37891a.51022.51022,0,0,0,.70655,0l27.87988-27.87891a1.53626,1.53626,0,0,1,2.12109,0,1.5,1.5,0,0,1-.00048,2.1211l-28.36914,28.36914A2.79849,2.79849,0,0,1,849,703.957Z'
                        ],
                        [
                            'fill',
                            '#3699FF'
                        ],
                        [
                            'transform',
                            'translate(-260.16715 -124.7004)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](25, 0, null, null, 0, ':svg:ellipse', [
                        [
                            'cx',
                            '588.83322'
                        ],
                        [
                            'cy',
                            '600.29925'
                        ],
                        [
                            'opacity',
                            '0.1'
                        ],
                        [
                            'rx',
                            '69'
                        ],
                        [
                            'ry',
                            '4'
                        ],
                        [
                            'style',
                            'isolation:isolate'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](26, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M339.92,370.62143H264.64765a4.48521,4.48521,0,0,1-4.4805-4.48049V326.71257a4.48521,4.48521,0,0,1,4.4805-4.48049h54.214a2.6883,2.6883,0,1,1,0,5.37659H268.232a2.69123,2.69123,0,0,0-2.68829,2.6883v32.25957a2.69123,2.69123,0,0,0,2.68829,2.6883h68.10355a2.69123,2.69123,0,0,0,2.68829-2.6883V345.46765a2.6883,2.6883,0,0,1,5.3766,0v20.67329A4.48521,4.48521,0,0,1,339.92,370.62143Z'
                        ],
                        [
                            'fill',
                            '#3f3d56'
                        ],
                        [
                            'transform',
                            'translate(-260.16715 -124.7004)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](27, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M303.17991,357.999a5.01186,5.01186,0,0,1-3.55551-1.47017l-15.89614-15.89526a2.68944,2.68944,0,0,1,0-3.80142,2.75438,2.75438,0,0,1,3.8023,0l15.01578,15.01667a.91441.91441,0,0,0,1.26627,0l49.96628-49.96454a2.75328,2.75328,0,0,1,3.80142,0,2.68836,2.68836,0,0,1-.00087,3.80142l-50.84313,50.84313A5.01539,5.01539,0,0,1,303.17991,357.999Z'
                        ],
                        [
                            'fill',
                            '#3699FF'
                        ],
                        [
                            'transform',
                            'translate(-260.16715 -124.7004)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](28, 0, null, null, 0, ':svg:rect', [
                        [
                            'fill',
                            '#2f2e41'
                        ],
                        [
                            'height',
                            '29'
                        ],
                        [
                            'rx',
                            '4'
                        ],
                        [
                            'transform',
                            'translate(636.74438 716.9758) rotate(-180)'
                        ],
                        [
                            'width',
                            '99'
                        ],
                        [
                            'x',
                            '398.95576'
                        ],
                        [
                            'y',
                            '406.3381'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](29, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M491.95577,405.33817h-138a5.99983,5.99983,0,0,0-6,6v95a6.00014,6.00014,0,0,0,6,6h17a6.00014,6.00014,0,0,0,6-6v-72h22v73a6.00014,6.00014,0,0,0,6,6h17a6.00014,6.00014,0,0,0,6-6v-73h64a6.00014,6.00014,0,0,0,6-6v-17A5.99983,5.99983,0,0,0,491.95577,405.33817Z'
                        ],
                        [
                            'fill',
                            '#2f2e41'
                        ],
                        [
                            'transform',
                            'translate(-260.16715 -124.7004)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](30, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M526.595,435.8983l-131.15172-2.76109a6,6,0,0,1-5.72306-7.33474L421.65248,286.002a6,6,0,0,1,5.84935-4.66393h34.34058A49.15467,49.15467,0,0,1,509.95605,320.43l22.63811,108.24129A6,6,0,0,1,526.595,435.8983Z'
                        ],
                        [
                            'fill',
                            '#2f2e41'
                        ],
                        [
                            'transform',
                            'translate(-260.16715 -124.7004)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](31, 0, null, null, 0, ':svg:circle', [
                        [
                            'cx',
                            '185.20828'
                        ],
                        [
                            'cy',
                            '90.65388'
                        ],
                        [
                            'fill',
                            '#3699FF'
                        ],
                        [
                            'r',
                            '53.51916'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](32, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M421.09526,186.53764c-6.2466-1.47341-12.99094-3.45575-17.4464-8.37388-3.79285-4.18673-5.57176-10.64807-2.21078-15.61164,3.069-4.53237,9.12254-6.19536,14.21769-7.04528,5.92227-.98789,12.00846-1.13216,17.56578-3.65269a18.17383,18.17383,0,0,0,6.93172-5.49957,47.27188,47.27188,0,0,0,4.386-7.54814,27.52679,27.52679,0,0,1,4.60234-7.06891,13.9316,13.9316,0,0,1,7.89442-3.85439c6.70456-1.019,13.06965,2.07943,18.34511,5.92718a79.66343,79.66343,0,0,1,13.80488,13.09993,86.63333,86.63333,0,0,1,18.47578,38.152c.39,1.88951,3.28239,1.08984,2.89284-.79752a89.46191,89.46191,0,0,0-16.86856-36.52353A86.52793,86.52793,0,0,0,479.579,133.28459c-5.43616-4.37922-11.71258-8.19574-18.86256-8.55739a19.43748,19.43748,0,0,0-9.58882,1.904,17.44612,17.44612,0,0,0-6.68162,6.22286c-3.36885,5.1093-4.994,11.71166-10.4291,15.16778-5.50526,3.50075-12.39816,3.53523-18.64323,4.5093-5.55466.86639-11.73875,2.69613-15.49907,7.157-4.15942,4.93428-4.003,11.65832-.89623,17.10023,3.45194,6.04659,9.86553,9.34642,16.30636,11.31371,1.654.50521,3.33012.93142,5.013,1.32838,1.87753.44286,2.67881-2.44909.79752-2.89284Z'
                        ],
                        [
                            'fill',
                            '#2f2e41'
                        ],
                        [
                            'transform',
                            'translate(-260.16715 -124.7004)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](33, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M451.158,233.22342c-3.30712-.09277-7.42236-.208-10.59033-2.52246a8.13215,8.13215,0,0,1-3.1997-6.07324,5.471,5.471,0,0,1,1.86035-4.49219c1.65478-1.39941,4.07226-1.72851,6.67822-.96093L443.20736,199.448l1.98145-.27148,3.17334,23.19043-1.65479-.75879c-1.91943-.88086-4.55176-1.32715-6.188.05469a3.51331,3.51331,0,0,0-1.15283,2.89453,6.14748,6.14748,0,0,0,2.38086,4.52832c2.46533,1.80078,5.74561,2.03418,9.46631,2.13769Z'
                        ],
                        [
                            'fill',
                            '#2f2e41'
                        ],
                        [
                            'transform',
                            'translate(-260.16715 -124.7004)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](34, 0, null, null, 0, ':svg:rect', [
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
                            '10.77148'
                        ],
                        [
                            'x',
                            '162.46941'
                        ],
                        [
                            'y',
                            '76.4488'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](35, 0, null, null, 0, ':svg:rect', [
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
                            '10.77148'
                        ],
                        [
                            'x',
                            '196.46941'
                        ],
                        [
                            'y',
                            '76.4488'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](36, 0, null, null, 0, ':svg:path', [
                        [
                            'd',
                            'M343.00521,383.57206a6.50835,6.50835,0,0,1-5.9248-3.80469l-6.11914-13.43164a6.4995,6.4995,0,0,1,3.2207-8.60938l111.94482-50.999a6.50821,6.50821,0,0,1,8.60987,3.2207l6.11914,13.43164a6.50876,6.50876,0,0,1-3.22022,8.61036l-111.94531,50.998A6.46753,6.46753,0,0,1,343.00521,383.57206Z'
                        ],
                        [
                            'fill',
                            '#3699FF'
                        ],
                        [
                            'transform',
                            'translate(-260.16715 -124.7004)'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](37, 0, null, null, 3, 'div', [[
                            'class',
                            'row'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](38, 0, null, null, 2, 'div', [[
                            'class',
                            'col d-flex align-items-end justify-content-end'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](39, 0, null, null, 1, 'button', [
                        [
                            'class',
                            'btn btn-light font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4'
                        ],
                        [
                            'id',
                            'kt_login_forgot_submit'
                        ],
                        [
                            'type',
                            'submit'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵted'](-1, null, [' Ir a iniciar sesión ']))
                ], function (l, n) {
                    l(n, 1, 0);
                }, null);
            }
            function $(l) {
                return e['ɵvid'](0, [
                    (l()(), e['ɵeld'](0, 0, null, null, 1, 'ng-component', [], null, null, null, X, Q)),
                    e['ɵdid'](1, 114688, null, 0, H, [], null, null)
                ], function (l, n) {
                    l(n, 1, 0);
                }, null);
            }
            var ll = e['ɵccf']('ng-component', H, $, {}, {}, []), nl = t('JD8I'), tl = t('9AJC'), el = t('QfCi'), ul = t('8WaK'), il = t('Ed4d'), al = t('JRKe'), ol = t('ypAQ'), dl = t('G0yt'), sl = t('1O3W'), rl = t('9gLZ'), cl = t('9b/N'), gl = t('NFMk');
            class pl {
            }
            var ml = t('ODyV'), fl = t('HeVh'), wl = t('SCoL'), Cl = t('tYkK'), vl = t('1z/I'), hl = t('7KAL'), Ml = t('PgQK'), zl = t('jQCg'), Ol = t('W0Pu'), Pl = t('W4B1'), _l = t('0CZq'), bl = t('Rgb0'), yl = t('Jp/u'), xl = t('GaVp'), Nl = t('YRt3'), kl = t('lAiz'), Rl = t('YEUz'), Dl = t('CYS+'), Il = t('px0D'), Tl = t('YdS3'), El = t('mW00'), Sl = t('jTf7'), Al = t('S/WK'), Fl = t('oBm0'), Ll = t('RVNi'), jl = t('gaRz'), Ul = t('vZsH'), Gl = t('tM0M'), Vl = t('fb/r'), Zl = t('z+yo'), Kl = t('JXeA'), Wl = t('51fn'), Yl = t('pKmL'), Bl = t('s939'), Jl = t('F3IN'), ql = t('Tczp'), Hl = t('kFOB'), Ql = t('lu0K'), Xl = e['ɵcmf'](u, [], function (l) {
                    return e['ɵmod']([
                        e['ɵmpd'](512, e.ComponentFactoryResolver, e['ɵCodegenComponentFactoryResolver'], [
                            [
                                8,
                                [
                                    i.a,
                                    c,
                                    V,
                                    q,
                                    ll,
                                    nl.a,
                                    tl.h,
                                    tl.i,
                                    el.a,
                                    ul.a,
                                    il.b,
                                    il.a,
                                    al.a,
                                    ol.a
                                ]
                            ],
                            [
                                3,
                                e.ComponentFactoryResolver
                            ],
                            e.NgModuleRef
                        ]),
                        e['ɵmpd'](4608, h.NgLocalization, h.NgLocaleLocalization, [e.LOCALE_ID]),
                        e['ɵmpd'](4608, M.z, M.z, []),
                        e['ɵmpd'](4608, M.f, M.f, []),
                        e['ɵmpd'](4608, dl.E, dl.E, [
                            e.ComponentFactoryResolver,
                            e.Injector,
                            dl.vb,
                            dl.F
                        ]),
                        e['ɵmpd'](4608, sl.d, sl.d, [
                            sl.l,
                            sl.f,
                            e.ComponentFactoryResolver,
                            sl.j,
                            sl.g,
                            e.Injector,
                            e.NgZone,
                            h.DOCUMENT,
                            rl.b,
                            h.Location,
                            sl.i
                        ]),
                        e['ɵmpd'](5120, sl.m, sl.n, [sl.d]),
                        e['ɵmpd'](4608, cl.c, cl.c, []),
                        e['ɵmpd'](135680, gl.k, gl.k, [
                            sl.d,
                            e.Injector,
                            O.a,
                            [
                                3,
                                gl.k
                            ]
                        ]),
                        e['ɵmpd'](1073742336, h.CommonModule, h.CommonModule, []),
                        e['ɵmpd'](1073742336, a.v, a.v, [
                            [
                                2,
                                a.B
                            ],
                            [
                                2,
                                a.r
                            ]
                        ]),
                        e['ɵmpd'](1073742336, pl, pl, []),
                        e['ɵmpd'](1073742336, M.y, M.y, []),
                        e['ɵmpd'](1073742336, M.l, M.l, []),
                        e['ɵmpd'](1073742336, M.v, M.v, []),
                        e['ɵmpd'](1073742336, ml.a, ml.a, []),
                        e['ɵmpd'](1073742336, dl.G, dl.G, []),
                        e['ɵmpd'](1073742336, fl.a, fl.a, []),
                        e['ɵmpd'](1073742336, wl.b, wl.b, []),
                        e['ɵmpd'](1073742336, Cl.b, Cl.b, []),
                        e['ɵmpd'](1073742336, b.b, b.b, []),
                        e['ɵmpd'](1073742336, rl.a, rl.a, []),
                        e['ɵmpd'](1073742336, vl.e, vl.e, []),
                        e['ɵmpd'](1073742336, hl.c, hl.c, []),
                        e['ɵmpd'](1073742336, hl.g, hl.g, []),
                        e['ɵmpd'](1073742336, sl.h, sl.h, []),
                        e['ɵmpd'](1073742336, Ml.a, Ml.a, []),
                        e['ɵmpd'](1073742336, zl.c, zl.c, []),
                        e['ɵmpd'](1073742336, Ol.b, Ol.b, []),
                        e['ɵmpd'](1073742336, Pl.b, Pl.b, []),
                        e['ɵmpd'](1073742336, z.e, z.e, []),
                        e['ɵmpd'](1073742336, _l.d, _l.d, []),
                        e['ɵmpd'](1073742336, _l.c, _l.c, []),
                        e['ɵmpd'](1073742336, bl.c, bl.c, []),
                        e['ɵmpd'](1073742336, yl.c, yl.c, []),
                        e['ɵmpd'](1073742336, y.b, y.b, []),
                        e['ɵmpd'](1073742336, xl.c, xl.c, []),
                        e['ɵmpd'](1073742336, Nl.a, Nl.a, []),
                        e['ɵmpd'](1073742336, kl.a, kl.a, []),
                        e['ɵmpd'](1073742336, kl.b, kl.b, []),
                        e['ɵmpd'](1073742336, cl.d, cl.d, []),
                        e['ɵmpd'](1073742336, Rl.a, Rl.a, [Rl.f]),
                        e['ɵmpd'](1073742336, Dl.c, Dl.c, []),
                        e['ɵmpd'](1073742336, Il.d, Il.d, []),
                        e['ɵmpd'](1073742336, Tl.a, Tl.a, []),
                        e['ɵmpd'](1073742336, El.d, El.d, []),
                        e['ɵmpd'](1073742336, Sl.j, Sl.j, []),
                        e['ɵmpd'](1073742336, Al.a, Al.a, []),
                        e['ɵmpd'](1073742336, gl.i, gl.i, []),
                        e['ɵmpd'](1073742336, Fl.a, Fl.a, []),
                        e['ɵmpd'](1073742336, Ll.b, Ll.b, []),
                        e['ɵmpd'](1073742336, jl.d, jl.d, []),
                        e['ɵmpd'](1073742336, Ul.d, Ul.d, []),
                        e['ɵmpd'](1073742336, v.i, v.i, []),
                        e['ɵmpd'](1073742336, Gl.a, Gl.a, []),
                        e['ɵmpd'](1073742336, Vl.b, Vl.b, []),
                        e['ɵmpd'](1073742336, Zl.a, Zl.a, []),
                        e['ɵmpd'](1073742336, Kl.h, Kl.h, []),
                        e['ɵmpd'](1073742336, Kl.f, Kl.f, []),
                        e['ɵmpd'](1073742336, Wl.a, Wl.a, []),
                        e['ɵmpd'](1073742336, Yl.a, Yl.a, []),
                        e['ɵmpd'](1073742336, p.b, p.b, []),
                        e['ɵmpd'](1073742336, Bl.a, Bl.a, []),
                        e['ɵmpd'](1073742336, Jl.InlineSVGModule, Jl.InlineSVGModule, []),
                        e['ɵmpd'](1073742336, ql.b, ql.b, []),
                        e['ɵmpd'](1073742336, dl.z, dl.z, []),
                        e['ɵmpd'](1073742336, Hl.a, Hl.a, []),
                        e['ɵmpd'](1073742336, u, u, []),
                        e['ɵmpd'](1024, a.m, function () {
                            return [
                                [{
                                        path: '',
                                        component: o,
                                        children: [
                                            {
                                                path: 'client-firm/:code',
                                                component: T
                                            },
                                            {
                                                path: 'signature/success',
                                                component: W
                                            },
                                            {
                                                path: 'document/notfound',
                                                component: H
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
                                    }],
                                [
                                    {
                                        path: 'client/:id',
                                        component: Ql.a
                                    },
                                    {
                                        path: 'client/:id/:view',
                                        component: Ql.a
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
                            ];
                        }, [])
                    ]);
                });
        },
        'q/nf': function (l, n, t) {
            'use strict';
            t.d(n, 'a', function () {
                return e;
            });
            class e {
                constructor() {
                }
                ngOnInit() {
                }
            }
        },
        yxt2: function (l, n, t) {
            'use strict';
            t.d(n, 'a', function () {
                return u;
            }), t.d(n, 'b', function () {
                return i;
            });
            var e = t('8Y7J'), u = (t('q/nf'), e['ɵcrt']({
                    encapsulation: 0,
                    styles: [['.login.login-1[_ngcontent-%COMP%]   .login-aside[_ngcontent-%COMP%]   .aside-img[_ngcontent-%COMP%]{min-height:450px;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.login.login-1[_ngcontent-%COMP%]   .login-forgot[_ngcontent-%COMP%], .login.login-1[_ngcontent-%COMP%]   .login-signin[_ngcontent-%COMP%], .login.login-1[_ngcontent-%COMP%]   .login-signup[_ngcontent-%COMP%], .login.login-1.login-signin-on[_ngcontent-%COMP%]   .login-signup[_ngcontent-%COMP%]{display:none}.login.login-1.login-signin-on[_ngcontent-%COMP%]   .login-signin[_ngcontent-%COMP%]{display:block}.login.login-1.login-signin-on[_ngcontent-%COMP%]   .login-forgot[_ngcontent-%COMP%]{display:none}.login.login-1.login-signup-on[_ngcontent-%COMP%]   .login-signup[_ngcontent-%COMP%]{display:block}.login.login-1.login-forgot-on[_ngcontent-%COMP%]   .login-signin[_ngcontent-%COMP%], .login.login-1.login-forgot-on[_ngcontent-%COMP%]   .login-signup[_ngcontent-%COMP%], .login.login-1.login-signup-on[_ngcontent-%COMP%]   .login-forgot[_ngcontent-%COMP%], .login.login-1.login-signup-on[_ngcontent-%COMP%]   .login-signin[_ngcontent-%COMP%]{display:none}.login.login-1.login-forgot-on[_ngcontent-%COMP%]   .login-forgot[_ngcontent-%COMP%]{display:block}@media (min-width:992px){.login.login-1[_ngcontent-%COMP%]{max-height:100vh}.login.login-1[_ngcontent-%COMP%]   .login-aside[_ngcontent-%COMP%]{width:100%;max-width:45vw}.login.login-1[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]{position:relative;width:100%;max-width:55vw;display:flex;align-items:center;justify-content:center}.login.login-1[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{width:500px;max-width:1000px}}@media (min-width:992px) and (max-width:1399.98px){.login.login-1[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.login.login-1[_ngcontent-%COMP%]   .login-aside[_ngcontent-%COMP%]{width:100%;max-width:450px}}@media (max-width:991.98px){.login.login-1[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.login.login-1[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%;max-width:400px}}@media (max-width:575.98px){.login.login-1[_ngcontent-%COMP%]   .aside-img[_ngcontent-%COMP%]{min-height:300px!important;background-size:400px}.login.login-1[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.login.login-1[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%;max-width:100%}}[_nghost-%COMP%]{height:100%}.bg-login-image[_ngcontent-%COMP%]{position:absolute;height:100%;width:100%;-o-object-fit:cover;object-fit:cover;z-index:0;top:0}']],
                    data: {}
                }));
            function i(l) {
                return e['ɵvid'](0, [
                    (l()(), e['ɵeld'](0, 0, null, null, 9, 'div', [
                        [
                            'class',
                            'login login-1 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white h-100'
                        ],
                        [
                            'id',
                            'kt_login'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](1, 0, null, null, 1, 'div', [[
                            'class',
                            'login-aside bgi-position-x-center'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](2, 0, null, null, 0, 'img', [
                        [
                            'class',
                            'aside-img'
                        ],
                        [
                            'src',
                            '../../../../assets/media/bg/bg-image-login.svg'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](3, 0, null, null, 6, 'div', [[
                            'class',
                            'login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden '
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](4, 0, null, null, 0, 'img', [
                        [
                            'class',
                            'bg-login-image'
                        ],
                        [
                            'src',
                            '../../../../assets/media/bg/bg-page_2.jpg'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](5, 0, null, null, 1, 'div', [
                        [
                            'class',
                            'text-center pt-14 pb-14'
                        ],
                        [
                            'style',
                            'z-index: 1;'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](6, 0, null, null, 0, 'img', [
                        [
                            'src',
                            '../../../../../../assets/media/logos/logo.png'
                        ],
                        [
                            'width',
                            '325px'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](7, 0, null, null, 2, 'div', [[
                            'class',
                            'd-flex flex-column-fluid'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](8, 0, null, null, 1, 'div', [
                        [
                            'class',
                            'login-form login-signin'
                        ],
                        [
                            'style',
                            'z-index: 1;'
                        ]
                    ], null, null, null, null, null)),
                    e['ɵncd'](null, 0)
                ], null, null);
            }
        }
    }
]);