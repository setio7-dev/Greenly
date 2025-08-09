/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useRef, useEffect, useState } from 'react'
import background from '../../../public/image/kenali/background1.png'
import life1 from '../../../public/image/kenali/life1.png'
import life2 from '../../../public/image/kenali/life2.png'
import life3 from '../../../public/image/kenali/life3.png'
import life4 from '../../../public/image/kenali/life4.png'
import trash1 from '../../../public/image/kenali/trash1.png'
import trash2 from '../../../public/image/kenali/trash2.png'
import trash3 from '../../../public/image/kenali/trash3.png'
import trash4 from '../../../public/image/kenali/trash4.png'
import img1 from '../../../public/image/kenali/trash/1.png'
import img2 from '../../../public/image/kenali/trash/2.png'
import img3 from '../../../public/image/kenali/trash/3.png'
import img4 from '../../../public/image/kenali/trash/4.png'
import img5 from '../../../public/image/kenali/trash/5.png'
import img6 from '../../../public/image/kenali/trash/6.png'
import img7 from '../../../public/image/kenali/trash/7.png'
import img8 from '../../../public/image/kenali/trash/8.png'
import img9 from '../../../public/image/kenali/trash/9.png'
import img10 from '../../../public/image/kenali/trash/10.png'
import img11 from '../../../public/image/kenali/trash/11.png'
import img12 from '../../../public/image/kenali/trash/12.png'
import Loading from '../ui/Loading'
import chevronRight from '../../../public/image/analog/right.svg';
import chevronLeft from '../../../public/image/analog/left.svg';
import chevronDown from '../../../public/image/analog/down.svg';

