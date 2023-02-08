import React from 'react'
import { useState,useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'

import NewsCards from './components/NewsCards'

const alanKey = "11a01b055c40f4d46e1c90c8d8aca24b2e956eca572e1d8b807a3e2338fdd0dc/stage"


function App() {
  const [dark,setdark] = useState(true)
  const [lightimg,setlightimg] = useState()
  const [newsArticles,setNewsArticles] = useState([])
  const [activeArticle,setActiveArticle] = useState(-1)

  useEffect(()=>{
    alanBtn({
      key:alanKey,
      onCommand:({command,articles,number})=>{
        if(command === 'newHeadLines'){
          setNewsArticles(articles)
        }else if(command === 'highlight'){
          setActiveArticle((previousActiveArticle)=> previousActiveArticle + 1  )
        }else if(command === 'open'){
          const parsedNumber = number.length > 2 ? wordsToNumbers(number) : number;
          const article = articles[parsedNumber - 1]
          if(parsedNumber>20){
            alanBtn().playText("Please try that again.")
          }else if(article){
            window.open(article.url,'_blank')
          }
        }
      }
    })
  })  

  return (
    
     <>
     <div style={{background:'black'}}> 
     <div className='container h-screen'>
     <div className='w-full flex justify-between items-center h-16 mx-4' >
       <img className='h-16' src='https://alan.app/brand_assets/logo-horizontal/white/alan-logo-horizontal-white.png' />
     </div>
     <NewsCards articles = {newsArticles} activeArticle = {activeArticle} />
     </div>
     </div>
     </>
  )
}

export default App
