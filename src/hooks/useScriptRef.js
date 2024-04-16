import { useEffect, useRef } from 'react';

// ==============================|| ELEMENT REFERENCE HOOKS ||============================== //

export default function useScriptRef() {
  const scripted = useRef(true);

  useEffect(() => {
    scripted.current = false;
    console.log("I am invoked in useScript")
  }, []);

  return scripted;
}
