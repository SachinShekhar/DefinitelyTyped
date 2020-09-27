// Type definitions for stream-chain 2.0
// Project: https://github.com/uhop/stream-chain#readme
// Definitions by: Eugene Lazutkin <https://github.com/uhop>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { Readable, Writable, Duplex, Transform, DuplexOptions } from 'stream';

export = Chain;

type TransformFunction<TChunkIn = NodeJS.BufferOrString, TChunkOut = NodeJS.BufferOrString> = (chunk: TChunkIn, encoding?: string) => TChunkOut;

type Stream<TChunkIn = NodeJS.BufferOrString, TChunkOut = NodeJS.BufferOrString> = Readable<TChunkOut> | Writable<TChunkIn> | Duplex<TChunkIn, TChunkOut> | Transform<TChunkIn, TChunkOut>;
type StreamItem<TChunkIn = NodeJS.BufferOrString, TChunkOut = NodeJS.BufferOrString> = Stream<TChunkIn, TChunkOut> | TransformFunction<TChunkIn, TChunkOut>;

declare class Chain<TChunkIn = NodeJS.BufferOrString, TChunkOut = NodeJS.BufferOrString> extends Duplex<TChunkIn, TChunkOut> {
    constructor(fns: StreamItem<TChunkIn, TChunkOut>[], options?: Chain.ChainOptions<TChunkIn, TChunkOut>);

    input: Stream;
    output: Stream;
    streams: Stream[];
}

declare namespace Chain {
    interface ChainOptions<TChunkIn = NodeJS.BufferOrString, TChunkOut = NodeJS.BufferOrString> extends DuplexOptions<TChunkIn, TChunkOut> {
        skipEvents?: boolean;
    }

    function chain<TChunkIn = NodeJS.BufferOrString, TChunkOut = NodeJS.BufferOrString>(fns: StreamItem[], options?: ChainOptions<TChunkIn, TChunkOut>): Chain<TChunkIn, TChunkOut>;
}
