import streamify = require('stream-array');

streamify(); // $ExpectError
streamify('abc'); // $ExpectError
streamify([]); // $ExpectType Readable<BufferOrString>
streamify([1, '2', { 3: 4 }]); // $ExpectType Readable<BufferOrString>
