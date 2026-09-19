import {useEffect} from 'react';
import {Shell} from './components/Shell';
import {Home} from './pages/Home';
import {DesignerStory} from './pages/DesignerStory';
import {LeaderStory} from './pages/LeaderStory';
import {RiskStory} from './pages/RiskStory';
import {useRoute} from './router';

export function App() {
  const route = useRoute();

  useEffect(() => {
    window.scrollTo({top: 0});
  }, [route]);

  return (
    <Shell route={route}>
      {route === 'home' && <Home />}
      {route === 'designers' && <DesignerStory />}
      {route === 'leaders' && <LeaderStory />}
      {route === 'risk' && <RiskStory />}
    </Shell>
  );
}
