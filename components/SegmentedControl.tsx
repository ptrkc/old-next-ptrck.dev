import { useState } from 'react';

interface SegmentedControlOptions {
  options: Array<{value: string, label: string}>;
  selectedValue: string;
  setSelectedValue: Function;
}

const SegmentedControl = ({
  options,
  selectedValue,
  setSelectedValue,
}: SegmentedControlOptions) => {
  const [selectedIndex, setSelectedIndex] = useState(
    options.findIndex((option) => option.value === selectedValue),
  );
  const optionWidth = 100 / options.length;
  const optionLeft = selectedIndex * optionWidth;

  const onClick = (index: number) => {
    setSelectedIndex(index);
    setSelectedValue(options[index].value);
  };
  return (
    // Frame
    <div className="flex justify-around items-center rounded-md relative bg-neutral-700">
      <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-evenly items-center">
        {options.map(({ value }, index) => index !== options.length - 1 && (
        // Divider
        <div key={`divider-${value}`} className="h-[55%] w-[1px] bg-neutral-400" />
        ))}
      </div>
      {/* Background Frame */}
      <div
        style={{ left: `${optionLeft}%`, width: `${optionWidth}%` }}
        className="p-1 h-full absolute top-0 duration-300"
      >
        {/* Background */}
        <div className="rounded-md h-full shadow-md bg-neutral-900" />
      </div>
      {options.map(({ value, label }, index) => (
        // Option
        <button
          type="button"
          key={`option-${value}`}
          onClick={() => onClick(index)}
          className="w-full py-1 px-2 cursor-pointer relative text-lg text-white"
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default SegmentedControl;
