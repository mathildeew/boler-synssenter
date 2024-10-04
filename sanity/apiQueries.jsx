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

  servicesInfo: `
    *[_type == "servicesInfo"][0]{
      title,
      description,
      intro
    }  
    `,

  services: `
    *[_type == "services"]{
      _id,
      title,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt,
      text,
    } 
    `,

  brandsMetadata: `
    *[_type == "brandsMetadata"][0]{
      title,
      description
    }  
    `,

  brands: `
    *[_type == "brands"] | order(name asc){
      _id,
      inFocus,
      "focusUrl": focusImage.asset->url,
      "focusAlt": focusImage.alt,
      name,
      carousel,
      info,
      url
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
      title,
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
      title,
      intro,
      content
    }
    `,
});

export default apiQueries;
