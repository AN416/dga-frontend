'use strict';

const NAMESPACE = 'core';
const BUILD = /* core */ { hydratedSelectorName: "hydrated", lazyLoad: true, slotRelocation: true, updatable: true};

const globalScripts = () => {};
const globalStyles = "html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}:focus{outline:0}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:\"\";content:none}table{border-collapse:collapse;border-spacing:0}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration{-webkit-appearance:none;-moz-appearance:none}input[type=search]{-webkit-appearance:none;-moz-appearance:none;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}textarea{overflow:auto;vertical-align:top;resize:vertical}audio,canvas,video{display:inline-block;zoom:1;max-width:100%}audio:not([controls]){display:none;height:0}[hidden]{display:none}html{font-size:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}a:active,a:hover{outline:0}img{border:0;-ms-interpolation-mode:bicubic;}figure{margin:0}form{margin:0}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{border:0;padding:0;white-space:normal;*margin-left:-7px;}button,input,select,textarea{font-size:100%;margin:0;vertical-align:baseline;*vertical-align:middle;}button,input{line-height:normal}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer;*overflow:visible;}button[disabled],html input[disabled]{cursor:default}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0;*height:13px;*width:13px;}input[type=search]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top;}table{border-collapse:collapse;border-spacing:0}html,button,input,select,textarea{color:#222}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}img{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.chromeframe{margin:0.2em 0;background:#ccc;color:#000;padding:0.2em 0}/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}*{box-sizing:border-box}body{margin:0}main{display:block}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0;}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px;}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}@font-face{font-family:\"IBM Plex Sans Arabic\";src:url(\"/assets/fonts/IBM-Plex-Sans-Arabic/IBMPlexSansArabic-Regular.woff2\") format(\"woff2\"), url(\"/assets/fonts/IBM-Plex-Sans-Arabic/IBMPlexSansArabic-Regular.woff\") format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:\"IBM Plex Sans Arabic\";src:url(\"/assets/fonts/IBM-Plex-Sans-Arabic/IBMPlexSansArabic-Medium.woff2\") format(\"woff2\"), url(\"/assets/fonts/IBM-Plex-Sans-Arabic/IBMPlexSansArabic-Medium.woff\") format(\"woff\");font-weight:500;font-style:normal}@font-face{font-family:\"IBM Plex Sans Arabic\";src:url(\"/assets/fonts/IBM-Plex-Sans-Arabic/IBMPlexSansArabic-SemiBold.woff2\") format(\"woff2\"), url(\"/assets/fonts/IBM-Plex-Sans-Arabic/IBMPlexSansArabic-SemiBold.woff\") format(\"woff\");font-weight:600;font-style:normal}@font-face{font-family:\"IBM Plex Sans Arabic\";src:url(\"/assets/fonts/IBM-Plex-Sans-Arabic/IBMPlexSansArabic-Bold.woff2\") format(\"woff2\"), url(\"/assets/fonts/IBM-Plex-Sans-Arabic/IBMPlexSansArabic-Bold.woff\") format(\"woff\");font-weight:700;font-style:normal;font-display:auto}body{font-family:\"IBM Plex Sans Arabic\"}a,a:active,a:focus{color:inherit;text-decoration:none}.display-2xl-regular{font:400 72px/90px \"IBM Plex Sans Arabic\"}.display-xl-regular{font:400 60px/72px \"IBM Plex Sans Arabic\"}.display-lg-regular{font:400 48px/60px \"IBM Plex Sans Arabic\"}.display-md-regular{font:400 36px/44px \"IBM Plex Sans Arabic\"}.display-sm-regular{font:400 30px/38px \"IBM Plex Sans Arabic\"}.display-xs-regular{font:400 24px/32px \"IBM Plex Sans Arabic\"}.text-xl-regular,.content-switcher__item--lg{font:400 20px/30px \"IBM Plex Sans Arabic\"}.text-lg-regular,.content-switcher__item--md{font:400 18px/28px \"IBM Plex Sans Arabic\"}.text-md-regular,.dga-label--lg,.list-title,.list-item,.content-switcher__item--sm,div.table-wrapper .azm-table tbody td,.menu-item__trail-element,.menu-item__label,.date-cell__label,.input--lg .input__prefix-label,.input--lg .input__suffix-label,.input__prefix-label,.input__prefix-icon,.input__prefix-chevron,.input__suffix-label,.input__suffix-icon,.input__suffix-chevron,.input__field::placeholder,.input__field{font:400 16px/24px \"IBM Plex Sans Arabic\"}.text-sm-regular,.dga-label--md,.dga-breadcrumb-dropdown-item,.input--md .input__prefix-label,.input--md .input__suffix-label,.input--md .input__field,.input--md .input__field::placeholder,.input--lg .input__field,.input--lg .input__field::placeholder,.input__prefix .dropdown__label--selection,.input__suffix .dropdown__label--selection,.dga-form-control>.dga-label{font:400 14px/20px \"IBM Plex Sans Arabic\"}.text-xs-regular{font:400 12px/18px \"IBM Plex Sans Arabic\"}.text-2xs-regular{font:400 10px/14px \"IBM Plex Sans Arabic\"}.display-2xl-medium{font:500 72px/90px \"IBM Plex Sans Arabic\"}.display-xl-medium{font:500 60px/72px \"IBM Plex Sans Arabic\"}.display-lg-medium{font:500 48px/60px \"IBM Plex Sans Arabic\"}.display-md-medium{font:500 36px/44px \"IBM Plex Sans Arabic\"}.display-sm-medium{font:500 30px/38px \"IBM Plex Sans Arabic\"}.display-xs-medium{font:500 24px/32px \"IBM Plex Sans Arabic\"}.text-xl-medium{font:500 20px/30px \"IBM Plex Sans Arabic\"}.text-lg-medium{font:500 18px/28px \"IBM Plex Sans Arabic\"}.text-md-medium,.dga-btn--lg,.date-picker__navigator-label{font:500 16px/24px \"IBM Plex Sans Arabic\"}.text-sm-medium,.dga-btn--md{font:500 14px/20px \"IBM Plex Sans Arabic\"}.text-xs-medium,.dga-btn--sm,div.table-wrapper .azm-table thead th span span.text{font:500 12px/18px \"IBM Plex Sans Arabic\"}.text-2xs-medium{font:500 10px/14px \"IBM Plex Sans Arabic\"}.display-2xl-semibold{font:600 72px/90px \"IBM Plex Sans Arabic\"}.display-xl-semibold{font:600 60px/72px \"IBM Plex Sans Arabic\"}.display-lg-semibold{font:600 48px/60px \"IBM Plex Sans Arabic\"}.display-md-semibold{font:600 36px/44px \"IBM Plex Sans Arabic\"}.display-sm-semibold{font:600 30px/38px \"IBM Plex Sans Arabic\"}.display-xs-semibold{font:600 24px/32px \"IBM Plex Sans Arabic\"}.text-xl-semibold{font:600 20px/30px \"IBM Plex Sans Arabic\"}.text-lg-semibold{font:600 18px/28px \"IBM Plex Sans Arabic\"}.text-md-semibold{font:600 16px/24px \"IBM Plex Sans Arabic\"}.text-sm-semibold,.dga-label--lg.semibold,.dga-label--md.semibold{font:600 14px/20px \"IBM Plex Sans Arabic\"}.text-xs-semibold{font:600 12px/18px \"IBM Plex Sans Arabic\"}.text-2xs-semibold{font:600 10px/14px \"IBM Plex Sans Arabic\"}.display-2xl-bold{font:700 72px/90px \"IBM Plex Sans Arabic\"}.display-xl-bold{font:700 60px/72px \"IBM Plex Sans Arabic\"}.display-lg-bold{font:700 48px/60px \"IBM Plex Sans Arabic\"}.display-md-bold{font:700 36px/44px \"IBM Plex Sans Arabic\"}.display-sm-bold{font:700 30px/38px \"IBM Plex Sans Arabic\"}.display-xs-bold{font:700 24px/32px \"IBM Plex Sans Arabic\"}.text-xl-bold{font:700 20px/30px \"IBM Plex Sans Arabic\"}.text-lg-bold{font:700 18px/28px \"IBM Plex Sans Arabic\"}.text-md-bold,.date-cell--today .date-cell__label span{font:700 16px/24px \"IBM Plex Sans Arabic\"}.text-sm-bold{font:700 14px/20px \"IBM Plex Sans Arabic\"}.text-xs-bold,.menu-group__label{font:700 12px/18px \"IBM Plex Sans Arabic\"}.text-2xs-bold{font:700 10px/14px \"IBM Plex Sans Arabic\"}.dga-spacing-hor-0{height:0px}.dga-spacing-vert-0{width:0px}.dga-p-0{padding:0px}.dga-px-0{padding-inline:0px}.dga-py-0{padding-block:0px}.dga-pl-0{padding-left:0px}.dga-pr-0{padding-right:0px}.dga-pt-0{padding-top:0px}.dga-pb-0{padding-bottom:0px}.dga-mx-0{margin-inline:0px}.dga-my-0{margin-block:0px}.dga-ml-0{margin-left:0px}.dga-mr-0{margin-right:0px}.dga-mt-0{margin-top:0px}.dga-mb-0{margin-bottom:0px}.dga-spacing-hor-2{height:8px}.dga-spacing-vert-2{width:8px}.dga-p-2{padding:8px}.dga-px-2{padding-inline:8px}.dga-py-2{padding-block:8px}.dga-pl-2{padding-left:8px}.dga-pr-2{padding-right:8px}.dga-pt-2{padding-top:8px}.dga-pb-2{padding-bottom:8px}.dga-mx-2{margin-inline:8px}.dga-my-2{margin-block:8px}.dga-ml-2{margin-left:8px}.dga-mr-2{margin-right:8px}.dga-mt-2{margin-top:8px}.dga-mb-2{margin-bottom:8px}.dga-spacing-hor-4{height:16px}.dga-spacing-vert-4{width:16px}.dga-p-4{padding:16px}.dga-px-4{padding-inline:16px}.dga-py-4{padding-block:16px}.dga-pl-4{padding-left:16px}.dga-pr-4{padding-right:16px}.dga-pt-4{padding-top:16px}.dga-pb-4{padding-bottom:16px}.dga-mx-4{margin-inline:16px}.dga-my-4{margin-block:16px}.dga-ml-4{margin-left:16px}.dga-mr-4{margin-right:16px}.dga-mt-4{margin-top:16px}.dga-mb-4{margin-bottom:16px}.dga-spacing-hor-8{height:32px}.dga-spacing-vert-8{width:32px}.dga-p-8{padding:32px}.dga-px-8{padding-inline:32px}.dga-py-8{padding-block:32px}.dga-pl-8{padding-left:32px}.dga-pr-8{padding-right:32px}.dga-pt-8{padding-top:32px}.dga-pb-8{padding-bottom:32px}.dga-mx-8{margin-inline:32px}.dga-my-8{margin-block:32px}.dga-ml-8{margin-left:32px}.dga-mr-8{margin-right:32px}.dga-mt-8{margin-top:32px}.dga-mb-8{margin-bottom:32px}.dga-spacing-hor-12{height:48px}.dga-spacing-vert-12{width:48px}.dga-p-12{padding:48px}.dga-px-12{padding-inline:48px}.dga-py-12{padding-block:48px}.dga-pl-12{padding-left:48px}.dga-pr-12{padding-right:48px}.dga-pt-12{padding-top:48px}.dga-pb-12{padding-bottom:48px}.dga-mx-12{margin-inline:48px}.dga-my-12{margin-block:48px}.dga-ml-12{margin-left:48px}.dga-mr-12{margin-right:48px}.dga-mt-12{margin-top:48px}.dga-mb-12{margin-bottom:48px}.dga-spacing-hor-16{height:64px}.dga-spacing-vert-16{width:64px}.dga-p-16{padding:64px}.dga-px-16{padding-inline:64px}.dga-py-16{padding-block:64px}.dga-pl-16{padding-left:64px}.dga-pr-16{padding-right:64px}.dga-pt-16{padding-top:64px}.dga-pb-16{padding-bottom:64px}.dga-mx-16{margin-inline:64px}.dga-my-16{margin-block:64px}.dga-ml-16{margin-left:64px}.dga-mr-16{margin-right:64px}.dga-mt-16{margin-top:64px}.dga-mb-16{margin-bottom:64px}.dga-spacing-hor-24{height:96px}.dga-spacing-vert-24{width:96px}.dga-p-24{padding:96px}.dga-px-24{padding-inline:96px}.dga-py-24{padding-block:96px}.dga-pl-24{padding-left:96px}.dga-pr-24{padding-right:96px}.dga-pt-24{padding-top:96px}.dga-pb-24{padding-bottom:96px}.dga-mx-24{margin-inline:96px}.dga-my-24{margin-block:96px}.dga-ml-24{margin-left:96px}.dga-mr-24{margin-right:96px}.dga-mt-24{margin-top:96px}.dga-mb-24{margin-bottom:96px}.dga-spacing-hor-32{height:128px}.dga-spacing-vert-32{width:128px}.dga-p-32{padding:128px}.dga-px-32{padding-inline:128px}.dga-py-32{padding-block:128px}.dga-pl-32{padding-left:128px}.dga-pr-32{padding-right:128px}.dga-pt-32{padding-top:128px}.dga-pb-32{padding-bottom:128px}.dga-mx-32{margin-inline:128px}.dga-my-32{margin-block:128px}.dga-ml-32{margin-left:128px}.dga-mr-32{margin-right:128px}.dga-mt-32{margin-top:128px}.dga-mb-32{margin-bottom:128px}.dga-spacing-hor-40{height:160px}.dga-spacing-vert-40{width:160px}.dga-p-40{padding:160px}.dga-px-40{padding-inline:160px}.dga-py-40{padding-block:160px}.dga-pl-40{padding-left:160px}.dga-pr-40{padding-right:160px}.dga-pt-40{padding-top:160px}.dga-pb-40{padding-bottom:160px}.dga-mx-40{margin-inline:160px}.dga-my-40{margin-block:160px}.dga-ml-40{margin-left:160px}.dga-mr-40{margin-right:160px}.dga-mt-40{margin-top:160px}.dga-mb-40{margin-bottom:160px}.dga-spacing-hor-48{height:192px}.dga-spacing-vert-48{width:192px}.dga-p-48{padding:192px}.dga-px-48{padding-inline:192px}.dga-py-48{padding-block:192px}.dga-pl-48{padding-left:192px}.dga-pr-48{padding-right:192px}.dga-pt-48{padding-top:192px}.dga-pb-48{padding-bottom:192px}.dga-mx-48{margin-inline:192px}.dga-my-48{margin-block:192px}.dga-ml-48{margin-left:192px}.dga-mr-48{margin-right:192px}.dga-mt-48{margin-top:192px}.dga-mb-48{margin-bottom:192px}.dga-spacing-hor-56{height:224px}.dga-spacing-vert-56{width:224px}.dga-p-56{padding:224px}.dga-px-56{padding-inline:224px}.dga-py-56{padding-block:224px}.dga-pl-56{padding-left:224px}.dga-pr-56{padding-right:224px}.dga-pt-56{padding-top:224px}.dga-pb-56{padding-bottom:224px}.dga-mx-56{margin-inline:224px}.dga-my-56{margin-block:224px}.dga-ml-56{margin-left:224px}.dga-mr-56{margin-right:224px}.dga-mt-56{margin-top:224px}.dga-mb-56{margin-bottom:224px}.dga-spacing-hor-64{height:256px}.dga-spacing-vert-64{width:256px}.dga-p-64{padding:256px}.dga-px-64{padding-inline:256px}.dga-py-64{padding-block:256px}.dga-pl-64{padding-left:256px}.dga-pr-64{padding-right:256px}.dga-pt-64{padding-top:256px}.dga-pb-64{padding-bottom:256px}.dga-mx-64{margin-inline:256px}.dga-my-64{margin-block:256px}.dga-ml-64{margin-left:256px}.dga-mr-64{margin-right:256px}.dga-mt-64{margin-top:256px}.dga-mb-64{margin-bottom:256px}.dga-spacing-hor-72{height:288px}.dga-spacing-vert-72{width:288px}.dga-p-72{padding:288px}.dga-px-72{padding-inline:288px}.dga-py-72{padding-block:288px}.dga-pl-72{padding-left:288px}.dga-pr-72{padding-right:288px}.dga-pt-72{padding-top:288px}.dga-pb-72{padding-bottom:288px}.dga-mx-72{margin-inline:288px}.dga-my-72{margin-block:288px}.dga-ml-72{margin-left:288px}.dga-mr-72{margin-right:288px}.dga-mt-72{margin-top:288px}.dga-mb-72{margin-bottom:288px}.dga-spacing-hor-80{height:320px}.dga-spacing-vert-80{width:320px}.dga-p-80{padding:320px}.dga-px-80{padding-inline:320px}.dga-py-80{padding-block:320px}.dga-pl-80{padding-left:320px}.dga-pr-80{padding-right:320px}.dga-pt-80{padding-top:320px}.dga-pb-80{padding-bottom:320px}.dga-mx-80{margin-inline:320px}.dga-my-80{margin-block:320px}.dga-ml-80{margin-left:320px}.dga-mr-80{margin-right:320px}.dga-mt-80{margin-top:320px}.dga-mb-80{margin-bottom:320px}.dga-spacing-hor-88{height:352px}.dga-spacing-vert-88{width:352px}.dga-p-88{padding:352px}.dga-px-88{padding-inline:352px}.dga-py-88{padding-block:352px}.dga-pl-88{padding-left:352px}.dga-pr-88{padding-right:352px}.dga-pt-88{padding-top:352px}.dga-pb-88{padding-bottom:352px}.dga-mx-88{margin-inline:352px}.dga-my-88{margin-block:352px}.dga-ml-88{margin-left:352px}.dga-mr-88{margin-right:352px}.dga-mt-88{margin-top:352px}.dga-mb-88{margin-bottom:352px}.dga-spacing-hor-96{height:384px}.dga-spacing-vert-96{width:384px}.dga-p-96{padding:384px}.dga-px-96{padding-inline:384px}.dga-py-96{padding-block:384px}.dga-pl-96{padding-left:384px}.dga-pr-96{padding-right:384px}.dga-pt-96{padding-top:384px}.dga-pb-96{padding-bottom:384px}.dga-mx-96{margin-inline:384px}.dga-my-96{margin-block:384px}.dga-ml-96{margin-left:384px}.dga-mr-96{margin-right:384px}.dga-mt-96{margin-top:384px}.dga-mb-96{margin-bottom:384px}.dga-spacing-hor-104{height:416px}.dga-spacing-vert-104{width:416px}.dga-p-104{padding:416px}.dga-px-104{padding-inline:416px}.dga-py-104{padding-block:416px}.dga-pl-104{padding-left:416px}.dga-pr-104{padding-right:416px}.dga-pt-104{padding-top:416px}.dga-pb-104{padding-bottom:416px}.dga-mx-104{margin-inline:416px}.dga-my-104{margin-block:416px}.dga-ml-104{margin-left:416px}.dga-mr-104{margin-right:416px}.dga-mt-104{margin-top:416px}.dga-mb-104{margin-bottom:416px}.dga-spacing-hor-112{height:448px}.dga-spacing-vert-112{width:448px}.dga-p-112{padding:448px}.dga-px-112{padding-inline:448px}.dga-py-112{padding-block:448px}.dga-pl-112{padding-left:448px}.dga-pr-112{padding-right:448px}.dga-pt-112{padding-top:448px}.dga-pb-112{padding-bottom:448px}.dga-mx-112{margin-inline:448px}.dga-my-112{margin-block:448px}.dga-ml-112{margin-left:448px}.dga-mr-112{margin-right:448px}.dga-mt-112{margin-top:448px}.dga-mb-112{margin-bottom:448px}.dga-spacing-hor-120{height:480px}.dga-spacing-vert-120{width:480px}.dga-p-120{padding:480px}.dga-px-120{padding-inline:480px}.dga-py-120{padding-block:480px}.dga-pl-120{padding-left:480px}.dga-pr-120{padding-right:480px}.dga-pt-120{padding-top:480px}.dga-pb-120{padding-bottom:480px}.dga-mx-120{margin-inline:480px}.dga-my-120{margin-block:480px}.dga-ml-120{margin-left:480px}.dga-mr-120{margin-right:480px}.dga-mt-120{margin-top:480px}.dga-mb-120{margin-bottom:480px}.dga-radius-small{border-radius:2px}.dga-radius-small-t{border-radius:2px 2px 0 0}.dga-radius-small-tl{border-radius:2px 0px 0 0}.dga-radius-small-tr{border-radius:0px 2px 0 0}.dga-radius-small-b{border-radius:0 0 2px 2px}.dga-radius-small-bl{border-radius:0 0 2px 0px}.dga-radius-small-br{border-radius:0 0 0px 2px}.dga-radius-medium{border-radius:4px}.dga-radius-medium-t{border-radius:4px 4px 0 0}.dga-radius-medium-tl{border-radius:4px 0px 0 0}.dga-radius-medium-tr{border-radius:0px 4px 0 0}.dga-radius-medium-b{border-radius:0 0 4px 4px}.dga-radius-medium-bl{border-radius:0 0 4px 0px}.dga-radius-medium-br{border-radius:0 0 0px 4px}.dga-radius-large{border-radius:8px}.dga-radius-large-t{border-radius:8px 8px 0 0}.dga-radius-large-tl{border-radius:8px 0px 0 0}.dga-radius-large-tr{border-radius:0px 8px 0 0}.dga-radius-large-b{border-radius:0 0 8px 8px}.dga-radius-large-bl{border-radius:0 0 8px 0px}.dga-radius-large-br{border-radius:0 0 0px 8px}.dga-radius-xlarge{border-radius:12px}.dga-radius-xlarge-t{border-radius:12px 12px 0 0}.dga-radius-xlarge-tl{border-radius:12px 0px 0 0}.dga-radius-xlarge-tr{border-radius:0px 12px 0 0}.dga-radius-xlarge-b{border-radius:0 0 12px 12px}.dga-radius-xlarge-bl{border-radius:0 0 12px 0px}.dga-radius-xlarge-br{border-radius:0 0 0px 12px}.dga-radius-none{border-radius:0px}.dga-radius-circular{border-radius:100%}.dga-flex{display:flex}.dga-flex-column{display:flex;flex-direction:column}.dga-flex-center{display:flex;align-items:center;justify-content:center}.dga-flex-center-y{display:flex;align-items:center}.dga-flex-center-x{display:flex;justify-content:center}.dga-flex-between{display:flex;justify-content:space-between}.dga-flex-wrap{flex-wrap:wrap}.dga-flex-align-stretch{align-items:stretch}.dga-flex-align-start{align-items:flex-start}.dga-flex-align-end{align-items:flex-end}.dga-flex-justify-end{justify-content:flex-end}.dga-flex-justify-start{justify-content:flex-start}.dga-text-right{text-align:right}.dga-text-left{text-align:left}.dga-text-center{text-align:center}.dga-shadow-xs{box-shadow:var(--shadow-xs)}.dga-shadow-sm{box-shadow:var(--shadow-sm)}.dga-shadow-md,.input.focus{box-shadow:var(--shadow-md)}.dga-shadow-lg{box-shadow:var(--shadow-lg)}.dga-shadow-xl,.dga-breadcrumb-dropdown{box-shadow:var(--shadow-xl)}.dga-shadow-2xl,.menu,.date-picker-root{box-shadow:var(--shadow-2xl)}.dga-shadow-3xl{box-shadow:var(--shadow-3xl)}.dga-ver-divider{width:1px;height:48px;background:var(--colors-alpha-alpha-black-20);margin-inline:var(--spacing-xl)}@media only screen and (max-width: 37.5em){.dga-xs-hide{display:none}}.dga-flex-justify-start{justify-content:start}.dga-flex-justify-end{justify-content:end}.dga-flex-justify-center{justify-content:center}.dga-flex-justify-between{justify-content:between}.dga-flex-justify-around{justify-content:around}.dga-flex-align-start{align-items:start}.dga-flex-align-end{align-items:end}.dga-flex-align-center{align-items:center}.dga-flex-align-stretch{align-items:stretch}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}:focus{outline:0}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:\"\";content:none}table{border-collapse:collapse;border-spacing:0}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration{-webkit-appearance:none;-moz-appearance:none}input[type=search]{-webkit-appearance:none;-moz-appearance:none;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}textarea{overflow:auto;vertical-align:top;resize:vertical}audio,canvas,video{display:inline-block;zoom:1;max-width:100%}audio:not([controls]){display:none;height:0}[hidden]{display:none}html{font-size:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}a:active,a:hover{outline:0}img{border:0;-ms-interpolation-mode:bicubic;}figure{margin:0}form{margin:0}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{border:0;padding:0;white-space:normal;*margin-left:-7px;}button,input,select,textarea{font-size:100%;margin:0;vertical-align:baseline;*vertical-align:middle;}button,input{line-height:normal}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer;*overflow:visible;}button[disabled],html input[disabled]{cursor:default}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0;*height:13px;*width:13px;}input[type=search]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top;}table{border-collapse:collapse;border-spacing:0}html,button,input,select,textarea{color:#222}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}img{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.chromeframe{margin:0.2em 0;background:#ccc;color:#000;padding:0.2em 0}/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}*{box-sizing:border-box}body{margin:0}main{display:block}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0;}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px;}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}:root{--spacing-0:0px;--spacing-0-5:2px;--spacing-1:4px;--spacing-1-5:6px;--spacing-2:8px;--spacing-3:12px;--spacing-4:16px;--spacing-5:20px;--spacing-6:24px;--spacing-8:32px;--spacing-10:40px;--spacing-12:48px;--spacing-16:64px;--spacing-20:80px;--spacing-24:96px;--spacing-32:128px;--spacing-40:160px;--spacing-48:192px;--spacing-56:224px;--spacing-64:256px;--spacing-96:384px;--spacing-80:320px;--spacing-120:480px;--spacing-140:560px;--spacing-160:640px;--spacing-180:720px;--spacing-192:768px;--spacing-256:1024px;--spacing-320:1280px;--spacing-360:1440px;--spacing-400:1600px;--spacing-480:1920px}:root{--width-xxs:var(--spacing-80);--width-xs:var(--spacing-96);--width-sm:var(--spacing-120);--width-md:var(--spacing-140);--width-lg:var(--spacing-160);--width-xl:var(--spacing-192);--width-2xl:var(--spacing-256);--width-3xl:var(--spacing-320);--width-4xl:var(--spacing-360);--width-5xl:var(--spacing-400);--width-6xl:var(--spacing-480);--maxwidth-paragraph-max-width:var(--spacing-180)}@media only screen and (min-width: 1025px){:root{--tooltip-padding:var(--spacing-2);--tooltip-gap:var(--spacing-2);--tab-button-gap:var(--spacing-1);--notification-gap:var(--spacing-4);--notification-padding:var(--spacing-4);--notification-h-padding:var(--spacing-6);--notification-alert-v-padding:var(--spacing-2);--notification-alert-h-padding:var(--spacing-6);--notification-toast-v-padding:var(--spacing-4);--notification-toast-desktop-h-padding:var(--spacing-6);--notification-toast-mobile-h-padding:var(--spacing-4);--tab-horizontal-tab-md-button-v-padding:var(--spacing-3);--tab-horizontal-tab-md-button-h-padding:var(--spacing-4);--tab-horizontal-tab-sm-button-v-padding:var(--spacing-2);--tab-horizontal-tab-sm-button-h-padding:var(--spacing-3);--tab-vertical-tab-md-button-v-padding:var(--spacing-1-5);--tab-vertical-tab-md-button-h-padding:var(--spacing-3);--tab-vertical-tab-sm-button-v-padding:var(--spacing-0-5);--tab-vertical-tab-sm-button-h-padding:var(--spacing-1-5);--table-cell-gap:var(--spacing-2);--table-cell-v-padding:var(--spacing-2);--table-cell-h-padding:var(--spacing-4);--control-vertical-gap:var(--spacing-1);--control-title-error-gap:var(--spacing-4);--control-switch-error-icon-gap:var(--spacing-2);--control-radio-error-icon-gap:var(--spacing-4);--control-switch-description-padding:var(--spacing-16);--control-radio-description-padding:var(--spacing-12);--form-label-gap:var(--spacing-1);--form-field-label-gap:var(--spacing-2);--form-input-padding:var(--spacing-0);--form-input-gap:var(--spacing-0);--form-textarea-padding:var(--spacing-0);--form-textarea-gap:var(--spacing-0);--form-select-padding:var(--spacing-0);--form-select-gap:var(--spacing-0);--accordion-lg-header-padding:var(--spacing-4);--accordion-lg-header-gap:var(--spacing-4);--accordion-md-header-padding:var(--spacing-3);--accordion-md-header-gap:var(--spacing-12);--accordion-sm-header-padding:var(--spacing-2);--accordion-sm-header-gap:var(--spacing-2);--card-lg-padding:var(--spacing-8);--section-padding:var(--spacing-8);--section-gap:var(--spacing-8);--text-content-gap:var(--spacing-2);--icon-text-gap:var(--spacing-2);--buttons-lg-gap:var(--spacing-1);--model-padding:var(--spacing-6);--buttons-lg-padding:var(--spacing-4);--model-gap:var(--spacing-2);--buttons-md-gap:var(--spacing-1);--buttons-md-padding:var(--spacing-3);--buttons-sm-gap:var(--spacing-1);--buttons-sm-padding:var(--spacing-2);--model-content-bottom-padding:var(--spacing-4);--buttons-group-gap:var(--spacing-2);--button-menu-gap:var(--spacing-2);--button-menu-v-padding:var(--spacing-2);--button-menu-h-padding:var(--spacing-2);--link-md-gap:var(--spacing-2);--link-sm-gap:var(--spacing-1);--link-links-group-gap:var(--spacing-3);--progressindicator-progress-indicator-gap:var(--spacing-2);--progressindicator-progress-text-content-side-padding:var(--spacing-4);--pagination-item-sm-padding:var(--spacing-1);--pagination-item-md-padding:var(--spacing-1-5);--pagination-item-lg-padding:var(--spacing-2);--pagination-items-padding:var(--spacing-2);--spacing-none:var(--spacing-0);--spacing-xxs:var(--spacing-0-5);--spacing-xs:var(--spacing-1);--spacing-sm:var(--spacing-1-5);--spacing-md:var(--spacing-2);--spacing-lg:var(--spacing-3);--spacing-xl:var(--spacing-4);--spacing-2xl:var(--spacing-5);--spacing-3xl:var(--spacing-6);--spacing-4xl:var(--spacing-8);--spacing-5xl:var(--spacing-10);--spacing-6xl:var(--spacing-12);--spacing-7xl:var(--spacing-16);--spacing-8xl:var(--spacing-20);--spacing-9xl:var(--spacing-24);--spacing-10xl:var(--spacing-32);--spacing-11xl:var(--spacing-40);--card-lg-gap:var(--spacing-6);--card-md-padding:var(--spacing-8);--card-md-gap:var(--spacing-6);--card-sm-padding:var(--spacing-8);--card-sm-gap:var(--spacing-6)}}@media only screen and (min-width: 768px){:root{--tooltip-padding:var(--spacing-2);--tooltip-gap:var(--spacing-2);--tab-button-gap:var(--spacing-1);--notification-gap:var(--spacing-4);--notification-padding:var(--spacing-4);--notification-h-padding:var(--spacing-6);--notification-alert-v-padding:var(--spacing-2);--notification-alert-h-padding:var(--spacing-6);--notification-toast-v-padding:var(--spacing-4);--notification-toast-desktop-h-padding:var(--spacing-6);--notification-toast-mobile-h-padding:var(--spacing-4);--tab-horizontal-tab-md-button-v-padding:var(--spacing-3);--tab-horizontal-tab-md-button-h-padding:var(--spacing-4);--tab-horizontal-tab-sm-button-v-padding:var(--spacing-2);--tab-horizontal-tab-sm-button-h-padding:var(--spacing-3);--tab-vertical-tab-md-button-v-padding:var(--spacing-1-5);--tab-vertical-tab-md-button-h-padding:var(--spacing-3);--tab-vertical-tab-sm-button-v-padding:var(--spacing-0-5);--tab-vertical-tab-sm-button-h-padding:var(--spacing-1-5);--table-cell-gap:var(--spacing-2);--table-cell-v-padding:var(--spacing-2);--table-cell-h-padding:var(--spacing-4);--control-vertical-gap:var(--spacing-1);--control-title-error-gap:var(--spacing-3);--control-switch-error-icon-gap:var(--spacing-2);--control-radio-error-icon-gap:var(--spacing-4);--control-switch-description-padding:var(--spacing-16);--control-radio-description-padding:var(--spacing-12);--form-label-gap:var(--spacing-1);--form-field-label-gap:var(--spacing-2);--form-input-padding:var(--spacing-0);--form-input-gap:var(--spacing-0);--form-textarea-padding:var(--spacing-0);--form-textarea-gap:var(--spacing-0);--form-select-padding:var(--spacing-0);--form-select-gap:var(--spacing-0);--accordion-lg-header-padding:var(--spacing-4);--accordion-lg-header-gap:var(--spacing-4);--accordion-md-header-padding:var(--spacing-3);--accordion-md-header-gap:var(--spacing-3);--accordion-sm-header-padding:var(--spacing-2);--accordion-sm-header-gap:var(--spacing-2);--card-lg-padding:var(--spacing-6);--section-padding:var(--spacing-6);--section-gap:var(--spacing-6);--text-content-gap:var(--spacing-2);--icon-text-gap:var(--spacing-2);--buttons-lg-gap:var(--spacing-1);--model-padding:var(--spacing-6);--buttons-lg-padding:var(--spacing-4);--model-gap:var(--spacing-2);--buttons-md-gap:var(--spacing-1);--buttons-md-padding:var(--spacing-3);--buttons-sm-gap:var(--spacing-1);--buttons-sm-padding:var(--spacing-2);--model-content-bottom-padding:var(--spacing-4);--buttons-group-gap:var(--spacing-2);--button-menu-gap:var(--spacing-2);--button-menu-v-padding:var(--spacing-2);--button-menu-h-padding:var(--spacing-2);--link-md-gap:var(--spacing-2);--link-sm-gap:var(--spacing-1);--link-links-group-gap:var(--spacing-3);--progressindicator-progress-indicator-gap:var(--spacing-2);--progressindicator-progress-text-content-side-padding:var(--spacing-4);--pagination-item-sm-padding:var(--spacing-1);--pagination-item-md-padding:var(--spacing-1-5);--pagination-item-lg-padding:var(--spacing-2);--pagination-items-padding:var(--spacing-2);--spacing-none:var(--spacing-0);--spacing-xxs:var(--spacing-0-5);--spacing-xs:var(--spacing-1);--spacing-sm:var(--spacing-1-5);--spacing-md:var(--spacing-2);--spacing-lg:var(--spacing-3);--spacing-xl:var(--spacing-4);--spacing-2xl:var(--spacing-5);--spacing-3xl:var(--spacing-6);--spacing-4xl:var(--spacing-8);--spacing-5xl:var(--spacing-10);--spacing-6xl:var(--spacing-12);--spacing-7xl:var(--spacing-16);--spacing-8xl:var(--spacing-20);--spacing-9xl:var(--spacing-24);--spacing-10xl:var(--spacing-32);--spacing-11xl:var(--spacing-40);--card-lg-gap:var(--spacing-6);--card-md-padding:var(--spacing-6);--card-md-gap:var(--spacing-5);--card-sm-padding:var(--spacing-6);--card-sm-gap:var(--spacing-5)}}@media only screen and (max-width: 767px){:root{--tooltip-padding:var(--spacing-2);--tooltip-gap:var(--spacing-2);--tab-button-gap:var(--spacing-1);--notification-gap:var(--spacing-2);--notification-padding:var(--spacing-3);--notification-h-padding:var(--spacing-4);--notification-alert-v-padding:var(--spacing-2);--notification-alert-h-padding:var(--spacing-4);--notification-toast-v-padding:var(--spacing-3);--notification-toast-desktop-h-padding:var(--spacing-4);--notification-toast-mobile-h-padding:var(--spacing-4);--tab-horizontal-tab-md-button-v-padding:var(--spacing-2);--tab-horizontal-tab-md-button-h-padding:var(--spacing-3);--tab-horizontal-tab-sm-button-v-padding:var(--spacing-1);--tab-horizontal-tab-sm-button-h-padding:var(--spacing-2);--tab-vertical-tab-md-button-v-padding:var(--spacing-1);--tab-vertical-tab-md-button-h-padding:var(--spacing-2);--tab-vertical-tab-sm-button-v-padding:var(--spacing-0-5);--tab-vertical-tab-sm-button-h-padding:var(--spacing-1);--table-cell-gap:var(--spacing-1);--table-cell-v-padding:var(--spacing-1);--table-cell-h-padding:var(--spacing-3);--control-vertical-gap:var(--spacing-1);--control-title-error-gap:var(--spacing-2);--control-switch-error-icon-gap:var(--spacing-1);--control-radio-error-icon-gap:var(--spacing-12);--control-switch-description-padding:var(--spacing-16);--control-radio-description-padding:var(--spacing-12);--form-label-gap:var(--spacing-1);--form-field-label-gap:var(--spacing-2);--form-input-padding:var(--spacing-0);--form-input-gap:var(--spacing-0);--form-textarea-padding:var(--spacing-0);--form-textarea-gap:var(--spacing-0);--form-select-padding:var(--spacing-0);--form-select-gap:var(--spacing-0);--accordion-lg-header-padding:var(--spacing-4);--accordion-lg-header-gap:var(--spacing-4);--accordion-md-header-padding:var(--spacing-3);--accordion-md-header-gap:var(--spacing-3);--accordion-sm-header-padding:var(--spacing-2);--accordion-sm-header-gap:var(--spacing-2);--card-lg-padding:var(--spacing-4);--section-padding:var(--spacing-4);--section-gap:var(--spacing-4);--text-content-gap:var(--spacing-1);--icon-text-gap:var(--spacing-1);--buttons-lg-gap:var(--spacing-1);--model-padding:var(--spacing-4);--buttons-lg-padding:var(--spacing-4);--model-gap:var(--spacing-1);--buttons-md-gap:var(--spacing-1);--buttons-md-padding:var(--spacing-3);--buttons-sm-gap:var(--spacing-1);--buttons-sm-padding:var(--spacing-2);--model-content-bottom-padding:var(--spacing-2);--buttons-group-gap:var(--spacing-1);--button-menu-gap:var(--spacing-2);--button-menu-v-padding:var(--spacing-2);--button-menu-h-padding:var(--spacing-2);--link-md-gap:var(--spacing-1);--link-sm-gap:var(--spacing-1);--link-links-group-gap:var(--spacing-2);--progressindicator-progress-indicator-gap:var(--spacing-4);--progressindicator-progress-text-content-side-padding:var(--spacing-3);--pagination-item-sm-padding:var(--spacing-1);--pagination-item-md-padding:var(--spacing-1-5);--pagination-item-lg-padding:var(--spacing-2);--pagination-items-padding:var(--spacing-1);--spacing-none:var(--spacing-0);--spacing-xxs:var(--spacing-0-5);--spacing-xs:var(--spacing-1);--spacing-sm:var(--spacing-1-5);--spacing-md:var(--spacing-2);--spacing-lg:var(--spacing-3);--spacing-xl:var(--spacing-4);--spacing-2xl:var(--spacing-5);--spacing-3xl:var(--spacing-6);--spacing-4xl:var(--spacing-8);--spacing-5xl:var(--spacing-10);--spacing-6xl:var(--spacing-12);--spacing-7xl:var(--spacing-16);--spacing-8xl:var(--spacing-20);--spacing-9xl:var(--spacing-24);--spacing-10xl:var(--spacing-32);--spacing-11xl:var(--spacing-40);--card-lg-gap:var(--spacing-4);--card-md-padding:var(--spacing-4);--card-md-gap:var(--spacing-3);--card-sm-padding:var(--spacing-4);--card-sm-gap:var(--spacing-3)}}:root{--radius-0:0;--radius-2:2px;--radius-4:4px;--radius-8:8px;--radius-16:16px;--radius-24:24px;--radius-9999:9999px;--components-card-radius:var(--spacing-4);--radius-none:var(--radius-0);--radius-xs:var(--radius-2);--radius-sm:var(--radius-4);--radius-md:var(--radius-8);--radius-lg:var(--radius-16);--radius-xl:var(--radius-24);--radius-full:var(--radius-9999)}:root{--colors-base-white:#ffffff;--colors-base-black:#161616;--colors-primary-sa-flag-25:#f7fdf9;--colors-primary-sa-flag-50:#f3fcf6;--colors-primary-sa-flag-100:#dff6e7;--colors-primary-sa-flag-200:#b8eacb;--colors-primary-sa-flag-300:#88d8ad;--colors-primary-sa-flag-400:#54c08a;--colors-primary-sa-flag-500-alpha-10:#25935f19;--colors-primary-sa-flag-500:#25935f;--colors-primary-sa-flag-600-primary:#1b8354;--colors-primary-sa-flag-700:#166a45;--colors-primary-sa-flag-800:#14573a;--colors-primary-sa-flag-900:#104631;--colors-primary-sa-flag-950:#092a1e;--colors-secondary-gold-25:#fffef7;--colors-secondary-gold-50:#fffef2;--colors-secondary-gold-100:#fffce6;--colors-secondary-gold-200:#fcf3bd;--colors-secondary-gold-300:#fae996;--colors-secondary-gold-400:#f7d54d;--colors-secondary-gold-500:#f5bd02;--colors-secondary-gold-600-primary:#dba102;--colors-secondary-gold-700:#b87b02;--colors-secondary-gold-800:#945c01;--colors-secondary-gold-900:#6e3c00;--colors-secondary-gold-950:#472400;--colors-tertiary-lavendar-25:#fefcff;--colors-tertiary-lavendar-50:#f9f5fa;--colors-tertiary-lavendar-100:#f2e9f5;--colors-tertiary-lavendar-200:#e1cce8;--colors-tertiary-lavendar-300:#ccadd9;--colors-tertiary-lavendar-400:#a57bba;--colors-tertiary-lavendar-500-primary:#80519f;--colors-tertiary-lavendar-600:#6d428f;--colors-tertiary-lavendar-700:#532d75;--colors-tertiary-lavendar-800:#3d1d5e;--colors-tertiary-lavendar-900:#281047;--colors-tertiary-lavendar-950:#16072e;--colors-neutral-25:#fcfcfd;--colors-neutral-50:#f9fafb;--colors-neutral-100:#f3f4f6;--colors-neutral-200:#e5e7eb;--colors-neutral-300:#d2d6db;--colors-neutral-400:#9da4ae;--colors-neutral-500:#6c727e;--colors-neutral-600:#4d5761;--colors-neutral-700:#384250;--colors-neutral-800:#1f2a37;--colors-neutral-900:#111927;--colors-neutral-950:#0c111b;--colors-blue-25:#f5faff;--colors-blue-50:#eff8ff;--colors-blue-100:#d1e9ff;--colors-blue-200:#b2ddff;--colors-blue-300:#84caff;--colors-blue-400:#53b0fd;--colors-blue-500:#2e90fa;--colors-blue-600:#156fee;--colors-blue-700:#175cd3;--colors-blue-800:#1849a9;--colors-blue-900:#194084;--colors-blue-950:#102a56;--colors-green-25:#f6fef9;--colors-green-50:#ecfdf3;--colors-green-100:#dcfae6;--colors-green-200:#abefc6;--colors-green-300:#75dfa6;--colors-green-400:#47cd89;--colors-green-500:#17b169;--colors-green-600:#069454;--colors-green-700:#067647;--colors-green-800:#085d3a;--colors-green-900:#074c30;--colors-green-950:#053321;--colors-yellow-25:#fffcf5;--colors-yellow-50:#fffaeb;--colors-yellow-100:#fef0c7;--colors-yellow-200:#fedf89;--colors-yellow-300:#fec84b;--colors-yellow-400:#fdb022;--colors-yellow-500:#f79009;--colors-yellow-600:#dc6803;--colors-yellow-700:#b54707;--colors-yellow-800:#93370c;--colors-yellow-900:#7a2e0e;--colors-yellow-950:#4e1d09;--colors-red-25:#fffbfa;--colors-red-50:#fef3f2;--colors-red-100:#fee4e2;--colors-red-200:#fecdca;--colors-red-300:#fca19b;--colors-red-400:#f97066;--colors-red-500:#f04437;--colors-red-600:#d92c20;--colors-red-700:#b42318;--colors-red-800:#912018;--colors-red-900:#7a2619;--colors-red-950:#54150c;--colors-alpha-alpha-white-0:#ffffff00;--colors-alpha-alpha-white-10:#ffffff19;--colors-alpha-alpha-white-20:#ffffff33;--colors-alpha-alpha-white-30:#ffffff4c;--colors-alpha-alpha-white-40:#ffffff66;--colors-alpha-alpha-white-50:#ffffff7f;--colors-alpha-alpha-white-60:#ffffff99;--colors-alpha-alpha-white-70:#ffffffb2;--colors-alpha-alpha-white-80:#ffffffcc;--colors-alpha-alpha-white-90:#ffffffe5;--colors-alpha-alpha-white-100:#ffffff;--colors-alpha-alpha-black-0:#16161600;--colors-alpha-alpha-black-10:#16161619;--colors-alpha-alpha-black-20:#16161633;--colors-alpha-alpha-black-30:#1616164c;--colors-alpha-alpha-black-40:#16161666;--colors-alpha-alpha-black-50:#1616167f;--colors-alpha-alpha-black-60:#16161699;--colors-alpha-alpha-black-70:#161616b2;--colors-alpha-alpha-black-80:#161616cc;--colors-alpha-alpha-black-90:#161616e5;--colors-alpha-alpha-black-100:#161616;--colors-alpha-alpha-green-10:#1b835419;--colors-alpha-alpha-green-20:#1b835433;--colors-alpha-alpha-green-30:#1b83544c;--colors-alpha-alpha-green-40:#1b835466;--colors-alpha-alpha-green-50:#1b83547f;--colors-alpha-alpha-green-60:#1b835499;--colors-alpha-alpha-green-70:#1b8354b2;--colors-alpha-alpha-green-80:#1b8354cc;--colors-alpha-alpha-green-90:#1b8354e5;--colors-alpha-alpha-green-100:var(--colors-primary-sa-flag-600-primary)}:root{--shadow-xs:0px 1px 2px 0px rgba(16, 24, 40, 0.05);--shadow-sm:0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10);--shadow-md:0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.10);--shadow-lg:0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);--shadow-xl:0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08);--shadow-2xl:0px 24px 48px -12px rgba(16, 24, 40, 0.18);--shadow-3xl:0px 32px 64px -12px rgba(16, 24, 40, 0.14)}.shadows-container{display:flex;width:2240px;padding:var(--spacing-none);align-items:flex-start;gap:var(--spacing-7xl)}.shadows-box{display:flex;height:240px;max-width:256px;padding:var(--spacing-3xl);align-items:flex-start;gap:var(--spacing-none);flex:1 0 0;border-radius:var(--radius-xl);border:1px solid var(--colors-border-primary);background:var(--colors-bg-primary)}:root{--background-white:var(--colors-base-white);--background-body:var(--colors-neutral-50);--background-menu:var(--colors-base-white);--background-card:var(--colors-base-white);--background-surface-oncolor:var(--colors-base-white);--background-black:var(--colors-base-black);--background-brand-light:var(--colors-primary-sa-flag-50);--background-neutral-800:var(--colors-neutral-800);--background-neutral-400:var(--colors-neutral-400);--background-neutral-300:var(--colors-neutral-300);--background-neutral-200:var(--colors-neutral-200);--background-neutral-100:var(--colors-neutral-100);--background-neutral-50:var(--colors-neutral-50);--background-neutral-25:var(--colors-neutral-25);--background-primary:var(--colors-primary-sa-flag-600-primary);--background-primary-400:var(--colors-primary-sa-flag-400);--background-primary-200:var(--colors-primary-sa-flag-200);--background-primary-50:var(--colors-primary-sa-flag-50);--background-primary-25:var(--colors-primary-sa-flag-25);--background-secondary:var(--colors-secondary-gold-600-primary);--background-secondary-50:var(--colors-secondary-gold-50);--background-secondary-25:var(--colors-secondary-gold-25);--background-tertiary:var(--colors-tertiary-lavendar-600);--background-tertiary-50:var(--colors-tertiary-lavendar-50);--background-tertiary-25:var(--colors-tertiary-lavendar-25);--background-success:var(--colors-green-600);--background-success-light:var(--colors-green-50);--background-success-50:var(--colors-green-50);--background-success-25:var(--colors-green-25);--background-info:var(--colors-blue-600);--background-info-light:var(--colors-blue-50);--background-info-50:var(--colors-blue-50);--background-info-25:var(--colors-blue-25);--background-warning:var(--colors-yellow-600);--background-warning-light:var(--colors-yellow-50);--background-warning-50:var(--colors-yellow-50);--background-warning-25:var(--colors-yellow-25);--background-error:var(--colors-red-600);--background-error-light:var(--colors-red-50);--background-error-50:var(--colors-red-50);--background-error-25:var(--colors-red-25);--background-sa-flag:var(--colors-green-900);--background-sa-flag-50:var(--colors-green-50);--background-sa-flag-25:var(--colors-green-25);--background-notification-white:var(--colors-base-white);--text-default:var(--colors-base-black);--text-primary:var(--colors-primary-sa-flag-600-primary);--text-secondary:var(--colors-secondary-gold-600-primary);--text-tertiary:var(--colors-tertiary-lavendar-500-primary);--text-primary-sa-flag:var(--colors-primary-sa-flag-800);--text-display:var(--colors-neutral-800);--text-primary-paragraph:var(--colors-neutral-700);--text-secondary-paragraph:var(--colors-neutral-500);--text-oncolor-primary:var(--colors-base-white);--text-oncolor-secondary:var(--alpha-white-80);--text-oncolor-tertiary:var(--alpha-white-70);--text-success:var(--colors-green-700);--text-info:var(--colors-blue-700);--text-warning:var(--colors-yellow-700);--text-error:var(--colors-red-700);--text-primary-light:var(--colors-primary-sa-flag-300);--text-secondary-light:var(--colors-secondary-gold-300);--text-tertiary-light:var(--colors-tertiary-lavendar-300);--text-default-disabled:var(--colors-neutral-400);--text-default-oncolor-disabled:var(--alpha-white-40);--border-white:var(--colors-base-white);--border-white-40:var(--alpha-white-40);--button-background-black-default:var(--colors-neutral-950);--button-background-black-hovered:var(--colors-neutral-800);--button-background-black-pressed:var(--colors-neutral-600);--button-background-black-selected:var(--colors-neutral-700);--button-background-black-focused:var(--colors-neutral-950);--button-background-primary-default:var(--colors-primary-sa-flag-600-primary);--button-background-primary-hovered:var(--colors-primary-sa-flag-700);--button-background-primary-pressed:var(--colors-primary-sa-flag-900);--button-background-primary-selected:var(--colors-primary-sa-flag-800);--button-background-primary-focused:var(--colors-primary-sa-flag-600-primary);--button-background-neutral-default:var(--colors-neutral-100);--button-background-neutral-hovered:var(--colors-neutral-100);--button-background-neutral-pressed:var(--colors-neutral-200);--button-background-neutral-selected:var(--colors-neutral-200);--button-background-neutral-focused:var(--colors-neutral-100);--button-background-danger-primary-default:var(--colors-red-600);--button-background-danger-primary-hovered:var(--colors-red-700);--button-background-danger-primary-pressed:var(--colors-red-900);--button-background-danger-primary-selected:var(--colors-red-800);--button-background-danger-primary-focused:var(--colors-red-600);--button-label-danger-primary-default-oncolor:var(--colors-red-200);--button-label-danger-primary-hovered-oncolor:var(--colors-red-300);--button-label-danger-primary-pressed-oncolor:var(--colors-red-400);--button-background-danger-secondary-default:var(--colors-red-50);--button-background-danger-secondary-hovered:var(--colors-red-100);--button-background-danger-secondary-pressed:var(--colors-red-200);--button-background-danger-secondary-selected:var(--colors-red-50);--button-background-danger-secondary-focused:var(--colors-red-50);--button-background-oncolor-default:var(--colors-base-white);--button-background-oncolor-hovered:var(--alpha-white-80);--button-background-oncolor-pressed:var(--alpha-white-60);--button-background-oncolor-selected:var(--alpha-white-70);--button-background-oncolor-focused:var(--alpha-white-100);--button-background-transparent-default:var(--alpha-white-0);--button-background-transparent-hovered:var(--alpha-white-20);--button-background-transparent-pressed:var(--alpha-white-40);--button-background-transparent-selected:var(--alpha-white-30);--button-background-transparent-focused:var(--alpha-white-0);--button-background-disabled-on-color:var(--alpha-white-20);--button-label-transparent-hovered-on-color:var(--colors-primary-sa-flag-400);--border-black:var(--colors-base-black);--border-primary:var(--colors-primary-sa-flag-600-primary);--border-primary-light:var(--colors-primary-sa-flag-200);--border-secondary:var(--colors-secondary-gold-600-primary);--border-secondary-light:var(--colors-secondary-gold-200);--border-tertiary:var(--colors-tertiary-lavendar-500-primary);--border-tertiary-light:var(--colors-tertiary-lavendar-200);--border-neutral-primary:var(--colors-neutral-300);--border-neutral-secondary:var(--colors-neutral-200);--border-neutral-tertiary:var(--colors-neutral-100);--border-background-white:var(--colors-neutral-100);--border-background-neutral:var(--colors-neutral-300);--border-transparent-10:var(--alpha-white-10);--border-oncolor-transparent-30:var(--colors-alpha-alpha-white-30);--border-success:var(--colors-green-700);--button-label-transparent-pressed-on-color:var(--colors-primary-sa-flag-300);--border-success-light:var(--colors-green-200);--border-info:var(--colors-blue-700);--button-label-transparent-selected-on-color:var(--colors-primary-sa-flag-400);--border-info-light:var(--colors-blue-200);--button-icon-transparent-hovered-on-color:var(--background-primary-400);--border-warning:var(--colors-yellow-700);--border-warning-light:var(--colors-yellow-200);--border-error:var(--colors-red-700);--button-icon-transparent-pressed-on-color:var(--colors-primary-sa-flag-300);--border-error-light:var(--colors-red-200);--button-icon-transparent-selected-on-color:var(--colors-primary-sa-flag-400);--border-disabled:var(--colors-neutral-400);--link-primary:var(--colors-primary-sa-flag-600-primary);--link-primary-hovered:var(--colors-primary-sa-flag-400);--link-primary-pressed:var(--colors-primary-sa-flag-300);--link-primary-focused:var(--colors-primary-sa-flag-600-primary);--link-primary-visited:var(--colors-primary-sa-flag-800);--link-icon-primary-hovered:var(--colors-primary-sa-flag-400);--link-icon-primary-pressed:var(--colors-primary-sa-flag-300);--link-icon-primary-focused:var(--colors-primary-sa-flag-600-primary);--link-icon-primary-visited:var(--colors-primary-sa-flag-800);--link-secondary:var(--colors-secondary-gold-600-primary);--link-secondary-hovered:var(--colors-secondary-gold-400);--link-secondary-pressed:var(--colors-secondary-gold-300);--link-secondary-focused:var(--colors-secondary-gold-600-primary);--link-secondary-visited:var(--colors-secondary-gold-900);--link-tertiary:var(--colors-tertiary-lavendar-500-primary);--link-tertiary-hovered:var(--colors-tertiary-lavendar-400);--link-tertiary-pressed:var(--colors-tertiary-lavendar-300);--link-tertiary-focused:var(--colors-tertiary-lavendar-500-primary);--link-tertiary-visited:var(--colors-tertiary-lavendar-800);--link-neutral:var(--colors-neutral-700);--link-neutral-hovered:var(--colors-neutral-500);--link-icon-neutral-hovered:var(--colors-neutral-500);--link-neutral-pressed:var(--colors-neutral-400);--link-icon-neutral-pressed:var(--colors-neutral-400);--link-neutral-focused:var(--colors-neutral-700);--link-icon-neutral-focused:var(--colors-neutral-700);--link-neutral-visited:var(--colors-neutral-600);--link-icon-neutral-visited:var(--colors-neutral-600);--link-danger:var(--colors-red-600);--link-danger-hovered:var(--colors-red-700);--link-icon-danger-hovered:var(--colors-red-700);--link-danger-pressed:var(--colors-red-900);--link-icon-danger-pressed:var(--colors-red-900);--link-danger-focused:var(--colors-red-600);--link-icon-danger-focused:var(--colors-red-600);--link-danger-visited:var(--colors-red-800);--link-icon-danger-visited:var(--colors-red-800);--link-oncolor:var(--colors-base-white);--link-oncolor-hovered:var(--colors-alpha-alpha-white-80);--link-icon-oncolor-hovered:var(--alpha-white-80);--link-oncolor-pressed:var(--colors-alpha-alpha-white-60);--link-icon-oncolor-pressed:var(--alpha-white-60);--link-oncolor-focused:var(--colors-base-white);--link-link-oncolor-focused:var(--colors-base-white);--link-oncolor-visited:var(--colors-alpha-alpha-white-90);--link-icon-oncolor-visited:var(--alpha-white-90);--link-oncolor-disabled:var(--colors-alpha-alpha-white-30);--link-icon-oncolor-disabled:var(--alpha-white-30);--icon-oncolor:var(--colors-base-white);--tag-background-neutral:var(--colors-neutral-600);--tag-background-neutral-light:var(--colors-neutral-50);--tag-background-on-color:var(--colors-alpha-alpha-white-20);--tag-text-neutral:var(--colors-neutral-800);--tag-text-success:var(--colors-green-800);--tag-text-info:var(--colors-blue-800);--tag-text-warning:var(--colors-yellow-800);--tag-text-error:var(--colors-red-800);--tag-icon-neutral:var(--colors-neutral-800);--tag-icon-success:var(--colors-green-800);--tag-icon-info:var(--colors-blue-800);--tag-icon-warning:var(--colors-yellow-800);--tag-icon-error:var(--colors-red-800);--tag-background-success:var(--colors-green-700);--tag-background-success-light:var(--colors-green-50);--tag-background-info:var(--colors-blue-600);--tag-background-info-light:var(--colors-blue-50);--tag-background-warning:var(--colors-yellow-700);--tag-background-warning-light:var(--colors-yellow-50);--tag-background-error:var(--colors-red-600);--tag-background-error-light:var(--colors-red-50);--tag-border-neutral:var(--colors-neutral-600);--tag-border-neutral-light:var(--colors-neutral-50);--tag-border-on-color:var(--colors-alpha-alpha-white-60);--tag-border-success:var(--colors-green-700);--tag-border-success-light:var(--colors-green-200);--tag-border-info:var(--colors-blue-700);--tag-border-info-light:var(--colors-blue-200);--tag-border-warning:var(--colors-yellow-700);--tag-border-warning-light:var(--colors-yellow-200);--tag-border-error:var(--colors-red-700);--tag-border-error-light:var(--colors-red-200);--tag-dot:var(--colors-alpha-alpha-white-60);--form-text-form-title:var(--text-default);--controls-control-primary:var(--alpha-white-0);--table-cell-border:var(--colors-neutral-300);--table-cell-border-inverse:var(--border-black);--table-text-head:var(--colors-neutral-700);--table-text-body:var(--text-default);--table-background-disabled:var(--background-disabled);--table-background-hover-selected:var(--colors-neutral-50);--table-background-header:var(--colors-neutral-100);--table-background-row:var(--colors-neutral-50);--controls-control-primary-checked:var(--colors-primary-sa-flag-600-primary);--controls-control-primary-hovered:var(--colors-primary-sa-flag-800);--controls-control-primary-pressed:var(--colors-primary-sa-flag-800);--controls-control-primary-focused:var(--colors-primary-sa-flag-600-primary);--controls-control-neutral-checked:var(--colors-neutral-950);--controls-control-neutral-hovered:var(--colors-neutral-600);--controls-control-neutral-pressed:var(--colors-neutral-600);--controls-control-neutral-focused:var(--colors-neutral-950);--controls-control-primary--readonly:var(--alpha-white-0);--controls-control-pressed:var(--colors-neutral-300);--controls-control-ripple-effect:var(--colors-neutral-200);--controls-control-border:var(--colors-neutral-500);--form-text-form-paragraph:var(--text-secondary-paragraph);--form-field-text-label:var(--text-default);--form-field-text-placeholder:var(--text-secondary-paragraph);--form-field-text-hovered:var(--text-default);--stepper-button-completed:var(--colors-primary-sa-flag-600-primary);--tooltip-background-light:var(--colors-base-white);--tooltip-text-heading-light:var(--text-display);--tooltip-text-paragraph-light:var(--text-primary-paragraph);--tooltip-background-dark:var(--colors-neutral-800);--tooltip-text-heading-dark:var(--colors-neutral-50);--tooltip-text-paragraph-dark:var(--colors-neutral-100);--alpha-white-0:var(--colors-alpha-alpha-white-0);--alpha-white-10:var(--colors-alpha-alpha-white-10);--alpha-white-20:var(--colors-alpha-alpha-white-20);--alpha-white-30:var(--colors-alpha-alpha-white-30);--alpha-white-40:var(--colors-alpha-alpha-white-40);--alpha-white-50:var(--colors-alpha-alpha-white-50);--alpha-white-60:var(--colors-alpha-alpha-white-60);--alpha-white-70:var(--colors-alpha-alpha-white-70);--alpha-white-80:var(--colors-alpha-alpha-white-80);--alpha-white-90:var(--colors-alpha-alpha-white-90);--alpha-white-100:var(--colors-alpha-alpha-white-100);--alpha-black-0:var(--colors-alpha-alpha-black-0);--alpha-black-10:var(--colors-alpha-alpha-black-10);--alpha-black-20:var(--colors-alpha-alpha-black-20);--alpha-black-30:var(--colors-alpha-alpha-black-30);--alpha-black-40:var(--colors-alpha-alpha-black-40);--alpha-black-50:var(--colors-alpha-alpha-black-50);--alpha-black-60:var(--colors-alpha-alpha-black-60);--alpha-black-70:var(--colors-alpha-alpha-black-70);--alpha-black-80:var(--colors-alpha-alpha-black-80);--alpha-black-90:var(--colors-alpha-alpha-black-90);--alpha-black-100:var(--colors-alpha-alpha-black-100);--background-disabled:var(--colors-neutral-200);--background-disabled-primary:var(--colors-primary-sa-flag-200);--background-inverse-disabled:var(--colors-neutral-100);--stepper-button-completed-hovered:var(--colors-primary-sa-flag-700);--stepper-button-current:var(--colors-primary-sa-flag-600-primary);--stepper-button-current-hovered:var(--colors-primary-sa-flag-700);--stepper-button-upcomming:var(--colors-neutral-300);--stepper-button-upcomming-hovered:var(--colors-neutral-400);--stepper-button-background:var(--colors-base-white);--stepper-text-primary:var(--text-display);--stepper-text-secondary:var(--text-primary-paragraph);--stepper-text-tertiary:var(--text-secondary-paragraph);--stepper-line-completed:var(--colors-primary-sa-flag-600-primary);--stepper-line-completed-hovered:var(--colors-primary-sa-flag-700);--stepper-line-current:var(--colors-neutral-300);--stepper-line-upcomming:var(--colors-neutral-300);--stepper-line-upcomming-hovered:var(--colors-neutral-400);--form-field-text-focused:var(--text-primary-paragraph);--form-field-text-pressed:var(--text-primary-paragraph);--form-field-text-filled:var(--text-default);--form-field-text-readonly:var(--text-default);--form-field-text-helper:var(--text-secondary-paragraph);--form-field-background-default:var(--background-card);--form-field-background-lighter:var(--colors-neutral-25);--form-field-background-darker:var(--colors-neutral-100);--form-field-background-pressed:var(--colors-neutral-100);--form-field-border-default:var(--colors-neutral-400);--form-field-border-hovered:var(--colors-neutral-700);--form-field-border-pressed:var(--colors-neutral-950);--form-field-border-error:var(--border-error);--form-option-background-hover:var(--colors-neutral-100);--form-option-background-pressed:var(--colors-neutral-200);--form-datecell-background-default:var(--colors-primary-sa-flag-600-primary);--form-datecell-background-hovered:var(--colors-primary-sa-flag-700);--icon-default:var(--colors-base-black);--form-datecell-background-pressed:var(--colors-primary-sa-flag-900);--form-datecell-background-focused:var(--colors-primary-sa-flag-600-primary);--form-datecell-today-background-default:var(--alpha-white-0);--form-datecell-today-background-hovered:var(--colors-neutral-200);--form-datecell-today-background-pressed:var(--colors-neutral-300);--icon-default-500:var(--colors-neutral-500);--form-datecell-today-background-focused:var(--alpha-white-0);--form-datecell-background-disabled:#ffffff;--form-datecell-background-600:var(--colors-primary-sa-flag-600-primary);--form-datecell-background-300:var(--colors-primary-sa-flag-300);--form-datecell-background-200:var(--colors-primary-sa-flag-200);--form-datecell-background-100:var(--colors-primary-sa-flag-100);--controls-control-icon-hovered:var(--icon-oncolor);--alpha-primary-10:#1b835419;--icon-default-400:var(--colors-neutral-400);--icon-primary:var(--colors-primary-sa-flag-600-primary);--alpha-primary-20:#1b835433;--icon-primary-light:var(--colors-primary-sa-flag-50);--alpha-warning-10:#dc680319;--icon-primary-400:var(--colors-primary-sa-flag-400);--alpha-warning-20:#dc680333;--alpha-error-10:#d92c2019;--alpha-error-20:#d92c2033;--alpha-info-10:#156fee19;--alpha-info-20:#156fee33;--alpha-success-10:#06945419;--alpha-success-20:#06945433;--icon-neutral:var(--colors-neutral-700);--icon-neutral-light:var(--colors-neutral-50);--icon-secondary:var(--colors-secondary-gold-600-primary);--icon-secondary-light:var(--colors-secondary-gold-50);--icon-tertiary:var(--colors-tertiary-lavendar-500-primary);--icon-tertiary-light:var(--colors-tertiary-lavendar-50);--icon-success:var(--colors-green-700);--icon-success-light:var(--colors-green-50);--icon-info:var(--colors-blue-700);--icon-info-light:var(--colors-blue-50);--icon-warning:var(--colors-yellow-700);--icon-warning-light:var(--colors-yellow-50);--icon-error:var(--colors-red-700);--icon-error-light:var(--colors-red-50);--icon-default-disabled:var(--colors-neutral-400);--icon-default-oncolor-disabled:var(--colors-alpha-alpha-white-40);--control-disabled:var(--colors-neutral-400);--featuredicons-icon-oncolor:var(--colors-base-white);--featuredicons-icon-success:var(--colors-green-700);--featuredicons-icon-default:var(--colors-base-black);--featuredicons-icon-error:var(--colors-red-700);--featuredicons-icon-secondary:var(--colors-secondary-gold-600-primary);--featuredicons-icon-default-500:var(--colors-neutral-500);--featuredicons-background-error-light:var(--colors-red-50);--featuredicons-background-info-light:var(--colors-blue-50);--featuredicons-background-warning-light:var(--colors-yellow-50);--featuredicons-background-success-light:var(--colors-green-50);--featuredicons-background-brand-light:var(--colors-primary-sa-flag-50);--featuredicons-background-default-light:var(--colors-neutral-50);--featuredicons-icon-default-400:var(--colors-neutral-400);--featuredicons-icon-primary:var(--colors-primary-sa-flag-600-primary);--featuredicons-icon-primary-light:var(--colors-primary-sa-flag-50);--featuredicons-icon-primary-400:var(--colors-primary-sa-flag-400);--featuredicons-icon-neutral:var(--colors-neutral-700);--featuredicons-icon-neutral-light:var(--colors-neutral-50);--featuredicons-icon-secondary-light:var(--colors-secondary-gold-50);--featuredicons-icon-tertiary:var(--colors-tertiary-lavendar-500-primary);--featuredicons-icon-tertiary-light:var(--colors-tertiary-lavendar-50);--featuredicons-icon-success-light:var(--colors-green-50);--featuredicons-icon-info:var(--colors-blue-700);--featuredicons-icon-info-light:var(--colors-blue-50);--featuredicons-icon-warning:var(--colors-yellow-700);--featuredicons-bg-icon-warning-light:var(--background-warning-50);--featuredicons-bg-icon-error-light:var(--background-error-50);--featuredicons-bg-icon-brand-light:var(--colors-primary-sa-flag-50);--featuredicons-bg-icon-info-light:var(--background-info-50);--featuredicons-bg-icon-success-light:var(--background-success-50);--controls-control-icon-pressed:var(--icon-oncolor);--controls-control-icon-disabled:var(--colors-base-white);--notification-background-error-light:var(--colors-red-50);--notification-background-info-light:var(--colors-blue-50);--notification-background-warning-light:var(--colors-yellow-50);--notification-background-success-light:var(--colors-green-50);--notification-background-brand-light:var(--colors-primary-sa-flag-50);--notification-background-default-light:var(--colors-neutral-50);--notification-background-default-50:var(--background-neutral-50);--notification-background-success-50:var(--background-success-50);--notification-background-warning-50:var(--background-warning-50);--notification-background-error-50:var(--background-error-50);--notification-background-brand-50:var(--colors-primary-sa-flag-50);--notification-background-info-50:var(--background-info-50);--notification-background-default-25:var(--background-neutral-25);--notification-background-success-25:var(--background-success-25);--notification-background-warning-25:var(--background-warning-25);--notification-background-error-25:var(--background-error-25);--notification-background-brand-25:var(--background-primary-25);--notification-background-info-25:var(--background-info-25);--notification-text-success:var(--text-success);--notification-text-error:var(--text-error);--notification-text-info:var(--text-info);--notification-text-warning:var(--text-warning);--notification-text-brand:var(--text-primary);--controls-control-text-error:var(--text-error)}[data-theme=dark]{--background-white:var(--colors-neutral-950);--background-body:var(--colors-neutral-900);--background-menu:var(--colors-neutral-800);--background-card:var(--colors-neutral-800);--background-surface-oncolor:var(--colors-base-white);--background-black:var(--colors-base-white);--background-neutral-800:var(--colors-neutral-600);--background-neutral-400:var(--colors-neutral-400);--background-neutral-300:var(--colors-neutral-500);--background-neutral-200:var(--colors-neutral-600);--background-neutral-100:var(--colors-neutral-800);--background-neutral-50:var(--colors-neutral-900);--background-neutral-25:var(--colors-neutral-950);--background-primary:var(--colors-primary-sa-flag-600-primary);--background-primary-400:var(--colors-primary-sa-flag-400);--background-primary-200:var(--colors-neutral-700);--background-primary-50:var(--colors-alpha-alpha-green-10);--background-primary-25:var(--colors-primary-sa-flag-950);--background-secondary:var(--colors-secondary-gold-600-primary);--background-secondary-50:var(--colors-neutral-800);--background-secondary-25:var(--colors-neutral-900);--background-tertiary:var(--colors-tertiary-lavendar-600);--background-tertiary-50:var(--colors-neutral-800);--background-tertiary-25:var(--colors-neutral-900);--background-success:var(--colors-green-600);--background-success-50:var(--colors-neutral-800);--background-success-25:var(--colors-neutral-900);--background-info:var(--colors-blue-600);--background-info-50:var(--colors-neutral-800);--background-info-25:var(--colors-neutral-900);--background-warning:var(--colors-yellow-600);--background-warning-50:var(--colors-neutral-800);--background-warning-25:var(--colors-neutral-900);--background-error:var(--colors-red-600);--background-error-50:var(--colors-neutral-800);--background-error-25:var(--colors-neutral-900);--background-sa-flag:var(--colors-primary-sa-flag-600-primary);--background-sa-flag-50:var(--colors-neutral-800);--background-sa-flag-25:var(--colors-neutral-900);--background-notification-white:var(--colors-neutral-900);--text-default:var(--colors-base-white);--text-primary:var(--colors-primary-sa-flag-600-primary);--text-secondary:var(--colors-secondary-gold-600-primary);--text-tertiary:var(--colors-tertiary-lavendar-500-primary);--text-primary-sa-flag:var(--colors-primary-sa-flag-100);--text-display:var(--colors-neutral-50);--text-primary-paragraph:var(--colors-neutral-100);--text-secondary-paragraph:var(--colors-neutral-200);--text-oncolor-primary:var(--colors-base-white);--text-oncolor-secondary:var(--alpha-white-80);--text-oncolor-tertiary:var(--alpha-white-70);--text-success:var(--colors-green-600);--text-info:var(--colors-blue-600);--text-warning:var(--colors-yellow-600);--text-error:var(--colors-red-700);--text-primary-light:var(--colors-primary-sa-flag-300);--text-secondary-light:var(--colors-secondary-gold-300);--text-tertiary-light:var(--colors-tertiary-lavendar-300);--text-default-disabled:var(--colors-neutral-400);--text-default-oncolor-disabled:var(--alpha-black-40);--border-white:var(--colors-base-black);--border-white-40:var(--alpha-white-40);--button-background-black-default:var(--colors-neutral-950);--button-background-black-hovered:var(--colors-neutral-800);--button-background-black-pressed:var(--colors-neutral-600);--button-background-black-selected:var(--colors-neutral-700);--button-background-black-focused:var(--colors-neutral-950);--button-background-primary-default:var(\n    --colors-primary-sa-flag-600-primary\n  );--button-background-primary-hovered:var(--colors-primary-sa-flag-700);--button-background-primary-pressed:var(--colors-primary-sa-flag-900);--button-background-primary-selected:var(--colors-primary-sa-flag-800);--button-background-primary-focused:var(\n    --colors-primary-sa-flag-600-primary\n  );--button-background-neutral-default:var(--colors-neutral-800);--button-background-neutral-hovered:var(--colors-neutral-700);--button-background-neutral-pressed:var(--colors-neutral-600);--button-background-neutral-selected:var(--colors-neutral-700);--button-background-neutral-focused:var(--colors-neutral-800);--button-background-danger-primary-default:var(--colors-red-600);--button-background-danger-primary-hovered:var(--colors-red-700);--button-background-danger-primary-pressed:var(--colors-red-900);--button-background-danger-primary-selected:var(--colors-red-800);--button-background-danger-primary-focused:var(--colors-red-600);--button-label-danger-primary-default-oncolor:var(--colors-red-200);--button-label-danger-primary-hovered-oncolor:var(--colors-red-300);--button-label-danger-primary-pressed-oncolor:var(--colors-red-400);--button-background-danger-secondary-default:var(--colors-red-50);--button-background-danger-secondary-hovered:var(--colors-red-100);--button-background-danger-secondary-pressed:var(--colors-red-200);--button-background-danger-secondary-selected:var(--colors-red-50);--button-background-danger-secondary-focused:var(--colors-red-50);--button-background-oncolor-default:var(--colors-base-black);--button-background-oncolor-hovered:var(--alpha-white-80);--button-background-oncolor-pressed:var(--alpha-white-60);--button-background-oncolor-selected:var(--alpha-white-70);--button-background-oncolor-focused:var(--alpha-white-100);--button-background-transparent-default:var(--alpha-white-0);--button-background-transparent-hovered:var(--alpha-white-20);--button-background-transparent-pressed:var(--alpha-white-40);--button-background-transparent-selected:var(--alpha-white-30);--button-background-transparent-focused:var(--alpha-white-0);--button-background-disabled-on-color:var(--alpha-white-20);--button-label-transparent-hovered-on-color:var(\n    --colors-primary-sa-flag-400\n  );--border-black:var(--colors-base-white);--border-primary:var(--colors-primary-sa-flag-600-primary);--border-primary-light:var(--colors-green-200);--border-secondary:var(--colors-secondary-gold-600-primary);--border-secondary-light:var(--colors-secondary-gold-200);--border-tertiary:var(--colors-tertiary-lavendar-500-primary);--border-tertiary-light:var(--colors-tertiary-lavendar-200);--border-neutral-primary:var(--colors-neutral-500);--border-neutral-secondary:var(--colors-neutral-700);--border-neutral-tertiary:var(--colors-neutral-800);--border-background-white:var(--colors-neutral-600);--border-background-neutral:var(--colors-neutral-600);--border-transparent-10:var(--alpha-white-10);--border-oncolor-transparent-30:var(--colors-alpha-alpha-white-30);--border-success:var(--colors-green-500);--button-label-transparent-pressed-on-color:var(\n    --colors-primary-sa-flag-300\n  );--border-success-light:var(--colors-green-200);--border-info:var(--colors-blue-700);--button-label-transparent-selected-on-color:var(\n    --colors-primary-sa-flag-400\n  );--border-info-light:var(--colors-blue-200);--button-icon-transparent-hovered-on-color:var(--colors-primary-sa-flag-400);--border-warning:var(--colors-yellow-700);--border-warning-light:var(--colors-yellow-200);--border-error:var(--colors-red-700);--button-icon-transparent-pressed-on-color:var(--colors-primary-sa-flag-300);--border-error-light:var(--colors-red-200);--button-icon-transparent-selected-on-color:var(\n    --colors-primary-sa-flag-400\n  );--border-disabled:var(--colors-neutral-400);--link-primary:var(--colors-primary-sa-flag-600-primary);--link-primary-hovered:var(--colors-primary-sa-flag-400);--link-primary-pressed:var(--colors-primary-sa-flag-300);--link-primary-focused:var(--colors-primary-sa-flag-600-primary);--link-primary-visited:var(--colors-primary-sa-flag-800);--link-icon-primary-hovered:var(--colors-primary-sa-flag-400);--link-icon-primary-pressed:var(--colors-primary-sa-flag-300);--link-icon-primary-focused:var(--colors-primary-sa-flag-600-primary);--link-icon-primary-visited:var(--colors-primary-sa-flag-800);--link-secondary:var(--colors-secondary-gold-600-primary);--link-secondary-hovered:var(--colors-secondary-gold-400);--link-secondary-pressed:var(--colors-secondary-gold-300);--link-secondary-focused:var(--colors-secondary-gold-600-primary);--link-secondary-visited:var(--colors-secondary-gold-900);--link-tertiary:var(--colors-tertiary-lavendar-500-primary);--link-tertiary-hovered:var(--colors-tertiary-lavendar-400);--link-tertiary-pressed:var(--colors-tertiary-lavendar-300);--link-tertiary-focused:var(--colors-tertiary-lavendar-500-primary);--link-tertiary-visited:var(--colors-tertiary-lavendar-800);--link-neutral:var(--colors-neutral-200);--link-neutral-hovered:var(--colors-neutral-400);--link-icon-neutral-hovered:var(--colors-neutral-400);--link-neutral-pressed:var(--colors-neutral-500);--link-icon-neutral-pressed:var(--colors-neutral-500);--link-neutral-focused:var(--colors-neutral-200);--link-icon-neutral-focused:var(--colors-neutral-200);--link-neutral-visited:var(--colors-neutral-300);--link-icon-neutral-visited:var(--colors-neutral-300);--link-danger:var(--colors-red-600);--link-danger-hovered:var(--colors-red-700);--link-icon-danger-hovered:var(--colors-red-700);--link-danger-pressed:var(--colors-red-900);--link-icon-danger-pressed:var(--colors-red-900);--link-danger-focused:var(--colors-red-600);--link-icon-danger-focused:var(--colors-red-600);--link-danger-visited:var(--colors-red-800);--link-icon-danger-visited:var(--colors-red-800);--link-oncolor:var(--colors-base-white);--link-oncolor-hovered:var(--colors-alpha-alpha-white-80);--link-icon-oncolor-hovered:var(--alpha-white-80);--link-oncolor-pressed:var(--colors-alpha-alpha-white-60);--link-icon-oncolor-pressed:var(--alpha-white-60);--link-oncolor-focused:var(--colors-base-white);--link-link-oncolor-focused:var(--colors-base-white);--link-oncolor-visited:var(--colors-alpha-alpha-white-90);--link-icon-oncolor-visited:var(--alpha-white-90);--link-oncolor-disabled:var(--colors-alpha-alpha-white-30);--link-icon-oncolor-disabled:var(--alpha-white-30);--icon-oncolor:var(--colors-base-white);--tag-background-neutral:var(--colors-primary-sa-flag-600-primary);--tag-background-neutral-light:var(--colors-neutral-800);--tag-background-on-color:var(--colors-alpha-alpha-white-20);--tag-text-neutral:var(--colors-neutral-100);--tag-text-success:var(--colors-green-800);--tag-text-info:var(--colors-blue-800);--tag-text-warning:var(--colors-yellow-800);--tag-text-error:var(--colors-red-800);--tag-icon-neutral:var(--colors-neutral-100);--tag-icon-success:var(--colors-green-800);--tag-icon-info:var(--colors-blue-800);--tag-icon-warning:var(--colors-yellow-800);--tag-icon-error:var(--colors-red-800);--tag-background-success:var(--colors-green-700);--tag-background-success-light:var(--colors-green-50);--tag-background-info:var(--colors-blue-600);--tag-background-info-light:var(--colors-blue-50);--tag-background-warning:var(--colors-yellow-700);--tag-background-warning-light:var(--colors-yellow-50);--tag-background-error:var(--colors-red-600);--tag-background-error-light:var(--colors-red-50);--tag-border-neutral:var(--colors-neutral-300);--tag-border-neutral-light:var(--colors-neutral-800);--tag-border-on-color:var(--colors-alpha-alpha-white-60);--tag-border-success:var(--colors-green-700);--tag-border-success-light:var(--colors-green-200);--tag-border-info:var(--colors-blue-700);--tag-border-info-light:var(--colors-blue-200);--tag-border-warning:var(--colors-red-700);--tag-border-warning-light:var(--colors-yellow-200);--tag-border-error:var(--colors-red-700);--tag-border-error-light:var(--colors-red-200);--tag-dot:var(--colors-alpha-alpha-white-60);--form-text-form-title:var(--text-default);--controls-control-primary:var(--alpha-white-0);--table-cell-border:var(--colors-neutral-600);--table-cell-border-inverse:var(--border-black);--table-text-head:var(--colors-neutral-300);--table-text-body:var(--text-default);--table-background-disabled:var(--background-disabled);--table-background-hover-selected:var(--colors-neutral-900);--table-background-header:var(--colors-neutral-900);--table-background-row:var(--colors-neutral-900);--controls-control-primary-checked:var(--colors-primary-sa-flag-600-primary);--controls-control-primary-hovered:var(--colors-primary-sa-flag-300);--controls-control-primary-pressed:var(--colors-primary-sa-flag-400);--controls-control-primary-focused:var(--colors-primary-sa-flag-600-primary);--controls-control-neutral-checked:var(--colors-neutral-600);--controls-control-neutral-hovered:var(--colors-neutral-400);--controls-control-neutral-pressed:var(--colors-neutral-400);--controls-control-neutral-focused:var(--colors-neutral-600);--controls-control-primary--readonly:var(--alpha-white-0);--controls-control-pressed:var(--colors-neutral-600);--controls-control-ripple-effect:var(--colors-neutral-950);--controls-control-border:var(--colors-neutral-400);--form-text-form-paragraph:var(--text-secondary-paragraph);--form-field-text-label:var(--text-default);--form-field-text-placeholder:var(--text-secondary-paragraph);--form-field-text-hovered:var(--text-default);--stepper-button-completed:var(--colors-green-600);--tooltip-background-light:var(--colors-neutral-800);--tooltip-text-heading-light:var(--text-display);--tooltip-text-paragraph-light:var(--text-primary-paragraph);--tooltip-background-dark:var(--colors-base-white);--tooltip-text-heading-dark:var(--colors-neutral-800);--tooltip-text-paragraph-dark:var(--colors-neutral-700);--alpha-white-0:var(--colors-alpha-alpha-black-10);--alpha-white-10:var(--colors-alpha-alpha-black-10);--alpha-white-20:var(--colors-alpha-alpha-black-20);--alpha-white-30:var(--colors-alpha-alpha-black-30);--alpha-white-40:var(--colors-alpha-alpha-black-40);--alpha-white-50:var(--colors-alpha-alpha-black-50);--alpha-white-60:var(--colors-alpha-alpha-black-60);--alpha-white-70:var(--colors-alpha-alpha-black-70);--alpha-white-80:var(--colors-alpha-alpha-black-80);--alpha-white-90:var(--colors-alpha-alpha-black-90);--alpha-white-100:var(--colors-alpha-alpha-black-100);--alpha-black-0:var(--colors-alpha-alpha-white-10);--alpha-black-10:var(--colors-alpha-alpha-white-10);--alpha-black-20:var(--colors-alpha-alpha-white-20);--alpha-black-30:var(--colors-alpha-alpha-white-30);--alpha-black-40:var(--colors-alpha-alpha-white-40);--alpha-black-50:var(--colors-alpha-alpha-white-50);--alpha-black-60:var(--colors-alpha-alpha-white-60);--alpha-black-70:var(--colors-alpha-alpha-white-70);--alpha-black-80:var(--colors-alpha-alpha-white-80);--alpha-black-90:var(--colors-alpha-alpha-white-90);--alpha-black-100:var(--colors-alpha-alpha-white-100);--background-disabled:var(--colors-neutral-700);--background-disabled-primary:var(--colors-primary-sa-flag-700);--background-inverse-disabled:var(--colors-neutral-700);--stepper-button-completed-hovered:var(--colors-primary-sa-flag-700);--stepper-button-current:var(--colors-green-600);--stepper-button-current-hovered:var(--colors-primary-sa-flag-700);--stepper-button-upcomming:var(--colors-neutral-600);--stepper-button-upcomming-hovered:var(--colors-neutral-600);--stepper-button-background:var(--colors-base-white);--stepper-text-primary:var(--text-default);--stepper-text-secondary:var(--text-primary-paragraph);--stepper-text-tertiary:var(--text-secondary-paragraph);--stepper-line-completed:var(--colors-primary-sa-flag-600-primary);--stepper-line-completed-hovered:var(--colors-primary-sa-flag-700);--stepper-line-current:var(--colors-neutral-700);--stepper-line-upcomming:var(--colors-neutral-700);--stepper-line-upcomming-hovered:var(--colors-neutral-700);--form-field-text-focused:var(--text-primary-paragraph);--form-field-text-pressed:var(--text-primary-paragraph);--form-field-text-filled:var(--text-default);--form-field-text-readonly:var(--text-default);--form-field-text-helper:var(--text-secondary-paragraph);--form-field-background-default:var(--colors-neutral-800);--form-field-background-lighter:var(--colors-neutral-600);--form-field-background-darker:var(--colors-neutral-800);--form-field-background-pressed:#4d5761;--form-field-border-default:var(--colors-neutral-500);--form-field-border-hovered:var(--colors-neutral-200);--form-field-border-pressed:var(--colors-neutral-25);--form-field-border-error:var(--border-error);--form-option-background-hover:var(--colors-neutral-500);--form-option-background-pressed:var(--colors-neutral-700);--form-datecell-background-default:var(--colors-primary-sa-flag-600-primary);--form-datecell-background-hovered:var(--colors-primary-sa-flag-700);--icon-default:var(--colors-base-white);--form-datecell-background-pressed:var(--colors-primary-sa-flag-900);--form-datecell-background-focused:var(--colors-primary-sa-flag-600-primary);--form-datecell-today-background-default:var(--alpha-white-0);--form-datecell-today-background-hovered:var(--colors-neutral-700);--form-datecell-today-background-pressed:var(--colors-neutral-600);--icon-default-500:var(--colors-neutral-200);--form-datecell-today-background-focused:var(--alpha-white-0);--form-datecell-background-disabled:#ffffff;--form-datecell-background-600:var(--colors-primary-sa-flag-600-primary);--form-datecell-background-300:var(--colors-primary-sa-flag-300);--form-datecell-background-200:var(--colors-primary-sa-flag-400);--form-datecell-background-100:var(--colors-primary-sa-flag-300);--controls-control-icon-hovered:var(--colors-primary-sa-flag-800);--alpha-primary-10:#166a4519;--icon-default-400:var(--colors-neutral-500);--icon-primary:var(--colors-primary-sa-flag-600-primary);--alpha-primary-20:#166a4533;--icon-primary-light:var(--colors-primary-sa-flag-50);--alpha-warning-10:#fec84b19;--icon-primary-400:var(--colors-primary-sa-flag-400);--alpha-warning-20:#fec84b33;--alpha-error-10:#b4231819;--alpha-error-20:#b4231833;--alpha-info-10:#156fee19;--alpha-info-20:#156fee33;--alpha-success-10:#06945419;--alpha-success-20:#06945433;--icon-neutral:var(--colors-neutral-500);--icon-neutral-light:var(--colors-neutral-950);--icon-secondary:var(--colors-secondary-gold-600-primary);--icon-secondary-light:var(--colors-secondary-gold-50);--icon-tertiary:var(--colors-tertiary-lavendar-600);--icon-tertiary-light:var(--colors-tertiary-lavendar-50);--icon-success:var(--colors-green-600);--icon-success-light:var(--colors-green-50);--icon-info:var(--colors-blue-700);--icon-info-light:var(--colors-blue-50);--icon-warning:var(--colors-yellow-700);--icon-warning-light:var(--colors-yellow-50);--icon-error:var(--colors-red-700);--icon-error-light:var(--colors-red-50);--icon-default-disabled:var(--colors-base-white);--icon-default-oncolor-disabled:var(--colors-base-white);--control-disabled:var(--colors-alpha-alpha-white-30);--featuredicons-icon-oncolor:var(--colors-base-white);--featuredicons-icon-success:var(--colors-green-600);--featuredicons-icon-default:var(--colors-base-white);--featuredicons-icon-error:var(--colors-red-700);--featuredicons-icon-secondary:var(--colors-secondary-gold-600-primary);--featuredicons-icon-default-500:var(--colors-neutral-200);--featuredicons-background-error-light:var(--colors-red-50);--featuredicons-background-info-light:var(--colors-blue-50);--featuredicons-background-warning-light:var(--colors-yellow-50);--featuredicons-background-success-light:var(--colors-green-50);--featuredicons-background-brand-light:var(--colors-primary-sa-flag-50);--featuredicons-background-default-light:var(--colors-neutral-50);--featuredicons-icon-default-400:var(--colors-neutral-500);--featuredicons-icon-primary:var(--colors-primary-sa-flag-600-primary);--featuredicons-icon-primary-light:var(--colors-primary-sa-flag-50);--featuredicons-icon-primary-400:var(--colors-primary-sa-flag-400);--featuredicons-icon-neutral:var(--colors-neutral-500);--featuredicons-icon-neutral-light:var(--colors-neutral-950);--featuredicons-icon-secondary-light:var(--colors-secondary-gold-50);--featuredicons-icon-tertiary:var(--colors-tertiary-lavendar-600);--featuredicons-icon-tertiary-light:var(--colors-tertiary-lavendar-50);--featuredicons-icon-success-light:var(--colors-green-50);--featuredicons-icon-info:var(--colors-blue-700);--featuredicons-icon-info-light:var(--colors-blue-50);--featuredicons-icon-warning:var(--colors-yellow-700);--featuredicons-bg-icon-warning-light:var(--alpha-warning-10);--featuredicons-bg-icon-error-light:var(--alpha-error-10);--featuredicons-bg-icon-brand-light:var(--alpha-primary-10);--featuredicons-bg-icon-info-light:var(--alpha-info-10);--featuredicons-bg-icon-success-light:var(--alpha-success-10);--controls-control-icon-pressed:var(--colors-primary-sa-flag-800);--controls-control-icon-disabled:var(--colors-neutral-400);--notification-background-error-light:var(--colors-red-50);--notification-background-info-light:var(--colors-blue-50);--notification-background-warning-light:var(--colors-yellow-50);--notification-background-success-light:var(--colors-green-50);--notification-background-brand-light:var(--colors-primary-sa-flag-50);--notification-background-default-light:var(--colors-neutral-50);--notification-background-default-50:var(--alpha-white-10);--notification-background-success-50:var(--alpha-success-20);--notification-background-warning-50:var(--alpha-warning-20);--notification-background-error-50:var(--alpha-error-20);--notification-background-brand-50:var(--alpha-primary-20);--notification-background-info-50:var(--alpha-info-20);--notification-background-default-25:var(--alpha-white-0);--notification-background-success-25:var(--alpha-primary-10);--notification-background-warning-25:var(--alpha-warning-10);--notification-background-error-25:var(--alpha-error-10);--notification-background-brand-25:var(--alpha-primary-10);--notification-background-info-25:var(--alpha-info-10);--notification-text-success:var(--colors-green-300);--notification-text-error:var(--colors-red-300);--notification-text-info:var(--colors-blue-300);--notification-text-warning:var(--colors-yellow-300);--notification-text-brand:var(--colors-primary-sa-flag-300);--controls-control-text-error:var(--colors-red-300)}.featured-icon{display:flex;min-width:56px;width:56px;height:56px;justify-content:center;align-items:center;border-radius:var(--radius-sm)}.featured-icon--xl{width:56px;min-width:56px;height:56px}.featured-icon--xl span{display:flex;align-items:center;justify-content:center;width:28px;height:28px}.featured-icon--lg{width:48px;min-width:48px;height:48px}.featured-icon--lg span{display:flex;align-items:center;justify-content:center;width:24px;height:24px}.featured-icon--md{width:40px;min-width:40px;height:40px}.featured-icon--md span{display:flex;align-items:center;justify-content:center;width:20px;height:20px}.featured-icon--sm{width:32px;min-width:32px;height:32px}.featured-icon--sm span{display:flex;align-items:center;justify-content:center;width:16px;height:16px}.featured-icon--circle{border-radius:var(--radius-full)}.featured-icon--hard-brand{color:var(--colors-base-white);background-color:var(--text-success)}.featured-icon--hard-gray{color:var(--colors-base-white);background-color:var(--text-display)}.featured-icon--hard-error{color:var(--colors-base-white);background-color:var(--background-error-light)}.featured-icon--hard-warning{color:var(--colors-base-white);background-color:var(--background-warning)}.featured-icon--hard-success{color:var(--colors-base-white);background-color:var(--text-success)}.featured-icon--hard-info{color:var(--colors-base-white);background-color:var(--icon-info)}.featured-icon--light-brand{color:var(--text-success);background-color:var(--icon-success-light)}.featured-icon--light-gray{color:var(--text-display);background-color:var(--background-neutral-50)}.featured-icon--light-error{color:var(--text-error);background-color:var(--featuredicons-background-error-light)}.featured-icon--light-warning{color:var(--text-warning);background-color:var(--featuredicons-background-warning-light)}.featured-icon--light-success{color:var(--text-success);background-color:var(--icon-success-light)}.featured-icon--light-info{color:var(--icon-info);background-color:var(--featuredicons-background-info-light)}.featured-icon--outlined-brand{border:1px solid var(--colors-brand-200);color:var(--text-success);background-color:transparent}.featured-icon--outlined-gray{border:1px solid var(--colors-gray-neutral-200);color:var(--text-display);background-color:transparent}.featured-icon--outlined-error{border:1px solid var(--colors-error-200);color:var(--text-error);background-color:transparent}.featured-icon--outlined-warning{border:1px solid var(--colors-warning-200);color:var(--text-warning);background-color:transparent}.featured-icon--outlined-success{border:1px solid var(--colors-brand-200);color:var(--text-success);background-color:transparent}.featured-icon--outlined-info{border:1px solid var(--colors-info-200);color:var(--icon-info);background-color:transparent}.dga-form-control{display:flex;flex-direction:column;gap:8px;width:320px}.dga-form-control--fullwidth{width:100%}.dga-form-control>.dga-label{margin-bottom:8px;color:var(--form-field-text-label)}.input{display:flex;height:40px;width:100%;justify-content:flex-start;padding:var(--spacing-none) var(--spacing-2);border-radius:var(--radius-sm);gap:var(--spacing-xs);border:1px solid var(--form-field-border-default);background:var(--form-field-background-default);position:relative}.input:hover{border-color:var(--form-field-border-hovered)}.input::after{content:\"\";position:absolute;bottom:0;left:50%;width:0%;height:2px;transform:translateX(-50%);background-color:var(--form-field-border-pressed);transition:width 0.2s ease-in-out}.input__field{background-color:transparent;border:0;outline:0;height:100%;width:100%;color:var(--form-field-text-focused)}.input__field::placeholder{color:var(--form-field-text-placeholder);font-size:16px;font-style:normal;font-weight:400;line-height:24px}.input.focus::after{width:100%}.input.active::after{width:50%}.input--readonly,.input--readonly:hover,.input--disabled,.input--disabled:hover{border-color:var(--border-neutral-primary);box-shadow:none !important}.input--readonly::after,.input--disabled::after{display:none}.input--readonly .input__field,.input--readonly .input__field::placeholder,.input--disabled .input__field,.input--disabled .input__field::placeholder{color:var(--form-field-text-readonly)}.input--disabled{border-color:var(--border-disabled)}.input--disabled .input__field{color:var(--text-default-disabled)}.input--disabled .input__field,.input--disabled .input__field::placeholder{color:var(--text-default-disabled)}.input--disabled .input__icon span,.input--disabled .input__prefix--subtle-text,.input--disabled .input__prefix--solid-text{color:var(--text-default-disabled)}.input__icon{height:100%;display:inline-flex;align-items:center}.input__icon span{color:var(--form-field-border-hovered);font-size:20px}.input__feedback-icon{height:100%;display:inline-flex;align-items:center}.input__feedback-icon span{font-size:20px;position:relative;z-index:0}.input__feedback-icon--success{color:var(--text-success)}.input__feedback-icon--success span::after{background-color:var(--colors-brand-100)}.input__feedback-icon--error{color:var(--text-error)}.input__feedback-icon--error span::after{background-color:var(--text-error-100)}.input__feedback-icon--warning{color:var(--text-warning)}.input__feedback-icon--warning span::after{background-color:var(--colors-warning-100)}.input__feedback-icon--warning-triangle{color:var(--text-warning)}.input__feedback-icon--warning-triangle span::after{width:0 !important;height:0 !important;transform:scale(1) !important;border:12px solid rgba(0, 0, 0, 0);border-top:0;border-bottom:20px solid var(--colors-warning-100);border-radius:0px !important;left:-2px !important;top:-1px !important}.input__feedback-icon--ring span::after{content:\"\";display:block;width:100%;height:100%;transform:scale(1.16);position:absolute;top:0;left:0;border-radius:var(--radius-full);z-index:-1}.input__prefix,.input__suffix{display:inline-flex;height:100%;padding:var(--spacing-xxs) var(--spacing-2);justify-content:center;align-items:center;gap:var(--spacing-xs);margin-left:calc(-1 * var(--spacing-2));margin-right:var(--spacing-2);border:0}.input__prefix-label,.input__prefix-icon,.input__prefix-chevron,.input__suffix-label,.input__suffix-icon,.input__suffix-chevron{color:var(--colors-text-primary)}.input__prefix .dropdown__label,.input__suffix .dropdown__label{display:none}.input__prefix .dropdown__label--selection,.input__suffix .dropdown__label--selection{display:inline-block;white-space:nowrap}.input__prefix .dropdown__label--selection~.input__prefix-label,.input__suffix .dropdown__label--selection~.input__prefix-label{display:none}.input__prefix-chevron,.input__suffix-chevron{font-size:30px !important;transform:rotate(0);transition:all 0.3s ease-in-out}.input__prefix.active,.input__suffix.active{background-color:var(--colors-gray-neutral-300)}.input__prefix--solid,.input__suffix--solid{background-color:var(--background-neutral-50)}.input__prefix--solid-text,.input__suffix--solid-text{background-color:var(--background-neutral-50)}.input__prefix--solid-text .input__prefix-label,.input__suffix--solid-text .input__prefix-label{color:var(--colors-text-quarterary)}.input__prefix--solid:hover,.input__suffix--solid:hover{background-color:var(--colors-gray-neutral-200)}.input__prefix--solid:focus,.input__suffix--solid:focus{background-color:transparent;border:4px solid var(--colors-base-black);border-radius:0}.input__prefix--solid.active,.input__suffix--solid.active{background-color:var(--colors-gray-neutral-300);border:0}.input__prefix--solid:disabled,.input__suffix--solid:disabled{background-color:var(--background-neutral-50)}.input__prefix--solid:disabled .input__prefix-label,.input__prefix--solid:disabled .input__prefix-icon,.input__prefix--solid:disabled .input__prefix-chevron,.input__suffix--solid:disabled .input__prefix-label,.input__suffix--solid:disabled .input__prefix-icon,.input__suffix--solid:disabled .input__prefix-chevron{color:var(--colors-gray-neutral-300)}.input__prefix--subtle,.input__suffix--subtle{background-color:transparent}.input__prefix--subtle-text,.input__suffix--subtle-text{background-color:transparent}.input__prefix--subtle-text .input__prefix-label,.input__suffix--subtle-text .input__prefix-label{color:var(--colors-text-quarterary)}.input__prefix--subtle:hover,.input__suffix--subtle:hover{background-color:var(--colors-gray-neutral-50)}.input__prefix--subtle:focus,.input__suffix--subtle:focus{background-color:transparent;border:4px solid var(--colors-base-black)}.input__prefix--subtle.active,.input__suffix--subtle.active{background-color:var(--colors-gray-neutral-200);border:0}.input__prefix--subtle:disabled .input__prefix-label,.input__prefix--subtle:disabled .input__prefix-icon,.input__prefix--subtle:disabled .input__prefix-chevron,.input__suffix--subtle:disabled .input__prefix-label,.input__suffix--subtle:disabled .input__prefix-icon,.input__suffix--subtle:disabled .input__prefix-chevron{color:var(--colors-gray-neutral-300)}.input__prefix.selected,.input__suffix.selected{background-color:var(--form-field-border-hovered)}.input__prefix.selected .input__prefix-icon,.input__prefix.selected .input__prefix-label,.input__prefix.selected .input__prefix-chevron,.input__suffix.selected .input__prefix-icon,.input__suffix.selected .input__prefix-label,.input__suffix.selected .input__prefix-chevron{color:var(--colors-text-primary_on-brand)}.input__prefix.selected .dropdown__label,.input__suffix.selected .dropdown__label{color:var(--colors-text-primary_on-brand)}.input__dropdown-btn.open+.input__dropdown-list{z-index:2;opacity:1;padding-block:var(--spacing-md);max-height:376px;pointer-events:auto;overflow-y:auto}.input__dropdown-btn.open .input__dropdown .input__prefix-chevron,.input__dropdown-btn.open .input__dropdown .input__suffix-chevron{transform:rotate(180deg)}.input__prefix{border-radius:var(--radius-sm) 0 0 var(--radius-sm)}.input__suffix{margin-right:calc(-1 * var(--spacing-2));margin-left:var(--spacing-xl);border-radius:0 var(--radius-sm) var(--radius-sm) 0}.input--lighter{border:0;background:var(--form-field-background-lighter, #fcfcfd)}.input--lighter:hover{border:1px solid var(--form-field-border-default)}.input--lighter.focus{border:1px solid var(--form-field-border-default)}.input--lighter.active{border:1px solid var(--form-field-border-default)}.input--darker{border:0;background-color:var(--form-field-background-darker, #f3f4f6)}.input--darker:hover{border:1px solid var(--form-field-border-default)}.input--darker.focus{border:1px solid var(--form-field-border-default);background-color:var(--form-field-background-default) !important}.input--darker.active{border:1px solid var(--form-field-border-default);background-color:var(--form-field-background-default) !important}.input.readOnly{border:1px solid var(--border-neutral-primary) !important;background-color:var(--form-field-background-default) !important;box-shadow:none !important}.input.readOnly::after{content:none}.input--error,.input--error:hover{border:1px solid var(--form-field-border-error) !important}.input--error::after{background-color:var(--form-field-border-error)}.input--lg{height:40px}.input--lg .input__field,.input--lg .input__field::placeholder{font-size:16px;font-style:normal;font-weight:400;line-height:24px}.input--lg__feedback-icon span{font-size:20px}.input--lg .input__prefix-icon,.input--lg .input__suffix-icon{font-size:24px}.input--lg .input__prefix-chevron,.input--lg .input__suffix-chevron{font-size:20px}.input--md{height:32px}.input--md .input__field,.input--md .input__field::placeholder{font-size:16px;font-style:normal;font-weight:400;line-height:24px}.input--md__feedback-icon span{font-size:16px}.input--md .input__prefix-icon,.input--md .input__suffix-icon{font-size:20px}.input--md .input__prefix-chevron,.input--md .input__suffix-chevron{font-size:16px}:host{display:block;width:fit-content}.date-picker-root{border-radius:var(--radius-8, 8px);background:var(--colors-base-white);width:fit-content;display:flex;gap:15px;padding:16px}.date-picker-root__quick-options .options-list{display:flex;flex-direction:column;gap:10px;margin-top:20px;list-style:none;min-width:120px}.date-picker-root__quick-options .options-list button{background:none;outline:none;border:0;cursor:pointer}.date-picker-root__main__inputs{width:100%;max-width:392px;display:flex;justify-content:space-between;gap:32px}.date-picker-root__main__inputs dga-text-input{height:fit-content;max-width:unset;min-width:unset;flex:1}.date-picker-root__main__inputs dga-text-input .input{height:40px;width:100%}.date-picker-root__main__buttons{margin-top:16px;border-top:1px solid gray;padding-top:16px;display:flex;justify-content:flex-end}.date-picker-root__main__content-wrapper{display:flex;gap:32px}.date-picker{display:inline-flex;flex-direction:column;align-items:center;justify-content:center;max-width:392px}.date-picker__date-grid,.date-picker__weekdays{display:flex;flex-wrap:wrap;width:392px}.date-picker>month-navigator{width:100%}.date-picker__navigator{width:100%;display:flex;justify-content:space-between;align-items:center}.date-picker__navigator-label{position:relative;padding-left:20px;flex:1;color:var(--text-default, #161616)}.date-picker__navigator-buttons{display:flex;align-items:center}.date-picker__weekday{display:flex;width:56px;height:56px;justify-content:center;align-items:center;border:0;background-color:transparent}.date-cell{display:flex;width:56px;height:56px;justify-content:center;align-items:center;cursor:pointer;border:0;background-color:transparent}.date-cell__label{display:flex;width:100%;height:48px;flex-direction:column;justify-content:center;align-items:center;gap:var(--spacing-none);background-color:transparent;color:var(--text-default)}.date-cell__label span{display:grid;place-items:center;width:48px;height:100%;border-radius:var(--radius-full)}.date-cell:hover .date-cell__label span{background:var(--form-datecell-today-background-hovered)}.date-cell:active .date-cell__label span,.date-cell.pressed .date-cell__label span{background:var(--form-datecell-today-background-pressed)}.date-cell--selected .date-cell__label span{color:var(--colors-base-white) !important;border-radius:var(--radius-full);background-color:var(--text-success)}.date-cell--selected:hover .date-cell__label span{background:var(--form-datecell-background-hovered)}.date-cell--selected:active .date-cell__label span,.date-cell--selected.pressed .date-cell__label span{background:var(--form-datecell-background-pressed)}.date-cell--today .date-cell__label span{border:2px solid var(--text-success);color:var(--text-success)}.date-cell--today:hover .date-cell__label span{background:var(--form-datecell-background-100)}.date-cell--today:active .date-cell__label span,.date-cell--today.pressed .date-cell__label span{background:var(--colors-brand-200)}.date-cell--disabled{opacity:0.5}.date-cell[disabled]{opacity:0.3}.date-cell .date-cell__label{position:relative}.date-cell--mid-range .date-cell__label{background-color:var(--form-datecell-background-100)}.date-cell--mid-range--first-child .date-cell__label::before{content:\"\";width:52px;height:48px;position:absolute;top:0;right:0;border-radius:50% 0 0 50%;background-color:var(--form-datecell-background-100);z-index:-1}[dir=rtl] .date-cell--mid-range--first-child .date-cell__label::before{border-radius:0 50% 50% 0;left:0;right:unset}.date-cell--mid-range--last-child .date-cell__label::before{content:\"\";width:52px;height:48px;position:absolute;top:0;left:0;border-radius:0 50% 50% 0;background-color:var(--form-datecell-background-100);z-index:-1}[dir=rtl] .date-cell--mid-range--last-child .date-cell__label::before{border-radius:50% 0 0 50%;right:0;left:unset}[dir=rtl] .date-picker__navigator-buttons dga-button-v2{transform:rotate(180deg)}.year-selector{cursor:pointer;display:inline-flex;align-items:center;position:relative}.year-selector:hover{text-decoration:underline}.year-selector .dropdown-arrow{margin-left:4px;width:10px;height:10px;display:inline-block;transition:transform 0.2s ease}.year-selector .dropdown-arrow.open{transform:rotate(180deg)}[dir=rtl] .year-selector .dropdown-arrow{margin-left:0;margin-right:4px}.dga-breadcrumb-dropdown{display:flex;flex-direction:column;list-style:none;z-index:50;scrollbar-width:4px;min-width:90px;width:fit-content;height:312px;overflow-y:auto;padding:var(--spacing-xs, 4px);flex-direction:column;align-items:flex-start;position:absolute;left:0;top:calc(100% + 4px);border-radius:var(--radius-sm);border:1px solid var(--border-neutral-secondary, #e5e7eb);background:var(--background-white, #fff)}.dga-breadcrumb-dropdown-item{display:flex;padding:var(--spacing-md, 8px);flex-direction:column;justify-content:center;align-items:flex-start;gap:var(--spacing-md, 8px);align-self:stretch;border-radius:var(--radius-sm, 4px);color:var(--link-neutral, #384250)}.dga-breadcrumb-dropdown-item:hover{border-radius:var(--radius-xs);background:var(--button-background-neutral-hovered)}.dga-breadcrumb-dropdown-item:active{border-radius:var(--radius-xs);background:var(--button-background-neutral-pressed, #e5e7eb)}.dga-breadcrumb-dropdown-item.selected-year{background:var(--button-background-neutral-pressed, #e5e7eb)}.dga-breadcrumb-dropdown-item>.dropdown__option-icon{opacity:0}.dga-breadcrumb-dropdown-item.selected-year>.dropdown__option-icon{opacity:1}.menu{width:240px;border-radius:var(--radius-md);border:1px solid var(--border-border-default, #cbd5e1);background:var(--colors-base-white)}.menu-group{padding:var(--spacing-md);width:100%}.menu-group__label{padding:var(--spacing-md);color:var(--text-display)}.menu-item{display:flex;padding:var(--spacing-md);align-items:flex-start;gap:var(--spacing-md);align-self:stretch;align-items:center;cursor:pointer;box-sizing:border-box}.menu-item__icon{width:24px;height:24px}.menu-item__label{min-width:100px;color:var(--text-primary);flex:1}.menu-item__trail-element{display:flex;align-items:center;justify-content:center}.menu-item:hover{border-radius:var(--radius-xs);background:var(--button-background-neutral-hovered)}.menu-item:active{border-radius:var(--radius-xs);background:var(--button-background-neutral-pressed, #E5E7EB)}.menu-item.disabled{opacity:0.5;pointer-events:none}.divider{display:block;height:1px;width:100%;background-color:var(--border-border-default, #cbd5e1)}div.table-wrapper .azm-table{width:100%;border-collapse:collapse;margin:0px;padding:0px}div.table-wrapper .azm-table tr.row-divider:not(:last-child){border-bottom:1px solid var(--table-cell-border)}div.table-wrapper .azm-table thead{border-bottom:1px solid var(--table-cell-border);border-top:1px solid var(--table-cell-border);background:var(--table-background-header)}div.table-wrapper .azm-table thead th{height:48px;border-right:1px solid var(--table-cell-border);padding:var(--spacing-md, 8px) var(--spacing-xl, 16px)}div.table-wrapper .azm-table thead th:last-child{border-right:none}div.table-wrapper .azm-table thead th span{display:flex;justify-content:space-between;align-items:center;gap:var(--spacing-md, 8px)}div.table-wrapper .azm-table thead th span span.text{color:var(--table-text-head)}div.table-wrapper .azm-table thead th span span.icon-wrapper{display:flex;justify-content:center;align-items:center;gap:2px}div.table-wrapper .azm-table tbody tr.alternate:nth-child(even):not(div.table-wrapper .azm-table tbody tr:hover,div.table-wrapper .azm-table tbody tr.row-selected){transition:all 0.2s ease-in-out;background-color:var(--colors-gray-50)}div.table-wrapper .azm-table tbody tr:hover{background-color:var(--background-neutral-50)}div.table-wrapper .azm-table tbody tr.row-selected{background-color:var(--colors-brand-200)}div.table-wrapper .azm-table tbody td{height:64px;color:var(--text-primary);padding:var(--spacing-md, 8px) var(--spacing-xl, 16px)}.table-contained{overflow:hidden;border-radius:var(--radius-md, 8px);border:1px solid var(--Table-table-cell-border);padding:0px}.selected-cell{border:3px solid var(--colors-brand-200);background:var(--Colors-Gray-neutral-950, #0d121c)}:is(html[lang=ar],html[dir=rtl]) .azm-table{direction:ltr}dga-button{width:fit-content}.dga-btn{-webkit-appearance:none;appearance:none;border-radius:var(--radius-sm);cursor:pointer;border:0;outline:none;display:inline-flex;align-items:center;justify-content:center;gap:var(--buttons-lg-gap);box-sizing:border-box;overflow:hidden}.dga-btn:focus-visible{outline:2px solid var(--border-black)}.dga-btn-icon{display:flex;width:24px;height:24px;font-size:24px;justify-content:center;align-items:center}.dga-btn--lg{height:40px;padding-inline:var(--buttons-lg-padding)}.dga-btn--lg span.dga-btn-icon{width:24px;height:24px;font-size:24px}.dga-btn--md{height:32px;padding-inline:var(--buttons-md-padding)}.dga-btn--md span.dga-btn-icon{width:20px;height:20px;font-size:20px}.dga-btn--sm{height:24px;padding-inline:var(--buttons-sm-padding)}.dga-btn--sm span.dga-btn-icon{width:16px;height:16px;font-size:16px}.dga-btn--icon{padding:0;display:flex;align-items:center;justify-content:center}.dga-btn--icon.dga-btn--lg{width:40px;height:40px;font-size:40px}.dga-btn--icon-menu.dga-btn--lg{width:auto;padding-inline:var(--buttons-lg-padding)}.dga-btn--icon.dga-btn--md{width:32px;height:32px;font-size:32px}.dga-btn--icon-menu.dga-btn--md{width:auto;padding-inline:var(--buttons-md-padding)}.dga-btn--icon.dga-btn--sm{width:24px;height:24px;font-size:24px}.dga-btn--icon-menu.dga-btn--sm{width:auto;padding-inline:var(--buttons-sm-padding)}.dga-btn--primary-neutral{background-color:var(--button-background-black-default);color:var(--text-oncolor-primary)}.dga-btn--primary-neutral:hover{background-color:var(--button-background-black-hovered)}.dga-btn--primary-neutral:visited{background-color:var(--button-background-black-pressed)}.dga-btn--primary-neutral:active{background-color:var(--button-background-black-selected);outline:none}.dga-btn--primary-neutral:active::after{display:none !important}.dga-btn--primary-neutral:disabled,.dga-btn--primary-neutral[disabled]{background:var(--background-disabled);color:var(--text-default-disabled)}.dga-btn--primary-neutral--on-color{background-color:var(--button-background-oncolor-default);color:var(--text-default)}.dga-btn--primary-neutral--on-color:hover{background-color:var(--button-background-oncolor-hovered)}.dga-btn--primary-neutral--on-color:visited,.dga-btn--primary-neutral--on-color.selected{background-color:var(--button-background-oncolor-selected)}.dga-btn--primary-neutral--on-color:active{background-color:var(--button-background-oncolor-pressed)}.dga-btn--primary-neutral--on-color:disabled,.dga-btn--primary-neutral--on-color[disabled]{background-color:var(--button-background-disabled-on-color);color:var(--text-default-oncolor-disabled)}.dga-btn--primary-brand{background-color:var(--button-background-primary-default);color:var(--text-oncolor-primary)}.dga-btn--primary-brand:hover{background:var(--button-background-primary-hovered)}.dga-btn--primary-brand:visited{background:var(--button-background-primary-pressed)}.dga-btn--primary-brand:active{background:var(--button-background-primary-selected);outline:none}.dga-btn--primary-brand:active::after{display:none !important}.dga-btn--primary-brand:disabled,.dga-btn--primary-brand[disabled]{background:var(--background-disabled);color:var(--text-default-disabled)}.dga-btn--primary-brand--on-color{background-color:var(--button-background-oncolor-default);color:var(--text-default)}.dga-btn--primary-brand--on-color:hover{background-color:var(--button-background-oncolor-hovered)}.dga-btn--primary-brand--on-color:visited,.dga-btn--primary-brand--on-color.selected{background-color:var(--button-background-oncolor-pressed)}.dga-btn--primary-brand--on-color:active{background-color:var(--button-background-oncolor-pressed)}.dga-btn--primary-brand--on-color:disabled,.dga-btn--primary-brand--on-color[disabled]{background-color:var(--button-background-disabled-on-color);color:var(--text-default-oncolor-disabled)}.dga-btn--secondary{background-color:var(--button-background-neutral-default);color:var(--colors-text-primary)}.dga-btn--secondary:hover{background:var(--button-background-neutral-default-hoverd)}.dga-btn--secondary:visited{background:var(--button-background-neutral-default-pressed)}.dga-btn--secondary:active{background:var(--button-background-neutral-default-selected);outline:none}.dga-btn--secondary:disabled,.dga-btn--secondary[disabled]{background:var(--background-disabled);color:var(--text-default-disabled)}.dga-btn--secondary--on-color{background-color:var(--button-background-transparent-hovered);color:var(--text-oncolor-primary)}.dga-btn--secondary--on-color:hover{background-color:var(--button-background-transparent-hovered)}.dga-btn--secondary--on-color:visited,.dga-btn--secondary--on-color.selected{background-color:var(--Button-button-background-transparent-selected)}.dga-btn--secondary--on-color:active{background-color:var(--Button-button-background-transparent-pressed);color:var(--text-oncolor-primary)}.dga-btn--secondary--on-color:disabled,.dga-btn--secondary--on-color[disabled]{background-color:var(--button-background-disabled-on-color);color:var(--text-default-oncolor-disabled)}.dga-btn--secondary-outline{outline:1px solid var(--border-neutral-secondary);background-color:transparent;color:var(--text-default)}.dga-btn--secondary-outline:hover{background:var(--button-background-neutral-default)}.dga-btn--secondary-outline:visited{background:var(--button-background-neutral-pressed);outline:1px solid var(--border-neutral-primary)}.dga-btn--secondary-outline:active{background:var(--button-background-neutral-selected);outline:1px solid var(--border-neutral-primary)}.dga-btn--secondary-outline:disabled,.dga-btn--secondary-outline[disabled]{background:transparent;color:var(--text-default-disabled);border:1px solid var(--border-neutral-secondary)}.dga-btn--secondary-outline--on-color{outline-color:var(--border-white-40);color:var(--text-oncolor-primary)}.dga-btn--secondary-outline--on-color:hover{background:var(--button-background-transparent-hovered);outline-color:var(--border-white-40)}.dga-btn--secondary-outline--on-color:visited,.dga-btn--secondary-outline--on-color.selected{background:var(--button-background-transparent-hovered);outline-color:var(--border-white-40)}.dga-btn--secondary-outline--on-color:active{background:var(--button-background-transparent-hovered);outline-color:var(--border-white-40)}.dga-btn--secondary-outline--on-color:disabled,.dga-btn--secondary-outline--on-color[disabled]{outline-color:1px solid var(--icon-default-oncolor-disabled);color:var(--text-default-oncolor-disabled)}.dga-btn--subtle,.dga-btn--close,.dga-btn--sort{background-color:transparent;color:var(--colors-text-primary)}.dga-btn--subtle:hover,.dga-btn--close:hover,.dga-btn--sort:hover{background:var(--button-background-neutral-default)}.dga-btn--subtle:visited,.dga-btn--close:visited,.dga-btn--sort:visited{background:var(--button-background-neutral-pressed)}.dga-btn--subtle:active,.dga-btn--close:active,.dga-btn--sort:active{background:var(--button-background-neutral-selected);outline:none}.dga-btn--subtle:active::after,.dga-btn--close:active::after,.dga-btn--sort:active::after{display:none !important}.dga-btn--subtle:disabled,.dga-btn--subtle[disabled],.dga-btn--close:disabled,.dga-btn--close[disabled],.dga-btn--sort:disabled,.dga-btn--sort[disabled]{background:transparent;color:var(--text-default-disabled)}.dga-btn--transparent{background-color:transparent;color:var(--text-default)}.dga-btn--transparent:hover{background:transparent;color:var(--button-background-primary-hovered)}.dga-btn--transparent:visited{color:var(--button-background-primary-pressed)}.dga-btn--transparent:active{color:var(--button-background-primary-selected);outline:none}.dga-btn--transparent:active::after{display:none !important}.dga-btn--transparent:disabled,.dga-btn--transparent[disabled]{background:transparent;color:var(--text-default-disabled)}.dga-btn--close{display:flex;width:40px;height:40px;padding:var(--spacing-md);justify-content:center;align-items:center;border-radius:var(--radius-sm);background-color:transparent;color:var(--icon-default)}.dga-btn--close:hover{background:var(--button-background-neutral-hovered);color:var(--icon-default)}.dga-btn--close:active{background-color:var(--button-background-neutral-pressed)}.dga-btn--des-primary{background-color:var(--button-background-danger-primary-default);color:var(--text-oncolor-primary)}.dga-btn--des-primary:hover{background:var(--button-background-danger-primary-hovered)}.dga-btn--des-primary:visited{background:var(--button-background-danger-primary-pressed)}.dga-btn--des-primary:active{background:var(--button-background-danger-primary-selected);outline:none}.dga-btn--des-primary:active::after{display:none !important}.dga-btn--des-primary:disabled,.dga-btn--des-primary[disabled]{background:var(--background-disabled);color:var(--text-default-disabled)}.dga-btn--des-secondary{background-color:var(--button-background-danger-secondary-default);color:var(--text-error)}.dga-btn--des-secondary:hover{background:var(--button-background-danger-secondary-hovered)}.dga-btn--des-secondary:visited{background:var(--button-background-danger-secondary-pressed)}.dga-btn--des-secondary:active{background:var(--button-background-danger-secondary-selected);outline:none}.dga-btn--des-secondary:active::after{display:none !important}.dga-btn--des-secondary:disabled,.dga-btn--des-secondary[disabled]{background:var(--background-disabled);color:var(--text-default-disabled)}.dga-btn--des-secondary-outline{outline:1px solid var(--border-error-light);background-color:transparent;color:var(--text-error)}.dga-btn--des-secondary-outline:hover{background:var(--button-background-danger-secondary-hovered)}.dga-btn--des-secondary-outline:visited{background:var(--button-background-danger-secondary-pressed)}.dga-btn--des-secondary-outline:active{background:var(--button-background-danger-secondary-selected);outline:1px solid var(--border-error-light)}.dga-btn--des-secondary-outline:active::after{display:none !important}.dga-btn--des-secondary-outline:disabled,.dga-btn--des-secondary-outline[disabled]{background:transparent;color:var(--text-default-disabled);outline:1px solid var(--border-neutral-secondary)}.dga-btn--des-subtle{background-color:transparent;color:var(--text-error)}.dga-btn--des-subtle:hover{background:var(--button-background-danger-secondary-hovered)}.dga-btn--des-subtle:visited{background:var(--button-background-danger-secondary-pressed)}.dga-btn--des-subtle:active{background:var(--button-background-danger-secondary-selected);outline:none}.dga-btn--des-subtle:active::after{display:none !important}.dga-btn--des-subtle:disabled,.dga-btn--des-subtle[disabled]{background:transparent;color:var(--text-default-disabled)}.dga-btn--des-transparent{background-color:transparent;color:var(--button-background-danger-primary-default)}.dga-btn--des-transparent:hover{background:transparent;color:var(--button-background-danger-primary-hovered)}.dga-btn--des-transparent:visited{color:var(--button-background-danger-primary-pressed)}.dga-btn--des-transparent:active{color:var(--button-background-danger-primary-selected);outline:none}.dga-btn--des-transparent:active::after{display:none !important}.dga-btn--des-transparent:disabled,.dga-btn--des-transparent[disabled]{background:transparent;color:var(--text-default-disabled)}.dga-btn.dga-btn--subtle-on-color,.dga-btn.dga-btn--close-on-color{background-color:transparent;color:var(--text-oncolor-primary)}.dga-btn.dga-btn--subtle-on-color:hover,.dga-btn.dga-btn--close-on-color:hover{background-color:var(--button-background-transparent-hovered)}.dga-btn.dga-btn--subtle-on-color:visited,.dga-btn.dga-btn--subtle-on-color.selected,.dga-btn.dga-btn--close-on-color:visited,.dga-btn.dga-btn--close-on-color.selected{background-color:var(--button-background-transparent-selected)}.dga-btn.dga-btn--subtle-on-color:active,.dga-btn.dga-btn--close-on-color:active{color:var(--text-oncolor-primary);background-color:var(--button-background-transparent-pressed)}.dga-btn.dga-btn--subtle-on-color:disabled,.dga-btn.dga-btn--subtle-on-color[disabled],.dga-btn.dga-btn--close-on-color:disabled,.dga-btn.dga-btn--close-on-color[disabled]{background-color:transparent;color:var(--text-default-oncolor-disabled)}.dga-btn--transparent-on-color{background-color:transparent;color:var(--text-oncolor-primary)}.dga-btn--transparent-on-color:hover{color:var(--button-label-transparent-hovered-on-color)}.dga-btn--transparent-on-color:visited,.dga-btn--transparent-on-color.selected{color:var(--button-label-transparent-selected-on-color)}.dga-btn--transparent-on-color:active{color:var(--button-label-transparent-pressed-on-color)}.dga-btn--transparent-on-color:disabled,.dga-btn--transparent-on-color[disabled]{background-color:transparent;color:var(--text-default-oncolor-disabled)}.content-switcher{display:flex;flex-direction:column}.content-switcher__items{display:flex;flex-wrap:wrap}.content-switcher__item{display:inline-flex;min-width:76px;padding:var(--spacing-xs) 10px;justify-content:center;align-items:center;gap:10px;cursor:pointer;border:0;background:var(--background-neutral-50);color:var(--colors-2-text-primary, #161616)}.content-switcher__item:hover{background:var(--colors-gray-neutral-200, #e5e7eb)}.content-switcher__item:focus-visible{outline:none;border:1px solid white !important;box-shadow:0 0 0 2px black;z-index:9}.content-switcher__item--selected,.content-switcher__item--selected:hover{background-color:var(--colors-gray-neutral-950, #0d121c);color:var(--colors-2-text-primary_on-color, #fff)}.content-switcher__item--first{border-radius:var(--radius-md) 0px 0px var(--radius-md);border-right:0.5px solid var(--border-neutral-primary)}:is(html[lang=ar],html[dir=rtl]) .content-switcher__item--first{border-radius:0px var(--radius-md) var(--radius-md) 0px}.content-switcher__item--mid{border-radius:var(--radius-none);border-right:0.5px solid var(--colors-2-border-secondary, #e5e7eb);border-left:0.5px solid var(--colors-2-border-secondary, #e5e7eb)}.content-switcher__item--last{border-radius:0px var(--radius-md) var(--radius-md) 0px;border-left:0.5px solid var(--colors-2-border-secondary, #e5e7eb)}:is(html[lang=ar],html[dir=rtl]) .content-switcher__item--last{border-radius:var(--radius-md) 0px 0px var(--radius-md)}.content-switcher__item--on-color{color:var(--colors-2-text-primary_on-color, #fff);background:var(--button-background-transparent-hovered, rgba(255, 255, 255, 0.2));border-color:var(--border-transparent-10, rgba(255, 255, 255, 0.1))}.content-switcher__item--on-color:hover{background:var(--button-background-transparent-hovered, rgba(255, 255, 255, 0.2))}.content-switcher__item--on-color.content-switcher__item--selected,.content-switcher__item--on-color.content-switcher__item--selected:hover{background-color:var(--text-success)}.content-switcher__item--sm{height:auto}.content-switcher__item--md{height:40px}.content-switcher__item--lg{height:48px}.content-switcher__content{color:#000}.content-switcher__content--on-color{color:#fff}.list{margin-left:24px}.list-title,.list-item{height:24px}.list--primary .list-title,.list--primary .list-item{color:#1b8354}.list--primary>ul .list-item::before{background-color:#1b8354}.list--neutral .list-title,.list--neutral .list-item{color:#0d121c}.list--neutral>ul .list-item::before{background-color:#0d121c}.list--on-color .list-title,.list--on-color .list-item{color:var(--link-default_on-color, #fff)}.list--on-color>ul .list-item::before{background-color:#fff}.list--ordered{list-style-type:decimal;list-style-position:inside}.list--ordered>ol{list-style-type:lower-alpha;margin-left:24px}.list--unordered{list-style-type:decimal}.list--unordered .list-item{display:flex;align-items:center;gap:8px}.list--unordered>ul{list-style-type:disc;margin-left:18px}.list--unordered>ul .list-item{display:flex;align-items:center;gap:8px}.list--unordered>ul .list-item::before{content:\"\";width:4px;height:4px;border-radius:50%}.list--with-icon .list-item{display:flex;align-items:center;gap:8px}.list--with-icon .list-item-icon{display:flex;width:16px;height:16px;justify-content:center;align-items:center}.list--with-icon>ul{margin-left:24px}dga-second-nav-header .wrapper{height:40px;max-height:40px;position:relative;font-family:var(--font-family-text);font-size:var(--typo-size-text-md);font-weight:400;line-height:var(--heights-text-md);text-align:left}dga-second-nav-header .container{display:flex;align-items:center;justify-content:space-between;height:100%;padding:0 var(--spacing-4xl)}dga-second-nav-header .primary{background-color:var(--background-primary);color:var(--text-oncolor-primary)}dga-second-nav-header .gray{background-color:var(--background-neutral-100);color:var(--text-primary-paragraph)}dga-second-nav-header .border{border-bottom-width:1px;border-bottom-style:solid}dga-second-nav-header .primary .border{border-bottom-color:var(--alpha-white-30)}dga-second-nav-header .gray .border{border-bottom-color:var(--border-neutral-primary)}dga-second-nav-header .content{display:flex;align-items:center;flex-grow:1}dga-second-nav-header .actions{display:flex;align-items:center}dga-second-nav-header .items-container{display:flex;align-items:center;justify-content:space-evenly;gap:var(--spacing-xl)}dga-second-nav-header dga-second-nav-header-item{display:flex;align-items:center;gap:var(--spacing-xs)}.dga-label{display:flex;gap:4px;color:var(--form-field-text-label, #161616)}.dga-label>.star{color:var(--form-field-border-error, #B42318)}.dga-label.disabled,.dga-label.disabled>.star{color:var(--input-text-disabled, #9DA4AE) !important}.dga-helper-text{display:flex;align-items:center;gap:8px}.dga-helper-text--error{color:var(--text-error)}.dga-helper-text span{display:grid;place-items:center}*,*::after,*::before{margin:0;padding:0;box-sizing:inherit}*{box-sizing:border-box}html{font-size:62.5%}@media only screen and (max-width: 56.25em){html{font-size:75%}}body{box-sizing:border-box;margin:0;padding:0;overflow-x:hidden}@font-face{font-family:\"IBM Plex Sans Arabic\";src:url(\"/assets/fonts/IBM-Plex-Sans-Arabic/IBMPlexSansArabic-Regular.woff2\") format(\"woff2\"), url(\"/assets/fonts/IBM-Plex-Sans-Arabic/IBMPlexSansArabic-Regular.woff\") format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:\"IBM Plex Sans Arabic\";src:url(\"/assets/fonts/IBM-Plex-Sans-Arabic/IBMPlexSansArabic-Medium.woff2\") format(\"woff2\"), url(\"/assets/fonts/IBM-Plex-Sans-Arabic/IBMPlexSansArabic-Medium.woff\") format(\"woff\");font-weight:500;font-style:normal}@font-face{font-family:\"IBM Plex Sans Arabic\";src:url(\"/assets/fonts/IBM-Plex-Sans-Arabic/IBMPlexSansArabic-SemiBold.woff2\") format(\"woff2\"), url(\"/assets/fonts/IBM-Plex-Sans-Arabic/IBMPlexSansArabic-SemiBold.woff\") format(\"woff\");font-weight:600;font-style:normal}@font-face{font-family:\"IBM Plex Sans Arabic\";src:url(\"/assets/fonts/IBM-Plex-Sans-Arabic/IBMPlexSansArabic-Bold.woff2\") format(\"woff2\"), url(\"/assets/fonts/IBM-Plex-Sans-Arabic/IBMPlexSansArabic-Bold.woff\") format(\"woff\");font-weight:700;font-style:normal;font-display:auto}body{font-family:\"IBM Plex Sans Arabic\"}a,a:active,a:focus{color:inherit;text-decoration:none}.display-2xl-regular{font:400 72px/90px \"IBM Plex Sans Arabic\"}.display-xl-regular{font:400 60px/72px \"IBM Plex Sans Arabic\"}.display-lg-regular{font:400 48px/60px \"IBM Plex Sans Arabic\"}.display-md-regular{font:400 36px/44px \"IBM Plex Sans Arabic\"}.display-sm-regular{font:400 30px/38px \"IBM Plex Sans Arabic\"}.display-xs-regular{font:400 24px/32px \"IBM Plex Sans Arabic\"}.text-xl-regular,.content-switcher__item--lg{font:400 20px/30px \"IBM Plex Sans Arabic\"}.text-lg-regular,.content-switcher__item--md{font:400 18px/28px \"IBM Plex Sans Arabic\"}.text-md-regular,.input__field,.input__field::placeholder,.input__prefix-label,.input__prefix-icon,.input__prefix-chevron,.input__suffix-label,.input__suffix-icon,.input__suffix-chevron,.input--lg .input__prefix-label,.input--lg .input__suffix-label,.date-cell__label,.menu-item__label,.menu-item__trail-element,div.table-wrapper .azm-table tbody td,.content-switcher__item--sm,.list-title,.list-item,.dga-label--lg{font:400 16px/24px \"IBM Plex Sans Arabic\"}.text-sm-regular,.dga-form-control>.dga-label,.input__prefix .dropdown__label--selection,.input__suffix .dropdown__label--selection,.input--lg .input__field,.input--lg .input__field::placeholder,.input--md .input__field,.input--md .input__field::placeholder,.input--md .input__prefix-label,.input--md .input__suffix-label,.dga-breadcrumb-dropdown-item,.dga-label--md{font:400 14px/20px \"IBM Plex Sans Arabic\"}.text-xs-regular{font:400 12px/18px \"IBM Plex Sans Arabic\"}.text-2xs-regular{font:400 10px/14px \"IBM Plex Sans Arabic\"}.display-2xl-medium{font:500 72px/90px \"IBM Plex Sans Arabic\"}.display-xl-medium{font:500 60px/72px \"IBM Plex Sans Arabic\"}.display-lg-medium{font:500 48px/60px \"IBM Plex Sans Arabic\"}.display-md-medium{font:500 36px/44px \"IBM Plex Sans Arabic\"}.display-sm-medium{font:500 30px/38px \"IBM Plex Sans Arabic\"}.display-xs-medium{font:500 24px/32px \"IBM Plex Sans Arabic\"}.text-xl-medium{font:500 20px/30px \"IBM Plex Sans Arabic\"}.text-lg-medium{font:500 18px/28px \"IBM Plex Sans Arabic\"}.text-md-medium,.date-picker__navigator-label,.dga-btn--lg{font:500 16px/24px \"IBM Plex Sans Arabic\"}.text-sm-medium,.dga-btn--md{font:500 14px/20px \"IBM Plex Sans Arabic\"}.text-xs-medium,div.table-wrapper .azm-table thead th span span.text,.dga-btn--sm{font:500 12px/18px \"IBM Plex Sans Arabic\"}.text-2xs-medium{font:500 10px/14px \"IBM Plex Sans Arabic\"}.display-2xl-semibold{font:600 72px/90px \"IBM Plex Sans Arabic\"}.display-xl-semibold{font:600 60px/72px \"IBM Plex Sans Arabic\"}.display-lg-semibold{font:600 48px/60px \"IBM Plex Sans Arabic\"}.display-md-semibold{font:600 36px/44px \"IBM Plex Sans Arabic\"}.display-sm-semibold{font:600 30px/38px \"IBM Plex Sans Arabic\"}.display-xs-semibold{font:600 24px/32px \"IBM Plex Sans Arabic\"}.text-xl-semibold{font:600 20px/30px \"IBM Plex Sans Arabic\"}.text-lg-semibold{font:600 18px/28px \"IBM Plex Sans Arabic\"}.text-md-semibold{font:600 16px/24px \"IBM Plex Sans Arabic\"}.text-sm-semibold,.dga-label--md.semibold,.dga-label--lg.semibold{font:600 14px/20px \"IBM Plex Sans Arabic\"}.text-xs-semibold{font:600 12px/18px \"IBM Plex Sans Arabic\"}.text-2xs-semibold{font:600 10px/14px \"IBM Plex Sans Arabic\"}.display-2xl-bold{font:700 72px/90px \"IBM Plex Sans Arabic\"}.display-xl-bold{font:700 60px/72px \"IBM Plex Sans Arabic\"}.display-lg-bold{font:700 48px/60px \"IBM Plex Sans Arabic\"}.display-md-bold{font:700 36px/44px \"IBM Plex Sans Arabic\"}.display-sm-bold{font:700 30px/38px \"IBM Plex Sans Arabic\"}.display-xs-bold{font:700 24px/32px \"IBM Plex Sans Arabic\"}.text-xl-bold{font:700 20px/30px \"IBM Plex Sans Arabic\"}.text-lg-bold{font:700 18px/28px \"IBM Plex Sans Arabic\"}.text-md-bold,.date-cell--today .date-cell__label span{font:700 16px/24px \"IBM Plex Sans Arabic\"}.text-sm-bold{font:700 14px/20px \"IBM Plex Sans Arabic\"}.text-xs-bold,.menu-group__label{font:700 12px/18px \"IBM Plex Sans Arabic\"}.text-2xs-bold{font:700 10px/14px \"IBM Plex Sans Arabic\"}.dga-spacing-hor-0{height:0px}.dga-spacing-vert-0{width:0px}.dga-p-0{padding:0px}.dga-px-0{padding-inline:0px}.dga-py-0{padding-block:0px}.dga-pl-0{padding-left:0px}.dga-pr-0{padding-right:0px}.dga-pt-0{padding-top:0px}.dga-pb-0{padding-bottom:0px}.dga-mx-0{margin-inline:0px}.dga-my-0{margin-block:0px}.dga-ml-0{margin-left:0px}.dga-mr-0{margin-right:0px}.dga-mt-0{margin-top:0px}.dga-mb-0{margin-bottom:0px}.dga-spacing-hor-2{height:8px}.dga-spacing-vert-2{width:8px}.dga-p-2{padding:8px}.dga-px-2{padding-inline:8px}.dga-py-2{padding-block:8px}.dga-pl-2{padding-left:8px}.dga-pr-2{padding-right:8px}.dga-pt-2{padding-top:8px}.dga-pb-2{padding-bottom:8px}.dga-mx-2{margin-inline:8px}.dga-my-2{margin-block:8px}.dga-ml-2{margin-left:8px}.dga-mr-2{margin-right:8px}.dga-mt-2{margin-top:8px}.dga-mb-2{margin-bottom:8px}.dga-spacing-hor-4{height:16px}.dga-spacing-vert-4{width:16px}.dga-p-4{padding:16px}.dga-px-4{padding-inline:16px}.dga-py-4{padding-block:16px}.dga-pl-4{padding-left:16px}.dga-pr-4{padding-right:16px}.dga-pt-4{padding-top:16px}.dga-pb-4{padding-bottom:16px}.dga-mx-4{margin-inline:16px}.dga-my-4{margin-block:16px}.dga-ml-4{margin-left:16px}.dga-mr-4{margin-right:16px}.dga-mt-4{margin-top:16px}.dga-mb-4{margin-bottom:16px}.dga-spacing-hor-8{height:32px}.dga-spacing-vert-8{width:32px}.dga-p-8{padding:32px}.dga-px-8{padding-inline:32px}.dga-py-8{padding-block:32px}.dga-pl-8{padding-left:32px}.dga-pr-8{padding-right:32px}.dga-pt-8{padding-top:32px}.dga-pb-8{padding-bottom:32px}.dga-mx-8{margin-inline:32px}.dga-my-8{margin-block:32px}.dga-ml-8{margin-left:32px}.dga-mr-8{margin-right:32px}.dga-mt-8{margin-top:32px}.dga-mb-8{margin-bottom:32px}.dga-spacing-hor-12{height:48px}.dga-spacing-vert-12{width:48px}.dga-p-12{padding:48px}.dga-px-12{padding-inline:48px}.dga-py-12{padding-block:48px}.dga-pl-12{padding-left:48px}.dga-pr-12{padding-right:48px}.dga-pt-12{padding-top:48px}.dga-pb-12{padding-bottom:48px}.dga-mx-12{margin-inline:48px}.dga-my-12{margin-block:48px}.dga-ml-12{margin-left:48px}.dga-mr-12{margin-right:48px}.dga-mt-12{margin-top:48px}.dga-mb-12{margin-bottom:48px}.dga-spacing-hor-16{height:64px}.dga-spacing-vert-16{width:64px}.dga-p-16{padding:64px}.dga-px-16{padding-inline:64px}.dga-py-16{padding-block:64px}.dga-pl-16{padding-left:64px}.dga-pr-16{padding-right:64px}.dga-pt-16{padding-top:64px}.dga-pb-16{padding-bottom:64px}.dga-mx-16{margin-inline:64px}.dga-my-16{margin-block:64px}.dga-ml-16{margin-left:64px}.dga-mr-16{margin-right:64px}.dga-mt-16{margin-top:64px}.dga-mb-16{margin-bottom:64px}.dga-spacing-hor-24{height:96px}.dga-spacing-vert-24{width:96px}.dga-p-24{padding:96px}.dga-px-24{padding-inline:96px}.dga-py-24{padding-block:96px}.dga-pl-24{padding-left:96px}.dga-pr-24{padding-right:96px}.dga-pt-24{padding-top:96px}.dga-pb-24{padding-bottom:96px}.dga-mx-24{margin-inline:96px}.dga-my-24{margin-block:96px}.dga-ml-24{margin-left:96px}.dga-mr-24{margin-right:96px}.dga-mt-24{margin-top:96px}.dga-mb-24{margin-bottom:96px}.dga-spacing-hor-32{height:128px}.dga-spacing-vert-32{width:128px}.dga-p-32{padding:128px}.dga-px-32{padding-inline:128px}.dga-py-32{padding-block:128px}.dga-pl-32{padding-left:128px}.dga-pr-32{padding-right:128px}.dga-pt-32{padding-top:128px}.dga-pb-32{padding-bottom:128px}.dga-mx-32{margin-inline:128px}.dga-my-32{margin-block:128px}.dga-ml-32{margin-left:128px}.dga-mr-32{margin-right:128px}.dga-mt-32{margin-top:128px}.dga-mb-32{margin-bottom:128px}.dga-spacing-hor-40{height:160px}.dga-spacing-vert-40{width:160px}.dga-p-40{padding:160px}.dga-px-40{padding-inline:160px}.dga-py-40{padding-block:160px}.dga-pl-40{padding-left:160px}.dga-pr-40{padding-right:160px}.dga-pt-40{padding-top:160px}.dga-pb-40{padding-bottom:160px}.dga-mx-40{margin-inline:160px}.dga-my-40{margin-block:160px}.dga-ml-40{margin-left:160px}.dga-mr-40{margin-right:160px}.dga-mt-40{margin-top:160px}.dga-mb-40{margin-bottom:160px}.dga-spacing-hor-48{height:192px}.dga-spacing-vert-48{width:192px}.dga-p-48{padding:192px}.dga-px-48{padding-inline:192px}.dga-py-48{padding-block:192px}.dga-pl-48{padding-left:192px}.dga-pr-48{padding-right:192px}.dga-pt-48{padding-top:192px}.dga-pb-48{padding-bottom:192px}.dga-mx-48{margin-inline:192px}.dga-my-48{margin-block:192px}.dga-ml-48{margin-left:192px}.dga-mr-48{margin-right:192px}.dga-mt-48{margin-top:192px}.dga-mb-48{margin-bottom:192px}.dga-spacing-hor-56{height:224px}.dga-spacing-vert-56{width:224px}.dga-p-56{padding:224px}.dga-px-56{padding-inline:224px}.dga-py-56{padding-block:224px}.dga-pl-56{padding-left:224px}.dga-pr-56{padding-right:224px}.dga-pt-56{padding-top:224px}.dga-pb-56{padding-bottom:224px}.dga-mx-56{margin-inline:224px}.dga-my-56{margin-block:224px}.dga-ml-56{margin-left:224px}.dga-mr-56{margin-right:224px}.dga-mt-56{margin-top:224px}.dga-mb-56{margin-bottom:224px}.dga-spacing-hor-64{height:256px}.dga-spacing-vert-64{width:256px}.dga-p-64{padding:256px}.dga-px-64{padding-inline:256px}.dga-py-64{padding-block:256px}.dga-pl-64{padding-left:256px}.dga-pr-64{padding-right:256px}.dga-pt-64{padding-top:256px}.dga-pb-64{padding-bottom:256px}.dga-mx-64{margin-inline:256px}.dga-my-64{margin-block:256px}.dga-ml-64{margin-left:256px}.dga-mr-64{margin-right:256px}.dga-mt-64{margin-top:256px}.dga-mb-64{margin-bottom:256px}.dga-spacing-hor-72{height:288px}.dga-spacing-vert-72{width:288px}.dga-p-72{padding:288px}.dga-px-72{padding-inline:288px}.dga-py-72{padding-block:288px}.dga-pl-72{padding-left:288px}.dga-pr-72{padding-right:288px}.dga-pt-72{padding-top:288px}.dga-pb-72{padding-bottom:288px}.dga-mx-72{margin-inline:288px}.dga-my-72{margin-block:288px}.dga-ml-72{margin-left:288px}.dga-mr-72{margin-right:288px}.dga-mt-72{margin-top:288px}.dga-mb-72{margin-bottom:288px}.dga-spacing-hor-80{height:320px}.dga-spacing-vert-80{width:320px}.dga-p-80{padding:320px}.dga-px-80{padding-inline:320px}.dga-py-80{padding-block:320px}.dga-pl-80{padding-left:320px}.dga-pr-80{padding-right:320px}.dga-pt-80{padding-top:320px}.dga-pb-80{padding-bottom:320px}.dga-mx-80{margin-inline:320px}.dga-my-80{margin-block:320px}.dga-ml-80{margin-left:320px}.dga-mr-80{margin-right:320px}.dga-mt-80{margin-top:320px}.dga-mb-80{margin-bottom:320px}.dga-spacing-hor-88{height:352px}.dga-spacing-vert-88{width:352px}.dga-p-88{padding:352px}.dga-px-88{padding-inline:352px}.dga-py-88{padding-block:352px}.dga-pl-88{padding-left:352px}.dga-pr-88{padding-right:352px}.dga-pt-88{padding-top:352px}.dga-pb-88{padding-bottom:352px}.dga-mx-88{margin-inline:352px}.dga-my-88{margin-block:352px}.dga-ml-88{margin-left:352px}.dga-mr-88{margin-right:352px}.dga-mt-88{margin-top:352px}.dga-mb-88{margin-bottom:352px}.dga-spacing-hor-96{height:384px}.dga-spacing-vert-96{width:384px}.dga-p-96{padding:384px}.dga-px-96{padding-inline:384px}.dga-py-96{padding-block:384px}.dga-pl-96{padding-left:384px}.dga-pr-96{padding-right:384px}.dga-pt-96{padding-top:384px}.dga-pb-96{padding-bottom:384px}.dga-mx-96{margin-inline:384px}.dga-my-96{margin-block:384px}.dga-ml-96{margin-left:384px}.dga-mr-96{margin-right:384px}.dga-mt-96{margin-top:384px}.dga-mb-96{margin-bottom:384px}.dga-spacing-hor-104{height:416px}.dga-spacing-vert-104{width:416px}.dga-p-104{padding:416px}.dga-px-104{padding-inline:416px}.dga-py-104{padding-block:416px}.dga-pl-104{padding-left:416px}.dga-pr-104{padding-right:416px}.dga-pt-104{padding-top:416px}.dga-pb-104{padding-bottom:416px}.dga-mx-104{margin-inline:416px}.dga-my-104{margin-block:416px}.dga-ml-104{margin-left:416px}.dga-mr-104{margin-right:416px}.dga-mt-104{margin-top:416px}.dga-mb-104{margin-bottom:416px}.dga-spacing-hor-112{height:448px}.dga-spacing-vert-112{width:448px}.dga-p-112{padding:448px}.dga-px-112{padding-inline:448px}.dga-py-112{padding-block:448px}.dga-pl-112{padding-left:448px}.dga-pr-112{padding-right:448px}.dga-pt-112{padding-top:448px}.dga-pb-112{padding-bottom:448px}.dga-mx-112{margin-inline:448px}.dga-my-112{margin-block:448px}.dga-ml-112{margin-left:448px}.dga-mr-112{margin-right:448px}.dga-mt-112{margin-top:448px}.dga-mb-112{margin-bottom:448px}.dga-spacing-hor-120{height:480px}.dga-spacing-vert-120{width:480px}.dga-p-120{padding:480px}.dga-px-120{padding-inline:480px}.dga-py-120{padding-block:480px}.dga-pl-120{padding-left:480px}.dga-pr-120{padding-right:480px}.dga-pt-120{padding-top:480px}.dga-pb-120{padding-bottom:480px}.dga-mx-120{margin-inline:480px}.dga-my-120{margin-block:480px}.dga-ml-120{margin-left:480px}.dga-mr-120{margin-right:480px}.dga-mt-120{margin-top:480px}.dga-mb-120{margin-bottom:480px}.dga-radius-small{border-radius:2px}.dga-radius-small-t{border-radius:2px 2px 0 0}.dga-radius-small-tl{border-radius:2px 0px 0 0}.dga-radius-small-tr{border-radius:0px 2px 0 0}.dga-radius-small-b{border-radius:0 0 2px 2px}.dga-radius-small-bl{border-radius:0 0 2px 0px}.dga-radius-small-br{border-radius:0 0 0px 2px}.dga-radius-medium{border-radius:4px}.dga-radius-medium-t{border-radius:4px 4px 0 0}.dga-radius-medium-tl{border-radius:4px 0px 0 0}.dga-radius-medium-tr{border-radius:0px 4px 0 0}.dga-radius-medium-b{border-radius:0 0 4px 4px}.dga-radius-medium-bl{border-radius:0 0 4px 0px}.dga-radius-medium-br{border-radius:0 0 0px 4px}.dga-radius-large{border-radius:8px}.dga-radius-large-t{border-radius:8px 8px 0 0}.dga-radius-large-tl{border-radius:8px 0px 0 0}.dga-radius-large-tr{border-radius:0px 8px 0 0}.dga-radius-large-b{border-radius:0 0 8px 8px}.dga-radius-large-bl{border-radius:0 0 8px 0px}.dga-radius-large-br{border-radius:0 0 0px 8px}.dga-radius-xlarge{border-radius:12px}.dga-radius-xlarge-t{border-radius:12px 12px 0 0}.dga-radius-xlarge-tl{border-radius:12px 0px 0 0}.dga-radius-xlarge-tr{border-radius:0px 12px 0 0}.dga-radius-xlarge-b{border-radius:0 0 12px 12px}.dga-radius-xlarge-bl{border-radius:0 0 12px 0px}.dga-radius-xlarge-br{border-radius:0 0 0px 12px}.dga-radius-none{border-radius:0px}.dga-radius-circular{border-radius:100%}.dga-flex{display:flex}.dga-flex-column{display:flex;flex-direction:column}.dga-flex-center{display:flex;align-items:center;justify-content:center}.dga-flex-center-y{display:flex;align-items:center}.dga-flex-center-x{display:flex;justify-content:center}.dga-flex-between{display:flex;justify-content:space-between}.dga-flex-wrap{flex-wrap:wrap}.dga-flex-align-stretch{align-items:stretch}.dga-flex-align-start{align-items:flex-start}.dga-flex-align-end{align-items:flex-end}.dga-flex-justify-end{justify-content:flex-end}.dga-flex-justify-start{justify-content:flex-start}.dga-text-right{text-align:right}.dga-text-left{text-align:left}.dga-text-center{text-align:center}.dga-shadow-xs{box-shadow:var(--shadow-xs)}.dga-shadow-sm{box-shadow:var(--shadow-sm)}.dga-shadow-md,.input.focus{box-shadow:var(--shadow-md)}.dga-shadow-lg{box-shadow:var(--shadow-lg)}.dga-shadow-xl,.dga-breadcrumb-dropdown{box-shadow:var(--shadow-xl)}.dga-shadow-2xl,.date-picker-root,.menu{box-shadow:var(--shadow-2xl)}.dga-shadow-3xl{box-shadow:var(--shadow-3xl)}.dga-ver-divider{width:1px;height:48px;background:var(--colors-alpha-alpha-black-20);margin-inline:var(--spacing-xl)}@media only screen and (max-width: 37.5em){.dga-xs-hide{display:none}}.dga-flex-justify-start{justify-content:start}.dga-flex-justify-end{justify-content:end}.dga-flex-justify-center{justify-content:center}.dga-flex-justify-between{justify-content:between}.dga-flex-justify-around{justify-content:around}.dga-flex-align-start{align-items:start}.dga-flex-align-end{align-items:end}.dga-flex-align-center{align-items:center}.dga-flex-align-stretch{align-items:stretch}";

