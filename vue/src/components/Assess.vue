<template>
  <div>
    <x-header title="发表评价"></x-header>

    <group title="请认真填写评价">
      <cell title="对 司 机 满 意">
        <rater v-model="AssessNum1"></rater>
      </cell>
      <cell title="对 班 车 满 意">
        <rater v-model="AssessNum2"></rater>
      </cell>
      <cell title="对 车 站 服 务 满 意">
        <rater v-model="AssessNum3"></rater>
      </cell>
      <x-textarea :max="200" :placeholder="('乘车感觉如何？对我们还有什么建议？')"></x-textarea>
    </group>
    <br>
    <check-icon :value.sync="demo1"> {{ ('匿名') }} ( 您的评价会帮助到其他小伙伴哟 )</check-icon>
    <br><br><br>
    <x-button @click.native="showModule" style="width:96%;margin: 0 2%;" type="primary">发布</x-button>

  </div>
</template>

<script>
import { XHeader, Group, Cell, Rater, Range, XTextarea, CheckIcon, XButton, AlertModule } from 'vux'

export default {
  components: {
    XHeader,
    Group,
    Cell,
    Rater,
    Range,
    XTextarea,
    CheckIcon,
    XButton
  },
  methods: {
    showModule () {
      AlertModule.show({
        title: '评价成功！',
        content: ('感谢您的评价'),
        onShow () {
          console.log('Module: I\'m showing')
        },
        onHide () {
          console.log('Module: I\'m hiding now')
          location.href = '/';
        }
      })
    },
    
  },
  data() {
    return {
      AssessNum1: 5,
      AssessNum2: 5,
      AssessNum3: 5,
      demo1: false,
      show: false
    }
  }
}
</script>

