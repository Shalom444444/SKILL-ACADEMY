/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CourseCardProps } from "@/components/CourseCard";
import HeroVideo from "@/components/HeroVideo"
import SectionCourse from "@/components/SectionCourse";
import { db } from "@/firebase/firebase";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const SingleCourse = () => {
    const [myTraining,setMyTraining]=useState<CourseCardProps|any>({});
    const [chapiters,setChapiters]=useState<any[]>([]);
    const [video,setVideo]=useState<any>("");
    const [title,setTitle]=useState<string>("");
    const [content,setContent]=useState("");
    const {id} = useParams();
    const [,setIsLoading]=useState(true);
    useEffect(()=>{
      
      const getMyTraining = async () => {
        try {
          const userDocExist = await getDoc(doc(db, "formations",id??""));
          if (userDocExist.exists()) {
            console.log("Document data:", userDocExist.data()); 
            setMyTraining(userDocExist.data());
            setIsLoading(false);
          } else {
            console.log("No such document!");
          }
        } catch (e) {
          console.log(e);
        }
      };

      const getChapiters = async () => {
        try {
          const querySnapshot = await getDocs(query(collection(db, 'chapitres'),where('training','==',id)));
          const chapitersList = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          console.log(chapitersList);
          setChapiters(chapitersList);
        } catch (e) {
          console.log(e);
        }
      };

      if(id){
      getMyTraining();
      getChapiters();
      }

      if(!title||!content||!video){
      setTitle(chapiters[0]?.title)
      setVideo(chapiters[0]?.video)
      setContent(chapiters[0]?.content)
      }
    
    },[chapiters, content, id, title, video])

  return (
    <main className="mb-4">
        <HeroVideo id={myTraining.id} video={video} name={myTraining.name} url={myTraining.image} niveau={myTraining.niveau} />
        <SectionCourse setVideo={setVideo} setContent={setContent} setTitle={setTitle} content={content} title={title} chapiters={chapiters}/>
    </main>
  )
}

export default SingleCourse