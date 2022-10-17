<template>
  <div class="block1">
    <h2>
      自身にどのくらい当てはまるかについて、1から7までの数字のうちもっとも適切なものを選択してください。
    </h2>
    <h2>
      文章全体を総合的に見て、自分にどれだけ当てはまるかを評価してください。項目は全部で10個です。
    </h2>
    <div class="oneseven">
      <ol>
        <li>全く違うと思う</li>
        <li>おおよそ違うと思う</li>
        <li>少し違うと思う</li>
        <li>どちらでもない</li>
        <li>少しそう思う</li>
        <li>まあまあそう思う</li>
        <li>強くそう思う</li>
      </ol>
    </div>
    <!-- <div style="font-weight: 900">1,全く違うと思う</div>
    <div style="font-weight: 900">2,おおよそ違うと思う</div>
    <div style="font-weight: 900">2,おおよそ違うと思う</div>
    <div style="font-weight: 900">3,少し違うと思う</div>
    <div style="font-weight: 900">4,どちらでもない</div>
    <div style="font-weight: 900">5,少しそう思う</div>
    <div style="font-weight: 900">6,まあまあそう思う</div>
    <div style="font-weight: 900">7,強くそう思う</div> -->
  </div>
  <br />
  <br />
  <div class="block2">
    <!-- 質問1 -->
    <div id="q1">
      <h3>質問1 私は自分自身のことを、活発で、外向的だと思う</h3>
      <div id="q1check">
        <div>
          <input type="radio" name="q1" value="1" v-model="scores[1]" />
          <label>1</label>
        </div>
        <div>
          <input type="radio" name="q1" value="2" v-model="scores[1]" />
          <label>2</label>
        </div>
        <div>
          <input type="radio" name="q1" value="3" v-model="scores[1]" />
          <label>3</label>
        </div>
        <div>
          <input type="radio" name="q1" value="4" v-model="scores[1]" />
          <label>4</label>
        </div>
        <div>
          <input type="radio" name="q1" value="5" v-model="scores[1]" />
          <label>5</label>
        </div>
        <div>
          <input type="radio" name="q1" value="6" v-model="scores[1]" />
          <label>6</label>
        </div>
        <div>
          <input type="radio" name="q1" value="7" v-model="scores[1]" />
          <label>7</label>
        </div>
      </div>
    </div>
    <!-- 質問2 -->
    <div id="q2">
      <h3>
        質問2
        私は自分自身のことを、他人に不満をもち、もめごとを起こしやすいと思う
      </h3>
      <div id="q2check">
        <div>
          <input type="radio" name="q2" value="1" v-model="scores[2]" />
          <label>1</label>
        </div>
        <div>
          <input type="radio" name="q2" value="2" v-model="scores[2]" />
          <label>2</label>
        </div>
        <div>
          <input type="radio" name="q2" value="3" v-model="scores[2]" />
          <label>3</label>
        </div>
        <div>
          <input type="radio" name="q2" value="4" v-model="scores[2]" />
          <label>4</label>
        </div>
        <div>
          <input type="radio" name="q2" value="5" v-model="scores[2]" />
          <label>5</label>
        </div>
        <div>
          <input type="radio" name="q2" value="6" v-model="scores[2]" />
          <label>6</label>
        </div>
        <div>
          <input type="radio" name="q2" value="7" v-model="scores[2]" />
          <label>7</label>
        </div>
      </div>
    </div>
    <!-- 質問3 -->
    <div id="q3">
      <h3>質問3 私は自分自身のことを、しっかりしていて、自分に厳しいと思う</h3>
      <div id="q3check">
        <div>
          <input type="radio" name="q3" value="1" v-model="scores[3]" />
          <label>1</label>
        </div>
        <div>
          <input type="radio" name="q3" value="2" v-model="scores[3]" />
          <label>2</label>
        </div>
        <div>
          <input type="radio" name="q3" value="3" v-model="scores[3]" />
          <label>3</label>
        </div>
        <div>
          <input type="radio" name="q3" value="4" v-model="scores[3]" />
          <label>4</label>
        </div>
        <div>
          <input type="radio" name="q3" value="5" v-model="scores[3]" />
          <label>5</label>
        </div>
        <div>
          <input type="radio" name="q3" value="6" v-model="scores[3]" />
          <label>6</label>
        </div>
        <div>
          <input type="radio" name="q3" value="7" v-model="scores[3]" />
          <label>7</label>
        </div>
      </div>
    </div>
    <!-- 質問4 -->
    <div id="q4">
      <h3>質問4 私は自分自身のことを、心配性で、うろたえやすいと思う</h3>
      <div id="q4check">
        <div>
          <input type="radio" name="q4" value="1" v-model="scores[4]" />
          <label>1</label>
        </div>
        <div>
          <input type="radio" name="q4" value="2" v-model="scores[4]" />
          <label>2</label>
        </div>
        <div>
          <input type="radio" name="q4" value="3" v-model="scores[4]" />
          <label>3</label>
        </div>
        <div>
          <input type="radio" name="q4" value="4" v-model="scores[4]" />
          <label>4</label>
        </div>
        <div>
          <input type="radio" name="q4" value="5" v-model="scores[4]" />
          <label>5</label>
        </div>
        <div>
          <input type="radio" name="q4" value="6" v-model="scores[4]" />
          <label>6</label>
        </div>
        <div>
          <input type="radio" name="q4" value="7" v-model="scores[4]" />
          <label>7</label>
        </div>
      </div>
    </div>
    <!-- 質問5 -->
    <div id="q5">
      <h3>
        質問5 私は自分自身のことを、新しいことが好きで、変わった考えを持つと思う
      </h3>
      <div id="q5check">
        <div>
          <input type="radio" name="q5" value="1" v-model="scores[5]" />
          <label>1</label>
        </div>
        <div>
          <input type="radio" name="q5" value="2" v-model="scores[5]" />
          <label>2</label>
        </div>
        <div>
          <input type="radio" name="q5" value="3" v-model="scores[5]" />
          <label>3</label>
        </div>
        <div>
          <input type="radio" name="q5" value="4" v-model="scores[5]" />
          <label>4</label>
        </div>
        <div>
          <input type="radio" name="q5" value="5" v-model="scores[5]" />
          <label>5</label>
        </div>
        <div>
          <input type="radio" name="q5" value="6" v-model="scores[5]" />
          <label>6</label>
        </div>
        <div>
          <input type="radio" name="q5" value="7" v-model="scores[5]" />
          <label>7</label>
        </div>
      </div>
    </div>
    <!-- 質問6 -->
    <div id="q6">
      <h3>質問6 私は自分自身のことを、ひかえめで、おとなしいと思う</h3>
      <div id="q6check">
        <div>
          <input type="radio" name="q6" value="1" v-model="scores[6]" />
          <label>1</label>
        </div>
        <div>
          <input type="radio" name="q6" value="2" v-model="scores[6]" />
          <label>2</label>
        </div>
        <div>
          <input type="radio" name="q6" value="3" v-model="scores[6]" />
          <label>3</label>
        </div>
        <div>
          <input type="radio" name="q6" value="4" v-model="scores[6]" />
          <label>4</label>
        </div>
        <div>
          <input type="radio" name="q6" value="5" v-model="scores[6]" />
          <label>5</label>
        </div>
        <div>
          <input type="radio" name="q6" value="6" v-model="scores[6]" />
          <label>6</label>
        </div>
        <div>
          <input type="radio" name="q6" value="7" v-model="scores[6]" />
          <label>7</label>
        </div>
      </div>
    </div>
    <!-- 質問7 -->
    <div id="q7">
      <h3>質問7 私は自分自身のことを、人に気をつかう、やさしい人間だと思う</h3>
      <div id="q7check">
        <div>
          <input type="radio" name="q7" value="1" v-model="scores[7]" />
          <label>1</label>
        </div>
        <div>
          <input type="radio" name="q7" value="2" v-model="scores[7]" />
          <label>2</label>
        </div>
        <div>
          <input type="radio" name="q7" value="3" v-model="scores[7]" />
          <label>3</label>
        </div>
        <div>
          <input type="radio" name="q7" value="4" v-model="scores[7]" />
          <label>4</label>
        </div>
        <div>
          <input type="radio" name="q7" value="5" v-model="scores[7]" />
          <label>5</label>
        </div>
        <div>
          <input type="radio" name="q7" value="6" v-model="scores[7]" />
          <label>6</label>
        </div>
        <div>
          <input type="radio" name="q7" value="7" v-model="scores[7]" />
          <label>7</label>
        </div>
      </div>
    </div>
    <!-- 質問8 -->
    <div id="q8">
      <h3>質問8 私は自分自身のことを、だらしなく、うっかりしていると思う</h3>
      <div id="q8check">
        <div>
          <input type="radio" name="q8" value="1" v-model="scores[8]" />
          <label>1</label>
        </div>
        <div>
          <input type="radio" name="q8" value="2" v-model="scores[8]" />
          <label>2</label>
        </div>
        <div>
          <input type="radio" name="q8" value="3" v-model="scores[8]" />
          <label>3</label>
        </div>
        <div>
          <input type="radio" name="q8" value="4" v-model="scores[8]" />
          <label>4</label>
        </div>
        <div>
          <input type="radio" name="q8" value="5" v-model="scores[8]" />
          <label>5</label>
        </div>
        <div>
          <input type="radio" name="q8" value="6" v-model="scores[8]" />
          <label>6</label>
        </div>
        <div>
          <input type="radio" name="q8" value="7" v-model="scores[8]" />
          <label>7</label>
        </div>
      </div>
    </div>
    <!-- 質問9 -->
    <div id="q9">
      <h3>質問9 私は自分自身のことを、冷静で、気分が安定していると思う</h3>
      <div id="q7check">
        <div>
          <input type="radio" name="q9" value="1" v-model="scores[9]" />
          <label>1</label>
        </div>
        <div>
          <input type="radio" name="q9" value="2" v-model="scores[9]" />
          <label>2</label>
        </div>
        <div>
          <input type="radio" name="q9" value="3" v-model="scores[9]" />
          <label>3</label>
        </div>
        <div>
          <input type="radio" name="q9" value="4" v-model="scores[9]" />
          <label>4</label>
        </div>
        <div>
          <input type="radio" name="q9" value="5" v-model="scores[9]" />
          <label>5</label>
        </div>
        <div>
          <input type="radio" name="q9" value="6" v-model="scores[9]" />
          <label>6</label>
        </div>
        <div>
          <input type="radio" name="q9" value="7" v-model="scores[9]" />
          <label>7</label>
        </div>
      </div>
    </div>
    <!-- 質問10 -->
    <div id="q10">
      <h3>質問10 私は自分自身のことを、発想力に欠けた、平凡な人間だと思う</h3>
      <div id="q10check">
        <div>
          <input type="radio" name="q10" value="1" v-model="scores[10]" />
          <label>1</label>
        </div>
        <div>
          <input type="radio" name="q10" value="2" v-model="scores[10]" />
          <label>2</label>
        </div>
        <div>
          <input type="radio" name="q10" value="3" v-model="scores[10]" />
          <label>3</label>
        </div>
        <div>
          <input type="radio" name="q10" value="4" v-model="scores[10]" />
          <label>4</label>
        </div>
        <div>
          <input type="radio" name="q10" value="5" v-model="scores[10]" />
          <label>5</label>
        </div>
        <div>
          <input type="radio" name="q10" value="6" v-model="scores[10]" />
          <label>6</label>
        </div>
        <div>
          <input type="radio" name="q10" value="7" v-model="scores[10]" />
          <label>7</label>
        </div>
      </div>
    </div>
  </div>
  <br />
  <div class="block3">
    <button class="button" v-on:click="submit">提出</button>
  </div>
