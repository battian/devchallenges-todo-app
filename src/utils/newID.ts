export function newID() {
  return Math.random().toString(36).substr(2, 9);
}
