document.addEventListener('DOMContentLoaded', function () {
    const formButton = document.querySelector('.Form-Btn');
  
    formButton.addEventListener('click', function (event) {
      let isValid = true;
  
      // 会社名のバリデーション
      const companyName = document.getElementById('company-name');
      const companyNameError = document.getElementById('company-name-error');
      if (companyName.value.trim() === '') {
        companyNameError.style.display = 'block';
        isValid = false;
      } else {
        companyNameError.style.display = 'none';
      }
  
      // 氏名のバリデーション
      const name = document.getElementById('name');
      const nameError = document.getElementById('name-error');
      if (name.value.trim() === '') {
        nameError.style.display = 'block';
        isValid = false;
      } else {
        nameError.style.display = 'none';
      }
  
      // 電話番号のバリデーション
      const phone = document.getElementById('phone');
      const phoneError = document.getElementById('phone-error');
      if (phone.value.trim() === '') {
        phoneError.style.display = 'block';
        isValid = false;
      } else {
        phoneError.style.display = 'none';
      }
  
      // メールアドレスのバリデーション
      const email = document.getElementById('email');
      const emailError = document.getElementById('email-error');
      if (email.value.trim() === '') {
        emailError.style.display = 'block';
        isValid = false;
      } else {
        emailError.style.display = 'none';
      }
  
      // お問い合わせ内容のバリデーション
      const message = document.getElementById('message');
      const messageError = document.getElementById('message-error');
      if (message.value.trim() === '') {
        messageError.style.display = 'block';
        isValid = false;
      } else {
        messageError.style.display = 'none';
      }
  
      // フォームが無効な場合は送信を防ぐ
      if (!isValid) {
        event.preventDefault();
      }
    });
  });
  