export default function Page() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCanvas = () => {
            const canvas = canvasRef.current;
            const context = canvas?.getContext('2d');

            const backgroundImage = document.getElementById('background');
            const life1 = document.getElementById('life1');
            const life2 = document.getElementById('life2');
            const life3 = document.getElementById('life3');
            const life4 = document.getElementById('life4');
            const score = document.getElementById('score');
            const trash1 = document.getElementById('trash1');
            const trash2 = document.getElementById('trash2');
            const trash3 = document.getElementById('trash3');
            const trash4 = document.getElementById('trash4');
            const trashObject1 = document.getElementById('trashObject1');
            const trashObject2 = document.getElementById('trashObject2');
            const trashObject3 = document.getElementById('trashObject3');
            const trashObject4 = document.getElementById('trashObject4');
            const trashObject5 = document.getElementById('trashObject5');
            const trashObject6 = document.getElementById('trashObject6');
            const trashObject7 = document.getElementById('trashObject7');
            const trashObject8 = document.getElementById('trashObject8');
            const trashObject9 = document.getElementById('trashObject9');
            const trashObject10 = document.getElementById('trashObject10');
            const trashObject11 = document.getElementById('trashObject11');
            const trashObject12 = document.getElementById('trashObject12');
            const play = document.getElementById('play');
            const playScreen = document.getElementById('playScreen');
            const countdownScreen = document.getElementById('countdownScreen');
            const countdown = document.getElementById('countdown');
            const gameoverScreen = document.getElementById('gameoverScreen');
            const gameover = document.getElementById("gameover");
            const playAgain = document.getElementById('playAgain');
            const close = document.getElementById("close");
            const chevronLeft = document.getElementById('chevronLeft');
            const chevronDown = document.getElementById('chevronDown');
            const chevronRight = document.getElementById('chevronRight');
            let thisTrashObject = 0;
            let scoreCount = 0;
            let playerLifeCount = 4;
            let isLifeShaking = false;
            let lifeShakeFrame = 0;
            let isGamePlay = false;
            let playerGameOver = "Kamu Kalah";
            countdownScreen!.style.display = 'none';
            gameoverScreen!.style.display = "none";            
            const backsound = new Audio('/audio/kenali/sound.mp3');
            backsound.loop = true;
            
            play?.addEventListener('click', () => {              
              backsound.play();
              const elem = document.documentElement;
            if (elem.requestFullscreen) {
              elem.requestFullscreen();
            } else if ((elem as any).webkitRequestFullscreen) {
              (elem as any).webkitRequestFullscreen();
            } else if ((elem as any).msRequestFullscreen) {
              (elem as any).msRequestFullscreen();
            }

              playScreen!.style.display = 'none';
              gameCountdown();
            });
            
            function gameCountdown() {
              countdownScreen!.style.display = 'flex';
              let countdownTotalCount = 3;

              const audio = new Audio('/audio/kenali/countdown.wav');
              audio.play();
              const countdownInterval = setInterval(() => {
                countdown!.textContent = `${countdownTotalCount}`;
                countdownTotalCount--;

                if (countdownTotalCount < 0) {
                  clearInterval(countdownInterval); 
                  countdownScreen!.style.display = 'none';
                  isGamePlay = true;
                }
              }, 1000);
            }

            const trashProp = {
                x: (canvas!.width - 180) / 2,
                y: (canvas!.height - 180),
                sizeX: 250,
                sizeY: 180,
            }

            const playerLifeProp = {
              x: canvas!.width - 300,
              y: 50,
              sizeX: 240,
              sizeY: 50
            }

            const trashObjectProp = {
              x: (canvas!.width - 100) / 2,
              y: 0,
              size: 120,
              speed: 14,
              direction: 1,
            }

            const keysProp = {
              a: false,
              s: false,
              d: false
            }

            const trashData = [
              {
                id: 1,
                image: trash1,
                type: 1
              },
              {
                id: 2,
                image: trash2,
                type: 2
              },
              {
                id: 3,
                image: trash3,
                type: 3
              },
              {
                id: 4,
                image: trash4,
                type: 4
              },
            ];

            const trashObjectData = [
              { id: 1, image: trashObject8, type: 2 },
              { id: 2, image: trashObject1, type: 2 },
              { id: 3, image: trashObject11, type: 1 },
              { id: 4, image: trashObject3, type: 3 },
              { id: 5, image: trashObject5, type: 2 },
              { id: 6, image: trashObject7, type: 2 },
              { id: 7, image: trashObject10, type: 1 },
              { id: 8, image: trashObject6, type: 2 },
              { id: 9, image: trashObject12, type: 3 },
              { id: 10, image: trashObject9, type: 1 },
              { id: 11, image: trashObject2, type: 4 },
              { id: 12, image: trashObject4, type: 2 },
              { id: 13, image: trashObject3, type: 3 },
              { id: 14, image: trashObject10, type: 1 },
              { id: 15, image: trashObject6, type: 2 },
              { id: 16, image: trashObject12, type: 3 },
              { id: 17, image: trashObject7, type: 2 },
              { id: 18, image: trashObject11, type: 1 },
              { id: 19, image: trashObject1, type: 2 },
              { id: 20, image: trashObject4, type: 2 },
              { id: 21, image: trashObject9, type: 1 },
              { id: 22, image: trashObject2, type: 4 },
              { id: 23, image: trashObject8, type: 2 },
              { id: 24, image: trashObject5, type: 2 },
            ];

            document.addEventListener('keydown', (e: any) => {
              if (e.key.toLowerCase() === "a") keysProp.a = true;
              if (e.key.toLowerCase() === "s") keysProp.s = true;
              if (e.key.toLowerCase() === "d") keysProp.d = true;
            });

            document.addEventListener('keyup', (e: any) => {
              if (e.key.toLowerCase() === "a") keysProp.a = false;
              if (e.key.toLowerCase() === "s") keysProp.s = false;
              if (e.key.toLowerCase() === "d") keysProp.d = false;
            });

            function trashUpdateMove() {
              if (keysProp.a) trashObjectProp.x -= trashObjectProp.speed;
              if (keysProp.s) trashObjectProp.y += trashObjectProp.speed;
              if (keysProp.d) trashObjectProp.x += trashObjectProp.speed;

              trashObjectProp.y += 3;
            }

            chevronLeft?.addEventListener("touchstart", () => {
              keysProp.a = true;
            });

            chevronRight?.addEventListener("touchstart", () => {
              keysProp.d = true;
            });

            chevronDown?.addEventListener("touchstart", () => {
              keysProp.s = true;
            });

            chevronLeft?.addEventListener("touchend", () => {
              keysProp.a = false;
            });

            chevronRight?.addEventListener("touchend", () => {
              keysProp.d = false;
            });

            chevronDown?.addEventListener("touchend", () => {
              keysProp.s = false;
            });

            function gameCollusion(a: any, b: any) {
              return (
                a.x < b.x + b.size &&
                a.x + a.size > b.x &&
                a.y < b.y + b.size &&
                a.y + a.size > b.y 
              )
            }

            function checkTrashCollusion() {
              const totalItems = trashData.length;
              const spacing = 20;
              const totalWidth = trashProp.sizeX * totalItems + spacing * (totalItems - 1);
              const startX = (canvas!.width - totalWidth) / 2;
              const y = canvas!.height - trashProp.sizeY;
            
              for (let index = 0; index < trashData.length; index++) {
                const x = startX + index * (trashProp.sizeX + spacing);
              
                const target = {
                  x,
                  y,
                  size: trashProp.sizeX
                };

                if (trashObjectProp.y > canvas!.height) {
                  playerLifeCount -= 1;
                  isLifeShaking = true;
                  lifeShakeFrame = 0;
                  thisTrashObject += 1;
                  trashObjectProp.y = 0;
                }
              
                if (gameCollusion(trashObjectProp, target)) {
                  const element = trashData[index];
                  const object = trashObjectData[thisTrashObject];

                  if (element.type === object.type) {
                    scoreCount += 10;
                    const audio = new Audio('/audio/kenali/coint.mp3');
                    audio.play();
                  } else {
                    const audio = new Audio('/audio/kenali/wrong.wav');
                    audio.play();
                    playerLifeCount -= 1;
                    isLifeShaking = true;
                    lifeShakeFrame = 0;
                  }

                  checkGameOver();
                  score!.textContent = `Skor: ${scoreCount}`;
                  thisTrashObject += 1;
                  trashObjectProp.y = 0;
                  break;
                }
              }
            }

            function checkGameOver() {
              if (scoreCount >= 210) {
                backsound.muted = true;
                const audio = new Audio('/audio/kenali/success.mp3');
                audio.play();

                playerGameOver = "Kamu Menang";
                isGamePlay = false;
                gameOverPlayer();
              } else if (playerLifeCount == 1) {
                backsound.muted = true;
                const audio = new Audio('/audio/kenali/gameover.mp3');
                audio.play();

                playerGameOver = "Kamu Kalah";
                isGamePlay = false;
                gameOverPlayer();
              }
            }

            function drawBackground() {
              context?.drawImage(backgroundImage as CanvasImageSource, 0, 0, canvas!.width, canvas!.height);
            }

            function drawLife() {
              let offsetX = 0;
              if (isLifeShaking) {
                offsetX = Math.sin(lifeShakeFrame * 1) * 5;
                lifeShakeFrame++;
                if (lifeShakeFrame > 5) {
                  isLifeShaking = false;
                  lifeShakeFrame = 0;
                }
              }
            
              const drawX = playerLifeProp.x + offsetX;
            
              if (playerLifeCount === 4) {
                context?.drawImage(life1 as CanvasImageSource, drawX, playerLifeProp.y, playerLifeProp.sizeX, playerLifeProp.sizeY);
              } else if (playerLifeCount === 3) {
                context?.drawImage(life2 as CanvasImageSource, drawX, playerLifeProp.y, playerLifeProp.sizeX, playerLifeProp.sizeY);
              } else if (playerLifeCount === 2) {
                context?.drawImage(life3 as CanvasImageSource, drawX, playerLifeProp.y, playerLifeProp.sizeX, playerLifeProp.sizeY);
              } else if (playerLifeCount === 1) {
                context?.drawImage(life4 as CanvasImageSource, drawX, playerLifeProp.y, playerLifeProp.sizeX, playerLifeProp.sizeY);
              } 
            }

            function drawTrashHorizontal() {
                const totalItems = trashData.length;
                const spacing = 20;
                const totalWidth = trashProp.sizeX * totalItems + spacing * (totalItems - 1);
                        
                const startX = (canvas!.width - totalWidth) / 2;
                const y = (canvas!.height - trashProp.sizeY);

                for (let index = 0; index < trashData.length; index++) {
                  const element = trashData[index];
                  const x = startX + index * (trashProp.sizeX + spacing)
                  context?.drawImage(element.image as CanvasImageSource, x, y, trashProp.sizeX, trashProp.sizeY)
                }
            }

            function drawTrashObject() {
                context?.drawImage(trashObjectData[thisTrashObject].image as CanvasImageSource, trashObjectProp.x, trashObjectProp.y, trashObjectProp.size, trashObjectProp.size);
            }

            function gameOverPlayer() {
              gameover!.textContent = playerGameOver;
              gameoverScreen!.style.display = "flex";
            }

            playAgain?.addEventListener('click', () => {
              window.location.reload();
            });

            close?.addEventListener('click', () => {
              window.location.href = "/permainan";
            });

            function gameLoop() {
                context?.clearRect(0, 0, canvas!.width, canvas!.height);
                drawBackground();
                drawTrashHorizontal();                                
                drawTrashObject();

                if (isGamePlay) {
                  trashUpdateMove();
                  checkTrashCollusion();                  
                }
                
                requestAnimationFrame(gameLoop);                
                drawLife();      
            }

            gameLoop();
        }

        const fetchIsLoading = async() => {
          await new Promise(resolve => setTimeout(resolve, 2000));
          setIsLoading(false);
        }

        fetchCanvas();
        fetchIsLoading()
    }, []);
  return (
    <div className='fixed font-pixelify'>
      <div className={`bg-[#0000007b] w-full h-screen absolute top-0 flex flex-col justify-center items-center ${isLoading == false ? 'z-20' : 'z-0'}`} id='playScreen'>
        <p className='font-[700] text-[50px] lg:text-[80px] text-[#FFAA00] pulse cursor-pointer' style={{ WebkitTextStroke: '2px black' }} id='play'>Mulai</p>
      </div>

      <div className={`bg-black rotate-phone w-full h-screen absolute top-0 flex flex-col justify-center items-center ${isLoading == false ? 'z-40' : 'z-0'}`} id='playScreen'>
        <video className='' autoPlay muted loop src="/video/rotate-phone.mp4"></video>
      </div>

      <div className={`bg-[#0000007b] w-full h-screen absolute top-0 flex flex-col justify-center items-center ${isLoading == false ? 'z-20' : 'z-0'}`} id='countdownScreen'>
        <p className='font-[700] text-[50px] lg:text-[80px] pulse text-[#FFAA00]' style={{ WebkitTextStroke: '2px black' }} id='countdown'>3</p>
      </div>

      <div className={`bg-[#0000007b] w-full h-screen absolute top-0 flex flex-col justify-center items-center ${isLoading == false ? 'z-20' : 'z-0'}`} id='gameoverScreen'>
        <p className='font-[700] text-[50px] lg:text-[80px] text-[#FFAA00]' style={{ WebkitTextStroke: '2px black' }} id='gameover'>KAMU KALAH</p>
        <div className="flex justify-center items-center mt-4 lg:mt-12 gap-20">
          <button className='text-white border-2 border-white px-8 py-2 rounded-md text-[14px] lg:text-[20px] font-[500] cursor-pointer hover:scale-90 hover:opacity-60 duration-200' id='playAgain'>Mulai Lagi</button>
          <button className='text-white border-2 border-white px-8 py-2 rounded-md text-[14px] lg:text-[20px] font-[500] cursor-pointer hover:scale-90 hover:opacity-60 duration-200' id='close'>Keluar</button>
        </div>
      </div>

      <Loading className={`${isLoading ? 'flex' : 'opacity-0 duration-400'}`}/>
      <div className={`absolute analog-game flex justify-center items-center gap-6 bottom-6 left-6 ${isLoading == false ? 'z-20' : 'z-0'}`}>
        <img src={chevronLeft.src} className='w-[42px] bg-[linear-gradient(150deg,_#58C229_30%,_#C7DF67_100%)] p-1.5 rounded-full h-auto' alt="" id='chevronLeft' />
        <img src={chevronDown.src} className='w-[42px] bg-[linear-gradient(150deg,_#58C229_30%,_#C7DF67_100%)] p-1.5 rounded-full h-auto' alt="" id='chevronDown' />
        <img src={chevronRight.src} className='w-[42px] bg-[linear-gradient(150deg,_#58C229_30%,_#C7DF67_100%)] p-1.5 rounded-full h-auto' alt="" id='chevronRight' />
      </div>

      <p className="absolute lg:top-12 top-6 left-14 font-[700] text-[24px] lg:text-[40px] text-shadow-2xl text-[#FFAA00]" style={{ WebkitTextStroke: '1px black' }} id='score'>Skor: 0</p>
      <canvas ref={canvasRef} className='w-full h-screen' width={1920} height={650}/>

      <div className="absolute opacity-0 pointer-events-none">
        <img src={life1.src} className='w-[140px] right-12 h-auto absolute top-12' alt="" id="life1" />
        <img src={life2.src} className='w-[140px] right-12 h-auto absolute top-12' alt="" id="life2" />
        <img src={life3.src} className='w-[140px] right-12 h-auto absolute top-12' alt="" id="life3" />
        <img src={life4.src} className='w-[140px] right-12 h-auto absolute top-12' alt="" id="life4" />
        <img src={background.src} alt="" id='background'/>
        <img src={trash1.src} alt="" id='trash1' />
        <img src={trash2.src} alt="" id='trash2' />
        <img src={trash3.src} alt="" id='trash3' />
        <img src={trash4.src} alt="" id='trash4' />
        <img src={img1.src} alt="" id='trashObject1' />
        <img src={img2.src} alt="" id='trashObject2' />
        <img src={img3.src} alt="" id='trashObject3' />
        <img src={img4.src} alt="" id='trashObject4' />
        <img src={img5.src} alt="" id='trashObject5' />
        <img src={img6.src} alt="" id='trashObject6' />
        <img src={img7.src} alt="" id='trashObject7' />
        <img src={img8.src} alt="" id='trashObject8' />
        <img src={img9.src} alt="" id='trashObject9' />
        <img src={img10.src} alt="" id='trashObject10' />
        <img src={img11.src} alt="" id='trashObject11' />
        <img src={img12.src} alt="" id='trashObject12' />
      </div>
    </div>
  )
}
