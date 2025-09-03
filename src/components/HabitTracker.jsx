import { useState } from 'react';

function HabitTracker() {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState('');

  const addHabit = () => {
    if (newHabit.trim() !== '') {
      setHabits([...habits, { id: Date.now(), name: newHabit, completedDays: 0 }]);
      setNewHabit('');
    }
  };

  const incrementDay = (id) => {
    setHabits(habits.map(habit =>
      habit.id === id ? { ...habit, completedDays: habit.completedDays + 1 } : habit
    ));
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter(habit => habit.id !== id));
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Habit Tracker</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          placeholder="Add a new habit"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onKeyPress={(e) => e.key === 'Enter' && addHabit()}
        />
        <button
          onClick={addHabit}
          className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {habits.map(habit => (
          <li key={habit.id} className="flex items-center justify-between p-2 border border-gray-200 rounded">
            <div>
              <span className="font-semibold">{habit.name}</span> - Days Completed: {habit.completedDays}
            </div>
            <div className="space-x-2">
              <button
                onClick={() => incrementDay(habit.id)}
                className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
              >
                +1 Day
              </button>
              <button
                onClick={() => deleteHabit(habit.id)}
                className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      {habits.length === 0 && (
        <p className="text-gray-500 text-center mt-4">No habits yet. Add one above!</p>
      )}
    </div>
  );
}

export default HabitTracker;