</template>

<script>
import { doc, setDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase"
export default {
  data() {
    return {
      scores: [],
      index1: "", // 外向性
      index2: "", // 協調性
      index3: "", // 勤勉性
      index4: "", // 神経症傾向
      index5: "", // 開放性
    }
  },
  methods: {
    async submit() {
      for (let i = 1; i < 11; i++) {
        if (this.scores[i] == null) {
          alert(`質問${i}が選択されていません。`)
          return
        }
      }
      this.index1 = Number(this.scores[1]) + (8 - Number(this.scores[6]))
      this.index2 = Number(this.scores[7]) + (8 - Number(this.scores[2]))
      this.index3 = Number(this.scores[3]) + (8 - Number(this.scores[8]))
      this.index4 = Number(this.scores[4]) + (8 - Number(this.scores[9]))
      this.index5 = Number(this.scores[5]) + (8 - Number(this.scores[10]))
      let docId = this.$route.params.id.toString()
      try {
        await setDoc(
          doc(db, "test", docId),
          {
            score1: Number(this.scores[1]),
            score2: Number(this.scores[2]),
            score3: Number(this.scores[3]),
            score4: Number(this.scores[4]),
            score5: Number(this.scores[5]),
            score6: Number(this.scores[6]),
            score7: Number(this.scores[7]),
            score8: Number(this.scores[8]),
            score9: Number(this.scores[9]),
            score10: Number(this.scores[10]),
            extroversion: this.index1,
            Cooperativeness: this.index2,
            diligence: this.index3,
            neuroticism: this.index4,
            openness: this.index5,
            createdAt: serverTimestamp(),
          },
          { merge: true }
        )
        this.$router.push("/end")
      } catch {
        alert(
          "不明なエラーを検出しました。お手数ですがもう一度やり直してください。"
        )
      }
    },
  },
}
</script>

<style>
.oneseven {
  font-weight: 900;
  display: grid;
  grid-template-columns: repeat(auto-fit, 220px);
  justify-content: center;
  grid-gap: 1rem;
}
#q1check {
  margin: 20px;
  padding: 10px;
}
.button {
  background: rgb(168, 241, 195);
  border-radius: 50px;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  max-width: 260px;
  padding: 10px 25px;
  color: #080101;
  transition: 0.3s ease-in-out;
  font-weight: 500;
}
</style>
