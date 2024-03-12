import { ref } from "vue";

export const useHidden = () => {
  const hiddenNews = ref([]);

  const addHiddenNew = (addNew) => {
    hiddenNews.value = [...new Set([...hiddenNews.value, addNew])];
  };

  return { hiddenNews, addHiddenNew };
};
