import React,{useState,useEffect,createRef} from 'react'
import classNames from 'classnames'

const NewsCard = ({article:{description,publishedAt,source,title,url,urlToImage},i,activeArticle}) => {

  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);
  useEffect(() => {
    window.scroll(0, 0);

    setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
  }, []);
  useEffect(() => {
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);

  return (
    <div ref={elRefs[i]} className={classNames('hello',activeArticle === i ? 'bye' : null)} >
     
        <img className='w-fit' src={urlToImage || "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"} />

        <div className='flex justify-between text-xs text-slate-500 mx-2 my-1'>
          <p className='text-xs'>{(new Date(publishedAt)).toDateString()}</p>
          <p className='text-xs'>{source.name}</p>
        </div>

        <p className=' text-lg text-black font-semibold flex justify-center items-center mx-2 my-1'>{title}</p> 

        <div>
          <p className='text-xs flex justify-center items-center mx-2 my-1 text-slate-500'>{description}</p>
        </div>


      <div className='flex justify-between text-base mx-2 my-2 text-black'>
       <a href={url} target='_blank'><button className=' underline' >Learn More</button></a> 
        <p className=''>{i+1}</p>  
      </div>
    </div>
  )
}


export default NewsCard