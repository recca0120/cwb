import {Component, Vue, Prop, Emit} from 'vue-property-decorator';
import { Olami } from '@/olami';
import { Route } from 'vue-router';

@Component
export default class Login extends Vue {
    @Prop({default: {}}) public olami?: Olami;
    private passed = ['一二三四', '1234', 1234];

    get status() {
        if (!this.olami || !this.olami.asr) {
            return '';
        }

        return (this.passed.indexOf(this.olami.asr) !== -1) ? 'success' : 'failed';
    }

    @Emit()
    protected receiveOlami(): Olami {
        return {asr: '', nli: ''};
    }

    protected beforeRouteLeave(to: Route, from: Route, next: any) {
        this.receiveOlami();
        next();
    }
}
