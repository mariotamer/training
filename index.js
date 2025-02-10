function test() {
  alert("Ayre bl dares");
}

function RenderStudents() {
  let ddl_students = document.getElementById('ddl_students');
  fetch("https://s6tr-api.onrender.com/Students")
    .then(response => response.json())
    .then(data => {
        data.forEach(student => {
            let option = document.createElement('option');
            option.innerHTML = student.name;
            ddl_students.appendChild(option);
        });
    });
}

RenderStudents();