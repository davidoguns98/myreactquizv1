function Progress({ numQuestions, index, points, maxPoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question
        <strong> {index + 1}</strong>/<strong>{numQuestions}</strong>
      </p>
      <p>
        Points
        <strong> {points}</strong>/<strong>{maxPoints}</strong>
      </p>
    </header>
  );
}
export default Progress;
