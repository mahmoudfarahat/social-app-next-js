import { Button } from "@nextui-org/react";
import * as actions from '@/actions'
 import {auth } from '@/auth'
 import Profile from '@/components/profile'
import Header from "@/components/header";

export default   function Home() {

  // const  session = await auth()
  return (
    <div>
      Home Page
      {/* <form action={actions.signIn}>
      <Button type="submit">Click </Button>
      </form>

      <form action={actions.signOut}>
      <Button type="submit">Sign Out </Button>
      </form>
{
  session?.user? <div>{JSON.stringify(session.user)}</div> : <div>Signed out</div>
}
    <Profile />  */}
    </div>
    
  )
}
  