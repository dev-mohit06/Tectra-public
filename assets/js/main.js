function a(){document.getElementById('signupPopup').style.display='flex'}function b(){document.getElementById('signupPopup').style.display='none'}function c(){var A=document.getElementById('role'),_=document.getElementById('otherRoleInput');A.value==='other'?(_.style.display='block',_.required=!0):(_.style.display='none',_.required=!1)}function d(B){var C=8,_c=/[A-Z]/.test(B),D=/[a-z]/.test(B),E=/\d/.test(B),F=/[!@#$%^&*(),.?":{}|<>]/.test(B);return B.length>=C&&_c&&D&&E&&F}function e(_a){_a.preventDefault();let _b=!0;for(const _A of document.querySelectorAll('.error-message'))_A.style.display='none';!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.getElementById('email').value)&&(document.getElementById('emailError').textContent='Please enter a valid email address',document.getElementById('emailError').style.display='block',_b=!1);!/^\d{10}$/.test(document.getElementById('phone').value)&&(document.getElementById('phoneError').textContent='Please enter a valid 10-digit phone number',document.getElementById('phoneError').style.display='block',_b=!1);var _C=document.getElementById('password').value;!d(_C)&&(document.getElementById('passwordError').textContent='Password must be at least 8 characters with uppercase, lowercase, number, and special character',document.getElementById('passwordError').style.display='block',_b=!1);var _d=document.getElementById('confirmPassword').value;_C!==_d&&(document.getElementById('confirmPasswordError').textContent='Passwords do not match',document.getElementById('confirmPasswordError').style.display='block',_b=!1);_b&&(console.log({fullName:$('#fullName').val(),email:$('#email').val(),phone:$('#phone').val(),company:$('#company').val(),role:$('#role').val()==='other'?$('#otherRoleInput').val():$('#role').val(),location:$('#location').val(),password:$('#password').val()}),$('#submitButton').text('Submitting!!'),$('#submitButton').prop('disabled',!0),$.ajax({url:'https://script.google.com/macros/s/AKfycbxksHDliLIB7d6JIGVfR2CqqN65nvGRORJqVxhRTG8C-7RgIIodI56I_AiJgPuo03w1/exec',type:'POST',data:{fullName:$('#fullName').val(),email:$('#email').val(),phone:$('#phone').val(),company:$('#company').val()||'N/A',role:$('#role').val()==='other'?$('#otherRoleInput').val():$('#role').val(),location:$('#location').val(),password:$('#password').val()},success:function(aA){alert('Form submitted successfully!');$('#submitButton').text('Create My Account');b();$('#signupForm')[0].reset()},error:function(aB){alert('There was an error submitting the form. Please try again.');$('#submitButton').text('Create My Account')}}))}window.onclick=aC=>{var _B=document.getElementById('signupPopup');aC.target===_B&&b()};var f=document.querySelectorAll('section[id]'),j=aK=>{const aL=aK.querySelector('.value__accordion-content');aK.classList.contains('accordion-open')?(aL.removeAttribute('style'),aK.classList.remove('accordion-open')):(aL.style.height=aL.scrollHeight+'px',aK.classList.add('accordion-open'))},k=ScrollReveal({origin:'top',distance:'50px',duration:1500,delay:200,easing:'cubic-bezier(0.5, 0, 0, 1)'});function g(){var aD=window.pageYOffset;for(const aG of f){var aE=aG.offsetHeight,aF=aG.offsetTop-50;sectionId=aG.getAttribute('id');aD>aF&&aD<=aF+aE?document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active-link'):document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active-link')}}window.addEventListener('scroll',g);window.addEventListener('scroll',(()=>{var aH=document.getElementById('header');this.scrollY>=50?aH.classList.add('scroll-header'):aH.classList.remove('scroll-header')}));var h=document.querySelectorAll('.value__accordion-item');for(const aI of h){var i=aI.querySelector('.value__accordion-header');i.addEventListener('click',()=>{var aJ=document.querySelector('.accordion-open');j(aI);(aJ&&aJ!==aI)&&j(aJ)})}k.reveal('.nav__logo',{origin:'left',delay:0,distance:'30px',duration:1000});k.reveal('.nav__menu',{origin:'top',delay:100,distance:'30px',duration:1000});k.reveal('.nav__button',{origin:'right',delay:100,distance:'30px',duration:1000});k.reveal('.home__title',{delay:100,origin:'left',distance:'40px',duration:1000});k.reveal('.home__description',{delay:200,origin:'right',distance:'40px',duration:1000});k.reveal('.home__value',{delay:300,scale:0.8,distance:'0px',duration:1000,interval:100});k.reveal('.home__images',{delay:200,origin:'bottom',distance:'60px',duration:1200,scale:0.9});k.reveal('.home__orbe',{delay:300,origin:'right',distance:'80px',duration:1200,scale:0.8});k.reveal('.section__subtitle',{origin:'left',distance:'30px',interval:100,duration:1000});k.reveal('.section__title',{origin:'right',distance:'30px',interval:100,duration:1000});k.reveal('.value__container div',{origin:'bottom',distance:'40px',interval:50,delay:100,duration:1000,scale:0.9});k.reveal('.contact__orbe',{origin:'left',distance:'80px',delay:200,duration:1200,scale:0.9});k.reveal('.contact__img',{origin:'right',distance:'60px',delay:300,duration:1200});k.reveal('.contact__card-box',{origin:'bottom',distance:'30px',interval:100,scale:0.8,duration:1000});k.reveal('.footer__container > div',{origin:'bottom',distance:'30px',interval:100,duration:800});k.reveal('.footer__copy',{origin:'right',distance:'30px',delay:200,duration:800});k.reveal('.scrollup',{origin:'bottom',distance:'40px',delay:400,duration:1000,scale:0.9});