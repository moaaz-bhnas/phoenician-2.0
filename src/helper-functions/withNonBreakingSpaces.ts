export default function withNonBreakingSpaces(string: string): string {
  return string.replace(/ /g, "\u00A0");
}
