export default (aE: ProcessedEvent, bE: ProcessedEvent) => {
  const a = aE.date
  const b = bE.date
  return a > b ? 1 : a < b ? -1 : 0
}
