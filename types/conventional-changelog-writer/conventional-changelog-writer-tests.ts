"use strict";

import conventionalChangelogWriter from "conventional-changelog-writer";

declare const context: conventionalChangelogWriter.Context;
declare const options: conventionalChangelogWriter.Options;

// $ExpectType Transform<BufferOrString, BufferOrString>
conventionalChangelogWriter();

// $ExpectType Transform<BufferOrString, BufferOrString>
conventionalChangelogWriter(context);

// $ExpectType Transform<BufferOrString, BufferOrString>
conventionalChangelogWriter(context, options);

// $ExpectError
conventionalChangelogWriter(options);

// $ExpectError
conventionalChangelogWriter(options, context);
