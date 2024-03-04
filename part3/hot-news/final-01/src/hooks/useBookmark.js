import { ref } from "vue";
export const useBookmark = () => {
  const showBookmark = ref(false);
  const toggleBookmark = () => {
    showBookmark.value = !showBookmark.value;
  };
  return{
      showBookmark,
      toggleBookmark
  }
};
