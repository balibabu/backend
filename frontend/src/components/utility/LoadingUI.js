import React, { useContext, useState } from 'react'
import loadingBar from '../../images/loadingBars.png'
import loadingLine from '../../images/loadingLine.png'
import loadingDots from '../../images/loadingDots.png'
import GlobalVarContext from '../../GlobalVariables'

const images = [loadingBar, loadingDots, loadingLine]
export default function LoadingUI() {
    const [position, setPosition] = useState(atCenter);
    const { isSpinning } = useContext(GlobalVarContext);
    const on_click = () => {
        setPosition(atTopRight);
    }
    return (
        <>
            {isSpinning ?
                <div style={position[0]}>
                    <img className='loadingImg'
                        src={images[0]} alt='loading'
                        style={position[1]}
                        onClick={on_click}
                    />
                    <style>{keyFrames}</style>
                </div>
                :
                <DummyFuunction setPosition={setPosition}/>
            }
        </>
    )
}

const spinStyle = {
    animation: 'loadingImg-spin infinite 2.5s linear',
}

const floatAtCenter = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
};

const floatAtTopRight = {
    position: 'fixed',
    top: '4.3rem', // Adjust the top positioning as desired
    right: '1rem', // Adjust the right positioning as desired
    zIndex: 1000,
};

const lodingImageStyleAtCenter = {
    width: '15rem',
    ...spinStyle
}

const lodingImageStyleAtTopRight = {
    width: '5rem',
    ...spinStyle
}

const atCenter = [floatAtCenter, lodingImageStyleAtCenter]
const atTopRight = [floatAtTopRight, lodingImageStyleAtTopRight]


const keyFrames = `@keyframes loadingImg-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }`


function DummyFuunction({setPosition}) {
    setPosition(atCenter);
    return <></>
}