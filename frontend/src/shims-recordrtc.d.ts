declare module 'recordrtc' {
    export default class RecordRTC {
        constructor(stream: MediaStream, options: any);

        startRecording(): void;

        stopRecording(cb: Function | null | undefined): void;

        getBlob(): Blob;
    }
    export class StereoAudioRecorder {}
}