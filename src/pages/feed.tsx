import { signOut, useSession } from 'next-auth/client'
import { Box, Button, Spinner, Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'

export default function Feed() {
  const [session, loading] = useSession()
  const router = useRouter()

  if (loading) {
    return (
      <Box
        display="flex"
        height="100vh"
        width="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Spinner size="xl" />
      </Box>
    )
  }

  if (!session) {
    router.push('/')
  }
  return (
    <VStack my="4rem">
      <Text>Hello, {session?.user?.name}</Text>
      <Button onClick={() => signOut()}>Log out</Button>
    </VStack>
  )
}
