fis.config.set("project.watch.usePolling", true);
//scss转css
fis.match('/src/**/*.scss',{
    parser: fis.plugin('node-sass'),
    rExt: '.css'
});
// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
    spriter: fis.plugin('csssprites')
});
// 对 CSS 进行图片合并
fis.match('*.css', {
    // 给匹配到的文件分配属性 `useSprite`
    useSprite: true
});

fis.match('*.css', {
    // fis-optimizer-clean-css 插件进行压缩，已内置
    optimizer: fis.plugin('clean-css')
});
//使用开发配置
//这里要优先加载app.module.js个人看了一下，加载顺序的问题如果有特殊情况再特殊处理，如果没有问题直接这样既可
fis.media('develop')
    .match('::package', {
        packager: fis.plugin('map', {
            'study-src/all.js': [
                'study-src/*/app.module.js',
                'study-src/*/*.js',
                '!study-src/*/intranet-constant.js',
                '!study-src/*/online-constant.js'
            ],
            'analysis-src/all.js': [
                'analysis-src/*/app.module.js',
                'analysis-src/*/*.js',
                '!analysis-src/*/intranet-constant.js',
                '!analysis-src/*/online-constant.js'
            ],
            'teleconsultation-src/all.js': [
                'teleconsultation-src/*/app.module.js',
                'teleconsultation-src/*/*.js',
                '!teleconsultation-src/*/intranet-constant.js',
                '!teleconsultation-src/*/online-constant.js'
            ],
            'record-wj-301-src/all.js': [
                'record-wj-301-src/*/app.module.js',
                'record-wj-301-src/*/*.js',
                '!record-wj-301-src/*/intranet-constant.js',
                '!record-wj-301-src/*/online-constant.js'
            ],
            'extract-src/all.js': [
                'extract-src/*/app.module.js',
                'extract-src/*/*.js',
                '!extract-src/*/intranet-constant.js',
                '!extract-src/*/online-constant.js'
            ],
            'outpatient-src/all.js': [
                'outpatient-src/*/app.module.js',
                'outpatient-src/*/*.js',
                '!outpatient-src/*/intranet-constant.js',
                '!outpatient-src/*/online-constant.js'
            ],
            'clinic-src/all.js': [
                'clinic-src/*/app.module.js',
                'clinic-src/*/*.js',
                '!clinic-src/*/intranet-constant.js',
                '!clinic-src/*/online-constant.js'
            ],
            'temporaries-src/all.js': [
                'temporaries-src/*/app.module.js',
                'temporaries-src/*/*.js',
                '!temporaries-src/*/intranet-constant.js',
                '!temporaries-src/*/online-constant.js'
            ],
            'record-src/all.js': [
                'record-src/js2/app.module.js',
                'record-src/js2/*.js',
                '!record-src/js2/intranet-constant.js',
                '!record-src/js2/online-constant.js'
            ],
            'record-obstetrics-src/all.js': [
                'record-obstetrics-src/js2/app.module.js',
                'record-obstetrics-src/js2/*.js',
                '!record-obstetrics-src/js2/intranet-constant.js',
                '!record-obstetrics-src/js2/online-constant.js'
            ],
             'temporaries/all.js': [
                'temporaries/*/app.module.js',
                'temporaries/*/*.js'
            ],
            'record-ent-src/all.js': [
                'record-ent-src/*/app.module.js',
                'record-ent-src/*/*.js',
                '!record-ent-src/*/intranet-constant.js',
                '!record-ent-src/*/online-constant.js'
            ],
            'extract-service-src/all.js': [
                'extract-service-src/js/app.module.js',
                'extract-service-src/*/*.js',
                '!extract-service-src/*/intranet-constant.js',
                '!extract-service-src/*/online-constant.js'
            ],
            'system-management/all.js': [
                'system-management/js/app.module.js',
                'system-management/*/*.js',
                '!system-management/*/intranet-constant.js',
                '!system-management/*/online-constant.js'
            ],
            'nursing-src/all.js': [
                'nursing-src/js/app.module.js',
                'nursing-src/*/*.js',
                '!nursing-src/*/intranet-constant.js',
                '!nursing-src/*/online-constant.js'
            ],
            'mind-map/all.js': [
                'mind-map/js/app.module.js',
                'mind-map/*/*.js',
                '!mind-map/*/intranet-constant.js',
                '!mind-map/*/online-constant.js'
            ],
            'extract-rule-src/all.js': [
                'extract-rule-src/js/app.module.js',
                'extract-rule-src/*/*.js',
                '!extract-rule-src/*/intranet-constant.js',
                '!extract-rule-src/*/online-constant.js'
            ],
            'report-xw-src/all.js': [
                'report-xw-src/js/app.module.js',
                'report-xw-src/*/*.js',
                '!report-xw-src/*/intranet-constant.js',
                '!report-xw-src/*/online-constant.js'
            ],
            'd3-src/all.js': [
                'd3-src/js/app.module.js',
                'd3-src/*/*.js',
                '!d3-src/*/intranet-constant.js',
                '!d3-src/*/online-constant.js'
            ],
            'disease-plan-src/all.js': [
                'disease-plan-src/js/app.module.js',
                'disease-plan-src/*/*.js',
                '!disease-plan-src/*/intranet-constant.js',
                '!disease-plan-src/*/online-constant.js'
            ],
            'diseases-plan-src/all.js': [
                'diseases-plan-src/js/app.module.js',
                'diseases-plan-src/*/*.js',
                '!diseases-plan-src/*/intranet-constant.js',
                '!diseases-plan-src/*/online-constant.js'
            ],
            'extract-src-CRF/all.js': [
                'extract-src-CRF/js/app.module.js',
                'extract-src-CRF/*/*.js',
                '!extract-src-CRF/*/intranet-constant.js',
                '!extract-src-CRF/*/online-constant.js'
            ],
            'extract-src-tags/all.js': [
                'extract-src-tags/js/app.module.js',
                'extract-src-tags/*/*.js'
            ],
            'adverse-event-src/all.js': [
                'adverse-event-src/js/app.module.js',
                'adverse-event-src/*/*.js',
                '!adverse-event-src/*/intranet-constant.js',
                '!adverse-event-src/*/online-constant.js'
            ],
            'health-view-src/all.js': [
                'health-view-src/js/app.module.js',
                'health-view-src/js/*.js',
                '!health-view-src/js/intranet-constant.js',
                '!health-view-src/js/online-constant.js'
            ],
            'record-src-demo/all.js': [
                'record-src-demo/js/app.module.js',
                'record-src-demo//*.js',
                '!record-src-demo/*/intranet-constant.js',
                '!record-src-demo/*/online-constant.js'
            ],
            'teat-jump/all.js': [
                'teat-jump/js/app.module.js',
                'teat-jump/js/*.js',
                '!teat-jump/js/intranet-constant.js',
                '!teat-jump/js/online-constant.js'
            ]
        })
    });
