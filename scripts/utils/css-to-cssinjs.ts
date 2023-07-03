import postcss from "npm:postcss"
import postcssJs from "npm:postcss-js"

export default (css: string): Record<string, unknown> => {
  const root = postcss.parse(css)

  return postcssJs.objectify(root)
}