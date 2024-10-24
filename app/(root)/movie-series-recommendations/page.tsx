import React from "react"
import PageHeadline from "@/components/PageHeadline"
import { Recommendations } from "@/app/api/GoogleSheetAPI"
import ShowRecommendations from "@/components/ShowRecommendations"
import { generateMetadata } from "@/lib/utils"

const getRecommendationsTitles = async (): Promise<string> => {
  const recommendationsData = await Recommendations()
  const titles = recommendationsData.map((rec) => rec.title).join(", ")
  return titles
}
export const metadata = async () => {
  const recommendationsTitles = await getRecommendationsTitles()
  const recommendationsData = await Recommendations()

  return generateMetadata({
    title: "Latest Movie Recommendations",
    description:
      "Check out the latest movie recommendations from Dokmai Store. We recommend the best Netflix movies and series for you to enjoy!",
    url: "https://www.dokmaistore.com/movie-series-recommendations",
    image: recommendationsData[0].recommendationsimageUrl,
    keywords: `movie recommendations, netflix recommendations, top movies, recommendation by dokmai store, ${recommendationsTitles},`,
  })
}
const page = async () => {
  const recommendationsData = await Recommendations()
  return (
    <div className='flex flex-col justify-center w-full items-start px-5 xl:px-0 pt-20 xl:pt-40 __container'>
      <PageHeadline
        headline='Our Recommendations'
        description='Movies and Series Recommendations by Dokmai Store'
      />
      <ShowRecommendations
        recommendations={recommendationsData}
        paginations={true}
        itemsperPage={2}
      />
    </div>
  )
}

export default page
