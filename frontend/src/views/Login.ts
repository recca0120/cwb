import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Login extends Vue {
    public status: string = '';
    public asr: string = '';
    private passed = ['一二三四', '1234', 1234];

    protected mounted() {
        this.$on('olami', (asr: string) => {
            this.asr = asr;
            this.status = (this.passed.indexOf(asr) !== -1) ? 'success' : 'failed';
        });
    }
}
