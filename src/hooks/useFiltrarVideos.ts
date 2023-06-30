interface Ivideos {
  titulo: string,
  categoria: string
}

export const useFiltrarVideos = (
  selectedCategory: string,
  existingVideos: Ivideos[]
): Ivideos[] => {
  if (!selectedCategory) return existingVideos
  return existingVideos.filter(video => video.categoria === selectedCategory)
}
