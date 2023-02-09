import placeIcon from '@/assets/icons/place.png'
import exitIcon from '@/assets/icons/exit.png'
import timeIcon from '@/assets/icons/time.png'
import peopleIcon from '@/assets/icons/people.png'
import profileIcon from '@/assets/profiles/111.png'
import QuitButton from './Buttons/QuitButton';
import { liveMatch } from '@/models/liveMatch'
import { useState } from 'react'
import QuitConfirmModal from './QuitConfirmModal'

interface Iprops {
    liveMatch: liveMatch;
    closeModal: () => void;
}

export default function QuitModal(props: Iprops) {

    const [quitConfirmModal, setQuitConfirmModal] = useState<boolean>(false);

    const quitConfirm = (b: boolean) => {
        setQuitConfirmModal(b);
    }

    return (
        <div className="w-[322px] h-[341px] z-10 absolute left-1/2 ml-[-161px] bottom-14 rounded-15 bg-white flex flex-col items-center justify-center">
            <div className="w-[322px] flex h-18 mt-14">
                <div className="ml-120 text-15">실시간 참여</div>
                <img className="w-10 h-10 ml-auto mr-24 mt-5" src={exitIcon} onClick={props.closeModal}></img>
            </div>
            <div className="w-[284px] h-20 mt-20 flex justify-between">
                <div className='flex'>
                    <img src={peopleIcon} className="w-20 h-20"></img>
                    <div className='text-15 ml-6'>현재인원/정원</div>
                </div>

                <div className='text-15'>{props.liveMatch.currentPeopleNum} / {props.liveMatch.totalPeopleNum}</div>
            </div>
            <div className="w-[284px] h-20 mt-16 flex justify-between">
                <div className='flex'>
                    <img src={timeIcon} className="w-20 h-20"></img>
                    <div className='text-15 ml-6'>남은시간</div>
                </div>
                <div className='text-15'>{props.liveMatch.registTime}</div>
            </div>
            <div className="w-[284px] h-20 mt-16 flex justify-between">
                <div className='flex'>
                    <img src={placeIcon} className="w-20 h-20"></img>
                    <div className='text-15 ml-6'>장소</div>
                </div>
                <div className='text-15'>{props.liveMatch.place.address}</div>
            </div>
            <div className='w-[284px] h-1 mt-10 bg-gray-600'></div>
            <div className='w-[284px] h-100 mt-16 mb-16 flex justify-between'>
                <div className='w-63 h-100 ml-20 flex flex-col justify-center'>
                    <img className='w-63 h-63' src={profileIcon}></img>
                    <div className='mt-3 text-11 text-center'>{props.liveMatch.hostNickName}</div>
                </div>
                <div className='w-160 h-100 rounded-10 bg-gray-500 flex justify-center items-center'>
                    {props.liveMatch.detail}
                </div>
            </div>

            <QuitButton onClick={() => {
                quitConfirm(true);
            }}>참여취소</QuitButton>

            {quitConfirmModal && <QuitConfirmModal liveMatch={props.liveMatch} closeQuitModal={() => quitConfirm(false)} closeModal={props.closeModal}></QuitConfirmModal>}
        </div>

    )
}