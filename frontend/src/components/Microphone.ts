import {Component, Inject, Vue, Emit} from 'vue-property-decorator';
import { Olami } from '@/Olami';
import Client from '@/services/client';
import Recorder from '@/services/recorder';

@Component({name: 'microphone'})
export default class Microphone extends Vue {
    @Inject({default: new Client()}) private client!: Client;
    @Inject({default: new Recorder()}) private recorder!: Recorder;

    public async startRecording(): Promise<void> {
        await this.recorder.startRecording();
    }

    @Emit('toggle-loading')
    public async stopRecording(): Promise<void> {
        try {
            this.toogleLoading(true);

            const blob: Blob = await this.recorder.stopRecording();
            const duration: number = await this.recorder.getDuration(blob);

            if (duration <= 1 || duration === Infinity) {
                return;
            }

            this.receiveOlami(await this.client.query(blob));
        } catch (err) {
            // console.error(err);
        } finally {
            setTimeout(() => {
                this.toogleLoading(false);
            }, 200);
        }
    }

    @Emit('toggle-loading')
    protected toogleLoading(showLoading: boolean) {
        return new Promise((resolve) => {
            if (showLoading === false) {
                setTimeout(() => resolve(false), 500);
            } else {
                resolve(true);
            }
        });
    }

    @Emit()
    protected receiveOlami(olami: Olami) {
        return olami;
    }
}

