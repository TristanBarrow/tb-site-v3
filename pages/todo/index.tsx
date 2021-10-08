import TodoPage from "@components/pages/TodoPage";
import { useSession, signIn, signOut } from "next-auth/client"

const Todo = () => {
  const [ session, loading ] = useSession();
  return (
    <>
      {(session === null) && <>
        Not signed in <br/>
        <button onClick={() => signIn()}>Sign in</button>
      </>}
      {(session !== null) && <>
        <TodoPage />
      </>}
    </>
  )
}

export default Todo;