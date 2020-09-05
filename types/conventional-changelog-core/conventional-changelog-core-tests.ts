/* tslint:disable:no-mergeable-namespace no-namespace */
"use strict";

import conventionalChangelogCore from "conventional-changelog-core";

namespace Module {
    declare const context: conventionalChangelogCore.Context;
    declare const gitRawCommitsOpts: conventionalChangelogCore.GitRawCommitsOptions;
    declare const options: conventionalChangelogCore.Options;
    declare const parserOpts: conventionalChangelogCore.ParserOptions;
    declare const writerOpts: conventionalChangelogCore.WriterOptions;

    // $ExpectType Readable<BufferOrString>
    conventionalChangelogCore();
    // $ExpectType Readable<BufferOrString>
    conventionalChangelogCore(options);
    // $ExpectType Readable<BufferOrString>
    conventionalChangelogCore(options, context);
    // $ExpectType Readable<BufferOrString>
    conventionalChangelogCore(options, context, gitRawCommitsOpts);
    // $ExpectType Readable<BufferOrString>
    conventionalChangelogCore(options, context, gitRawCommitsOpts, parserOpts);
    // $ExpectType Readable<BufferOrString>
    conventionalChangelogCore(options, context, gitRawCommitsOpts, parserOpts, writerOpts);
}
