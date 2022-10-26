import { createTRPCNext } from "@trpc/next"
import { httpBatchLink } from "@trpc/client"
import { AppRouter } from "../pages/api/trpc/[trpc]"

export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      links: [httpBatchLink({ url: "http://localhost:3000/api/trpc" })],
    }
  },
})
