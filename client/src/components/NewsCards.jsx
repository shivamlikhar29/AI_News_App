import React from "react";

import NewsCard from "./NewsCard";

const infoCards = [
  {
    color: "#00838f",
    title: "Latest News",
    info: " Get the latest or recent news From the various countrys",
    text: "Give me the latest news",
  },
  {
    color: "#1565c0",
    title: "News by Categories",
    info: "Business, Entertainment, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "#4527a0",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5",
  },
  {
    color: "#283593",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
];

const NewsCards = ({ articles, activeArticle }) => {
  if (articles.length == 0) {
    return (
      <div className="flex justify-center items-center flex-wrap mt-20 w-full">
        {infoCards.map((infoCard) => (
          <div className="m-8 lg:mt-20 h-96 w-80 rounded flex flex-col justify-between items-center"
            style={{ backgroundColor: infoCard.color }}
          >
              <div className=" text-white text text-lg font-bold mt-2">
                <h3 className="">
                  {infoCard.title}
                </h3>
              </div>
              <div className=" text-white mx-2 text-base font-normal sm:text-lg text-center">
                <p className="">{infoCard.info}</p>
              </div>
              <div className=" text-white mx-2 mb-2 text-center">
                <p>
                  Try Saying:
                  <br /> <i>{infoCard.text}</i>
                </p>
              </div>
            </div>
        ))}
      </div>
    );
  }

  return(
    <div>
        <div className=" mx-4 grid grid-cols-1 place-items-center place-content-center gap-4 sm:grid-cols-2 sm:mr-1 md:grid-cols-3 lg:grid-cols-4">
          {articles.map((article,i)=>(
             <div className= "flex h-full w-full"><NewsCard article={article} activeArticle={activeArticle} i={i}/></div>
          ))}
        </div>
    </div>
  )
};

export default NewsCards;
