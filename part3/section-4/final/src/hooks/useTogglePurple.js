import { ref } from "vue";
export const useTogglePurple = () => {
    // Toggle purple
    const isPurple = ref(false);
    const togglePurple = () => {
        isPurple.value = !isPurple.value;
    };
    return {
        isPurple,
        togglePurple
    }
}




