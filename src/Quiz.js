import React, { useEffect, useState } from 'react'
import { Button, Box, Typography, RadioGroup } from '@mui/material'
import { Circles } from 'react-loader-spinner'
import { generateRandomQuestionId } from './utils/utils'
import RadioButton from './components/Radio/RadioButton'

const Quiz = () => {
  const quizJson = require('./quiz.json')
  const [quizData, setQuizData] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedOption, setSelectedOption] = useState(null)
  const [answersCount, setAnswersCount] = useState(0)
  const [randomNumber, setRandomNumber] = useState()
  const [correct, setCorrect] = useState(null)

  useEffect(() => {
    setQuizData(quizJson)
    setRandomNumber(generateRandomQuestionId(quizData.length))
    setLoading(false)
  }, [])

  const renderRandomQuestion = (quizItem) => {
    const renderAnswers = (options) => {
      return options.map((answer, index) => {
        return (
          <RadioButton setSelectedOption={setSelectedOption} key={index} answer={answer} index={index} />
        )
      })
    }

    const checkAnswer = () => {
      if (selectedOption === quizItem.answer) {
        setCorrect(true)
        setAnswersCount((prev) => prev + 1)
      } else {
        setCorrect(false)
      }

      setSelectedOption(null)
      setTimeout(() => {
        setCorrect(null)
        setRandomNumber(generateRandomQuestionId(quizData.length))
      }, 2000)
    }
    return (
        <Box>
                <Box pb="5">
                  <Typography component="h2">
                    {quizItem?.question}
                  </Typography>
                </Box>
                <Box pb="4">
                    <Box pb="4">
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                      >
                                {renderAnswers(quizItem?.options)}
                      </RadioGroup>
                    </Box>
                    {correct !== null && (
                            <Typography component={'h3'}>
                                Ваш ответ - {correct ? '✅' : '❌'}
                            </Typography>
                    )}
                        <Button
                            disabled={correct !== null || selectedOption === null}
                            mr={2}
                            onClick={checkAnswer}
                        >
                            {correct !== null
                              ? <Circles
                                  color="#000"
                                  height="15"
                                  width="15"
                                  ariaLabel="circles-loading"
                                  wrapperStyle={{}}
                                  wrapperClass=""
                                  visible={true}
                                />
                              : 'Проверить ответ'}
                        </Button>

                </Box>
                <div>
                    Правильных ответов: {answersCount} !
                </div>
            </Box>
    )
  }

  return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
             {loading
               ? (
                    <Typography>Loading...</Typography>
                 )
               : (
                    <Box>{renderRandomQuestion(quizData[randomNumber])}</Box>
                 )}
        </Box>
  )
}

export default Quiz
