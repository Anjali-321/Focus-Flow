import { useState } from 'react';

function MoodTracker() {
  const [moods, setMoods] = useState([]);
  const [currentMood, setCurrentMood] = useState('');

  const addMood = () => {
    if (currentMood.trim() !== '') {
      const today = new Date().toLocaleDateString();
      setMoods([...moods, { date: today, mood: currentMood }]);
      setCurrentMood('');
    }
  };

  const deleteMood = (index) => {
    setMoods(moods.filter((_, i) => i !== index));
  };

  const moodOptions = ['😀 Happy', '😊 Content', '😐 Neutral', '😔 Sad', '😠 Angry'];

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Mood Tracker</h2>
      <div className="mb-4">
        <select
          value={currentMood}
          onChange={(e) => setCurrentMood(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select your mood</option>
          {moodOptions.map(mood => (
            <option key={mood} value={mood}>{mood}</option>
          ))}
        </select>
        <button
          onClick={addMood}
          className="mt-2 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Log Mood
        </button>
      </div>
      <ul className="space-y-2">
        {moods.map((entry, index) => (
          <li key={index} className="flex items-center justify-between p-2 border border-gray-200 rounded">
            <div>
              <span className="font-semibold">{entry.date}:</span> {entry.mood}
            </div>
            <button
              onClick={() => deleteMood(index)}
              className="text-red-600 hover:text-red-800 focus:outline-none"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {moods.length === 0 && (
        <p className="text-gray-500 text-center mt-4">No moods logged yet. Select one above!</p>
      )}
    </div>
  );
}

export default MoodTracker;
