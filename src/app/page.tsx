import TopicCreateForm from "@/components/topics/topic.create.form"
export default   function Home() {

  // const  session = await auth()
  return (
    <div className="grid grid-cols-4 gap-4 p-4" >
      <div className="col-span-3">
        <h1>Top Posts</h1>
      </div>
      <div>
        <TopicCreateForm />
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
  