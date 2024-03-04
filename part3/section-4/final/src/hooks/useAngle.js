import { ref, computed } from 'vue';
export const useAngle = () => {
    // Angle
    const angle = ref(0);
    
    const circleAngle = computed(() => {
        return {
            transform: `rotate(${angle.value}deg)`,
        };
    });

    const changeAngle = (event) => {
        angle.value = event.target.value;
    };

    return{
        angle,
        circleAngle,
        changeAngle
    }
}