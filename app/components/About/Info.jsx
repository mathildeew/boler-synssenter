import RenderArticle from "../RenderArticle";

export default function Info(data) {
  const { data: article } = data;

  return (
    <section className="text-darkPurple flex flex-col items-center px-4 py-16 md:px-10 md:py-20">
      <RenderArticle title={"Om oss"} article={article} />
    </section>
  );
}
