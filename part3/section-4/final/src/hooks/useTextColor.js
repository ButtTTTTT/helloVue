import { ref } from "vue";
export const useTextColor = () => {
    // Text
    const textColor = ref("");
    const changeTextColor = (event) => {
        textColor.value = event.target.value;
    };
    return { textColor, changeTextColor }
};


