import React from 'react'

const Group = ({ title }) => {
    return (
        <div>
            {/* clarity */}
            {title == "clarity" && <div></div>}
            {/* learn */}
            {title == "learn" && <div>learn</div>}
            {/* mentor */}
            {title == "mentor" && <div>mentor</div>}
            {/* job */}
            {title == "job" && <div>job</div>}
        </div>
    )
}

export default Group
