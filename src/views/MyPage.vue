<template>
  <div class="container">
    <div class="page-header text-center" style="margin-top: 20px">
      <h1>회원 정보</h1>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>id</th>
          <th>이름</th>
          <th>email</th>
          <th>도시</th>
          <th>상세주소</th>
          <th>우편번호</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>
  <OrderListComponent
    :isAdmin="false"
    apiUrl="http://localhost:8080/member/myorders"
  />
</template>
<script>
import OrderListComponent from "@/components/OrderListComponent.vue";
export default {
  components: {
    OrderListComponent,
  },
};
</script>
