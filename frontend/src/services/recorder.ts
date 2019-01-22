import RecordRTC, { StereoAudioRecorder} from 'recordrtc';

interface Window {
    URL: any;
    webkitURL: any;
}

declare const window: Window;
const URL = window.URL || window.webkitURL;

export default class Recorder {
    private recorder?: RecordRTC;

    public async startRecording(): Promise<void> {
        const recorder: RecordRTC = await this.getRecorder();
        recorder.startRecording();
    }

    public async stopRecording(): Promise<Blob> {
        const recorder: RecordRTC = await this.getRecorder();

        return new Promise((resolve) => {
            recorder.stopRecording(() => {
                resolve(recorder.getBlob());
            });
        });
    }

    public async getDuration(blob: Blob): Promise<number | any> {
        return new Promise((resolve) => {
            const audio = document.createElement('audio');

            audio.addEventListener('loadeddata', (ev: any) => {
                resolve(parseFloat(ev.currentTarget.duration));
                document.body.removeChild(audio);
            });

            audio.src = URL.createObjectURL(blob);
            audio.style.visibility = 'hidden';
            audio.style.position = 'absolute';
            audio.style.left = '-10000px';
            audio.style.top = '0';
            document.body.appendChild(audio);
        });
    }

    private async getRecorder(): Promise<RecordRTC> {
        if (this.recorder) {
            return this.recorder;
        }

        const stream: MediaStream = await navigator.mediaDevices.getUserMedia({audio: true, video: false});

        this.recorder = new RecordRTC(stream, {
            type: 'audio',
            recorderType: StereoAudioRecorder,
            desiredSampRate: 16000,
            numberOfAudioChannels: 1,
            disableLogs: true,
        });

        return this.recorder;
    }
}
