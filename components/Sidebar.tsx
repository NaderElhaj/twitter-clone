import React from 'react'
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    MailIcon,
    UserIcon,
    HomeIcon
} from '@heroicons/react/outline'
import SideBarRow from './SideBarRow'

function Sidebar() {
  return (
    <div className='flex flex-col'>
         <img src="https://links.papareact.com/drq" alt="Twitter Logo" className='h-10 w-10' />
         <SideBarRow Icon={HomeIcon} title="Home" />
         <SideBarRow Icon={HashtagIcon} title="Explore" />
         <SideBarRow Icon={BellIcon} title="Notifications" />
         <SideBarRow Icon={MailIcon} title="Messages" />
         <SideBarRow Icon={BookmarkIcon} title="Bookmarks" />
         <SideBarRow Icon={CollectionIcon} title="Lists" />
         <SideBarRow Icon={UserIcon} title="Sign In" />
         <SideBarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  )
}

export default Sidebar