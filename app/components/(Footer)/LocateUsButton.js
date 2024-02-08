// LocateUsButton.js
import React from 'react';

const LocateUsButton = ({ location }) => {
  const url = `https://maps.app.goo.gl/AdbMzj3PVDABnzxa8?g_st=ic${location}`;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl">
      Locate Us
    </a>
  );
};

export default LocateUsButton;