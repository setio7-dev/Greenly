/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { GoogleGenerativeAI } from '@google/generative-ai';
import glow from '../../../public/image/chatbot/glow.png';
import ask from '../../../public/image/chatbot/ask.png';
import send from '../../../public/image/chatbot/send.svg';
import mic from '../../../public/image/chatbot/mic.png';
import load from '../../../public/image/chatbot/answer.svg';
import logo from '../../../public/logo/chatbot-2.png';

interface Message {
  role: 'user' | 'bot';
  content: string;
}

const genAI = new GoogleGenerativeAI("AIzaSyD64u_CJq5n5N_twIqjlsMH8bo6tx_jy34");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export default function GreenlyBot() {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [showHeader, setShowHeader] = useState(true);
  const [showMic, setShowMic] = useState(false);
  const [typingContent, setTypingContent] = useState('');
  const recognitionRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading, typingContent]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.lang = 'id-ID';
        recognitionRef.current.interimResults = false;
        recognitionRef.current.maxAlternatives = 1;

        recognitionRef.current.onresult = async (event: any) => {
          const transcript = event.results[0][0].transcript;
          setPrompt('');
          setShowMic(false);
          setLoading(true);
          setShowHeader(false);
          setMessages((prev) => [...prev, { role: 'user', content: transcript }]);
          try {
            const response = await getCustomResponse(transcript);
            await typeText(response);
          } catch {
            setMessages((prev) => [...prev, { role: 'bot', content: 'Terjadi kesalahan. Silakan coba lagi.' }]);
            setLoading(false);
          }
        };

        recognitionRef.current.onerror = () => {
          setShowMic(false);
        };
      }
    }
  }, []);

  const typeText = async (text: string) => {
    setTypingContent('');
    let index = 0;
    setShowSuggestions(false)
    const interval = setInterval(() => {
      if (index < text.length) {
        setTypingContent((prev) => prev + text.charAt(index));
        index++;
        setLoading(false);
      } else {
        clearInterval(interval);
        setMessages((prev) => [...prev, { role: 'bot', content: text }]);
        setTypingContent('');
        setLoading(false);
      }
    }, 10);
  };

  const getCustomResponse = async (input: string) => {
    const lower = input.toLowerCase();
    if (lower.includes("who are you")) return "I'm **Greenly Bot**, your environmental awareness companion. Let's make the planet greener together!";
    if (lower.includes("siapa kamu")) return "Saya **Greenly Bot**, teman peduli lingkungan Anda. Mari bersama-sama menjaga bumi kita!";
    if (lower.includes("kamu siapa")) return "Saya **Greenly Bot**, asisten yang siap membantu Anda menjaga dan mencintai lingkungan.";
    const result = await model.generateContent(input);
    return result.response.text();
  };

  const handleSubmit = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setShowHeader(false);
    setMessages((prev) => [...prev, { role: 'user', content: prompt }]);
    const input = prompt;
    setPrompt('');
    try {
      const response = await getCustomResponse(input);
      await typeText(response);
    } catch (error) {
      console.error(error)
      setMessages((prev) => [...prev, { role: 'bot', content: 'Terjadi kesalahan. Silakan coba lagi.' }]);
      setLoading(false);
    }
  };

  const handleAsk = async (question: string) => {
    setPrompt('');
    setShowSuggestions(false);
    setShowHeader(false);
    setLoading(true);
    setMessages((prev) => [...prev, { role: 'user', content: question }]);
    try {
      const response = await getCustomResponse(question);
      await typeText(response);
    } catch {
      setMessages((prev) => [...prev, { role: 'bot', content: 'Terjadi kesalahan. Silakan coba lagi.' }]);
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSubmit();
  };

  const handleShowMic = () => {
    setShowMic(true);
    if (typeof window !== 'undefined') {
      const micAudio = new Audio('/audio/mic.mp3');
      micAudio.play();
    }    
    recognitionRef.current?.start();
  };

  return (
    <div>
      <div className={`absolute w-full h-screen font-poppins bg-[#00000024] z-50 flex-col justify-center items-center ${showMic ? 'flex' : 'hidden'}`}>
        <div className="bg-white rounded-lg p-6 lg:w-[340px] w-[280px] lg:h-[340px] h-[280px] flex flex-col justify-center items-center gap-8">
          <Image src={logo.src} className='bounce-show lg:w-[100px] w-[60px]' width={120} height={120} alt='image'/>
          <p className='font-[500] lg:text-[20px] text-[16px]'>Mendengarkan...</p>
          <div className="flex gap-1 items-end h-5">
            <span className="w-1 bg-green-500 animate-wave1 rounded-sm"></span>
            <span className="w-1 bg-green-500 animate-wave1 rounded-sm"></span>
            <span className="w-1 bg-green-500 animate-wave2 rounded-sm"></span>
            <span className="w-1 bg-green-500 animate-wave3 rounded-sm"></span>
            <span className="w-1 bg-green-500 animate-wave2 rounded-sm"></span>
            <span className="w-1 bg-green-500 animate-wave1 rounded-sm"></span>
            <span className="w-1 bg-green-500 animate-wave1 rounded-sm"></span>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between h-[11vh] lg:h-[14vh] items-center lg:px-20 px-6 fixed cursor-pointer z-30">
        <Link href="/" className="flex justify-center gap-1 cursor-pointer items-center">
          <i className="bx bx-chevron-left text-[24px] lg:text-[36px]" />
          <h1 className="font-poppins font-[600] text-[18px] lg:text-[20px]">Kembali</h1>
        </Link>
      </div>

      <div className="w-full flex-col flex fixed font-poppins justify-between h-[100vh] pt-24" data-aos="fade-up" data-aos-duration="800">
        <Image src={glow} alt="Glow" width={900} height={600} className="absolute -z-20 w-[1200px] h-auto -bottom-60 left-1/2 -translate-x-1/2" />

        {showHeader && (
          <div className="flex flex-col justify-center lg:mt-0 mt-12 items-center gap-8">
            <Image src={ask} alt="Ask" width={35} height={35} className="lg:w-[35px] w-[25px] h-auto" />
            <h1 className="font-[600] text-[16px] lg:text-[24px] text-center">Tanyakan apa saja kepada AI kami</h1>
          </div>
        )}

        <div className="flex flex-col mx-auto w-[320px] lg:w-[900px] justify-between h-[calc(100vh-100px)] pb-14">
          <div className={`flex flex-col overflow-y-auto px-2 lg:px-6 py-4 space-y-4 ${messages.length > 0 ? 'h-full' : 'lg:h-[26vh] h-[16vh]'}`}>
            {messages.map((msg, index) => (
              <div key={index} className="flex flex-col gap-1 lg:gap-2">
                <div className={`w-full text-[18px] text-[#56637E] flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <p className="font-[500]">{msg.role === 'user' ? 'Me' : 'Greenly Bot'}</p>
                </div>
                <div className={`p-4 rounded-lg max-w-[95%] lg:max-w-[70%] shadow-md ${msg.role === 'user' ? 'bg-white text-gray-800 ml-auto' : 'bg-white text-gray-800 mr-auto'}`}>
                  <div className="text-[10px] lg:text-[14px] text-justify">
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="animate-pulse bg-white p-4 rounded-lg w-[70%] shadow-md">
                  <Image src={load} alt="Loading" width={20} height={20} />
                </div>
              </div>
            )}

            {typingContent && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-lg max-w-[95%] lg:max-w-[70%] shadow-md text-[10px] lg:text-[14px] text-justify text-gray-800">
                  <ReactMarkdown>{typingContent}</ReactMarkdown>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {showSuggestions && (
            <div className="mb-0">
              <h1 className="text-[#56637E] text-[14px] lg:text-[16px] mb-2 font-[500]">Saran tentang apa yang harus ditanyakan kepada AI kami</h1>
              <div className="flex flex-wrap gap-3 my-4">
                {['Halo siapa kamu?', 'Bagaimana menjaga lingkungan?', 'Cara mendaur ulang sampah?'].map((question, idx) => (
                  <button key={idx} onClick={() => handleAsk(question)} className="bg-white px-6 py-3 rounded-full text-[10px] lg:text-[12px] shadow-sm">
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center w-full bg-white h-[80px] px-4 lg:px-6 rounded-xl shadow-lg">
            <input
              type="text"
              placeholder="Tanyakan apa pun tentang kondisi lingkungan Kamu sekarang"
              value={prompt}
              onChange={(e) => {
                setPrompt(e.target.value);
                if (e.target.value.trim()) setShowSuggestions(false);
              }}
              onKeyDown={handleKeyDown}
              className="w-full outline-none text-[12px] lg:text-[14px] pr-4"
            />
            <Image src={mic} alt="Mic" width={25} height={25} onClick={handleShowMic} className="cursor-pointer lg:w-[30px] w-[25px] mr-4" />
            <Image src={send} alt="Send" width={25} height={25} onClick={handleSubmit} className="cursor-pointer lg:w-[25px] w-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
