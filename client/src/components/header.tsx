const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center py-4 bg-[#44403c]">
      <h1 className="text-[24px] text-[#f97316]">Orange Book Store</h1>
      <p className="text-xs text-slate-400 text-center">
        This app is deployed on onrender.com with a free account.
      </p>
      <p className="text-xs text-slate-400 text-center">
        It might take 2-3min to spin up the service.
      </p>
    </div>
  );
};

export default Header;
