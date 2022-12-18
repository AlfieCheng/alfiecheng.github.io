Vue.component('data-module',{
  data(){
    video: [
      {
            title: "1120研習教材",
            clips: [
              { title: "研習教材（一）前端軟體設計架構介紹", url: "https://drive.google.com/file/d/1I6_kNEVf6W2cn2upUmhmXiNcn-2Rdj84/preview" },
              { title: "研習教材（二）Git 版本控制概念", url: "https://drive.google.com/file/d/1I5TFRokc1OHbPist4LEeoHi_we51lz2a/preview" },
              { title: "研習教材（三）Github程式庫介紹", url: "https://drive.google.com/file/d/1Np6K7_jiU9LbwX8VVqOCCm5bbQxvc8tA/preview" },
              { title: "研習教材（四）創建我的GitHub 遠端程式庫", url: "https://drive.google.com/file/d/1ytMiue5iBfGz-Ht2Sjlxwb-pbqiPXIiY/preview" },
              { title: "研習教材（五）使用VS Code開啟遠端程式庫", url: "https://drive.google.com/file/d/1pnC31F9WLmZKzpfdy1C2cJSepvU3ISFl/preview" },
              { title: "研習教材（六）推送一個靜態網頁", url: "https://drive.google.com/file/d/17OME_shV16E6-MP7EuwOiRmyGUcQKorU/preview" },
              { title: "研習教材（七）套用BootStrap與協作", url: "https://drive.google.com/file/d/1IYBZ5BzQb1_bF5OVfPqFE8gRq5k-Nbx-/preview" },
              { title: "研習教材（八）完成一個Vue動態網頁", url: "https://drive.google.com/file/d/1mTJtv_CfKqUnUetU9dL7xNj1K52neGle/preview" },
              { title: "研習教材（完）使用jsFiddle開發測試", url: "https://drive.google.com/file/d/1fZGrV7b--ozl416MG0Z1AI33cPgSTpNE/preview" }
            ]
          },
          {
            title: "1204研習教材",
            clips: [
              { title: "研習教材（一）軟體組職能介紹-認識軟體業", url: "https://drive.google.com/file/d/1qa8wAPVjI_yJn-ZYEKl1Jx9GMsrZuSn5/preview" },
              { title: "研習教材（二）軟體職能的修己與助人", url: "https://drive.google.com/file/d/10rlEMfQRR3CTBgds3sfii2dYUAsDxMRc/preview" },
              { title: "研習教材（三）軟體開發流程生命週期", url: "https://drive.google.com/file/d/1wQdHrUKVu5DdWwf1Y8RbhFD5DHX1EjMY/preview" },
              { title: "研習教材（四）複習與QrcodeReader預習", url: "https://drive.google.com/file/d/1KbRJu66f2sBVqDWIwemD2nyb_XquCn9v/preview" },
              { title: "研習教材（五）Vue的概念與核心實體", url: "https://drive.google.com/file/d/1p0hzkjjjn_m6dA_aIq68djsLThKxLQS3/preview" },
              { title: "研習教材（六）Vue的核心功能-資料加工與邏輯整合", url: "https://drive.google.com/file/d/1dClF7zAqRInpQlp6b17d1_Ofkga1LDO7/preview" },
              { title: "研習教材（七）Vue的黑魔法-指令", url: "https://drive.google.com/file/d/11nMt7jXjavW1fZC-CgBIIsEAy9R7C5nr/preview" },
              { title: "研習教材（完）用館務創造人生的價值", url: "https://drive.google.com/file/d/1VBthDsIRlHevjI4VNpFGIQSwa-EE4hXi/preview" }

            ]
          }
    ]
  },
  created(){
    this.emit('init', this.video);
  }
  
});
