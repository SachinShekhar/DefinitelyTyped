import { PassThrough } from 'stream';
import destroyOnHWM = require('destroy-on-hwm');

const stream = new PassThrough();

destroyOnHWM(stream); // $ExpectType PassThrough<BufferOrString, BufferOrString>
destroyOnHWM(stream, function(stream) {
    this; // $ExpectType PassThrough<BufferOrString, BufferOrString>
    stream; // $ExpectType PassThrough<BufferOrString, BufferOrString>
});