//使用内网配置
fis.media('intranet')
    .match('/*-src*/*/*.js', {
    // fis-optimizer-uglify-js 插件进行压缩，已内置
    optimizer: fis.plugin('uglify-js')
    })
    .match('::package', {
        packager: fis.plugin('map', {
            'study-src/all.js': [
                'study-src/*/app.module.js',
                'study-src/*/*.js',
                '!study-src/*/constant.js',
                '!study-src/*/online-constant.js'
            ],
            'analysis-src/all.js': [
                'analysis-src/*/app.module.js',
                'analysis-src/*/*.js',
                '!analysis-src/*/constant.js',
                '!analysis-src/*/online-constant.js'
            ],
            'teleconsultation-src/all.js': [
                'teleconsultation-src/*/app.module.js',
                'teleconsultation-src/*/*.js',
                '!teleconsultation-src/*/constant.js',
                '!teleconsultation-src/*/online-constant.js'
            ],
            'record-wj-301-src/all.js': [
                'record-wj-301-src/*/app.module.js',
                'record-wj-301-src/*/*.js',
                '!record-wj-301-src/*/constant.js',
                '!record-wj-301-src/*/online-constant.js'
            ],
            'extract-src/all.js': [
                'extract-src/*/app.module.js',
                'extract-src/*/*.js',
                '!extract-src/*/constant.js',
                '!extract-src/*/online-constant.js'
            ],
            'outpatient-src/all.js': [
                'outpatient-src/*/app.module.js',
                'outpatient-src/*/*.js',
                '!outpatient-src/*/constant.js',
                '!outpatient-src/*/online-constant.js'
            ],
            'clinic-src/all.js': [
                'clinic-src/*/app.module.js',
                'clinic-src/*/*.js',
                '!clinic-src/*/constant.js',
                '!clinic-src/*/online-constant.js'
            ],
            'temporaries-src/all.js': [
                'temporaries-src/*/app.module.js',
                'temporaries-src/*/*.js',
                '!temporaries-src/*/constant.js',
                '!temporaries-src/*/online-constant.js'
            ],
            'record-src/all.js': [
                'record-src/js2/app.module.js',
                'record-src/js2/*.js',
                '!record-src/js2/constant.js',
                '!record-src/js2/online-constant.js'
            ],
            'record-obstetrics-src/all.js': [
                'record-obstetrics-src/js2/app.module.js',
                'record-obstetrics-src/js2/*.js',
                '!record-obstetrics-src/js2/constant.js',
                '!record-obstetrics-src/js2/online-constant.js'
            ],
            'temporaries/all.js': [
                'temporaries/*/app.module.js',
                'temporaries/*/*.js'
            ],
            'record-ent-src/all.js': [
                'record-ent-src/*/app.module.js',
                'record-ent-src/*/*.js',
                '!record-ent-src/*/constant.js',
                '!record-ent-src/*/online-constant.js'
            ],
            'extract-service-src/all.js': [
                'extract-service-src/js/app.module.js',
                'extract-service-src/*/*.js',
                '!extract-service-src/*/constant.js',
                '!extract-service-src/*/online-constant.js'
            ],
            'system-management/all.js': [
                'system-management/js/app.module.js',
                'system-management/*/*.js',
                '!system-management/*/constant.js',
                '!system-management/*/online-constant.js'
            ],
            'nursing-src/all.js': [
                'nursing-src/js/app.module.js',
                'nursing-src/*/*.js',
                '!nursing-src/*/constant.js',
                '!nursing-src/*/online-constant.js'
            ],
            'extract-rule-src/all.js': [
                'extract-rule-src/js/app.module.js',
                'extract-rule-src/*/*.js',
                '!extract-rule-src/*/constant.js',
                '!extract-rule-src/*/online-constant.js'
            ],
            'mind-map/all.js': [
                'mind-map/js/app.module.js',
                'mind-map/*/*.js',
                '!mind-map/*/constant.js',
                '!mind-map/*/online-constant.js'
            ],
            'report-xw-src/all.js': [
                'report-xw-src/js/app.module.js',
                'report-xw-src/*/*.js',
                '!report-xw-src/*/constant.js',
                '!report-xw-src/*/online-constant.js'
            ],
            'disease-plan-src/all.js': [
                'disease-plan-src/js/app.module.js',
                'disease-plan-src/*/*.js',
                '!disease-plan-src/*/constant.js',
                '!disease-plan-src/*/online-constant.js'
            ],
            'diseases-plan-src/all.js': [
                'diseases-plan-src/js/app.module.js',
                'diseases-plan-src/*/*.js',
                '!diseases-plan-src/*/constant.js',
                '!diseases-plan-src/*/online-constant.js'
            ],
            'd3-src/all.js': [
                'd3-src/js/app.module.js',
                'd3-src/*/*.js',
                '!d3-src/*/constant.js',
                '!d3-src/*/online-constant.js'
            ],
            'extract-src-CRF/all.js': [
                'extract-src-CRF/js/app.module.js',
                'extract-src-CRF/*/*.js',
                '!extract-src-CRF/*/constant.js',
                '!extract-src-CRF/*/online-constant.js'
            ],
            'adverse-event-src/all.js': [
                'adverse-event-src/js/app.module.js',
                'adverse-event-src/*/*.js',
                '!adverse-event-src/*/constant.js',
                '!adverse-event-src/*/online-constant.js'
            ],
            'health-view-src/all.js': [
                'health-view-src/js/app.module.js',
                'health-view-src/js/*.js',
                '!health-view-src/js/constant.js',
                '!health-view-src/js/online-constant.js'
            ]
        })
    });
