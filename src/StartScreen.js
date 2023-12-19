function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>
        You are to read the following instructions and start the test when ready
      </h2>
      <h3>
        {numQuestions} questions to test your knowledge on react
        <li>Read carefully before answering</li>
        <li>Once you click the next button you can't undo </li>
        <li>Success👌</li>
      </h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
