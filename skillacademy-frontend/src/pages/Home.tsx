import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import GirdCard from '@/components/GirdCard'
import Hero from '@/components/Hero'
import MiddleBanner from '@/components/MiddleBanner'
import StatisticBanner from '@/components/StatisticBanner'
const Home = () => {
  return (
    <main className='container h-full bg-muted flex justify-center flex-col w-full'>
      <Hero/>
      {/* <CarouselCourses/> */}
      <StatisticBanner/>
      <MiddleBanner/>
      <Banner/>
      <GirdCard/>
      <Footer/>
    </main>
  )
}

export default Home