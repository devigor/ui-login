import { signIn, useSession } from 'next-auth/client'
import { Box, Flex, Input, Text } from '@chakra-ui/react'
import { SocialButton } from 'components/Button'
import { useRouter } from 'next/dist/client/router'

export default function Home() {
  const [session] = useSession()
  const router = useRouter()

  if (session) {
    router.push('/feed')
  }

  return (
    <Flex align="center" direction="column" height="100vh" justify="center">
      <Text
        color="gray.900"
        textTransform="uppercase"
        fontWeight="semibold"
        letterSpacing="5px"
        fontSize="4xl"
      >
        UI Login
      </Text>

      <Box
        width="20rem"
        height="20rem"
        mt="1rem"
        bg="white"
        borderRadius="lg"
        boxShadow="md"
      >
        <Box
          w="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt="2rem"
        >
          <SocialButton login={() => signIn('github')} icon="github">
            Github
          </SocialButton>
          <SocialButton login={() => signIn('google')} icon="google">
            Google
          </SocialButton>

          <Text as="span">Or</Text>

          <Input mt="1rem" placeholder="Email" w="17rem" />
        </Box>
      </Box>
    </Flex>
  )
}
