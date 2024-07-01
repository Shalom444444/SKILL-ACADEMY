/* eslint-disable @typescript-eslint/no-explicit-any */

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, History, LibraryBigIcon, LucideLockKeyhole, PlusCircle, User2, UserCircle2 } from "lucide-react"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { SelectLevel } from "./SelectLevel"
import { useEffect, useState } from "react"
import SelectStatus from "./SelectStatus"
import { Textarea } from "./ui/textarea"
import SelectTraining from "./SelectTraining"
import { collection, doc, getDocs, setDoc, Timestamp } from "firebase/firestore"
import { db } from "@/firebase/firebase"
import { useNavigate } from "react-router-dom"
import CourseCardDash from "./CourseCardDash"
import toast from "react-hot-toast"
type TabsDashbordProps = {
    user?:any;
}
const TabsDashbord = (props:TabsDashbordProps) => {
    const [level,setLevel]=useState("");
    const [status,setStatus]=useState("")
    const [training,setTraining]=useState("")
    const [name ,setName]=useState("");
    const [image,setImage]=useState("");
    const [isLoading,setIsLoading]=useState(false);
    const [Error,setError]=useState("")
    const [title,setTitle]=useState("")
    const [video,setVideo]=useState("")
    const [content,setContent]=useState("")
    const [success,setSucess]=useState("")
    const [listFormations,setListFormations]=useState<any[]>([]);
    const router = useNavigate();

    const getFormations = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'formations'));
            const formationsList = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
            }));
            console.log(formationsList);
            setListFormations(formationsList);
        } catch (e) {
            console.log(e);
        }
        };
    useEffect(() => {

        if(isLoading===false){
            getFormations();
        }
        }, [isLoading]);

    const addTraining = async() => {
        if(!name || !image || !level || !status){
            toast.success("Veuillez remplir tous les champs");
            return
        }

    try {
        setIsLoading(true);
        const id=Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        await setDoc(doc(db, "formations", id), {
            id,
            name,
            image,
            niveau:level,
            status,
            createdAt: Timestamp.now(),
        })
        setIsLoading(false);
        setName("");
        setImage("");
        setLevel("");
        setStatus("");
        router("/courses")
        }
        catch(error){
            toast.error("Une erreur s'est produite");
            setIsLoading(false);
        }
    }



    const addChapiter= async() => {

        if(!title || !video || !training || !content){
            toast.error("Veuillez remplir tous les champs");
            return
        }

    try {
        setIsLoading(true);
        const id=Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        await setDoc(doc(db, "chapitres", id), {
            training,
            title,
            video,
            content,
            createdAt: Timestamp.now(),
        })
        toast.success("Votre chapitre a été ajouté avec succès")
        setIsLoading(false);
        setTitle("");
        setVideo("");
        setContent("");
        setTraining("");
        }
        catch(error){
            toast.error("Une erreur s'est produite");
            setIsLoading(false);
        }
    }

