export declare function getKeysByValue<Dict extends Record<string, any>>(object: Dict, value: Dict[keyof Dict]): string[];
export declare function getDeepValue(obj: any, keyPath: string, delim?: string): any;
