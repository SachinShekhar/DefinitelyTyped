import saxStream = require('sax-stream');

// $ExpectType Transform<BufferOrString, BufferOrString>
saxStream({ tag: '' });

// $ExpectType Transform<BufferOrString, BufferOrString>
saxStream({
    tag: '',
    highWaterMark: 1,
    strict: true,
    trim: true,
    normalize: true,
    lowercase: true,
    xmlns: true,
    trackPosition: true,
    strictEntities: true
});

// $ExpectError
saxStream({});

// $ExpectError
saxStream();
