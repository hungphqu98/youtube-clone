import React from 'react';
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';

const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage-filter">
                <TuneOutlinedIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow
            image="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            channel="Hung Quang"
            verified
            subs="150K"
            noOfVideos={23}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi augue risus, blandit vitae dui a, porttitor eleifend metus. Donec sed sollicitudin dolor, eget imperdiet nibh. Aenean hendrerit ac dui ac cursus. Fusce nec arcu ut justo ultricies vestibulum iaculis convallis nunc. Vestibulum at condimentum mi, ac tincidunt metus. Sed a laoreet erat. Suspendisse sit amet purus a ipsum sollicitudin semper sit amet ac libero. Aliquam ut metus sapien. "
            />
            <hr/>
            <VideoRow
            title="Congratulations"
            description="I am hopeless"
            views="2.3M Views"
            timestamp="3 days ago"
            subs="659K"
            channel="Pewdiepie"
            image="https://i.ytimg.com/vi/PHgc8Q6qTjc/maxresdefault.jpg"
            />
            <VideoRow
            title="Congratulations"
            description="I am hopeless"
            views="2.3M Views"
            timestamp="3 days ago"
            subs="659K"
            channel="Pewdiepie"
            image="https://i.ytimg.com/vi/PHgc8Q6qTjc/maxresdefault.jpg"
            />
            <VideoRow
            title="Congratulations"
            description="I am hopeless"
            views="2.3M Views"
            timestamp="3 days ago"
            subs="659K"
            channel="Pewdiepie"
            image="https://i.ytimg.com/vi/PHgc8Q6qTjc/maxresdefault.jpg"
            />
            <VideoRow
            title="Congratulations"
            description="I am hopeless"
            views="2.3M Views"
            timestamp="3 days ago"
            subs="659K"
            channel="Pewdiepie"
            image="https://i.ytimg.com/vi/PHgc8Q6qTjc/maxresdefault.jpg"
            />
            <VideoRow
            title="Congratulations"
            description="I am hopeless"
            views="2.3M Views"
            timestamp="3 days ago"
            subs="659K"
            channel="Pewdiepie"
            image="https://i.ytimg.com/vi/PHgc8Q6qTjc/maxresdefault.jpg"
            />
        </div>
    )
}

export default SearchPage
