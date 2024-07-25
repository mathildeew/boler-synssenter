const apiQueries = (slug) => ({
  info: `
    *[_type == "siteSettings" && title == "Bøler Synssenter"][0]{
      address,
      openingHours,
      mail,
      phone,
      title,
    }
    `,

  about: `
    *[_type == "about"][0]{
      intro,
      "imageAlt": image.alt,
      "imageUrl": image.asset->url,
      content
   }
   `,

  hero: `
    *[_type == "hero"][0]{
      title,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt,
      text,
      link
    }  
    `,

  articles: `
    *[_type == "article"]| order(_createdAt desc){
      _id,
      name,
      intro,
      "slug": slug.current,
      "image": image.asset -> url,
      _createdAt
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
});

export default apiQueries;
