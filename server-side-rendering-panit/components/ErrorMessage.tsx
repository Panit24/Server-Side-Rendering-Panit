interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <div className='flex justify-center items-center min-h-screen'>
    <div className='text-center text-red-600'>
      <p className='text-xl'>{message}</p>
    </div>
  </div>
);

export default ErrorMessage;
