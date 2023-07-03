import cloneMaterialWeb from "./clone-material-web.ts"
import { expandGlob } from "std/fs"
import { toFileUrl } from "std/path"
import kebabToCamel from "../utils/kebab-to-camel.ts"

const testCodeRegex = /^.*?_test\.ts$/

type Touple2<T> = [T,T]

export default async () => {
  //await cloneMaterialWeb()
  const importCodes: string[] = []
  for await (const entry of expandGlob("./material-web/*/*.ts")) {
    if (testCodeRegex.test(entry.name) || entry.name === "harness.ts") {
      continue
    }

    const pathArr = toFileUrl(entry.path).pathname.split("/").slice(-2) as Touple2<string>

    if(pathArr[0] === "testing") {
      continue
    }
    const importPath = "npm:@material/web/" + pathArr.join("/").replace(/\.ts$/, ".js")
    
    const importCode = `export * as ${kebabToCamel(pathArr[1].replace(/\.ts$/,""))} from "${importPath}";`
    importCodes.push(importCode)
  }
  await Deno.writeTextFile("./tmp/material-components.ts",importCodes.join(""))
  const components = await import("../../tmp/material-components.ts")
  return components
}
