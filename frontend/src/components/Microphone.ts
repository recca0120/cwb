import {Component, Inject, Vue} from 'vue-property-decorator';
import Recorder from '../services/recorder';
import Client from '../services/client';
import {Speaker} from '../services/speaker';

@Component({name: 'microphone'})
export default class Microphone extends Vue {
    @Inject({default: new Client()}) private client!: Client;
    @Inject({default: new Recorder()}) private recorder!: Recorder;
    @Inject({default: new Speaker()}) private speaker!: Speaker;

    public async startRecording(): Promise<void> {
        await this.recorder.startRecording();
    }

    public async stopRecording(): Promise<void> {
        try {
            this.$parent.$emit('showLoading', true);

            const blob: Blob = await this.recorder.stopRecording();
            const duration: number = await this.recorder.getDuration(blob);

            if (duration <= 1 || duration === Infinity) {
                return;
            }

            const {asr, nli} = await this.client.query(blob);
            this.$parent.$emit('olami', asr, nli);

            if (this.$route.name === 'home') {
                await this.speaker.say(nli);
            }
        } catch (err) {
            // console.error(err);
        } finally {
            setTimeout(() => this.$parent.$emit('showLoading', false), 200);
        }
    }
}

