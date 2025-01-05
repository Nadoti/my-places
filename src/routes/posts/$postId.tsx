import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$postId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    await new Promise((resolve) => setTimeout(resolve, 4000))
    return {
      postId: params.postId
    }
  },
  pendingComponent: () => <div>LOADINGF</div>
})

function RouteComponent() {
  const { postId } = Route.useLoaderData()
  return <div>Hello {postId}</div>
}
