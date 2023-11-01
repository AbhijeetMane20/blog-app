import create from "zustand";

export const useBlogStore = create((set) => {
  return {
    blogData: null,

    setBlogData: (data) => {
      set(() => ({
        blogData: data,
      }));
    },
  };
});
