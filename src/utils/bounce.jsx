export function bounce(
  amplitude,
  dampingCoefficient = 0.95,
  angularFrequency = 8,
) {
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
