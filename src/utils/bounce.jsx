export function bounce(amplitude) {
  let dampingCoefficient = 0.95; // Damping coefficient (adjust to get desired damping effect)
  let angularFrequency = 8; // Angular frequency (change to adjust oscillation speed)
  let phase = 0; // Phase (can be set to 0 or adjust as needed)

  function getPosition(t) {
    return (
      amplitude *
      Math.exp(-dampingCoefficient * t) *
      Math.cos(angularFrequency * t + phase)
    );
  }

  return {
    getPosition,
  };
}
