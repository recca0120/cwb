import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class Loading extends Vue {
    @Prop({default: false}) private showLoading!: boolean;
}
