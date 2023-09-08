import React, {useEffect, useState} from 'react';
import { Flex, RadioGroup, Text, Heading, Button, Box } from '@radix-ui/themes';

const Quiz = () => {
    const quizJson = require('./quiz.json');
    const [quizData, setQuizData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedOption, setSelectedOption] = useState(null);
    const [answersCount, setAnswersCount] = useState(0);
    const [randomNumber, setRandomNumber] = useState();
    const [correct, setCorrect] = useState(null)

    const generateRandomNumber = () => Math.floor(Math.random() * quizData.length);
    useEffect(() => {
        setRandomNumber(generateRandomNumber())
        setQuizData(quizJson);
        setLoading(false);
    },[])

        
    console.log(correct)

    const renderRandomQuestion = (quizItem) => {
        const renderAnswers = (options) =>{
            return options.map((answer, index) => {
                return (
                    <label key={answer} onClick={() => setSelectedOption(index)} htmlFor={index}>
                        <Flex gap="2" align="center">
                            <RadioGroup.Item value="1" id={index} checked={selectedOption === index} />
                            <Text size="2">{answer}</Text>
                        </Flex>
                        
                        
                    </label>
                )
            })
        }

        const checkAnswer = () => {
            if(selectedOption === quizItem.answer){
                setCorrect(true)
                setAnswersCount((prev) => prev + 1)
            } else {
                setCorrect(false);
            }
            setSelectedOption(null)
        }
        return (
            <div>
                <Box pb="5">
                    <Heading>
                        {quizItem?.question}
                    </Heading>
                </Box>
                <Box pb="4">
                    <Box pb="4">
                        <RadioGroup.Root>
                            <Flex gap="2" direction="column">
                                
                                {renderAnswers(quizItem?.options)}
                            </Flex>
                        </RadioGroup.Root>
                    </Box>
                    {correct !== null && (
                        <Flex mb="2">
                            <Text>
                                Ваш ответ - {correct ? '✅' : '❌'}
                            </Text>
                        </Flex>
                    )}
                    <Flex  gap="1">
                        <Button
                            mr={2}
                            onClick={checkAnswer}
                        >
                            Проверить ответ
                        </Button>
                        <Button
                            onClick={() => {
                                setCorrect(null);
                                setRandomNumber(generateRandomNumber())
                            }}
                        >
                            Дальше
                        </Button>
                    </Flex>
                
                </Box>
                <div>
                    Правильных ответов: {answersCount}
                </div>
            </div>
        )
    }

    return (
        <Flex>
             {loading ? 
                (
                    <Heading>Loading</Heading>
                ) : (
                    <div>{renderRandomQuestion(quizData[randomNumber])}</div>
                )}
        </Flex>
    );
}

export default Quiz;