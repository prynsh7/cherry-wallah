import React, { useState, useEffect } from 'react'


const monthArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
];



const dayArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const TimeSlots = ({
    doctorName,
    doctorSpeciality,
    timeSlots,
    handleTimeSlot,
    timeSlot,
    data,
    day,
    setDay,
    indexVal,
    setIndexVal
}) => {

    const [week, setWeek] = useState({});

    const [weekUtc, setWeekUtc] = useState({});

    const  getNthDayAfterDate = (dateString, n) => {
        var date = new Date(dateString);
        date.setDate(date.getDate() + n);
        var year = date.getFullYear();
        var month = String(date.getMonth() + 1).padStart(2, '0');
        var day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      }

    const currentWeek = () => {
        var curr = new Date(); // get current date
        var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
        var last = first + 6; // last day is the first day + 6

        var firstday = new Date(curr.setDate(first)).toISOString().substring(0, 10);
        var lastday = new Date(curr.setDate(last)).toISOString().substring(0, 10);

        var firstdayUtc = new Date(curr.setDate(first)).toUTCString();
        var lastdayUtc = new Date(curr.setDate(last)).toUTCString();

        setWeek({ firstday, lastday });
        setWeekUtc({ firstday: firstdayUtc, lastday: lastdayUtc });
    };

    const nextWeek = () => {
        var curr = new Date(weekUtc.lastday); // get current date
        var first = curr.getDate() + 1; // First day is the day of the month - the day of the week
        var last = first + 6; // last day is the first day + 6

        var firstday = new Date(curr.setDate(first)).toISOString().substring(0, 10);
        var lastday = new Date(curr.setDate(last)).toISOString().substring(0, 10);

        var firstdayUtc = new Date(curr.setDate(first)).toUTCString();
        var lastdayUtc = new Date(curr.setDate(last)).toUTCString();

        setWeek({ firstday, lastday });
        setWeekUtc({ firstday: firstdayUtc, lastday: lastdayUtc });
    };

    const previousWeek = () => {
        var curr = new Date(weekUtc.firstday); // get current date
        var first = curr.getDate() - 7; // First day is the day of the month - the day of the week
        var last = first + 6; // last day is the first day + 6

        var firstday = new Date(curr.setDate(first)).toISOString().substring(0, 10);
        var lastday = new Date(curr.setDate(last)).toISOString().substring(0, 10);

        var firstdayUtc = new Date(curr.setDate(first)).toUTCString();
        var lastdayUtc = new Date(curr.setDate(last)).toUTCString();

        setWeek({ firstday, lastday });
        setWeekUtc({ firstday: firstdayUtc, lastday: lastdayUtc });
    };

    useEffect(() => {
        currentWeek();
    }, []);
    return (
        <div>
            <p className='text-Medium+/Label/Large-Strong'>Pick a time slot</p>
            <div className='py-[16px] flex flex-col gap-[4px]'>
                <h3 className='text-Small/Label/Large-Strong text-[#007E85]'>{data?.name}</h3>
                <p className='text-Small/Label/Large-Strong text-neutral-8'>{data?.profile_name}</p>
            </div>

            <div className="grid grid-cols-9 gap-[5px] bg-[#e5e5e5] p-[5px] rounded-t-[8px] ">
                <div className='col-span-1 justify-center flex'>
                    <button
                        onClick={() => previousWeek()}
                    ><i class="bi bi-chevron-left text-[18px]"></i></button>
                </div>
                {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                    <div
                        className={`col col-span-1 flex flex-col justify-center items-center cursor-pointer ${indexVal===index ? "bg-primary-3 text-white rounded-lg" : ''}`}
                        key={index + "day"}
                        onClick={()=>{
                            setDay(getNthDayAfterDate(week?.firstday, index));
                            setIndexVal(index);
                        }}
                    >
                        <p className="text-[14px]">{dayArray[index].slice(0, 3)} </p>
                        <p className="text-[14px]">
                        {week?.firstday && getNthDayAfterDate(week?.firstday, index)?.split('-')[2]}
                        </p>
                        <p >
                        {monthArray[Number(week?.firstday && getNthDayAfterDate(week?.firstday, index)?.split('-')[1])-1]}
                        </p>
                    </div>
                ))}
                <div className='col-span-1 justify-center flex'>
                    <button
                        onClick={() => nextWeek()}
                    ><i class="bi bi-chevron-right text-[18px]"></i></button>
                </div>
            </div>


            <div className='py-[16px] '>
                {
                    timeSlots.map((i, index) => (
                        <>
                            <h3 className='text-Small/Label/Medium'>{i.mode} ({i.slots.length})</h3>
                            <div className='grid grid-cols-8 gap-4 mt-2 mb-4'>
                                {
                                    i.slots.map((slot, index) => (
                                        <button className={`col-span-1 border border-2 rounded p-[2px] text-center ${timeSlot?.id == slot?.id && getNthDayAfterDate(week?.firstday, indexVal)==day ? ' bg-primary-6 text-neutral-2' : 'text-primary-6'}`} onClick={() => handleTimeSlot(slot)}>{slot.time}</button>
                                    ))
                                }
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default TimeSlots