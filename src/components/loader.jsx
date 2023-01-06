import React from 'react'
import { Rings } from 'react-loader-spinner'

export default function loader() {
    return (
        <div className='loader-container'>
            <Rings
                height="80"
                width="80"
                color="#fff"
                radius="6"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="rings-loading"
            />
        </div>
    )
}
