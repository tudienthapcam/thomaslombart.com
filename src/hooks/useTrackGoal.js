import React from "react";

const useTrackGoal = () => {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  const track = React.useCallback(
    (goalName, options) => {
      if (hasMounted && window.plausible) {
        window.plausible(goalName, {
          props: { path: window.location.pathname || "", ...options },
        });
      }
    },
    [hasMounted]
  );

  return track;
};

export default useTrackGoal;
