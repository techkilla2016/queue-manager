import React from 'react'
import Link from 'next/link'
// import { FaMapLocationDot } from 'react-icons/fa6'
import { AiFillSetting } from 'react-icons/ai'
import { asideMenu } from '@/data/aside'
const Aside = () => {
    return (
        <aside>
            <div className="aside">
                <div className="aside-container">
                    {/* header  */}
                    <header>
                        <div className="aside-header">
                            <span>Query Boat</span>
                        </div>
                    </header>

                    {/* aside menu  */}
                    <div className="aside-menu">
                        <div className="menu-container">
                            <div className="menu-list">
                                {
                                    asideMenu?.map((curItem, keys) => {
                                        return (
                                            <Link href={curItem?.link} className="list d-flex align-items-center" key={keys}>
                                                <div className="icon">
                                                    {curItem?.icon}
                                                </div>
                                                <div className="link">
                                                    {curItem?.title}
                                                </div>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    {/* setting  */}
                    {/* <div className="aside-setting">
                        <Link href='/settings' className="list d-flex align-items-center">
                            <div className="icon">
                                <AiFillSetting />
                            </div>
                            <div className="link">
                                Settings
                            </div>
                        </Link>
                    </div> */}
                </div>
            </div>
        </aside>
    )
}

export default Aside
