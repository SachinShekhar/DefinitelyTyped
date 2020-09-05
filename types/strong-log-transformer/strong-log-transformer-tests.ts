import transformer = require('strong-log-transformer');

transformer.DEFAULTS; // $ExpectType Options

transformer.cli([]); // $ExpectType void
transformer.cli(['one', 'two']); // $ExpectType void

transformer(); // $ExpectType ReadWriteStream<BufferOrString, BufferOrString>
transformer({ format: 'format' }); // $ExpectType ReadWriteStream<BufferOrString, BufferOrString>
transformer({ tag: 'tag' }); // $ExpectType ReadWriteStream<BufferOrString, BufferOrString>
transformer({ mergeMultiline: true }); // $ExpectType ReadWriteStream<BufferOrString, BufferOrString>
transformer({ mergeMultiline: false }); // $ExpectType ReadWriteStream<BufferOrString, BufferOrString>
transformer({ timeStamp: true }); // $ExpectType ReadWriteStream<BufferOrString, BufferOrString>
transformer({ timeStamp : false }); // $ExpectType ReadWriteStream<BufferOrString, BufferOrString>
transformer(transformer.DEFAULTS); // $ExpectType ReadWriteStream<BufferOrString, BufferOrString>
