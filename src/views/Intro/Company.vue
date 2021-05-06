<template>
  <div align="center">
    <div class="py-5">
      <v-img
        src="../../../public/img/logo.png"
        aspect-ratio="6"
        contain
      ></v-img>
    </div>
    <div
      class="py-16"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-once="true"
    >
      <h3 class="text-sm-h4 text-decoration-underline">About us</h3>
      <br>
      <h4 class="text-sm-h5">클라우드포스는 BigData, AI, IOT, Cloud Computing 전문 기업으로<br> 현대 정보 기술을 활용한 비즈니스 가치 창출을 목표로 설립된 기술 전문 기업입니다.</h4>
    </div>
    <div
      class="py-16"
      data-aos="fade-up"
      data-aos-duration="3000"
      data-aos-once="true"
    >
      <h3 class="text-sm-h4 text-decoration-underline">Vision</h3>
      <br>
      <h3 class="text-sm-h4">"행복한 미래를 위한 지속적인 혁신"</h3>
      <br>
      <h4 class="text-sm-h5">"Continuous innovation for happy future of  customers and employees."</h4>
    </div>
    <div
      class="py-16"
      data-aos="fade-right"
      data-aos-duration="1500"
      data-aos-once="true"
    >
      <h3 class="text-sm-h4 text-decoration-underline">History</h3>
      <v-card
      max-width="1000"
      align="start"
      flat
      >
        <v-timeline>
          <v-timeline-item
            fill-dot
            class="white--text mb-12"
            color="orange"
            large
          >
            <template v-slot:icon>
              <span>2020</span>
            </template>
          </v-timeline-item>
          <v-timeline-item
            v-for="(year, i) in year2020"
            :key="i"
            :color="year.color"
            small
          >
            <template v-slot:opposite>
              <span
                :class="`headline font-weight-bold ${year.color}--text`"
              ></span>
            </template>
            <div class="py-4">
              <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`" v-text="year.date"></h2>
              <div v-text="year.text" ></div>
            </div>
          </v-timeline-item>
        </v-timeline>
        <v-timeline>
          <v-timeline-item
            fill-dot
            class="white--text mb-12"
            color="orange"
            large
          >
            <template v-slot:icon>
              <span>2019</span>
            </template>
          </v-timeline-item>
          <v-timeline-item
            v-for="(year, i) in year2019"
            :key="i"
            :color="year.color"
            small
          >
            <template v-slot:opposite>
              <span
                :class="`headline font-weight-bold ${year.color}--text`"
              ></span>
            </template>
            <div class="py-4">
              <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`" v-text="year.date"></h2>
              <div v-text="year.text" ></div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-card>
    </div>
  </div>
</template>

<script >
  export default {
    data: () => ({
      year2019: [
        {
          color: 'cyan',
          date: 'December',
          text: '서울특별시장상 (챌린지상)'
        },
        {
          color: 'green',
          date: 'October',
          text: '맞춤형 공학파트너 R&D 사업 선정 (중소기업벤처부, 한성대학교)'
        },
        {
          color: 'pink',
          date: 'July',
          text: '제3회 서울혁신챌린지 예선 R&D 지원 기업 선정' 
        },
        {
          color: 'orange',
          date: 'March',
          text: '클라우드포스(주) 법인 설립'
        }
      ],
      year2020: [
        {
          color: 'orange',
          date: 'August',
          text: '벤처기업인증(기술보증기금)'
        },
        {
          color: 'cyan',
          date: 'May',
          text: '기업부설연구소 설립(서울 강서구 마곡중앙로 59-11)'
        },
        {
          color: 'green',
          date: 'April',
          text: '맞춤형 공학파트너 R&D 사업 수행 완료'
        },
        {
          color: 'pink',
          date: 'March',
          text: '디딤365(주) 챗봇 및 머신러닝 모델 컨설팅 계약(3월~5월)'
        }
      ]
    })
  }
</script>