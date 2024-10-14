import { useEffect } from 'react';

const PageTitle = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]); // Only re-run the effect if title changes

  return null; // This component does not render anything
};

export default PageTitle;
