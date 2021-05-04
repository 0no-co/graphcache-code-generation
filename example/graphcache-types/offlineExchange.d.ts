import { Exchange } from '@urql/core';
import { CacheExchangeOpts } from './cacheExchange';
export declare const offlineExchange: <C extends Partial<CacheExchangeOpts>>(opts: C) => Exchange;
