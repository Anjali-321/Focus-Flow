import { useState } from 'react';
import ToDoList from './components/ToDoList';
import PomodoroTimer from './components/PomodoroTimer';
import HabitTracker from './components/HabitTracker';
import MoodTracker from './components/MoodTracker';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [activeTab, setActiveTab] = useState('todo');

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'todo':
        return <ToDoList />;
      case 'pomodoro':
        return <PomodoroTimer />;
      case 'habit':
        return <HabitTracker />;
      case 'mood':
        return <MoodTracker />;
      case 'music':
        return <MusicPlayer />;
      default:
        return <div className="p-4">Welcome to FocusFlow</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">FocusFlow - All-in-One Productivity Dashboard</h1>
      </header>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('todo')}
              className={`py-2 px-4 ${activeTab === 'todo' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
            >
              To-Do List
            </button>
            <button
              onClick={() => setActiveTab('pomodoro')}
              className={`py-2 px-4 ${activeTab === 'pomodoro' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
            >
              Pomodoro Timer
            </button>
            <button
              onClick={() => setActiveTab('habit')}
              className={`py-2 px-4 ${activeTab === 'habit' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
            >
              Habit Tracker
            </button>
            <button
              onClick={() => setActiveTab('mood')}
              className={`py-2 px-4 ${activeTab === 'mood' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
            >
              Mood Tracker
            </button>
            <button
              onClick={() => setActiveTab('music')}
              className={`py-2 px-4 ${activeTab === 'music' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
            >
              Music Player
            </button>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 px-4">
        {renderActiveComponent()}
      </main>
    </div>
  );
}

export default App;
