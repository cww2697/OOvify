import React, { useState } from "react";

interface ToggleSwitchProps {
    option1: string;
    option2: string;
    onToggle?: (isToggled: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
                                                       option1,
                                                       option2,
                                                       onToggle }) => {
    const [isToggled, setToggled] = useState<boolean>(false);

    const handleToggle = () => {
        const newState = !isToggled;
        setToggled(newState);
        onToggle?.(newState);
    };

    return (
      <div
        className="w-fit rounded-full p-1 flex items-center cursor-pointer bg-zinc-300 dark:bg-zinc-950 select-none"
        onClick={handleToggle}
      >
          <div className="relative w-36 h-10 flex items-center justify-between text-sm font-medium">
              <div className={`w-1/2 h-full flex items-center justify-center z-10 ${!isToggled ? 'text-white' : 'text-gray-600'}`}>
                  {option1}
              </div>
              <div className={`w-1/2 h-full flex items-center justify-center z-10 ${isToggled ? 'text-white' : 'text-gray-600'}`}>
                  {option2}
              </div>
              <div
                  className={`absolute top-0 left-0 h-full w-1/2 bg-blue-500 rounded-full transition-all duration-300 ease-in-out ${
                      isToggled ? 'translate-x-full' : ''
                  }`}
              ></div>
          </div>
      </div>
    );

}

export default ToggleSwitch;