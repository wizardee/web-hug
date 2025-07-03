interface DisclosureProps {
    opened?: boolean;
    initial?: boolean;
}
export declare function useDisclosure(props?: DisclosureProps): {
    opened: import('vue').Ref<boolean, boolean>;
    onToggle: () => boolean;
    onOpen: () => boolean;
    onClose: () => boolean;
};
export {};
