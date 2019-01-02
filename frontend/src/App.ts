import {Component, Vue} from 'vue-property-decorator';
import Loading from './components/Loading.vue';
import Microphone from './components/Microphone.vue';
import { Olami } from './Olami';

@Component({
    components: {
        Loading,
        Microphone,
    },
})
export default class App extends Vue {
    public showLoading = true;
    public olami: Olami = {};

    public toggleLoading(showLoading: boolean) {
        this.showLoading = showLoading;
    }

    public receiveOlami(olami: Olami) {
        this.olami = olami;
    }

    protected mounted() {
        this.toggleLoading(false);
    }
}
