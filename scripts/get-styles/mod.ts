import getComponents from "../get-components/mod.ts"
import camelToKebab from "../utils/camel-to-kebab.ts"
import { type MaterialComponentData } from "../types/material-components.ts"
import cssToCssinjs from "../utils/css-to-cssinjs.ts"

const isMdRegex = /^Md.+$/
export default async () => {
  const components = await getComponents()

  for(const componentsGroup of Object.values(components)) {
    for(const componentName of Object.keys(componentsGroup).filter(text=>isMdRegex.test(text))) {
      const className = camelToKebab(componentName)
      const component = (componentsGroup as unknown as Record<string, MaterialComponentData>)[componentName]
      
      const css = component.styles[0].cssText

      //console.log(cssToCssinjs(css))
    }
  }
}
