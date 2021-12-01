export const capitalize = (allArticle: string): string => {
 const firstLetter = allArticle.charAt(0)
 return allArticle.replace(firstLetter, firstLetter.toUpperCase())
}
