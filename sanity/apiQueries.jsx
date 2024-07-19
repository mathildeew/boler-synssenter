export default function apiQueries(slug) {
  const query = {
    info: `
    *[_type == "siteSettings" && title == "Bøler Synssenter"][0]{
      address,
      openingHours,
      mail,
      phone,
      title,
    }
    `,

    articles: `
    *[_type == "article"]{
        _id,
        name,
        intro,
        "slug": slug.current,
        "image": image.asset -> url,
        // content
      }
      `,

    article: `
    *[_type == "article" && slug.current == "${slug}"][0]{
      _id,
      _updatedAt,
      "slug": slug.current,
      image,
      name,
      intro,
      content
    }
    `,
  };

  return query;
}