/*
 Stencil Client Platform v4.36.0 | MIT Licensed | https://stenciljs.com
 */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/utils/constants.ts
var SVG_NS = "http://www.w3.org/2000/svg";
var HTML_NS = "http://www.w3.org/1999/xhtml";

// src/client/client-host-ref.ts
var getHostRef = (ref) => {
  if (ref.__stencil__getHostRef) {
    return ref.__stencil__getHostRef();
  }
  return void 0;
};
var registerInstance = (lazyInstance, hostRef) => {
  lazyInstance.__stencil__getHostRef = () => hostRef;
  hostRef.$lazyInstance$ = lazyInstance;
};
var registerHost = (hostElement, cmpMeta) => {
  const hostRef = {
    $flags$: 0,
    $hostElement$: hostElement,
    $cmpMeta$: cmpMeta,
    $instanceValues$: /* @__PURE__ */ new Map()
  };
  {
    hostRef.$onInstancePromise$ = new Promise((r) => hostRef.$onInstanceResolve$ = r);
  }
  {
    hostRef.$onReadyPromise$ = new Promise((r) => hostRef.$onReadyResolve$ = r);
    hostElement["s-p"] = [];
    hostElement["s-rc"] = [];
  }
  const ref = hostRef;
  hostElement.__stencil__getHostRef = () => ref;
  return ref;
};
var isMemberInElement = (elm, memberName) => memberName in elm;
var consoleError = (e, el) => (0, console.error)(e, el);

