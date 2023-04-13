import * as React from 'react'

import { VotersForm } from './components/Voters/votersform/VotersLoginPage';
import { PositionsForm } from './components/positions/positionsform/PositionsForm';

import {CandidatesForm} from './components/candidates/candidatesForm/CandidatesForm';
import {SideNav} from './components/sidenav/sidenavigation/SideNav';
import LogIn from './components/login/loginpage/LogIn'
import Sidebar from './components/sidenav/sidenavigation/SideBar';
//import BallotPage from './components/ballot/BallotPage';
//import AssitCR from './components/ballot/AssitCR'
//import DashBoard from './components/Voters/votersform/DashBoard'


import VotersLoginPage from './components/FORMS/VotersLoginPage';
import ChiefLoginPage from './components/FORMS/ChiefLoginPage';
import AdminLoginPage from './components/FORMS/AdminLoginPage';

function App() {

  return (
    <div className='App'>
        <div>
        {/* <VotersForm/> */}
        {/* <PositionsForm/> */}
        {/* <CandidatesForm/> */}

        {/* <SideNav/> */}
        {/* <Sidebar/> */}
        {/* <BallotPage/> */}
        {/* <AssitCR/> */}
        {/* <DashBoard/> */}
        {/* <VotersLoginPage/> */}
        <ChiefLoginPage/>
        <AdminLoginPage/>
        </div>
    </div>
  )
}

export default App;
