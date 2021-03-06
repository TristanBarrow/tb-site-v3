import { signIn, signOut, useSession } from 'next-auth/client';
import styled from 'styled-components';
import useSWR from 'swr';

const Thing = styled.div`
  color: red;
`;

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function User() {
  const [ session, loading ] = useSession();
  const { data, error } = useSWR('/api/get/str/obj-test', fetcher);
  return (
    <>
      {(session === null) && <>
        Not signed in <br/>
        <button onClick={() => signIn()}>Sign in</button>
      </>}
      {(session !== null) && <>
        Signed in as {JSON.stringify(session)} <br/>
        <button onClick={() => signOut()}>Sign out</button>
      </>}
    </>
  )
}