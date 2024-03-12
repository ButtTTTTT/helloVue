import { ref } from "vue";
import { getLocalStorage, setLocalStorage } from "@/utils/storageHelper";

export const useToggleBookmark = () => {
  const showBookmark = ref(false);
  const toggleBookmark = () => {
    showBookmark.value = !showBookmark.value;
  };

  return {
    showBookmark,
    toggleBookmark,
  };
};

export const useBookmark = () => {
  const bookmarkNews = ref(getLocalStorage("bookmark") || []);

  const addBookmarkNew = (addNew) => {
    bookmarkNews.value = [...new Set([...bookmarkNews.value, addNew])];

    setLocalStorage("bookmark", bookmarkNews.value);
  };

  const deleteBookmarkNew = (deleteNew) => {
    bookmarkNews.value = bookmarkNews.value.filter(
      (bookmarkNew) => bookmarkNew.title !== deleteNew.title
    );

    setLocalStorage("bookmark", bookmarkNews.value);
  };

  return { bookmarkNews, addBookmarkNew, deleteBookmarkNew };
};
