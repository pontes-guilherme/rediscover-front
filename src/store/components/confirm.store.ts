import {defineStore} from "pinia";
import {ref} from "vue";

export const useConfirm = defineStore("confirm", () => {
    const show = ref(false)
    const title = ref('')
    const message = ref('')

    let promiseResolve: CallableFunction;

    const open = (
        confirmTitle: string,
        confirmMessage: string,
    ) => {
        title.value = confirmTitle
        message.value = confirmMessage
        show.value = true

        return new Promise<{ confirm: boolean }>((resolve) => {
            promiseResolve = resolve;
        });
    }

    const onConfirm = () => {
        promiseResolve({
            confirm: true,
        });
        show.value = false;
    }

    const onCancel = () => {
        promiseResolve({
            confirm: false,
        });
        show.value = false;
    }

    return {
        show,
        title,
        message,
        onConfirm,
        onCancel,
        open,
    }
});
