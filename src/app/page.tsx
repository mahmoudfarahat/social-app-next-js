import TopicCreateForm from "@/components/topics/topic.create.form"
import TopicList from "@/components/topics/topic-list"
import { Divider } from "@nextui-org/react"
export default   function Home() {

  // const  session = await auth()
  return (
    <div className="grid grid-cols-4 gap-4 p-4" >
      <div className="col-span-3">
        <h1>Top Posts</h1>
      </div>
      <div className="border shadow py-3 px-2">
        <TopicCreateForm />
  <Divider className= "my-2" />
    <h3 className= "text-lg">Topics</h3>
        <TopicList/>
      </div>
      {
        
      /* <form action={actions.signIn}>
      <Button type="submit">Click </Button>
      </form>

      <form action={actions.signOut}>
      <Button type="submit">Sign Out </Button>
      </form>
{
  session?.user? <div>{JSON.stringify(session.user)}</div> : <div>Signed out</div>
}
    <Profile />  */
    }
    </div>
    
  )
}
  