export const QuizQuestions = {
  quizTitle: "Quiz",
  quizSynopsis:
    "This quiz will check your understanding of all the topics discussed in the previous videos. Make sure to read through the explanations if you do get an answer wrong. Try your best, each right answer will award you 10 points!",
  questions: [
    {
      question: "The node at the top of the decision tree is called: ",
      questionType: "text",
      answers: ["Leaf Node", "Root Node", "Top Node", "Internal Node"],
      correctAnswer: "2",
      messageForCorrectAnswer: "CORRECT! Well done!",
      messageForInorrectAnswer: "Incorrect, try again!",
      explanation:
        "It is helpful to think of a decision tree like an upside down tree. The top node is therefore the root node.",
      point: "10",
    },
    {
      question: "Features are ...",
      questionType: "text",
      answers: [
        "The category an object belongs to",
        "A measure of how important something is when guessing its category",
        "Measurable properties and characteristics that can be used to describe an object",
        "None of the above",
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "CORRECT! Well done!",
      messageForInorrectAnswer: "Incorrect, try again!",
      explanation:
        "Features are the properties and characteristics of an object or phenomenon.",
      point: "10",
    },
    {
      question: "Feature importance is a measure of ...",
      questionType: "text",
      answers: [
        "How well a feature describes an object",
        "How useful a feature is when predicting the target category",
        "How many features are used to describe an object",
        "None of the above",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "CORRECT! Well done!",
      messageForInorrectAnswer: "Incorrect, try again!",
      explanation:
        "Features importance measures how well a feature can predict the target category. ",
      point: "10",
    },
    {
      question:
        "The accuracy of a machine learning algorithm is measured by ...",
      questionType: "text",
      answers: [
        "How fast the algorithm can make good predictions",
        "The number of data points needed to make a prediction",
        "How smart the algorithm is",
        "The number of correctly predicted data points out of a group of unseen data points",
      ],
      correctAnswer: "4",
      messageForCorrectAnswer: "CORRECT! Well done!",
      messageForInorrectAnswer: "Incorrect, try again!",
      explanation:
        "Accuracy is a measure of how many correct predictions the algorithm can make out of a group of new, unseen data.",
      point: "10",
    },
    {
      question:
        "Which of the following is FALSE: If a feature has high information gain it... ",
      questionType: "text",
      answers: [
        "Will be a node high up in the tree; features with higher information gain are higher up in the tree",
        "It is a good indicator for whether an instance belongs to a category or not",
        "Will be a node low down in the tree; features with higher information gain are lower in the tree",
        "It can be used by itself to make a fairly accurate guess about which category the instance is in",
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "CORRECT! Well done!",
      messageForInorrectAnswer: "Incorrect, try again!",
      explanation:
        "A feature with high information gain will be a node high up in the tree. This is because the feature can already make a somewhat accurate choice of what category the instance belongs to, and should therefore be used at the beginning. ",
      point: "10",
    },
    {
      question: "The node at the bottom of a decision tree is called a ... ",
      questionType: "text",
      answers: ["Leaf Node", "Root Node", "Bottom Node", "End Node"],
      correctAnswer: "1",
      messageForCorrectAnswer: "CORRECT! Well done!",
      messageForInorrectAnswer: "Incorrect, try again!",
      explanation:
        "It is helpful to think of a decision tree like an upside down tree. The bottom node is therefore the leaf node.",
      point: "10",
    },
    {
      question: "What is induction? ",
      questionType: "text",
      answers: [
        "How much data is needed for an algorithm to be able to make new predictions",
        "Testing if a theory is correct through experiments",
        "How well an algorithm can predict the category of a new instance",
        "Making observations and using these to make a generalization for how something works",
      ],
      correctAnswer: "4",
      messageForCorrectAnswer: "CORRECT! Well done!",
      messageForInorrectAnswer: "Incorrect, try again!",
      explanation:
        "Induction is when we make observations and use these to generalize about how something works.",
      point: "10",
    },
    {
      question: "What is deduction?",
      questionType: "text",
      answers: [
        "How much data is needed for an algorithm to be able to make new predictions",
        "Testing if a theory is correct through experiments",
        "How weell an algorithm can predict the category of a new instance",
        "Making observations and using these to make a generalization for how something works",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "CORRECT! Well done!",
      messageForInorrectAnswer: "Incorrect, try again!",
      explanation:
        "Deduction is when we have a theory and we test out if it is correct by experimenting",
      point: "10",
    },
  ],
};
