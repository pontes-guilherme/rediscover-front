import {customRef, ref} from "vue";

const debounce = (fn: CallableFunction, delay = 0, immediate = false) => {
  // @ts-ignore
  let timeout: NodeJS.Timeout;

  return (...args: any) => {
    if (immediate && !timeout) fn(...args)
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

export const useDebounce = (initialValue: any, delay?: number, immediate = false) => {
  const state = ref(initialValue)

  return customRef((track, trigger) => ({
    get() {
      track()
      return state.value
    },
    set: debounce(
      (value: any) => {
        state.value = value
        trigger()
      },
      delay,
      immediate
    ),
  }))
}
