const Header = () => {
  return (
    <div className="flex justify-between p-2  h-[50] bg-green-200">
      <div className="flex gap-5">
        <p>Logo</p>
        <input type="text" className="px-4 py-2 border" />
      </div>
      <div className="flex gap-2">
        <button className="bg-blue-800 text-white p-2 rounded-md">Login</button>
        <button className="bg-blue-800 text-white p-2 rounded-md">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Header;
