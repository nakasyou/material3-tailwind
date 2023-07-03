export default async () => {
  try {
    await Deno.remove("./material-web/", {
      recursive: true,
    })
  } catch(_) {
    // pass
  }
  
  const gitClone = new Deno.Command("git", {
    args: [..."clone --depth 1 https://github.com/material-components/material-web".split(" ")]
  })
  await gitClone.output()
}