// src/client/client-load-module.ts
var cmpModules = /* @__PURE__ */ new Map();
var loadModule = (cmpMeta, hostRef, hmrVersionId) => {
  const exportName = cmpMeta.$tagName$.replace(/-/g, "_");
  const bundleId = cmpMeta.$lazyBundleId$;
  if (!bundleId) {
    return void 0;
  }
  const module = cmpModules.get(bundleId) ;
  if (module) {
    return module[exportName];
  }
  /*!__STENCIL_STATIC_IMPORT_SWITCH__*/
  return import(
    /* @vite-ignore */
    /* webpackInclude: /\.entry\.js$/ */
    /* webpackExclude: /\.system\.entry\.js$/ */
    /* webpackMode: "lazy" */
    `./${bundleId}.entry.js${""}`
  ).then(
    (importedModule) => {
      {
        cmpModules.set(bundleId, importedModule);
      }
      return importedModule[exportName];
    },
    (e) => {
      consoleError(e, hostRef.$hostElement$);
    }
  );
};

// src/client/client-style.ts
var styles = /* @__PURE__ */ new Map();
var HYDRATED_CSS = "{visibility:hidden}.hydrated{visibility:inherit}";
var SLOT_FB_CSS = "slot-fb{display:contents}slot-fb[hidden]{display:none}";
var XLINK_NS = "http://www.w3.org/1999/xlink";
var win = typeof window !== "undefined" ? window : {};
var plt = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (h2) => h2(),
  raf: (h2) => requestAnimationFrame(h2),
  ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
  rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
  ce: (eventName, opts) => new CustomEvent(eventName, opts)
};
var supportsListenerOptions = /* @__PURE__ */ (() => {
  var _a;
  let supportsListenerOptions2 = false;
  try {
    (_a = win.document) == null ? void 0 : _a.addEventListener(
      "e",
      null,
      Object.defineProperty({}, "passive", {
        get() {
          supportsListenerOptions2 = true;
        }
      })
    );
  } catch (e) {
  }
  return supportsListenerOptions2;
})();
var promiseResolve = (v) => Promise.resolve(v);
var supportsConstructableStylesheets = /* @__PURE__ */ (() => {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === "function";
  } catch (e) {
  }
  return false;
})() ;
var supportsMutableAdoptedStyleSheets = supportsConstructableStylesheets ? /* @__PURE__ */ (() => !!win.document && Object.getOwnPropertyDescriptor(win.document.adoptedStyleSheets, "length").writable)() : false;
var queuePending = false;
var queueDomReads = [];
var queueDomWrites = [];
var queueTask = (queue, write) => (cb) => {
  queue.push(cb);
  if (!queuePending) {
    queuePending = true;
    if (write && plt.$flags$ & 4 /* queueSync */) {
      nextTick(flush);
    } else {
      plt.raf(flush);
    }
  }
};
var consume = (queue) => {
  for (let i2 = 0; i2 < queue.length; i2++) {
    try {
      queue[i2](performance.now());
    } catch (e) {
      consoleError(e);
    }
  }
  queue.length = 0;
};
var flush = () => {
  consume(queueDomReads);
  {
    consume(queueDomWrites);
    if (queuePending = queueDomReads.length > 0) {
      plt.raf(flush);
    }
  }
};
var nextTick = (cb) => promiseResolve().then(cb);
var writeTask = /* @__PURE__ */ queueTask(queueDomWrites, true);

