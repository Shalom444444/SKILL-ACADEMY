/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button';
import { Edit, Trash2 } from 'lucide-react';
import { collection, deleteDoc, doc, getDocs, query, Timestamp, updateDoc, where } from 'firebase/firestore';
import { db } from '@/firebase/firebase';
import { DialogTemplate } from './DialogTemplate';
import { Input } from './ui/input';
import { SelectLevel } from './SelectLevel';
import SelectStatus from './SelectStatus';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { SelectChapiter } from './SelectChapiter';
import SelectTraining from './SelectTraining';
import { Textarea } from './ui/textarea';
export type CourseCardProps={
    id:number;
    name:string;
    niveau:string;
    url:string;
    status?:string;
    video?:string;
    setError:(e:any)=>void;
    setSuccess:(e:any)=>void;
    setLoading:(e:any)=>void;
    getFormations:any
    listFormations:any;
}
const CourseCardDash = (props:CourseCardProps) => {
  const [level,setLevel]=useState("");
  const [status,setStatus]=useState<any>("")
  const [training,setTraining]=useState("")
  const [name ,setName]=useState("");
  const [image,setImage]=useState("");
  const [isLoading,setIsLoading]=useState(false);
  const [video,setVideo]=useState<any>("")
  const [title,setTitle]=useState<any>();
  const [content,setContent]=useState<any>();
  const [chapiters,setChapiters]=useState<any[]>([])
  const [oneChapiter,setOneChapiter]=useState<any>("");


  const getChapiters = async (id:any) => {
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


  const deleteTraining=async(id:string)=>{
    props.setLoading(true)
    await deleteDoc(doc(db, "formations", id))
    .then(()=>{
      // props.setSuccess("suppression reussie");
      props.getFormations()
      props.setLoading(false)
    })
    .catch(()=>{
      props.setError("une erreur s'est produite")
      props.setLoading(false)
    })
  }

  const updateTraining = async(id:any) => {
    if(!name || !image || !level || !status){
        toast.error("Veuillez remplir tous les champs");
        return
    }

try {
    setIsLoading(true);

    await updateDoc(doc(db, "formations", id), {
        name,
        image,
        niveau:level,
        status,
        updatedAt: Timestamp.now(),
    })
    props.getFormations()
    toast.success("la formation "+props.name+"a ete modifie");
    setIsLoading(false);
    setName("");
    setImage("");
    setLevel("");
    setStatus("");
    
    }
    catch(error){
        toast.error("Une erreur s'est produite");
        setIsLoading(false);
    }
}


useEffect(()=>{
  setImage(props.url)
  setName(props.name)
  setLevel(props.niveau)
  setStatus(props.status)
  getChapiters(props.id)
  setTitle(chapiters[0]?.title)
  setVideo(chapiters[0]?.video)
  setContent(chapiters[0]?.content)
  setOneChapiter(chapiters[0]?.id)
    
},[])

useEffect(()=>{
  if(oneChapiter!==""){

    const result = chapiters.map((c:any)=>{
      if(c.id===oneChapiter){
        setTitle(c.title)
        setVideo(c.video)
        setContent(c.content)
      } 
    })
    console.log(result);
  }
},[chapiters, oneChapiter])

  const updateChapiter = async(id:any)=> {
    
    if(!title || !video || !training || !content){
      toast.error("Veuillez remplir tous les champs");
      return
  }
  try {
    setIsLoading(true);

    await updateDoc(doc(db, "chapitres", id), {
      training,
      title,
      video,
      content,
      updatedAt: Timestamp.now(),
    })

    props.getFormations()
    toast.success("le chapitre "+title+"a ete modifie");
    setIsLoading(false);
    setName("");
    setImage("");
    setLevel("");
    setStatus("");
    
    }
    catch(error){
        toast.error("Une erreur s'est produite");
        setIsLoading(false);
    }
  }

  return (
    <div className={'rounded-xl hover:shadow-xl'}>
    <Card className="w-full border-muted max-w-sm rounded-xl">
      <img
        alt="Course Image"
        className="w-full rounded-t-xl object-cover"
        height={225}
        src={props.url}
        style={{
          aspectRatio: "400/225",
          objectFit: "cover",
        }}
        width={400}
      />
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{props.name}</h3>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Niveau {" "}
          {props.niveau}
        </p>
        <div className='flex justify-between items-center'>

          <div className="flex items-center mt-4 space-x-1 gap-2">
            <DialogTemplate
            title='Voulez-vous supprimer cette formation ?'
            buttonTrigger={
              <Button 
              className='rounded-xl flex justify-between gap-4 bg-red-500 hover:bg-red-600 text-white' >Supprimer <Trash2 size={15}/></Button>
            }

            close={
                  <Button className='rounded-xl flex justify-between gap-4'>Annuler</Button>
            }

            footer={
              <Button 
            onClick={()=>{deleteTraining(props.id.toString())}}
            className='rounded-xl flex justify-between gap-4 bg-red-500 hover:bg-red-600 text-white' >Supprimer definitivement <Trash2 size={15}/></Button>
            }
            />

            <DialogTemplate
            title='Mettre a jour votre formation'
            buttonTrigger={
              <Button className='rounded-xl flex justify-between gap-4'>Modifer <Edit size={15}/></Button>
            }
            content={
              <div className="w-full relative flex rounded-xl flex-col gap-4 h-auto p-4 bg-black/30 text-white">
              <div>
                  <Input defaultValue={props.name} onChange={(e)=>setName(e.target.value??props.name)} type="text" className="w-72 rounded-xl" placeholder="nom de la formation"/>
              </div>
              <div>
                  <Input defaultValue={props.url} onChange={(e)=>setImage(e.target.value??props.url)} type="text" className="w-72 rounded-xl" placeholder="URL de l'image"/>
              </div>
              <div className="flex gap-2">
                  <SelectLevel  level={level} setLevel={setLevel}/>
                  <SelectStatus  setStatus={setStatus} status={status}/>
              </div>
          </div>
            }
            close={
              <div className=" flex items-center gap-2">
              <Button  className="rounded-xl">
                annuler
              </Button>

              <Button disabled={isLoading} onClick={()=>updateTraining(props.id)} className=" bg-yellow-500 hover:bg-yellow-600 rounded-xl">
                  Enregistrer
              </Button>
          </div>
            }
            />

            <DialogTemplate
            title='Mettre a jour les chapitres des vos chapitres'
            buttonTrigger={
              <Button 
              className='rounded-xl' variant={"outline"} >Chapitres </Button>
            }
            content={
              <div className="w-full relative flex rounded-xl flex-col gap-4 h-auto p-4 bg-black/30 text-white">
                <SelectChapiter oneChapiter={oneChapiter} chapiters={chapiters} setChapiter={setOneChapiter}/>
                <div>
                    <Input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" className="w-72 rounded-xl" placeholder="Titre du chapitre"/>
                </div>
                <div>
                    <Input value={video} onChange={(e)=>setVideo(e.target.value)} type="text" className="w-72 rounded-xl" placeholder="URL de la video"/>
                </div>
                <div>
                    <SelectTraining listFormations={props.listFormations} setTraining={setTraining} training={training}/>
                </div>
                <div  className="flex gap-2">
                    <Textarea value={content} onChange={(e)=>setContent(e.target.value)} className="rounded-xl" placeholder="ecrivez ici... "/>
                </div>
    
                <div className="absolute top-4 right-4">
                    <Button disabled={isLoading} onClick={()=>{
                        updateChapiter(oneChapiter)
                    }} className="rounded-xl">
                        Enregistrer
                    </Button>
                </div>
              </div>
            }
            />
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
  )
}



export default CourseCardDash