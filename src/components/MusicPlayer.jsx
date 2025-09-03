import { useState, useRef } from 'react';

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Music Player</h2>
      <audio ref={audioRef} src="" preload="metadata"></audio> {/* Add audio source here */}
      <div className="flex items-center justify-center space-x-4 mb-4">
        <button
          onClick={togglePlay}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span>Volume:</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
          className="flex-1"
        />
        <span>{Math.round(volume * 100)}%</span>
      </div>
      <p className="text-gray-500 text-center mt-4">
        Note: Add audio files to the public folder and update the src attribute for full functionality.
      </p>
    </div>
  );
}

export default MusicPlayer;
