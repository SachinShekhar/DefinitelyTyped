import gulpJsonValidator = require("gulp-json-validator");

gulpJsonValidator(); // $ExpectType ReadWriteStream<BufferOrString, BufferOrString>
gulpJsonValidator({}); // $ExpectType ReadWriteStream<BufferOrString, BufferOrString>
gulpJsonValidator({ allowDuplicatedKeys: true }); // $ExpectType ReadWriteStream<BufferOrString, BufferOrString>
gulpJsonValidator({ allowDuplicatedKeys: false }); // $ExpectType ReadWriteStream<BufferOrString, BufferOrString>
