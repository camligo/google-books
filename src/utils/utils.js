export const cleanDescription = (description) => {
  if(!description) {
    return "";
  }
  // remove HTML tags
  let cleanText = description.replace(/<\/?[^>]+(>|$)/g, "");

  // replace HTML entities with their corresponding char
  cleanText = cleanText.replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'");

  return cleanText;
};

export const shortenTitle = (title, maxLength) => {
  if (title.length > maxLength) {
    return title.substring(0, maxLength) + "...";
  }
  return title;
}

export const shortenAuthors = (authors) => {
  if (authors.length < 3) {
    return authors.join(", ");
  } else {
    return authors.slice(0, 2).join(", ") + " et al."
  }
}
