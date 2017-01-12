import { Penguin } from './penguin';

export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    penguin: Penguin;
    playersAttacksLeft: number;
    monstersAttacksLeft: number;
}