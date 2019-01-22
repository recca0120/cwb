declare module 'recordrtc' {
    export default class RecordRTC {
        constructor(stream: MediaStream, options: any);

        startRecording(): void;

        stopRecording(): Promise<void>

        stopRecording(cb: Function | null | undefined): Promise<void>;

        getBlob(): Blob;
    }
    export class StereoAudioRecorder {}
}