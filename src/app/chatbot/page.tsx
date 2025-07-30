'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';

import glow from '../../../public/image/chatbot/glow.png';
import ask from '../../../public/image/chatbot/ask.png';
import send from '../../../public/image/chatbot/send.svg';
import load from '../../../public/image/chatbot/answer.svg';

interface Message {
  role: 'user' | 'bot';
  content: string;
}

export default function GreenlyBot() {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [showHeader, setShowHeader] = useState(true);
  const [typingContent, setTypingContent] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const typeText = (text: string) => {
    let i = 0;
    setTypingContent('');
    const interval = setInterval(() => {
      setTypingContent((prev) => prev + text.charAt(i));
      i++;
      if (i === text.length) {
        clearInterval(interval);
        setMessages((prev) => [...prev, { role: 'bot', content: text }]);
        setTypingContent('');
        scrollToBottom();
      }
    }, 0.5);
  };

  const handleSubmit = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setShowHeader(false);

    const userMessage: Message = { role: 'user', content: prompt };
    setMessages((prev) => [...prev, userMessage]);
    setPrompt('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 50));
      const res = await axios.post('http://localhost:5001/chat', { prompt });
      const cleaned = res.data.response.replace(/\*/g, '');
      typeText(cleaned);
    } catch (error) {
      console.error(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handleAsk = (question: string) => {
    setPrompt(question);
    setShowSuggestions(false);
    setShowHeader(false);
    handleSubmit();
  };

  return (
    <div className="">
      <div className='w-full flex justify-between h-[11vh] lg:h-[14vh] items-center lg:px-20 px-6 fixed cursor-pointer z-30'>
          <Link href='/' className="flex justify-center gap-1 cursor-pointer items-center">
              <i className='bx bx-chevron-left text-[24px] lg:text-[36px]'></i>
              <h1 className='font-poppins text-[18px] lg:text-[20px]'>Back</h1>
          </Link>
      </div>
      <div className="w-full flex-col flex fixed font-poppins justify-between h-[100vh] pt-24" data-aos="fade-up" data-aos-duration="800">
        <Image
          src={glow}
          alt=""
          width={900}
          height={600}
          className="absolute -z-20 w-[1200px] h-auto -bottom-60 left-1/2 -translate-x-1/2"
        />
        {showHeader && (
          <div className="flex flex-col justify-center lg:mt-0 mt-12 items-center gap-8">
            <Image src={ask} alt="" width={35} height={35} className="lg:w-[35px] w-[25px] h-auto" />
            <h1 className="font-[600] text-[16px] lg:text-[24px] text-center">
              Tanyakan apa saja kepada AI kami
            </h1>
          </div>
        )}
        <div className="flex flex-col mx-auto w-[320px] relative lg:w-[900px] justify-between h-[calc(100vh-100px)] pb-14">
          <div className={`flex flex-col overflow-y-auto ${messages.length >= 1 ? 'h-full' : 'lg:h-[26vh] h-[16vh]'} px-2 lg:px-6 py-4 space-y-4`}>
            {messages.map((msg, index) => (
              <div key={index} className={`flex flex-col gap-1 lg:gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`w-full text-[18px] text-[#56637E] flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <p className="font-[500]">{msg.role === 'user' ? 'Me' : 'Greenly Bot'}</p>
                </div>
                <div
                  className={`p-4 rounded-lg max-w-[95%] lg:max-w-[70%] shadow-md ${
                    msg.role === 'user' ? 'bg-white text-gray-800 ml-auto' : 'bg-white text-gray-800 mr-auto'
                  }`}
                >
                  <p className="text-[10px] lg:text-[14px] text-justify">{msg.content}</p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="animate-pulse bg-white p-4 rounded-lg w-[70%] shadow-md">
                  <Image src={load} alt="" width={20} height={20} className="w-[20px] h-auto" />
                </div>
              </div>
            )}
            {typingContent && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-lg w-[70%] shadow-md text-gray-800 text-[10px] lg:text-[14px] text-justify">
                  {typingContent}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          {showSuggestions && (
            <div className='mb-4'>
              <h1 className="text-[#56637E] text-[14px] lg:text-[16px] mb-2 font-[500]">
                Saran tentang apa yang harus ditanyakan kepada AI kami
              </h1>
              <div className="flex flex-wrap gap-3 my-4">
                {[
                  'How can I help reduce climate change?',
                  'What are the best ways to recycle household waste?',
                  'How can I live more sustainably?'
                ].map((question, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAsk(question)}
                    className="bg-white px-6 py-3 text-shadow-lg rounded-full text-[10px] lg:text-[12px] shadow-sm"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className="flex items-center w-full bg-white h-[80px] px-4 lg:px-6 rounded-xl shadow-lg mt-0">
            <input
              type="text"
              placeholder="Tanyakan apa pun tentang kondisi lingkungan Kamu sekarang"
              value={prompt}
              onChange={(e) => {
                setPrompt(e.target.value);
                if (e.target.value.trim()) setShowSuggestions(false);
              }}
              className="w-full outline-none font-poppins1 text-[12px] lg:text-[14px] pr-4"
            />
            <Image
              src={send}
              alt="Send"
              width={25}
              height={25}
              onClick={handleSubmit}
              className="cursor-pointer lg:w-[25px] w-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
