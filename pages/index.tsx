import { trpc } from "../utils/trpc"

export default function Home() {
  const { data: me, refetch } = trpc.getMe.useQuery()
  const { mutateAsync: updateMe } = trpc.updateMe.useMutation({
    onSuccess: () => {
      refetch()
    },
  })

  const onClick = () => {
    updateMe({ name: "purple" })
  }
  return (
    <div>
      <h1>{me?.name}</h1>
      <button onClick={onClick}>update me?</button>
    </div>
  )
}
