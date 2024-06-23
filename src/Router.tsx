import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TonConnectUI } from '@tonconnect/ui';
import Layout from 'components/Layout';
import WelcomePage from 'pages/WelcomePage';
import GamePage from 'pages/GamePage';
import ShopPage from 'pages/ShopPage';
import BoostPage from 'pages/BoostPage';
import InventoryPage from 'pages/InventoryPage';
import LeaderboardPage from 'pages/LeaderbordPage';
import EarnMorePage from 'pages/EarnMorePage';
import TasksList from 'components/TasksList';
import FriendsList from 'components/FriendsList';
import ViewTask from 'components/ViewTask';
import SquadsPage from 'pages/SquadsPage';
import Dialog from 'components/Dialog/Dialog';


const App: React.FC = () => {
  
  return (
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<WelcomePage />} >
          <Route path=':id' element={<WelcomePage />}/>
          </Route>
          <Route path="game" element={<GamePage />} >
            <Route path=':id' element={<GamePage />}/>

          </Route>
           
          
          <Route path="shop" element={<ShopPage />} />
          <Route path="boost" element={<BoostPage />} />
          <Route path="inventory" element={<InventoryPage />} />
          <Route path="leaderboard" element={<LeaderboardPage />} />
          <Route path="earn-more" element={<EarnMorePage />}>
            <Route index element={<TasksList />} />
            <Route path="friends" element={<FriendsList />} />
            <Route path=":id" element={<ViewTask />} />
          </Route>
          <Route path="squads" element={<SquadsPage />} />
          <Route path="ch" element={<Dialog />} />

          
        </Route>
      </Routes>

  );
};

export default App;
