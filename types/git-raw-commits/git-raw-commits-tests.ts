"use strict";

import gitRawCommits from "git-raw-commits";

declare const execOptions: gitRawCommits.ExecOptions;
declare const gitOptions: gitRawCommits.GitOptions;

// $ExpectType Readable<BufferOrString>
gitRawCommits(gitOptions);

// $ExpectType Readable<BufferOrString>
gitRawCommits(gitOptions, execOptions);

// $ExpectError
gitRawCommits();

// $ExpectError
gitRawCommits(execOptions, gitOptions);
