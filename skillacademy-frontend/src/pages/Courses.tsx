
import Footer from '@/components/Footer'
import GirdCardCourses from '@/components/GirdCardCourses'
import SearchOptions from '@/components/SearchOptions'
import { useState } from 'react'

const Courses = () => {
  const [level,setLevel]=useState<string>("all");
  const [categorie,setCategorie]=useState<string>("");
  return (
    <main className='container'>
      <SearchOptions level={level} setLevel={setLevel} categorie={categorie} setCategorie={setCategorie} />
      <GirdCardCourses level={level} categorie={categorie}/>
      <Footer/>
    </main>
  )
}

export default Courses