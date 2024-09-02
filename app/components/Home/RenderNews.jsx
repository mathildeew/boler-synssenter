import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function RenderNews(data) {
  const { data: articles } = data;
  const [articleId, setArticleId] = useState(null);

  const responsive = {
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  const articlesMap = articles.map((article) => {
    return (
      <Link
        key={article._id}
        href={`/aktuelt/${article.slug}`}
        onMouseEnter={() => {
          setArticleId(article._id);
        }}
        onMouseLeave={() => {
          setArticleId(null);
        }}
        className="h-full border-2"
      >
        <div className="text-darkPurple w-full h-full flex flex-col gap-3 items-center">
          <div className="w-full rounded-3xl overflow-hidden">
            <div className={`w-full h-72 transition-all ease-in-out duration-300 overflow-hidden ${articleId === article._id ? "scale-[110%]" : "scale-1"}`}>
              <Image src={article.image} alt={article.name} width={1000} height={1000} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
          <div>
            <h3>{article.name}</h3>
            <p>{article.intro}</p>
          </div>
        </div>
      </Link>
    );
  });

  const CustomDot = ({ index, onClick, active }) => {
    return (
      <button
        onClick={(e) => {
          onClick();
          e.preventDefault();
        }}
        className={classNames("custom-dot", {
          "custom-dot--active": active,
        })}
      >
        {React.Children.toArray(articlesMap)[index]}
      </button>
    );
  };

  return (
    <div className="max-w-[1460px] w-full grid gap-6">
      <div className="grid gap-6 gridExpand:hidden">
        <Carousel responsive={responsive} arrows={false} showDots customDot={<CustomDot />}>
          {children}
        </Carousel>
      </div>
      <div className="grid-cols-2 gap-6 hidden gridExpand:grid lg:grid-cols-4">
        {articles.map((article) => {
          return (
            <Link
              key={article._id}
              href={`/aktuelt/${article.slug}`}
              onMouseEnter={() => {
                setArticleId(article._id);
              }}
              onMouseLeave={() => {
                setArticleId(null);
              }}
            >
              <div className="text-darkPurple w-full h-full flex flex-col gap-3 items-center">
                <div className="w-full rounded-3xl overflow-hidden">
                  <div className={`w-full h-72 transition-all ease-in-out duration-300 overflow-hidden ${articleId === article._id ? "scale-[110%]" : "scale-1"}`}>
                    <Image src={article.image} alt={article.name} width={1000} height={1000} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                </div>
                <div>
                  <h3>{article.name}</h3>
                  <p>{article.intro}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
