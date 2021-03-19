
let msg = document.getElementById("msg");
let deliver = document.getElementById("deliver");
let message = document.getElementById("message-delivered");

deliver.onclick = () => {
    function delivering () {
      message.innerHTML = msg.value;
      msg.value = "";
    }
    setTimeout(delivering, 3000);
}
