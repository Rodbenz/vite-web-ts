/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import LoadingScreen from './components/MUI/LoadingScreen';
import { SplashScreenProvider } from './core/SplashScreen';

function App() {
  const isLoadding = useSelector(
    (state:any) => state?.loading_screen?.loading
  );

  
  return (
    <SplashScreenProvider>
      {isLoadding && <LoadingScreen loading={isLoadding} />}
      <Outlet />
    </SplashScreenProvider>

  )
}

export default App