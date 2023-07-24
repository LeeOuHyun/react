import { RecoilRoot } from 'recoil';
import './App.css';
import Header from './components/layout/Header';

// const queryClient = new QueryClient(); // 생성
function App() {
  return (
    <div>
      <RecoilRoot>
        <Header />
      </RecoilRoot>
    </div>
  );
}
export default App;
