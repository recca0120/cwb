<template>
    <form action="">
        <div class="input-group say-password">
            <div class="row">
                <div class="col-md-12">
                    <label for="" class="label vab-label">恭喜你，進入氣象語音答詢系統！<br/>請問你想詢問的是</label>
                </div>
                <div class="col-md-12">
                    <div class="col-md-6 col-md-push-3">
                        <input type="text" class="form-control vab-input" readonly="readonly" v-model="asr">
                    </div>
                    <div class="col-md-1 col-md-push-3">
                        <div class="btn-group vab-prompt">
                            <button type="button" class="btn dropdown-toggle" data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                            </button>
                            <ul class="dropdown-menu prompt-menu">
                                <li>必要：地點（縣/市/鄉/鎮）主題（天氣）</li>
                                <li>輔助：時間（日期/後天/明天）五日以內</li>
                                <li>範例：<br/>高雄天氣<br/>請問永和週末會不會下雨<br/>台中明天氣溫</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 col-md-push-2">
                    <div id="vab-answer" class="vab-answer">
                        <p class="vab-answer-text">{{ nli }}</p>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script lang="ts" src="./Home.ts"></script>
