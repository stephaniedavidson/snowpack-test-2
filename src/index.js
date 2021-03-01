import { helloWorld } from './helloworld.js';
import confetti from 'https://cdn.skypack.dev/canvas-confetti';


confetti.create(document.getElementById('canvas'), {
    resize: true,
    useWorker: true,
   })({ particleCount: 200, spread: 200 });

helloWorld();