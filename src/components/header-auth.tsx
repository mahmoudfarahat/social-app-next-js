import Link from "next/link";
import{
Navbar,
NavbarBrand,
NavbarContent,
NavbarItem,
Input,
Button,
Avatar,
Popover,
PopoverTrigger,
PopoverContent
}  from '@nextui-org/react'

import { useSession } from "next-auth/react";
import * as actions from '@/actions'

export default function HeaderAuth(){

    const session = useSession()

    
}