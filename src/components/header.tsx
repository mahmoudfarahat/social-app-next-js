import Link from "next/link";
import{
Navbar,
NavbarBrand,
NavbarContent,
NavbarItem,
Input,
 
}  from '@nextui-org/react'
import { Suspense } from 'react'

import SearchInput from '@/components/search-input'

 import HeaderAuth from '@/components/header-auth'
 
export default   function Header() {
  
 
    return(

    <Navbar className="shadow mb-6" >
        <NavbarBrand>
            <Link href="/">Discuss</Link>
        </NavbarBrand>
        <NavbarContent justify="center">
        <NavbarItem>
            <Suspense>
            <SearchInput/>
            </Suspense>
        </NavbarItem>
        </NavbarContent>
         <NavbarContent justify="end">
         
                
 <HeaderAuth />
 
       
        </NavbarContent>
    </Navbar>


    )
}

