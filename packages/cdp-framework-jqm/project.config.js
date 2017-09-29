﻿'use strict';

const path  = require('path');
const pkg   = require('./package.json');

const target = {
    type: 'classical-module',
    es: 'es5',
    module: 'none',
    env: 'web',
};

const dir = {
    src: 'src',
    pkg: 'dist',
    built: 'built',
    doc: 'docs',
    task: 'tasks',
    test: 'tests',
    types: '@types',
    temp: '.temp',
    external: 'external',
    script: 'scripts',
};

const external_rearrange = {
    root: `${dir.external}`,
    ignore_modules: [
        '^@cdp',
        '^@types',
    ],
    specified_modules: [
    ],
    module_adjuster: {
    },
};

const internal_rearrange = [
    'cdp-core',
    'cdp-lazyload',
    'cdp-promise',
    'cdp-i18n',
];

const main = {
    basename: 'cdp.framework.jqm',
    bundle_d_ts: 'cdp.framework.jqm.d.ts',
    namespace: 'cdp',
};

const built_cleanee = {
    ts: ['**/*.js', '**/*.d.ts', '!**/index.d.ts', '!**/jquery.mobile.d.ts', '**/*.map'],
    roots: [
        'exports',
        `${dir.src}/${dir.script}`,
    ],
};

const banner = {
    fileName: 'BANNER',
    d_ts_desc: '\n * This file is generated by the CDP package build process.',
};

const required_tasks = [
    'banner.js',
    'bundle.js',
    'bundle-adjuster.js',
    'bundle-finalizer.js',
    'clean.js',
    'external-rearrange.js',
    'internal-rearrange.js',
    'remap-coverage.js',
    'srcmap.js',
];

// project configuration
module.exports = {
    target: target,
    pkg: pkg,
    dir: dir,
    external_rearrange: external_rearrange,
    internal_rearrange: internal_rearrange,
    main: main,
    built_cleanee: built_cleanee,
    banner: banner,
    required_tasks: required_tasks,
};
