import { GetServerSideProps } from 'next';
import TodosList from '../components/TodosList';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { Todo } from '../types/types';
import Head from 'next/head';

interface HomePageProps {
  todos: Todo[];
  error: string | null;
}

const HomePage = ({ todos, error }: HomePageProps) => {
  if (error) {
    return <ErrorMessage message={`เกิดข้อผิดพลาด ${error || ''}`} />;
  }
  if (!todos) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <Head>
        <title>SSR Test from Panit</title>
        <meta name='description' content='SSR Test for Partnerhub' />
      </Head>
      <div className='w-full p-6'>
        <h1 className='text-3xl font-bold mb-6 text-sky-700'>
          To-Do List from JSONPlaceholder API
        </h1>
        <TodosList todos={todos} />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  let todos: Todo[] = [];
  let error: string | null = null;

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!response.ok) {
      throw new Error('Failed to fetch todos');
    }
    todos = await response.json();
  } catch (err: any) {
    error = err.message;
  }

  return {
    props: {
      todos,
      error,
    },
  };
};

export default HomePage;
