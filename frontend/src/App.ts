import {Component, Vue} from 'vue-property-decorator';
import Loading from './components/Loading.vue';
import Microphone from './components/Microphone.vue';

@Component({
    components: {
        Loading,
        Microphone,
    },
})
export default class App extends Vue {
    public showLoading = true;

    protected mounted() {
        this.$on('olami', (asr: string, nli: string) => (
            this.$children.forEach(($child: Vue) => $child.$emit('olami', asr, nli))),
        );
        this.$on('showLoading', (show: boolean) => this.showLoading = show);
        this.showLoading = false;
    }
}
