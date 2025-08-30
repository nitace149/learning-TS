import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/Button';
import { PlusIcon } from './components/icons/PlusIcon';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button endIcon={<PlusIcon />} size='sm' varient="Primary" text="share" />

      <Button size='md' varient="Secondary" text="Add content" />

      <Button startIcon={<PlusIcon />} size='lg' varient="Secondary" text="Add content" />
    </>
  )
}

export default App
