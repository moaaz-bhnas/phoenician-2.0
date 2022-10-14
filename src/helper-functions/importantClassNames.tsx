export default function importantClassNames(classNames: string): string {
  return classNames
    .split(" ")
    .map((className) => `!${className}`)
    .join(" ");
}
