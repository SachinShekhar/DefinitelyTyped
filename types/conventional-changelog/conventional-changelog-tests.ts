/* tslint:disable:no-mergeable-namespace no-namespace */
"use strict";

import conventionalChangelog from "conventional-changelog";
import conventionalChangelogCore from "conventional-changelog-core";

namespace Module {
    declare const context: conventionalChangelogCore.Context;
    declare const gitRawCommitsOpts: conventionalChangelogCore.GitRawCommitsOptions;
    declare const options: conventionalChangelog.Options;
    declare const parserOpts: conventionalChangelogCore.ParserOptions;
    declare const writerOpts: conventionalChangelogCore.WriterOptions;

    // $ExpectType Readable<BufferOrString>
    conventionalChangelog();
    // $ExpectType Readable<BufferOrString>
    conventionalChangelog(options);
    // $ExpectType Readable<BufferOrString>
    conventionalChangelog(options, context);
    // $ExpectType Readable<BufferOrString>
    conventionalChangelog(options, context, gitRawCommitsOpts);
    // $ExpectType Readable<BufferOrString>
    conventionalChangelog(options, context, gitRawCommitsOpts, parserOpts);
    // $ExpectType Readable<BufferOrString>
    conventionalChangelog(options, context, gitRawCommitsOpts, parserOpts, writerOpts);
}
