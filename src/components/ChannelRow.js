import React from 'react'
import './ChannelRow.css';
import { Avatar } from "@material-ui/core";
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

const ChannelRow = ( {image, channel, subs, verified, noOfVideos, description} ) => {
    return (
        <div className="channelRow">
            <Avatar className="channelRow-logo"
            alt={channel}
            src={image}
            />
        <div className="channelRow-text">
            <h4>{channel} {verified && <CheckCircleOutlineOutlinedIcon/> }</h4>
            <p>{subs} subcribers . {noOfVideos} videos </p>
            <p>{description}</p>
            
        </div>
        </div>
    )
}

export default ChannelRow
