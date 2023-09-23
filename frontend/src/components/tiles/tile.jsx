import React from 'react'
import {FcCancel, FcCheckmark, FcInfo} from 'react-icons/fc'
import {LuTimer} from 'react-icons/lu'
import './tile.css'

const Tile = ({title, status, dueDate, createdAt, handleDelete, handleComplete}) => {

  return (
    <div className='tile_main-div'>
        <div className='tile_main-div_title'>
          {title}
        </div>
        <div className='tile_main-div_date'>
          <div style={{ color: status === 'pending' ? 'red' : 'green' }}>{status}</div>
          <div id='tile_main-div_date_dueDate' title='deadline'>
            {<LuTimer/>} {dueDate.split("T")[0]}
          </div>
          <div id='tile_main-div_date_info'>
            <div>
              <FcCheckmark title='completed' size={"2rem"} onClick={()=>handleComplete(title)} />
              <FcCancel value={title} title='delete' size={"1.8rem"} onClick={() => handleDelete(title)} />
            </div>
            <div title='created-at'>{<FcInfo/>}{createdAt.split("T")[0]}</div>
          </div>
        </div>
    </div>
  )
}

export default Tile