import { useRef, useState } from "react";

const MinMaxInput = ({ min, max, width = 500, height = 300 }) => {

    const [value, setValue] = useState({ min, max })
    const progressBarRef = useRef(null)
    const gap = 100;

    const handleMinInput = (e) => {
        const minValue = parseInt(e.target.value)

        if (minValue < value.max - gap) {

            setValue({ ...value, min: minValue })
            progressBarRef.current.style.left = (minValue / max) * 100 + "%";
        }

        console.log(value)
        console.log(progressBarRef.current.style.left)
    }

    const handleMaxInput = (e) => {
        const maxValue = parseInt(e.target.value)
        setValue({ ...value, max: maxValue })
        progressBarRef.current.style.right = 100 - (maxValue / max) * 100 + "%";
        console.log(value)
        console.log(progressBarRef.current.style.right)
    }

    return (
        <div className={`w-[${width}px] min-h-[${height}px] bg-whitee p-5 rounded-xl min-max-input`}>
            <h1 className="font-bold pb-10">Price</h1>
            <div className="flex justify-around w-full h-full">
                <div className="space-x-2">
                    <span>Min</span>
                    <input onChange={handleMinInput} className="bg-gray-50 border-none p-1 max-w-[90px] pl-6" placeholder="min" type="number" min={min} max={max} value={value.min} />
                </div>
                <div className="space-x-2">
                    <span>Max</span>
                    <input onChange={handleMaxInput} className="bg-gray-50 border-none p-1 max-w-[90px] pl-6" placeholder="max" type="number" min={min} max={max} value={value.max} />
                </div>
            </div>
            <div className="relative w-full h-[5px] rounded-md mt-3 bg-[#ddd] overflow-hidden">
                <div ref={progressBarRef} className=" h-full bg-[#17A2B8] absolute left-1/4 right-1/4"></div>
            </div>
            <div className="relative">
                <input onChange={handleMinInput} className="cursor-pointer absolute w-full -top-[5px] h-[5px] appearance-none bg-transparent pointer-events-none " style={{ WebkitAppearance: 'none' }} type="range" name="range-min" id="range-min" min={0} max={max} />
                <input onChange={handleMaxInput} className="cursor-pointer absolute w-full -top-[5px] h-[5px] appearance-none bg-transparent pointer-events-none" type="range" name="range-max" id="range-max" min={0} max={max} />
            </div>
        </div>
    )
}

export default MinMaxInput