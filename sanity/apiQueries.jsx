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

  homeMetadata: `
    *[_type == "homeMetadata"][0]{
      title,
      description
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

  servicesMetadata: `
    *[_type == "servicesMetadata"][0]{
      title,
      description
    }  
    `,

  services: `
    *[_type == "services"]{
      title,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt,
      text,
    } 
    `,

  aboutMetadata: `
    *[_type == "aboutMetadata"][0]{
      title,
      description
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

  newsMetadata: `
   *[_type == "newsMetadata"][0]{
     title,
     description
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
      "imageAlt": image.alt,
      "imageUrl": image.asset->url,
      name,
      intro,
      content
    }
    `,
});

export default apiQueries;
