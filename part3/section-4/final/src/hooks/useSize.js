import { ref,computed } from 'vue';
export const useSize = () => {
    // Size
    const size = ref(200);
    const circleSize = computed(() => {
        return {
            height: `${size.value}px`,
            width: `${size.value}px`,
            lineHeight: `${size.value}px`,
        };
    });
    const changeSize = (event) => {
        size.value = event.target.value;
    };
    return {
        size,
        circleSize,
        changeSize
    }
}