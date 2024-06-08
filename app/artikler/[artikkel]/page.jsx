import {getData} from "../../../sanity/sanity-utils"

export default async function Articles({ params }) {
  const slug = params.article;
  const article = await getData(slug)
  return (
    <section>
      <p></p>
    </section>
  );
}
