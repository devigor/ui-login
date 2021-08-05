import { Button } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { AiFillGithub, AiFillGoogleCircle } from 'react-icons/ai'

type SocialButtonProps = {
  icon: 'github' | 'google'
  children: ReactNode
  login?: () => Promise<void>
}

export const SocialButton = ({ children, icon, login }: SocialButtonProps) => (
  <Button
    onClick={login}
    leftIcon={icon === 'github' ? <AiFillGithub /> : <AiFillGoogleCircle />}
    w="17rem"
    mb="1rem"
    colorScheme="cyan"
    variant="outline"
  >
    {children}
  </Button>
)
