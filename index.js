const express = require('express');
const { Quiz, Question, Choice } = require('./models');

const app = express();

// Quizzes
app.get('/quizzes', async (req, res) => {
  const quizzes = await Quiz.findAll();
  res.json(quizzes);
});

app.post('/quizzes', async (req, res) => {
  const quiz = await Quiz.create({
    name: 'New Quiz',
    weight: 10,
  });
  res.json(quiz);
});

app.put('/quizzes/:id', async (req, res) => {
  await Quiz.update(
    {
      name: 'Updated Name',
      weight: 50,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  const updatedQuiz = await Quiz.findByPk(req.params.id);
  res.json(updatedQuiz);
});

app.get('/quizzes/:id', async (req, res) => {
  const quiz = await Quiz.findByPk(req.params.id);
  res.json(quiz);
});

app.delete('/quizzes/:id', async (req, res) => {
  await Quiz.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json({ message: 'Quiz was removed' });
});

// Questions
app.get('/questions', async (req, res) => {
  const questions = await Question.findAll();
  res.json(questions);
});

app.post('/questions', async (req, res) => {
  const question = await Question.create({
    question: 'What is your favorite color'
  });
  res.json(question);
});

app.put('/questions/:id', async (req, res) => {
  await Question.update(
    {
      question: 'What is your favorite color'
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  const updatedQuestion = await Question.findByPk(req.params.id);
  res.json(updatedQuestion);
});

app.get('/questions/:id', async (req, res) => {
  const question = await Question.findByPk(req.params.id);
  res.json(question);
});

app.delete('/questions/:id', async (req, res) => {
  await Question.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json({ message: 'Question was removed' });
});

// Choices
app.get('/choices', async (req, res) => {
  const choices = await Choice.findAll();
  res.json(choices);
});

app.post('/choices', async (req, res) => {
  const choice = await Choice.create({
    choice: 'Pizza'
  });
  res.json(choice);
});

app.put('/choices/:id', async (req, res) => {
  await Choice.update(
    {
      choice: 'AppleSauce'
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  const updatedChoice = await Choice.findByPk(req.params.id);
  res.json(updatedChoice);
});

app.get('/choices/:id', async (req, res) => {
  const choice = await Choice.findByPk(req.params.id);
  res.json(choice);
});

app.delete('/choices/:id', async (req, res) => {
  await Choice.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json({ message: 'Choice was removed' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
