// Helper function for debugging data on function composition computation.
export const traced = (label) => (data) => {
  console.log(`Label: ${label} -> Data: `, data)
  return data
}