// src/runtime/asset-path.ts
var getAssetPath = (path) => {
  const assetUrl = new URL(path, plt.$resourcesUrl$);
  return assetUrl.origin !== win.location.origin ? assetUrl.href : assetUrl.pathname;
};

// src/utils/helpers.ts
var isDef = (v) => v != null && v !== void 0;
var isComplexType = (o) => {
  o = typeof o;
  return o === "object" || o === "function";
};

// src/utils/query-nonce-meta-tag-content.ts
function queryNonceMetaTagContent(doc) {
  var _a, _b, _c;
  return (_c = (_b = (_a = doc.head) == null ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : _b.getAttribute("content")) != null ? _c : void 0;
}

// src/utils/regular-expression.ts
var escapeRegExpSpecialCharacters = (text) => {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

// src/utils/result.ts
var result_exports = {};
__export(result_exports, {
  err: () => err,
  map: () => map,
  ok: () => ok,
  unwrap: () => unwrap,
  unwrapErr: () => unwrapErr
});
var ok = (value) => ({
  isOk: true,
  isErr: false,
  value
});
var err = (value) => ({
  isOk: false,
  isErr: true,
  value
});
function map(result, fn) {
  if (result.isOk) {
    const val = fn(result.value);
    if (val instanceof Promise) {
      return val.then((newVal) => ok(newVal));
    } else {
      return ok(val);
    }
  }
  if (result.isErr) {
    const value = result.value;
    return err(value);
  }
  throw "should never get here";
}
var unwrap = (result) => {
  if (result.isOk) {
    return result.value;
  } else {
    throw result.value;
  }
};
var unwrapErr = (result) => {
  if (result.isErr) {
    return result.value;
  } else {
    throw result.value;
  }
};

// src/utils/style.ts
function createStyleSheetIfNeededAndSupported(styles2) {
  if (!supportsConstructableStylesheets) return void 0;
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(styles2);
  return sheet;
}

// src/utils/shadow-root.ts
var globalStyleSheet;
function createShadowRoot(cmpMeta) {
  var _a;
  const shadowRoot = this.attachShadow({ mode: "open" });
  if (globalStyleSheet === void 0) globalStyleSheet = (_a = createStyleSheetIfNeededAndSupported(globalStyles)) != null ? _a : null;
  if (globalStyleSheet) {
    if (supportsMutableAdoptedStyleSheets) {
      shadowRoot.adoptedStyleSheets.push(globalStyleSheet);
    } else {
      shadowRoot.adoptedStyleSheets = [...shadowRoot.adoptedStyleSheets, globalStyleSheet];
    }
  }
}
var updateFallbackSlotVisibility = (elm) => {
  const childNodes = internalCall(elm, "childNodes");
  if (elm.tagName && elm.tagName.includes("-") && elm["s-cr"] && elm.tagName !== "SLOT-FB") {
    getHostSlotNodes(childNodes, elm.tagName).forEach((slotNode) => {
      if (slotNode.nodeType === 1 /* ElementNode */ && slotNode.tagName === "SLOT-FB") {
        if (getSlotChildSiblings(slotNode, getSlotName(slotNode), false).length) {
          slotNode.hidden = true;
        } else {
          slotNode.hidden = false;
        }
      }
    });
  }
  let i2 = 0;
  for (i2 = 0; i2 < childNodes.length; i2++) {
    const childNode = childNodes[i2];
    if (childNode.nodeType === 1 /* ElementNode */ && internalCall(childNode, "childNodes").length) {
      updateFallbackSlotVisibility(childNode);
    }
  }
};
var getSlottedChildNodes = (childNodes) => {
  const result = [];
  for (let i2 = 0; i2 < childNodes.length; i2++) {
    const slottedNode = childNodes[i2]["s-nr"] || void 0;
    if (slottedNode && slottedNode.isConnected) {
      result.push(slottedNode);
    }
  }
  return result;
};
function getHostSlotNodes(childNodes, hostName, slotName) {
  let i2 = 0;
  let slottedNodes = [];
  let childNode;
  for (; i2 < childNodes.length; i2++) {
    childNode = childNodes[i2];
    if (childNode["s-sr"] && (!hostName || childNode["s-hn"] === hostName) && (slotName === void 0)) {
      slottedNodes.push(childNode);
    }
    slottedNodes = [...slottedNodes, ...getHostSlotNodes(childNode.childNodes, hostName, slotName)];
  }
  return slottedNodes;
}
var getSlotChildSiblings = (slot, slotName, includeSlot = true) => {
  const childNodes = [];
  if (includeSlot && slot["s-sr"] || !slot["s-sr"]) childNodes.push(slot);
  let node = slot;
  while (node = node.nextSibling) {
    if (getSlotName(node) === slotName && (includeSlot || !node["s-sr"])) childNodes.push(node);
  }
  return childNodes;
};
var isNodeLocatedInSlot = (nodeToRelocate, slotName) => {
  if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
    if (nodeToRelocate.getAttribute("slot") === null && slotName === "") {
      return true;
    }
    if (nodeToRelocate.getAttribute("slot") === slotName) {
      return true;
    }
    return false;
  }
  if (nodeToRelocate["s-sn"] === slotName) {
    return true;
  }
  return slotName === "";
};
var getSlotName = (node) => typeof node["s-sn"] === "string" ? node["s-sn"] : node.nodeType === 1 && node.getAttribute("slot") || void 0;
function patchSlotNode(node) {
  if (node.assignedElements || node.assignedNodes || !node["s-sr"]) return;
  const assignedFactory = (elementsOnly) => (function(opts) {
    const toReturn = [];
    const slotName = this["s-sn"];
    if (opts == null ? void 0 : opts.flatten) {
      console.error(`
          Flattening is not supported for Stencil non-shadow slots.
          You can use \`.childNodes\` to nested slot fallback content.
          If you have a particular use case, please open an issue on the Stencil repo.
        `);
    }
    const parent = this["s-cr"].parentElement;
    const slottedNodes = parent.__childNodes ? parent.childNodes : getSlottedChildNodes(parent.childNodes);
    slottedNodes.forEach((n) => {
      if (slotName === getSlotName(n)) {
        toReturn.push(n);
      }
    });
    if (elementsOnly) {
      return toReturn.filter((n) => n.nodeType === 1 /* ElementNode */);
    }
    return toReturn;
  }).bind(node);
  node.assignedElements = assignedFactory(true);
  node.assignedNodes = assignedFactory(false);
}
function internalCall(node, method) {
  if ("__" + method in node) {
    const toReturn = node["__" + method];
    if (typeof toReturn !== "function") return toReturn;
    return toReturn.bind(node);
  } else {
    if (typeof node[method] !== "function") return node[method];
    return node[method].bind(node);
  }
}
var createTime = (fnName, tagName = "") => {
  {
    return () => {
      return;
    };
  }
};
var uniqueTime = (key, measureText) => {
  {
    return () => {
      return;
    };
  }
};
var rootAppliedStyles = /* @__PURE__ */ new WeakMap();
var registerStyle = (scopeId2, cssText, allowCS) => {
  let style = styles.get(scopeId2);
  if (supportsConstructableStylesheets && allowCS) {
    style = style || new CSSStyleSheet();
    if (typeof style === "string") {
      style = cssText;
    } else {
      style.replaceSync(cssText);
    }
  } else {
    style = cssText;
  }
  styles.set(scopeId2, style);
};
var addStyle = (styleContainerNode, cmpMeta, mode) => {
  var _a;
  const scopeId2 = getScopeId(cmpMeta);
  const style = styles.get(scopeId2);
  if (!win.document) {
    return scopeId2;
  }
  styleContainerNode = styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : win.document;
  if (style) {
    if (typeof style === "string") {
      styleContainerNode = styleContainerNode.head || styleContainerNode;
      let appliedStyles = rootAppliedStyles.get(styleContainerNode);
      let styleElm;
      if (!appliedStyles) {
        rootAppliedStyles.set(styleContainerNode, appliedStyles = /* @__PURE__ */ new Set());
      }
      if (!appliedStyles.has(scopeId2)) {
        {
          styleElm = win.document.createElement("style");
          styleElm.innerHTML = style;
          const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(win.document);
          if (nonce != null) {
            styleElm.setAttribute("nonce", nonce);
          }
          if (!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */)) {
            if (styleContainerNode.nodeName === "HEAD") {
              const preconnectLinks = styleContainerNode.querySelectorAll("link[rel=preconnect]");
              const referenceNode2 = preconnectLinks.length > 0 ? preconnectLinks[preconnectLinks.length - 1].nextSibling : styleContainerNode.querySelector("style");
              styleContainerNode.insertBefore(
                styleElm,
                (referenceNode2 == null ? void 0 : referenceNode2.parentNode) === styleContainerNode ? referenceNode2 : null
              );
            } else if ("host" in styleContainerNode) {
              if (supportsConstructableStylesheets) {
                const stylesheet = new CSSStyleSheet();
                stylesheet.replaceSync(style);
                if (supportsMutableAdoptedStyleSheets) {
                  styleContainerNode.adoptedStyleSheets.unshift(stylesheet);
                } else {
                  styleContainerNode.adoptedStyleSheets = [stylesheet, ...styleContainerNode.adoptedStyleSheets];
                }
              } else {
                const existingStyleContainer = styleContainerNode.querySelector("style");
                if (existingStyleContainer) {
                  existingStyleContainer.innerHTML = style + existingStyleContainer.innerHTML;
                } else {
                  styleContainerNode.prepend(styleElm);
                }
              }
            } else {
              styleContainerNode.append(styleElm);
            }
          }
          if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            styleContainerNode.insertBefore(styleElm, null);
          }
        }
        if (cmpMeta.$flags$ & 4 /* hasSlotRelocation */) {
          styleElm.innerHTML += SLOT_FB_CSS;
        }
        if (appliedStyles) {
          appliedStyles.add(scopeId2);
        }
      }
    } else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
      if (supportsMutableAdoptedStyleSheets) {
        styleContainerNode.adoptedStyleSheets.push(style);
      } else {
        styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
      }
    }
  }
  return scopeId2;
};
var attachStyles = (hostRef) => {
  const cmpMeta = hostRef.$cmpMeta$;
  const elm = hostRef.$hostElement$;
  const flags = cmpMeta.$flags$;
  const endAttachStyles = createTime("attachStyles", cmpMeta.$tagName$);
  const scopeId2 = addStyle(
    elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(),
    cmpMeta);
  if (flags & 10 /* needsScopedEncapsulation */) {
    elm["s-sc"] = scopeId2;
    elm.classList.add(scopeId2 + "-h");
  }
  endAttachStyles();
};
var getScopeId = (cmp, mode) => "sc-" + (cmp.$tagName$);
var h = (nodeName, vnodeData, ...children) => {
  let child = null;
  let key = null;
  let slotName = null;
  let simple = false;
  let lastSimple = false;
  const vNodeChildren = [];
  const walk = (c) => {
    for (let i2 = 0; i2 < c.length; i2++) {
      child = c[i2];
      if (Array.isArray(child)) {
        walk(child);
      } else if (child != null && typeof child !== "boolean") {
        if (simple = typeof nodeName !== "function" && !isComplexType(child)) {
          child = String(child);
        }
        if (simple && lastSimple) {
          vNodeChildren[vNodeChildren.length - 1].$text$ += child;
        } else {
          vNodeChildren.push(simple ? newVNode(null, child) : child);
        }
        lastSimple = simple;
      }
    }
  };
  walk(children);
  if (vnodeData) {
    if (vnodeData.key) {
      key = vnodeData.key;
    }
    if (vnodeData.name) {
      slotName = vnodeData.name;
    }
    {
      const classData = vnodeData.className || vnodeData.class;
      if (classData) {
        vnodeData.class = typeof classData !== "object" ? classData : Object.keys(classData).filter((k) => classData[k]).join(" ");
      }
    }
  }
  if (typeof nodeName === "function") {
    return nodeName(
      vnodeData === null ? {} : vnodeData,
      vNodeChildren,
      vdomFnUtils
    );
  }
  const vnode = newVNode(nodeName, null);
  vnode.$attrs$ = vnodeData;
  if (vNodeChildren.length > 0) {
    vnode.$children$ = vNodeChildren;
  }
  {
    vnode.$key$ = key;
  }
  {
    vnode.$name$ = slotName;
  }
  return vnode;
};
var newVNode = (tag, text) => {
  const vnode = {
    $flags$: 0,
    $tag$: tag,
    $text$: text,
    $elm$: null,
    $children$: null
  };
  {
    vnode.$attrs$ = null;
  }
  {
    vnode.$key$ = null;
  }
  {
    vnode.$name$ = null;
  }
  return vnode;
};
var Host = {};
var isHost = (node) => node && node.$tag$ === Host;
var vdomFnUtils = {
  forEach: (children, cb) => children.map(convertToPublic).forEach(cb),
  map: (children, cb) => children.map(convertToPublic).map(cb).map(convertToPrivate)
};
var convertToPublic = (node) => ({
  vattrs: node.$attrs$,
  vchildren: node.$children$,
  vkey: node.$key$,
  vname: node.$name$,
  vtag: node.$tag$,
  vtext: node.$text$
});
var convertToPrivate = (node) => {
  if (typeof node.vtag === "function") {
    const vnodeData = { ...node.vattrs };
    if (node.vkey) {
      vnodeData.key = node.vkey;
    }
    if (node.vname) {
      vnodeData.name = node.vname;
    }
    return h(node.vtag, vnodeData, ...node.vchildren || []);
  }
  const vnode = newVNode(node.vtag, node.vtext);
  vnode.$attrs$ = node.vattrs;
  vnode.$children$ = node.vchildren;
  vnode.$key$ = node.vkey;
  vnode.$name$ = node.vname;
  return vnode;
};
var createSupportsRuleRe = (selector) => {
  const safeSelector2 = escapeRegExpSpecialCharacters(selector);
  return new RegExp(
    // First capture group: match any context before the selector that's not inside @supports selector()
    // Using negative lookahead to avoid matching inside @supports selector(...) condition
    `(^|[^@]|@(?!supports\\s+selector\\s*\\([^{]*?${safeSelector2}))(${safeSelector2}\\b)`,
    "g"
  );
};
createSupportsRuleRe("::slotted");
createSupportsRuleRe(":host");
createSupportsRuleRe(":host-context");
var parsePropertyValue = (propValue, propType, isFormAssociated) => {
  if (propValue != null && !isComplexType(propValue)) {
    if (propType & 4 /* Boolean */) {
      {
        return propValue === "false" ? false : propValue === "" || !!propValue;
      }
    }
    if (propType & 2 /* Number */) {
      return typeof propValue === "string" ? parseFloat(propValue) : typeof propValue === "number" ? propValue : NaN;
    }
    if (propType & 1 /* String */) {
      return String(propValue);
    }
    return propValue;
  }
  return propValue;
};
var getElement = (ref) => {
  var _a;
  return (_a = getHostRef(ref)) == null ? void 0 : _a.$hostElement$ ;
};

