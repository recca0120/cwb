<template>
    <form action="">
        <div class="input-group text-center say-password">
            <div class="row">
                <div class="col-md-12">
                    <label for="" class="label vab-label">請說出通關密語</label>
                </div>
                <div class="col-md-12">
                    <div class="col-md-6 col-md-push-3">
                        <input type="text" class="form-control vab-input" placeholder="您說的內容會顯示於此處" readonly="readonly"
                               :class="{ 'input-success': status === 'success', 'input-failed': status === 'failed' }"
                               v-model="asr"
                        >
                    </div>
                    <div class="col-md-2 col-md-push-3" v-if="status === 'success'">
                        <router-link to="/home" class="btn next-btn">
                            繼續
                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
                        </router-link>
                    </div>
                </div>
                <div class="col-md-12" v-if="status === 'success'">
                    <span for="" class="vab-success">*通關密語正確，請點選繼續</span>
                </div>
                <div class="col-md-12" v-else-if="status === 'failed'">
                    <span for="" class="vab-failed">*您的通關密語錯誤，請再試一次</span>
                </div>
            </div>
        </div>
    </form>
</template>

<script lang="ts" src="./Login.ts"></script>
