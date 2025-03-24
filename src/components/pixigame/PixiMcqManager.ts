import { Text } from "pixi.js";

class PixiMcqManager {
  private answerTexts: Text[];
  private questionText: Text;
  private questionData: McqQuestion[];
  private currentQuestionIndex: number = 0;
  constructor(
    questionData: McqQuestion[],
    answerTexts: Text[],
    questionText: Text
  ) {
    this.questionData = questionData;
    this.answerTexts = answerTexts;
    this.questionText = questionText;

    //set first state
    const currentQuestion = this.questionData[this.currentQuestionIndex];
    this.questionText.text = currentQuestion.questionName;

    currentQuestion.answerChoices.forEach((answer, index) => {
      if (this.answerTexts[index]) {
        this.answerTexts[index].text = answer;
      }
    });
  }

  public nextQuestion(): void {
    if (this.currentQuestionIndex < this.questionData.length - 1) {
      this.currentQuestionIndex++;
      this.updateQuestionAndAnswers(this.currentQuestionIndex);
    } else {
      console.log("No more questions available.");
    }
  }

  public updateQuestionAndAnswers(index: number): void {
    const currentQuestion = this.questionData[this.currentQuestionIndex];
    this.questionText.text = currentQuestion.questionName;

    currentQuestion.answerChoices.forEach((answer, index) => {
      if (this.answerTexts[index]) {
        this.answerTexts[index].text = answer;
      }
    });
  }

  public submitAnswer(
    answer: string,
    onCorrectCallback: () => void,
    onIncorrectCallback: () => void
  ) {
    if (answer === this.questionData[this.currentQuestionIndex].correctAnswer) {
      onCorrectCallback();
    } else {
      onIncorrectCallback();
    }
  }
}
