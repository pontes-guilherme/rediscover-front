import {defineStore} from "pinia";
import {ref} from "vue";

type Variants = 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain';
type Locations = 'top' | 'bottom';
type Positions = 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky';

interface Props {
    snackbar: boolean
    validationMessage: string
    timeout: number
    color: string
    variant: Variants
    location: Locations
    position?: Positions
}

export const useSnackbarStore = defineStore('snackbar', () => {
    const snackbar = ref(false);
    const validationMessage = ref('');
    const timeout = ref(3000);
    const variant = ref<Variants>('tonal');
    const color = ref('error');
    const location = ref<Locations>('bottom');
    const position = ref<Positions>();

    function showSnackbar(message: string) {
        validationMessage.value = message;
        snackbar.value = true;
    }

    function hideSnackbar() {
        snackbar.value = false;
    }

    function setProps(newProps: Props) {
        Object.assign({timeout, variant, color, location, position}, newProps);
    }

    function error(message: string) {
        color.value = 'error';
        showSnackbar(message);
    }

    function success(message: string) {
        color.value = 'success';
        showSnackbar(message);
    }

    return {
        snackbar,
        validationMessage,
        timeout,
        variant,
        color,
        location,
        position,
        error,
        success,
        showSnackbar,
        hideSnackbar,
        setProps
    };
})
