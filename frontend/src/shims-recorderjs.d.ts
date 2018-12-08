declare module 'recorderjs' {
    export default class RecorderJs {
        constructor(media: MediaStreamAudioSourceNode, options: any)
    
        record(): void;
    
        stop(): void;
    
        exportWAV(callback: Function): void;
    
        clear():void;
    }
}