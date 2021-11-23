<template>
  <form ref="form" @submit.prevent="sendEmail">
    <label>Name</label>
    <input type="text" name="user_name" placeholder="ex) Good Company" class="fromName">
    <label>Email</label>
    <input type="email" name="user_email" placeholder="ex) example@gmail.com" class="fromEmail">
    <label>Message</label>
    <textarea name="message" placeholder="ex) We want to hire you plz :)" class="fromMsg"></textarea>
    <input type="submit" value="Send" class="sendBtn">
  </form>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  methods: {
    sendEmail() {
      emailjs.sendForm('service_sehee', 'template_pb', this.$refs.form, 'user_PjvQNtoo7zdFSl1WTBgok')
        .then(() => {
            alert('메일 전송에 성공하였습니다. 곧 회신드릴게요 :)');
        }, (error) => {
            alert('메일 전송에 실패하였습니다. error code : '+error);
        });
    }
  }
}
</script>

<style scoped>
label{
    margin-left: 30px;
}
input, textarea{
    border: none;
}
input:hover, textarea:hover,
input:focus, textarea:focus{
    background-color: lightcoral;
    color: #fff;
}
input:hover::placeholder, textarea:hover::placeholder,
input:focus::placeholder, textarea:focus::placeholder{
    color: #fff;
}
.fromName, .fromEmail{
    padding: 5px 0;
    margin: 10px 0 20px 0;
}
.fromMsg{
    padding: 10px 0;
    margin-top: 10px;
    height: 120px;
}
*::placeholder{
    font-size: 12px;
    font-style: italic;
}
.sendBtn{
    float: right;
    margin-top: 50px;
    padding: 5px 20px;
    background: lightcoral;
    border-radius: 5px;
    color: #fff;
    box-shadow: 0 0 5px rgba(0,0,0,0.6);
}
</style>