import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! 👋 Welcome to Definite Success. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const newUserMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(newUserMessage.text);
      const newBotMessage: Message = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, newBotMessage]);
    }, 1000);
  };

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      return "Hello! I'm here to assist you with any questions about our courses or academy.";
    }
    if (lowerInput.includes('course') || lowerInput.includes('learn')) {
      return "We offer a wide range of courses including Web Development, Data Science, and more. You can view them on our Courses page!";
    }
    if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('fee')) {
      return "Our course prices vary. Please check the specific course details for pricing information. We also offer scholarships!";
    }
    if (lowerInput.includes('contact') || lowerInput.includes('support') || lowerInput.includes('call')) {
      return "You can reach us at support@definitesuccess.com or call us at 094222 93688.";
    }
    if (lowerInput.includes('location') || lowerInput.includes('address')) {
      return "We are located at Baliram Patil High School, Vinayak Housing Society, N 8, Cidco, Chhatrapati Sambhajinagar.";
    }
    
    return "Thanks for your question! I'm just a demo bot, but our support team would be happy to help you with that. Please contact us directly.";
  };

  const suggestedQuestions = [
    "What courses do you offer?",
    "How much do courses cost?",
    "Where are you located?",
    "How can I contact support?"
  ];

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg text-white transition-colors duration-300 ${
          isOpen ? 'hidden' : 'flex'
        } bg-brand-teal hover:bg-teal-600 shadow-teal-500/30`}
      >
        <MessageCircle size={28} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] md:w-[380px] h-[500px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-800 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-brand-teal p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Definite Success Assistant</h3>
                  <p className="text-xs text-teal-100 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-slate-950/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.sender === 'user'
                        ? 'bg-brand-teal text-white rounded-tr-none'
                        : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 border border-gray-100 dark:border-slate-700 rounded-tl-none shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {/* Suggested Questions */}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {suggestedQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setInputValue(q);
                        // Optional: auto-send
                        // handleSendMessage(); 
                      }}
                      className="text-xs bg-white dark:bg-slate-800 border border-teal-100 dark:border-slate-700 text-teal-600 dark:text-teal-400 px-3 py-1.5 rounded-full hover:bg-teal-50 dark:hover:bg-slate-700 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-4 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-1 px-4 py-2 rounded-full bg-gray-100 dark:bg-slate-800 border border-transparent focus:border-brand-teal focus:bg-white dark:focus:bg-slate-900 focus:ring-0 outline-none text-sm text-gray-800 dark:text-white transition-all"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="p-2 bg-brand-teal text-white rounded-full hover:bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
