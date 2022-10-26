import * as trpcNext from "@trpc/server/adapters/next"
import { z } from "zod"
import { router, procedure } from "../../../server/trpc"

// DB
let me = {
  name: "murasaki",
}

const appRouter = router({
  getMe: procedure.query(async () => {
    return me
  }),
  updateMe: procedure
    .input(
      z.object({
        name: z.string().max(20),
      })
    )
    .mutation(async (req) => {
      me.name = req.input.name
    }),
})

export type AppRouter = typeof appRouter

export default trpcNext.createNextApiHandler({
  router: appRouter,
})