return (
    <section className="w-full flex items-center">
        <Tabs defaultValue="account" className="w-full max-sm:w-[400px]">

        <TabsList className="mt-6 bg-black/30 w-full flex justify-start">
            <TabsTrigger className="rounded-xl flex gap-2 justify-center" value="account"> <UserCircle2 size={16}/> Profil</TabsTrigger>
            {props.user?.admin ?<TabsTrigger className="rounded-xl gap-2 justify-center" value="add"> <PlusCircle size={16}/> Ajouter</TabsTrigger>:null}
            {props.user?.admin ?<TabsTrigger className="rounded-xl gap-2 justify-center" value="library"> <LibraryBigIcon size={16}/> Formations</TabsTrigger>:null}
            <TabsTrigger className="rounded-xl gap-2 justify-center" value="badge"><Award size={16}/>  Bagdes</TabsTrigger>
        </TabsList>
        <TabsContent className="text-white px-6" value="account">
        <h1 className="text-xl text-white font-semibold py-4 flex gap-2 items-center "><User2/>Mes informations</h1>

            <div className="w-full relative flex rounded-xl gap-4 h-40 p-4 bg-black/30 text-white">
                <div>
                    <Label className="text-muted-foreground">Nom d'utilisateur</Label>
                    <Input defaultValue={props.user?.displayName??""} type="text" className="flex-1 rounded-xl" placeholder=""/>
                </div>
                <div>
                    <Label className="text-muted-foreground">E-mail</Label>
                    <Input defaultValue={props.user?.email??""} type="text" className="rounded-xl"  placeholder=""/>
                </div>
                <div className="absolute bottom-4 right-4">
                    <Button
                    onClick={addTraining}
                    className="rounded-xl">
                        Enregistrer
                    </Button>
                </div>
            </div>

            <h1 className="text-xl text-white font-semibold py-4 flex gap-2 items-center "> <LucideLockKeyhole/> Mot de passe</h1>

            <div className="w-full relative flex rounded-xl gap-4 h-40 p-4 bg-black/30 text-white">
            <div>
                <Input type="password" className="flex-1 rounded-xl" placeholder="Nouveau mot de passe "/>
            </div>
            <div>
                <Input type="password" className="rounded-xl"  placeholder="confirmer le mot de passe"/>
            </div>
            <div className="absolute bottom-4 right-4">
                <Button className="rounded-xl">
                    Modifier mon mot de passe 
                </Button>
            </div>
            </div>
        </TabsContent>

        <TabsContent value="add" className="px-6">
        <h1 className="text-xl text-white font-semibold py-4 flex gap-2 items-center ">Ajouter une formation</h1>
        {Error&&<div className="h-12 p-4 text-center bg-red-500/10 border-red-500 border text-red-500">
            {Error??""}
            </div>}
            <div className="w-full relative flex rounded-xl flex-col gap-4 h-auto p-4 bg-black/30 text-white">
                <div>
                    <Input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="w-72 rounded-xl" placeholder="nom de la formation"/>
                </div>
                <div>
                    <Input value={image} onChange={(e)=>setImage(e.target.value)} type="text" className="w-72 rounded-xl" placeholder="URL de l'image"/>
                </div>
                <div className="flex gap-2">
                    <SelectLevel level={level} setLevel={setLevel}/>
                    <SelectStatus setStatus={setStatus} status={status}/>
                </div>
                <div className="absolute top-4 right-4">
                    <Button disabled={isLoading} onClick={addTraining} className="rounded-xl">
                        Enregistrer
                    </Button>
                </div>
            </div>

            <h1 className="text-xl text-white font-semibold py-4 flex gap-2 items-center ">Ajouter un chapitre</h1>

            {success&&<div className="h-12 p-4 text-center bg-green-500/10 border-green-500 border text-green-500">
            {success??""}
            </div>}

            {Error&&<div className="h-12 p-4 text-center bg-red-500/10 border-red-500 border text-red-500">
                {Error??""} 
            </div>}

            <div className="w-full relative flex rounded-xl flex-col gap-4 h-auto p-4 bg-black/30 text-white">

            <div>
                <Input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" className="w-72 rounded-xl" placeholder="Titre du chapitre"/>
            </div>
            <div>
                <Input value={video} onChange={(e)=>setVideo(e.target.value)} type="text" className="w-72 rounded-xl" placeholder="URL de la video"/>
            </div>
            <div>
                <SelectTraining listFormations={listFormations} setTraining={setTraining} training={training}/>
            </div>
            <div  className="flex gap-2">
                <Textarea value={content} onChange={(e)=>setContent(e.target.value)} className="rounded-xl" placeholder="ecrivez ici... "/>
            </div>

            <div className="absolute top-4 right-4">
                <Button disabled={isLoading} onClick={addChapiter} className="rounded-xl">
                    Enregistrer
                </Button>
            </div>
            </div>
        </TabsContent>
        <TabsContent value="library" className="px-6 w-full flex justify-center flex-col">
        {success&&<div className="h-12 p-4 flex flex-col items-center justify-center text-center bg-green-500/10 border-green-500 border text-green-500">
            {success??""}
            </div>}

            {Error&&<div className="h-12 p-4 flex flex-col items-center justify-center text-center bg-red-500/10 border-red-500 border text-red-500">
                {Error??""} 
                </div>
            }
        <section className="p-4  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {listFormations?.map((a,i)=>(
            <CourseCardDash listFormations={listFormations} key={i} getFormations={getFormations} setLoading={setIsLoading} setError={setError} setSuccess={setSucess} name={a.name} status={a.status} niveau={a.niveau} url={a.image}  id={a.id}/>
        ))}

    </section>
        </TabsContent>
        <TabsContent className="px-6" value="history">
        <h1 className="text-xl text-white font-semibold py-4 flex gap-2 items-center "><History/> Votre historique</h1>
        </TabsContent>
        <TabsContent value="badge">
            <div className="w-full flex items-center justify-center text-mute">aucune bagde</div>
        </TabsContent>
        </Tabs>

    </section>
  )
}

export default TabsDashbord