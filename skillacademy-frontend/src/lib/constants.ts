import { CardViewProps } from "@/components/CardView";
import { CourseCardProps } from "@/components/CourseCard";

export const url:CardViewProps[] = [
    {
    url:"https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
    url:"https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
    },
    {
    url:"https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
    url:"https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
    url:"https://images.pexels.com/photos/12899188/pexels-photo-12899188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
]


export const courses: CourseCardProps[] = [
    {
        id:1,
        name: "Langage C++",
        niveau: "debutant",
        url: "https://img-c.udemycdn.com/course/750x422/5363556_222c.jpg",
    },
    {
        id:2,
        name: "Introduction a Python",
        niveau: "debutant",
        url: "https://images.datacamp.com/image/upload/f_auto,q_auto:best/v1603718736/Why_Your_Company_Needs_Python_for_Business_Analytics_xzzles.png",
    },
    {
        id:3,
        name: "Administration Reseaux Linux",
        niveau: "expert",
        url: "https://media.licdn.com/dms/image/D4D12AQGxLt3lZb-3FA/article-cover_image-shrink_600_2000/0/1693882752310?e=2147483647&v=beta&t=oIqV0XAIi0Wqb8-HAFjyPP8310CE2rBd5paDKSryqcY",
    },
    {
        id:4,
        name: "Apprendre le HTML",
        niveau: "debutant",
        url: "https://camo.githubusercontent.com/3795e5487dfe7c70b09b3e40c9d7a170bbb61aaec2b8bc35a2b4d0b5af1205ca/68747470733a2f2f7777772e69696d2e66722f65636f6c652d7765622f77702d636f6e74656e742f75706c6f6164732f323031372f30312f48544d4c352e6a7067",
    },
    {
        id:5,
        name: "Apprendre React JS",
        niveau: "intermediaire",
        url: "https://letecode.com/storage/articles/September2021/fKFlgB6K1b9IwjcgwtGl.png",
    },
    {
        id:6,
        name: "Les Reseaux informatique",
        niveau: "intermediaire",
        url: "https://blog.lesjeudis.com/wp-content/uploads/2023/01/banniere-reseau-informatique.png",
    },
    // Ajoutez ici d'autres éléments selon vos besoins
];

export type User = {
    id?: string;
    displayName?: string;
    email?: string;
    password?: string;
    admin?:boolean
}