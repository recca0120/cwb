import {Howl} from 'howler';
import Client from './client';

export class Speaker {
    constructor(private client = new Client()) {}

    public async say(text: string) {
        const sound = new Howl({
            src: await this.client.speech(text),
        });

        sound.once('load', () => {
            sound.play();
        });
    }
}
