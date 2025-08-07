/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect, useState, useRef } from 'react'
import background from '../../../public/image/kenali/background1.png'
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
import player1 from '../../../public/logo/chatbot-1.png'
import playerMirror1 from '../../../public/logo/chatbot-mirror1.png'
import player2 from '../../../public/logo/chatbot-2.png'
import enemy from '../../../public/logo/enemy.png'
import enemyMirror from '../../../public/logo/enemy-mirror.png'
import Loading from '../ui/Loading'

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCanvas = () => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext('2d');
      const background = document.getElementById('background');
      const play = document.getElementById('play');
      const playScreen = document.getElementById('playScreen');
      const countdownScreen = document.getElementById('countdownScreen');
      const countdown = document.getElementById('countdown');
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
      const player1 = document.getElementById("player1");
      const playerMirror1 = document.getElementById("playerMirror1");
      const enemy = document.getElementById("enemy");
      const enemyMirror = document.getElementById("enemyMirror");
      const score = document.getElementById('score');
      const gameover = document.getElementById("gameover");
      const gameoverScreen = document.getElementById('gameoverScreen');
      const playAgain = document.getElementById('playAgain');
      const close = document.getElementById("close");
      const joystick = document.getElementById('joystick-container');
      const thumb = document.getElementById('joystick-thumb');
      let currentTrashIndex = 0;
      const spawnedTrash: any[] = [];
      let spawnInterval: NodeJS.Timeout;
      let isGameOver = false; 
      let isGamePlay = false;
      let scoreCount = 0;
      countdownScreen!.style.display = 'none';
      gameoverScreen!.style.display = "none";            
      const backsound = new Audio('/audio/monster/backsound.mp3');
      backsound.loop = true;
      let center = { x: 0, y: 0 };
      let dragging = false;
      let moveDirection = { x: 0, y: 0 };      

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

      joystick?.addEventListener('touchstart', (e) => {
        e.preventDefault();
        dragging = true;
        const rect = joystick.getBoundingClientRect();
        center = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };
      });

      joystick?.addEventListener('touchmove', (e) => {
        if (!dragging) return;
        const touch = e.touches[0];
        analog.dx = touch.clientX - center.x;
        analog.dy = touch.clientY - center.y;
        const dist = Math.min(Math.sqrt(analog.dx * analog.dx + analog.dy * analog.dy), 40);
      
        const angle = Math.atan2(analog.dy, analog.dx);
        const x = Math.cos(angle) * dist;
        const y = Math.sin(angle) * dist;
      
        thumb!.style.transform = `translate(${x}px, ${y}px)`;
      
        moveDirection = {
          x: x / 40,
          y: y / 40,
        };
      });

      joystick?.addEventListener('touchend', () => {
        dragging = false;
        moveDirection = { x: 0, y: 0 };
        thumb!.style.transform = 'translate(-50%, -50%)';
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
            startSpawningTrash();
          }
        }, 1000);
      }

      const keys = {
          w: false,
          a: false,
          s: false,
          d: false,
          ArrowUp: false,
          ArrowLeft: false,
          ArrowDown: false,
          ArrowRight: false,
      }

      const analog = {
        dx: 0,
        dy: 0 
      }

      const playerProp = {
          x: 50,
          y: 50,
          size: 100,
          sizeX: 120,
          sizeY: 100,
          speed: 8,
          angle: 0
      }

      const enemyProp = {
          x: canvas!.width + 50,
          y: canvas!.height + 50,
          sizeX: 110,
          sizeY: 90,
          size: 100,
          speed: 6,
      }

      document.addEventListener('keydown', (e) => {
          if (e.key === 'w') keys.w = true;
          if (e.key === 'a') keys.a = true;
          if (e.key === 's') keys.s = true;
          if (e.key === 'd') keys.d = true;
          if (e.key === 'ArrowUp') keys.ArrowUp = true;
          if (e.key === 'ArrowLeft') keys.ArrowLeft = true;
          if (e.key === 'ArrowDown') keys.ArrowDown = true;
          if (e.key === 'ArrowRight') keys.ArrowRight = true;
      });

      document.addEventListener('keyup', (e) => {
          if (e.key === 'w') keys.w = false;
          if (e.key === 'a') keys.a = false;
          if (e.key === 's') keys.s = false;
          if (e.key === 'd') keys.d = false;
          if (e.key === 'ArrowUp') keys.ArrowUp = false;
          if (e.key === 'ArrowLeft') keys.ArrowLeft = false;
          if (e.key === 'ArrowDown') keys.ArrowDown = false;
          if (e.key === 'ArrowRight') keys.ArrowRight = false;    
      });

      function updatePlayerMove() {
          if (keys.w || keys.ArrowUp) playerProp.y -= playerProp.speed;
          if (keys.a || keys.ArrowLeft) playerProp.x -= playerProp.speed;
          if (keys.s || keys.ArrowDown) playerProp.y += playerProp.speed;
          if (keys.d || keys.ArrowRight) playerProp.x += playerProp.speed;

          if (playerProp.x > canvas!.width) {
              playerProp.x = -playerProp.size
          } else if (playerProp.x + playerProp.size < 0) {
              playerProp.x = canvas!.width
          }
        
          if (playerProp.y > canvas!.height) {
              playerProp.y = -playerProp.size
          } else if (playerProp.y + playerProp.size < 0) {
              playerProp.y = canvas!.height
          }
      }

      function updateEnemyMove() {
          const dx = playerProp.x - enemyProp.x;
          const dy = playerProp.y - enemyProp.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
            
          if (distance > 1) {
              enemyProp.x += (dx / distance) * enemyProp.speed;
              enemyProp.y += (dy / distance) * enemyProp.speed;
          }      
      }

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

      function spawnTrash() {
        const spawnCount = 3;
      
        for (let i = 0; i < spawnCount; i++) {
          if (currentTrashIndex < trashObjectData.length) {
            const spawn = {
              ...trashObjectData[currentTrashIndex],
              x: Math.random() * (canvas!.width - 80),
              y: Math.random() * (canvas!.height - 80),
              size: 100,
            };
            spawnedTrash.push(spawn);
            currentTrashIndex++;
          } else {
            stopSpawningTrash();
            break;
          }
        }
      }

      function startSpawningTrash(interval = 3000) {
        spawnInterval = setInterval(spawnTrash, interval);
      }

      function stopSpawningTrash() {
        clearInterval(spawnInterval);
      }

      function gameCollusion(a: any, b: any) {
          return (
              a.x < b.x + b.size &&
              a.x + a.size > b.x &&
              a.y < b.y + b.size &&
              a.y + a.size > b.y 
          )
      }

      function checkCollisions() {
        for (let i = spawnedTrash.length - 1; i >= 0; i--) {
          const trash = spawnedTrash[i];
          if (gameCollusion(playerProp, trash)) {
            spawnedTrash.splice(i, 1);
            const audio = new Audio('/audio/monster/coint.wav');
            audio.play();
            currentTrashIndex--;
            scoreCount+=10;
            score!.textContent = `Skor: ${scoreCount}`;
          }
        }
      }

      function checkEnemyCollusion() {
        if (gameCollusion(playerProp, enemyProp)) {
          const audio = new Audio('/audio/monster/gameover.wav');
          audio.play();
          isGameOver = true;
          stopSpawningTrash();
        } 
      }

      function gameOver() {
        if (scoreCount > 320) {
          const audio = new Audio('/audio/monster/success.wav');
          audio.play();
          backsound.muted = true;
          gameover!.textContent = "KAMU MENANG";
          gameoverScreen!.style.display = 'flex';
          isGameOver = true;
          isGamePlay = false;
          stopSpawningTrash();
        } else if (isGameOver) {
          gameover!.textContent = "KAMU KALAH";
          gameoverScreen!.style.display = 'flex';
          backsound.muted = true;
        }
      }

      function drawTrash() {
        for (const item of spawnedTrash) {
          context?.drawImage(item.image as CanvasImageSource, item.x, item.y, item.size, item.size);
        }
      }

      function drawBackground() {
        context?.drawImage(background as CanvasImageSource, 0, 0, canvas!.width, canvas!.height);
      }

      function drawPlayer() {
        context!.save();
        context!.translate(playerProp.x + playerProp.size / 2, playerProp.y + playerProp.size / 2);
        context!.rotate(playerProp.angle);

        if (keys.a || analog.dx < 0) {
          context!.drawImage(playerMirror1 as CanvasImageSource, -playerProp.size / 2, -playerProp.size / 2, playerProp.sizeX, playerProp.sizeY);
        } else {
          context!.drawImage(player1 as CanvasImageSource, -playerProp.size / 2, -playerProp.size / 2, playerProp.sizeX, playerProp.sizeY);
        }

        context!.restore();          
      }

      function drawEnemy() {
        context!.save();
        context!.translate(enemyProp.x + enemyProp.sizeX / 2, enemyProp.y + enemyProp.sizeY / 2);
        context!.drawImage(enemy as CanvasImageSource, -enemyProp.sizeX / 2, -enemyProp.sizeY / 2, enemyProp.sizeX, enemyProp.sizeY);
        const isPlayerRight = playerProp.x > enemyProp.x;
        if (isPlayerRight) {
          context!.drawImage(enemyMirror as CanvasImageSource, -enemyProp.sizeX / 2, -enemyProp.sizeY / 2, enemyProp.sizeX, enemyProp.sizeY);
        } else {
          context!.drawImage(enemy as CanvasImageSource, -enemyProp.sizeX / 2, -enemyProp.sizeY / 2, enemyProp.sizeX, enemyProp.sizeY);
        }
      
        context!.restore();
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
        drawPlayer();
        drawEnemy();
        
        if (isGamePlay) {
          drawTrash();
          updatePlayerMove();
          updateEnemyMove();
        }

        checkCollisions();
        checkEnemyCollusion();
        gameOver();

        playerProp.x += moveDirection.x * playerProp.speed;
        playerProp.y += moveDirection.y * playerProp.speed;
        
        if (!isGameOver) {
          requestAnimationFrame(gameLoop);
        }
      }
          
      gameLoop();
    }

    const fetchIsLoading = async() => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);
    }

    fetchCanvas();
    fetchIsLoading();
  }, []);
  return (
    <div className='fixed font-pixelify'>
      <div id="joystick-container" className={`fixed analog-game bottom-6 left-6 w-[80px] h-[80px] rounded-full border-2 border-gray-400 bg-white/10 touch-none ${isLoading == false ? 'z-20' : 'z-0'}`}>
        <div id="joystick-thumb" className="w-[50px] h-[50px] bg-[#FFAA00] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"></div>
      </div>

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
      <p className="absolute lg:top-12 top-6 left-14 font-[700] text-[24px] lg:text-[40px] text-shadow-2xl text-[#FFAA00]" style={{ WebkitTextStroke: '1px black' }} id='score'>Skor: 0</p>
      <canvas ref={canvasRef} width={1920} height={650} className='w-full h-screen'></canvas>

      <div className="hidden">
        <img src={background.src} alt="" id='background' />
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
        <img src={player1.src} alt="" id='player1' />
        <img src={playerMirror1.src} alt="" id='playerMirror1' />
        <img src={player2.src} alt="" id='player2' />
        <img src={enemy.src} alt="" id='enemy' />
        <img src={enemyMirror.src} alt="" id='enemyMirror' />
      </div>
    </div>
  )
}
