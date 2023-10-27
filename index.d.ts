interface Options {
    width?: number;
    mobile?: boolean;
    fontSize?: string;
    metaViewport?: boolean;
    userScalable?: string | null;
    initialScale?: string | null;
    minimumScale?: string | null;
    maximumScale?: string | null;
}
interface StoreOptions {
    options: Options;
    docInfo: {
        meta: Element;
        rootSize: string;
    };
}
declare function init(options?: Options): void;
declare const _default: {
    init: typeof init;
    readonly info: StoreOptions;
};

export { Options, StoreOptions, _default as default };
