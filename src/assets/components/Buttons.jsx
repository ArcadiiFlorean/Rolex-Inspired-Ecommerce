function Button({ label, onClick, variant = "primary", size = "md", disabled = false }) {
  const baseClasses = "font-semibold rounded transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const sizeClasses = {
    sm: "text-sm py-1 px-3",
    md: "text-md py-2 px-4",
    lg: "text-lg py-3 px-6",
  };
  const variantClasses = {
    primary: "bg-[#005C3C] hover:bg-[#004a30] text-white",
    secondary: "bg-transparent border-2 border-[#005C3C] text-[#005C3C] hover:bg-[#005C3C] hover:text-white",
    outline: "border border-gray-400 text-gray-800 hover:bg-gray-100",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {label}
    </button>
  );
}

export default Button;
