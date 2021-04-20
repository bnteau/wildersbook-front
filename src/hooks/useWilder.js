import { createWilder } from '../data/database';

export default function useWilder(event, wilder) {
    event.preventDefault();
    createWilder(wilder);
}