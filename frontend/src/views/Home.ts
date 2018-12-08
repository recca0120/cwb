import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Home extends Vue {
    public asr: string = '高雄明天天氣';
    public nli: string = '高雄明天多雲中雨，最高溫度22.9℃，最低溫度18.5℃，南南西風軟風';

    protected created() {
        this.$parent.$emit('showLoading', true);
    }

    protected mounted() {
        this.$parent.$emit('showLoading', false);

        this.$on('olami', async (asr: string, nli: string) => {
            this.nli = nli;
            this.asr = asr;
        });
    }
}