//使用外网配置
fis.media('online')
    .match('/*-src*/*/*.js', {
        // fis-optimizer-uglify-js 插件进行压缩，已内置
        optimizer: fis.plugin('uglify-js')
    })
    .match('::package', {
        packager: fis.plugin('map', {
            'study-src/all.js': [
                'study-src/*/app.module.js',
                'study-src/*/*.js',
                '!study-src/*/intranet-constant.js',
                '!study-src/*/constant.js'
            ],
            'analysis-src/all.js': [
                'analysis-src/*/app.module.js',
                'analysis-src/*/*.js',
                '!analysis-src/*/intranet-constant.js',
                '!analysis-src/*/constant.js'
            ],
            'teleconsultation-src/all.js': [
                'teleconsultation-src/*/app.module.js',
                'teleconsultation-src/*/*.js',
                '!teleconsultation-src/*/intranet-constant.js',
                '!teleconsultation-src/*/constant.js'
            ],
            'record-wj-301-src/all.js': [
                'record-wj-301-src/*/app.module.js',
                'record-wj-301-src/*/*.js',
                '!record-wj-301-src/*/intranet-constant.js',
                '!record-wj-301-src/*/constant.js'
            ],
            'record-ent-src/all.js': [
                'record-ent-src/*/app.module.js',
                'record-ent-src/*/*.js',
                '!record-ent-src/*/intranet-constant.js',
                '!record-ent-src/*/constant.js'
            ],
            'temporaries-src/all.js': [
                'temporaries-src/*/app.module.js',
                'temporaries-src/*/*.js',
                '!temporaries-src/*/constant.js',
                '!temporaries-src/*/intranet-constant.js'
            ],
            'extract-src/all.js': [
                'extract-src/*/app.module.js',
                'extract-src/*/*.js',
                '!extract-src/*/intranet-constant.js',
                '!extract-src/*/constant.js'
            ],
            'outpatient-src/all.js': [
                'outpatient-src/*/app.module.js',
                'outpatient-src/*/*.js',
                '!outpatient-src/*/intranet-constant.js',
                '!outpatient-src/*/constant.js'
            ],
            'clinic-src/all.js': [
                'clinic-src/*/app.module.js',
                'clinic-src/*/*.js',
                '!clinic-src/*/intranet-constant.js',
                '!clinic-src/*/constant.js'
            ],
            'record-src/all.js': [
                'record-src/js2/app.module.js',
                'record-src/js2/*.js',
                '!record-src/js2/intranet-constant.js',
                '!record-src/js2/constant.js'
            ],
            'record-obstetrics-src/all.js': [
                'record-obstetrics-src/js2/app.module.js',
                'record-obstetrics-src/js2/*.js',
                '!record-obstetrics-src/js2/intranet-constant.js',
                '!record-obstetrics-src/js2/constant.js'
            ],
            'temporaries/all.js': [
                'temporaries/*/app.module.js',
                'temporaries/*/*.js'
            ],
            'extract-service-src/all.js': [
                'extract-service-src/js/app.module.js',
                'extract-service-src/*/*.js',
                '!extract-service-src/*/intranet-constant.js',
                '!extract-service-src/*/constant.js'
            ],
            'system-management/all.js': [
                'system-management/js/app.module.js',
                'system-management/*/*.js',
                '!system-management/*/intranet-constant.js',
                '!system-management/*/constant.js'
            ],
            'nursing-src/all.js': [
                'nursing-src/js/app.module.js',
                'nursing-src/*/*.js',
                '!nursing-src/*/intranet-constant.js',
                '!nursing-src/*/constant.js'
            ],
            'extract-rule-src/all.js': [
                'extract-rule-src/js/app.module.js',
                'extract-rule-src/*/*.js',
                '!extract-rule-src/*/intranet-constant.js',
                '!extract-rule-src/*/constant.js'
            ],
            'mind-map/all.js': [
                'mind-map/js/app.module.js',
                'mind-map/*/*.js',
                '!mind-map/*/intranet-constant.js',
                '!mind-map/*/constant.js'
            ],
            'report-xw-src/all.js': [
                'report-xw-src/js/app.module.js',
                'report-xw-src/*/*.js',
                '!report-xw-src/*/intranet-constant.js',
                '!report-xw-src/*/constant.js'
            ],
            'disease-plan-src/all.js': [
                'disease-plan-src/js/app.module.js',
                'disease-plan-src/*/*.js',
                '!disease-plan-src/*/intranet-constant.js',
                '!disease-plan-src/*/constant.js'
            ],
            'diseases-plan-src/all.js': [
                'diseases-plan-src/js/app.module.js',
                'diseases-plan-src/*/*.js',
                '!diseases-plan-src/*/intranet-constant.js',
                '!diseases-plan-src/*/constant.js'
            ],
            'd3-src/all.js': [
                'd3-src/js/app.module.js',
                'd3-src/*/*.js',
                '!d3-src/*/intranet-constant.js',
                '!d3-src/*/constant.js'
            ],
            'extract-src-CRF/all.js': [
                'extract-src-CRF/js/app.module.js',
                'extract-src-CRF/*/*.js',
                '!extract-src-CRF/*/intranet-constant.js',
                '!extract-src-CRF/*/constant.js'
            ],
            'adverse-event-src/all.js': [
                'adverse-event-src/js/app.module.js',
                'adverse-event-src/*/*.js',
                '!adverse-event-src/*/intranet-constant.js',
                '!adverse-event-src/*/constant.js'
            ],
            'health-view-src/all.js': [
                'health-view-src/js/app.module.js',
                'health-view-src/js/*.js',
                '!health-view-src/*/intranet-constant.js',
                '!health-view-src/*/constant.js'
            ]
        })
    });
