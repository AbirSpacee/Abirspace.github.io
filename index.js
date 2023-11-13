  const scrollTopButton = document.querySelector('.scroll-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      scrollTopButton.style.display = 'block';
    } else {
      scrollTopButton.style.display = 'none';
    }
  });

  scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
      document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    var whatsappIcon = document.querySelector(".whatsapp-icon");
    whatsappIcon.style.display = "block";
    
    whatsappIcon.addEventListener("click", function() {
      whatsappIcon.style.backgroundColor = "black";
      whatsappIcon.style.color = "white";
    });
  }, 2000);
});


function SendEmail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let location = document.getElementById("location").value;
    let bedget = document.getElementById("bedget").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    let body =
        "Name: " +
        name +
        "<br/> Email: " +
        email +
        "<br/> Location: " +
        location +
        "<br/> Bedget: " +
        bedget +
        "<br/> Subject: " +
        subject +
        "<br/> Messages: " +
        message;

    Email.send({
        SecureToken: "cbcc6b1f-569b-417a-bbf3-73d5f7255f545",
        To: "abirspacee@gmail.com",
        From: "abirspacee@gmail.com",
        Subject: subject,
        Body: body
    }).then(
        function(response) {
            console.log("Email sent successfully!", response.status, response.text);
            alert("Email sent successfully!");
        },
        function(error) {
            console.error("Email sending failed!", error);
            alert("Email sending failed!");
        }
    );
}