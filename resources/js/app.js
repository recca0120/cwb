/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');

// window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Vue.component('example-component', require('./components/ExampleComponent.vue'));

// const files = require.context('./', true, /\.vue$/i)

// files.keys().map(key => {
//     return Vue.component(_.last(key.split('/')).split('.')[0], files(key))
// })

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// const app = new Vue({
//     el: '#app'
// });


const RecorderJs = require('recorderjs');
const {Howl} = require('howler');
const axios = require('axios');

window.Howl = Howl;

class Recorder {
    constructor() {
        try {
            const navigator = window.navigator;
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;

            const audioContext = new AudioContext({
                latencyHint: 'playback',
                sampleRate: 16000
            });

            navigator.getUserMedia({audio: true}, (stream) => {
                this.recorder = new RecorderJs(audioContext.createMediaStreamSource(stream), {
                    numChannels: 1
                });
            }, (ev) => {
                console.log(ev)
            })
        } catch (err) {
            console.error(err);
        }
    }

    start() {
        if (!this.recorder) {
            return;
        }
        this.recorder.record();

        return this;
    }

    stop() {
        if (!this.recorder) {
            return;
        }
        this.recorder.stop();

        return this;
    }

    export() {
        if (!this.recorder) {
            return;
        }

        return new Promise((resolve) => {
            this.recorder.exportWAV((blob) => {
                resolve(blob);
                this.recorder.clear();
            });
        });
    }
}

class Audio {
    constructor() {
        this.URL = window.URL || window.webkitURL;
    }

    getDuration(blob) {
        return new Promise((resolve) => {
            const audio = document.createElement('audio');

            audio.addEventListener('canplaythrough', (ev) => {
                resolve(ev.currentTarget.duration);
                document.body.removeChild(audio);
            });

            audio.src = this.URL.createObjectURL(blob);
            document.body.appendChild(audio);
        });
    }
}

class Speech {
    constructor() {
        this.microphone = document.querySelector('.vab-microphone button');
    }

    speak(response) {
        return new Promise(resolve => {
            const nli = response.data.nli[0].desc_obj.result;

            const url = this.microphone.getAttribute('data-speech');

            const params = {
                method: 'post',
                url: url,
                data: {
                    text: nli
                },
                config: {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            };

            axios(params)
                .then(response => response.data)
                .then(response => {
                    const sound = new Howl({
                        src: [`${response.file_path}${response.file_name}`]
                    });

                    sound.once('load', () => {
                        sound.play();
                        resolve(true);
                    })
                });
        });
    }
}

class Mask {
    constructor() {
        this.mask = document.querySelector('.lmask');
    }

    show() {
        this.mask.classList.remove('hidden');
    }

    hide() {
        this.mask.classList.add('hidden');
    }
}

class App {
    constructor() {
        this.isRecording = false;
        this.recorder = new Recorder();
        this.microphone = document.querySelector('.vab-microphone button');
        this.authForm = document.querySelector('#auth-form');
        this.weatherForm = document.querySelector('#weather-form');
        this.mask = new Mask();
        this.audio = new Audio();
        this.speech = new Speech();
    }

    init() {
        this.microphone.addEventListener('mousedown', this.startRecording.bind(this));
        this.microphone.addEventListener('mouseup', this.stopRecording.bind(this));
        this.microphone.addEventListener('mouseout', this.stopRecording.bind(this));

        this.microphone.addEventListener('touchstart', this.startRecording.bind(this));
        this.microphone.addEventListener('touchend', this.stopRecording.bind(this));

        this.authForm.querySelector('.next-btn').addEventListener('click', () => {
            this.authForm.classList.add('hidden');
            this.weatherForm.classList.remove('hidden');
        });
    }

    startRecording() {
        this.isRecording = true;
        this.recorder.start();
    }

    async stopRecording() {
        if (this.isRecording === false) {
            return;
        }
        this.isRecording = false;
        this.recorder.stop();

        this.mask.show();

        try {
            const blob = await this.recorder.export();

            if (!blob) {
                return;
            }

            const duration = await this.audio.getDuration(blob);

            if (!duration || duration < 1) {
                return;
            }

            const url = this.microphone.getAttribute('data-query');
            const filename = new Date().toISOString() + '.wav';
            const formData = new FormData();
            formData.append("sound", blob, filename);

            const params = {
                method: 'post',
                url: url,
                data: formData,
                config: {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            };

            const response = await axios(params);

            if (this.authForm.classList.contains('hidden') === false) {
                this.doAuthForm(response.data);
            } else {
                await this.doWeatherForm(response.data);
            }
        } catch (e) {
            console.error(e);
        } finally {
            this.mask.hide();
        }
    }

    doAuthForm(response) {
        const asr = response.data.asr.result;

        const speech = this.authForm.querySelector('.speech');
        speech.value = asr;

        const passwords = ['一二三四', '1234', 1234];
        if (passwords.indexOf(asr) !== -1) {
            speech.classList.add('input-success');
            this.authForm.querySelector('.continue').classList.remove('hidden');
            this.authForm.querySelector('.success').classList.remove('hidden');
            this.authForm.querySelector('.fail').classList.add('hidden');
        } else {
            speech.classList.remove('input-success');
            this.authForm.querySelector('.continue').classList.add('hidden');
            this.authForm.querySelector('.success').classList.add('hidden');
            this.authForm.querySelector('.fail').classList.remove('hidden');
        }
    }

    async doWeatherForm(response) {
        const asr = response.data.asr.result;

        const speech = this.weatherForm.querySelector('.speech');
        speech.value = asr;


        const nli = response.data.nli[0].desc_obj.result;
        document.querySelector('#vab-answer .vab-answer-text').innerHTML = nli;

        return this.speech.speak(response);
    }
}

window.App = new App;
