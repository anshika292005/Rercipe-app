import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ArrowLeft, Mic, MicOff, Volume2 } from 'lucide-react';

const CookingMode = ({ recipe, onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    let interval;
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timer]);

  const startTimer = (minutes) => {
    setTimer(minutes * 60);
    setIsTimerRunning(true);
  };

  const toggleTimer = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  const resetTimer = () => {
    setTimer(0);
    setIsTimerRunning(false);
  };

  const nextStep = () => {
    if (currentStep < recipe.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startVoiceRecognition = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      
      recognition.onstart = () => {
        setIsListening(true);
      };
      
      recognition.onresult = (event) => {
        const last = event.results.length - 1;
        const command = event.results[last][0].transcript.toLowerCase();
        
        if (command.includes('next')) {
          nextStep();
        } else if (command.includes('previous') || command.includes('back')) {
          prevStep();
        } else if (command.includes('timer')) {
          const match = command.match(/(\d+)\s*minute/);
          if (match) {
            startTimer(parseInt(match[1]));
          }
        } else if (command.includes('stop timer')) {
          resetTimer();
        }
      };
      
      recognition.onerror = () => {
        setIsListening(false);
      };
      
      recognition.onend = () => {
        setIsListening(false);
      };
      
      recognition.start();
    }
  };

  const speakInstruction = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="cooking-mode">
      <div className="cooking-header">
        <button onClick={onBack} className="back-btn">
          <ArrowLeft size={20} />
          Back to Recipes
        </button>
        <h2>{recipe.name}</h2>
        <div className="cooking-controls">
          <button 
            onClick={startVoiceRecognition}
            className={`voice-btn ${isListening ? 'listening' : ''}`}
          >
            {isListening ? <MicOff size={20} /> : <Mic size={20} />}
          </button>
          <button 
            onClick={() => speakInstruction(recipe.steps[currentStep].instruction)}
            className="speak-btn"
          >
            <Volume2 size={20} />
          </button>
        </div>
      </div>

      <div className="cooking-content">
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${((currentStep + 1) / recipe.steps.length) * 100}%` }}
          />
        </div>

        <div className="step-counter">
          Step {currentStep + 1} of {recipe.steps.length}
        </div>

        <div className="current-step">
          <h3>{recipe.steps[currentStep].title}</h3>
          <p className="step-instruction">{recipe.steps[currentStep].instruction}</p>
          {recipe.steps[currentStep].image && (
            <img 
              src={recipe.steps[currentStep].image} 
              alt={recipe.steps[currentStep].title}
              className="step-image"
            />
          )}
          {recipe.steps[currentStep].video && (
            <video 
              src={recipe.steps[currentStep].video}
              controls
              className="step-video"
            />
          )}
        </div>

        <div className="timer-section">
          <div className="timer-display">
            <span className="timer-text">{formatTime(timer)}</span>
            <div className="timer-controls">
              <button onClick={toggleTimer} className="timer-btn">
                {isTimerRunning ? <Pause size={16} /> : <Play size={16} />}
              </button>
              <button onClick={resetTimer} className="timer-btn">
                <RotateCcw size={16} />
              </button>
            </div>
          </div>
          <div className="timer-presets">
            {[1, 5, 10, 15, 30].map(minutes => (
              <button 
                key={minutes}
                onClick={() => startTimer(minutes)}
                className="preset-btn"
              >
                {minutes}m
              </button>
            ))}
          </div>
        </div>

        <div className="step-navigation">
          <button 
            onClick={prevStep}
            disabled={currentStep === 0}
            className="nav-btn"
          >
            Previous Step
          </button>
          <button 
            onClick={nextStep}
            disabled={currentStep === recipe.steps.length - 1}
            className="nav-btn primary"
          >
            {currentStep === recipe.steps.length - 1 ? 'Finish' : 'Next Step'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookingMode;