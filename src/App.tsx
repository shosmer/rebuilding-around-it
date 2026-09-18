import {useEffect} from 'react';
import {Shell} from './components/Shell';
import {Home} from './pages/Home';
import {DesignerStory} from './pages/DesignerStory';
import {LeaderStory} from './pages/LeaderStory';
import {ComingSoon} from './pages/ComingSoon';
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
      {route === 'risk' && (
        <ComingSoon
          title="For risk and operations leaders"
          teaser="Companies are backing this, humans keep the decision, and the support that works is structural. This story is in progress."
        />
      )}
    </Shell>
  );
}
