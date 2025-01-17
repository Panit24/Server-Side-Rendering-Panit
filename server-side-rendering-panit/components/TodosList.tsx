import { Todo } from '../types/types';

interface TodosListProps {
  todos: Todo[];
}

const TodosList = ({ todos }: TodosListProps) => (
  <div className='flex justify-center'>
    <table className='table text-[9px] font-bold max-h-[720px] sm:text-sm w-[375px] sm:w-full border-2 rounded-md border-gray-200'>
      <thead>
        <tr className='bg-gray-300 text-[9px] sm:text-sm text-black'>
          <th className='text-center'>ลำดับ</th>
          <th className='text-center'>User ID</th>
          <th className='text-center'>Title</th>
          <th className='text-center'>Status</th>
        </tr>
      </thead>
      <tbody>
        {todos?.map((todo, idx) => (
          <tr key={todo?.id} className='hover:bg-gray-100'>
            <td className='border-r-2'>
              <div className='flex justify-center'>{todo?.id}</div>
            </td>
            <td className='leading-snug'>
              <div className='flex justify-center'>{todo?.userId}</div>
            </td>
            <td className='leading-snug border-x-2 break-words whitespace-normal'>
              {todo?.title}
            </td>
            <td
              className={`leading-snug flex justify-center items-center h-[99.25px] sm:h-auto ${
                todo?.completed ? 'text-green-600' : 'text-red-600'
              } `}
            >
              <div className='flex flex-col w-full h-full justify-center items-center'>
                <div className='flex justify-center py-1'>
                  {todo?.completed ? '✅' : '❌'}
                </div>
                <div className='flex justify-center py-1'>
                  {todo?.completed ? 'Completed' : 'Incompleted'}
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TodosList;
