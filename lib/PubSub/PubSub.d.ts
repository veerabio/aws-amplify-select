/// <reference types="zen-observable" />
import * as Observable from 'zen-observable';
import { PubSubProvider, PubSubOptions, ProvidertOptions } from './types';
export default class PubSub {
    private _options;
    private _pluggables;
    /**
     * Initialize PubSub with AWS configurations
     *
     * @param {PubSubOptions} options - Configuration object for PubSub
     */
    constructor(options: PubSubOptions);
    /**
     * Configure PubSub part with configurations
     *
     * @param {PubSubOptions} config - Configuration for PubSub
     * @return {Object} - The current configuration
     */
    configure(options: PubSubOptions): PubSubOptions;
    /**
     * add plugin into Analytics category
     * @param {Object} pluggable - an instance of the plugin
     */
    addPluggable(pluggable: PubSubProvider): Promise<object>;
    publish(topics: string[] | string, msg: any, options: ProvidertOptions): Promise<void[]>;
    subscribe(topics: string[] | string, options: ProvidertOptions): Observable<any>;
}