// src/runtime/event-emitter.ts
var createEvent = (ref, name, flags) => {
  const elm = getElement(ref);
  return {
    emit: (detail) => {
      return emitEvent(elm, name, {
        bubbles: true,
        composed: true,
        cancelable: true,
        detail
      });
    }
  };
};
var emitEvent = (elm, name, opts) => {
  const ev = plt.ce(name, opts);
  elm.dispatchEvent(ev);
  return ev;
};
var setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags, initialRender) => {
  if (oldValue === newValue) {
    return;
  }
  let isProp = isMemberInElement(elm, memberName);
  let ln = memberName.toLowerCase();
  if (memberName === "class") {
    const classList = elm.classList;
    const oldClasses = parseClassList(oldValue);
    let newClasses = parseClassList(newValue);
    {
      classList.remove(...oldClasses.filter((c) => c && !newClasses.includes(c)));
      classList.add(...newClasses.filter((c) => c && !oldClasses.includes(c)));
    }
  } else if (memberName === "style") {
    {
      for (const prop in oldValue) {
        if (!newValue || newValue[prop] == null) {
          if (prop.includes("-")) {
            elm.style.removeProperty(prop);
          } else {
            elm.style[prop] = "";
          }
        }
      }
    }
    for (const prop in newValue) {
      if (!oldValue || newValue[prop] !== oldValue[prop]) {
        if (prop.includes("-")) {
          elm.style.setProperty(prop, newValue[prop]);
        } else {
          elm.style[prop] = newValue[prop];
        }
      }
    }
  } else if (memberName === "key") ; else if (memberName === "ref") {
    if (newValue) {
      newValue(elm);
    }
  } else if ((!isProp ) && memberName[0] === "o" && memberName[1] === "n") {
    if (memberName[2] === "-") {
      memberName = memberName.slice(3);
    } else if (isMemberInElement(win, ln)) {
      memberName = ln.slice(2);
    } else {
      memberName = ln[2] + memberName.slice(3);
    }
    if (oldValue || newValue) {
      const capture = memberName.endsWith(CAPTURE_EVENT_SUFFIX);
      memberName = memberName.replace(CAPTURE_EVENT_REGEX, "");
      if (oldValue) {
        plt.rel(elm, memberName, oldValue, capture);
      }
      if (newValue) {
        plt.ael(elm, memberName, newValue, capture);
      }
    }
  } else {
    const isComplex = isComplexType(newValue);
    if ((isProp || isComplex && newValue !== null) && !isSvg) {
      try {
        if (!elm.tagName.includes("-")) {
          const n = newValue == null ? "" : newValue;
          if (memberName === "list") {
            isProp = false;
          } else if (oldValue == null || elm[memberName] != n) {
            if (typeof elm.__lookupSetter__(memberName) === "function") {
              elm[memberName] = n;
            } else {
              elm.setAttribute(memberName, n);
            }
          }
        } else if (elm[memberName] !== newValue) {
          elm[memberName] = newValue;
        }
      } catch (e) {
      }
    }
    let xlink = false;
    {
      if (ln !== (ln = ln.replace(/^xlink\:?/, ""))) {
        memberName = ln;
        xlink = true;
      }
    }
    if (newValue == null || newValue === false) {
      if (newValue !== false || elm.getAttribute(memberName) === "") {
        if (xlink) {
          elm.removeAttributeNS(XLINK_NS, memberName);
        } else {
          elm.removeAttribute(memberName);
        }
      }
    } else if ((!isProp || flags & 4 /* isHost */ || isSvg) && !isComplex && elm.nodeType === 1 /* ElementNode */) {
      newValue = newValue === true ? "" : newValue;
      if (xlink) {
        elm.setAttributeNS(XLINK_NS, memberName, newValue);
      } else {
        elm.setAttribute(memberName, newValue);
      }
    }
  }
};
var parseClassListRegex = /\s/;
var parseClassList = (value) => {
  if (typeof value === "object" && value && "baseVal" in value) {
    value = value.baseVal;
  }
  if (!value || typeof value !== "string") {
    return [];
  }
  return value.split(parseClassListRegex);
};
var CAPTURE_EVENT_SUFFIX = "Capture";
var CAPTURE_EVENT_REGEX = new RegExp(CAPTURE_EVENT_SUFFIX + "$");

