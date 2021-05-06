<template>
  <div align="center">
    <v-card class="py-4" max-width="1200px" flat>
      <v-card flat class="py-8">
        <v-row justify="center">
          <v-col class="pa-0" cols="12" sm="4">
            <v-simple-table>
              <thead>
                <tr>
                  <th class="text-center"><h2>인증기관</h2></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td align="center"><v-img src="../../../public/img/koita.png" width="140px"></v-img></td>
                </tr>
                <tr>
                  <td align="center"><v-img src="../../../public/img/kibo.jpg" width="150px" aspect-ratio="3.5"></v-img></td>
                </tr>
                <tr>
                  <td align="center"><v-img src="../../../public/img/patentoffice.png" width="183px"></v-img></td>
                </tr>
                <tr>
                  <td align="center"><div class="py-6"><v-img src="../../../public/img/literartproperty.png" width="200px" ></v-img></div></td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-col>
          <v-col class="pa-0 table-info" cols="12" sm="8">
            <v-simple-table>
              <thead>
                <tr>
                  <th colspan="2" class="text-center"><h2>특허 및 인증 내용</h2></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>제 202000110245호</td>
                  <td>벤처기업확인</td>
                </tr>
                <tr>
                  <td>제 2020113469호</td>
                  <td>기업부설연구소</td>
                </tr>
                <tr>
                  <td>특허 제 10-1768079호</td>
                  <td>침입탐지 오탐 개선을 위한 시스템 및 방법</td>
                </tr>
                <tr>
                  <td>특허 제 10-1656881호</td>
                  <td>데이터 처리 장치 및 방법</td>
                </tr>
                <tr>
                  <td>특허 제 10-1817661호</td>
                  <td>센서, 서비스 및 장치 데이터를 이동형 장치와 켄텍스트화</td>
                </tr>
                <tr>

                  <td>C-2019-017769호</td>
                  <td>직무 조언을 위한 지식베이스와 챗봇 프로그램</td>
                </tr>
                <tr>
                  <td>C-2019-017768 호</td>
                  <td>미용사 자격증 실습과목 AR(증강현실) 훈련지원 프로그램</td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-col>
        </v-row>
      </v-card>
      <v-row class="pa-4" justify="start">
        <h3>인증</h3>
      </v-row>
      <v-divider/>
      <div class="pa-sm-8 px-8">
        <v-row justify="space-between">
          <v-col cols="12" sm="3">
            <v-img
              src="../../../public/img/venture.png"
              max-width="200px"
            ></v-img> 
          </v-col>
          <v-col cols="12" sm="3">
            <v-img
              src="../../../public/img/lab2.png"
              max-width="200px"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="3" />
        </v-row>
      </div>
      <v-row class="pa-4" justify="start">
        <h3>특허 및 저작권</h3>
      </v-row>
      <v-divider/>
      <div class="pa-sm-8 px-8">
        <v-row justify="space-between">
          <v-col cols="12" sm="3">
            <v-img
              src="../../../public/img/patent1.jpg"
              max-width="200px"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="3">
            <v-img
              src="../../../public/img/patent2.jpg"
              max-width="200px"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="3">
            <v-img
              src="../../../public/img/patent3.jpg"
              max-width="200px"
            ></v-img>
          </v-col>
        </v-row>
      </div>
      <div class="pa-sm-8 px-8">
        <v-row justify="space-between">
          <v-col cols="12" sm="3">
            <v-img
              src="../../../public/img/patent4.jpg"
              max-width="200px"
            ></v-img> 
          </v-col>
          <v-col cols="12" sm="3">
            <v-img
              src="../../../public/img/patent5.jpg"
              max-width="200px"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="3" />
        </v-row>
      </div>
    </v-card>
  </div>
</template>

<style scoped>
table {
  width: 70%;
  border-collapse: collapse;
}

table, th, td {
  padding: 10px;
  border: 1px solid black;
}

th {
  background-color: lightgray;
}
@media (max-width: 480px) {

      .table-info comdroup col {width:100%;}

	.table-info th, .table-info td {display:block}

	.table-info th {border-bottom:0 !important;}

}
/* 표사용시 크기조절
@media (min-width: 300px) and (max-width: 500px) {
  .shrink {
    transform: scale(0.30) translate(-120%);
  }
}
@media (min-width: 500px) and (max-width: 1000px) {
  .shrink {
    transform: scale(0.65) translate(-30%);
  }
}
@media (min-width: 1000px) and (max-width: 1100px) {
  .shrink {
    transform: scale(0.85) translate(-10%);
  }
} */
</style>
