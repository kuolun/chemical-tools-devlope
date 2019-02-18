<template>
  <div class="q1">
    <h1>化學小工具1</h1>
    <div class="question">
      <p>問題 1：使用何種酸鹼溶液？</p>
      <select v-model="selectedKa">
        <option disabled>請選擇</option>
        <option
          v-for="(acid,index) in acids"
          :value="acid.ka"
          :key=index
        >{{acid.title}}</option>
      </select>
      <p>Ka: {{ selectedKa }}</p>
    </div>
    <div class="question">
      <p>問題 2：此溶液的莫爾濃度為何(M)？</p>
      <input
        type="text"
        v-model="inputValue"
      />
      <hr />
      <p>
        公式： \(pH = - \log_{10}[H^+] \)
        <!-- $ = - \log_{10}[H^+] = - \log_{10}[ A ]$$ -->
      </p>
      <p>
        <!-- 此溶液的 \(pH\)值: <span>{{ answer }}</span> -->
      </p>
      <p>
        A:(Ka){{selectedKa}}
        <br>
        B:(C乘A開根號){{answer1}}
        <br>
        C:(輸入濃度){{inputValue}}
        <br>
        C乘5%:{{inputValue * 0.05}}
      </p>

      <p v-if="!BlessthanC5">
        B>C*5% 則解出為pH : {{answer2}}
      </p>
      <p v-else>
        B 小於C*5%則解出為pH:
        {{answer2}}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Question1",
    data() {
      return {
        inputValue: 1,
        acids: [
          {
            title: "氫碘酸(hydroiodic acid)",
            ka: Math.pow(10, 10)
          },
          {
            title: "氫溴酸(hydrobromic acid)",
            ka: Math.pow(10, 9)
          },
          {
            title: "鹽酸(hydrochloric acid)",
            ka: Math.pow(10, 6)
          },
          {
            title: "硫酸(sulfuric acid)",
            ka: Math.pow(10, 3)
          },
          {
            title: "硝酸(nitric acid)",
            ka: Math.pow(10, 2)
          },
          {
            title: "水合氫(hydronium ion)",
            ka: 1
          },
          {
            title: "硫酸氫根(hydrogen sulfate ion)",
            ka: 1.3 * Math.pow(10, -2)
          },
          {
            title: "氫氟酸(hydrofluoric acid)",
            ka: 7.1 * Math.pow(10, -4)
          },
          {
            title: "亞硝酸(nitrous acid)",
            ka: 4.5 * Math.pow(10, -4)
          },
          {
            title: "甲酸(formic acid)",
            ka: 1.7 * Math.pow(10, -4)
          },
          {
            title: "醋酸(acetic acid)",
            ka: 1.8 * Math.pow(10, -5)
          }
        ],
        selectedKa: 0,
        productSq: 0,
        BlessthanC5: false
      };
    },
    computed: {
      answer1() {
        console.log("answer1");
        // return -Math.log10(this.input.value).toFixed(2)
        this.productSq = Math.sqrt(this.inputValue * this.selectedKa);
        return this.productSq;
      },
      answer2() {
        if (this.productSq > this.inputValue * 0.05) {
          this.BlessthanC5 = false;
          let x1 =
            (-this.selectedKa +
              Math.sqrt(
                Math.pow(this.selectedKa, 2) +
                  4 * this.selectedKa * this.inputValue
              )) /
            2;
          let x2 =
            (-this.selectedKa -
              Math.sqrt(
                Math.pow(this.selectedKa, 2) +
                  4 * this.selectedKa * this.inputValue
              )) /
            2;
          console.log(x1, x2);
          let finalX;
          if (x1 > 0) {
            finalX = x1;
          } else {
            finalX = x2;
          }
          let pH1 = -Math.log10(finalX).toFixed(2);
          if (pH1 > 7) {
            pH1 = 7;
          }
          // pH值若小於1，則設定pH值為1
          if (pH1 < 1) {
            pH1 = 1;
          }
          return pH1;
        } else {
          this.BlessthanC5 = true;
          console.log("in pH2");
          let pH2 = -Math.log10(this.productSq);
          if (pH2 > 7) {
            pH2 = 7;
          }
          // pH值若小於1，則設定pH值為1
          if (pH2 < 1) {
            pH2 = 1;
          }

          return pH2;
        }
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .q1 {
    width: 640px;
    margin: 10px auto;
  }
  .q1 h3 {
    padding: 10px;
    font-size: 18px;
  }
  .question {
    border: 1px solid blueviolet;
    border-radius: 5px;
    padding: 15px;
    font-size: 18px;
  }
</style>