// src/runtime/vdom/update-element.ts
var updateElement = (oldVnode, newVnode, isSvgMode2, isInitialRender) => {
  const elm = newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
  const oldVnodeAttrs = oldVnode && oldVnode.$attrs$ || {};
  const newVnodeAttrs = newVnode.$attrs$ || {};
  {
    for (const memberName of sortedAttrNames(Object.keys(oldVnodeAttrs))) {
      if (!(memberName in newVnodeAttrs)) {
        setAccessor(
          elm,
          memberName,
          oldVnodeAttrs[memberName],
          void 0,
          isSvgMode2,
          newVnode.$flags$);
      }
    }
  }
  for (const memberName of sortedAttrNames(Object.keys(newVnodeAttrs))) {
    setAccessor(
      elm,
      memberName,
      oldVnodeAttrs[memberName],
      newVnodeAttrs[memberName],
      isSvgMode2,
      newVnode.$flags$);
  }
};
function sortedAttrNames(attrNames) {
  return attrNames.includes("ref") ? (
    // we need to sort these to ensure that `'ref'` is the last attr
    [...attrNames.filter((attr) => attr !== "ref"), "ref"]
  ) : (
    // no need to sort, return the original array
    attrNames
  );
}

// src/runtime/vdom/vdom-render.ts
var scopeId;
var contentRef;
var hostTagName;
var useNativeShadowDom = false;
var checkSlotFallbackVisibility = false;
var checkSlotRelocate = false;
var isSvgMode = false;
var createElm = (oldParentVNode, newParentVNode, childIndex) => {
  var _a;
  const newVNode2 = newParentVNode.$children$[childIndex];
  let i2 = 0;
  let elm;
  let childNode;
  let oldVNode;
  if (!useNativeShadowDom) {
    checkSlotRelocate = true;
    if (newVNode2.$tag$ === "slot") {
      newVNode2.$flags$ |= newVNode2.$children$ ? (
        // slot element has fallback content
        // still create an element that "mocks" the slot element
        2 /* isSlotFallback */
      ) : (
        // slot element does not have fallback content
        // create an html comment we'll use to always reference
        // where actual slot content should sit next to
        1 /* isSlotReference */
      );
    }
  }
  if (newVNode2.$text$ !== null) {
    elm = newVNode2.$elm$ = win.document.createTextNode(newVNode2.$text$);
  } else if (newVNode2.$flags$ & 1 /* isSlotReference */) {
    elm = newVNode2.$elm$ = win.document.createTextNode("");
    {
      updateElement(null, newVNode2, isSvgMode);
    }
  } else {
    if (!isSvgMode) {
      isSvgMode = newVNode2.$tag$ === "svg";
    }
    if (!win.document) {
      throw new Error(
        "You are trying to render a Stencil component in an environment that doesn't support the DOM. Make sure to populate the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window/window) object before rendering a component."
      );
    }
    elm = newVNode2.$elm$ = win.document.createElementNS(
      isSvgMode ? SVG_NS : HTML_NS,
      !useNativeShadowDom && BUILD.slotRelocation && newVNode2.$flags$ & 2 /* isSlotFallback */ ? "slot-fb" : newVNode2.$tag$
    ) ;
    if (isSvgMode && newVNode2.$tag$ === "foreignObject") {
      isSvgMode = false;
    }
    {
      updateElement(null, newVNode2, isSvgMode);
    }
    if (isDef(scopeId) && elm["s-si"] !== scopeId) {
      elm.classList.add(elm["s-si"] = scopeId);
    }
    if (newVNode2.$children$) {
      for (i2 = 0; i2 < newVNode2.$children$.length; ++i2) {
        childNode = createElm(oldParentVNode, newVNode2, i2);
        if (childNode) {
          elm.appendChild(childNode);
        }
      }
    }
    {
      if (newVNode2.$tag$ === "svg") {
        isSvgMode = false;
      } else if (elm.tagName === "foreignObject") {
        isSvgMode = true;
      }
    }
  }
  elm["s-hn"] = hostTagName;
  {
    if (newVNode2.$flags$ & (2 /* isSlotFallback */ | 1 /* isSlotReference */)) {
      elm["s-sr"] = true;
      elm["s-cr"] = contentRef;
      elm["s-sn"] = newVNode2.$name$ || "";
      elm["s-rf"] = (_a = newVNode2.$attrs$) == null ? void 0 : _a.ref;
      patchSlotNode(elm);
      oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
      if (oldVNode && oldVNode.$tag$ === newVNode2.$tag$ && oldParentVNode.$elm$) {
        {
          putBackInOriginalLocation(oldParentVNode.$elm$, false);
        }
      }
      {
        addRemoveSlotScopedClass(contentRef, elm, newParentVNode.$elm$, oldParentVNode == null ? void 0 : oldParentVNode.$elm$);
      }
    }
  }
  return elm;
};
var putBackInOriginalLocation = (parentElm, recursive) => {
  plt.$flags$ |= 1 /* isTmpDisconnected */;
  const oldSlotChildNodes = Array.from(parentElm.__childNodes || parentElm.childNodes);
  for (let i2 = oldSlotChildNodes.length - 1; i2 >= 0; i2--) {
    const childNode = oldSlotChildNodes[i2];
    if (childNode["s-hn"] !== hostTagName && childNode["s-ol"]) {
      insertBefore(referenceNode(childNode).parentNode, childNode, referenceNode(childNode));
      childNode["s-ol"].remove();
      childNode["s-ol"] = void 0;
      childNode["s-sh"] = void 0;
      checkSlotRelocate = true;
    }
    if (recursive) {
      putBackInOriginalLocation(childNode, recursive);
    }
  }
  plt.$flags$ &= -2 /* isTmpDisconnected */;
};
var addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
  let containerElm = parentElm["s-cr"] && parentElm["s-cr"].parentNode || parentElm;
  let childNode;
  if (containerElm.shadowRoot && containerElm.tagName === hostTagName) {
    containerElm = containerElm.shadowRoot;
  }
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnodes[startIdx]) {
      childNode = createElm(null, parentVNode, startIdx);
      if (childNode) {
        vnodes[startIdx].$elm$ = childNode;
        insertBefore(containerElm, childNode, referenceNode(before) );
      }
    }
  }
};
var removeVnodes = (vnodes, startIdx, endIdx) => {
  for (let index = startIdx; index <= endIdx; ++index) {
    const vnode = vnodes[index];
    if (vnode) {
      const elm = vnode.$elm$;
      nullifyVNodeRefs(vnode);
      if (elm) {
        {
          checkSlotFallbackVisibility = true;
          if (elm["s-ol"]) {
            elm["s-ol"].remove();
          } else {
            putBackInOriginalLocation(elm, true);
          }
        }
        elm.remove();
      }
    }
  }
};
var updateChildren = (parentElm, oldCh, newVNode2, newCh, isInitialRender = false) => {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let idxInOld = 0;
  let i2 = 0;
  let oldEndIdx = oldCh.length - 1;
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  let newEndIdx = newCh.length - 1;
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let node;
  let elmToMove;
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null) {
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx];
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newStartVnode, isInitialRender)) {
      patch(oldStartVnode, newStartVnode, isInitialRender);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (isSameVnode(oldEndVnode, newEndVnode, isInitialRender)) {
      patch(oldEndVnode, newEndVnode, isInitialRender);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newEndVnode, isInitialRender)) {
      if ((oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot")) {
        putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
      }
      patch(oldStartVnode, newEndVnode, isInitialRender);
      insertBefore(parentElm, oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldEndVnode, newStartVnode, isInitialRender)) {
      if ((oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot")) {
        putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
      }
      patch(oldEndVnode, newStartVnode, isInitialRender);
      insertBefore(parentElm, oldEndVnode.$elm$, oldStartVnode.$elm$);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      idxInOld = -1;
      {
        for (i2 = oldStartIdx; i2 <= oldEndIdx; ++i2) {
          if (oldCh[i2] && oldCh[i2].$key$ !== null && oldCh[i2].$key$ === newStartVnode.$key$) {
            idxInOld = i2;
            break;
          }
        }
      }
      if (idxInOld >= 0) {
        elmToMove = oldCh[idxInOld];
        if (elmToMove.$tag$ !== newStartVnode.$tag$) {
          node = createElm(oldCh && oldCh[newStartIdx], newVNode2, idxInOld);
        } else {
          patch(elmToMove, newStartVnode, isInitialRender);
          oldCh[idxInOld] = void 0;
          node = elmToMove.$elm$;
        }
        newStartVnode = newCh[++newStartIdx];
      } else {
        node = createElm(oldCh && oldCh[newStartIdx], newVNode2, newStartIdx);
        newStartVnode = newCh[++newStartIdx];
      }
      if (node) {
        {
          insertBefore(
            referenceNode(oldStartVnode.$elm$).parentNode,
            node,
            referenceNode(oldStartVnode.$elm$)
          );
        }
      }
    }
  }
  if (oldStartIdx > oldEndIdx) {
    addVnodes(
      parentElm,
      newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$,
      newVNode2,
      newCh,
      newStartIdx,
      newEndIdx
    );
  } else if (newStartIdx > newEndIdx) {
    removeVnodes(oldCh, oldStartIdx, oldEndIdx);
  }
};
var isSameVnode = (leftVNode, rightVNode, isInitialRender = false) => {
  if (leftVNode.$tag$ === rightVNode.$tag$) {
    if (leftVNode.$tag$ === "slot") {
      return leftVNode.$name$ === rightVNode.$name$;
    }
    if (!isInitialRender) {
      return leftVNode.$key$ === rightVNode.$key$;
    }
    if (isInitialRender && !leftVNode.$key$ && rightVNode.$key$) {
      leftVNode.$key$ = rightVNode.$key$;
    }
    return true;
  }
  return false;
};
var referenceNode = (node) => node && node["s-ol"] || node;
var patch = (oldVNode, newVNode2, isInitialRender = false) => {
  const elm = newVNode2.$elm$ = oldVNode.$elm$;
  const oldChildren = oldVNode.$children$;
  const newChildren = newVNode2.$children$;
  const tag = newVNode2.$tag$;
  const text = newVNode2.$text$;
  let defaultHolder;
  if (text === null) {
    {
      isSvgMode = tag === "svg" ? true : tag === "foreignObject" ? false : isSvgMode;
    }
    {
      updateElement(oldVNode, newVNode2, isSvgMode);
    }
    if (oldChildren !== null && newChildren !== null) {
      updateChildren(elm, oldChildren, newVNode2, newChildren, isInitialRender);
    } else if (newChildren !== null) {
      if (oldVNode.$text$ !== null) {
        elm.textContent = "";
      }
      addVnodes(elm, null, newVNode2, newChildren, 0, newChildren.length - 1);
    } else if (
      // don't do this on initial render as it can cause non-hydrated content to be removed
      !isInitialRender && BUILD.updatable && oldChildren !== null
    ) {
      removeVnodes(oldChildren, 0, oldChildren.length - 1);
    } else ;
    if (isSvgMode && tag === "svg") {
      isSvgMode = false;
    }
  } else if ((defaultHolder = elm["s-cr"])) {
    defaultHolder.parentNode.textContent = text;
  } else if (oldVNode.$text$ !== text) {
    elm.data = text;
  }
};
var relocateNodes = [];
var markSlotContentForRelocation = (elm) => {
  let node;
  let hostContentNodes;
  let j;
  const children = elm.__childNodes || elm.childNodes;
  for (const childNode of children) {
    if (childNode["s-sr"] && (node = childNode["s-cr"]) && node.parentNode) {
      hostContentNodes = node.parentNode.__childNodes || node.parentNode.childNodes;
      const slotName = childNode["s-sn"];
      for (j = hostContentNodes.length - 1; j >= 0; j--) {
        node = hostContentNodes[j];
        if (!node["s-cn"] && !node["s-nr"] && node["s-hn"] !== childNode["s-hn"] && (true)) {
          if (isNodeLocatedInSlot(node, slotName)) {
            let relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
            checkSlotFallbackVisibility = true;
            node["s-sn"] = node["s-sn"] || slotName;
            if (relocateNodeData) {
              relocateNodeData.$nodeToRelocate$["s-sh"] = childNode["s-hn"];
              relocateNodeData.$slotRefNode$ = childNode;
            } else {
              node["s-sh"] = childNode["s-hn"];
              relocateNodes.push({
                $slotRefNode$: childNode,
                $nodeToRelocate$: node
              });
            }
            if (node["s-sr"]) {
              relocateNodes.map((relocateNode) => {
                if (isNodeLocatedInSlot(relocateNode.$nodeToRelocate$, node["s-sn"])) {
                  relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
                  if (relocateNodeData && !relocateNode.$slotRefNode$) {
                    relocateNode.$slotRefNode$ = relocateNodeData.$slotRefNode$;
                  }
                }
              });
            }
          } else if (!relocateNodes.some((r) => r.$nodeToRelocate$ === node)) {
            relocateNodes.push({
              $nodeToRelocate$: node
            });
          }
        }
      }
    }
    if (childNode.nodeType === 1 /* ElementNode */) {
      markSlotContentForRelocation(childNode);
    }
  }
};
var nullifyVNodeRefs = (vNode) => {
  {
    vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
    vNode.$children$ && vNode.$children$.map(nullifyVNodeRefs);
  }
};
var insertBefore = (parent, newNode, reference) => {
  if (typeof newNode["s-sn"] === "string" && !!newNode["s-sr"] && !!newNode["s-cr"]) {
    addRemoveSlotScopedClass(newNode["s-cr"], newNode, parent, newNode.parentElement);
  }
  {
    return parent == null ? void 0 : parent.insertBefore(newNode, reference);
  }
};
function addRemoveSlotScopedClass(reference, slotNode, newParent, oldParent) {
  var _a, _b;
  let scopeId2;
  if (reference && typeof slotNode["s-sn"] === "string" && !!slotNode["s-sr"] && reference.parentNode && reference.parentNode["s-sc"] && (scopeId2 = slotNode["s-si"] || reference.parentNode["s-sc"])) {
    const scopeName = slotNode["s-sn"];
    const hostName = slotNode["s-hn"];
    (_a = newParent.classList) == null ? void 0 : _a.add(scopeId2 + "-s");
    if (oldParent && ((_b = oldParent.classList) == null ? void 0 : _b.contains(scopeId2 + "-s"))) {
      let child = (oldParent.__childNodes || oldParent.childNodes)[0];
      let found = false;
      while (child) {
        if (child["s-sn"] !== scopeName && child["s-hn"] === hostName && !!child["s-sr"]) {
          found = true;
          break;
        }
        child = child.nextSibling;
      }
      if (!found) oldParent.classList.remove(scopeId2 + "-s");
    }
  }
}
var renderVdom = (hostRef, renderFnResults, isInitialLoad = false) => {
  var _a, _b, _c, _d;
  const hostElm = hostRef.$hostElement$;
  const cmpMeta = hostRef.$cmpMeta$;
  const oldVNode = hostRef.$vnode$ || newVNode(null, null);
  const isHostElement = isHost(renderFnResults);
  const rootVnode = isHostElement ? renderFnResults : h(null, null, renderFnResults);
  hostTagName = hostElm.tagName;
  if (cmpMeta.$attrsToReflect$) {
    rootVnode.$attrs$ = rootVnode.$attrs$ || {};
    cmpMeta.$attrsToReflect$.map(
      ([propName, attribute]) => rootVnode.$attrs$[attribute] = hostElm[propName]
    );
  }
  if (isInitialLoad && rootVnode.$attrs$) {
    for (const key of Object.keys(rootVnode.$attrs$)) {
      if (hostElm.hasAttribute(key) && !["key", "ref", "style", "class"].includes(key)) {
        rootVnode.$attrs$[key] = hostElm[key];
      }
    }
  }
  rootVnode.$tag$ = null;
  rootVnode.$flags$ |= 4 /* isHost */;
  hostRef.$vnode$ = rootVnode;
  rootVnode.$elm$ = oldVNode.$elm$ = hostElm.shadowRoot || hostElm ;
  {
    scopeId = hostElm["s-sc"];
  }
  useNativeShadowDom = !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) && !(cmpMeta.$flags$ & 128 /* shadowNeedsScopedCss */);
  {
    contentRef = hostElm["s-cr"];
    checkSlotFallbackVisibility = false;
  }
  patch(oldVNode, rootVnode, isInitialLoad);
  {
    plt.$flags$ |= 1 /* isTmpDisconnected */;
    if (checkSlotRelocate) {
      markSlotContentForRelocation(rootVnode.$elm$);
      for (const relocateData of relocateNodes) {
        const nodeToRelocate = relocateData.$nodeToRelocate$;
        if (!nodeToRelocate["s-ol"] && win.document) {
          const orgLocationNode = win.document.createTextNode("");
          orgLocationNode["s-nr"] = nodeToRelocate;
          insertBefore(nodeToRelocate.parentNode, nodeToRelocate["s-ol"] = orgLocationNode, nodeToRelocate);
        }
      }
      for (const relocateData of relocateNodes) {
        const nodeToRelocate = relocateData.$nodeToRelocate$;
        const slotRefNode = relocateData.$slotRefNode$;
        if (slotRefNode) {
          const parentNodeRef = slotRefNode.parentNode;
          let insertBeforeNode = slotRefNode.nextSibling;
          {
            let orgLocationNode = (_a = nodeToRelocate["s-ol"]) == null ? void 0 : _a.previousSibling;
            while (orgLocationNode) {
              let refNode = (_b = orgLocationNode["s-nr"]) != null ? _b : null;
              if (refNode && refNode["s-sn"] === nodeToRelocate["s-sn"] && parentNodeRef === (refNode.__parentNode || refNode.parentNode)) {
                refNode = refNode.nextSibling;
                while (refNode === nodeToRelocate || (refNode == null ? void 0 : refNode["s-sr"])) {
                  refNode = refNode == null ? void 0 : refNode.nextSibling;
                }
                if (!refNode || !refNode["s-nr"]) {
                  insertBeforeNode = refNode;
                  break;
                }
              }
              orgLocationNode = orgLocationNode.previousSibling;
            }
          }
          const parent = nodeToRelocate.__parentNode || nodeToRelocate.parentNode;
          const nextSibling = nodeToRelocate.__nextSibling || nodeToRelocate.nextSibling;
          if (!insertBeforeNode && parentNodeRef !== parent || nextSibling !== insertBeforeNode) {
            if (nodeToRelocate !== insertBeforeNode) {
              if (!nodeToRelocate["s-hn"] && nodeToRelocate["s-ol"]) {
                nodeToRelocate["s-hn"] = nodeToRelocate["s-ol"].parentNode.nodeName;
              }
              insertBefore(parentNodeRef, nodeToRelocate, insertBeforeNode);
              if (nodeToRelocate.nodeType === 1 /* ElementNode */ && nodeToRelocate.tagName !== "SLOT-FB") {
                nodeToRelocate.hidden = (_c = nodeToRelocate["s-ih"]) != null ? _c : false;
              }
            }
          }
          nodeToRelocate && typeof slotRefNode["s-rf"] === "function" && slotRefNode["s-rf"](slotRefNode);
        } else {
          if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
            if (isInitialLoad) {
              nodeToRelocate["s-ih"] = (_d = nodeToRelocate.hidden) != null ? _d : false;
            }
            nodeToRelocate.hidden = true;
          }
        }
      }
    }
    if (checkSlotFallbackVisibility) {
      updateFallbackSlotVisibility(rootVnode.$elm$);
    }
    plt.$flags$ &= -2 /* isTmpDisconnected */;
    relocateNodes.length = 0;
  }
  contentRef = void 0;
};

