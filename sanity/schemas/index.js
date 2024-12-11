import siteSettings from "./storeInfo.js";
import homeMetadata from "./home/metadata.js";
import hero from "./home/hero.js";
import servicesMetadata from "./services/metadata.js";
import servicesInfo from "./services/info.js";
import services from "./services/services.js";
import brandsMetadata from "./brands/metadata.js";
import brands from "./brands/brands.js";
import aboutMetadata from "./about/metadata.js";
import about from "./about/about.js";
import newsMetadata from "./news/metadata.js";
import articles from "./news/article.js";
import imageCarousel from "./utils/carousel.js";
import privacyMetadata from "./privacy/metadata.js";
import privacy from "./privacy/privacy.js";

const schemas = [siteSettings, homeMetadata, hero, servicesMetadata, servicesInfo, services, brandsMetadata, brands, aboutMetadata, about, newsMetadata, articles, imageCarousel, privacyMetadata, privacy];

export default schemas;
