<!DOCTYPE html>
<!--[if IE 8]> <html lang="zh-Hant-TW" class="ie8"> <![endif]-->
<!--[if IE 9]> <html lang="zh-Hant-TW" class="ie9"> <![endif]-->
<!--[if !IE]><!-->
<html lang="zh-Hant-TW">
<!--<![endif]-->

<head>
    <title>語音答詢 | 交通部中央氣象局</title>
    <!-- Meta -->
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <!-- Favicon -->
    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}">
    <!-- =============== CSS Global Compulsory =============== -->
    <link rel="stylesheet" href="{{ asset('assets/plugins/bootstrap/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/plugins/font-awesome/css/font-awesome.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/plugins/cwb-fonticon/style.css') }}">
    <!-- =============== CSS Customization =============== -->
    <link rel="stylesheet" href="{{ asset('assets/css/main.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/main-map.css') }}">
    <link rel="stylesheet" href="{{ asset(mix('/css/app.css')) }}">
</head>

<body class="vab-bk">
<div class="lmask hidden"></div>
<div class="wrapper">
    <main class="main-content container text-center">
        <h2 class="vab-litle">氣象局氣象語音答詢系統</h2>
        <div class="vab-microphone">
            <button
                data-query="{{ route('api.olami.query') }}"
                data-speech="{{ route('api.olami.speech') }}"
            ><i class="fa fa-microphone" aria-hidden="true"></i></button>
        </div>

        <form id="auth-form">
            <div class="input-group text-center say-password">
                <div class="row">
                    <div class="col-md-12">
                        <label for="" class="label vab-label">請說出通關密語</label></div>
                    <div class="col-md-12">
                        <div class="col-md-6 col-md-push-3">
                            <input type="text" class="form-control vab-input speech" placeholder="您說的內容會顯示於此處" readonly="readonly">
                        </div>
                        <div class="col-md-2 col-md-push-3 continue hidden">
                            <button type="button" class="btn next-btn">
                                繼續
                                <i class="fa fa-arrow-right" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-md-12 success hidden">
                        <span for="" class="vab-success">*通關密語正確，請點選繼續</span>
                    </div>
                    <!-- <div class="col-md-12">
                        <div class="col-md-6 col-md-push-3">
                            <input type="text" class="form-control vab-input input-failed">
                        </div>
                    </div> -->
                    <div class="col-md-12 fail hidden">
                        <span for="" class="vab-failed">*您的通關密語錯誤，請再試一次</span>
                    </div>
                </div>
            </div>
        </form>

        <form id="weather-form" class="hidden">
            <div class="input-group say-password">
                <div class="row">
                    <div class="col-md-12">
                        <label for="" class="label vab-label">恭喜你，進入氣象語音答詢系統！<br />請問你想詢問的是</label>
                    </div>
                    <!-- 查詢成功 -->
                    <div class="col-md-12">
                        <div class="col-md-6 col-md-push-3">
                            <input type="text" class="form-control vab-input speech" value="高雄明天天氣" readonly="readonly">
                        </div>
                        <div class="col-md-1 col-md-push-3">
                            <div class="btn-group vab-prompt">
                                <button type="button" class="btn dropdown-toggle" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                                </button>
                                <ul class="dropdown-menu prompt-menu">
                                    <li>必要：地點（縣/市/鄉/鎮）主題（天氣）</li>
                                    <li>輔助：時間（日期/後天/明天）五日以內</li>
                                    <li>範例：<br />高雄天氣<br />請問永和週末會不會下雨<br />台中明天氣溫</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="col-md-12">
                        <div class="col-md-2 col-md-push-5">
                            <button type="button" class="btn next-btn">
                                確認
                                <i class="fa fa-level-down" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div> -->
                    <div class="col-md-8 col-md-push-2">
                        <div id="vab-answer" class="vab-answer">
                            <p class="vab-answer-text">高雄明天多雲中雨，最高溫度22.9℃，最低溫度18.5℃，南南西風軟風</p>
                        </div>
                    </div>
                    <!-- 查詢成功END -->
                    <!-- 無法查詢 -->
                    <!-- <div class="col-md-12">
                        <div class="col-md-6 col-md-push-3">
                            <input type="text" class="form-control vab-input" id="input-failed" placeholder="您說的內容會顯示於此處">
                        </div>
                        <div class="col-md-1 col-md-push-3">
                            <div class="btn-group vab-prompt">
                                <button type="button" class="btn dropdown-toggle" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                                </button>
                                <ul class="dropdown-menu prompt-menu">
                                    <li>必要：地點（縣/市/鄉/鎮）主題（天氣）</li>
                                    <li>輔助：時間（日期/後天/明天）五日以內</li>
                                    <li>範例：<br />高雄天氣<br />請問永和週末會不會下雨<br />台中明天氣溫</li>
                                </ul>
                            </div>
                        </div>
                    </div> -->
                    <!-- <div class="col-md-12">
                        <div class="col-md-2 col-md-push-5">
                            <button type="button" class="btn next-btn" onclick="vabBtnFailed()">
                                確認
                                <i class="fa fa-level-down" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div> -->
                    {{--
                    <div class="col-md-8 col-md-push-2">
                        <div id="vab-answer-failed" class="vab-answer">
                            <p class="vab-answer-text">對不起，你說的我還不懂，能換個說法嗎？
                                <!-- <a href="#" title="提示與範例">提示與範例</a>。 -->
                            </p>
                        </div>
                    </div>
                    --}}
                    <!-- 無法查詢END -->
                </div>
            </div>
        </form>
    </main>
</div>
<!--/wrapper-->
<!-- JS Global Compulsory -->
<script type="text/javascript" src="{{ asset('assets/plugins/jquery/jquery-2.2.4.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('assets/plugins/jquery/jquery-migrate.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('assets/plugins/bootstrap/js/bootstrap.min.js') }}"></script>
<script src="{{ asset(mix('js/app.js')) }}"></script>
<!-- JS Page Level -->
<script type="text/javascript">
    jQuery(document).ready(function () {
        App.init();
    });
</script>
<!--[if lt IE 9]>
<script src="{{ asset('assets/plugins/IE/respond.js') }}"></script>
<script src="{{ asset('assets/plugins/IE/html5shiv.js') }}"></script>
<script src="{{ asset('assets/plugins/IE/placeholder-IE-fixes.js') }}"></script>
<![endif]-->
</body>

</html>
