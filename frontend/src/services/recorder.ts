import RecorderJs from 'recorderjs';

export default class Recorder {
    private recorder?: RecorderJs;
    private audioContent: AudioContext;
    private URL: any;

    public constructor() {
        const AudioContent: any = (window as any).AudioContext || (window as any).webkitAudioContext;
        this.audioContent = new AudioContent();
        this.URL = (window as any).URL || (window as any).webkitURL;
    }

    public async startRecording(): Promise<void> {
        const recorder: RecorderJs = await this.getRecorder();
        recorder.record();
    }

    public async stopRecording(): Promise<any> {
        return new Promise(async (resolve) => {
            const recorder: RecorderJs = await this.getRecorder();
            recorder.stop();

            recorder.exportWAV((blob: Blob) => {
                resolve(blob);
                recorder.clear();
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

            audio.src = this.URL.createObjectURL(blob);
            audio.style.visibility = 'hidden';
            audio.style.position = 'absolute';
            audio.style.left = '-10000px';
            audio.style.top = '0';
            document.body.appendChild(audio);
        });
    }

    private async getRecorder(): Promise<RecorderJs> {
        if (this.recorder) {
            return this.recorder;
        }

        const stream: MediaStream = await navigator.mediaDevices.getUserMedia({audio: true, video: false});
        this.recorder = new RecorderJs(this.audioContent.createMediaStreamSource(stream), {numChannels: 1});

        return this.recorder;
    }
}
