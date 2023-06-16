// mo ta
var myText = document.getElementById("my-text");
var result = document.getElementById("result");
var limit = 200;
result.textContent = 0 + "/" + limit;

myText.addEventListener("input",function(){
    var textLength = myText.value.length;
    result.textContent = textLength + "/" + limit;

    if(textLength >= limit){
        myText.style.borderColor = "#ff2851";
        result.style.color = "#ff2851";
    }
    else{
        myText.style.borderColor = "#b2b2b2";
        result.style.color = "#737373";
    }
});

//min-max
function checkMinMax() {
    var minInput = document.getElementById("minInput");
    var maxInput = document.getElementById("maxInput");
    var error = document.getElementById("error");
  
    if (parseInt(minInput.value) >= parseInt(maxInput.value) ) 
    {
      error.innerHTML = "Giá trị Min không được lớn hơn hoặc bằng giá trị Max";
      maxInput.setCustomValidity("Giá trị Min không được lớn hơn giá trị tối đa");
    } else if(parseInt(minInput.value) <= 0  || parseInt(maxInput.value) <= 0){
      error.innerHTML = "Giá trị không được nhỏ hơn hoặc bằng 0";
    } else{
      error.innerHTML = "";
      maxInput.setCustomValidity("");
    }
  }


//link meet  
const googleLinkInput = document.getElementById("google-link");
const googleLinkError = document.getElementById("google-link-error");

googleLinkInput.addEventListener("input", function(event) {
  // Lấy giá trị đầu vào và kiểm tra nó có đúng định dạng của link Google hay không
  const input = event.target.value;
  const pattern = /^https:\/\/meet.google.com\/[a-z]{3}-[a-z]{4}-[a-z]{3}$/;
  const isValid = pattern.test(input);
  // Hiển thị thông báo lỗi nếu đầu vào không hợp lệ
  if (!isValid) {
    googleLinkError.textContent = "Vui lòng nhập một liên kết hợp lệ của Google Meet(https://meet.google.com/..)";
    googleLinkInput.classList.add("invalid");
    googleLinkError.style.color = "red";
  } else {
    googleLinkError.textContent = "";
    googleLinkInput.classList.remove("invalid");
  }
});

//up anh
let uploadButton = document.getElementById("exampleFormControlFile1");
let chosenImage = document.getElementById("chosen-image");

uploadButton.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        chosenImage.setAttribute("src",reader.result);
    }
}

//xoa anh
var inputFile = document.getElementById("exampleFormControlFile1");
removeFun=()=>{
  chosenImage.src="/images/upload-img.jpg";
  inputFile.value = "";
}

//gia tien
$("input[data-type='currency']").on({
  keyup: function() {
    formatCurrency($(this));
  },
  blur: function() { 
    formatCurrency($(this), "blur");
  }
});

