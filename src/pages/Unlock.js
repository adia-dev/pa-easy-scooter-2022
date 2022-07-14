import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { BiCheckCircle } from 'react-icons/bi'
import { useParams } from 'react-router-dom'

const Unlock = () => {

    const { user_id, scooter_id } = useParams()

    const steps = [
        {
            text: "Retrieving the data",
            color: "blue"
        },
        {
            text: "Checking for availability",
            color: "orange"
        },
        {
            text: "Unlocking",
            color: "black "
        },
        {
            text: "Unlocked",
            color: "green"
        }
    ]

    const [currentStep, setCurrentStep] = useState(steps[0])




    useEffect(() => {

        let index = 0;

        const unlockScooter = async () => {
            const result = await axios.post(process.env.REACT_APP_EASY_SCOOTER_API_BASE_URL + 'unlock', { user_id, scooter_id })
            setCurrentStep(result.data.status === 202 ? { text: steps[steps.length - 1], color: "green" } : { text: "Error", color: 'red', message: 'Une erreur est survenue veuillez contacter le support' })
        }

        let stepInterval = setInterval(() => {
            setCurrentStep(steps[index])
            index++;
            if (index == steps.length - 2) {
                clearInterval(stepInterval);
                unlockScooter();
            }
        }, Math.round(Math.random() * (2000 - 500)) + 1000);




    }, [])



    return (
        <div className={` w-screen h-screen flex flex-col justify-center items-center bg-${currentStep.color}-400 transition-all duration-500 ease-in-out`}>
            <div className="flex items-center space-x-2 ">
                <span className='text-3xl uppercase text-white'>
                    {currentStep.text}
                </span>
                {
                    currentStep.text !== steps[steps.length - 1] ?
                        <AiOutlineLoading3Quarters size={32} color={'white'} className='animate-spin' />
                        :
                        <BiCheckCircle size={32} color="white" />
                }
            </div>
            {currentStep?.message && <span className='text-xs uppercase text-red-300'>
                {currentStep.message}
            </span>}
        </div>
    )
}

export default Unlock