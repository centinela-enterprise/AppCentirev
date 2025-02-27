(window.webpackJsonp = window.webpackJsonp || []).push([
    [40],
    {
        mhqm: function (l, t, n) {
            'use strict';
            n.r(t), n.d(t, 'DashboardModuleNgFactory', function () {
                return Yl;
            });
            var e = n('8Y7J');
            class s {
            }
            var o = n('pMnS'), a = n('ypAQ'), i = n('9AJC'), r = n('QfCi'), u = n('8WaK'), c = n('Ed4d'), h = n('JRKe'), d = n('JRuF'), p = n('Tczp');
            class m {
                constructor(l, t, n) {
                    this.layout = l, this.DashServices = t, this.changeDetectorRef = n, this.chartOptions = {}, this.colorsGrayGray100 = this.layout.getProp('js.colors.gray.gray100'), this.colorsGrayGray700 = this.layout.getProp('js.colors.gray.gray700'), this.colorsThemeBaseSuccess = this.layout.getProp('js.colors.theme.base.success'), this.colorsThemeLightSuccess = this.layout.getProp('js.colors.theme.light.success'), this.fontFamily = this.layout.getProp('js.fontFamily');
                }
                ngOnInit() {
                    this.plan = 0, this.size = 0, this.chartOptions = this.getChartOptions(), this.DashServices.getStorage().subscribe(l => {
                        this.plan = l.plan, this.size = l.size, this.chartOptions = this.getChartOptions(), this.changeDetectorRef.markForCheck();
                    });
                }
                getChartOptions() {
                    return {
                        series: [this.size],
                        chart: {
                            type: 'radialBar',
                            height: 200
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    margin: 0,
                                    size: '65%'
                                },
                                dataLabels: {
                                    showOn: 'always',
                                    name: {
                                        show: !1,
                                        fontWeight: '700'
                                    },
                                    value: {
                                        color: this.colorsGrayGray700,
                                        fontSize: '30px',
                                        fontWeight: '700',
                                        offsetY: 12,
                                        show: !0
                                    }
                                },
                                track: {
                                    background: this.colorsThemeLightSuccess,
                                    strokeWidth: '100%'
                                }
                            }
                        },
                        colors: [this.colorsThemeBaseSuccess],
                        stroke: { lineCap: 'round' },
                        labels: ['Progress'],
                        legend: {},
                        dataLabels: {},
                        fill: {},
                        xaxis: {},
                        yaxis: {},
                        states: {},
                        tooltip: {},
                        markers: {}
                    };
                }
            }
            var y = n('l0JT'), g = n('AytR'), f = n('IheW');
            let v = (() => {
                class l {
                    constructor(l) {
                        this._httpClient = l, this.urlBase = g.a.urlBase;
                    }
                    getData() {
                        return this._httpClient.get(this.urlBase + 'dashboard/document/month');
                    }
                    getMontSignatureData() {
                        return this._httpClient.get(this.urlBase + 'dashboard/document/monthSingnature');
                    }
                    getSales() {
                        return this._httpClient.get(this.urlBase + 'sales/month');
                    }
                    getEmploye() {
                        return this._httpClient.get(this.urlBase + 'company/users');
                    }
                    getStorage() {
                        return this._httpClient.get(this.urlBase + 'storage');
                    }
                    getStatus() {
                        return this._httpClient.get(this.urlBase + 'dashboard/status');
                    }
                    getEmployeGrafic() {
                        return this._httpClient.get(this.urlBase + 'company/users/count');
                    }
                }
                return l.ɵprov = e['ɵɵdefineInjectable']({
                    factory: function () {
                        return new l(e['ɵɵinject'](f.HttpClient));
                    },
                    token: l,
                    providedIn: 'root'
                }), l;
            })();
            var b = e['ɵcrt']({
                encapsulation: 2,
                styles: [],
                data: {}
            });
            function x(l) {
                return e['ɵvid'](0, [
                    (l()(), e['ɵeld'](0, 0, null, null, 10, 'div', [
                        [
                            'class',
                            'card card-custom card-stretch gutter-b'
                        ],
                        [
                            'style',
                            'height: 250px'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](1, 0, null, null, 4, 'div', [[
                            'class',
                            'card-header border-0 pt-5'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](2, 0, null, null, 2, 'h3', [[
                            'class',
                            'card-title font-weight-bolder'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](3, 0, null, null, 1, 'a', [
                        [
                            'href',
                            '/settings/users-storages'
                        ],
                        [
                            'routerLinkActive',
                            'active'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵted'](4, null, [
                        'Plan ',
                        ' GB.'
                    ])),
                    (l()(), e['ɵeld'](5, 0, null, null, 0, 'div', [[
                            'class',
                            'card-toolbar'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](6, 0, null, null, 4, 'div', [[
                            'class',
                            'card-body d-flex flex-column'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](7, 0, null, null, 3, 'div', [[
                            'class',
                            'flex-grow-1'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](8, 0, null, null, 2, 'div', [
                        [
                            'id',
                            'kt_mixed_widget_14_chart'
                        ],
                        [
                            'style',
                            'height: 70px;'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](9, 0, null, null, 1, 'apx-chart', [], null, null, null, d.b, d.a)),
                    e['ɵdid'](10, 770048, null, 0, p.a, [], {
                        chart: [
                            0,
                            'chart'
                        ],
                        colors: [
                            1,
                            'colors'
                        ],
                        dataLabels: [
                            2,
                            'dataLabels'
                        ],
                        series: [
                            3,
                            'series'
                        ],
                        stroke: [
                            4,
                            'stroke'
                        ],
                        legend: [
                            5,
                            'legend'
                        ],
                        markers: [
                            6,
                            'markers'
                        ],
                        fill: [
                            7,
                            'fill'
                        ],
                        tooltip: [
                            8,
                            'tooltip'
                        ],
                        plotOptions: [
                            9,
                            'plotOptions'
                        ],
                        xaxis: [
                            10,
                            'xaxis'
                        ],
                        yaxis: [
                            11,
                            'yaxis'
                        ],
                        states: [
                            12,
                            'states'
                        ]
                    }, null)
                ], function (l, t) {
                    var n = t.component;
                    l(t, 10, 1, [
                        n.chartOptions.chart,
                        n.chartOptions.colors,
                        n.chartOptions.dataLabels,
                        n.chartOptions.series,
                        n.chartOptions.stroke,
                        n.chartOptions.legend,
                        n.chartOptions.markers,
                        n.chartOptions.fill,
                        n.chartOptions.tooltip,
                        n.chartOptions.plotOptions,
                        n.chartOptions.xaxis,
                        n.chartOptions.yaxis,
                        n.chartOptions.states
                    ]);
                }, function (l, t) {
                    l(t, 4, 0, t.component.plan);
                });
            }
            class S {
                constructor(l, t, n) {
                    this.layout = l, this.DashServices = t, this.changeDetectorRef = n, this.chartOptions = {}, this.colorsGrayGray100 = this.layout.getProp('js.colors.gray.gray100'), this.colorsGrayGray700 = this.layout.getProp('js.colors.gray.gray700'), this.colorsThemeBaseSuccess = this.layout.getProp('js.colors.theme.base.success'), this.colorsThemeLightSuccess = this.layout.getProp('js.colors.theme.light.success'), this.fontFamily = this.layout.getProp('js.fontFamily');
                }
                ngOnInit() {
                    this.plan = 0, this.size = 0, this.chartOptions = this.getChartOptions(), this.DashServices.getStatus().subscribe(l => {
                        this.plan = l.plan, this.size = l.size, this.chartOptions = this.getChartOptions(), this.changeDetectorRef.markForCheck();
                    });
                }
                getChartOptions() {
                    return {
                        series: [this.size],
                        chart: {
                            type: 'radialBar',
                            height: 200
                        },
                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    margin: 0,
                                    size: '65%'
                                },
                                dataLabels: {
                                    showOn: 'always',
                                    name: {
                                        show: !1,
                                        fontWeight: '700'
                                    },
                                    value: {
                                        color: this.colorsGrayGray700,
                                        fontSize: '30px',
                                        fontWeight: '700',
                                        offsetY: 12,
                                        show: !0
                                    }
                                },
                                track: {
                                    background: this.colorsThemeLightSuccess,
                                    strokeWidth: '100%'
                                }
                            }
                        },
                        colors: [this.colorsThemeBaseSuccess],
                        stroke: { lineCap: 'round' },
                        labels: ['Progress'],
                        legend: {},
                        dataLabels: {},
                        fill: {},
                        xaxis: {},
                        yaxis: {},
                        states: {},
                        tooltip: {},
                        markers: {}
                    };
                }
            }
            var O = e['ɵcrt']({
                encapsulation: 2,
                styles: [],
                data: {}
            });
            function G(l) {
                return e['ɵvid'](0, [
                    (l()(), e['ɵeld'](0, 0, null, null, 10, 'div', [
                        [
                            'class',
                            'card card-custom card-stretch gutter-b'
                        ],
                        [
                            'style',
                            'height: 200px;'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](1, 0, null, null, 4, 'div', [[
                            'class',
                            'card-header border-0 pt-5'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](2, 0, null, null, 2, 'h3', [[
                            'class',
                            'card-title font-weight-bolder'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](3, 0, null, null, 1, 'a', [
                        [
                            'href',
                            '/document/'
                        ],
                        [
                            'routerLinkActive',
                            'active'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵted'](-1, null, ['% Documentos Firmados.'])),
                    (l()(), e['ɵeld'](5, 0, null, null, 0, 'div', [[
                            'class',
                            'card-toolbar'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](6, 0, null, null, 4, 'div', [[
                            'class',
                            'card-body d-flex flex-column'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](7, 0, null, null, 3, 'div', [[
                            'class',
                            'flex-grow-1'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](8, 0, null, null, 2, 'div', [
                        [
                            'id',
                            'kt_mixed_widget_15_chart'
                        ],
                        [
                            'style',
                            'height: \'100px\';'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](9, 0, null, null, 1, 'apx-chart', [], null, null, null, d.b, d.a)),
                    e['ɵdid'](10, 770048, null, 0, p.a, [], {
                        chart: [
                            0,
                            'chart'
                        ],
                        colors: [
                            1,
                            'colors'
                        ],
                        dataLabels: [
                            2,
                            'dataLabels'
                        ],
                        series: [
                            3,
                            'series'
                        ],
                        stroke: [
                            4,
                            'stroke'
                        ],
                        legend: [
                            5,
                            'legend'
                        ],
                        markers: [
                            6,
                            'markers'
                        ],
                        fill: [
                            7,
                            'fill'
                        ],
                        tooltip: [
                            8,
                            'tooltip'
                        ],
                        plotOptions: [
                            9,
                            'plotOptions'
                        ],
                        xaxis: [
                            10,
                            'xaxis'
                        ],
                        yaxis: [
                            11,
                            'yaxis'
                        ],
                        states: [
                            12,
                            'states'
                        ]
                    }, null)
                ], function (l, t) {
                    var n = t.component;
                    l(t, 10, 1, [
                        n.chartOptions.chart,
                        n.chartOptions.colors,
                        n.chartOptions.dataLabels,
                        n.chartOptions.series,
                        n.chartOptions.stroke,
                        n.chartOptions.legend,
                        n.chartOptions.markers,
                        n.chartOptions.fill,
                        n.chartOptions.tooltip,
                        n.chartOptions.plotOptions,
                        n.chartOptions.xaxis,
                        n.chartOptions.yaxis,
                        n.chartOptions.states
                    ]);
                }, null);
            }
            var C = n('jyex'), w = n('SVse'), k = n('W2UE'), P = n('I2up'), R = n('aIpl');
            class F {
                constructor(l, t, n) {
                    this.layout = l, this.DashServices = t, this.changeDetectorRef = n, this.chartOptions = {}, this.fontFamily = '', this.colorsGrayGray500 = '', this.colorsGrayGray200 = '', this.colorsGrayGray300 = '', this.colorsThemeBaseDanger = '', this.colorsThemeBasePrimary = '', this.colorsThemeLightPrimary = '', this.colorsThemeBaseSuccess = '', this.colorsThemeLightSuccess = '', this.fontFamily = this.layout.getProp('js.fontFamily'), this.colorsGrayGray500 = this.layout.getProp('js.colors.gray.gray500'), this.colorsGrayGray200 = this.layout.getProp('js.colors.gray.gray200'), this.colorsGrayGray300 = this.layout.getProp('js.colors.gray.gray300'), this.colorsThemeBaseDanger = this.layout.getProp('js.colors.theme.base.danger'), this.colorsThemeBasePrimary = this.layout.getProp('js.colors.theme.base.primary'), this.colorsThemeLightPrimary = this.layout.getProp('js.colors.theme.light.primary'), this.colorsThemeBaseSuccess = this.layout.getProp('js.colors.theme.base.success'), this.colorsThemeLightSuccess = this.layout.getProp('js.colors.theme.light.success');
                    
                }
                ngOnInit() {

                    this.series = [], this.month = [], this.chartOptions = this.getChartOptions(), this.DashServices.getData().subscribe(l => {
                        this.series = [...l.series], this.month = [...l.month], this.chartOptions = this.getChartOptions(), this.Total = l.Total, this.changeDetectorRef.markForCheck();
                    });
                }
                getChartOptions() {
                    return {
                        series: [{
                                name: 'Documentos Creados',
                                data: this.series
                            }],
                        chart: {
                            type: 'area',
                            height: 150,
                            toolbar: { show: !1 },
                            zoom: { enabled: !1 },
                            sparkline: { enabled: !0 }
                        },
                        plotOptions: {},
                        legend: { show: !1 },
                        dataLabels: { enabled: !1 },
                        fill: {
                            type: 'solid',
                            opacity: 1
                        },
                        stroke: {
                            curve: 'smooth',
                            show: !0,
                            width: 3,
                            colors: [this.colorsThemeBaseSuccess]
                        },
                        xaxis: {
                            categories: this.month,
                            axisBorder: { show: !0 },
                            axisTicks: { show: !1 },
                            labels: {
                                show: !1,
                                style: {
                                    colors: this.colorsGrayGray500,
                                    fontSize: '12px',
                                    fontFamily: this.fontFamily
                                }
                            },
                            crosshairs: {
                                show: !1,
                                position: 'front',
                                stroke: {
                                    color: this.colorsGrayGray300,
                                    width: 1,
                                    dashArray: 3
                                }
                            },
                            tooltip: {
                                enabled: !0,
                                formatter: void 0,
                                offsetY: 0,
                                style: {
                                    fontSize: '12px',
                                    fontFamily: this.fontFamily
                                }
                            }
                        },
                        yaxis: {
                            labels: {
                                show: !1,
                                style: {
                                    colors: this.colorsGrayGray500,
                                    fontSize: '12px',
                                    fontFamily: this.fontFamily
                                }
                            }
                        },
                        states: {
                            normal: {
                                filter: {
                                    type: 'none',
                                    value: 0
                                }
                            },
                            hover: {
                                filter: {
                                    type: 'none',
                                    value: 0
                                }
                            },
                            active: {
                                allowMultipleDataPointsSelection: !1,
                                filter: {
                                    type: 'none',
                                    value: 0
                                }
                            }
                        },
                        tooltip: {
                            style: {
                                fontSize: '12px',
                                fontFamily: this.fontFamily
                            },
                            y: {
                                formatter: function (l) {
                                    return l;
                                }
                            }
                        },
                        colors: [this.colorsThemeLightSuccess],
                        markers: {
                            colors: this.colorsThemeLightSuccess,
                            strokeColor: [this.colorsThemeBaseSuccess],
                            strokeWidth: 3
                        }
                    };
                }
            }
            var D = e['ɵcrt']({
                encapsulation: 2,
                styles: [],
                data: {}
            });
            function L(l) {
                return e['ɵvid'](0, [
                    (l()(), e['ɵeld'](0, 0, null, null, 16, 'div', [[
                            'class',
                            'card card-custom card-stretch card-stretch-half gutter-b'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](1, 0, null, null, 15, 'div', [[
                            'class',
                            'card-body p-0'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](2, 0, null, null, 11, 'div', [[
                            'class',
                            'd-flex align-items-center justify-content-between card-spacer flex-grow-1'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](3, 0, null, null, 4, 'span', [[
                            'class',
                            'symbol symbol-50 symbol-light-success mr-2'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](4, 0, null, null, 3, 'span', [[
                            'class',
                            'symbol-label'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](5, 16777216, null, null, 2, 'span', [[
                            'class',
                            'svg-icon svg-icon-xl svg-icon-success'
                        ]], null, null, null, null, null)),
                    e['ɵprd'](512, null, C.SVGCacheService, C.SVGCacheService, [
                        [
                            2,
                            w.APP_BASE_HREF
                        ],
                        [
                            2,
                            w.PlatformLocation
                        ],
                        [
                            2,
                            k.InlineSVGConfig
                        ],
                        f.HttpClient,
                        f.HttpBackend,
                        e.RendererFactory2
                    ]),
                    e['ɵdid'](7, 737280, null, 0, P.InlineSVGDirective, [
                        e.ElementRef,
                        e.ViewContainerRef,
                        e.ComponentFactoryResolver,
                        C.SVGCacheService,
                        e.Renderer2,
                        R.InlineSVGService,
                        [
                            2,
                            k.InlineSVGConfig
                        ],
                        e.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ]
                    }, null),
                    (l()(), e['ɵeld'](8, 0, null, null, 5, 'div', [[
                            'class',
                            'd-flex flex-column text-right'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](9, 0, null, null, 1, 'span', [[
                            'class',
                            'text-dark-75 font-weight-bolder font-size-h3'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵted'](10, null, [
                        '',
                        ''
                    ])),
                    (l()(), e['ɵeld'](11, 0, null, null, 2, 'span', [[
                            'class',
                            'text-muted font-weight-bold mt-2'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](12, 0, null, null, 1, 'a', [
                        [
                            'href',
                            '/document/'
                        ],
                        [
                            'routerLinkActive',
                            'active'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵted'](-1, null, ['Documentos Creados.'])),
                    (l()(), e['ɵeld'](14, 0, null, null, 2, 'div', [
                        [
                            'class',
                            'card-rounded-bottom'
                        ],
                        [
                            'id',
                            'kt_stats_widget_11_chart'
                        ]
                    ], [[
                            4,
                            'height',
                            null
                        ]], null, null, null, null)),
                    (l()(), e['ɵeld'](15, 0, null, null, 1, 'apx-chart', [], null, null, null, d.b, d.a)),
                    e['ɵdid'](16, 770048, null, 0, p.a, [], {
                        chart: [
                            0,
                            'chart'
                        ],
                        colors: [
                            1,
                            'colors'
                        ],
                        dataLabels: [
                            2,
                            'dataLabels'
                        ],
                        series: [
                            3,
                            'series'
                        ],
                        stroke: [
                            4,
                            'stroke'
                        ],
                        legend: [
                            5,
                            'legend'
                        ],
                        markers: [
                            6,
                            'markers'
                        ],
                        fill: [
                            7,
                            'fill'
                        ],
                        tooltip: [
                            8,
                            'tooltip'
                        ],
                        plotOptions: [
                            9,
                            'plotOptions'
                        ],
                        xaxis: [
                            10,
                            'xaxis'
                        ],
                        yaxis: [
                            11,
                            'yaxis'
                        ],
                        states: [
                            12,
                            'states'
                        ]
                    }, null)
                ], function (l, t) {
                    var n = t.component;
                    l(t, 7, 0, './assets/media/svg/icons/Layout/Layout-4-blocks.svg'), l(t, 16, 1, [
                        n.chartOptions.chart,
                        n.chartOptions.colors,
                        n.chartOptions.dataLabels,
                        n.chartOptions.series,
                        n.chartOptions.stroke,
                        n.chartOptions.legend,
                        n.chartOptions.markers,
                        n.chartOptions.fill,
                        n.chartOptions.tooltip,
                        n.chartOptions.plotOptions,
                        n.chartOptions.xaxis,
                        n.chartOptions.yaxis,
                        n.chartOptions.states
                    ]);
                }, function (l, t) {
                    l(t, 10, 0, t.component.Total), l(t, 14, 0, '150px');
                });
            }
            class V {
                constructor(l, t, n) {
                    this.layout = l, this.DashServices = t, this.changeDetectorRef = n, this.chartOptions = {}, this.fontFamily = '', this.colorsGrayGray500 = '', this.colorsGrayGray200 = '', this.colorsGrayGray300 = '', this.colorsThemeBaseDanger = '', this.colorsThemeBasePrimary = '', this.colorsThemeLightPrimary = '', this.fontFamily = this.layout.getProp('js.fontFamily'), this.colorsGrayGray500 = this.layout.getProp('js.colors.gray.gray500'), this.colorsGrayGray200 = this.layout.getProp('js.colors.gray.gray200'), this.colorsGrayGray300 = this.layout.getProp('js.colors.gray.gray300'), this.colorsThemeBaseDanger = this.layout.getProp('js.colors.theme.base.danger'), this.colorsThemeBasePrimary = this.layout.getProp('js.colors.theme.base.primary'), this.colorsThemeLightPrimary = this.layout.getProp('js.colors.theme.light.primary');
                }
                ngOnInit() {
                    this.series = [], this.month = [], this.chartOptions = this.getChartOptions(), this.DashServices.getMontSignatureData().subscribe(l => {
                        this.series = [...l.series], this.month = [...l.month], this.chartOptions = this.getChartOptions(), this.Total = l.Total, this.changeDetectorRef.markForCheck();
                    });
                }
                getChartOptions() {
                    return {
                        series: [{
                                name: 'Documentos Firmados',
                                data: this.series
                            }],
                        chart: {
                            type: 'area',
                            height: 150,
                            toolbar: { show: !1 },
                            zoom: { enabled: !1 },
                            sparkline: { enabled: !0 }
                        },
                        plotOptions: {},
                        legend: { show: !1 },
                        dataLabels: { enabled: !1 },
                        fill: {
                            type: 'solid',
                            opacity: 1
                        },
                        stroke: {
                            curve: 'smooth',
                            show: !0,
                            width: 3,
                            colors: [this.colorsThemeBasePrimary]
                        },
                        xaxis: {
                            categories: this.month,
                            axisBorder: { show: !1 },
                            axisTicks: { show: !1 },
                            labels: {
                                show: !1,
                                style: {
                                    colors: this.colorsGrayGray500,
                                    fontSize: '12px',
                                    fontFamily: this.fontFamily
                                }
                            },
                            crosshairs: {
                                show: !1,
                                position: 'front',
                                stroke: {
                                    color: this.colorsGrayGray300,
                                    width: 1,
                                    dashArray: 3
                                }
                            },
                            tooltip: {
                                enabled: !0,
                                formatter: void 0,
                                offsetY: 0,
                                style: {
                                    fontSize: '12px',
                                    fontFamily: this.fontFamily
                                }
                            }
                        },
                        yaxis: {
                            min: 0,
                            max: 55,
                            labels: {
                                show: !1,
                                style: {
                                    colors: this.colorsGrayGray500,
                                    fontSize: '12px',
                                    fontFamily: this.fontFamily
                                }
                            }
                        },
                        states: {
                            normal: {
                                filter: {
                                    type: 'none',
                                    value: 0
                                }
                            },
                            hover: {
                                filter: {
                                    type: 'none',
                                    value: 0
                                }
                            },
                            active: {
                                allowMultipleDataPointsSelection: !1,
                                filter: {
                                    type: 'none',
                                    value: 0
                                }
                            }
                        },
                        tooltip: {
                            style: {
                                fontSize: '12px',
                                fontFamily: this.fontFamily
                            },
                            y: {
                                formatter: function (l) {
                                    return l;
                                }
                            },
                            marker: { show: !1 }
                        },
                        colors: [this.colorsThemeLightPrimary],
                        markers: {
                            colors: this.colorsThemeLightPrimary,
                            strokeColor: [this.colorsThemeBasePrimary],
                            strokeWidth: 3
                        }
                    };
                }
            }
            var T = e['ɵcrt']({
                encapsulation: 2,
                styles: [],
                data: {}
            });
            function I(l) {
                return e['ɵvid'](0, [
                    (l()(), e['ɵeld'](0, 0, null, null, 18, 'div', [[
                            'class',
                            'card card-custom card-stretch card-stretch-half gutter-b'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](1, 0, null, null, 17, 'div', [[
                            'class',
                            'card-body d-flex flex-column p-0'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](2, 0, null, null, 13, 'div', [[
                            'class',
                            'd-flex align-items-center justify-content-between card-spacer flex-grow-1'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](3, 0, null, null, 5, 'span', [[
                            'class',
                            'symbol symbol-50 symbol-light-primary mr-2'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](4, 0, null, null, 4, 'span', [[
                            'class',
                            'symbol-label'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](5, 0, null, null, 3, 'a', [[
                            'routerLink',
                            '/document'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](6, 16777216, null, null, 2, 'span', [[
                            'class',
                            'svg-icon svg-icon-xl svg-icon-primary'
                        ]], null, null, null, null, null)),
                    e['ɵprd'](512, null, C.SVGCacheService, C.SVGCacheService, [
                        [
                            2,
                            w.APP_BASE_HREF
                        ],
                        [
                            2,
                            w.PlatformLocation
                        ],
                        [
                            2,
                            k.InlineSVGConfig
                        ],
                        f.HttpClient,
                        f.HttpBackend,
                        e.RendererFactory2
                    ]),
                    e['ɵdid'](8, 737280, null, 0, P.InlineSVGDirective, [
                        e.ElementRef,
                        e.ViewContainerRef,
                        e.ComponentFactoryResolver,
                        C.SVGCacheService,
                        e.Renderer2,
                        R.InlineSVGService,
                        [
                            2,
                            k.InlineSVGConfig
                        ],
                        e.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ]
                    }, null),
                    (l()(), e['ɵeld'](9, 0, null, null, 6, 'div', [[
                            'class',
                            'd-flex flex-column text-right'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](10, 0, null, null, 2, 'span', [[
                            'class',
                            'text-dark-75 font-weight-bolder font-size-h3'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](11, 0, null, null, 1, 'a', [[
                            'routerLink',
                            '/document'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵted'](12, null, [
                        '',
                        ''
                    ])),
                    (l()(), e['ɵeld'](13, 0, null, null, 2, 'span', [[
                            'class',
                            'text-muted font-weight-bold mt-2'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](14, 0, null, null, 1, 'a', [
                        [
                            'href',
                            '/document/'
                        ],
                        [
                            'routerLinkActive',
                            'active'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵted'](-1, null, [' Firmas Aplicadas'])),
                    (l()(), e['ɵeld'](16, 0, null, null, 2, 'div', [
                        [
                            'class',
                            'card-rounded-bottom'
                        ],
                        [
                            'id',
                            'kt_stats_widget_12_chart'
                        ]
                    ], [[
                            4,
                            'height',
                            null
                        ]], null, null, null, null)),
                    (l()(), e['ɵeld'](17, 0, null, null, 1, 'apx-chart', [], null, null, null, d.b, d.a)),
                    e['ɵdid'](18, 770048, null, 0, p.a, [], {
                        chart: [
                            0,
                            'chart'
                        ],
                        colors: [
                            1,
                            'colors'
                        ],
                        dataLabels: [
                            2,
                            'dataLabels'
                        ],
                        series: [
                            3,
                            'series'
                        ],
                        stroke: [
                            4,
                            'stroke'
                        ],
                        legend: [
                            5,
                            'legend'
                        ],
                        markers: [
                            6,
                            'markers'
                        ],
                        fill: [
                            7,
                            'fill'
                        ],
                        tooltip: [
                            8,
                            'tooltip'
                        ],
                        plotOptions: [
                            9,
                            'plotOptions'
                        ],
                        xaxis: [
                            10,
                            'xaxis'
                        ],
                        yaxis: [
                            11,
                            'yaxis'
                        ],
                        states: [
                            12,
                            'states'
                        ]
                    }, null)
                ], function (l, t) {
                    var n = t.component;
                    l(t, 8, 0, './assets/media/svg/icons/Communication/Group.svg'), l(t, 18, 1, [
                        n.chartOptions.chart,
                        n.chartOptions.colors,
                        n.chartOptions.dataLabels,
                        n.chartOptions.series,
                        n.chartOptions.stroke,
                        n.chartOptions.legend,
                        n.chartOptions.markers,
                        n.chartOptions.fill,
                        n.chartOptions.tooltip,
                        n.chartOptions.plotOptions,
                        n.chartOptions.xaxis,
                        n.chartOptions.yaxis,
                        n.chartOptions.states
                    ]);
                }, function (l, t) {
                    l(t, 12, 0, t.component.Total), l(t, 16, 0, '150px');
                });
            }
            var B = n('07VJ');
            class _ {
                constructor(l, t, n, e) {
                    this.store = l, this.layout = t, this.DashServices = n, this.changeDetectorRef = e, this.chartOptions = {}, this.fontFamily = '', this.colorsGrayGray500 = '', this.colorsGrayGray200 = '', this.colorsGrayGray300 = '', this.colorsThemeBaseDanger = '', this.fontFamily = this.layout.getProp('js.fontFamily'), this.colorsGrayGray500 = this.layout.getProp('js.colors.gray.gray500'), this.colorsGrayGray200 = this.layout.getProp('js.colors.gray.gray200'), this.colorsGrayGray300 = this.layout.getProp('js.colors.gray.gray300'), this.colorsThemeBaseDanger = this.layout.getProp('js.colors.theme.base.danger');
                }
                ngOnInit() {
                    const appToken = JSON.parse(localStorage.getItem('token'))
                    fetch('https://api.clegal.com.mx/api/users/refresh', {
                        method: 'POST', // Puedes cambiar a 'GET' si es necesario
                        headers: {
                            'Content-Type': 'application/json', // Tipo de contenido
                            'Authorization': `Bearer ${appToken.token}`, // Tu token JWT u otro tipo de autenticación
                        },
                    })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Error en la solicitud');
                            }
                            return response.json();  // Convertir a JSON si la respuesta es exitosa
                        })
                        .then(data => {
                            localStorage.setItem('token', JSON.stringify(data))
                        })
                        .catch(error => {
                            console.error('Hubo un problema con la solicitud:', error);
                        });
                    this.user$ = this.store.select(B.b), this.series = [], this.month = [], this.chartOptions = this.getChartOptions(), this.DashServices.getData().subscribe(l => {
                        this.series = [...l.series], this.month = [...l.month], this.chartOptions = this.getChartOptions(), this.changeDetectorRef.markForCheck();
                    });
                    console.log()

                }
                getChartOptions() {
                    return {
                        series: [{
                                name: '',
                                data: this.series
                            }],
                        chart: {
                            type: 'area',
                            height: 200,
                            toolbar: { show: !1 },
                            zoom: { enabled: !1 },
                            sparkline: { enabled: !0 },
                            dropShadow: {
                                enabled: !0,
                                enabledOnSeries: void 0,
                                top: 5,
                                left: 0,
                                blur: 3,
                                color: '#D13647',
                                opacity: 0.5
                            }
                        },
                        plotOptions: {},
                        legend: { show: !1 },
                        dataLabels: { enabled: !1 },
                        fill: {
                            type: 'solid',
                            opacity: 0
                        },
                        stroke: {
                            curve: 'smooth',
                            show: !0,
                            width: 3,
                            colors: ['#D13647']
                        },
                        xaxis: {
                            categories: this.month,
                            axisBorder: { show: !1 },
                            axisTicks: { show: !1 },
                            labels: {
                                show: !1,
                                style: {
                                    colors: this.colorsGrayGray500,
                                    fontSize: '12px',
                                    fontFamily: this.fontFamily
                                }
                            },
                            crosshairs: {
                                show: !1,
                                position: 'front',
                                stroke: {
                                    color: this.colorsGrayGray300,
                                    width: 1,
                                    dashArray: 3
                                }
                            }
                        },
                        yaxis: {
                            min: 0,
                            max: 80,
                            labels: {
                                show: !1,
                                style: {
                                    colors: this.colorsGrayGray500,
                                    fontSize: '12px',
                                    fontFamily: this.fontFamily
                                }
                            }
                        },
                        states: {
                            normal: {
                                filter: {
                                    type: 'none',
                                    value: 0
                                }
                            },
                            hover: {
                                filter: {
                                    type: 'none',
                                    value: 0
                                }
                            },
                            active: {
                                allowMultipleDataPointsSelection: !1,
                                filter: {
                                    type: 'none',
                                    value: 0
                                }
                            }
                        },
                        tooltip: {
                            style: {
                                fontSize: '12px',
                                fontFamily: this.fontFamily
                            },
                            y: {
                                formatter: function (l) {
                                    return '$' + l;
                                }
                            },
                            marker: { show: !1 }
                        },
                        colors: ['transparent'],
                        markers: {
                            colors: this.colorsThemeBaseDanger,
                            strokeColor: ['#D13647'],
                            strokeWidth: 3
                        }
                    };
                }
            }
            var z = n('tqRt'), j = e['ɵcrt']({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });
            function A(l) {
                return e['ɵvid'](0, [
                    (l()(), e['ɵeld'](0, 0, null, null, 11, 'div', [[
                            'class',
                            'col bg-light-primary px-6 py-8 rounded-xl mb-7'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](1, 0, null, null, 3, 'div', [
                        [
                            'class',
                            ''
                        ],
                        [
                            'style',
                            'width: 50%; float: left;'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵeld'](2, 16777216, null, null, 2, 'span', [[
                            'class',
                            'svg-icon svg-icon-3x svg-icon-light-block my-2'
                        ]], null, null, null, null, null)),
                    e['ɵprd'](512, null, C.SVGCacheService, C.SVGCacheService, [
                        [
                            2,
                            w.APP_BASE_HREF
                        ],
                        [
                            2,
                            w.PlatformLocation
                        ],
                        [
                            2,
                            k.InlineSVGConfig
                        ],
                        f.HttpClient,
                        f.HttpBackend,
                        e.RendererFactory2
                    ]),
                    e['ɵdid'](4, 737280, null, 0, P.InlineSVGDirective, [
                        e.ElementRef,
                        e.ViewContainerRef,
                        e.ComponentFactoryResolver,
                        C.SVGCacheService,
                        e.Renderer2,
                        R.InlineSVGService,
                        [
                            2,
                            k.InlineSVGConfig
                        ],
                        e.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ]
                    }, null),
                    (l()(), e['ɵeld'](5, 0, null, null, 3, 'div', [[
                            'style',
                            'width: 50%; float: left; color:#fff;'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](6, 0, null, null, 2, 'h3', [[
                            'class',
                            'font-weight-normal text-light text-hover-primary'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵted'](7, null, [
                        '',
                        ''
                    ])),
                    e['ɵpid'](131072, w.AsyncPipe, [e.ChangeDetectorRef]),
                    (l()(), e['ɵeld'](9, 0, null, null, 2, 'div', [[
                            'style',
                            'clear:both'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](10, 0, null, null, 1, 'span', [[
                            'class',
                            'text-light font-weight-bold font-size-h6 mt-2'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵted'](-1, null, [' Usuarios ']))
                ], function (l, t) {
                    l(t, 4, 0, './assets/media/svg/icons/Communication/Add-user.svg');
                }, function (l, t) {
                    var n = t.component;
                    l(t, 7, 0, e['ɵunv'](t, 7, 0, e['ɵnov'](t, 8).transform(n.user$)).number_user);
                });
            }
            function E(l) {
                return e['ɵvid'](0, [
                    (l()(), e['ɵeld'](0, 0, null, null, 56, 'div', [[
                            'class',
                            'card card-custom bg-gray-100 card-stretch gutter-b'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](1, 0, null, null, 5, 'div', [[
                            'class',
                            'card-header border-0 bg-danger py-5'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](2, 0, null, null, 3, 'h3', [[
                            'class',
                            'card-title font-weight-bolder text-white'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](3, 0, null, null, 2, 'h3', [[
                            'class',
                            'card-title'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](4, 0, null, null, 1, 'a', [
                        [
                            'class',
                            'font-weight-bolder text-white'
                        ],
                        [
                            'href',
                            '/settings/users-sales'
                        ]
                    ], null, null, null, null, null)),
                    (l()(), e['ɵted'](-1, null, ['Productos Adquiridos.'])),
                    (l()(), e['ɵeld'](6, 0, null, null, 0, 'div', [[
                            'class',
                            'card-toolbar'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](7, 0, null, null, 49, 'div', [[
                            'class',
                            'card-body p-0 position-relative overflow-hidden'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](8, 0, null, null, 2, 'div', [
                        [
                            'class',
                            'card-rounded-bottom bg-danger'
                        ],
                        [
                            'id',
                            'kt_mixed_widget_1_chart'
                        ]
                    ], [[
                            4,
                            'height',
                            null
                        ]], null, null, null, null)),
                    (l()(), e['ɵeld'](9, 0, null, null, 1, 'apx-chart', [], null, null, null, d.b, d.a)),
                    e['ɵdid'](10, 770048, null, 0, p.a, [], {
                        chart: [
                            0,
                            'chart'
                        ],
                        colors: [
                            1,
                            'colors'
                        ],
                        dataLabels: [
                            2,
                            'dataLabels'
                        ],
                        series: [
                            3,
                            'series'
                        ],
                        stroke: [
                            4,
                            'stroke'
                        ],
                        legend: [
                            5,
                            'legend'
                        ],
                        markers: [
                            6,
                            'markers'
                        ],
                        fill: [
                            7,
                            'fill'
                        ],
                        tooltip: [
                            8,
                            'tooltip'
                        ],
                        plotOptions: [
                            9,
                            'plotOptions'
                        ],
                        xaxis: [
                            10,
                            'xaxis'
                        ],
                        yaxis: [
                            11,
                            'yaxis'
                        ],
                        states: [
                            12,
                            'states'
                        ]
                    }, null),
                    (l()(), e['ɵeld'](11, 0, null, null, 45, 'div', [[
                            'class',
                            'card-spacer mt-n25'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](12, 0, null, null, 17, 'div', [[
                            'class',
                            'row m-0'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](13, 0, null, null, 13, 'div', [[
                            'class',
                            'col bg-light-warning px-6 py-8 rounded-xl mr-7 mb-7'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](14, 0, null, null, 5, 'div', [[
                            'style',
                            'width: 50%; float: left;'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](15, 16777216, null, null, 4, 'span', [[
                            'class',
                            'svg-icon svg-icon-3x svg-icon-warning d-block my-2'
                        ]], null, null, null, null, null)),
                    e['ɵprd'](512, null, C.SVGCacheService, C.SVGCacheService, [
                        [
                            2,
                            w.APP_BASE_HREF
                        ],
                        [
                            2,
                            w.PlatformLocation
                        ],
                        [
                            2,
                            k.InlineSVGConfig
                        ],
                        f.HttpClient,
                        f.HttpBackend,
                        e.RendererFactory2
                    ]),
                    e['ɵdid'](17, 737280, null, 0, P.InlineSVGDirective, [
                        e.ElementRef,
                        e.ViewContainerRef,
                        e.ComponentFactoryResolver,
                        C.SVGCacheService,
                        e.Renderer2,
                        R.InlineSVGService,
                        [
                            2,
                            k.InlineSVGConfig
                        ],
                        e.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ]
                    }, null),
                    (l()(), e['ɵted'](18, null, [
                        ' ',
                        ''
                    ])),
                    e['ɵpid'](131072, w.AsyncPipe, [e.ChangeDetectorRef]),
                    (l()(), e['ɵeld'](20, 0, null, null, 3, 'div', [[
                            'style',
                            'width: 50%; float: left; color: white;'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](21, 0, null, null, 2, 'h3', [], null, null, null, null, null)),
                    (l()(), e['ɵted'](22, null, [
                        '',
                        ''
                    ])),
                    e['ɵpid'](131072, w.AsyncPipe, [e.ChangeDetectorRef]),
                    (l()(), e['ɵeld'](24, 0, null, null, 2, 'div', [[
                            'style',
                            'clear:both'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](25, 0, null, null, 1, 'span', [[
                            'class',
                            'text-success font-weight-bold font-size-h6 mt-2'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵted'](-1, null, [' Documentos Centinela '])),
                    (l()(), e['ɵand'](16777216, null, null, 2, null, A)),
                    e['ɵdid'](28, 16384, null, 0, w.NgIf, [
                        e.ViewContainerRef,
                        e.TemplateRef
                    ], {
                        ngIf: [
                            0,
                            'ngIf'
                        ]
                    }, null),
                    e['ɵpid'](131072, w.AsyncPipe, [e.ChangeDetectorRef]),
                    (l()(), e['ɵeld'](30, 0, null, null, 26, 'div', [[
                            'class',
                            'row m-0'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](31, 0, null, null, 13, 'div', [[
                            'class',
                            'col bg-light-danger px-6 py-8 rounded-xl mr-7'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](32, 0, null, null, 5, 'div', [[
                            'style',
                            'width: 50%; float: left;'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](33, 16777216, null, null, 4, 'span', [[
                            'class',
                            'svg-icon svg-icon-3x svg-icon-danger d-block my-2'
                        ]], null, null, null, null, null)),
                    e['ɵprd'](512, null, C.SVGCacheService, C.SVGCacheService, [
                        [
                            2,
                            w.APP_BASE_HREF
                        ],
                        [
                            2,
                            w.PlatformLocation
                        ],
                        [
                            2,
                            k.InlineSVGConfig
                        ],
                        f.HttpClient,
                        f.HttpBackend,
                        e.RendererFactory2
                    ]),
                    e['ɵdid'](35, 737280, null, 0, P.InlineSVGDirective, [
                        e.ElementRef,
                        e.ViewContainerRef,
                        e.ComponentFactoryResolver,
                        C.SVGCacheService,
                        e.Renderer2,
                        R.InlineSVGService,
                        [
                            2,
                            k.InlineSVGConfig
                        ],
                        e.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ]
                    }, null),
                    (l()(), e['ɵted'](36, null, [
                        ' ',
                        ''
                    ])),
                    e['ɵpid'](131072, w.AsyncPipe, [e.ChangeDetectorRef]),
                    (l()(), e['ɵeld'](38, 0, null, null, 3, 'div', [[
                            'style',
                            'width: 50%; float: left; color: white;'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](39, 0, null, null, 2, 'h3', [], null, null, null, null, null)),
                    (l()(), e['ɵted'](40, null, [
                        '',
                        ''
                    ])),
                    e['ɵpid'](131072, w.AsyncPipe, [e.ChangeDetectorRef]),
                    (l()(), e['ɵeld'](42, 0, null, null, 2, 'div', [[
                            'style',
                            'clear:both'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](43, 0, null, null, 1, 'span', [[
                            'class',
                            'text-success font-weight-bold font-size-h6 mt-2'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵted'](-1, null, [' Documentos Lite '])),
                    (l()(), e['ɵeld'](45, 0, null, null, 11, 'div', [[
                            'class',
                            'col bg-light-success px-6 py-8 rounded-xl'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](46, 0, null, null, 3, 'div', [[
                            'style',
                            'width: 50%; float: left;'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](47, 16777216, null, null, 2, 'span', [[
                            'class',
                            'svg-icon svg-icon-3x svg-icon-light d-block my-2'
                        ]], null, null, null, null, null)),
                    e['ɵprd'](512, null, C.SVGCacheService, C.SVGCacheService, [
                        [
                            2,
                            w.APP_BASE_HREF
                        ],
                        [
                            2,
                            w.PlatformLocation
                        ],
                        [
                            2,
                            k.InlineSVGConfig
                        ],
                        f.HttpClient,
                        f.HttpBackend,
                        e.RendererFactory2
                    ]),
                    e['ɵdid'](49, 737280, null, 0, P.InlineSVGDirective, [
                        e.ElementRef,
                        e.ViewContainerRef,
                        e.ComponentFactoryResolver,
                        C.SVGCacheService,
                        e.Renderer2,
                        R.InlineSVGService,
                        [
                            2,
                            k.InlineSVGConfig
                        ],
                        e.PLATFORM_ID
                    ], {
                        inlineSVG: [
                            0,
                            'inlineSVG'
                        ]
                    }, null),
                    (l()(), e['ɵeld'](50, 0, null, null, 3, 'div', [[
                            'style',
                            'width: 50%; float: left; color: white;'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](51, 0, null, null, 2, 'h3', [[
                            'class',
                            'font-weight-normal text-light text-hover-primar'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵted'](52, null, [
                        '',
                        ''
                    ])),
                    e['ɵpid'](131072, w.AsyncPipe, [e.ChangeDetectorRef]),
                    (l()(), e['ɵeld'](54, 0, null, null, 2, 'div', [[
                            'style',
                            'clear:both'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](55, 0, null, null, 1, 'span', [[
                            'class',
                            'text-light font-weight-bold font-size-h6 mt-2'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵted'](-1, null, [' Notificaciones ']))
                ], function (l, t) {
                    var n = t.component;
                    l(t, 10, 1, [
                        n.chartOptions.chart,
                        n.chartOptions.colors,
                        n.chartOptions.dataLabels,
                        n.chartOptions.series,
                        n.chartOptions.stroke,
                        n.chartOptions.legend,
                        n.chartOptions.markers,
                        n.chartOptions.fill,
                        n.chartOptions.tooltip,
                        n.chartOptions.plotOptions,
                        n.chartOptions.xaxis,
                        n.chartOptions.yaxis,
                        n.chartOptions.states
                    ]), l(t, 17, 0, './assets/media/svg/icons/Media/Equalizer.svg'), l(t, 28, 0, 0 == e['ɵunv'](t, 28, 0, e['ɵnov'](t, 29).transform(n.user$)).people_type), l(t, 35, 0, './assets/media/svg/icons/Design/Layers.svg'), l(t, 49, 0, './assets/media/svg/icons/Communication/Urgent-mail.svg');
                }, function (l, t) {
                    var n = t.component;
                    const dataToken = JSON.parse(localStorage.getItem('token'))
                    e['ɵunv'](t, 22, 0, e['ɵnov'](t, 23).transform(n.user$)).document_n51 = dataToken.document_n51
                    e['ɵunv'](t, 40, 0, e['ɵnov'](t, 41).transform(n.user$)).document = dataToken.document
                    e['ɵunv'](t, 52, 0, e['ɵnov'](t, 53).transform(n.user$)).notification = dataToken.notification

                    l(t, 8, 0, '200px'), l(t, 18, 0, e['ɵunv'](t, 18, 0, e['ɵnov'](t, 19).transform(n.user$)).document_n51), 
                    l(t, 22, 0, e['ɵunv'](t, 22, 0, e['ɵnov'](t, 23).transform(n.user$)).document_n51),
                    l(t, 36, 0, e['ɵunv'](t, 36, 0, e['ɵnov'](t, 37).transform(n.user$)).document), 
                    l(t, 40, 0, e['ɵunv'](t, 40, 0, e['ɵnov'](t, 41).transform(n.user$)).document), 
                    l(t, 52, 0, e['ɵunv'](t, 52, 0, e['ɵnov'](t, 53).transform(n.user$)).notification);
                });
            }
            class M {
                constructor() {
                }
                ngOnInit() {
                }
            }
            var H = e['ɵcrt']({
                encapsulation: 2,
                styles: [],
                data: {}
            });
            function W(l) {
                return e['ɵvid'](0, [
                    (l()(), e['ɵeld'](0, 0, null, null, 13, 'div', [[
                            'class',
                            'row d-none' //DASHBOARD CONTENIDO
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](1, 0, null, null, 4, 'div', [[
                            'class',
                            'col-lg-6 col-xxl-4'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](2, 0, null, null, 1, 'app-mixed-widget14', [], null, null, null, x, b)),
                    e['ɵdid'](3, 114688, null, 0, m, [
                        y.a,
                        v,
                        e.ChangeDetectorRef
                    ], null, null),
                    (l()(), e['ɵeld'](4, 0, null, null, 1, 'app-mixed-widget15', [], null, null, null, G, O)),
                    e['ɵdid'](5, 114688, null, 0, S, [
                        y.a,
                        v,
                        e.ChangeDetectorRef
                    ], null, null),
                    (l()(), e['ɵeld'](6, 0, null, null, 4, 'div', [[
                            'class',
                            'col-lg-6 col-xxl-4'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](7, 0, null, null, 1, 'app-stats-widget11', [], null, null, null, L, D)),
                    e['ɵdid'](8, 114688, null, 0, F, [
                        y.a,
                        v,
                        e.ChangeDetectorRef
                    ], null, null),
                    (l()(), e['ɵeld'](9, 0, null, null, 1, 'app-stats-widget12', [], null, null, null, I, T)),
                    e['ɵdid'](10, 114688, null, 0, V, [
                        y.a,
                        v,
                        e.ChangeDetectorRef
                    ], null, null),
                    (l()(), e['ɵeld'](11, 0, null, null, 2, 'div', [[
                            'class',
                            'col-lg-6 col-xxl-4'
                        ]], null, null, null, null, null)),
                    (l()(), e['ɵeld'](12, 0, null, null, 1, 'app-mixed-widget1', [], null, null, null, E, j)),
                    e['ɵdid'](13, 114688, null, 0, _, [
                        z.o,
                        y.a,
                        v,
                        e.ChangeDetectorRef
                    ], null, null)
                ], function (l, t) {
                    l(t, 3, 0), l(t, 5, 0), l(t, 8, 0), l(t, 10, 0), l(t, 13, 0);
                }, null);
            }
            class N {
                constructor(l) {
                    this.layout = l;
                }
                ngOnInit() {
                    this.demo = this.layout.getProp('demo');
                }
            }
            var J = e['ɵcrt']({
                encapsulation: 2,
                styles: [],
                data: {}
            });
            function Y(l) {
                return e['ɵvid'](0, [
                    (l()(), e['ɵeld'](0, 0, null, null, 1, 'app-dashboard1', [], null, null, null, W, H)),
                    e['ɵdid'](1, 114688, null, 0, M, [], null, null)
                ], function (l, t) {
                    l(t, 1, 0);
                }, null);
            }
            class $ {
                constructor() {
                }
                ngOnInit() {
                }
            }
            var K = e['ɵcrt']({
                encapsulation: 0,
                styles: [['']],
                data: {}
            });
            function q(l) {
                return e['ɵvid'](0, [
                    (l()(), e['ɵeld'](0, 0, null, null, 1, 'app-dashboard-wrapper', [], null, null, null, Y, J)),
                    e['ɵdid'](1, 114688, null, 0, N, [y.a], null, null)
                ], function (l, t) {
                    l(t, 1, 0);
                }, null);
            }
            function Q(l) {
                return e['ɵvid'](0, [
                    (l()(), e['ɵeld'](0, 0, null, null, 1, 'app-dashboard', [], null, null, null, q, K)),
                    e['ɵdid'](1, 114688, null, 0, $, [], null, null)
                ], function (l, t) {
                    l(t, 1, 0);
                }, null);
            }
            var U = e['ɵccf']('app-dashboard', $, Q, {}, {}, []), Z = n('G0yt'), X = n('1O3W'), ll = n('9gLZ'), tl = n('s7LF'), nl = n('9b/N'), el = n('NFMk'), sl = n('0YeR'), ol = n('iInd'), al = n('51fn'), il = n('F3IN'), rl = n('TSSN'), ul = n('tM0M'), cl = n('kFOB'), hl = n('QnJH'), dl = n('HeVh'), pl = n('SCoL'), ml = n('tYkK'), yl = n('66zS'), gl = n('1z/I'), fl = n('7KAL'), vl = n('PgQK'), bl = n('jQCg'), xl = n('W0Pu'), Sl = n('W4B1'), Ol = n('wf2+'), Gl = n('0CZq'), Cl = n('Rgb0'), wl = n('Jp/u'), kl = n('WJhm'), Pl = n('GaVp'), Rl = n('YRt3'), Fl = n('lAiz'), Dl = n('YEUz'), Ll = n('CYS+'), Vl = n('px0D'), Tl = n('YdS3'), Il = n('mW00'), Bl = n('jTf7'), _l = n('S/WK'), zl = n('oBm0'), jl = n('RVNi'), Al = n('gaRz'), El = n('vZsH'), Ml = n('fb/r'), Hl = n('z+yo'), Wl = n('JXeA'), Nl = n('pKmL'), Jl = n('Rx8h'), Yl = e['ɵcmf'](s, [], function (l) {
                    return e['ɵmod']([
                        e['ɵmpd'](512, e.ComponentFactoryResolver, e['ɵCodegenComponentFactoryResolver'], [
                            [
                                8,
                                [
                                    o.a,
                                    a.a,
                                    i.h,
                                    i.i,
                                    r.a,
                                    u.a,
                                    c.b,
                                    c.a,
                                    h.a,
                                    U
                                ]
                            ],
                            [
                                3,
                                e.ComponentFactoryResolver
                            ],
                            e.NgModuleRef
                        ]),
                        e['ɵmpd'](4608, w.NgLocalization, w.NgLocaleLocalization, [e.LOCALE_ID]),
                        e['ɵmpd'](4608, Z.E, Z.E, [
                            e.ComponentFactoryResolver,
                            e.Injector,
                            Z.vb,
                            Z.F
                        ]),
                        e['ɵmpd'](4608, X.d, X.d, [
                            X.l,
                            X.f,
                            e.ComponentFactoryResolver,
                            X.j,
                            X.g,
                            e.Injector,
                            e.NgZone,
                            w.DOCUMENT,
                            ll.b,
                            w.Location,
                            X.i
                        ]),
                        e['ɵmpd'](5120, X.m, X.n, [X.d]),
                        e['ɵmpd'](4608, tl.z, tl.z, []),
                        e['ɵmpd'](4608, nl.c, nl.c, []),
                        e['ɵmpd'](135680, el.k, el.k, [
                            X.d,
                            e.Injector,
                            sl.a,
                            [
                                3,
                                el.k
                            ]
                        ]),
                        e['ɵmpd'](4608, tl.f, tl.f, []),
                        e['ɵmpd'](1073742336, w.CommonModule, w.CommonModule, []),
                        e['ɵmpd'](1073742336, ol.v, ol.v, [
                            [
                                2,
                                ol.B
                            ],
                            [
                                2,
                                ol.r
                            ]
                        ]),
                        e['ɵmpd'](1073742336, al.a, al.a, []),
                        e['ɵmpd'](1073742336, il.InlineSVGModule, il.InlineSVGModule, []),
                        e['ɵmpd'](1073742336, p.b, p.b, []),
                        e['ɵmpd'](1073742336, Z.z, Z.z, []),
                        e['ɵmpd'](1073742336, rl.i, rl.i, []),
                        e['ɵmpd'](1073742336, ul.a, ul.a, []),
                        e['ɵmpd'](1073742336, cl.a, cl.a, []),
                        e['ɵmpd'](1073742336, hl.a, hl.a, []),
                        e['ɵmpd'](1073742336, Z.G, Z.G, []),
                        e['ɵmpd'](1073742336, dl.a, dl.a, []),
                        e['ɵmpd'](1073742336, pl.b, pl.b, []),
                        e['ɵmpd'](1073742336, ml.b, ml.b, []),
                        e['ɵmpd'](1073742336, yl.b, yl.b, []),
                        e['ɵmpd'](1073742336, ll.a, ll.a, []),
                        e['ɵmpd'](1073742336, gl.e, gl.e, []),
                        e['ɵmpd'](1073742336, fl.c, fl.c, []),
                        e['ɵmpd'](1073742336, fl.g, fl.g, []),
                        e['ɵmpd'](1073742336, X.h, X.h, []),
                        e['ɵmpd'](1073742336, vl.a, vl.a, []),
                        e['ɵmpd'](1073742336, bl.c, bl.c, []),
                        e['ɵmpd'](1073742336, xl.b, xl.b, []),
                        e['ɵmpd'](1073742336, Sl.b, Sl.b, []),
                        e['ɵmpd'](1073742336, Ol.e, Ol.e, []),
                        e['ɵmpd'](1073742336, Gl.d, Gl.d, []),
                        e['ɵmpd'](1073742336, Gl.c, Gl.c, []),
                        e['ɵmpd'](1073742336, tl.y, tl.y, []),
                        e['ɵmpd'](1073742336, tl.l, tl.l, []),
                        e['ɵmpd'](1073742336, Cl.c, Cl.c, []),
                        e['ɵmpd'](1073742336, wl.c, wl.c, []),
                        e['ɵmpd'](1073742336, kl.b, kl.b, []),
                        e['ɵmpd'](1073742336, Pl.c, Pl.c, []),
                        e['ɵmpd'](1073742336, Rl.a, Rl.a, []),
                        e['ɵmpd'](1073742336, Fl.a, Fl.a, []),
                        e['ɵmpd'](1073742336, Fl.b, Fl.b, []),
                        e['ɵmpd'](1073742336, nl.d, nl.d, []),
                        e['ɵmpd'](1073742336, Dl.a, Dl.a, [Dl.f]),
                        e['ɵmpd'](1073742336, Ll.c, Ll.c, []),
                        e['ɵmpd'](1073742336, Vl.d, Vl.d, []),
                        e['ɵmpd'](1073742336, Tl.a, Tl.a, []),
                        e['ɵmpd'](1073742336, Il.d, Il.d, []),
                        e['ɵmpd'](1073742336, Bl.j, Bl.j, []),
                        e['ɵmpd'](1073742336, _l.a, _l.a, []),
                        e['ɵmpd'](1073742336, el.i, el.i, []),
                        e['ɵmpd'](1073742336, zl.a, zl.a, []),
                        e['ɵmpd'](1073742336, jl.b, jl.b, []),
                        e['ɵmpd'](1073742336, Al.d, Al.d, []),
                        e['ɵmpd'](1073742336, El.d, El.d, []),
                        e['ɵmpd'](1073742336, Ml.b, Ml.b, []),
                        e['ɵmpd'](1073742336, tl.v, tl.v, []),
                        e['ɵmpd'](1073742336, Hl.a, Hl.a, []),
                        e['ɵmpd'](1073742336, Wl.h, Wl.h, []),
                        e['ɵmpd'](1073742336, Wl.f, Wl.f, []),
                        e['ɵmpd'](1073742336, Nl.a, Nl.a, []),
                        e['ɵmpd'](1073742336, Jl.a, Jl.a, []),
                        e['ɵmpd'](1073742336, s, s, []),
                        e['ɵmpd'](1024, ol.m, function () {
                            return [[{
                                        path: '',
                                        component: $
                                    }]];
                        }, [])
                    ]);
                });
        }
    }
]);