function formatNumber(n) {
return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function formatCurrency(input, blur) {
  var input_val = input.val();
  
  if (input_val === "") { return; }
  
  var original_len = input_val.length;

  var caret_pos = input.prop("selectionStart");
    
  if (input_val.indexOf(".") >= 0) {

    var decimal_pos = input_val.indexOf(".");

    var left_side = input_val.substring(0, decimal_pos);
    var right_side = input_val.substring(decimal_pos);

    left_side = formatNumber(left_side);

    right_side = formatNumber(right_side);
  
    if (blur === "blur") {
      right_side += "00";
    }
    
    right_side = right_side.substring(0, 2);

    // input_val = "$" + left_side + "." + right_side;

  } 
  else {
    input_val = formatNumber(input_val);
    input_val = input_val + " VND";
    
    // if (blur === "blur") {
    //   input_val += "";
    // }
  }
  input.val(input_val);
  var updated_len = input_val.length;
  caret_pos = updated_len - original_len + caret_pos;
  input[0].setSelectionRange(caret_pos, caret_pos);
}

// icons xoay
const arrowFlip = () => {
  let icon = document.getElementById("icons");
  let open = false;

  icon.addEventListener("click", function() {
    
    if (open) {
      icon.style.transform = "rotate(0deg)";
      icon.style.color = "#358cf0";
    } else {
      icon.style.transform = "rotate(-180deg)";
      icon.style.color = "black";
      
    }

    open = !open;
  });
};
arrowFlip();

const arrowFlip_1 = () => {
  let icon1 = document.getElementById("icons-1");
  let open1 = false;

  icon1.addEventListener("click", function() {
    
    if (open1) {
      icon1.style.transform = "rotate(0deg)";
      icon1.style.color = "#358cf0";
    } else {
      icon1.style.transform = "rotate(-180deg)";
      icon1.style.color = "black";
      
    }

    open1 = !open1;
  });
};
arrowFlip_1();

const arrowFlip_2 = () => {
  let icon2 = document.getElementById("icons-2");
  let open2 = false;

  icon2.addEventListener("click", function() {
    
    if (open2) {
      icon2.style.transform = "rotate(0deg)";
      icon2.style.color = "#358cf0";
    } else {
      icon2.style.transform = "rotate(-180deg)";
      icon2.style.color = "black";
      
    }

    open2 = !open2;
  });
};
arrowFlip_2();

//ten khoa hoc
let firstNameInput = document.getElementById("first-name-input");
let firstNameError = document.getElementById("first-name-error");
let emptyFirstNameError = document.getElementById("empty-first-name");

const textVerify = (text) => {
  const regex = /^[a-zA-Z]{3,}$/;
  return regex.test(text);
};

//ten khoa hoc
firstNameInput.addEventListener("input", () => {
  if (textVerify(firstNameInput.value)) {
    //If verification returns true
    firstNameError.classList.add("hide");
    validInput(firstNameInput);
  } else {
    //for false
    errorUpdate(firstNameInput, firstNameError);
    //empty checker
    emptyUpdate(firstNameInput, emptyFirstNameError, firstNameError);
  }
});


//them sua xoa khoa hoc
const form = document.getElementById('my-form');
const table = document.getElementById('my-table').getElementsByTagName('tbody')[0];
let data = [];

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
  

  
//   const timeStart = document.getElementById('time-start').value;
//   const timeEnd = document.getElementById('time-end').value;
//   const date = document.getElementById('date').value;
//   const slot = document.getElementById('slot').value;

//   const weekdays = [];
//   const weekdayCheckboxes = document.querySelectorAll('#weekdays input[type="checkbox"]');
//   weekdayCheckboxes.forEach((checkbox) => {
//   if (checkbox.checked) {
//   weekdays.push(checkbox.value);
//   }
//   });
  
//   const rowData = {

//   date,
//   timeStart,
//   timeEnd,
//   slot,
//   weekdays,
//   };
  
//   data.push(rowData);
//   renderTable();
//   form.reset();
//   });
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const timeStart = document.getElementById('time-start').value;
  const timeEnd = document.getElementById('time-end').value;
  const date = document.getElementById('date').value;
  const slot = document.getElementById('slot').value;
  const weekdays = [];
  const weekdayCheckboxes = document.querySelectorAll('#weekdays input[type="checkbox"]');
  weekdayCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      weekdays.push(checkbox.value);
    }
  });

  const rowData = {
    date,
    timeStart,
    timeEnd,
    slot,
    weekdays,
  };

  // Check for duplicates
const isDuplicate = data.some((row) => {
  const sameWeekday = row.weekdays.some((weekday) => rowData.weekdays.includes(weekday));
  const sameTime = rowData.timeStart === row.timeStart;   
  const sameDate = rowData.date === date;
  return sameWeekday && sameTime && sameDate;
});

if (isDuplicate) {
  alert('Không thể thêm dữ liệu vì bị trùng lặp với dữ liệu đã có!');
  return;
}

data.push(rowData);
renderTable();
form.reset();
});
  function renderTable() {
  table.innerHTML = '';
  data.forEach((rowData, index) => {
  const row = table.insertRow();

  row.insertCell().innerHTML = rowData.date;
  row.insertCell().innerHTML = rowData.timeStart;
  row.insertCell().innerHTML = rowData.timeEnd;
  row.insertCell().innerHTML = rowData.slot;
  row.insertCell().innerHTML = rowData.weekdays.join(', ');
  const editButton = document.createElement('button-edit');
editButton.innerHTML = 'Sửa';
editButton.addEventListener('click', () => {
  editRow(index);
});

const deleteButton = document.createElement('button-delete');
deleteButton.innerHTML = 'Xóa';
deleteButton.addEventListener('click', () => {
  deleteRow(index);
});

const actionCell = row.insertCell();
actionCell.appendChild(editButton);
actionCell.appendChild(deleteButton);
});
}

function editRow(index) {
const rowData = data[index];
document.getElementById('date').value = rowData.date;
document.getElementById('time-start').value = rowData.timeStart;
document.getElementById('time-end').value = rowData.timeEnd;
document.getElementById('slot').value = rowData.slot;


const weekdayCheckboxes = document.querySelectorAll('#weekdays input[type="checkbox"]');
weekdayCheckboxes.forEach((checkbox) => {
checkbox.checked = rowData.weekdays.includes(checkbox.value);
});

data.splice(index, 1);
renderTable();
}

