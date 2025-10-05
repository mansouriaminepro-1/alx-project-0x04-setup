const Button = ({ 
  buttonLabel, 
  buttonBackgroundColor 
}: { 
  buttonLabel: string; 
  buttonBackgroundColor: 'red' | 'blue' 
}) => {
  const bgColor = buttonBackgroundColor === 'red' 
    ? 'bg-red-500 hover:bg-red-600' 
    : 'bg-blue-500 hover:bg-blue-600';

  return (
    <button className={`${bgColor} text-white px-4 py-2 rounded font-medium`}>
      {buttonLabel}
    </button>
  );
};

export default Button;