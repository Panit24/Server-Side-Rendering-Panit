const LoadingSpinner = () => (
  <div className='flex flex-col justify-center items-center min-h-screen'>
    <div className='m-2 spinner border-4 border-blue-500 border-t-transparent w-12 h-12 rounded-full animate-spin'></div>
    <p className='m-2 text-blue-500'> กำลังโหลด...</p>
  </div>
);

export default LoadingSpinner;