function deleteRow(index) {
data.splice(index, 1);
renderTable();
}

//thoi gian 

var timePicker = document.getElementById("time-start");

var errorMessage = document.getElementById("error-messages");

function validateTimeInput() {
  var timeValue = timePicker.value;  
  var timeObject = new Date("2023-04-25T" + timeValue);
  
  if (timeObject.getHours() < 7 || timeObject.getHours() >= 19) {
    errorMessage.innerHTML = "Khung giờ cho phép là từ 7h sáng đến 7h tối.";
    timePicker.value = "";
  } else {
    errorMessage.innerHTML = "";
  }
}
timePicker.onchange = validateTimeInput;

// lon hon 2 h
var startTimeInput = document.getElementById("time-start");
var endTimeInput = document.getElementById("time-end");
var errorMessageDiv = document.getElementById("error-messages");

function checkEndTime() {
  var startTime = new Date("2000-01-01T" + startTimeInput.value + ":00");
  var endTime = new Date("2000-01-01T" + endTimeInput.value + ":00");
  var timeDiff = endTime.getTime() - startTime.getTime();
  var diffHours = timeDiff / (1000 * 60 * 60);

  if (diffHours < 2) {
    errorMessageDiv.textContent = "Thời gian kết thúc phải lớn hơn thời gian bắt đầu ít nhất 2 giờ đồng hồ!";
  } else {
    errorMessageDiv.textContent = "";
  }
}

startTimeInput.addEventListener("input", checkEndTime);
endTimeInput.addEventListener("input", checkEndTime);

//date
// var dateInput = document.getElementById("date");

// function checkDateInput() {
//   var inputDate = new Date(dateInput.value);
//   var todayDate = new Date();
//   todayDate.setDate(todayDate.getDate() + 1); // cong 1 ngay

//   if (inputDate <= todayDate) {
//     alert("Ngày phải lớn hơn ngày hiện tại một ngày!");
//     dateInput.value = todayDate.toISOString().slice(0, 10);
//   }
// }

// dateInput.addEventListener("change", checkDateInput);
var dateInput = document.getElementById("date");

function checkDateInput() {
  var inputDate = new Date(dateInput.value);
  var todayDate = new Date();

  if (inputDate < todayDate) {
    alert("Ngày phải lớn hơn hoặc bằng ngày hiện tại!");
    dateInput.value = todayDate.toISOString().slice(0, 10);
  }
}

dateInput.addEventListener("change", checkDateInput);


//gán ft
var inputElement = document.getElementById("first-name-input"); // Lấy thẻ input theo id
var h3Element = document.getElementById("h3-tag"); // Lấy thẻ h3 theo id

inputElement.addEventListener("input", function() { // Xử lý sự kiện "input" trên thẻ input
  h3Element.innerText = inputElement.value; // Gán giá trị của input vào nội dung của thẻ h3
});

//tags
const tagContainer = document.querySelector('.tag-container');
const tagInput = document.querySelector('.tag-input');
  
let tags = [];

function createTag(label) {
  const div = document.createElement('div');
  div.setAttribute('class', 'tag');
  const span = document.createElement('span');
  span.innerHTML = label;
  const closeBtn = document.createElement('i');
  closeBtn.setAttribute('class', 'fa fa-times');
  closeBtn.setAttribute('data-item', label);
  div.appendChild(span);
  div.appendChild(closeBtn);
  return div;
}

function reset() {
  document.querySelectorAll('.tag').forEach(function(tag) {
    tag.parentElement.removeChild(tag);
  });
}

function addTags() {
  reset();
  tags.slice().reverse().forEach(function(tag) {
    const input = createTag(tag);
    tagContainer.prepend(input);
  });
}
  
  tagInput.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
      tags.push(tagInput.value);
      addTags();     
      tagInput.value = '';
    }
  });
  tagInput.addEventListener('keyup', function(e) {
    if (e.key === 'Enter' && tagInput.value.trim() !== '') {
      tags.push(tagInput.value.trim());
      addTags();     
      tagInput.value = '';
    }
});

tagInput.addEventListener('change', function() {
    if (tagInput.value.trim() !== '') {
      tags.push(tagInput.value.trim());
      addTags();     
      tagInput.value = '';
    }
});
  
  document.addEventListener('click', function(e) {
    if (e.target.tagName === 'I') {
      const tagLabel = e.target.getAttribute('data-item');
      const index = tags.indexOf(tagLabel);
      tags = [...tags.slice(0, index), ...tags.slice(index+1)];
      addTags();
    }
  });