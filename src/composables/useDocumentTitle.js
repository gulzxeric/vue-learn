import { onMounted, watch } from "vue";

export function useDocumentTitle(title) {
  onMounted(() => {
    document.title = title + ' - Vue Learn'
  })
}