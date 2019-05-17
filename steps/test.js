"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-template-curly-in-string */
const cef = require("cef-lib");
const flowchart = {
    name: 'Testing HttpDownload ',
    title: 'Testing HttpDownload',
    desc: 'Testing HttpDownload',
    args: {},
    globals: {
        PATH: { value: 'D:/data', type: 'string', desc: 'the data root dir' }
    },
    steps: [
        {
            id: 'a',
            gitid: 'mbenzekri/cef-fs/steps/DirectoryWalker',
            params: {
                directory: '${globals.PATH}',
                created: 'true',
                deleted: 'true',
                pattern: '.*',
            },
        },
        {
            id: 'b',
            gitid: 'mbenzekri/cef-fs/steps/TextFileWriter',
            params: {
                filename: '${globals.PATH}/cef/filelog.log',
                append: 'false',
                createdir: 'false',
                message: '${JSON.stringify(pojo)}',
            },
        },
    ],
    pipes: [
        { from: 'a', outport: 'files', to: 'b', inport: 'pojos' }
    ]
};
const batch = new cef.Batch(flowchart);
batch.run();
//# sourceMappingURL=test.js.map