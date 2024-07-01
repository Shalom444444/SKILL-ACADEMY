
import { NavLink, Outlet } from 'react-router-dom'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'
import { Menu, User2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { User } from '@/lib/constants'

const Header = () => {
  const [user,setUser] = useState<User|null>(null)

  const Logout = async()=>{
    localStorage.removeItem("user")
    setUser(null)
  }

  useEffect(()=>{
    const getUser = async()=>{
    const USER = localStorage.getItem("user")
    if(USER){
      setUser(JSON.parse(USER))
    }
    else{
      setUser(null)
    }
    }
    getUser()
    return ()=>{
      setUser(null)
    }
  },[])
  return (
    <main className=' bg-muted'>
        <header className='w-full container h-20  flex items-center justify-between px-4'>
          <NavLink to={"/"} className='text-2xl font-semibold text-white'>
              <span className=' text-primary'>Skill</span>
              {" "}
              Academy
          </NavLink>
          <ul className='flex max-sm:hidden items-center gap-6 text-white font-semibold justify-center'>
            <NavLink to={"/tutoriels"}>Tutoriels</NavLink>
            <NavLink to={'/courses'}>Formations</NavLink>
            <NavLink to={"/#"} className=' text-center flex gap-2 items-center'>Premuim</NavLink>
          </ul>
          <div className=' flex gap-2 items-center'>
            {user?.email && <NavLink to={"/profile"} className={"p-2 rounded-full bg-muted-foreground flex items-center gap-1"}>
              <User2 size={32} className=' p-1 bg-white border rounded-full'/>
              <div className='max-md:hidden'>{user?.email??""}</div>
            </NavLink>}
            <NavLink to={user?.email?"/":'/login'} onClick={()=>{user?.email?Logout():null}} className={cn(buttonVariants({variant:'default'}),"max-sm:hidden rounded-full")}>
              {user?.email?"Se deconnecter":"Se connecter"}
            </NavLink>
            <button className={cn(buttonVariants({variant:'default',size:"sm"}),"sm:hidden rounded-xl")}>
              <Menu/>
            </button>
          </div>
        </header>
      <Outlet />
    </main>
  )
}

export default Header