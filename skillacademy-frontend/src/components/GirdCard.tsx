/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import CourseCard from './CourseCard'
import { useEffect, useState } from 'react';
import { db } from '@/firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';

const GirdCard = () => {
  const [formations, setFormations] = useState<any[]|null>([]);

  useEffect(() => {
    const getFormations = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'formations'));
        const formationsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log(formationsList);
        setFormations(formationsList);
      } catch (e) {
        console.log(e);
      }
    };
    getFormations();
    }, []);


  return (
    <div className='w-full flex justify-center'>
    <section className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {formations?.map((a,i)=>(
            <CourseCard key={i} name={a.name} status={a.status} niveau={a.niveau} url={a.image}  id={a.id}/>
        ))}
    </section>
    </div>
  )
}

export default GirdCard