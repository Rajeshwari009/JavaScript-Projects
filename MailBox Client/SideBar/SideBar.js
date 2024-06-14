import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import { AuthContext } from '../Store/AuthContext';
import MailIcon from '../ICons/MailIcon';
import InboxIcon from '../ICons/InboxIcon';
import SentIcon from '../ICons/SentIcon';
import Logout from '../ICons/Logout';

const SideBar = () => {
    const authctx = useContext(AuthContext);

    const handleLogout = () => {
        authctx.logout();
    };

    return (
        <div className="sidebar">
            <h2 className="sidebar-title">┈►ℳ𝒶𝒾𝓁ℬℴ𝓍 ◄┈</h2>
            <ul className="sidebar-nav">
                <li>
                    <Link to="/mailbox" className="sidebar-link" >
                      <MailIcon/>  Compose Mail
                    </Link>
                </li>
                <li>
                    <Link to="/inbox/mails" className="sidebar-link" >
                      <InboxIcon/>  Inbox
                    </Link>
                </li>
                <li>
                    <Link to="/sent/mails" className="sidebar-link" >
                      <SentIcon/>  Sent
                    </Link>
                </li>
                <li>
                    <Link to="/auth" className="sidebar-link" onClick={handleLogout} >
                      <Logout/>  Logout
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;
