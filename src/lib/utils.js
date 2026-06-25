export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

// Turn a service title into a URL slug, e.g. "Fire Alarm System" -> "fire-alarm-system"
export function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
