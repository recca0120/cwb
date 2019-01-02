import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({ name: 'loading' })
export default class Loading extends Vue {
    @Prop({default: false}) private showLoading!: boolean;
}
