import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

const useSession = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      
      setSession(session);
      setLoading(false);
    };

    getSession()

    const {data: listener} = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
    })
    return () => listener?.subscription.unsubscribe()
  }, []);

  return {session, loading}
};

export default useSession;
