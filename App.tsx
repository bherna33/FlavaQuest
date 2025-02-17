import Camera from 'components/Camera';
import { StatusBar } from 'expo-status-bar';

import './global.css';

export default function App() {
  return (
    <>
      <Camera/>
      <StatusBar style="auto" />
    </>
  );
}