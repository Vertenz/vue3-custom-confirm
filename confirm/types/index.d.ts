import { App, Component } from 'vue';

declare module 'vue3-custom-confirm' {
    export interface ConfirmOptions {
        message: string;
        onDone?: () => void;
        onClose?: () => void;
    }

    export function useConfirm(): {
        confirm: (options: ConfirmOptions) => void;
    };

    export const ConfirmDialog: Component;
}