// src/runtime/update-component.ts
var attachToAncestor = (hostRef, ancestorComponent) => {
  if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent["s-p"]) {
    const index = ancestorComponent["s-p"].push(
      new Promise(
        (r) => hostRef.$onRenderResolve$ = () => {
          ancestorComponent["s-p"].splice(index - 1, 1);
          r();
        }
      )
    );
  }
};
var scheduleUpdate = (hostRef, isInitialLoad) => {
  {
    hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
  }
  if (hostRef.$flags$ & 4 /* isWaitingForChildren */) {
    hostRef.$flags$ |= 512 /* needsRerender */;
    return;
  }
  attachToAncestor(hostRef, hostRef.$ancestorComponent$);
  const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
  if (isInitialLoad) {
    queueMicrotask(() => {
      dispatch();
    });
    return;
  }
  return writeTask(dispatch) ;
};
var dispatchHooks = (hostRef, isInitialLoad) => {
  const elm = hostRef.$hostElement$;
  const endSchedule = createTime("scheduleUpdate", hostRef.$cmpMeta$.$tagName$);
  const instance = hostRef.$lazyInstance$ ;
  if (!instance) {
    throw new Error(
      `Can't render component <${elm.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`
    );
  }
  let maybePromise;
  if (isInitialLoad) {
    {
      hostRef.$flags$ |= 256 /* isListenReady */;
      if (hostRef.$queuedListeners$) {
        hostRef.$queuedListeners$.map(([methodName, event]) => safeCall(instance, methodName, event, elm));
        hostRef.$queuedListeners$ = void 0;
      }
    }
    maybePromise = safeCall(instance, "componentWillLoad", void 0, elm);
  } else {
    maybePromise = safeCall(instance, "componentWillUpdate", void 0, elm);
  }
  maybePromise = enqueue(maybePromise, () => safeCall(instance, "componentWillRender", void 0, elm));
  endSchedule();
  return enqueue(maybePromise, () => updateComponent(hostRef, instance, isInitialLoad));
};
var enqueue = (maybePromise, fn) => isPromisey(maybePromise) ? maybePromise.then(fn).catch((err2) => {
  console.error(err2);
  fn();
}) : fn();
var isPromisey = (maybePromise) => maybePromise instanceof Promise || maybePromise && maybePromise.then && typeof maybePromise.then === "function";
var updateComponent = async (hostRef, instance, isInitialLoad) => {
  var _a;
  const elm = hostRef.$hostElement$;
  const endUpdate = createTime("update", hostRef.$cmpMeta$.$tagName$);
  const rc = elm["s-rc"];
  if (isInitialLoad) {
    attachStyles(hostRef);
  }
  const endRender = createTime("render", hostRef.$cmpMeta$.$tagName$);
  {
    callRender(hostRef, instance, elm, isInitialLoad);
  }
  if (rc) {
    rc.map((cb) => cb());
    elm["s-rc"] = void 0;
  }
  endRender();
  endUpdate();
  {
    const childrenPromises = (_a = elm["s-p"]) != null ? _a : [];
    const postUpdate = () => postUpdateComponent(hostRef);
    if (childrenPromises.length === 0) {
      postUpdate();
    } else {
      Promise.all(childrenPromises).then(postUpdate);
      hostRef.$flags$ |= 4 /* isWaitingForChildren */;
      childrenPromises.length = 0;
    }
  }
};
var callRender = (hostRef, instance, elm, isInitialLoad) => {
  try {
    instance = instance.render() ;
    {
      hostRef.$flags$ &= -17 /* isQueuedForUpdate */;
    }
    {
      hostRef.$flags$ |= 2 /* hasRendered */;
    }
    {
      {
        {
          renderVdom(hostRef, instance, isInitialLoad);
        }
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }
  return null;
};
var postUpdateComponent = (hostRef) => {
  const tagName = hostRef.$cmpMeta$.$tagName$;
  const elm = hostRef.$hostElement$;
  const endPostUpdate = createTime("postUpdate", tagName);
  const instance = hostRef.$lazyInstance$ ;
  const ancestorComponent = hostRef.$ancestorComponent$;
  safeCall(instance, "componentDidRender", void 0, elm);
  if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
    hostRef.$flags$ |= 64 /* hasLoadedComponent */;
    {
      addHydratedFlag(elm);
    }
    safeCall(instance, "componentDidLoad", void 0, elm);
    endPostUpdate();
    {
      hostRef.$onReadyResolve$(elm);
      if (!ancestorComponent) {
        appDidLoad();
      }
    }
  } else {
    safeCall(instance, "componentDidUpdate", void 0, elm);
    endPostUpdate();
  }
  {
    hostRef.$onInstanceResolve$(elm);
  }
  {
    if (hostRef.$onRenderResolve$) {
      hostRef.$onRenderResolve$();
      hostRef.$onRenderResolve$ = void 0;
    }
    if (hostRef.$flags$ & 512 /* needsRerender */) {
      nextTick(() => scheduleUpdate(hostRef, false));
    }
    hostRef.$flags$ &= -517;
  }
};
var appDidLoad = (who) => {
  nextTick(() => emitEvent(win, "appload", { detail: { namespace: NAMESPACE } }));
};
var safeCall = (instance, method, arg, elm) => {
  if (instance && instance[method]) {
    try {
      return instance[method](arg);
    } catch (e) {
      consoleError(e, elm);
    }
  }
  return void 0;
};
var addHydratedFlag = (elm) => {
  var _a;
  return elm.classList.add((_a = BUILD.hydratedSelectorName) != null ? _a : "hydrated") ;
};

// src/runtime/set-value.ts
var getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
var setValue = (ref, propName, newVal, cmpMeta) => {
  const hostRef = getHostRef(ref);
  if (!hostRef) {
    return;
  }
  if (!hostRef) {
    throw new Error(
      `Couldn't find host element for "${cmpMeta.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/stenciljs/core/issues/5457).`
    );
  }
  const elm = hostRef.$hostElement$ ;
  const oldVal = hostRef.$instanceValues$.get(propName);
  const flags = hostRef.$flags$;
  const instance = hostRef.$lazyInstance$ ;
  newVal = parsePropertyValue(
    newVal,
    cmpMeta.$members$[propName][0]);
  const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
  const didValueChange = newVal !== oldVal && !areBothNaN;
  if ((!(flags & 8 /* isConstructingInstance */) || oldVal === void 0) && didValueChange) {
    hostRef.$instanceValues$.set(propName, newVal);
    if (instance) {
      if (cmpMeta.$watchers$ && flags & 128 /* isWatchReady */) {
        const watchMethods = cmpMeta.$watchers$[propName];
        if (watchMethods) {
          watchMethods.map((watchMethodName) => {
            try {
              instance[watchMethodName](newVal, oldVal, propName);
            } catch (e) {
              consoleError(e, elm);
            }
          });
        }
      }
      if ((flags & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
        if (instance.componentShouldUpdate) {
          if (instance.componentShouldUpdate(newVal, oldVal, propName) === false) {
            return;
          }
        }
        scheduleUpdate(hostRef, false);
      }
    }
  }
};

// src/runtime/proxy-component.ts
var proxyComponent = (Cstr, cmpMeta, flags) => {
  var _a, _b;
  const prototype = Cstr.prototype;
  if (cmpMeta.$members$ || (cmpMeta.$watchers$ || Cstr.watchers)) {
    if (Cstr.watchers && !cmpMeta.$watchers$) {
      cmpMeta.$watchers$ = Cstr.watchers;
    }
    const members = Object.entries((_a = cmpMeta.$members$) != null ? _a : {});
    members.map(([memberName, [memberFlags]]) => {
      if ((memberFlags & 31 /* Prop */ || (flags & 2 /* proxyState */) && memberFlags & 32 /* State */)) {
        const { get: origGetter, set: origSetter } = Object.getOwnPropertyDescriptor(prototype, memberName) || {};
        if (origGetter) cmpMeta.$members$[memberName][0] |= 2048 /* Getter */;
        if (origSetter) cmpMeta.$members$[memberName][0] |= 4096 /* Setter */;
        if (flags & 1 /* isElementConstructor */ || !origGetter) {
          Object.defineProperty(prototype, memberName, {
            get() {
              {
                if ((cmpMeta.$members$[memberName][0] & 2048 /* Getter */) === 0) {
                  return getValue(this, memberName);
                }
                const ref = getHostRef(this);
                const instance = ref ? ref.$lazyInstance$ : prototype;
                if (!instance) return;
                return instance[memberName];
              }
            },
            configurable: true,
            enumerable: true
          });
        }
        Object.defineProperty(prototype, memberName, {
          set(newValue) {
            const ref = getHostRef(this);
            if (!ref) {
              return;
            }
            if (origSetter) {
              const currentValue = memberFlags & 32 /* State */ ? this[memberName] : ref.$hostElement$[memberName];
              if (typeof currentValue === "undefined" && ref.$instanceValues$.get(memberName)) {
                newValue = ref.$instanceValues$.get(memberName);
              } else if (!ref.$instanceValues$.get(memberName) && currentValue) {
                ref.$instanceValues$.set(memberName, currentValue);
              }
              origSetter.apply(this, [
                parsePropertyValue(
                  newValue,
                  memberFlags)
              ]);
              newValue = memberFlags & 32 /* State */ ? this[memberName] : ref.$hostElement$[memberName];
              setValue(this, memberName, newValue, cmpMeta);
              return;
            }
            {
              if ((flags & 1 /* isElementConstructor */) === 0 || (cmpMeta.$members$[memberName][0] & 4096 /* Setter */) === 0) {
                setValue(this, memberName, newValue, cmpMeta);
                if (flags & 1 /* isElementConstructor */ && !ref.$lazyInstance$) {
                  ref.$onReadyPromise$.then(() => {
                    if (cmpMeta.$members$[memberName][0] & 4096 /* Setter */ && ref.$lazyInstance$[memberName] !== ref.$instanceValues$.get(memberName)) {
                      ref.$lazyInstance$[memberName] = newValue;
                    }
                  });
                }
                return;
              }
              const setterSetVal = () => {
                const currentValue = ref.$lazyInstance$[memberName];
                if (!ref.$instanceValues$.get(memberName) && currentValue) {
                  ref.$instanceValues$.set(memberName, currentValue);
                }
                ref.$lazyInstance$[memberName] = parsePropertyValue(
                  newValue,
                  memberFlags);
                setValue(this, memberName, ref.$lazyInstance$[memberName], cmpMeta);
              };
              if (ref.$lazyInstance$) {
                setterSetVal();
              } else {
                ref.$onReadyPromise$.then(() => setterSetVal());
              }
            }
          }
        });
      } else if (flags & 1 /* isElementConstructor */ && memberFlags & 64 /* Method */) {
        Object.defineProperty(prototype, memberName, {
          value(...args) {
            var _a2;
            const ref = getHostRef(this);
            return (_a2 = ref == null ? void 0 : ref.$onInstancePromise$) == null ? void 0 : _a2.then(() => {
              var _a3;
              return (_a3 = ref.$lazyInstance$) == null ? void 0 : _a3[memberName](...args);
            });
          }
        });
      }
    });
    if ((flags & 1 /* isElementConstructor */)) {
      const attrNameToPropName = /* @__PURE__ */ new Map();
      prototype.attributeChangedCallback = function(attrName, oldValue, newValue) {
        plt.jmp(() => {
          var _a2;
          const propName = attrNameToPropName.get(attrName);
          if (this.hasOwnProperty(propName) && BUILD.lazyLoad) {
            newValue = this[propName];
            delete this[propName];
          } else if (prototype.hasOwnProperty(propName) && typeof this[propName] === "number" && // cast type to number to avoid TS compiler issues
          this[propName] == newValue) {
            return;
          } else if (propName == null) {
            const hostRef = getHostRef(this);
            const flags2 = hostRef == null ? void 0 : hostRef.$flags$;
            if (hostRef && flags2 && !(flags2 & 8 /* isConstructingInstance */) && flags2 & 128 /* isWatchReady */ && newValue !== oldValue) {
              const instance = hostRef.$lazyInstance$ ;
              const entry = (_a2 = cmpMeta.$watchers$) == null ? void 0 : _a2[attrName];
              entry == null ? void 0 : entry.forEach((callbackName) => {
                if (instance[callbackName] != null) {
                  instance[callbackName].call(instance, newValue, oldValue, attrName);
                }
              });
            }
            return;
          }
          const propDesc = Object.getOwnPropertyDescriptor(prototype, propName);
          newValue = newValue === null && typeof this[propName] === "boolean" ? false : newValue;
          if (newValue !== this[propName] && (!propDesc.get || !!propDesc.set)) {
            this[propName] = newValue;
          }
        });
      };
      Cstr.observedAttributes = Array.from(
        /* @__PURE__ */ new Set([
          ...Object.keys((_b = cmpMeta.$watchers$) != null ? _b : {}),
          ...members.filter(([_, m]) => m[0] & 15 /* HasAttribute */).map(([propName, m]) => {
            var _a2;
            const attrName = m[1] || propName;
            attrNameToPropName.set(attrName, propName);
            if (m[0] & 512 /* ReflectAttr */) {
              (_a2 = cmpMeta.$attrsToReflect$) == null ? void 0 : _a2.push([propName, attrName]);
            }
            return attrName;
          })
        ])
      );
    }
  }
  return Cstr;
};

// src/runtime/initialize-component.ts
var initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId) => {
  let Cstr;
  if ((hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0) {
    hostRef.$flags$ |= 32 /* hasInitializedComponent */;
    const bundleId = cmpMeta.$lazyBundleId$;
    if (bundleId) {
      const CstrImport = loadModule(cmpMeta, hostRef);
      if (CstrImport && "then" in CstrImport) {
        const endLoad = uniqueTime();
        Cstr = await CstrImport;
        endLoad();
      } else {
        Cstr = CstrImport;
      }
      if (!Cstr) {
        throw new Error(`Constructor for "${cmpMeta.$tagName$}#${hostRef.$modeName$}" was not found`);
      }
      if (!Cstr.isProxied) {
        {
          cmpMeta.$watchers$ = Cstr.watchers;
        }
        proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
        Cstr.isProxied = true;
      }
      const endNewInstance = createTime("createInstance", cmpMeta.$tagName$);
      {
        hostRef.$flags$ |= 8 /* isConstructingInstance */;
      }
      try {
        new Cstr(hostRef);
      } catch (e) {
        consoleError(e, elm);
      }
      {
        hostRef.$flags$ &= -9 /* isConstructingInstance */;
      }
      {
        hostRef.$flags$ |= 128 /* isWatchReady */;
      }
      endNewInstance();
      fireConnectedCallback(hostRef.$lazyInstance$, elm);
    } else {
      Cstr = elm.constructor;
      const cmpTag = elm.localName;
      customElements.whenDefined(cmpTag).then(() => hostRef.$flags$ |= 128 /* isWatchReady */);
    }
    if (Cstr && Cstr.style) {
      let style;
      if (typeof Cstr.style === "string") {
        style = Cstr.style;
      }
      const scopeId2 = getScopeId(cmpMeta);
      if (!styles.has(scopeId2)) {
        const endRegisterStyles = createTime("registerStyles", cmpMeta.$tagName$);
        registerStyle(scopeId2, style, !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */));
        endRegisterStyles();
      }
    }
  }
  const ancestorComponent = hostRef.$ancestorComponent$;
  const schedule = () => scheduleUpdate(hostRef, true);
  if (ancestorComponent && ancestorComponent["s-rc"]) {
    ancestorComponent["s-rc"].push(schedule);
  } else {
    schedule();
  }
};
var fireConnectedCallback = (instance, elm) => {
  {
    safeCall(instance, "connectedCallback", void 0, elm);
  }
};

// src/runtime/connected-callback.ts
var connectedCallback = (elm) => {
  if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
    const hostRef = getHostRef(elm);
    if (!hostRef) {
      return;
    }
    const cmpMeta = hostRef.$cmpMeta$;
    const endConnected = createTime("connectedCallback", cmpMeta.$tagName$);
    if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
      hostRef.$flags$ |= 1 /* hasConnected */;
      {
        if (// TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
        cmpMeta.$flags$ & (4 /* hasSlotRelocation */ | 8 /* needsShadowDomShim */)) {
          setContentReference(elm);
        }
      }
      {
        let ancestorComponent = elm;
        while (ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host) {
          if (ancestorComponent["s-p"]) {
            attachToAncestor(hostRef, hostRef.$ancestorComponent$ = ancestorComponent);
            break;
          }
        }
      }
      if (cmpMeta.$members$) {
        Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
          if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
            const value = elm[memberName];
            delete elm[memberName];
            elm[memberName] = value;
          }
        });
      }
      {
        initializeComponent(elm, hostRef, cmpMeta);
      }
    } else {
      addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
      if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
        fireConnectedCallback(hostRef.$lazyInstance$, elm);
      } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
        hostRef.$onReadyPromise$.then(() => fireConnectedCallback(hostRef.$lazyInstance$, elm));
      }
    }
    endConnected();
  }
};
var setContentReference = (elm) => {
  if (!win.document) {
    return;
  }
  const contentRefElm = elm["s-cr"] = win.document.createComment(
    ""
  );
  contentRefElm["s-cn"] = true;
  insertBefore(elm, contentRefElm, elm.firstChild);
};
var disconnectInstance = (instance, elm) => {
  {
    safeCall(instance, "disconnectedCallback", void 0, elm || instance);
  }
};
var disconnectedCallback = async (elm) => {
  if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
    const hostRef = getHostRef(elm);
    {
      if (hostRef == null ? void 0 : hostRef.$rmListeners$) {
        hostRef.$rmListeners$.map((rmListener) => rmListener());
        hostRef.$rmListeners$ = void 0;
      }
    }
    if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
      disconnectInstance(hostRef.$lazyInstance$, elm);
    } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
      hostRef.$onReadyPromise$.then(() => disconnectInstance(hostRef.$lazyInstance$, elm));
    }
  }
  if (rootAppliedStyles.has(elm)) {
    rootAppliedStyles.delete(elm);
  }
  if (elm.shadowRoot && rootAppliedStyles.has(elm.shadowRoot)) {
    rootAppliedStyles.delete(elm.shadowRoot);
  }
};

