import React, { useState } from 'react';

function ToggleComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const [active, setActive] = React.useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={toggleVisibility}
        className="px-4 py-2 mb-4 text-white bg-blue-500 rounded"
      >
        Toggle Visibility
      </button>

      <div
        className={`transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0'
          } overflow-hidden`}
      >
        <div className="p-4 bg-gray-200 rounded"
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        >
          <p>This is a toggleable content area.</p>
        </div>
      </div>
      {active && <>555555555555555</>}
    </div>
  );
}

export default ToggleComponent;
