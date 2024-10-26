import { Recommendations } from "@/app/api/GoogleSheetAPI"
import PageHeadline from "@/components/PageHeadline"
import PaginatedRecommendations from "@/components/PaginatedRecommendations"
import { generateMetadata } from "@/lib/utils"
import React from "react"
const getRecommendationsTitles = async (): Promise<string> => {
  const recommendationsData = await Recommendations()
  const titles = recommendationsData.map((rec) => rec.title).join(", ")
  return titles
}
export const metadata = async () => {
  const recommendationsTitles = await getRecommendationsTitles()
  const recommendationsData = await Recommendations()

  return generateMetadata({
    title: "Latest Movie and Series Recommendations",
    description:
      "Check out the latest movie recommendations from Dokmai Store. We recommend the best Netflix movies and series for you to enjoy!",
    url: "https://www.dokmaistore.com/movie-series-recommendations",
    image: recommendationsData[0].recommendationsimageUrl,
    keywords: `movie recommendations, netflix recommendations, top movies, recommendation by dokmai store, movie recommendations พากย์ไทย,movie recommendations, movie recommendations 2023, movie recommendations 2024, movie recommendations on netflix, movie recommendations romance, movie recommendations comedy, movie recommendations horror, movie recommendations action, movie recommendations 2022, movie recommendations cartoon, movie recommendations comedy action, movie recommendations classics, movie recommendations crime, movie recommendations coming of age, movie recommendations chick flicks, movie recommendations captions, movie recommendations comedy 2024, movie recommendations christian, movie recommendations based on movies you like, movie recommendations based on other movies, movie recommendations bollywood, movie recommendations best, movie recommendations bot, movie recommendations based on letterboxd, movie recommendations by genre, movie recommendations based on mood, movie recommendations bilibili, movie recommendations blog, movie recommendations disney, movie recommendations drama, movie recommendations dataset, movie recommendations date night, movie recommendations detective, movie recommendations dark romance, movie recommendations discord, movie recommendations disaster, movie recommendations drama romance, disney plus movies recommendations, movie recommendations ai, movie recommendations app, movie recommendations animation, movie recommendations adventure, movie recommendations amazon prime, movie recommendations action comedy, movie recommendations apple tv, movie recommendations about life, movie recommendations all time, best movie recommendations, bl anime movie recommendations, best movie recommendations on netflix, best horror movie recommendations, bl movie recommendations, bollywood movie recommendations, bilibili movie recommendations, best movie recommendations 2023, best movie recommendations reddit, best movie recommendations 2024, amazon prime movie recommendations, ai movie recommendations, animated movie recommendations, adventure movie recommendations, apple tv movie recommendations, aarp movie recommendations, anime movie recommendations romance, any movie recommendations meaning, anime movie recommendations 2023, american movie recommendations, classic movie recommendations, christian movie recommendations, crime movie recommendations, cartoons movie recommendations, current movie recommendations, cartoon movie recommendations 2023, comedy movie recommendations reddit, comedy movie recommendations 2023, catholic movie recommendations, comedy movie recommendations 2024, english movie recommendations, enemies to lovers movie recommendations, emotional movie recommendations, epoch times movie recommendations, enhypen movie recommendations, epic movie recommendations, elon musk movie recommendations, emergency intercom movie recommendations, english romance movie recommendations, exorcism movie recommendations, family movie recommendations, focus on the family movie recommendations, filipino movie recommendations, fall movie recommendations, french movie recommendations, filipino horror movie recommendations, fun movie recommendations, friday night movie recommendations, free movie recommendations, family movie recommendations netflix, date night movie recommendations, dystopian movie recommendations, david goggins movie recommendations, dark romance movie recommendations, disaster movie recommendations, dunkey 100 movie recommendations, disney cartoon movie recommendations, disney princess movie recommendations, disney animated movie recommendations, disney movie recommendations for kids, joe rogan movie recommendations, joe rogan scary movie recommendations, jinni movie recommendations, japanese movie recommendations romance, japanese anime movie recommendations, jordan peterson movie recommendations, japanese horror movie recommendations, jack hibbs movie recommendations, japanese movie recommendations reddit, john waters movie recommendations, indian movie recommendations, imdb movie recommendations, indie movie recommendations, if you like movie recommendations, infp movie recommendations, italian movie recommendations, interesting movie recommendations, indian movie recommendations netflix, instagram movie recommendations, i need movie recommendations, gl movie recommendations, good movie recommendations on netflix, great movie recommendations, glenn beck movie recommendations, good horror movie recommendations, good movie recommendations reddit, google movie recommendations, good movie recommendations 2023, good family movie recommendations, gxg movie recommendations, reddit movie recommendations, reddit horror movie recommendations, romance anime movie recommendations, recent movie recommendations, romcom movie recommendations, reddit movie recommendations 2023, romance movie recommendations 2023, romance movie recommendations 2024, reddit movie recommendations 2024, reddit comedy movie recommendations, horror movie recommendations reddit, hulu movie recommendations, hindi movie recommendations, hollywood movie recommendations, horror movie recommendations netflix, horror movie recommendations 2024, hoda and jenna movie recommendations, historical movie recommendations, how to ask for movie recommendations, hotstar movie recommendations, latest movie recommendations, letterboxd movie recommendations, love story movie recommendations, light movie recommendations, lgbtq movie recommendations, late night movie recommendations, latest netflix movie recommendations, last podcast on the left movie recommendations, lgbt movie recommendations, light hearted movie recommendations, mystery movie recommendations, max movie recommendations, mature movie recommendations, malayalam movie recommendations, magic movie recommendations, mafia movie recommendations, marvel movie recommendations, martin scorsese movie recommendations, mother daughter movie recommendations, mystery thriller movie recommendations, kids movie recommendations, korean movie recommendations 2023, korean movie recommendations 2024, korea movie recommendations, korean horror movie recommendations, korean romance movie recommendations, korean action movie recommendations, kid movie recommendations netflix, korean comedy movie recommendations, killer movie recommendations, youtube movie recommendations, yuri anime movie recommendations, youtube free movie recommendations, yuri movie recommendations, y2k movie recommendations, yeonjun movie recommendations, yoongi movie recommendations, youtube tv movie recommendations, movie recommendations for 12 year olds, streaming movie recommendations, scary movie recommendations on netflix, sad anime movie recommendations, scary movie recommendations reddit, showmax movie recommendations, stephen king movie recommendations, summer movie recommendations, short movie recommendations, shark movie recommendations, similar movie recommendations, movie recommendations generator, movie recommendations girly, movie recommendations google, movie recommendations github, movie recommendations good, movie recommendations gl, movie recommendations girls, movie genre recommendations, movie recommendations feel good, gay movie recommendations, zombie apocalypse movie recommendations, zombie movie recommendations korean, zenless zone zero heddy movie recommendations, zombie movie recommendations reddit, zombies movie recommendations พากย์ไทย, zizek movie recommendations, zzz movie recommendations, zombie movie recommendations, a24 movie recommendations zodiac, slavoj zizek movie recommendations, wlw movie recommendations, which kind of customer relationship is exhibited by hulu when it offers movie recommendations, western movie recommendations, weird movie recommendations, wholesome movie recommendations, weekend movie recommendations, websites for movie recommendations, what are some movie recommendations, wall street journal movie recommendations, wonwoo movie recommendations, movie recommendations hollywood, movie recommendations hindi, movie recommendations hulu, movie recommendations high school, movie recommendations horror 2024, movie recommendations hbo max, movie recommendations historical, movie recommendations hbo, movie recommendations horror comedy, new movie recommendations, new york times movie recommendations, netflix horror movie recommendations, netflix movie recommendations australia, netflix movie recommendations reddit, netflix movie recommendations romance, netflix movie recommendations comedy, npr movie recommendations, netflix family movie recommendations, netflix thriller movie recommendations, obama movie recommendations, obsessed movie recommendations, ott movie recommendations, oprah movie recommendations, older movie recommendations, obama movie recommendations 2023, outdoor movie recommendations, old hindi movie recommendations, old horror movie recommendations, online movie recommendations, movie recommendations japanese, movie recommendations july 2024, movie recommendations joe rogan, japan movie recommendations, japanese movie recommendations 2023, jdrama movie recommendations, jellyfin movie recommendations, movie recommendations korean, movie recommendations kids, movie recommendations k drama, movie recommendations kid friendly, movie recommendations korea, movie recommendations kaggle, movie recommendations kids netflix, sad movie recommendations korean, netflix movie recommendations korean, uk netflix movie recommendations, underrated movie recommendations, unique movie recommendations, movie recommendations uk, movie recommendations using machine learning, are netflix movie recommendations supervised or unsupervised learning, filmtrust movie recommendations using trust in web-based social networks, movie recommendations quiz, a privacy preserving system for movie recommendations using federated learning, movie recommendations using the deep learning approach, vampire movie recommendations, very bad wizards movie recommendations, vivamax movie recommendations, vogue movie recommendations, viu movie recommendations, vernon seventeen movie recommendations, valentine's day movie recommendations, vernon movie recommendations, virus movie recommendations, amazon prime video movie recommendations, movie recommendations english, movie recommendations engine, movie recommendations enemies to lovers, movie recommendations early 2000s, movie recommendations emotional, movie recommendations essay, movie recommendations email, movie recommendations example, movie recommendations ex machina, exorcist movie recommendations, movie recommendations reddit, movie recommendations romcom, movie recommendations reddit 2024, movie recommendations romantic, movie recommendations rotten tomatoes, movie recommendations random, movie recommendations romantic comedy, movie recommendations romance korean, movie recommendations romance comedy, movie recommendations meaning, movie recommendations mystery, movie recommendations musical, movie recommendations malayalam, movie recommendations max, movie recommendations magic, movie recommendations marvel, movie recommendations malaysia, movie recommendations machine learning, movie recommendations meme, movie recommendations quora, movie quote recommendations, horror movie recommendations quiz, queer movie recommendations, movie recommendation, movie recommendations for kids, movie recommendations fantasy, movie recommendations family, movie recommendations for date night, movie recommendations for couples, movie recommendations funny, movie recommendations for me, movie recommendations filipino, movie recommendations for girls night, movie recommendations site, movie recommendation system, movie recommendations sci fi, movie recommendations streaming, movie recommendations sad, movie recommendations suspense, movie recommendations survival, movie recommendations sad romance, movie recommendations scary, movie recommendations superhero, movie recommendations website, movie recommendations with plot twist, movie recommendations with family, movie recommendations war, movie recommendations with friends, movie recommendations when bored, movie recommendations western, movie recommendations wlw, movie recommendations when sick, movie recommendations with moral lesson, movie recommendations prime video, movie recommendations in netflix, movie recommendations instagram, movie recommendations imdb, movie recommendations indian, movie recommendations in youtube, movie recommendations in bigquery ml 2.5, movie recommendations if you like, movie recommendations instagram story, movie recommendations indie, movie recommendations in disney+, movie recommendations love story, movie recommendations like mean girls, movie recommendations letterboxd, movie recommendations like harry potter, movie recommendations list, movie recommendations like 365 days, movie recommendations like my fault, movie recommendations like the notebook, movie recommendations like flipped, movie recommendations love, quentin tarantino movie recommendations, quora movie recommendations, q movie, top movie recommendations, tubi movie recommendations, tamil movie recommendations, tiktok horror movie recommendations, tiktok netflix movie recommendations, thriller movie recommendations reddit, tiktok movie recommendations 2023, tween movie recommendations, top movie recommendations 2023, tik tok movie recommendations, movie recommendations zzz, movie recommendations zombie, movie recommendations zenless zone zero, movie recommendations zombies, movie recommendations thriller, movie recommendations to watch with friends, movie recommendations tiktok, movie recommendations tagalog, movie recommendations telugu, movie recommendations to watch with family, movie recommendations to stream, movie recommendations to watch, movie recommendations true story, movie recommendations to cry, movie recommendations youtube, movie recommendations youtube channel, movie recommendations if you like pride and prejudice, movie recommendations for young adults, movie recommendations 12 year olds, movie recommendations if you like knives out, movie recommendations 13 year olds, movie recommendations if you liked dune, movie recommendations if you like sicario, movie recommendations netflix, movie recommendations netflix 2024, movie recommendations netflix reddit, movie recommendations new, movie recommendations netflix romance, movie recommendations netflix comedy, movie recommendations netflix horror, movie recommendations netflix canada, movie recommendations now, movie recommendations not horror, movie recommendations prime, movie recommendations project, movie recommendations plot twist, movie recommendations philippines, movie recommendations pg13, movie recommendations pinterest, movie recommendations please, movie recommendations pg, movie recommendations peacock, movie recommendations on prime, movie recommendations on disney plus, movie recommendations on youtube, movie recommendations on netflix 2024, movie recommendations on hulu, movie recommendations on max, movie recommendations on netflix romance, movie recommendations on apple tv, movie recommendations of all time, plugged in movie recommendations, prime movie recommendations 2023, psychological thriller movie recommendations, pg movie recommendations, pg 13 movie recommendations, popular movie recommendations, peacock movie recommendations, psychological movie recommendations, pinoy movie recommendations, prime movie recommendations 2024, x movie review, movie recommendations xxtenations, movie recommendations xiaomi, netflix movie recommendations uk, netflix movie recommendations usa, netflix movie recommendations, netflix movie recommendations 2024, netflix movie recommendations 2023, netflix movie recommendations for 13 year olds, netflix movie recommendations horror, netflix movie recommendations philippines, netflix movie recommendations cartoon, netflix recommended movies, netflix movie recommendations action, netflix anime movie recommendations, any netflix movie recommendations, netflix movie recommendations of all time, netflix movie recommendations 2024 action, netflix action movie recommendations 2023, netflix and chill movie recommendations, netflix movie recommendations english, netflix movie recommendations hindi, netflix movie recommendations ireland, netflix movie recommendations thriller, netflix movie recommendations for kids, netflix movie recommendations for 12 year olds, netflix movie recommendations for family, netflix movie recommendations fantasy, netflix movie recommendations for 14 year olds, netflix movie recommendations funny, netflix movie recommendations for 10 year olds, netflix movie recommendations for couples, netflix movie recommendations feel good, netflix movie recommendations drama, action movie recommendations netflix, recommendations for a good movie on netflix, new netflix movie recommendations, nyt netflix movie recommendations, nigerian netflix movie recommendations, netflix movie recommendations nz, netflix recommendations for family movie night, netflix movie night recommendations, npr movie recommendations netflix, top 10 netflix movie recommendations 2023, top netflix movie recommendations, top 10 netflix movie recommendations 2024, top 10 netflix movie recommendations, movie recommendations on netflix for tweens, netflix movie recommendations tagalog, new york times netflix movie recommendations, best netflix movie recommendations, best netflix movie recommendations 2024, bollywood movie recommendations netflix, netflix fantasy movie recommendations, movie recommendations for kids on netflix, filipino movie recommendations netflix, netflix sci fi movie recommendations, funny movie recommendations on netflix, netflix drama movie recommendations, drama movie netflix, reddit netflix movie recommendations, netflix movie recommendations romcom, netflix movie recommendations romantic comedy, netflix movie recommendations 2023 romance, netflix movie recommendations 2023 reddit, netflix horror movie recommendations reddit, recommend movie on netflix, netflix war movie recommendations, good netflix movie recommendations, good horror movie recommendations on netflix, good movie recommendations on netflix for kids, netflix love movie recommendations, netflix recommendations movie list, netflix india movie recommendations, netflix movie recommendations hollywood, movie recommendations on netflix for 13 year olds, netflix movie recommendations malaysia, current netflix movie recommendations, christmas movie recommendations on netflix, netflix movie recommendations 2023 comedy, x (2022 netflix), new movie recommendations on netflix, family movie recommendations on netflix, comedy movie recommendations on netflix, netflix movie recommendations kids, netflix movie recommendations south africa, netflix movie recommendations suspense, netflix japanese movie recommendations, japanese movie netflix, netflix movie recommendations india, netflix malaysia movie recommendations, netflix mystery movie recommendations, netflix zombie movie recommendations, korean netflix movie recommendations, movie recommendations on netflix pg 13, sad movie recommendations netflix, netflix movie series recommendations, netflix high school movie recommendations, movie show recommendations netflix, netflix usa movie recommendations, horror netflix movie recommendations, netflix horror movie recommendations 2023, hindi movie recommendations netflix, netflix movie recommendations generator, netflix movie recommendations game, netflix movie recommendations guide, netflix movie recommendations good, netflix movie recommendations good movies, netflix movie recommendations viu, netflix movie recommendations vk, netflix movie recommendations video, netflix movie recommendations villain, netflix movie recommendations viral, netflix movie recommendations vs, netflix movie recommendations vs cinema, netflix movie recommendations xiaomi, netflix movie recommendations x, netflix movie recommendations wiki, netflix movie recommendations war, netflix movie recommendations watch, netflix movie recommendations quora, netflix movie recommendations quiz, netflix movie recommendations quotes, netflix movie recommendations quality, netflix movie recommendations list, netflix movie recommendations love, netflix movie recommendations last week, netflix movie recommendations list 2024, netflix movie recommendations love scene, netflix movie recommendations love movies 2022, netflix movie recommendations love story, netflix movie recommendations love movies, netflix movie recommendations japan, netflix movie recommendations japanese, netflix movie recommendations june 2024, netflix movie recommendations july 2024, netflix movie recommendations juni 2024, netflix movie recommendations january 2023, netflix movie recommendations japan movies 2022, netflix movie recommendations japanese movies, netflix movie recommendations jack reacher, netflix movie recommendations japan movies, netflix movie recommendations best, netflix movie recommendations bl, netflix movie recommendations bl series, netflix movie recommendations by country, netflix movie recommendations best recommended, netflix movie recommendations best movies, netflix movie recommendations best movies love, netflix movie recommendations best movies 2020, netflix series recommendations, netflix series recommendations 2023, netflix series recommendations ireland, netflix series recommendations reddit, netflix series recommendations australia, netflix series recommendations for 13 year olds, netflix series recommendations romance, netflix series recommendations for 12 year olds, netflix series recommendations comedy, netflix series recommendations for 14 year olds, netflix drama series recommendations, netflix recommendations, netflix recommended, netflix series ranking, netflix action series recommendations, any netflix series recommendations, netflix series recommendations english, netflix series recommendations eng sub, netflix series recommendations episodes, netflix series recommendations ending, netflix series recommendations engaged, netflix series recommendations english learners, netflix series recommendations 2024, netflix series recommendations uk, netflix series recommendations hindi, good netflix series recommendations, netflix gay series recommendations, best netflix series recommendations, netflix british series recommendations, netflix crime series recommendations, netflix series imdb, netflix series recommendations japan, netflix series recommendations july 2024, netflix series recommendations june 2024, netflix series recommendations japanese, netflix series recommendations juni 2024, netflix series recommendations jdrama, netflix horror series recommendations, netflix mini series recommendations, best netflix series, best netflix series of all time, best netflix series 2023, netflix korean series recommendations, netflix series korean, netflix series recommendations nz, netflix series recommendations new, a netflix series, drama netflix, k series netflix, netflix series recommendations xxtenations, netflix series recommendations x, series recommendations on netflix, netflix original series recommendations, good series recommendations on netflix, netflix comedy series recommendations, netflix limited series recommendations, netflix series list, reddit netflix series recommendations, netflix short series recommendations, netflix sci fi series recommendations, netflix family series recommendations, any recommendations for netflix series, recommendations for good series on netflix, recommendations for series to watch on netflix, netflix fantasy series recommendations, best recommendations for netflix series, recommendations of series to watch on netflix, netflix series recommendations zombie, netflix series recommendations zombies, netflix series recommendations zomboid, netflix series recommendations zero, netflix series recommendations z, netflix series recommendations z nation, netflix series recommendations zuul คือ, netflix series recommendations viu, netflix series recommendations vk, netflix series recommendations vietnam, netflix series recommendations villain, netflix series recommendations variety show, netflix series recommendations variety, netflix web series recommendations, netflix series recommendations quiz, netflix series recommendations quora, netflix series recommendations questions, netflix series recommendations queen of tears, netflix series recommendations quality, netflix series recommendations quality settings pc, netflix series recommendations quality settings, netflix series recommendations quotes, good netflix series, japanese netflix series, new netflix series recommendations, netflix tv series recommendations, netflix thriller series recommendations, top netflix series recommendations, top 10 netflix series recommendations, netflix series top 10, you netflix รีวิว, you netflix season 5, top 10 netflix series recommendations 2023, top 10 netflix recommendations 2024 series, top netflix series, vk netflix, netflix re zero, x netflix, netflix series recommendations pantip, netflix series recommendations philippines, netflix series recommendations prime video, netflix series recommendations prime, netflix series recommendations psychology, netflix series recommendations python, netflix series recommendations popular, netflix recommendations for serie,  ${recommendationsTitles},`,
  })
}
const page = () => {
  return (
    <div className='w-full __container min-h-screen mt-32 px-5 lg:px-0'>
      <PageHeadline
        headline='Movie and Series Recommendations'
        description='Check out the latest movie recommendations from Dokmai Store. We recommend the best Netflix movies and series for you to enjoy!'
      />
      <PaginatedRecommendations />
    </div>
  )
}

export default page