// src/runtime/bootstrap-lazy.ts
var bootstrapLazy = (lazyBundles, options = {}) => {
  var _a;
  if (!win.document) {
    console.warn("Stencil: No document found. Skipping bootstrapping lazy components.");
    return;
  }
  const endBootstrap = createTime();
  const cmpTags = [];
  const exclude = options.exclude || [];
  const customElements2 = win.customElements;
  const head = win.document.head;
  const metaCharset = /* @__PURE__ */ head.querySelector("meta[charset]");
  const dataStyles = /* @__PURE__ */ win.document.createElement("style");
  const deferredConnectedCallbacks = [];
  let appLoadFallback;
  let isBootstrapping = true;
  Object.assign(plt, options);
  plt.$resourcesUrl$ = new URL(options.resourcesUrl || "./", win.document.baseURI).href;
  let hasSlotRelocation = false;
  lazyBundles.map((lazyBundle) => {
    lazyBundle[1].map((compactMeta) => {
      var _a2;
      const cmpMeta = {
        $flags$: compactMeta[0],
        $tagName$: compactMeta[1],
        $members$: compactMeta[2],
        $listeners$: compactMeta[3]
      };
      if (cmpMeta.$flags$ & 4 /* hasSlotRelocation */) {
        hasSlotRelocation = true;
      }
      {
        cmpMeta.$members$ = compactMeta[2];
      }
      {
        cmpMeta.$listeners$ = compactMeta[3];
      }
      {
        cmpMeta.$attrsToReflect$ = [];
      }
      {
        cmpMeta.$watchers$ = (_a2 = compactMeta[4]) != null ? _a2 : {};
      }
      const tagName = cmpMeta.$tagName$;
      const HostElement = class extends HTMLElement {
        // StencilLazyHost
        constructor(self) {
          super(self);
          this.hasRegisteredEventListeners = false;
          self = this;
          registerHost(self, cmpMeta);
          if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            {
              if (!self.shadowRoot) {
                createShadowRoot.call(self, cmpMeta);
              } else {
                if (self.shadowRoot.mode !== "open") {
                  throw new Error(
                    `Unable to re-use existing shadow root for ${cmpMeta.$tagName$}! Mode is set to ${self.shadowRoot.mode} but Stencil only supports open shadow roots.`
                  );
                }
              }
            }
          }
        }
        connectedCallback() {
          const hostRef = getHostRef(this);
          if (!hostRef) {
            return;
          }
          if (!this.hasRegisteredEventListeners) {
            this.hasRegisteredEventListeners = true;
            addHostEventListeners(this, hostRef, cmpMeta.$listeners$);
          }
          if (appLoadFallback) {
            clearTimeout(appLoadFallback);
            appLoadFallback = null;
          }
          if (isBootstrapping) {
            deferredConnectedCallbacks.push(this);
          } else {
            plt.jmp(() => connectedCallback(this));
          }
        }
        disconnectedCallback() {
          plt.jmp(() => disconnectedCallback(this));
          plt.raf(() => {
            var _a3;
            const hostRef = getHostRef(this);
            if (!hostRef) {
              return;
            }
            const i2 = deferredConnectedCallbacks.findIndex((host) => host === this);
            if (i2 > -1) {
              deferredConnectedCallbacks.splice(i2, 1);
            }
            if (((_a3 = hostRef == null ? void 0 : hostRef.$vnode$) == null ? void 0 : _a3.$elm$) instanceof Node && !hostRef.$vnode$.$elm$.isConnected) {
              delete hostRef.$vnode$.$elm$;
            }
          });
        }
        componentOnReady() {
          var _a3;
          return (_a3 = getHostRef(this)) == null ? void 0 : _a3.$onReadyPromise$;
        }
      };
      cmpMeta.$lazyBundleId$ = lazyBundle[0];
      if (!exclude.includes(tagName) && !customElements2.get(tagName)) {
        cmpTags.push(tagName);
        customElements2.define(
          tagName,
          proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */)
        );
      }
    });
  });
  if (cmpTags.length > 0) {
    if (hasSlotRelocation) {
      dataStyles.textContent += SLOT_FB_CSS;
    }
    {
      dataStyles.textContent += cmpTags.sort() + HYDRATED_CSS;
    }
    if (dataStyles.innerHTML.length) {
      dataStyles.setAttribute("data-styles", "");
      const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(win.document);
      if (nonce != null) {
        dataStyles.setAttribute("nonce", nonce);
      }
      head.insertBefore(dataStyles, metaCharset ? metaCharset.nextSibling : head.firstChild);
    }
  }
  isBootstrapping = false;
  if (deferredConnectedCallbacks.length) {
    deferredConnectedCallbacks.map((host) => host.connectedCallback());
  } else {
    {
      plt.jmp(() => appLoadFallback = setTimeout(appDidLoad, 30));
    }
  }
  endBootstrap();
};

// src/runtime/fragment.ts
var Fragment = (_, children) => children;
var addHostEventListeners = (elm, hostRef, listeners, attachParentListeners) => {
  if (listeners && win.document) {
    listeners.map(([flags, name, method]) => {
      const target = getHostListenerTarget(win.document, elm, flags) ;
      const handler = hostListenerProxy(hostRef, method);
      const opts = hostListenerOpts(flags);
      plt.ael(target, name, handler, opts);
      (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(() => plt.rel(target, name, handler, opts));
    });
  }
};
var hostListenerProxy = (hostRef, methodName) => (ev) => {
  var _a;
  try {
    {
      if (hostRef.$flags$ & 256 /* isListenReady */) {
        (_a = hostRef.$lazyInstance$) == null ? void 0 : _a[methodName](ev);
      } else {
        (hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || []).push([methodName, ev]);
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }
};
var getHostListenerTarget = (doc, elm, flags) => {
  if (flags & 4 /* TargetDocument */) {
    return doc;
  }
  return elm;
};
var hostListenerOpts = (flags) => supportsListenerOptions ? {
  passive: (flags & 1 /* Passive */) !== 0,
  capture: (flags & 2 /* Capture */) !== 0
} : (flags & 2 /* Capture */) !== 0;

// src/runtime/nonce.ts
var setNonce = (nonce) => plt.$nonce$ = nonce;

exports.Fragment = Fragment;
exports.Host = Host;
exports.bootstrapLazy = bootstrapLazy;
exports.createEvent = createEvent;
exports.getAssetPath = getAssetPath;
exports.getElement = getElement;
exports.globalScripts = globalScripts;
exports.h = h;
exports.promiseResolve = promiseResolve;
exports.registerInstance = registerInstance;
exports.setNonce = setNonce;
