import { createApp } from 'vue';
import ConfirmDialog from "./components/ConfirmDialog.vue";

interface ConfirmOptions {
    message: string;
    onDone?: () => void;
    onClose?: () => void;
}

export default function useConfirm() {
    const confirm = (options: ConfirmOptions): void => {
        if (options?.message) {
            const app = createApp(ConfirmDialog, {
                options,
                onDone: async () => {
                    await options.onDone();
                    app.unmount(dialog);
                },
                onClose: async () => {
                    await options.onClose();
                    app.unmount(dialog);
                },
            });

            const dialog = document.createElement('div');
            document.body.appendChild(dialog);
            app.mount(dialog);
        }
    }

    return {
        confirm,
    };
}

