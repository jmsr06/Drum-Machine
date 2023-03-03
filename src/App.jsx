import { useState } from 'react'

function App() {
  const [display, setDisplay] = useState('')
  const drums = [
    {
      id: 'Q',
      text: 'Heater 1'
    },
    {
      id: 'W',
      text: 'Heater 2'
    },
    {
      id: 'E',
      text: 'Heater 3'
    },
    {
      id: 'A',
      text: 'Heater 4'
    },
    {
      id: 'S',
      text: 'Clap'
    },
    {
      id: 'D',
      text: 'Open HH'
    },
    {
      id: 'Z',
      text: "Kick n' Hat"
    },
    {
      id: 'X',
      text: 'Kick'
    },
    {
      id: 'C',
      text: 'Closed HH'
    }
  ]

  const play = (e) => {
    const id_audio = (e.target.id).split('-')[1]
    document.getElementById(id_audio).play()
    const object = drums.find(obj => obj.id == id_audio)
    setDisplay(object.text)
  }
  const playKey = (e) => {
    if (['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'].includes((`${e.key}`).toUpperCase())) {
      (document.getElementById(`audio-${(e.key).toUpperCase()}`)).classList.add("activado_key")
      document.getElementById((e.key).toUpperCase()).play()
      const object = drums.find(obj => obj.id == ((e.key).toUpperCase()))
      setDisplay(object.text)
    }
  }
  const changeKey = (e) => {
    if (['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'].includes((`${e.key}`).toUpperCase())) {
      (document.getElementById(`audio-${(e.key).toUpperCase()}`)).classList.remove("activado_key")
    }
  }



  return (
    <div className=' relative w-full h-screen bg-gray-300 flex flex-col justify-center items-center' onKeyDown={playKey} onKeyUp={changeKey} tabIndex="0">
      <h1 className='text-4xl font-bold absolute top-40 lg:top-10'>Drum Machine</h1>
      <div className="flex flex-row bg-black border-4 border-[#636363] w-4/5 md:w-2/3 p-6" id="drum-machine">
        <div className='w-2/3 grid grid-cols-3 gap-1 md:gap-2 place-items-center font-bold'>
          <div onClick={play} className='drum-pad w-full h-8 md:h-20 flex items-center justify-center bg-[#00A19B] rounded-sm cursor-pointer shadow-md activado' id="audio-Q"><audio id="Q" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" />Q</div>
          <div onClick={play} className='drum-pad w-full h-8 md:h-20 flex items-center justify-center bg-[#00A19B] rounded-sm cursor-pointer shadow-md activado' id="audio-W"><audio id="W" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" />W</div>
          <div onClick={play} className='drum-pad w-full h-8 md:h-20 flex items-center justify-center bg-[#00A19B] rounded-sm cursor-pointer shadow-md activado' id="audio-E"><audio id="E" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" />E</div>
          <div onClick={play} className='drum-pad w-full h-8 md:h-20 flex items-center justify-center bg-[#FDEA11] rounded-sm cursor-pointer shadow-md activado' id="audio-A"><audio id="A" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" />A</div>
          <div onClick={play} className='drum-pad w-full h-8 md:h-20 flex items-center justify-center bg-[#009FE3] rounded-sm cursor-pointer shadow-md activado' id="audio-S"><audio id="S" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" />S</div>
          <div onClick={play} className='drum-pad w-full h-8 md:h-20 flex items-center justify-center bg-[#FDEA11] rounded-sm cursor-pointer shadow-md activado' id="audio-D"><audio id="D" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" />D</div>
          <div onClick={play} className='drum-pad w-full h-8 md:h-20 flex items-center justify-center bg-[#009FE3] rounded-sm cursor-pointer shadow-md activado' id="audio-Z"><audio id="Z" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" />Z</div>
          <div onClick={play} className='drum-pad w-full h-8 md:h-20 flex items-center justify-center bg-[#009FE3] rounded-sm cursor-pointer shadow-md activado' id="audio-X"><audio id="X" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" />X</div>
          <div onClick={play} className='drum-pad w-full h-8 md:h-20 flex items-center justify-center bg-[#BE1623] rounded-sm cursor-pointer shadow-md activado' id="audio-C"><audio id="C" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" />C</div>
        </div>
        <div className='w-1/3 grid grid-cols-2 place-items-center place-content-center pl-5 '>
          <span className='col-span-2 border-2 md:border-4 border-[#636363] text-[10px] md:text-base h-6 md:h-10 w-full md:w-3/4 bg-[#9A9A9A] mb-5 md:mb-20 flex justify-center items-center font-bold' id="display">{display}</span>
          <span className='bg-[#9A9A9A] w-9 h-9 md:w-20 md:h-20 border-4 border-[#636363] rounded-full flex justify-end items-center'><i class="text-xs md:text-xl text-[#636363] fa-solid fa-caret-right"></i></span>
          <div className='flex flex-col gap-4'>
            <span className='bg-[#9A9A9A] w-6 h-6 md:w-14 md:h-14 border-4 border-[#636363] rounded-full flex justify-start items-center'><i class="text-xs md:text-xl text-[#636363] fa-solid fa-caret-left"></i></span>
            <span className='bg-[#9A9A9A] w-6 h-6 md:w-14 md:h-14 border-4 border-[#636363] rounded-full flex justify-center items-start'><i class="text-xs md:text-xl text-[#636363] fa-solid fa-caret-up"></i></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
