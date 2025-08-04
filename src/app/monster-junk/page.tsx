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

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const fetchCanvas = () => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext('2d');
      const background = document.getElementById('background');
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
      const player2 = document.getElementById("player2");
      const enemy = document.getElementById("enemy");

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

      const playerProp = {
          x: 50,
          y: 50,
          size: 100,
          speed: 8,
          angle: 0
      }

      const enemyProp = {
          x: canvas!.width + 50,
          y: canvas!.height + 50,
          size: 100,
          speed: 6,
          angle: 45
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
        
          enemyProp.angle = Math.atan2(dy, dx) + Math.PI / 2;
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

      function gameCollusion(a: any, b: any) {
          return (
              a.x < b.x + b.size &&
              a.x + a.size > b.x &&
              a.y < b.y + b.size &&
              a.y + a.size > b.y 
          )
      }

      function drawBackground() {
        context?.drawImage(background as CanvasImageSource, 0, 0, canvas!.width, canvas!.height);
      }

      function drawPlayer() {
        context!.save();
        context!.translate(playerProp.x + playerProp.size / 2, playerProp.y + playerProp.size / 2);
        context!.rotate(playerProp.angle);

        if (keys.a) {
          context!.drawImage(playerMirror1 as CanvasImageSource, -playerProp.size / 2, -playerProp.size / 2, playerProp.size, playerProp.size);
        } else {
          context!.drawImage(player1 as CanvasImageSource, -playerProp.size / 2, -playerProp.size / 2, playerProp.size, playerProp.size);
        }

        context!.restore();          
      }

      function drawEnemy() {
        context!.save();
        context!.translate(enemyProp.x + enemyProp.size / 2, enemyProp.y + enemyProp.size / 2);
        context!.rotate(enemyProp.angle);
        context!.drawImage(enemy as CanvasImageSource, -enemyProp.size / 2, -enemyProp.size / 2, enemyProp.size, enemyProp.size);
        context!.restore();         
      }
      
      function gameLoop() {
        context?.clearRect(0, 0, canvas!.width, canvas!.height);
        drawBackground();
        drawPlayer();
        drawEnemy();
        updatePlayerMove();
        updateEnemyMove();
        requestAnimationFrame(gameLoop);
      }

      gameLoop();
    }

    fetchCanvas();
  }, []);
  return (
    <div className='fixed font-pixelify'>
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
      </div>
    </div>
  )
}
