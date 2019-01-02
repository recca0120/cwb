import {Component, Vue, Prop, Emit, Inject} from 'vue-property-decorator';
import { Olami } from '@/olami';
import { Speaker } from '@/services/speaker';

@Component
export default class Home extends Vue {
    @Prop({default: {}}) public olami?: Olami;
    @Inject({default: new Speaker()}) private speaker!: Speaker;

    get asr() {
        return this.olami!.asr || '高雄明天天氣';
    }

    get nli() {
        if (this.olami && this.olami.nli) {
            this.speaker.say(this.olami.nli);
        }

        return this.olami!.nli || '高雄明天多雲中雨，最高溫度22.9℃，最低溫度18.5℃，南南西風軟風'; 
    }

    protected created() {
        this.toogleLoading(true);
    }

    protected mounted() {
        this.toogleLoading(false);
    }

    @Emit('toggle-loading')
    protected toogleLoading(showLoading: boolean) {
        return new Promise((resolve) => {
            if (showLoading === false) {
                setTimeout(() => resolve(false), 500);
            } else {
                resolve(true);
            }
        });
    }
}
