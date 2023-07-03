import getStyles from "./get-styles/mod.ts"

// make tmp dir
await Deno.mkdir("./tmp", {
  recursive: true
})

await getStyles()

