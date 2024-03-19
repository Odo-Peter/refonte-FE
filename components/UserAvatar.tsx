import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

const UserAvatar = () => {
  return (
    <Avatar className='h-8 w-8 -mt-2'>
      <AvatarImage src="/Avatar.png" alt="user-profile" />
      <AvatarFallback>PO</AvatarFallback>
    </Avatar>
  )
}

export default UserAvatar