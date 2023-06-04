import { createApp } from 'vue';
import ConfirmDialog from "./components/wrapper.js";

type ConfirmOptions = {
    message: string;
    onDone?: () => void;
    onClose?: () => void;
};
export default function useConfirm() {
    const confirm = (options: ConfirmOptions): void => {
        if (options?.message) {
            const app = createApp(ConfirmDialog, {
                options,
                onDone: async () => {
                    await options.onDone?.();
                    app.unmount();
                },
                onClose: async () => {
                    await options.onClose?.();
                    app.unmount();
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
